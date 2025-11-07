// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AggregateLayer3SubinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#adjust_tcp_mss AggregateLayer3Subinterface#adjust_tcp_mss}
  */
  readonly adjustTcpMss?: AggregateLayer3SubinterfaceAdjustTcpMss;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#arp AggregateLayer3Subinterface#arp}
  */
  readonly arp?: AggregateLayer3SubinterfaceArp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#bonjour AggregateLayer3Subinterface#bonjour}
  */
  readonly bonjour?: AggregateLayer3SubinterfaceBonjour;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#comment AggregateLayer3Subinterface#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ddns_config AggregateLayer3Subinterface#ddns_config}
  */
  readonly ddnsConfig?: AggregateLayer3SubinterfaceDdnsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#decrypt_forward AggregateLayer3Subinterface#decrypt_forward}
  */
  readonly decryptForward?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#df_ignore AggregateLayer3Subinterface#df_ignore}
  */
  readonly dfIgnore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dhcp_client AggregateLayer3Subinterface#dhcp_client}
  */
  readonly dhcpClient?: AggregateLayer3SubinterfaceDhcpClient;
  /**
  * Interface management profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#interface_management_profile AggregateLayer3Subinterface#interface_management_profile}
  */
  readonly interfaceManagementProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ip AggregateLayer3Subinterface#ip}
  */
  readonly ip?: AggregateLayer3SubinterfaceIp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ipv6 AggregateLayer3Subinterface#ipv6}
  */
  readonly ipv6?: AggregateLayer3SubinterfaceIpv6;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#location AggregateLayer3Subinterface#location}
  */
  readonly location: AggregateLayer3SubinterfaceLocation;
  /**
  * Maximum Transfer Unit, up to 9216 in Jumbo-Frame mode, up to 1500 otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#mtu AggregateLayer3Subinterface#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ndp_proxy AggregateLayer3Subinterface#ndp_proxy}
  */
  readonly ndpProxy?: AggregateLayer3SubinterfaceNdpProxy;
  /**
  * Netflow Server Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#netflow_profile AggregateLayer3Subinterface#netflow_profile}
  */
  readonly netflowProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#parent AggregateLayer3Subinterface#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#sdwan_link_settings AggregateLayer3Subinterface#sdwan_link_settings}
  */
  readonly sdwanLinkSettings?: AggregateLayer3SubinterfaceSdwanLinkSettings;
  /**
  * 802.1q VLAN tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#tag AggregateLayer3Subinterface#tag}
  */
  readonly tag?: number;
}
export interface AggregateLayer3SubinterfaceAdjustTcpMss {
  /**
  * Set if TCP MSS value should be reduced based on mtu
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * IPv4 MSS adjustment size (in bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ipv4_mss_adjustment AggregateLayer3Subinterface#ipv4_mss_adjustment}
  */
  readonly ipv4MssAdjustment?: number;
  /**
  * IPv6 MSS adjustment size (in bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ipv6_mss_adjustment AggregateLayer3Subinterface#ipv6_mss_adjustment}
  */
  readonly ipv6MssAdjustment?: number;
}

export function aggregateLayer3SubinterfaceAdjustTcpMssToTerraform(struct?: AggregateLayer3SubinterfaceAdjustTcpMss | cdktf.IResolvable): any {
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


export function aggregateLayer3SubinterfaceAdjustTcpMssToHclTerraform(struct?: AggregateLayer3SubinterfaceAdjustTcpMss | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceAdjustTcpMssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceAdjustTcpMss | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceAdjustTcpMss | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceArp {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#hw_address AggregateLayer3Subinterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
}

export function aggregateLayer3SubinterfaceArpToTerraform(struct?: AggregateLayer3SubinterfaceArp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aggregateLayer3SubinterfaceArpToHclTerraform(struct?: AggregateLayer3SubinterfaceArp | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceArpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceArp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceArp | cdktf.IResolvable | undefined) {
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

export class AggregateLayer3SubinterfaceArpList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceArp[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceArpOutputReference {
    return new AggregateLayer3SubinterfaceArpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceBonjour {
  /**
  * Set to support Bonjour service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * default 0: NO-Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#group_id AggregateLayer3Subinterface#group_id}
  */
  readonly groupId?: number;
  /**
  * Set to check and update TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ttl_check AggregateLayer3Subinterface#ttl_check}
  */
  readonly ttlCheck?: boolean | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceBonjourToTerraform(struct?: AggregateLayer3SubinterfaceBonjour | cdktf.IResolvable): any {
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


export function aggregateLayer3SubinterfaceBonjourToHclTerraform(struct?: AggregateLayer3SubinterfaceBonjour | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceBonjourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceBonjour | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceBonjour | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#value AggregateLayer3Subinterface#value}
  */
  readonly value?: string;
}

export function aggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfigToTerraform(struct?: AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function aggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfigToHclTerraform(struct?: AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfig | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfig | cdktf.IResolvable | undefined) {
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

export class AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfigList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfig[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfigOutputReference {
    return new AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceDdnsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ddns_cert_profile AggregateLayer3Subinterface#ddns_cert_profile}
  */
  readonly ddnsCertProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ddns_enabled AggregateLayer3Subinterface#ddns_enabled}
  */
  readonly ddnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * ddns hostname variable or real address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ddns_hostname AggregateLayer3Subinterface#ddns_hostname}
  */
  readonly ddnsHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ddns_ip AggregateLayer3Subinterface#ddns_ip}
  */
  readonly ddnsIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ddns_ipv6 AggregateLayer3Subinterface#ddns_ipv6}
  */
  readonly ddnsIpv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ddns_update_interval AggregateLayer3Subinterface#ddns_update_interval}
  */
  readonly ddnsUpdateInterval?: number;
  /**
  * Vendor and product type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ddns_vendor AggregateLayer3Subinterface#ddns_vendor}
  */
  readonly ddnsVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ddns_vendor_config AggregateLayer3Subinterface#ddns_vendor_config}
  */
  readonly ddnsVendorConfig?: AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfig[] | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceDdnsConfigToTerraform(struct?: AggregateLayer3SubinterfaceDdnsConfig | cdktf.IResolvable): any {
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
    ddns_vendor_config: cdktf.listMapper(aggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfigToTerraform, false)(struct!.ddnsVendorConfig),
  }
}


export function aggregateLayer3SubinterfaceDdnsConfigToHclTerraform(struct?: AggregateLayer3SubinterfaceDdnsConfig | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfigToHclTerraform, false)(struct!.ddnsVendorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceDdnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceDdnsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceDdnsConfig | cdktf.IResolvable | undefined) {
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
  private _ddnsVendorConfig = new AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfigList(this, "ddns_vendor_config", false);
  public get ddnsVendorConfig() {
    return this._ddnsVendorConfig;
  }
  public putDdnsVendorConfig(value: AggregateLayer3SubinterfaceDdnsConfigDdnsVendorConfig[] | cdktf.IResolvable) {
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
export interface AggregateLayer3SubinterfaceDhcpClientSendHostname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set Interface Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#hostname AggregateLayer3Subinterface#hostname}
  */
  readonly hostname?: string;
}

export function aggregateLayer3SubinterfaceDhcpClientSendHostnameToTerraform(struct?: AggregateLayer3SubinterfaceDhcpClientSendHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function aggregateLayer3SubinterfaceDhcpClientSendHostnameToHclTerraform(struct?: AggregateLayer3SubinterfaceDhcpClientSendHostname | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceDhcpClientSendHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceDhcpClientSendHostname | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceDhcpClientSendHostname | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceDhcpClient {
  /**
  * Automatically create default route pointing to default gateway provided by server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#create_default_route AggregateLayer3Subinterface#create_default_route}
  */
  readonly createDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Metric of the default route created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#default_route_metric AggregateLayer3Subinterface#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#send_hostname AggregateLayer3Subinterface#send_hostname}
  */
  readonly sendHostname?: AggregateLayer3SubinterfaceDhcpClientSendHostname;
}

export function aggregateLayer3SubinterfaceDhcpClientToTerraform(struct?: AggregateLayer3SubinterfaceDhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_default_route: cdktf.booleanToTerraform(struct!.createDefaultRoute),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    enable: cdktf.booleanToTerraform(struct!.enable),
    send_hostname: aggregateLayer3SubinterfaceDhcpClientSendHostnameToTerraform(struct!.sendHostname),
  }
}


export function aggregateLayer3SubinterfaceDhcpClientToHclTerraform(struct?: AggregateLayer3SubinterfaceDhcpClient | cdktf.IResolvable): any {
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
      value: aggregateLayer3SubinterfaceDhcpClientSendHostnameToHclTerraform(struct!.sendHostname),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceDhcpClientSendHostname",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceDhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceDhcpClient | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceDhcpClient | cdktf.IResolvable | undefined) {
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
  private _sendHostname = new AggregateLayer3SubinterfaceDhcpClientSendHostnameOutputReference(this, "send_hostname");
  public get sendHostname() {
    return this._sendHostname;
  }
  public putSendHostname(value: AggregateLayer3SubinterfaceDhcpClientSendHostname) {
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
export interface AggregateLayer3SubinterfaceIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
  /**
  * Gateway IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#sdwan_gateway AggregateLayer3Subinterface#sdwan_gateway}
  */
  readonly sdwanGateway?: string;
}

export function aggregateLayer3SubinterfaceIpToTerraform(struct?: AggregateLayer3SubinterfaceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sdwan_gateway: cdktf.stringToTerraform(struct!.sdwanGateway),
  }
}


export function aggregateLayer3SubinterfaceIpToHclTerraform(struct?: AggregateLayer3SubinterfaceIp | cdktf.IResolvable): any {
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
    sdwan_gateway: {
      value: cdktf.stringToHclTerraform(struct!.sdwanGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sdwanGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanGateway = this._sdwanGateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateLayer3SubinterfaceIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sdwanGateway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sdwanGateway = value.sdwanGateway;
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

  // sdwan_gateway - computed: false, optional: true, required: false
  private _sdwanGateway?: string; 
  public get sdwanGateway() {
    return this.getStringAttribute('sdwan_gateway');
  }
  public set sdwanGateway(value: string) {
    this._sdwanGateway = value;
  }
  public resetSdwanGateway() {
    this._sdwanGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanGatewayInput() {
    return this._sdwanGateway;
  }
}

export class AggregateLayer3SubinterfaceIpList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceIp[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceIpOutputReference {
    return new AggregateLayer3SubinterfaceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceIpv6AddressAdvertise {
  /**
  * Set the Auto Address Configuration Flag (A-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#auto_config_flag AggregateLayer3Subinterface#auto_config_flag}
  */
  readonly autoConfigFlag?: boolean | cdktf.IResolvable;
  /**
  * enable advertising this prefix in router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set the On-Link Flag (L-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#onlink_flag AggregateLayer3Subinterface#onlink_flag}
  */
  readonly onlinkFlag?: boolean | cdktf.IResolvable;
  /**
  * Preferred Lifetime (in seconds) of the prefix advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#preferred_lifetime AggregateLayer3Subinterface#preferred_lifetime}
  */
  readonly preferredLifetime?: string;
  /**
  * Valid Lifetime (in seconds) of the prefix advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#valid_lifetime AggregateLayer3Subinterface#valid_lifetime}
  */
  readonly validLifetime?: string;
}

export function aggregateLayer3SubinterfaceIpv6AddressAdvertiseToTerraform(struct?: AggregateLayer3SubinterfaceIpv6AddressAdvertise | cdktf.IResolvable): any {
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


export function aggregateLayer3SubinterfaceIpv6AddressAdvertiseToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6AddressAdvertise | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6AddressAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6AddressAdvertise | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6AddressAdvertise | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6AddressAnycast {
}

export function aggregateLayer3SubinterfaceIpv6AddressAnycastToTerraform(struct?: AggregateLayer3SubinterfaceIpv6AddressAnycast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aggregateLayer3SubinterfaceIpv6AddressAnycastToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6AddressAnycast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AggregateLayer3SubinterfaceIpv6AddressAnycastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6AddressAnycast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6AddressAnycast | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6AddressPrefix {
}

export function aggregateLayer3SubinterfaceIpv6AddressPrefixToTerraform(struct?: AggregateLayer3SubinterfaceIpv6AddressPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aggregateLayer3SubinterfaceIpv6AddressPrefixToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6AddressPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AggregateLayer3SubinterfaceIpv6AddressPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6AddressPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6AddressPrefix | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6Address {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#advertise AggregateLayer3Subinterface#advertise}
  */
  readonly advertise?: AggregateLayer3SubinterfaceIpv6AddressAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#anycast AggregateLayer3Subinterface#anycast}
  */
  readonly anycast?: AggregateLayer3SubinterfaceIpv6AddressAnycast;
  /**
  * configure this address on interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable_on_interface AggregateLayer3Subinterface#enable_on_interface}
  */
  readonly enableOnInterface?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#prefix AggregateLayer3Subinterface#prefix}
  */
  readonly prefix?: AggregateLayer3SubinterfaceIpv6AddressPrefix;
}

export function aggregateLayer3SubinterfaceIpv6AddressToTerraform(struct?: AggregateLayer3SubinterfaceIpv6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: aggregateLayer3SubinterfaceIpv6AddressAdvertiseToTerraform(struct!.advertise),
    anycast: aggregateLayer3SubinterfaceIpv6AddressAnycastToTerraform(struct!.anycast),
    enable_on_interface: cdktf.booleanToTerraform(struct!.enableOnInterface),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: aggregateLayer3SubinterfaceIpv6AddressPrefixToTerraform(struct!.prefix),
  }
}


export function aggregateLayer3SubinterfaceIpv6AddressToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: aggregateLayer3SubinterfaceIpv6AddressAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6AddressAdvertise",
    },
    anycast: {
      value: aggregateLayer3SubinterfaceIpv6AddressAnycastToHclTerraform(struct!.anycast),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6AddressAnycast",
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
      value: aggregateLayer3SubinterfaceIpv6AddressPrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6AddressPrefix",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6AddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceIpv6Address | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6Address | cdktf.IResolvable | undefined) {
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
  private _advertise = new AggregateLayer3SubinterfaceIpv6AddressAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: AggregateLayer3SubinterfaceIpv6AddressAdvertise) {
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
  private _anycast = new AggregateLayer3SubinterfaceIpv6AddressAnycastOutputReference(this, "anycast");
  public get anycast() {
    return this._anycast;
  }
  public putAnycast(value: AggregateLayer3SubinterfaceIpv6AddressAnycast) {
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
  private _prefix = new AggregateLayer3SubinterfaceIpv6AddressPrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: AggregateLayer3SubinterfaceIpv6AddressPrefix) {
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

export class AggregateLayer3SubinterfaceIpv6AddressList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceIpv6Address[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceIpv6AddressOutputReference {
    return new AggregateLayer3SubinterfaceIpv6AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 {
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer {
  /**
  * (4-3600) Lifetime in Seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#lifetime AggregateLayer3Subinterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined) {
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

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerOutputReference {
    return new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#server AggregateLayer3Subinterface#server}
  */
  readonly server?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktf.listMapper(aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToTerraform, false)(struct!.server),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToHclTerraform, false)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined) {
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
  private _server = new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dhcpv6 AggregateLayer3Subinterface#dhcpv6}
  */
  readonly dhcpv6?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#manual AggregateLayer3Subinterface#manual}
  */
  readonly manual?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualToTerraform(struct!.manual),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6",
    },
    manual: {
      value: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined) {
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
  private _dhcpv6 = new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6) {
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
  private _manual = new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceManual) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#source AggregateLayer3Subinterface#source}
  */
  readonly source?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceToTerraform(struct!.source),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
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
      value: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined) {
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
  private _source = new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerSource) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 {
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#lifetime AggregateLayer3Subinterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined) {
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

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference {
    return new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#suffix AggregateLayer3Subinterface#suffix}
  */
  readonly suffix?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suffix: cdktf.listMapper(aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform, false)(struct!.suffix),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suffix: {
      value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform, false)(struct!.suffix),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined) {
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
  private _suffix = new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixList(this, "suffix", false);
  public get suffix() {
    return this._suffix;
  }
  public putSuffix(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dhcpv6 AggregateLayer3Subinterface#dhcpv6}
  */
  readonly dhcpv6?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#manual AggregateLayer3Subinterface#manual}
  */
  readonly manual?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct!.manual),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6",
    },
    manual: {
      value: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined) {
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
  private _dhcpv6 = new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6) {
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
  private _manual = new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#source AggregateLayer3Subinterface#source}
  */
  readonly source?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceToTerraform(struct!.source),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
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
      value: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined) {
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
  private _source = new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixSource) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighbor {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#hw_address AggregateLayer3Subinterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighborToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighborToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined) {
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

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighborList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighbor[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighborOutputReference {
    return new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscovery {
  /**
  * number of consecutive neighbor solicitation messages sent for duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dad_attempts AggregateLayer3Subinterface#dad_attempts}
  */
  readonly dadAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dns_server AggregateLayer3Subinterface#dns_server}
  */
  readonly dnsServer?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dns_suffix AggregateLayer3Subinterface#dns_suffix}
  */
  readonly dnsSuffix?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix;
  /**
  * Enable Duplicate Address Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable_dad AggregateLayer3Subinterface#enable_dad}
  */
  readonly enableDad?: boolean | cdktf.IResolvable;
  /**
  * Enable NDP Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable_ndp_monitor AggregateLayer3Subinterface#enable_ndp_monitor}
  */
  readonly enableNdpMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#neighbor AggregateLayer3Subinterface#neighbor}
  */
  readonly neighbor?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighbor[] | cdktf.IResolvable;
  /**
  * interval (in seconds) between consecutive neighbor solicitation messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ns_interval AggregateLayer3Subinterface#ns_interval}
  */
  readonly nsInterval?: number;
  /**
  * time (in seconds) that the Reachable status for a neighbor can be maintained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#reachable_time AggregateLayer3Subinterface#reachable_time}
  */
  readonly reachableTime?: number;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dad_attempts: cdktf.numberToTerraform(struct!.dadAttempts),
    dns_server: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerToTerraform(struct!.dnsServer),
    dns_suffix: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixToTerraform(struct!.dnsSuffix),
    enable_dad: cdktf.booleanToTerraform(struct!.enableDad),
    enable_ndp_monitor: cdktf.booleanToTerraform(struct!.enableNdpMonitor),
    neighbor: cdktf.listMapper(aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighborToTerraform, false)(struct!.neighbor),
    ns_interval: cdktf.numberToTerraform(struct!.nsInterval),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscovery | cdktf.IResolvable): any {
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
      value: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerToHclTerraform(struct!.dnsServer),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServer",
    },
    dns_suffix: {
      value: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixToHclTerraform(struct!.dnsSuffix),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix",
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
      value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighborList",
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

export class AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscovery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscovery | cdktf.IResolvable | undefined) {
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
  private _dnsServer = new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServerOutputReference(this, "dns_server");
  public get dnsServer() {
    return this._dnsServer;
  }
  public putDnsServer(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsServer) {
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
  private _dnsSuffix = new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffixOutputReference(this, "dns_suffix");
  public get dnsSuffix() {
    return this._dnsSuffix;
  }
  public putDnsSuffix(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryDnsSuffix) {
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
  private _neighbor = new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryNeighbor[] | cdktf.IResolvable) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNo {
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNoToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNoToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYes {
  /**
  * Configure unique Prefix Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#pfx_pool_name AggregateLayer3Subinterface#pfx_pool_name}
  */
  readonly pfxPoolName?: string;
  /**
  * Hint DHCP Prefix Length (bits)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#prefix_len AggregateLayer3Subinterface#prefix_len}
  */
  readonly prefixLen?: number;
  /**
  * Send prefix length hint to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#prefix_len_hint AggregateLayer3Subinterface#prefix_len_hint}
  */
  readonly prefixLenHint?: boolean | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYesToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable): any {
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


export function aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYesToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#no AggregateLayer3Subinterface#no}
  */
  readonly no?: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#yes AggregateLayer3Subinterface#yes}
  */
  readonly yes?: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYes;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no: aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNoToTerraform(struct!.no),
    yes: aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYesToTerraform(struct!.yes),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no: {
      value: aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNoToHclTerraform(struct!.no),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNo",
    },
    yes: {
      value: aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYesToHclTerraform(struct!.yes),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable | undefined) {
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
  private _no = new AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }
  public putNo(value: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableNo) {
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
  private _yes = new AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
  public putYes(value: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableYes) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnable;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableToTerraform(struct!.enable),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableToHclTerraform(struct!.enable),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegation | cdktf.IResolvable | undefined) {
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
  private _enable = new AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnableOutputReference(this, "enable");
  public get enable() {
    return this._enable;
  }
  public putEnable(value: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationEnable) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNo {
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNoToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNoToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYes {
  /**
  * Request Non-Temporary Address Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#non_temp_addr AggregateLayer3Subinterface#non_temp_addr}
  */
  readonly nonTempAddr?: boolean | cdktf.IResolvable;
  /**
  * Request Temporary Address Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#temp_addr AggregateLayer3Subinterface#temp_addr}
  */
  readonly tempAddr?: boolean | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYesToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_temp_addr: cdktf.booleanToTerraform(struct!.nonTempAddr),
    temp_addr: cdktf.booleanToTerraform(struct!.tempAddr),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYesToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#no AggregateLayer3Subinterface#no}
  */
  readonly no?: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#yes AggregateLayer3Subinterface#yes}
  */
  readonly yes?: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYes;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no: aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNoToTerraform(struct!.no),
    yes: aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYesToTerraform(struct!.yes),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no: {
      value: aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNoToHclTerraform(struct!.no),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNo",
    },
    yes: {
      value: aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYesToHclTerraform(struct!.yes),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnable | cdktf.IResolvable | undefined) {
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
  private _no = new AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }
  public putNo(value: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableNo) {
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
  private _yes = new AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
  public putYes(value: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableYes) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClientV6Options {
  /**
  * Select DUID-LLT/DUID-LL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#duid_type AggregateLayer3Subinterface#duid_type}
  */
  readonly duidType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnable;
  /**
  * Enable Rapid Commit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#rapid_commit AggregateLayer3Subinterface#rapid_commit}
  */
  readonly rapidCommit?: boolean | cdktf.IResolvable;
  /**
  * Enable DHCPv6 Server Re-Configuration Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#support_srvr_reconfig AggregateLayer3Subinterface#support_srvr_reconfig}
  */
  readonly supportSrvrReconfig?: boolean | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientV6Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duid_type: cdktf.stringToTerraform(struct!.duidType),
    enable: aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableToTerraform(struct!.enable),
    rapid_commit: cdktf.booleanToTerraform(struct!.rapidCommit),
    support_srvr_reconfig: cdktf.booleanToTerraform(struct!.supportSrvrReconfig),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClientV6Options | cdktf.IResolvable): any {
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
      value: aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableToHclTerraform(struct!.enable),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnable",
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

export class AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClientV6Options | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClientV6Options | cdktf.IResolvable | undefined) {
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
  private _enable = new AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnableOutputReference(this, "enable");
  public get enable() {
    return this._enable;
  }
  public putEnable(value: AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsEnable) {
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
export interface AggregateLayer3SubinterfaceIpv6DhcpClient {
  /**
  * Accept Router Advertised Default Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#accept_ra_route AggregateLayer3Subinterface#accept_ra_route}
  */
  readonly acceptRaRoute?: boolean | cdktf.IResolvable;
  /**
  * Metric of the default route created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#default_route_metric AggregateLayer3Subinterface#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Enable DHCPv6 Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#neighbor_discovery AggregateLayer3Subinterface#neighbor_discovery}
  */
  readonly neighborDiscovery?: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscovery;
  /**
  * Select Low/Medium/High
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#preference AggregateLayer3Subinterface#preference}
  */
  readonly preference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#prefix_delegation AggregateLayer3Subinterface#prefix_delegation}
  */
  readonly prefixDelegation?: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#v6_options AggregateLayer3Subinterface#v6_options}
  */
  readonly v6Options?: AggregateLayer3SubinterfaceIpv6DhcpClientV6Options;
}

export function aggregateLayer3SubinterfaceIpv6DhcpClientToTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_ra_route: cdktf.booleanToTerraform(struct!.acceptRaRoute),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    enable: cdktf.booleanToTerraform(struct!.enable),
    neighbor_discovery: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryToTerraform(struct!.neighborDiscovery),
    preference: cdktf.stringToTerraform(struct!.preference),
    prefix_delegation: aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationToTerraform(struct!.prefixDelegation),
    v6_options: aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsToTerraform(struct!.v6Options),
  }
}


export function aggregateLayer3SubinterfaceIpv6DhcpClientToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6DhcpClient | cdktf.IResolvable): any {
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
      value: aggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryToHclTerraform(struct!.neighborDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscovery",
    },
    preference: {
      value: cdktf.stringToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_delegation: {
      value: aggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationToHclTerraform(struct!.prefixDelegation),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegation",
    },
    v6_options: {
      value: aggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsToHclTerraform(struct!.v6Options),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClientV6Options",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6DhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6DhcpClient | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6DhcpClient | cdktf.IResolvable | undefined) {
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
  private _neighborDiscovery = new AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscoveryOutputReference(this, "neighbor_discovery");
  public get neighborDiscovery() {
    return this._neighborDiscovery;
  }
  public putNeighborDiscovery(value: AggregateLayer3SubinterfaceIpv6DhcpClientNeighborDiscovery) {
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
  private _prefixDelegation = new AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegationOutputReference(this, "prefix_delegation");
  public get prefixDelegation() {
    return this._prefixDelegation;
  }
  public putPrefixDelegation(value: AggregateLayer3SubinterfaceIpv6DhcpClientPrefixDelegation) {
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
  private _v6Options = new AggregateLayer3SubinterfaceIpv6DhcpClientV6OptionsOutputReference(this, "v6_options");
  public get v6Options() {
    return this._v6Options;
  }
  public putV6Options(value: AggregateLayer3SubinterfaceIpv6DhcpClientV6Options) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertise {
  /**
  * Set the Auto Address Configuration Flag (A-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#auto_config_flag AggregateLayer3Subinterface#auto_config_flag}
  */
  readonly autoConfigFlag?: boolean | cdktf.IResolvable;
  /**
  * Enable advertising this prefix in router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set the On-Link Flag (L-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#onlink_flag AggregateLayer3Subinterface#onlink_flag}
  */
  readonly onlinkFlag?: boolean | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable): any {
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


export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic {
}

export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId {
  /**
  * Range [0-4095] must be unqiue for this prefix-pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#identifier AggregateLayer3Subinterface#identifier}
  */
  readonly identifier?: number;
}

export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.numberToTerraform(struct!.identifier),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dynamic AggregateLayer3Subinterface#dynamic}
  */
  readonly dynamic?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dynamic_id AggregateLayer3Subinterface#dynamic_id}
  */
  readonly dynamicId?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId;
}

export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicToTerraform(struct!.dynamic),
    dynamic_id: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToTerraform(struct!.dynamicId),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicToHclTerraform(struct!.dynamic),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic",
    },
    dynamic_id: {
      value: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToHclTerraform(struct!.dynamicId),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable | undefined) {
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
  private _dynamic = new AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicOutputReference(this, "dynamic");
  public get dynamic() {
    return this._dynamic;
  }
  public putDynamic(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamic) {
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
  private _dynamicId = new AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdOutputReference(this, "dynamic_id");
  public get dynamicId() {
    return this._dynamicId;
  }
  public putDynamicId(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeDynamicId) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGua {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#advertise AggregateLayer3Subinterface#advertise}
  */
  readonly advertise?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertise;
  /**
  * Enable on Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable_on_interface AggregateLayer3Subinterface#enable_on_interface}
  */
  readonly enableOnInterface?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#pool_type AggregateLayer3Subinterface#pool_type}
  */
  readonly poolType?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolType;
  /**
  * Prefix-Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#prefix_pool AggregateLayer3Subinterface#prefix_pool}
  */
  readonly prefixPool?: string;
}

export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGua | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseToTerraform(struct!.advertise),
    enable_on_interface: cdktf.booleanToTerraform(struct!.enableOnInterface),
    pool_type: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeToTerraform(struct!.poolType),
    prefix_pool: cdktf.stringToTerraform(struct!.prefixPool),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGua | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertise",
    },
    enable_on_interface: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool_type: {
      value: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeToHclTerraform(struct!.poolType),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolType",
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

export class AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGua | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGua | cdktf.IResolvable | undefined) {
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
  private _advertise = new AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaAdvertise) {
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
  private _poolType = new AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolTypeOutputReference(this, "pool_type");
  public get poolType() {
    return this._poolType;
  }
  public putPoolType(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaPoolType) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertise {
  /**
  * Set the Auto Address Configuration Flag (A-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#auto_config_flag AggregateLayer3Subinterface#auto_config_flag}
  */
  readonly autoConfigFlag?: boolean | cdktf.IResolvable;
  /**
  * enable advertising this prefix in router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set the On-Link Flag (L-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#onlink_flag AggregateLayer3Subinterface#onlink_flag}
  */
  readonly onlinkFlag?: boolean | cdktf.IResolvable;
  /**
  * Preferred Lifetime (in seconds) of the prefix advertised in Router advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#preferred_lifetime AggregateLayer3Subinterface#preferred_lifetime}
  */
  readonly preferredLifetime?: string;
  /**
  * Valid Lifetime (in seconds) of the prefix advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#valid_lifetime AggregateLayer3Subinterface#valid_lifetime}
  */
  readonly validLifetime?: string;
}

export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable): any {
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


export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUla {
  /**
  * Configure ULA (Unique Local Address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#address AggregateLayer3Subinterface#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#advertise AggregateLayer3Subinterface#advertise}
  */
  readonly advertise?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertise;
  /**
  * Anycast Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#anycast AggregateLayer3Subinterface#anycast}
  */
  readonly anycast?: boolean | cdktf.IResolvable;
  /**
  * Configure this address on Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable_on_interface AggregateLayer3Subinterface#enable_on_interface}
  */
  readonly enableOnInterface?: boolean | cdktf.IResolvable;
  /**
  * Use this as prefix to form full address with interface id/EUI-64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#prefix AggregateLayer3Subinterface#prefix}
  */
  readonly prefix?: boolean | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    advertise: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseToTerraform(struct!.advertise),
    anycast: cdktf.booleanToTerraform(struct!.anycast),
    enable_on_interface: cdktf.booleanToTerraform(struct!.enableOnInterface),
    prefix: cdktf.booleanToTerraform(struct!.prefix),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUla | cdktf.IResolvable): any {
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
      value: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertise",
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

export class AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUla | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUla | cdktf.IResolvable | undefined) {
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
  private _advertise = new AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaAdvertise) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedAssignAddrType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#gua AggregateLayer3Subinterface#gua}
  */
  readonly gua?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGua;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ula AggregateLayer3Subinterface#ula}
  */
  readonly ula?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUla;
}

export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gua: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaToTerraform(struct!.gua),
    ula: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaToTerraform(struct!.ula),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gua: {
      value: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaToHclTerraform(struct!.gua),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGua",
    },
    ula: {
      value: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaToHclTerraform(struct!.ula),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUla",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedAssignAddrType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrType | cdktf.IResolvable | undefined) {
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
  private _gua = new AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGuaOutputReference(this, "gua");
  public get gua() {
    return this._gua;
  }
  public putGua(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeGua) {
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
  private _ula = new AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUlaOutputReference(this, "ula");
  public get ula() {
    return this._ula;
  }
  public putUla(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeUla) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedAssignAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#type AggregateLayer3Subinterface#type}
  */
  readonly type?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrType;
}

export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeToTerraform(struct!.type),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedAssignAddrToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddr | cdktf.IResolvable): any {
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
      value: aggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedAssignAddrType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6InheritedAssignAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedAssignAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddr | cdktf.IResolvable | undefined) {
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
  private _type = new AggregateLayer3SubinterfaceIpv6InheritedAssignAddrTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddrType) {
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

export class AggregateLayer3SubinterfaceIpv6InheritedAssignAddrList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceIpv6InheritedAssignAddr[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceIpv6InheritedAssignAddrOutputReference {
    return new AggregateLayer3SubinterfaceIpv6InheritedAssignAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 {
  /**
  * Prefix-Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#prefix_pool AggregateLayer3Subinterface#prefix_pool}
  */
  readonly prefixPool?: string;
}

export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_pool: cdktf.stringToTerraform(struct!.prefixPool),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer {
  /**
  * (4-3600) Lifetime in Seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#lifetime AggregateLayer3Subinterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
}

export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined) {
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

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerOutputReference {
    return new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#server AggregateLayer3Subinterface#server}
  */
  readonly server?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktf.listMapper(aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerToTerraform, false)(struct!.server),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerToHclTerraform, false)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined) {
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
  private _server = new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dhcpv6 AggregateLayer3Subinterface#dhcpv6}
  */
  readonly dhcpv6?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#manual AggregateLayer3Subinterface#manual}
  */
  readonly manual?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual;
}

export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualToTerraform(struct!.manual),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6",
    },
    manual: {
      value: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined) {
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
  private _dhcpv6 = new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6) {
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
  private _manual = new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceManual) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#source AggregateLayer3Subinterface#source}
  */
  readonly source?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSource;
}

export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceToTerraform(struct!.source),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
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
      value: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined) {
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
  private _source = new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerSource) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 {
  /**
  * Prefix-Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#prefix_pool AggregateLayer3Subinterface#prefix_pool}
  */
  readonly prefixPool?: string;
}

export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_pool: cdktf.stringToTerraform(struct!.prefixPool),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#lifetime AggregateLayer3Subinterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
}

export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined) {
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

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference {
    return new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#suffix AggregateLayer3Subinterface#suffix}
  */
  readonly suffix?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suffix: cdktf.listMapper(aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform, false)(struct!.suffix),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suffix: {
      value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform, false)(struct!.suffix),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined) {
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
  private _suffix = new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixList(this, "suffix", false);
  public get suffix() {
    return this._suffix;
  }
  public putSuffix(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dhcpv6 AggregateLayer3Subinterface#dhcpv6}
  */
  readonly dhcpv6?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#manual AggregateLayer3Subinterface#manual}
  */
  readonly manual?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual;
}

export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct!.manual),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6",
    },
    manual: {
      value: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined) {
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
  private _dhcpv6 = new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6) {
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
  private _manual = new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceManual) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#source AggregateLayer3Subinterface#source}
  */
  readonly source?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource;
}

export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceToTerraform(struct!.source),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
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
      value: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined) {
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
  private _source = new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixSource) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighbor {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#hw_address AggregateLayer3Subinterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
}

export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighborToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighborToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined) {
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

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighborList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighbor[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighborOutputReference {
    return new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * check consistency of RA messages from other routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable_consistency_check AggregateLayer3Subinterface#enable_consistency_check}
  */
  readonly enableConsistencyCheck?: boolean | cdktf.IResolvable;
  /**
  * Current Hop Limit advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#hop_limit AggregateLayer3Subinterface#hop_limit}
  */
  readonly hopLimit?: string;
  /**
  * Router Lifetime (in seconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#lifetime AggregateLayer3Subinterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * value of MTU option in Router Advertisement messages, upto 9216 in Jumbo-Frame mode, up to 1500 otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#link_mtu AggregateLayer3Subinterface#link_mtu}
  */
  readonly linkMtu?: string;
  /**
  * Set the Managed Configuration Flag (M-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#managed_flag AggregateLayer3Subinterface#managed_flag}
  */
  readonly managedFlag?: boolean | cdktf.IResolvable;
  /**
  * Maximum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#max_interval AggregateLayer3Subinterface#max_interval}
  */
  readonly maxInterval?: number;
  /**
  * Minimum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#min_interval AggregateLayer3Subinterface#min_interval}
  */
  readonly minInterval?: number;
  /**
  * Set the Other Stateful Configuration Flag (O-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#other_flag AggregateLayer3Subinterface#other_flag}
  */
  readonly otherFlag?: boolean | cdktf.IResolvable;
  /**
  * Reachable Time (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#reachable_time AggregateLayer3Subinterface#reachable_time}
  */
  readonly reachableTime?: string;
  /**
  * Retransmission Timer (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#retransmission_timer AggregateLayer3Subinterface#retransmission_timer}
  */
  readonly retransmissionTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#router_preference AggregateLayer3Subinterface#router_preference}
  */
  readonly routerPreference?: string;
}

export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
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


export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscovery {
  /**
  * Number of consecutive neighbor solicitation messages sent for duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dad_attempts AggregateLayer3Subinterface#dad_attempts}
  */
  readonly dadAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dns_server AggregateLayer3Subinterface#dns_server}
  */
  readonly dnsServer?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dns_suffix AggregateLayer3Subinterface#dns_suffix}
  */
  readonly dnsSuffix?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffix;
  /**
  * Enable Duplicate Address Detection (DAD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable_dad AggregateLayer3Subinterface#enable_dad}
  */
  readonly enableDad?: boolean | cdktf.IResolvable;
  /**
  * Enable NDP Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable_ndp_monitor AggregateLayer3Subinterface#enable_ndp_monitor}
  */
  readonly enableNdpMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#neighbor AggregateLayer3Subinterface#neighbor}
  */
  readonly neighbor?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighbor[] | cdktf.IResolvable;
  /**
  * Interval (in seconds) between consecutive neighbor solicitation messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ns_interval AggregateLayer3Subinterface#ns_interval}
  */
  readonly nsInterval?: number;
  /**
  * Time (in seconds) that the Reachable status for a neighbor can be maintained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#reachable_time AggregateLayer3Subinterface#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#router_advertisement AggregateLayer3Subinterface#router_advertisement}
  */
  readonly routerAdvertisement?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement;
}

export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryToTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dad_attempts: cdktf.numberToTerraform(struct!.dadAttempts),
    dns_server: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerToTerraform(struct!.dnsServer),
    dns_suffix: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixToTerraform(struct!.dnsSuffix),
    enable_dad: cdktf.booleanToTerraform(struct!.enableDad),
    enable_ndp_monitor: cdktf.booleanToTerraform(struct!.enableNdpMonitor),
    neighbor: cdktf.listMapper(aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighborToTerraform, false)(struct!.neighbor),
    ns_interval: cdktf.numberToTerraform(struct!.nsInterval),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    router_advertisement: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementToTerraform(struct!.routerAdvertisement),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscovery | cdktf.IResolvable): any {
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
      value: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerToHclTerraform(struct!.dnsServer),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServer",
    },
    dns_suffix: {
      value: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixToHclTerraform(struct!.dnsSuffix),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffix",
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
      value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighborList",
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
      value: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementToHclTerraform(struct!.routerAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscovery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscovery | cdktf.IResolvable | undefined) {
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
  private _dnsServer = new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServerOutputReference(this, "dns_server");
  public get dnsServer() {
    return this._dnsServer;
  }
  public putDnsServer(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsServer) {
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
  private _dnsSuffix = new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffixOutputReference(this, "dns_suffix");
  public get dnsSuffix() {
    return this._dnsSuffix;
  }
  public putDnsSuffix(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryDnsSuffix) {
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
  private _neighbor = new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryNeighbor[] | cdktf.IResolvable) {
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
  private _routerAdvertisement = new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisementOutputReference(this, "router_advertisement");
  public get routerAdvertisement() {
    return this._routerAdvertisement;
  }
  public putRouterAdvertisement(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryRouterAdvertisement) {
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
export interface AggregateLayer3SubinterfaceIpv6Inherited {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#assign_addr AggregateLayer3Subinterface#assign_addr}
  */
  readonly assignAddr?: AggregateLayer3SubinterfaceIpv6InheritedAssignAddr[] | cdktf.IResolvable;
  /**
  * Enable Inherited Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#neighbor_discovery AggregateLayer3Subinterface#neighbor_discovery}
  */
  readonly neighborDiscovery?: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscovery;
}

export function aggregateLayer3SubinterfaceIpv6InheritedToTerraform(struct?: AggregateLayer3SubinterfaceIpv6Inherited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_addr: cdktf.listMapper(aggregateLayer3SubinterfaceIpv6InheritedAssignAddrToTerraform, false)(struct!.assignAddr),
    enable: cdktf.booleanToTerraform(struct!.enable),
    neighbor_discovery: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryToTerraform(struct!.neighborDiscovery),
  }
}


export function aggregateLayer3SubinterfaceIpv6InheritedToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6Inherited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_addr: {
      value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceIpv6InheritedAssignAddrToHclTerraform, false)(struct!.assignAddr),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedAssignAddrList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neighbor_discovery: {
      value: aggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryToHclTerraform(struct!.neighborDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscovery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6InheritedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6Inherited | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6Inherited | cdktf.IResolvable | undefined) {
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
  private _assignAddr = new AggregateLayer3SubinterfaceIpv6InheritedAssignAddrList(this, "assign_addr", false);
  public get assignAddr() {
    return this._assignAddr;
  }
  public putAssignAddr(value: AggregateLayer3SubinterfaceIpv6InheritedAssignAddr[] | cdktf.IResolvable) {
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
  private _neighborDiscovery = new AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscoveryOutputReference(this, "neighbor_discovery");
  public get neighborDiscovery() {
    return this._neighborDiscovery;
  }
  public putNeighborDiscovery(value: AggregateLayer3SubinterfaceIpv6InheritedNeighborDiscovery) {
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
export interface AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighbor {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#hw_address AggregateLayer3Subinterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
}

export function aggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighborToTerraform(struct?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighborToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighbor | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighbor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighbor | cdktf.IResolvable | undefined) {
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

export class AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighborList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighbor[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighborOutputReference {
    return new AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#lifetime AggregateLayer3Subinterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
}

export function aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToTerraform(struct?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable | undefined) {
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

export class AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerOutputReference {
    return new AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#lifetime AggregateLayer3Subinterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
}

export function aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToTerraform(struct?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable | undefined) {
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

export class AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixOutputReference {
    return new AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#server AggregateLayer3Subinterface#server}
  */
  readonly server?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#suffix AggregateLayer3Subinterface#suffix}
  */
  readonly suffix?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix[] | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportToTerraform(struct?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    server: cdktf.listMapper(aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToTerraform, false)(struct!.server),
    suffix: cdktf.listMapper(aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToTerraform, false)(struct!.suffix),
  }
}


export function aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToHclTerraform, false)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerList",
    },
    suffix: {
      value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToHclTerraform, false)(struct!.suffix),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable | undefined) {
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
  private _server = new AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportServer[] | cdktf.IResolvable) {
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
  private _suffix = new AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixList(this, "suffix", false);
  public get suffix() {
    return this._suffix;
  }
  public putSuffix(value: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix[] | cdktf.IResolvable) {
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
export interface AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dns_support AggregateLayer3Subinterface#dns_support}
  */
  readonly dnsSupport?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * check consistency of RA messages from other routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable_consistency_check AggregateLayer3Subinterface#enable_consistency_check}
  */
  readonly enableConsistencyCheck?: boolean | cdktf.IResolvable;
  /**
  * Current Hop Limit advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#hop_limit AggregateLayer3Subinterface#hop_limit}
  */
  readonly hopLimit?: string;
  /**
  * Router Lifetime (in seconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#lifetime AggregateLayer3Subinterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * value of MTU option in Router Advertisement messages, upto 9216 in Jumbo-Frame mode, up to 1500 otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#link_mtu AggregateLayer3Subinterface#link_mtu}
  */
  readonly linkMtu?: string;
  /**
  * Set the Managed Configuration Flag (M-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#managed_flag AggregateLayer3Subinterface#managed_flag}
  */
  readonly managedFlag?: boolean | cdktf.IResolvable;
  /**
  * Maximum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#max_interval AggregateLayer3Subinterface#max_interval}
  */
  readonly maxInterval?: number;
  /**
  * Minimum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#min_interval AggregateLayer3Subinterface#min_interval}
  */
  readonly minInterval?: number;
  /**
  * Set the Other Stateful Configuration Flag (O-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#other_flag AggregateLayer3Subinterface#other_flag}
  */
  readonly otherFlag?: boolean | cdktf.IResolvable;
  /**
  * Reachable Time (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#reachable_time AggregateLayer3Subinterface#reachable_time}
  */
  readonly reachableTime?: string;
  /**
  * Retransmission Timer (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#retransmission_timer AggregateLayer3Subinterface#retransmission_timer}
  */
  readonly retransmissionTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#router_preference AggregateLayer3Subinterface#router_preference}
  */
  readonly routerPreference?: string;
}

export function aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementToTerraform(struct?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_support: aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportToTerraform(struct!.dnsSupport),
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


export function aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_support: {
      value: aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportToHclTerraform(struct!.dnsSupport),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport",
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

export class AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined) {
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
  private _dnsSupport = new AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupportOutputReference(this, "dns_support");
  public get dnsSupport() {
    return this._dnsSupport;
  }
  public putDnsSupport(value: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementDnsSupport) {
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
export interface AggregateLayer3SubinterfaceIpv6NeighborDiscovery {
  /**
  * number of consecutive neighbor solicitation messages sent for duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dad_attempts AggregateLayer3Subinterface#dad_attempts}
  */
  readonly dadAttempts?: number;
  /**
  * enable duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable_dad AggregateLayer3Subinterface#enable_dad}
  */
  readonly enableDad?: boolean | cdktf.IResolvable;
  /**
  * enable ndp monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable_ndp_monitor AggregateLayer3Subinterface#enable_ndp_monitor}
  */
  readonly enableNdpMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#neighbor AggregateLayer3Subinterface#neighbor}
  */
  readonly neighbor?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighbor[] | cdktf.IResolvable;
  /**
  * interval (in seconds) between consecutive neighbor solicitation messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ns_interval AggregateLayer3Subinterface#ns_interval}
  */
  readonly nsInterval?: number;
  /**
  * time (in seconds) that the Reachable status for a neighbor can be maintained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#reachable_time AggregateLayer3Subinterface#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#router_advertisement AggregateLayer3Subinterface#router_advertisement}
  */
  readonly routerAdvertisement?: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisement;
}

export function aggregateLayer3SubinterfaceIpv6NeighborDiscoveryToTerraform(struct?: AggregateLayer3SubinterfaceIpv6NeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dad_attempts: cdktf.numberToTerraform(struct!.dadAttempts),
    enable_dad: cdktf.booleanToTerraform(struct!.enableDad),
    enable_ndp_monitor: cdktf.booleanToTerraform(struct!.enableNdpMonitor),
    neighbor: cdktf.listMapper(aggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighborToTerraform, false)(struct!.neighbor),
    ns_interval: cdktf.numberToTerraform(struct!.nsInterval),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    router_advertisement: aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementToTerraform(struct!.routerAdvertisement),
  }
}


export function aggregateLayer3SubinterfaceIpv6NeighborDiscoveryToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6NeighborDiscovery | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighborList",
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
      value: aggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementToHclTerraform(struct!.routerAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6NeighborDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6NeighborDiscovery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6NeighborDiscovery | cdktf.IResolvable | undefined) {
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
  private _neighbor = new AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryNeighbor[] | cdktf.IResolvable) {
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
  private _routerAdvertisement = new AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisementOutputReference(this, "router_advertisement");
  public get routerAdvertisement() {
    return this._routerAdvertisement;
  }
  public putRouterAdvertisement(value: AggregateLayer3SubinterfaceIpv6NeighborDiscoveryRouterAdvertisement) {
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
export interface AggregateLayer3SubinterfaceIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#address AggregateLayer3Subinterface#address}
  */
  readonly address?: AggregateLayer3SubinterfaceIpv6Address[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#dhcp_client AggregateLayer3Subinterface#dhcp_client}
  */
  readonly dhcpClient?: AggregateLayer3SubinterfaceIpv6DhcpClient;
  /**
  * Enable IPv6 on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enabled AggregateLayer3Subinterface#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#inherited AggregateLayer3Subinterface#inherited}
  */
  readonly inherited?: AggregateLayer3SubinterfaceIpv6Inherited;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#interface_id AggregateLayer3Subinterface#interface_id}
  */
  readonly interfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#neighbor_discovery AggregateLayer3Subinterface#neighbor_discovery}
  */
  readonly neighborDiscovery?: AggregateLayer3SubinterfaceIpv6NeighborDiscovery;
}

export function aggregateLayer3SubinterfaceIpv6ToTerraform(struct?: AggregateLayer3SubinterfaceIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(aggregateLayer3SubinterfaceIpv6AddressToTerraform, false)(struct!.address),
    dhcp_client: aggregateLayer3SubinterfaceIpv6DhcpClientToTerraform(struct!.dhcpClient),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    inherited: aggregateLayer3SubinterfaceIpv6InheritedToTerraform(struct!.inherited),
    interface_id: cdktf.stringToTerraform(struct!.interfaceId),
    neighbor_discovery: aggregateLayer3SubinterfaceIpv6NeighborDiscoveryToTerraform(struct!.neighborDiscovery),
  }
}


export function aggregateLayer3SubinterfaceIpv6ToHclTerraform(struct?: AggregateLayer3SubinterfaceIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceIpv6AddressToHclTerraform, false)(struct!.address),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateLayer3SubinterfaceIpv6AddressList",
    },
    dhcp_client: {
      value: aggregateLayer3SubinterfaceIpv6DhcpClientToHclTerraform(struct!.dhcpClient),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6DhcpClient",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inherited: {
      value: aggregateLayer3SubinterfaceIpv6InheritedToHclTerraform(struct!.inherited),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6Inherited",
    },
    interface_id: {
      value: cdktf.stringToHclTerraform(struct!.interfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_discovery: {
      value: aggregateLayer3SubinterfaceIpv6NeighborDiscoveryToHclTerraform(struct!.neighborDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceIpv6NeighborDiscovery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceIpv6 | cdktf.IResolvable | undefined) {
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
  private _address = new AggregateLayer3SubinterfaceIpv6AddressList(this, "address", false);
  public get address() {
    return this._address;
  }
  public putAddress(value: AggregateLayer3SubinterfaceIpv6Address[] | cdktf.IResolvable) {
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
  private _dhcpClient = new AggregateLayer3SubinterfaceIpv6DhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }
  public putDhcpClient(value: AggregateLayer3SubinterfaceIpv6DhcpClient) {
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
  private _inherited = new AggregateLayer3SubinterfaceIpv6InheritedOutputReference(this, "inherited");
  public get inherited() {
    return this._inherited;
  }
  public putInherited(value: AggregateLayer3SubinterfaceIpv6Inherited) {
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
  private _neighborDiscovery = new AggregateLayer3SubinterfaceIpv6NeighborDiscoveryOutputReference(this, "neighbor_discovery");
  public get neighborDiscovery() {
    return this._neighborDiscovery;
  }
  public putNeighborDiscovery(value: AggregateLayer3SubinterfaceIpv6NeighborDiscovery) {
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
export interface AggregateLayer3SubinterfaceLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ngfw_device AggregateLayer3Subinterface#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function aggregateLayer3SubinterfaceLocationNgfwToTerraform(struct?: AggregateLayer3SubinterfaceLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function aggregateLayer3SubinterfaceLocationNgfwToHclTerraform(struct?: AggregateLayer3SubinterfaceLocationNgfw | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceLocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceLocationNgfw | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceLocationShared {
}

export function aggregateLayer3SubinterfaceLocationSharedToTerraform(struct?: AggregateLayer3SubinterfaceLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aggregateLayer3SubinterfaceLocationSharedToHclTerraform(struct?: AggregateLayer3SubinterfaceLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AggregateLayer3SubinterfaceLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateLayer3SubinterfaceLocationShared | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ngfw_device AggregateLayer3Subinterface#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#panorama_device AggregateLayer3Subinterface#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function aggregateLayer3SubinterfaceLocationTemplateToTerraform(struct?: AggregateLayer3SubinterfaceLocationTemplate | cdktf.IResolvable): any {
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


export function aggregateLayer3SubinterfaceLocationTemplateToHclTerraform(struct?: AggregateLayer3SubinterfaceLocationTemplate | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ngfw_device AggregateLayer3Subinterface#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#panorama_device AggregateLayer3Subinterface#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function aggregateLayer3SubinterfaceLocationTemplateStackToTerraform(struct?: AggregateLayer3SubinterfaceLocationTemplateStack | cdktf.IResolvable): any {
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


export function aggregateLayer3SubinterfaceLocationTemplateStackToHclTerraform(struct?: AggregateLayer3SubinterfaceLocationTemplateStack | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ngfw AggregateLayer3Subinterface#ngfw}
  */
  readonly ngfw?: AggregateLayer3SubinterfaceLocationNgfw;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#shared AggregateLayer3Subinterface#shared}
  */
  readonly shared?: AggregateLayer3SubinterfaceLocationShared;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#template AggregateLayer3Subinterface#template}
  */
  readonly template?: AggregateLayer3SubinterfaceLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#template_stack AggregateLayer3Subinterface#template_stack}
  */
  readonly templateStack?: AggregateLayer3SubinterfaceLocationTemplateStack;
}

export function aggregateLayer3SubinterfaceLocationToTerraform(struct?: AggregateLayer3SubinterfaceLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: aggregateLayer3SubinterfaceLocationNgfwToTerraform(struct!.ngfw),
    shared: aggregateLayer3SubinterfaceLocationSharedToTerraform(struct!.shared),
    template: aggregateLayer3SubinterfaceLocationTemplateToTerraform(struct!.template),
    template_stack: aggregateLayer3SubinterfaceLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function aggregateLayer3SubinterfaceLocationToHclTerraform(struct?: AggregateLayer3SubinterfaceLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: aggregateLayer3SubinterfaceLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceLocationNgfw",
    },
    shared: {
      value: aggregateLayer3SubinterfaceLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceLocationShared",
    },
    template: {
      value: aggregateLayer3SubinterfaceLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceLocationTemplate",
    },
    template_stack: {
      value: aggregateLayer3SubinterfaceLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceLocation | cdktf.IResolvable | undefined) {
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
  private _ngfw = new AggregateLayer3SubinterfaceLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: AggregateLayer3SubinterfaceLocationNgfw) {
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
  private _shared = new AggregateLayer3SubinterfaceLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: AggregateLayer3SubinterfaceLocationShared) {
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
  private _template = new AggregateLayer3SubinterfaceLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: AggregateLayer3SubinterfaceLocationTemplate) {
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
  private _templateStack = new AggregateLayer3SubinterfaceLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: AggregateLayer3SubinterfaceLocationTemplateStack) {
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
export interface AggregateLayer3SubinterfaceNdpProxyAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#name AggregateLayer3Subinterface#name}
  */
  readonly name: string;
  /**
  * put the prefix or address on a block list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#negate AggregateLayer3Subinterface#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceNdpProxyAddressToTerraform(struct?: AggregateLayer3SubinterfaceNdpProxyAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
  }
}


export function aggregateLayer3SubinterfaceNdpProxyAddressToHclTerraform(struct?: AggregateLayer3SubinterfaceNdpProxyAddress | cdktf.IResolvable): any {
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

export class AggregateLayer3SubinterfaceNdpProxyAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateLayer3SubinterfaceNdpProxyAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceNdpProxyAddress | cdktf.IResolvable | undefined) {
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

export class AggregateLayer3SubinterfaceNdpProxyAddressList extends cdktf.ComplexList {
  public internalValue? : AggregateLayer3SubinterfaceNdpProxyAddress[] | cdktf.IResolvable

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
  public get(index: number): AggregateLayer3SubinterfaceNdpProxyAddressOutputReference {
    return new AggregateLayer3SubinterfaceNdpProxyAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateLayer3SubinterfaceNdpProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#address AggregateLayer3Subinterface#address}
  */
  readonly address?: AggregateLayer3SubinterfaceNdpProxyAddress[] | cdktf.IResolvable;
  /**
  * Enable proxy NDP on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enabled AggregateLayer3Subinterface#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aggregateLayer3SubinterfaceNdpProxyToTerraform(struct?: AggregateLayer3SubinterfaceNdpProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(aggregateLayer3SubinterfaceNdpProxyAddressToTerraform, false)(struct!.address),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aggregateLayer3SubinterfaceNdpProxyToHclTerraform(struct?: AggregateLayer3SubinterfaceNdpProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceNdpProxyAddressToHclTerraform, false)(struct!.address),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateLayer3SubinterfaceNdpProxyAddressList",
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

export class AggregateLayer3SubinterfaceNdpProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceNdpProxy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateLayer3SubinterfaceNdpProxy | cdktf.IResolvable | undefined) {
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
  private _address = new AggregateLayer3SubinterfaceNdpProxyAddressList(this, "address", false);
  public get address() {
    return this._address;
  }
  public putAddress(value: AggregateLayer3SubinterfaceNdpProxyAddress[] | cdktf.IResolvable) {
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
export interface AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdns {
}

export function aggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdnsToTerraform(struct?: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdnsToHclTerraform(struct?: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdns | cdktf.IResolvable | undefined) {
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
export interface AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIp {
  /**
  * Upstream NAT address FQDN name configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#fqdn AggregateLayer3Subinterface#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Upstream NAT IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ip_address AggregateLayer3Subinterface#ip_address}
  */
  readonly ipAddress?: string;
}

export function aggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function aggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ipAddress = value.ipAddress;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#ddns AggregateLayer3Subinterface#ddns}
  */
  readonly ddns?: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdns;
  /**
  * Enable upstream NAT IP config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#static_ip AggregateLayer3Subinterface#static_ip}
  */
  readonly staticIp?: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIp;
}

export function aggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatToTerraform(struct?: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddns: aggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdnsToTerraform(struct!.ddns),
    enable: cdktf.booleanToTerraform(struct!.enable),
    static_ip: aggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct!.staticIp),
  }
}


export function aggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatToHclTerraform(struct?: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddns: {
      value: aggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdnsToHclTerraform(struct!.ddns),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdns",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ip: {
      value: aggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddns = this._ddns?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddns.internalValue = undefined;
      this._enable = undefined;
      this._staticIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddns.internalValue = value.ddns;
      this._enable = value.enable;
      this._staticIp.internalValue = value.staticIp;
    }
  }

  // ddns - computed: false, optional: true, required: false
  private _ddns = new AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdnsOutputReference(this, "ddns");
  public get ddns() {
    return this._ddns;
  }
  public putDdns(value: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatDdns) {
    this._ddns.internalValue = value;
  }
  public resetDdns() {
    this._ddns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsInput() {
    return this._ddns.internalValue;
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

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }
}
export interface AggregateLayer3SubinterfaceSdwanLinkSettings {
  /**
  * Enable sdwan on this ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#enable AggregateLayer3Subinterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Sdwan link characteristics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#sdwan_interface_profile AggregateLayer3Subinterface#sdwan_interface_profile}
  */
  readonly sdwanInterfaceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#upstream_nat AggregateLayer3Subinterface#upstream_nat}
  */
  readonly upstreamNat?: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNat;
}

export function aggregateLayer3SubinterfaceSdwanLinkSettingsToTerraform(struct?: AggregateLayer3SubinterfaceSdwanLinkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    sdwan_interface_profile: cdktf.stringToTerraform(struct!.sdwanInterfaceProfile),
    upstream_nat: aggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatToTerraform(struct!.upstreamNat),
  }
}


export function aggregateLayer3SubinterfaceSdwanLinkSettingsToHclTerraform(struct?: AggregateLayer3SubinterfaceSdwanLinkSettings | cdktf.IResolvable): any {
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
    sdwan_interface_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanInterfaceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_nat: {
      value: aggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatToHclTerraform(struct!.upstreamNat),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateLayer3SubinterfaceSdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateLayer3SubinterfaceSdwanLinkSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._sdwanInterfaceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanInterfaceProfile = this._sdwanInterfaceProfile;
    }
    if (this._upstreamNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamNat = this._upstreamNat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateLayer3SubinterfaceSdwanLinkSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._sdwanInterfaceProfile = undefined;
      this._upstreamNat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._sdwanInterfaceProfile = value.sdwanInterfaceProfile;
      this._upstreamNat.internalValue = value.upstreamNat;
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

  // sdwan_interface_profile - computed: false, optional: true, required: false
  private _sdwanInterfaceProfile?: string; 
  public get sdwanInterfaceProfile() {
    return this.getStringAttribute('sdwan_interface_profile');
  }
  public set sdwanInterfaceProfile(value: string) {
    this._sdwanInterfaceProfile = value;
  }
  public resetSdwanInterfaceProfile() {
    this._sdwanInterfaceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInterfaceProfileInput() {
    return this._sdwanInterfaceProfile;
  }

  // upstream_nat - computed: false, optional: true, required: false
  private _upstreamNat = new AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
  public putUpstreamNat(value: AggregateLayer3SubinterfaceSdwanLinkSettingsUpstreamNat) {
    this._upstreamNat.internalValue = value;
  }
  public resetUpstreamNat() {
    this._upstreamNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamNatInput() {
    return this._upstreamNat.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface panos_aggregate_layer3_subinterface}
*/
export class AggregateLayer3Subinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_aggregate_layer3_subinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AggregateLayer3Subinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AggregateLayer3Subinterface to import
  * @param importFromId The id of the existing AggregateLayer3Subinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AggregateLayer3Subinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_aggregate_layer3_subinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/aggregate_layer3_subinterface panos_aggregate_layer3_subinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AggregateLayer3SubinterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: AggregateLayer3SubinterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_aggregate_layer3_subinterface',
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
    this._decryptForward = config.decryptForward;
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
    this._parent = config.parent;
    this._sdwanLinkSettings.internalValue = config.sdwanLinkSettings;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjust_tcp_mss - computed: false, optional: true, required: false
  private _adjustTcpMss = new AggregateLayer3SubinterfaceAdjustTcpMssOutputReference(this, "adjust_tcp_mss");
  public get adjustTcpMss() {
    return this._adjustTcpMss;
  }
  public putAdjustTcpMss(value: AggregateLayer3SubinterfaceAdjustTcpMss) {
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
  private _arp = new AggregateLayer3SubinterfaceArpList(this, "arp", false);
  public get arp() {
    return this._arp;
  }
  public putArp(value: AggregateLayer3SubinterfaceArp[] | cdktf.IResolvable) {
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
  private _bonjour = new AggregateLayer3SubinterfaceBonjourOutputReference(this, "bonjour");
  public get bonjour() {
    return this._bonjour;
  }
  public putBonjour(value: AggregateLayer3SubinterfaceBonjour) {
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
  private _ddnsConfig = new AggregateLayer3SubinterfaceDdnsConfigOutputReference(this, "ddns_config");
  public get ddnsConfig() {
    return this._ddnsConfig;
  }
  public putDdnsConfig(value: AggregateLayer3SubinterfaceDdnsConfig) {
    this._ddnsConfig.internalValue = value;
  }
  public resetDdnsConfig() {
    this._ddnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConfigInput() {
    return this._ddnsConfig.internalValue;
  }

  // decrypt_forward - computed: false, optional: true, required: false
  private _decryptForward?: boolean | cdktf.IResolvable; 
  public get decryptForward() {
    return this.getBooleanAttribute('decrypt_forward');
  }
  public set decryptForward(value: boolean | cdktf.IResolvable) {
    this._decryptForward = value;
  }
  public resetDecryptForward() {
    this._decryptForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptForwardInput() {
    return this._decryptForward;
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
  private _dhcpClient = new AggregateLayer3SubinterfaceDhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }
  public putDhcpClient(value: AggregateLayer3SubinterfaceDhcpClient) {
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
  private _ip = new AggregateLayer3SubinterfaceIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: AggregateLayer3SubinterfaceIp[] | cdktf.IResolvable) {
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
  private _ipv6 = new AggregateLayer3SubinterfaceIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AggregateLayer3SubinterfaceIpv6) {
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
  private _location = new AggregateLayer3SubinterfaceLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: AggregateLayer3SubinterfaceLocation) {
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
  private _ndpProxy = new AggregateLayer3SubinterfaceNdpProxyOutputReference(this, "ndp_proxy");
  public get ndpProxy() {
    return this._ndpProxy;
  }
  public putNdpProxy(value: AggregateLayer3SubinterfaceNdpProxy) {
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

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // sdwan_link_settings - computed: false, optional: true, required: false
  private _sdwanLinkSettings = new AggregateLayer3SubinterfaceSdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
  public putSdwanLinkSettings(value: AggregateLayer3SubinterfaceSdwanLinkSettings) {
    this._sdwanLinkSettings.internalValue = value;
  }
  public resetSdwanLinkSettings() {
    this._sdwanLinkSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanLinkSettingsInput() {
    return this._sdwanLinkSettings.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjust_tcp_mss: aggregateLayer3SubinterfaceAdjustTcpMssToTerraform(this._adjustTcpMss.internalValue),
      arp: cdktf.listMapper(aggregateLayer3SubinterfaceArpToTerraform, false)(this._arp.internalValue),
      bonjour: aggregateLayer3SubinterfaceBonjourToTerraform(this._bonjour.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      ddns_config: aggregateLayer3SubinterfaceDdnsConfigToTerraform(this._ddnsConfig.internalValue),
      decrypt_forward: cdktf.booleanToTerraform(this._decryptForward),
      df_ignore: cdktf.booleanToTerraform(this._dfIgnore),
      dhcp_client: aggregateLayer3SubinterfaceDhcpClientToTerraform(this._dhcpClient.internalValue),
      interface_management_profile: cdktf.stringToTerraform(this._interfaceManagementProfile),
      ip: cdktf.listMapper(aggregateLayer3SubinterfaceIpToTerraform, false)(this._ip.internalValue),
      ipv6: aggregateLayer3SubinterfaceIpv6ToTerraform(this._ipv6.internalValue),
      location: aggregateLayer3SubinterfaceLocationToTerraform(this._location.internalValue),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      ndp_proxy: aggregateLayer3SubinterfaceNdpProxyToTerraform(this._ndpProxy.internalValue),
      netflow_profile: cdktf.stringToTerraform(this._netflowProfile),
      parent: cdktf.stringToTerraform(this._parent),
      sdwan_link_settings: aggregateLayer3SubinterfaceSdwanLinkSettingsToTerraform(this._sdwanLinkSettings.internalValue),
      tag: cdktf.numberToTerraform(this._tag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adjust_tcp_mss: {
        value: aggregateLayer3SubinterfaceAdjustTcpMssToHclTerraform(this._adjustTcpMss.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AggregateLayer3SubinterfaceAdjustTcpMss",
      },
      arp: {
        value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceArpToHclTerraform, false)(this._arp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AggregateLayer3SubinterfaceArpList",
      },
      bonjour: {
        value: aggregateLayer3SubinterfaceBonjourToHclTerraform(this._bonjour.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AggregateLayer3SubinterfaceBonjour",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_config: {
        value: aggregateLayer3SubinterfaceDdnsConfigToHclTerraform(this._ddnsConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AggregateLayer3SubinterfaceDdnsConfig",
      },
      decrypt_forward: {
        value: cdktf.booleanToHclTerraform(this._decryptForward),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      df_ignore: {
        value: cdktf.booleanToHclTerraform(this._dfIgnore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_client: {
        value: aggregateLayer3SubinterfaceDhcpClientToHclTerraform(this._dhcpClient.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AggregateLayer3SubinterfaceDhcpClient",
      },
      interface_management_profile: {
        value: cdktf.stringToHclTerraform(this._interfaceManagementProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.listMapperHcl(aggregateLayer3SubinterfaceIpToHclTerraform, false)(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AggregateLayer3SubinterfaceIpList",
      },
      ipv6: {
        value: aggregateLayer3SubinterfaceIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AggregateLayer3SubinterfaceIpv6",
      },
      location: {
        value: aggregateLayer3SubinterfaceLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AggregateLayer3SubinterfaceLocation",
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
        value: aggregateLayer3SubinterfaceNdpProxyToHclTerraform(this._ndpProxy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AggregateLayer3SubinterfaceNdpProxy",
      },
      netflow_profile: {
        value: cdktf.stringToHclTerraform(this._netflowProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdwan_link_settings: {
        value: aggregateLayer3SubinterfaceSdwanLinkSettingsToHclTerraform(this._sdwanLinkSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AggregateLayer3SubinterfaceSdwanLinkSettings",
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
