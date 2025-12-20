// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ARP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#arp VlanInterface#arp}
  */
  readonly arp?: VlanInterfaceArp[] | cdktf.IResolvable;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#comment VlanInterface#comment}
  */
  readonly comment?: string;
  /**
  * Dynamic DNS configuration specific to the Vlan Interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#ddns_config VlanInterface#ddns_config}
  */
  readonly ddnsConfig?: VlanInterfaceDdnsConfig;
  /**
  * Default interface assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#default_value VlanInterface#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#device VlanInterface#device}
  */
  readonly device?: string;
  /**
  * Vlan interfaces DHCP Client Object
  * > ℹ️ **Note:** You must specify exactly one of `dhcp_client` and `ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#dhcp_client VlanInterface#dhcp_client}
  */
  readonly dhcpClient?: VlanInterfaceDhcpClient;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#folder VlanInterface#folder}
  */
  readonly folder?: string;
  /**
  * Interface management profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#interface_management_profile VlanInterface#interface_management_profile}
  */
  readonly interfaceManagementProfile?: string;
  /**
  * VLAN Interface IP Parent
  * > ℹ️ **Note:** You must specify exactly one of `dhcp_client` and `ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#ip VlanInterface#ip}
  */
  readonly ip?: VlanInterfaceIp[] | cdktf.IResolvable;
  /**
  * MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#mtu VlanInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * L3 sub-interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#snippet VlanInterface#snippet}
  */
  readonly snippet?: string;
  /**
  * VLAN tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#vlan_tag VlanInterface#vlan_tag}
  */
  readonly vlanTag?: string;
}
export interface VlanInterfaceArp {
  /**
  * MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#hw_address VlanInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * ARP interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#interface VlanInterface#interface}
  */
  readonly interface?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#name VlanInterface#name}
  */
  readonly name?: string;
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
export interface VlanInterfaceDdnsConfig {
  /**
  * Certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#ddns_cert_profile VlanInterface#ddns_cert_profile}
  */
  readonly ddnsCertProfile: string;
  /**
  * Enable DDNS?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#ddns_enabled VlanInterface#ddns_enabled}
  */
  readonly ddnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Ddns hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#ddns_hostname VlanInterface#ddns_hostname}
  */
  readonly ddnsHostname: string;
  /**
  * IP to register (static only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#ddns_ip VlanInterface#ddns_ip}
  */
  readonly ddnsIp?: string;
  /**
  * Update interval (days)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#ddns_update_interval VlanInterface#ddns_update_interval}
  */
  readonly ddnsUpdateInterval?: number;
  /**
  * DDNS vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#ddns_vendor VlanInterface#ddns_vendor}
  */
  readonly ddnsVendor: string;
  /**
  * DDNS vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#ddns_vendor_config VlanInterface#ddns_vendor_config}
  */
  readonly ddnsVendorConfig: string;
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
    ddns_ip: cdktf.stringToTerraform(struct!.ddnsIp),
    ddns_update_interval: cdktf.numberToTerraform(struct!.ddnsUpdateInterval),
    ddns_vendor: cdktf.stringToTerraform(struct!.ddnsVendor),
    ddns_vendor_config: cdktf.stringToTerraform(struct!.ddnsVendorConfig),
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
      value: cdktf.stringToHclTerraform(struct!.ddnsIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: cdktf.stringToHclTerraform(struct!.ddnsVendorConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    if (this._ddnsUpdateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdateInterval = this._ddnsUpdateInterval;
    }
    if (this._ddnsVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsVendor = this._ddnsVendor;
    }
    if (this._ddnsVendorConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsVendorConfig = this._ddnsVendorConfig;
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
      this._ddnsUpdateInterval = undefined;
      this._ddnsVendor = undefined;
      this._ddnsVendorConfig = undefined;
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
      this._ddnsUpdateInterval = value.ddnsUpdateInterval;
      this._ddnsVendor = value.ddnsVendor;
      this._ddnsVendorConfig = value.ddnsVendorConfig;
    }
  }

  // ddns_cert_profile - computed: false, optional: false, required: true
  private _ddnsCertProfile?: string; 
  public get ddnsCertProfile() {
    return this.getStringAttribute('ddns_cert_profile');
  }
  public set ddnsCertProfile(value: string) {
    this._ddnsCertProfile = value;
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

  // ddns_hostname - computed: false, optional: false, required: true
  private _ddnsHostname?: string; 
  public get ddnsHostname() {
    return this.getStringAttribute('ddns_hostname');
  }
  public set ddnsHostname(value: string) {
    this._ddnsHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsHostnameInput() {
    return this._ddnsHostname;
  }

  // ddns_ip - computed: false, optional: true, required: false
  private _ddnsIp?: string; 
  public get ddnsIp() {
    return this.getStringAttribute('ddns_ip');
  }
  public set ddnsIp(value: string) {
    this._ddnsIp = value;
  }
  public resetDdnsIp() {
    this._ddnsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsIpInput() {
    return this._ddnsIp;
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

  // ddns_vendor - computed: false, optional: false, required: true
  private _ddnsVendor?: string; 
  public get ddnsVendor() {
    return this.getStringAttribute('ddns_vendor');
  }
  public set ddnsVendor(value: string) {
    this._ddnsVendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsVendorInput() {
    return this._ddnsVendor;
  }

  // ddns_vendor_config - computed: false, optional: false, required: true
  private _ddnsVendorConfig?: string; 
  public get ddnsVendorConfig() {
    return this.getStringAttribute('ddns_vendor_config');
  }
  public set ddnsVendorConfig(value: string) {
    this._ddnsVendorConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsVendorConfigInput() {
    return this._ddnsVendorConfig;
  }
}
export interface VlanInterfaceDhcpClientSendHostname {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set interface hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#hostname VlanInterface#hostname}
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
export interface VlanInterfaceDhcpClient {
  /**
  * Automatically create default route pointing to default gateway provided by server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#create_default_route VlanInterface#create_default_route}
  */
  readonly createDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Metric of the default route created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#default_route_metric VlanInterface#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Enable DHCP?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#enable VlanInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Send hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#send_hostname VlanInterface#send_hostname}
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
  * VLAN Interface IP address(es)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#name VlanInterface#name}
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

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface scm_vlan_interface}
*/
export class VlanInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_vlan_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VlanInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VlanInterface to import
  * @param importFromId The id of the existing VlanInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VlanInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_vlan_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vlan_interface scm_vlan_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: VlanInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_vlan_interface',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arp.internalValue = config.arp;
    this._comment = config.comment;
    this._ddnsConfig.internalValue = config.ddnsConfig;
    this._defaultValue = config.defaultValue;
    this._device = config.device;
    this._dhcpClient.internalValue = config.dhcpClient;
    this._folder = config.folder;
    this._interfaceManagementProfile = config.interfaceManagementProfile;
    this._ip.internalValue = config.ip;
    this._mtu = config.mtu;
    this._name = config.name;
    this._snippet = config.snippet;
    this._vlanTag = config.vlanTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
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

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // vlan_tag - computed: false, optional: true, required: false
  private _vlanTag?: string; 
  public get vlanTag() {
    return this.getStringAttribute('vlan_tag');
  }
  public set vlanTag(value: string) {
    this._vlanTag = value;
  }
  public resetVlanTag() {
    this._vlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagInput() {
    return this._vlanTag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp: cdktf.listMapper(vlanInterfaceArpToTerraform, false)(this._arp.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      ddns_config: vlanInterfaceDdnsConfigToTerraform(this._ddnsConfig.internalValue),
      default_value: cdktf.stringToTerraform(this._defaultValue),
      device: cdktf.stringToTerraform(this._device),
      dhcp_client: vlanInterfaceDhcpClientToTerraform(this._dhcpClient.internalValue),
      folder: cdktf.stringToTerraform(this._folder),
      interface_management_profile: cdktf.stringToTerraform(this._interfaceManagementProfile),
      ip: cdktf.listMapper(vlanInterfaceIpToTerraform, false)(this._ip.internalValue),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
      vlan_tag: cdktf.stringToTerraform(this._vlanTag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp: {
        value: cdktf.listMapperHcl(vlanInterfaceArpToHclTerraform, false)(this._arp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VlanInterfaceArpList",
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
      default_value: {
        value: cdktf.stringToHclTerraform(this._defaultValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_client: {
        value: vlanInterfaceDhcpClientToHclTerraform(this._dhcpClient.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VlanInterfaceDhcpClient",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_tag: {
        value: cdktf.stringToHclTerraform(this._vlanTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
