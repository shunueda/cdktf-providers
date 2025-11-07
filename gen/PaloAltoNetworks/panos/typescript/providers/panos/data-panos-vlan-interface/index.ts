// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosVlanInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#adjust_tcp_mss DataPanosVlanInterface#adjust_tcp_mss}
  */
  readonly adjustTcpMss?: DataPanosVlanInterfaceAdjustTcpMss;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#arp DataPanosVlanInterface#arp}
  */
  readonly arp?: DataPanosVlanInterfaceArp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#bonjour DataPanosVlanInterface#bonjour}
  */
  readonly bonjour?: DataPanosVlanInterfaceBonjour;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#comment DataPanosVlanInterface#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ddns_config DataPanosVlanInterface#ddns_config}
  */
  readonly ddnsConfig?: DataPanosVlanInterfaceDdnsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#df_ignore DataPanosVlanInterface#df_ignore}
  */
  readonly dfIgnore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dhcp_client DataPanosVlanInterface#dhcp_client}
  */
  readonly dhcpClient?: DataPanosVlanInterfaceDhcpClient;
  /**
  * Interface management profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#interface_management_profile DataPanosVlanInterface#interface_management_profile}
  */
  readonly interfaceManagementProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ip DataPanosVlanInterface#ip}
  */
  readonly ip?: DataPanosVlanInterfaceIp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ipv6 DataPanosVlanInterface#ipv6}
  */
  readonly ipv6?: DataPanosVlanInterfaceIpv6;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#location DataPanosVlanInterface#location}
  */
  readonly location: DataPanosVlanInterfaceLocation;
  /**
  * Maximum Transfer Unit, up to 9216 in Jumbo-Frame mode, up to 1500 otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#mtu DataPanosVlanInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ndp_proxy DataPanosVlanInterface#ndp_proxy}
  */
  readonly ndpProxy?: DataPanosVlanInterfaceNdpProxy;
  /**
  * Netflow Server Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#netflow_profile DataPanosVlanInterface#netflow_profile}
  */
  readonly netflowProfile?: string;
}
export interface DataPanosVlanInterfaceAdjustTcpMss {
  /**
  * Set if TCP MSS value should be reduced based on mtu
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * IPv4 MSS adjustment size (in bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ipv4_mss_adjustment DataPanosVlanInterface#ipv4_mss_adjustment}
  */
  readonly ipv4MssAdjustment?: number;
  /**
  * IPv6 MSS adjustment size (in bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ipv6_mss_adjustment DataPanosVlanInterface#ipv6_mss_adjustment}
  */
  readonly ipv6MssAdjustment?: number;
}

export function dataPanosVlanInterfaceAdjustTcpMssToTerraform(struct?: DataPanosVlanInterfaceAdjustTcpMss | cdktf.IResolvable): any {
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


export function dataPanosVlanInterfaceAdjustTcpMssToHclTerraform(struct?: DataPanosVlanInterfaceAdjustTcpMss | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceAdjustTcpMssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceAdjustTcpMss | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceAdjustTcpMss | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceArp {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#hw_address DataPanosVlanInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Egress interface associated with this ARP entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#interface DataPanosVlanInterface#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
}

export function dataPanosVlanInterfaceArpToTerraform(struct?: DataPanosVlanInterfaceArp | cdktf.IResolvable): any {
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


export function dataPanosVlanInterfaceArpToHclTerraform(struct?: DataPanosVlanInterfaceArp | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceArpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceArp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceArp | cdktf.IResolvable | undefined) {
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

  // hw_address - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVlanInterfaceArpList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceArp[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceArpOutputReference {
    return new DataPanosVlanInterfaceArpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceBonjour {
  /**
  * Set to support Bonjour service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * default 0: NO-Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#group_id DataPanosVlanInterface#group_id}
  */
  readonly groupId?: number;
  /**
  * Set to check and update TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ttl_check DataPanosVlanInterface#ttl_check}
  */
  readonly ttlCheck?: boolean | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceBonjourToTerraform(struct?: DataPanosVlanInterfaceBonjour | cdktf.IResolvable): any {
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


export function dataPanosVlanInterfaceBonjourToHclTerraform(struct?: DataPanosVlanInterfaceBonjour | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceBonjourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceBonjour | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceBonjour | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // ttl_check - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceDdnsConfigDdnsVendorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#value DataPanosVlanInterface#value}
  */
  readonly value?: string;
}

export function dataPanosVlanInterfaceDdnsConfigDdnsVendorConfigToTerraform(struct?: DataPanosVlanInterfaceDdnsConfigDdnsVendorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPanosVlanInterfaceDdnsConfigDdnsVendorConfigToHclTerraform(struct?: DataPanosVlanInterfaceDdnsConfigDdnsVendorConfig | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceDdnsConfigDdnsVendorConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceDdnsConfigDdnsVendorConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceDdnsConfigDdnsVendorConfig | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVlanInterfaceDdnsConfigDdnsVendorConfigList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceDdnsConfigDdnsVendorConfig[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceDdnsConfigDdnsVendorConfigOutputReference {
    return new DataPanosVlanInterfaceDdnsConfigDdnsVendorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceDdnsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ddns_cert_profile DataPanosVlanInterface#ddns_cert_profile}
  */
  readonly ddnsCertProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ddns_enabled DataPanosVlanInterface#ddns_enabled}
  */
  readonly ddnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * ddns hostname variable or real address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ddns_hostname DataPanosVlanInterface#ddns_hostname}
  */
  readonly ddnsHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ddns_ip DataPanosVlanInterface#ddns_ip}
  */
  readonly ddnsIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ddns_ipv6 DataPanosVlanInterface#ddns_ipv6}
  */
  readonly ddnsIpv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ddns_update_interval DataPanosVlanInterface#ddns_update_interval}
  */
  readonly ddnsUpdateInterval?: number;
  /**
  * Vendor and product type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ddns_vendor DataPanosVlanInterface#ddns_vendor}
  */
  readonly ddnsVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ddns_vendor_config DataPanosVlanInterface#ddns_vendor_config}
  */
  readonly ddnsVendorConfig?: DataPanosVlanInterfaceDdnsConfigDdnsVendorConfig[] | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceDdnsConfigToTerraform(struct?: DataPanosVlanInterfaceDdnsConfig | cdktf.IResolvable): any {
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
    ddns_vendor_config: cdktf.listMapper(dataPanosVlanInterfaceDdnsConfigDdnsVendorConfigToTerraform, false)(struct!.ddnsVendorConfig),
  }
}


export function dataPanosVlanInterfaceDdnsConfigToHclTerraform(struct?: DataPanosVlanInterfaceDdnsConfig | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosVlanInterfaceDdnsConfigDdnsVendorConfigToHclTerraform, false)(struct!.ddnsVendorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVlanInterfaceDdnsConfigDdnsVendorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceDdnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceDdnsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceDdnsConfig | cdktf.IResolvable | undefined) {
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

  // ddns_cert_profile - computed: true, optional: true, required: false
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

  // ddns_enabled - computed: true, optional: true, required: false
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

  // ddns_hostname - computed: true, optional: true, required: false
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

  // ddns_ip - computed: true, optional: true, required: false
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

  // ddns_ipv6 - computed: true, optional: true, required: false
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

  // ddns_vendor - computed: true, optional: true, required: false
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

  // ddns_vendor_config - computed: true, optional: true, required: false
  private _ddnsVendorConfig = new DataPanosVlanInterfaceDdnsConfigDdnsVendorConfigList(this, "ddns_vendor_config", false);
  public get ddnsVendorConfig() {
    return this._ddnsVendorConfig;
  }
  public putDdnsVendorConfig(value: DataPanosVlanInterfaceDdnsConfigDdnsVendorConfig[] | cdktf.IResolvable) {
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
export interface DataPanosVlanInterfaceDhcpClientSendHostname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set Interface Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#hostname DataPanosVlanInterface#hostname}
  */
  readonly hostname?: string;
}

export function dataPanosVlanInterfaceDhcpClientSendHostnameToTerraform(struct?: DataPanosVlanInterfaceDhcpClientSendHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function dataPanosVlanInterfaceDhcpClientSendHostnameToHclTerraform(struct?: DataPanosVlanInterfaceDhcpClientSendHostname | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceDhcpClientSendHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceDhcpClientSendHostname | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceDhcpClientSendHostname | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceDhcpClient {
  /**
  * Automatically create default route pointing to default gateway provided by server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#create_default_route DataPanosVlanInterface#create_default_route}
  */
  readonly createDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Metric of the default route created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#default_route_metric DataPanosVlanInterface#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#send_hostname DataPanosVlanInterface#send_hostname}
  */
  readonly sendHostname?: DataPanosVlanInterfaceDhcpClientSendHostname;
}

export function dataPanosVlanInterfaceDhcpClientToTerraform(struct?: DataPanosVlanInterfaceDhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_default_route: cdktf.booleanToTerraform(struct!.createDefaultRoute),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    enable: cdktf.booleanToTerraform(struct!.enable),
    send_hostname: dataPanosVlanInterfaceDhcpClientSendHostnameToTerraform(struct!.sendHostname),
  }
}


export function dataPanosVlanInterfaceDhcpClientToHclTerraform(struct?: DataPanosVlanInterfaceDhcpClient | cdktf.IResolvable): any {
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
      value: dataPanosVlanInterfaceDhcpClientSendHostnameToHclTerraform(struct!.sendHostname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceDhcpClientSendHostname",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceDhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceDhcpClient | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceDhcpClient | cdktf.IResolvable | undefined) {
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

  // create_default_route - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // send_hostname - computed: true, optional: true, required: false
  private _sendHostname = new DataPanosVlanInterfaceDhcpClientSendHostnameOutputReference(this, "send_hostname");
  public get sendHostname() {
    return this._sendHostname;
  }
  public putSendHostname(value: DataPanosVlanInterfaceDhcpClientSendHostname) {
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
export interface DataPanosVlanInterfaceIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
}

export function dataPanosVlanInterfaceIpToTerraform(struct?: DataPanosVlanInterfaceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosVlanInterfaceIpToHclTerraform(struct?: DataPanosVlanInterfaceIp | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIp | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVlanInterfaceIpList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceIp[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceIpOutputReference {
    return new DataPanosVlanInterfaceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceIpv6AddressAdvertise {
  /**
  * Set the Auto Address Configuration Flag (A-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#auto_config_flag DataPanosVlanInterface#auto_config_flag}
  */
  readonly autoConfigFlag?: boolean | cdktf.IResolvable;
  /**
  * enable advertising this prefix in router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set the On-Link Flag (L-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#onlink_flag DataPanosVlanInterface#onlink_flag}
  */
  readonly onlinkFlag?: boolean | cdktf.IResolvable;
  /**
  * Preferred Lifetime (in seconds) of the prefix advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#preferred_lifetime DataPanosVlanInterface#preferred_lifetime}
  */
  readonly preferredLifetime?: string;
  /**
  * Valid Lifetime (in seconds) of the prefix advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#valid_lifetime DataPanosVlanInterface#valid_lifetime}
  */
  readonly validLifetime?: string;
}

export function dataPanosVlanInterfaceIpv6AddressAdvertiseToTerraform(struct?: DataPanosVlanInterfaceIpv6AddressAdvertise | cdktf.IResolvable): any {
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


export function dataPanosVlanInterfaceIpv6AddressAdvertiseToHclTerraform(struct?: DataPanosVlanInterfaceIpv6AddressAdvertise | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6AddressAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6AddressAdvertise | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6AddressAdvertise | cdktf.IResolvable | undefined) {
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

  // auto_config_flag - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // onlink_flag - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceIpv6AddressAnycast {
}

export function dataPanosVlanInterfaceIpv6AddressAnycastToTerraform(struct?: DataPanosVlanInterfaceIpv6AddressAnycast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVlanInterfaceIpv6AddressAnycastToHclTerraform(struct?: DataPanosVlanInterfaceIpv6AddressAnycast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVlanInterfaceIpv6AddressAnycastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6AddressAnycast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVlanInterfaceIpv6AddressAnycast | cdktf.IResolvable | undefined) {
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
export interface DataPanosVlanInterfaceIpv6AddressPrefix {
}

export function dataPanosVlanInterfaceIpv6AddressPrefixToTerraform(struct?: DataPanosVlanInterfaceIpv6AddressPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVlanInterfaceIpv6AddressPrefixToHclTerraform(struct?: DataPanosVlanInterfaceIpv6AddressPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVlanInterfaceIpv6AddressPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6AddressPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVlanInterfaceIpv6AddressPrefix | cdktf.IResolvable | undefined) {
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
export interface DataPanosVlanInterfaceIpv6Address {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#advertise DataPanosVlanInterface#advertise}
  */
  readonly advertise?: DataPanosVlanInterfaceIpv6AddressAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#anycast DataPanosVlanInterface#anycast}
  */
  readonly anycast?: DataPanosVlanInterfaceIpv6AddressAnycast;
  /**
  * configure this address on interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable_on_interface DataPanosVlanInterface#enable_on_interface}
  */
  readonly enableOnInterface?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#prefix DataPanosVlanInterface#prefix}
  */
  readonly prefix?: DataPanosVlanInterfaceIpv6AddressPrefix;
}

export function dataPanosVlanInterfaceIpv6AddressToTerraform(struct?: DataPanosVlanInterfaceIpv6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: dataPanosVlanInterfaceIpv6AddressAdvertiseToTerraform(struct!.advertise),
    anycast: dataPanosVlanInterfaceIpv6AddressAnycastToTerraform(struct!.anycast),
    enable_on_interface: cdktf.booleanToTerraform(struct!.enableOnInterface),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: dataPanosVlanInterfaceIpv6AddressPrefixToTerraform(struct!.prefix),
  }
}


export function dataPanosVlanInterfaceIpv6AddressToHclTerraform(struct?: DataPanosVlanInterfaceIpv6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: dataPanosVlanInterfaceIpv6AddressAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6AddressAdvertise",
    },
    anycast: {
      value: dataPanosVlanInterfaceIpv6AddressAnycastToHclTerraform(struct!.anycast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6AddressAnycast",
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
      value: dataPanosVlanInterfaceIpv6AddressPrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6AddressPrefix",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6AddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceIpv6Address | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6Address | cdktf.IResolvable | undefined) {
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

  // advertise - computed: true, optional: true, required: false
  private _advertise = new DataPanosVlanInterfaceIpv6AddressAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: DataPanosVlanInterfaceIpv6AddressAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // anycast - computed: true, optional: true, required: false
  private _anycast = new DataPanosVlanInterfaceIpv6AddressAnycastOutputReference(this, "anycast");
  public get anycast() {
    return this._anycast;
  }
  public putAnycast(value: DataPanosVlanInterfaceIpv6AddressAnycast) {
    this._anycast.internalValue = value;
  }
  public resetAnycast() {
    this._anycast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastInput() {
    return this._anycast.internalValue;
  }

  // enable_on_interface - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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

  // prefix - computed: true, optional: true, required: false
  private _prefix = new DataPanosVlanInterfaceIpv6AddressPrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: DataPanosVlanInterfaceIpv6AddressPrefix) {
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

export class DataPanosVlanInterfaceIpv6AddressList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceIpv6Address[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceIpv6AddressOutputReference {
    return new DataPanosVlanInterfaceIpv6AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 {
}

export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer {
  /**
  * (4-3600) Lifetime in Seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#lifetime DataPanosVlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
}

export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerOutputReference {
    return new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#server DataPanosVlanInterface#server}
  */
  readonly server?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktf.listMapper(dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToTerraform, false)(struct!.server),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktf.listMapperHcl(dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToHclTerraform, false)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined) {
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

  // server - computed: true, optional: true, required: false
  private _server = new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dhcpv6 DataPanosVlanInterface#dhcpv6}
  */
  readonly dhcpv6?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#manual DataPanosVlanInterface#manual}
  */
  readonly manual?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual;
}

export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualToTerraform(struct!.manual),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6",
    },
    manual: {
      value: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined) {
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

  // dhcpv6 - computed: true, optional: true, required: false
  private _dhcpv6 = new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6) {
    this._dhcpv6.internalValue = value;
  }
  public resetDhcpv6() {
    this._dhcpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6.internalValue;
  }

  // manual - computed: true, optional: true, required: false
  private _manual = new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#source DataPanosVlanInterface#source}
  */
  readonly source?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource;
}

export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceToTerraform(struct!.source),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
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
      value: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // source - computed: true, optional: true, required: false
  private _source = new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 {
}

export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#lifetime DataPanosVlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
}

export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference {
    return new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#suffix DataPanosVlanInterface#suffix}
  */
  readonly suffix?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suffix: cdktf.listMapper(dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform, false)(struct!.suffix),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suffix: {
      value: cdktf.listMapperHcl(dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform, false)(struct!.suffix),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined) {
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

  // suffix - computed: true, optional: true, required: false
  private _suffix = new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixList(this, "suffix", false);
  public get suffix() {
    return this._suffix;
  }
  public putSuffix(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dhcpv6 DataPanosVlanInterface#dhcpv6}
  */
  readonly dhcpv6?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#manual DataPanosVlanInterface#manual}
  */
  readonly manual?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual;
}

export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct!.manual),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6",
    },
    manual: {
      value: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined) {
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

  // dhcpv6 - computed: true, optional: true, required: false
  private _dhcpv6 = new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6) {
    this._dhcpv6.internalValue = value;
  }
  public resetDhcpv6() {
    this._dhcpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6.internalValue;
  }

  // manual - computed: true, optional: true, required: false
  private _manual = new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#source DataPanosVlanInterface#source}
  */
  readonly source?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource;
}

export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceToTerraform(struct!.source),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
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
      value: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // source - computed: true, optional: true, required: false
  private _source = new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#hw_address DataPanosVlanInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
}

export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined) {
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

  // hw_address - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborOutputReference {
    return new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscovery {
  /**
  * number of consecutive neighbor solicitation messages sent for duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dad_attempts DataPanosVlanInterface#dad_attempts}
  */
  readonly dadAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dns_server DataPanosVlanInterface#dns_server}
  */
  readonly dnsServer?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dns_suffix DataPanosVlanInterface#dns_suffix}
  */
  readonly dnsSuffix?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix;
  /**
  * Enable Duplicate Address Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable_dad DataPanosVlanInterface#enable_dad}
  */
  readonly enableDad?: boolean | cdktf.IResolvable;
  /**
  * Enable NDP Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable_ndp_monitor DataPanosVlanInterface#enable_ndp_monitor}
  */
  readonly enableNdpMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#neighbor DataPanosVlanInterface#neighbor}
  */
  readonly neighbor?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor[] | cdktf.IResolvable;
  /**
  * interval (in seconds) between consecutive neighbor solicitation messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ns_interval DataPanosVlanInterface#ns_interval}
  */
  readonly nsInterval?: number;
  /**
  * time (in seconds) that the Reachable status for a neighbor can be maintained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#reachable_time DataPanosVlanInterface#reachable_time}
  */
  readonly reachableTime?: number;
}

export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dad_attempts: cdktf.numberToTerraform(struct!.dadAttempts),
    dns_server: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerToTerraform(struct!.dnsServer),
    dns_suffix: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixToTerraform(struct!.dnsSuffix),
    enable_dad: cdktf.booleanToTerraform(struct!.enableDad),
    enable_ndp_monitor: cdktf.booleanToTerraform(struct!.enableNdpMonitor),
    neighbor: cdktf.listMapper(dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborToTerraform, false)(struct!.neighbor),
    ns_interval: cdktf.numberToTerraform(struct!.nsInterval),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscovery | cdktf.IResolvable): any {
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
      value: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerToHclTerraform(struct!.dnsServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer",
    },
    dns_suffix: {
      value: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixToHclTerraform(struct!.dnsSuffix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix",
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
      value: cdktf.listMapperHcl(dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborList",
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

export class DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscovery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscovery | cdktf.IResolvable | undefined) {
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

  // dns_server - computed: true, optional: true, required: false
  private _dnsServer = new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServerOutputReference(this, "dns_server");
  public get dnsServer() {
    return this._dnsServer;
  }
  public putDnsServer(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsServer) {
    this._dnsServer.internalValue = value;
  }
  public resetDnsServer() {
    this._dnsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer.internalValue;
  }

  // dns_suffix - computed: true, optional: true, required: false
  private _dnsSuffix = new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixOutputReference(this, "dns_suffix");
  public get dnsSuffix() {
    return this._dnsSuffix;
  }
  public putDnsSuffix(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix) {
    this._dnsSuffix.internalValue = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix.internalValue;
  }

  // enable_dad - computed: true, optional: true, required: false
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

  // enable_ndp_monitor - computed: true, optional: true, required: false
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

  // neighbor - computed: true, optional: true, required: false
  private _neighbor = new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryNeighbor[] | cdktf.IResolvable) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo {
}

export function dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNoToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNoToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable | undefined) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes {
  /**
  * Configure unique Prefix Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#pfx_pool_name DataPanosVlanInterface#pfx_pool_name}
  */
  readonly pfxPoolName?: string;
  /**
  * Hint DHCP Prefix Length (bits)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#prefix_len DataPanosVlanInterface#prefix_len}
  */
  readonly prefixLen?: number;
  /**
  * Send prefix length hint to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#prefix_len_hint DataPanosVlanInterface#prefix_len_hint}
  */
  readonly prefixLenHint?: boolean | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYesToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable): any {
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


export function dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYesToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable | undefined) {
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

  // pfx_pool_name - computed: true, optional: true, required: false
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

  // prefix_len_hint - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#no DataPanosVlanInterface#no}
  */
  readonly no?: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#yes DataPanosVlanInterface#yes}
  */
  readonly yes?: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes;
}

export function dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no: dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNoToTerraform(struct!.no),
    yes: dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYesToTerraform(struct!.yes),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no: {
      value: dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNoToHclTerraform(struct!.no),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo",
    },
    yes: {
      value: dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYesToHclTerraform(struct!.yes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable | undefined) {
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

  // no - computed: true, optional: true, required: false
  private _no = new DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }
  public putNo(value: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableNo) {
    this._no.internalValue = value;
  }
  public resetNo() {
    this._no.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInput() {
    return this._no.internalValue;
  }

  // yes - computed: true, optional: true, required: false
  private _yes = new DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
  public putYes(value: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableYes) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnable;
}

export function dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableToTerraform(struct!.enable),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableToHclTerraform(struct!.enable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegation | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
  private _enable = new DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnableOutputReference(this, "enable");
  public get enable() {
    return this._enable;
  }
  public putEnable(value: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationEnable) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNo {
}

export function dataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNoToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNoToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable | undefined) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYes {
  /**
  * Request Non-Temporary Address Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#non_temp_addr DataPanosVlanInterface#non_temp_addr}
  */
  readonly nonTempAddr?: boolean | cdktf.IResolvable;
  /**
  * Request Temporary Address Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#temp_addr DataPanosVlanInterface#temp_addr}
  */
  readonly tempAddr?: boolean | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYesToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_temp_addr: cdktf.booleanToTerraform(struct!.nonTempAddr),
    temp_addr: cdktf.booleanToTerraform(struct!.tempAddr),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYesToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable | undefined) {
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

  // non_temp_addr - computed: true, optional: true, required: false
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

  // temp_addr - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#no DataPanosVlanInterface#no}
  */
  readonly no?: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#yes DataPanosVlanInterface#yes}
  */
  readonly yes?: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYes;
}

export function dataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no: dataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNoToTerraform(struct!.no),
    yes: dataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYesToTerraform(struct!.yes),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no: {
      value: dataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNoToHclTerraform(struct!.no),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNo",
    },
    yes: {
      value: dataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYesToHclTerraform(struct!.yes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnable | cdktf.IResolvable | undefined) {
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

  // no - computed: true, optional: true, required: false
  private _no = new DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }
  public putNo(value: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableNo) {
    this._no.internalValue = value;
  }
  public resetNo() {
    this._no.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInput() {
    return this._no.internalValue;
  }

  // yes - computed: true, optional: true, required: false
  private _yes = new DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
  public putYes(value: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableYes) {
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
export interface DataPanosVlanInterfaceIpv6DhcpClientV6Options {
  /**
  * Select DUID-LLT/DUID-LL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#duid_type DataPanosVlanInterface#duid_type}
  */
  readonly duidType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnable;
  /**
  * Enable Rapid Commit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#rapid_commit DataPanosVlanInterface#rapid_commit}
  */
  readonly rapidCommit?: boolean | cdktf.IResolvable;
  /**
  * Enable DHCPv6 Server Re-Configuration Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#support_srvr_reconfig DataPanosVlanInterface#support_srvr_reconfig}
  */
  readonly supportSrvrReconfig?: boolean | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceIpv6DhcpClientV6OptionsToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientV6Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duid_type: cdktf.stringToTerraform(struct!.duidType),
    enable: dataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableToTerraform(struct!.enable),
    rapid_commit: cdktf.booleanToTerraform(struct!.rapidCommit),
    support_srvr_reconfig: cdktf.booleanToTerraform(struct!.supportSrvrReconfig),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientV6OptionsToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClientV6Options | cdktf.IResolvable): any {
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
      value: dataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableToHclTerraform(struct!.enable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnable",
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

export class DataPanosVlanInterfaceIpv6DhcpClientV6OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClientV6Options | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClientV6Options | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
  private _enable = new DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnableOutputReference(this, "enable");
  public get enable() {
    return this._enable;
  }
  public putEnable(value: DataPanosVlanInterfaceIpv6DhcpClientV6OptionsEnable) {
    this._enable.internalValue = value;
  }
  public resetEnable() {
    this._enable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable.internalValue;
  }

  // rapid_commit - computed: true, optional: true, required: false
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

  // support_srvr_reconfig - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceIpv6DhcpClient {
  /**
  * Accept Router Advertised Default Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#accept_ra_route DataPanosVlanInterface#accept_ra_route}
  */
  readonly acceptRaRoute?: boolean | cdktf.IResolvable;
  /**
  * Metric of the default route created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#default_route_metric DataPanosVlanInterface#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Enable DHCPv6 Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#neighbor_discovery DataPanosVlanInterface#neighbor_discovery}
  */
  readonly neighborDiscovery?: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscovery;
  /**
  * Select Low/Medium/High
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#preference DataPanosVlanInterface#preference}
  */
  readonly preference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#prefix_delegation DataPanosVlanInterface#prefix_delegation}
  */
  readonly prefixDelegation?: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#v6_options DataPanosVlanInterface#v6_options}
  */
  readonly v6Options?: DataPanosVlanInterfaceIpv6DhcpClientV6Options;
}

export function dataPanosVlanInterfaceIpv6DhcpClientToTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_ra_route: cdktf.booleanToTerraform(struct!.acceptRaRoute),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    enable: cdktf.booleanToTerraform(struct!.enable),
    neighbor_discovery: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryToTerraform(struct!.neighborDiscovery),
    preference: cdktf.stringToTerraform(struct!.preference),
    prefix_delegation: dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationToTerraform(struct!.prefixDelegation),
    v6_options: dataPanosVlanInterfaceIpv6DhcpClientV6OptionsToTerraform(struct!.v6Options),
  }
}


export function dataPanosVlanInterfaceIpv6DhcpClientToHclTerraform(struct?: DataPanosVlanInterfaceIpv6DhcpClient | cdktf.IResolvable): any {
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
      value: dataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryToHclTerraform(struct!.neighborDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscovery",
    },
    preference: {
      value: cdktf.stringToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_delegation: {
      value: dataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationToHclTerraform(struct!.prefixDelegation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegation",
    },
    v6_options: {
      value: dataPanosVlanInterfaceIpv6DhcpClientV6OptionsToHclTerraform(struct!.v6Options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClientV6Options",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6DhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6DhcpClient | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6DhcpClient | cdktf.IResolvable | undefined) {
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

  // accept_ra_route - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // neighbor_discovery - computed: true, optional: true, required: false
  private _neighborDiscovery = new DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscoveryOutputReference(this, "neighbor_discovery");
  public get neighborDiscovery() {
    return this._neighborDiscovery;
  }
  public putNeighborDiscovery(value: DataPanosVlanInterfaceIpv6DhcpClientNeighborDiscovery) {
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

  // prefix_delegation - computed: true, optional: true, required: false
  private _prefixDelegation = new DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegationOutputReference(this, "prefix_delegation");
  public get prefixDelegation() {
    return this._prefixDelegation;
  }
  public putPrefixDelegation(value: DataPanosVlanInterfaceIpv6DhcpClientPrefixDelegation) {
    this._prefixDelegation.internalValue = value;
  }
  public resetPrefixDelegation() {
    this._prefixDelegation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixDelegationInput() {
    return this._prefixDelegation.internalValue;
  }

  // v6_options - computed: true, optional: true, required: false
  private _v6Options = new DataPanosVlanInterfaceIpv6DhcpClientV6OptionsOutputReference(this, "v6_options");
  public get v6Options() {
    return this._v6Options;
  }
  public putV6Options(value: DataPanosVlanInterfaceIpv6DhcpClientV6Options) {
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
export interface DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise {
  /**
  * Set the Auto Address Configuration Flag (A-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#auto_config_flag DataPanosVlanInterface#auto_config_flag}
  */
  readonly autoConfigFlag?: boolean | cdktf.IResolvable;
  /**
  * Enable advertising this prefix in router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set the On-Link Flag (L-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#onlink_flag DataPanosVlanInterface#onlink_flag}
  */
  readonly onlinkFlag?: boolean | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable): any {
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


export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable | undefined) {
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

  // auto_config_flag - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // onlink_flag - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic {
}

export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable | undefined) {
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
export interface DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId {
  /**
  * Range [0-4095] must be unqiue for this prefix-pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#identifier DataPanosVlanInterface#identifier}
  */
  readonly identifier?: number;
}

export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.numberToTerraform(struct!.identifier),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable | undefined) {
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

  // identifier - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dynamic DataPanosVlanInterface#dynamic}
  */
  readonly dynamic?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dynamic_id DataPanosVlanInterface#dynamic_id}
  */
  readonly dynamicId?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId;
}

export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicToTerraform(struct!.dynamic),
    dynamic_id: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToTerraform(struct!.dynamicId),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicToHclTerraform(struct!.dynamic),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic",
    },
    dynamic_id: {
      value: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToHclTerraform(struct!.dynamicId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable | undefined) {
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

  // dynamic - computed: true, optional: true, required: false
  private _dynamic = new DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicOutputReference(this, "dynamic");
  public get dynamic() {
    return this._dynamic;
  }
  public putDynamic(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic) {
    this._dynamic.internalValue = value;
  }
  public resetDynamic() {
    this._dynamic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic.internalValue;
  }

  // dynamic_id - computed: true, optional: true, required: false
  private _dynamicId = new DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdOutputReference(this, "dynamic_id");
  public get dynamicId() {
    return this._dynamicId;
  }
  public putDynamicId(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId) {
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
export interface DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGua {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#advertise DataPanosVlanInterface#advertise}
  */
  readonly advertise?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise;
  /**
  * Enable on Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable_on_interface DataPanosVlanInterface#enable_on_interface}
  */
  readonly enableOnInterface?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#pool_type DataPanosVlanInterface#pool_type}
  */
  readonly poolType?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType;
  /**
  * Prefix-Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#prefix_pool DataPanosVlanInterface#prefix_pool}
  */
  readonly prefixPool?: string;
}

export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGua | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseToTerraform(struct!.advertise),
    enable_on_interface: cdktf.booleanToTerraform(struct!.enableOnInterface),
    pool_type: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeToTerraform(struct!.poolType),
    prefix_pool: cdktf.stringToTerraform(struct!.prefixPool),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGua | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise",
    },
    enable_on_interface: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool_type: {
      value: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeToHclTerraform(struct!.poolType),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType",
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

export class DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGua | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGua | cdktf.IResolvable | undefined) {
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

  // advertise - computed: true, optional: true, required: false
  private _advertise = new DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // enable_on_interface - computed: true, optional: true, required: false
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

  // pool_type - computed: true, optional: true, required: false
  private _poolType = new DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeOutputReference(this, "pool_type");
  public get poolType() {
    return this._poolType;
  }
  public putPoolType(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaPoolType) {
    this._poolType.internalValue = value;
  }
  public resetPoolType() {
    this._poolType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolTypeInput() {
    return this._poolType.internalValue;
  }

  // prefix_pool - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise {
  /**
  * Set the Auto Address Configuration Flag (A-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#auto_config_flag DataPanosVlanInterface#auto_config_flag}
  */
  readonly autoConfigFlag?: boolean | cdktf.IResolvable;
  /**
  * enable advertising this prefix in router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set the On-Link Flag (L-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#onlink_flag DataPanosVlanInterface#onlink_flag}
  */
  readonly onlinkFlag?: boolean | cdktf.IResolvable;
  /**
  * Preferred Lifetime (in seconds) of the prefix advertised in Router advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#preferred_lifetime DataPanosVlanInterface#preferred_lifetime}
  */
  readonly preferredLifetime?: string;
  /**
  * Valid Lifetime (in seconds) of the prefix advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#valid_lifetime DataPanosVlanInterface#valid_lifetime}
  */
  readonly validLifetime?: string;
}

export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable): any {
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


export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable | undefined) {
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

  // auto_config_flag - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // onlink_flag - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUla {
  /**
  * Configure ULA (Unique Local Address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#address DataPanosVlanInterface#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#advertise DataPanosVlanInterface#advertise}
  */
  readonly advertise?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise;
  /**
  * Anycast Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#anycast DataPanosVlanInterface#anycast}
  */
  readonly anycast?: boolean | cdktf.IResolvable;
  /**
  * Configure this address on Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable_on_interface DataPanosVlanInterface#enable_on_interface}
  */
  readonly enableOnInterface?: boolean | cdktf.IResolvable;
  /**
  * Use this as prefix to form full address with interface id/EUI-64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#prefix DataPanosVlanInterface#prefix}
  */
  readonly prefix?: boolean | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    advertise: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseToTerraform(struct!.advertise),
    anycast: cdktf.booleanToTerraform(struct!.anycast),
    enable_on_interface: cdktf.booleanToTerraform(struct!.enableOnInterface),
    prefix: cdktf.booleanToTerraform(struct!.prefix),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUla | cdktf.IResolvable): any {
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
      value: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise",
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

export class DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUla | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUla | cdktf.IResolvable | undefined) {
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

  // advertise - computed: true, optional: true, required: false
  private _advertise = new DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // anycast - computed: true, optional: true, required: false
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

  // enable_on_interface - computed: true, optional: true, required: false
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

  // prefix - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceIpv6InheritedAssignAddrType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#gua DataPanosVlanInterface#gua}
  */
  readonly gua?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGua;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ula DataPanosVlanInterface#ula}
  */
  readonly ula?: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUla;
}

export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gua: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaToTerraform(struct!.gua),
    ula: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaToTerraform(struct!.ula),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddrType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gua: {
      value: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaToHclTerraform(struct!.gua),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGua",
    },
    ula: {
      value: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaToHclTerraform(struct!.ula),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUla",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedAssignAddrType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrType | cdktf.IResolvable | undefined) {
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

  // gua - computed: true, optional: true, required: false
  private _gua = new DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGuaOutputReference(this, "gua");
  public get gua() {
    return this._gua;
  }
  public putGua(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeGua) {
    this._gua.internalValue = value;
  }
  public resetGua() {
    this._gua.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaInput() {
    return this._gua.internalValue;
  }

  // ula - computed: true, optional: true, required: false
  private _ula = new DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUlaOutputReference(this, "ula");
  public get ula() {
    return this._ula;
  }
  public putUla(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeUla) {
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
export interface DataPanosVlanInterfaceIpv6InheritedAssignAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#type DataPanosVlanInterface#type}
  */
  readonly type?: DataPanosVlanInterfaceIpv6InheritedAssignAddrType;
}

export function dataPanosVlanInterfaceIpv6InheritedAssignAddrToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeToTerraform(struct!.type),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedAssignAddrToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedAssignAddr | cdktf.IResolvable): any {
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
      value: dataPanosVlanInterfaceIpv6InheritedAssignAddrTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedAssignAddrType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6InheritedAssignAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedAssignAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedAssignAddr | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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
  private _type = new DataPanosVlanInterfaceIpv6InheritedAssignAddrTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataPanosVlanInterfaceIpv6InheritedAssignAddrType) {
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

export class DataPanosVlanInterfaceIpv6InheritedAssignAddrList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceIpv6InheritedAssignAddr[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceIpv6InheritedAssignAddrOutputReference {
    return new DataPanosVlanInterfaceIpv6InheritedAssignAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 {
  /**
  * Prefix-Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#prefix_pool DataPanosVlanInterface#prefix_pool}
  */
  readonly prefixPool?: string;
}

export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_pool: cdktf.stringToTerraform(struct!.prefixPool),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined) {
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

  // prefix_pool - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer {
  /**
  * (4-3600) Lifetime in Seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#lifetime DataPanosVlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
}

export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerOutputReference {
    return new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#server DataPanosVlanInterface#server}
  */
  readonly server?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktf.listMapper(dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerToTerraform, false)(struct!.server),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktf.listMapperHcl(dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerToHclTerraform, false)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined) {
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

  // server - computed: true, optional: true, required: false
  private _server = new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable) {
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
export interface DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dhcpv6 DataPanosVlanInterface#dhcpv6}
  */
  readonly dhcpv6?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#manual DataPanosVlanInterface#manual}
  */
  readonly manual?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual;
}

export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualToTerraform(struct!.manual),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6",
    },
    manual: {
      value: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined) {
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

  // dhcpv6 - computed: true, optional: true, required: false
  private _dhcpv6 = new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6) {
    this._dhcpv6.internalValue = value;
  }
  public resetDhcpv6() {
    this._dhcpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6.internalValue;
  }

  // manual - computed: true, optional: true, required: false
  private _manual = new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual) {
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
export interface DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#source DataPanosVlanInterface#source}
  */
  readonly source?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource;
}

export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceToTerraform(struct!.source),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
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
      value: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // source - computed: true, optional: true, required: false
  private _source = new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerSource) {
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
export interface DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 {
  /**
  * Prefix-Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#prefix_pool DataPanosVlanInterface#prefix_pool}
  */
  readonly prefixPool?: string;
}

export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_pool: cdktf.stringToTerraform(struct!.prefixPool),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined) {
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

  // prefix_pool - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#lifetime DataPanosVlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
}

export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference {
    return new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#suffix DataPanosVlanInterface#suffix}
  */
  readonly suffix?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suffix: cdktf.listMapper(dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform, false)(struct!.suffix),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suffix: {
      value: cdktf.listMapperHcl(dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform, false)(struct!.suffix),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined) {
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

  // suffix - computed: true, optional: true, required: false
  private _suffix = new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixList(this, "suffix", false);
  public get suffix() {
    return this._suffix;
  }
  public putSuffix(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable) {
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
export interface DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dhcpv6 DataPanosVlanInterface#dhcpv6}
  */
  readonly dhcpv6?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#manual DataPanosVlanInterface#manual}
  */
  readonly manual?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual;
}

export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct!.manual),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6",
    },
    manual: {
      value: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined) {
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

  // dhcpv6 - computed: true, optional: true, required: false
  private _dhcpv6 = new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6) {
    this._dhcpv6.internalValue = value;
  }
  public resetDhcpv6() {
    this._dhcpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6.internalValue;
  }

  // manual - computed: true, optional: true, required: false
  private _manual = new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual) {
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
export interface DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#source DataPanosVlanInterface#source}
  */
  readonly source?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource;
}

export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceToTerraform(struct!.source),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
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
      value: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // source - computed: true, optional: true, required: false
  private _source = new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource) {
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
export interface DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#hw_address DataPanosVlanInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
}

export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighborToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighborToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined) {
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

  // hw_address - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighborList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighborOutputReference {
    return new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * check consistency of RA messages from other routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable_consistency_check DataPanosVlanInterface#enable_consistency_check}
  */
  readonly enableConsistencyCheck?: boolean | cdktf.IResolvable;
  /**
  * Current Hop Limit advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#hop_limit DataPanosVlanInterface#hop_limit}
  */
  readonly hopLimit?: string;
  /**
  * Router Lifetime (in seconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#lifetime DataPanosVlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * value of MTU option in Router Advertisement messages, upto 9216 in Jumbo-Frame mode, up to 1500 otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#link_mtu DataPanosVlanInterface#link_mtu}
  */
  readonly linkMtu?: string;
  /**
  * Set the Managed Configuration Flag (M-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#managed_flag DataPanosVlanInterface#managed_flag}
  */
  readonly managedFlag?: boolean | cdktf.IResolvable;
  /**
  * Maximum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#max_interval DataPanosVlanInterface#max_interval}
  */
  readonly maxInterval?: number;
  /**
  * Minimum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#min_interval DataPanosVlanInterface#min_interval}
  */
  readonly minInterval?: number;
  /**
  * Set the Other Stateful Configuration Flag (O-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#other_flag DataPanosVlanInterface#other_flag}
  */
  readonly otherFlag?: boolean | cdktf.IResolvable;
  /**
  * Reachable Time (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#reachable_time DataPanosVlanInterface#reachable_time}
  */
  readonly reachableTime?: string;
  /**
  * Retransmission Timer (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#retransmission_timer DataPanosVlanInterface#retransmission_timer}
  */
  readonly retransmissionTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#router_preference DataPanosVlanInterface#router_preference}
  */
  readonly routerPreference?: string;
}

export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
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


export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // enable_consistency_check - computed: true, optional: true, required: false
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

  // managed_flag - computed: true, optional: true, required: false
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

  // other_flag - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceIpv6InheritedNeighborDiscovery {
  /**
  * Number of consecutive neighbor solicitation messages sent for duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dad_attempts DataPanosVlanInterface#dad_attempts}
  */
  readonly dadAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dns_server DataPanosVlanInterface#dns_server}
  */
  readonly dnsServer?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dns_suffix DataPanosVlanInterface#dns_suffix}
  */
  readonly dnsSuffix?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix;
  /**
  * Enable Duplicate Address Detection (DAD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable_dad DataPanosVlanInterface#enable_dad}
  */
  readonly enableDad?: boolean | cdktf.IResolvable;
  /**
  * Enable NDP Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable_ndp_monitor DataPanosVlanInterface#enable_ndp_monitor}
  */
  readonly enableNdpMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#neighbor DataPanosVlanInterface#neighbor}
  */
  readonly neighbor?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor[] | cdktf.IResolvable;
  /**
  * Interval (in seconds) between consecutive neighbor solicitation messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ns_interval DataPanosVlanInterface#ns_interval}
  */
  readonly nsInterval?: number;
  /**
  * Time (in seconds) that the Reachable status for a neighbor can be maintained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#reachable_time DataPanosVlanInterface#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#router_advertisement DataPanosVlanInterface#router_advertisement}
  */
  readonly routerAdvertisement?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement;
}

export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryToTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dad_attempts: cdktf.numberToTerraform(struct!.dadAttempts),
    dns_server: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerToTerraform(struct!.dnsServer),
    dns_suffix: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixToTerraform(struct!.dnsSuffix),
    enable_dad: cdktf.booleanToTerraform(struct!.enableDad),
    enable_ndp_monitor: cdktf.booleanToTerraform(struct!.enableNdpMonitor),
    neighbor: cdktf.listMapper(dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighborToTerraform, false)(struct!.neighbor),
    ns_interval: cdktf.numberToTerraform(struct!.nsInterval),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    router_advertisement: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementToTerraform(struct!.routerAdvertisement),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryToHclTerraform(struct?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscovery | cdktf.IResolvable): any {
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
      value: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerToHclTerraform(struct!.dnsServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer",
    },
    dns_suffix: {
      value: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixToHclTerraform(struct!.dnsSuffix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix",
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
      value: cdktf.listMapperHcl(dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighborList",
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
      value: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementToHclTerraform(struct!.routerAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6InheritedNeighborDiscovery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscovery | cdktf.IResolvable | undefined) {
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

  // dns_server - computed: true, optional: true, required: false
  private _dnsServer = new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServerOutputReference(this, "dns_server");
  public get dnsServer() {
    return this._dnsServer;
  }
  public putDnsServer(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsServer) {
    this._dnsServer.internalValue = value;
  }
  public resetDnsServer() {
    this._dnsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer.internalValue;
  }

  // dns_suffix - computed: true, optional: true, required: false
  private _dnsSuffix = new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffixOutputReference(this, "dns_suffix");
  public get dnsSuffix() {
    return this._dnsSuffix;
  }
  public putDnsSuffix(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryDnsSuffix) {
    this._dnsSuffix.internalValue = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix.internalValue;
  }

  // enable_dad - computed: true, optional: true, required: false
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

  // enable_ndp_monitor - computed: true, optional: true, required: false
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

  // neighbor - computed: true, optional: true, required: false
  private _neighbor = new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryNeighbor[] | cdktf.IResolvable) {
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

  // router_advertisement - computed: true, optional: true, required: false
  private _routerAdvertisement = new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementOutputReference(this, "router_advertisement");
  public get routerAdvertisement() {
    return this._routerAdvertisement;
  }
  public putRouterAdvertisement(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement) {
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
export interface DataPanosVlanInterfaceIpv6Inherited {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#assign_addr DataPanosVlanInterface#assign_addr}
  */
  readonly assignAddr?: DataPanosVlanInterfaceIpv6InheritedAssignAddr[] | cdktf.IResolvable;
  /**
  * Enable Inherited Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#neighbor_discovery DataPanosVlanInterface#neighbor_discovery}
  */
  readonly neighborDiscovery?: DataPanosVlanInterfaceIpv6InheritedNeighborDiscovery;
}

export function dataPanosVlanInterfaceIpv6InheritedToTerraform(struct?: DataPanosVlanInterfaceIpv6Inherited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_addr: cdktf.listMapper(dataPanosVlanInterfaceIpv6InheritedAssignAddrToTerraform, false)(struct!.assignAddr),
    enable: cdktf.booleanToTerraform(struct!.enable),
    neighbor_discovery: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryToTerraform(struct!.neighborDiscovery),
  }
}


export function dataPanosVlanInterfaceIpv6InheritedToHclTerraform(struct?: DataPanosVlanInterfaceIpv6Inherited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_addr: {
      value: cdktf.listMapperHcl(dataPanosVlanInterfaceIpv6InheritedAssignAddrToHclTerraform, false)(struct!.assignAddr),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedAssignAddrList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neighbor_discovery: {
      value: dataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryToHclTerraform(struct!.neighborDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6InheritedNeighborDiscovery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6InheritedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6Inherited | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6Inherited | cdktf.IResolvable | undefined) {
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

  // assign_addr - computed: true, optional: true, required: false
  private _assignAddr = new DataPanosVlanInterfaceIpv6InheritedAssignAddrList(this, "assign_addr", false);
  public get assignAddr() {
    return this._assignAddr;
  }
  public putAssignAddr(value: DataPanosVlanInterfaceIpv6InheritedAssignAddr[] | cdktf.IResolvable) {
    this._assignAddr.internalValue = value;
  }
  public resetAssignAddr() {
    this._assignAddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignAddrInput() {
    return this._assignAddr.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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

  // neighbor_discovery - computed: true, optional: true, required: false
  private _neighborDiscovery = new DataPanosVlanInterfaceIpv6InheritedNeighborDiscoveryOutputReference(this, "neighbor_discovery");
  public get neighborDiscovery() {
    return this._neighborDiscovery;
  }
  public putNeighborDiscovery(value: DataPanosVlanInterfaceIpv6InheritedNeighborDiscovery) {
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
export interface DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighbor {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#hw_address DataPanosVlanInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
}

export function dataPanosVlanInterfaceIpv6NeighborDiscoveryNeighborToTerraform(struct?: DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosVlanInterfaceIpv6NeighborDiscoveryNeighborToHclTerraform(struct?: DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighbor | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighbor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighbor | cdktf.IResolvable | undefined) {
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

  // hw_address - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighborList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighbor[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighborOutputReference {
    return new DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#lifetime DataPanosVlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
}

export function dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToTerraform(struct?: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToHclTerraform(struct?: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerOutputReference {
    return new DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#lifetime DataPanosVlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
}

export function dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToTerraform(struct?: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToHclTerraform(struct?: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixOutputReference {
    return new DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#server DataPanosVlanInterface#server}
  */
  readonly server?: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#suffix DataPanosVlanInterface#suffix}
  */
  readonly suffix?: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix[] | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportToTerraform(struct?: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    server: cdktf.listMapper(dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToTerraform, false)(struct!.server),
    suffix: cdktf.listMapper(dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToTerraform, false)(struct!.suffix),
  }
}


export function dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportToHclTerraform(struct?: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToHclTerraform, false)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerList",
    },
    suffix: {
      value: cdktf.listMapperHcl(dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToHclTerraform, false)(struct!.suffix),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // server - computed: true, optional: true, required: false
  private _server = new DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // suffix - computed: true, optional: true, required: false
  private _suffix = new DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixList(this, "suffix", false);
  public get suffix() {
    return this._suffix;
  }
  public putSuffix(value: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix[] | cdktf.IResolvable) {
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
export interface DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dns_support DataPanosVlanInterface#dns_support}
  */
  readonly dnsSupport?: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable DataPanosVlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * check consistency of RA messages from other routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable_consistency_check DataPanosVlanInterface#enable_consistency_check}
  */
  readonly enableConsistencyCheck?: boolean | cdktf.IResolvable;
  /**
  * Current Hop Limit advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#hop_limit DataPanosVlanInterface#hop_limit}
  */
  readonly hopLimit?: string;
  /**
  * Router Lifetime (in seconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#lifetime DataPanosVlanInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * value of MTU option in Router Advertisement messages, upto 9216 in Jumbo-Frame mode, up to 1500 otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#link_mtu DataPanosVlanInterface#link_mtu}
  */
  readonly linkMtu?: string;
  /**
  * Set the Managed Configuration Flag (M-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#managed_flag DataPanosVlanInterface#managed_flag}
  */
  readonly managedFlag?: boolean | cdktf.IResolvable;
  /**
  * Maximum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#max_interval DataPanosVlanInterface#max_interval}
  */
  readonly maxInterval?: number;
  /**
  * Minimum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#min_interval DataPanosVlanInterface#min_interval}
  */
  readonly minInterval?: number;
  /**
  * Set the Other Stateful Configuration Flag (O-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#other_flag DataPanosVlanInterface#other_flag}
  */
  readonly otherFlag?: boolean | cdktf.IResolvable;
  /**
  * Reachable Time (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#reachable_time DataPanosVlanInterface#reachable_time}
  */
  readonly reachableTime?: string;
  /**
  * Retransmission Timer (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#retransmission_timer DataPanosVlanInterface#retransmission_timer}
  */
  readonly retransmissionTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#router_preference DataPanosVlanInterface#router_preference}
  */
  readonly routerPreference?: string;
}

export function dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementToTerraform(struct?: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_support: dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportToTerraform(struct!.dnsSupport),
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


export function dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementToHclTerraform(struct?: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_support: {
      value: dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportToHclTerraform(struct!.dnsSupport),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport",
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

export class DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined) {
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

  // dns_support - computed: true, optional: true, required: false
  private _dnsSupport = new DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportOutputReference(this, "dns_support");
  public get dnsSupport() {
    return this._dnsSupport;
  }
  public putDnsSupport(value: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport) {
    this._dnsSupport.internalValue = value;
  }
  public resetDnsSupport() {
    this._dnsSupport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSupportInput() {
    return this._dnsSupport.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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

  // enable_consistency_check - computed: true, optional: true, required: false
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

  // managed_flag - computed: true, optional: true, required: false
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

  // other_flag - computed: true, optional: true, required: false
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
export interface DataPanosVlanInterfaceIpv6NeighborDiscovery {
  /**
  * number of consecutive neighbor solicitation messages sent for duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dad_attempts DataPanosVlanInterface#dad_attempts}
  */
  readonly dadAttempts?: number;
  /**
  * enable duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable_dad DataPanosVlanInterface#enable_dad}
  */
  readonly enableDad?: boolean | cdktf.IResolvable;
  /**
  * enable ndp monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enable_ndp_monitor DataPanosVlanInterface#enable_ndp_monitor}
  */
  readonly enableNdpMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#neighbor DataPanosVlanInterface#neighbor}
  */
  readonly neighbor?: DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighbor[] | cdktf.IResolvable;
  /**
  * interval (in seconds) between consecutive neighbor solicitation messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ns_interval DataPanosVlanInterface#ns_interval}
  */
  readonly nsInterval?: number;
  /**
  * time (in seconds) that the Reachable status for a neighbor can be maintained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#reachable_time DataPanosVlanInterface#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#router_advertisement DataPanosVlanInterface#router_advertisement}
  */
  readonly routerAdvertisement?: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement;
}

export function dataPanosVlanInterfaceIpv6NeighborDiscoveryToTerraform(struct?: DataPanosVlanInterfaceIpv6NeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dad_attempts: cdktf.numberToTerraform(struct!.dadAttempts),
    enable_dad: cdktf.booleanToTerraform(struct!.enableDad),
    enable_ndp_monitor: cdktf.booleanToTerraform(struct!.enableNdpMonitor),
    neighbor: cdktf.listMapper(dataPanosVlanInterfaceIpv6NeighborDiscoveryNeighborToTerraform, false)(struct!.neighbor),
    ns_interval: cdktf.numberToTerraform(struct!.nsInterval),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    router_advertisement: dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementToTerraform(struct!.routerAdvertisement),
  }
}


export function dataPanosVlanInterfaceIpv6NeighborDiscoveryToHclTerraform(struct?: DataPanosVlanInterfaceIpv6NeighborDiscovery | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosVlanInterfaceIpv6NeighborDiscoveryNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighborList",
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
      value: dataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementToHclTerraform(struct!.routerAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6NeighborDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6NeighborDiscovery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6NeighborDiscovery | cdktf.IResolvable | undefined) {
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

  // enable_dad - computed: true, optional: true, required: false
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

  // enable_ndp_monitor - computed: true, optional: true, required: false
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

  // neighbor - computed: true, optional: true, required: false
  private _neighbor = new DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: DataPanosVlanInterfaceIpv6NeighborDiscoveryNeighbor[] | cdktf.IResolvable) {
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

  // router_advertisement - computed: true, optional: true, required: false
  private _routerAdvertisement = new DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisementOutputReference(this, "router_advertisement");
  public get routerAdvertisement() {
    return this._routerAdvertisement;
  }
  public putRouterAdvertisement(value: DataPanosVlanInterfaceIpv6NeighborDiscoveryRouterAdvertisement) {
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
export interface DataPanosVlanInterfaceIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#address DataPanosVlanInterface#address}
  */
  readonly address?: DataPanosVlanInterfaceIpv6Address[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#dhcp_client DataPanosVlanInterface#dhcp_client}
  */
  readonly dhcpClient?: DataPanosVlanInterfaceIpv6DhcpClient;
  /**
  * Enable IPv6 on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enabled DataPanosVlanInterface#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#inherited DataPanosVlanInterface#inherited}
  */
  readonly inherited?: DataPanosVlanInterfaceIpv6Inherited;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#interface_id DataPanosVlanInterface#interface_id}
  */
  readonly interfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#neighbor_discovery DataPanosVlanInterface#neighbor_discovery}
  */
  readonly neighborDiscovery?: DataPanosVlanInterfaceIpv6NeighborDiscovery;
}

export function dataPanosVlanInterfaceIpv6ToTerraform(struct?: DataPanosVlanInterfaceIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(dataPanosVlanInterfaceIpv6AddressToTerraform, false)(struct!.address),
    dhcp_client: dataPanosVlanInterfaceIpv6DhcpClientToTerraform(struct!.dhcpClient),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    inherited: dataPanosVlanInterfaceIpv6InheritedToTerraform(struct!.inherited),
    interface_id: cdktf.stringToTerraform(struct!.interfaceId),
    neighbor_discovery: dataPanosVlanInterfaceIpv6NeighborDiscoveryToTerraform(struct!.neighborDiscovery),
  }
}


export function dataPanosVlanInterfaceIpv6ToHclTerraform(struct?: DataPanosVlanInterfaceIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(dataPanosVlanInterfaceIpv6AddressToHclTerraform, false)(struct!.address),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVlanInterfaceIpv6AddressList",
    },
    dhcp_client: {
      value: dataPanosVlanInterfaceIpv6DhcpClientToHclTerraform(struct!.dhcpClient),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6DhcpClient",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inherited: {
      value: dataPanosVlanInterfaceIpv6InheritedToHclTerraform(struct!.inherited),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6Inherited",
    },
    interface_id: {
      value: cdktf.stringToHclTerraform(struct!.interfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_discovery: {
      value: dataPanosVlanInterfaceIpv6NeighborDiscoveryToHclTerraform(struct!.neighborDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceIpv6NeighborDiscovery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceIpv6 | cdktf.IResolvable | undefined) {
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

  // address - computed: true, optional: true, required: false
  private _address = new DataPanosVlanInterfaceIpv6AddressList(this, "address", false);
  public get address() {
    return this._address;
  }
  public putAddress(value: DataPanosVlanInterfaceIpv6Address[] | cdktf.IResolvable) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // dhcp_client - computed: true, optional: true, required: false
  private _dhcpClient = new DataPanosVlanInterfaceIpv6DhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }
  public putDhcpClient(value: DataPanosVlanInterfaceIpv6DhcpClient) {
    this._dhcpClient.internalValue = value;
  }
  public resetDhcpClient() {
    this._dhcpClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
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

  // inherited - computed: true, optional: true, required: false
  private _inherited = new DataPanosVlanInterfaceIpv6InheritedOutputReference(this, "inherited");
  public get inherited() {
    return this._inherited;
  }
  public putInherited(value: DataPanosVlanInterfaceIpv6Inherited) {
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

  // neighbor_discovery - computed: true, optional: true, required: false
  private _neighborDiscovery = new DataPanosVlanInterfaceIpv6NeighborDiscoveryOutputReference(this, "neighbor_discovery");
  public get neighborDiscovery() {
    return this._neighborDiscovery;
  }
  public putNeighborDiscovery(value: DataPanosVlanInterfaceIpv6NeighborDiscovery) {
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
export interface DataPanosVlanInterfaceLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ngfw_device DataPanosVlanInterface#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosVlanInterfaceLocationNgfwToTerraform(struct?: DataPanosVlanInterfaceLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosVlanInterfaceLocationNgfwToHclTerraform(struct?: DataPanosVlanInterfaceLocationNgfw | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceLocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceLocationNgfw | cdktf.IResolvable | undefined) {
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
export interface DataPanosVlanInterfaceLocationShared {
}

export function dataPanosVlanInterfaceLocationSharedToTerraform(struct?: DataPanosVlanInterfaceLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVlanInterfaceLocationSharedToHclTerraform(struct?: DataPanosVlanInterfaceLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVlanInterfaceLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVlanInterfaceLocationShared | cdktf.IResolvable | undefined) {
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
export interface DataPanosVlanInterfaceLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ngfw_device DataPanosVlanInterface#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#panorama_device DataPanosVlanInterface#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosVlanInterfaceLocationTemplateToTerraform(struct?: DataPanosVlanInterfaceLocationTemplate | cdktf.IResolvable): any {
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


export function dataPanosVlanInterfaceLocationTemplateToHclTerraform(struct?: DataPanosVlanInterfaceLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosVlanInterfaceLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ngfw_device DataPanosVlanInterface#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#panorama_device DataPanosVlanInterface#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosVlanInterfaceLocationTemplateStackToTerraform(struct?: DataPanosVlanInterfaceLocationTemplateStack | cdktf.IResolvable): any {
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


export function dataPanosVlanInterfaceLocationTemplateStackToHclTerraform(struct?: DataPanosVlanInterfaceLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosVlanInterfaceLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#ngfw DataPanosVlanInterface#ngfw}
  */
  readonly ngfw?: DataPanosVlanInterfaceLocationNgfw;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#shared DataPanosVlanInterface#shared}
  */
  readonly shared?: DataPanosVlanInterfaceLocationShared;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#template DataPanosVlanInterface#template}
  */
  readonly template?: DataPanosVlanInterfaceLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#template_stack DataPanosVlanInterface#template_stack}
  */
  readonly templateStack?: DataPanosVlanInterfaceLocationTemplateStack;
}

export function dataPanosVlanInterfaceLocationToTerraform(struct?: DataPanosVlanInterfaceLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: dataPanosVlanInterfaceLocationNgfwToTerraform(struct!.ngfw),
    shared: dataPanosVlanInterfaceLocationSharedToTerraform(struct!.shared),
    template: dataPanosVlanInterfaceLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosVlanInterfaceLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosVlanInterfaceLocationToHclTerraform(struct?: DataPanosVlanInterfaceLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: dataPanosVlanInterfaceLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceLocationNgfw",
    },
    shared: {
      value: dataPanosVlanInterfaceLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceLocationShared",
    },
    template: {
      value: dataPanosVlanInterfaceLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceLocationTemplate",
    },
    template_stack: {
      value: dataPanosVlanInterfaceLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVlanInterfaceLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVlanInterfaceLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceLocation | cdktf.IResolvable | undefined) {
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
  private _ngfw = new DataPanosVlanInterfaceLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: DataPanosVlanInterfaceLocationNgfw) {
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
  private _shared = new DataPanosVlanInterfaceLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosVlanInterfaceLocationShared) {
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
  private _template = new DataPanosVlanInterfaceLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosVlanInterfaceLocationTemplate) {
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
  private _templateStack = new DataPanosVlanInterfaceLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosVlanInterfaceLocationTemplateStack) {
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
export interface DataPanosVlanInterfaceNdpProxyAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#name DataPanosVlanInterface#name}
  */
  readonly name: string;
  /**
  * put the prefix or address on a block list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#negate DataPanosVlanInterface#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceNdpProxyAddressToTerraform(struct?: DataPanosVlanInterfaceNdpProxyAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
  }
}


export function dataPanosVlanInterfaceNdpProxyAddressToHclTerraform(struct?: DataPanosVlanInterfaceNdpProxyAddress | cdktf.IResolvable): any {
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

export class DataPanosVlanInterfaceNdpProxyAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVlanInterfaceNdpProxyAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceNdpProxyAddress | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // negate - computed: true, optional: true, required: false
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

export class DataPanosVlanInterfaceNdpProxyAddressList extends cdktf.ComplexList {
  public internalValue? : DataPanosVlanInterfaceNdpProxyAddress[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVlanInterfaceNdpProxyAddressOutputReference {
    return new DataPanosVlanInterfaceNdpProxyAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVlanInterfaceNdpProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#address DataPanosVlanInterface#address}
  */
  readonly address?: DataPanosVlanInterfaceNdpProxyAddress[] | cdktf.IResolvable;
  /**
  * Enable proxy NDP on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#enabled DataPanosVlanInterface#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataPanosVlanInterfaceNdpProxyToTerraform(struct?: DataPanosVlanInterfaceNdpProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(dataPanosVlanInterfaceNdpProxyAddressToTerraform, false)(struct!.address),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataPanosVlanInterfaceNdpProxyToHclTerraform(struct?: DataPanosVlanInterfaceNdpProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(dataPanosVlanInterfaceNdpProxyAddressToHclTerraform, false)(struct!.address),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVlanInterfaceNdpProxyAddressList",
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

export class DataPanosVlanInterfaceNdpProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVlanInterfaceNdpProxy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVlanInterfaceNdpProxy | cdktf.IResolvable | undefined) {
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

  // address - computed: true, optional: true, required: false
  private _address = new DataPanosVlanInterfaceNdpProxyAddressList(this, "address", false);
  public get address() {
    return this._address;
  }
  public putAddress(value: DataPanosVlanInterfaceNdpProxyAddress[] | cdktf.IResolvable) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface panos_vlan_interface}
*/
export class DataPanosVlanInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_vlan_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosVlanInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosVlanInterface to import
  * @param importFromId The id of the existing DataPanosVlanInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosVlanInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_vlan_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/vlan_interface panos_vlan_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosVlanInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosVlanInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_vlan_interface',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.5'
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

  // adjust_tcp_mss - computed: true, optional: true, required: false
  private _adjustTcpMss = new DataPanosVlanInterfaceAdjustTcpMssOutputReference(this, "adjust_tcp_mss");
  public get adjustTcpMss() {
    return this._adjustTcpMss;
  }
  public putAdjustTcpMss(value: DataPanosVlanInterfaceAdjustTcpMss) {
    this._adjustTcpMss.internalValue = value;
  }
  public resetAdjustTcpMss() {
    this._adjustTcpMss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustTcpMssInput() {
    return this._adjustTcpMss.internalValue;
  }

  // arp - computed: true, optional: true, required: false
  private _arp = new DataPanosVlanInterfaceArpList(this, "arp", false);
  public get arp() {
    return this._arp;
  }
  public putArp(value: DataPanosVlanInterfaceArp[] | cdktf.IResolvable) {
    this._arp.internalValue = value;
  }
  public resetArp() {
    this._arp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp.internalValue;
  }

  // bonjour - computed: true, optional: true, required: false
  private _bonjour = new DataPanosVlanInterfaceBonjourOutputReference(this, "bonjour");
  public get bonjour() {
    return this._bonjour;
  }
  public putBonjour(value: DataPanosVlanInterfaceBonjour) {
    this._bonjour.internalValue = value;
  }
  public resetBonjour() {
    this._bonjour.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bonjourInput() {
    return this._bonjour.internalValue;
  }

  // comment - computed: true, optional: true, required: false
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

  // ddns_config - computed: true, optional: true, required: false
  private _ddnsConfig = new DataPanosVlanInterfaceDdnsConfigOutputReference(this, "ddns_config");
  public get ddnsConfig() {
    return this._ddnsConfig;
  }
  public putDdnsConfig(value: DataPanosVlanInterfaceDdnsConfig) {
    this._ddnsConfig.internalValue = value;
  }
  public resetDdnsConfig() {
    this._ddnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConfigInput() {
    return this._ddnsConfig.internalValue;
  }

  // df_ignore - computed: true, optional: true, required: false
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

  // dhcp_client - computed: true, optional: true, required: false
  private _dhcpClient = new DataPanosVlanInterfaceDhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }
  public putDhcpClient(value: DataPanosVlanInterfaceDhcpClient) {
    this._dhcpClient.internalValue = value;
  }
  public resetDhcpClient() {
    this._dhcpClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient.internalValue;
  }

  // interface_management_profile - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: true, required: false
  private _ip = new DataPanosVlanInterfaceIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataPanosVlanInterfaceIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new DataPanosVlanInterfaceIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DataPanosVlanInterfaceIpv6) {
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
  private _location = new DataPanosVlanInterfaceLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosVlanInterfaceLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // ndp_proxy - computed: true, optional: true, required: false
  private _ndpProxy = new DataPanosVlanInterfaceNdpProxyOutputReference(this, "ndp_proxy");
  public get ndpProxy() {
    return this._ndpProxy;
  }
  public putNdpProxy(value: DataPanosVlanInterfaceNdpProxy) {
    this._ndpProxy.internalValue = value;
  }
  public resetNdpProxy() {
    this._ndpProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndpProxyInput() {
    return this._ndpProxy.internalValue;
  }

  // netflow_profile - computed: true, optional: true, required: false
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
      adjust_tcp_mss: dataPanosVlanInterfaceAdjustTcpMssToTerraform(this._adjustTcpMss.internalValue),
      arp: cdktf.listMapper(dataPanosVlanInterfaceArpToTerraform, false)(this._arp.internalValue),
      bonjour: dataPanosVlanInterfaceBonjourToTerraform(this._bonjour.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      ddns_config: dataPanosVlanInterfaceDdnsConfigToTerraform(this._ddnsConfig.internalValue),
      df_ignore: cdktf.booleanToTerraform(this._dfIgnore),
      dhcp_client: dataPanosVlanInterfaceDhcpClientToTerraform(this._dhcpClient.internalValue),
      interface_management_profile: cdktf.stringToTerraform(this._interfaceManagementProfile),
      ip: cdktf.listMapper(dataPanosVlanInterfaceIpToTerraform, false)(this._ip.internalValue),
      ipv6: dataPanosVlanInterfaceIpv6ToTerraform(this._ipv6.internalValue),
      location: dataPanosVlanInterfaceLocationToTerraform(this._location.internalValue),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      ndp_proxy: dataPanosVlanInterfaceNdpProxyToTerraform(this._ndpProxy.internalValue),
      netflow_profile: cdktf.stringToTerraform(this._netflowProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adjust_tcp_mss: {
        value: dataPanosVlanInterfaceAdjustTcpMssToHclTerraform(this._adjustTcpMss.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVlanInterfaceAdjustTcpMss",
      },
      arp: {
        value: cdktf.listMapperHcl(dataPanosVlanInterfaceArpToHclTerraform, false)(this._arp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosVlanInterfaceArpList",
      },
      bonjour: {
        value: dataPanosVlanInterfaceBonjourToHclTerraform(this._bonjour.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVlanInterfaceBonjour",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_config: {
        value: dataPanosVlanInterfaceDdnsConfigToHclTerraform(this._ddnsConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVlanInterfaceDdnsConfig",
      },
      df_ignore: {
        value: cdktf.booleanToHclTerraform(this._dfIgnore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_client: {
        value: dataPanosVlanInterfaceDhcpClientToHclTerraform(this._dhcpClient.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVlanInterfaceDhcpClient",
      },
      interface_management_profile: {
        value: cdktf.stringToHclTerraform(this._interfaceManagementProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.listMapperHcl(dataPanosVlanInterfaceIpToHclTerraform, false)(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosVlanInterfaceIpList",
      },
      ipv6: {
        value: dataPanosVlanInterfaceIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVlanInterfaceIpv6",
      },
      location: {
        value: dataPanosVlanInterfaceLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVlanInterfaceLocation",
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
        value: dataPanosVlanInterfaceNdpProxyToHclTerraform(this._ndpProxy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVlanInterfaceNdpProxy",
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
