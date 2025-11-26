// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AggregateInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aggregate interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#comment AggregateInterface#comment}
  */
  readonly comment?: string;
  /**
  * Default interface assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#default_value AggregateInterface#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#device AggregateInterface#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#folder AggregateInterface#folder}
  */
  readonly folder?: string;
  /**
  * Layer2
  * 
  * > ℹ️ **Note:** You must specify exactly one of `layer2` and `layer3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#layer2 AggregateInterface#layer2}
  */
  readonly layer2?: AggregateInterfaceLayer2;
  /**
  * Aggregate Interface Layer 3 configuration
  * 
  * > ℹ️ **Note:** You must specify exactly one of `layer2` and `layer3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#layer3 AggregateInterface#layer3}
  */
  readonly layer3?: AggregateInterfaceLayer3;
  /**
  * Aggregate interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#name AggregateInterface#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#snippet AggregateInterface#snippet}
  */
  readonly snippet?: string;
}
export interface AggregateInterfaceLayer2Lacp {
  /**
  * Enable LACP?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#enable AggregateInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Fast failover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#fast_failover AggregateInterface#fast_failover}
  */
  readonly fastFailover?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of physical ports bundled in the LAG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#max_ports AggregateInterface#max_ports}
  */
  readonly maxPorts?: number;
  /**
  * Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#mode AggregateInterface#mode}
  */
  readonly mode?: string;
  /**
  * LACP system priority in system ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#system_priority AggregateInterface#system_priority}
  */
  readonly systemPriority?: number;
  /**
  * Transmission mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#transmission_rate AggregateInterface#transmission_rate}
  */
  readonly transmissionRate?: string;
}

export function aggregateInterfaceLayer2LacpToTerraform(struct?: AggregateInterfaceLayer2Lacp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    fast_failover: cdktf.booleanToTerraform(struct!.fastFailover),
    max_ports: cdktf.numberToTerraform(struct!.maxPorts),
    mode: cdktf.stringToTerraform(struct!.mode),
    system_priority: cdktf.numberToTerraform(struct!.systemPriority),
    transmission_rate: cdktf.stringToTerraform(struct!.transmissionRate),
  }
}


export function aggregateInterfaceLayer2LacpToHclTerraform(struct?: AggregateInterfaceLayer2Lacp | cdktf.IResolvable): any {
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
    fast_failover: {
      value: cdktf.booleanToHclTerraform(struct!.fastFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_ports: {
      value: cdktf.numberToHclTerraform(struct!.maxPorts),
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
    system_priority: {
      value: cdktf.numberToHclTerraform(struct!.systemPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmission_rate: {
      value: cdktf.stringToHclTerraform(struct!.transmissionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateInterfaceLayer2LacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateInterfaceLayer2Lacp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._fastFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastFailover = this._fastFailover;
    }
    if (this._maxPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPorts = this._maxPorts;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._systemPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemPriority = this._systemPriority;
    }
    if (this._transmissionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmissionRate = this._transmissionRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateInterfaceLayer2Lacp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._fastFailover = undefined;
      this._maxPorts = undefined;
      this._mode = undefined;
      this._systemPriority = undefined;
      this._transmissionRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._fastFailover = value.fastFailover;
      this._maxPorts = value.maxPorts;
      this._mode = value.mode;
      this._systemPriority = value.systemPriority;
      this._transmissionRate = value.transmissionRate;
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

  // fast_failover - computed: true, optional: true, required: false
  private _fastFailover?: boolean | cdktf.IResolvable; 
  public get fastFailover() {
    return this.getBooleanAttribute('fast_failover');
  }
  public set fastFailover(value: boolean | cdktf.IResolvable) {
    this._fastFailover = value;
  }
  public resetFastFailover() {
    this._fastFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastFailoverInput() {
    return this._fastFailover;
  }

  // max_ports - computed: true, optional: true, required: false
  private _maxPorts?: number; 
  public get maxPorts() {
    return this.getNumberAttribute('max_ports');
  }
  public set maxPorts(value: number) {
    this._maxPorts = value;
  }
  public resetMaxPorts() {
    this._maxPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPortsInput() {
    return this._maxPorts;
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

  // system_priority - computed: true, optional: true, required: false
  private _systemPriority?: number; 
  public get systemPriority() {
    return this.getNumberAttribute('system_priority');
  }
  public set systemPriority(value: number) {
    this._systemPriority = value;
  }
  public resetSystemPriority() {
    this._systemPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPriorityInput() {
    return this._systemPriority;
  }

  // transmission_rate - computed: true, optional: true, required: false
  private _transmissionRate?: string; 
  public get transmissionRate() {
    return this.getStringAttribute('transmission_rate');
  }
  public set transmissionRate(value: string) {
    this._transmissionRate = value;
  }
  public resetTransmissionRate() {
    this._transmissionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmissionRateInput() {
    return this._transmissionRate;
  }
}
export interface AggregateInterfaceLayer2 {
  /**
  * Lacp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#lacp AggregateInterface#lacp}
  */
  readonly lacp?: AggregateInterfaceLayer2Lacp;
  /**
  * VLAN tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#vlan_tag AggregateInterface#vlan_tag}
  */
  readonly vlanTag?: string;
}

export function aggregateInterfaceLayer2ToTerraform(struct?: AggregateInterfaceLayer2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lacp: aggregateInterfaceLayer2LacpToTerraform(struct!.lacp),
    vlan_tag: cdktf.stringToTerraform(struct!.vlanTag),
  }
}


export function aggregateInterfaceLayer2ToHclTerraform(struct?: AggregateInterfaceLayer2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lacp: {
      value: aggregateInterfaceLayer2LacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateInterfaceLayer2Lacp",
    },
    vlan_tag: {
      value: cdktf.stringToHclTerraform(struct!.vlanTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateInterfaceLayer2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateInterfaceLayer2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lacp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp?.internalValue;
    }
    if (this._vlanTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTag = this._vlanTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateInterfaceLayer2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lacp.internalValue = undefined;
      this._vlanTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lacp.internalValue = value.lacp;
      this._vlanTag = value.vlanTag;
    }
  }

  // lacp - computed: true, optional: true, required: false
  private _lacp = new AggregateInterfaceLayer2LacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: AggregateInterfaceLayer2Lacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
  }

  // vlan_tag - computed: true, optional: true, required: false
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
}
export interface AggregateInterfaceLayer3Arp {
  /**
  * MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#hw_address AggregateInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#name AggregateInterface#name}
  */
  readonly name?: string;
}

export function aggregateInterfaceLayer3ArpToTerraform(struct?: AggregateInterfaceLayer3Arp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aggregateInterfaceLayer3ArpToHclTerraform(struct?: AggregateInterfaceLayer3Arp | cdktf.IResolvable): any {
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

export class AggregateInterfaceLayer3ArpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateInterfaceLayer3Arp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateInterfaceLayer3Arp | cdktf.IResolvable | undefined) {
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

export class AggregateInterfaceLayer3ArpList extends cdktf.ComplexList {
  public internalValue? : AggregateInterfaceLayer3Arp[] | cdktf.IResolvable

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
  public get(index: number): AggregateInterfaceLayer3ArpOutputReference {
    return new AggregateInterfaceLayer3ArpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateInterfaceLayer3DdnsConfig {
  /**
  * Certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#ddns_cert_profile AggregateInterface#ddns_cert_profile}
  */
  readonly ddnsCertProfile: string;
  /**
  * Enable DDNS?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#ddns_enabled AggregateInterface#ddns_enabled}
  */
  readonly ddnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Ddns hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#ddns_hostname AggregateInterface#ddns_hostname}
  */
  readonly ddnsHostname: string;
  /**
  * IP to register (static only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#ddns_ip AggregateInterface#ddns_ip}
  */
  readonly ddnsIp?: string;
  /**
  * Update interval (days)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#ddns_update_interval AggregateInterface#ddns_update_interval}
  */
  readonly ddnsUpdateInterval?: number;
  /**
  * DDNS vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#ddns_vendor AggregateInterface#ddns_vendor}
  */
  readonly ddnsVendor: string;
  /**
  * DDNS vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#ddns_vendor_config AggregateInterface#ddns_vendor_config}
  */
  readonly ddnsVendorConfig: string;
}

export function aggregateInterfaceLayer3DdnsConfigToTerraform(struct?: AggregateInterfaceLayer3DdnsConfig | cdktf.IResolvable): any {
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


export function aggregateInterfaceLayer3DdnsConfigToHclTerraform(struct?: AggregateInterfaceLayer3DdnsConfig | cdktf.IResolvable): any {
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

export class AggregateInterfaceLayer3DdnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateInterfaceLayer3DdnsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateInterfaceLayer3DdnsConfig | cdktf.IResolvable | undefined) {
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

  // ddns_cert_profile - computed: true, optional: false, required: true
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

  // ddns_hostname - computed: true, optional: false, required: true
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

  // ddns_ip - computed: true, optional: true, required: false
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

  // ddns_vendor - computed: true, optional: false, required: true
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

  // ddns_vendor_config - computed: true, optional: false, required: true
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
export interface AggregateInterfaceLayer3DhcpClientSendHostname {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#enable AggregateInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set interface hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#hostname AggregateInterface#hostname}
  */
  readonly hostname?: string;
}

export function aggregateInterfaceLayer3DhcpClientSendHostnameToTerraform(struct?: AggregateInterfaceLayer3DhcpClientSendHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function aggregateInterfaceLayer3DhcpClientSendHostnameToHclTerraform(struct?: AggregateInterfaceLayer3DhcpClientSendHostname | cdktf.IResolvable): any {
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

export class AggregateInterfaceLayer3DhcpClientSendHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateInterfaceLayer3DhcpClientSendHostname | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateInterfaceLayer3DhcpClientSendHostname | cdktf.IResolvable | undefined) {
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
export interface AggregateInterfaceLayer3DhcpClient {
  /**
  * Automatically create default route pointing to default gateway provided by server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#create_default_route AggregateInterface#create_default_route}
  */
  readonly createDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Metric of the default route created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#default_route_metric AggregateInterface#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Enable DHCP?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#enable AggregateInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Aggregate Ethernet DHCP Client Send hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#send_hostname AggregateInterface#send_hostname}
  */
  readonly sendHostname?: AggregateInterfaceLayer3DhcpClientSendHostname;
}

export function aggregateInterfaceLayer3DhcpClientToTerraform(struct?: AggregateInterfaceLayer3DhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_default_route: cdktf.booleanToTerraform(struct!.createDefaultRoute),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    enable: cdktf.booleanToTerraform(struct!.enable),
    send_hostname: aggregateInterfaceLayer3DhcpClientSendHostnameToTerraform(struct!.sendHostname),
  }
}


export function aggregateInterfaceLayer3DhcpClientToHclTerraform(struct?: AggregateInterfaceLayer3DhcpClient | cdktf.IResolvable): any {
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
      value: aggregateInterfaceLayer3DhcpClientSendHostnameToHclTerraform(struct!.sendHostname),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateInterfaceLayer3DhcpClientSendHostname",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateInterfaceLayer3DhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateInterfaceLayer3DhcpClient | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateInterfaceLayer3DhcpClient | cdktf.IResolvable | undefined) {
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
  private _sendHostname = new AggregateInterfaceLayer3DhcpClientSendHostnameOutputReference(this, "send_hostname");
  public get sendHostname() {
    return this._sendHostname;
  }
  public putSendHostname(value: AggregateInterfaceLayer3DhcpClientSendHostname) {
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
export interface AggregateInterfaceLayer3Ip {
  /**
  * Aggregate Interface IP addresses name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#name AggregateInterface#name}
  */
  readonly name: string;
}

export function aggregateInterfaceLayer3IpToTerraform(struct?: AggregateInterfaceLayer3Ip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aggregateInterfaceLayer3IpToHclTerraform(struct?: AggregateInterfaceLayer3Ip | cdktf.IResolvable): any {
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

export class AggregateInterfaceLayer3IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AggregateInterfaceLayer3Ip | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AggregateInterfaceLayer3Ip | cdktf.IResolvable | undefined) {
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

export class AggregateInterfaceLayer3IpList extends cdktf.ComplexList {
  public internalValue? : AggregateInterfaceLayer3Ip[] | cdktf.IResolvable

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
  public get(index: number): AggregateInterfaceLayer3IpOutputReference {
    return new AggregateInterfaceLayer3IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AggregateInterfaceLayer3Lacp {
  /**
  * Enable LACP?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#enable AggregateInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Fast failover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#fast_failover AggregateInterface#fast_failover}
  */
  readonly fastFailover?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of physical ports bundled in the LAG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#max_ports AggregateInterface#max_ports}
  */
  readonly maxPorts?: number;
  /**
  * Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#mode AggregateInterface#mode}
  */
  readonly mode?: string;
  /**
  * LACP system priority in system ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#system_priority AggregateInterface#system_priority}
  */
  readonly systemPriority?: number;
  /**
  * Transmission mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#transmission_rate AggregateInterface#transmission_rate}
  */
  readonly transmissionRate?: string;
}

export function aggregateInterfaceLayer3LacpToTerraform(struct?: AggregateInterfaceLayer3Lacp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    fast_failover: cdktf.booleanToTerraform(struct!.fastFailover),
    max_ports: cdktf.numberToTerraform(struct!.maxPorts),
    mode: cdktf.stringToTerraform(struct!.mode),
    system_priority: cdktf.numberToTerraform(struct!.systemPriority),
    transmission_rate: cdktf.stringToTerraform(struct!.transmissionRate),
  }
}


export function aggregateInterfaceLayer3LacpToHclTerraform(struct?: AggregateInterfaceLayer3Lacp | cdktf.IResolvable): any {
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
    fast_failover: {
      value: cdktf.booleanToHclTerraform(struct!.fastFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_ports: {
      value: cdktf.numberToHclTerraform(struct!.maxPorts),
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
    system_priority: {
      value: cdktf.numberToHclTerraform(struct!.systemPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmission_rate: {
      value: cdktf.stringToHclTerraform(struct!.transmissionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateInterfaceLayer3LacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateInterfaceLayer3Lacp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._fastFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastFailover = this._fastFailover;
    }
    if (this._maxPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPorts = this._maxPorts;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._systemPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemPriority = this._systemPriority;
    }
    if (this._transmissionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmissionRate = this._transmissionRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateInterfaceLayer3Lacp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._fastFailover = undefined;
      this._maxPorts = undefined;
      this._mode = undefined;
      this._systemPriority = undefined;
      this._transmissionRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._fastFailover = value.fastFailover;
      this._maxPorts = value.maxPorts;
      this._mode = value.mode;
      this._systemPriority = value.systemPriority;
      this._transmissionRate = value.transmissionRate;
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

  // fast_failover - computed: true, optional: true, required: false
  private _fastFailover?: boolean | cdktf.IResolvable; 
  public get fastFailover() {
    return this.getBooleanAttribute('fast_failover');
  }
  public set fastFailover(value: boolean | cdktf.IResolvable) {
    this._fastFailover = value;
  }
  public resetFastFailover() {
    this._fastFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastFailoverInput() {
    return this._fastFailover;
  }

  // max_ports - computed: true, optional: true, required: false
  private _maxPorts?: number; 
  public get maxPorts() {
    return this.getNumberAttribute('max_ports');
  }
  public set maxPorts(value: number) {
    this._maxPorts = value;
  }
  public resetMaxPorts() {
    this._maxPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPortsInput() {
    return this._maxPorts;
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

  // system_priority - computed: true, optional: true, required: false
  private _systemPriority?: number; 
  public get systemPriority() {
    return this.getNumberAttribute('system_priority');
  }
  public set systemPriority(value: number) {
    this._systemPriority = value;
  }
  public resetSystemPriority() {
    this._systemPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPriorityInput() {
    return this._systemPriority;
  }

  // transmission_rate - computed: true, optional: true, required: false
  private _transmissionRate?: string; 
  public get transmissionRate() {
    return this.getStringAttribute('transmission_rate');
  }
  public set transmissionRate(value: string) {
    this._transmissionRate = value;
  }
  public resetTransmissionRate() {
    this._transmissionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmissionRateInput() {
    return this._transmissionRate;
  }
}
export interface AggregateInterfaceLayer3 {
  /**
  * Aggregate Ethernet ARP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#arp AggregateInterface#arp}
  */
  readonly arp?: AggregateInterfaceLayer3Arp[] | cdktf.IResolvable;
  /**
  * Dynamic DNS configuration specific to the Aggregate Interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#ddns_config AggregateInterface#ddns_config}
  */
  readonly ddnsConfig?: AggregateInterfaceLayer3DdnsConfig;
  /**
  * Aggregate Ethernet DHCP Client Object
  * 
  * > ℹ️ **Note:** You must specify exactly one of `dhcp_client` and `ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#dhcp_client AggregateInterface#dhcp_client}
  */
  readonly dhcpClient?: AggregateInterfaceLayer3DhcpClient;
  /**
  * Interface management profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#interface_management_profile AggregateInterface#interface_management_profile}
  */
  readonly interfaceManagementProfile?: string;
  /**
  * Aggregate Interface IP addresses
  * 
  * > ℹ️ **Note:** You must specify exactly one of `dhcp_client` and `ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#ip AggregateInterface#ip}
  */
  readonly ip?: AggregateInterfaceLayer3Ip[] | cdktf.IResolvable;
  /**
  * Lacp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#lacp AggregateInterface#lacp}
  */
  readonly lacp?: AggregateInterfaceLayer3Lacp;
  /**
  * MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#mtu AggregateInterface#mtu}
  */
  readonly mtu?: number;
}

export function aggregateInterfaceLayer3ToTerraform(struct?: AggregateInterfaceLayer3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arp: cdktf.listMapper(aggregateInterfaceLayer3ArpToTerraform, false)(struct!.arp),
    ddns_config: aggregateInterfaceLayer3DdnsConfigToTerraform(struct!.ddnsConfig),
    dhcp_client: aggregateInterfaceLayer3DhcpClientToTerraform(struct!.dhcpClient),
    interface_management_profile: cdktf.stringToTerraform(struct!.interfaceManagementProfile),
    ip: cdktf.listMapper(aggregateInterfaceLayer3IpToTerraform, false)(struct!.ip),
    lacp: aggregateInterfaceLayer3LacpToTerraform(struct!.lacp),
    mtu: cdktf.numberToTerraform(struct!.mtu),
  }
}


export function aggregateInterfaceLayer3ToHclTerraform(struct?: AggregateInterfaceLayer3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arp: {
      value: cdktf.listMapperHcl(aggregateInterfaceLayer3ArpToHclTerraform, false)(struct!.arp),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateInterfaceLayer3ArpList",
    },
    ddns_config: {
      value: aggregateInterfaceLayer3DdnsConfigToHclTerraform(struct!.ddnsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateInterfaceLayer3DdnsConfig",
    },
    dhcp_client: {
      value: aggregateInterfaceLayer3DhcpClientToHclTerraform(struct!.dhcpClient),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateInterfaceLayer3DhcpClient",
    },
    interface_management_profile: {
      value: cdktf.stringToHclTerraform(struct!.interfaceManagementProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(aggregateInterfaceLayer3IpToHclTerraform, false)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "AggregateInterfaceLayer3IpList",
    },
    lacp: {
      value: aggregateInterfaceLayer3LacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "struct",
      storageClassType: "AggregateInterfaceLayer3Lacp",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AggregateInterfaceLayer3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AggregateInterfaceLayer3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arp = this._arp?.internalValue;
    }
    if (this._ddnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsConfig = this._ddnsConfig?.internalValue;
    }
    if (this._dhcpClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient?.internalValue;
    }
    if (this._interfaceManagementProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceManagementProfile = this._interfaceManagementProfile;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._lacp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp?.internalValue;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateInterfaceLayer3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arp.internalValue = undefined;
      this._ddnsConfig.internalValue = undefined;
      this._dhcpClient.internalValue = undefined;
      this._interfaceManagementProfile = undefined;
      this._ip.internalValue = undefined;
      this._lacp.internalValue = undefined;
      this._mtu = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arp.internalValue = value.arp;
      this._ddnsConfig.internalValue = value.ddnsConfig;
      this._dhcpClient.internalValue = value.dhcpClient;
      this._interfaceManagementProfile = value.interfaceManagementProfile;
      this._ip.internalValue = value.ip;
      this._lacp.internalValue = value.lacp;
      this._mtu = value.mtu;
    }
  }

  // arp - computed: true, optional: true, required: false
  private _arp = new AggregateInterfaceLayer3ArpList(this, "arp", false);
  public get arp() {
    return this._arp;
  }
  public putArp(value: AggregateInterfaceLayer3Arp[] | cdktf.IResolvable) {
    this._arp.internalValue = value;
  }
  public resetArp() {
    this._arp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp.internalValue;
  }

  // ddns_config - computed: true, optional: true, required: false
  private _ddnsConfig = new AggregateInterfaceLayer3DdnsConfigOutputReference(this, "ddns_config");
  public get ddnsConfig() {
    return this._ddnsConfig;
  }
  public putDdnsConfig(value: AggregateInterfaceLayer3DdnsConfig) {
    this._ddnsConfig.internalValue = value;
  }
  public resetDdnsConfig() {
    this._ddnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConfigInput() {
    return this._ddnsConfig.internalValue;
  }

  // dhcp_client - computed: true, optional: true, required: false
  private _dhcpClient = new AggregateInterfaceLayer3DhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }
  public putDhcpClient(value: AggregateInterfaceLayer3DhcpClient) {
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
  private _ip = new AggregateInterfaceLayer3IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: AggregateInterfaceLayer3Ip[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // lacp - computed: true, optional: true, required: false
  private _lacp = new AggregateInterfaceLayer3LacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: AggregateInterfaceLayer3Lacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface scm_aggregate_interface}
*/
export class AggregateInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_aggregate_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AggregateInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AggregateInterface to import
  * @param importFromId The id of the existing AggregateInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AggregateInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_aggregate_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/aggregate_interface scm_aggregate_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AggregateInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: AggregateInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_aggregate_interface',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._defaultValue = config.defaultValue;
    this._device = config.device;
    this._folder = config.folder;
    this._layer2.internalValue = config.layer2;
    this._layer3.internalValue = config.layer3;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // layer2 - computed: true, optional: true, required: false
  private _layer2 = new AggregateInterfaceLayer2OutputReference(this, "layer2");
  public get layer2() {
    return this._layer2;
  }
  public putLayer2(value: AggregateInterfaceLayer2) {
    this._layer2.internalValue = value;
  }
  public resetLayer2() {
    this._layer2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2Input() {
    return this._layer2.internalValue;
  }

  // layer3 - computed: true, optional: true, required: false
  private _layer3 = new AggregateInterfaceLayer3OutputReference(this, "layer3");
  public get layer3() {
    return this._layer3;
  }
  public putLayer3(value: AggregateInterfaceLayer3) {
    this._layer3.internalValue = value;
  }
  public resetLayer3() {
    this._layer3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer3Input() {
    return this._layer3.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      default_value: cdktf.stringToTerraform(this._defaultValue),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      layer2: aggregateInterfaceLayer2ToTerraform(this._layer2.internalValue),
      layer3: aggregateInterfaceLayer3ToTerraform(this._layer3.internalValue),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layer2: {
        value: aggregateInterfaceLayer2ToHclTerraform(this._layer2.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AggregateInterfaceLayer2",
      },
      layer3: {
        value: aggregateInterfaceLayer3ToHclTerraform(this._layer3.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AggregateInterfaceLayer3",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
