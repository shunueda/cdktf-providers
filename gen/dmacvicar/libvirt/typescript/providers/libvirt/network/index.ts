// https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the network should be started automatically when the host boots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#autostart Network#autostart}
  */
  readonly autostart?: boolean | cdktf.IResolvable;
  /**
  * Configures overall QoS bandwidth limits for the virtual network, enabling nested inbound/outbound rate settings when present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#bandwidth Network#bandwidth}
  */
  readonly bandwidth?: NetworkBandwidth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#bridge Network#bridge}
  */
  readonly bridge?: NetworkBridge;
  /**
  * Enables configuration of DNS services for the virtual network, including forwarders and static records. Presence of this block turns on DNS handling according to its child settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#dns Network#dns}
  */
  readonly dns?: NetworkDns;
  /**
  * Configures an optional DNS search domain block for the virtual network, controlling how guest hostnames are qualified and optionally whether they are registered only locally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#domain Network#domain}
  */
  readonly domain?: NetworkDomain;
  /**
  * Configures forwarding for the virtual network, defining how traffic is connected to external networks (e.g. NAT, routed, bridge, macvtap).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#forward Network#forward}
  */
  readonly forward?: NetworkForward;
  /**
  * Defines one or more IP address configurations for the network, including address, DHCP, and related options for IPv4 and/or IPv6.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#ips Network#ips}
  */
  readonly ips?: NetworkIps[] | cdktf.IResolvable;
  /**
  * Controls whether the network provides IPv6 support, as a boolean-like flag (`yes` or `no`).
  * 
  * See: <https://libvirt.org/formatnetwork.html#general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#ipv6 Network#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Enables configuring a fixed MAC address for the network bridge device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#mac Network#mac}
  */
  readonly mac?: NetworkMac;
  /**
  * Provides an arbitrary metadata container for the virtual network, typically used by higher-level tools; content is user-defined XML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#metadata Network#metadata}
  */
  readonly metadata?: NetworkMetadata;
  /**
  * Configures an MTU definition block for the virtual network; include this block only when you need to override the default MTU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#mtu Network#mtu}
  */
  readonly mtu?: NetworkMtu;
  /**
  * Sets the network’s name, which must be unique on the host and consist of alphanumeric characters plus ‘_’ or ‘-’.
  * 
  * See: <https://libvirt.org/formatnetwork.html#general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#name Network#name}
  */
  readonly name: string;
  /**
  * Defines one or more port groups that classify guest connections on this network, each with its own settings such as virtual port parameters or QoS.
  * 
  * See: <https://libvirt.org/formatnetwork.html#portgroups>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#port_groups Network#port_groups}
  */
  readonly portGroups?: NetworkPortGroups[] | cdktf.IResolvable;
  /**
  * Configures default per-port options for this virtual network, such as isolating traffic between guests connected to the same network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#port_options Network#port_options}
  */
  readonly portOptions?: NetworkPortOptions;
  /**
  * Configures one or more static routes associated with this virtual network, informing the host about networks reachable via guests.
  * 
  * See: <https://libvirt.org/formatnetwork.html#static-routes>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#routes Network#routes}
  */
  readonly routes?: NetworkRoutes[] | cdktf.IResolvable;
  /**
  * Controls whether the network as a whole trusts guests' receive-side filtering settings, corresponding to the yes/no trustGuestRxFilters flag on the network definition.
  * 
  * See: <https://libvirt.org/formatnetwork.html#general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#trust_guest_rx_filters Network#trust_guest_rx_filters}
  */
  readonly trustGuestRxFilters?: string;
  /**
  * Configures virtual port profile information for this port group, enabling integration with external network switching or SDN systems.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#virtual_port Network#virtual_port}
  */
  readonly virtualPort?: NetworkVirtualPort;
  /**
  * Configures VLAN tagging behavior for this portgroup, allowing one or more VLAN tags to be applied to guest connections when the underlying network supports VLAN offload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#vlan Network#vlan}
  */
  readonly vlan?: NetworkVlan;
}
export interface NetworkBandwidthInbound {
  /**
  * Sets the long-term average outbound bandwidth limit in kilobytes per second; value is a user-provided non-negative integer.
  * 
  * See: <https://libvirt.org/formatnetwork.html#quality-of-service>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#average Network#average}
  */
  readonly average?: number;
  /**
  * Sets the maximum instantaneous outbound bandwidth burst size in kilobytes per second that may temporarily exceed the average; value is a user-provided non-negative integer.
  * 
  * See: <https://libvirt.org/formatnetwork.html#quality-of-service>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#burst Network#burst}
  */
  readonly burst?: number;
  /**
  * Sets a minimum guaranteed outbound bandwidth in kilobytes per second when supported by the backend; value is a user-provided non-negative integer.
  * 
  * See: <https://libvirt.org/formatnetwork.html#quality-of-service>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#floor Network#floor}
  */
  readonly floor?: number;
  /**
  * Sets an upper cap on outbound bandwidth in kilobytes per second, typically higher than average but not exceeding burst; value is a user-provided non-negative integer.
  * 
  * See: <https://libvirt.org/formatnetwork.html#quality-of-service>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#peak Network#peak}
  */
  readonly peak?: number;
}

export function networkBandwidthInboundToTerraform(struct?: NetworkBandwidthInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average: cdktf.numberToTerraform(struct!.average),
    burst: cdktf.numberToTerraform(struct!.burst),
    floor: cdktf.numberToTerraform(struct!.floor),
    peak: cdktf.numberToTerraform(struct!.peak),
  }
}


export function networkBandwidthInboundToHclTerraform(struct?: NetworkBandwidthInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average: {
      value: cdktf.numberToHclTerraform(struct!.average),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    floor: {
      value: cdktf.numberToHclTerraform(struct!.floor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak: {
      value: cdktf.numberToHclTerraform(struct!.peak),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkBandwidthInboundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkBandwidthInbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._average !== undefined) {
      hasAnyValues = true;
      internalValueResult.average = this._average;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._floor !== undefined) {
      hasAnyValues = true;
      internalValueResult.floor = this._floor;
    }
    if (this._peak !== undefined) {
      hasAnyValues = true;
      internalValueResult.peak = this._peak;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkBandwidthInbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._average = undefined;
      this._burst = undefined;
      this._floor = undefined;
      this._peak = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._average = value.average;
      this._burst = value.burst;
      this._floor = value.floor;
      this._peak = value.peak;
    }
  }

  // average - computed: false, optional: true, required: false
  private _average?: number; 
  public get average() {
    return this.getNumberAttribute('average');
  }
  public set average(value: number) {
    this._average = value;
  }
  public resetAverage() {
    this._average = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageInput() {
    return this._average;
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // floor - computed: false, optional: true, required: false
  private _floor?: number; 
  public get floor() {
    return this.getNumberAttribute('floor');
  }
  public set floor(value: number) {
    this._floor = value;
  }
  public resetFloor() {
    this._floor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floorInput() {
    return this._floor;
  }

  // peak - computed: false, optional: true, required: false
  private _peak?: number; 
  public get peak() {
    return this.getNumberAttribute('peak');
  }
  public set peak(value: number) {
    this._peak = value;
  }
  public resetPeak() {
    this._peak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakInput() {
    return this._peak;
  }
}
export interface NetworkBandwidthOutbound {
  /**
  * Sets the long-term average outbound bandwidth limit in kilobytes per second; value is a user-provided non-negative integer.
  * 
  * See: <https://libvirt.org/formatnetwork.html#quality-of-service>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#average Network#average}
  */
  readonly average?: number;
  /**
  * Sets the maximum instantaneous outbound bandwidth burst size in kilobytes per second that may temporarily exceed the average; value is a user-provided non-negative integer.
  * 
  * See: <https://libvirt.org/formatnetwork.html#quality-of-service>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#burst Network#burst}
  */
  readonly burst?: number;
  /**
  * Sets a minimum guaranteed outbound bandwidth in kilobytes per second when supported by the backend; value is a user-provided non-negative integer.
  * 
  * See: <https://libvirt.org/formatnetwork.html#quality-of-service>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#floor Network#floor}
  */
  readonly floor?: number;
  /**
  * Sets an upper cap on outbound bandwidth in kilobytes per second, typically higher than average but not exceeding burst; value is a user-provided non-negative integer.
  * 
  * See: <https://libvirt.org/formatnetwork.html#quality-of-service>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#peak Network#peak}
  */
  readonly peak?: number;
}

export function networkBandwidthOutboundToTerraform(struct?: NetworkBandwidthOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average: cdktf.numberToTerraform(struct!.average),
    burst: cdktf.numberToTerraform(struct!.burst),
    floor: cdktf.numberToTerraform(struct!.floor),
    peak: cdktf.numberToTerraform(struct!.peak),
  }
}


export function networkBandwidthOutboundToHclTerraform(struct?: NetworkBandwidthOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average: {
      value: cdktf.numberToHclTerraform(struct!.average),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    floor: {
      value: cdktf.numberToHclTerraform(struct!.floor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak: {
      value: cdktf.numberToHclTerraform(struct!.peak),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkBandwidthOutboundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkBandwidthOutbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._average !== undefined) {
      hasAnyValues = true;
      internalValueResult.average = this._average;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._floor !== undefined) {
      hasAnyValues = true;
      internalValueResult.floor = this._floor;
    }
    if (this._peak !== undefined) {
      hasAnyValues = true;
      internalValueResult.peak = this._peak;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkBandwidthOutbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._average = undefined;
      this._burst = undefined;
      this._floor = undefined;
      this._peak = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._average = value.average;
      this._burst = value.burst;
      this._floor = value.floor;
      this._peak = value.peak;
    }
  }

  // average - computed: false, optional: true, required: false
  private _average?: number; 
  public get average() {
    return this.getNumberAttribute('average');
  }
  public set average(value: number) {
    this._average = value;
  }
  public resetAverage() {
    this._average = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageInput() {
    return this._average;
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // floor - computed: false, optional: true, required: false
  private _floor?: number; 
  public get floor() {
    return this.getNumberAttribute('floor');
  }
  public set floor(value: number) {
    this._floor = value;
  }
  public resetFloor() {
    this._floor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floorInput() {
    return this._floor;
  }

  // peak - computed: false, optional: true, required: false
  private _peak?: number; 
  public get peak() {
    return this.getNumberAttribute('peak');
  }
  public set peak(value: number) {
    this._peak = value;
  }
  public resetPeak() {
    this._peak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakInput() {
    return this._peak;
  }
}
export interface NetworkBandwidth {
  /**
  * Sets an optional traffic classification identifier (classID) for the network's bandwidth rules; value is user-provided and format is not constrained by libvirt.
  * 
  * See: <https://libvirt.org/formatnetwork.html#quality-of-service>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#class_id Network#class_id}
  */
  readonly classId?: number;
  /**
  * Configures QoS limits for outgoing traffic from the network, with child attributes controlling average rate and related parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#inbound Network#inbound}
  */
  readonly inbound?: NetworkBandwidthInbound;
  /**
  * Configures QoS limits for outgoing traffic from the network, with child attributes controlling average rate and related parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#outbound Network#outbound}
  */
  readonly outbound?: NetworkBandwidthOutbound;
}

export function networkBandwidthToTerraform(struct?: NetworkBandwidth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_id: cdktf.numberToTerraform(struct!.classId),
    inbound: networkBandwidthInboundToTerraform(struct!.inbound),
    outbound: networkBandwidthOutboundToTerraform(struct!.outbound),
  }
}


export function networkBandwidthToHclTerraform(struct?: NetworkBandwidth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_id: {
      value: cdktf.numberToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound: {
      value: networkBandwidthInboundToHclTerraform(struct!.inbound),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkBandwidthInbound",
    },
    outbound: {
      value: networkBandwidthOutboundToHclTerraform(struct!.outbound),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkBandwidthOutbound",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkBandwidth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._inbound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound?.internalValue;
    }
    if (this._outbound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkBandwidth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classId = undefined;
      this._inbound.internalValue = undefined;
      this._outbound.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classId = value.classId;
      this._inbound.internalValue = value.inbound;
      this._outbound.internalValue = value.outbound;
    }
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: number; 
  public get classId() {
    return this.getNumberAttribute('class_id');
  }
  public set classId(value: number) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound = new NetworkBandwidthInboundOutputReference(this, "inbound");
  public get inbound() {
    return this._inbound;
  }
  public putInbound(value: NetworkBandwidthInbound) {
    this._inbound.internalValue = value;
  }
  public resetInbound() {
    this._inbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound.internalValue;
  }

  // outbound - computed: false, optional: true, required: false
  private _outbound = new NetworkBandwidthOutboundOutputReference(this, "outbound");
  public get outbound() {
    return this._outbound;
  }
  public putOutbound(value: NetworkBandwidthOutbound) {
    this._outbound.internalValue = value;
  }
  public resetOutbound() {
    this._outbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound.internalValue;
  }
}
export interface NetworkBridge {
  /**
  * Sets the forwarding delay (in seconds) for the bridge, controlling how long ports stay in the listening/learning states when STP is enabled; value is a user-provided non-negative integer.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#delay Network#delay}
  */
  readonly delay?: string;
  /**
  * Selects the MAC address table manager implementation for the bridge (e.g. "kernel" or "libvirt" when supported); value is a user-provided string constrained to backend-supported options.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#mac_table_manager Network#mac_table_manager}
  */
  readonly macTableManager?: string;
  /**
  * Bridge name (generated by libvirt if not specified)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#name Network#name}
  */
  readonly name?: string;
  /**
  * Enables or disables Spanning Tree Protocol on the bridge; accepts the strings "on" or "off".
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#stp Network#stp}
  */
  readonly stp?: string;
  /**
  * Sets the DNS zone name associated with the bridged network, used as the default domain for DNS records served by this network. The value is user-provided and should typically be a valid DNS domain name (e.g. "example.local").
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#zone Network#zone}
  */
  readonly zone?: string;
}

export function networkBridgeToTerraform(struct?: NetworkBridge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.stringToTerraform(struct!.delay),
    mac_table_manager: cdktf.stringToTerraform(struct!.macTableManager),
    name: cdktf.stringToTerraform(struct!.name),
    stp: cdktf.stringToTerraform(struct!.stp),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function networkBridgeToHclTerraform(struct?: NetworkBridge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_table_manager: {
      value: cdktf.stringToHclTerraform(struct!.macTableManager),
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
    stp: {
      value: cdktf.stringToHclTerraform(struct!.stp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkBridgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkBridge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._macTableManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTableManager = this._macTableManager;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stp !== undefined) {
      hasAnyValues = true;
      internalValueResult.stp = this._stp;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkBridge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._macTableManager = undefined;
      this._name = undefined;
      this._stp = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._macTableManager = value.macTableManager;
      this._name = value.name;
      this._stp = value.stp;
      this._zone = value.zone;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // mac_table_manager - computed: false, optional: true, required: false
  private _macTableManager?: string; 
  public get macTableManager() {
    return this.getStringAttribute('mac_table_manager');
  }
  public set macTableManager(value: string) {
    this._macTableManager = value;
  }
  public resetMacTableManager() {
    this._macTableManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTableManagerInput() {
    return this._macTableManager;
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

  // stp - computed: false, optional: true, required: false
  private _stp?: string; 
  public get stp() {
    return this.getStringAttribute('stp');
  }
  public set stp(value: string) {
    this._stp = value;
  }
  public resetStp() {
    this._stp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpInput() {
    return this._stp;
  }

  // zone - computed: false, optional: true, required: false
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
}
export interface NetworkDnsForwarders {
  /**
  * Sets the IP address of an upstream DNS forwarder. The value is user-provided and should be a valid IPv4 or IPv6 address (e.g. "8.8.8.8" or "2001:4860:4860::8888").
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#addr Network#addr}
  */
  readonly addr?: string;
  /**
  * Restricts the forwarder to queries for a specific DNS domain suffix. The value is user-provided and should be a valid DNS domain (e.g. "example.com").
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#domain Network#domain}
  */
  readonly domain?: string;
}

export function networkDnsForwardersToTerraform(struct?: NetworkDnsForwarders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function networkDnsForwardersToHclTerraform(struct?: NetworkDnsForwarders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDnsForwardersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDnsForwarders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDnsForwarders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._domain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._domain = value.domain;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}

export class NetworkDnsForwardersList extends cdktf.ComplexList {
  public internalValue? : NetworkDnsForwarders[] | cdktf.IResolvable

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
  public get(index: number): NetworkDnsForwardersOutputReference {
    return new NetworkDnsForwardersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDnsHostHostnames {
  /**
  * Sets a hostname to be mapped to the parent host’s IP address in DNS. The value is user-provided and should be a valid host label or FQDN (e.g. "web1" or "web1.example.local").
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#hostname Network#hostname}
  */
  readonly hostname: string;
}

export function networkDnsHostHostnamesToTerraform(struct?: NetworkDnsHostHostnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function networkDnsHostHostnamesToHclTerraform(struct?: NetworkDnsHostHostnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class NetworkDnsHostHostnamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDnsHostHostnames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDnsHostHostnames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}

export class NetworkDnsHostHostnamesList extends cdktf.ComplexList {
  public internalValue? : NetworkDnsHostHostnames[] | cdktf.IResolvable

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
  public get(index: number): NetworkDnsHostHostnamesOutputReference {
    return new NetworkDnsHostHostnamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDnsHost {
  /**
  * Lists one or more hostnames associated with a single static DNS host entry. Each block represents a single hostname record for the given IP.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#hostnames Network#hostnames}
  */
  readonly hostnames?: NetworkDnsHostHostnames[] | cdktf.IResolvable;
  /**
  * Sets the IP address for the static host mapping used by all associated hostnames. The value is required and must be a valid IPv4 or IPv6 address.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#ip Network#ip}
  */
  readonly ip: string;
}

export function networkDnsHostToTerraform(struct?: NetworkDnsHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(networkDnsHostHostnamesToTerraform, false)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function networkDnsHostToHclTerraform(struct?: NetworkDnsHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(networkDnsHostHostnamesToHclTerraform, false)(struct!.hostnames),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkDnsHostHostnamesList",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDnsHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDnsHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames?.internalValue;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDnsHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames.internalValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames.internalValue = value.hostnames;
      this._ip = value.ip;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames = new NetworkDnsHostHostnamesList(this, "hostnames", false);
  public get hostnames() {
    return this._hostnames;
  }
  public putHostnames(value: NetworkDnsHostHostnames[] | cdktf.IResolvable) {
    this._hostnames.internalValue = value;
  }
  public resetHostnames() {
    this._hostnames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames.internalValue;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class NetworkDnsHostList extends cdktf.ComplexList {
  public internalValue? : NetworkDnsHost[] | cdktf.IResolvable

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
  public get(index: number): NetworkDnsHostOutputReference {
    return new NetworkDnsHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDnsSrVs {
  /**
  * Sets the DNS domain in which the SRV record applies (the owner name’s domain part). The value is user-provided and should be a valid domain (e.g. "example.local").
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#domain Network#domain}
  */
  readonly domain?: string;
  /**
  * Sets the TCP or UDP port number on which the advertised service listens. The value should be an integer between 1 and 65535 (e.g. 80 or 443).
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#port Network#port}
  */
  readonly port?: number;
  /**
  * Sets the SRV record priority, used to order multiple records for the same service; lower values have higher priority. The value is an integer, typically non-negative (e.g. 0 or 10).
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#priority Network#priority}
  */
  readonly priority?: number;
  /**
  * Sets the transport protocol for the SRV record, typically "tcp" or "udp". The value is user-provided but should match the service’s actual protocol.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#protocol Network#protocol}
  */
  readonly protocol?: string;
  /**
  * Sets the service name part of the SRV record, without the leading underscore (e.g. "http", "ldap"). The value is user-provided and should be a valid service identifier.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#service Network#service}
  */
  readonly service?: string;
  /**
  * Sets the hostname of the server providing the advertised service, as returned in the SRV record. The value is user-provided and should be a resolvable hostname within or outside the virtual network.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#target Network#target}
  */
  readonly target?: string;
  /**
  * Sets the SRV record weight used to distribute traffic among records of the same priority. The value is an integer, typically non-negative (e.g. 0 or 50).
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#weight Network#weight}
  */
  readonly weight?: number;
}

export function networkDnsSrVsToTerraform(struct?: NetworkDnsSrVs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service: cdktf.stringToTerraform(struct!.service),
    target: cdktf.stringToTerraform(struct!.target),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function networkDnsSrVsToHclTerraform(struct?: NetworkDnsSrVs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDnsSrVsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDnsSrVs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDnsSrVs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._service = undefined;
      this._target = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._port = value.port;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._service = value.service;
      this._target = value.target;
      this._weight = value.weight;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // port - computed: false, optional: true, required: false
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

  // protocol - computed: false, optional: true, required: false
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class NetworkDnsSrVsList extends cdktf.ComplexList {
  public internalValue? : NetworkDnsSrVs[] | cdktf.IResolvable

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
  public get(index: number): NetworkDnsSrVsOutputReference {
    return new NetworkDnsSrVsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDnsTxTs {
  /**
  * Sets the DNS TXT record name advertised by the virtual network’s built‑in DNS server; the value is user‑provided (for example, a hostname or arbitrary label).
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#name Network#name}
  */
  readonly name: string;
  /**
  * Sets the DNS TXT record value string returned for the given TXT record name; the value is user‑provided and may contain any text permitted by DNS TXT records.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#value Network#value}
  */
  readonly value: string;
}

export function networkDnsTxTsToTerraform(struct?: NetworkDnsTxTs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkDnsTxTsToHclTerraform(struct?: NetworkDnsTxTs | cdktf.IResolvable): any {
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

export class NetworkDnsTxTsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDnsTxTs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkDnsTxTs | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetworkDnsTxTsList extends cdktf.ComplexList {
  public internalValue? : NetworkDnsTxTs[] | cdktf.IResolvable

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
  public get(index: number): NetworkDnsTxTsOutputReference {
    return new NetworkDnsTxTsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDns {
  /**
  * Controls whether the libvirt-managed DNS service for this network is enabled; accepts "yes" or "no". If omitted, libvirt’s default behavior applies.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#enable Network#enable}
  */
  readonly enable?: string;
  /**
  * Controls whether plain hostnames (without a domain suffix) are forwarded to upstream DNS servers; accepts "yes" or "no". If unset, libvirt uses its default for forwarding plain names.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#forward_plain_names Network#forward_plain_names}
  */
  readonly forwardPlainNames?: string;
  /**
  * Defines one or more upstream DNS forwarders that this network’s DNS server queries when resolving names. Each block configures a single <forwarder> entry.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#forwarders Network#forwarders}
  */
  readonly forwarders?: NetworkDnsForwarders[] | cdktf.IResolvable;
  /**
  * Defines a static DNS host entry mapping one IP address to one or more hostnames within this virtual network. Multiple host blocks may be used to configure several fixed name-to-address mappings.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#host Network#host}
  */
  readonly host?: NetworkDnsHost[] | cdktf.IResolvable;
  /**
  * Configures DNS SRV records served by this network’s DNS, describing services available under specific domains. Each block represents a single SRV record.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#sr_vs Network#sr_vs}
  */
  readonly srVs?: NetworkDnsSrVs[] | cdktf.IResolvable;
  /**
  * Configures DNS TXT records served by this network’s DNS, allowing arbitrary text data to be associated with names. Each block represents a single TXT record.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#tx_ts Network#tx_ts}
  */
  readonly txTs?: NetworkDnsTxTs[] | cdktf.IResolvable;
}

export function networkDnsToTerraform(struct?: NetworkDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    forward_plain_names: cdktf.stringToTerraform(struct!.forwardPlainNames),
    forwarders: cdktf.listMapper(networkDnsForwardersToTerraform, false)(struct!.forwarders),
    host: cdktf.listMapper(networkDnsHostToTerraform, false)(struct!.host),
    sr_vs: cdktf.listMapper(networkDnsSrVsToTerraform, false)(struct!.srVs),
    tx_ts: cdktf.listMapper(networkDnsTxTsToTerraform, false)(struct!.txTs),
  }
}


export function networkDnsToHclTerraform(struct?: NetworkDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_plain_names: {
      value: cdktf.stringToHclTerraform(struct!.forwardPlainNames),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarders: {
      value: cdktf.listMapperHcl(networkDnsForwardersToHclTerraform, false)(struct!.forwarders),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkDnsForwardersList",
    },
    host: {
      value: cdktf.listMapperHcl(networkDnsHostToHclTerraform, false)(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkDnsHostList",
    },
    sr_vs: {
      value: cdktf.listMapperHcl(networkDnsSrVsToHclTerraform, false)(struct!.srVs),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkDnsSrVsList",
    },
    tx_ts: {
      value: cdktf.listMapperHcl(networkDnsTxTsToHclTerraform, false)(struct!.txTs),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkDnsTxTsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._forwardPlainNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardPlainNames = this._forwardPlainNames;
    }
    if (this._forwarders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwarders = this._forwarders?.internalValue;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._srVs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srVs = this._srVs?.internalValue;
    }
    if (this._txTs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.txTs = this._txTs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._forwardPlainNames = undefined;
      this._forwarders.internalValue = undefined;
      this._host.internalValue = undefined;
      this._srVs.internalValue = undefined;
      this._txTs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._forwardPlainNames = value.forwardPlainNames;
      this._forwarders.internalValue = value.forwarders;
      this._host.internalValue = value.host;
      this._srVs.internalValue = value.srVs;
      this._txTs.internalValue = value.txTs;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // forward_plain_names - computed: false, optional: true, required: false
  private _forwardPlainNames?: string; 
  public get forwardPlainNames() {
    return this.getStringAttribute('forward_plain_names');
  }
  public set forwardPlainNames(value: string) {
    this._forwardPlainNames = value;
  }
  public resetForwardPlainNames() {
    this._forwardPlainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardPlainNamesInput() {
    return this._forwardPlainNames;
  }

  // forwarders - computed: false, optional: true, required: false
  private _forwarders = new NetworkDnsForwardersList(this, "forwarders", false);
  public get forwarders() {
    return this._forwarders;
  }
  public putForwarders(value: NetworkDnsForwarders[] | cdktf.IResolvable) {
    this._forwarders.internalValue = value;
  }
  public resetForwarders() {
    this._forwarders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersInput() {
    return this._forwarders.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new NetworkDnsHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: NetworkDnsHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // sr_vs - computed: false, optional: true, required: false
  private _srVs = new NetworkDnsSrVsList(this, "sr_vs", false);
  public get srVs() {
    return this._srVs;
  }
  public putSrVs(value: NetworkDnsSrVs[] | cdktf.IResolvable) {
    this._srVs.internalValue = value;
  }
  public resetSrVs() {
    this._srVs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srVsInput() {
    return this._srVs.internalValue;
  }

  // tx_ts - computed: false, optional: true, required: false
  private _txTs = new NetworkDnsTxTsList(this, "tx_ts", false);
  public get txTs() {
    return this._txTs;
  }
  public putTxTs(value: NetworkDnsTxTs[] | cdktf.IResolvable) {
    this._txTs.internalValue = value;
  }
  public resetTxTs() {
    this._txTs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txTsInput() {
    return this._txTs.internalValue;
  }
}
export interface NetworkDomain {
  /**
  * Controls whether the network domain is used only for local name resolution inside libvirt’s DNS (\"yes\" for local-only, \"no\" to allow external registration), with the value stored as a string flag.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#local_only Network#local_only}
  */
  readonly localOnly?: string;
  /**
  * Sets the DNS domain name associated with this virtual network (for example, \"virt.example.com\") that is appended to hostnames and exposed via DHCP/DNS.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#name Network#name}
  */
  readonly name?: string;
}

export function networkDomainToTerraform(struct?: NetworkDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_only: cdktf.stringToTerraform(struct!.localOnly),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function networkDomainToHclTerraform(struct?: NetworkDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_only: {
      value: cdktf.stringToHclTerraform(struct!.localOnly),
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

export class NetworkDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOnly = this._localOnly;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localOnly = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localOnly = value.localOnly;
      this._name = value.name;
    }
  }

  // local_only - computed: false, optional: true, required: false
  private _localOnly?: string; 
  public get localOnly() {
    return this.getStringAttribute('local_only');
  }
  public set localOnly(value: string) {
    this._localOnly = value;
  }
  public resetLocalOnly() {
    this._localOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOnlyInput() {
    return this._localOnly;
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
export interface NetworkForwardAddressesPci {
  /**
  * Sets the PCI bus number (in hexadecimal) of the forwarding device; the value must match the host’s PCI topology (e.g. \"03\").
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#bus Network#bus}
  */
  readonly bus?: number;
  /**
  * Sets the PCI domain number (in hexadecimal, usually \"0000\") of the forwarding device; the value must match the host’s PCI topology.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#domain Network#domain}
  */
  readonly domain?: number;
  /**
  * Sets the PCI function number (in hexadecimal, 0–7) of the forwarding device, completing the BDF identifier.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#function Network#function}
  */
  readonly function?: number;
  /**
  * Sets the PCI slot number (in hexadecimal) of the forwarding device; together with domain, bus, and function it uniquely identifies the PCI device.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#slot Network#slot}
  */
  readonly slot?: number;
}

export function networkForwardAddressesPciToTerraform(struct?: NetworkForwardAddressesPci | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus: cdktf.numberToTerraform(struct!.bus),
    domain: cdktf.numberToTerraform(struct!.domain),
    function: cdktf.numberToTerraform(struct!.function),
    slot: cdktf.numberToTerraform(struct!.slot),
  }
}


export function networkForwardAddressesPciToHclTerraform(struct?: NetworkForwardAddressesPci | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus: {
      value: cdktf.numberToHclTerraform(struct!.bus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain: {
      value: cdktf.numberToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    function: {
      value: cdktf.numberToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slot: {
      value: cdktf.numberToHclTerraform(struct!.slot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkForwardAddressesPciOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkForwardAddressesPci | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bus !== undefined) {
      hasAnyValues = true;
      internalValueResult.bus = this._bus;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._slot !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkForwardAddressesPci | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bus = undefined;
      this._domain = undefined;
      this._function = undefined;
      this._slot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bus = value.bus;
      this._domain = value.domain;
      this._function = value.function;
      this._slot = value.slot;
    }
  }

  // bus - computed: false, optional: true, required: false
  private _bus?: number; 
  public get bus() {
    return this.getNumberAttribute('bus');
  }
  public set bus(value: number) {
    this._bus = value;
  }
  public resetBus() {
    this._bus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busInput() {
    return this._bus;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: number; 
  public get domain() {
    return this.getNumberAttribute('domain');
  }
  public set domain(value: number) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // function - computed: false, optional: true, required: false
  private _function?: number; 
  public get function() {
    return this.getNumberAttribute('function');
  }
  public set function(value: number) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // slot - computed: false, optional: true, required: false
  private _slot?: number; 
  public get slot() {
    return this.getNumberAttribute('slot');
  }
  public set slot(value: number) {
    this._slot = value;
  }
  public resetSlot() {
    this._slot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }
}
export interface NetworkForwardAddresses {
  /**
  * Declares a PCI address used as a forwarding target, identifying a specific host PCI device through which the network is connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#pci Network#pci}
  */
  readonly pci?: NetworkForwardAddressesPci;
}

export function networkForwardAddressesToTerraform(struct?: NetworkForwardAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pci: networkForwardAddressesPciToTerraform(struct!.pci),
  }
}


export function networkForwardAddressesToHclTerraform(struct?: NetworkForwardAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pci: {
      value: networkForwardAddressesPciToHclTerraform(struct!.pci),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkForwardAddressesPci",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkForwardAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkForwardAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pci?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pci = this._pci?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkForwardAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pci.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pci.internalValue = value.pci;
    }
  }

  // pci - computed: false, optional: true, required: false
  private _pci = new NetworkForwardAddressesPciOutputReference(this, "pci");
  public get pci() {
    return this._pci;
  }
  public putPci(value: NetworkForwardAddressesPci) {
    this._pci.internalValue = value;
  }
  public resetPci() {
    this._pci.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciInput() {
    return this._pci.internalValue;
  }
}

export class NetworkForwardAddressesList extends cdktf.ComplexList {
  public internalValue? : NetworkForwardAddresses[] | cdktf.IResolvable

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
  public get(index: number): NetworkForwardAddressesOutputReference {
    return new NetworkForwardAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkForwardDriver {
  /**
  * Sets the driver model used for forwarding (for example, a specific macvtap or SR‑IOV mode), with the exact string value being driver-specific and user‑provided.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#model Network#model}
  */
  readonly model?: string;
  /**
  * Sets the forwarding driver backend name (e.g. a specific implementation used by the hypervisor), with the value being user‑provided.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#name Network#name}
  */
  readonly name?: string;
}

export function networkForwardDriverToTerraform(struct?: NetworkForwardDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function networkForwardDriverToHclTerraform(struct?: NetworkForwardDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
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

export class NetworkForwardDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkForwardDriver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkForwardDriver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model = value.model;
      this._name = value.name;
    }
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
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
export interface NetworkForwardInterfaces {
  /**
  * Specifies the name of a host interface (e.g. \"eth1\") used as an individual forwarding endpoint within the virtual network.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#dev Network#dev}
  */
  readonly dev?: string;
}

export function networkForwardInterfacesToTerraform(struct?: NetworkForwardInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev: cdktf.stringToTerraform(struct!.dev),
  }
}


export function networkForwardInterfacesToHclTerraform(struct?: NetworkForwardInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev: {
      value: cdktf.stringToHclTerraform(struct!.dev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkForwardInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkForwardInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dev !== undefined) {
      hasAnyValues = true;
      internalValueResult.dev = this._dev;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkForwardInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dev = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dev = value.dev;
    }
  }

  // dev - computed: false, optional: true, required: false
  private _dev?: string; 
  public get dev() {
    return this.getStringAttribute('dev');
  }
  public set dev(value: string) {
    this._dev = value;
  }
  public resetDev() {
    this._dev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devInput() {
    return this._dev;
  }
}

export class NetworkForwardInterfacesList extends cdktf.ComplexList {
  public internalValue? : NetworkForwardInterfaces[] | cdktf.IResolvable

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
  public get(index: number): NetworkForwardInterfacesOutputReference {
    return new NetworkForwardInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkForwardNatAddresses {
  /**
  * Sets the last IP address in the NAT external address range; must be in the same family and >= the start address (e.g. "192.168.122.254").
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#end Network#end}
  */
  readonly end: string;
  /**
  * Sets the first IP address in the NAT external address range; must be a valid IPv4 or IPv6 address (e.g. "192.168.122.1").
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#start Network#start}
  */
  readonly start: string;
}

export function networkForwardNatAddressesToTerraform(struct?: NetworkForwardNatAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function networkForwardNatAddressesToHclTerraform(struct?: NetworkForwardNatAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkForwardNatAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkForwardNatAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkForwardNatAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class NetworkForwardNatAddressesList extends cdktf.ComplexList {
  public internalValue? : NetworkForwardNatAddresses[] | cdktf.IResolvable

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
  public get(index: number): NetworkForwardNatAddressesOutputReference {
    return new NetworkForwardNatAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkForwardNatPorts {
  /**
  * Sets the last port number in the NAT port range; must be an integer between 1 and 65535 and >= the start port.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#end Network#end}
  */
  readonly end: number;
  /**
  * Sets the first port number in the NAT port range; must be an integer between 1 and 65535 (e.g. 1024).
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#start Network#start}
  */
  readonly start: number;
}

export function networkForwardNatPortsToTerraform(struct?: NetworkForwardNatPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function networkForwardNatPortsToHclTerraform(struct?: NetworkForwardNatPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkForwardNatPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkForwardNatPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkForwardNatPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class NetworkForwardNatPortsList extends cdktf.ComplexList {
  public internalValue? : NetworkForwardNatPorts[] | cdktf.IResolvable

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
  public get(index: number): NetworkForwardNatPortsOutputReference {
    return new NetworkForwardNatPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkForwardNat {
  /**
  * Sets one or more address ranges used as the external source addresses for NAT, each defined by a start and end IP.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#addresses Network#addresses}
  */
  readonly addresses?: NetworkForwardNatAddresses[] | cdktf.IResolvable;
  /**
  * Controls whether this NAT configuration applies to IPv6 traffic; value is user-provided and typically "yes" or "no".
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#ipv6 Network#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Sets one or more port ranges to be used for NAT translation, each defined by a start and end port.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#ports Network#ports}
  */
  readonly ports?: NetworkForwardNatPorts[] | cdktf.IResolvable;
}

export function networkForwardNatToTerraform(struct?: NetworkForwardNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(networkForwardNatAddressesToTerraform, false)(struct!.addresses),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    ports: cdktf.listMapper(networkForwardNatPortsToTerraform, false)(struct!.ports),
  }
}


export function networkForwardNatToHclTerraform(struct?: NetworkForwardNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(networkForwardNatAddressesToHclTerraform, false)(struct!.addresses),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkForwardNatAddressesList",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(networkForwardNatPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkForwardNatPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkForwardNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkForwardNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses?.internalValue;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkForwardNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses.internalValue = undefined;
      this._ipv6 = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses.internalValue = value.addresses;
      this._ipv6 = value.ipv6;
      this._ports.internalValue = value.ports;
    }
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses = new NetworkForwardNatAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: NetworkForwardNatAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new NetworkForwardNatPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: NetworkForwardNatPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}
export interface NetworkForwardPfs {
  /**
  * Sets the name of the underlying physical network device to be used by this forwarding interface (e.g. "eth0").
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#dev Network#dev}
  */
  readonly dev: string;
}

export function networkForwardPfsToTerraform(struct?: NetworkForwardPfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev: cdktf.stringToTerraform(struct!.dev),
  }
}


export function networkForwardPfsToHclTerraform(struct?: NetworkForwardPfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev: {
      value: cdktf.stringToHclTerraform(struct!.dev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkForwardPfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkForwardPfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dev !== undefined) {
      hasAnyValues = true;
      internalValueResult.dev = this._dev;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkForwardPfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dev = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dev = value.dev;
    }
  }

  // dev - computed: false, optional: false, required: true
  private _dev?: string; 
  public get dev() {
    return this.getStringAttribute('dev');
  }
  public set dev(value: string) {
    this._dev = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devInput() {
    return this._dev;
  }
}

export class NetworkForwardPfsList extends cdktf.ComplexList {
  public internalValue? : NetworkForwardPfs[] | cdktf.IResolvable

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
  public get(index: number): NetworkForwardPfsOutputReference {
    return new NetworkForwardPfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkForward {
  /**
  * Lists one or more forwarding endpoint addresses (typically physical devices or PCI addresses) used when the network is in a passthrough/hostdev style forward mode.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#addresses Network#addresses}
  */
  readonly addresses?: NetworkForwardAddresses[] | cdktf.IResolvable;
  /**
  * Specifies a single host network interface name (e.g. \"eth0\", \"br0\") that this virtual network forwards through; used by several forward modes such as \"route\", \"nat\", or \"bridge\".
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#dev Network#dev}
  */
  readonly dev?: string;
  /**
  * Configures driver-specific settings for the network forward, allowing selection or tuning of the underlying forwarding implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#driver Network#driver}
  */
  readonly driver?: NetworkForwardDriver;
  /**
  * Lists one or more host interfaces that participate in this network’s forwarding (for multi‑NIC or aggregated configurations).
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#interfaces Network#interfaces}
  */
  readonly interfaces?: NetworkForwardInterfaces[] | cdktf.IResolvable;
  /**
  * Controls whether libvirt manages the lifecycle of the underlying forwarding interfaces and devices, stored as a \"yes\"/\"no\" string but exposed as a boolean in Terraform.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#managed Network#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * Sets the forwarding mode of the virtual network, with valid values including \"nat\", \"route\", \"bridge\", \"open\", \"vepa\", \"passthrough\", or \"private\" depending on the desired connectivity model.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#mode Network#mode}
  */
  readonly mode?: string;
  /**
  * Configures NAT-specific options for the network’s forward mode, including address and port ranges used for translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#nat Network#nat}
  */
  readonly nat?: NetworkForwardNat;
  /**
  * Declares one or more physical forwarding interfaces (port forwarding devices) used by the network’s forward mode.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#pfs Network#pfs}
  */
  readonly pfs?: NetworkForwardPfs[] | cdktf.IResolvable;
}

export function networkForwardToTerraform(struct?: NetworkForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(networkForwardAddressesToTerraform, false)(struct!.addresses),
    dev: cdktf.stringToTerraform(struct!.dev),
    driver: networkForwardDriverToTerraform(struct!.driver),
    interfaces: cdktf.listMapper(networkForwardInterfacesToTerraform, false)(struct!.interfaces),
    managed: cdktf.booleanToTerraform(struct!.managed),
    mode: cdktf.stringToTerraform(struct!.mode),
    nat: networkForwardNatToTerraform(struct!.nat),
    pfs: cdktf.listMapper(networkForwardPfsToTerraform, false)(struct!.pfs),
  }
}


export function networkForwardToHclTerraform(struct?: NetworkForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(networkForwardAddressesToHclTerraform, false)(struct!.addresses),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkForwardAddressesList",
    },
    dev: {
      value: cdktf.stringToHclTerraform(struct!.dev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver: {
      value: networkForwardDriverToHclTerraform(struct!.driver),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkForwardDriver",
    },
    interfaces: {
      value: cdktf.listMapperHcl(networkForwardInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkForwardInterfacesList",
    },
    managed: {
      value: cdktf.booleanToHclTerraform(struct!.managed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat: {
      value: networkForwardNatToHclTerraform(struct!.nat),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkForwardNat",
    },
    pfs: {
      value: cdktf.listMapperHcl(networkForwardPfsToHclTerraform, false)(struct!.pfs),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkForwardPfsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkForwardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkForward | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses?.internalValue;
    }
    if (this._dev !== undefined) {
      hasAnyValues = true;
      internalValueResult.dev = this._dev;
    }
    if (this._driver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver?.internalValue;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._managed !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._nat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat?.internalValue;
    }
    if (this._pfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfs = this._pfs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkForward | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses.internalValue = undefined;
      this._dev = undefined;
      this._driver.internalValue = undefined;
      this._interfaces.internalValue = undefined;
      this._managed = undefined;
      this._mode = undefined;
      this._nat.internalValue = undefined;
      this._pfs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses.internalValue = value.addresses;
      this._dev = value.dev;
      this._driver.internalValue = value.driver;
      this._interfaces.internalValue = value.interfaces;
      this._managed = value.managed;
      this._mode = value.mode;
      this._nat.internalValue = value.nat;
      this._pfs.internalValue = value.pfs;
    }
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses = new NetworkForwardAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: NetworkForwardAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // dev - computed: false, optional: true, required: false
  private _dev?: string; 
  public get dev() {
    return this.getStringAttribute('dev');
  }
  public set dev(value: string) {
    this._dev = value;
  }
  public resetDev() {
    this._dev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devInput() {
    return this._dev;
  }

  // driver - computed: false, optional: true, required: false
  private _driver = new NetworkForwardDriverOutputReference(this, "driver");
  public get driver() {
    return this._driver;
  }
  public putDriver(value: NetworkForwardDriver) {
    this._driver.internalValue = value;
  }
  public resetDriver() {
    this._driver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new NetworkForwardInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: NetworkForwardInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
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

  // nat - computed: false, optional: true, required: false
  private _nat = new NetworkForwardNatOutputReference(this, "nat");
  public get nat() {
    return this._nat;
  }
  public putNat(value: NetworkForwardNat) {
    this._nat.internalValue = value;
  }
  public resetNat() {
    this._nat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat.internalValue;
  }

  // pfs - computed: false, optional: true, required: false
  private _pfs = new NetworkForwardPfsList(this, "pfs", false);
  public get pfs() {
    return this._pfs;
  }
  public putPfs(value: NetworkForwardPfs[] | cdktf.IResolvable) {
    this._pfs.internalValue = value;
  }
  public resetPfs() {
    this._pfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsInput() {
    return this._pfs.internalValue;
  }
}
export interface NetworkIpsDhcpBootp {
  /**
  * Sets the boot file name advertised via BOOTP/PXE (for example "pxelinux.0" or "bootx64.efi").
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#file Network#file}
  */
  readonly file?: string;
  /**
  * Sets the IP address of the TFTP/boot server advertised via BOOTP; must be a valid IPv4 or IPv6 address.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#server Network#server}
  */
  readonly server?: string;
}

export function networkIpsDhcpBootpToTerraform(struct?: NetworkIpsDhcpBootp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function networkIpsDhcpBootpToHclTerraform(struct?: NetworkIpsDhcpBootp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkIpsDhcpBootpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkIpsDhcpBootp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIpsDhcpBootp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._server = value.server;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

export class NetworkIpsDhcpBootpList extends cdktf.ComplexList {
  public internalValue? : NetworkIpsDhcpBootp[] | cdktf.IResolvable

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
  public get(index: number): NetworkIpsDhcpBootpOutputReference {
    return new NetworkIpsDhcpBootpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkIpsDhcpHostsLease {
  /**
  * Sets the DHCP lease time for a static host entry, as a numeric duration value whose interpretation depends on `unit` (for example, `3600` when `unit` is `seconds`).
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#expiry Network#expiry}
  */
  readonly expiry: number;
  /**
  * Sets the time unit used for the host DHCP lease `expiry`, with valid values `seconds`, `minutes`, or `hours`.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#unit Network#unit}
  */
  readonly unit?: string;
}

export function networkIpsDhcpHostsLeaseToTerraform(struct?: NetworkIpsDhcpHostsLease | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiry: cdktf.numberToTerraform(struct!.expiry),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function networkIpsDhcpHostsLeaseToHclTerraform(struct?: NetworkIpsDhcpHostsLease | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiry: {
      value: cdktf.numberToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkIpsDhcpHostsLeaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkIpsDhcpHostsLease | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIpsDhcpHostsLease | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiry = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiry = value.expiry;
      this._unit = value.unit;
    }
  }

  // expiry - computed: false, optional: false, required: true
  private _expiry?: number; 
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }
  public set expiry(value: number) {
    this._expiry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface NetworkIpsDhcpHosts {
  /**
  * Sets the fixed IP address that the DHCP server always assigns to this host; must be within the network’s address range.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#ip Network#ip}
  */
  readonly ip?: string;
  /**
  * Configures the lease parameters for this static DHCP host entry, such as expiry; the structure and values are user-provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#lease Network#lease}
  */
  readonly lease?: NetworkIpsDhcpHostsLease;
  /**
  * Sets the MAC address for a static DHCP host entry; must be a valid MAC such as `52:54:00:12:34:56`.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#mac Network#mac}
  */
  readonly mac?: string;
  /**
  * Sets the hostname to be handed out via DHCP for this static host entry; the value is user-provided.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#name Network#name}
  */
  readonly name?: string;
}

export function networkIpsDhcpHostsToTerraform(struct?: NetworkIpsDhcpHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    lease: networkIpsDhcpHostsLeaseToTerraform(struct!.lease),
    mac: cdktf.stringToTerraform(struct!.mac),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function networkIpsDhcpHostsToHclTerraform(struct?: NetworkIpsDhcpHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lease: {
      value: networkIpsDhcpHostsLeaseToHclTerraform(struct!.lease),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkIpsDhcpHostsLease",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
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

export class NetworkIpsDhcpHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkIpsDhcpHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._lease?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lease = this._lease?.internalValue;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIpsDhcpHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._lease.internalValue = undefined;
      this._mac = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._lease.internalValue = value.lease;
      this._mac = value.mac;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // lease - computed: false, optional: true, required: false
  private _lease = new NetworkIpsDhcpHostsLeaseOutputReference(this, "lease");
  public get lease() {
    return this._lease;
  }
  public putLease(value: NetworkIpsDhcpHostsLease) {
    this._lease.internalValue = value;
  }
  public resetLease() {
    this._lease.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseInput() {
    return this._lease.internalValue;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

export class NetworkIpsDhcpHostsList extends cdktf.ComplexList {
  public internalValue? : NetworkIpsDhcpHosts[] | cdktf.IResolvable

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
  public get(index: number): NetworkIpsDhcpHostsOutputReference {
    return new NetworkIpsDhcpHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkIpsDhcpRangesLease {
  /**
  * Sets the DHCP lease time for a static host entry, as a numeric duration value whose interpretation depends on `unit` (for example, `3600` when `unit` is `seconds`).
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#expiry Network#expiry}
  */
  readonly expiry: number;
  /**
  * Sets the time unit used for the host DHCP lease `expiry`, with valid values `seconds`, `minutes`, or `hours`.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#unit Network#unit}
  */
  readonly unit?: string;
}

export function networkIpsDhcpRangesLeaseToTerraform(struct?: NetworkIpsDhcpRangesLease | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiry: cdktf.numberToTerraform(struct!.expiry),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function networkIpsDhcpRangesLeaseToHclTerraform(struct?: NetworkIpsDhcpRangesLease | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiry: {
      value: cdktf.numberToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkIpsDhcpRangesLeaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkIpsDhcpRangesLease | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIpsDhcpRangesLease | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiry = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiry = value.expiry;
      this._unit = value.unit;
    }
  }

  // expiry - computed: false, optional: false, required: true
  private _expiry?: number; 
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }
  public set expiry(value: number) {
    this._expiry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface NetworkIpsDhcpRanges {
  /**
  * Sets the end address (inclusive) of a DHCP range; must be an IP in the same subnet as the parent `ip`.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#end Network#end}
  */
  readonly end?: string;
  /**
  * Configures the lease parameters for this static DHCP host entry, such as expiry; the structure and values are user-provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#lease Network#lease}
  */
  readonly lease?: NetworkIpsDhcpRangesLease;
  /**
  * Sets the starting address of a DHCP range; must be an IP in the same subnet as the parent `ip`.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#start Network#start}
  */
  readonly start?: string;
}

export function networkIpsDhcpRangesToTerraform(struct?: NetworkIpsDhcpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    lease: networkIpsDhcpRangesLeaseToTerraform(struct!.lease),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function networkIpsDhcpRangesToHclTerraform(struct?: NetworkIpsDhcpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lease: {
      value: networkIpsDhcpRangesLeaseToHclTerraform(struct!.lease),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkIpsDhcpRangesLease",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkIpsDhcpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkIpsDhcpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._lease?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lease = this._lease?.internalValue;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIpsDhcpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._lease.internalValue = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._lease.internalValue = value.lease;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // lease - computed: false, optional: true, required: false
  private _lease = new NetworkIpsDhcpRangesLeaseOutputReference(this, "lease");
  public get lease() {
    return this._lease;
  }
  public putLease(value: NetworkIpsDhcpRangesLease) {
    this._lease.internalValue = value;
  }
  public resetLease() {
    this._lease.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseInput() {
    return this._lease.internalValue;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class NetworkIpsDhcpRangesList extends cdktf.ComplexList {
  public internalValue? : NetworkIpsDhcpRanges[] | cdktf.IResolvable

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
  public get(index: number): NetworkIpsDhcpRangesOutputReference {
    return new NetworkIpsDhcpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkIpsDhcp {
  /**
  * Configures BOOTP options for this DHCP range, such as the boot file and TFTP server used by PXE/BOOTP clients.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#bootp Network#bootp}
  */
  readonly bootp?: NetworkIpsDhcpBootp[] | cdktf.IResolvable;
  /**
  * Defines one or more static DHCP host entries that map specific clients to fixed IP and lease settings.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#hosts Network#hosts}
  */
  readonly hosts?: NetworkIpsDhcpHosts[] | cdktf.IResolvable;
  /**
  * Configures one or more dynamic DHCP address ranges associated with this IP subnet.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#ranges Network#ranges}
  */
  readonly ranges?: NetworkIpsDhcpRanges[] | cdktf.IResolvable;
}

export function networkIpsDhcpToTerraform(struct?: NetworkIpsDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootp: cdktf.listMapper(networkIpsDhcpBootpToTerraform, false)(struct!.bootp),
    hosts: cdktf.listMapper(networkIpsDhcpHostsToTerraform, false)(struct!.hosts),
    ranges: cdktf.listMapper(networkIpsDhcpRangesToTerraform, false)(struct!.ranges),
  }
}


export function networkIpsDhcpToHclTerraform(struct?: NetworkIpsDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootp: {
      value: cdktf.listMapperHcl(networkIpsDhcpBootpToHclTerraform, false)(struct!.bootp),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkIpsDhcpBootpList",
    },
    hosts: {
      value: cdktf.listMapperHcl(networkIpsDhcpHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkIpsDhcpHostsList",
    },
    ranges: {
      value: cdktf.listMapperHcl(networkIpsDhcpRangesToHclTerraform, false)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkIpsDhcpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkIpsDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkIpsDhcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootp = this._bootp?.internalValue;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIpsDhcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootp.internalValue = undefined;
      this._hosts.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootp.internalValue = value.bootp;
      this._hosts.internalValue = value.hosts;
      this._ranges.internalValue = value.ranges;
    }
  }

  // bootp - computed: false, optional: true, required: false
  private _bootp = new NetworkIpsDhcpBootpList(this, "bootp", false);
  public get bootp() {
    return this._bootp;
  }
  public putBootp(value: NetworkIpsDhcpBootp[] | cdktf.IResolvable) {
    this._bootp.internalValue = value;
  }
  public resetBootp() {
    this._bootp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootpInput() {
    return this._bootp.internalValue;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new NetworkIpsDhcpHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: NetworkIpsDhcpHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new NetworkIpsDhcpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: NetworkIpsDhcpRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}
export interface NetworkIpsTftp {
  /**
  * Sets the filesystem directory that TFTP will expose as its root for this network IP; value is a host path such as `/var/lib/tftpboot`.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#root Network#root}
  */
  readonly root?: string;
}

export function networkIpsTftpToTerraform(struct?: NetworkIpsTftp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    root: cdktf.stringToTerraform(struct!.root),
  }
}


export function networkIpsTftpToHclTerraform(struct?: NetworkIpsTftp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    root: {
      value: cdktf.stringToHclTerraform(struct!.root),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkIpsTftpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkIpsTftp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._root !== undefined) {
      hasAnyValues = true;
      internalValueResult.root = this._root;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIpsTftp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._root = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._root = value.root;
    }
  }

  // root - computed: false, optional: true, required: false
  private _root?: string; 
  public get root() {
    return this.getStringAttribute('root');
  }
  public set root(value: string) {
    this._root = value;
  }
  public resetRoot() {
    this._root = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootInput() {
    return this._root;
  }
}
export interface NetworkIps {
  /**
  * Sets the IP address assigned to the network bridge for this family; must be a valid IPv4 or IPv6 address (e.g. "192.168.122.1").
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#address Network#address}
  */
  readonly address?: string;
  /**
  * Enables and configures DHCP service for this IP configuration, including BOOTP and static host entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#dhcp Network#dhcp}
  */
  readonly dhcp?: NetworkIpsDhcp;
  /**
  * Selects the IP address family for this address, typically `ipv4` or `ipv6`; if omitted, libvirt infers it from the address format.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#family Network#family}
  */
  readonly family?: string;
  /**
  * Controls whether DNS PTR records for addresses in this subnet are generated only for this network (`yes`) or can be forwarded (`no`); value is `yes` or `no`.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#local_ptr Network#local_ptr}
  */
  readonly localPtr?: string;
  /**
  * Sets the IPv4 netmask for this subnet; must be a dotted-quad such as `255.255.255.0` and is mutually exclusive with `prefix`.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#netmask Network#netmask}
  */
  readonly netmask?: string;
  /**
  * Sets the CIDR prefix length for this subnet (commonly used for IPv6, e.g. `64`, but also valid for IPv4); mutually exclusive with `netmask`.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#prefix Network#prefix}
  */
  readonly prefix?: number;
  /**
  * Enables optional TFTP service for this network IP and configures its parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#tftp Network#tftp}
  */
  readonly tftp?: NetworkIpsTftp;
}

export function networkIpsToTerraform(struct?: NetworkIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    dhcp: networkIpsDhcpToTerraform(struct!.dhcp),
    family: cdktf.stringToTerraform(struct!.family),
    local_ptr: cdktf.stringToTerraform(struct!.localPtr),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    prefix: cdktf.numberToTerraform(struct!.prefix),
    tftp: networkIpsTftpToTerraform(struct!.tftp),
  }
}


export function networkIpsToHclTerraform(struct?: NetworkIps | cdktf.IResolvable): any {
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
    dhcp: {
      value: networkIpsDhcpToHclTerraform(struct!.dhcp),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkIpsDhcp",
    },
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ptr: {
      value: cdktf.stringToHclTerraform(struct!.localPtr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.numberToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tftp: {
      value: networkIpsTftpToHclTerraform(struct!.tftp),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkIpsTftp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._dhcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp?.internalValue;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._localPtr !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPtr = this._localPtr;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tftp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tftp = this._tftp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._dhcp.internalValue = undefined;
      this._family = undefined;
      this._localPtr = undefined;
      this._netmask = undefined;
      this._prefix = undefined;
      this._tftp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._dhcp.internalValue = value.dhcp;
      this._family = value.family;
      this._localPtr = value.localPtr;
      this._netmask = value.netmask;
      this._prefix = value.prefix;
      this._tftp.internalValue = value.tftp;
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

  // dhcp - computed: false, optional: true, required: false
  private _dhcp = new NetworkIpsDhcpOutputReference(this, "dhcp");
  public get dhcp() {
    return this._dhcp;
  }
  public putDhcp(value: NetworkIpsDhcp) {
    this._dhcp.internalValue = value;
  }
  public resetDhcp() {
    this._dhcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp.internalValue;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // local_ptr - computed: false, optional: true, required: false
  private _localPtr?: string; 
  public get localPtr() {
    return this.getStringAttribute('local_ptr');
  }
  public set localPtr(value: string) {
    this._localPtr = value;
  }
  public resetLocalPtr() {
    this._localPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPtrInput() {
    return this._localPtr;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tftp - computed: false, optional: true, required: false
  private _tftp = new NetworkIpsTftpOutputReference(this, "tftp");
  public get tftp() {
    return this._tftp;
  }
  public putTftp(value: NetworkIpsTftp) {
    this._tftp.internalValue = value;
  }
  public resetTftp() {
    this._tftp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpInput() {
    return this._tftp.internalValue;
  }
}

export class NetworkIpsList extends cdktf.ComplexList {
  public internalValue? : NetworkIps[] | cdktf.IResolvable

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
  public get(index: number): NetworkIpsOutputReference {
    return new NetworkIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkMac {
  /**
  * Sets the MAC address of the bridge associated with this virtual network; must be a valid MAC such as `52:54:00:ab:cd:ef`.
  * 
  * See: <https://libvirt.org/formatnetwork.html#addressing>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#address Network#address}
  */
  readonly address?: string;
}

export function networkMacToTerraform(struct?: NetworkMac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function networkMacToHclTerraform(struct?: NetworkMac | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkMac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
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
}
export interface NetworkMetadata {
  /**
  * Sets arbitrary user-defined XML metadata attached to the network; libvirt stores it verbatim and does not interpret its contents.
  * 
  * See: <https://libvirt.org/formatnetwork.html#general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#xml Network#xml}
  */
  readonly xml: string;
}

export function networkMetadataToTerraform(struct?: NetworkMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xml: cdktf.stringToTerraform(struct!.xml),
  }
}


export function networkMetadataToHclTerraform(struct?: NetworkMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xml: {
      value: cdktf.stringToHclTerraform(struct!.xml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xml !== undefined) {
      hasAnyValues = true;
      internalValueResult.xml = this._xml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._xml = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._xml = value.xml;
    }
  }

  // xml - computed: false, optional: false, required: true
  private _xml?: string; 
  public get xml() {
    return this.getStringAttribute('xml');
  }
  public set xml(value: string) {
    this._xml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlInput() {
    return this._xml;
  }
}
export interface NetworkMtu {
  /**
  * Sets the MTU size (non-negative integer, in bytes) for the network’s bridge or interface, e.g. 1500 or 9000.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#size Network#size}
  */
  readonly size: number;
}

export function networkMtuToTerraform(struct?: NetworkMtu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function networkMtuToHclTerraform(struct?: NetworkMtu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkMtuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkMtu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkMtu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
    }
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface NetworkPortGroupsVirtualPortParamsAny {
  /**
  * Sets the instance identifier for the generic port profile, typically a UUID string unique per attached interface instance.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#instance_id Network#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Sets the interface identifier for the generic port profile, usually a stable ID used by the external switch to identify the virtual NIC.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#interface_id Network#interface_id}
  */
  readonly interfaceId?: string;
  /**
  * Sets the manager identifier for the generic port profile, typically a numeric or string ID identifying the external network management system.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#manager_id Network#manager_id}
  */
  readonly managerId?: number;
  /**
  * Sets the profile identifier for the generic port profile, referencing a logical port profile defined in the external network manager.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#profile_id Network#profile_id}
  */
  readonly profileId?: string;
  /**
  * Sets the type identifier for the generic port profile, defining the semantic type of the profile as expected by the external switch; value is user-provided.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#type_id Network#type_id}
  */
  readonly typeId?: number;
  /**
  * Sets the version of the type identifier for the generic port profile, allowing the external manager to distinguish revisions; value is user-provided.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#type_id_version Network#type_id_version}
  */
  readonly typeIdVersion?: number;
}

export function networkPortGroupsVirtualPortParamsAnyToTerraform(struct?: NetworkPortGroupsVirtualPortParamsAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    interface_id: cdktf.stringToTerraform(struct!.interfaceId),
    manager_id: cdktf.numberToTerraform(struct!.managerId),
    profile_id: cdktf.stringToTerraform(struct!.profileId),
    type_id: cdktf.numberToTerraform(struct!.typeId),
    type_id_version: cdktf.numberToTerraform(struct!.typeIdVersion),
  }
}


export function networkPortGroupsVirtualPortParamsAnyToHclTerraform(struct?: NetworkPortGroupsVirtualPortParamsAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_id: {
      value: cdktf.stringToHclTerraform(struct!.interfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manager_id: {
      value: cdktf.numberToHclTerraform(struct!.managerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_id: {
      value: cdktf.numberToHclTerraform(struct!.typeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_id_version: {
      value: cdktf.numberToHclTerraform(struct!.typeIdVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPortGroupsVirtualPortParamsAnyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkPortGroupsVirtualPortParamsAny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._interfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceId = this._interfaceId;
    }
    if (this._managerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managerId = this._managerId;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    if (this._typeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeId = this._typeId;
    }
    if (this._typeIdVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeIdVersion = this._typeIdVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPortGroupsVirtualPortParamsAny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._interfaceId = undefined;
      this._managerId = undefined;
      this._profileId = undefined;
      this._typeId = undefined;
      this._typeIdVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._interfaceId = value.interfaceId;
      this._managerId = value.managerId;
      this._profileId = value.profileId;
      this._typeId = value.typeId;
      this._typeIdVersion = value.typeIdVersion;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // interface_id - computed: false, optional: true, required: false
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

  // manager_id - computed: false, optional: true, required: false
  private _managerId?: number; 
  public get managerId() {
    return this.getNumberAttribute('manager_id');
  }
  public set managerId(value: number) {
    this._managerId = value;
  }
  public resetManagerId() {
    this._managerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdInput() {
    return this._managerId;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // type_id - computed: false, optional: true, required: false
  private _typeId?: number; 
  public get typeId() {
    return this.getNumberAttribute('type_id');
  }
  public set typeId(value: number) {
    this._typeId = value;
  }
  public resetTypeId() {
    this._typeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }

  // type_id_version - computed: false, optional: true, required: false
  private _typeIdVersion?: number; 
  public get typeIdVersion() {
    return this.getNumberAttribute('type_id_version');
  }
  public set typeIdVersion(value: number) {
    this._typeIdVersion = value;
  }
  public resetTypeIdVersion() {
    this._typeIdVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdVersionInput() {
    return this._typeIdVersion;
  }
}
export interface NetworkPortGroupsVirtualPortParamsMidoNet {
  /**
  * Sets the MidoNet interface identifier, typically a UUID or opaque string that MidoNet uses to match the guest interface to a virtual port.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#interface_id Network#interface_id}
  */
  readonly interfaceId?: string;
}

export function networkPortGroupsVirtualPortParamsMidoNetToTerraform(struct?: NetworkPortGroupsVirtualPortParamsMidoNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_id: cdktf.stringToTerraform(struct!.interfaceId),
  }
}


export function networkPortGroupsVirtualPortParamsMidoNetToHclTerraform(struct?: NetworkPortGroupsVirtualPortParamsMidoNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_id: {
      value: cdktf.stringToHclTerraform(struct!.interfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPortGroupsVirtualPortParamsMidoNetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkPortGroupsVirtualPortParamsMidoNet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceId = this._interfaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPortGroupsVirtualPortParamsMidoNet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceId = value.interfaceId;
    }
  }

  // interface_id - computed: false, optional: true, required: false
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
}
export interface NetworkPortGroupsVirtualPortParamsOpenVSwitch {
  /**
  * Sets the Open vSwitch interface identifier (interfaceid) for ports in this portgroup; value is user-provided and typically matches the UUID or name expected by the OVS integration on the host.
  * 
  * See: <https://libvirt.org/formatdomain.html#virtual-network>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#interface_id Network#interface_id}
  */
  readonly interfaceId?: string;
  /**
  * Sets the Open vSwitch profile identifier (profileid) for ports in this portgroup; value is user-provided and used by OVS or higher-level controllers to apply a specific port profile.
  * 
  * See: <https://libvirt.org/formatdomain.html#virtual-network>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#profile_id Network#profile_id}
  */
  readonly profileId?: string;
}

export function networkPortGroupsVirtualPortParamsOpenVSwitchToTerraform(struct?: NetworkPortGroupsVirtualPortParamsOpenVSwitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_id: cdktf.stringToTerraform(struct!.interfaceId),
    profile_id: cdktf.stringToTerraform(struct!.profileId),
  }
}


export function networkPortGroupsVirtualPortParamsOpenVSwitchToHclTerraform(struct?: NetworkPortGroupsVirtualPortParamsOpenVSwitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_id: {
      value: cdktf.stringToHclTerraform(struct!.interfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPortGroupsVirtualPortParamsOpenVSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkPortGroupsVirtualPortParamsOpenVSwitch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceId = this._interfaceId;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPortGroupsVirtualPortParamsOpenVSwitch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceId = undefined;
      this._profileId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceId = value.interfaceId;
      this._profileId = value.profileId;
    }
  }

  // interface_id - computed: false, optional: true, required: false
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

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }
}
export interface NetworkPortGroupsVirtualPortParamsVepa8021Qbg {
  /**
  * Sets the 802.1Qbg VEPA instance identifier (instanceid) for this port profile; value is user-provided and usually a unique identifier (often UUID-like) assigned by the EVB manager.
  * 
  * See: <https://libvirt.org/formatdomain.html#direct-attachment-to-physical-interface>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#instance_id Network#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Sets the 802.1Qbg VEPA manager identifier (managerid) that identifies the external EVB manager controlling this profile; value is user-provided numeric or string ID.
  * 
  * See: <https://libvirt.org/formatdomain.html#direct-attachment-to-physical-interface>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#manager_id Network#manager_id}
  */
  readonly managerId?: number;
  /**
  * Sets the 802.1Qbg VEPA type identifier (typeid) indicating what kind of profile is referenced; value is user-provided and must match the EVB manager’s expectations.
  * 
  * See: <https://libvirt.org/formatdomain.html#direct-attachment-to-physical-interface>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#type_id Network#type_id}
  */
  readonly typeId?: number;
  /**
  * Sets the 802.1Qbg VEPA type identifier version (typeidversion) for this profile; value is user-provided and typically a small integer version understood by the EVB manager.
  * 
  * See: <https://libvirt.org/formatdomain.html#direct-attachment-to-physical-interface>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#type_id_version Network#type_id_version}
  */
  readonly typeIdVersion?: number;
}

export function networkPortGroupsVirtualPortParamsVepa8021QbgToTerraform(struct?: NetworkPortGroupsVirtualPortParamsVepa8021Qbg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    manager_id: cdktf.numberToTerraform(struct!.managerId),
    type_id: cdktf.numberToTerraform(struct!.typeId),
    type_id_version: cdktf.numberToTerraform(struct!.typeIdVersion),
  }
}


export function networkPortGroupsVirtualPortParamsVepa8021QbgToHclTerraform(struct?: NetworkPortGroupsVirtualPortParamsVepa8021Qbg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manager_id: {
      value: cdktf.numberToHclTerraform(struct!.managerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_id: {
      value: cdktf.numberToHclTerraform(struct!.typeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_id_version: {
      value: cdktf.numberToHclTerraform(struct!.typeIdVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPortGroupsVirtualPortParamsVepa8021QbgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkPortGroupsVirtualPortParamsVepa8021Qbg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._managerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managerId = this._managerId;
    }
    if (this._typeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeId = this._typeId;
    }
    if (this._typeIdVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeIdVersion = this._typeIdVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPortGroupsVirtualPortParamsVepa8021Qbg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._managerId = undefined;
      this._typeId = undefined;
      this._typeIdVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._managerId = value.managerId;
      this._typeId = value.typeId;
      this._typeIdVersion = value.typeIdVersion;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // manager_id - computed: false, optional: true, required: false
  private _managerId?: number; 
  public get managerId() {
    return this.getNumberAttribute('manager_id');
  }
  public set managerId(value: number) {
    this._managerId = value;
  }
  public resetManagerId() {
    this._managerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdInput() {
    return this._managerId;
  }

  // type_id - computed: false, optional: true, required: false
  private _typeId?: number; 
  public get typeId() {
    return this.getNumberAttribute('type_id');
  }
  public set typeId(value: number) {
    this._typeId = value;
  }
  public resetTypeId() {
    this._typeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }

  // type_id_version - computed: false, optional: true, required: false
  private _typeIdVersion?: number; 
  public get typeIdVersion() {
    return this.getNumberAttribute('type_id_version');
  }
  public set typeIdVersion(value: number) {
    this._typeIdVersion = value;
  }
  public resetTypeIdVersion() {
    this._typeIdVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdVersionInput() {
    return this._typeIdVersion;
  }
}
export interface NetworkPortGroupsVirtualPortParamsVnTag8011Qbh {
  /**
  * Sets the 802.1Qbh VN-Tag profile identifier (profileid) for this portgroup; value is user-provided and should match the profile configured on the VN-Tag–aware switch.
  * 
  * See: <https://libvirt.org/formatdomain.html#direct-attachment-to-physical-interface>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#profile_id Network#profile_id}
  */
  readonly profileId?: string;
}

export function networkPortGroupsVirtualPortParamsVnTag8011QbhToTerraform(struct?: NetworkPortGroupsVirtualPortParamsVnTag8011Qbh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_id: cdktf.stringToTerraform(struct!.profileId),
  }
}


export function networkPortGroupsVirtualPortParamsVnTag8011QbhToHclTerraform(struct?: NetworkPortGroupsVirtualPortParamsVnTag8011Qbh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPortGroupsVirtualPortParamsVnTag8011QbhOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkPortGroupsVirtualPortParamsVnTag8011Qbh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPortGroupsVirtualPortParamsVnTag8011Qbh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileId = value.profileId;
    }
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }
}
export interface NetworkPortGroupsVirtualPortParams {
  /**
  * Configures a generic (IEEE 802.1Qbg-style) port profile, using opaque identifiers understood by an external network manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#any Network#any}
  */
  readonly any?: NetworkPortGroupsVirtualPortParamsAny;
  /**
  * Configures MidoNet-specific virtual port parameters for this port group, enabling integration with a MidoNet SDN controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#mido_net Network#mido_net}
  */
  readonly midoNet?: NetworkPortGroupsVirtualPortParamsMidoNet;
  /**
  * Configures Open vSwitch-specific virtual port parameters for this port group, enabling OVS-aware port profiling; all values are user-provided and interpreted by OVS tooling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#open_v_switch Network#open_v_switch}
  */
  readonly openVSwitch?: NetworkPortGroupsVirtualPortParamsOpenVSwitch;
  /**
  * Enables configuration of IEEE 802.1Qbg VEPA virtual port profile parameters for this portgroup, allowing association with an external Edge Virtual Bridging (EVB) manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#vepa8021qbg Network#vepa8021qbg}
  */
  readonly vepa8021Qbg?: NetworkPortGroupsVirtualPortParamsVepa8021Qbg;
  /**
  * Enables configuration of IEEE 802.1Qbh VN-Tag virtual port profile parameters for this portgroup, used with hardware that supports Cisco VN-Tag or similar tagging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#vn_tag8011qbh Network#vn_tag8011qbh}
  */
  readonly vnTag8011Qbh?: NetworkPortGroupsVirtualPortParamsVnTag8011Qbh;
}

export function networkPortGroupsVirtualPortParamsToTerraform(struct?: NetworkPortGroupsVirtualPortParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: networkPortGroupsVirtualPortParamsAnyToTerraform(struct!.any),
    mido_net: networkPortGroupsVirtualPortParamsMidoNetToTerraform(struct!.midoNet),
    open_v_switch: networkPortGroupsVirtualPortParamsOpenVSwitchToTerraform(struct!.openVSwitch),
    vepa8021qbg: networkPortGroupsVirtualPortParamsVepa8021QbgToTerraform(struct!.vepa8021Qbg),
    vn_tag8011qbh: networkPortGroupsVirtualPortParamsVnTag8011QbhToTerraform(struct!.vnTag8011Qbh),
  }
}


export function networkPortGroupsVirtualPortParamsToHclTerraform(struct?: NetworkPortGroupsVirtualPortParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: networkPortGroupsVirtualPortParamsAnyToHclTerraform(struct!.any),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkPortGroupsVirtualPortParamsAny",
    },
    mido_net: {
      value: networkPortGroupsVirtualPortParamsMidoNetToHclTerraform(struct!.midoNet),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkPortGroupsVirtualPortParamsMidoNet",
    },
    open_v_switch: {
      value: networkPortGroupsVirtualPortParamsOpenVSwitchToHclTerraform(struct!.openVSwitch),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkPortGroupsVirtualPortParamsOpenVSwitch",
    },
    vepa8021qbg: {
      value: networkPortGroupsVirtualPortParamsVepa8021QbgToHclTerraform(struct!.vepa8021Qbg),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkPortGroupsVirtualPortParamsVepa8021Qbg",
    },
    vn_tag8011qbh: {
      value: networkPortGroupsVirtualPortParamsVnTag8011QbhToHclTerraform(struct!.vnTag8011Qbh),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkPortGroupsVirtualPortParamsVnTag8011Qbh",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPortGroupsVirtualPortParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkPortGroupsVirtualPortParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any?.internalValue;
    }
    if (this._midoNet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.midoNet = this._midoNet?.internalValue;
    }
    if (this._openVSwitch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openVSwitch = this._openVSwitch?.internalValue;
    }
    if (this._vepa8021Qbg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vepa8021Qbg = this._vepa8021Qbg?.internalValue;
    }
    if (this._vnTag8011Qbh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnTag8011Qbh = this._vnTag8011Qbh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPortGroupsVirtualPortParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._any.internalValue = undefined;
      this._midoNet.internalValue = undefined;
      this._openVSwitch.internalValue = undefined;
      this._vepa8021Qbg.internalValue = undefined;
      this._vnTag8011Qbh.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._any.internalValue = value.any;
      this._midoNet.internalValue = value.midoNet;
      this._openVSwitch.internalValue = value.openVSwitch;
      this._vepa8021Qbg.internalValue = value.vepa8021Qbg;
      this._vnTag8011Qbh.internalValue = value.vnTag8011Qbh;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any = new NetworkPortGroupsVirtualPortParamsAnyOutputReference(this, "any");
  public get any() {
    return this._any;
  }
  public putAny(value: NetworkPortGroupsVirtualPortParamsAny) {
    this._any.internalValue = value;
  }
  public resetAny() {
    this._any.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any.internalValue;
  }

  // mido_net - computed: false, optional: true, required: false
  private _midoNet = new NetworkPortGroupsVirtualPortParamsMidoNetOutputReference(this, "mido_net");
  public get midoNet() {
    return this._midoNet;
  }
  public putMidoNet(value: NetworkPortGroupsVirtualPortParamsMidoNet) {
    this._midoNet.internalValue = value;
  }
  public resetMidoNet() {
    this._midoNet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get midoNetInput() {
    return this._midoNet.internalValue;
  }

  // open_v_switch - computed: false, optional: true, required: false
  private _openVSwitch = new NetworkPortGroupsVirtualPortParamsOpenVSwitchOutputReference(this, "open_v_switch");
  public get openVSwitch() {
    return this._openVSwitch;
  }
  public putOpenVSwitch(value: NetworkPortGroupsVirtualPortParamsOpenVSwitch) {
    this._openVSwitch.internalValue = value;
  }
  public resetOpenVSwitch() {
    this._openVSwitch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openVSwitchInput() {
    return this._openVSwitch.internalValue;
  }

  // vepa8021qbg - computed: false, optional: true, required: false
  private _vepa8021Qbg = new NetworkPortGroupsVirtualPortParamsVepa8021QbgOutputReference(this, "vepa8021qbg");
  public get vepa8021Qbg() {
    return this._vepa8021Qbg;
  }
  public putVepa8021Qbg(value: NetworkPortGroupsVirtualPortParamsVepa8021Qbg) {
    this._vepa8021Qbg.internalValue = value;
  }
  public resetVepa8021Qbg() {
    this._vepa8021Qbg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepa8021QbgInput() {
    return this._vepa8021Qbg.internalValue;
  }

  // vn_tag8011qbh - computed: false, optional: true, required: false
  private _vnTag8011Qbh = new NetworkPortGroupsVirtualPortParamsVnTag8011QbhOutputReference(this, "vn_tag8011qbh");
  public get vnTag8011Qbh() {
    return this._vnTag8011Qbh;
  }
  public putVnTag8011Qbh(value: NetworkPortGroupsVirtualPortParamsVnTag8011Qbh) {
    this._vnTag8011Qbh.internalValue = value;
  }
  public resetVnTag8011Qbh() {
    this._vnTag8011Qbh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnTag8011QbhInput() {
    return this._vnTag8011Qbh.internalValue;
  }
}
export interface NetworkPortGroupsVirtualPort {
  /**
  * Provides backend-specific virtual port profile parameters for this port group, with one child element per backend type (e.g. Any, MidoNet, OpenVSwitch).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#params Network#params}
  */
  readonly params?: NetworkPortGroupsVirtualPortParams;
}

export function networkPortGroupsVirtualPortToTerraform(struct?: NetworkPortGroupsVirtualPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: networkPortGroupsVirtualPortParamsToTerraform(struct!.params),
  }
}


export function networkPortGroupsVirtualPortToHclTerraform(struct?: NetworkPortGroupsVirtualPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    params: {
      value: networkPortGroupsVirtualPortParamsToHclTerraform(struct!.params),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkPortGroupsVirtualPortParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPortGroupsVirtualPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkPortGroupsVirtualPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPortGroupsVirtualPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._params.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._params.internalValue = value.params;
    }
  }

  // params - computed: false, optional: true, required: false
  private _params = new NetworkPortGroupsVirtualPortParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: NetworkPortGroupsVirtualPortParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}
export interface NetworkPortGroupsVlanTags {
  /**
  * Sets whether this VLAN tag is treated as native on the trunk for this portgroup; valid values are user-provided strings such as "tagged" or "untagged" as supported by libvirt/qemu.
  * 
  * See: <https://libvirt.org/formatnetwork.html#setting-vlan-tag-on-supported-network-types-only>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#native_mode Network#native_mode}
  */
  readonly nativeMode?: string;
}

export function networkPortGroupsVlanTagsToTerraform(struct?: NetworkPortGroupsVlanTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    native_mode: cdktf.stringToTerraform(struct!.nativeMode),
  }
}


export function networkPortGroupsVlanTagsToHclTerraform(struct?: NetworkPortGroupsVlanTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    native_mode: {
      value: cdktf.stringToHclTerraform(struct!.nativeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPortGroupsVlanTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPortGroupsVlanTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nativeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeMode = this._nativeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPortGroupsVlanTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nativeMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nativeMode = value.nativeMode;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // native_mode - computed: false, optional: true, required: false
  private _nativeMode?: string; 
  public get nativeMode() {
    return this.getStringAttribute('native_mode');
  }
  public set nativeMode(value: string) {
    this._nativeMode = value;
  }
  public resetNativeMode() {
    this._nativeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeModeInput() {
    return this._nativeMode;
  }
}

export class NetworkPortGroupsVlanTagsList extends cdktf.ComplexList {
  public internalValue? : NetworkPortGroupsVlanTags[] | cdktf.IResolvable

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
  public get(index: number): NetworkPortGroupsVlanTagsOutputReference {
    return new NetworkPortGroupsVlanTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPortGroupsVlan {
  /**
  * Defines one or more VLAN tag entries for this portgroup; each tag specifies a VLAN ID, and optionally native-mode behavior, applied to guest traffic.
  * 
  * See: <https://libvirt.org/formatnetwork.html#setting-vlan-tag-on-supported-network-types-only>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#tags Network#tags}
  */
  readonly tags?: NetworkPortGroupsVlanTags[] | cdktf.IResolvable;
  /**
  * Controls whether this portgroup’s VLAN configuration operates in trunk mode, allowing multiple VLAN tags; value is a yes/no string flag, where "yes" enables trunk mode.
  * 
  * See: <https://libvirt.org/formatnetwork.html#setting-vlan-tag-on-supported-network-types-only>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#trunk Network#trunk}
  */
  readonly trunk?: string;
}

export function networkPortGroupsVlanToTerraform(struct?: NetworkPortGroupsVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(networkPortGroupsVlanTagsToTerraform, false)(struct!.tags),
    trunk: cdktf.stringToTerraform(struct!.trunk),
  }
}


export function networkPortGroupsVlanToHclTerraform(struct?: NetworkPortGroupsVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(networkPortGroupsVlanTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPortGroupsVlanTagsList",
    },
    trunk: {
      value: cdktf.stringToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPortGroupsVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkPortGroupsVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPortGroupsVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags.internalValue = undefined;
      this._trunk = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags.internalValue = value.tags;
      this._trunk = value.trunk;
    }
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NetworkPortGroupsVlanTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkPortGroupsVlanTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: string; 
  public get trunk() {
    return this.getStringAttribute('trunk');
  }
  public set trunk(value: string) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }
}
export interface NetworkPortGroups {
  /**
  * Marks this port group as the default when guests do not explicitly select a port group; value is a yes/no style flag (typically "yes" or "no").
  * 
  * See: <https://libvirt.org/formatnetwork.html#portgroups>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#default Network#default}
  */
  readonly default?: string;
  /**
  * Sets the name of the port group, used by guest interfaces to select this group by reference; value is user-provided and must be unique within the network.
  * 
  * See: <https://libvirt.org/formatnetwork.html#portgroups>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#name Network#name}
  */
  readonly name?: string;
  /**
  * Controls whether the network trusts receive-filter programming from guests attached via this port group; value is a yes/no style flag ("yes" to trust, "no" to ignore).
  * 
  * See: <https://libvirt.org/formatnetwork.html#portgroups>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#trust_guest_rx_filters Network#trust_guest_rx_filters}
  */
  readonly trustGuestRxFilters?: string;
  /**
  * Configures virtual port profile information for this port group, enabling integration with external network switching or SDN systems.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#virtual_port Network#virtual_port}
  */
  readonly virtualPort?: NetworkPortGroupsVirtualPort;
  /**
  * Configures VLAN tagging behavior for this portgroup, allowing one or more VLAN tags to be applied to guest connections when the underlying network supports VLAN offload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#vlan Network#vlan}
  */
  readonly vlan?: NetworkPortGroupsVlan;
}

export function networkPortGroupsToTerraform(struct?: NetworkPortGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
    trust_guest_rx_filters: cdktf.stringToTerraform(struct!.trustGuestRxFilters),
    virtual_port: networkPortGroupsVirtualPortToTerraform(struct!.virtualPort),
    vlan: networkPortGroupsVlanToTerraform(struct!.vlan),
  }
}


export function networkPortGroupsToHclTerraform(struct?: NetworkPortGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    trust_guest_rx_filters: {
      value: cdktf.stringToHclTerraform(struct!.trustGuestRxFilters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_port: {
      value: networkPortGroupsVirtualPortToHclTerraform(struct!.virtualPort),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkPortGroupsVirtualPort",
    },
    vlan: {
      value: networkPortGroupsVlanToHclTerraform(struct!.vlan),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkPortGroupsVlan",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPortGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._trustGuestRxFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustGuestRxFilters = this._trustGuestRxFilters;
    }
    if (this._virtualPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPort = this._virtualPort?.internalValue;
    }
    if (this._vlan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPortGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._name = undefined;
      this._trustGuestRxFilters = undefined;
      this._virtualPort.internalValue = undefined;
      this._vlan.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._name = value.name;
      this._trustGuestRxFilters = value.trustGuestRxFilters;
      this._virtualPort.internalValue = value.virtualPort;
      this._vlan.internalValue = value.vlan;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // trust_guest_rx_filters - computed: false, optional: true, required: false
  private _trustGuestRxFilters?: string; 
  public get trustGuestRxFilters() {
    return this.getStringAttribute('trust_guest_rx_filters');
  }
  public set trustGuestRxFilters(value: string) {
    this._trustGuestRxFilters = value;
  }
  public resetTrustGuestRxFilters() {
    this._trustGuestRxFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustGuestRxFiltersInput() {
    return this._trustGuestRxFilters;
  }

  // virtual_port - computed: false, optional: true, required: false
  private _virtualPort = new NetworkPortGroupsVirtualPortOutputReference(this, "virtual_port");
  public get virtualPort() {
    return this._virtualPort;
  }
  public putVirtualPort(value: NetworkPortGroupsVirtualPort) {
    this._virtualPort.internalValue = value;
  }
  public resetVirtualPort() {
    this._virtualPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortInput() {
    return this._virtualPort.internalValue;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan = new NetworkPortGroupsVlanOutputReference(this, "vlan");
  public get vlan() {
    return this._vlan;
  }
  public putVlan(value: NetworkPortGroupsVlan) {
    this._vlan.internalValue = value;
  }
  public resetVlan() {
    this._vlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan.internalValue;
  }
}

export class NetworkPortGroupsList extends cdktf.ComplexList {
  public internalValue? : NetworkPortGroups[] | cdktf.IResolvable

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
  public get(index: number): NetworkPortGroupsOutputReference {
    return new NetworkPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPortOptions {
  /**
  * Controls whether each guest port on this network is isolated from all other guest ports on the same network; valid values are "yes" or "no" (default is "no" when omitted).
  * 
  * See: <https://libvirt.org/formatnetwork.html#isolating-ports-from-one-another>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#isolated Network#isolated}
  */
  readonly isolated?: string;
}

export function networkPortOptionsToTerraform(struct?: NetworkPortOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isolated: cdktf.stringToTerraform(struct!.isolated),
  }
}


export function networkPortOptionsToHclTerraform(struct?: NetworkPortOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isolated: {
      value: cdktf.stringToHclTerraform(struct!.isolated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPortOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkPortOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isolated !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolated = this._isolated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPortOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isolated = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isolated = value.isolated;
    }
  }

  // isolated - computed: false, optional: true, required: false
  private _isolated?: string; 
  public get isolated() {
    return this.getStringAttribute('isolated');
  }
  public set isolated(value: string) {
    this._isolated = value;
  }
  public resetIsolated() {
    this._isolated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolatedInput() {
    return this._isolated;
  }
}
export interface NetworkRoutes {
  /**
  * Sets the destination network address (in IPv4 or IPv6 form) for this static route; value is user-provided and should match the route’s prefix (e.g. "192.168.2.0/24" or "2001:db8::/64").
  * 
  * See: <https://libvirt.org/formatnetwork.html#static-routes>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#address Network#address}
  */
  readonly address?: string;
  /**
  * Specifies the address family for this static route; valid values are "ipv4" or "ipv6".
  * 
  * See: <https://libvirt.org/formatnetwork.html#static-routes>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#family Network#family}
  */
  readonly family?: string;
  /**
  * Sets the next-hop gateway IP address for this static route, pointing to a guest-accessible router; value is user-provided and must be in the family specified by family.
  * 
  * See: <https://libvirt.org/formatnetwork.html#static-routes>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#gateway Network#gateway}
  */
  readonly gateway?: string;
  /**
  * Sets the routing metric for this static route; lower values have higher priority, and the value is a user-provided non-negative integer.
  * 
  * See: <https://libvirt.org/formatnetwork.html#static-routes>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#metric Network#metric}
  */
  readonly metric?: string;
  /**
  * Sets the IPv4 netmask for the destination of this static route as a dotted-quad string (for example, "255.255.255.0"); use this instead of prefix for netmask-based routes.
  * 
  * See: <https://libvirt.org/formatnetwork.html#static-routes>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#netmask Network#netmask}
  */
  readonly netmask?: string;
  /**
  * Sets the CIDR prefix length for the destination of this static route as a user-provided integer between 0 and 128 (depending on IPv4/IPv6); use this instead of netmask for prefix-based routes.
  * 
  * See: <https://libvirt.org/formatnetwork.html#static-routes>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#prefix Network#prefix}
  */
  readonly prefix?: number;
}

export function networkRoutesToTerraform(struct?: NetworkRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    family: cdktf.stringToTerraform(struct!.family),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    metric: cdktf.stringToTerraform(struct!.metric),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    prefix: cdktf.numberToTerraform(struct!.prefix),
  }
}


export function networkRoutesToHclTerraform(struct?: NetworkRoutes | cdktf.IResolvable): any {
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
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
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
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.numberToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._family = undefined;
      this._gateway = undefined;
      this._metric = undefined;
      this._netmask = undefined;
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
      this._family = value.family;
      this._gateway = value.gateway;
      this._metric = value.metric;
      this._netmask = value.netmask;
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

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // gateway - computed: false, optional: true, required: false
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

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
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

export class NetworkRoutesList extends cdktf.ComplexList {
  public internalValue? : NetworkRoutes[] | cdktf.IResolvable

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
  public get(index: number): NetworkRoutesOutputReference {
    return new NetworkRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkVirtualPortParamsAny {
  /**
  * Sets the instance identifier for the generic port profile, typically a UUID string unique per attached interface instance.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#instance_id Network#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Sets the interface identifier for the generic port profile, usually a stable ID used by the external switch to identify the virtual NIC.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#interface_id Network#interface_id}
  */
  readonly interfaceId?: string;
  /**
  * Sets the manager identifier for the generic port profile, typically a numeric or string ID identifying the external network management system.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#manager_id Network#manager_id}
  */
  readonly managerId?: number;
  /**
  * Sets the profile identifier for the generic port profile, referencing a logical port profile defined in the external network manager.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#profile_id Network#profile_id}
  */
  readonly profileId?: string;
  /**
  * Sets the type identifier for the generic port profile, defining the semantic type of the profile as expected by the external switch; value is user-provided.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#type_id Network#type_id}
  */
  readonly typeId?: number;
  /**
  * Sets the version of the type identifier for the generic port profile, allowing the external manager to distinguish revisions; value is user-provided.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#type_id_version Network#type_id_version}
  */
  readonly typeIdVersion?: number;
}

export function networkVirtualPortParamsAnyToTerraform(struct?: NetworkVirtualPortParamsAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    interface_id: cdktf.stringToTerraform(struct!.interfaceId),
    manager_id: cdktf.numberToTerraform(struct!.managerId),
    profile_id: cdktf.stringToTerraform(struct!.profileId),
    type_id: cdktf.numberToTerraform(struct!.typeId),
    type_id_version: cdktf.numberToTerraform(struct!.typeIdVersion),
  }
}


export function networkVirtualPortParamsAnyToHclTerraform(struct?: NetworkVirtualPortParamsAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_id: {
      value: cdktf.stringToHclTerraform(struct!.interfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manager_id: {
      value: cdktf.numberToHclTerraform(struct!.managerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_id: {
      value: cdktf.numberToHclTerraform(struct!.typeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_id_version: {
      value: cdktf.numberToHclTerraform(struct!.typeIdVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVirtualPortParamsAnyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkVirtualPortParamsAny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._interfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceId = this._interfaceId;
    }
    if (this._managerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managerId = this._managerId;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    if (this._typeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeId = this._typeId;
    }
    if (this._typeIdVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeIdVersion = this._typeIdVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVirtualPortParamsAny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._interfaceId = undefined;
      this._managerId = undefined;
      this._profileId = undefined;
      this._typeId = undefined;
      this._typeIdVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._interfaceId = value.interfaceId;
      this._managerId = value.managerId;
      this._profileId = value.profileId;
      this._typeId = value.typeId;
      this._typeIdVersion = value.typeIdVersion;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // interface_id - computed: false, optional: true, required: false
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

  // manager_id - computed: false, optional: true, required: false
  private _managerId?: number; 
  public get managerId() {
    return this.getNumberAttribute('manager_id');
  }
  public set managerId(value: number) {
    this._managerId = value;
  }
  public resetManagerId() {
    this._managerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdInput() {
    return this._managerId;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // type_id - computed: false, optional: true, required: false
  private _typeId?: number; 
  public get typeId() {
    return this.getNumberAttribute('type_id');
  }
  public set typeId(value: number) {
    this._typeId = value;
  }
  public resetTypeId() {
    this._typeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }

  // type_id_version - computed: false, optional: true, required: false
  private _typeIdVersion?: number; 
  public get typeIdVersion() {
    return this.getNumberAttribute('type_id_version');
  }
  public set typeIdVersion(value: number) {
    this._typeIdVersion = value;
  }
  public resetTypeIdVersion() {
    this._typeIdVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdVersionInput() {
    return this._typeIdVersion;
  }
}
export interface NetworkVirtualPortParamsMidoNet {
  /**
  * Sets the MidoNet interface identifier, typically a UUID or opaque string that MidoNet uses to match the guest interface to a virtual port.
  * 
  * See: <https://libvirt.org/formatnetwork.html#connectivity>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#interface_id Network#interface_id}
  */
  readonly interfaceId?: string;
}

export function networkVirtualPortParamsMidoNetToTerraform(struct?: NetworkVirtualPortParamsMidoNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_id: cdktf.stringToTerraform(struct!.interfaceId),
  }
}


export function networkVirtualPortParamsMidoNetToHclTerraform(struct?: NetworkVirtualPortParamsMidoNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_id: {
      value: cdktf.stringToHclTerraform(struct!.interfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVirtualPortParamsMidoNetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkVirtualPortParamsMidoNet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceId = this._interfaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVirtualPortParamsMidoNet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceId = value.interfaceId;
    }
  }

  // interface_id - computed: false, optional: true, required: false
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
}
export interface NetworkVirtualPortParamsOpenVSwitch {
  /**
  * Sets the Open vSwitch interface identifier (interfaceid) for ports in this portgroup; value is user-provided and typically matches the UUID or name expected by the OVS integration on the host.
  * 
  * See: <https://libvirt.org/formatdomain.html#virtual-network>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#interface_id Network#interface_id}
  */
  readonly interfaceId?: string;
  /**
  * Sets the Open vSwitch profile identifier (profileid) for ports in this portgroup; value is user-provided and used by OVS or higher-level controllers to apply a specific port profile.
  * 
  * See: <https://libvirt.org/formatdomain.html#virtual-network>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#profile_id Network#profile_id}
  */
  readonly profileId?: string;
}

export function networkVirtualPortParamsOpenVSwitchToTerraform(struct?: NetworkVirtualPortParamsOpenVSwitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_id: cdktf.stringToTerraform(struct!.interfaceId),
    profile_id: cdktf.stringToTerraform(struct!.profileId),
  }
}


export function networkVirtualPortParamsOpenVSwitchToHclTerraform(struct?: NetworkVirtualPortParamsOpenVSwitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_id: {
      value: cdktf.stringToHclTerraform(struct!.interfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVirtualPortParamsOpenVSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkVirtualPortParamsOpenVSwitch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceId = this._interfaceId;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVirtualPortParamsOpenVSwitch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceId = undefined;
      this._profileId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceId = value.interfaceId;
      this._profileId = value.profileId;
    }
  }

  // interface_id - computed: false, optional: true, required: false
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

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }
}
export interface NetworkVirtualPortParamsVepa8021Qbg {
  /**
  * Sets the 802.1Qbg VEPA instance identifier (instanceid) for this port profile; value is user-provided and usually a unique identifier (often UUID-like) assigned by the EVB manager.
  * 
  * See: <https://libvirt.org/formatdomain.html#direct-attachment-to-physical-interface>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#instance_id Network#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Sets the 802.1Qbg VEPA manager identifier (managerid) that identifies the external EVB manager controlling this profile; value is user-provided numeric or string ID.
  * 
  * See: <https://libvirt.org/formatdomain.html#direct-attachment-to-physical-interface>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#manager_id Network#manager_id}
  */
  readonly managerId?: number;
  /**
  * Sets the 802.1Qbg VEPA type identifier (typeid) indicating what kind of profile is referenced; value is user-provided and must match the EVB manager’s expectations.
  * 
  * See: <https://libvirt.org/formatdomain.html#direct-attachment-to-physical-interface>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#type_id Network#type_id}
  */
  readonly typeId?: number;
  /**
  * Sets the 802.1Qbg VEPA type identifier version (typeidversion) for this profile; value is user-provided and typically a small integer version understood by the EVB manager.
  * 
  * See: <https://libvirt.org/formatdomain.html#direct-attachment-to-physical-interface>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#type_id_version Network#type_id_version}
  */
  readonly typeIdVersion?: number;
}

export function networkVirtualPortParamsVepa8021QbgToTerraform(struct?: NetworkVirtualPortParamsVepa8021Qbg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    manager_id: cdktf.numberToTerraform(struct!.managerId),
    type_id: cdktf.numberToTerraform(struct!.typeId),
    type_id_version: cdktf.numberToTerraform(struct!.typeIdVersion),
  }
}


export function networkVirtualPortParamsVepa8021QbgToHclTerraform(struct?: NetworkVirtualPortParamsVepa8021Qbg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manager_id: {
      value: cdktf.numberToHclTerraform(struct!.managerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_id: {
      value: cdktf.numberToHclTerraform(struct!.typeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_id_version: {
      value: cdktf.numberToHclTerraform(struct!.typeIdVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVirtualPortParamsVepa8021QbgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkVirtualPortParamsVepa8021Qbg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._managerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managerId = this._managerId;
    }
    if (this._typeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeId = this._typeId;
    }
    if (this._typeIdVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeIdVersion = this._typeIdVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVirtualPortParamsVepa8021Qbg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._managerId = undefined;
      this._typeId = undefined;
      this._typeIdVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._managerId = value.managerId;
      this._typeId = value.typeId;
      this._typeIdVersion = value.typeIdVersion;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // manager_id - computed: false, optional: true, required: false
  private _managerId?: number; 
  public get managerId() {
    return this.getNumberAttribute('manager_id');
  }
  public set managerId(value: number) {
    this._managerId = value;
  }
  public resetManagerId() {
    this._managerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdInput() {
    return this._managerId;
  }

  // type_id - computed: false, optional: true, required: false
  private _typeId?: number; 
  public get typeId() {
    return this.getNumberAttribute('type_id');
  }
  public set typeId(value: number) {
    this._typeId = value;
  }
  public resetTypeId() {
    this._typeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }

  // type_id_version - computed: false, optional: true, required: false
  private _typeIdVersion?: number; 
  public get typeIdVersion() {
    return this.getNumberAttribute('type_id_version');
  }
  public set typeIdVersion(value: number) {
    this._typeIdVersion = value;
  }
  public resetTypeIdVersion() {
    this._typeIdVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdVersionInput() {
    return this._typeIdVersion;
  }
}
export interface NetworkVirtualPortParamsVnTag8011Qbh {
  /**
  * Sets the 802.1Qbh VN-Tag profile identifier (profileid) for this portgroup; value is user-provided and should match the profile configured on the VN-Tag–aware switch.
  * 
  * See: <https://libvirt.org/formatdomain.html#direct-attachment-to-physical-interface>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#profile_id Network#profile_id}
  */
  readonly profileId?: string;
}

export function networkVirtualPortParamsVnTag8011QbhToTerraform(struct?: NetworkVirtualPortParamsVnTag8011Qbh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_id: cdktf.stringToTerraform(struct!.profileId),
  }
}


export function networkVirtualPortParamsVnTag8011QbhToHclTerraform(struct?: NetworkVirtualPortParamsVnTag8011Qbh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVirtualPortParamsVnTag8011QbhOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkVirtualPortParamsVnTag8011Qbh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVirtualPortParamsVnTag8011Qbh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileId = value.profileId;
    }
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }
}
export interface NetworkVirtualPortParams {
  /**
  * Configures a generic (IEEE 802.1Qbg-style) port profile, using opaque identifiers understood by an external network manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#any Network#any}
  */
  readonly any?: NetworkVirtualPortParamsAny;
  /**
  * Configures MidoNet-specific virtual port parameters for this port group, enabling integration with a MidoNet SDN controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#mido_net Network#mido_net}
  */
  readonly midoNet?: NetworkVirtualPortParamsMidoNet;
  /**
  * Configures Open vSwitch-specific virtual port parameters for this port group, enabling OVS-aware port profiling; all values are user-provided and interpreted by OVS tooling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#open_v_switch Network#open_v_switch}
  */
  readonly openVSwitch?: NetworkVirtualPortParamsOpenVSwitch;
  /**
  * Enables configuration of IEEE 802.1Qbg VEPA virtual port profile parameters for this portgroup, allowing association with an external Edge Virtual Bridging (EVB) manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#vepa8021qbg Network#vepa8021qbg}
  */
  readonly vepa8021Qbg?: NetworkVirtualPortParamsVepa8021Qbg;
  /**
  * Enables configuration of IEEE 802.1Qbh VN-Tag virtual port profile parameters for this portgroup, used with hardware that supports Cisco VN-Tag or similar tagging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#vn_tag8011qbh Network#vn_tag8011qbh}
  */
  readonly vnTag8011Qbh?: NetworkVirtualPortParamsVnTag8011Qbh;
}

export function networkVirtualPortParamsToTerraform(struct?: NetworkVirtualPortParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: networkVirtualPortParamsAnyToTerraform(struct!.any),
    mido_net: networkVirtualPortParamsMidoNetToTerraform(struct!.midoNet),
    open_v_switch: networkVirtualPortParamsOpenVSwitchToTerraform(struct!.openVSwitch),
    vepa8021qbg: networkVirtualPortParamsVepa8021QbgToTerraform(struct!.vepa8021Qbg),
    vn_tag8011qbh: networkVirtualPortParamsVnTag8011QbhToTerraform(struct!.vnTag8011Qbh),
  }
}


export function networkVirtualPortParamsToHclTerraform(struct?: NetworkVirtualPortParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: networkVirtualPortParamsAnyToHclTerraform(struct!.any),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkVirtualPortParamsAny",
    },
    mido_net: {
      value: networkVirtualPortParamsMidoNetToHclTerraform(struct!.midoNet),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkVirtualPortParamsMidoNet",
    },
    open_v_switch: {
      value: networkVirtualPortParamsOpenVSwitchToHclTerraform(struct!.openVSwitch),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkVirtualPortParamsOpenVSwitch",
    },
    vepa8021qbg: {
      value: networkVirtualPortParamsVepa8021QbgToHclTerraform(struct!.vepa8021Qbg),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkVirtualPortParamsVepa8021Qbg",
    },
    vn_tag8011qbh: {
      value: networkVirtualPortParamsVnTag8011QbhToHclTerraform(struct!.vnTag8011Qbh),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkVirtualPortParamsVnTag8011Qbh",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVirtualPortParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkVirtualPortParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any?.internalValue;
    }
    if (this._midoNet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.midoNet = this._midoNet?.internalValue;
    }
    if (this._openVSwitch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openVSwitch = this._openVSwitch?.internalValue;
    }
    if (this._vepa8021Qbg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vepa8021Qbg = this._vepa8021Qbg?.internalValue;
    }
    if (this._vnTag8011Qbh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnTag8011Qbh = this._vnTag8011Qbh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVirtualPortParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._any.internalValue = undefined;
      this._midoNet.internalValue = undefined;
      this._openVSwitch.internalValue = undefined;
      this._vepa8021Qbg.internalValue = undefined;
      this._vnTag8011Qbh.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._any.internalValue = value.any;
      this._midoNet.internalValue = value.midoNet;
      this._openVSwitch.internalValue = value.openVSwitch;
      this._vepa8021Qbg.internalValue = value.vepa8021Qbg;
      this._vnTag8011Qbh.internalValue = value.vnTag8011Qbh;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any = new NetworkVirtualPortParamsAnyOutputReference(this, "any");
  public get any() {
    return this._any;
  }
  public putAny(value: NetworkVirtualPortParamsAny) {
    this._any.internalValue = value;
  }
  public resetAny() {
    this._any.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any.internalValue;
  }

  // mido_net - computed: false, optional: true, required: false
  private _midoNet = new NetworkVirtualPortParamsMidoNetOutputReference(this, "mido_net");
  public get midoNet() {
    return this._midoNet;
  }
  public putMidoNet(value: NetworkVirtualPortParamsMidoNet) {
    this._midoNet.internalValue = value;
  }
  public resetMidoNet() {
    this._midoNet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get midoNetInput() {
    return this._midoNet.internalValue;
  }

  // open_v_switch - computed: false, optional: true, required: false
  private _openVSwitch = new NetworkVirtualPortParamsOpenVSwitchOutputReference(this, "open_v_switch");
  public get openVSwitch() {
    return this._openVSwitch;
  }
  public putOpenVSwitch(value: NetworkVirtualPortParamsOpenVSwitch) {
    this._openVSwitch.internalValue = value;
  }
  public resetOpenVSwitch() {
    this._openVSwitch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openVSwitchInput() {
    return this._openVSwitch.internalValue;
  }

  // vepa8021qbg - computed: false, optional: true, required: false
  private _vepa8021Qbg = new NetworkVirtualPortParamsVepa8021QbgOutputReference(this, "vepa8021qbg");
  public get vepa8021Qbg() {
    return this._vepa8021Qbg;
  }
  public putVepa8021Qbg(value: NetworkVirtualPortParamsVepa8021Qbg) {
    this._vepa8021Qbg.internalValue = value;
  }
  public resetVepa8021Qbg() {
    this._vepa8021Qbg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepa8021QbgInput() {
    return this._vepa8021Qbg.internalValue;
  }

  // vn_tag8011qbh - computed: false, optional: true, required: false
  private _vnTag8011Qbh = new NetworkVirtualPortParamsVnTag8011QbhOutputReference(this, "vn_tag8011qbh");
  public get vnTag8011Qbh() {
    return this._vnTag8011Qbh;
  }
  public putVnTag8011Qbh(value: NetworkVirtualPortParamsVnTag8011Qbh) {
    this._vnTag8011Qbh.internalValue = value;
  }
  public resetVnTag8011Qbh() {
    this._vnTag8011Qbh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnTag8011QbhInput() {
    return this._vnTag8011Qbh.internalValue;
  }
}
export interface NetworkVirtualPort {
  /**
  * Provides backend-specific virtual port profile parameters for this port group, with one child element per backend type (e.g. Any, MidoNet, OpenVSwitch).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#params Network#params}
  */
  readonly params?: NetworkVirtualPortParams;
}

export function networkVirtualPortToTerraform(struct?: NetworkVirtualPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: networkVirtualPortParamsToTerraform(struct!.params),
  }
}


export function networkVirtualPortToHclTerraform(struct?: NetworkVirtualPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    params: {
      value: networkVirtualPortParamsToHclTerraform(struct!.params),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkVirtualPortParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVirtualPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkVirtualPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVirtualPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._params.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._params.internalValue = value.params;
    }
  }

  // params - computed: false, optional: true, required: false
  private _params = new NetworkVirtualPortParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: NetworkVirtualPortParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}
export interface NetworkVlanTags {
  /**
  * Sets whether this VLAN tag is treated as native on the trunk for this portgroup; valid values are user-provided strings such as "tagged" or "untagged" as supported by libvirt/qemu.
  * 
  * See: <https://libvirt.org/formatnetwork.html#setting-vlan-tag-on-supported-network-types-only>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#native_mode Network#native_mode}
  */
  readonly nativeMode?: string;
}

export function networkVlanTagsToTerraform(struct?: NetworkVlanTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    native_mode: cdktf.stringToTerraform(struct!.nativeMode),
  }
}


export function networkVlanTagsToHclTerraform(struct?: NetworkVlanTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    native_mode: {
      value: cdktf.stringToHclTerraform(struct!.nativeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVlanTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkVlanTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nativeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeMode = this._nativeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVlanTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nativeMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nativeMode = value.nativeMode;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // native_mode - computed: false, optional: true, required: false
  private _nativeMode?: string; 
  public get nativeMode() {
    return this.getStringAttribute('native_mode');
  }
  public set nativeMode(value: string) {
    this._nativeMode = value;
  }
  public resetNativeMode() {
    this._nativeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeModeInput() {
    return this._nativeMode;
  }
}

export class NetworkVlanTagsList extends cdktf.ComplexList {
  public internalValue? : NetworkVlanTags[] | cdktf.IResolvable

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
  public get(index: number): NetworkVlanTagsOutputReference {
    return new NetworkVlanTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkVlan {
  /**
  * Defines one or more VLAN tag entries for this portgroup; each tag specifies a VLAN ID, and optionally native-mode behavior, applied to guest traffic.
  * 
  * See: <https://libvirt.org/formatnetwork.html#setting-vlan-tag-on-supported-network-types-only>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#tags Network#tags}
  */
  readonly tags?: NetworkVlanTags[] | cdktf.IResolvable;
  /**
  * Controls whether this portgroup’s VLAN configuration operates in trunk mode, allowing multiple VLAN tags; value is a yes/no string flag, where "yes" enables trunk mode.
  * 
  * See: <https://libvirt.org/formatnetwork.html#setting-vlan-tag-on-supported-network-types-only>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#trunk Network#trunk}
  */
  readonly trunk?: string;
}

export function networkVlanToTerraform(struct?: NetworkVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(networkVlanTagsToTerraform, false)(struct!.tags),
    trunk: cdktf.stringToTerraform(struct!.trunk),
  }
}


export function networkVlanToHclTerraform(struct?: NetworkVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(networkVlanTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkVlanTagsList",
    },
    trunk: {
      value: cdktf.stringToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags.internalValue = undefined;
      this._trunk = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags.internalValue = value.tags;
      this._trunk = value.trunk;
    }
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NetworkVlanTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkVlanTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: string; 
  public get trunk() {
    return this.getStringAttribute('trunk');
  }
  public set trunk(value: string) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network libvirt_network}
*/
export class Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Network to import
  * @param importFromId The id of the existing Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/network libvirt_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'libvirt_network',
      terraformGeneratorMetadata: {
        providerName: 'libvirt',
        providerVersion: '0.9.1',
        providerVersionConstraint: '0.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autostart = config.autostart;
    this._bandwidth.internalValue = config.bandwidth;
    this._bridge.internalValue = config.bridge;
    this._dns.internalValue = config.dns;
    this._domain.internalValue = config.domain;
    this._forward.internalValue = config.forward;
    this._ips.internalValue = config.ips;
    this._ipv6 = config.ipv6;
    this._mac.internalValue = config.mac;
    this._metadata.internalValue = config.metadata;
    this._mtu.internalValue = config.mtu;
    this._name = config.name;
    this._portGroups.internalValue = config.portGroups;
    this._portOptions.internalValue = config.portOptions;
    this._routes.internalValue = config.routes;
    this._trustGuestRxFilters = config.trustGuestRxFilters;
    this._virtualPort.internalValue = config.virtualPort;
    this._vlan.internalValue = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autostart - computed: true, optional: true, required: false
  private _autostart?: boolean | cdktf.IResolvable; 
  public get autostart() {
    return this.getBooleanAttribute('autostart');
  }
  public set autostart(value: boolean | cdktf.IResolvable) {
    this._autostart = value;
  }
  public resetAutostart() {
    this._autostart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autostartInput() {
    return this._autostart;
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth = new NetworkBandwidthOutputReference(this, "bandwidth");
  public get bandwidth() {
    return this._bandwidth;
  }
  public putBandwidth(value: NetworkBandwidth) {
    this._bandwidth.internalValue = value;
  }
  public resetBandwidth() {
    this._bandwidth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth.internalValue;
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge = new NetworkBridgeOutputReference(this, "bridge");
  public get bridge() {
    return this._bridge;
  }
  public putBridge(value: NetworkBridge) {
    this._bridge.internalValue = value;
  }
  public resetBridge() {
    this._bridge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new NetworkDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: NetworkDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new NetworkDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: NetworkDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward = new NetworkForwardOutputReference(this, "forward");
  public get forward() {
    return this._forward;
  }
  public putForward(value: NetworkForward) {
    this._forward.internalValue = value;
  }
  public resetForward() {
    this._forward.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ips - computed: false, optional: true, required: false
  private _ips = new NetworkIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }
  public putIps(value: NetworkIps[] | cdktf.IResolvable) {
    this._ips.internalValue = value;
  }
  public resetIps() {
    this._ips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // mac - computed: false, optional: true, required: false
  private _mac = new NetworkMacOutputReference(this, "mac");
  public get mac() {
    return this._mac;
  }
  public putMac(value: NetworkMac) {
    this._mac.internalValue = value;
  }
  public resetMac() {
    this._mac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new NetworkMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: NetworkMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu = new NetworkMtuOutputReference(this, "mtu");
  public get mtu() {
    return this._mtu;
  }
  public putMtu(value: NetworkMtu) {
    this._mtu.internalValue = value;
  }
  public resetMtu() {
    this._mtu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu.internalValue;
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

  // port_groups - computed: false, optional: true, required: false
  private _portGroups = new NetworkPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }
  public putPortGroups(value: NetworkPortGroups[] | cdktf.IResolvable) {
    this._portGroups.internalValue = value;
  }
  public resetPortGroups() {
    this._portGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portGroupsInput() {
    return this._portGroups.internalValue;
  }

  // port_options - computed: false, optional: true, required: false
  private _portOptions = new NetworkPortOptionsOutputReference(this, "port_options");
  public get portOptions() {
    return this._portOptions;
  }
  public putPortOptions(value: NetworkPortOptions) {
    this._portOptions.internalValue = value;
  }
  public resetPortOptions() {
    this._portOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOptionsInput() {
    return this._portOptions.internalValue;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new NetworkRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: NetworkRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // trust_guest_rx_filters - computed: false, optional: true, required: false
  private _trustGuestRxFilters?: string; 
  public get trustGuestRxFilters() {
    return this.getStringAttribute('trust_guest_rx_filters');
  }
  public set trustGuestRxFilters(value: string) {
    this._trustGuestRxFilters = value;
  }
  public resetTrustGuestRxFilters() {
    this._trustGuestRxFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustGuestRxFiltersInput() {
    return this._trustGuestRxFilters;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // virtual_port - computed: false, optional: true, required: false
  private _virtualPort = new NetworkVirtualPortOutputReference(this, "virtual_port");
  public get virtualPort() {
    return this._virtualPort;
  }
  public putVirtualPort(value: NetworkVirtualPort) {
    this._virtualPort.internalValue = value;
  }
  public resetVirtualPort() {
    this._virtualPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortInput() {
    return this._virtualPort.internalValue;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan = new NetworkVlanOutputReference(this, "vlan");
  public get vlan() {
    return this._vlan;
  }
  public putVlan(value: NetworkVlan) {
    this._vlan.internalValue = value;
  }
  public resetVlan() {
    this._vlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autostart: cdktf.booleanToTerraform(this._autostart),
      bandwidth: networkBandwidthToTerraform(this._bandwidth.internalValue),
      bridge: networkBridgeToTerraform(this._bridge.internalValue),
      dns: networkDnsToTerraform(this._dns.internalValue),
      domain: networkDomainToTerraform(this._domain.internalValue),
      forward: networkForwardToTerraform(this._forward.internalValue),
      ips: cdktf.listMapper(networkIpsToTerraform, false)(this._ips.internalValue),
      ipv6: cdktf.stringToTerraform(this._ipv6),
      mac: networkMacToTerraform(this._mac.internalValue),
      metadata: networkMetadataToTerraform(this._metadata.internalValue),
      mtu: networkMtuToTerraform(this._mtu.internalValue),
      name: cdktf.stringToTerraform(this._name),
      port_groups: cdktf.listMapper(networkPortGroupsToTerraform, false)(this._portGroups.internalValue),
      port_options: networkPortOptionsToTerraform(this._portOptions.internalValue),
      routes: cdktf.listMapper(networkRoutesToTerraform, false)(this._routes.internalValue),
      trust_guest_rx_filters: cdktf.stringToTerraform(this._trustGuestRxFilters),
      virtual_port: networkVirtualPortToTerraform(this._virtualPort.internalValue),
      vlan: networkVlanToTerraform(this._vlan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autostart: {
        value: cdktf.booleanToHclTerraform(this._autostart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bandwidth: {
        value: networkBandwidthToHclTerraform(this._bandwidth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkBandwidth",
      },
      bridge: {
        value: networkBridgeToHclTerraform(this._bridge.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkBridge",
      },
      dns: {
        value: networkDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkDns",
      },
      domain: {
        value: networkDomainToHclTerraform(this._domain.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkDomain",
      },
      forward: {
        value: networkForwardToHclTerraform(this._forward.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkForward",
      },
      ips: {
        value: cdktf.listMapperHcl(networkIpsToHclTerraform, false)(this._ips.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkIpsList",
      },
      ipv6: {
        value: cdktf.stringToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: networkMacToHclTerraform(this._mac.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkMac",
      },
      metadata: {
        value: networkMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkMetadata",
      },
      mtu: {
        value: networkMtuToHclTerraform(this._mtu.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkMtu",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_groups: {
        value: cdktf.listMapperHcl(networkPortGroupsToHclTerraform, false)(this._portGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPortGroupsList",
      },
      port_options: {
        value: networkPortOptionsToHclTerraform(this._portOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkPortOptions",
      },
      routes: {
        value: cdktf.listMapperHcl(networkRoutesToHclTerraform, false)(this._routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkRoutesList",
      },
      trust_guest_rx_filters: {
        value: cdktf.stringToHclTerraform(this._trustGuestRxFilters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_port: {
        value: networkVirtualPortToHclTerraform(this._virtualPort.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkVirtualPort",
      },
      vlan: {
        value: networkVlanToHclTerraform(this._vlan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkVlan",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
