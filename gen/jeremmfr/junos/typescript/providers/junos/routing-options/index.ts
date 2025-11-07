// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clean supported lines when destroy this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#clean_on_destroy RoutingOptions#clean_on_destroy}
  */
  readonly cleanOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Disable management of `forwarding-table export` in this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#forwarding_table_export_configure_singly RoutingOptions#forwarding_table_export_configure_singly}
  */
  readonly forwardingTableExportConfigureSingly?: boolean | cdktf.IResolvable;
  /**
  * Export policy for instance RIBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#instance_export RoutingOptions#instance_export}
  */
  readonly instanceExport?: string[];
  /**
  * Import policy for instance RIBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#instance_import RoutingOptions#instance_import}
  */
  readonly instanceImport?: string[];
  /**
  * IPv6 router identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#ipv6_router_id RoutingOptions#ipv6_router_id}
  */
  readonly ipv6RouterId?: string;
  /**
  * Router identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#router_id RoutingOptions#router_id}
  */
  readonly routerId?: string;
  /**
  * autonomous_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#autonomous_system RoutingOptions#autonomous_system}
  */
  readonly autonomousSystem?: RoutingOptionsAutonomousSystem;
  /**
  * forwarding_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#forwarding_table RoutingOptions#forwarding_table}
  */
  readonly forwardingTable?: RoutingOptionsForwardingTable;
  /**
  * graceful_restart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#graceful_restart RoutingOptions#graceful_restart}
  */
  readonly gracefulRestart?: RoutingOptionsGracefulRestart;
}
export interface RoutingOptionsAutonomousSystem {
  /**
  * Use AS-Dot notation to display true 4 byte AS numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#asdot_notation RoutingOptions#asdot_notation}
  */
  readonly asdotNotation?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of times this AS can be in an AS path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#loops RoutingOptions#loops}
  */
  readonly loops?: number;
  /**
  * Autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#number RoutingOptions#number}
  */
  readonly number?: string;
}

export function routingOptionsAutonomousSystemToTerraform(struct?: RoutingOptionsAutonomousSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asdot_notation: cdktf.booleanToTerraform(struct!.asdotNotation),
    loops: cdktf.numberToTerraform(struct!.loops),
    number: cdktf.stringToTerraform(struct!.number),
  }
}


export function routingOptionsAutonomousSystemToHclTerraform(struct?: RoutingOptionsAutonomousSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asdot_notation: {
      value: cdktf.booleanToHclTerraform(struct!.asdotNotation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    loops: {
      value: cdktf.numberToHclTerraform(struct!.loops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingOptionsAutonomousSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoutingOptionsAutonomousSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asdotNotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.asdotNotation = this._asdotNotation;
    }
    if (this._loops !== undefined) {
      hasAnyValues = true;
      internalValueResult.loops = this._loops;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingOptionsAutonomousSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asdotNotation = undefined;
      this._loops = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asdotNotation = value.asdotNotation;
      this._loops = value.loops;
      this._number = value.number;
    }
  }

  // asdot_notation - computed: false, optional: true, required: false
  private _asdotNotation?: boolean | cdktf.IResolvable; 
  public get asdotNotation() {
    return this.getBooleanAttribute('asdot_notation');
  }
  public set asdotNotation(value: boolean | cdktf.IResolvable) {
    this._asdotNotation = value;
  }
  public resetAsdotNotation() {
    this._asdotNotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asdotNotationInput() {
    return this._asdotNotation;
  }

  // loops - computed: false, optional: true, required: false
  private _loops?: number; 
  public get loops() {
    return this.getNumberAttribute('loops');
  }
  public set loops(value: number) {
    this._loops = value;
  }
  public resetLoops() {
    this._loops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopsInput() {
    return this._loops;
  }

  // number - computed: false, optional: true, required: false
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface RoutingOptionsForwardingTable {
  /**
  * Maximum labels inside chain composite for the platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#chain_composite_max_label_count RoutingOptions#chain_composite_max_label_count}
  */
  readonly chainCompositeMaxLabelCount?: number;
  /**
  * Next-hop chaining mode -> Ingress LSP nexthop settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#chained_composite_next_hop_ingress RoutingOptions#chained_composite_next_hop_ingress}
  */
  readonly chainedCompositeNextHopIngress?: string[];
  /**
  * Next-hop chaining mode -> Transit LSP nexthops settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#chained_composite_next_hop_transit RoutingOptions#chained_composite_next_hop_transit}
  */
  readonly chainedCompositeNextHopTransit?: string[];
  /**
  * Dynamic next-hop mode for EVPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#dynamic_list_next_hop RoutingOptions#dynamic_list_next_hop}
  */
  readonly dynamicListNextHop?: boolean | cdktf.IResolvable;
  /**
  * Enable fast reroute for ECMP next hops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#ecmp_fast_reroute RoutingOptions#ecmp_fast_reroute}
  */
  readonly ecmpFastReroute?: boolean | cdktf.IResolvable;
  /**
  * Export policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#export RoutingOptions#export}
  */
  readonly export?: string[];
  /**
  * Install indirect next hops in Packet Forwarding Engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#indirect_next_hop RoutingOptions#indirect_next_hop}
  */
  readonly indirectNextHop?: boolean | cdktf.IResolvable;
  /**
  * Request acknowledgements for Indirect next hop changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#indirect_next_hop_change_acknowledgements RoutingOptions#indirect_next_hop_change_acknowledgements}
  */
  readonly indirectNextHopChangeAcknowledgements?: boolean | cdktf.IResolvable;
  /**
  * Kernel nexthop ack timeout interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#krt_nexthop_ack_timeout RoutingOptions#krt_nexthop_ack_timeout}
  */
  readonly krtNexthopAckTimeout?: number;
  /**
  * Don't enable fast reroute for ECMP next hops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#no_ecmp_fast_reroute RoutingOptions#no_ecmp_fast_reroute}
  */
  readonly noEcmpFastReroute?: boolean | cdktf.IResolvable;
  /**
  * Don't install indirect next hops in Packet Forwarding Engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#no_indirect_next_hop RoutingOptions#no_indirect_next_hop}
  */
  readonly noIndirectNextHop?: boolean | cdktf.IResolvable;
  /**
  * Don't request acknowledgements for Indirect next hop changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#no_indirect_next_hop_change_acknowledgements RoutingOptions#no_indirect_next_hop_change_acknowledgements}
  */
  readonly noIndirectNextHopChangeAcknowledgements?: boolean | cdktf.IResolvable;
  /**
  * Time to hold inherited routes from FIB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#remnant_holdtime RoutingOptions#remnant_holdtime}
  */
  readonly remnantHoldtime?: number;
  /**
  * Unicast reverse path (RP) verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#unicast_reverse_path RoutingOptions#unicast_reverse_path}
  */
  readonly unicastReversePath?: string;
}

export function routingOptionsForwardingTableToTerraform(struct?: RoutingOptionsForwardingTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chain_composite_max_label_count: cdktf.numberToTerraform(struct!.chainCompositeMaxLabelCount),
    chained_composite_next_hop_ingress: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.chainedCompositeNextHopIngress),
    chained_composite_next_hop_transit: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.chainedCompositeNextHopTransit),
    dynamic_list_next_hop: cdktf.booleanToTerraform(struct!.dynamicListNextHop),
    ecmp_fast_reroute: cdktf.booleanToTerraform(struct!.ecmpFastReroute),
    export: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.export),
    indirect_next_hop: cdktf.booleanToTerraform(struct!.indirectNextHop),
    indirect_next_hop_change_acknowledgements: cdktf.booleanToTerraform(struct!.indirectNextHopChangeAcknowledgements),
    krt_nexthop_ack_timeout: cdktf.numberToTerraform(struct!.krtNexthopAckTimeout),
    no_ecmp_fast_reroute: cdktf.booleanToTerraform(struct!.noEcmpFastReroute),
    no_indirect_next_hop: cdktf.booleanToTerraform(struct!.noIndirectNextHop),
    no_indirect_next_hop_change_acknowledgements: cdktf.booleanToTerraform(struct!.noIndirectNextHopChangeAcknowledgements),
    remnant_holdtime: cdktf.numberToTerraform(struct!.remnantHoldtime),
    unicast_reverse_path: cdktf.stringToTerraform(struct!.unicastReversePath),
  }
}


export function routingOptionsForwardingTableToHclTerraform(struct?: RoutingOptionsForwardingTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chain_composite_max_label_count: {
      value: cdktf.numberToHclTerraform(struct!.chainCompositeMaxLabelCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chained_composite_next_hop_ingress: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.chainedCompositeNextHopIngress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    chained_composite_next_hop_transit: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.chainedCompositeNextHopTransit),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dynamic_list_next_hop: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicListNextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ecmp_fast_reroute: {
      value: cdktf.booleanToHclTerraform(struct!.ecmpFastReroute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.export),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    indirect_next_hop: {
      value: cdktf.booleanToHclTerraform(struct!.indirectNextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    indirect_next_hop_change_acknowledgements: {
      value: cdktf.booleanToHclTerraform(struct!.indirectNextHopChangeAcknowledgements),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    krt_nexthop_ack_timeout: {
      value: cdktf.numberToHclTerraform(struct!.krtNexthopAckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ecmp_fast_reroute: {
      value: cdktf.booleanToHclTerraform(struct!.noEcmpFastReroute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_indirect_next_hop: {
      value: cdktf.booleanToHclTerraform(struct!.noIndirectNextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_indirect_next_hop_change_acknowledgements: {
      value: cdktf.booleanToHclTerraform(struct!.noIndirectNextHopChangeAcknowledgements),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remnant_holdtime: {
      value: cdktf.numberToHclTerraform(struct!.remnantHoldtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unicast_reverse_path: {
      value: cdktf.stringToHclTerraform(struct!.unicastReversePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingOptionsForwardingTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoutingOptionsForwardingTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chainCompositeMaxLabelCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainCompositeMaxLabelCount = this._chainCompositeMaxLabelCount;
    }
    if (this._chainedCompositeNextHopIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainedCompositeNextHopIngress = this._chainedCompositeNextHopIngress;
    }
    if (this._chainedCompositeNextHopTransit !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainedCompositeNextHopTransit = this._chainedCompositeNextHopTransit;
    }
    if (this._dynamicListNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicListNextHop = this._dynamicListNextHop;
    }
    if (this._ecmpFastReroute !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecmpFastReroute = this._ecmpFastReroute;
    }
    if (this._export !== undefined) {
      hasAnyValues = true;
      internalValueResult.export = this._export;
    }
    if (this._indirectNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.indirectNextHop = this._indirectNextHop;
    }
    if (this._indirectNextHopChangeAcknowledgements !== undefined) {
      hasAnyValues = true;
      internalValueResult.indirectNextHopChangeAcknowledgements = this._indirectNextHopChangeAcknowledgements;
    }
    if (this._krtNexthopAckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.krtNexthopAckTimeout = this._krtNexthopAckTimeout;
    }
    if (this._noEcmpFastReroute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noEcmpFastReroute = this._noEcmpFastReroute;
    }
    if (this._noIndirectNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIndirectNextHop = this._noIndirectNextHop;
    }
    if (this._noIndirectNextHopChangeAcknowledgements !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIndirectNextHopChangeAcknowledgements = this._noIndirectNextHopChangeAcknowledgements;
    }
    if (this._remnantHoldtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.remnantHoldtime = this._remnantHoldtime;
    }
    if (this._unicastReversePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicastReversePath = this._unicastReversePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingOptionsForwardingTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chainCompositeMaxLabelCount = undefined;
      this._chainedCompositeNextHopIngress = undefined;
      this._chainedCompositeNextHopTransit = undefined;
      this._dynamicListNextHop = undefined;
      this._ecmpFastReroute = undefined;
      this._export = undefined;
      this._indirectNextHop = undefined;
      this._indirectNextHopChangeAcknowledgements = undefined;
      this._krtNexthopAckTimeout = undefined;
      this._noEcmpFastReroute = undefined;
      this._noIndirectNextHop = undefined;
      this._noIndirectNextHopChangeAcknowledgements = undefined;
      this._remnantHoldtime = undefined;
      this._unicastReversePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chainCompositeMaxLabelCount = value.chainCompositeMaxLabelCount;
      this._chainedCompositeNextHopIngress = value.chainedCompositeNextHopIngress;
      this._chainedCompositeNextHopTransit = value.chainedCompositeNextHopTransit;
      this._dynamicListNextHop = value.dynamicListNextHop;
      this._ecmpFastReroute = value.ecmpFastReroute;
      this._export = value.export;
      this._indirectNextHop = value.indirectNextHop;
      this._indirectNextHopChangeAcknowledgements = value.indirectNextHopChangeAcknowledgements;
      this._krtNexthopAckTimeout = value.krtNexthopAckTimeout;
      this._noEcmpFastReroute = value.noEcmpFastReroute;
      this._noIndirectNextHop = value.noIndirectNextHop;
      this._noIndirectNextHopChangeAcknowledgements = value.noIndirectNextHopChangeAcknowledgements;
      this._remnantHoldtime = value.remnantHoldtime;
      this._unicastReversePath = value.unicastReversePath;
    }
  }

  // chain_composite_max_label_count - computed: false, optional: true, required: false
  private _chainCompositeMaxLabelCount?: number; 
  public get chainCompositeMaxLabelCount() {
    return this.getNumberAttribute('chain_composite_max_label_count');
  }
  public set chainCompositeMaxLabelCount(value: number) {
    this._chainCompositeMaxLabelCount = value;
  }
  public resetChainCompositeMaxLabelCount() {
    this._chainCompositeMaxLabelCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainCompositeMaxLabelCountInput() {
    return this._chainCompositeMaxLabelCount;
  }

  // chained_composite_next_hop_ingress - computed: false, optional: true, required: false
  private _chainedCompositeNextHopIngress?: string[]; 
  public get chainedCompositeNextHopIngress() {
    return cdktf.Fn.tolist(this.getListAttribute('chained_composite_next_hop_ingress'));
  }
  public set chainedCompositeNextHopIngress(value: string[]) {
    this._chainedCompositeNextHopIngress = value;
  }
  public resetChainedCompositeNextHopIngress() {
    this._chainedCompositeNextHopIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainedCompositeNextHopIngressInput() {
    return this._chainedCompositeNextHopIngress;
  }

  // chained_composite_next_hop_transit - computed: false, optional: true, required: false
  private _chainedCompositeNextHopTransit?: string[]; 
  public get chainedCompositeNextHopTransit() {
    return cdktf.Fn.tolist(this.getListAttribute('chained_composite_next_hop_transit'));
  }
  public set chainedCompositeNextHopTransit(value: string[]) {
    this._chainedCompositeNextHopTransit = value;
  }
  public resetChainedCompositeNextHopTransit() {
    this._chainedCompositeNextHopTransit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainedCompositeNextHopTransitInput() {
    return this._chainedCompositeNextHopTransit;
  }

  // dynamic_list_next_hop - computed: false, optional: true, required: false
  private _dynamicListNextHop?: boolean | cdktf.IResolvable; 
  public get dynamicListNextHop() {
    return this.getBooleanAttribute('dynamic_list_next_hop');
  }
  public set dynamicListNextHop(value: boolean | cdktf.IResolvable) {
    this._dynamicListNextHop = value;
  }
  public resetDynamicListNextHop() {
    this._dynamicListNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicListNextHopInput() {
    return this._dynamicListNextHop;
  }

  // ecmp_fast_reroute - computed: false, optional: true, required: false
  private _ecmpFastReroute?: boolean | cdktf.IResolvable; 
  public get ecmpFastReroute() {
    return this.getBooleanAttribute('ecmp_fast_reroute');
  }
  public set ecmpFastReroute(value: boolean | cdktf.IResolvable) {
    this._ecmpFastReroute = value;
  }
  public resetEcmpFastReroute() {
    this._ecmpFastReroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpFastRerouteInput() {
    return this._ecmpFastReroute;
  }

  // export - computed: false, optional: true, required: false
  private _export?: string[]; 
  public get export() {
    return this.getListAttribute('export');
  }
  public set export(value: string[]) {
    this._export = value;
  }
  public resetExport() {
    this._export = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export;
  }

  // indirect_next_hop - computed: false, optional: true, required: false
  private _indirectNextHop?: boolean | cdktf.IResolvable; 
  public get indirectNextHop() {
    return this.getBooleanAttribute('indirect_next_hop');
  }
  public set indirectNextHop(value: boolean | cdktf.IResolvable) {
    this._indirectNextHop = value;
  }
  public resetIndirectNextHop() {
    this._indirectNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indirectNextHopInput() {
    return this._indirectNextHop;
  }

  // indirect_next_hop_change_acknowledgements - computed: false, optional: true, required: false
  private _indirectNextHopChangeAcknowledgements?: boolean | cdktf.IResolvable; 
  public get indirectNextHopChangeAcknowledgements() {
    return this.getBooleanAttribute('indirect_next_hop_change_acknowledgements');
  }
  public set indirectNextHopChangeAcknowledgements(value: boolean | cdktf.IResolvable) {
    this._indirectNextHopChangeAcknowledgements = value;
  }
  public resetIndirectNextHopChangeAcknowledgements() {
    this._indirectNextHopChangeAcknowledgements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indirectNextHopChangeAcknowledgementsInput() {
    return this._indirectNextHopChangeAcknowledgements;
  }

  // krt_nexthop_ack_timeout - computed: false, optional: true, required: false
  private _krtNexthopAckTimeout?: number; 
  public get krtNexthopAckTimeout() {
    return this.getNumberAttribute('krt_nexthop_ack_timeout');
  }
  public set krtNexthopAckTimeout(value: number) {
    this._krtNexthopAckTimeout = value;
  }
  public resetKrtNexthopAckTimeout() {
    this._krtNexthopAckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krtNexthopAckTimeoutInput() {
    return this._krtNexthopAckTimeout;
  }

  // no_ecmp_fast_reroute - computed: false, optional: true, required: false
  private _noEcmpFastReroute?: boolean | cdktf.IResolvable; 
  public get noEcmpFastReroute() {
    return this.getBooleanAttribute('no_ecmp_fast_reroute');
  }
  public set noEcmpFastReroute(value: boolean | cdktf.IResolvable) {
    this._noEcmpFastReroute = value;
  }
  public resetNoEcmpFastReroute() {
    this._noEcmpFastReroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noEcmpFastRerouteInput() {
    return this._noEcmpFastReroute;
  }

  // no_indirect_next_hop - computed: false, optional: true, required: false
  private _noIndirectNextHop?: boolean | cdktf.IResolvable; 
  public get noIndirectNextHop() {
    return this.getBooleanAttribute('no_indirect_next_hop');
  }
  public set noIndirectNextHop(value: boolean | cdktf.IResolvable) {
    this._noIndirectNextHop = value;
  }
  public resetNoIndirectNextHop() {
    this._noIndirectNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIndirectNextHopInput() {
    return this._noIndirectNextHop;
  }

  // no_indirect_next_hop_change_acknowledgements - computed: false, optional: true, required: false
  private _noIndirectNextHopChangeAcknowledgements?: boolean | cdktf.IResolvable; 
  public get noIndirectNextHopChangeAcknowledgements() {
    return this.getBooleanAttribute('no_indirect_next_hop_change_acknowledgements');
  }
  public set noIndirectNextHopChangeAcknowledgements(value: boolean | cdktf.IResolvable) {
    this._noIndirectNextHopChangeAcknowledgements = value;
  }
  public resetNoIndirectNextHopChangeAcknowledgements() {
    this._noIndirectNextHopChangeAcknowledgements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIndirectNextHopChangeAcknowledgementsInput() {
    return this._noIndirectNextHopChangeAcknowledgements;
  }

  // remnant_holdtime - computed: false, optional: true, required: false
  private _remnantHoldtime?: number; 
  public get remnantHoldtime() {
    return this.getNumberAttribute('remnant_holdtime');
  }
  public set remnantHoldtime(value: number) {
    this._remnantHoldtime = value;
  }
  public resetRemnantHoldtime() {
    this._remnantHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remnantHoldtimeInput() {
    return this._remnantHoldtime;
  }

  // unicast_reverse_path - computed: false, optional: true, required: false
  private _unicastReversePath?: string; 
  public get unicastReversePath() {
    return this.getStringAttribute('unicast_reverse_path');
  }
  public set unicastReversePath(value: string) {
    this._unicastReversePath = value;
  }
  public resetUnicastReversePath() {
    this._unicastReversePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastReversePathInput() {
    return this._unicastReversePath;
  }
}
export interface RoutingOptionsGracefulRestart {
  /**
  * Disable graceful restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#disable RoutingOptions#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Maximum time for which router is in graceful restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#restart_duration RoutingOptions#restart_duration}
  */
  readonly restartDuration?: number;
}

export function routingOptionsGracefulRestartToTerraform(struct?: RoutingOptionsGracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    restart_duration: cdktf.numberToTerraform(struct!.restartDuration),
  }
}


export function routingOptionsGracefulRestartToHclTerraform(struct?: RoutingOptionsGracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restart_duration: {
      value: cdktf.numberToHclTerraform(struct!.restartDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingOptionsGracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoutingOptionsGracefulRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._restartDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartDuration = this._restartDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingOptionsGracefulRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._restartDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._restartDuration = value.restartDuration;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // restart_duration - computed: false, optional: true, required: false
  private _restartDuration?: number; 
  public get restartDuration() {
    return this.getNumberAttribute('restart_duration');
  }
  public set restartDuration(value: number) {
    this._restartDuration = value;
  }
  public resetRestartDuration() {
    this._restartDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartDurationInput() {
    return this._restartDuration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options junos_routing_options}
*/
export class RoutingOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_routing_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingOptions to import
  * @param importFromId The id of the existing RoutingOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_routing_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_options junos_routing_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingOptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RoutingOptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_routing_options',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cleanOnDestroy = config.cleanOnDestroy;
    this._forwardingTableExportConfigureSingly = config.forwardingTableExportConfigureSingly;
    this._instanceExport = config.instanceExport;
    this._instanceImport = config.instanceImport;
    this._ipv6RouterId = config.ipv6RouterId;
    this._routerId = config.routerId;
    this._autonomousSystem.internalValue = config.autonomousSystem;
    this._forwardingTable.internalValue = config.forwardingTable;
    this._gracefulRestart.internalValue = config.gracefulRestart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clean_on_destroy - computed: false, optional: true, required: false
  private _cleanOnDestroy?: boolean | cdktf.IResolvable; 
  public get cleanOnDestroy() {
    return this.getBooleanAttribute('clean_on_destroy');
  }
  public set cleanOnDestroy(value: boolean | cdktf.IResolvable) {
    this._cleanOnDestroy = value;
  }
  public resetCleanOnDestroy() {
    this._cleanOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanOnDestroyInput() {
    return this._cleanOnDestroy;
  }

  // forwarding_table_export_configure_singly - computed: false, optional: true, required: false
  private _forwardingTableExportConfigureSingly?: boolean | cdktf.IResolvable; 
  public get forwardingTableExportConfigureSingly() {
    return this.getBooleanAttribute('forwarding_table_export_configure_singly');
  }
  public set forwardingTableExportConfigureSingly(value: boolean | cdktf.IResolvable) {
    this._forwardingTableExportConfigureSingly = value;
  }
  public resetForwardingTableExportConfigureSingly() {
    this._forwardingTableExportConfigureSingly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingTableExportConfigureSinglyInput() {
    return this._forwardingTableExportConfigureSingly;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_export - computed: false, optional: true, required: false
  private _instanceExport?: string[]; 
  public get instanceExport() {
    return this.getListAttribute('instance_export');
  }
  public set instanceExport(value: string[]) {
    this._instanceExport = value;
  }
  public resetInstanceExport() {
    this._instanceExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceExportInput() {
    return this._instanceExport;
  }

  // instance_import - computed: false, optional: true, required: false
  private _instanceImport?: string[]; 
  public get instanceImport() {
    return this.getListAttribute('instance_import');
  }
  public set instanceImport(value: string[]) {
    this._instanceImport = value;
  }
  public resetInstanceImport() {
    this._instanceImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceImportInput() {
    return this._instanceImport;
  }

  // ipv6_router_id - computed: false, optional: true, required: false
  private _ipv6RouterId?: string; 
  public get ipv6RouterId() {
    return this.getStringAttribute('ipv6_router_id');
  }
  public set ipv6RouterId(value: string) {
    this._ipv6RouterId = value;
  }
  public resetIpv6RouterId() {
    this._ipv6RouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RouterIdInput() {
    return this._ipv6RouterId;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // autonomous_system - computed: false, optional: true, required: false
  private _autonomousSystem = new RoutingOptionsAutonomousSystemOutputReference(this, "autonomous_system");
  public get autonomousSystem() {
    return this._autonomousSystem;
  }
  public putAutonomousSystem(value: RoutingOptionsAutonomousSystem) {
    this._autonomousSystem.internalValue = value;
  }
  public resetAutonomousSystem() {
    this._autonomousSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousSystemInput() {
    return this._autonomousSystem.internalValue;
  }

  // forwarding_table - computed: false, optional: true, required: false
  private _forwardingTable = new RoutingOptionsForwardingTableOutputReference(this, "forwarding_table");
  public get forwardingTable() {
    return this._forwardingTable;
  }
  public putForwardingTable(value: RoutingOptionsForwardingTable) {
    this._forwardingTable.internalValue = value;
  }
  public resetForwardingTable() {
    this._forwardingTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingTableInput() {
    return this._forwardingTable.internalValue;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart = new RoutingOptionsGracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: RoutingOptionsGracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clean_on_destroy: cdktf.booleanToTerraform(this._cleanOnDestroy),
      forwarding_table_export_configure_singly: cdktf.booleanToTerraform(this._forwardingTableExportConfigureSingly),
      instance_export: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceExport),
      instance_import: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceImport),
      ipv6_router_id: cdktf.stringToTerraform(this._ipv6RouterId),
      router_id: cdktf.stringToTerraform(this._routerId),
      autonomous_system: routingOptionsAutonomousSystemToTerraform(this._autonomousSystem.internalValue),
      forwarding_table: routingOptionsForwardingTableToTerraform(this._forwardingTable.internalValue),
      graceful_restart: routingOptionsGracefulRestartToTerraform(this._gracefulRestart.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clean_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._cleanOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forwarding_table_export_configure_singly: {
        value: cdktf.booleanToHclTerraform(this._forwardingTableExportConfigureSingly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_export: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceExport),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance_import: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceImport),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_router_id: {
        value: cdktf.stringToHclTerraform(this._ipv6RouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autonomous_system: {
        value: routingOptionsAutonomousSystemToHclTerraform(this._autonomousSystem.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoutingOptionsAutonomousSystem",
      },
      forwarding_table: {
        value: routingOptionsForwardingTableToHclTerraform(this._forwardingTable.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoutingOptionsForwardingTable",
      },
      graceful_restart: {
        value: routingOptionsGracefulRestartToHclTerraform(this._gracefulRestart.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoutingOptionsGracefulRestart",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
