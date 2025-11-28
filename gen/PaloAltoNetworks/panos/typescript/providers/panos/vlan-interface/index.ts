// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#adjust_tcp_mss VlanInterface#adjust_tcp_mss}
  */
  readonly adjustTcpMss?: VlanInterfaceAdjustTcpMss;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#arp VlanInterface#arp}
  */
  readonly arp?: VlanInterfaceArp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#bonjour VlanInterface#bonjour}
  */
  readonly bonjour?: VlanInterfaceBonjour;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#comment VlanInterface#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ddns_config VlanInterface#ddns_config}
  */
  readonly ddnsConfig?: VlanInterfaceDdnsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#df_ignore VlanInterface#df_ignore}
  */
  readonly dfIgnore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dhcp_client VlanInterface#dhcp_client}
  */
  readonly dhcpClient?: VlanInterfaceDhcpClient;
  /**
  * Interface management profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#interface_management_profile VlanInterface#interface_management_profile}
  */
  readonly interfaceManagementProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ip VlanInterface#ip}
  */
  readonly ip?: VlanInterfaceIp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ipv6 VlanInterface#ipv6}
  */
  readonly ipv6?: VlanInterfaceIpv6;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#location VlanInterface#location}
  */
  readonly location: VlanInterfaceLocation;
  /**
  * Maximum Transfer Unit, up to 9216 in Jumbo-Frame mode, up to 1500 otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#mtu VlanInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ndp_proxy VlanInterface#ndp_proxy}
  */
  readonly ndpProxy?: VlanInterfaceNdpProxy;
  /**
  * Netflow Server Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#netflow_profile VlanInterface#netflow_profile}
  */
  readonly netflowProfile?: string;
}
export interface VlanInterfaceAdjustTcpMss {
  /**
  * Set if TCP MSS value should be reduced based on mtu
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * IPv4 MSS adjustment size (in bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ipv4_mss_adjustment VlanInterface#ipv4_mss_adjustment}
  */
  readonly ipv4MssAdjustment?: number;
  /**
  * IPv6 MSS adjustment size (in bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ipv6_mss_adjustment VlanInterface#ipv6_mss_adjustment}
  */
  readonly ipv6MssAdjustment?: number;
}

export function vlanInterfaceAdjustTcpMssToTerraform(struct?: VlanInterfaceAdjustTcpMss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    ipv4_mss_adjustment: cdktf.numberToTerraform(struct!.ipv4MssAdjustment),
    ipv6_mss_adjustment: cdktf.numberToTerraform(struct!.ipv6MssAdjustment),
  }
}


export function vlanInterfaceAdjustTcpMssToHclTerraform(struct?: VlanInterfaceAdjustTcpMss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4_mss_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.ipv4MssAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_mss_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.ipv6MssAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceAdjustTcpMssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceAdjustTcpMss | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ipv4MssAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4MssAdjustment = this._ipv4MssAdjustment;
    }
    if (this._ipv6MssAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6MssAdjustment = this._ipv6MssAdjustment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceAdjustTcpMss | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._ipv4MssAdjustment = undefined;
      this._ipv6MssAdjustment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._ipv4MssAdjustment = value.ipv4MssAdjustment;
      this._ipv6MssAdjustment = value.ipv6MssAdjustment;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ipv4_mss_adjustment - computed: true, optional: true, required: false
  private _ipv4MssAdjustment?: number; 
  public get ipv4MssAdjustment() {
    return this.getNumberAttribute('ipv4_mss_adjustment');
  }
  public set ipv4MssAdjustment(value: number) {
    this._ipv4MssAdjustment = value;
  }
  public resetIpv4MssAdjustment() {
    this._ipv4MssAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MssAdjustmentInput() {
    return this._ipv4MssAdjustment;
  }

  // ipv6_mss_adjustment - computed: true, optional: true, required: false
  private _ipv6MssAdjustment?: number; 
  public get ipv6MssAdjustment() {
    return this.getNumberAttribute('ipv6_mss_adjustment');
  }
  public set ipv6MssAdjustment(value: number) {
    this._ipv6MssAdjustment = value;
  }
  public resetIpv6MssAdjustment() {
    this._ipv6MssAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MssAdjustmentInput() {
    return this._ipv6MssAdjustment;
  }
}
export interface VlanInterfaceArp {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#hw_address VlanInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Egress interface associated with this ARP entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#interface VlanInterface#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
}

export function vlanInterfaceArpToTerraform(struct?: VlanInterfaceArp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    interface: cdktf.stringToTerraform(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vlanInterfaceArpToHclTerraform(struct?: VlanInterfaceArp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hw_address: {
      value: cdktf.stringToHclTerraform(struct!.hwAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
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

export class VlanInterfaceArpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceArp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hwAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwAddress = this._hwAddress;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceArp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hwAddress = undefined;
      this._interface = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hwAddress = value.hwAddress;
      this._interface = value.interface;
      this._name = value.name;
    }
  }

  // hw_address - computed: false, optional: true, required: false
  private _hwAddress?: string; 
  public get hwAddress() {
    return this.getStringAttribute('hw_address');
  }
  public set hwAddress(value: string) {
    this._hwAddress = value;
  }
  public resetHwAddress() {
    this._hwAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwAddressInput() {
    return this._hwAddress;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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
}

export class VlanInterfaceArpList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceArp[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceArpOutputReference {
    return new VlanInterfaceArpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceBonjour {
  /**
  * Set to support Bonjour service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * default 0: NO-Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#group_id VlanInterface#group_id}
  */
  readonly groupId?: number;
  /**
  * Set to check and update TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ttl_check VlanInterface#ttl_check}
  */
  readonly ttlCheck?: boolean | cdktf.IResolvable;
}

export function vlanInterfaceBonjourToTerraform(struct?: VlanInterfaceBonjour | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    ttl_check: cdktf.booleanToTerraform(struct!.ttlCheck),
  }
}


export function vlanInterfaceBonjourToHclTerraform(struct?: VlanInterfaceBonjour | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_check: {
      value: cdktf.booleanToHclTerraform(struct!.ttlCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceBonjourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceBonjour | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._ttlCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlCheck = this._ttlCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceBonjour | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._groupId = undefined;
      this._ttlCheck = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._groupId = value.groupId;
      this._ttlCheck = value.ttlCheck;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // ttl_check - computed: false, optional: true, required: false
  private _ttlCheck?: boolean | cdktf.IResolvable; 
  public get ttlCheck() {
    return this.getBooleanAttribute('ttl_check');
  }
  public set ttlCheck(value: boolean | cdktf.IResolvable) {
    this._ttlCheck = value;
  }
  public resetTtlCheck() {
    this._ttlCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlCheckInput() {
    return this._ttlCheck;
  }
}
export interface VlanInterfaceDdnsConfigDdnsVendorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#value VlanInterface#value}
  */
  readonly value?: string;
}

export function vlanInterfaceDdnsConfigDdnsVendorConfigToTerraform(struct?: VlanInterfaceDdnsConfigDdnsVendorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vlanInterfaceDdnsConfigDdnsVendorConfigToHclTerraform(struct?: VlanInterfaceDdnsConfigDdnsVendorConfig | cdktf.IResolvable): any {
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

export class VlanInterfaceDdnsConfigDdnsVendorConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceDdnsConfigDdnsVendorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceDdnsConfigDdnsVendorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class VlanInterfaceDdnsConfigDdnsVendorConfigList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceDdnsConfigDdnsVendorConfig[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceDdnsConfigDdnsVendorConfigOutputReference {
    return new VlanInterfaceDdnsConfigDdnsVendorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceDdnsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ddns_cert_profile VlanInterface#ddns_cert_profile}
  */
  readonly ddnsCertProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ddns_enabled VlanInterface#ddns_enabled}
  */
  readonly ddnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * ddns hostname variable or real address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ddns_hostname VlanInterface#ddns_hostname}
  */
  readonly ddnsHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ddns_ip VlanInterface#ddns_ip}
  */
  readonly ddnsIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ddns_ipv6 VlanInterface#ddns_ipv6}
  */
  readonly ddnsIpv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ddns_update_interval VlanInterface#ddns_update_interval}
  */
  readonly ddnsUpdateInterval?: number;
  /**
  * Vendor and product type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ddns_vendor VlanInterface#ddns_vendor}
  */
  readonly ddnsVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ddns_vendor_config VlanInterface#ddns_vendor_config}
  */
  readonly ddnsVendorConfig?: VlanInterfaceDdnsConfigDdnsVendorConfig[] | cdktf.IResolvable;
}

export function vlanInterfaceDdnsConfigToTerraform(struct?: VlanInterfaceDdnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddns_cert_profile: cdktf.stringToTerraform(struct!.ddnsCertProfile),
    ddns_enabled: cdktf.booleanToTerraform(struct!.ddnsEnabled),
    ddns_hostname: cdktf.stringToTerraform(struct!.ddnsHostname),
    ddns_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ddnsIp),
    ddns_ipv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ddnsIpv6),
    ddns_update_interval: cdktf.numberToTerraform(struct!.ddnsUpdateInterval),
    ddns_vendor: cdktf.stringToTerraform(struct!.ddnsVendor),
    ddns_vendor_config: cdktf.listMapper(vlanInterfaceDdnsConfigDdnsVendorConfigToTerraform, false)(struct!.ddnsVendorConfig),
  }
}


export function vlanInterfaceDdnsConfigToHclTerraform(struct?: VlanInterfaceDdnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddns_cert_profile: {
      value: cdktf.stringToHclTerraform(struct!.ddnsCertProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_hostname: {
      value: cdktf.stringToHclTerraform(struct!.ddnsHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ddnsIp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ddns_ipv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ddnsIpv6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ddns_update_interval: {
      value: cdktf.numberToHclTerraform(struct!.ddnsUpdateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddns_vendor: {
      value: cdktf.stringToHclTerraform(struct!.ddnsVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_vendor_config: {
      value: cdktf.listMapperHcl(vlanInterfaceDdnsConfigDdnsVendorConfigToHclTerraform, false)(struct!.ddnsVendorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VlanInterfaceDdnsConfigDdnsVendorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceDdnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceDdnsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddnsCertProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsCertProfile = this._ddnsCertProfile;
    }
    if (this._ddnsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsEnabled = this._ddnsEnabled;
    }
    if (this._ddnsHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsHostname = this._ddnsHostname;
    }
    if (this._ddnsIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsIp = this._ddnsIp;
    }
    if (this._ddnsIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsIpv6 = this._ddnsIpv6;
    }
    if (this._ddnsUpdateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdateInterval = this._ddnsUpdateInterval;
    }
    if (this._ddnsVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsVendor = this._ddnsVendor;
    }
    if (this._ddnsVendorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsVendorConfig = this._ddnsVendorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceDdnsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddnsCertProfile = undefined;
      this._ddnsEnabled = undefined;
      this._ddnsHostname = undefined;
      this._ddnsIp = undefined;
      this._ddnsIpv6 = undefined;
      this._ddnsUpdateInterval = undefined;
      this._ddnsVendor = undefined;
      this._ddnsVendorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddnsCertProfile = value.ddnsCertProfile;
      this._ddnsEnabled = value.ddnsEnabled;
      this._ddnsHostname = value.ddnsHostname;
      this._ddnsIp = value.ddnsIp;
      this._ddnsIpv6 = value.ddnsIpv6;
      this._ddnsUpdateInterval = value.ddnsUpdateInterval;
      this._ddnsVendor = value.ddnsVendor;
      this._ddnsVendorConfig.internalValue = value.ddnsVendorConfig;
    }
  }

  // ddns_cert_profile - computed: false, optional: true, required: false
  private _ddnsCertProfile?: string; 
  public get ddnsCertProfile() {
    return this.getStringAttribute('ddns_cert_profile');
  }
  public set ddnsCertProfile(value: string) {
    this._ddnsCertProfile = value;
  }
  public resetDdnsCertProfile() {
    this._ddnsCertProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsCertProfileInput() {
    return this._ddnsCertProfile;
  }

  // ddns_enabled - computed: false, optional: true, required: false
  private _ddnsEnabled?: boolean | cdktf.IResolvable; 
  public get ddnsEnabled() {
    return this.getBooleanAttribute('ddns_enabled');
  }
  public set ddnsEnabled(value: boolean | cdktf.IResolvable) {
    this._ddnsEnabled = value;
  }
  public resetDdnsEnabled() {
    this._ddnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsEnabledInput() {
    return this._ddnsEnabled;
  }

  // ddns_hostname - computed: false, optional: true, required: false
  private _ddnsHostname?: string; 
  public get ddnsHostname() {
    return this.getStringAttribute('ddns_hostname');
  }
  public set ddnsHostname(value: string) {
    this._ddnsHostname = value;
  }
  public resetDdnsHostname() {
    this._ddnsHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsHostnameInput() {
    return this._ddnsHostname;
  }

  // ddns_ip - computed: false, optional: true, required: false
  private _ddnsIp?: string[]; 
  public get ddnsIp() {
    return this.getListAttribute('ddns_ip');
  }
  public set ddnsIp(value: string[]) {
    this._ddnsIp = value;
  }
  public resetDdnsIp() {
    this._ddnsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsIpInput() {
    return this._ddnsIp;
  }

  // ddns_ipv6 - computed: false, optional: true, required: false
  private _ddnsIpv6?: string[]; 
  public get ddnsIpv6() {
    return this.getListAttribute('ddns_ipv6');
  }
  public set ddnsIpv6(value: string[]) {
    this._ddnsIpv6 = value;
  }
  public resetDdnsIpv6() {
    this._ddnsIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsIpv6Input() {
    return this._ddnsIpv6;
  }

  // ddns_update_interval - computed: true, optional: true, required: false
  private _ddnsUpdateInterval?: number; 
  public get ddnsUpdateInterval() {
    return this.getNumberAttribute('ddns_update_interval');
  }
  public set ddnsUpdateInterval(value: number) {
    this._ddnsUpdateInterval = value;
  }
  public resetDdnsUpdateInterval() {
    this._ddnsUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateIntervalInput() {
    return this._ddnsUpdateInterval;
  }

  // ddns_vendor - computed: false, optional: true, required: false
  private _ddnsVendor?: string; 
  public get ddnsVendor() {
    return this.getStringAttribute('ddns_vendor');
  }
  public set ddnsVendor(value: string) {
    this._ddnsVendor = value;
  }
  public resetDdnsVendor() {
    this._ddnsVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsVendorInput() {
    return this._ddnsVendor;
  }

  // ddns_vendor_config - computed: false, optional: true, required: false
  private _ddnsVendorConfig = new VlanInterfaceDdnsConfigDdnsVendorConfigList(this, "ddns_vendor_config", false);
  public get ddnsVendorConfig() {
    return this._ddnsVendorConfig;
  }
  public putDdnsVendorConfig(value: VlanInterfaceDdnsConfigDdnsVendorConfig[] | cdktf.IResolvable) {
    this._ddnsVendorConfig.internalValue = value;
  }
  public resetDdnsVendorConfig() {
    this._ddnsVendorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsVendorConfigInput() {
    return this._ddnsVendorConfig.internalValue;
  }
}
export interface VlanInterfaceDhcpClientSendHostname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set Interface Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#hostname VlanInterface#hostname}
  */
  readonly hostname?: string;
}

export function vlanInterfaceDhcpClientSendHostnameToTerraform(struct?: VlanInterfaceDhcpClientSendHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function vlanInterfaceDhcpClientSendHostnameToHclTerraform(struct?: VlanInterfaceDhcpClientSendHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceDhcpClientSendHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceDhcpClientSendHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceDhcpClientSendHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._hostname = value.hostname;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}
export interface VlanInterfaceDhcpClient {
  /**
  * Automatically create default route pointing to default gateway provided by server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#create_default_route VlanInterface#create_default_route}
  */
  readonly createDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Metric of the default route created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#default_route_metric VlanInterface#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#send_hostname VlanInterface#send_hostname}
  */
  readonly sendHostname?: VlanInterfaceDhcpClientSendHostname;
}

export function vlanInterfaceDhcpClientToTerraform(struct?: VlanInterfaceDhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_default_route: cdktf.booleanToTerraform(struct!.createDefaultRoute),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    enable: cdktf.booleanToTerraform(struct!.enable),
    send_hostname: vlanInterfaceDhcpClientSendHostnameToTerraform(struct!.sendHostname),
  }
}


export function vlanInterfaceDhcpClientToHclTerraform(struct?: VlanInterfaceDhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.createDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_route_metric: {
      value: cdktf.numberToHclTerraform(struct!.defaultRouteMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_hostname: {
      value: vlanInterfaceDhcpClientSendHostnameToHclTerraform(struct!.sendHostname),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceDhcpClientSendHostname",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceDhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceDhcpClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDefaultRoute = this._createDefaultRoute;
    }
    if (this._defaultRouteMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteMetric = this._defaultRouteMetric;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._sendHostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendHostname = this._sendHostname?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceDhcpClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createDefaultRoute = undefined;
      this._defaultRouteMetric = undefined;
      this._enable = undefined;
      this._sendHostname.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createDefaultRoute = value.createDefaultRoute;
      this._defaultRouteMetric = value.defaultRouteMetric;
      this._enable = value.enable;
      this._sendHostname.internalValue = value.sendHostname;
    }
  }

  // create_default_route - computed: false, optional: true, required: false
  private _createDefaultRoute?: boolean | cdktf.IResolvable; 
  public get createDefaultRoute() {
    return this.getBooleanAttribute('create_default_route');
  }
  public set createDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._createDefaultRoute = value;
  }
  public resetCreateDefaultRoute() {
    this._createDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDefaultRouteInput() {
    return this._createDefaultRoute;
  }

  // default_route_metric - computed: true, optional: true, required: false
  private _defaultRouteMetric?: number; 
  public get defaultRouteMetric() {
    return this.getNumberAttribute('default_route_metric');
  }
  public set defaultRouteMetric(value: number) {
    this._defaultRouteMetric = value;
  }
  public resetDefaultRouteMetric() {
    this._defaultRouteMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteMetricInput() {
    return this._defaultRouteMetric;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // send_hostname - computed: false, optional: true, required: false
  private _sendHostname = new VlanInterfaceDhcpClientSendHostnameOutputReference(this, "send_hostname");
  public get sendHostname() {
    return this._sendHostname;
  }
  public putSendHostname(value: VlanInterfaceDhcpClientSendHostname) {
    this._sendHostname.internalValue = value;
  }
  public resetSendHostname() {
    this._sendHostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendHostnameInput() {
    return this._sendHostname.internalValue;
  }
}
export interface VlanInterfaceIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
}

export function vlanInterfaceIpToTerraform(struct?: VlanInterfaceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vlanInterfaceIpToHclTerraform(struct?: VlanInterfaceIp | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class VlanInterfaceIpList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceIp[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceIpOutputReference {
    return new VlanInterfaceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceIpv6AddressAdvertise {
  /**
  * Set the Auto Address Configuration Flag (A-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#auto_config_flag VlanInterface#auto_config_flag}
  */
  readonly autoConfigFlag?: boolean | cdktf.IResolvable;
  /**
  * enable advertising this prefix in router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set the On-Link Flag (L-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#onlink_flag VlanInterface#onlink_flag}
  */
  readonly onlinkFlag?: boolean | cdktf.IResolvable;
  /**
  * Preferred Lifetime (in seconds) of the prefix advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#preferred_lifetime VlanInterface#preferred_lifetime}
  */
  readonly preferredLifetime?: string;
  /**
  * Valid Lifetime (in seconds) of the prefix advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#valid_lifetime VlanInterface#valid_lifetime}
  */
  readonly validLifetime?: string;
}

export function vlanInterfaceIpv6AddressAdvertiseToTerraform(struct?: VlanInterfaceIpv6AddressAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_config_flag: cdktf.booleanToTerraform(struct!.autoConfigFlag),
    enable: cdktf.booleanToTerraform(struct!.enable),
    onlink_flag: cdktf.booleanToTerraform(struct!.onlinkFlag),
    preferred_lifetime: cdktf.stringToTerraform(struct!.preferredLifetime),
    valid_lifetime: cdktf.stringToTerraform(struct!.validLifetime),
  }
}


export function vlanInterfaceIpv6AddressAdvertiseToHclTerraform(struct?: VlanInterfaceIpv6AddressAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_config_flag: {
      value: cdktf.booleanToHclTerraform(struct!.autoConfigFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    onlink_flag: {
      value: cdktf.booleanToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preferred_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.preferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.validLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6AddressAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6AddressAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoConfigFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConfigFlag = this._autoConfigFlag;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    if (this._preferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetime = this._preferredLifetime;
    }
    if (this._validLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetime = this._validLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6AddressAdvertise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoConfigFlag = undefined;
      this._enable = undefined;
      this._onlinkFlag = undefined;
      this._preferredLifetime = undefined;
      this._validLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoConfigFlag = value.autoConfigFlag;
      this._enable = value.enable;
      this._onlinkFlag = value.onlinkFlag;
      this._preferredLifetime = value.preferredLifetime;
      this._validLifetime = value.validLifetime;
    }
  }

  // auto_config_flag - computed: false, optional: true, required: false
  private _autoConfigFlag?: boolean | cdktf.IResolvable; 
  public get autoConfigFlag() {
    return this.getBooleanAttribute('auto_config_flag');
  }
  public set autoConfigFlag(value: boolean | cdktf.IResolvable) {
    this._autoConfigFlag = value;
  }
  public resetAutoConfigFlag() {
    this._autoConfigFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigFlagInput() {
    return this._autoConfigFlag;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // onlink_flag - computed: false, optional: true, required: false
  private _onlinkFlag?: boolean | cdktf.IResolvable; 
  public get onlinkFlag() {
    return this.getBooleanAttribute('onlink_flag');
  }
  public set onlinkFlag(value: boolean | cdktf.IResolvable) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }

  // preferred_lifetime - computed: true, optional: true, required: false
  private _preferredLifetime?: string; 
  public get preferredLifetime() {
    return this.getStringAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: string) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // valid_lifetime - computed: true, optional: true, required: false
  private _validLifetime?: string; 
  public get validLifetime() {
    return this.getStringAttribute('valid_lifetime');
  }
  public set validLifetime(value: string) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }
}
export interface VlanInterfaceIpv6AddressAnycast {
}

export function vlanInterfaceIpv6AddressAnycastToTerraform(struct?: VlanInterfaceIpv6AddressAnycast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vlanInterfaceIpv6AddressAnycastToHclTerraform(struct?: VlanInterfaceIpv6AddressAnycast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VlanInterfaceIpv6AddressAnycastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6AddressAnycast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6AddressAnycast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VlanInterfaceIpv6AddressPrefix {
}

export function vlanInterfaceIpv6AddressPrefixToTerraform(struct?: VlanInterfaceIpv6AddressPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vlanInterfaceIpv6AddressPrefixToHclTerraform(struct?: VlanInterfaceIpv6AddressPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VlanInterfaceIpv6AddressPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6AddressPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6AddressPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VlanInterfaceIpv6Address {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#advertise VlanInterface#advertise}
  */
  readonly advertise?: VlanInterfaceIpv6AddressAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#anycast VlanInterface#anycast}
  */
  readonly anycast?: VlanInterfaceIpv6AddressAnycast;
  /**
  * configure this address on interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable_on_interface VlanInterface#enable_on_interface}
  */
  readonly enableOnInterface?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#prefix VlanInterface#prefix}
  */
  readonly prefix?: VlanInterfaceIpv6AddressPrefix;
}

export function vlanInterfaceIpv6AddressToTerraform(struct?: VlanInterfaceIpv6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: vlanInterfaceIpv6AddressAdvertiseToTerraform(struct!.advertise),
    anycast: vlanInterfaceIpv6AddressAnycastToTerraform(struct!.anycast),
    enable_on_interface: cdktf.booleanToTerraform(struct!.enableOnInterface),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: vlanInterfaceIpv6AddressPrefixToTerraform(struct!.prefix),
  }
}


export function vlanInterfaceIpv6AddressToHclTerraform(struct?: VlanInterfaceIpv6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: vlanInterfaceIpv6AddressAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6AddressAdvertise",
    },
    anycast: {
      value: vlanInterfaceIpv6AddressAnycastToHclTerraform(struct!.anycast),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6AddressAnycast",
    },
    enable_on_interface: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: vlanInterfaceIpv6AddressPrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6AddressPrefix",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6AddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceIpv6Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise?.internalValue;
    }
    if (this._anycast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anycast = this._anycast?.internalValue;
    }
    if (this._enableOnInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOnInterface = this._enableOnInterface;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise.internalValue = undefined;
      this._anycast.internalValue = undefined;
      this._enableOnInterface = undefined;
      this._name = undefined;
      this._prefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise.internalValue = value.advertise;
      this._anycast.internalValue = value.anycast;
      this._enableOnInterface = value.enableOnInterface;
      this._name = value.name;
      this._prefix.internalValue = value.prefix;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise = new VlanInterfaceIpv6AddressAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: VlanInterfaceIpv6AddressAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // anycast - computed: false, optional: true, required: false
  private _anycast = new VlanInterfaceIpv6AddressAnycastOutputReference(this, "anycast");
  public get anycast() {
    return this._anycast;
  }
  public putAnycast(value: VlanInterfaceIpv6AddressAnycast) {
    this._anycast.internalValue = value;
  }
  public resetAnycast() {
    this._anycast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastInput() {
    return this._anycast.internalValue;
  }

  // enable_on_interface - computed: false, optional: true, required: false
  private _enableOnInterface?: boolean | cdktf.IResolvable; 
  public get enableOnInterface() {
    return this.getBooleanAttribute('enable_on_interface');
  }
  public set enableOnInterface(value: boolean | cdktf.IResolvable) {
    this._enableOnInterface = value;
  }
  public resetEnableOnInterface() {
    this._enableOnInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnInterfaceInput() {
    return this._enableOnInterface;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix = new VlanInterfaceIpv6AddressPrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: VlanInterfaceIpv6AddressPrefix) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}

export class VlanInterfaceIpv6AddressList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceIpv6Address[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceIpv6AddressOutputReference {
    return new VlanInterfaceIpv6AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 {
}

export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer {
  /**
  * (4-3600) Lifetime in Seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#lifetime VlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
}

export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._name = value.name;
    }
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerOutputReference {
    return new VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#server VlanInterface#server}
  */
  readonly server?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable;
}

export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualToTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktf.listMapper(vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToTerraform, false)(struct!.server),
  }
}


export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktf.listMapperHcl(vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToHclTerraform, false)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._server.internalValue = value.server;
    }
  }

  // server - computed: false, optional: true, required: false
  private _server = new VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dhcpv6 VlanInterface#dhcpv6}
  */
  readonly dhcpv6?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#manual VlanInterface#manual}
  */
  readonly manual?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual;
}

export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceToTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualToTerraform(struct!.manual),
  }
}


export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6",
    },
    manual: {
      value: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6 = this._dhcpv6?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = undefined;
      this._manual.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = value.dhcpv6;
      this._manual.internalValue = value.manual;
    }
  }

  // dhcpv6 - computed: false, optional: true, required: false
  private _dhcpv6 = new VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6) {
    this._dhcpv6.internalValue = value;
  }
  public resetDhcpv6() {
    this._dhcpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }
}
export interface VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#source VlanInterface#source}
  */
  readonly source?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource;
}

export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerToTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceToTerraform(struct!.source),
  }
}


export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._source.internalValue = value.source;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // source - computed: false, optional: true, required: false
  private _source = new VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 {
}

export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#lifetime VlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
}

export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._name = value.name;
    }
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference {
    return new VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#suffix VlanInterface#suffix}
  */
  readonly suffix?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable;
}

export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suffix: cdktf.listMapper(vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform, false)(struct!.suffix),
  }
}


export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suffix: {
      value: cdktf.listMapperHcl(vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform, false)(struct!.suffix),
      isBlock: true,
      type: "list",
      storageClassType: "VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suffix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._suffix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._suffix.internalValue = value.suffix;
    }
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix = new VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixList(this, "suffix", false);
  public get suffix() {
    return this._suffix;
  }
  public putSuffix(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable) {
    this._suffix.internalValue = value;
  }
  public resetSuffix() {
    this._suffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix.internalValue;
  }
}
export interface VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dhcpv6 VlanInterface#dhcpv6}
  */
  readonly dhcpv6?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#manual VlanInterface#manual}
  */
  readonly manual?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual;
}

export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceToTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct!.manual),
  }
}


export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6",
    },
    manual: {
      value: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6 = this._dhcpv6?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = undefined;
      this._manual.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = value.dhcpv6;
      this._manual.internalValue = value.manual;
    }
  }

  // dhcpv6 - computed: false, optional: true, required: false
  private _dhcpv6 = new VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6) {
    this._dhcpv6.internalValue = value;
  }
  public resetDhcpv6() {
    this._dhcpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }
}
export interface VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#source VlanInterface#source}
  */
  readonly source?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource;
}

export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixToTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceToTerraform(struct!.source),
  }
}


export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._source.internalValue = value.source;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // source - computed: false, optional: true, required: false
  private _source = new VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#hw_address VlanInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
}

export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborToTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hw_address: {
      value: cdktf.stringToHclTerraform(struct!.hwAddress),
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

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hwAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwAddress = this._hwAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hwAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hwAddress = value.hwAddress;
      this._name = value.name;
    }
  }

  // hw_address - computed: false, optional: true, required: false
  private _hwAddress?: string; 
  public get hwAddress() {
    return this.getStringAttribute('hw_address');
  }
  public set hwAddress(value: string) {
    this._hwAddress = value;
  }
  public resetHwAddress() {
    this._hwAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwAddressInput() {
    return this._hwAddress;
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
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborOutputReference {
    return new VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceIpv6DhcpClientNeighborDiscovery {
  /**
  * number of consecutive neighbor solicitation messages sent for duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dad_attempts VlanInterface#dad_attempts}
  */
  readonly dadAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dns_server VlanInterface#dns_server}
  */
  readonly dnsServer?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dns_suffix VlanInterface#dns_suffix}
  */
  readonly dnsSuffix?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix;
  /**
  * Enable Duplicate Address Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable_dad VlanInterface#enable_dad}
  */
  readonly enableDad?: boolean | cdktf.IResolvable;
  /**
  * Enable NDP Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable_ndp_monitor VlanInterface#enable_ndp_monitor}
  */
  readonly enableNdpMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#neighbor VlanInterface#neighbor}
  */
  readonly neighbor?: VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor[] | cdktf.IResolvable;
  /**
  * interval (in seconds) between consecutive neighbor solicitation messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ns_interval VlanInterface#ns_interval}
  */
  readonly nsInterval?: number;
  /**
  * time (in seconds) that the Reachable status for a neighbor can be maintained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#reachable_time VlanInterface#reachable_time}
  */
  readonly reachableTime?: number;
}

export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryToTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dad_attempts: cdktf.numberToTerraform(struct!.dadAttempts),
    dns_server: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerToTerraform(struct!.dnsServer),
    dns_suffix: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixToTerraform(struct!.dnsSuffix),
    enable_dad: cdktf.booleanToTerraform(struct!.enableDad),
    enable_ndp_monitor: cdktf.booleanToTerraform(struct!.enableNdpMonitor),
    neighbor: cdktf.listMapper(vlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborToTerraform, false)(struct!.neighbor),
    ns_interval: cdktf.numberToTerraform(struct!.nsInterval),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
  }
}


export function vlanInterfaceIpv6DhcpClientNeighborDiscoveryToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientNeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dad_attempts: {
      value: cdktf.numberToHclTerraform(struct!.dadAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_server: {
      value: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerToHclTerraform(struct!.dnsServer),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer",
    },
    dns_suffix: {
      value: vlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixToHclTerraform(struct!.dnsSuffix),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix",
    },
    enable_dad: {
      value: cdktf.booleanToHclTerraform(struct!.enableDad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ndp_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.enableNdpMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neighbor: {
      value: cdktf.listMapperHcl(vlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborList",
    },
    ns_interval: {
      value: cdktf.numberToHclTerraform(struct!.nsInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientNeighborDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientNeighborDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dadAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dadAttempts = this._dadAttempts;
    }
    if (this._dnsServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer?.internalValue;
    }
    if (this._dnsSuffix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffix = this._dnsSuffix?.internalValue;
    }
    if (this._enableDad !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDad = this._enableDad;
    }
    if (this._enableNdpMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNdpMonitor = this._enableNdpMonitor;
    }
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    if (this._nsInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsInterval = this._nsInterval;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientNeighborDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dadAttempts = undefined;
      this._dnsServer.internalValue = undefined;
      this._dnsSuffix.internalValue = undefined;
      this._enableDad = undefined;
      this._enableNdpMonitor = undefined;
      this._neighbor.internalValue = undefined;
      this._nsInterval = undefined;
      this._reachableTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dadAttempts = value.dadAttempts;
      this._dnsServer.internalValue = value.dnsServer;
      this._dnsSuffix.internalValue = value.dnsSuffix;
      this._enableDad = value.enableDad;
      this._enableNdpMonitor = value.enableNdpMonitor;
      this._neighbor.internalValue = value.neighbor;
      this._nsInterval = value.nsInterval;
      this._reachableTime = value.reachableTime;
    }
  }

  // dad_attempts - computed: true, optional: true, required: false
  private _dadAttempts?: number; 
  public get dadAttempts() {
    return this.getNumberAttribute('dad_attempts');
  }
  public set dadAttempts(value: number) {
    this._dadAttempts = value;
  }
  public resetDadAttempts() {
    this._dadAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dadAttemptsInput() {
    return this._dadAttempts;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer = new VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerOutputReference(this, "dns_server");
  public get dnsServer() {
    return this._dnsServer;
  }
  public putDnsServer(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer) {
    this._dnsServer.internalValue = value;
  }
  public resetDnsServer() {
    this._dnsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer.internalValue;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix = new VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixOutputReference(this, "dns_suffix");
  public get dnsSuffix() {
    return this._dnsSuffix;
  }
  public putDnsSuffix(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix) {
    this._dnsSuffix.internalValue = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix.internalValue;
  }

  // enable_dad - computed: false, optional: true, required: false
  private _enableDad?: boolean | cdktf.IResolvable; 
  public get enableDad() {
    return this.getBooleanAttribute('enable_dad');
  }
  public set enableDad(value: boolean | cdktf.IResolvable) {
    this._enableDad = value;
  }
  public resetEnableDad() {
    this._enableDad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDadInput() {
    return this._enableDad;
  }

  // enable_ndp_monitor - computed: false, optional: true, required: false
  private _enableNdpMonitor?: boolean | cdktf.IResolvable; 
  public get enableNdpMonitor() {
    return this.getBooleanAttribute('enable_ndp_monitor');
  }
  public set enableNdpMonitor(value: boolean | cdktf.IResolvable) {
    this._enableNdpMonitor = value;
  }
  public resetEnableNdpMonitor() {
    this._enableNdpMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNdpMonitorInput() {
    return this._enableNdpMonitor;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: VlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // ns_interval - computed: true, optional: true, required: false
  private _nsInterval?: number; 
  public get nsInterval() {
    return this.getNumberAttribute('ns_interval');
  }
  public set nsInterval(value: number) {
    this._nsInterval = value;
  }
  public resetNsInterval() {
    this._nsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsIntervalInput() {
    return this._nsInterval;
  }

  // reachable_time - computed: true, optional: true, required: false
  private _reachableTime?: number; 
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }
  public set reachableTime(value: number) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }
}
export interface VlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo {
}

export function vlanInterfaceIpv6DhcpClientPrefixDelegationEnableNoToTerraform(struct?: VlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vlanInterfaceIpv6DhcpClientPrefixDelegationEnableNoToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VlanInterfaceIpv6DhcpClientPrefixDelegationEnableNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes {
  /**
  * Configure unique Prefix Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#pfx_pool_name VlanInterface#pfx_pool_name}
  */
  readonly pfxPoolName?: string;
  /**
  * Hint DHCP Prefix Length (bits)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#prefix_len VlanInterface#prefix_len}
  */
  readonly prefixLen?: number;
  /**
  * Send prefix length hint to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#prefix_len_hint VlanInterface#prefix_len_hint}
  */
  readonly prefixLenHint?: boolean | cdktf.IResolvable;
}

export function vlanInterfaceIpv6DhcpClientPrefixDelegationEnableYesToTerraform(struct?: VlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pfx_pool_name: cdktf.stringToTerraform(struct!.pfxPoolName),
    prefix_len: cdktf.numberToTerraform(struct!.prefixLen),
    prefix_len_hint: cdktf.booleanToTerraform(struct!.prefixLenHint),
  }
}


export function vlanInterfaceIpv6DhcpClientPrefixDelegationEnableYesToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pfx_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.pfxPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_len: {
      value: cdktf.numberToHclTerraform(struct!.prefixLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_len_hint: {
      value: cdktf.booleanToHclTerraform(struct!.prefixLenHint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientPrefixDelegationEnableYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pfxPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfxPoolName = this._pfxPoolName;
    }
    if (this._prefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLen = this._prefixLen;
    }
    if (this._prefixLenHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLenHint = this._prefixLenHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pfxPoolName = undefined;
      this._prefixLen = undefined;
      this._prefixLenHint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pfxPoolName = value.pfxPoolName;
      this._prefixLen = value.prefixLen;
      this._prefixLenHint = value.prefixLenHint;
    }
  }

  // pfx_pool_name - computed: false, optional: true, required: false
  private _pfxPoolName?: string; 
  public get pfxPoolName() {
    return this.getStringAttribute('pfx_pool_name');
  }
  public set pfxPoolName(value: string) {
    this._pfxPoolName = value;
  }
  public resetPfxPoolName() {
    this._pfxPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxPoolNameInput() {
    return this._pfxPoolName;
  }

  // prefix_len - computed: true, optional: true, required: false
  private _prefixLen?: number; 
  public get prefixLen() {
    return this.getNumberAttribute('prefix_len');
  }
  public set prefixLen(value: number) {
    this._prefixLen = value;
  }
  public resetPrefixLen() {
    this._prefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLenInput() {
    return this._prefixLen;
  }

  // prefix_len_hint - computed: false, optional: true, required: false
  private _prefixLenHint?: boolean | cdktf.IResolvable; 
  public get prefixLenHint() {
    return this.getBooleanAttribute('prefix_len_hint');
  }
  public set prefixLenHint(value: boolean | cdktf.IResolvable) {
    this._prefixLenHint = value;
  }
  public resetPrefixLenHint() {
    this._prefixLenHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLenHintInput() {
    return this._prefixLenHint;
  }
}
export interface VlanInterfaceIpv6DhcpClientPrefixDelegationEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#no VlanInterface#no}
  */
  readonly no?: VlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#yes VlanInterface#yes}
  */
  readonly yes?: VlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes;
}

export function vlanInterfaceIpv6DhcpClientPrefixDelegationEnableToTerraform(struct?: VlanInterfaceIpv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no: vlanInterfaceIpv6DhcpClientPrefixDelegationEnableNoToTerraform(struct!.no),
    yes: vlanInterfaceIpv6DhcpClientPrefixDelegationEnableYesToTerraform(struct!.yes),
  }
}


export function vlanInterfaceIpv6DhcpClientPrefixDelegationEnableToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no: {
      value: vlanInterfaceIpv6DhcpClientPrefixDelegationEnableNoToHclTerraform(struct!.no),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo",
    },
    yes: {
      value: vlanInterfaceIpv6DhcpClientPrefixDelegationEnableYesToHclTerraform(struct!.yes),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientPrefixDelegationEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._no?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.no = this._no?.internalValue;
    }
    if (this._yes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yes = this._yes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._no.internalValue = undefined;
      this._yes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._no.internalValue = value.no;
      this._yes.internalValue = value.yes;
    }
  }

  // no - computed: false, optional: true, required: false
  private _no = new VlanInterfaceIpv6DhcpClientPrefixDelegationEnableNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }
  public putNo(value: VlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo) {
    this._no.internalValue = value;
  }
  public resetNo() {
    this._no.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInput() {
    return this._no.internalValue;
  }

  // yes - computed: false, optional: true, required: false
  private _yes = new VlanInterfaceIpv6DhcpClientPrefixDelegationEnableYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
  public putYes(value: VlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes) {
    this._yes.internalValue = value;
  }
  public resetYes() {
    this._yes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yesInput() {
    return this._yes.internalValue;
  }
}
export interface VlanInterfaceIpv6DhcpClientPrefixDelegation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: VlanInterfaceIpv6DhcpClientPrefixDelegationEnable;
}

export function vlanInterfaceIpv6DhcpClientPrefixDelegationToTerraform(struct?: VlanInterfaceIpv6DhcpClientPrefixDelegation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: vlanInterfaceIpv6DhcpClientPrefixDelegationEnableToTerraform(struct!.enable),
  }
}


export function vlanInterfaceIpv6DhcpClientPrefixDelegationToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientPrefixDelegation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: vlanInterfaceIpv6DhcpClientPrefixDelegationEnableToHclTerraform(struct!.enable),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientPrefixDelegationEnable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientPrefixDelegationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientPrefixDelegation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientPrefixDelegation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable.internalValue = value.enable;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable = new VlanInterfaceIpv6DhcpClientPrefixDelegationEnableOutputReference(this, "enable");
  public get enable() {
    return this._enable;
  }
  public putEnable(value: VlanInterfaceIpv6DhcpClientPrefixDelegationEnable) {
    this._enable.internalValue = value;
  }
  public resetEnable() {
    this._enable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable.internalValue;
  }
}
export interface VlanInterfaceIpv6DhcpClientV6OptionsEnableNo {
}

export function vlanInterfaceIpv6DhcpClientV6OptionsEnableNoToTerraform(struct?: VlanInterfaceIpv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vlanInterfaceIpv6DhcpClientV6OptionsEnableNoToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VlanInterfaceIpv6DhcpClientV6OptionsEnableNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VlanInterfaceIpv6DhcpClientV6OptionsEnableYes {
  /**
  * Request Non-Temporary Address Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#non_temp_addr VlanInterface#non_temp_addr}
  */
  readonly nonTempAddr?: boolean | cdktf.IResolvable;
  /**
  * Request Temporary Address Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#temp_addr VlanInterface#temp_addr}
  */
  readonly tempAddr?: boolean | cdktf.IResolvable;
}

export function vlanInterfaceIpv6DhcpClientV6OptionsEnableYesToTerraform(struct?: VlanInterfaceIpv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_temp_addr: cdktf.booleanToTerraform(struct!.nonTempAddr),
    temp_addr: cdktf.booleanToTerraform(struct!.tempAddr),
  }
}


export function vlanInterfaceIpv6DhcpClientV6OptionsEnableYesToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_temp_addr: {
      value: cdktf.booleanToHclTerraform(struct!.nonTempAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    temp_addr: {
      value: cdktf.booleanToHclTerraform(struct!.tempAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientV6OptionsEnableYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonTempAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonTempAddr = this._nonTempAddr;
    }
    if (this._tempAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempAddr = this._tempAddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonTempAddr = undefined;
      this._tempAddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonTempAddr = value.nonTempAddr;
      this._tempAddr = value.tempAddr;
    }
  }

  // non_temp_addr - computed: false, optional: true, required: false
  private _nonTempAddr?: boolean | cdktf.IResolvable; 
  public get nonTempAddr() {
    return this.getBooleanAttribute('non_temp_addr');
  }
  public set nonTempAddr(value: boolean | cdktf.IResolvable) {
    this._nonTempAddr = value;
  }
  public resetNonTempAddr() {
    this._nonTempAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonTempAddrInput() {
    return this._nonTempAddr;
  }

  // temp_addr - computed: false, optional: true, required: false
  private _tempAddr?: boolean | cdktf.IResolvable; 
  public get tempAddr() {
    return this.getBooleanAttribute('temp_addr');
  }
  public set tempAddr(value: boolean | cdktf.IResolvable) {
    this._tempAddr = value;
  }
  public resetTempAddr() {
    this._tempAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempAddrInput() {
    return this._tempAddr;
  }
}
export interface VlanInterfaceIpv6DhcpClientV6OptionsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#no VlanInterface#no}
  */
  readonly no?: VlanInterfaceIpv6DhcpClientV6OptionsEnableNo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#yes VlanInterface#yes}
  */
  readonly yes?: VlanInterfaceIpv6DhcpClientV6OptionsEnableYes;
}

export function vlanInterfaceIpv6DhcpClientV6OptionsEnableToTerraform(struct?: VlanInterfaceIpv6DhcpClientV6OptionsEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no: vlanInterfaceIpv6DhcpClientV6OptionsEnableNoToTerraform(struct!.no),
    yes: vlanInterfaceIpv6DhcpClientV6OptionsEnableYesToTerraform(struct!.yes),
  }
}


export function vlanInterfaceIpv6DhcpClientV6OptionsEnableToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientV6OptionsEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no: {
      value: vlanInterfaceIpv6DhcpClientV6OptionsEnableNoToHclTerraform(struct!.no),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientV6OptionsEnableNo",
    },
    yes: {
      value: vlanInterfaceIpv6DhcpClientV6OptionsEnableYesToHclTerraform(struct!.yes),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientV6OptionsEnableYes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientV6OptionsEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientV6OptionsEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._no?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.no = this._no?.internalValue;
    }
    if (this._yes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yes = this._yes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientV6OptionsEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._no.internalValue = undefined;
      this._yes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._no.internalValue = value.no;
      this._yes.internalValue = value.yes;
    }
  }

  // no - computed: false, optional: true, required: false
  private _no = new VlanInterfaceIpv6DhcpClientV6OptionsEnableNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }
  public putNo(value: VlanInterfaceIpv6DhcpClientV6OptionsEnableNo) {
    this._no.internalValue = value;
  }
  public resetNo() {
    this._no.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInput() {
    return this._no.internalValue;
  }

  // yes - computed: false, optional: true, required: false
  private _yes = new VlanInterfaceIpv6DhcpClientV6OptionsEnableYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
  public putYes(value: VlanInterfaceIpv6DhcpClientV6OptionsEnableYes) {
    this._yes.internalValue = value;
  }
  public resetYes() {
    this._yes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yesInput() {
    return this._yes.internalValue;
  }
}
export interface VlanInterfaceIpv6DhcpClientV6Options {
  /**
  * Select DUID-LLT/DUID-LL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#duid_type VlanInterface#duid_type}
  */
  readonly duidType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: VlanInterfaceIpv6DhcpClientV6OptionsEnable;
  /**
  * Enable Rapid Commit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#rapid_commit VlanInterface#rapid_commit}
  */
  readonly rapidCommit?: boolean | cdktf.IResolvable;
  /**
  * Enable DHCPv6 Server Re-Configuration Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#support_srvr_reconfig VlanInterface#support_srvr_reconfig}
  */
  readonly supportSrvrReconfig?: boolean | cdktf.IResolvable;
}

export function vlanInterfaceIpv6DhcpClientV6OptionsToTerraform(struct?: VlanInterfaceIpv6DhcpClientV6Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duid_type: cdktf.stringToTerraform(struct!.duidType),
    enable: vlanInterfaceIpv6DhcpClientV6OptionsEnableToTerraform(struct!.enable),
    rapid_commit: cdktf.booleanToTerraform(struct!.rapidCommit),
    support_srvr_reconfig: cdktf.booleanToTerraform(struct!.supportSrvrReconfig),
  }
}


export function vlanInterfaceIpv6DhcpClientV6OptionsToHclTerraform(struct?: VlanInterfaceIpv6DhcpClientV6Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duid_type: {
      value: cdktf.stringToHclTerraform(struct!.duidType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: vlanInterfaceIpv6DhcpClientV6OptionsEnableToHclTerraform(struct!.enable),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientV6OptionsEnable",
    },
    rapid_commit: {
      value: cdktf.booleanToHclTerraform(struct!.rapidCommit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    support_srvr_reconfig: {
      value: cdktf.booleanToHclTerraform(struct!.supportSrvrReconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientV6OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClientV6Options | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duidType !== undefined) {
      hasAnyValues = true;
      internalValueResult.duidType = this._duidType;
    }
    if (this._enable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable?.internalValue;
    }
    if (this._rapidCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rapidCommit = this._rapidCommit;
    }
    if (this._supportSrvrReconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportSrvrReconfig = this._supportSrvrReconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClientV6Options | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duidType = undefined;
      this._enable.internalValue = undefined;
      this._rapidCommit = undefined;
      this._supportSrvrReconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duidType = value.duidType;
      this._enable.internalValue = value.enable;
      this._rapidCommit = value.rapidCommit;
      this._supportSrvrReconfig = value.supportSrvrReconfig;
    }
  }

  // duid_type - computed: true, optional: true, required: false
  private _duidType?: string; 
  public get duidType() {
    return this.getStringAttribute('duid_type');
  }
  public set duidType(value: string) {
    this._duidType = value;
  }
  public resetDuidType() {
    this._duidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duidTypeInput() {
    return this._duidType;
  }

  // enable - computed: false, optional: true, required: false
  private _enable = new VlanInterfaceIpv6DhcpClientV6OptionsEnableOutputReference(this, "enable");
  public get enable() {
    return this._enable;
  }
  public putEnable(value: VlanInterfaceIpv6DhcpClientV6OptionsEnable) {
    this._enable.internalValue = value;
  }
  public resetEnable() {
    this._enable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable.internalValue;
  }

  // rapid_commit - computed: false, optional: true, required: false
  private _rapidCommit?: boolean | cdktf.IResolvable; 
  public get rapidCommit() {
    return this.getBooleanAttribute('rapid_commit');
  }
  public set rapidCommit(value: boolean | cdktf.IResolvable) {
    this._rapidCommit = value;
  }
  public resetRapidCommit() {
    this._rapidCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rapidCommitInput() {
    return this._rapidCommit;
  }

  // support_srvr_reconfig - computed: false, optional: true, required: false
  private _supportSrvrReconfig?: boolean | cdktf.IResolvable; 
  public get supportSrvrReconfig() {
    return this.getBooleanAttribute('support_srvr_reconfig');
  }
  public set supportSrvrReconfig(value: boolean | cdktf.IResolvable) {
    this._supportSrvrReconfig = value;
  }
  public resetSupportSrvrReconfig() {
    this._supportSrvrReconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportSrvrReconfigInput() {
    return this._supportSrvrReconfig;
  }
}
export interface VlanInterfaceIpv6DhcpClient {
  /**
  * Accept Router Advertised Default Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#accept_ra_route VlanInterface#accept_ra_route}
  */
  readonly acceptRaRoute?: boolean | cdktf.IResolvable;
  /**
  * Metric of the default route created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#default_route_metric VlanInterface#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Enable DHCPv6 Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#neighbor_discovery VlanInterface#neighbor_discovery}
  */
  readonly neighborDiscovery?: VlanInterfaceIpv6DhcpClientNeighborDiscovery;
  /**
  * Select Low/Medium/High
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#preference VlanInterface#preference}
  */
  readonly preference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#prefix_delegation VlanInterface#prefix_delegation}
  */
  readonly prefixDelegation?: VlanInterfaceIpv6DhcpClientPrefixDelegation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#v6_options VlanInterface#v6_options}
  */
  readonly v6Options?: VlanInterfaceIpv6DhcpClientV6Options;
}

export function vlanInterfaceIpv6DhcpClientToTerraform(struct?: VlanInterfaceIpv6DhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_ra_route: cdktf.booleanToTerraform(struct!.acceptRaRoute),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    enable: cdktf.booleanToTerraform(struct!.enable),
    neighbor_discovery: vlanInterfaceIpv6DhcpClientNeighborDiscoveryToTerraform(struct!.neighborDiscovery),
    preference: cdktf.stringToTerraform(struct!.preference),
    prefix_delegation: vlanInterfaceIpv6DhcpClientPrefixDelegationToTerraform(struct!.prefixDelegation),
    v6_options: vlanInterfaceIpv6DhcpClientV6OptionsToTerraform(struct!.v6Options),
  }
}


export function vlanInterfaceIpv6DhcpClientToHclTerraform(struct?: VlanInterfaceIpv6DhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_ra_route: {
      value: cdktf.booleanToHclTerraform(struct!.acceptRaRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_route_metric: {
      value: cdktf.numberToHclTerraform(struct!.defaultRouteMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neighbor_discovery: {
      value: vlanInterfaceIpv6DhcpClientNeighborDiscoveryToHclTerraform(struct!.neighborDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientNeighborDiscovery",
    },
    preference: {
      value: cdktf.stringToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_delegation: {
      value: vlanInterfaceIpv6DhcpClientPrefixDelegationToHclTerraform(struct!.prefixDelegation),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientPrefixDelegation",
    },
    v6_options: {
      value: vlanInterfaceIpv6DhcpClientV6OptionsToHclTerraform(struct!.v6Options),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClientV6Options",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6DhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6DhcpClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptRaRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptRaRoute = this._acceptRaRoute;
    }
    if (this._defaultRouteMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteMetric = this._defaultRouteMetric;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._neighborDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborDiscovery = this._neighborDiscovery?.internalValue;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._prefixDelegation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixDelegation = this._prefixDelegation?.internalValue;
    }
    if (this._v6Options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Options = this._v6Options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6DhcpClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptRaRoute = undefined;
      this._defaultRouteMetric = undefined;
      this._enable = undefined;
      this._neighborDiscovery.internalValue = undefined;
      this._preference = undefined;
      this._prefixDelegation.internalValue = undefined;
      this._v6Options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptRaRoute = value.acceptRaRoute;
      this._defaultRouteMetric = value.defaultRouteMetric;
      this._enable = value.enable;
      this._neighborDiscovery.internalValue = value.neighborDiscovery;
      this._preference = value.preference;
      this._prefixDelegation.internalValue = value.prefixDelegation;
      this._v6Options.internalValue = value.v6Options;
    }
  }

  // accept_ra_route - computed: false, optional: true, required: false
  private _acceptRaRoute?: boolean | cdktf.IResolvable; 
  public get acceptRaRoute() {
    return this.getBooleanAttribute('accept_ra_route');
  }
  public set acceptRaRoute(value: boolean | cdktf.IResolvable) {
    this._acceptRaRoute = value;
  }
  public resetAcceptRaRoute() {
    this._acceptRaRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRaRouteInput() {
    return this._acceptRaRoute;
  }

  // default_route_metric - computed: true, optional: true, required: false
  private _defaultRouteMetric?: number; 
  public get defaultRouteMetric() {
    return this.getNumberAttribute('default_route_metric');
  }
  public set defaultRouteMetric(value: number) {
    this._defaultRouteMetric = value;
  }
  public resetDefaultRouteMetric() {
    this._defaultRouteMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteMetricInput() {
    return this._defaultRouteMetric;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // neighbor_discovery - computed: false, optional: true, required: false
  private _neighborDiscovery = new VlanInterfaceIpv6DhcpClientNeighborDiscoveryOutputReference(this, "neighbor_discovery");
  public get neighborDiscovery() {
    return this._neighborDiscovery;
  }
  public putNeighborDiscovery(value: VlanInterfaceIpv6DhcpClientNeighborDiscovery) {
    this._neighborDiscovery.internalValue = value;
  }
  public resetNeighborDiscovery() {
    this._neighborDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborDiscoveryInput() {
    return this._neighborDiscovery.internalValue;
  }

  // preference - computed: true, optional: true, required: false
  private _preference?: string; 
  public get preference() {
    return this.getStringAttribute('preference');
  }
  public set preference(value: string) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // prefix_delegation - computed: false, optional: true, required: false
  private _prefixDelegation = new VlanInterfaceIpv6DhcpClientPrefixDelegationOutputReference(this, "prefix_delegation");
  public get prefixDelegation() {
    return this._prefixDelegation;
  }
  public putPrefixDelegation(value: VlanInterfaceIpv6DhcpClientPrefixDelegation) {
    this._prefixDelegation.internalValue = value;
  }
  public resetPrefixDelegation() {
    this._prefixDelegation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixDelegationInput() {
    return this._prefixDelegation.internalValue;
  }

  // v6_options - computed: false, optional: true, required: false
  private _v6Options = new VlanInterfaceIpv6DhcpClientV6OptionsOutputReference(this, "v6_options");
  public get v6Options() {
    return this._v6Options;
  }
  public putV6Options(value: VlanInterfaceIpv6DhcpClientV6Options) {
    this._v6Options.internalValue = value;
  }
  public resetV6Options() {
    this._v6Options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6OptionsInput() {
    return this._v6Options.internalValue;
  }
}
export interface VlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise {
  /**
  * Set the Auto Address Configuration Flag (A-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#auto_config_flag VlanInterface#auto_config_flag}
  */
  readonly autoConfigFlag?: boolean | cdktf.IResolvable;
  /**
  * Enable advertising this prefix in router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set the On-Link Flag (L-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#onlink_flag VlanInterface#onlink_flag}
  */
  readonly onlinkFlag?: boolean | cdktf.IResolvable;
}

export function vlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseToTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_config_flag: cdktf.booleanToTerraform(struct!.autoConfigFlag),
    enable: cdktf.booleanToTerraform(struct!.enable),
    onlink_flag: cdktf.booleanToTerraform(struct!.onlinkFlag),
  }
}


export function vlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseToHclTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_config_flag: {
      value: cdktf.booleanToHclTerraform(struct!.autoConfigFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    onlink_flag: {
      value: cdktf.booleanToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoConfigFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConfigFlag = this._autoConfigFlag;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoConfigFlag = undefined;
      this._enable = undefined;
      this._onlinkFlag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoConfigFlag = value.autoConfigFlag;
      this._enable = value.enable;
      this._onlinkFlag = value.onlinkFlag;
    }
  }

  // auto_config_flag - computed: false, optional: true, required: false
  private _autoConfigFlag?: boolean | cdktf.IResolvable; 
  public get autoConfigFlag() {
    return this.getBooleanAttribute('auto_config_flag');
  }
  public set autoConfigFlag(value: boolean | cdktf.IResolvable) {
    this._autoConfigFlag = value;
  }
  public resetAutoConfigFlag() {
    this._autoConfigFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigFlagInput() {
    return this._autoConfigFlag;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // onlink_flag - computed: false, optional: true, required: false
  private _onlinkFlag?: boolean | cdktf.IResolvable; 
  public get onlinkFlag() {
    return this.getBooleanAttribute('onlink_flag');
  }
  public set onlinkFlag(value: boolean | cdktf.IResolvable) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }
}
export interface VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic {
}

export function vlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicToTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicToHclTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId {
  /**
  * Range [0-4095] must be unqiue for this prefix-pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#identifier VlanInterface#identifier}
  */
  readonly identifier?: number;
}

export function vlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.numberToTerraform(struct!.identifier),
  }
}


export function vlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToHclTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier: {
      value: cdktf.numberToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: number; 
  public get identifier() {
    return this.getNumberAttribute('identifier');
  }
  public set identifier(value: number) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}
export interface VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dynamic VlanInterface#dynamic}
  */
  readonly dynamic?: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dynamic_id VlanInterface#dynamic_id}
  */
  readonly dynamicId?: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId;
}

export function vlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeToTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: vlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicToTerraform(struct!.dynamic),
    dynamic_id: vlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToTerraform(struct!.dynamicId),
  }
}


export function vlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeToHclTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: vlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicToHclTerraform(struct!.dynamic),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic",
    },
    dynamic_id: {
      value: vlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToHclTerraform(struct!.dynamicId),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic?.internalValue;
    }
    if (this._dynamicId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicId = this._dynamicId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = undefined;
      this._dynamicId.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = value.dynamic;
      this._dynamicId.internalValue = value.dynamicId;
    }
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic = new VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicOutputReference(this, "dynamic");
  public get dynamic() {
    return this._dynamic;
  }
  public putDynamic(value: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic) {
    this._dynamic.internalValue = value;
  }
  public resetDynamic() {
    this._dynamic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic.internalValue;
  }

  // dynamic_id - computed: false, optional: true, required: false
  private _dynamicId = new VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdOutputReference(this, "dynamic_id");
  public get dynamicId() {
    return this._dynamicId;
  }
  public putDynamicId(value: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId) {
    this._dynamicId.internalValue = value;
  }
  public resetDynamicId() {
    this._dynamicId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicIdInput() {
    return this._dynamicId.internalValue;
  }
}
export interface VlanInterfaceIpv6InheritedAssignAddrTypeGua {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#advertise VlanInterface#advertise}
  */
  readonly advertise?: VlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise;
  /**
  * Enable on Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable_on_interface VlanInterface#enable_on_interface}
  */
  readonly enableOnInterface?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#pool_type VlanInterface#pool_type}
  */
  readonly poolType?: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType;
  /**
  * Prefix-Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#prefix_pool VlanInterface#prefix_pool}
  */
  readonly prefixPool?: string;
}

export function vlanInterfaceIpv6InheritedAssignAddrTypeGuaToTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeGua | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: vlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseToTerraform(struct!.advertise),
    enable_on_interface: cdktf.booleanToTerraform(struct!.enableOnInterface),
    pool_type: vlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeToTerraform(struct!.poolType),
    prefix_pool: cdktf.stringToTerraform(struct!.prefixPool),
  }
}


export function vlanInterfaceIpv6InheritedAssignAddrTypeGuaToHclTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeGua | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: vlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise",
    },
    enable_on_interface: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool_type: {
      value: vlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeToHclTerraform(struct!.poolType),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType",
    },
    prefix_pool: {
      value: cdktf.stringToHclTerraform(struct!.prefixPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedAssignAddrTypeGuaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedAssignAddrTypeGua | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise?.internalValue;
    }
    if (this._enableOnInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOnInterface = this._enableOnInterface;
    }
    if (this._poolType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolType = this._poolType?.internalValue;
    }
    if (this._prefixPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPool = this._prefixPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedAssignAddrTypeGua | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise.internalValue = undefined;
      this._enableOnInterface = undefined;
      this._poolType.internalValue = undefined;
      this._prefixPool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise.internalValue = value.advertise;
      this._enableOnInterface = value.enableOnInterface;
      this._poolType.internalValue = value.poolType;
      this._prefixPool = value.prefixPool;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise = new VlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: VlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // enable_on_interface - computed: false, optional: true, required: false
  private _enableOnInterface?: boolean | cdktf.IResolvable; 
  public get enableOnInterface() {
    return this.getBooleanAttribute('enable_on_interface');
  }
  public set enableOnInterface(value: boolean | cdktf.IResolvable) {
    this._enableOnInterface = value;
  }
  public resetEnableOnInterface() {
    this._enableOnInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnInterfaceInput() {
    return this._enableOnInterface;
  }

  // pool_type - computed: false, optional: true, required: false
  private _poolType = new VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeOutputReference(this, "pool_type");
  public get poolType() {
    return this._poolType;
  }
  public putPoolType(value: VlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType) {
    this._poolType.internalValue = value;
  }
  public resetPoolType() {
    this._poolType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolTypeInput() {
    return this._poolType.internalValue;
  }

  // prefix_pool - computed: false, optional: true, required: false
  private _prefixPool?: string; 
  public get prefixPool() {
    return this.getStringAttribute('prefix_pool');
  }
  public set prefixPool(value: string) {
    this._prefixPool = value;
  }
  public resetPrefixPool() {
    this._prefixPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPoolInput() {
    return this._prefixPool;
  }
}
export interface VlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise {
  /**
  * Set the Auto Address Configuration Flag (A-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#auto_config_flag VlanInterface#auto_config_flag}
  */
  readonly autoConfigFlag?: boolean | cdktf.IResolvable;
  /**
  * enable advertising this prefix in router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set the On-Link Flag (L-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#onlink_flag VlanInterface#onlink_flag}
  */
  readonly onlinkFlag?: boolean | cdktf.IResolvable;
  /**
  * Preferred Lifetime (in seconds) of the prefix advertised in Router advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#preferred_lifetime VlanInterface#preferred_lifetime}
  */
  readonly preferredLifetime?: string;
  /**
  * Valid Lifetime (in seconds) of the prefix advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#valid_lifetime VlanInterface#valid_lifetime}
  */
  readonly validLifetime?: string;
}

export function vlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseToTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_config_flag: cdktf.booleanToTerraform(struct!.autoConfigFlag),
    enable: cdktf.booleanToTerraform(struct!.enable),
    onlink_flag: cdktf.booleanToTerraform(struct!.onlinkFlag),
    preferred_lifetime: cdktf.stringToTerraform(struct!.preferredLifetime),
    valid_lifetime: cdktf.stringToTerraform(struct!.validLifetime),
  }
}


export function vlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseToHclTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_config_flag: {
      value: cdktf.booleanToHclTerraform(struct!.autoConfigFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    onlink_flag: {
      value: cdktf.booleanToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preferred_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.preferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.validLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoConfigFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConfigFlag = this._autoConfigFlag;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    if (this._preferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetime = this._preferredLifetime;
    }
    if (this._validLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetime = this._validLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoConfigFlag = undefined;
      this._enable = undefined;
      this._onlinkFlag = undefined;
      this._preferredLifetime = undefined;
      this._validLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoConfigFlag = value.autoConfigFlag;
      this._enable = value.enable;
      this._onlinkFlag = value.onlinkFlag;
      this._preferredLifetime = value.preferredLifetime;
      this._validLifetime = value.validLifetime;
    }
  }

  // auto_config_flag - computed: false, optional: true, required: false
  private _autoConfigFlag?: boolean | cdktf.IResolvable; 
  public get autoConfigFlag() {
    return this.getBooleanAttribute('auto_config_flag');
  }
  public set autoConfigFlag(value: boolean | cdktf.IResolvable) {
    this._autoConfigFlag = value;
  }
  public resetAutoConfigFlag() {
    this._autoConfigFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigFlagInput() {
    return this._autoConfigFlag;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // onlink_flag - computed: false, optional: true, required: false
  private _onlinkFlag?: boolean | cdktf.IResolvable; 
  public get onlinkFlag() {
    return this.getBooleanAttribute('onlink_flag');
  }
  public set onlinkFlag(value: boolean | cdktf.IResolvable) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }

  // preferred_lifetime - computed: true, optional: true, required: false
  private _preferredLifetime?: string; 
  public get preferredLifetime() {
    return this.getStringAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: string) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // valid_lifetime - computed: true, optional: true, required: false
  private _validLifetime?: string; 
  public get validLifetime() {
    return this.getStringAttribute('valid_lifetime');
  }
  public set validLifetime(value: string) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }
}
export interface VlanInterfaceIpv6InheritedAssignAddrTypeUla {
  /**
  * Configure ULA (Unique Local Address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#address VlanInterface#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#advertise VlanInterface#advertise}
  */
  readonly advertise?: VlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise;
  /**
  * Anycast Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#anycast VlanInterface#anycast}
  */
  readonly anycast?: boolean | cdktf.IResolvable;
  /**
  * Configure this address on Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable_on_interface VlanInterface#enable_on_interface}
  */
  readonly enableOnInterface?: boolean | cdktf.IResolvable;
  /**
  * Use this as prefix to form full address with interface id/EUI-64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#prefix VlanInterface#prefix}
  */
  readonly prefix?: boolean | cdktf.IResolvable;
}

export function vlanInterfaceIpv6InheritedAssignAddrTypeUlaToTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeUla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    advertise: vlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseToTerraform(struct!.advertise),
    anycast: cdktf.booleanToTerraform(struct!.anycast),
    enable_on_interface: cdktf.booleanToTerraform(struct!.enableOnInterface),
    prefix: cdktf.booleanToTerraform(struct!.prefix),
  }
}


export function vlanInterfaceIpv6InheritedAssignAddrTypeUlaToHclTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrTypeUla | cdktf.IResolvable): any {
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
    advertise: {
      value: vlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise",
    },
    anycast: {
      value: cdktf.booleanToHclTerraform(struct!.anycast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_on_interface: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.booleanToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedAssignAddrTypeUlaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedAssignAddrTypeUla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._advertise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise?.internalValue;
    }
    if (this._anycast !== undefined) {
      hasAnyValues = true;
      internalValueResult.anycast = this._anycast;
    }
    if (this._enableOnInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOnInterface = this._enableOnInterface;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedAssignAddrTypeUla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._advertise.internalValue = undefined;
      this._anycast = undefined;
      this._enableOnInterface = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._advertise.internalValue = value.advertise;
      this._anycast = value.anycast;
      this._enableOnInterface = value.enableOnInterface;
      this._prefix = value.prefix;
    }
  }

  // address - computed: false, optional: true, required: false
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

  // advertise - computed: false, optional: true, required: false
  private _advertise = new VlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: VlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // anycast - computed: false, optional: true, required: false
  private _anycast?: boolean | cdktf.IResolvable; 
  public get anycast() {
    return this.getBooleanAttribute('anycast');
  }
  public set anycast(value: boolean | cdktf.IResolvable) {
    this._anycast = value;
  }
  public resetAnycast() {
    this._anycast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastInput() {
    return this._anycast;
  }

  // enable_on_interface - computed: false, optional: true, required: false
  private _enableOnInterface?: boolean | cdktf.IResolvable; 
  public get enableOnInterface() {
    return this.getBooleanAttribute('enable_on_interface');
  }
  public set enableOnInterface(value: boolean | cdktf.IResolvable) {
    this._enableOnInterface = value;
  }
  public resetEnableOnInterface() {
    this._enableOnInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnInterfaceInput() {
    return this._enableOnInterface;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: boolean | cdktf.IResolvable; 
  public get prefix() {
    return this.getBooleanAttribute('prefix');
  }
  public set prefix(value: boolean | cdktf.IResolvable) {
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
export interface VlanInterfaceIpv6InheritedAssignAddrType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#gua VlanInterface#gua}
  */
  readonly gua?: VlanInterfaceIpv6InheritedAssignAddrTypeGua;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ula VlanInterface#ula}
  */
  readonly ula?: VlanInterfaceIpv6InheritedAssignAddrTypeUla;
}

export function vlanInterfaceIpv6InheritedAssignAddrTypeToTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gua: vlanInterfaceIpv6InheritedAssignAddrTypeGuaToTerraform(struct!.gua),
    ula: vlanInterfaceIpv6InheritedAssignAddrTypeUlaToTerraform(struct!.ula),
  }
}


export function vlanInterfaceIpv6InheritedAssignAddrTypeToHclTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddrType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gua: {
      value: vlanInterfaceIpv6InheritedAssignAddrTypeGuaToHclTerraform(struct!.gua),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedAssignAddrTypeGua",
    },
    ula: {
      value: vlanInterfaceIpv6InheritedAssignAddrTypeUlaToHclTerraform(struct!.ula),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedAssignAddrTypeUla",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedAssignAddrTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedAssignAddrType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gua?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gua = this._gua?.internalValue;
    }
    if (this._ula?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ula = this._ula?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedAssignAddrType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gua.internalValue = undefined;
      this._ula.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gua.internalValue = value.gua;
      this._ula.internalValue = value.ula;
    }
  }

  // gua - computed: false, optional: true, required: false
  private _gua = new VlanInterfaceIpv6InheritedAssignAddrTypeGuaOutputReference(this, "gua");
  public get gua() {
    return this._gua;
  }
  public putGua(value: VlanInterfaceIpv6InheritedAssignAddrTypeGua) {
    this._gua.internalValue = value;
  }
  public resetGua() {
    this._gua.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaInput() {
    return this._gua.internalValue;
  }

  // ula - computed: false, optional: true, required: false
  private _ula = new VlanInterfaceIpv6InheritedAssignAddrTypeUlaOutputReference(this, "ula");
  public get ula() {
    return this._ula;
  }
  public putUla(value: VlanInterfaceIpv6InheritedAssignAddrTypeUla) {
    this._ula.internalValue = value;
  }
  public resetUla() {
    this._ula.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulaInput() {
    return this._ula.internalValue;
  }
}
export interface VlanInterfaceIpv6InheritedAssignAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#type VlanInterface#type}
  */
  readonly type?: VlanInterfaceIpv6InheritedAssignAddrType;
}

export function vlanInterfaceIpv6InheritedAssignAddrToTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: vlanInterfaceIpv6InheritedAssignAddrTypeToTerraform(struct!.type),
  }
}


export function vlanInterfaceIpv6InheritedAssignAddrToHclTerraform(struct?: VlanInterfaceIpv6InheritedAssignAddr | cdktf.IResolvable): any {
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
    type: {
      value: vlanInterfaceIpv6InheritedAssignAddrTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedAssignAddrType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedAssignAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceIpv6InheritedAssignAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedAssignAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type.internalValue = value.type;
    }
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

  // type - computed: false, optional: true, required: false
  private _type = new VlanInterfaceIpv6InheritedAssignAddrTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: VlanInterfaceIpv6InheritedAssignAddrType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}

export class VlanInterfaceIpv6InheritedAssignAddrList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceIpv6InheritedAssignAddr[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceIpv6InheritedAssignAddrOutputReference {
    return new VlanInterfaceIpv6InheritedAssignAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 {
  /**
  * Prefix-Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#prefix_pool VlanInterface#prefix_pool}
  */
  readonly prefixPool?: string;
}

export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_pool: cdktf.stringToTerraform(struct!.prefixPool),
  }
}


export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_pool: {
      value: cdktf.stringToHclTerraform(struct!.prefixPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPool = this._prefixPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixPool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixPool = value.prefixPool;
    }
  }

  // prefix_pool - computed: false, optional: true, required: false
  private _prefixPool?: string; 
  public get prefixPool() {
    return this.getStringAttribute('prefix_pool');
  }
  public set prefixPool(value: string) {
    this._prefixPool = value;
  }
  public resetPrefixPool() {
    this._prefixPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPoolInput() {
    return this._prefixPool;
  }
}
export interface VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer {
  /**
  * (4-3600) Lifetime in Seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#lifetime VlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
}

export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerToTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerToHclTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._name = value.name;
    }
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerOutputReference {
    return new VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#server VlanInterface#server}
  */
  readonly server?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable;
}

export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualToTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktf.listMapper(vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerToTerraform, false)(struct!.server),
  }
}


export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktf.listMapperHcl(vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerToHclTerraform, false)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._server.internalValue = value.server;
    }
  }

  // server - computed: false, optional: true, required: false
  private _server = new VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dhcpv6 VlanInterface#dhcpv6}
  */
  readonly dhcpv6?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#manual VlanInterface#manual}
  */
  readonly manual?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual;
}

export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceToTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualToTerraform(struct!.manual),
  }
}


export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceToHclTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6",
    },
    manual: {
      value: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6 = this._dhcpv6?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = undefined;
      this._manual.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = value.dhcpv6;
      this._manual.internalValue = value.manual;
    }
  }

  // dhcpv6 - computed: false, optional: true, required: false
  private _dhcpv6 = new VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6) {
    this._dhcpv6.internalValue = value;
  }
  public resetDhcpv6() {
    this._dhcpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }
}
export interface VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#source VlanInterface#source}
  */
  readonly source?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource;
}

export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerToTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceToTerraform(struct!.source),
  }
}


export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerToHclTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._source.internalValue = value.source;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // source - computed: false, optional: true, required: false
  private _source = new VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 {
  /**
  * Prefix-Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#prefix_pool VlanInterface#prefix_pool}
  */
  readonly prefixPool?: string;
}

export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_pool: cdktf.stringToTerraform(struct!.prefixPool),
  }
}


export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_pool: {
      value: cdktf.stringToHclTerraform(struct!.prefixPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPool = this._prefixPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixPool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixPool = value.prefixPool;
    }
  }

  // prefix_pool - computed: false, optional: true, required: false
  private _prefixPool?: string; 
  public get prefixPool() {
    return this.getStringAttribute('prefix_pool');
  }
  public set prefixPool(value: string) {
    this._prefixPool = value;
  }
  public resetPrefixPool() {
    this._prefixPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPoolInput() {
    return this._prefixPool;
  }
}
export interface VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#lifetime VlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
}

export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._name = value.name;
    }
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference {
    return new VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#suffix VlanInterface#suffix}
  */
  readonly suffix?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable;
}

export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suffix: cdktf.listMapper(vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform, false)(struct!.suffix),
  }
}


export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suffix: {
      value: cdktf.listMapperHcl(vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform, false)(struct!.suffix),
      isBlock: true,
      type: "list",
      storageClassType: "VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suffix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._suffix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._suffix.internalValue = value.suffix;
    }
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix = new VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixList(this, "suffix", false);
  public get suffix() {
    return this._suffix;
  }
  public putSuffix(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable) {
    this._suffix.internalValue = value;
  }
  public resetSuffix() {
    this._suffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix.internalValue;
  }
}
export interface VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dhcpv6 VlanInterface#dhcpv6}
  */
  readonly dhcpv6?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#manual VlanInterface#manual}
  */
  readonly manual?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual;
}

export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceToTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct!.manual),
  }
}


export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6",
    },
    manual: {
      value: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6 = this._dhcpv6?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = undefined;
      this._manual.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = value.dhcpv6;
      this._manual.internalValue = value.manual;
    }
  }

  // dhcpv6 - computed: false, optional: true, required: false
  private _dhcpv6 = new VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6) {
    this._dhcpv6.internalValue = value;
  }
  public resetDhcpv6() {
    this._dhcpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }
}
export interface VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#source VlanInterface#source}
  */
  readonly source?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource;
}

export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixToTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceToTerraform(struct!.source),
  }
}


export function vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixToHclTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._source.internalValue = value.source;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // source - computed: false, optional: true, required: false
  private _source = new VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface VlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#hw_address VlanInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
}

export function vlanInterfaceIpv6InheritedNeighborDiscoveryNeighborToTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vlanInterfaceIpv6InheritedNeighborDiscoveryNeighborToHclTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hw_address: {
      value: cdktf.stringToHclTerraform(struct!.hwAddress),
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

export class VlanInterfaceIpv6InheritedNeighborDiscoveryNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hwAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwAddress = this._hwAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hwAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hwAddress = value.hwAddress;
      this._name = value.name;
    }
  }

  // hw_address - computed: false, optional: true, required: false
  private _hwAddress?: string; 
  public get hwAddress() {
    return this.getStringAttribute('hw_address');
  }
  public set hwAddress(value: string) {
    this._hwAddress = value;
  }
  public resetHwAddress() {
    this._hwAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwAddressInput() {
    return this._hwAddress;
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
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryNeighborList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceIpv6InheritedNeighborDiscoveryNeighborOutputReference {
    return new VlanInterfaceIpv6InheritedNeighborDiscoveryNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * check consistency of RA messages from other routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable_consistency_check VlanInterface#enable_consistency_check}
  */
  readonly enableConsistencyCheck?: boolean | cdktf.IResolvable;
  /**
  * Current Hop Limit advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#hop_limit VlanInterface#hop_limit}
  */
  readonly hopLimit?: string;
  /**
  * Router Lifetime (in seconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#lifetime VlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * value of MTU option in Router Advertisement messages, upto 9216 in Jumbo-Frame mode, up to 1500 otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#link_mtu VlanInterface#link_mtu}
  */
  readonly linkMtu?: string;
  /**
  * Set the Managed Configuration Flag (M-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#managed_flag VlanInterface#managed_flag}
  */
  readonly managedFlag?: boolean | cdktf.IResolvable;
  /**
  * Maximum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#max_interval VlanInterface#max_interval}
  */
  readonly maxInterval?: number;
  /**
  * Minimum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#min_interval VlanInterface#min_interval}
  */
  readonly minInterval?: number;
  /**
  * Set the Other Stateful Configuration Flag (O-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#other_flag VlanInterface#other_flag}
  */
  readonly otherFlag?: boolean | cdktf.IResolvable;
  /**
  * Reachable Time (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#reachable_time VlanInterface#reachable_time}
  */
  readonly reachableTime?: string;
  /**
  * Retransmission Timer (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#retransmission_timer VlanInterface#retransmission_timer}
  */
  readonly retransmissionTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#router_preference VlanInterface#router_preference}
  */
  readonly routerPreference?: string;
}

export function vlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementToTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    enable_consistency_check: cdktf.booleanToTerraform(struct!.enableConsistencyCheck),
    hop_limit: cdktf.stringToTerraform(struct!.hopLimit),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    link_mtu: cdktf.stringToTerraform(struct!.linkMtu),
    managed_flag: cdktf.booleanToTerraform(struct!.managedFlag),
    max_interval: cdktf.numberToTerraform(struct!.maxInterval),
    min_interval: cdktf.numberToTerraform(struct!.minInterval),
    other_flag: cdktf.booleanToTerraform(struct!.otherFlag),
    reachable_time: cdktf.stringToTerraform(struct!.reachableTime),
    retransmission_timer: cdktf.stringToTerraform(struct!.retransmissionTimer),
    router_preference: cdktf.stringToTerraform(struct!.routerPreference),
  }
}


export function vlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementToHclTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_consistency_check: {
      value: cdktf.booleanToHclTerraform(struct!.enableConsistencyCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hop_limit: {
      value: cdktf.stringToHclTerraform(struct!.hopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_mtu: {
      value: cdktf.stringToHclTerraform(struct!.linkMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_flag: {
      value: cdktf.booleanToHclTerraform(struct!.managedFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_interval: {
      value: cdktf.numberToHclTerraform(struct!.minInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_flag: {
      value: cdktf.booleanToHclTerraform(struct!.otherFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reachable_time: {
      value: cdktf.stringToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmission_timer: {
      value: cdktf.stringToHclTerraform(struct!.retransmissionTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_preference: {
      value: cdktf.stringToHclTerraform(struct!.routerPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enableConsistencyCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConsistencyCheck = this._enableConsistencyCheck;
    }
    if (this._hopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopLimit = this._hopLimit;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._linkMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkMtu = this._linkMtu;
    }
    if (this._managedFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFlag = this._managedFlag;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    if (this._minInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInterval = this._minInterval;
    }
    if (this._otherFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherFlag = this._otherFlag;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._retransmissionTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmissionTimer = this._retransmissionTimer;
    }
    if (this._routerPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerPreference = this._routerPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._enableConsistencyCheck = undefined;
      this._hopLimit = undefined;
      this._lifetime = undefined;
      this._linkMtu = undefined;
      this._managedFlag = undefined;
      this._maxInterval = undefined;
      this._minInterval = undefined;
      this._otherFlag = undefined;
      this._reachableTime = undefined;
      this._retransmissionTimer = undefined;
      this._routerPreference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._enableConsistencyCheck = value.enableConsistencyCheck;
      this._hopLimit = value.hopLimit;
      this._lifetime = value.lifetime;
      this._linkMtu = value.linkMtu;
      this._managedFlag = value.managedFlag;
      this._maxInterval = value.maxInterval;
      this._minInterval = value.minInterval;
      this._otherFlag = value.otherFlag;
      this._reachableTime = value.reachableTime;
      this._retransmissionTimer = value.retransmissionTimer;
      this._routerPreference = value.routerPreference;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_consistency_check - computed: false, optional: true, required: false
  private _enableConsistencyCheck?: boolean | cdktf.IResolvable; 
  public get enableConsistencyCheck() {
    return this.getBooleanAttribute('enable_consistency_check');
  }
  public set enableConsistencyCheck(value: boolean | cdktf.IResolvable) {
    this._enableConsistencyCheck = value;
  }
  public resetEnableConsistencyCheck() {
    this._enableConsistencyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsistencyCheckInput() {
    return this._enableConsistencyCheck;
  }

  // hop_limit - computed: true, optional: true, required: false
  private _hopLimit?: string; 
  public get hopLimit() {
    return this.getStringAttribute('hop_limit');
  }
  public set hopLimit(value: string) {
    this._hopLimit = value;
  }
  public resetHopLimit() {
    this._hopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitInput() {
    return this._hopLimit;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // link_mtu - computed: true, optional: true, required: false
  private _linkMtu?: string; 
  public get linkMtu() {
    return this.getStringAttribute('link_mtu');
  }
  public set linkMtu(value: string) {
    this._linkMtu = value;
  }
  public resetLinkMtu() {
    this._linkMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkMtuInput() {
    return this._linkMtu;
  }

  // managed_flag - computed: false, optional: true, required: false
  private _managedFlag?: boolean | cdktf.IResolvable; 
  public get managedFlag() {
    return this.getBooleanAttribute('managed_flag');
  }
  public set managedFlag(value: boolean | cdktf.IResolvable) {
    this._managedFlag = value;
  }
  public resetManagedFlag() {
    this._managedFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFlagInput() {
    return this._managedFlag;
  }

  // max_interval - computed: true, optional: true, required: false
  private _maxInterval?: number; 
  public get maxInterval() {
    return this.getNumberAttribute('max_interval');
  }
  public set maxInterval(value: number) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }

  // min_interval - computed: true, optional: true, required: false
  private _minInterval?: number; 
  public get minInterval() {
    return this.getNumberAttribute('min_interval');
  }
  public set minInterval(value: number) {
    this._minInterval = value;
  }
  public resetMinInterval() {
    this._minInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntervalInput() {
    return this._minInterval;
  }

  // other_flag - computed: false, optional: true, required: false
  private _otherFlag?: boolean | cdktf.IResolvable; 
  public get otherFlag() {
    return this.getBooleanAttribute('other_flag');
  }
  public set otherFlag(value: boolean | cdktf.IResolvable) {
    this._otherFlag = value;
  }
  public resetOtherFlag() {
    this._otherFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFlagInput() {
    return this._otherFlag;
  }

  // reachable_time - computed: true, optional: true, required: false
  private _reachableTime?: string; 
  public get reachableTime() {
    return this.getStringAttribute('reachable_time');
  }
  public set reachableTime(value: string) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // retransmission_timer - computed: true, optional: true, required: false
  private _retransmissionTimer?: string; 
  public get retransmissionTimer() {
    return this.getStringAttribute('retransmission_timer');
  }
  public set retransmissionTimer(value: string) {
    this._retransmissionTimer = value;
  }
  public resetRetransmissionTimer() {
    this._retransmissionTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmissionTimerInput() {
    return this._retransmissionTimer;
  }

  // router_preference - computed: true, optional: true, required: false
  private _routerPreference?: string; 
  public get routerPreference() {
    return this.getStringAttribute('router_preference');
  }
  public set routerPreference(value: string) {
    this._routerPreference = value;
  }
  public resetRouterPreference() {
    this._routerPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerPreferenceInput() {
    return this._routerPreference;
  }
}
export interface VlanInterfaceIpv6InheritedNeighborDiscovery {
  /**
  * Number of consecutive neighbor solicitation messages sent for duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dad_attempts VlanInterface#dad_attempts}
  */
  readonly dadAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dns_server VlanInterface#dns_server}
  */
  readonly dnsServer?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dns_suffix VlanInterface#dns_suffix}
  */
  readonly dnsSuffix?: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix;
  /**
  * Enable Duplicate Address Detection (DAD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable_dad VlanInterface#enable_dad}
  */
  readonly enableDad?: boolean | cdktf.IResolvable;
  /**
  * Enable NDP Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable_ndp_monitor VlanInterface#enable_ndp_monitor}
  */
  readonly enableNdpMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#neighbor VlanInterface#neighbor}
  */
  readonly neighbor?: VlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor[] | cdktf.IResolvable;
  /**
  * Interval (in seconds) between consecutive neighbor solicitation messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ns_interval VlanInterface#ns_interval}
  */
  readonly nsInterval?: number;
  /**
  * Time (in seconds) that the Reachable status for a neighbor can be maintained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#reachable_time VlanInterface#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#router_advertisement VlanInterface#router_advertisement}
  */
  readonly routerAdvertisement?: VlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement;
}

export function vlanInterfaceIpv6InheritedNeighborDiscoveryToTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dad_attempts: cdktf.numberToTerraform(struct!.dadAttempts),
    dns_server: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerToTerraform(struct!.dnsServer),
    dns_suffix: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixToTerraform(struct!.dnsSuffix),
    enable_dad: cdktf.booleanToTerraform(struct!.enableDad),
    enable_ndp_monitor: cdktf.booleanToTerraform(struct!.enableNdpMonitor),
    neighbor: cdktf.listMapper(vlanInterfaceIpv6InheritedNeighborDiscoveryNeighborToTerraform, false)(struct!.neighbor),
    ns_interval: cdktf.numberToTerraform(struct!.nsInterval),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    router_advertisement: vlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementToTerraform(struct!.routerAdvertisement),
  }
}


export function vlanInterfaceIpv6InheritedNeighborDiscoveryToHclTerraform(struct?: VlanInterfaceIpv6InheritedNeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dad_attempts: {
      value: cdktf.numberToHclTerraform(struct!.dadAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_server: {
      value: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerToHclTerraform(struct!.dnsServer),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer",
    },
    dns_suffix: {
      value: vlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixToHclTerraform(struct!.dnsSuffix),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix",
    },
    enable_dad: {
      value: cdktf.booleanToHclTerraform(struct!.enableDad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ndp_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.enableNdpMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neighbor: {
      value: cdktf.listMapperHcl(vlanInterfaceIpv6InheritedNeighborDiscoveryNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "VlanInterfaceIpv6InheritedNeighborDiscoveryNeighborList",
    },
    ns_interval: {
      value: cdktf.numberToHclTerraform(struct!.nsInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    router_advertisement: {
      value: vlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementToHclTerraform(struct!.routerAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedNeighborDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6InheritedNeighborDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dadAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dadAttempts = this._dadAttempts;
    }
    if (this._dnsServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer?.internalValue;
    }
    if (this._dnsSuffix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffix = this._dnsSuffix?.internalValue;
    }
    if (this._enableDad !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDad = this._enableDad;
    }
    if (this._enableNdpMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNdpMonitor = this._enableNdpMonitor;
    }
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    if (this._nsInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsInterval = this._nsInterval;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._routerAdvertisement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAdvertisement = this._routerAdvertisement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6InheritedNeighborDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dadAttempts = undefined;
      this._dnsServer.internalValue = undefined;
      this._dnsSuffix.internalValue = undefined;
      this._enableDad = undefined;
      this._enableNdpMonitor = undefined;
      this._neighbor.internalValue = undefined;
      this._nsInterval = undefined;
      this._reachableTime = undefined;
      this._routerAdvertisement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dadAttempts = value.dadAttempts;
      this._dnsServer.internalValue = value.dnsServer;
      this._dnsSuffix.internalValue = value.dnsSuffix;
      this._enableDad = value.enableDad;
      this._enableNdpMonitor = value.enableNdpMonitor;
      this._neighbor.internalValue = value.neighbor;
      this._nsInterval = value.nsInterval;
      this._reachableTime = value.reachableTime;
      this._routerAdvertisement.internalValue = value.routerAdvertisement;
    }
  }

  // dad_attempts - computed: true, optional: true, required: false
  private _dadAttempts?: number; 
  public get dadAttempts() {
    return this.getNumberAttribute('dad_attempts');
  }
  public set dadAttempts(value: number) {
    this._dadAttempts = value;
  }
  public resetDadAttempts() {
    this._dadAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dadAttemptsInput() {
    return this._dadAttempts;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer = new VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerOutputReference(this, "dns_server");
  public get dnsServer() {
    return this._dnsServer;
  }
  public putDnsServer(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer) {
    this._dnsServer.internalValue = value;
  }
  public resetDnsServer() {
    this._dnsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer.internalValue;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix = new VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixOutputReference(this, "dns_suffix");
  public get dnsSuffix() {
    return this._dnsSuffix;
  }
  public putDnsSuffix(value: VlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix) {
    this._dnsSuffix.internalValue = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix.internalValue;
  }

  // enable_dad - computed: false, optional: true, required: false
  private _enableDad?: boolean | cdktf.IResolvable; 
  public get enableDad() {
    return this.getBooleanAttribute('enable_dad');
  }
  public set enableDad(value: boolean | cdktf.IResolvable) {
    this._enableDad = value;
  }
  public resetEnableDad() {
    this._enableDad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDadInput() {
    return this._enableDad;
  }

  // enable_ndp_monitor - computed: false, optional: true, required: false
  private _enableNdpMonitor?: boolean | cdktf.IResolvable; 
  public get enableNdpMonitor() {
    return this.getBooleanAttribute('enable_ndp_monitor');
  }
  public set enableNdpMonitor(value: boolean | cdktf.IResolvable) {
    this._enableNdpMonitor = value;
  }
  public resetEnableNdpMonitor() {
    this._enableNdpMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNdpMonitorInput() {
    return this._enableNdpMonitor;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new VlanInterfaceIpv6InheritedNeighborDiscoveryNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: VlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // ns_interval - computed: true, optional: true, required: false
  private _nsInterval?: number; 
  public get nsInterval() {
    return this.getNumberAttribute('ns_interval');
  }
  public set nsInterval(value: number) {
    this._nsInterval = value;
  }
  public resetNsInterval() {
    this._nsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsIntervalInput() {
    return this._nsInterval;
  }

  // reachable_time - computed: true, optional: true, required: false
  private _reachableTime?: number; 
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }
  public set reachableTime(value: number) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // router_advertisement - computed: false, optional: true, required: false
  private _routerAdvertisement = new VlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementOutputReference(this, "router_advertisement");
  public get routerAdvertisement() {
    return this._routerAdvertisement;
  }
  public putRouterAdvertisement(value: VlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement) {
    this._routerAdvertisement.internalValue = value;
  }
  public resetRouterAdvertisement() {
    this._routerAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdvertisementInput() {
    return this._routerAdvertisement.internalValue;
  }
}
export interface VlanInterfaceIpv6Inherited {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#assign_addr VlanInterface#assign_addr}
  */
  readonly assignAddr?: VlanInterfaceIpv6InheritedAssignAddr[] | cdktf.IResolvable;
  /**
  * Enable Inherited Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#neighbor_discovery VlanInterface#neighbor_discovery}
  */
  readonly neighborDiscovery?: VlanInterfaceIpv6InheritedNeighborDiscovery;
}

export function vlanInterfaceIpv6InheritedToTerraform(struct?: VlanInterfaceIpv6Inherited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_addr: cdktf.listMapper(vlanInterfaceIpv6InheritedAssignAddrToTerraform, false)(struct!.assignAddr),
    enable: cdktf.booleanToTerraform(struct!.enable),
    neighbor_discovery: vlanInterfaceIpv6InheritedNeighborDiscoveryToTerraform(struct!.neighborDiscovery),
  }
}


export function vlanInterfaceIpv6InheritedToHclTerraform(struct?: VlanInterfaceIpv6Inherited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_addr: {
      value: cdktf.listMapperHcl(vlanInterfaceIpv6InheritedAssignAddrToHclTerraform, false)(struct!.assignAddr),
      isBlock: true,
      type: "list",
      storageClassType: "VlanInterfaceIpv6InheritedAssignAddrList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neighbor_discovery: {
      value: vlanInterfaceIpv6InheritedNeighborDiscoveryToHclTerraform(struct!.neighborDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6InheritedNeighborDiscovery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6InheritedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6Inherited | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignAddr = this._assignAddr?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._neighborDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborDiscovery = this._neighborDiscovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6Inherited | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignAddr.internalValue = undefined;
      this._enable = undefined;
      this._neighborDiscovery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignAddr.internalValue = value.assignAddr;
      this._enable = value.enable;
      this._neighborDiscovery.internalValue = value.neighborDiscovery;
    }
  }

  // assign_addr - computed: false, optional: true, required: false
  private _assignAddr = new VlanInterfaceIpv6InheritedAssignAddrList(this, "assign_addr", false);
  public get assignAddr() {
    return this._assignAddr;
  }
  public putAssignAddr(value: VlanInterfaceIpv6InheritedAssignAddr[] | cdktf.IResolvable) {
    this._assignAddr.internalValue = value;
  }
  public resetAssignAddr() {
    this._assignAddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignAddrInput() {
    return this._assignAddr.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // neighbor_discovery - computed: false, optional: true, required: false
  private _neighborDiscovery = new VlanInterfaceIpv6InheritedNeighborDiscoveryOutputReference(this, "neighbor_discovery");
  public get neighborDiscovery() {
    return this._neighborDiscovery;
  }
  public putNeighborDiscovery(value: VlanInterfaceIpv6InheritedNeighborDiscovery) {
    this._neighborDiscovery.internalValue = value;
  }
  public resetNeighborDiscovery() {
    this._neighborDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborDiscoveryInput() {
    return this._neighborDiscovery.internalValue;
  }
}
export interface VlanInterfaceIpv6NeighborDiscoveryNeighbor {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#hw_address VlanInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
}

export function vlanInterfaceIpv6NeighborDiscoveryNeighborToTerraform(struct?: VlanInterfaceIpv6NeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vlanInterfaceIpv6NeighborDiscoveryNeighborToHclTerraform(struct?: VlanInterfaceIpv6NeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hw_address: {
      value: cdktf.stringToHclTerraform(struct!.hwAddress),
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

export class VlanInterfaceIpv6NeighborDiscoveryNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceIpv6NeighborDiscoveryNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hwAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwAddress = this._hwAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6NeighborDiscoveryNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hwAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hwAddress = value.hwAddress;
      this._name = value.name;
    }
  }

  // hw_address - computed: false, optional: true, required: false
  private _hwAddress?: string; 
  public get hwAddress() {
    return this.getStringAttribute('hw_address');
  }
  public set hwAddress(value: string) {
    this._hwAddress = value;
  }
  public resetHwAddress() {
    this._hwAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwAddressInput() {
    return this._hwAddress;
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
}

export class VlanInterfaceIpv6NeighborDiscoveryNeighborList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceIpv6NeighborDiscoveryNeighbor[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceIpv6NeighborDiscoveryNeighborOutputReference {
    return new VlanInterfaceIpv6NeighborDiscoveryNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#lifetime VlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
}

export function vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToTerraform(struct?: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToHclTerraform(struct?: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._name = value.name;
    }
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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
}

export class VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerOutputReference {
    return new VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#lifetime VlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
}

export function vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToTerraform(struct?: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToHclTerraform(struct?: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._name = value.name;
    }
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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
}

export class VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixOutputReference {
    return new VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#server VlanInterface#server}
  */
  readonly server?: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#suffix VlanInterface#suffix}
  */
  readonly suffix?: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix[] | cdktf.IResolvable;
}

export function vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportToTerraform(struct?: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    server: cdktf.listMapper(vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToTerraform, false)(struct!.server),
    suffix: cdktf.listMapper(vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToTerraform, false)(struct!.suffix),
  }
}


export function vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportToHclTerraform(struct?: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: cdktf.listMapperHcl(vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToHclTerraform, false)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerList",
    },
    suffix: {
      value: cdktf.listMapperHcl(vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToHclTerraform, false)(struct!.suffix),
      isBlock: true,
      type: "list",
      storageClassType: "VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    if (this._suffix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._server.internalValue = undefined;
      this._suffix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._server.internalValue = value.server;
      this._suffix.internalValue = value.suffix;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // server - computed: false, optional: true, required: false
  private _server = new VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix = new VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixList(this, "suffix", false);
  public get suffix() {
    return this._suffix;
  }
  public putSuffix(value: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix[] | cdktf.IResolvable) {
    this._suffix.internalValue = value;
  }
  public resetSuffix() {
    this._suffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix.internalValue;
  }
}
export interface VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dns_support VlanInterface#dns_support}
  */
  readonly dnsSupport?: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * check consistency of RA messages from other routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable_consistency_check VlanInterface#enable_consistency_check}
  */
  readonly enableConsistencyCheck?: boolean | cdktf.IResolvable;
  /**
  * Current Hop Limit advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#hop_limit VlanInterface#hop_limit}
  */
  readonly hopLimit?: string;
  /**
  * Router Lifetime (in seconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#lifetime VlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * value of MTU option in Router Advertisement messages, upto 9216 in Jumbo-Frame mode, up to 1500 otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#link_mtu VlanInterface#link_mtu}
  */
  readonly linkMtu?: string;
  /**
  * Set the Managed Configuration Flag (M-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#managed_flag VlanInterface#managed_flag}
  */
  readonly managedFlag?: boolean | cdktf.IResolvable;
  /**
  * Maximum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#max_interval VlanInterface#max_interval}
  */
  readonly maxInterval?: number;
  /**
  * Minimum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#min_interval VlanInterface#min_interval}
  */
  readonly minInterval?: number;
  /**
  * Set the Other Stateful Configuration Flag (O-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#other_flag VlanInterface#other_flag}
  */
  readonly otherFlag?: boolean | cdktf.IResolvable;
  /**
  * Reachable Time (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#reachable_time VlanInterface#reachable_time}
  */
  readonly reachableTime?: string;
  /**
  * Retransmission Timer (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#retransmission_timer VlanInterface#retransmission_timer}
  */
  readonly retransmissionTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#router_preference VlanInterface#router_preference}
  */
  readonly routerPreference?: string;
}

export function vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementToTerraform(struct?: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_support: vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportToTerraform(struct!.dnsSupport),
    enable: cdktf.booleanToTerraform(struct!.enable),
    enable_consistency_check: cdktf.booleanToTerraform(struct!.enableConsistencyCheck),
    hop_limit: cdktf.stringToTerraform(struct!.hopLimit),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    link_mtu: cdktf.stringToTerraform(struct!.linkMtu),
    managed_flag: cdktf.booleanToTerraform(struct!.managedFlag),
    max_interval: cdktf.numberToTerraform(struct!.maxInterval),
    min_interval: cdktf.numberToTerraform(struct!.minInterval),
    other_flag: cdktf.booleanToTerraform(struct!.otherFlag),
    reachable_time: cdktf.stringToTerraform(struct!.reachableTime),
    retransmission_timer: cdktf.stringToTerraform(struct!.retransmissionTimer),
    router_preference: cdktf.stringToTerraform(struct!.routerPreference),
  }
}


export function vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementToHclTerraform(struct?: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_support: {
      value: vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportToHclTerraform(struct!.dnsSupport),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_consistency_check: {
      value: cdktf.booleanToHclTerraform(struct!.enableConsistencyCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hop_limit: {
      value: cdktf.stringToHclTerraform(struct!.hopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_mtu: {
      value: cdktf.stringToHclTerraform(struct!.linkMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_flag: {
      value: cdktf.booleanToHclTerraform(struct!.managedFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_interval: {
      value: cdktf.numberToHclTerraform(struct!.minInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_flag: {
      value: cdktf.booleanToHclTerraform(struct!.otherFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reachable_time: {
      value: cdktf.stringToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmission_timer: {
      value: cdktf.stringToHclTerraform(struct!.retransmissionTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_preference: {
      value: cdktf.stringToHclTerraform(struct!.routerPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsSupport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSupport = this._dnsSupport?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enableConsistencyCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConsistencyCheck = this._enableConsistencyCheck;
    }
    if (this._hopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopLimit = this._hopLimit;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._linkMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkMtu = this._linkMtu;
    }
    if (this._managedFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFlag = this._managedFlag;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    if (this._minInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInterval = this._minInterval;
    }
    if (this._otherFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherFlag = this._otherFlag;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._retransmissionTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmissionTimer = this._retransmissionTimer;
    }
    if (this._routerPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerPreference = this._routerPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsSupport.internalValue = undefined;
      this._enable = undefined;
      this._enableConsistencyCheck = undefined;
      this._hopLimit = undefined;
      this._lifetime = undefined;
      this._linkMtu = undefined;
      this._managedFlag = undefined;
      this._maxInterval = undefined;
      this._minInterval = undefined;
      this._otherFlag = undefined;
      this._reachableTime = undefined;
      this._retransmissionTimer = undefined;
      this._routerPreference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsSupport.internalValue = value.dnsSupport;
      this._enable = value.enable;
      this._enableConsistencyCheck = value.enableConsistencyCheck;
      this._hopLimit = value.hopLimit;
      this._lifetime = value.lifetime;
      this._linkMtu = value.linkMtu;
      this._managedFlag = value.managedFlag;
      this._maxInterval = value.maxInterval;
      this._minInterval = value.minInterval;
      this._otherFlag = value.otherFlag;
      this._reachableTime = value.reachableTime;
      this._retransmissionTimer = value.retransmissionTimer;
      this._routerPreference = value.routerPreference;
    }
  }

  // dns_support - computed: false, optional: true, required: false
  private _dnsSupport = new VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportOutputReference(this, "dns_support");
  public get dnsSupport() {
    return this._dnsSupport;
  }
  public putDnsSupport(value: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport) {
    this._dnsSupport.internalValue = value;
  }
  public resetDnsSupport() {
    this._dnsSupport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSupportInput() {
    return this._dnsSupport.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_consistency_check - computed: false, optional: true, required: false
  private _enableConsistencyCheck?: boolean | cdktf.IResolvable; 
  public get enableConsistencyCheck() {
    return this.getBooleanAttribute('enable_consistency_check');
  }
  public set enableConsistencyCheck(value: boolean | cdktf.IResolvable) {
    this._enableConsistencyCheck = value;
  }
  public resetEnableConsistencyCheck() {
    this._enableConsistencyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsistencyCheckInput() {
    return this._enableConsistencyCheck;
  }

  // hop_limit - computed: true, optional: true, required: false
  private _hopLimit?: string; 
  public get hopLimit() {
    return this.getStringAttribute('hop_limit');
  }
  public set hopLimit(value: string) {
    this._hopLimit = value;
  }
  public resetHopLimit() {
    this._hopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitInput() {
    return this._hopLimit;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // link_mtu - computed: true, optional: true, required: false
  private _linkMtu?: string; 
  public get linkMtu() {
    return this.getStringAttribute('link_mtu');
  }
  public set linkMtu(value: string) {
    this._linkMtu = value;
  }
  public resetLinkMtu() {
    this._linkMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkMtuInput() {
    return this._linkMtu;
  }

  // managed_flag - computed: false, optional: true, required: false
  private _managedFlag?: boolean | cdktf.IResolvable; 
  public get managedFlag() {
    return this.getBooleanAttribute('managed_flag');
  }
  public set managedFlag(value: boolean | cdktf.IResolvable) {
    this._managedFlag = value;
  }
  public resetManagedFlag() {
    this._managedFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFlagInput() {
    return this._managedFlag;
  }

  // max_interval - computed: true, optional: true, required: false
  private _maxInterval?: number; 
  public get maxInterval() {
    return this.getNumberAttribute('max_interval');
  }
  public set maxInterval(value: number) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }

  // min_interval - computed: true, optional: true, required: false
  private _minInterval?: number; 
  public get minInterval() {
    return this.getNumberAttribute('min_interval');
  }
  public set minInterval(value: number) {
    this._minInterval = value;
  }
  public resetMinInterval() {
    this._minInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntervalInput() {
    return this._minInterval;
  }

  // other_flag - computed: false, optional: true, required: false
  private _otherFlag?: boolean | cdktf.IResolvable; 
  public get otherFlag() {
    return this.getBooleanAttribute('other_flag');
  }
  public set otherFlag(value: boolean | cdktf.IResolvable) {
    this._otherFlag = value;
  }
  public resetOtherFlag() {
    this._otherFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFlagInput() {
    return this._otherFlag;
  }

  // reachable_time - computed: true, optional: true, required: false
  private _reachableTime?: string; 
  public get reachableTime() {
    return this.getStringAttribute('reachable_time');
  }
  public set reachableTime(value: string) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // retransmission_timer - computed: true, optional: true, required: false
  private _retransmissionTimer?: string; 
  public get retransmissionTimer() {
    return this.getStringAttribute('retransmission_timer');
  }
  public set retransmissionTimer(value: string) {
    this._retransmissionTimer = value;
  }
  public resetRetransmissionTimer() {
    this._retransmissionTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmissionTimerInput() {
    return this._retransmissionTimer;
  }

  // router_preference - computed: true, optional: true, required: false
  private _routerPreference?: string; 
  public get routerPreference() {
    return this.getStringAttribute('router_preference');
  }
  public set routerPreference(value: string) {
    this._routerPreference = value;
  }
  public resetRouterPreference() {
    this._routerPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerPreferenceInput() {
    return this._routerPreference;
  }
}
export interface VlanInterfaceIpv6NeighborDiscovery {
  /**
  * number of consecutive neighbor solicitation messages sent for duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dad_attempts VlanInterface#dad_attempts}
  */
  readonly dadAttempts?: number;
  /**
  * enable duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable_dad VlanInterface#enable_dad}
  */
  readonly enableDad?: boolean | cdktf.IResolvable;
  /**
  * enable ndp monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enable_ndp_monitor VlanInterface#enable_ndp_monitor}
  */
  readonly enableNdpMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#neighbor VlanInterface#neighbor}
  */
  readonly neighbor?: VlanInterfaceIpv6NeighborDiscoveryNeighbor[] | cdktf.IResolvable;
  /**
  * interval (in seconds) between consecutive neighbor solicitation messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ns_interval VlanInterface#ns_interval}
  */
  readonly nsInterval?: number;
  /**
  * time (in seconds) that the Reachable status for a neighbor can be maintained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#reachable_time VlanInterface#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#router_advertisement VlanInterface#router_advertisement}
  */
  readonly routerAdvertisement?: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement;
}

export function vlanInterfaceIpv6NeighborDiscoveryToTerraform(struct?: VlanInterfaceIpv6NeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dad_attempts: cdktf.numberToTerraform(struct!.dadAttempts),
    enable_dad: cdktf.booleanToTerraform(struct!.enableDad),
    enable_ndp_monitor: cdktf.booleanToTerraform(struct!.enableNdpMonitor),
    neighbor: cdktf.listMapper(vlanInterfaceIpv6NeighborDiscoveryNeighborToTerraform, false)(struct!.neighbor),
    ns_interval: cdktf.numberToTerraform(struct!.nsInterval),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    router_advertisement: vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementToTerraform(struct!.routerAdvertisement),
  }
}


export function vlanInterfaceIpv6NeighborDiscoveryToHclTerraform(struct?: VlanInterfaceIpv6NeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dad_attempts: {
      value: cdktf.numberToHclTerraform(struct!.dadAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_dad: {
      value: cdktf.booleanToHclTerraform(struct!.enableDad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ndp_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.enableNdpMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neighbor: {
      value: cdktf.listMapperHcl(vlanInterfaceIpv6NeighborDiscoveryNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "VlanInterfaceIpv6NeighborDiscoveryNeighborList",
    },
    ns_interval: {
      value: cdktf.numberToHclTerraform(struct!.nsInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    router_advertisement: {
      value: vlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementToHclTerraform(struct!.routerAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6NeighborDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6NeighborDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dadAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dadAttempts = this._dadAttempts;
    }
    if (this._enableDad !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDad = this._enableDad;
    }
    if (this._enableNdpMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNdpMonitor = this._enableNdpMonitor;
    }
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    if (this._nsInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsInterval = this._nsInterval;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._routerAdvertisement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAdvertisement = this._routerAdvertisement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6NeighborDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dadAttempts = undefined;
      this._enableDad = undefined;
      this._enableNdpMonitor = undefined;
      this._neighbor.internalValue = undefined;
      this._nsInterval = undefined;
      this._reachableTime = undefined;
      this._routerAdvertisement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dadAttempts = value.dadAttempts;
      this._enableDad = value.enableDad;
      this._enableNdpMonitor = value.enableNdpMonitor;
      this._neighbor.internalValue = value.neighbor;
      this._nsInterval = value.nsInterval;
      this._reachableTime = value.reachableTime;
      this._routerAdvertisement.internalValue = value.routerAdvertisement;
    }
  }

  // dad_attempts - computed: true, optional: true, required: false
  private _dadAttempts?: number; 
  public get dadAttempts() {
    return this.getNumberAttribute('dad_attempts');
  }
  public set dadAttempts(value: number) {
    this._dadAttempts = value;
  }
  public resetDadAttempts() {
    this._dadAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dadAttemptsInput() {
    return this._dadAttempts;
  }

  // enable_dad - computed: false, optional: true, required: false
  private _enableDad?: boolean | cdktf.IResolvable; 
  public get enableDad() {
    return this.getBooleanAttribute('enable_dad');
  }
  public set enableDad(value: boolean | cdktf.IResolvable) {
    this._enableDad = value;
  }
  public resetEnableDad() {
    this._enableDad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDadInput() {
    return this._enableDad;
  }

  // enable_ndp_monitor - computed: false, optional: true, required: false
  private _enableNdpMonitor?: boolean | cdktf.IResolvable; 
  public get enableNdpMonitor() {
    return this.getBooleanAttribute('enable_ndp_monitor');
  }
  public set enableNdpMonitor(value: boolean | cdktf.IResolvable) {
    this._enableNdpMonitor = value;
  }
  public resetEnableNdpMonitor() {
    this._enableNdpMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNdpMonitorInput() {
    return this._enableNdpMonitor;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new VlanInterfaceIpv6NeighborDiscoveryNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: VlanInterfaceIpv6NeighborDiscoveryNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // ns_interval - computed: true, optional: true, required: false
  private _nsInterval?: number; 
  public get nsInterval() {
    return this.getNumberAttribute('ns_interval');
  }
  public set nsInterval(value: number) {
    this._nsInterval = value;
  }
  public resetNsInterval() {
    this._nsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsIntervalInput() {
    return this._nsInterval;
  }

  // reachable_time - computed: true, optional: true, required: false
  private _reachableTime?: number; 
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }
  public set reachableTime(value: number) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // router_advertisement - computed: false, optional: true, required: false
  private _routerAdvertisement = new VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementOutputReference(this, "router_advertisement");
  public get routerAdvertisement() {
    return this._routerAdvertisement;
  }
  public putRouterAdvertisement(value: VlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement) {
    this._routerAdvertisement.internalValue = value;
  }
  public resetRouterAdvertisement() {
    this._routerAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdvertisementInput() {
    return this._routerAdvertisement.internalValue;
  }
}
export interface VlanInterfaceIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#address VlanInterface#address}
  */
  readonly address?: VlanInterfaceIpv6Address[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#dhcp_client VlanInterface#dhcp_client}
  */
  readonly dhcpClient?: VlanInterfaceIpv6DhcpClient;
  /**
  * Enable IPv6 on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enabled VlanInterface#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#inherited VlanInterface#inherited}
  */
  readonly inherited?: VlanInterfaceIpv6Inherited;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#interface_id VlanInterface#interface_id}
  */
  readonly interfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#neighbor_discovery VlanInterface#neighbor_discovery}
  */
  readonly neighborDiscovery?: VlanInterfaceIpv6NeighborDiscovery;
}

export function vlanInterfaceIpv6ToTerraform(struct?: VlanInterfaceIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(vlanInterfaceIpv6AddressToTerraform, false)(struct!.address),
    dhcp_client: vlanInterfaceIpv6DhcpClientToTerraform(struct!.dhcpClient),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    inherited: vlanInterfaceIpv6InheritedToTerraform(struct!.inherited),
    interface_id: cdktf.stringToTerraform(struct!.interfaceId),
    neighbor_discovery: vlanInterfaceIpv6NeighborDiscoveryToTerraform(struct!.neighborDiscovery),
  }
}


export function vlanInterfaceIpv6ToHclTerraform(struct?: VlanInterfaceIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(vlanInterfaceIpv6AddressToHclTerraform, false)(struct!.address),
      isBlock: true,
      type: "list",
      storageClassType: "VlanInterfaceIpv6AddressList",
    },
    dhcp_client: {
      value: vlanInterfaceIpv6DhcpClientToHclTerraform(struct!.dhcpClient),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6DhcpClient",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inherited: {
      value: vlanInterfaceIpv6InheritedToHclTerraform(struct!.inherited),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6Inherited",
    },
    interface_id: {
      value: cdktf.stringToHclTerraform(struct!.interfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_discovery: {
      value: vlanInterfaceIpv6NeighborDiscoveryToHclTerraform(struct!.neighborDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceIpv6NeighborDiscovery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._dhcpClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._inherited?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inherited = this._inherited?.internalValue;
    }
    if (this._interfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceId = this._interfaceId;
    }
    if (this._neighborDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborDiscovery = this._neighborDiscovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._dhcpClient.internalValue = undefined;
      this._enabled = undefined;
      this._inherited.internalValue = undefined;
      this._interfaceId = undefined;
      this._neighborDiscovery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._dhcpClient.internalValue = value.dhcpClient;
      this._enabled = value.enabled;
      this._inherited.internalValue = value.inherited;
      this._interfaceId = value.interfaceId;
      this._neighborDiscovery.internalValue = value.neighborDiscovery;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new VlanInterfaceIpv6AddressList(this, "address", false);
  public get address() {
    return this._address;
  }
  public putAddress(value: VlanInterfaceIpv6Address[] | cdktf.IResolvable) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // dhcp_client - computed: false, optional: true, required: false
  private _dhcpClient = new VlanInterfaceIpv6DhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }
  public putDhcpClient(value: VlanInterfaceIpv6DhcpClient) {
    this._dhcpClient.internalValue = value;
  }
  public resetDhcpClient() {
    this._dhcpClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // inherited - computed: false, optional: true, required: false
  private _inherited = new VlanInterfaceIpv6InheritedOutputReference(this, "inherited");
  public get inherited() {
    return this._inherited;
  }
  public putInherited(value: VlanInterfaceIpv6Inherited) {
    this._inherited.internalValue = value;
  }
  public resetInherited() {
    this._inherited.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedInput() {
    return this._inherited.internalValue;
  }

  // interface_id - computed: true, optional: true, required: false
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  public resetInterfaceId() {
    this._interfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // neighbor_discovery - computed: false, optional: true, required: false
  private _neighborDiscovery = new VlanInterfaceIpv6NeighborDiscoveryOutputReference(this, "neighbor_discovery");
  public get neighborDiscovery() {
    return this._neighborDiscovery;
  }
  public putNeighborDiscovery(value: VlanInterfaceIpv6NeighborDiscovery) {
    this._neighborDiscovery.internalValue = value;
  }
  public resetNeighborDiscovery() {
    this._neighborDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborDiscoveryInput() {
    return this._neighborDiscovery.internalValue;
  }
}
export interface VlanInterfaceLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ngfw_device VlanInterface#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function vlanInterfaceLocationNgfwToTerraform(struct?: VlanInterfaceLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function vlanInterfaceLocationNgfwToHclTerraform(struct?: VlanInterfaceLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceLocationNgfw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceLocationNgfw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface VlanInterfaceLocationShared {
}

export function vlanInterfaceLocationSharedToTerraform(struct?: VlanInterfaceLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vlanInterfaceLocationSharedToHclTerraform(struct?: VlanInterfaceLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VlanInterfaceLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceLocationShared | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface VlanInterfaceLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ngfw_device VlanInterface#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#panorama_device VlanInterface#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function vlanInterfaceLocationTemplateToTerraform(struct?: VlanInterfaceLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function vlanInterfaceLocationTemplateToHclTerraform(struct?: VlanInterfaceLocationTemplate | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface VlanInterfaceLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ngfw_device VlanInterface#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#panorama_device VlanInterface#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function vlanInterfaceLocationTemplateStackToTerraform(struct?: VlanInterfaceLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function vlanInterfaceLocationTemplateStackToHclTerraform(struct?: VlanInterfaceLocationTemplateStack | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceLocationTemplateStack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface VlanInterfaceLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#ngfw VlanInterface#ngfw}
  */
  readonly ngfw?: VlanInterfaceLocationNgfw;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#shared VlanInterface#shared}
  */
  readonly shared?: VlanInterfaceLocationShared;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#template VlanInterface#template}
  */
  readonly template?: VlanInterfaceLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#template_stack VlanInterface#template_stack}
  */
  readonly templateStack?: VlanInterfaceLocationTemplateStack;
}

export function vlanInterfaceLocationToTerraform(struct?: VlanInterfaceLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: vlanInterfaceLocationNgfwToTerraform(struct!.ngfw),
    shared: vlanInterfaceLocationSharedToTerraform(struct!.shared),
    template: vlanInterfaceLocationTemplateToTerraform(struct!.template),
    template_stack: vlanInterfaceLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function vlanInterfaceLocationToHclTerraform(struct?: VlanInterfaceLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: vlanInterfaceLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceLocationNgfw",
    },
    shared: {
      value: vlanInterfaceLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceLocationShared",
    },
    template: {
      value: vlanInterfaceLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceLocationTemplate",
    },
    template_stack: {
      value: vlanInterfaceLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "VlanInterfaceLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfw = this._ngfw?.internalValue;
    }
    if (this._shared?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = undefined;
      this._shared.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = value.ngfw;
      this._shared.internalValue = value.shared;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
    }
  }

  // ngfw - computed: false, optional: true, required: false
  private _ngfw = new VlanInterfaceLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: VlanInterfaceLocationNgfw) {
    this._ngfw.internalValue = value;
  }
  public resetNgfw() {
    this._ngfw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwInput() {
    return this._ngfw.internalValue;
  }

  // shared - computed: false, optional: true, required: false
  private _shared = new VlanInterfaceLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: VlanInterfaceLocationShared) {
    this._shared.internalValue = value;
  }
  public resetShared() {
    this._shared.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new VlanInterfaceLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: VlanInterfaceLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack = new VlanInterfaceLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: VlanInterfaceLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }
}
export interface VlanInterfaceNdpProxyAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
  /**
  * put the prefix or address on a block list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#negate VlanInterface#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
}

export function vlanInterfaceNdpProxyAddressToTerraform(struct?: VlanInterfaceNdpProxyAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
  }
}


export function vlanInterfaceNdpProxyAddressToHclTerraform(struct?: VlanInterfaceNdpProxyAddress | cdktf.IResolvable): any {
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
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceNdpProxyAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VlanInterfaceNdpProxyAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceNdpProxyAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._negate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._negate = value.negate;
    }
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

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }
}

export class VlanInterfaceNdpProxyAddressList extends cdktf.ComplexList {
  public internalValue? : VlanInterfaceNdpProxyAddress[] | cdktf.IResolvable

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
  public get(index: number): VlanInterfaceNdpProxyAddressOutputReference {
    return new VlanInterfaceNdpProxyAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VlanInterfaceNdpProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#address VlanInterface#address}
  */
  readonly address?: VlanInterfaceNdpProxyAddress[] | cdktf.IResolvable;
  /**
  * Enable proxy NDP on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#enabled VlanInterface#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function vlanInterfaceNdpProxyToTerraform(struct?: VlanInterfaceNdpProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(vlanInterfaceNdpProxyAddressToTerraform, false)(struct!.address),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function vlanInterfaceNdpProxyToHclTerraform(struct?: VlanInterfaceNdpProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(vlanInterfaceNdpProxyAddressToHclTerraform, false)(struct!.address),
      isBlock: true,
      type: "list",
      storageClassType: "VlanInterfaceNdpProxyAddressList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanInterfaceNdpProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanInterfaceNdpProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanInterfaceNdpProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._enabled = value.enabled;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new VlanInterfaceNdpProxyAddressList(this, "address", false);
  public get address() {
    return this._address;
  }
  public putAddress(value: VlanInterfaceNdpProxyAddress[] | cdktf.IResolvable) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface panos_vlan_interface}
*/
export class VlanInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_vlan_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VlanInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VlanInterface to import
  * @param importFromId The id of the existing VlanInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VlanInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_vlan_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/vlan_interface panos_vlan_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: VlanInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_vlan_interface',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adjustTcpMss.internalValue = config.adjustTcpMss;
    this._arp.internalValue = config.arp;
    this._bonjour.internalValue = config.bonjour;
    this._comment = config.comment;
    this._ddnsConfig.internalValue = config.ddnsConfig;
    this._dfIgnore = config.dfIgnore;
    this._dhcpClient.internalValue = config.dhcpClient;
    this._interfaceManagementProfile = config.interfaceManagementProfile;
    this._ip.internalValue = config.ip;
    this._ipv6.internalValue = config.ipv6;
    this._location.internalValue = config.location;
    this._mtu = config.mtu;
    this._name = config.name;
    this._ndpProxy.internalValue = config.ndpProxy;
    this._netflowProfile = config.netflowProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjust_tcp_mss - computed: false, optional: true, required: false
  private _adjustTcpMss = new VlanInterfaceAdjustTcpMssOutputReference(this, "adjust_tcp_mss");
  public get adjustTcpMss() {
    return this._adjustTcpMss;
  }
  public putAdjustTcpMss(value: VlanInterfaceAdjustTcpMss) {
    this._adjustTcpMss.internalValue = value;
  }
  public resetAdjustTcpMss() {
    this._adjustTcpMss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustTcpMssInput() {
    return this._adjustTcpMss.internalValue;
  }

  // arp - computed: false, optional: true, required: false
  private _arp = new VlanInterfaceArpList(this, "arp", false);
  public get arp() {
    return this._arp;
  }
  public putArp(value: VlanInterfaceArp[] | cdktf.IResolvable) {
    this._arp.internalValue = value;
  }
  public resetArp() {
    this._arp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp.internalValue;
  }

  // bonjour - computed: false, optional: true, required: false
  private _bonjour = new VlanInterfaceBonjourOutputReference(this, "bonjour");
  public get bonjour() {
    return this._bonjour;
  }
  public putBonjour(value: VlanInterfaceBonjour) {
    this._bonjour.internalValue = value;
  }
  public resetBonjour() {
    this._bonjour.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bonjourInput() {
    return this._bonjour.internalValue;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // ddns_config - computed: false, optional: true, required: false
  private _ddnsConfig = new VlanInterfaceDdnsConfigOutputReference(this, "ddns_config");
  public get ddnsConfig() {
    return this._ddnsConfig;
  }
  public putDdnsConfig(value: VlanInterfaceDdnsConfig) {
    this._ddnsConfig.internalValue = value;
  }
  public resetDdnsConfig() {
    this._ddnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConfigInput() {
    return this._ddnsConfig.internalValue;
  }

  // df_ignore - computed: false, optional: true, required: false
  private _dfIgnore?: boolean | cdktf.IResolvable; 
  public get dfIgnore() {
    return this.getBooleanAttribute('df_ignore');
  }
  public set dfIgnore(value: boolean | cdktf.IResolvable) {
    this._dfIgnore = value;
  }
  public resetDfIgnore() {
    this._dfIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfIgnoreInput() {
    return this._dfIgnore;
  }

  // dhcp_client - computed: false, optional: true, required: false
  private _dhcpClient = new VlanInterfaceDhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }
  public putDhcpClient(value: VlanInterfaceDhcpClient) {
    this._dhcpClient.internalValue = value;
  }
  public resetDhcpClient() {
    this._dhcpClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient.internalValue;
  }

  // interface_management_profile - computed: false, optional: true, required: false
  private _interfaceManagementProfile?: string; 
  public get interfaceManagementProfile() {
    return this.getStringAttribute('interface_management_profile');
  }
  public set interfaceManagementProfile(value: string) {
    this._interfaceManagementProfile = value;
  }
  public resetInterfaceManagementProfile() {
    this._interfaceManagementProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceManagementProfileInput() {
    return this._interfaceManagementProfile;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new VlanInterfaceIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: VlanInterfaceIp[] | cdktf.IResolvable) {
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
  private _ipv6 = new VlanInterfaceIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: VlanInterfaceIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // location - computed: false, optional: false, required: true
  private _location = new VlanInterfaceLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: VlanInterfaceLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // ndp_proxy - computed: false, optional: true, required: false
  private _ndpProxy = new VlanInterfaceNdpProxyOutputReference(this, "ndp_proxy");
  public get ndpProxy() {
    return this._ndpProxy;
  }
  public putNdpProxy(value: VlanInterfaceNdpProxy) {
    this._ndpProxy.internalValue = value;
  }
  public resetNdpProxy() {
    this._ndpProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndpProxyInput() {
    return this._ndpProxy.internalValue;
  }

  // netflow_profile - computed: false, optional: true, required: false
  private _netflowProfile?: string; 
  public get netflowProfile() {
    return this.getStringAttribute('netflow_profile');
  }
  public set netflowProfile(value: string) {
    this._netflowProfile = value;
  }
  public resetNetflowProfile() {
    this._netflowProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowProfileInput() {
    return this._netflowProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjust_tcp_mss: vlanInterfaceAdjustTcpMssToTerraform(this._adjustTcpMss.internalValue),
      arp: cdktf.listMapper(vlanInterfaceArpToTerraform, false)(this._arp.internalValue),
      bonjour: vlanInterfaceBonjourToTerraform(this._bonjour.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      ddns_config: vlanInterfaceDdnsConfigToTerraform(this._ddnsConfig.internalValue),
      df_ignore: cdktf.booleanToTerraform(this._dfIgnore),
      dhcp_client: vlanInterfaceDhcpClientToTerraform(this._dhcpClient.internalValue),
      interface_management_profile: cdktf.stringToTerraform(this._interfaceManagementProfile),
      ip: cdktf.listMapper(vlanInterfaceIpToTerraform, false)(this._ip.internalValue),
      ipv6: vlanInterfaceIpv6ToTerraform(this._ipv6.internalValue),
      location: vlanInterfaceLocationToTerraform(this._location.internalValue),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      ndp_proxy: vlanInterfaceNdpProxyToTerraform(this._ndpProxy.internalValue),
      netflow_profile: cdktf.stringToTerraform(this._netflowProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adjust_tcp_mss: {
        value: vlanInterfaceAdjustTcpMssToHclTerraform(this._adjustTcpMss.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VlanInterfaceAdjustTcpMss",
      },
      arp: {
        value: cdktf.listMapperHcl(vlanInterfaceArpToHclTerraform, false)(this._arp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VlanInterfaceArpList",
      },
      bonjour: {
        value: vlanInterfaceBonjourToHclTerraform(this._bonjour.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VlanInterfaceBonjour",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_config: {
        value: vlanInterfaceDdnsConfigToHclTerraform(this._ddnsConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VlanInterfaceDdnsConfig",
      },
      df_ignore: {
        value: cdktf.booleanToHclTerraform(this._dfIgnore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_client: {
        value: vlanInterfaceDhcpClientToHclTerraform(this._dhcpClient.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VlanInterfaceDhcpClient",
      },
      interface_management_profile: {
        value: cdktf.stringToHclTerraform(this._interfaceManagementProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.listMapperHcl(vlanInterfaceIpToHclTerraform, false)(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VlanInterfaceIpList",
      },
      ipv6: {
        value: vlanInterfaceIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VlanInterfaceIpv6",
      },
      location: {
        value: vlanInterfaceLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VlanInterfaceLocation",
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
      ndp_proxy: {
        value: vlanInterfaceNdpProxyToHclTerraform(this._ndpProxy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VlanInterfaceNdpProxy",
      },
      netflow_profile: {
        value: cdktf.stringToHclTerraform(this._netflowProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
