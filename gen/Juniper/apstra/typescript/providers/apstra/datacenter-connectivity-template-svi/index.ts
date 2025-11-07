// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterConnectivityTemplateSviConfig extends cdktf.TerraformMetaArguments {
  /**
  * Map of *BGP Peering (IP Endpoint)* Primitives in this Connectivity Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#bgp_peering_ip_endpoints DatacenterConnectivityTemplateSvi#bgp_peering_ip_endpoints}
  */
  readonly bgpPeeringIpEndpoints?: { [key: string]: DatacenterConnectivityTemplateSviBgpPeeringIpEndpoints } | cdktf.IResolvable;
  /**
  * Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#blueprint_id DatacenterConnectivityTemplateSvi#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Connectivity Template Description displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#description DatacenterConnectivityTemplateSvi#description}
  */
  readonly description?: string;
  /**
  * Map of *Dynamic BGP Peering* Primitives in this Connectivity Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#dynamic_bgp_peerings DatacenterConnectivityTemplateSvi#dynamic_bgp_peerings}
  */
  readonly dynamicBgpPeerings?: { [key: string]: DatacenterConnectivityTemplateSviDynamicBgpPeerings } | cdktf.IResolvable;
  /**
  * Connectivity Template Name displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#name DatacenterConnectivityTemplateSvi#name}
  */
  readonly name: string;
  /**
  * Set of Tags associated with this Connectivity Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#tags DatacenterConnectivityTemplateSvi#tags}
  */
  readonly tags?: string[];
}
export interface DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPolicies {
  /**
  * Routing Policy ID to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#routing_policy_id DatacenterConnectivityTemplateSvi#routing_policy_id}
  */
  readonly routingPolicyId: string;
}

export function datacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPoliciesToTerraform(struct?: DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_policy_id: cdktf.stringToTerraform(struct!.routingPolicyId),
  }
}


export function datacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPoliciesToHclTerraform(struct?: DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPolicies | cdktf.IResolvable): any {
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

export class DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPolicies | cdktf.IResolvable | undefined) {
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

export class DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPoliciesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPolicies } | cdktf.IResolvable

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
  public get(key: string): DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPoliciesOutputReference {
    return new DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateSviBgpPeeringIpEndpoints {
  /**
  * Enable BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#bfd_enabled DatacenterConnectivityTemplateSvi#bfd_enabled}
  */
  readonly bfdEnabled: boolean | cdktf.IResolvable;
  /**
  * BGP hold time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#hold_time DatacenterConnectivityTemplateSvi#hold_time}
  */
  readonly holdTime?: number;
  /**
  * IPv4 address of peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#ipv4_address DatacenterConnectivityTemplateSvi#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv6 address of peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#ipv6_address DatacenterConnectivityTemplateSvi#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * BGP keepalive time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#keepalive_time DatacenterConnectivityTemplateSvi#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * This feature is configured on a per-peer basis. It allows a router to appear to be a member of a second autonomous system (AS) by prepending a local-as AS number, in addition to its real AS number, announced to its eBGP peer, resulting in an AS path length of two.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#local_asn DatacenterConnectivityTemplateSvi#local_asn}
  */
  readonly localAsn?: number;
  /**
  * Neighbor ASN. Omit for *Neighbor ASN Type Dynamic*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#neighbor_asn DatacenterConnectivityTemplateSvi#neighbor_asn}
  */
  readonly neighborAsn?: number;
  /**
  * Password used to secure the BGP session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#password DatacenterConnectivityTemplateSvi#password}
  */
  readonly password?: string;
  /**
  * Map of Routing Policy Primitives to be used with this *Protocol Endpoint*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#routing_policies DatacenterConnectivityTemplateSvi#routing_policies}
  */
  readonly routingPolicies?: { [key: string]: DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPolicies } | cdktf.IResolvable;
  /**
  * BGP Time To Live. Omit to use device defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#ttl DatacenterConnectivityTemplateSvi#ttl}
  */
  readonly ttl?: number;
}

export function datacenterConnectivityTemplateSviBgpPeeringIpEndpointsToTerraform(struct?: DatacenterConnectivityTemplateSviBgpPeeringIpEndpoints | cdktf.IResolvable): any {
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
    routing_policies: cdktf.hashMapper(datacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPoliciesToTerraform)(struct!.routingPolicies),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function datacenterConnectivityTemplateSviBgpPeeringIpEndpointsToHclTerraform(struct?: DatacenterConnectivityTemplateSviBgpPeeringIpEndpoints | cdktf.IResolvable): any {
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
      value: cdktf.hashMapperHcl(datacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPoliciesToHclTerraform)(struct!.routingPolicies),
      isBlock: true,
      type: "map",
      storageClassType: "DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPoliciesMap",
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

export class DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatacenterConnectivityTemplateSviBgpPeeringIpEndpoints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatacenterConnectivityTemplateSviBgpPeeringIpEndpoints | cdktf.IResolvable | undefined) {
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
  private _routingPolicies = new DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPoliciesMap(this, "routing_policies");
  public get routingPolicies() {
    return this._routingPolicies;
  }
  public putRoutingPolicies(value: { [key: string]: DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsRoutingPolicies } | cdktf.IResolvable) {
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

export class DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateSviBgpPeeringIpEndpoints } | cdktf.IResolvable

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
  public get(key: string): DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsOutputReference {
    return new DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPolicies {
  /**
  * Routing Policy ID to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#routing_policy_id DatacenterConnectivityTemplateSvi#routing_policy_id}
  */
  readonly routingPolicyId: string;
}

export function datacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPoliciesToTerraform(struct?: DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_policy_id: cdktf.stringToTerraform(struct!.routingPolicyId),
  }
}


export function datacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPoliciesToHclTerraform(struct?: DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPolicies | cdktf.IResolvable): any {
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

export class DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPolicies | cdktf.IResolvable | undefined) {
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

export class DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPoliciesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPolicies } | cdktf.IResolvable

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
  public get(key: string): DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPoliciesOutputReference {
    return new DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DatacenterConnectivityTemplateSviDynamicBgpPeerings {
  /**
  * Enable BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#bfd_enabled DatacenterConnectivityTemplateSvi#bfd_enabled}
  */
  readonly bfdEnabled: boolean | cdktf.IResolvable;
  /**
  * BGP hold time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#hold_time DatacenterConnectivityTemplateSvi#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Enables peering with IPv4 neighbors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#ipv4_enabled DatacenterConnectivityTemplateSvi#ipv4_enabled}
  */
  readonly ipv4Enabled: boolean | cdktf.IResolvable;
  /**
  * IPv4 Subnet for BGP Prefix Dynamic Neighbors. Leave blank to derive subnet from application point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#ipv4_peer_prefix DatacenterConnectivityTemplateSvi#ipv4_peer_prefix}
  */
  readonly ipv4PeerPrefix?: string;
  /**
  * Enables peering with IPv6 neighbors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#ipv6_enabled DatacenterConnectivityTemplateSvi#ipv6_enabled}
  */
  readonly ipv6Enabled: boolean | cdktf.IResolvable;
  /**
  * IPv6 Subnet for BGP Prefix Dynamic Neighbors. Leave blank to derive subnet from application point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#ipv6_peer_prefix DatacenterConnectivityTemplateSvi#ipv6_peer_prefix}
  */
  readonly ipv6PeerPrefix?: string;
  /**
  * BGP keepalive time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#keepalive_time DatacenterConnectivityTemplateSvi#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * This feature is configured on a per-peer basis. It allows a router to appear to be a member of a second autonomous system (AS) by prepending a local-as AS number, in addition to its real AS number, announced to its eBGP peer, resulting in an AS path length of two.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#local_asn DatacenterConnectivityTemplateSvi#local_asn}
  */
  readonly localAsn?: number;
  /**
  * Password used to secure the BGP session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#password DatacenterConnectivityTemplateSvi#password}
  */
  readonly password?: string;
  /**
  * Map of Routing Policy Primitives to be used with this *Protocol Endpoint*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#routing_policies DatacenterConnectivityTemplateSvi#routing_policies}
  */
  readonly routingPolicies?: { [key: string]: DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPolicies } | cdktf.IResolvable;
  /**
  * BGP Time To Live. Omit to use device defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#ttl DatacenterConnectivityTemplateSvi#ttl}
  */
  readonly ttl?: number;
}

export function datacenterConnectivityTemplateSviDynamicBgpPeeringsToTerraform(struct?: DatacenterConnectivityTemplateSviDynamicBgpPeerings | cdktf.IResolvable): any {
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
    routing_policies: cdktf.hashMapper(datacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPoliciesToTerraform)(struct!.routingPolicies),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function datacenterConnectivityTemplateSviDynamicBgpPeeringsToHclTerraform(struct?: DatacenterConnectivityTemplateSviDynamicBgpPeerings | cdktf.IResolvable): any {
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
      value: cdktf.hashMapperHcl(datacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPoliciesToHclTerraform)(struct!.routingPolicies),
      isBlock: true,
      type: "map",
      storageClassType: "DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPoliciesMap",
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

export class DatacenterConnectivityTemplateSviDynamicBgpPeeringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatacenterConnectivityTemplateSviDynamicBgpPeerings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatacenterConnectivityTemplateSviDynamicBgpPeerings | cdktf.IResolvable | undefined) {
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
  private _routingPolicies = new DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPoliciesMap(this, "routing_policies");
  public get routingPolicies() {
    return this._routingPolicies;
  }
  public putRoutingPolicies(value: { [key: string]: DatacenterConnectivityTemplateSviDynamicBgpPeeringsRoutingPolicies } | cdktf.IResolvable) {
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

export class DatacenterConnectivityTemplateSviDynamicBgpPeeringsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateSviDynamicBgpPeerings } | cdktf.IResolvable

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
  public get(key: string): DatacenterConnectivityTemplateSviDynamicBgpPeeringsOutputReference {
    return new DatacenterConnectivityTemplateSviDynamicBgpPeeringsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi apstra_datacenter_connectivity_template_svi}
*/
export class DatacenterConnectivityTemplateSvi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_connectivity_template_svi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterConnectivityTemplateSvi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterConnectivityTemplateSvi to import
  * @param importFromId The id of the existing DatacenterConnectivityTemplateSvi that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterConnectivityTemplateSvi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_connectivity_template_svi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_svi apstra_datacenter_connectivity_template_svi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterConnectivityTemplateSviConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterConnectivityTemplateSviConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_connectivity_template_svi',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpPeeringIpEndpoints.internalValue = config.bgpPeeringIpEndpoints;
    this._blueprintId = config.blueprintId;
    this._description = config.description;
    this._dynamicBgpPeerings.internalValue = config.dynamicBgpPeerings;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_peering_ip_endpoints - computed: false, optional: true, required: false
  private _bgpPeeringIpEndpoints = new DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsMap(this, "bgp_peering_ip_endpoints");
  public get bgpPeeringIpEndpoints() {
    return this._bgpPeeringIpEndpoints;
  }
  public putBgpPeeringIpEndpoints(value: { [key: string]: DatacenterConnectivityTemplateSviBgpPeeringIpEndpoints } | cdktf.IResolvable) {
    this._bgpPeeringIpEndpoints.internalValue = value;
  }
  public resetBgpPeeringIpEndpoints() {
    this._bgpPeeringIpEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeeringIpEndpointsInput() {
    return this._bgpPeeringIpEndpoints.internalValue;
  }

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

  // dynamic_bgp_peerings - computed: false, optional: true, required: false
  private _dynamicBgpPeerings = new DatacenterConnectivityTemplateSviDynamicBgpPeeringsMap(this, "dynamic_bgp_peerings");
  public get dynamicBgpPeerings() {
    return this._dynamicBgpPeerings;
  }
  public putDynamicBgpPeerings(value: { [key: string]: DatacenterConnectivityTemplateSviDynamicBgpPeerings } | cdktf.IResolvable) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bgp_peering_ip_endpoints: cdktf.hashMapper(datacenterConnectivityTemplateSviBgpPeeringIpEndpointsToTerraform)(this._bgpPeeringIpEndpoints.internalValue),
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      description: cdktf.stringToTerraform(this._description),
      dynamic_bgp_peerings: cdktf.hashMapper(datacenterConnectivityTemplateSviDynamicBgpPeeringsToTerraform)(this._dynamicBgpPeerings.internalValue),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_peering_ip_endpoints: {
        value: cdktf.hashMapperHcl(datacenterConnectivityTemplateSviBgpPeeringIpEndpointsToHclTerraform)(this._bgpPeeringIpEndpoints.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DatacenterConnectivityTemplateSviBgpPeeringIpEndpointsMap",
      },
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
      dynamic_bgp_peerings: {
        value: cdktf.hashMapperHcl(datacenterConnectivityTemplateSviDynamicBgpPeeringsToHclTerraform)(this._dynamicBgpPeerings.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DatacenterConnectivityTemplateSviDynamicBgpPeeringsMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
