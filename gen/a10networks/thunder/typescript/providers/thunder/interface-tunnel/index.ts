// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable; 'disable': Disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#action InterfaceTunnel#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#id InterfaceTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tunnel interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ifnum InterfaceTunnel#ifnum}
  */
  readonly ifnum: number;
  /**
  * Configure Load Interval (Seconds (5-300, Multiple of 5), default 300)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#load_interval InterfaceTunnel#load_interval}
  */
  readonly loadInterval?: number;
  /**
  * Interface mtu (Interface MTU, default 1 (min MTU is 1280 for IPv6))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#mtu InterfaceTunnel#mtu}
  */
  readonly mtu?: number;
  /**
  * Name for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#name InterfaceTunnel#name}
  */
  readonly name?: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#packet_capture_template InterfaceTunnel#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Configure security level for interface. 100 - Most Secure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#security_level InterfaceTunnel#security_level}
  */
  readonly securityLevel?: number;
  /**
  * Speed in Gbit/Sec (Default 10 Gbps)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#speed InterfaceTunnel#speed}
  */
  readonly speed?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#user_tag InterfaceTunnel#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#uuid InterfaceTunnel#uuid}
  */
  readonly uuid?: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ip InterfaceTunnel#ip}
  */
  readonly ip?: InterfaceTunnelIp;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ipv6 InterfaceTunnel#ipv6}
  */
  readonly ipv6?: InterfaceTunnelIpv6;
  /**
  * lw_4o6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#lw_4o6 InterfaceTunnel#lw_4o6}
  */
  readonly lw4O6?: InterfaceTunnelLw4O6;
  /**
  * map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#map InterfaceTunnel#map}
  */
  readonly map?: InterfaceTunnelMap;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#sampling_enable InterfaceTunnel#sampling_enable}
  */
  readonly samplingEnable?: InterfaceTunnelSamplingEnable[] | cdktf.IResolvable;
}
export interface InterfaceTunnelIpAddressIpCfg {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ipv4_address InterfaceTunnel#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ipv4_netmask InterfaceTunnel#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
}

export function interfaceTunnelIpAddressIpCfgToTerraform(struct?: InterfaceTunnelIpAddressIpCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
  }
}


export function interfaceTunnelIpAddressIpCfgToHclTerraform(struct?: InterfaceTunnelIpAddressIpCfg | cdktf.IResolvable): any {
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

export class InterfaceTunnelIpAddressIpCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpAddressIpCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceTunnelIpAddressIpCfg | cdktf.IResolvable | undefined) {
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

export class InterfaceTunnelIpAddressIpCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpAddressIpCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpAddressIpCfgOutputReference {
    return new InterfaceTunnelIpAddressIpCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpAddress {
  /**
  * Use DHCP to configure IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#dhcp InterfaceTunnel#dhcp}
  */
  readonly dhcp?: number;
  /**
  * ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ip_cfg InterfaceTunnel#ip_cfg}
  */
  readonly ipCfg?: InterfaceTunnelIpAddressIpCfg[] | cdktf.IResolvable;
}

export function interfaceTunnelIpAddressToTerraform(struct?: InterfaceTunnelIpAddressOutputReference | InterfaceTunnelIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.numberToTerraform(struct!.dhcp),
    ip_cfg: cdktf.listMapper(interfaceTunnelIpAddressIpCfgToTerraform, true)(struct!.ipCfg),
  }
}


export function interfaceTunnelIpAddressToHclTerraform(struct?: InterfaceTunnelIpAddressOutputReference | InterfaceTunnelIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.numberToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_cfg: {
      value: cdktf.listMapperHcl(interfaceTunnelIpAddressIpCfgToHclTerraform, true)(struct!.ipCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpAddressIpCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._ipCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCfg = this._ipCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcp = undefined;
      this._ipCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcp = value.dhcp;
      this._ipCfg.internalValue = value.ipCfg;
    }
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

  // ip_cfg - computed: false, optional: true, required: false
  private _ipCfg = new InterfaceTunnelIpAddressIpCfgList(this, "ip_cfg", false);
  public get ipCfg() {
    return this._ipCfg;
  }
  public putIpCfg(value: InterfaceTunnelIpAddressIpCfg[] | cdktf.IResolvable) {
    this._ipCfg.internalValue = value;
  }
  public resetIpCfg() {
    this._ipCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCfgInput() {
    return this._ipCfg.internalValue;
  }
}
export interface InterfaceTunnelIpOspfOspfGlobalAuthenticationCfg {
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#authentication InterfaceTunnel#authentication}
  */
  readonly authentication?: number;
  /**
  * 'message-digest': Use message-digest authentication; 'null': Use no authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#value InterfaceTunnel#value}
  */
  readonly value?: string;
}

export function interfaceTunnelIpOspfOspfGlobalAuthenticationCfgToTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalAuthenticationCfgOutputReference | InterfaceTunnelIpOspfOspfGlobalAuthenticationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.numberToTerraform(struct!.authentication),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function interfaceTunnelIpOspfOspfGlobalAuthenticationCfgToHclTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalAuthenticationCfgOutputReference | InterfaceTunnelIpOspfOspfGlobalAuthenticationCfg): any {
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

export class InterfaceTunnelIpOspfOspfGlobalAuthenticationCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpOspfOspfGlobalAuthenticationCfg | undefined {
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

  public set internalValue(value: InterfaceTunnelIpOspfOspfGlobalAuthenticationCfg | undefined) {
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
export interface InterfaceTunnelIpOspfOspfGlobalBfdCfg {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#bfd InterfaceTunnel#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#disable InterfaceTunnel#disable}
  */
  readonly disable?: number;
}

export function interfaceTunnelIpOspfOspfGlobalBfdCfgToTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalBfdCfgOutputReference | InterfaceTunnelIpOspfOspfGlobalBfdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
  }
}


export function interfaceTunnelIpOspfOspfGlobalBfdCfgToHclTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalBfdCfgOutputReference | InterfaceTunnelIpOspfOspfGlobalBfdCfg): any {
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

export class InterfaceTunnelIpOspfOspfGlobalBfdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpOspfOspfGlobalBfdCfg | undefined {
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

  public set internalValue(value: InterfaceTunnelIpOspfOspfGlobalBfdCfg | undefined) {
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
export interface InterfaceTunnelIpOspfOspfGlobalDatabaseFilterCfg {
  /**
  * 'all': Filter all LSA;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#database_filter InterfaceTunnel#database_filter}
  */
  readonly databaseFilter?: string;
  /**
  * Outgoing LSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#out InterfaceTunnel#out}
  */
  readonly out?: number;
}

export function interfaceTunnelIpOspfOspfGlobalDatabaseFilterCfgToTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalDatabaseFilterCfgOutputReference | InterfaceTunnelIpOspfOspfGlobalDatabaseFilterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_filter: cdktf.stringToTerraform(struct!.databaseFilter),
    out: cdktf.numberToTerraform(struct!.out),
  }
}


export function interfaceTunnelIpOspfOspfGlobalDatabaseFilterCfgToHclTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalDatabaseFilterCfgOutputReference | InterfaceTunnelIpOspfOspfGlobalDatabaseFilterCfg): any {
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

export class InterfaceTunnelIpOspfOspfGlobalDatabaseFilterCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpOspfOspfGlobalDatabaseFilterCfg | undefined {
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

  public set internalValue(value: InterfaceTunnelIpOspfOspfGlobalDatabaseFilterCfg | undefined) {
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
export interface InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5 {
  /**
  * The OSPF password (1-16)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#md5_value InterfaceTunnel#md5_value}
  */
  readonly md5Value?: string;
}

export function interfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5ToTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5OutputReference | InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5_value: cdktf.stringToTerraform(struct!.md5Value),
  }
}


export function interfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5ToHclTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5OutputReference | InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5): any {
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

export class InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Value = this._md5Value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5 | undefined) {
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
export interface InterfaceTunnelIpOspfOspfGlobalMessageDigestCfg {
  /**
  * Message digest authentication password (key) (Key id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#message_digest_key InterfaceTunnel#message_digest_key}
  */
  readonly messageDigestKey?: number;
  /**
  * md5 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#md5 InterfaceTunnel#md5}
  */
  readonly md5?: InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5;
}

export function interfaceTunnelIpOspfOspfGlobalMessageDigestCfgToTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_digest_key: cdktf.numberToTerraform(struct!.messageDigestKey),
    md5: interfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5ToTerraform(struct!.md5),
  }
}


export function interfaceTunnelIpOspfOspfGlobalMessageDigestCfgToHclTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable): any {
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
      value: interfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceTunnelIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable | undefined) {
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
  private _md5 = new InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgMd5) {
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

export class InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpOspfOspfGlobalMessageDigestCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgOutputReference {
    return new InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpOspfOspfGlobalNetwork {
  /**
  * Specify OSPF broadcast multi-access network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#broadcast InterfaceTunnel#broadcast}
  */
  readonly broadcast?: number;
  /**
  * Specify OSPF NBMA network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#non_broadcast InterfaceTunnel#non_broadcast}
  */
  readonly nonBroadcast?: number;
  /**
  * Specify non-broadcast point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#p2mp_nbma InterfaceTunnel#p2mp_nbma}
  */
  readonly p2MpNbma?: number;
  /**
  * Specify OSPF point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#point_to_multipoint InterfaceTunnel#point_to_multipoint}
  */
  readonly pointToMultipoint?: number;
  /**
  * Specify OSPF point-to-point network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#point_to_point InterfaceTunnel#point_to_point}
  */
  readonly pointToPoint?: number;
}

export function interfaceTunnelIpOspfOspfGlobalNetworkToTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalNetworkOutputReference | InterfaceTunnelIpOspfOspfGlobalNetwork): any {
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


export function interfaceTunnelIpOspfOspfGlobalNetworkToHclTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalNetworkOutputReference | InterfaceTunnelIpOspfOspfGlobalNetwork): any {
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

export class InterfaceTunnelIpOspfOspfGlobalNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpOspfOspfGlobalNetwork | undefined {
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

  public set internalValue(value: InterfaceTunnelIpOspfOspfGlobalNetwork | undefined) {
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
export interface InterfaceTunnelIpOspfOspfGlobal {
  /**
  * Authentication password (key) (The OSPF password (key))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#authentication_key InterfaceTunnel#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#cost InterfaceTunnel#cost}
  */
  readonly cost?: number;
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#dead_interval InterfaceTunnel#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * 'all': All functionality;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#disable InterfaceTunnel#disable}
  */
  readonly disable?: string;
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#hello_interval InterfaceTunnel#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * OSPF interface MTU (MTU size)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#mtu InterfaceTunnel#mtu}
  */
  readonly mtu?: number;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#mtu_ignore InterfaceTunnel#mtu_ignore}
  */
  readonly mtuIgnore?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#priority InterfaceTunnel#priority}
  */
  readonly priority?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#retransmit_interval InterfaceTunnel#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#transmit_delay InterfaceTunnel#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#uuid InterfaceTunnel#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#authentication_cfg InterfaceTunnel#authentication_cfg}
  */
  readonly authenticationCfg?: InterfaceTunnelIpOspfOspfGlobalAuthenticationCfg;
  /**
  * bfd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#bfd_cfg InterfaceTunnel#bfd_cfg}
  */
  readonly bfdCfg?: InterfaceTunnelIpOspfOspfGlobalBfdCfg;
  /**
  * database_filter_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#database_filter_cfg InterfaceTunnel#database_filter_cfg}
  */
  readonly databaseFilterCfg?: InterfaceTunnelIpOspfOspfGlobalDatabaseFilterCfg;
  /**
  * message_digest_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#message_digest_cfg InterfaceTunnel#message_digest_cfg}
  */
  readonly messageDigestCfg?: InterfaceTunnelIpOspfOspfGlobalMessageDigestCfg[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#network InterfaceTunnel#network}
  */
  readonly network?: InterfaceTunnelIpOspfOspfGlobalNetwork;
}

export function interfaceTunnelIpOspfOspfGlobalToTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalOutputReference | InterfaceTunnelIpOspfOspfGlobal): any {
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
    authentication_cfg: interfaceTunnelIpOspfOspfGlobalAuthenticationCfgToTerraform(struct!.authenticationCfg),
    bfd_cfg: interfaceTunnelIpOspfOspfGlobalBfdCfgToTerraform(struct!.bfdCfg),
    database_filter_cfg: interfaceTunnelIpOspfOspfGlobalDatabaseFilterCfgToTerraform(struct!.databaseFilterCfg),
    message_digest_cfg: cdktf.listMapper(interfaceTunnelIpOspfOspfGlobalMessageDigestCfgToTerraform, true)(struct!.messageDigestCfg),
    network: interfaceTunnelIpOspfOspfGlobalNetworkToTerraform(struct!.network),
  }
}


export function interfaceTunnelIpOspfOspfGlobalToHclTerraform(struct?: InterfaceTunnelIpOspfOspfGlobalOutputReference | InterfaceTunnelIpOspfOspfGlobal): any {
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
      value: interfaceTunnelIpOspfOspfGlobalAuthenticationCfgToHclTerraform(struct!.authenticationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpOspfOspfGlobalAuthenticationCfgList",
    },
    bfd_cfg: {
      value: interfaceTunnelIpOspfOspfGlobalBfdCfgToHclTerraform(struct!.bfdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpOspfOspfGlobalBfdCfgList",
    },
    database_filter_cfg: {
      value: interfaceTunnelIpOspfOspfGlobalDatabaseFilterCfgToHclTerraform(struct!.databaseFilterCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpOspfOspfGlobalDatabaseFilterCfgList",
    },
    message_digest_cfg: {
      value: cdktf.listMapperHcl(interfaceTunnelIpOspfOspfGlobalMessageDigestCfgToHclTerraform, true)(struct!.messageDigestCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgList",
    },
    network: {
      value: interfaceTunnelIpOspfOspfGlobalNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpOspfOspfGlobalNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpOspfOspfGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpOspfOspfGlobal | undefined {
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

  public set internalValue(value: InterfaceTunnelIpOspfOspfGlobal | undefined) {
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
  private _authenticationCfg = new InterfaceTunnelIpOspfOspfGlobalAuthenticationCfgOutputReference(this, "authentication_cfg");
  public get authenticationCfg() {
    return this._authenticationCfg;
  }
  public putAuthenticationCfg(value: InterfaceTunnelIpOspfOspfGlobalAuthenticationCfg) {
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
  private _bfdCfg = new InterfaceTunnelIpOspfOspfGlobalBfdCfgOutputReference(this, "bfd_cfg");
  public get bfdCfg() {
    return this._bfdCfg;
  }
  public putBfdCfg(value: InterfaceTunnelIpOspfOspfGlobalBfdCfg) {
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
  private _databaseFilterCfg = new InterfaceTunnelIpOspfOspfGlobalDatabaseFilterCfgOutputReference(this, "database_filter_cfg");
  public get databaseFilterCfg() {
    return this._databaseFilterCfg;
  }
  public putDatabaseFilterCfg(value: InterfaceTunnelIpOspfOspfGlobalDatabaseFilterCfg) {
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
  private _messageDigestCfg = new InterfaceTunnelIpOspfOspfGlobalMessageDigestCfgList(this, "message_digest_cfg", false);
  public get messageDigestCfg() {
    return this._messageDigestCfg;
  }
  public putMessageDigestCfg(value: InterfaceTunnelIpOspfOspfGlobalMessageDigestCfg[] | cdktf.IResolvable) {
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
  private _network = new InterfaceTunnelIpOspfOspfGlobalNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: InterfaceTunnelIpOspfOspfGlobalNetwork) {
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
export interface InterfaceTunnelIpOspfOspfIpListMessageDigestCfg {
  /**
  * The OSPF password (1-16)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#md5_value InterfaceTunnel#md5_value}
  */
  readonly md5Value?: string;
  /**
  * Message digest authentication password (key) (Key id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#message_digest_key InterfaceTunnel#message_digest_key}
  */
  readonly messageDigestKey?: number;
}

export function interfaceTunnelIpOspfOspfIpListMessageDigestCfgToTerraform(struct?: InterfaceTunnelIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5_value: cdktf.stringToTerraform(struct!.md5Value),
    message_digest_key: cdktf.numberToTerraform(struct!.messageDigestKey),
  }
}


export function interfaceTunnelIpOspfOspfIpListMessageDigestCfgToHclTerraform(struct?: InterfaceTunnelIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable): any {
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

export class InterfaceTunnelIpOspfOspfIpListMessageDigestCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceTunnelIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable | undefined) {
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

export class InterfaceTunnelIpOspfOspfIpListMessageDigestCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpOspfOspfIpListMessageDigestCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpOspfOspfIpListMessageDigestCfgOutputReference {
    return new InterfaceTunnelIpOspfOspfIpListMessageDigestCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpOspfOspfIpListStruct {
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#authentication InterfaceTunnel#authentication}
  */
  readonly authentication?: number;
  /**
  * Authentication password (key) (The OSPF password (key))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#authentication_key InterfaceTunnel#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#cost InterfaceTunnel#cost}
  */
  readonly cost?: number;
  /**
  * 'all': Filter all LSA;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#database_filter InterfaceTunnel#database_filter}
  */
  readonly databaseFilter?: string;
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#dead_interval InterfaceTunnel#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#hello_interval InterfaceTunnel#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Address of interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ip_addr InterfaceTunnel#ip_addr}
  */
  readonly ipAddr: string;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#mtu_ignore InterfaceTunnel#mtu_ignore}
  */
  readonly mtuIgnore?: number;
  /**
  * Outgoing LSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#out InterfaceTunnel#out}
  */
  readonly out?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#priority InterfaceTunnel#priority}
  */
  readonly priority?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#retransmit_interval InterfaceTunnel#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#transmit_delay InterfaceTunnel#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#uuid InterfaceTunnel#uuid}
  */
  readonly uuid?: string;
  /**
  * 'message-digest': Use message-digest authentication; 'null': Use no authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#value InterfaceTunnel#value}
  */
  readonly value?: string;
  /**
  * message_digest_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#message_digest_cfg InterfaceTunnel#message_digest_cfg}
  */
  readonly messageDigestCfg?: InterfaceTunnelIpOspfOspfIpListMessageDigestCfg[] | cdktf.IResolvable;
}

export function interfaceTunnelIpOspfOspfIpListStructToTerraform(struct?: InterfaceTunnelIpOspfOspfIpListStruct | cdktf.IResolvable): any {
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
    message_digest_cfg: cdktf.listMapper(interfaceTunnelIpOspfOspfIpListMessageDigestCfgToTerraform, true)(struct!.messageDigestCfg),
  }
}


export function interfaceTunnelIpOspfOspfIpListStructToHclTerraform(struct?: InterfaceTunnelIpOspfOspfIpListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(interfaceTunnelIpOspfOspfIpListMessageDigestCfgToHclTerraform, true)(struct!.messageDigestCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpOspfOspfIpListMessageDigestCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpOspfOspfIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpOspfOspfIpListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceTunnelIpOspfOspfIpListStruct | cdktf.IResolvable | undefined) {
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
  private _messageDigestCfg = new InterfaceTunnelIpOspfOspfIpListMessageDigestCfgList(this, "message_digest_cfg", false);
  public get messageDigestCfg() {
    return this._messageDigestCfg;
  }
  public putMessageDigestCfg(value: InterfaceTunnelIpOspfOspfIpListMessageDigestCfg[] | cdktf.IResolvable) {
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

export class InterfaceTunnelIpOspfOspfIpListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpOspfOspfIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpOspfOspfIpListStructOutputReference {
    return new InterfaceTunnelIpOspfOspfIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpOspf {
  /**
  * ospf_global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ospf_global InterfaceTunnel#ospf_global}
  */
  readonly ospfGlobal?: InterfaceTunnelIpOspfOspfGlobal;
  /**
  * ospf_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ospf_ip_list InterfaceTunnel#ospf_ip_list}
  */
  readonly ospfIpList?: InterfaceTunnelIpOspfOspfIpListStruct[] | cdktf.IResolvable;
}

export function interfaceTunnelIpOspfToTerraform(struct?: InterfaceTunnelIpOspfOutputReference | InterfaceTunnelIpOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ospf_global: interfaceTunnelIpOspfOspfGlobalToTerraform(struct!.ospfGlobal),
    ospf_ip_list: cdktf.listMapper(interfaceTunnelIpOspfOspfIpListStructToTerraform, true)(struct!.ospfIpList),
  }
}


export function interfaceTunnelIpOspfToHclTerraform(struct?: InterfaceTunnelIpOspfOutputReference | InterfaceTunnelIpOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ospf_global: {
      value: interfaceTunnelIpOspfOspfGlobalToHclTerraform(struct!.ospfGlobal),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpOspfOspfGlobalList",
    },
    ospf_ip_list: {
      value: cdktf.listMapperHcl(interfaceTunnelIpOspfOspfIpListStructToHclTerraform, true)(struct!.ospfIpList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpOspfOspfIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpOspf | undefined {
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

  public set internalValue(value: InterfaceTunnelIpOspf | undefined) {
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
  private _ospfGlobal = new InterfaceTunnelIpOspfOspfGlobalOutputReference(this, "ospf_global");
  public get ospfGlobal() {
    return this._ospfGlobal;
  }
  public putOspfGlobal(value: InterfaceTunnelIpOspfOspfGlobal) {
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
  private _ospfIpList = new InterfaceTunnelIpOspfOspfIpListStructList(this, "ospf_ip_list", false);
  public get ospfIpList() {
    return this._ospfIpList;
  }
  public putOspfIpList(value: InterfaceTunnelIpOspfOspfIpListStruct[] | cdktf.IResolvable) {
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
export interface InterfaceTunnelIpRipAuthenticationKeyChain {
  /**
  * Authentication key-chain (Name of key-chain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#key_chain InterfaceTunnel#key_chain}
  */
  readonly keyChain?: string;
}

export function interfaceTunnelIpRipAuthenticationKeyChainToTerraform(struct?: InterfaceTunnelIpRipAuthenticationKeyChainOutputReference | InterfaceTunnelIpRipAuthenticationKeyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: cdktf.stringToTerraform(struct!.keyChain),
  }
}


export function interfaceTunnelIpRipAuthenticationKeyChainToHclTerraform(struct?: InterfaceTunnelIpRipAuthenticationKeyChainOutputReference | InterfaceTunnelIpRipAuthenticationKeyChain): any {
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

export class InterfaceTunnelIpRipAuthenticationKeyChainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpRipAuthenticationKeyChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpRipAuthenticationKeyChain | undefined) {
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
export interface InterfaceTunnelIpRipAuthenticationMode {
  /**
  * 'md5': Keyed message digest; 'text': Clear text authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#mode InterfaceTunnel#mode}
  */
  readonly mode?: string;
}

export function interfaceTunnelIpRipAuthenticationModeToTerraform(struct?: InterfaceTunnelIpRipAuthenticationModeOutputReference | InterfaceTunnelIpRipAuthenticationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function interfaceTunnelIpRipAuthenticationModeToHclTerraform(struct?: InterfaceTunnelIpRipAuthenticationModeOutputReference | InterfaceTunnelIpRipAuthenticationMode): any {
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

export class InterfaceTunnelIpRipAuthenticationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpRipAuthenticationMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpRipAuthenticationMode | undefined) {
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
export interface InterfaceTunnelIpRipAuthenticationStr {
  /**
  * The RIP authentication string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#string InterfaceTunnel#string}
  */
  readonly string?: string;
}

export function interfaceTunnelIpRipAuthenticationStrToTerraform(struct?: InterfaceTunnelIpRipAuthenticationStrOutputReference | InterfaceTunnelIpRipAuthenticationStr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function interfaceTunnelIpRipAuthenticationStrToHclTerraform(struct?: InterfaceTunnelIpRipAuthenticationStrOutputReference | InterfaceTunnelIpRipAuthenticationStr): any {
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

export class InterfaceTunnelIpRipAuthenticationStrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpRipAuthenticationStr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpRipAuthenticationStr | undefined) {
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
export interface InterfaceTunnelIpRipAuthentication {
  /**
  * key_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#key_chain InterfaceTunnel#key_chain}
  */
  readonly keyChain?: InterfaceTunnelIpRipAuthenticationKeyChain;
  /**
  * mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#mode InterfaceTunnel#mode}
  */
  readonly mode?: InterfaceTunnelIpRipAuthenticationMode;
  /**
  * str block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#str InterfaceTunnel#str}
  */
  readonly str?: InterfaceTunnelIpRipAuthenticationStr;
}

export function interfaceTunnelIpRipAuthenticationToTerraform(struct?: InterfaceTunnelIpRipAuthenticationOutputReference | InterfaceTunnelIpRipAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: interfaceTunnelIpRipAuthenticationKeyChainToTerraform(struct!.keyChain),
    mode: interfaceTunnelIpRipAuthenticationModeToTerraform(struct!.mode),
    str: interfaceTunnelIpRipAuthenticationStrToTerraform(struct!.str),
  }
}


export function interfaceTunnelIpRipAuthenticationToHclTerraform(struct?: InterfaceTunnelIpRipAuthenticationOutputReference | InterfaceTunnelIpRipAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain: {
      value: interfaceTunnelIpRipAuthenticationKeyChainToHclTerraform(struct!.keyChain),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpRipAuthenticationKeyChainList",
    },
    mode: {
      value: interfaceTunnelIpRipAuthenticationModeToHclTerraform(struct!.mode),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpRipAuthenticationModeList",
    },
    str: {
      value: interfaceTunnelIpRipAuthenticationStrToHclTerraform(struct!.str),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpRipAuthenticationStrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpRipAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpRipAuthentication | undefined {
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

  public set internalValue(value: InterfaceTunnelIpRipAuthentication | undefined) {
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
  private _keyChain = new InterfaceTunnelIpRipAuthenticationKeyChainOutputReference(this, "key_chain");
  public get keyChain() {
    return this._keyChain;
  }
  public putKeyChain(value: InterfaceTunnelIpRipAuthenticationKeyChain) {
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
  private _mode = new InterfaceTunnelIpRipAuthenticationModeOutputReference(this, "mode");
  public get mode() {
    return this._mode;
  }
  public putMode(value: InterfaceTunnelIpRipAuthenticationMode) {
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
  private _str = new InterfaceTunnelIpRipAuthenticationStrOutputReference(this, "str");
  public get str() {
    return this._str;
  }
  public putStr(value: InterfaceTunnelIpRipAuthenticationStr) {
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
export interface InterfaceTunnelIpRipReceiveCfg {
  /**
  * Advertisement reception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#receive InterfaceTunnel#receive}
  */
  readonly receive?: number;
  /**
  * '2': RIP version 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#version InterfaceTunnel#version}
  */
  readonly version?: string;
}

export function interfaceTunnelIpRipReceiveCfgToTerraform(struct?: InterfaceTunnelIpRipReceiveCfgOutputReference | InterfaceTunnelIpRipReceiveCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.numberToTerraform(struct!.receive),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function interfaceTunnelIpRipReceiveCfgToHclTerraform(struct?: InterfaceTunnelIpRipReceiveCfgOutputReference | InterfaceTunnelIpRipReceiveCfg): any {
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

export class InterfaceTunnelIpRipReceiveCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpRipReceiveCfg | undefined {
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

  public set internalValue(value: InterfaceTunnelIpRipReceiveCfg | undefined) {
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
export interface InterfaceTunnelIpRipSendCfg {
  /**
  * Advertisement transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#send InterfaceTunnel#send}
  */
  readonly send?: number;
  /**
  * '2': RIP version 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#version InterfaceTunnel#version}
  */
  readonly version?: string;
}

export function interfaceTunnelIpRipSendCfgToTerraform(struct?: InterfaceTunnelIpRipSendCfgOutputReference | InterfaceTunnelIpRipSendCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send: cdktf.numberToTerraform(struct!.send),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function interfaceTunnelIpRipSendCfgToHclTerraform(struct?: InterfaceTunnelIpRipSendCfgOutputReference | InterfaceTunnelIpRipSendCfg): any {
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

export class InterfaceTunnelIpRipSendCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpRipSendCfg | undefined {
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

  public set internalValue(value: InterfaceTunnelIpRipSendCfg | undefined) {
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
export interface InterfaceTunnelIpRipSplitHorizonCfg {
  /**
  * 'poisoned': Perform split horizon with poisoned reverse; 'disable': Disable split horizon; 'enable': Perform split horizon without poisoned reverse;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#state InterfaceTunnel#state}
  */
  readonly state?: string;
}

export function interfaceTunnelIpRipSplitHorizonCfgToTerraform(struct?: InterfaceTunnelIpRipSplitHorizonCfgOutputReference | InterfaceTunnelIpRipSplitHorizonCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function interfaceTunnelIpRipSplitHorizonCfgToHclTerraform(struct?: InterfaceTunnelIpRipSplitHorizonCfgOutputReference | InterfaceTunnelIpRipSplitHorizonCfg): any {
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

export class InterfaceTunnelIpRipSplitHorizonCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpRipSplitHorizonCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpRipSplitHorizonCfg | undefined) {
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
export interface InterfaceTunnelIpRip {
  /**
  * Enable receiving packet through the specified interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#receive_packet InterfaceTunnel#receive_packet}
  */
  readonly receivePacket?: number;
  /**
  * Enable sending packets through the specified interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#send_packet InterfaceTunnel#send_packet}
  */
  readonly sendPacket?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#uuid InterfaceTunnel#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#authentication InterfaceTunnel#authentication}
  */
  readonly authentication?: InterfaceTunnelIpRipAuthentication;
  /**
  * receive_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#receive_cfg InterfaceTunnel#receive_cfg}
  */
  readonly receiveCfg?: InterfaceTunnelIpRipReceiveCfg;
  /**
  * send_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#send_cfg InterfaceTunnel#send_cfg}
  */
  readonly sendCfg?: InterfaceTunnelIpRipSendCfg;
  /**
  * split_horizon_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#split_horizon_cfg InterfaceTunnel#split_horizon_cfg}
  */
  readonly splitHorizonCfg?: InterfaceTunnelIpRipSplitHorizonCfg;
}

export function interfaceTunnelIpRipToTerraform(struct?: InterfaceTunnelIpRipOutputReference | InterfaceTunnelIpRip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive_packet: cdktf.numberToTerraform(struct!.receivePacket),
    send_packet: cdktf.numberToTerraform(struct!.sendPacket),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication: interfaceTunnelIpRipAuthenticationToTerraform(struct!.authentication),
    receive_cfg: interfaceTunnelIpRipReceiveCfgToTerraform(struct!.receiveCfg),
    send_cfg: interfaceTunnelIpRipSendCfgToTerraform(struct!.sendCfg),
    split_horizon_cfg: interfaceTunnelIpRipSplitHorizonCfgToTerraform(struct!.splitHorizonCfg),
  }
}


export function interfaceTunnelIpRipToHclTerraform(struct?: InterfaceTunnelIpRipOutputReference | InterfaceTunnelIpRip): any {
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
      value: interfaceTunnelIpRipAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpRipAuthenticationList",
    },
    receive_cfg: {
      value: interfaceTunnelIpRipReceiveCfgToHclTerraform(struct!.receiveCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpRipReceiveCfgList",
    },
    send_cfg: {
      value: interfaceTunnelIpRipSendCfgToHclTerraform(struct!.sendCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpRipSendCfgList",
    },
    split_horizon_cfg: {
      value: interfaceTunnelIpRipSplitHorizonCfgToHclTerraform(struct!.splitHorizonCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpRipSplitHorizonCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpRipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpRip | undefined {
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

  public set internalValue(value: InterfaceTunnelIpRip | undefined) {
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
  private _authentication = new InterfaceTunnelIpRipAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceTunnelIpRipAuthentication) {
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
  private _receiveCfg = new InterfaceTunnelIpRipReceiveCfgOutputReference(this, "receive_cfg");
  public get receiveCfg() {
    return this._receiveCfg;
  }
  public putReceiveCfg(value: InterfaceTunnelIpRipReceiveCfg) {
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
  private _sendCfg = new InterfaceTunnelIpRipSendCfgOutputReference(this, "send_cfg");
  public get sendCfg() {
    return this._sendCfg;
  }
  public putSendCfg(value: InterfaceTunnelIpRipSendCfg) {
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
  private _splitHorizonCfg = new InterfaceTunnelIpRipSplitHorizonCfgOutputReference(this, "split_horizon_cfg");
  public get splitHorizonCfg() {
    return this._splitHorizonCfg;
  }
  public putSplitHorizonCfg(value: InterfaceTunnelIpRipSplitHorizonCfg) {
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
export interface InterfaceTunnelIp {
  /**
  * Enable Membership Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#generate_membership_query InterfaceTunnel#generate_membership_query}
  */
  readonly generateMembershipQuery?: number;
  /**
  * 1 - 255 (Default is 125)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#generate_membership_query_val InterfaceTunnel#generate_membership_query_val}
  */
  readonly generateMembershipQueryVal?: number;
  /**
  * Configure interface as inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#inside InterfaceTunnel#inside}
  */
  readonly inside?: number;
  /**
  * Max Response Time (Default is 100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#max_resp_time InterfaceTunnel#max_resp_time}
  */
  readonly maxRespTime?: number;
  /**
  * Configure interface as outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#outside InterfaceTunnel#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#uuid InterfaceTunnel#uuid}
  */
  readonly uuid?: string;
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#address InterfaceTunnel#address}
  */
  readonly address?: InterfaceTunnelIpAddress;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ospf InterfaceTunnel#ospf}
  */
  readonly ospf?: InterfaceTunnelIpOspf;
  /**
  * rip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#rip InterfaceTunnel#rip}
  */
  readonly rip?: InterfaceTunnelIpRip;
}

export function interfaceTunnelIpToTerraform(struct?: InterfaceTunnelIpOutputReference | InterfaceTunnelIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generate_membership_query: cdktf.numberToTerraform(struct!.generateMembershipQuery),
    generate_membership_query_val: cdktf.numberToTerraform(struct!.generateMembershipQueryVal),
    inside: cdktf.numberToTerraform(struct!.inside),
    max_resp_time: cdktf.numberToTerraform(struct!.maxRespTime),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    address: interfaceTunnelIpAddressToTerraform(struct!.address),
    ospf: interfaceTunnelIpOspfToTerraform(struct!.ospf),
    rip: interfaceTunnelIpRipToTerraform(struct!.rip),
  }
}


export function interfaceTunnelIpToHclTerraform(struct?: InterfaceTunnelIpOutputReference | InterfaceTunnelIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generate_membership_query: {
      value: cdktf.numberToHclTerraform(struct!.generateMembershipQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    generate_membership_query_val: {
      value: cdktf.numberToHclTerraform(struct!.generateMembershipQueryVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_resp_time: {
      value: cdktf.numberToHclTerraform(struct!.maxRespTime),
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
    address: {
      value: interfaceTunnelIpAddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpAddressList",
    },
    ospf: {
      value: interfaceTunnelIpOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpOspfList",
    },
    rip: {
      value: interfaceTunnelIpRipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpRipList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generateMembershipQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateMembershipQuery = this._generateMembershipQuery;
    }
    if (this._generateMembershipQueryVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateMembershipQueryVal = this._generateMembershipQueryVal;
    }
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._maxRespTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRespTime = this._maxRespTime;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._rip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generateMembershipQuery = undefined;
      this._generateMembershipQueryVal = undefined;
      this._inside = undefined;
      this._maxRespTime = undefined;
      this._outside = undefined;
      this._uuid = undefined;
      this._address.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._rip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generateMembershipQuery = value.generateMembershipQuery;
      this._generateMembershipQueryVal = value.generateMembershipQueryVal;
      this._inside = value.inside;
      this._maxRespTime = value.maxRespTime;
      this._outside = value.outside;
      this._uuid = value.uuid;
      this._address.internalValue = value.address;
      this._ospf.internalValue = value.ospf;
      this._rip.internalValue = value.rip;
    }
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

  // generate_membership_query_val - computed: false, optional: true, required: false
  private _generateMembershipQueryVal?: number; 
  public get generateMembershipQueryVal() {
    return this.getNumberAttribute('generate_membership_query_val');
  }
  public set generateMembershipQueryVal(value: number) {
    this._generateMembershipQueryVal = value;
  }
  public resetGenerateMembershipQueryVal() {
    this._generateMembershipQueryVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateMembershipQueryValInput() {
    return this._generateMembershipQueryVal;
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

  // address - computed: false, optional: true, required: false
  private _address = new InterfaceTunnelIpAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: InterfaceTunnelIpAddress) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceTunnelIpOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceTunnelIpOspf) {
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
  private _rip = new InterfaceTunnelIpRipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: InterfaceTunnelIpRip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }
}
export interface InterfaceTunnelIpv6AddressCfg {
  /**
  * 'anycast': Configure an IPv6 anycast address; 'link-local': Configure an IPv6 link local address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#address_type InterfaceTunnel#address_type}
  */
  readonly addressType?: string;
  /**
  * Set the IPv6 address of an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ipv6_addr InterfaceTunnel#ipv6_addr}
  */
  readonly ipv6Addr?: string;
}

export function interfaceTunnelIpv6AddressCfgToTerraform(struct?: InterfaceTunnelIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
  }
}


export function interfaceTunnelIpv6AddressCfgToHclTerraform(struct?: InterfaceTunnelIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6AddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpv6AddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6AddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressType = undefined;
      this._ipv6Addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressType = value.addressType;
      this._ipv6Addr = value.ipv6Addr;
    }
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }
}

export class InterfaceTunnelIpv6AddressCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpv6AddressCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpv6AddressCfgOutputReference {
    return new InterfaceTunnelIpv6AddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpv6OspfCostCfg {
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#cost InterfaceTunnel#cost}
  */
  readonly cost?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#instance_id InterfaceTunnel#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceTunnelIpv6OspfCostCfgToTerraform(struct?: InterfaceTunnelIpv6OspfCostCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.numberToTerraform(struct!.cost),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceTunnelIpv6OspfCostCfgToHclTerraform(struct?: InterfaceTunnelIpv6OspfCostCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6OspfCostCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpv6OspfCostCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6OspfCostCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._instanceId = value.instanceId;
    }
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceTunnelIpv6OspfCostCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpv6OspfCostCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpv6OspfCostCfgOutputReference {
    return new InterfaceTunnelIpv6OspfCostCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpv6OspfDeadIntervalCfg {
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#dead_interval InterfaceTunnel#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#instance_id InterfaceTunnel#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceTunnelIpv6OspfDeadIntervalCfgToTerraform(struct?: InterfaceTunnelIpv6OspfDeadIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceTunnelIpv6OspfDeadIntervalCfgToHclTerraform(struct?: InterfaceTunnelIpv6OspfDeadIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6OspfDeadIntervalCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpv6OspfDeadIntervalCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6OspfDeadIntervalCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deadInterval = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deadInterval = value.deadInterval;
      this._instanceId = value.instanceId;
    }
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceTunnelIpv6OspfDeadIntervalCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpv6OspfDeadIntervalCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpv6OspfDeadIntervalCfgOutputReference {
    return new InterfaceTunnelIpv6OspfDeadIntervalCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpv6OspfHelloIntervalCfg {
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#hello_interval InterfaceTunnel#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#instance_id InterfaceTunnel#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceTunnelIpv6OspfHelloIntervalCfgToTerraform(struct?: InterfaceTunnelIpv6OspfHelloIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceTunnelIpv6OspfHelloIntervalCfgToHclTerraform(struct?: InterfaceTunnelIpv6OspfHelloIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6OspfHelloIntervalCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpv6OspfHelloIntervalCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6OspfHelloIntervalCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloInterval = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloInterval = value.helloInterval;
      this._instanceId = value.instanceId;
    }
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceTunnelIpv6OspfHelloIntervalCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpv6OspfHelloIntervalCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpv6OspfHelloIntervalCfgOutputReference {
    return new InterfaceTunnelIpv6OspfHelloIntervalCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpv6OspfMtuIgnoreCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#instance_id InterfaceTunnel#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#mtu_ignore InterfaceTunnel#mtu_ignore}
  */
  readonly mtuIgnore?: number;
}

export function interfaceTunnelIpv6OspfMtuIgnoreCfgToTerraform(struct?: InterfaceTunnelIpv6OspfMtuIgnoreCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    mtu_ignore: cdktf.numberToTerraform(struct!.mtuIgnore),
  }
}


export function interfaceTunnelIpv6OspfMtuIgnoreCfgToHclTerraform(struct?: InterfaceTunnelIpv6OspfMtuIgnoreCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6OspfMtuIgnoreCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpv6OspfMtuIgnoreCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6OspfMtuIgnoreCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._mtuIgnore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._mtuIgnore = value.mtuIgnore;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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
}

export class InterfaceTunnelIpv6OspfMtuIgnoreCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpv6OspfMtuIgnoreCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpv6OspfMtuIgnoreCfgOutputReference {
    return new InterfaceTunnelIpv6OspfMtuIgnoreCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpv6OspfNeighborCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#neig_inst InterfaceTunnel#neig_inst}
  */
  readonly neigInst?: number;
  /**
  * OSPFv3 neighbor (Neighbor IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#neighbor InterfaceTunnel#neighbor}
  */
  readonly neighbor?: string;
  /**
  * OSPF cost for point-to-multipoint neighbor (metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#neighbor_cost InterfaceTunnel#neighbor_cost}
  */
  readonly neighborCost?: number;
  /**
  * OSPF dead-router polling interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#neighbor_poll_interval InterfaceTunnel#neighbor_poll_interval}
  */
  readonly neighborPollInterval?: number;
  /**
  * OSPF priority of non-broadcast neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#neighbor_priority InterfaceTunnel#neighbor_priority}
  */
  readonly neighborPriority?: number;
}

export function interfaceTunnelIpv6OspfNeighborCfgToTerraform(struct?: InterfaceTunnelIpv6OspfNeighborCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    neig_inst: cdktf.numberToTerraform(struct!.neigInst),
    neighbor: cdktf.stringToTerraform(struct!.neighbor),
    neighbor_cost: cdktf.numberToTerraform(struct!.neighborCost),
    neighbor_poll_interval: cdktf.numberToTerraform(struct!.neighborPollInterval),
    neighbor_priority: cdktf.numberToTerraform(struct!.neighborPriority),
  }
}


export function interfaceTunnelIpv6OspfNeighborCfgToHclTerraform(struct?: InterfaceTunnelIpv6OspfNeighborCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    neig_inst: {
      value: cdktf.numberToHclTerraform(struct!.neigInst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor: {
      value: cdktf.stringToHclTerraform(struct!.neighbor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_cost: {
      value: cdktf.numberToHclTerraform(struct!.neighborCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_poll_interval: {
      value: cdktf.numberToHclTerraform(struct!.neighborPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_priority: {
      value: cdktf.numberToHclTerraform(struct!.neighborPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6OspfNeighborCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpv6OspfNeighborCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._neigInst !== undefined) {
      hasAnyValues = true;
      internalValueResult.neigInst = this._neigInst;
    }
    if (this._neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor;
    }
    if (this._neighborCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborCost = this._neighborCost;
    }
    if (this._neighborPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPollInterval = this._neighborPollInterval;
    }
    if (this._neighborPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPriority = this._neighborPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6OspfNeighborCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._neigInst = undefined;
      this._neighbor = undefined;
      this._neighborCost = undefined;
      this._neighborPollInterval = undefined;
      this._neighborPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._neigInst = value.neigInst;
      this._neighbor = value.neighbor;
      this._neighborCost = value.neighborCost;
      this._neighborPollInterval = value.neighborPollInterval;
      this._neighborPriority = value.neighborPriority;
    }
  }

  // neig_inst - computed: false, optional: true, required: false
  private _neigInst?: number; 
  public get neigInst() {
    return this.getNumberAttribute('neig_inst');
  }
  public set neigInst(value: number) {
    this._neigInst = value;
  }
  public resetNeigInst() {
    this._neigInst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neigInstInput() {
    return this._neigInst;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor?: string; 
  public get neighbor() {
    return this.getStringAttribute('neighbor');
  }
  public set neighbor(value: string) {
    this._neighbor = value;
  }
  public resetNeighbor() {
    this._neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // neighbor_cost - computed: false, optional: true, required: false
  private _neighborCost?: number; 
  public get neighborCost() {
    return this.getNumberAttribute('neighbor_cost');
  }
  public set neighborCost(value: number) {
    this._neighborCost = value;
  }
  public resetNeighborCost() {
    this._neighborCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborCostInput() {
    return this._neighborCost;
  }

  // neighbor_poll_interval - computed: false, optional: true, required: false
  private _neighborPollInterval?: number; 
  public get neighborPollInterval() {
    return this.getNumberAttribute('neighbor_poll_interval');
  }
  public set neighborPollInterval(value: number) {
    this._neighborPollInterval = value;
  }
  public resetNeighborPollInterval() {
    this._neighborPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborPollIntervalInput() {
    return this._neighborPollInterval;
  }

  // neighbor_priority - computed: false, optional: true, required: false
  private _neighborPriority?: number; 
  public get neighborPriority() {
    return this.getNumberAttribute('neighbor_priority');
  }
  public set neighborPriority(value: number) {
    this._neighborPriority = value;
  }
  public resetNeighborPriority() {
    this._neighborPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborPriorityInput() {
    return this._neighborPriority;
  }
}

export class InterfaceTunnelIpv6OspfNeighborCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpv6OspfNeighborCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpv6OspfNeighborCfgOutputReference {
    return new InterfaceTunnelIpv6OspfNeighborCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpv6OspfNetworkListStruct {
  /**
  * 'broadcast': Specify OSPF broadcast multi-access network; 'non-broadcast': Specify OSPF NBMA network; 'point-to-point': Specify OSPF point-to-point network; 'point-to-multipoint': Specify OSPF point-to-multipoint network;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#broadcast_type InterfaceTunnel#broadcast_type}
  */
  readonly broadcastType?: string;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#network_instance_id InterfaceTunnel#network_instance_id}
  */
  readonly networkInstanceId?: number;
  /**
  * Specify non-broadcast point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#p2mp_nbma InterfaceTunnel#p2mp_nbma}
  */
  readonly p2MpNbma?: number;
}

export function interfaceTunnelIpv6OspfNetworkListStructToTerraform(struct?: InterfaceTunnelIpv6OspfNetworkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast_type: cdktf.stringToTerraform(struct!.broadcastType),
    network_instance_id: cdktf.numberToTerraform(struct!.networkInstanceId),
    p2mp_nbma: cdktf.numberToTerraform(struct!.p2MpNbma),
  }
}


export function interfaceTunnelIpv6OspfNetworkListStructToHclTerraform(struct?: InterfaceTunnelIpv6OspfNetworkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast_type: {
      value: cdktf.stringToHclTerraform(struct!.broadcastType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_instance_id: {
      value: cdktf.numberToHclTerraform(struct!.networkInstanceId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6OspfNetworkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpv6OspfNetworkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcastType !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastType = this._broadcastType;
    }
    if (this._networkInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInstanceId = this._networkInstanceId;
    }
    if (this._p2MpNbma !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2MpNbma = this._p2MpNbma;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6OspfNetworkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._broadcastType = undefined;
      this._networkInstanceId = undefined;
      this._p2MpNbma = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._broadcastType = value.broadcastType;
      this._networkInstanceId = value.networkInstanceId;
      this._p2MpNbma = value.p2MpNbma;
    }
  }

  // broadcast_type - computed: false, optional: true, required: false
  private _broadcastType?: string; 
  public get broadcastType() {
    return this.getStringAttribute('broadcast_type');
  }
  public set broadcastType(value: string) {
    this._broadcastType = value;
  }
  public resetBroadcastType() {
    this._broadcastType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastTypeInput() {
    return this._broadcastType;
  }

  // network_instance_id - computed: false, optional: true, required: false
  private _networkInstanceId?: number; 
  public get networkInstanceId() {
    return this.getNumberAttribute('network_instance_id');
  }
  public set networkInstanceId(value: number) {
    this._networkInstanceId = value;
  }
  public resetNetworkInstanceId() {
    this._networkInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInstanceIdInput() {
    return this._networkInstanceId;
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
}

export class InterfaceTunnelIpv6OspfNetworkListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpv6OspfNetworkListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpv6OspfNetworkListStructOutputReference {
    return new InterfaceTunnelIpv6OspfNetworkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpv6OspfPriorityCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#instance_id InterfaceTunnel#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#priority InterfaceTunnel#priority}
  */
  readonly priority?: number;
}

export function interfaceTunnelIpv6OspfPriorityCfgToTerraform(struct?: InterfaceTunnelIpv6OspfPriorityCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function interfaceTunnelIpv6OspfPriorityCfgToHclTerraform(struct?: InterfaceTunnelIpv6OspfPriorityCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6OspfPriorityCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpv6OspfPriorityCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6OspfPriorityCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._priority = value.priority;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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
}

export class InterfaceTunnelIpv6OspfPriorityCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpv6OspfPriorityCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpv6OspfPriorityCfgOutputReference {
    return new InterfaceTunnelIpv6OspfPriorityCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpv6OspfRetransmitIntervalCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#instance_id InterfaceTunnel#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#retransmit_interval InterfaceTunnel#retransmit_interval}
  */
  readonly retransmitInterval?: number;
}

export function interfaceTunnelIpv6OspfRetransmitIntervalCfgToTerraform(struct?: InterfaceTunnelIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
  }
}


export function interfaceTunnelIpv6OspfRetransmitIntervalCfgToHclTerraform(struct?: InterfaceTunnelIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6OspfRetransmitIntervalCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._retransmitInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._retransmitInterval = value.retransmitInterval;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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
}

export class InterfaceTunnelIpv6OspfRetransmitIntervalCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpv6OspfRetransmitIntervalCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpv6OspfRetransmitIntervalCfgOutputReference {
    return new InterfaceTunnelIpv6OspfRetransmitIntervalCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpv6OspfTransmitDelayCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#instance_id InterfaceTunnel#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#transmit_delay InterfaceTunnel#transmit_delay}
  */
  readonly transmitDelay?: number;
}

export function interfaceTunnelIpv6OspfTransmitDelayCfgToTerraform(struct?: InterfaceTunnelIpv6OspfTransmitDelayCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
  }
}


export function interfaceTunnelIpv6OspfTransmitDelayCfgToHclTerraform(struct?: InterfaceTunnelIpv6OspfTransmitDelayCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6OspfTransmitDelayCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpv6OspfTransmitDelayCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6OspfTransmitDelayCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._transmitDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._transmitDelay = value.transmitDelay;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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
}

export class InterfaceTunnelIpv6OspfTransmitDelayCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpv6OspfTransmitDelayCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpv6OspfTransmitDelayCfgOutputReference {
    return new InterfaceTunnelIpv6OspfTransmitDelayCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpv6Ospf {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#bfd InterfaceTunnel#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#disable InterfaceTunnel#disable}
  */
  readonly disable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#uuid InterfaceTunnel#uuid}
  */
  readonly uuid?: string;
  /**
  * cost_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#cost_cfg InterfaceTunnel#cost_cfg}
  */
  readonly costCfg?: InterfaceTunnelIpv6OspfCostCfg[] | cdktf.IResolvable;
  /**
  * dead_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#dead_interval_cfg InterfaceTunnel#dead_interval_cfg}
  */
  readonly deadIntervalCfg?: InterfaceTunnelIpv6OspfDeadIntervalCfg[] | cdktf.IResolvable;
  /**
  * hello_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#hello_interval_cfg InterfaceTunnel#hello_interval_cfg}
  */
  readonly helloIntervalCfg?: InterfaceTunnelIpv6OspfHelloIntervalCfg[] | cdktf.IResolvable;
  /**
  * mtu_ignore_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#mtu_ignore_cfg InterfaceTunnel#mtu_ignore_cfg}
  */
  readonly mtuIgnoreCfg?: InterfaceTunnelIpv6OspfMtuIgnoreCfg[] | cdktf.IResolvable;
  /**
  * neighbor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#neighbor_cfg InterfaceTunnel#neighbor_cfg}
  */
  readonly neighborCfg?: InterfaceTunnelIpv6OspfNeighborCfg[] | cdktf.IResolvable;
  /**
  * network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#network_list InterfaceTunnel#network_list}
  */
  readonly networkList?: InterfaceTunnelIpv6OspfNetworkListStruct[] | cdktf.IResolvable;
  /**
  * priority_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#priority_cfg InterfaceTunnel#priority_cfg}
  */
  readonly priorityCfg?: InterfaceTunnelIpv6OspfPriorityCfg[] | cdktf.IResolvable;
  /**
  * retransmit_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#retransmit_interval_cfg InterfaceTunnel#retransmit_interval_cfg}
  */
  readonly retransmitIntervalCfg?: InterfaceTunnelIpv6OspfRetransmitIntervalCfg[] | cdktf.IResolvable;
  /**
  * transmit_delay_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#transmit_delay_cfg InterfaceTunnel#transmit_delay_cfg}
  */
  readonly transmitDelayCfg?: InterfaceTunnelIpv6OspfTransmitDelayCfg[] | cdktf.IResolvable;
}

export function interfaceTunnelIpv6OspfToTerraform(struct?: InterfaceTunnelIpv6OspfOutputReference | InterfaceTunnelIpv6Ospf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    cost_cfg: cdktf.listMapper(interfaceTunnelIpv6OspfCostCfgToTerraform, true)(struct!.costCfg),
    dead_interval_cfg: cdktf.listMapper(interfaceTunnelIpv6OspfDeadIntervalCfgToTerraform, true)(struct!.deadIntervalCfg),
    hello_interval_cfg: cdktf.listMapper(interfaceTunnelIpv6OspfHelloIntervalCfgToTerraform, true)(struct!.helloIntervalCfg),
    mtu_ignore_cfg: cdktf.listMapper(interfaceTunnelIpv6OspfMtuIgnoreCfgToTerraform, true)(struct!.mtuIgnoreCfg),
    neighbor_cfg: cdktf.listMapper(interfaceTunnelIpv6OspfNeighborCfgToTerraform, true)(struct!.neighborCfg),
    network_list: cdktf.listMapper(interfaceTunnelIpv6OspfNetworkListStructToTerraform, true)(struct!.networkList),
    priority_cfg: cdktf.listMapper(interfaceTunnelIpv6OspfPriorityCfgToTerraform, true)(struct!.priorityCfg),
    retransmit_interval_cfg: cdktf.listMapper(interfaceTunnelIpv6OspfRetransmitIntervalCfgToTerraform, true)(struct!.retransmitIntervalCfg),
    transmit_delay_cfg: cdktf.listMapper(interfaceTunnelIpv6OspfTransmitDelayCfgToTerraform, true)(struct!.transmitDelayCfg),
  }
}


export function interfaceTunnelIpv6OspfToHclTerraform(struct?: InterfaceTunnelIpv6OspfOutputReference | InterfaceTunnelIpv6Ospf): any {
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost_cfg: {
      value: cdktf.listMapperHcl(interfaceTunnelIpv6OspfCostCfgToHclTerraform, true)(struct!.costCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6OspfCostCfgList",
    },
    dead_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceTunnelIpv6OspfDeadIntervalCfgToHclTerraform, true)(struct!.deadIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6OspfDeadIntervalCfgList",
    },
    hello_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceTunnelIpv6OspfHelloIntervalCfgToHclTerraform, true)(struct!.helloIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6OspfHelloIntervalCfgList",
    },
    mtu_ignore_cfg: {
      value: cdktf.listMapperHcl(interfaceTunnelIpv6OspfMtuIgnoreCfgToHclTerraform, true)(struct!.mtuIgnoreCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6OspfMtuIgnoreCfgList",
    },
    neighbor_cfg: {
      value: cdktf.listMapperHcl(interfaceTunnelIpv6OspfNeighborCfgToHclTerraform, true)(struct!.neighborCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6OspfNeighborCfgList",
    },
    network_list: {
      value: cdktf.listMapperHcl(interfaceTunnelIpv6OspfNetworkListStructToHclTerraform, true)(struct!.networkList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6OspfNetworkListStructList",
    },
    priority_cfg: {
      value: cdktf.listMapperHcl(interfaceTunnelIpv6OspfPriorityCfgToHclTerraform, true)(struct!.priorityCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6OspfPriorityCfgList",
    },
    retransmit_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceTunnelIpv6OspfRetransmitIntervalCfgToHclTerraform, true)(struct!.retransmitIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6OspfRetransmitIntervalCfgList",
    },
    transmit_delay_cfg: {
      value: cdktf.listMapperHcl(interfaceTunnelIpv6OspfTransmitDelayCfgToHclTerraform, true)(struct!.transmitDelayCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6OspfTransmitDelayCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6OspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpv6Ospf | undefined {
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
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._costCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCfg = this._costCfg?.internalValue;
    }
    if (this._deadIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadIntervalCfg = this._deadIntervalCfg?.internalValue;
    }
    if (this._helloIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalCfg = this._helloIntervalCfg?.internalValue;
    }
    if (this._mtuIgnoreCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnoreCfg = this._mtuIgnoreCfg?.internalValue;
    }
    if (this._neighborCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborCfg = this._neighborCfg?.internalValue;
    }
    if (this._networkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkList = this._networkList?.internalValue;
    }
    if (this._priorityCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCfg = this._priorityCfg?.internalValue;
    }
    if (this._retransmitIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitIntervalCfg = this._retransmitIntervalCfg?.internalValue;
    }
    if (this._transmitDelayCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelayCfg = this._transmitDelayCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6Ospf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfd = undefined;
      this._disable = undefined;
      this._uuid = undefined;
      this._costCfg.internalValue = undefined;
      this._deadIntervalCfg.internalValue = undefined;
      this._helloIntervalCfg.internalValue = undefined;
      this._mtuIgnoreCfg.internalValue = undefined;
      this._neighborCfg.internalValue = undefined;
      this._networkList.internalValue = undefined;
      this._priorityCfg.internalValue = undefined;
      this._retransmitIntervalCfg.internalValue = undefined;
      this._transmitDelayCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfd = value.bfd;
      this._disable = value.disable;
      this._uuid = value.uuid;
      this._costCfg.internalValue = value.costCfg;
      this._deadIntervalCfg.internalValue = value.deadIntervalCfg;
      this._helloIntervalCfg.internalValue = value.helloIntervalCfg;
      this._mtuIgnoreCfg.internalValue = value.mtuIgnoreCfg;
      this._neighborCfg.internalValue = value.neighborCfg;
      this._networkList.internalValue = value.networkList;
      this._priorityCfg.internalValue = value.priorityCfg;
      this._retransmitIntervalCfg.internalValue = value.retransmitIntervalCfg;
      this._transmitDelayCfg.internalValue = value.transmitDelayCfg;
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

  // cost_cfg - computed: false, optional: true, required: false
  private _costCfg = new InterfaceTunnelIpv6OspfCostCfgList(this, "cost_cfg", false);
  public get costCfg() {
    return this._costCfg;
  }
  public putCostCfg(value: InterfaceTunnelIpv6OspfCostCfg[] | cdktf.IResolvable) {
    this._costCfg.internalValue = value;
  }
  public resetCostCfg() {
    this._costCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCfgInput() {
    return this._costCfg.internalValue;
  }

  // dead_interval_cfg - computed: false, optional: true, required: false
  private _deadIntervalCfg = new InterfaceTunnelIpv6OspfDeadIntervalCfgList(this, "dead_interval_cfg", false);
  public get deadIntervalCfg() {
    return this._deadIntervalCfg;
  }
  public putDeadIntervalCfg(value: InterfaceTunnelIpv6OspfDeadIntervalCfg[] | cdktf.IResolvable) {
    this._deadIntervalCfg.internalValue = value;
  }
  public resetDeadIntervalCfg() {
    this._deadIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalCfgInput() {
    return this._deadIntervalCfg.internalValue;
  }

  // hello_interval_cfg - computed: false, optional: true, required: false
  private _helloIntervalCfg = new InterfaceTunnelIpv6OspfHelloIntervalCfgList(this, "hello_interval_cfg", false);
  public get helloIntervalCfg() {
    return this._helloIntervalCfg;
  }
  public putHelloIntervalCfg(value: InterfaceTunnelIpv6OspfHelloIntervalCfg[] | cdktf.IResolvable) {
    this._helloIntervalCfg.internalValue = value;
  }
  public resetHelloIntervalCfg() {
    this._helloIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalCfgInput() {
    return this._helloIntervalCfg.internalValue;
  }

  // mtu_ignore_cfg - computed: false, optional: true, required: false
  private _mtuIgnoreCfg = new InterfaceTunnelIpv6OspfMtuIgnoreCfgList(this, "mtu_ignore_cfg", false);
  public get mtuIgnoreCfg() {
    return this._mtuIgnoreCfg;
  }
  public putMtuIgnoreCfg(value: InterfaceTunnelIpv6OspfMtuIgnoreCfg[] | cdktf.IResolvable) {
    this._mtuIgnoreCfg.internalValue = value;
  }
  public resetMtuIgnoreCfg() {
    this._mtuIgnoreCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreCfgInput() {
    return this._mtuIgnoreCfg.internalValue;
  }

  // neighbor_cfg - computed: false, optional: true, required: false
  private _neighborCfg = new InterfaceTunnelIpv6OspfNeighborCfgList(this, "neighbor_cfg", false);
  public get neighborCfg() {
    return this._neighborCfg;
  }
  public putNeighborCfg(value: InterfaceTunnelIpv6OspfNeighborCfg[] | cdktf.IResolvable) {
    this._neighborCfg.internalValue = value;
  }
  public resetNeighborCfg() {
    this._neighborCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborCfgInput() {
    return this._neighborCfg.internalValue;
  }

  // network_list - computed: false, optional: true, required: false
  private _networkList = new InterfaceTunnelIpv6OspfNetworkListStructList(this, "network_list", false);
  public get networkList() {
    return this._networkList;
  }
  public putNetworkList(value: InterfaceTunnelIpv6OspfNetworkListStruct[] | cdktf.IResolvable) {
    this._networkList.internalValue = value;
  }
  public resetNetworkList() {
    this._networkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkListInput() {
    return this._networkList.internalValue;
  }

  // priority_cfg - computed: false, optional: true, required: false
  private _priorityCfg = new InterfaceTunnelIpv6OspfPriorityCfgList(this, "priority_cfg", false);
  public get priorityCfg() {
    return this._priorityCfg;
  }
  public putPriorityCfg(value: InterfaceTunnelIpv6OspfPriorityCfg[] | cdktf.IResolvable) {
    this._priorityCfg.internalValue = value;
  }
  public resetPriorityCfg() {
    this._priorityCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCfgInput() {
    return this._priorityCfg.internalValue;
  }

  // retransmit_interval_cfg - computed: false, optional: true, required: false
  private _retransmitIntervalCfg = new InterfaceTunnelIpv6OspfRetransmitIntervalCfgList(this, "retransmit_interval_cfg", false);
  public get retransmitIntervalCfg() {
    return this._retransmitIntervalCfg;
  }
  public putRetransmitIntervalCfg(value: InterfaceTunnelIpv6OspfRetransmitIntervalCfg[] | cdktf.IResolvable) {
    this._retransmitIntervalCfg.internalValue = value;
  }
  public resetRetransmitIntervalCfg() {
    this._retransmitIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalCfgInput() {
    return this._retransmitIntervalCfg.internalValue;
  }

  // transmit_delay_cfg - computed: false, optional: true, required: false
  private _transmitDelayCfg = new InterfaceTunnelIpv6OspfTransmitDelayCfgList(this, "transmit_delay_cfg", false);
  public get transmitDelayCfg() {
    return this._transmitDelayCfg;
  }
  public putTransmitDelayCfg(value: InterfaceTunnelIpv6OspfTransmitDelayCfg[] | cdktf.IResolvable) {
    this._transmitDelayCfg.internalValue = value;
  }
  public resetTransmitDelayCfg() {
    this._transmitDelayCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayCfgInput() {
    return this._transmitDelayCfg.internalValue;
  }
}
export interface InterfaceTunnelIpv6RouterOspfAreaListStruct {
  /**
  * OSPF area ID in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#area_id_addr InterfaceTunnel#area_id_addr}
  */
  readonly areaIdAddr?: string;
  /**
  * OSPF area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#area_id_num InterfaceTunnel#area_id_num}
  */
  readonly areaIdNum?: number;
  /**
  * Set the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#instance_id InterfaceTunnel#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Set the OSPFv3 process tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#tag InterfaceTunnel#tag}
  */
  readonly tag?: string;
}

export function interfaceTunnelIpv6RouterOspfAreaListStructToTerraform(struct?: InterfaceTunnelIpv6RouterOspfAreaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_id_addr: cdktf.stringToTerraform(struct!.areaIdAddr),
    area_id_num: cdktf.numberToTerraform(struct!.areaIdNum),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function interfaceTunnelIpv6RouterOspfAreaListStructToHclTerraform(struct?: InterfaceTunnelIpv6RouterOspfAreaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_id_addr: {
      value: cdktf.stringToHclTerraform(struct!.areaIdAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_id_num: {
      value: cdktf.numberToHclTerraform(struct!.areaIdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6RouterOspfAreaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpv6RouterOspfAreaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaIdAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIdAddr = this._areaIdAddr;
    }
    if (this._areaIdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIdNum = this._areaIdNum;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6RouterOspfAreaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaIdAddr = undefined;
      this._areaIdNum = undefined;
      this._instanceId = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaIdAddr = value.areaIdAddr;
      this._areaIdNum = value.areaIdNum;
      this._instanceId = value.instanceId;
      this._tag = value.tag;
    }
  }

  // area_id_addr - computed: false, optional: true, required: false
  private _areaIdAddr?: string; 
  public get areaIdAddr() {
    return this.getStringAttribute('area_id_addr');
  }
  public set areaIdAddr(value: string) {
    this._areaIdAddr = value;
  }
  public resetAreaIdAddr() {
    this._areaIdAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdAddrInput() {
    return this._areaIdAddr;
  }

  // area_id_num - computed: false, optional: true, required: false
  private _areaIdNum?: number; 
  public get areaIdNum() {
    return this.getNumberAttribute('area_id_num');
  }
  public set areaIdNum(value: number) {
    this._areaIdNum = value;
  }
  public resetAreaIdNum() {
    this._areaIdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdNumInput() {
    return this._areaIdNum;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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
}

export class InterfaceTunnelIpv6RouterOspfAreaListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpv6RouterOspfAreaListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpv6RouterOspfAreaListStructOutputReference {
    return new InterfaceTunnelIpv6RouterOspfAreaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpv6RouterOspf {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#uuid InterfaceTunnel#uuid}
  */
  readonly uuid?: string;
  /**
  * area_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#area_list InterfaceTunnel#area_list}
  */
  readonly areaList?: InterfaceTunnelIpv6RouterOspfAreaListStruct[] | cdktf.IResolvable;
}

export function interfaceTunnelIpv6RouterOspfToTerraform(struct?: InterfaceTunnelIpv6RouterOspfOutputReference | InterfaceTunnelIpv6RouterOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    area_list: cdktf.listMapper(interfaceTunnelIpv6RouterOspfAreaListStructToTerraform, true)(struct!.areaList),
  }
}


export function interfaceTunnelIpv6RouterOspfToHclTerraform(struct?: InterfaceTunnelIpv6RouterOspfOutputReference | InterfaceTunnelIpv6RouterOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_list: {
      value: cdktf.listMapperHcl(interfaceTunnelIpv6RouterOspfAreaListStructToHclTerraform, true)(struct!.areaList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6RouterOspfAreaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6RouterOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpv6RouterOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._areaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaList = this._areaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6RouterOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._areaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._areaList.internalValue = value.areaList;
    }
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

  // area_list - computed: false, optional: true, required: false
  private _areaList = new InterfaceTunnelIpv6RouterOspfAreaListStructList(this, "area_list", false);
  public get areaList() {
    return this._areaList;
  }
  public putAreaList(value: InterfaceTunnelIpv6RouterOspfAreaListStruct[] | cdktf.IResolvable) {
    this._areaList.internalValue = value;
  }
  public resetAreaList() {
    this._areaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaListInput() {
    return this._areaList.internalValue;
  }
}
export interface InterfaceTunnelIpv6RouterRipng {
  /**
  * RIP Routing for IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#rip InterfaceTunnel#rip}
  */
  readonly rip?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#uuid InterfaceTunnel#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTunnelIpv6RouterRipngToTerraform(struct?: InterfaceTunnelIpv6RouterRipngOutputReference | InterfaceTunnelIpv6RouterRipng): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rip: cdktf.numberToTerraform(struct!.rip),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTunnelIpv6RouterRipngToHclTerraform(struct?: InterfaceTunnelIpv6RouterRipngOutputReference | InterfaceTunnelIpv6RouterRipng): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rip: {
      value: cdktf.numberToHclTerraform(struct!.rip),
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

export class InterfaceTunnelIpv6RouterRipngOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpv6RouterRipng | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6RouterRipng | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rip = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rip = value.rip;
      this._uuid = value.uuid;
    }
  }

  // rip - computed: false, optional: true, required: false
  private _rip?: number; 
  public get rip() {
    return this.getNumberAttribute('rip');
  }
  public set rip(value: number) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
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
export interface InterfaceTunnelIpv6Router {
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ospf InterfaceTunnel#ospf}
  */
  readonly ospf?: InterfaceTunnelIpv6RouterOspf;
  /**
  * ripng block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ripng InterfaceTunnel#ripng}
  */
  readonly ripng?: InterfaceTunnelIpv6RouterRipng;
}

export function interfaceTunnelIpv6RouterToTerraform(struct?: InterfaceTunnelIpv6RouterOutputReference | InterfaceTunnelIpv6Router): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ospf: interfaceTunnelIpv6RouterOspfToTerraform(struct!.ospf),
    ripng: interfaceTunnelIpv6RouterRipngToTerraform(struct!.ripng),
  }
}


export function interfaceTunnelIpv6RouterToHclTerraform(struct?: InterfaceTunnelIpv6RouterOutputReference | InterfaceTunnelIpv6Router): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ospf: {
      value: interfaceTunnelIpv6RouterOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6RouterOspfList",
    },
    ripng: {
      value: interfaceTunnelIpv6RouterRipngToHclTerraform(struct!.ripng),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6RouterRipngList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6RouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpv6Router | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._ripng?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ripng = this._ripng?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6Router | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ospf.internalValue = undefined;
      this._ripng.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ospf.internalValue = value.ospf;
      this._ripng.internalValue = value.ripng;
    }
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceTunnelIpv6RouterOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceTunnelIpv6RouterOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // ripng - computed: false, optional: true, required: false
  private _ripng = new InterfaceTunnelIpv6RouterRipngOutputReference(this, "ripng");
  public get ripng() {
    return this._ripng;
  }
  public putRipng(value: InterfaceTunnelIpv6RouterRipng) {
    this._ripng.internalValue = value;
  }
  public resetRipng() {
    this._ripng.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripngInput() {
    return this._ripng.internalValue;
  }
}
export interface InterfaceTunnelIpv6 {
  /**
  * Configure interface as inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#inside InterfaceTunnel#inside}
  */
  readonly inside?: number;
  /**
  * Enable IPv6 processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ipv6_enable InterfaceTunnel#ipv6_enable}
  */
  readonly ipv6Enable?: number;
  /**
  * Configure interface as outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#outside InterfaceTunnel#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#uuid InterfaceTunnel#uuid}
  */
  readonly uuid?: string;
  /**
  * address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#address_cfg InterfaceTunnel#address_cfg}
  */
  readonly addressCfg?: InterfaceTunnelIpv6AddressCfg[] | cdktf.IResolvable;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#ospf InterfaceTunnel#ospf}
  */
  readonly ospf?: InterfaceTunnelIpv6Ospf;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#router InterfaceTunnel#router}
  */
  readonly router?: InterfaceTunnelIpv6Router;
}

export function interfaceTunnelIpv6ToTerraform(struct?: InterfaceTunnelIpv6OutputReference | InterfaceTunnelIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    ipv6_enable: cdktf.numberToTerraform(struct!.ipv6Enable),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    address_cfg: cdktf.listMapper(interfaceTunnelIpv6AddressCfgToTerraform, true)(struct!.addressCfg),
    ospf: interfaceTunnelIpv6OspfToTerraform(struct!.ospf),
    router: interfaceTunnelIpv6RouterToTerraform(struct!.router),
  }
}


export function interfaceTunnelIpv6ToHclTerraform(struct?: InterfaceTunnelIpv6OutputReference | InterfaceTunnelIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_enable: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Enable),
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
    address_cfg: {
      value: cdktf.listMapperHcl(interfaceTunnelIpv6AddressCfgToHclTerraform, true)(struct!.addressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6AddressCfgList",
    },
    ospf: {
      value: interfaceTunnelIpv6OspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6OspfList",
    },
    router: {
      value: interfaceTunnelIpv6RouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTunnelIpv6RouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._ipv6Enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Enable = this._ipv6Enable;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._addressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressCfg = this._addressCfg?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._ipv6Enable = undefined;
      this._outside = undefined;
      this._uuid = undefined;
      this._addressCfg.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._router.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._ipv6Enable = value.ipv6Enable;
      this._outside = value.outside;
      this._uuid = value.uuid;
      this._addressCfg.internalValue = value.addressCfg;
      this._ospf.internalValue = value.ospf;
      this._router.internalValue = value.router;
    }
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

  // ipv6_enable - computed: false, optional: true, required: false
  private _ipv6Enable?: number; 
  public get ipv6Enable() {
    return this.getNumberAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: number) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
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

  // address_cfg - computed: false, optional: true, required: false
  private _addressCfg = new InterfaceTunnelIpv6AddressCfgList(this, "address_cfg", false);
  public get addressCfg() {
    return this._addressCfg;
  }
  public putAddressCfg(value: InterfaceTunnelIpv6AddressCfg[] | cdktf.IResolvable) {
    this._addressCfg.internalValue = value;
  }
  public resetAddressCfg() {
    this._addressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressCfgInput() {
    return this._addressCfg.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceTunnelIpv6OspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceTunnelIpv6Ospf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new InterfaceTunnelIpv6RouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: InterfaceTunnelIpv6Router) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }
}
export interface InterfaceTunnelLw4O6 {
  /**
  * Configure LW-4over6 outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#inside InterfaceTunnel#inside}
  */
  readonly inside?: number;
  /**
  * Configure LW-4over6 inside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#outside InterfaceTunnel#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#uuid InterfaceTunnel#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTunnelLw4O6ToTerraform(struct?: InterfaceTunnelLw4O6OutputReference | InterfaceTunnelLw4O6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTunnelLw4O6ToHclTerraform(struct?: InterfaceTunnelLw4O6OutputReference | InterfaceTunnelLw4O6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class InterfaceTunnelLw4O6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelLw4O6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: InterfaceTunnelLw4O6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
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
export interface InterfaceTunnelMap {
  /**
  * Configure MAP inside interface (connected to MAP domains)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#inside InterfaceTunnel#inside}
  */
  readonly inside?: number;
  /**
  * Configure MAP inside interface (connected to MAP domains)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#map_t_inside InterfaceTunnel#map_t_inside}
  */
  readonly mapTInside?: number;
  /**
  * Configure MAP outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#map_t_outside InterfaceTunnel#map_t_outside}
  */
  readonly mapTOutside?: number;
  /**
  * Configure MAP outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#outside InterfaceTunnel#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#uuid InterfaceTunnel#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTunnelMapToTerraform(struct?: InterfaceTunnelMapOutputReference | InterfaceTunnelMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    map_t_inside: cdktf.numberToTerraform(struct!.mapTInside),
    map_t_outside: cdktf.numberToTerraform(struct!.mapTOutside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTunnelMapToHclTerraform(struct?: InterfaceTunnelMapOutputReference | InterfaceTunnelMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    map_t_inside: {
      value: cdktf.numberToHclTerraform(struct!.mapTInside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    map_t_outside: {
      value: cdktf.numberToHclTerraform(struct!.mapTOutside),
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

export class InterfaceTunnelMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTunnelMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._mapTInside !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapTInside = this._mapTInside;
    }
    if (this._mapTOutside !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapTOutside = this._mapTOutside;
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

  public set internalValue(value: InterfaceTunnelMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._mapTInside = undefined;
      this._mapTOutside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._mapTInside = value.mapTInside;
      this._mapTOutside = value.mapTOutside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
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

  // map_t_inside - computed: false, optional: true, required: false
  private _mapTInside?: number; 
  public get mapTInside() {
    return this.getNumberAttribute('map_t_inside');
  }
  public set mapTInside(value: number) {
    this._mapTInside = value;
  }
  public resetMapTInside() {
    this._mapTInside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTInsideInput() {
    return this._mapTInside;
  }

  // map_t_outside - computed: false, optional: true, required: false
  private _mapTOutside?: number; 
  public get mapTOutside() {
    return this.getNumberAttribute('map_t_outside');
  }
  public set mapTOutside(value: number) {
    this._mapTOutside = value;
  }
  public resetMapTOutside() {
    this._mapTOutside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTOutsideInput() {
    return this._mapTOutside;
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
export interface InterfaceTunnelSamplingEnable {
  /**
  * 'all': all; 'num-rx-pkts': received packets; 'num-total-rx-bytes': received bytes; 'num-tx-pkts': sent packets; 'num-total-tx-bytes': sent bytes; 'num-rx-err-pkts': received error packets; 'num-tx-err-pkts': sent error packets; 'rate_pkt_sent': Packet sent rate packets/sec; 'rate_byte_sent': Byte sent rate bits/sec; 'rate_pkt_rcvd': Packet received rate packets/sec; 'rate_byte_rcvd': Byte received rate bits/sec;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#counters1 InterfaceTunnel#counters1}
  */
  readonly counters1?: string;
}

export function interfaceTunnelSamplingEnableToTerraform(struct?: InterfaceTunnelSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function interfaceTunnelSamplingEnableToHclTerraform(struct?: InterfaceTunnelSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class InterfaceTunnelSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelSamplingEnableOutputReference {
    return new InterfaceTunnelSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel thunder_interface_tunnel}
*/
export class InterfaceTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceTunnel to import
  * @param importFromId The id of the existing InterfaceTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_tunnel thunder_interface_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_tunnel',
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
    this._action = config.action;
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._loadInterval = config.loadInterval;
    this._mtu = config.mtu;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._securityLevel = config.securityLevel;
    this._speed = config.speed;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ip.internalValue = config.ip;
    this._ipv6.internalValue = config.ipv6;
    this._lw4O6.internalValue = config.lw4O6;
    this._map.internalValue = config.map;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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
  private _ifnum?: number; 
  public get ifnum() {
    return this.getNumberAttribute('ifnum');
  }
  public set ifnum(value: number) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // load_interval - computed: false, optional: true, required: false
  private _loadInterval?: number; 
  public get loadInterval() {
    return this.getNumberAttribute('load_interval');
  }
  public set loadInterval(value: number) {
    this._loadInterval = value;
  }
  public resetLoadInterval() {
    this._loadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadIntervalInput() {
    return this._loadInterval;
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

  // name - computed: false, optional: true, required: false
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // security_level - computed: false, optional: true, required: false
  private _securityLevel?: number; 
  public get securityLevel() {
    return this.getNumberAttribute('security_level');
  }
  public set securityLevel(value: number) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: number; 
  public get speed() {
    return this.getNumberAttribute('speed');
  }
  public set speed(value: number) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // ip - computed: false, optional: true, required: false
  private _ip = new InterfaceTunnelIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: InterfaceTunnelIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new InterfaceTunnelIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: InterfaceTunnelIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // lw_4o6 - computed: false, optional: true, required: false
  private _lw4O6 = new InterfaceTunnelLw4O6OutputReference(this, "lw_4o6");
  public get lw4O6() {
    return this._lw4O6;
  }
  public putLw4O6(value: InterfaceTunnelLw4O6) {
    this._lw4O6.internalValue = value;
  }
  public resetLw4O6() {
    this._lw4O6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lw4O6Input() {
    return this._lw4O6.internalValue;
  }

  // map - computed: false, optional: true, required: false
  private _map = new InterfaceTunnelMapOutputReference(this, "map");
  public get map() {
    return this._map;
  }
  public putMap(value: InterfaceTunnelMap) {
    this._map.internalValue = value;
  }
  public resetMap() {
    this._map.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new InterfaceTunnelSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: InterfaceTunnelSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.numberToTerraform(this._ifnum),
      load_interval: cdktf.numberToTerraform(this._loadInterval),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      security_level: cdktf.numberToTerraform(this._securityLevel),
      speed: cdktf.numberToTerraform(this._speed),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      ip: interfaceTunnelIpToTerraform(this._ip.internalValue),
      ipv6: interfaceTunnelIpv6ToTerraform(this._ipv6.internalValue),
      lw_4o6: interfaceTunnelLw4O6ToTerraform(this._lw4O6.internalValue),
      map: interfaceTunnelMapToTerraform(this._map.internalValue),
      sampling_enable: cdktf.listMapper(interfaceTunnelSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      ifnum: {
        value: cdktf.numberToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_interval: {
        value: cdktf.numberToHclTerraform(this._loadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_level: {
        value: cdktf.numberToHclTerraform(this._securityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      speed: {
        value: cdktf.numberToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: interfaceTunnelIpToHclTerraform(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTunnelIpList",
      },
      ipv6: {
        value: interfaceTunnelIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTunnelIpv6List",
      },
      lw_4o6: {
        value: interfaceTunnelLw4O6ToHclTerraform(this._lw4O6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTunnelLw4O6List",
      },
      map: {
        value: interfaceTunnelMapToHclTerraform(this._map.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTunnelMapList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(interfaceTunnelSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTunnelSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
