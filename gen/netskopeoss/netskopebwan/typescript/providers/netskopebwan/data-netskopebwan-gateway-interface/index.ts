// https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopebwanGatewayInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#8021x_mab DataNetskopebwanGatewayInterface#8021x_mab}
  */
  readonly 8021XMab?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#allowed_vlans DataNetskopebwanGatewayInterface#allowed_vlans}
  */
  readonly allowedVlans?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#bridge_members DataNetskopebwanGatewayInterface#bridge_members}
  */
  readonly bridgeMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#do_advertise DataNetskopebwanGatewayInterface#do_advertise}
  */
  readonly doAdvertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#enable_nat DataNetskopebwanGatewayInterface#enable_nat}
  */
  readonly enableNat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#gateway_id DataNetskopebwanGatewayInterface#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#id DataNetskopebwanGatewayInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#is_disabled DataNetskopebwanGatewayInterface#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#mac_addr DataNetskopebwanGatewayInterface#mac_addr}
  */
  readonly macAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#mode DataNetskopebwanGatewayInterface#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#mtu DataNetskopebwanGatewayInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#mtu_discovery DataNetskopebwanGatewayInterface#mtu_discovery}
  */
  readonly mtuDiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#name DataNetskopebwanGatewayInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#type DataNetskopebwanGatewayInterface#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#vlan DataNetskopebwanGatewayInterface#vlan}
  */
  readonly vlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#zone DataNetskopebwanGatewayInterface#zone}
  */
  readonly zone?: string;
  /**
  * addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#addresses DataNetskopebwanGatewayInterface#addresses}
  */
  readonly addresses?: DataNetskopebwanGatewayInterfaceAddresses[] | cdktf.IResolvable;
  /**
  * dhcp_relay_server_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#dhcp_relay_server_setting DataNetskopebwanGatewayInterface#dhcp_relay_server_setting}
  */
  readonly dhcpRelayServerSetting?: DataNetskopebwanGatewayInterfaceDhcpRelayServerSetting;
  /**
  * dhcp_server_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#dhcp_server_setting DataNetskopebwanGatewayInterface#dhcp_server_setting}
  */
  readonly dhcpServerSetting?: DataNetskopebwanGatewayInterfaceDhcpServerSetting;
  /**
  * lte_props block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#lte_props DataNetskopebwanGatewayInterface#lte_props}
  */
  readonly lteProps?: DataNetskopebwanGatewayInterfaceLteProps;
  /**
  * overlay_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#overlay_setting DataNetskopebwanGatewayInterface#overlay_setting}
  */
  readonly overlaySetting?: DataNetskopebwanGatewayInterfaceOverlaySetting;
  /**
  * proxy_arp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#proxy_arp_settings DataNetskopebwanGatewayInterface#proxy_arp_settings}
  */
  readonly proxyArpSettings?: DataNetskopebwanGatewayInterfaceProxyArpSettings[] | cdktf.IResolvable;
  /**
  * radius block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#radius DataNetskopebwanGatewayInterface#radius}
  */
  readonly radius?: DataNetskopebwanGatewayInterfaceRadius[] | cdktf.IResolvable;
  /**
  * vrrp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#vrrp DataNetskopebwanGatewayInterface#vrrp}
  */
  readonly vrrp?: DataNetskopebwanGatewayInterfaceVrrp;
  /**
  * wifi_props block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#wifi_props DataNetskopebwanGatewayInterface#wifi_props}
  */
  readonly wifiProps?: DataNetskopebwanGatewayInterfaceWifiProps;
}
export interface DataNetskopebwanGatewayInterfaceAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#address DataNetskopebwanGatewayInterface#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#address_assignment DataNetskopebwanGatewayInterface#address_assignment}
  */
  readonly addressAssignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#address_family DataNetskopebwanGatewayInterface#address_family}
  */
  readonly addressFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#dns_primary DataNetskopebwanGatewayInterface#dns_primary}
  */
  readonly dnsPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#dns_secondary DataNetskopebwanGatewayInterface#dns_secondary}
  */
  readonly dnsSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#gateway DataNetskopebwanGatewayInterface#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#mask DataNetskopebwanGatewayInterface#mask}
  */
  readonly mask?: string;
}

export function dataNetskopebwanGatewayInterfaceAddressesToTerraform(struct?: DataNetskopebwanGatewayInterfaceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_assignment: cdktf.stringToTerraform(struct!.addressAssignment),
    address_family: cdktf.stringToTerraform(struct!.addressFamily),
    dns_primary: cdktf.stringToTerraform(struct!.dnsPrimary),
    dns_secondary: cdktf.stringToTerraform(struct!.dnsSecondary),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function dataNetskopebwanGatewayInterfaceAddressesToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceAddresses | cdktf.IResolvable): any {
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
    address_assignment: {
      value: cdktf.stringToHclTerraform(struct!.addressAssignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_family: {
      value: cdktf.stringToHclTerraform(struct!.addressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_primary: {
      value: cdktf.stringToHclTerraform(struct!.dnsPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_secondary: {
      value: cdktf.stringToHclTerraform(struct!.dnsSecondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopebwanGatewayInterfaceAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressAssignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressAssignment = this._addressAssignment;
    }
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._dnsPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPrimary = this._dnsPrimary;
    }
    if (this._dnsSecondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSecondary = this._dnsSecondary;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressAssignment = undefined;
      this._addressFamily = undefined;
      this._dnsPrimary = undefined;
      this._dnsSecondary = undefined;
      this._gateway = undefined;
      this._mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressAssignment = value.addressAssignment;
      this._addressFamily = value.addressFamily;
      this._dnsPrimary = value.dnsPrimary;
      this._dnsSecondary = value.dnsSecondary;
      this._gateway = value.gateway;
      this._mask = value.mask;
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

  // address_assignment - computed: true, optional: true, required: false
  private _addressAssignment?: string; 
  public get addressAssignment() {
    return this.getStringAttribute('address_assignment');
  }
  public set addressAssignment(value: string) {
    this._addressAssignment = value;
  }
  public resetAddressAssignment() {
    this._addressAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressAssignmentInput() {
    return this._addressAssignment;
  }

  // address_family - computed: true, optional: true, required: false
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  public resetAddressFamily() {
    this._addressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // dns_primary - computed: true, optional: true, required: false
  private _dnsPrimary?: string; 
  public get dnsPrimary() {
    return this.getStringAttribute('dns_primary');
  }
  public set dnsPrimary(value: string) {
    this._dnsPrimary = value;
  }
  public resetDnsPrimary() {
    this._dnsPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrimaryInput() {
    return this._dnsPrimary;
  }

  // dns_secondary - computed: true, optional: true, required: false
  private _dnsSecondary?: string; 
  public get dnsSecondary() {
    return this.getStringAttribute('dns_secondary');
  }
  public set dnsSecondary(value: string) {
    this._dnsSecondary = value;
  }
  public resetDnsSecondary() {
    this._dnsSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSecondaryInput() {
    return this._dnsSecondary;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // mask - computed: true, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }
}

export class DataNetskopebwanGatewayInterfaceAddressesList extends cdktf.ComplexList {
  public internalValue? : DataNetskopebwanGatewayInterfaceAddresses[] | cdktf.IResolvable

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
  public get(index: number): DataNetskopebwanGatewayInterfaceAddressesOutputReference {
    return new DataNetskopebwanGatewayInterfaceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopebwanGatewayInterfaceDhcpRelayServerSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#relay_server_ip_list DataNetskopebwanGatewayInterface#relay_server_ip_list}
  */
  readonly relayServerIpList?: string[];
}

export function dataNetskopebwanGatewayInterfaceDhcpRelayServerSettingToTerraform(struct?: DataNetskopebwanGatewayInterfaceDhcpRelayServerSettingOutputReference | DataNetskopebwanGatewayInterfaceDhcpRelayServerSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relay_server_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.relayServerIpList),
  }
}


export function dataNetskopebwanGatewayInterfaceDhcpRelayServerSettingToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceDhcpRelayServerSettingOutputReference | DataNetskopebwanGatewayInterfaceDhcpRelayServerSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relay_server_ip_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.relayServerIpList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceDhcpRelayServerSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNetskopebwanGatewayInterfaceDhcpRelayServerSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relayServerIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayServerIpList = this._relayServerIpList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceDhcpRelayServerSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relayServerIpList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relayServerIpList = value.relayServerIpList;
    }
  }

  // relay_server_ip_list - computed: true, optional: true, required: false
  private _relayServerIpList?: string[]; 
  public get relayServerIpList() {
    return this.getListAttribute('relay_server_ip_list');
  }
  public set relayServerIpList(value: string[]) {
    this._relayServerIpList = value;
  }
  public resetRelayServerIpList() {
    this._relayServerIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayServerIpListInput() {
    return this._relayServerIpList;
  }
}
export interface DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#end_ipv4 DataNetskopebwanGatewayInterface#end_ipv4}
  */
  readonly endIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#start_ipv4 DataNetskopebwanGatewayInterface#start_ipv4}
  */
  readonly startIpv4?: string;
}

export function dataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRangesToTerraform(struct?: DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ipv4: cdktf.stringToTerraform(struct!.endIpv4),
    start_ipv4: cdktf.stringToTerraform(struct!.startIpv4),
  }
}


export function dataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRangesToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.endIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.startIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIpv4 = this._endIpv4;
    }
    if (this._startIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIpv4 = this._startIpv4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIpv4 = undefined;
      this._startIpv4 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIpv4 = value.endIpv4;
      this._startIpv4 = value.startIpv4;
    }
  }

  // end_ipv4 - computed: true, optional: true, required: false
  private _endIpv4?: string; 
  public get endIpv4() {
    return this.getStringAttribute('end_ipv4');
  }
  public set endIpv4(value: string) {
    this._endIpv4 = value;
  }
  public resetEndIpv4() {
    this._endIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpv4Input() {
    return this._endIpv4;
  }

  // start_ipv4 - computed: true, optional: true, required: false
  private _startIpv4?: string; 
  public get startIpv4() {
    return this.getStringAttribute('start_ipv4');
  }
  public set startIpv4(value: string) {
    this._startIpv4 = value;
  }
  public resetStartIpv4() {
    this._startIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpv4Input() {
    return this._startIpv4;
  }
}

export class DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRangesList extends cdktf.ComplexList {
  public internalValue? : DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRanges[] | cdktf.IResolvable

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
  public get(index: number): DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRangesOutputReference {
    return new DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#code DataNetskopebwanGatewayInterface#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#type DataNetskopebwanGatewayInterface#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#value DataNetskopebwanGatewayInterface#value}
  */
  readonly value?: string;
}

export function dataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptionsToTerraform(struct?: DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptionsToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // code - computed: true, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: true, optional: true, required: false
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

export class DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptionsList extends cdktf.ComplexList {
  public internalValue? : DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptions[] | cdktf.IResolvable

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
  public get(index: number): DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptionsOutputReference {
    return new DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4Bindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#ipv4_address DataNetskopebwanGatewayInterface#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#mac_address DataNetskopebwanGatewayInterface#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#name DataNetskopebwanGatewayInterface#name}
  */
  readonly name?: string;
}

export function dataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4BindingsToTerraform(struct?: DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4Bindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4BindingsToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4Bindings | cdktf.IResolvable): any {
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
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4BindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4Bindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4Bindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._macAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._macAddress = value.macAddress;
      this._name = value.name;
    }
  }

  // ipv4_address - computed: true, optional: true, required: false
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

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
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
}

export class DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4BindingsList extends cdktf.ComplexList {
  public internalValue? : DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4Bindings[] | cdktf.IResolvable

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
  public get(index: number): DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4BindingsOutputReference {
    return new DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4BindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopebwanGatewayInterfaceDhcpServerSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#dns_primary DataNetskopebwanGatewayInterface#dns_primary}
  */
  readonly dnsPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#dns_secondary DataNetskopebwanGatewayInterface#dns_secondary}
  */
  readonly dnsSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#lease_duration DataNetskopebwanGatewayInterface#lease_duration}
  */
  readonly leaseDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#network DataNetskopebwanGatewayInterface#network}
  */
  readonly network?: string;
  /**
  * address_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#address_ranges DataNetskopebwanGatewayInterface#address_ranges}
  */
  readonly addressRanges?: DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRanges[] | cdktf.IResolvable;
  /**
  * custom_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#custom_options DataNetskopebwanGatewayInterface#custom_options}
  */
  readonly customOptions?: DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptions[] | cdktf.IResolvable;
  /**
  * mac_address_to_ipv4_bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#mac_address_to_ipv4_bindings DataNetskopebwanGatewayInterface#mac_address_to_ipv4_bindings}
  */
  readonly macAddressToIpv4Bindings?: DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4Bindings[] | cdktf.IResolvable;
}

export function dataNetskopebwanGatewayInterfaceDhcpServerSettingToTerraform(struct?: DataNetskopebwanGatewayInterfaceDhcpServerSettingOutputReference | DataNetskopebwanGatewayInterfaceDhcpServerSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_primary: cdktf.stringToTerraform(struct!.dnsPrimary),
    dns_secondary: cdktf.stringToTerraform(struct!.dnsSecondary),
    lease_duration: cdktf.numberToTerraform(struct!.leaseDuration),
    network: cdktf.stringToTerraform(struct!.network),
    address_ranges: cdktf.listMapper(dataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRangesToTerraform, true)(struct!.addressRanges),
    custom_options: cdktf.listMapper(dataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptionsToTerraform, true)(struct!.customOptions),
    mac_address_to_ipv4_bindings: cdktf.listMapper(dataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4BindingsToTerraform, true)(struct!.macAddressToIpv4Bindings),
  }
}


export function dataNetskopebwanGatewayInterfaceDhcpServerSettingToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceDhcpServerSettingOutputReference | DataNetskopebwanGatewayInterfaceDhcpServerSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_primary: {
      value: cdktf.stringToHclTerraform(struct!.dnsPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_secondary: {
      value: cdktf.stringToHclTerraform(struct!.dnsSecondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lease_duration: {
      value: cdktf.numberToHclTerraform(struct!.leaseDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_ranges: {
      value: cdktf.listMapperHcl(dataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRangesToHclTerraform, true)(struct!.addressRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRangesList",
    },
    custom_options: {
      value: cdktf.listMapperHcl(dataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptionsToHclTerraform, true)(struct!.customOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptionsList",
    },
    mac_address_to_ipv4_bindings: {
      value: cdktf.listMapperHcl(dataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4BindingsToHclTerraform, true)(struct!.macAddressToIpv4Bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4BindingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceDhcpServerSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNetskopebwanGatewayInterfaceDhcpServerSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPrimary = this._dnsPrimary;
    }
    if (this._dnsSecondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSecondary = this._dnsSecondary;
    }
    if (this._leaseDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseDuration = this._leaseDuration;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._addressRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressRanges = this._addressRanges?.internalValue;
    }
    if (this._customOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOptions = this._customOptions?.internalValue;
    }
    if (this._macAddressToIpv4Bindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddressToIpv4Bindings = this._macAddressToIpv4Bindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceDhcpServerSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsPrimary = undefined;
      this._dnsSecondary = undefined;
      this._leaseDuration = undefined;
      this._network = undefined;
      this._addressRanges.internalValue = undefined;
      this._customOptions.internalValue = undefined;
      this._macAddressToIpv4Bindings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsPrimary = value.dnsPrimary;
      this._dnsSecondary = value.dnsSecondary;
      this._leaseDuration = value.leaseDuration;
      this._network = value.network;
      this._addressRanges.internalValue = value.addressRanges;
      this._customOptions.internalValue = value.customOptions;
      this._macAddressToIpv4Bindings.internalValue = value.macAddressToIpv4Bindings;
    }
  }

  // dns_primary - computed: true, optional: true, required: false
  private _dnsPrimary?: string; 
  public get dnsPrimary() {
    return this.getStringAttribute('dns_primary');
  }
  public set dnsPrimary(value: string) {
    this._dnsPrimary = value;
  }
  public resetDnsPrimary() {
    this._dnsPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrimaryInput() {
    return this._dnsPrimary;
  }

  // dns_secondary - computed: true, optional: true, required: false
  private _dnsSecondary?: string; 
  public get dnsSecondary() {
    return this.getStringAttribute('dns_secondary');
  }
  public set dnsSecondary(value: string) {
    this._dnsSecondary = value;
  }
  public resetDnsSecondary() {
    this._dnsSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSecondaryInput() {
    return this._dnsSecondary;
  }

  // lease_duration - computed: true, optional: true, required: false
  private _leaseDuration?: number; 
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }
  public set leaseDuration(value: number) {
    this._leaseDuration = value;
  }
  public resetLeaseDuration() {
    this._leaseDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseDurationInput() {
    return this._leaseDuration;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // address_ranges - computed: false, optional: true, required: false
  private _addressRanges = new DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRangesList(this, "address_ranges", false);
  public get addressRanges() {
    return this._addressRanges;
  }
  public putAddressRanges(value: DataNetskopebwanGatewayInterfaceDhcpServerSettingAddressRanges[] | cdktf.IResolvable) {
    this._addressRanges.internalValue = value;
  }
  public resetAddressRanges() {
    this._addressRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressRangesInput() {
    return this._addressRanges.internalValue;
  }

  // custom_options - computed: false, optional: true, required: false
  private _customOptions = new DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptionsList(this, "custom_options", false);
  public get customOptions() {
    return this._customOptions;
  }
  public putCustomOptions(value: DataNetskopebwanGatewayInterfaceDhcpServerSettingCustomOptions[] | cdktf.IResolvable) {
    this._customOptions.internalValue = value;
  }
  public resetCustomOptions() {
    this._customOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOptionsInput() {
    return this._customOptions.internalValue;
  }

  // mac_address_to_ipv4_bindings - computed: false, optional: true, required: false
  private _macAddressToIpv4Bindings = new DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4BindingsList(this, "mac_address_to_ipv4_bindings", false);
  public get macAddressToIpv4Bindings() {
    return this._macAddressToIpv4Bindings;
  }
  public putMacAddressToIpv4Bindings(value: DataNetskopebwanGatewayInterfaceDhcpServerSettingMacAddressToIpv4Bindings[] | cdktf.IResolvable) {
    this._macAddressToIpv4Bindings.internalValue = value;
  }
  public resetMacAddressToIpv4Bindings() {
    this._macAddressToIpv4Bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressToIpv4BindingsInput() {
    return this._macAddressToIpv4Bindings.internalValue;
  }
}
export interface DataNetskopebwanGatewayInterfaceLteProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#apn DataNetskopebwanGatewayInterface#apn}
  */
  readonly apn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#is_primary DataNetskopebwanGatewayInterface#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#password DataNetskopebwanGatewayInterface#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#user_name DataNetskopebwanGatewayInterface#user_name}
  */
  readonly userName?: string;
}

export function dataNetskopebwanGatewayInterfaceLtePropsToTerraform(struct?: DataNetskopebwanGatewayInterfaceLtePropsOutputReference | DataNetskopebwanGatewayInterfaceLteProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apn: cdktf.stringToTerraform(struct!.apn),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    password: cdktf.stringToTerraform(struct!.password),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataNetskopebwanGatewayInterfaceLtePropsToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceLtePropsOutputReference | DataNetskopebwanGatewayInterfaceLteProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apn: {
      value: cdktf.stringToHclTerraform(struct!.apn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceLtePropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNetskopebwanGatewayInterfaceLteProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apn !== undefined) {
      hasAnyValues = true;
      internalValueResult.apn = this._apn;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceLteProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apn = undefined;
      this._isPrimary = undefined;
      this._password = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apn = value.apn;
      this._isPrimary = value.isPrimary;
      this._password = value.password;
      this._userName = value.userName;
    }
  }

  // apn - computed: true, optional: true, required: false
  private _apn?: string; 
  public get apn() {
    return this.getStringAttribute('apn');
  }
  public set apn(value: string) {
    this._apn = value;
  }
  public resetApn() {
    this._apn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnInput() {
    return this._apn;
  }

  // is_primary - computed: true, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface DataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#data_limit_mb DataNetskopebwanGatewayInterface#data_limit_mb}
  */
  readonly dataLimitMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#data_usage_period DataNetskopebwanGatewayInterface#data_usage_period}
  */
  readonly dataUsagePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#data_usage_period_start_date DataNetskopebwanGatewayInterface#data_usage_period_start_date}
  */
  readonly dataUsagePeriodStartDate?: string;
}

export function dataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimitToTerraform(struct?: DataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimitOutputReference | DataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_limit_mb: cdktf.numberToTerraform(struct!.dataLimitMb),
    data_usage_period: cdktf.stringToTerraform(struct!.dataUsagePeriod),
    data_usage_period_start_date: cdktf.stringToTerraform(struct!.dataUsagePeriodStartDate),
  }
}


export function dataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimitToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimitOutputReference | DataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_limit_mb: {
      value: cdktf.numberToHclTerraform(struct!.dataLimitMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_usage_period: {
      value: cdktf.stringToHclTerraform(struct!.dataUsagePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_usage_period_start_date: {
      value: cdktf.stringToHclTerraform(struct!.dataUsagePeriodStartDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLimitMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLimitMb = this._dataLimitMb;
    }
    if (this._dataUsagePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataUsagePeriod = this._dataUsagePeriod;
    }
    if (this._dataUsagePeriodStartDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataUsagePeriodStartDate = this._dataUsagePeriodStartDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataLimitMb = undefined;
      this._dataUsagePeriod = undefined;
      this._dataUsagePeriodStartDate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataLimitMb = value.dataLimitMb;
      this._dataUsagePeriod = value.dataUsagePeriod;
      this._dataUsagePeriodStartDate = value.dataUsagePeriodStartDate;
    }
  }

  // data_limit_mb - computed: true, optional: true, required: false
  private _dataLimitMb?: number; 
  public get dataLimitMb() {
    return this.getNumberAttribute('data_limit_mb');
  }
  public set dataLimitMb(value: number) {
    this._dataLimitMb = value;
  }
  public resetDataLimitMb() {
    this._dataLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLimitMbInput() {
    return this._dataLimitMb;
  }

  // data_usage_period - computed: true, optional: true, required: false
  private _dataUsagePeriod?: string; 
  public get dataUsagePeriod() {
    return this.getStringAttribute('data_usage_period');
  }
  public set dataUsagePeriod(value: string) {
    this._dataUsagePeriod = value;
  }
  public resetDataUsagePeriod() {
    this._dataUsagePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataUsagePeriodInput() {
    return this._dataUsagePeriod;
  }

  // data_usage_period_start_date - computed: true, optional: true, required: false
  private _dataUsagePeriodStartDate?: string; 
  public get dataUsagePeriodStartDate() {
    return this.getStringAttribute('data_usage_period_start_date');
  }
  public set dataUsagePeriodStartDate(value: string) {
    this._dataUsagePeriodStartDate = value;
  }
  public resetDataUsagePeriodStartDate() {
    this._dataUsagePeriodStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataUsagePeriodStartDateInput() {
    return this._dataUsagePeriodStartDate;
  }
}
export interface DataNetskopebwanGatewayInterfaceOverlaySetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#bw_measurement_mode DataNetskopebwanGatewayInterface#bw_measurement_mode}
  */
  readonly bwMeasurementMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#do_copy_tos DataNetskopebwanGatewayInterface#do_copy_tos}
  */
  readonly doCopyTos?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#is_backup DataNetskopebwanGatewayInterface#is_backup}
  */
  readonly isBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#is_metered DataNetskopebwanGatewayInterface#is_metered}
  */
  readonly isMetered?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#rx_bw_kbps DataNetskopebwanGatewayInterface#rx_bw_kbps}
  */
  readonly rxBwKbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#tag DataNetskopebwanGatewayInterface#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#tx_bw_kbps DataNetskopebwanGatewayInterface#tx_bw_kbps}
  */
  readonly txBwKbps?: number;
  /**
  * data_usage_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#data_usage_limit DataNetskopebwanGatewayInterface#data_usage_limit}
  */
  readonly dataUsageLimit?: DataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimit;
}

export function dataNetskopebwanGatewayInterfaceOverlaySettingToTerraform(struct?: DataNetskopebwanGatewayInterfaceOverlaySettingOutputReference | DataNetskopebwanGatewayInterfaceOverlaySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bw_measurement_mode: cdktf.stringToTerraform(struct!.bwMeasurementMode),
    do_copy_tos: cdktf.booleanToTerraform(struct!.doCopyTos),
    is_backup: cdktf.booleanToTerraform(struct!.isBackup),
    is_metered: cdktf.booleanToTerraform(struct!.isMetered),
    rx_bw_kbps: cdktf.numberToTerraform(struct!.rxBwKbps),
    tag: cdktf.stringToTerraform(struct!.tag),
    tx_bw_kbps: cdktf.numberToTerraform(struct!.txBwKbps),
    data_usage_limit: dataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimitToTerraform(struct!.dataUsageLimit),
  }
}


export function dataNetskopebwanGatewayInterfaceOverlaySettingToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceOverlaySettingOutputReference | DataNetskopebwanGatewayInterfaceOverlaySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bw_measurement_mode: {
      value: cdktf.stringToHclTerraform(struct!.bwMeasurementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    do_copy_tos: {
      value: cdktf.booleanToHclTerraform(struct!.doCopyTos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_backup: {
      value: cdktf.booleanToHclTerraform(struct!.isBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_metered: {
      value: cdktf.booleanToHclTerraform(struct!.isMetered),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rx_bw_kbps: {
      value: cdktf.numberToHclTerraform(struct!.rxBwKbps),
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
    tx_bw_kbps: {
      value: cdktf.numberToHclTerraform(struct!.txBwKbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_usage_limit: {
      value: dataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimitToHclTerraform(struct!.dataUsageLimit),
      isBlock: true,
      type: "set",
      storageClassType: "DataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceOverlaySettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNetskopebwanGatewayInterfaceOverlaySetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bwMeasurementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwMeasurementMode = this._bwMeasurementMode;
    }
    if (this._doCopyTos !== undefined) {
      hasAnyValues = true;
      internalValueResult.doCopyTos = this._doCopyTos;
    }
    if (this._isBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBackup = this._isBackup;
    }
    if (this._isMetered !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMetered = this._isMetered;
    }
    if (this._rxBwKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxBwKbps = this._rxBwKbps;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._txBwKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.txBwKbps = this._txBwKbps;
    }
    if (this._dataUsageLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataUsageLimit = this._dataUsageLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceOverlaySetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bwMeasurementMode = undefined;
      this._doCopyTos = undefined;
      this._isBackup = undefined;
      this._isMetered = undefined;
      this._rxBwKbps = undefined;
      this._tag = undefined;
      this._txBwKbps = undefined;
      this._dataUsageLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bwMeasurementMode = value.bwMeasurementMode;
      this._doCopyTos = value.doCopyTos;
      this._isBackup = value.isBackup;
      this._isMetered = value.isMetered;
      this._rxBwKbps = value.rxBwKbps;
      this._tag = value.tag;
      this._txBwKbps = value.txBwKbps;
      this._dataUsageLimit.internalValue = value.dataUsageLimit;
    }
  }

  // bw_measurement_mode - computed: true, optional: true, required: false
  private _bwMeasurementMode?: string; 
  public get bwMeasurementMode() {
    return this.getStringAttribute('bw_measurement_mode');
  }
  public set bwMeasurementMode(value: string) {
    this._bwMeasurementMode = value;
  }
  public resetBwMeasurementMode() {
    this._bwMeasurementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwMeasurementModeInput() {
    return this._bwMeasurementMode;
  }

  // do_copy_tos - computed: true, optional: true, required: false
  private _doCopyTos?: boolean | cdktf.IResolvable; 
  public get doCopyTos() {
    return this.getBooleanAttribute('do_copy_tos');
  }
  public set doCopyTos(value: boolean | cdktf.IResolvable) {
    this._doCopyTos = value;
  }
  public resetDoCopyTos() {
    this._doCopyTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doCopyTosInput() {
    return this._doCopyTos;
  }

  // is_backup - computed: true, optional: true, required: false
  private _isBackup?: boolean | cdktf.IResolvable; 
  public get isBackup() {
    return this.getBooleanAttribute('is_backup');
  }
  public set isBackup(value: boolean | cdktf.IResolvable) {
    this._isBackup = value;
  }
  public resetIsBackup() {
    this._isBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBackupInput() {
    return this._isBackup;
  }

  // is_metered - computed: true, optional: true, required: false
  private _isMetered?: boolean | cdktf.IResolvable; 
  public get isMetered() {
    return this.getBooleanAttribute('is_metered');
  }
  public set isMetered(value: boolean | cdktf.IResolvable) {
    this._isMetered = value;
  }
  public resetIsMetered() {
    this._isMetered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMeteredInput() {
    return this._isMetered;
  }

  // rx_bw_kbps - computed: true, optional: true, required: false
  private _rxBwKbps?: number; 
  public get rxBwKbps() {
    return this.getNumberAttribute('rx_bw_kbps');
  }
  public set rxBwKbps(value: number) {
    this._rxBwKbps = value;
  }
  public resetRxBwKbps() {
    this._rxBwKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxBwKbpsInput() {
    return this._rxBwKbps;
  }

  // tag - computed: true, optional: true, required: false
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

  // tx_bw_kbps - computed: true, optional: true, required: false
  private _txBwKbps?: number; 
  public get txBwKbps() {
    return this.getNumberAttribute('tx_bw_kbps');
  }
  public set txBwKbps(value: number) {
    this._txBwKbps = value;
  }
  public resetTxBwKbps() {
    this._txBwKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txBwKbpsInput() {
    return this._txBwKbps;
  }

  // data_usage_limit - computed: false, optional: true, required: false
  private _dataUsageLimit = new DataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimitOutputReference(this, "data_usage_limit");
  public get dataUsageLimit() {
    return this._dataUsageLimit;
  }
  public putDataUsageLimit(value: DataNetskopebwanGatewayInterfaceOverlaySettingDataUsageLimit) {
    this._dataUsageLimit.internalValue = value;
  }
  public resetDataUsageLimit() {
    this._dataUsageLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataUsageLimitInput() {
    return this._dataUsageLimit.internalValue;
  }
}
export interface DataNetskopebwanGatewayInterfaceProxyArpSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#ipv4_address DataNetskopebwanGatewayInterface#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#ipv4_gateway DataNetskopebwanGatewayInterface#ipv4_gateway}
  */
  readonly ipv4Gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#ipv4_mask DataNetskopebwanGatewayInterface#ipv4_mask}
  */
  readonly ipv4Mask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#lan_interface_name DataNetskopebwanGatewayInterface#lan_interface_name}
  */
  readonly lanInterfaceName?: string;
}

export function dataNetskopebwanGatewayInterfaceProxyArpSettingsToTerraform(struct?: DataNetskopebwanGatewayInterfaceProxyArpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_gateway: cdktf.stringToTerraform(struct!.ipv4Gateway),
    ipv4_mask: cdktf.stringToTerraform(struct!.ipv4Mask),
    lan_interface_name: cdktf.stringToTerraform(struct!.lanInterfaceName),
  }
}


export function dataNetskopebwanGatewayInterfaceProxyArpSettingsToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceProxyArpSettings | cdktf.IResolvable): any {
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
    ipv4_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_interface_name: {
      value: cdktf.stringToHclTerraform(struct!.lanInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceProxyArpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopebwanGatewayInterfaceProxyArpSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Gateway = this._ipv4Gateway;
    }
    if (this._ipv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mask = this._ipv4Mask;
    }
    if (this._lanInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanInterfaceName = this._lanInterfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceProxyArpSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4Gateway = undefined;
      this._ipv4Mask = undefined;
      this._lanInterfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Gateway = value.ipv4Gateway;
      this._ipv4Mask = value.ipv4Mask;
      this._lanInterfaceName = value.lanInterfaceName;
    }
  }

  // ipv4_address - computed: true, optional: true, required: false
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

  // ipv4_gateway - computed: true, optional: true, required: false
  private _ipv4Gateway?: string; 
  public get ipv4Gateway() {
    return this.getStringAttribute('ipv4_gateway');
  }
  public set ipv4Gateway(value: string) {
    this._ipv4Gateway = value;
  }
  public resetIpv4Gateway() {
    this._ipv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GatewayInput() {
    return this._ipv4Gateway;
  }

  // ipv4_mask - computed: true, optional: true, required: false
  private _ipv4Mask?: string; 
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }
  public set ipv4Mask(value: string) {
    this._ipv4Mask = value;
  }
  public resetIpv4Mask() {
    this._ipv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskInput() {
    return this._ipv4Mask;
  }

  // lan_interface_name - computed: true, optional: true, required: false
  private _lanInterfaceName?: string; 
  public get lanInterfaceName() {
    return this.getStringAttribute('lan_interface_name');
  }
  public set lanInterfaceName(value: string) {
    this._lanInterfaceName = value;
  }
  public resetLanInterfaceName() {
    this._lanInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanInterfaceNameInput() {
    return this._lanInterfaceName;
  }
}

export class DataNetskopebwanGatewayInterfaceProxyArpSettingsList extends cdktf.ComplexList {
  public internalValue? : DataNetskopebwanGatewayInterfaceProxyArpSettings[] | cdktf.IResolvable

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
  public get(index: number): DataNetskopebwanGatewayInterfaceProxyArpSettingsOutputReference {
    return new DataNetskopebwanGatewayInterfaceProxyArpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopebwanGatewayInterfaceRadius {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#accounting_port DataNetskopebwanGatewayInterface#accounting_port}
  */
  readonly accountingPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#client_interface_name DataNetskopebwanGatewayInterface#client_interface_name}
  */
  readonly clientInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#client_ipv4 DataNetskopebwanGatewayInterface#client_ipv4}
  */
  readonly clientIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#ipv4 DataNetskopebwanGatewayInterface#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#name DataNetskopebwanGatewayInterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#port DataNetskopebwanGatewayInterface#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#secret DataNetskopebwanGatewayInterface#secret}
  */
  readonly secret?: string;
}

export function dataNetskopebwanGatewayInterfaceRadiusToTerraform(struct?: DataNetskopebwanGatewayInterfaceRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounting_port: cdktf.numberToTerraform(struct!.accountingPort),
    client_interface_name: cdktf.stringToTerraform(struct!.clientInterfaceName),
    client_ipv4: cdktf.stringToTerraform(struct!.clientIpv4),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataNetskopebwanGatewayInterfaceRadiusToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounting_port: {
      value: cdktf.numberToHclTerraform(struct!.accountingPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_interface_name: {
      value: cdktf.stringToHclTerraform(struct!.clientInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.clientIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceRadiusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopebwanGatewayInterfaceRadius | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountingPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingPort = this._accountingPort;
    }
    if (this._clientInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientInterfaceName = this._clientInterfaceName;
    }
    if (this._clientIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpv4 = this._clientIpv4;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceRadius | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountingPort = undefined;
      this._clientInterfaceName = undefined;
      this._clientIpv4 = undefined;
      this._ipv4 = undefined;
      this._name = undefined;
      this._port = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountingPort = value.accountingPort;
      this._clientInterfaceName = value.clientInterfaceName;
      this._clientIpv4 = value.clientIpv4;
      this._ipv4 = value.ipv4;
      this._name = value.name;
      this._port = value.port;
      this._secret = value.secret;
    }
  }

  // accounting_port - computed: true, optional: true, required: false
  private _accountingPort?: number; 
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }
  public set accountingPort(value: number) {
    this._accountingPort = value;
  }
  public resetAccountingPort() {
    this._accountingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingPortInput() {
    return this._accountingPort;
  }

  // client_interface_name - computed: true, optional: true, required: false
  private _clientInterfaceName?: string; 
  public get clientInterfaceName() {
    return this.getStringAttribute('client_interface_name');
  }
  public set clientInterfaceName(value: string) {
    this._clientInterfaceName = value;
  }
  public resetClientInterfaceName() {
    this._clientInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInterfaceNameInput() {
    return this._clientInterfaceName;
  }

  // client_ipv4 - computed: true, optional: true, required: false
  private _clientIpv4?: string; 
  public get clientIpv4() {
    return this.getStringAttribute('client_ipv4');
  }
  public set clientIpv4(value: string) {
    this._clientIpv4 = value;
  }
  public resetClientIpv4() {
    this._clientIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpv4Input() {
    return this._clientIpv4;
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret - computed: true, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class DataNetskopebwanGatewayInterfaceRadiusList extends cdktf.ComplexList {
  public internalValue? : DataNetskopebwanGatewayInterfaceRadius[] | cdktf.IResolvable

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
  public get(index: number): DataNetskopebwanGatewayInterfaceRadiusOutputReference {
    return new DataNetskopebwanGatewayInterfaceRadiusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopebwanGatewayInterfaceVrrp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#advertise_interval DataNetskopebwanGatewayInterface#advertise_interval}
  */
  readonly advertiseInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#priority DataNetskopebwanGatewayInterface#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#state DataNetskopebwanGatewayInterface#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#virtual_ipv4 DataNetskopebwanGatewayInterface#virtual_ipv4}
  */
  readonly virtualIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#virtual_router_id DataNetskopebwanGatewayInterface#virtual_router_id}
  */
  readonly virtualRouterId?: number;
}

export function dataNetskopebwanGatewayInterfaceVrrpToTerraform(struct?: DataNetskopebwanGatewayInterfaceVrrpOutputReference | DataNetskopebwanGatewayInterfaceVrrp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_interval: cdktf.numberToTerraform(struct!.advertiseInterval),
    priority: cdktf.numberToTerraform(struct!.priority),
    state: cdktf.stringToTerraform(struct!.state),
    virtual_ipv4: cdktf.stringToTerraform(struct!.virtualIpv4),
    virtual_router_id: cdktf.numberToTerraform(struct!.virtualRouterId),
  }
}


export function dataNetskopebwanGatewayInterfaceVrrpToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceVrrpOutputReference | DataNetskopebwanGatewayInterfaceVrrp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_interval: {
      value: cdktf.numberToHclTerraform(struct!.advertiseInterval),
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
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.virtualIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_router_id: {
      value: cdktf.numberToHclTerraform(struct!.virtualRouterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceVrrpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNetskopebwanGatewayInterfaceVrrp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseInterval = this._advertiseInterval;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._virtualIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualIpv4 = this._virtualIpv4;
    }
    if (this._virtualRouterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualRouterId = this._virtualRouterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceVrrp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseInterval = undefined;
      this._priority = undefined;
      this._state = undefined;
      this._virtualIpv4 = undefined;
      this._virtualRouterId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseInterval = value.advertiseInterval;
      this._priority = value.priority;
      this._state = value.state;
      this._virtualIpv4 = value.virtualIpv4;
      this._virtualRouterId = value.virtualRouterId;
    }
  }

  // advertise_interval - computed: true, optional: true, required: false
  private _advertiseInterval?: number; 
  public get advertiseInterval() {
    return this.getNumberAttribute('advertise_interval');
  }
  public set advertiseInterval(value: number) {
    this._advertiseInterval = value;
  }
  public resetAdvertiseInterval() {
    this._advertiseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIntervalInput() {
    return this._advertiseInterval;
  }

  // priority - computed: true, optional: true, required: false
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

  // state - computed: true, optional: true, required: false
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

  // virtual_ipv4 - computed: true, optional: true, required: false
  private _virtualIpv4?: string; 
  public get virtualIpv4() {
    return this.getStringAttribute('virtual_ipv4');
  }
  public set virtualIpv4(value: string) {
    this._virtualIpv4 = value;
  }
  public resetVirtualIpv4() {
    this._virtualIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualIpv4Input() {
    return this._virtualIpv4;
  }

  // virtual_router_id - computed: true, optional: true, required: false
  private _virtualRouterId?: number; 
  public get virtualRouterId() {
    return this.getNumberAttribute('virtual_router_id');
  }
  public set virtualRouterId(value: number) {
    this._virtualRouterId = value;
  }
  public resetVirtualRouterId() {
    this._virtualRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterIdInput() {
    return this._virtualRouterId;
  }
}
export interface DataNetskopebwanGatewayInterfaceWifiPropsEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#key DataNetskopebwanGatewayInterface#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#protocol DataNetskopebwanGatewayInterface#protocol}
  */
  readonly protocol?: string;
}

export function dataNetskopebwanGatewayInterfaceWifiPropsEncryptionToTerraform(struct?: DataNetskopebwanGatewayInterfaceWifiPropsEncryptionOutputReference | DataNetskopebwanGatewayInterfaceWifiPropsEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataNetskopebwanGatewayInterfaceWifiPropsEncryptionToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceWifiPropsEncryptionOutputReference | DataNetskopebwanGatewayInterfaceWifiPropsEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceWifiPropsEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNetskopebwanGatewayInterfaceWifiPropsEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceWifiPropsEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._protocol = value.protocol;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
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
export interface DataNetskopebwanGatewayInterfaceWifiProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#bridge DataNetskopebwanGatewayInterface#bridge}
  */
  readonly bridge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#channel DataNetskopebwanGatewayInterface#channel}
  */
  readonly channel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#country_code DataNetskopebwanGatewayInterface#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#freq DataNetskopebwanGatewayInterface#freq}
  */
  readonly freq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#mode DataNetskopebwanGatewayInterface#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#ssid DataNetskopebwanGatewayInterface#ssid}
  */
  readonly ssid?: string;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#encryption DataNetskopebwanGatewayInterface#encryption}
  */
  readonly encryption?: DataNetskopebwanGatewayInterfaceWifiPropsEncryption;
}

export function dataNetskopebwanGatewayInterfaceWifiPropsToTerraform(struct?: DataNetskopebwanGatewayInterfaceWifiPropsOutputReference | DataNetskopebwanGatewayInterfaceWifiProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: cdktf.stringToTerraform(struct!.bridge),
    channel: cdktf.numberToTerraform(struct!.channel),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    freq: cdktf.numberToTerraform(struct!.freq),
    mode: cdktf.stringToTerraform(struct!.mode),
    ssid: cdktf.stringToTerraform(struct!.ssid),
    encryption: dataNetskopebwanGatewayInterfaceWifiPropsEncryptionToTerraform(struct!.encryption),
  }
}


export function dataNetskopebwanGatewayInterfaceWifiPropsToHclTerraform(struct?: DataNetskopebwanGatewayInterfaceWifiPropsOutputReference | DataNetskopebwanGatewayInterfaceWifiProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bridge: {
      value: cdktf.stringToHclTerraform(struct!.bridge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.numberToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freq: {
      value: cdktf.numberToHclTerraform(struct!.freq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssid: {
      value: cdktf.stringToHclTerraform(struct!.ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: dataNetskopebwanGatewayInterfaceWifiPropsEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "set",
      storageClassType: "DataNetskopebwanGatewayInterfaceWifiPropsEncryptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanGatewayInterfaceWifiPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNetskopebwanGatewayInterfaceWifiProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._freq !== undefined) {
      hasAnyValues = true;
      internalValueResult.freq = this._freq;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssid = this._ssid;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanGatewayInterfaceWifiProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bridge = undefined;
      this._channel = undefined;
      this._countryCode = undefined;
      this._freq = undefined;
      this._mode = undefined;
      this._ssid = undefined;
      this._encryption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bridge = value.bridge;
      this._channel = value.channel;
      this._countryCode = value.countryCode;
      this._freq = value.freq;
      this._mode = value.mode;
      this._ssid = value.ssid;
      this._encryption.internalValue = value.encryption;
    }
  }

  // bridge - computed: true, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: number; 
  public get channel() {
    return this.getNumberAttribute('channel');
  }
  public set channel(value: number) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // freq - computed: true, optional: true, required: false
  private _freq?: number; 
  public get freq() {
    return this.getNumberAttribute('freq');
  }
  public set freq(value: number) {
    this._freq = value;
  }
  public resetFreq() {
    this._freq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freqInput() {
    return this._freq;
  }

  // mode - computed: true, optional: true, required: false
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

  // ssid - computed: true, optional: true, required: false
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new DataNetskopebwanGatewayInterfaceWifiPropsEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: DataNetskopebwanGatewayInterfaceWifiPropsEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface netskopebwan_gateway_interface}
*/
export class DataNetskopebwanGatewayInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskopebwan_gateway_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopebwanGatewayInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopebwanGatewayInterface to import
  * @param importFromId The id of the existing DataNetskopebwanGatewayInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopebwanGatewayInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskopebwan_gateway_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/gateway_interface netskopebwan_gateway_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopebwanGatewayInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetskopebwanGatewayInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'netskopebwan_gateway_interface',
      terraformGeneratorMetadata: {
        providerName: 'netskopebwan',
        providerVersion: '0.0.2',
        providerVersionConstraint: '0.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._8021XMab = config.8021XMab;
    this._allowedVlans = config.allowedVlans;
    this._bridgeMembers = config.bridgeMembers;
    this._doAdvertise = config.doAdvertise;
    this._enableNat = config.enableNat;
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._isDisabled = config.isDisabled;
    this._macAddr = config.macAddr;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._mtuDiscovery = config.mtuDiscovery;
    this._name = config.name;
    this._type = config.type;
    this._vlan = config.vlan;
    this._zone = config.zone;
    this._addresses.internalValue = config.addresses;
    this._dhcpRelayServerSetting.internalValue = config.dhcpRelayServerSetting;
    this._dhcpServerSetting.internalValue = config.dhcpServerSetting;
    this._lteProps.internalValue = config.lteProps;
    this._overlaySetting.internalValue = config.overlaySetting;
    this._proxyArpSettings.internalValue = config.proxyArpSettings;
    this._radius.internalValue = config.radius;
    this._vrrp.internalValue = config.vrrp;
    this._wifiProps.internalValue = config.wifiProps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // 8021x_mab - computed: true, optional: true, required: false
  private _8021XMab?: boolean | cdktf.IResolvable; 
  public get 8021XMab() {
    return this.getBooleanAttribute('8021x_mab');
  }
  public set 8021XMab(value: boolean | cdktf.IResolvable) {
    this._8021XMab = value;
  }
  public reset8021XMab() {
    this._8021XMab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get 8021XMabInput() {
    return this._8021XMab;
  }

  // allowed_vlans - computed: true, optional: true, required: false
  private _allowedVlans?: number[]; 
  public get allowedVlans() {
    return this.getNumberListAttribute('allowed_vlans');
  }
  public set allowedVlans(value: number[]) {
    this._allowedVlans = value;
  }
  public resetAllowedVlans() {
    this._allowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlansInput() {
    return this._allowedVlans;
  }

  // bridge_members - computed: true, optional: true, required: false
  private _bridgeMembers?: string[]; 
  public get bridgeMembers() {
    return this.getListAttribute('bridge_members');
  }
  public set bridgeMembers(value: string[]) {
    this._bridgeMembers = value;
  }
  public resetBridgeMembers() {
    this._bridgeMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeMembersInput() {
    return this._bridgeMembers;
  }

  // do_advertise - computed: true, optional: true, required: false
  private _doAdvertise?: boolean | cdktf.IResolvable; 
  public get doAdvertise() {
    return this.getBooleanAttribute('do_advertise');
  }
  public set doAdvertise(value: boolean | cdktf.IResolvable) {
    this._doAdvertise = value;
  }
  public resetDoAdvertise() {
    this._doAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doAdvertiseInput() {
    return this._doAdvertise;
  }

  // enable_nat - computed: true, optional: true, required: false
  private _enableNat?: boolean | cdktf.IResolvable; 
  public get enableNat() {
    return this.getBooleanAttribute('enable_nat');
  }
  public set enableNat(value: boolean | cdktf.IResolvable) {
    this._enableNat = value;
  }
  public resetEnableNat() {
    this._enableNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNatInput() {
    return this._enableNat;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
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

  // mode - computed: true, optional: true, required: false
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

  // mtu - computed: true, optional: true, required: false
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

  // mtu_discovery - computed: true, optional: true, required: false
  private _mtuDiscovery?: string; 
  public get mtuDiscovery() {
    return this.getStringAttribute('mtu_discovery');
  }
  public set mtuDiscovery(value: string) {
    this._mtuDiscovery = value;
  }
  public resetMtuDiscovery() {
    this._mtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuDiscoveryInput() {
    return this._mtuDiscovery;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses = new DataNetskopebwanGatewayInterfaceAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: DataNetskopebwanGatewayInterfaceAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // dhcp_relay_server_setting - computed: false, optional: true, required: false
  private _dhcpRelayServerSetting = new DataNetskopebwanGatewayInterfaceDhcpRelayServerSettingOutputReference(this, "dhcp_relay_server_setting");
  public get dhcpRelayServerSetting() {
    return this._dhcpRelayServerSetting;
  }
  public putDhcpRelayServerSetting(value: DataNetskopebwanGatewayInterfaceDhcpRelayServerSetting) {
    this._dhcpRelayServerSetting.internalValue = value;
  }
  public resetDhcpRelayServerSetting() {
    this._dhcpRelayServerSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayServerSettingInput() {
    return this._dhcpRelayServerSetting.internalValue;
  }

  // dhcp_server_setting - computed: false, optional: true, required: false
  private _dhcpServerSetting = new DataNetskopebwanGatewayInterfaceDhcpServerSettingOutputReference(this, "dhcp_server_setting");
  public get dhcpServerSetting() {
    return this._dhcpServerSetting;
  }
  public putDhcpServerSetting(value: DataNetskopebwanGatewayInterfaceDhcpServerSetting) {
    this._dhcpServerSetting.internalValue = value;
  }
  public resetDhcpServerSetting() {
    this._dhcpServerSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerSettingInput() {
    return this._dhcpServerSetting.internalValue;
  }

  // lte_props - computed: false, optional: true, required: false
  private _lteProps = new DataNetskopebwanGatewayInterfaceLtePropsOutputReference(this, "lte_props");
  public get lteProps() {
    return this._lteProps;
  }
  public putLteProps(value: DataNetskopebwanGatewayInterfaceLteProps) {
    this._lteProps.internalValue = value;
  }
  public resetLteProps() {
    this._lteProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltePropsInput() {
    return this._lteProps.internalValue;
  }

  // overlay_setting - computed: false, optional: true, required: false
  private _overlaySetting = new DataNetskopebwanGatewayInterfaceOverlaySettingOutputReference(this, "overlay_setting");
  public get overlaySetting() {
    return this._overlaySetting;
  }
  public putOverlaySetting(value: DataNetskopebwanGatewayInterfaceOverlaySetting) {
    this._overlaySetting.internalValue = value;
  }
  public resetOverlaySetting() {
    this._overlaySetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlaySettingInput() {
    return this._overlaySetting.internalValue;
  }

  // proxy_arp_settings - computed: false, optional: true, required: false
  private _proxyArpSettings = new DataNetskopebwanGatewayInterfaceProxyArpSettingsList(this, "proxy_arp_settings", false);
  public get proxyArpSettings() {
    return this._proxyArpSettings;
  }
  public putProxyArpSettings(value: DataNetskopebwanGatewayInterfaceProxyArpSettings[] | cdktf.IResolvable) {
    this._proxyArpSettings.internalValue = value;
  }
  public resetProxyArpSettings() {
    this._proxyArpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyArpSettingsInput() {
    return this._proxyArpSettings.internalValue;
  }

  // radius - computed: false, optional: true, required: false
  private _radius = new DataNetskopebwanGatewayInterfaceRadiusList(this, "radius", false);
  public get radius() {
    return this._radius;
  }
  public putRadius(value: DataNetskopebwanGatewayInterfaceRadius[] | cdktf.IResolvable) {
    this._radius.internalValue = value;
  }
  public resetRadius() {
    this._radius.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius.internalValue;
  }

  // vrrp - computed: false, optional: true, required: false
  private _vrrp = new DataNetskopebwanGatewayInterfaceVrrpOutputReference(this, "vrrp");
  public get vrrp() {
    return this._vrrp;
  }
  public putVrrp(value: DataNetskopebwanGatewayInterfaceVrrp) {
    this._vrrp.internalValue = value;
  }
  public resetVrrp() {
    this._vrrp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpInput() {
    return this._vrrp.internalValue;
  }

  // wifi_props - computed: false, optional: true, required: false
  private _wifiProps = new DataNetskopebwanGatewayInterfaceWifiPropsOutputReference(this, "wifi_props");
  public get wifiProps() {
    return this._wifiProps;
  }
  public putWifiProps(value: DataNetskopebwanGatewayInterfaceWifiProps) {
    this._wifiProps.internalValue = value;
  }
  public resetWifiProps() {
    this._wifiProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiPropsInput() {
    return this._wifiProps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      8021x_mab: cdktf.booleanToTerraform(this._8021XMab),
      allowed_vlans: cdktf.listMapper(cdktf.numberToTerraform, false)(this._allowedVlans),
      bridge_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bridgeMembers),
      do_advertise: cdktf.booleanToTerraform(this._doAdvertise),
      enable_nat: cdktf.booleanToTerraform(this._enableNat),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      mac_addr: cdktf.stringToTerraform(this._macAddr),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.numberToTerraform(this._mtu),
      mtu_discovery: cdktf.stringToTerraform(this._mtuDiscovery),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      vlan: cdktf.numberToTerraform(this._vlan),
      zone: cdktf.stringToTerraform(this._zone),
      addresses: cdktf.listMapper(dataNetskopebwanGatewayInterfaceAddressesToTerraform, true)(this._addresses.internalValue),
      dhcp_relay_server_setting: dataNetskopebwanGatewayInterfaceDhcpRelayServerSettingToTerraform(this._dhcpRelayServerSetting.internalValue),
      dhcp_server_setting: dataNetskopebwanGatewayInterfaceDhcpServerSettingToTerraform(this._dhcpServerSetting.internalValue),
      lte_props: dataNetskopebwanGatewayInterfaceLtePropsToTerraform(this._lteProps.internalValue),
      overlay_setting: dataNetskopebwanGatewayInterfaceOverlaySettingToTerraform(this._overlaySetting.internalValue),
      proxy_arp_settings: cdktf.listMapper(dataNetskopebwanGatewayInterfaceProxyArpSettingsToTerraform, true)(this._proxyArpSettings.internalValue),
      radius: cdktf.listMapper(dataNetskopebwanGatewayInterfaceRadiusToTerraform, true)(this._radius.internalValue),
      vrrp: dataNetskopebwanGatewayInterfaceVrrpToTerraform(this._vrrp.internalValue),
      wifi_props: dataNetskopebwanGatewayInterfaceWifiPropsToTerraform(this._wifiProps.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      8021x_mab: {
        value: cdktf.booleanToHclTerraform(this._8021XMab),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_vlans: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._allowedVlans),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      bridge_members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bridgeMembers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      do_advertise: {
        value: cdktf.booleanToHclTerraform(this._doAdvertise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_nat: {
        value: cdktf.booleanToHclTerraform(this._enableNat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mac_addr: {
        value: cdktf.stringToHclTerraform(this._macAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu_discovery: {
        value: cdktf.stringToHclTerraform(this._mtuDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addresses: {
        value: cdktf.listMapperHcl(dataNetskopebwanGatewayInterfaceAddressesToHclTerraform, true)(this._addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNetskopebwanGatewayInterfaceAddressesList",
      },
      dhcp_relay_server_setting: {
        value: dataNetskopebwanGatewayInterfaceDhcpRelayServerSettingToHclTerraform(this._dhcpRelayServerSetting.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNetskopebwanGatewayInterfaceDhcpRelayServerSettingList",
      },
      dhcp_server_setting: {
        value: dataNetskopebwanGatewayInterfaceDhcpServerSettingToHclTerraform(this._dhcpServerSetting.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNetskopebwanGatewayInterfaceDhcpServerSettingList",
      },
      lte_props: {
        value: dataNetskopebwanGatewayInterfaceLtePropsToHclTerraform(this._lteProps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNetskopebwanGatewayInterfaceLtePropsList",
      },
      overlay_setting: {
        value: dataNetskopebwanGatewayInterfaceOverlaySettingToHclTerraform(this._overlaySetting.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNetskopebwanGatewayInterfaceOverlaySettingList",
      },
      proxy_arp_settings: {
        value: cdktf.listMapperHcl(dataNetskopebwanGatewayInterfaceProxyArpSettingsToHclTerraform, true)(this._proxyArpSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNetskopebwanGatewayInterfaceProxyArpSettingsList",
      },
      radius: {
        value: cdktf.listMapperHcl(dataNetskopebwanGatewayInterfaceRadiusToHclTerraform, true)(this._radius.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNetskopebwanGatewayInterfaceRadiusList",
      },
      vrrp: {
        value: dataNetskopebwanGatewayInterfaceVrrpToHclTerraform(this._vrrp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNetskopebwanGatewayInterfaceVrrpList",
      },
      wifi_props: {
        value: dataNetskopebwanGatewayInterfaceWifiPropsToHclTerraform(this._wifiProps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNetskopebwanGatewayInterfaceWifiPropsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
