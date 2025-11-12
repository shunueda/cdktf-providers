// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfacePhysicalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#description InterfacePhysical#description}
  */
  readonly description?: string;
  /**
  * Disable this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#disable InterfacePhysical#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Physical link-layer encapsulation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#encapsulation InterfacePhysical#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Support for no tagging, or single and double 802.1q VLAN tagging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#flexible_vlan_tagging InterfacePhysical#flexible_vlan_tagging}
  */
  readonly flexibleVlanTagging?: boolean | cdktf.IResolvable;
  /**
  * Enable gratuitous ARP reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#gratuitous_arp_reply InterfacePhysical#gratuitous_arp_reply}
  */
  readonly gratuitousArpReply?: boolean | cdktf.IResolvable;
  /**
  * Link down hold time (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#hold_time_down InterfacePhysical#hold_time_down}
  */
  readonly holdTimeDown?: number;
  /**
  * Link up hold time (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#hold_time_up InterfacePhysical#hold_time_up}
  */
  readonly holdTimeUp?: number;
  /**
  * Link operational mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#link_mode InterfacePhysical#link_mode}
  */
  readonly linkMode?: string;
  /**
  * Maximum transmission unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#mtu InterfacePhysical#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of physical interface (without dot).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#name InterfacePhysical#name}
  */
  readonly name: string;
  /**
  * When destroy this resource, delete all configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#no_disable_on_destroy InterfacePhysical#no_disable_on_destroy}
  */
  readonly noDisableOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Don't enable gratuitous ARP reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#no_gratuitous_arp_reply InterfacePhysical#no_gratuitous_arp_reply}
  */
  readonly noGratuitousArpReply?: boolean | cdktf.IResolvable;
  /**
  * Ignore gratuitous ARP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#no_gratuitous_arp_request InterfacePhysical#no_gratuitous_arp_request}
  */
  readonly noGratuitousArpRequest?: boolean | cdktf.IResolvable;
  /**
  * Link speed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#speed InterfacePhysical#speed}
  */
  readonly speed?: string;
  /**
  * Storm control profile name to bind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#storm_control InterfacePhysical#storm_control}
  */
  readonly stormControl?: string;
  /**
  * Interface mode is trunk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#trunk InterfacePhysical#trunk}
  */
  readonly trunk?: boolean | cdktf.IResolvable;
  /**
  * Port mode is trunk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#trunk_non_els InterfacePhysical#trunk_non_els}
  */
  readonly trunkNonEls?: boolean | cdktf.IResolvable;
  /**
  * List of vlan for membership for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#vlan_members InterfacePhysical#vlan_members}
  */
  readonly vlanMembers?: string[];
  /**
  * Vlan for untagged frames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#vlan_native InterfacePhysical#vlan_native}
  */
  readonly vlanNative?: number;
  /**
  * Vlan for untagged frames (non-ELS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#vlan_native_non_els InterfacePhysical#vlan_native_non_els}
  */
  readonly vlanNativeNonEls?: string;
  /**
  * Add 802.1q VLAN tagging support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#vlan_tagging InterfacePhysical#vlan_tagging}
  */
  readonly vlanTagging?: boolean | cdktf.IResolvable;
  /**
  * esi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#esi InterfacePhysical#esi}
  */
  readonly esi?: InterfacePhysicalEsi;
  /**
  * ether_opts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#ether_opts InterfacePhysical#ether_opts}
  */
  readonly etherOpts?: InterfacePhysicalEtherOpts;
  /**
  * gigether_opts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#gigether_opts InterfacePhysical#gigether_opts}
  */
  readonly gigetherOpts?: InterfacePhysicalGigetherOpts;
  /**
  * parent_ether_opts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#parent_ether_opts InterfacePhysical#parent_ether_opts}
  */
  readonly parentEtherOpts?: InterfacePhysicalParentEtherOpts;
}
export interface InterfacePhysicalEsi {
  /**
  * Auto-derive ESI value for the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#auto_derive_lacp InterfacePhysical#auto_derive_lacp}
  */
  readonly autoDeriveLacp?: boolean | cdktf.IResolvable;
  /**
  * DF Election Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#df_election_type InterfacePhysical#df_election_type}
  */
  readonly dfElectionType?: string;
  /**
  * The ESI value for the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#identifier InterfacePhysical#identifier}
  */
  readonly identifier?: string;
  /**
  * ESI Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#mode InterfacePhysical#mode}
  */
  readonly mode?: string;
  /**
  * Unicast Source B-MAC address per ESI for PBB-EVPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#source_bmac InterfacePhysical#source_bmac}
  */
  readonly sourceBmac?: string;
}

export function interfacePhysicalEsiToTerraform(struct?: InterfacePhysicalEsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_derive_lacp: cdktf.booleanToTerraform(struct!.autoDeriveLacp),
    df_election_type: cdktf.stringToTerraform(struct!.dfElectionType),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    mode: cdktf.stringToTerraform(struct!.mode),
    source_bmac: cdktf.stringToTerraform(struct!.sourceBmac),
  }
}


export function interfacePhysicalEsiToHclTerraform(struct?: InterfacePhysicalEsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_derive_lacp: {
      value: cdktf.booleanToHclTerraform(struct!.autoDeriveLacp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    df_election_type: {
      value: cdktf.stringToHclTerraform(struct!.dfElectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_bmac: {
      value: cdktf.stringToHclTerraform(struct!.sourceBmac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalEsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfacePhysicalEsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDeriveLacp !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeriveLacp = this._autoDeriveLacp;
    }
    if (this._dfElectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dfElectionType = this._dfElectionType;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sourceBmac !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceBmac = this._sourceBmac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalEsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDeriveLacp = undefined;
      this._dfElectionType = undefined;
      this._identifier = undefined;
      this._mode = undefined;
      this._sourceBmac = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDeriveLacp = value.autoDeriveLacp;
      this._dfElectionType = value.dfElectionType;
      this._identifier = value.identifier;
      this._mode = value.mode;
      this._sourceBmac = value.sourceBmac;
    }
  }

  // auto_derive_lacp - computed: false, optional: true, required: false
  private _autoDeriveLacp?: boolean | cdktf.IResolvable; 
  public get autoDeriveLacp() {
    return this.getBooleanAttribute('auto_derive_lacp');
  }
  public set autoDeriveLacp(value: boolean | cdktf.IResolvable) {
    this._autoDeriveLacp = value;
  }
  public resetAutoDeriveLacp() {
    this._autoDeriveLacp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeriveLacpInput() {
    return this._autoDeriveLacp;
  }

  // df_election_type - computed: false, optional: true, required: false
  private _dfElectionType?: string; 
  public get dfElectionType() {
    return this.getStringAttribute('df_election_type');
  }
  public set dfElectionType(value: string) {
    this._dfElectionType = value;
  }
  public resetDfElectionType() {
    this._dfElectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfElectionTypeInput() {
    return this._dfElectionType;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // source_bmac - computed: false, optional: true, required: false
  private _sourceBmac?: string; 
  public get sourceBmac() {
    return this.getStringAttribute('source_bmac');
  }
  public set sourceBmac(value: string) {
    this._sourceBmac = value;
  }
  public resetSourceBmac() {
    this._sourceBmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBmacInput() {
    return this._sourceBmac;
  }
}
export interface InterfacePhysicalEtherOpts {
  /**
  * Name of an aggregated Ethernet interface to join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#ae_8023ad InterfacePhysical#ae_8023ad}
  */
  readonly ae8023Ad?: string;
  /**
  * Enable auto-negotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#auto_negotiation InterfacePhysical#auto_negotiation}
  */
  readonly autoNegotiation?: boolean | cdktf.IResolvable;
  /**
  * Enable flow control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#flow_control InterfacePhysical#flow_control}
  */
  readonly flowControl?: boolean | cdktf.IResolvable;
  /**
  * Enable loopback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#loopback InterfacePhysical#loopback}
  */
  readonly loopback?: boolean | cdktf.IResolvable;
  /**
  * Don't enable auto-negotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#no_auto_negotiation InterfacePhysical#no_auto_negotiation}
  */
  readonly noAutoNegotiation?: boolean | cdktf.IResolvable;
  /**
  * Don't enable flow control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#no_flow_control InterfacePhysical#no_flow_control}
  */
  readonly noFlowControl?: boolean | cdktf.IResolvable;
  /**
  * Don't enable loopback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#no_loopback InterfacePhysical#no_loopback}
  */
  readonly noLoopback?: boolean | cdktf.IResolvable;
  /**
  * Name of a redundant ethernet interface to join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#redundant_parent InterfacePhysical#redundant_parent}
  */
  readonly redundantParent?: string;
}

export function interfacePhysicalEtherOptsToTerraform(struct?: InterfacePhysicalEtherOpts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ae_8023ad: cdktf.stringToTerraform(struct!.ae8023Ad),
    auto_negotiation: cdktf.booleanToTerraform(struct!.autoNegotiation),
    flow_control: cdktf.booleanToTerraform(struct!.flowControl),
    loopback: cdktf.booleanToTerraform(struct!.loopback),
    no_auto_negotiation: cdktf.booleanToTerraform(struct!.noAutoNegotiation),
    no_flow_control: cdktf.booleanToTerraform(struct!.noFlowControl),
    no_loopback: cdktf.booleanToTerraform(struct!.noLoopback),
    redundant_parent: cdktf.stringToTerraform(struct!.redundantParent),
  }
}


export function interfacePhysicalEtherOptsToHclTerraform(struct?: InterfacePhysicalEtherOpts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ae_8023ad: {
      value: cdktf.stringToHclTerraform(struct!.ae8023Ad),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_negotiation: {
      value: cdktf.booleanToHclTerraform(struct!.autoNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flow_control: {
      value: cdktf.booleanToHclTerraform(struct!.flowControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    loopback: {
      value: cdktf.booleanToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_auto_negotiation: {
      value: cdktf.booleanToHclTerraform(struct!.noAutoNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_flow_control: {
      value: cdktf.booleanToHclTerraform(struct!.noFlowControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_loopback: {
      value: cdktf.booleanToHclTerraform(struct!.noLoopback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redundant_parent: {
      value: cdktf.stringToHclTerraform(struct!.redundantParent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalEtherOptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfacePhysicalEtherOpts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ae8023Ad !== undefined) {
      hasAnyValues = true;
      internalValueResult.ae8023Ad = this._ae8023Ad;
    }
    if (this._autoNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoNegotiation = this._autoNegotiation;
    }
    if (this._flowControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowControl = this._flowControl;
    }
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    if (this._noAutoNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAutoNegotiation = this._noAutoNegotiation;
    }
    if (this._noFlowControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFlowControl = this._noFlowControl;
    }
    if (this._noLoopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.noLoopback = this._noLoopback;
    }
    if (this._redundantParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundantParent = this._redundantParent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalEtherOpts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ae8023Ad = undefined;
      this._autoNegotiation = undefined;
      this._flowControl = undefined;
      this._loopback = undefined;
      this._noAutoNegotiation = undefined;
      this._noFlowControl = undefined;
      this._noLoopback = undefined;
      this._redundantParent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ae8023Ad = value.ae8023Ad;
      this._autoNegotiation = value.autoNegotiation;
      this._flowControl = value.flowControl;
      this._loopback = value.loopback;
      this._noAutoNegotiation = value.noAutoNegotiation;
      this._noFlowControl = value.noFlowControl;
      this._noLoopback = value.noLoopback;
      this._redundantParent = value.redundantParent;
    }
  }

  // ae_8023ad - computed: false, optional: true, required: false
  private _ae8023Ad?: string; 
  public get ae8023Ad() {
    return this.getStringAttribute('ae_8023ad');
  }
  public set ae8023Ad(value: string) {
    this._ae8023Ad = value;
  }
  public resetAe8023Ad() {
    this._ae8023Ad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ae8023AdInput() {
    return this._ae8023Ad;
  }

  // auto_negotiation - computed: false, optional: true, required: false
  private _autoNegotiation?: boolean | cdktf.IResolvable; 
  public get autoNegotiation() {
    return this.getBooleanAttribute('auto_negotiation');
  }
  public set autoNegotiation(value: boolean | cdktf.IResolvable) {
    this._autoNegotiation = value;
  }
  public resetAutoNegotiation() {
    this._autoNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNegotiationInput() {
    return this._autoNegotiation;
  }

  // flow_control - computed: false, optional: true, required: false
  private _flowControl?: boolean | cdktf.IResolvable; 
  public get flowControl() {
    return this.getBooleanAttribute('flow_control');
  }
  public set flowControl(value: boolean | cdktf.IResolvable) {
    this._flowControl = value;
  }
  public resetFlowControl() {
    this._flowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowControlInput() {
    return this._flowControl;
  }

  // loopback - computed: false, optional: true, required: false
  private _loopback?: boolean | cdktf.IResolvable; 
  public get loopback() {
    return this.getBooleanAttribute('loopback');
  }
  public set loopback(value: boolean | cdktf.IResolvable) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }

  // no_auto_negotiation - computed: false, optional: true, required: false
  private _noAutoNegotiation?: boolean | cdktf.IResolvable; 
  public get noAutoNegotiation() {
    return this.getBooleanAttribute('no_auto_negotiation');
  }
  public set noAutoNegotiation(value: boolean | cdktf.IResolvable) {
    this._noAutoNegotiation = value;
  }
  public resetNoAutoNegotiation() {
    this._noAutoNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAutoNegotiationInput() {
    return this._noAutoNegotiation;
  }

  // no_flow_control - computed: false, optional: true, required: false
  private _noFlowControl?: boolean | cdktf.IResolvable; 
  public get noFlowControl() {
    return this.getBooleanAttribute('no_flow_control');
  }
  public set noFlowControl(value: boolean | cdktf.IResolvable) {
    this._noFlowControl = value;
  }
  public resetNoFlowControl() {
    this._noFlowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFlowControlInput() {
    return this._noFlowControl;
  }

  // no_loopback - computed: false, optional: true, required: false
  private _noLoopback?: boolean | cdktf.IResolvable; 
  public get noLoopback() {
    return this.getBooleanAttribute('no_loopback');
  }
  public set noLoopback(value: boolean | cdktf.IResolvable) {
    this._noLoopback = value;
  }
  public resetNoLoopback() {
    this._noLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLoopbackInput() {
    return this._noLoopback;
  }

  // redundant_parent - computed: false, optional: true, required: false
  private _redundantParent?: string; 
  public get redundantParent() {
    return this.getStringAttribute('redundant_parent');
  }
  public set redundantParent(value: string) {
    this._redundantParent = value;
  }
  public resetRedundantParent() {
    this._redundantParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantParentInput() {
    return this._redundantParent;
  }
}
export interface InterfacePhysicalGigetherOpts {
  /**
  * Name of an aggregated Ethernet interface to join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#ae_8023ad InterfacePhysical#ae_8023ad}
  */
  readonly ae8023Ad?: string;
  /**
  * Enable auto-negotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#auto_negotiation InterfacePhysical#auto_negotiation}
  */
  readonly autoNegotiation?: boolean | cdktf.IResolvable;
  /**
  * Enable flow control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#flow_control InterfacePhysical#flow_control}
  */
  readonly flowControl?: boolean | cdktf.IResolvable;
  /**
  * Enable loopback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#loopback InterfacePhysical#loopback}
  */
  readonly loopback?: boolean | cdktf.IResolvable;
  /**
  * Don't enable auto-negotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#no_auto_negotiation InterfacePhysical#no_auto_negotiation}
  */
  readonly noAutoNegotiation?: boolean | cdktf.IResolvable;
  /**
  * Don't enable flow control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#no_flow_control InterfacePhysical#no_flow_control}
  */
  readonly noFlowControl?: boolean | cdktf.IResolvable;
  /**
  * Don't enable loopback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#no_loopback InterfacePhysical#no_loopback}
  */
  readonly noLoopback?: boolean | cdktf.IResolvable;
  /**
  * Name of a redundant ethernet interface to join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#redundant_parent InterfacePhysical#redundant_parent}
  */
  readonly redundantParent?: string;
}

export function interfacePhysicalGigetherOptsToTerraform(struct?: InterfacePhysicalGigetherOpts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ae_8023ad: cdktf.stringToTerraform(struct!.ae8023Ad),
    auto_negotiation: cdktf.booleanToTerraform(struct!.autoNegotiation),
    flow_control: cdktf.booleanToTerraform(struct!.flowControl),
    loopback: cdktf.booleanToTerraform(struct!.loopback),
    no_auto_negotiation: cdktf.booleanToTerraform(struct!.noAutoNegotiation),
    no_flow_control: cdktf.booleanToTerraform(struct!.noFlowControl),
    no_loopback: cdktf.booleanToTerraform(struct!.noLoopback),
    redundant_parent: cdktf.stringToTerraform(struct!.redundantParent),
  }
}


export function interfacePhysicalGigetherOptsToHclTerraform(struct?: InterfacePhysicalGigetherOpts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ae_8023ad: {
      value: cdktf.stringToHclTerraform(struct!.ae8023Ad),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_negotiation: {
      value: cdktf.booleanToHclTerraform(struct!.autoNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flow_control: {
      value: cdktf.booleanToHclTerraform(struct!.flowControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    loopback: {
      value: cdktf.booleanToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_auto_negotiation: {
      value: cdktf.booleanToHclTerraform(struct!.noAutoNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_flow_control: {
      value: cdktf.booleanToHclTerraform(struct!.noFlowControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_loopback: {
      value: cdktf.booleanToHclTerraform(struct!.noLoopback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redundant_parent: {
      value: cdktf.stringToHclTerraform(struct!.redundantParent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalGigetherOptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfacePhysicalGigetherOpts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ae8023Ad !== undefined) {
      hasAnyValues = true;
      internalValueResult.ae8023Ad = this._ae8023Ad;
    }
    if (this._autoNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoNegotiation = this._autoNegotiation;
    }
    if (this._flowControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowControl = this._flowControl;
    }
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    if (this._noAutoNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAutoNegotiation = this._noAutoNegotiation;
    }
    if (this._noFlowControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFlowControl = this._noFlowControl;
    }
    if (this._noLoopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.noLoopback = this._noLoopback;
    }
    if (this._redundantParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundantParent = this._redundantParent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalGigetherOpts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ae8023Ad = undefined;
      this._autoNegotiation = undefined;
      this._flowControl = undefined;
      this._loopback = undefined;
      this._noAutoNegotiation = undefined;
      this._noFlowControl = undefined;
      this._noLoopback = undefined;
      this._redundantParent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ae8023Ad = value.ae8023Ad;
      this._autoNegotiation = value.autoNegotiation;
      this._flowControl = value.flowControl;
      this._loopback = value.loopback;
      this._noAutoNegotiation = value.noAutoNegotiation;
      this._noFlowControl = value.noFlowControl;
      this._noLoopback = value.noLoopback;
      this._redundantParent = value.redundantParent;
    }
  }

  // ae_8023ad - computed: false, optional: true, required: false
  private _ae8023Ad?: string; 
  public get ae8023Ad() {
    return this.getStringAttribute('ae_8023ad');
  }
  public set ae8023Ad(value: string) {
    this._ae8023Ad = value;
  }
  public resetAe8023Ad() {
    this._ae8023Ad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ae8023AdInput() {
    return this._ae8023Ad;
  }

  // auto_negotiation - computed: false, optional: true, required: false
  private _autoNegotiation?: boolean | cdktf.IResolvable; 
  public get autoNegotiation() {
    return this.getBooleanAttribute('auto_negotiation');
  }
  public set autoNegotiation(value: boolean | cdktf.IResolvable) {
    this._autoNegotiation = value;
  }
  public resetAutoNegotiation() {
    this._autoNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNegotiationInput() {
    return this._autoNegotiation;
  }

  // flow_control - computed: false, optional: true, required: false
  private _flowControl?: boolean | cdktf.IResolvable; 
  public get flowControl() {
    return this.getBooleanAttribute('flow_control');
  }
  public set flowControl(value: boolean | cdktf.IResolvable) {
    this._flowControl = value;
  }
  public resetFlowControl() {
    this._flowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowControlInput() {
    return this._flowControl;
  }

  // loopback - computed: false, optional: true, required: false
  private _loopback?: boolean | cdktf.IResolvable; 
  public get loopback() {
    return this.getBooleanAttribute('loopback');
  }
  public set loopback(value: boolean | cdktf.IResolvable) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }

  // no_auto_negotiation - computed: false, optional: true, required: false
  private _noAutoNegotiation?: boolean | cdktf.IResolvable; 
  public get noAutoNegotiation() {
    return this.getBooleanAttribute('no_auto_negotiation');
  }
  public set noAutoNegotiation(value: boolean | cdktf.IResolvable) {
    this._noAutoNegotiation = value;
  }
  public resetNoAutoNegotiation() {
    this._noAutoNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAutoNegotiationInput() {
    return this._noAutoNegotiation;
  }

  // no_flow_control - computed: false, optional: true, required: false
  private _noFlowControl?: boolean | cdktf.IResolvable; 
  public get noFlowControl() {
    return this.getBooleanAttribute('no_flow_control');
  }
  public set noFlowControl(value: boolean | cdktf.IResolvable) {
    this._noFlowControl = value;
  }
  public resetNoFlowControl() {
    this._noFlowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFlowControlInput() {
    return this._noFlowControl;
  }

  // no_loopback - computed: false, optional: true, required: false
  private _noLoopback?: boolean | cdktf.IResolvable; 
  public get noLoopback() {
    return this.getBooleanAttribute('no_loopback');
  }
  public set noLoopback(value: boolean | cdktf.IResolvable) {
    this._noLoopback = value;
  }
  public resetNoLoopback() {
    this._noLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLoopbackInput() {
    return this._noLoopback;
  }

  // redundant_parent - computed: false, optional: true, required: false
  private _redundantParent?: string; 
  public get redundantParent() {
    return this.getStringAttribute('redundant_parent');
  }
  public set redundantParent(value: string) {
    this._redundantParent = value;
  }
  public resetRedundantParent() {
    this._redundantParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantParentInput() {
    return this._redundantParent;
  }
}
export interface InterfacePhysicalParentEtherOptsBfdLivenessDetection {
  /**
  * Authentication algorithm name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#authentication_algorithm InterfacePhysical#authentication_algorithm}
  */
  readonly authenticationAlgorithm?: string;
  /**
  * Authentication Key chain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#authentication_key_chain InterfacePhysical#authentication_key_chain}
  */
  readonly authenticationKeyChain?: string;
  /**
  * Verify authentication only if authentication is negotiated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#authentication_loose_check InterfacePhysical#authentication_loose_check}
  */
  readonly authenticationLooseCheck?: boolean | cdktf.IResolvable;
  /**
  * High detection-time triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#detection_time_threshold InterfacePhysical#detection_time_threshold}
  */
  readonly detectionTimeThreshold?: number;
  /**
  * Time to hold the session-UP notification to the client (0..255000 milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#holddown_interval InterfacePhysical#holddown_interval}
  */
  readonly holddownInterval?: number;
  /**
  * BFD local address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#local_address InterfacePhysical#local_address}
  */
  readonly localAddress?: string;
  /**
  * Minimum transmit and receive interval (1..255000 milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#minimum_interval InterfacePhysical#minimum_interval}
  */
  readonly minimumInterval?: number;
  /**
  * Minimum receive interval (1..255000 milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#minimum_receive_interval InterfacePhysical#minimum_receive_interval}
  */
  readonly minimumReceiveInterval?: number;
  /**
  * Detection time multiplier (1..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#multiplier InterfacePhysical#multiplier}
  */
  readonly multiplier?: number;
  /**
  * BFD neighbor address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#neighbor InterfacePhysical#neighbor}
  */
  readonly neighbor?: string;
  /**
  * Disable adaptation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#no_adaptation InterfacePhysical#no_adaptation}
  */
  readonly noAdaptation?: boolean | cdktf.IResolvable;
  /**
  * Minimum transmit interval (1..255000 milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#transmit_interval_minimum_interval InterfacePhysical#transmit_interval_minimum_interval}
  */
  readonly transmitIntervalMinimumInterval?: number;
  /**
  * High transmit interval triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#transmit_interval_threshold InterfacePhysical#transmit_interval_threshold}
  */
  readonly transmitIntervalThreshold?: number;
  /**
  * BFD protocol version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#version InterfacePhysical#version}
  */
  readonly version?: string;
}

export function interfacePhysicalParentEtherOptsBfdLivenessDetectionToTerraform(struct?: InterfacePhysicalParentEtherOptsBfdLivenessDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_algorithm: cdktf.stringToTerraform(struct!.authenticationAlgorithm),
    authentication_key_chain: cdktf.stringToTerraform(struct!.authenticationKeyChain),
    authentication_loose_check: cdktf.booleanToTerraform(struct!.authenticationLooseCheck),
    detection_time_threshold: cdktf.numberToTerraform(struct!.detectionTimeThreshold),
    holddown_interval: cdktf.numberToTerraform(struct!.holddownInterval),
    local_address: cdktf.stringToTerraform(struct!.localAddress),
    minimum_interval: cdktf.numberToTerraform(struct!.minimumInterval),
    minimum_receive_interval: cdktf.numberToTerraform(struct!.minimumReceiveInterval),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    neighbor: cdktf.stringToTerraform(struct!.neighbor),
    no_adaptation: cdktf.booleanToTerraform(struct!.noAdaptation),
    transmit_interval_minimum_interval: cdktf.numberToTerraform(struct!.transmitIntervalMinimumInterval),
    transmit_interval_threshold: cdktf.numberToTerraform(struct!.transmitIntervalThreshold),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function interfacePhysicalParentEtherOptsBfdLivenessDetectionToHclTerraform(struct?: InterfacePhysicalParentEtherOptsBfdLivenessDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.authenticationAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key_chain: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKeyChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_loose_check: {
      value: cdktf.booleanToHclTerraform(struct!.authenticationLooseCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detection_time_threshold: {
      value: cdktf.numberToHclTerraform(struct!.detectionTimeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    holddown_interval: {
      value: cdktf.numberToHclTerraform(struct!.holddownInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_address: {
      value: cdktf.stringToHclTerraform(struct!.localAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.minimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_receive_interval: {
      value: cdktf.numberToHclTerraform(struct!.minimumReceiveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor: {
      value: cdktf.stringToHclTerraform(struct!.neighbor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_adaptation: {
      value: cdktf.booleanToHclTerraform(struct!.noAdaptation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transmit_interval_minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.transmitIntervalMinimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_interval_threshold: {
      value: cdktf.numberToHclTerraform(struct!.transmitIntervalThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalParentEtherOptsBfdLivenessDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfacePhysicalParentEtherOptsBfdLivenessDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationAlgorithm = this._authenticationAlgorithm;
    }
    if (this._authenticationKeyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKeyChain = this._authenticationKeyChain;
    }
    if (this._authenticationLooseCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationLooseCheck = this._authenticationLooseCheck;
    }
    if (this._detectionTimeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionTimeThreshold = this._detectionTimeThreshold;
    }
    if (this._holddownInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.holddownInterval = this._holddownInterval;
    }
    if (this._localAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAddress = this._localAddress;
    }
    if (this._minimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumInterval = this._minimumInterval;
    }
    if (this._minimumReceiveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumReceiveInterval = this._minimumReceiveInterval;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor;
    }
    if (this._noAdaptation !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAdaptation = this._noAdaptation;
    }
    if (this._transmitIntervalMinimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitIntervalMinimumInterval = this._transmitIntervalMinimumInterval;
    }
    if (this._transmitIntervalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitIntervalThreshold = this._transmitIntervalThreshold;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalParentEtherOptsBfdLivenessDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationAlgorithm = undefined;
      this._authenticationKeyChain = undefined;
      this._authenticationLooseCheck = undefined;
      this._detectionTimeThreshold = undefined;
      this._holddownInterval = undefined;
      this._localAddress = undefined;
      this._minimumInterval = undefined;
      this._minimumReceiveInterval = undefined;
      this._multiplier = undefined;
      this._neighbor = undefined;
      this._noAdaptation = undefined;
      this._transmitIntervalMinimumInterval = undefined;
      this._transmitIntervalThreshold = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationAlgorithm = value.authenticationAlgorithm;
      this._authenticationKeyChain = value.authenticationKeyChain;
      this._authenticationLooseCheck = value.authenticationLooseCheck;
      this._detectionTimeThreshold = value.detectionTimeThreshold;
      this._holddownInterval = value.holddownInterval;
      this._localAddress = value.localAddress;
      this._minimumInterval = value.minimumInterval;
      this._minimumReceiveInterval = value.minimumReceiveInterval;
      this._multiplier = value.multiplier;
      this._neighbor = value.neighbor;
      this._noAdaptation = value.noAdaptation;
      this._transmitIntervalMinimumInterval = value.transmitIntervalMinimumInterval;
      this._transmitIntervalThreshold = value.transmitIntervalThreshold;
      this._version = value.version;
    }
  }

  // authentication_algorithm - computed: false, optional: true, required: false
  private _authenticationAlgorithm?: string; 
  public get authenticationAlgorithm() {
    return this.getStringAttribute('authentication_algorithm');
  }
  public set authenticationAlgorithm(value: string) {
    this._authenticationAlgorithm = value;
  }
  public resetAuthenticationAlgorithm() {
    this._authenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAlgorithmInput() {
    return this._authenticationAlgorithm;
  }

  // authentication_key_chain - computed: false, optional: true, required: false
  private _authenticationKeyChain?: string; 
  public get authenticationKeyChain() {
    return this.getStringAttribute('authentication_key_chain');
  }
  public set authenticationKeyChain(value: string) {
    this._authenticationKeyChain = value;
  }
  public resetAuthenticationKeyChain() {
    this._authenticationKeyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyChainInput() {
    return this._authenticationKeyChain;
  }

  // authentication_loose_check - computed: false, optional: true, required: false
  private _authenticationLooseCheck?: boolean | cdktf.IResolvable; 
  public get authenticationLooseCheck() {
    return this.getBooleanAttribute('authentication_loose_check');
  }
  public set authenticationLooseCheck(value: boolean | cdktf.IResolvable) {
    this._authenticationLooseCheck = value;
  }
  public resetAuthenticationLooseCheck() {
    this._authenticationLooseCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationLooseCheckInput() {
    return this._authenticationLooseCheck;
  }

  // detection_time_threshold - computed: false, optional: true, required: false
  private _detectionTimeThreshold?: number; 
  public get detectionTimeThreshold() {
    return this.getNumberAttribute('detection_time_threshold');
  }
  public set detectionTimeThreshold(value: number) {
    this._detectionTimeThreshold = value;
  }
  public resetDetectionTimeThreshold() {
    this._detectionTimeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionTimeThresholdInput() {
    return this._detectionTimeThreshold;
  }

  // holddown_interval - computed: false, optional: true, required: false
  private _holddownInterval?: number; 
  public get holddownInterval() {
    return this.getNumberAttribute('holddown_interval');
  }
  public set holddownInterval(value: number) {
    this._holddownInterval = value;
  }
  public resetHolddownInterval() {
    this._holddownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holddownIntervalInput() {
    return this._holddownInterval;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
  }

  // minimum_interval - computed: false, optional: true, required: false
  private _minimumInterval?: number; 
  public get minimumInterval() {
    return this.getNumberAttribute('minimum_interval');
  }
  public set minimumInterval(value: number) {
    this._minimumInterval = value;
  }
  public resetMinimumInterval() {
    this._minimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumIntervalInput() {
    return this._minimumInterval;
  }

  // minimum_receive_interval - computed: false, optional: true, required: false
  private _minimumReceiveInterval?: number; 
  public get minimumReceiveInterval() {
    return this.getNumberAttribute('minimum_receive_interval');
  }
  public set minimumReceiveInterval(value: number) {
    this._minimumReceiveInterval = value;
  }
  public resetMinimumReceiveInterval() {
    this._minimumReceiveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumReceiveIntervalInput() {
    return this._minimumReceiveInterval;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor?: string; 
  public get neighbor() {
    return this.getStringAttribute('neighbor');
  }
  public set neighbor(value: string) {
    this._neighbor = value;
  }
  public resetNeighbor() {
    this._neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // no_adaptation - computed: false, optional: true, required: false
  private _noAdaptation?: boolean | cdktf.IResolvable; 
  public get noAdaptation() {
    return this.getBooleanAttribute('no_adaptation');
  }
  public set noAdaptation(value: boolean | cdktf.IResolvable) {
    this._noAdaptation = value;
  }
  public resetNoAdaptation() {
    this._noAdaptation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAdaptationInput() {
    return this._noAdaptation;
  }

  // transmit_interval_minimum_interval - computed: false, optional: true, required: false
  private _transmitIntervalMinimumInterval?: number; 
  public get transmitIntervalMinimumInterval() {
    return this.getNumberAttribute('transmit_interval_minimum_interval');
  }
  public set transmitIntervalMinimumInterval(value: number) {
    this._transmitIntervalMinimumInterval = value;
  }
  public resetTransmitIntervalMinimumInterval() {
    this._transmitIntervalMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitIntervalMinimumIntervalInput() {
    return this._transmitIntervalMinimumInterval;
  }

  // transmit_interval_threshold - computed: false, optional: true, required: false
  private _transmitIntervalThreshold?: number; 
  public get transmitIntervalThreshold() {
    return this.getNumberAttribute('transmit_interval_threshold');
  }
  public set transmitIntervalThreshold(value: number) {
    this._transmitIntervalThreshold = value;
  }
  public resetTransmitIntervalThreshold() {
    this._transmitIntervalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitIntervalThresholdInput() {
    return this._transmitIntervalThreshold;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface InterfacePhysicalParentEtherOptsLacp {
  /**
  * Node's administrative key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#admin_key InterfacePhysical#admin_key}
  */
  readonly adminKey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#mode InterfacePhysical#mode}
  */
  readonly mode?: string;
  /**
  * Timer interval for periodic transmission of LACP packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#periodic InterfacePhysical#periodic}
  */
  readonly periodic?: string;
  /**
  * On minimum-link failure notify out of sync to peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#sync_reset InterfacePhysical#sync_reset}
  */
  readonly syncReset?: string;
  /**
  * Node's System ID, encoded as a MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#system_id InterfacePhysical#system_id}
  */
  readonly systemId?: string;
  /**
  * Priority of the system (0 ... 65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#system_priority InterfacePhysical#system_priority}
  */
  readonly systemPriority?: number;
}

export function interfacePhysicalParentEtherOptsLacpToTerraform(struct?: InterfacePhysicalParentEtherOptsLacp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_key: cdktf.numberToTerraform(struct!.adminKey),
    mode: cdktf.stringToTerraform(struct!.mode),
    periodic: cdktf.stringToTerraform(struct!.periodic),
    sync_reset: cdktf.stringToTerraform(struct!.syncReset),
    system_id: cdktf.stringToTerraform(struct!.systemId),
    system_priority: cdktf.numberToTerraform(struct!.systemPriority),
  }
}


export function interfacePhysicalParentEtherOptsLacpToHclTerraform(struct?: InterfacePhysicalParentEtherOptsLacp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_key: {
      value: cdktf.numberToHclTerraform(struct!.adminKey),
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
    periodic: {
      value: cdktf.stringToHclTerraform(struct!.periodic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_reset: {
      value: cdktf.stringToHclTerraform(struct!.syncReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_id: {
      value: cdktf.stringToHclTerraform(struct!.systemId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalParentEtherOptsLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfacePhysicalParentEtherOptsLacp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminKey = this._adminKey;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._periodic !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodic = this._periodic;
    }
    if (this._syncReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncReset = this._syncReset;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    if (this._systemPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemPriority = this._systemPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalParentEtherOptsLacp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminKey = undefined;
      this._mode = undefined;
      this._periodic = undefined;
      this._syncReset = undefined;
      this._systemId = undefined;
      this._systemPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminKey = value.adminKey;
      this._mode = value.mode;
      this._periodic = value.periodic;
      this._syncReset = value.syncReset;
      this._systemId = value.systemId;
      this._systemPriority = value.systemPriority;
    }
  }

  // admin_key - computed: false, optional: true, required: false
  private _adminKey?: number; 
  public get adminKey() {
    return this.getNumberAttribute('admin_key');
  }
  public set adminKey(value: number) {
    this._adminKey = value;
  }
  public resetAdminKey() {
    this._adminKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminKeyInput() {
    return this._adminKey;
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

  // periodic - computed: false, optional: true, required: false
  private _periodic?: string; 
  public get periodic() {
    return this.getStringAttribute('periodic');
  }
  public set periodic(value: string) {
    this._periodic = value;
  }
  public resetPeriodic() {
    this._periodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicInput() {
    return this._periodic;
  }

  // sync_reset - computed: false, optional: true, required: false
  private _syncReset?: string; 
  public get syncReset() {
    return this.getStringAttribute('sync_reset');
  }
  public set syncReset(value: string) {
    this._syncReset = value;
  }
  public resetSyncReset() {
    this._syncReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncResetInput() {
    return this._syncReset;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // system_priority - computed: false, optional: true, required: false
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
}
export interface InterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDown {
  /**
  * Bring down ICL logical interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#force_icl_down InterfacePhysical#force_icl_down}
  */
  readonly forceIclDown?: boolean | cdktf.IResolvable;
  /**
  * Keep this node up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#prefer_status_control_active InterfacePhysical#prefer_status_control_active}
  */
  readonly preferStatusControlActive?: boolean | cdktf.IResolvable;
}

export function interfacePhysicalParentEtherOptsMcAeEventsIccpPeerDownToTerraform(struct?: InterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_icl_down: cdktf.booleanToTerraform(struct!.forceIclDown),
    prefer_status_control_active: cdktf.booleanToTerraform(struct!.preferStatusControlActive),
  }
}


export function interfacePhysicalParentEtherOptsMcAeEventsIccpPeerDownToHclTerraform(struct?: InterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_icl_down: {
      value: cdktf.booleanToHclTerraform(struct!.forceIclDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefer_status_control_active: {
      value: cdktf.booleanToHclTerraform(struct!.preferStatusControlActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceIclDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceIclDown = this._forceIclDown;
    }
    if (this._preferStatusControlActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferStatusControlActive = this._preferStatusControlActive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceIclDown = undefined;
      this._preferStatusControlActive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceIclDown = value.forceIclDown;
      this._preferStatusControlActive = value.preferStatusControlActive;
    }
  }

  // force_icl_down - computed: false, optional: true, required: false
  private _forceIclDown?: boolean | cdktf.IResolvable; 
  public get forceIclDown() {
    return this.getBooleanAttribute('force_icl_down');
  }
  public set forceIclDown(value: boolean | cdktf.IResolvable) {
    this._forceIclDown = value;
  }
  public resetForceIclDown() {
    this._forceIclDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceIclDownInput() {
    return this._forceIclDown;
  }

  // prefer_status_control_active - computed: false, optional: true, required: false
  private _preferStatusControlActive?: boolean | cdktf.IResolvable; 
  public get preferStatusControlActive() {
    return this.getBooleanAttribute('prefer_status_control_active');
  }
  public set preferStatusControlActive(value: boolean | cdktf.IResolvable) {
    this._preferStatusControlActive = value;
  }
  public resetPreferStatusControlActive() {
    this._preferStatusControlActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferStatusControlActiveInput() {
    return this._preferStatusControlActive;
  }
}
export interface InterfacePhysicalParentEtherOptsMcAe {
  /**
  * Chassis id of MC-AE network device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#chassis_id InterfacePhysical#chassis_id}
  */
  readonly chassisId?: number;
  /**
  * Optimized convergence time for mcae.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#enhanced_convergence InterfacePhysical#enhanced_convergence}
  */
  readonly enhancedConvergence?: boolean | cdktf.IResolvable;
  /**
  * Init delay timer for mcae sm for min traffic loss (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#init_delay_time InterfacePhysical#init_delay_time}
  */
  readonly initDelayTime?: number;
  /**
  * MC-AE group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#mc_ae_id InterfacePhysical#mc_ae_id}
  */
  readonly mcAeId?: number;
  /**
  * Mode of the MC-AE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#mode InterfacePhysical#mode}
  */
  readonly mode?: string;
  /**
  * Redundancy group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#redundancy_group InterfacePhysical#redundancy_group}
  */
  readonly redundancyGroup?: number;
  /**
  * Wait interval before performing switchover (minute).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#revert_time InterfacePhysical#revert_time}
  */
  readonly revertTime?: number;
  /**
  * Status of the MC-AE chassis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#status_control InterfacePhysical#status_control}
  */
  readonly statusControl?: string;
  /**
  * Switchover mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#switchover_mode InterfacePhysical#switchover_mode}
  */
  readonly switchoverMode?: string;
  /**
  * events_iccp_peer_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#events_iccp_peer_down InterfacePhysical#events_iccp_peer_down}
  */
  readonly eventsIccpPeerDown?: InterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDown;
}

export function interfacePhysicalParentEtherOptsMcAeToTerraform(struct?: InterfacePhysicalParentEtherOptsMcAe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chassis_id: cdktf.numberToTerraform(struct!.chassisId),
    enhanced_convergence: cdktf.booleanToTerraform(struct!.enhancedConvergence),
    init_delay_time: cdktf.numberToTerraform(struct!.initDelayTime),
    mc_ae_id: cdktf.numberToTerraform(struct!.mcAeId),
    mode: cdktf.stringToTerraform(struct!.mode),
    redundancy_group: cdktf.numberToTerraform(struct!.redundancyGroup),
    revert_time: cdktf.numberToTerraform(struct!.revertTime),
    status_control: cdktf.stringToTerraform(struct!.statusControl),
    switchover_mode: cdktf.stringToTerraform(struct!.switchoverMode),
    events_iccp_peer_down: interfacePhysicalParentEtherOptsMcAeEventsIccpPeerDownToTerraform(struct!.eventsIccpPeerDown),
  }
}


export function interfacePhysicalParentEtherOptsMcAeToHclTerraform(struct?: InterfacePhysicalParentEtherOptsMcAe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chassis_id: {
      value: cdktf.numberToHclTerraform(struct!.chassisId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enhanced_convergence: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedConvergence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    init_delay_time: {
      value: cdktf.numberToHclTerraform(struct!.initDelayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mc_ae_id: {
      value: cdktf.numberToHclTerraform(struct!.mcAeId),
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
    redundancy_group: {
      value: cdktf.numberToHclTerraform(struct!.redundancyGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revert_time: {
      value: cdktf.numberToHclTerraform(struct!.revertTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_control: {
      value: cdktf.stringToHclTerraform(struct!.statusControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switchover_mode: {
      value: cdktf.stringToHclTerraform(struct!.switchoverMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    events_iccp_peer_down: {
      value: interfacePhysicalParentEtherOptsMcAeEventsIccpPeerDownToHclTerraform(struct!.eventsIccpPeerDown),
      isBlock: true,
      type: "struct",
      storageClassType: "InterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDown",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalParentEtherOptsMcAeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfacePhysicalParentEtherOptsMcAe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chassisId !== undefined) {
      hasAnyValues = true;
      internalValueResult.chassisId = this._chassisId;
    }
    if (this._enhancedConvergence !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedConvergence = this._enhancedConvergence;
    }
    if (this._initDelayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.initDelayTime = this._initDelayTime;
    }
    if (this._mcAeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcAeId = this._mcAeId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._redundancyGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundancyGroup = this._redundancyGroup;
    }
    if (this._revertTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.revertTime = this._revertTime;
    }
    if (this._statusControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusControl = this._statusControl;
    }
    if (this._switchoverMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchoverMode = this._switchoverMode;
    }
    if (this._eventsIccpPeerDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventsIccpPeerDown = this._eventsIccpPeerDown?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalParentEtherOptsMcAe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chassisId = undefined;
      this._enhancedConvergence = undefined;
      this._initDelayTime = undefined;
      this._mcAeId = undefined;
      this._mode = undefined;
      this._redundancyGroup = undefined;
      this._revertTime = undefined;
      this._statusControl = undefined;
      this._switchoverMode = undefined;
      this._eventsIccpPeerDown.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chassisId = value.chassisId;
      this._enhancedConvergence = value.enhancedConvergence;
      this._initDelayTime = value.initDelayTime;
      this._mcAeId = value.mcAeId;
      this._mode = value.mode;
      this._redundancyGroup = value.redundancyGroup;
      this._revertTime = value.revertTime;
      this._statusControl = value.statusControl;
      this._switchoverMode = value.switchoverMode;
      this._eventsIccpPeerDown.internalValue = value.eventsIccpPeerDown;
    }
  }

  // chassis_id - computed: false, optional: true, required: false
  private _chassisId?: number; 
  public get chassisId() {
    return this.getNumberAttribute('chassis_id');
  }
  public set chassisId(value: number) {
    this._chassisId = value;
  }
  public resetChassisId() {
    this._chassisId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chassisIdInput() {
    return this._chassisId;
  }

  // enhanced_convergence - computed: false, optional: true, required: false
  private _enhancedConvergence?: boolean | cdktf.IResolvable; 
  public get enhancedConvergence() {
    return this.getBooleanAttribute('enhanced_convergence');
  }
  public set enhancedConvergence(value: boolean | cdktf.IResolvable) {
    this._enhancedConvergence = value;
  }
  public resetEnhancedConvergence() {
    this._enhancedConvergence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedConvergenceInput() {
    return this._enhancedConvergence;
  }

  // init_delay_time - computed: false, optional: true, required: false
  private _initDelayTime?: number; 
  public get initDelayTime() {
    return this.getNumberAttribute('init_delay_time');
  }
  public set initDelayTime(value: number) {
    this._initDelayTime = value;
  }
  public resetInitDelayTime() {
    this._initDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initDelayTimeInput() {
    return this._initDelayTime;
  }

  // mc_ae_id - computed: false, optional: true, required: false
  private _mcAeId?: number; 
  public get mcAeId() {
    return this.getNumberAttribute('mc_ae_id');
  }
  public set mcAeId(value: number) {
    this._mcAeId = value;
  }
  public resetMcAeId() {
    this._mcAeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcAeIdInput() {
    return this._mcAeId;
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

  // redundancy_group - computed: false, optional: true, required: false
  private _redundancyGroup?: number; 
  public get redundancyGroup() {
    return this.getNumberAttribute('redundancy_group');
  }
  public set redundancyGroup(value: number) {
    this._redundancyGroup = value;
  }
  public resetRedundancyGroup() {
    this._redundancyGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyGroupInput() {
    return this._redundancyGroup;
  }

  // revert_time - computed: false, optional: true, required: false
  private _revertTime?: number; 
  public get revertTime() {
    return this.getNumberAttribute('revert_time');
  }
  public set revertTime(value: number) {
    this._revertTime = value;
  }
  public resetRevertTime() {
    this._revertTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revertTimeInput() {
    return this._revertTime;
  }

  // status_control - computed: false, optional: true, required: false
  private _statusControl?: string; 
  public get statusControl() {
    return this.getStringAttribute('status_control');
  }
  public set statusControl(value: string) {
    this._statusControl = value;
  }
  public resetStatusControl() {
    this._statusControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusControlInput() {
    return this._statusControl;
  }

  // switchover_mode - computed: false, optional: true, required: false
  private _switchoverMode?: string; 
  public get switchoverMode() {
    return this.getStringAttribute('switchover_mode');
  }
  public set switchoverMode(value: string) {
    this._switchoverMode = value;
  }
  public resetSwitchoverMode() {
    this._switchoverMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchoverModeInput() {
    return this._switchoverMode;
  }

  // events_iccp_peer_down - computed: false, optional: true, required: false
  private _eventsIccpPeerDown = new InterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDownOutputReference(this, "events_iccp_peer_down");
  public get eventsIccpPeerDown() {
    return this._eventsIccpPeerDown;
  }
  public putEventsIccpPeerDown(value: InterfacePhysicalParentEtherOptsMcAeEventsIccpPeerDown) {
    this._eventsIccpPeerDown.internalValue = value;
  }
  public resetEventsIccpPeerDown() {
    this._eventsIccpPeerDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsIccpPeerDownInput() {
    return this._eventsIccpPeerDown.internalValue;
  }
}
export interface InterfacePhysicalParentEtherOpts {
  /**
  * Enable flow control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#flow_control InterfacePhysical#flow_control}
  */
  readonly flowControl?: boolean | cdktf.IResolvable;
  /**
  * Link speed of individual interface that joins the AE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#link_speed InterfacePhysical#link_speed}
  */
  readonly linkSpeed?: string;
  /**
  * Enable loopback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#loopback InterfacePhysical#loopback}
  */
  readonly loopback?: boolean | cdktf.IResolvable;
  /**
  * Minimum bandwidth configured for aggregated bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#minimum_bandwidth InterfacePhysical#minimum_bandwidth}
  */
  readonly minimumBandwidth?: string;
  /**
  * Minimum number of aggregated/active links (1..64).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#minimum_links InterfacePhysical#minimum_links}
  */
  readonly minimumLinks?: number;
  /**
  * Don't enable flow control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#no_flow_control InterfacePhysical#no_flow_control}
  */
  readonly noFlowControl?: boolean | cdktf.IResolvable;
  /**
  * Don't enable loopback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#no_loopback InterfacePhysical#no_loopback}
  */
  readonly noLoopback?: boolean | cdktf.IResolvable;
  /**
  * Redundancy group of this interface (1..128) for reth interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#redundancy_group InterfacePhysical#redundancy_group}
  */
  readonly redundancyGroup?: number;
  /**
  * Source address filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#source_address_filter InterfacePhysical#source_address_filter}
  */
  readonly sourceAddressFilter?: string[];
  /**
  * Enable source address filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#source_filtering InterfacePhysical#source_filtering}
  */
  readonly sourceFiltering?: boolean | cdktf.IResolvable;
  /**
  * bfd_liveness_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#bfd_liveness_detection InterfacePhysical#bfd_liveness_detection}
  */
  readonly bfdLivenessDetection?: InterfacePhysicalParentEtherOptsBfdLivenessDetection;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#lacp InterfacePhysical#lacp}
  */
  readonly lacp?: InterfacePhysicalParentEtherOptsLacp;
  /**
  * mc_ae block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#mc_ae InterfacePhysical#mc_ae}
  */
  readonly mcAe?: InterfacePhysicalParentEtherOptsMcAe;
}

export function interfacePhysicalParentEtherOptsToTerraform(struct?: InterfacePhysicalParentEtherOpts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_control: cdktf.booleanToTerraform(struct!.flowControl),
    link_speed: cdktf.stringToTerraform(struct!.linkSpeed),
    loopback: cdktf.booleanToTerraform(struct!.loopback),
    minimum_bandwidth: cdktf.stringToTerraform(struct!.minimumBandwidth),
    minimum_links: cdktf.numberToTerraform(struct!.minimumLinks),
    no_flow_control: cdktf.booleanToTerraform(struct!.noFlowControl),
    no_loopback: cdktf.booleanToTerraform(struct!.noLoopback),
    redundancy_group: cdktf.numberToTerraform(struct!.redundancyGroup),
    source_address_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddressFilter),
    source_filtering: cdktf.booleanToTerraform(struct!.sourceFiltering),
    bfd_liveness_detection: interfacePhysicalParentEtherOptsBfdLivenessDetectionToTerraform(struct!.bfdLivenessDetection),
    lacp: interfacePhysicalParentEtherOptsLacpToTerraform(struct!.lacp),
    mc_ae: interfacePhysicalParentEtherOptsMcAeToTerraform(struct!.mcAe),
  }
}


export function interfacePhysicalParentEtherOptsToHclTerraform(struct?: InterfacePhysicalParentEtherOpts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow_control: {
      value: cdktf.booleanToHclTerraform(struct!.flowControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link_speed: {
      value: cdktf.stringToHclTerraform(struct!.linkSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback: {
      value: cdktf.booleanToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minimum_bandwidth: {
      value: cdktf.stringToHclTerraform(struct!.minimumBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_links: {
      value: cdktf.numberToHclTerraform(struct!.minimumLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_flow_control: {
      value: cdktf.booleanToHclTerraform(struct!.noFlowControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_loopback: {
      value: cdktf.booleanToHclTerraform(struct!.noLoopback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redundancy_group: {
      value: cdktf.numberToHclTerraform(struct!.redundancyGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_address_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddressFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_filtering: {
      value: cdktf.booleanToHclTerraform(struct!.sourceFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bfd_liveness_detection: {
      value: interfacePhysicalParentEtherOptsBfdLivenessDetectionToHclTerraform(struct!.bfdLivenessDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "InterfacePhysicalParentEtherOptsBfdLivenessDetection",
    },
    lacp: {
      value: interfacePhysicalParentEtherOptsLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "struct",
      storageClassType: "InterfacePhysicalParentEtherOptsLacp",
    },
    mc_ae: {
      value: interfacePhysicalParentEtherOptsMcAeToHclTerraform(struct!.mcAe),
      isBlock: true,
      type: "struct",
      storageClassType: "InterfacePhysicalParentEtherOptsMcAe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalParentEtherOptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfacePhysicalParentEtherOpts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowControl = this._flowControl;
    }
    if (this._linkSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkSpeed = this._linkSpeed;
    }
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    if (this._minimumBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBandwidth = this._minimumBandwidth;
    }
    if (this._minimumLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLinks = this._minimumLinks;
    }
    if (this._noFlowControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFlowControl = this._noFlowControl;
    }
    if (this._noLoopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.noLoopback = this._noLoopback;
    }
    if (this._redundancyGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundancyGroup = this._redundancyGroup;
    }
    if (this._sourceAddressFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressFilter = this._sourceAddressFilter;
    }
    if (this._sourceFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFiltering = this._sourceFiltering;
    }
    if (this._bfdLivenessDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdLivenessDetection = this._bfdLivenessDetection?.internalValue;
    }
    if (this._lacp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp?.internalValue;
    }
    if (this._mcAe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcAe = this._mcAe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalParentEtherOpts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowControl = undefined;
      this._linkSpeed = undefined;
      this._loopback = undefined;
      this._minimumBandwidth = undefined;
      this._minimumLinks = undefined;
      this._noFlowControl = undefined;
      this._noLoopback = undefined;
      this._redundancyGroup = undefined;
      this._sourceAddressFilter = undefined;
      this._sourceFiltering = undefined;
      this._bfdLivenessDetection.internalValue = undefined;
      this._lacp.internalValue = undefined;
      this._mcAe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowControl = value.flowControl;
      this._linkSpeed = value.linkSpeed;
      this._loopback = value.loopback;
      this._minimumBandwidth = value.minimumBandwidth;
      this._minimumLinks = value.minimumLinks;
      this._noFlowControl = value.noFlowControl;
      this._noLoopback = value.noLoopback;
      this._redundancyGroup = value.redundancyGroup;
      this._sourceAddressFilter = value.sourceAddressFilter;
      this._sourceFiltering = value.sourceFiltering;
      this._bfdLivenessDetection.internalValue = value.bfdLivenessDetection;
      this._lacp.internalValue = value.lacp;
      this._mcAe.internalValue = value.mcAe;
    }
  }

  // flow_control - computed: false, optional: true, required: false
  private _flowControl?: boolean | cdktf.IResolvable; 
  public get flowControl() {
    return this.getBooleanAttribute('flow_control');
  }
  public set flowControl(value: boolean | cdktf.IResolvable) {
    this._flowControl = value;
  }
  public resetFlowControl() {
    this._flowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowControlInput() {
    return this._flowControl;
  }

  // link_speed - computed: false, optional: true, required: false
  private _linkSpeed?: string; 
  public get linkSpeed() {
    return this.getStringAttribute('link_speed');
  }
  public set linkSpeed(value: string) {
    this._linkSpeed = value;
  }
  public resetLinkSpeed() {
    this._linkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkSpeedInput() {
    return this._linkSpeed;
  }

  // loopback - computed: false, optional: true, required: false
  private _loopback?: boolean | cdktf.IResolvable; 
  public get loopback() {
    return this.getBooleanAttribute('loopback');
  }
  public set loopback(value: boolean | cdktf.IResolvable) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }

  // minimum_bandwidth - computed: false, optional: true, required: false
  private _minimumBandwidth?: string; 
  public get minimumBandwidth() {
    return this.getStringAttribute('minimum_bandwidth');
  }
  public set minimumBandwidth(value: string) {
    this._minimumBandwidth = value;
  }
  public resetMinimumBandwidth() {
    this._minimumBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBandwidthInput() {
    return this._minimumBandwidth;
  }

  // minimum_links - computed: false, optional: true, required: false
  private _minimumLinks?: number; 
  public get minimumLinks() {
    return this.getNumberAttribute('minimum_links');
  }
  public set minimumLinks(value: number) {
    this._minimumLinks = value;
  }
  public resetMinimumLinks() {
    this._minimumLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLinksInput() {
    return this._minimumLinks;
  }

  // no_flow_control - computed: false, optional: true, required: false
  private _noFlowControl?: boolean | cdktf.IResolvable; 
  public get noFlowControl() {
    return this.getBooleanAttribute('no_flow_control');
  }
  public set noFlowControl(value: boolean | cdktf.IResolvable) {
    this._noFlowControl = value;
  }
  public resetNoFlowControl() {
    this._noFlowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFlowControlInput() {
    return this._noFlowControl;
  }

  // no_loopback - computed: false, optional: true, required: false
  private _noLoopback?: boolean | cdktf.IResolvable; 
  public get noLoopback() {
    return this.getBooleanAttribute('no_loopback');
  }
  public set noLoopback(value: boolean | cdktf.IResolvable) {
    this._noLoopback = value;
  }
  public resetNoLoopback() {
    this._noLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLoopbackInput() {
    return this._noLoopback;
  }

  // redundancy_group - computed: false, optional: true, required: false
  private _redundancyGroup?: number; 
  public get redundancyGroup() {
    return this.getNumberAttribute('redundancy_group');
  }
  public set redundancyGroup(value: number) {
    this._redundancyGroup = value;
  }
  public resetRedundancyGroup() {
    this._redundancyGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyGroupInput() {
    return this._redundancyGroup;
  }

  // source_address_filter - computed: false, optional: true, required: false
  private _sourceAddressFilter?: string[]; 
  public get sourceAddressFilter() {
    return this.getListAttribute('source_address_filter');
  }
  public set sourceAddressFilter(value: string[]) {
    this._sourceAddressFilter = value;
  }
  public resetSourceAddressFilter() {
    this._sourceAddressFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressFilterInput() {
    return this._sourceAddressFilter;
  }

  // source_filtering - computed: false, optional: true, required: false
  private _sourceFiltering?: boolean | cdktf.IResolvable; 
  public get sourceFiltering() {
    return this.getBooleanAttribute('source_filtering');
  }
  public set sourceFiltering(value: boolean | cdktf.IResolvable) {
    this._sourceFiltering = value;
  }
  public resetSourceFiltering() {
    this._sourceFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFilteringInput() {
    return this._sourceFiltering;
  }

  // bfd_liveness_detection - computed: false, optional: true, required: false
  private _bfdLivenessDetection = new InterfacePhysicalParentEtherOptsBfdLivenessDetectionOutputReference(this, "bfd_liveness_detection");
  public get bfdLivenessDetection() {
    return this._bfdLivenessDetection;
  }
  public putBfdLivenessDetection(value: InterfacePhysicalParentEtherOptsBfdLivenessDetection) {
    this._bfdLivenessDetection.internalValue = value;
  }
  public resetBfdLivenessDetection() {
    this._bfdLivenessDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdLivenessDetectionInput() {
    return this._bfdLivenessDetection.internalValue;
  }

  // lacp - computed: false, optional: true, required: false
  private _lacp = new InterfacePhysicalParentEtherOptsLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: InterfacePhysicalParentEtherOptsLacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
  }

  // mc_ae - computed: false, optional: true, required: false
  private _mcAe = new InterfacePhysicalParentEtherOptsMcAeOutputReference(this, "mc_ae");
  public get mcAe() {
    return this._mcAe;
  }
  public putMcAe(value: InterfacePhysicalParentEtherOptsMcAe) {
    this._mcAe.internalValue = value;
  }
  public resetMcAe() {
    this._mcAe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcAeInput() {
    return this._mcAe.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical junos_interface_physical}
*/
export class InterfacePhysical extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_interface_physical";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfacePhysical resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfacePhysical to import
  * @param importFromId The id of the existing InterfacePhysical that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfacePhysical to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_interface_physical", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/interface_physical junos_interface_physical} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfacePhysicalConfig
  */
  public constructor(scope: Construct, id: string, config: InterfacePhysicalConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_interface_physical',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._disable = config.disable;
    this._encapsulation = config.encapsulation;
    this._flexibleVlanTagging = config.flexibleVlanTagging;
    this._gratuitousArpReply = config.gratuitousArpReply;
    this._holdTimeDown = config.holdTimeDown;
    this._holdTimeUp = config.holdTimeUp;
    this._linkMode = config.linkMode;
    this._mtu = config.mtu;
    this._name = config.name;
    this._noDisableOnDestroy = config.noDisableOnDestroy;
    this._noGratuitousArpReply = config.noGratuitousArpReply;
    this._noGratuitousArpRequest = config.noGratuitousArpRequest;
    this._speed = config.speed;
    this._stormControl = config.stormControl;
    this._trunk = config.trunk;
    this._trunkNonEls = config.trunkNonEls;
    this._vlanMembers = config.vlanMembers;
    this._vlanNative = config.vlanNative;
    this._vlanNativeNonEls = config.vlanNativeNonEls;
    this._vlanTagging = config.vlanTagging;
    this._esi.internalValue = config.esi;
    this._etherOpts.internalValue = config.etherOpts;
    this._gigetherOpts.internalValue = config.gigetherOpts;
    this._parentEtherOpts.internalValue = config.parentEtherOpts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // encapsulation - computed: false, optional: true, required: false
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  public resetEncapsulation() {
    this._encapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
  }

  // flexible_vlan_tagging - computed: false, optional: true, required: false
  private _flexibleVlanTagging?: boolean | cdktf.IResolvable; 
  public get flexibleVlanTagging() {
    return this.getBooleanAttribute('flexible_vlan_tagging');
  }
  public set flexibleVlanTagging(value: boolean | cdktf.IResolvable) {
    this._flexibleVlanTagging = value;
  }
  public resetFlexibleVlanTagging() {
    this._flexibleVlanTagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexibleVlanTaggingInput() {
    return this._flexibleVlanTagging;
  }

  // gratuitous_arp_reply - computed: false, optional: true, required: false
  private _gratuitousArpReply?: boolean | cdktf.IResolvable; 
  public get gratuitousArpReply() {
    return this.getBooleanAttribute('gratuitous_arp_reply');
  }
  public set gratuitousArpReply(value: boolean | cdktf.IResolvable) {
    this._gratuitousArpReply = value;
  }
  public resetGratuitousArpReply() {
    this._gratuitousArpReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gratuitousArpReplyInput() {
    return this._gratuitousArpReply;
  }

  // hold_time_down - computed: false, optional: true, required: false
  private _holdTimeDown?: number; 
  public get holdTimeDown() {
    return this.getNumberAttribute('hold_time_down');
  }
  public set holdTimeDown(value: number) {
    this._holdTimeDown = value;
  }
  public resetHoldTimeDown() {
    this._holdTimeDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeDownInput() {
    return this._holdTimeDown;
  }

  // hold_time_up - computed: false, optional: true, required: false
  private _holdTimeUp?: number; 
  public get holdTimeUp() {
    return this.getNumberAttribute('hold_time_up');
  }
  public set holdTimeUp(value: number) {
    this._holdTimeUp = value;
  }
  public resetHoldTimeUp() {
    this._holdTimeUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeUpInput() {
    return this._holdTimeUp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_mode - computed: false, optional: true, required: false
  private _linkMode?: string; 
  public get linkMode() {
    return this.getStringAttribute('link_mode');
  }
  public set linkMode(value: string) {
    this._linkMode = value;
  }
  public resetLinkMode() {
    this._linkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkModeInput() {
    return this._linkMode;
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

  // no_disable_on_destroy - computed: false, optional: true, required: false
  private _noDisableOnDestroy?: boolean | cdktf.IResolvable; 
  public get noDisableOnDestroy() {
    return this.getBooleanAttribute('no_disable_on_destroy');
  }
  public set noDisableOnDestroy(value: boolean | cdktf.IResolvable) {
    this._noDisableOnDestroy = value;
  }
  public resetNoDisableOnDestroy() {
    this._noDisableOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDisableOnDestroyInput() {
    return this._noDisableOnDestroy;
  }

  // no_gratuitous_arp_reply - computed: false, optional: true, required: false
  private _noGratuitousArpReply?: boolean | cdktf.IResolvable; 
  public get noGratuitousArpReply() {
    return this.getBooleanAttribute('no_gratuitous_arp_reply');
  }
  public set noGratuitousArpReply(value: boolean | cdktf.IResolvable) {
    this._noGratuitousArpReply = value;
  }
  public resetNoGratuitousArpReply() {
    this._noGratuitousArpReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGratuitousArpReplyInput() {
    return this._noGratuitousArpReply;
  }

  // no_gratuitous_arp_request - computed: false, optional: true, required: false
  private _noGratuitousArpRequest?: boolean | cdktf.IResolvable; 
  public get noGratuitousArpRequest() {
    return this.getBooleanAttribute('no_gratuitous_arp_request');
  }
  public set noGratuitousArpRequest(value: boolean | cdktf.IResolvable) {
    this._noGratuitousArpRequest = value;
  }
  public resetNoGratuitousArpRequest() {
    this._noGratuitousArpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGratuitousArpRequestInput() {
    return this._noGratuitousArpRequest;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // storm_control - computed: false, optional: true, required: false
  private _stormControl?: string; 
  public get stormControl() {
    return this.getStringAttribute('storm_control');
  }
  public set stormControl(value: string) {
    this._stormControl = value;
  }
  public resetStormControl() {
    this._stormControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlInput() {
    return this._stormControl;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: boolean | cdktf.IResolvable; 
  public get trunk() {
    return this.getBooleanAttribute('trunk');
  }
  public set trunk(value: boolean | cdktf.IResolvable) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // trunk_non_els - computed: false, optional: true, required: false
  private _trunkNonEls?: boolean | cdktf.IResolvable; 
  public get trunkNonEls() {
    return this.getBooleanAttribute('trunk_non_els');
  }
  public set trunkNonEls(value: boolean | cdktf.IResolvable) {
    this._trunkNonEls = value;
  }
  public resetTrunkNonEls() {
    this._trunkNonEls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkNonElsInput() {
    return this._trunkNonEls;
  }

  // vlan_members - computed: false, optional: true, required: false
  private _vlanMembers?: string[]; 
  public get vlanMembers() {
    return this.getListAttribute('vlan_members');
  }
  public set vlanMembers(value: string[]) {
    this._vlanMembers = value;
  }
  public resetVlanMembers() {
    this._vlanMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanMembersInput() {
    return this._vlanMembers;
  }

  // vlan_native - computed: false, optional: true, required: false
  private _vlanNative?: number; 
  public get vlanNative() {
    return this.getNumberAttribute('vlan_native');
  }
  public set vlanNative(value: number) {
    this._vlanNative = value;
  }
  public resetVlanNative() {
    this._vlanNative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNativeInput() {
    return this._vlanNative;
  }

  // vlan_native_non_els - computed: false, optional: true, required: false
  private _vlanNativeNonEls?: string; 
  public get vlanNativeNonEls() {
    return this.getStringAttribute('vlan_native_non_els');
  }
  public set vlanNativeNonEls(value: string) {
    this._vlanNativeNonEls = value;
  }
  public resetVlanNativeNonEls() {
    this._vlanNativeNonEls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNativeNonElsInput() {
    return this._vlanNativeNonEls;
  }

  // vlan_tagging - computed: false, optional: true, required: false
  private _vlanTagging?: boolean | cdktf.IResolvable; 
  public get vlanTagging() {
    return this.getBooleanAttribute('vlan_tagging');
  }
  public set vlanTagging(value: boolean | cdktf.IResolvable) {
    this._vlanTagging = value;
  }
  public resetVlanTagging() {
    this._vlanTagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTaggingInput() {
    return this._vlanTagging;
  }

  // esi - computed: false, optional: true, required: false
  private _esi = new InterfacePhysicalEsiOutputReference(this, "esi");
  public get esi() {
    return this._esi;
  }
  public putEsi(value: InterfacePhysicalEsi) {
    this._esi.internalValue = value;
  }
  public resetEsi() {
    this._esi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esiInput() {
    return this._esi.internalValue;
  }

  // ether_opts - computed: false, optional: true, required: false
  private _etherOpts = new InterfacePhysicalEtherOptsOutputReference(this, "ether_opts");
  public get etherOpts() {
    return this._etherOpts;
  }
  public putEtherOpts(value: InterfacePhysicalEtherOpts) {
    this._etherOpts.internalValue = value;
  }
  public resetEtherOpts() {
    this._etherOpts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etherOptsInput() {
    return this._etherOpts.internalValue;
  }

  // gigether_opts - computed: false, optional: true, required: false
  private _gigetherOpts = new InterfacePhysicalGigetherOptsOutputReference(this, "gigether_opts");
  public get gigetherOpts() {
    return this._gigetherOpts;
  }
  public putGigetherOpts(value: InterfacePhysicalGigetherOpts) {
    this._gigetherOpts.internalValue = value;
  }
  public resetGigetherOpts() {
    this._gigetherOpts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gigetherOptsInput() {
    return this._gigetherOpts.internalValue;
  }

  // parent_ether_opts - computed: false, optional: true, required: false
  private _parentEtherOpts = new InterfacePhysicalParentEtherOptsOutputReference(this, "parent_ether_opts");
  public get parentEtherOpts() {
    return this._parentEtherOpts;
  }
  public putParentEtherOpts(value: InterfacePhysicalParentEtherOpts) {
    this._parentEtherOpts.internalValue = value;
  }
  public resetParentEtherOpts() {
    this._parentEtherOpts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentEtherOptsInput() {
    return this._parentEtherOpts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      encapsulation: cdktf.stringToTerraform(this._encapsulation),
      flexible_vlan_tagging: cdktf.booleanToTerraform(this._flexibleVlanTagging),
      gratuitous_arp_reply: cdktf.booleanToTerraform(this._gratuitousArpReply),
      hold_time_down: cdktf.numberToTerraform(this._holdTimeDown),
      hold_time_up: cdktf.numberToTerraform(this._holdTimeUp),
      link_mode: cdktf.stringToTerraform(this._linkMode),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      no_disable_on_destroy: cdktf.booleanToTerraform(this._noDisableOnDestroy),
      no_gratuitous_arp_reply: cdktf.booleanToTerraform(this._noGratuitousArpReply),
      no_gratuitous_arp_request: cdktf.booleanToTerraform(this._noGratuitousArpRequest),
      speed: cdktf.stringToTerraform(this._speed),
      storm_control: cdktf.stringToTerraform(this._stormControl),
      trunk: cdktf.booleanToTerraform(this._trunk),
      trunk_non_els: cdktf.booleanToTerraform(this._trunkNonEls),
      vlan_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlanMembers),
      vlan_native: cdktf.numberToTerraform(this._vlanNative),
      vlan_native_non_els: cdktf.stringToTerraform(this._vlanNativeNonEls),
      vlan_tagging: cdktf.booleanToTerraform(this._vlanTagging),
      esi: interfacePhysicalEsiToTerraform(this._esi.internalValue),
      ether_opts: interfacePhysicalEtherOptsToTerraform(this._etherOpts.internalValue),
      gigether_opts: interfacePhysicalGigetherOptsToTerraform(this._gigetherOpts.internalValue),
      parent_ether_opts: interfacePhysicalParentEtherOptsToTerraform(this._parentEtherOpts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation: {
        value: cdktf.stringToHclTerraform(this._encapsulation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flexible_vlan_tagging: {
        value: cdktf.booleanToHclTerraform(this._flexibleVlanTagging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gratuitous_arp_reply: {
        value: cdktf.booleanToHclTerraform(this._gratuitousArpReply),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hold_time_down: {
        value: cdktf.numberToHclTerraform(this._holdTimeDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hold_time_up: {
        value: cdktf.numberToHclTerraform(this._holdTimeUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_mode: {
        value: cdktf.stringToHclTerraform(this._linkMode),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_disable_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._noDisableOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_gratuitous_arp_reply: {
        value: cdktf.booleanToHclTerraform(this._noGratuitousArpReply),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_gratuitous_arp_request: {
        value: cdktf.booleanToHclTerraform(this._noGratuitousArpRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storm_control: {
        value: cdktf.stringToHclTerraform(this._stormControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk: {
        value: cdktf.booleanToHclTerraform(this._trunk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trunk_non_els: {
        value: cdktf.booleanToHclTerraform(this._trunkNonEls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlanMembers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vlan_native: {
        value: cdktf.numberToHclTerraform(this._vlanNative),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_native_non_els: {
        value: cdktf.stringToHclTerraform(this._vlanNativeNonEls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_tagging: {
        value: cdktf.booleanToHclTerraform(this._vlanTagging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      esi: {
        value: interfacePhysicalEsiToHclTerraform(this._esi.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InterfacePhysicalEsi",
      },
      ether_opts: {
        value: interfacePhysicalEtherOptsToHclTerraform(this._etherOpts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InterfacePhysicalEtherOpts",
      },
      gigether_opts: {
        value: interfacePhysicalGigetherOptsToHclTerraform(this._gigetherOpts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InterfacePhysicalGigetherOpts",
      },
      parent_ether_opts: {
        value: interfacePhysicalParentEtherOptsToHclTerraform(this._parentEtherOpts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InterfacePhysicalParentEtherOpts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
