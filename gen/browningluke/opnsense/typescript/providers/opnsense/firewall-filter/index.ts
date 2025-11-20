// https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * For grouping purposes, provide the IDs of multiple groups here to organize items. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#categories FirewallFilter#categories}
  */
  readonly categories?: string[];
  /**
  * Optional description here for your reference (not parsed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#description FirewallFilter#description}
  */
  readonly description?: string;
  /**
  * Enable this firewall filter rule. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#enabled FirewallFilter#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#filter FirewallFilter#filter}
  */
  readonly filter: FirewallFilterFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#interface FirewallFilter#interface}
  */
  readonly interface: FirewallFilterInterface;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#internal_tagging FirewallFilter#internal_tagging}
  */
  readonly internalTagging?: FirewallFilterInternalTagging;
  /**
  * Whether to exclude this item from the HA synchronization process. An already existing item with the same UUID on the synchronization target will not be altered or deleted as long as this is active. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#no_xmlrpc_sync FirewallFilter#no_xmlrpc_sync}
  */
  readonly noXmlrpcSync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#priority FirewallFilter#priority}
  */
  readonly priority?: FirewallFilterPriority;
  /**
  * Specify the order of this filter rule. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#sequence FirewallFilter#sequence}
  */
  readonly sequence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#source_routing FirewallFilter#source_routing}
  */
  readonly sourceRouting?: FirewallFilterSourceRouting;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#stateful_firewall FirewallFilter#stateful_firewall}
  */
  readonly statefulFirewall?: FirewallFilterStatefulFirewall;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#traffic_shaping FirewallFilter#traffic_shaping}
  */
  readonly trafficShaping?: FirewallFilterTrafficShaping;
}
export interface FirewallFilterFilterDestination {
  /**
  * Whether to invert the sense of the match. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#invert FirewallFilter#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#net FirewallFilter#net}
  */
  readonly net?: string;
  /**
  * Destination port number or well known name (imap, imaps, http, https, ...), for ranges use a dash. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#port FirewallFilter#port}
  */
  readonly port?: string;
}

export function firewallFilterFilterDestinationToTerraform(struct?: FirewallFilterFilterDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    net: cdktf.stringToTerraform(struct!.net),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function firewallFilterFilterDestinationToHclTerraform(struct?: FirewallFilterFilterDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert: {
      value: cdktf.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    net: {
      value: cdktf.stringToHclTerraform(struct!.net),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterFilterDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterFilterDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._net !== undefined) {
      hasAnyValues = true;
      internalValueResult.net = this._net;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterFilterDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._net = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._net = value.net;
      this._port = value.port;
    }
  }

  // invert - computed: true, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
  }

  // net - computed: true, optional: true, required: false
  private _net?: string; 
  public get net() {
    return this.getStringAttribute('net');
  }
  public set net(value: string) {
    this._net = value;
  }
  public resetNet() {
    this._net = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface FirewallFilterFilterSource {
  /**
  * Whether to invert the sense of the match. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#invert FirewallFilter#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#net FirewallFilter#net}
  */
  readonly net?: string;
  /**
  * Source port number or well known name (imap, imaps, http, https, ...), for ranges use a dash. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#port FirewallFilter#port}
  */
  readonly port?: string;
}

export function firewallFilterFilterSourceToTerraform(struct?: FirewallFilterFilterSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    net: cdktf.stringToTerraform(struct!.net),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function firewallFilterFilterSourceToHclTerraform(struct?: FirewallFilterFilterSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert: {
      value: cdktf.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    net: {
      value: cdktf.stringToHclTerraform(struct!.net),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterFilterSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterFilterSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._net !== undefined) {
      hasAnyValues = true;
      internalValueResult.net = this._net;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterFilterSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._net = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._net = value.net;
      this._port = value.port;
    }
  }

  // invert - computed: true, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
  }

  // net - computed: true, optional: true, required: false
  private _net?: string; 
  public get net() {
    return this.getStringAttribute('net');
  }
  public set net(value: string) {
    this._net = value;
  }
  public resetNet() {
    this._net = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface FirewallFilterFilter {
  /**
  * Choose what to do with packets that match the criteria specified below. Hint: the difference between block and reject is that with reject, a packet (TCP RST or ICMP port unreachable for UDP) is returned to the sender, whereas with block the packet is dropped silently. In either case, the original packet is discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#action FirewallFilter#action}
  */
  readonly action: string;
  /**
  * Whether to allow packets with IP options to pass. Otherwise they are blocked. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#allow_options FirewallFilter#allow_options}
  */
  readonly allowOptions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#destination FirewallFilter#destination}
  */
  readonly destination?: FirewallFilterFilterDestination;
  /**
  * Direction of the traffic. The default policy is to filter inbound traffic, which sets the policy to the interface originally receiving the traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#direction FirewallFilter#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#icmp_type FirewallFilter#icmp_type}
  */
  readonly icmpType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#ip_protocol FirewallFilter#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Whether to log packets that are handled by this rule. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#log FirewallFilter#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#protocol FirewallFilter#protocol}
  */
  readonly protocol: string;
  /**
  * If a packet matches a rule specifying quick, then that rule is considered the last matching rule and the specified action is taken. When a rule does not have quick enabled, the last matching rule wins. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#quick FirewallFilter#quick}
  */
  readonly quick?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#schedule FirewallFilter#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#source FirewallFilter#source}
  */
  readonly source?: FirewallFilterFilterSource;
  /**
  * The TCP flags that must be set this rule to match. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#tcp_flags FirewallFilter#tcp_flags}
  */
  readonly tcpFlags?: string[];
  /**
  * The TCP flags that must be cleared for this rule to match. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#tcp_flags_out_of FirewallFilter#tcp_flags_out_of}
  */
  readonly tcpFlagsOutOf?: string[];
}

export function firewallFilterFilterToTerraform(struct?: FirewallFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    allow_options: cdktf.booleanToTerraform(struct!.allowOptions),
    destination: firewallFilterFilterDestinationToTerraform(struct!.destination),
    direction: cdktf.stringToTerraform(struct!.direction),
    icmp_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.icmpType),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    log: cdktf.booleanToTerraform(struct!.log),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    quick: cdktf.booleanToTerraform(struct!.quick),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    source: firewallFilterFilterSourceToTerraform(struct!.source),
    tcp_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tcpFlags),
    tcp_flags_out_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tcpFlagsOutOf),
  }
}


export function firewallFilterFilterToHclTerraform(struct?: FirewallFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_options: {
      value: cdktf.booleanToHclTerraform(struct!.allowOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination: {
      value: firewallFilterFilterDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallFilterFilterDestination",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.icmpType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.booleanToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quick: {
      value: cdktf.booleanToHclTerraform(struct!.quick),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: firewallFilterFilterSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallFilterFilterSource",
    },
    tcp_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tcpFlags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tcp_flags_out_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tcpFlagsOutOf),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._allowOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOptions = this._allowOptions;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._quick !== undefined) {
      hasAnyValues = true;
      internalValueResult.quick = this._quick;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._tcpFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFlags = this._tcpFlags;
    }
    if (this._tcpFlagsOutOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFlagsOutOf = this._tcpFlagsOutOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._allowOptions = undefined;
      this._destination.internalValue = undefined;
      this._direction = undefined;
      this._icmpType = undefined;
      this._ipProtocol = undefined;
      this._log = undefined;
      this._protocol = undefined;
      this._quick = undefined;
      this._schedule = undefined;
      this._source.internalValue = undefined;
      this._tcpFlags = undefined;
      this._tcpFlagsOutOf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._allowOptions = value.allowOptions;
      this._destination.internalValue = value.destination;
      this._direction = value.direction;
      this._icmpType = value.icmpType;
      this._ipProtocol = value.ipProtocol;
      this._log = value.log;
      this._protocol = value.protocol;
      this._quick = value.quick;
      this._schedule = value.schedule;
      this._source.internalValue = value.source;
      this._tcpFlags = value.tcpFlags;
      this._tcpFlagsOutOf = value.tcpFlagsOutOf;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // allow_options - computed: true, optional: true, required: false
  private _allowOptions?: boolean | cdktf.IResolvable; 
  public get allowOptions() {
    return this.getBooleanAttribute('allow_options');
  }
  public set allowOptions(value: boolean | cdktf.IResolvable) {
    this._allowOptions = value;
  }
  public resetAllowOptions() {
    this._allowOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOptionsInput() {
    return this._allowOptions;
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new FirewallFilterFilterDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: FirewallFilterFilterDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // icmp_type - computed: true, optional: true, required: false
  private _icmpType?: string[]; 
  public get icmpType() {
    return cdktf.Fn.tolist(this.getListAttribute('icmp_type'));
  }
  public set icmpType(value: string[]) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // ip_protocol - computed: true, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // log - computed: true, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // quick - computed: true, optional: true, required: false
  private _quick?: boolean | cdktf.IResolvable; 
  public get quick() {
    return this.getBooleanAttribute('quick');
  }
  public set quick(value: boolean | cdktf.IResolvable) {
    this._quick = value;
  }
  public resetQuick() {
    this._quick = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickInput() {
    return this._quick;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // source - computed: true, optional: true, required: false
  private _source = new FirewallFilterFilterSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: FirewallFilterFilterSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // tcp_flags - computed: true, optional: true, required: false
  private _tcpFlags?: string[]; 
  public get tcpFlags() {
    return cdktf.Fn.tolist(this.getListAttribute('tcp_flags'));
  }
  public set tcpFlags(value: string[]) {
    this._tcpFlags = value;
  }
  public resetTcpFlags() {
    this._tcpFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagsInput() {
    return this._tcpFlags;
  }

  // tcp_flags_out_of - computed: true, optional: true, required: false
  private _tcpFlagsOutOf?: string[]; 
  public get tcpFlagsOutOf() {
    return cdktf.Fn.tolist(this.getListAttribute('tcp_flags_out_of'));
  }
  public set tcpFlagsOutOf(value: string[]) {
    this._tcpFlagsOutOf = value;
  }
  public resetTcpFlagsOutOf() {
    this._tcpFlagsOutOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagsOutOfInput() {
    return this._tcpFlagsOutOf;
  }
}
export interface FirewallFilterInterface {
  /**
  * The interfaces to apply the filter rule on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#interface FirewallFilter#interface}
  */
  readonly interface: string[];
  /**
  * Whether to use all but selected interfaces. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#invert FirewallFilter#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
}

export function firewallFilterInterfaceToTerraform(struct?: FirewallFilterInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    invert: cdktf.booleanToTerraform(struct!.invert),
  }
}


export function firewallFilterInterfaceToHclTerraform(struct?: FirewallFilterInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    invert: {
      value: cdktf.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._invert = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._invert = value.invert;
    }
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // invert - computed: true, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
  }
}
export interface FirewallFilterInternalTagging {
  /**
  * Used to specify that packets must already be tagged with the given tag in order to match the rule. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#match_local FirewallFilter#match_local}
  */
  readonly matchLocal?: string;
  /**
  * Packets matching this rule will be tagged with the specified string. The tag acts as an internal marker that can be used to identify these packets later on. This can be used, for example, to provide trust between interfaces and to determine if packets have been processed by translation rules. Tags are "sticky", meaning that the packet will be tagged even if the rule is not the last matching rule. Further matching rules can replace the tag with a new one but will not remove a previously applied tag. A packet is only ever assigned one tag at a time. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#set_local FirewallFilter#set_local}
  */
  readonly setLocal?: string;
}

export function firewallFilterInternalTaggingToTerraform(struct?: FirewallFilterInternalTagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_local: cdktf.stringToTerraform(struct!.matchLocal),
    set_local: cdktf.stringToTerraform(struct!.setLocal),
  }
}


export function firewallFilterInternalTaggingToHclTerraform(struct?: FirewallFilterInternalTagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_local: {
      value: cdktf.stringToHclTerraform(struct!.matchLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_local: {
      value: cdktf.stringToHclTerraform(struct!.setLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterInternalTaggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterInternalTagging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLocal = this._matchLocal;
    }
    if (this._setLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLocal = this._setLocal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterInternalTagging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLocal = undefined;
      this._setLocal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLocal = value.matchLocal;
      this._setLocal = value.setLocal;
    }
  }

  // match_local - computed: true, optional: true, required: false
  private _matchLocal?: string; 
  public get matchLocal() {
    return this.getStringAttribute('match_local');
  }
  public set matchLocal(value: string) {
    this._matchLocal = value;
  }
  public resetMatchLocal() {
    this._matchLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLocalInput() {
    return this._matchLocal;
  }

  // set_local - computed: true, optional: true, required: false
  private _setLocal?: string; 
  public get setLocal() {
    return this.getStringAttribute('set_local');
  }
  public set setLocal(value: string) {
    this._setLocal = value;
  }
  public resetSetLocal() {
    this._setLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLocalInput() {
    return this._setLocal;
  }
}
export interface FirewallFilterPriority {
  /**
  * Used in combination with set priority, packets which have a TOS of lowdelay and TCP ACKs with no data payload will be assigned this priority when offered. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#low_delay_set FirewallFilter#low_delay_set}
  */
  readonly lowDelaySet?: number;
  /**
  * Only match packets which have the given queueing priority assigned. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#match FirewallFilter#match}
  */
  readonly match?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#match_tos FirewallFilter#match_tos}
  */
  readonly matchTos?: string;
  /**
  * Packets matching this rule will be assigned a specific queueing priority. If the packet is transmitted on a vlan(4) interface, the queueing priority will be written as the priority code point in the 802.1Q VLAN header. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#set FirewallFilter#set}
  */
  readonly set?: number;
}

export function firewallFilterPriorityToTerraform(struct?: FirewallFilterPriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    low_delay_set: cdktf.numberToTerraform(struct!.lowDelaySet),
    match: cdktf.numberToTerraform(struct!.match),
    match_tos: cdktf.stringToTerraform(struct!.matchTos),
    set: cdktf.numberToTerraform(struct!.set),
  }
}


export function firewallFilterPriorityToHclTerraform(struct?: FirewallFilterPriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    low_delay_set: {
      value: cdktf.numberToHclTerraform(struct!.lowDelaySet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.numberToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_tos: {
      value: cdktf.stringToHclTerraform(struct!.matchTos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set: {
      value: cdktf.numberToHclTerraform(struct!.set),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterPriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterPriority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowDelaySet !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowDelaySet = this._lowDelaySet;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._matchTos !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTos = this._matchTos;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterPriority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lowDelaySet = undefined;
      this._match = undefined;
      this._matchTos = undefined;
      this._set = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lowDelaySet = value.lowDelaySet;
      this._match = value.match;
      this._matchTos = value.matchTos;
      this._set = value.set;
    }
  }

  // low_delay_set - computed: true, optional: true, required: false
  private _lowDelaySet?: number; 
  public get lowDelaySet() {
    return this.getNumberAttribute('low_delay_set');
  }
  public set lowDelaySet(value: number) {
    this._lowDelaySet = value;
  }
  public resetLowDelaySet() {
    this._lowDelaySet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowDelaySetInput() {
    return this._lowDelaySet;
  }

  // match - computed: true, optional: true, required: false
  private _match?: number; 
  public get match() {
    return this.getNumberAttribute('match');
  }
  public set match(value: number) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // match_tos - computed: true, optional: true, required: false
  private _matchTos?: string; 
  public get matchTos() {
    return this.getStringAttribute('match_tos');
  }
  public set matchTos(value: string) {
    this._matchTos = value;
  }
  public resetMatchTos() {
    this._matchTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTosInput() {
    return this._matchTos;
  }

  // set - computed: true, optional: true, required: false
  private _set?: number; 
  public get set() {
    return this.getNumberAttribute('set');
  }
  public set set(value: number) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}
export interface FirewallFilterSourceRouting {
  /**
  * Whether to explicitly disable reply-to for this rule. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#disable_reply_to FirewallFilter#disable_reply_to}
  */
  readonly disableReplyTo?: boolean | cdktf.IResolvable;
  /**
  * Leave as 'default' to use the system routing table. Or choose a gateway to utilize policy based routing. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#gateway FirewallFilter#gateway}
  */
  readonly gateway?: string;
  /**
  * Determines how packets route back in the opposite direction (replies), when set to default, packets on WAN type interfaces reply to their connected gateway on the interface (unless globally disabled). A specific gateway may be chosen as well here. This setting is only relevant in the context of a state, for stateless rules there is no defined opposite direction. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#reply_to FirewallFilter#reply_to}
  */
  readonly replyTo?: string;
}

export function firewallFilterSourceRoutingToTerraform(struct?: FirewallFilterSourceRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_reply_to: cdktf.booleanToTerraform(struct!.disableReplyTo),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    reply_to: cdktf.stringToTerraform(struct!.replyTo),
  }
}


export function firewallFilterSourceRoutingToHclTerraform(struct?: FirewallFilterSourceRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_reply_to: {
      value: cdktf.booleanToHclTerraform(struct!.disableReplyTo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reply_to: {
      value: cdktf.stringToHclTerraform(struct!.replyTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterSourceRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterSourceRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableReplyTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableReplyTo = this._disableReplyTo;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._replyTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyTo = this._replyTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterSourceRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableReplyTo = undefined;
      this._gateway = undefined;
      this._replyTo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableReplyTo = value.disableReplyTo;
      this._gateway = value.gateway;
      this._replyTo = value.replyTo;
    }
  }

  // disable_reply_to - computed: true, optional: true, required: false
  private _disableReplyTo?: boolean | cdktf.IResolvable; 
  public get disableReplyTo() {
    return this.getBooleanAttribute('disable_reply_to');
  }
  public set disableReplyTo(value: boolean | cdktf.IResolvable) {
    this._disableReplyTo = value;
  }
  public resetDisableReplyTo() {
    this._disableReplyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReplyToInput() {
    return this._disableReplyTo;
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

  // reply_to - computed: true, optional: true, required: false
  private _replyTo?: string; 
  public get replyTo() {
    return this.getStringAttribute('reply_to');
  }
  public set replyTo(value: string) {
    this._replyTo = value;
  }
  public resetReplyTo() {
    this._replyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToInput() {
    return this._replyTo;
  }
}
export interface FirewallFilterStatefulFirewallAdaptiveTimeouts {
  /**
  * When reaching this number of state entries, all timeout values become zero, effectively purging all state entries immediately. This value is used to define the scale factor, it should not actually be reached (set a lower state limit). Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#end FirewallFilter#end}
  */
  readonly end?: number;
  /**
  * When the number of state entries exceeds this value, adaptive scaling begins. All timeout values are scaled linearly with factor `(adaptive.end - number of states) / (adaptive.end - adaptive.start)`. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#start FirewallFilter#start}
  */
  readonly start?: number;
}

export function firewallFilterStatefulFirewallAdaptiveTimeoutsToTerraform(struct?: FirewallFilterStatefulFirewallAdaptiveTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function firewallFilterStatefulFirewallAdaptiveTimeoutsToHclTerraform(struct?: FirewallFilterStatefulFirewallAdaptiveTimeouts | cdktf.IResolvable): any {
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

export class FirewallFilterStatefulFirewallAdaptiveTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterStatefulFirewallAdaptiveTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallFilterStatefulFirewallAdaptiveTimeouts | cdktf.IResolvable | undefined) {
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

  // end - computed: true, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: true, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
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
export interface FirewallFilterStatefulFirewallMaxNewConnections {
  /**
  * Maximum new connections per host, measured over time. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#count FirewallFilter#count}
  */
  readonly count?: number;
  /**
  * Time interval (seconds) to measure the number of connections. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#seconds FirewallFilter#seconds}
  */
  readonly seconds?: number;
}

export function firewallFilterStatefulFirewallMaxNewConnectionsToTerraform(struct?: FirewallFilterStatefulFirewallMaxNewConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function firewallFilterStatefulFirewallMaxNewConnectionsToHclTerraform(struct?: FirewallFilterStatefulFirewallMaxNewConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterStatefulFirewallMaxNewConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterStatefulFirewallMaxNewConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterStatefulFirewallMaxNewConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._seconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._seconds = value.seconds;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // seconds - computed: true, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface FirewallFilterStatefulFirewallMax {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#new_connections FirewallFilter#new_connections}
  */
  readonly newConnections?: FirewallFilterStatefulFirewallMaxNewConnections;
  /**
  * Limit the maximum number of simultaneous TCP connections which have completed the 3-way handshake that a single host can make. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#source_connections FirewallFilter#source_connections}
  */
  readonly sourceConnections?: number;
  /**
  * Limits the maximum number of source addresses which can simultaneously have state table entries. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#source_nodes FirewallFilter#source_nodes}
  */
  readonly sourceNodes?: number;
  /**
  * Limits the maximum number of simultaneous state entries that a single source address can create with this rule. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#source_states FirewallFilter#source_states}
  */
  readonly sourceStates?: number;
  /**
  * Limits the number of concurrent states the rule may create. When this limit is reached, further packets that would create state are dropped until existing states time out. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#states FirewallFilter#states}
  */
  readonly states?: number;
}

export function firewallFilterStatefulFirewallMaxToTerraform(struct?: FirewallFilterStatefulFirewallMax | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_connections: firewallFilterStatefulFirewallMaxNewConnectionsToTerraform(struct!.newConnections),
    source_connections: cdktf.numberToTerraform(struct!.sourceConnections),
    source_nodes: cdktf.numberToTerraform(struct!.sourceNodes),
    source_states: cdktf.numberToTerraform(struct!.sourceStates),
    states: cdktf.numberToTerraform(struct!.states),
  }
}


export function firewallFilterStatefulFirewallMaxToHclTerraform(struct?: FirewallFilterStatefulFirewallMax | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_connections: {
      value: firewallFilterStatefulFirewallMaxNewConnectionsToHclTerraform(struct!.newConnections),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallFilterStatefulFirewallMaxNewConnections",
    },
    source_connections: {
      value: cdktf.numberToHclTerraform(struct!.sourceConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_nodes: {
      value: cdktf.numberToHclTerraform(struct!.sourceNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_states: {
      value: cdktf.numberToHclTerraform(struct!.sourceStates),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    states: {
      value: cdktf.numberToHclTerraform(struct!.states),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterStatefulFirewallMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterStatefulFirewallMax | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newConnections = this._newConnections?.internalValue;
    }
    if (this._sourceConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConnections = this._sourceConnections;
    }
    if (this._sourceNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNodes = this._sourceNodes;
    }
    if (this._sourceStates !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceStates = this._sourceStates;
    }
    if (this._states !== undefined) {
      hasAnyValues = true;
      internalValueResult.states = this._states;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterStatefulFirewallMax | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newConnections.internalValue = undefined;
      this._sourceConnections = undefined;
      this._sourceNodes = undefined;
      this._sourceStates = undefined;
      this._states = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newConnections.internalValue = value.newConnections;
      this._sourceConnections = value.sourceConnections;
      this._sourceNodes = value.sourceNodes;
      this._sourceStates = value.sourceStates;
      this._states = value.states;
    }
  }

  // new_connections - computed: true, optional: true, required: false
  private _newConnections = new FirewallFilterStatefulFirewallMaxNewConnectionsOutputReference(this, "new_connections");
  public get newConnections() {
    return this._newConnections;
  }
  public putNewConnections(value: FirewallFilterStatefulFirewallMaxNewConnections) {
    this._newConnections.internalValue = value;
  }
  public resetNewConnections() {
    this._newConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newConnectionsInput() {
    return this._newConnections.internalValue;
  }

  // source_connections - computed: true, optional: true, required: false
  private _sourceConnections?: number; 
  public get sourceConnections() {
    return this.getNumberAttribute('source_connections');
  }
  public set sourceConnections(value: number) {
    this._sourceConnections = value;
  }
  public resetSourceConnections() {
    this._sourceConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionsInput() {
    return this._sourceConnections;
  }

  // source_nodes - computed: true, optional: true, required: false
  private _sourceNodes?: number; 
  public get sourceNodes() {
    return this.getNumberAttribute('source_nodes');
  }
  public set sourceNodes(value: number) {
    this._sourceNodes = value;
  }
  public resetSourceNodes() {
    this._sourceNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNodesInput() {
    return this._sourceNodes;
  }

  // source_states - computed: true, optional: true, required: false
  private _sourceStates?: number; 
  public get sourceStates() {
    return this.getNumberAttribute('source_states');
  }
  public set sourceStates(value: number) {
    this._sourceStates = value;
  }
  public resetSourceStates() {
    this._sourceStates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceStatesInput() {
    return this._sourceStates;
  }

  // states - computed: true, optional: true, required: false
  private _states?: number; 
  public get states() {
    return this.getNumberAttribute('states');
  }
  public set states(value: number) {
    this._states = value;
  }
  public resetStates() {
    this._states = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statesInput() {
    return this._states;
  }
}
export interface FirewallFilterStatefulFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#adaptive_timeouts FirewallFilter#adaptive_timeouts}
  */
  readonly adaptiveTimeouts?: FirewallFilterStatefulFirewallAdaptiveTimeouts;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#max FirewallFilter#max}
  */
  readonly max?: FirewallFilterStatefulFirewallMax;
  /**
  * Whether to prevent states created by this rule to be synced with pfsync. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#no_pfsync FirewallFilter#no_pfsync}
  */
  readonly noPfsync?: boolean | cdktf.IResolvable;
  /**
  * Overload table used when max new connections per time interval has been reached. The default virusprot table comes with a default block rule in floating rules, alternatively specify your own table here. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#overload_table FirewallFilter#overload_table}
  */
  readonly overloadTable?: string;
  /**
  * How states created by this rule are treated, default (as defined in advanced), floating in which case states are valid on all interfaces or interface bound. Interface bound states are more secure, floating more flexible. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#policy FirewallFilter#policy}
  */
  readonly policy?: string;
  /**
  * State Timeout in seconds (TCP only). Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#timeout FirewallFilter#timeout}
  */
  readonly timeout?: number;
  /**
  * State tracking mechanism to use, default is full stateful tracking, sloppy ignores sequence numbers, use none for stateless rules. Defaults to `"keep"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#type FirewallFilter#type}
  */
  readonly type?: string;
}

export function firewallFilterStatefulFirewallToTerraform(struct?: FirewallFilterStatefulFirewall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_timeouts: firewallFilterStatefulFirewallAdaptiveTimeoutsToTerraform(struct!.adaptiveTimeouts),
    max: firewallFilterStatefulFirewallMaxToTerraform(struct!.max),
    no_pfsync: cdktf.booleanToTerraform(struct!.noPfsync),
    overload_table: cdktf.stringToTerraform(struct!.overloadTable),
    policy: cdktf.stringToTerraform(struct!.policy),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function firewallFilterStatefulFirewallToHclTerraform(struct?: FirewallFilterStatefulFirewall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_timeouts: {
      value: firewallFilterStatefulFirewallAdaptiveTimeoutsToHclTerraform(struct!.adaptiveTimeouts),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallFilterStatefulFirewallAdaptiveTimeouts",
    },
    max: {
      value: firewallFilterStatefulFirewallMaxToHclTerraform(struct!.max),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallFilterStatefulFirewallMax",
    },
    no_pfsync: {
      value: cdktf.booleanToHclTerraform(struct!.noPfsync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overload_table: {
      value: cdktf.stringToHclTerraform(struct!.overloadTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterStatefulFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterStatefulFirewall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveTimeouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveTimeouts = this._adaptiveTimeouts?.internalValue;
    }
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    if (this._noPfsync !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPfsync = this._noPfsync;
    }
    if (this._overloadTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.overloadTable = this._overloadTable;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterStatefulFirewall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adaptiveTimeouts.internalValue = undefined;
      this._max.internalValue = undefined;
      this._noPfsync = undefined;
      this._overloadTable = undefined;
      this._policy = undefined;
      this._timeout = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adaptiveTimeouts.internalValue = value.adaptiveTimeouts;
      this._max.internalValue = value.max;
      this._noPfsync = value.noPfsync;
      this._overloadTable = value.overloadTable;
      this._policy = value.policy;
      this._timeout = value.timeout;
      this._type = value.type;
    }
  }

  // adaptive_timeouts - computed: true, optional: true, required: false
  private _adaptiveTimeouts = new FirewallFilterStatefulFirewallAdaptiveTimeoutsOutputReference(this, "adaptive_timeouts");
  public get adaptiveTimeouts() {
    return this._adaptiveTimeouts;
  }
  public putAdaptiveTimeouts(value: FirewallFilterStatefulFirewallAdaptiveTimeouts) {
    this._adaptiveTimeouts.internalValue = value;
  }
  public resetAdaptiveTimeouts() {
    this._adaptiveTimeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveTimeoutsInput() {
    return this._adaptiveTimeouts.internalValue;
  }

  // max - computed: true, optional: true, required: false
  private _max = new FirewallFilterStatefulFirewallMaxOutputReference(this, "max");
  public get max() {
    return this._max;
  }
  public putMax(value: FirewallFilterStatefulFirewallMax) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }

  // no_pfsync - computed: true, optional: true, required: false
  private _noPfsync?: boolean | cdktf.IResolvable; 
  public get noPfsync() {
    return this.getBooleanAttribute('no_pfsync');
  }
  public set noPfsync(value: boolean | cdktf.IResolvable) {
    this._noPfsync = value;
  }
  public resetNoPfsync() {
    this._noPfsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPfsyncInput() {
    return this._noPfsync;
  }

  // overload_table - computed: true, optional: true, required: false
  private _overloadTable?: string; 
  public get overloadTable() {
    return this.getStringAttribute('overload_table');
  }
  public set overloadTable(value: string) {
    this._overloadTable = value;
  }
  public resetOverloadTable() {
    this._overloadTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overloadTableInput() {
    return this._overloadTable;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
}
export interface FirewallFilterTrafficShaping {
  /**
  * Shape packets using the selected pipe or queue in the reverse rule direction. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#reverse_shaper FirewallFilter#reverse_shaper}
  */
  readonly reverseShaper?: string;
  /**
  * Shape packets using the selected pipe or queue in the rule direction. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#shaper FirewallFilter#shaper}
  */
  readonly shaper?: string;
}

export function firewallFilterTrafficShapingToTerraform(struct?: FirewallFilterTrafficShaping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reverse_shaper: cdktf.stringToTerraform(struct!.reverseShaper),
    shaper: cdktf.stringToTerraform(struct!.shaper),
  }
}


export function firewallFilterTrafficShapingToHclTerraform(struct?: FirewallFilterTrafficShaping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reverse_shaper: {
      value: cdktf.stringToHclTerraform(struct!.reverseShaper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shaper: {
      value: cdktf.stringToHclTerraform(struct!.shaper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterTrafficShapingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterTrafficShaping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reverseShaper !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseShaper = this._reverseShaper;
    }
    if (this._shaper !== undefined) {
      hasAnyValues = true;
      internalValueResult.shaper = this._shaper;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterTrafficShaping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reverseShaper = undefined;
      this._shaper = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reverseShaper = value.reverseShaper;
      this._shaper = value.shaper;
    }
  }

  // reverse_shaper - computed: true, optional: true, required: false
  private _reverseShaper?: string; 
  public get reverseShaper() {
    return this.getStringAttribute('reverse_shaper');
  }
  public set reverseShaper(value: string) {
    this._reverseShaper = value;
  }
  public resetReverseShaper() {
    this._reverseShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseShaperInput() {
    return this._reverseShaper;
  }

  // shaper - computed: true, optional: true, required: false
  private _shaper?: string; 
  public get shaper() {
    return this.getStringAttribute('shaper');
  }
  public set shaper(value: string) {
    this._shaper = value;
  }
  public resetShaper() {
    this._shaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shaperInput() {
    return this._shaper;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter opnsense_firewall_filter}
*/
export class FirewallFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_firewall_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallFilter to import
  * @param importFromId The id of the existing FirewallFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_firewall_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/firewall_filter opnsense_firewall_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallFilterConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_firewall_filter',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.1',
        providerVersionConstraint: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._categories = config.categories;
    this._description = config.description;
    this._enabled = config.enabled;
    this._filter.internalValue = config.filter;
    this._interface.internalValue = config.interface;
    this._internalTagging.internalValue = config.internalTagging;
    this._noXmlrpcSync = config.noXmlrpcSync;
    this._priority.internalValue = config.priority;
    this._sequence = config.sequence;
    this._sourceRouting.internalValue = config.sourceRouting;
    this._statefulFirewall.internalValue = config.statefulFirewall;
    this._trafficShaping.internalValue = config.trafficShaping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: true, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return cdktf.Fn.tolist(this.getListAttribute('categories'));
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // filter - computed: false, optional: false, required: true
  private _filter = new FirewallFilterFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: FirewallFilterFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: false, optional: false, required: true
  private _interface = new FirewallFilterInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: FirewallFilterInterface) {
    this._interface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // internal_tagging - computed: true, optional: true, required: false
  private _internalTagging = new FirewallFilterInternalTaggingOutputReference(this, "internal_tagging");
  public get internalTagging() {
    return this._internalTagging;
  }
  public putInternalTagging(value: FirewallFilterInternalTagging) {
    this._internalTagging.internalValue = value;
  }
  public resetInternalTagging() {
    this._internalTagging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalTaggingInput() {
    return this._internalTagging.internalValue;
  }

  // no_xmlrpc_sync - computed: true, optional: true, required: false
  private _noXmlrpcSync?: boolean | cdktf.IResolvable; 
  public get noXmlrpcSync() {
    return this.getBooleanAttribute('no_xmlrpc_sync');
  }
  public set noXmlrpcSync(value: boolean | cdktf.IResolvable) {
    this._noXmlrpcSync = value;
  }
  public resetNoXmlrpcSync() {
    this._noXmlrpcSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noXmlrpcSyncInput() {
    return this._noXmlrpcSync;
  }

  // priority - computed: true, optional: true, required: false
  private _priority = new FirewallFilterPriorityOutputReference(this, "priority");
  public get priority() {
    return this._priority;
  }
  public putPriority(value: FirewallFilterPriority) {
    this._priority.internalValue = value;
  }
  public resetPriority() {
    this._priority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority.internalValue;
  }

  // sequence - computed: true, optional: true, required: false
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // source_routing - computed: true, optional: true, required: false
  private _sourceRouting = new FirewallFilterSourceRoutingOutputReference(this, "source_routing");
  public get sourceRouting() {
    return this._sourceRouting;
  }
  public putSourceRouting(value: FirewallFilterSourceRouting) {
    this._sourceRouting.internalValue = value;
  }
  public resetSourceRouting() {
    this._sourceRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRoutingInput() {
    return this._sourceRouting.internalValue;
  }

  // stateful_firewall - computed: true, optional: true, required: false
  private _statefulFirewall = new FirewallFilterStatefulFirewallOutputReference(this, "stateful_firewall");
  public get statefulFirewall() {
    return this._statefulFirewall;
  }
  public putStatefulFirewall(value: FirewallFilterStatefulFirewall) {
    this._statefulFirewall.internalValue = value;
  }
  public resetStatefulFirewall() {
    this._statefulFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulFirewallInput() {
    return this._statefulFirewall.internalValue;
  }

  // traffic_shaping - computed: true, optional: true, required: false
  private _trafficShaping = new FirewallFilterTrafficShapingOutputReference(this, "traffic_shaping");
  public get trafficShaping() {
    return this._trafficShaping;
  }
  public putTrafficShaping(value: FirewallFilterTrafficShaping) {
    this._trafficShaping.internalValue = value;
  }
  public resetTrafficShaping() {
    this._trafficShaping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShapingInput() {
    return this._trafficShaping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._categories),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter: firewallFilterFilterToTerraform(this._filter.internalValue),
      interface: firewallFilterInterfaceToTerraform(this._interface.internalValue),
      internal_tagging: firewallFilterInternalTaggingToTerraform(this._internalTagging.internalValue),
      no_xmlrpc_sync: cdktf.booleanToTerraform(this._noXmlrpcSync),
      priority: firewallFilterPriorityToTerraform(this._priority.internalValue),
      sequence: cdktf.numberToTerraform(this._sequence),
      source_routing: firewallFilterSourceRoutingToTerraform(this._sourceRouting.internalValue),
      stateful_firewall: firewallFilterStatefulFirewallToTerraform(this._statefulFirewall.internalValue),
      traffic_shaping: firewallFilterTrafficShapingToTerraform(this._trafficShaping.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._categories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: firewallFilterFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallFilterFilter",
      },
      interface: {
        value: firewallFilterInterfaceToHclTerraform(this._interface.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallFilterInterface",
      },
      internal_tagging: {
        value: firewallFilterInternalTaggingToHclTerraform(this._internalTagging.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallFilterInternalTagging",
      },
      no_xmlrpc_sync: {
        value: cdktf.booleanToHclTerraform(this._noXmlrpcSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: firewallFilterPriorityToHclTerraform(this._priority.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallFilterPriority",
      },
      sequence: {
        value: cdktf.numberToHclTerraform(this._sequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_routing: {
        value: firewallFilterSourceRoutingToHclTerraform(this._sourceRouting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallFilterSourceRouting",
      },
      stateful_firewall: {
        value: firewallFilterStatefulFirewallToHclTerraform(this._statefulFirewall.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallFilterStatefulFirewall",
      },
      traffic_shaping: {
        value: firewallFilterTrafficShapingToHclTerraform(this._trafficShaping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallFilterTrafficShaping",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
