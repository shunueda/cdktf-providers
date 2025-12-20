// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Layer3SubinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Layer 3 sub Interfaces ARP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#arp Layer3Subinterface#arp}
  */
  readonly arp?: Layer3SubinterfaceArp[] | cdktf.IResolvable;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#comment Layer3Subinterface#comment}
  */
  readonly comment?: string;
  /**
  * Dynamic DNS configuration specific to the Layer 3 sub Interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#ddns_config Layer3Subinterface#ddns_config}
  */
  readonly ddnsConfig?: Layer3SubinterfaceDdnsConfig;
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#device Layer3Subinterface#device}
  */
  readonly device?: string;
  /**
  * Layer3 sub interfaces DHCP Client Object
  * > ℹ️ **Note:** You must specify exactly one of `dhcp_client` and `ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#dhcp_client Layer3Subinterface#dhcp_client}
  */
  readonly dhcpClient?: Layer3SubinterfaceDhcpClient;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#folder Layer3Subinterface#folder}
  */
  readonly folder?: string;
  /**
  * Interface management profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#interface_management_profile Layer3Subinterface#interface_management_profile}
  */
  readonly interfaceManagementProfile?: string;
  /**
  * L3 sub-interface IP Parent
  * > ℹ️ **Note:** You must specify exactly one of `dhcp_client` and `ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#ip Layer3Subinterface#ip}
  */
  readonly ip?: Layer3SubinterfaceIp[] | cdktf.IResolvable;
  /**
  * MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#mtu Layer3Subinterface#mtu}
  */
  readonly mtu?: number;
  /**
  * L3 sub-interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#name Layer3Subinterface#name}
  */
  readonly name: string;
  /**
  * Parent interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#parent_interface Layer3Subinterface#parent_interface}
  */
  readonly parentInterface?: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#snippet Layer3Subinterface#snippet}
  */
  readonly snippet?: string;
  /**
  * VLAN tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#tag Layer3Subinterface#tag}
  */
  readonly tag?: number;
}
export interface Layer3SubinterfaceArp {
  /**
  * MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#hw_address Layer3Subinterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#name Layer3Subinterface#name}
  */
  readonly name?: string;
}

export function layer3SubinterfaceArpToTerraform(struct?: Layer3SubinterfaceArp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function layer3SubinterfaceArpToHclTerraform(struct?: Layer3SubinterfaceArp | cdktf.IResolvable): any {
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

export class Layer3SubinterfaceArpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Layer3SubinterfaceArp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Layer3SubinterfaceArp | cdktf.IResolvable | undefined) {
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

export class Layer3SubinterfaceArpList extends cdktf.ComplexList {
  public internalValue? : Layer3SubinterfaceArp[] | cdktf.IResolvable

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
  public get(index: number): Layer3SubinterfaceArpOutputReference {
    return new Layer3SubinterfaceArpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Layer3SubinterfaceDdnsConfig {
  /**
  * Certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#ddns_cert_profile Layer3Subinterface#ddns_cert_profile}
  */
  readonly ddnsCertProfile: string;
  /**
  * Enable DDNS?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#ddns_enabled Layer3Subinterface#ddns_enabled}
  */
  readonly ddnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Ddns hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#ddns_hostname Layer3Subinterface#ddns_hostname}
  */
  readonly ddnsHostname: string;
  /**
  * IP to register (static only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#ddns_ip Layer3Subinterface#ddns_ip}
  */
  readonly ddnsIp?: string;
  /**
  * Update interval (days)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#ddns_update_interval Layer3Subinterface#ddns_update_interval}
  */
  readonly ddnsUpdateInterval?: number;
  /**
  * DDNS vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#ddns_vendor Layer3Subinterface#ddns_vendor}
  */
  readonly ddnsVendor: string;
  /**
  * DDNS vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#ddns_vendor_config Layer3Subinterface#ddns_vendor_config}
  */
  readonly ddnsVendorConfig: string;
}

export function layer3SubinterfaceDdnsConfigToTerraform(struct?: Layer3SubinterfaceDdnsConfig | cdktf.IResolvable): any {
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


export function layer3SubinterfaceDdnsConfigToHclTerraform(struct?: Layer3SubinterfaceDdnsConfig | cdktf.IResolvable): any {
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

export class Layer3SubinterfaceDdnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Layer3SubinterfaceDdnsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Layer3SubinterfaceDdnsConfig | cdktf.IResolvable | undefined) {
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
export interface Layer3SubinterfaceDhcpClientSendHostname {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#enable Layer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set interface hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#hostname Layer3Subinterface#hostname}
  */
  readonly hostname?: string;
}

export function layer3SubinterfaceDhcpClientSendHostnameToTerraform(struct?: Layer3SubinterfaceDhcpClientSendHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function layer3SubinterfaceDhcpClientSendHostnameToHclTerraform(struct?: Layer3SubinterfaceDhcpClientSendHostname | cdktf.IResolvable): any {
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

export class Layer3SubinterfaceDhcpClientSendHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Layer3SubinterfaceDhcpClientSendHostname | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Layer3SubinterfaceDhcpClientSendHostname | cdktf.IResolvable | undefined) {
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
export interface Layer3SubinterfaceDhcpClient {
  /**
  * Automatically create default route pointing to default gateway provided by server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#create_default_route Layer3Subinterface#create_default_route}
  */
  readonly createDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Metric of the default route created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#default_route_metric Layer3Subinterface#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Enable DHCP?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#enable Layer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Layer3 sub interfaces DHCP Client Send hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#send_hostname Layer3Subinterface#send_hostname}
  */
  readonly sendHostname?: Layer3SubinterfaceDhcpClientSendHostname;
}

export function layer3SubinterfaceDhcpClientToTerraform(struct?: Layer3SubinterfaceDhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_default_route: cdktf.booleanToTerraform(struct!.createDefaultRoute),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    enable: cdktf.booleanToTerraform(struct!.enable),
    send_hostname: layer3SubinterfaceDhcpClientSendHostnameToTerraform(struct!.sendHostname),
  }
}


export function layer3SubinterfaceDhcpClientToHclTerraform(struct?: Layer3SubinterfaceDhcpClient | cdktf.IResolvable): any {
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
      value: layer3SubinterfaceDhcpClientSendHostnameToHclTerraform(struct!.sendHostname),
      isBlock: true,
      type: "struct",
      storageClassType: "Layer3SubinterfaceDhcpClientSendHostname",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Layer3SubinterfaceDhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Layer3SubinterfaceDhcpClient | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Layer3SubinterfaceDhcpClient | cdktf.IResolvable | undefined) {
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
  private _sendHostname = new Layer3SubinterfaceDhcpClientSendHostnameOutputReference(this, "send_hostname");
  public get sendHostname() {
    return this._sendHostname;
  }
  public putSendHostname(value: Layer3SubinterfaceDhcpClientSendHostname) {
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
export interface Layer3SubinterfaceIp {
  /**
  * L3 sub-interface IP address(es)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#name Layer3Subinterface#name}
  */
  readonly name: string;
}

export function layer3SubinterfaceIpToTerraform(struct?: Layer3SubinterfaceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function layer3SubinterfaceIpToHclTerraform(struct?: Layer3SubinterfaceIp | cdktf.IResolvable): any {
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

export class Layer3SubinterfaceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Layer3SubinterfaceIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Layer3SubinterfaceIp | cdktf.IResolvable | undefined) {
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

export class Layer3SubinterfaceIpList extends cdktf.ComplexList {
  public internalValue? : Layer3SubinterfaceIp[] | cdktf.IResolvable

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
  public get(index: number): Layer3SubinterfaceIpOutputReference {
    return new Layer3SubinterfaceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface scm_layer3_subinterface}
*/
export class Layer3Subinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_layer3_subinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Layer3Subinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Layer3Subinterface to import
  * @param importFromId The id of the existing Layer3Subinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Layer3Subinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_layer3_subinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer3_subinterface scm_layer3_subinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Layer3SubinterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: Layer3SubinterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_layer3_subinterface',
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
    this._device = config.device;
    this._dhcpClient.internalValue = config.dhcpClient;
    this._folder = config.folder;
    this._interfaceManagementProfile = config.interfaceManagementProfile;
    this._ip.internalValue = config.ip;
    this._mtu = config.mtu;
    this._name = config.name;
    this._parentInterface = config.parentInterface;
    this._snippet = config.snippet;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp - computed: false, optional: true, required: false
  private _arp = new Layer3SubinterfaceArpList(this, "arp", false);
  public get arp() {
    return this._arp;
  }
  public putArp(value: Layer3SubinterfaceArp[] | cdktf.IResolvable) {
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
  private _ddnsConfig = new Layer3SubinterfaceDdnsConfigOutputReference(this, "ddns_config");
  public get ddnsConfig() {
    return this._ddnsConfig;
  }
  public putDdnsConfig(value: Layer3SubinterfaceDdnsConfig) {
    this._ddnsConfig.internalValue = value;
  }
  public resetDdnsConfig() {
    this._ddnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConfigInput() {
    return this._ddnsConfig.internalValue;
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
  private _dhcpClient = new Layer3SubinterfaceDhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }
  public putDhcpClient(value: Layer3SubinterfaceDhcpClient) {
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
  private _ip = new Layer3SubinterfaceIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: Layer3SubinterfaceIp[] | cdktf.IResolvable) {
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

  // parent_interface - computed: false, optional: true, required: false
  private _parentInterface?: string; 
  public get parentInterface() {
    return this.getStringAttribute('parent_interface');
  }
  public set parentInterface(value: string) {
    this._parentInterface = value;
  }
  public resetParentInterface() {
    this._parentInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInterfaceInput() {
    return this._parentInterface;
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

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp: cdktf.listMapper(layer3SubinterfaceArpToTerraform, false)(this._arp.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      ddns_config: layer3SubinterfaceDdnsConfigToTerraform(this._ddnsConfig.internalValue),
      device: cdktf.stringToTerraform(this._device),
      dhcp_client: layer3SubinterfaceDhcpClientToTerraform(this._dhcpClient.internalValue),
      folder: cdktf.stringToTerraform(this._folder),
      interface_management_profile: cdktf.stringToTerraform(this._interfaceManagementProfile),
      ip: cdktf.listMapper(layer3SubinterfaceIpToTerraform, false)(this._ip.internalValue),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      parent_interface: cdktf.stringToTerraform(this._parentInterface),
      snippet: cdktf.stringToTerraform(this._snippet),
      tag: cdktf.numberToTerraform(this._tag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp: {
        value: cdktf.listMapperHcl(layer3SubinterfaceArpToHclTerraform, false)(this._arp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Layer3SubinterfaceArpList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_config: {
        value: layer3SubinterfaceDdnsConfigToHclTerraform(this._ddnsConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Layer3SubinterfaceDdnsConfig",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_client: {
        value: layer3SubinterfaceDhcpClientToHclTerraform(this._dhcpClient.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Layer3SubinterfaceDhcpClient",
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
        value: cdktf.listMapperHcl(layer3SubinterfaceIpToHclTerraform, false)(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Layer3SubinterfaceIpList",
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
      parent_interface: {
        value: cdktf.stringToHclTerraform(this._parentInterface),
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
      tag: {
        value: cdktf.numberToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
