// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterConnectivityTemplateInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#blueprint_id DatacenterConnectivityTemplateInterface#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Connectivity Template Description displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#description DatacenterConnectivityTemplateInterface#description}
  */
  readonly description?: string;
  /**
  * Map of *IP Link* Primitives in this Connectivity Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ip_links DatacenterConnectivityTemplateInterface#ip_links}
  */
  readonly ipLinks?: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinks } | cdktf.IResolvable;
  /**
  * Connectivity Template Name displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#name DatacenterConnectivityTemplateInterface#name}
  */
  readonly name: string;
  /**
  * Map of *Routing Zone Constraint* Primitives in this Connectivity Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#routing_zone_constraints DatacenterConnectivityTemplateInterface#routing_zone_constraints}
  */
  readonly routingZoneConstraints?: { [key: string]: DatacenterConnectivityTemplateInterfaceRoutingZoneConstraints } | cdktf.IResolvable;
  /**
  * Set of Tags associated with this Connectivity Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#tags DatacenterConnectivityTemplateInterface#tags}
  */
  readonly tags?: string[];
  /**
  * Map of *Virtual Network (Multiple)* Primitives in this Connectivity Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#virtual_network_multiples DatacenterConnectivityTemplateInterface#virtual_network_multiples}
  */
  readonly virtualNetworkMultiples?: { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiples } | cdktf.IResolvable;
  /**
  * Map of *Virtual Network (Single)* Primitives in this Connectivity Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#virtual_network_singles DatacenterConnectivityTemplateInterface#virtual_network_singles}
  */
  readonly virtualNetworkSingles?: { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkSingles } | cdktf.IResolvable;
}
export interface DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPolicies {
  /**
  * Routing Policy ID to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#routing_policy_id DatacenterConnectivityTemplateInterface#routing_policy_id}
  */
  readonly routingPolicyId: string;
}

export function datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPoliciesToTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_policy_id: cdktf.stringToTerraform(struct!.routingPolicyId),
  }
}


export function datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPoliciesToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routingPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyId = this._routingPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingPolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingPolicyId = value.routingPolicyId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // routing_policy_id - computed: false, optional: false, required: true
  private _routingPolicyId?: string; 
  public get routingPolicyId() {
    return this.getStringAttribute('routing_policy_id');
  }
  public set routingPolicyId(value: string) {
    this._routingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyIdInput() {
    return this._routingPolicyId;
  }
}

export class DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPoliciesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPolicies } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPoliciesOutputReference {
    return new DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystems {
  /**
  * Enable BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#bfd_enabled DatacenterConnectivityTemplateInterface#bfd_enabled}
  */
  readonly bfdEnabled: boolean | cdktf.IResolvable;
  /**
  * BGP hold time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#hold_time DatacenterConnectivityTemplateInterface#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Must be one of: 
  *   - none
  *   - addressed
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ipv4_addressing_type DatacenterConnectivityTemplateInterface#ipv4_addressing_type}
  */
  readonly ipv4AddressingType: string;
  /**
  * Must be one of: 
  *   - none
  *   - addressed
  *   - link_local
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ipv6_addressing_type DatacenterConnectivityTemplateInterface#ipv6_addressing_type}
  */
  readonly ipv6AddressingType: string;
  /**
  * BGP keepalive time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#keepalive_time DatacenterConnectivityTemplateInterface#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * This feature is configured on a per-peer basis. It allows a router to appear to be a member of a second autonomous system (AS) by prepending a local-as AS number, in addition to its real AS number, announced to its eBGP peer, resulting in an AS path length of two.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#local_asn DatacenterConnectivityTemplateInterface#local_asn}
  */
  readonly localAsn?: number;
  /**
  * When `true`, the BGP process will accept connections from any peer AS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#neighbor_asn_dynamic DatacenterConnectivityTemplateInterface#neighbor_asn_dynamic}
  */
  readonly neighborAsnDynamic: boolean | cdktf.IResolvable;
  /**
  * Password used to secure the BGP session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#password DatacenterConnectivityTemplateInterface#password}
  */
  readonly password?: string;
  /**
  * Enable to peer from loopback interface. Default behavior peers from physical interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#peer_from_loopback DatacenterConnectivityTemplateInterface#peer_from_loopback}
  */
  readonly peerFromLoopback: boolean | cdktf.IResolvable;
  /**
  * Must be one of: 
  *   - interface_or_ip_endpoint
  *   - interface_or_shared_ip_endpoint
  *   - loopback
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#peer_to DatacenterConnectivityTemplateInterface#peer_to}
  */
  readonly peerTo: string;
  /**
  * Map of Routing Policy Primitives to be used with this *Protocol Endpoint*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#routing_policies DatacenterConnectivityTemplateInterface#routing_policies}
  */
  readonly routingPolicies?: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPolicies } | cdktf.IResolvable;
  /**
  * BGP Time To Live. Omit to use device defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ttl DatacenterConnectivityTemplateInterface#ttl}
  */
  readonly ttl?: number;
}

export function datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsToTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd_enabled: cdktf.booleanToTerraform(struct!.bfdEnabled),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    ipv4_addressing_type: cdktf.stringToTerraform(struct!.ipv4AddressingType),
    ipv6_addressing_type: cdktf.stringToTerraform(struct!.ipv6AddressingType),
    keepalive_time: cdktf.numberToTerraform(struct!.keepaliveTime),
    local_asn: cdktf.numberToTerraform(struct!.localAsn),
    neighbor_asn_dynamic: cdktf.booleanToTerraform(struct!.neighborAsnDynamic),
    password: cdktf.stringToTerraform(struct!.password),
    peer_from_loopback: cdktf.booleanToTerraform(struct!.peerFromLoopback),
    peer_to: cdktf.stringToTerraform(struct!.peerTo),
    routing_policies: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPoliciesToTerraform)(struct!.routingPolicies),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bfdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_addressing_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AddressingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addressing_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv6AddressingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_time: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_asn: {
      value: cdktf.numberToHclTerraform(struct!.localAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_asn_dynamic: {
      value: cdktf.booleanToHclTerraform(struct!.neighborAsnDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_from_loopback: {
      value: cdktf.booleanToHclTerraform(struct!.peerFromLoopback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peer_to: {
      value: cdktf.stringToHclTerraform(struct!.peerTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policies: {
      value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPoliciesToHclTerraform)(struct!.routingPolicies),
      isBlock: true,
      type: "map",
      storageClassType: "DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPoliciesMap",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdEnabled = this._bfdEnabled;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._ipv4AddressingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressingType = this._ipv4AddressingType;
    }
    if (this._ipv6AddressingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressingType = this._ipv6AddressingType;
    }
    if (this._keepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTime = this._keepaliveTime;
    }
    if (this._localAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsn = this._localAsn;
    }
    if (this._neighborAsnDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborAsnDynamic = this._neighborAsnDynamic;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._peerFromLoopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerFromLoopback = this._peerFromLoopback;
    }
    if (this._peerTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerTo = this._peerTo;
    }
    if (this._routingPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicies = this._routingPolicies?.internalValue;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfdEnabled = undefined;
      this._holdTime = undefined;
      this._ipv4AddressingType = undefined;
      this._ipv6AddressingType = undefined;
      this._keepaliveTime = undefined;
      this._localAsn = undefined;
      this._neighborAsnDynamic = undefined;
      this._password = undefined;
      this._peerFromLoopback = undefined;
      this._peerTo = undefined;
      this._routingPolicies.internalValue = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfdEnabled = value.bfdEnabled;
      this._holdTime = value.holdTime;
      this._ipv4AddressingType = value.ipv4AddressingType;
      this._ipv6AddressingType = value.ipv6AddressingType;
      this._keepaliveTime = value.keepaliveTime;
      this._localAsn = value.localAsn;
      this._neighborAsnDynamic = value.neighborAsnDynamic;
      this._password = value.password;
      this._peerFromLoopback = value.peerFromLoopback;
      this._peerTo = value.peerTo;
      this._routingPolicies.internalValue = value.routingPolicies;
      this._ttl = value.ttl;
    }
  }

  // batch_id - computed: true, optional: false, required: false
  public get batchId() {
    return this.getStringAttribute('batch_id');
  }

  // bfd_enabled - computed: false, optional: false, required: true
  private _bfdEnabled?: boolean | cdktf.IResolvable; 
  public get bfdEnabled() {
    return this.getBooleanAttribute('bfd_enabled');
  }
  public set bfdEnabled(value: boolean | cdktf.IResolvable) {
    this._bfdEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnabledInput() {
    return this._bfdEnabled;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_addressing_type - computed: false, optional: false, required: true
  private _ipv4AddressingType?: string; 
  public get ipv4AddressingType() {
    return this.getStringAttribute('ipv4_addressing_type');
  }
  public set ipv4AddressingType(value: string) {
    this._ipv4AddressingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressingTypeInput() {
    return this._ipv4AddressingType;
  }

  // ipv6_addressing_type - computed: false, optional: false, required: true
  private _ipv6AddressingType?: string; 
  public get ipv6AddressingType() {
    return this.getStringAttribute('ipv6_addressing_type');
  }
  public set ipv6AddressingType(value: string) {
    this._ipv6AddressingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressingTypeInput() {
    return this._ipv6AddressingType;
  }

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: number; 
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }
  public set keepaliveTime(value: number) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // local_asn - computed: false, optional: true, required: false
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // neighbor_asn_dynamic - computed: false, optional: false, required: true
  private _neighborAsnDynamic?: boolean | cdktf.IResolvable; 
  public get neighborAsnDynamic() {
    return this.getBooleanAttribute('neighbor_asn_dynamic');
  }
  public set neighborAsnDynamic(value: boolean | cdktf.IResolvable) {
    this._neighborAsnDynamic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAsnDynamicInput() {
    return this._neighborAsnDynamic;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // peer_from_loopback - computed: false, optional: false, required: true
  private _peerFromLoopback?: boolean | cdktf.IResolvable; 
  public get peerFromLoopback() {
    return this.getBooleanAttribute('peer_from_loopback');
  }
  public set peerFromLoopback(value: boolean | cdktf.IResolvable) {
    this._peerFromLoopback = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerFromLoopbackInput() {
    return this._peerFromLoopback;
  }

  // peer_to - computed: false, optional: false, required: true
  private _peerTo?: string; 
  public get peerTo() {
    return this.getStringAttribute('peer_to');
  }
  public set peerTo(value: string) {
    this._peerTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerToInput() {
    return this._peerTo;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // routing_policies - computed: false, optional: true, required: false
  private _routingPolicies = new DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPoliciesMap(this, "routing_policies");
  public get routingPolicies() {
    return this._routingPolicies;
  }
  public putRoutingPolicies(value: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsRoutingPolicies } | cdktf.IResolvable) {
    this._routingPolicies.internalValue = value;
  }
  public resetRoutingPolicies() {
    this._routingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPoliciesInput() {
    return this._routingPolicies.internalValue;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystems } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsOutputReference {
    return new DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPolicies {
  /**
  * Routing Policy ID to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#routing_policy_id DatacenterConnectivityTemplateInterface#routing_policy_id}
  */
  readonly routingPolicyId: string;
}

export function datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPoliciesToTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_policy_id: cdktf.stringToTerraform(struct!.routingPolicyId),
  }
}


export function datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPoliciesToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routingPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyId = this._routingPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingPolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingPolicyId = value.routingPolicyId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // routing_policy_id - computed: false, optional: false, required: true
  private _routingPolicyId?: string; 
  public get routingPolicyId() {
    return this.getStringAttribute('routing_policy_id');
  }
  public set routingPolicyId(value: string) {
    this._routingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyIdInput() {
    return this._routingPolicyId;
  }
}

export class DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPoliciesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPolicies } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPoliciesOutputReference {
    return new DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpoints {
  /**
  * Enable BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#bfd_enabled DatacenterConnectivityTemplateInterface#bfd_enabled}
  */
  readonly bfdEnabled: boolean | cdktf.IResolvable;
  /**
  * BGP hold time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#hold_time DatacenterConnectivityTemplateInterface#hold_time}
  */
  readonly holdTime?: number;
  /**
  * IPv4 address of peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ipv4_address DatacenterConnectivityTemplateInterface#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv6 address of peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ipv6_address DatacenterConnectivityTemplateInterface#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * BGP keepalive time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#keepalive_time DatacenterConnectivityTemplateInterface#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * This feature is configured on a per-peer basis. It allows a router to appear to be a member of a second autonomous system (AS) by prepending a local-as AS number, in addition to its real AS number, announced to its eBGP peer, resulting in an AS path length of two.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#local_asn DatacenterConnectivityTemplateInterface#local_asn}
  */
  readonly localAsn?: number;
  /**
  * Neighbor ASN. Omit for *Neighbor ASN Type Dynamic*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#neighbor_asn DatacenterConnectivityTemplateInterface#neighbor_asn}
  */
  readonly neighborAsn?: number;
  /**
  * Password used to secure the BGP session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#password DatacenterConnectivityTemplateInterface#password}
  */
  readonly password?: string;
  /**
  * Map of Routing Policy Primitives to be used with this *Protocol Endpoint*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#routing_policies DatacenterConnectivityTemplateInterface#routing_policies}
  */
  readonly routingPolicies?: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPolicies } | cdktf.IResolvable;
  /**
  * BGP Time To Live. Omit to use device defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ttl DatacenterConnectivityTemplateInterface#ttl}
  */
  readonly ttl?: number;
}

export function datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsToTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd_enabled: cdktf.booleanToTerraform(struct!.bfdEnabled),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    keepalive_time: cdktf.numberToTerraform(struct!.keepaliveTime),
    local_asn: cdktf.numberToTerraform(struct!.localAsn),
    neighbor_asn: cdktf.numberToTerraform(struct!.neighborAsn),
    password: cdktf.stringToTerraform(struct!.password),
    routing_policies: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPoliciesToTerraform)(struct!.routingPolicies),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bfdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_time: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_asn: {
      value: cdktf.numberToHclTerraform(struct!.localAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_asn: {
      value: cdktf.numberToHclTerraform(struct!.neighborAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policies: {
      value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPoliciesToHclTerraform)(struct!.routingPolicies),
      isBlock: true,
      type: "map",
      storageClassType: "DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPoliciesMap",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdEnabled = this._bfdEnabled;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._keepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTime = this._keepaliveTime;
    }
    if (this._localAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsn = this._localAsn;
    }
    if (this._neighborAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborAsn = this._neighborAsn;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._routingPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicies = this._routingPolicies?.internalValue;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfdEnabled = undefined;
      this._holdTime = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._keepaliveTime = undefined;
      this._localAsn = undefined;
      this._neighborAsn = undefined;
      this._password = undefined;
      this._routingPolicies.internalValue = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfdEnabled = value.bfdEnabled;
      this._holdTime = value.holdTime;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._keepaliveTime = value.keepaliveTime;
      this._localAsn = value.localAsn;
      this._neighborAsn = value.neighborAsn;
      this._password = value.password;
      this._routingPolicies.internalValue = value.routingPolicies;
      this._ttl = value.ttl;
    }
  }

  // batch_id - computed: true, optional: false, required: false
  public get batchId() {
    return this.getStringAttribute('batch_id');
  }

  // bfd_enabled - computed: false, optional: false, required: true
  private _bfdEnabled?: boolean | cdktf.IResolvable; 
  public get bfdEnabled() {
    return this.getBooleanAttribute('bfd_enabled');
  }
  public set bfdEnabled(value: boolean | cdktf.IResolvable) {
    this._bfdEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnabledInput() {
    return this._bfdEnabled;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: number; 
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }
  public set keepaliveTime(value: number) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // local_asn - computed: false, optional: true, required: false
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // neighbor_asn - computed: false, optional: true, required: false
  private _neighborAsn?: number; 
  public get neighborAsn() {
    return this.getNumberAttribute('neighbor_asn');
  }
  public set neighborAsn(value: number) {
    this._neighborAsn = value;
  }
  public resetNeighborAsn() {
    this._neighborAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAsnInput() {
    return this._neighborAsn;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // routing_policies - computed: false, optional: true, required: false
  private _routingPolicies = new DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPoliciesMap(this, "routing_policies");
  public get routingPolicies() {
    return this._routingPolicies;
  }
  public putRoutingPolicies(value: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsRoutingPolicies } | cdktf.IResolvable) {
    this._routingPolicies.internalValue = value;
  }
  public resetRoutingPolicies() {
    this._routingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPoliciesInput() {
    return this._routingPolicies.internalValue;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpoints } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsOutputReference {
    return new DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPolicies {
  /**
  * Routing Policy ID to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#routing_policy_id DatacenterConnectivityTemplateInterface#routing_policy_id}
  */
  readonly routingPolicyId: string;
}

export function datacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPoliciesToTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_policy_id: cdktf.stringToTerraform(struct!.routingPolicyId),
  }
}


export function datacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPoliciesToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routingPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyId = this._routingPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingPolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingPolicyId = value.routingPolicyId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // routing_policy_id - computed: false, optional: false, required: true
  private _routingPolicyId?: string; 
  public get routingPolicyId() {
    return this.getStringAttribute('routing_policy_id');
  }
  public set routingPolicyId(value: string) {
    this._routingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyIdInput() {
    return this._routingPolicyId;
  }
}

export class DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPoliciesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPolicies } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPoliciesOutputReference {
    return new DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeerings {
  /**
  * Enable BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#bfd_enabled DatacenterConnectivityTemplateInterface#bfd_enabled}
  */
  readonly bfdEnabled: boolean | cdktf.IResolvable;
  /**
  * BGP hold time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#hold_time DatacenterConnectivityTemplateInterface#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Enables peering with IPv4 neighbors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ipv4_enabled DatacenterConnectivityTemplateInterface#ipv4_enabled}
  */
  readonly ipv4Enabled: boolean | cdktf.IResolvable;
  /**
  * IPv4 Subnet for BGP Prefix Dynamic Neighbors. Leave blank to derive subnet from application point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ipv4_peer_prefix DatacenterConnectivityTemplateInterface#ipv4_peer_prefix}
  */
  readonly ipv4PeerPrefix?: string;
  /**
  * Enables peering with IPv6 neighbors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ipv6_enabled DatacenterConnectivityTemplateInterface#ipv6_enabled}
  */
  readonly ipv6Enabled: boolean | cdktf.IResolvable;
  /**
  * IPv6 Subnet for BGP Prefix Dynamic Neighbors. Leave blank to derive subnet from application point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ipv6_peer_prefix DatacenterConnectivityTemplateInterface#ipv6_peer_prefix}
  */
  readonly ipv6PeerPrefix?: string;
  /**
  * BGP keepalive time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#keepalive_time DatacenterConnectivityTemplateInterface#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * This feature is configured on a per-peer basis. It allows a router to appear to be a member of a second autonomous system (AS) by prepending a local-as AS number, in addition to its real AS number, announced to its eBGP peer, resulting in an AS path length of two.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#local_asn DatacenterConnectivityTemplateInterface#local_asn}
  */
  readonly localAsn?: number;
  /**
  * Password used to secure the BGP session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#password DatacenterConnectivityTemplateInterface#password}
  */
  readonly password?: string;
  /**
  * Map of Routing Policy Primitives to be used with this *Protocol Endpoint*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#routing_policies DatacenterConnectivityTemplateInterface#routing_policies}
  */
  readonly routingPolicies?: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPolicies } | cdktf.IResolvable;
  /**
  * BGP Time To Live. Omit to use device defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ttl DatacenterConnectivityTemplateInterface#ttl}
  */
  readonly ttl?: number;
}

export function datacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsToTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeerings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd_enabled: cdktf.booleanToTerraform(struct!.bfdEnabled),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    ipv4_enabled: cdktf.booleanToTerraform(struct!.ipv4Enabled),
    ipv4_peer_prefix: cdktf.stringToTerraform(struct!.ipv4PeerPrefix),
    ipv6_enabled: cdktf.booleanToTerraform(struct!.ipv6Enabled),
    ipv6_peer_prefix: cdktf.stringToTerraform(struct!.ipv6PeerPrefix),
    keepalive_time: cdktf.numberToTerraform(struct!.keepaliveTime),
    local_asn: cdktf.numberToTerraform(struct!.localAsn),
    password: cdktf.stringToTerraform(struct!.password),
    routing_policies: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPoliciesToTerraform)(struct!.routingPolicies),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function datacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeerings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bfdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4_peer_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv4PeerPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_peer_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6PeerPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_time: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_asn: {
      value: cdktf.numberToHclTerraform(struct!.localAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policies: {
      value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPoliciesToHclTerraform)(struct!.routingPolicies),
      isBlock: true,
      type: "map",
      storageClassType: "DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPoliciesMap",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeerings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdEnabled = this._bfdEnabled;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._ipv4Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Enabled = this._ipv4Enabled;
    }
    if (this._ipv4PeerPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PeerPrefix = this._ipv4PeerPrefix;
    }
    if (this._ipv6Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Enabled = this._ipv6Enabled;
    }
    if (this._ipv6PeerPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PeerPrefix = this._ipv6PeerPrefix;
    }
    if (this._keepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTime = this._keepaliveTime;
    }
    if (this._localAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsn = this._localAsn;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._routingPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicies = this._routingPolicies?.internalValue;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeerings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfdEnabled = undefined;
      this._holdTime = undefined;
      this._ipv4Enabled = undefined;
      this._ipv4PeerPrefix = undefined;
      this._ipv6Enabled = undefined;
      this._ipv6PeerPrefix = undefined;
      this._keepaliveTime = undefined;
      this._localAsn = undefined;
      this._password = undefined;
      this._routingPolicies.internalValue = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfdEnabled = value.bfdEnabled;
      this._holdTime = value.holdTime;
      this._ipv4Enabled = value.ipv4Enabled;
      this._ipv4PeerPrefix = value.ipv4PeerPrefix;
      this._ipv6Enabled = value.ipv6Enabled;
      this._ipv6PeerPrefix = value.ipv6PeerPrefix;
      this._keepaliveTime = value.keepaliveTime;
      this._localAsn = value.localAsn;
      this._password = value.password;
      this._routingPolicies.internalValue = value.routingPolicies;
      this._ttl = value.ttl;
    }
  }

  // batch_id - computed: true, optional: false, required: false
  public get batchId() {
    return this.getStringAttribute('batch_id');
  }

  // bfd_enabled - computed: false, optional: false, required: true
  private _bfdEnabled?: boolean | cdktf.IResolvable; 
  public get bfdEnabled() {
    return this.getBooleanAttribute('bfd_enabled');
  }
  public set bfdEnabled(value: boolean | cdktf.IResolvable) {
    this._bfdEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnabledInput() {
    return this._bfdEnabled;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_enabled - computed: false, optional: false, required: true
  private _ipv4Enabled?: boolean | cdktf.IResolvable; 
  public get ipv4Enabled() {
    return this.getBooleanAttribute('ipv4_enabled');
  }
  public set ipv4Enabled(value: boolean | cdktf.IResolvable) {
    this._ipv4Enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EnabledInput() {
    return this._ipv4Enabled;
  }

  // ipv4_peer_prefix - computed: false, optional: true, required: false
  private _ipv4PeerPrefix?: string; 
  public get ipv4PeerPrefix() {
    return this.getStringAttribute('ipv4_peer_prefix');
  }
  public set ipv4PeerPrefix(value: string) {
    this._ipv4PeerPrefix = value;
  }
  public resetIpv4PeerPrefix() {
    this._ipv4PeerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PeerPrefixInput() {
    return this._ipv4PeerPrefix;
  }

  // ipv6_enabled - computed: false, optional: false, required: true
  private _ipv6Enabled?: boolean | cdktf.IResolvable; 
  public get ipv6Enabled() {
    return this.getBooleanAttribute('ipv6_enabled');
  }
  public set ipv6Enabled(value: boolean | cdktf.IResolvable) {
    this._ipv6Enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnabledInput() {
    return this._ipv6Enabled;
  }

  // ipv6_peer_prefix - computed: false, optional: true, required: false
  private _ipv6PeerPrefix?: string; 
  public get ipv6PeerPrefix() {
    return this.getStringAttribute('ipv6_peer_prefix');
  }
  public set ipv6PeerPrefix(value: string) {
    this._ipv6PeerPrefix = value;
  }
  public resetIpv6PeerPrefix() {
    this._ipv6PeerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PeerPrefixInput() {
    return this._ipv6PeerPrefix;
  }

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: number; 
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }
  public set keepaliveTime(value: number) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // local_asn - computed: false, optional: true, required: false
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // routing_policies - computed: false, optional: true, required: false
  private _routingPolicies = new DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPoliciesMap(this, "routing_policies");
  public get routingPolicies() {
    return this._routingPolicies;
  }
  public putRoutingPolicies(value: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsRoutingPolicies } | cdktf.IResolvable) {
    this._routingPolicies.internalValue = value;
  }
  public resetRoutingPolicies() {
    this._routingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPoliciesInput() {
    return this._routingPolicies.internalValue;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeerings } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsOutputReference {
    return new DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutes {
  /**
  * Destination network in CIDR notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#network DatacenterConnectivityTemplateInterface#network}
  */
  readonly network: string;
  /**
  * Indicates whether the next-hop IP address is shared across multiple remote systems. Default:  Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#share_ip_endpoint DatacenterConnectivityTemplateInterface#share_ip_endpoint}
  */
  readonly shareIpEndpoint: boolean | cdktf.IResolvable;
}

export function datacenterConnectivityTemplateInterfaceIpLinksStaticRoutesToTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    share_ip_endpoint: cdktf.booleanToTerraform(struct!.shareIpEndpoint),
  }
}


export function datacenterConnectivityTemplateInterfaceIpLinksStaticRoutesToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_ip_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.shareIpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._shareIpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareIpEndpoint = this._shareIpEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._shareIpEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._shareIpEndpoint = value.shareIpEndpoint;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // share_ip_endpoint - computed: false, optional: false, required: true
  private _shareIpEndpoint?: boolean | cdktf.IResolvable; 
  public get shareIpEndpoint() {
    return this.getBooleanAttribute('share_ip_endpoint');
  }
  public set shareIpEndpoint(value: boolean | cdktf.IResolvable) {
    this._shareIpEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIpEndpointInput() {
    return this._shareIpEndpoint;
  }
}

export class DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutes } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutesOutputReference {
    return new DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateInterfaceIpLinks {
  /**
  * Map of BGP Peering (Generic System) primitives
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#bgp_peering_generic_systems DatacenterConnectivityTemplateInterface#bgp_peering_generic_systems}
  */
  readonly bgpPeeringGenericSystems?: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystems } | cdktf.IResolvable;
  /**
  * Map of *BGP Peering (IP Endpoint)* Primitives in this Connectivity Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#bgp_peering_ip_endpoints DatacenterConnectivityTemplateInterface#bgp_peering_ip_endpoints}
  */
  readonly bgpPeeringIpEndpoints?: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpoints } | cdktf.IResolvable;
  /**
  * Map of *Dynamic BGP Peering* Primitives in this Connectivity Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#dynamic_bgp_peerings DatacenterConnectivityTemplateInterface#dynamic_bgp_peerings}
  */
  readonly dynamicBgpPeerings?: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeerings } | cdktf.IResolvable;
  /**
  * One of `none`, `numbered`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ipv4_addressing_type DatacenterConnectivityTemplateInterface#ipv4_addressing_type}
  */
  readonly ipv4AddressingType: string;
  /**
  * One of `none`, `link_local`, `numbered`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ipv6_addressing_type DatacenterConnectivityTemplateInterface#ipv6_addressing_type}
  */
  readonly ipv6AddressingType: string;
  /**
  * L3 MTU for sub-interfaces on leaf (spine/superspine) side and generic side. Configuration is applicable only when Fabric MTU is enabled. Value must be even number rom 1280 to 9216, if not specified - Default IP Links to Generic Systems MTU from Virtual Network Policy s used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#l3_mtu DatacenterConnectivityTemplateInterface#l3_mtu}
  */
  readonly l3Mtu?: number;
  /**
  * Node ID of the Routing Zone to which this IP Link should belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#routing_zone_id DatacenterConnectivityTemplateInterface#routing_zone_id}
  */
  readonly routingZoneId: string;
  /**
  * Map of network IPv4 or IPv6 destination prefixes reachable via this IP Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#static_routes DatacenterConnectivityTemplateInterface#static_routes}
  */
  readonly staticRoutes?: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutes } | cdktf.IResolvable;
  /**
  * 802.1Q tag number to use for tagged IP Link. Omit for untagged IP Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#vlan_id DatacenterConnectivityTemplateInterface#vlan_id}
  */
  readonly vlanId?: number;
}

export function datacenterConnectivityTemplateInterfaceIpLinksToTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_peering_generic_systems: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsToTerraform)(struct!.bgpPeeringGenericSystems),
    bgp_peering_ip_endpoints: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsToTerraform)(struct!.bgpPeeringIpEndpoints),
    dynamic_bgp_peerings: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsToTerraform)(struct!.dynamicBgpPeerings),
    ipv4_addressing_type: cdktf.stringToTerraform(struct!.ipv4AddressingType),
    ipv6_addressing_type: cdktf.stringToTerraform(struct!.ipv6AddressingType),
    l3_mtu: cdktf.numberToTerraform(struct!.l3Mtu),
    routing_zone_id: cdktf.stringToTerraform(struct!.routingZoneId),
    static_routes: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceIpLinksStaticRoutesToTerraform)(struct!.staticRoutes),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function datacenterConnectivityTemplateInterfaceIpLinksToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceIpLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_peering_generic_systems: {
      value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsToHclTerraform)(struct!.bgpPeeringGenericSystems),
      isBlock: true,
      type: "map",
      storageClassType: "DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsMap",
    },
    bgp_peering_ip_endpoints: {
      value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsToHclTerraform)(struct!.bgpPeeringIpEndpoints),
      isBlock: true,
      type: "map",
      storageClassType: "DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsMap",
    },
    dynamic_bgp_peerings: {
      value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsToHclTerraform)(struct!.dynamicBgpPeerings),
      isBlock: true,
      type: "map",
      storageClassType: "DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsMap",
    },
    ipv4_addressing_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AddressingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addressing_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv6AddressingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l3_mtu: {
      value: cdktf.numberToHclTerraform(struct!.l3Mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routing_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.routingZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_routes: {
      value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceIpLinksStaticRoutesToHclTerraform)(struct!.staticRoutes),
      isBlock: true,
      type: "map",
      storageClassType: "DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutesMap",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceIpLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceIpLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpPeeringGenericSystems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPeeringGenericSystems = this._bgpPeeringGenericSystems?.internalValue;
    }
    if (this._bgpPeeringIpEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPeeringIpEndpoints = this._bgpPeeringIpEndpoints?.internalValue;
    }
    if (this._dynamicBgpPeerings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicBgpPeerings = this._dynamicBgpPeerings?.internalValue;
    }
    if (this._ipv4AddressingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressingType = this._ipv4AddressingType;
    }
    if (this._ipv6AddressingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressingType = this._ipv6AddressingType;
    }
    if (this._l3Mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3Mtu = this._l3Mtu;
    }
    if (this._routingZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingZoneId = this._routingZoneId;
    }
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceIpLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpPeeringGenericSystems.internalValue = undefined;
      this._bgpPeeringIpEndpoints.internalValue = undefined;
      this._dynamicBgpPeerings.internalValue = undefined;
      this._ipv4AddressingType = undefined;
      this._ipv6AddressingType = undefined;
      this._l3Mtu = undefined;
      this._routingZoneId = undefined;
      this._staticRoutes.internalValue = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpPeeringGenericSystems.internalValue = value.bgpPeeringGenericSystems;
      this._bgpPeeringIpEndpoints.internalValue = value.bgpPeeringIpEndpoints;
      this._dynamicBgpPeerings.internalValue = value.dynamicBgpPeerings;
      this._ipv4AddressingType = value.ipv4AddressingType;
      this._ipv6AddressingType = value.ipv6AddressingType;
      this._l3Mtu = value.l3Mtu;
      this._routingZoneId = value.routingZoneId;
      this._staticRoutes.internalValue = value.staticRoutes;
      this._vlanId = value.vlanId;
    }
  }

  // batch_id - computed: true, optional: false, required: false
  public get batchId() {
    return this.getStringAttribute('batch_id');
  }

  // bgp_peering_generic_systems - computed: false, optional: true, required: false
  private _bgpPeeringGenericSystems = new DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystemsMap(this, "bgp_peering_generic_systems");
  public get bgpPeeringGenericSystems() {
    return this._bgpPeeringGenericSystems;
  }
  public putBgpPeeringGenericSystems(value: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringGenericSystems } | cdktf.IResolvable) {
    this._bgpPeeringGenericSystems.internalValue = value;
  }
  public resetBgpPeeringGenericSystems() {
    this._bgpPeeringGenericSystems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeeringGenericSystemsInput() {
    return this._bgpPeeringGenericSystems.internalValue;
  }

  // bgp_peering_ip_endpoints - computed: false, optional: true, required: false
  private _bgpPeeringIpEndpoints = new DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpointsMap(this, "bgp_peering_ip_endpoints");
  public get bgpPeeringIpEndpoints() {
    return this._bgpPeeringIpEndpoints;
  }
  public putBgpPeeringIpEndpoints(value: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksBgpPeeringIpEndpoints } | cdktf.IResolvable) {
    this._bgpPeeringIpEndpoints.internalValue = value;
  }
  public resetBgpPeeringIpEndpoints() {
    this._bgpPeeringIpEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeeringIpEndpointsInput() {
    return this._bgpPeeringIpEndpoints.internalValue;
  }

  // dynamic_bgp_peerings - computed: false, optional: true, required: false
  private _dynamicBgpPeerings = new DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeeringsMap(this, "dynamic_bgp_peerings");
  public get dynamicBgpPeerings() {
    return this._dynamicBgpPeerings;
  }
  public putDynamicBgpPeerings(value: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksDynamicBgpPeerings } | cdktf.IResolvable) {
    this._dynamicBgpPeerings.internalValue = value;
  }
  public resetDynamicBgpPeerings() {
    this._dynamicBgpPeerings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicBgpPeeringsInput() {
    return this._dynamicBgpPeerings.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_addressing_type - computed: false, optional: false, required: true
  private _ipv4AddressingType?: string; 
  public get ipv4AddressingType() {
    return this.getStringAttribute('ipv4_addressing_type');
  }
  public set ipv4AddressingType(value: string) {
    this._ipv4AddressingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressingTypeInput() {
    return this._ipv4AddressingType;
  }

  // ipv6_addressing_type - computed: false, optional: false, required: true
  private _ipv6AddressingType?: string; 
  public get ipv6AddressingType() {
    return this.getStringAttribute('ipv6_addressing_type');
  }
  public set ipv6AddressingType(value: string) {
    this._ipv6AddressingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressingTypeInput() {
    return this._ipv6AddressingType;
  }

  // l3_mtu - computed: false, optional: true, required: false
  private _l3Mtu?: number; 
  public get l3Mtu() {
    return this.getNumberAttribute('l3_mtu');
  }
  public set l3Mtu(value: number) {
    this._l3Mtu = value;
  }
  public resetL3Mtu() {
    this._l3Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3MtuInput() {
    return this._l3Mtu;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // routing_zone_id - computed: false, optional: false, required: true
  private _routingZoneId?: string; 
  public get routingZoneId() {
    return this.getStringAttribute('routing_zone_id');
  }
  public set routingZoneId(value: string) {
    this._routingZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZoneIdInput() {
    return this._routingZoneId;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutesMap(this, "static_routes");
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinksStaticRoutes } | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class DatacenterConnectivityTemplateInterfaceIpLinksMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinks } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceIpLinksOutputReference {
    return new DatacenterConnectivityTemplateInterfaceIpLinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateInterfaceRoutingZoneConstraints {
  /**
  * Routing Zone Constraint ID to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#routing_zone_constraint_id DatacenterConnectivityTemplateInterface#routing_zone_constraint_id}
  */
  readonly routingZoneConstraintId: string;
}

export function datacenterConnectivityTemplateInterfaceRoutingZoneConstraintsToTerraform(struct?: DatacenterConnectivityTemplateInterfaceRoutingZoneConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_zone_constraint_id: cdktf.stringToTerraform(struct!.routingZoneConstraintId),
  }
}


export function datacenterConnectivityTemplateInterfaceRoutingZoneConstraintsToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceRoutingZoneConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_zone_constraint_id: {
      value: cdktf.stringToHclTerraform(struct!.routingZoneConstraintId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceRoutingZoneConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceRoutingZoneConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingZoneConstraintId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingZoneConstraintId = this._routingZoneConstraintId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceRoutingZoneConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingZoneConstraintId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingZoneConstraintId = value.routingZoneConstraintId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // routing_zone_constraint_id - computed: false, optional: false, required: true
  private _routingZoneConstraintId?: string; 
  public get routingZoneConstraintId() {
    return this.getStringAttribute('routing_zone_constraint_id');
  }
  public set routingZoneConstraintId(value: string) {
    this._routingZoneConstraintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZoneConstraintIdInput() {
    return this._routingZoneConstraintId;
  }
}

export class DatacenterConnectivityTemplateInterfaceRoutingZoneConstraintsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceRoutingZoneConstraints } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceRoutingZoneConstraintsOutputReference {
    return new DatacenterConnectivityTemplateInterfaceRoutingZoneConstraintsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiples {
  /**
  * IDs of the Virtual Networks which should be tagged on the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#tagged_vn_ids DatacenterConnectivityTemplateInterface#tagged_vn_ids}
  */
  readonly taggedVnIds?: string[];
  /**
  * ID of the Virtual Network which should be untagged on the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#untagged_vn_id DatacenterConnectivityTemplateInterface#untagged_vn_id}
  */
  readonly untaggedVnId?: string;
}

export function datacenterConnectivityTemplateInterfaceVirtualNetworkMultiplesToTerraform(struct?: DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tagged_vn_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.taggedVnIds),
    untagged_vn_id: cdktf.stringToTerraform(struct!.untaggedVnId),
  }
}


export function datacenterConnectivityTemplateInterfaceVirtualNetworkMultiplesToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tagged_vn_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.taggedVnIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    untagged_vn_id: {
      value: cdktf.stringToHclTerraform(struct!.untaggedVnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiplesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiples | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taggedVnIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.taggedVnIds = this._taggedVnIds;
    }
    if (this._untaggedVnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.untaggedVnId = this._untaggedVnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiples | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._taggedVnIds = undefined;
      this._untaggedVnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._taggedVnIds = value.taggedVnIds;
      this._untaggedVnId = value.untaggedVnId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // tagged_vn_ids - computed: false, optional: true, required: false
  private _taggedVnIds?: string[]; 
  public get taggedVnIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tagged_vn_ids'));
  }
  public set taggedVnIds(value: string[]) {
    this._taggedVnIds = value;
  }
  public resetTaggedVnIds() {
    this._taggedVnIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedVnIdsInput() {
    return this._taggedVnIds;
  }

  // untagged_vn_id - computed: false, optional: true, required: false
  private _untaggedVnId?: string; 
  public get untaggedVnId() {
    return this.getStringAttribute('untagged_vn_id');
  }
  public set untaggedVnId(value: string) {
    this._untaggedVnId = value;
  }
  public resetUntaggedVnId() {
    this._untaggedVnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedVnIdInput() {
    return this._untaggedVnId;
  }
}

export class DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiplesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiples } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiplesOutputReference {
    return new DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiplesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPolicies {
  /**
  * Routing Policy ID to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#routing_policy_id DatacenterConnectivityTemplateInterface#routing_policy_id}
  */
  readonly routingPolicyId: string;
}

export function datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPoliciesToTerraform(struct?: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_policy_id: cdktf.stringToTerraform(struct!.routingPolicyId),
  }
}


export function datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPoliciesToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routingPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyId = this._routingPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingPolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingPolicyId = value.routingPolicyId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // routing_policy_id - computed: false, optional: false, required: true
  private _routingPolicyId?: string; 
  public get routingPolicyId() {
    return this.getStringAttribute('routing_policy_id');
  }
  public set routingPolicyId(value: string) {
    this._routingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyIdInput() {
    return this._routingPolicyId;
  }
}

export class DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPoliciesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPolicies } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPoliciesOutputReference {
    return new DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystems {
  /**
  * Enable BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#bfd_enabled DatacenterConnectivityTemplateInterface#bfd_enabled}
  */
  readonly bfdEnabled: boolean | cdktf.IResolvable;
  /**
  * BGP hold time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#hold_time DatacenterConnectivityTemplateInterface#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Must be one of: 
  *   - none
  *   - addressed
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ipv4_addressing_type DatacenterConnectivityTemplateInterface#ipv4_addressing_type}
  */
  readonly ipv4AddressingType: string;
  /**
  * Must be one of: 
  *   - none
  *   - addressed
  *   - link_local
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ipv6_addressing_type DatacenterConnectivityTemplateInterface#ipv6_addressing_type}
  */
  readonly ipv6AddressingType: string;
  /**
  * BGP keepalive time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#keepalive_time DatacenterConnectivityTemplateInterface#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * This feature is configured on a per-peer basis. It allows a router to appear to be a member of a second autonomous system (AS) by prepending a local-as AS number, in addition to its real AS number, announced to its eBGP peer, resulting in an AS path length of two.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#local_asn DatacenterConnectivityTemplateInterface#local_asn}
  */
  readonly localAsn?: number;
  /**
  * When `true`, the BGP process will accept connections from any peer AS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#neighbor_asn_dynamic DatacenterConnectivityTemplateInterface#neighbor_asn_dynamic}
  */
  readonly neighborAsnDynamic: boolean | cdktf.IResolvable;
  /**
  * Password used to secure the BGP session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#password DatacenterConnectivityTemplateInterface#password}
  */
  readonly password?: string;
  /**
  * Enable to peer from loopback interface. Default behavior peers from physical interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#peer_from_loopback DatacenterConnectivityTemplateInterface#peer_from_loopback}
  */
  readonly peerFromLoopback: boolean | cdktf.IResolvable;
  /**
  * Must be one of: 
  *   - interface_or_ip_endpoint
  *   - interface_or_shared_ip_endpoint
  *   - loopback
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#peer_to DatacenterConnectivityTemplateInterface#peer_to}
  */
  readonly peerTo: string;
  /**
  * Map of Routing Policy Primitives to be used with this *Protocol Endpoint*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#routing_policies DatacenterConnectivityTemplateInterface#routing_policies}
  */
  readonly routingPolicies?: { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPolicies } | cdktf.IResolvable;
  /**
  * BGP Time To Live. Omit to use device defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#ttl DatacenterConnectivityTemplateInterface#ttl}
  */
  readonly ttl?: number;
}

export function datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsToTerraform(struct?: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd_enabled: cdktf.booleanToTerraform(struct!.bfdEnabled),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    ipv4_addressing_type: cdktf.stringToTerraform(struct!.ipv4AddressingType),
    ipv6_addressing_type: cdktf.stringToTerraform(struct!.ipv6AddressingType),
    keepalive_time: cdktf.numberToTerraform(struct!.keepaliveTime),
    local_asn: cdktf.numberToTerraform(struct!.localAsn),
    neighbor_asn_dynamic: cdktf.booleanToTerraform(struct!.neighborAsnDynamic),
    password: cdktf.stringToTerraform(struct!.password),
    peer_from_loopback: cdktf.booleanToTerraform(struct!.peerFromLoopback),
    peer_to: cdktf.stringToTerraform(struct!.peerTo),
    routing_policies: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPoliciesToTerraform)(struct!.routingPolicies),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bfdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_addressing_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AddressingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addressing_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv6AddressingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_time: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_asn: {
      value: cdktf.numberToHclTerraform(struct!.localAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_asn_dynamic: {
      value: cdktf.booleanToHclTerraform(struct!.neighborAsnDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_from_loopback: {
      value: cdktf.booleanToHclTerraform(struct!.peerFromLoopback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peer_to: {
      value: cdktf.stringToHclTerraform(struct!.peerTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policies: {
      value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPoliciesToHclTerraform)(struct!.routingPolicies),
      isBlock: true,
      type: "map",
      storageClassType: "DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPoliciesMap",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdEnabled = this._bfdEnabled;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._ipv4AddressingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressingType = this._ipv4AddressingType;
    }
    if (this._ipv6AddressingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressingType = this._ipv6AddressingType;
    }
    if (this._keepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTime = this._keepaliveTime;
    }
    if (this._localAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsn = this._localAsn;
    }
    if (this._neighborAsnDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborAsnDynamic = this._neighborAsnDynamic;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._peerFromLoopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerFromLoopback = this._peerFromLoopback;
    }
    if (this._peerTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerTo = this._peerTo;
    }
    if (this._routingPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicies = this._routingPolicies?.internalValue;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfdEnabled = undefined;
      this._holdTime = undefined;
      this._ipv4AddressingType = undefined;
      this._ipv6AddressingType = undefined;
      this._keepaliveTime = undefined;
      this._localAsn = undefined;
      this._neighborAsnDynamic = undefined;
      this._password = undefined;
      this._peerFromLoopback = undefined;
      this._peerTo = undefined;
      this._routingPolicies.internalValue = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfdEnabled = value.bfdEnabled;
      this._holdTime = value.holdTime;
      this._ipv4AddressingType = value.ipv4AddressingType;
      this._ipv6AddressingType = value.ipv6AddressingType;
      this._keepaliveTime = value.keepaliveTime;
      this._localAsn = value.localAsn;
      this._neighborAsnDynamic = value.neighborAsnDynamic;
      this._password = value.password;
      this._peerFromLoopback = value.peerFromLoopback;
      this._peerTo = value.peerTo;
      this._routingPolicies.internalValue = value.routingPolicies;
      this._ttl = value.ttl;
    }
  }

  // batch_id - computed: true, optional: false, required: false
  public get batchId() {
    return this.getStringAttribute('batch_id');
  }

  // bfd_enabled - computed: false, optional: false, required: true
  private _bfdEnabled?: boolean | cdktf.IResolvable; 
  public get bfdEnabled() {
    return this.getBooleanAttribute('bfd_enabled');
  }
  public set bfdEnabled(value: boolean | cdktf.IResolvable) {
    this._bfdEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnabledInput() {
    return this._bfdEnabled;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_addressing_type - computed: false, optional: false, required: true
  private _ipv4AddressingType?: string; 
  public get ipv4AddressingType() {
    return this.getStringAttribute('ipv4_addressing_type');
  }
  public set ipv4AddressingType(value: string) {
    this._ipv4AddressingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressingTypeInput() {
    return this._ipv4AddressingType;
  }

  // ipv6_addressing_type - computed: false, optional: false, required: true
  private _ipv6AddressingType?: string; 
  public get ipv6AddressingType() {
    return this.getStringAttribute('ipv6_addressing_type');
  }
  public set ipv6AddressingType(value: string) {
    this._ipv6AddressingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressingTypeInput() {
    return this._ipv6AddressingType;
  }

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: number; 
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }
  public set keepaliveTime(value: number) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // local_asn - computed: false, optional: true, required: false
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // neighbor_asn_dynamic - computed: false, optional: false, required: true
  private _neighborAsnDynamic?: boolean | cdktf.IResolvable; 
  public get neighborAsnDynamic() {
    return this.getBooleanAttribute('neighbor_asn_dynamic');
  }
  public set neighborAsnDynamic(value: boolean | cdktf.IResolvable) {
    this._neighborAsnDynamic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAsnDynamicInput() {
    return this._neighborAsnDynamic;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // peer_from_loopback - computed: false, optional: false, required: true
  private _peerFromLoopback?: boolean | cdktf.IResolvable; 
  public get peerFromLoopback() {
    return this.getBooleanAttribute('peer_from_loopback');
  }
  public set peerFromLoopback(value: boolean | cdktf.IResolvable) {
    this._peerFromLoopback = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerFromLoopbackInput() {
    return this._peerFromLoopback;
  }

  // peer_to - computed: false, optional: false, required: true
  private _peerTo?: string; 
  public get peerTo() {
    return this.getStringAttribute('peer_to');
  }
  public set peerTo(value: string) {
    this._peerTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerToInput() {
    return this._peerTo;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // routing_policies - computed: false, optional: true, required: false
  private _routingPolicies = new DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPoliciesMap(this, "routing_policies");
  public get routingPolicies() {
    return this._routingPolicies;
  }
  public putRoutingPolicies(value: { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsRoutingPolicies } | cdktf.IResolvable) {
    this._routingPolicies.internalValue = value;
  }
  public resetRoutingPolicies() {
    this._routingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPoliciesInput() {
    return this._routingPolicies.internalValue;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystems } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsOutputReference {
    return new DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutes {
  /**
  * Destination network in CIDR notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#network DatacenterConnectivityTemplateInterface#network}
  */
  readonly network: string;
  /**
  * Indicates whether the next-hop IP address is shared across multiple remote systems. Default:  Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#share_ip_endpoint DatacenterConnectivityTemplateInterface#share_ip_endpoint}
  */
  readonly shareIpEndpoint: boolean | cdktf.IResolvable;
}

export function datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutesToTerraform(struct?: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    share_ip_endpoint: cdktf.booleanToTerraform(struct!.shareIpEndpoint),
  }
}


export function datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutesToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_ip_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.shareIpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._shareIpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareIpEndpoint = this._shareIpEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._shareIpEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._shareIpEndpoint = value.shareIpEndpoint;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // share_ip_endpoint - computed: false, optional: false, required: true
  private _shareIpEndpoint?: boolean | cdktf.IResolvable; 
  public get shareIpEndpoint() {
    return this.getBooleanAttribute('share_ip_endpoint');
  }
  public set shareIpEndpoint(value: boolean | cdktf.IResolvable) {
    this._shareIpEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIpEndpointInput() {
    return this._shareIpEndpoint;
  }
}

export class DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutes } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutesOutputReference {
    return new DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateInterfaceVirtualNetworkSingles {
  /**
  * Map of BGP Peering (Generic System) primitives
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#bgp_peering_generic_systems DatacenterConnectivityTemplateInterface#bgp_peering_generic_systems}
  */
  readonly bgpPeeringGenericSystems?: { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystems } | cdktf.IResolvable;
  /**
  * Map of Static Route primitives
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#static_routes DatacenterConnectivityTemplateInterface#static_routes}
  */
  readonly staticRoutes?: { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutes } | cdktf.IResolvable;
  /**
  * Indicates whether the selected Virtual Network should be presented with an 802.1Q tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#tagged DatacenterConnectivityTemplateInterface#tagged}
  */
  readonly tagged: boolean | cdktf.IResolvable;
  /**
  * ID of the desired Virtual Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#virtual_network_id DatacenterConnectivityTemplateInterface#virtual_network_id}
  */
  readonly virtualNetworkId: string;
}

export function datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesToTerraform(struct?: DatacenterConnectivityTemplateInterfaceVirtualNetworkSingles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_peering_generic_systems: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsToTerraform)(struct!.bgpPeeringGenericSystems),
    static_routes: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutesToTerraform)(struct!.staticRoutes),
    tagged: cdktf.booleanToTerraform(struct!.tagged),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}


export function datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesToHclTerraform(struct?: DatacenterConnectivityTemplateInterfaceVirtualNetworkSingles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_peering_generic_systems: {
      value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsToHclTerraform)(struct!.bgpPeeringGenericSystems),
      isBlock: true,
      type: "map",
      storageClassType: "DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsMap",
    },
    static_routes: {
      value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutesToHclTerraform)(struct!.staticRoutes),
      isBlock: true,
      type: "map",
      storageClassType: "DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutesMap",
    },
    tagged: {
      value: cdktf.booleanToHclTerraform(struct!.tagged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateInterfaceVirtualNetworkSingles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpPeeringGenericSystems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPeeringGenericSystems = this._bgpPeeringGenericSystems?.internalValue;
    }
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    if (this._tagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagged = this._tagged;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateInterfaceVirtualNetworkSingles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpPeeringGenericSystems.internalValue = undefined;
      this._staticRoutes.internalValue = undefined;
      this._tagged = undefined;
      this._virtualNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpPeeringGenericSystems.internalValue = value.bgpPeeringGenericSystems;
      this._staticRoutes.internalValue = value.staticRoutes;
      this._tagged = value.tagged;
      this._virtualNetworkId = value.virtualNetworkId;
    }
  }

  // batch_id - computed: true, optional: false, required: false
  public get batchId() {
    return this.getStringAttribute('batch_id');
  }

  // bgp_peering_generic_systems - computed: false, optional: true, required: false
  private _bgpPeeringGenericSystems = new DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystemsMap(this, "bgp_peering_generic_systems");
  public get bgpPeeringGenericSystems() {
    return this._bgpPeeringGenericSystems;
  }
  public putBgpPeeringGenericSystems(value: { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesBgpPeeringGenericSystems } | cdktf.IResolvable) {
    this._bgpPeeringGenericSystems.internalValue = value;
  }
  public resetBgpPeeringGenericSystems() {
    this._bgpPeeringGenericSystems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeeringGenericSystemsInput() {
    return this._bgpPeeringGenericSystems.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutesMap(this, "static_routes");
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesStaticRoutes } | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // tagged - computed: false, optional: false, required: true
  private _tagged?: boolean | cdktf.IResolvable; 
  public get tagged() {
    return this.getBooleanAttribute('tagged');
  }
  public set tagged(value: boolean | cdktf.IResolvable) {
    this._tagged = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedInput() {
    return this._tagged;
  }

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }
}

export class DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkSingles } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesOutputReference {
    return new DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface apstra_datacenter_connectivity_template_interface}
*/
export class DatacenterConnectivityTemplateInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_connectivity_template_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterConnectivityTemplateInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterConnectivityTemplateInterface to import
  * @param importFromId The id of the existing DatacenterConnectivityTemplateInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterConnectivityTemplateInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_connectivity_template_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_connectivity_template_interface apstra_datacenter_connectivity_template_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterConnectivityTemplateInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterConnectivityTemplateInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_connectivity_template_interface',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._description = config.description;
    this._ipLinks.internalValue = config.ipLinks;
    this._name = config.name;
    this._routingZoneConstraints.internalValue = config.routingZoneConstraints;
    this._tags = config.tags;
    this._virtualNetworkMultiples.internalValue = config.virtualNetworkMultiples;
    this._virtualNetworkSingles.internalValue = config.virtualNetworkSingles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_links - computed: false, optional: true, required: false
  private _ipLinks = new DatacenterConnectivityTemplateInterfaceIpLinksMap(this, "ip_links");
  public get ipLinks() {
    return this._ipLinks;
  }
  public putIpLinks(value: { [key: string]: DatacenterConnectivityTemplateInterfaceIpLinks } | cdktf.IResolvable) {
    this._ipLinks.internalValue = value;
  }
  public resetIpLinks() {
    this._ipLinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipLinksInput() {
    return this._ipLinks.internalValue;
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

  // routing_zone_constraints - computed: false, optional: true, required: false
  private _routingZoneConstraints = new DatacenterConnectivityTemplateInterfaceRoutingZoneConstraintsMap(this, "routing_zone_constraints");
  public get routingZoneConstraints() {
    return this._routingZoneConstraints;
  }
  public putRoutingZoneConstraints(value: { [key: string]: DatacenterConnectivityTemplateInterfaceRoutingZoneConstraints } | cdktf.IResolvable) {
    this._routingZoneConstraints.internalValue = value;
  }
  public resetRoutingZoneConstraints() {
    this._routingZoneConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZoneConstraintsInput() {
    return this._routingZoneConstraints.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // virtual_network_multiples - computed: false, optional: true, required: false
  private _virtualNetworkMultiples = new DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiplesMap(this, "virtual_network_multiples");
  public get virtualNetworkMultiples() {
    return this._virtualNetworkMultiples;
  }
  public putVirtualNetworkMultiples(value: { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiples } | cdktf.IResolvable) {
    this._virtualNetworkMultiples.internalValue = value;
  }
  public resetVirtualNetworkMultiples() {
    this._virtualNetworkMultiples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkMultiplesInput() {
    return this._virtualNetworkMultiples.internalValue;
  }

  // virtual_network_singles - computed: false, optional: true, required: false
  private _virtualNetworkSingles = new DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesMap(this, "virtual_network_singles");
  public get virtualNetworkSingles() {
    return this._virtualNetworkSingles;
  }
  public putVirtualNetworkSingles(value: { [key: string]: DatacenterConnectivityTemplateInterfaceVirtualNetworkSingles } | cdktf.IResolvable) {
    this._virtualNetworkSingles.internalValue = value;
  }
  public resetVirtualNetworkSingles() {
    this._virtualNetworkSingles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSinglesInput() {
    return this._virtualNetworkSingles.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      description: cdktf.stringToTerraform(this._description),
      ip_links: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceIpLinksToTerraform)(this._ipLinks.internalValue),
      name: cdktf.stringToTerraform(this._name),
      routing_zone_constraints: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceRoutingZoneConstraintsToTerraform)(this._routingZoneConstraints.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      virtual_network_multiples: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceVirtualNetworkMultiplesToTerraform)(this._virtualNetworkMultiples.internalValue),
      virtual_network_singles: cdktf.hashMapper(datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesToTerraform)(this._virtualNetworkSingles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_links: {
        value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceIpLinksToHclTerraform)(this._ipLinks.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DatacenterConnectivityTemplateInterfaceIpLinksMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_zone_constraints: {
        value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceRoutingZoneConstraintsToHclTerraform)(this._routingZoneConstraints.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DatacenterConnectivityTemplateInterfaceRoutingZoneConstraintsMap",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      virtual_network_multiples: {
        value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceVirtualNetworkMultiplesToHclTerraform)(this._virtualNetworkMultiples.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DatacenterConnectivityTemplateInterfaceVirtualNetworkMultiplesMap",
      },
      virtual_network_singles: {
        value: cdktf.hashMapperHcl(datacenterConnectivityTemplateInterfaceVirtualNetworkSinglesToHclTerraform)(this._virtualNetworkSingles.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DatacenterConnectivityTemplateInterfaceVirtualNetworkSinglesMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
