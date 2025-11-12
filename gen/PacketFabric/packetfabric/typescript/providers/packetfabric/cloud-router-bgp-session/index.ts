// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRouterBgpSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether this instance is IPv4 or IPv6. At this time, only IPv4 is supported.
  * 
  * 	Enum: "v4" "v6" Defaults: v4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#address_family CloudRouterBgpSession#address_family}
  */
  readonly addressFamily?: string;
  /**
  * The BGP prepend value for this instance. It is used when type = out.
  * 
  * 	Available range is 1 through 5. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#as_prepend CloudRouterBgpSession#as_prepend}
  */
  readonly asPrepend?: number;
  /**
  * If you are using BFD, this is the interval (in milliseconds) at which to send test packets to peers.
  * 
  * 	Available range is 3 through 30000. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#bfd_interval CloudRouterBgpSession#bfd_interval}
  */
  readonly bfdInterval?: number;
  /**
  * If you are using BFD, this is the number of consecutive packets that can be lost before BFD considers a peer down and shuts down BGP.
  * 
  * 	Available range is 2 through 16. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#bfd_multiplier CloudRouterBgpSession#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Circuit ID of the target cloud router. This starts with "PF-L3-CUST-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#circuit_id CloudRouterBgpSession#circuit_id}
  */
  readonly circuitId: string;
  /**
  * The circuit ID of the connection associated with the BGP session. This starts with "PF-L3-CON-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#connection_id CloudRouterBgpSession#connection_id}
  */
  readonly connectionId: string;
  /**
  * Whether this BGP session is disabled. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#disabled CloudRouterBgpSession#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Set this to true to Enable Quick Internet to announce more specific default-route to customer. Defaults: falseDefaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#include_sub_defaults CloudRouterBgpSession#include_sub_defaults}
  */
  readonly includeSubDefaults?: boolean | cdktf.IResolvable;
  /**
  * The L3 address of this instance. Not used for Azure connections. Required for all other CSP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#l3_address CloudRouterBgpSession#l3_address}
  */
  readonly l3Address?: string;
  /**
  * The local preference for this instance. When the same route is received in multiple locations, those with a higher local preference value are preferred by the cloud router. It is used when type = in.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#local_preference CloudRouterBgpSession#local_preference}
  */
  readonly localPreference?: number;
  /**
  * The MD5 value of the authenticated BGP sessions. Required for AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#md5 CloudRouterBgpSession#md5}
  */
  readonly md5?: string;
  /**
  * The Multi-Exit Discriminator of this instance. When the same route is advertised in multiple locations, those with a lower MED are preferred by the peer AS. It is used when type = out.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#med CloudRouterBgpSession#med}
  */
  readonly med?: number;
  /**
  * The TTL of this session. For Google Cloud connections, see [the PacketFabric doc](https://docs.packetfabric.com/cr/bgp/bgp_google/#ttl).
  * 
  * 	Available range is 1 through 4. Defaults: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#multihop_ttl CloudRouterBgpSession#multihop_ttl}
  */
  readonly multihopTtl?: number;
  /**
  * Whether to use exact match or longer for all prefixes. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#orlonger CloudRouterBgpSession#orlonger}
  */
  readonly orlonger?: boolean | cdktf.IResolvable;
  /**
  * Currently for Azure use only. Provide this as the primary subnet when creating the primary Azure cloud router connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#primary_subnet CloudRouterBgpSession#primary_subnet}
  */
  readonly primarySubnet?: string;
  /**
  * The cloud-side router peer IP. Not used for Azure connections. Required for all other CSP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#remote_address CloudRouterBgpSession#remote_address}
  */
  readonly remoteAddress?: string;
  /**
  * The cloud-side ASN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#remote_asn CloudRouterBgpSession#remote_asn}
  */
  readonly remoteAsn: number;
  /**
  * Currently for Azure use only. Provide this as the secondary subnet when creating the secondary Azure cloud router connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#secondary_subnet CloudRouterBgpSession#secondary_subnet}
  */
  readonly secondarySubnet?: string;
  /**
  * nat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#nat CloudRouterBgpSession#nat}
  */
  readonly nat?: CloudRouterBgpSessionNat;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#prefixes CloudRouterBgpSession#prefixes}
  */
  readonly prefixes: CloudRouterBgpSessionPrefixes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#timeouts CloudRouterBgpSession#timeouts}
  */
  readonly timeouts?: CloudRouterBgpSessionTimeouts;
}
export interface CloudRouterBgpSessionNatDnatMappings {
  /**
  * Post-translation prefix must be equal to or included within the conditional IP prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#conditional_prefix CloudRouterBgpSession#conditional_prefix}
  */
  readonly conditionalPrefix?: string;
  /**
  * Post-translation IP prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#private_prefix CloudRouterBgpSession#private_prefix}
  */
  readonly privatePrefix: string;
  /**
  * Pre-translation IP prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#public_prefix CloudRouterBgpSession#public_prefix}
  */
  readonly publicPrefix: string;
}

export function cloudRouterBgpSessionNatDnatMappingsToTerraform(struct?: CloudRouterBgpSessionNatDnatMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_prefix: cdktf.stringToTerraform(struct!.conditionalPrefix),
    private_prefix: cdktf.stringToTerraform(struct!.privatePrefix),
    public_prefix: cdktf.stringToTerraform(struct!.publicPrefix),
  }
}


export function cloudRouterBgpSessionNatDnatMappingsToHclTerraform(struct?: CloudRouterBgpSessionNatDnatMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_prefix: {
      value: cdktf.stringToHclTerraform(struct!.conditionalPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_prefix: {
      value: cdktf.stringToHclTerraform(struct!.privatePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_prefix: {
      value: cdktf.stringToHclTerraform(struct!.publicPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterBgpSessionNatDnatMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRouterBgpSessionNatDnatMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionalPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalPrefix = this._conditionalPrefix;
    }
    if (this._privatePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatePrefix = this._privatePrefix;
    }
    if (this._publicPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPrefix = this._publicPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterBgpSessionNatDnatMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionalPrefix = undefined;
      this._privatePrefix = undefined;
      this._publicPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionalPrefix = value.conditionalPrefix;
      this._privatePrefix = value.privatePrefix;
      this._publicPrefix = value.publicPrefix;
    }
  }

  // conditional_prefix - computed: false, optional: true, required: false
  private _conditionalPrefix?: string; 
  public get conditionalPrefix() {
    return this.getStringAttribute('conditional_prefix');
  }
  public set conditionalPrefix(value: string) {
    this._conditionalPrefix = value;
  }
  public resetConditionalPrefix() {
    this._conditionalPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalPrefixInput() {
    return this._conditionalPrefix;
  }

  // private_prefix - computed: false, optional: false, required: true
  private _privatePrefix?: string; 
  public get privatePrefix() {
    return this.getStringAttribute('private_prefix');
  }
  public set privatePrefix(value: string) {
    this._privatePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePrefixInput() {
    return this._privatePrefix;
  }

  // public_prefix - computed: false, optional: false, required: true
  private _publicPrefix?: string; 
  public get publicPrefix() {
    return this.getStringAttribute('public_prefix');
  }
  public set publicPrefix(value: string) {
    this._publicPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPrefixInput() {
    return this._publicPrefix;
  }
}

export class CloudRouterBgpSessionNatDnatMappingsList extends cdktf.ComplexList {
  public internalValue? : CloudRouterBgpSessionNatDnatMappings[] | cdktf.IResolvable

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
  public get(index: number): CloudRouterBgpSessionNatDnatMappingsOutputReference {
    return new CloudRouterBgpSessionNatDnatMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRouterBgpSessionNat {
  /**
  * If using NAT overload, the direction of the NAT connection (input=ingress, output=egress). 
  * 		Enum: output, input. Defaults: output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#direction CloudRouterBgpSession#direction}
  */
  readonly direction?: string;
  /**
  * The NAT type of the NAT connection, source NAT (overload) or destination NAT (inline_dnat). 
  * 		Enum: overload, inline_dnat. Defaults: overload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#nat_type CloudRouterBgpSession#nat_type}
  */
  readonly natType?: string;
  /**
  * If using NAT overload, all prefixes that are NATed on this connection will be translated to the pool prefix address.
  * 
  * 	Example: 10.0.0.0/32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#pool_prefixes CloudRouterBgpSession#pool_prefixes}
  */
  readonly poolPrefixes?: string[];
  /**
  * If using NAT overload, this is the prefixes from the cloud that you want to associate with the NAT pool.
  * 
  * 	Example: 10.0.0.0/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#pre_nat_sources CloudRouterBgpSession#pre_nat_sources}
  */
  readonly preNatSources?: string[];
  /**
  * dnat_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#dnat_mappings CloudRouterBgpSession#dnat_mappings}
  */
  readonly dnatMappings?: CloudRouterBgpSessionNatDnatMappings[] | cdktf.IResolvable;
}

export function cloudRouterBgpSessionNatToTerraform(struct?: CloudRouterBgpSessionNatOutputReference | CloudRouterBgpSessionNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    nat_type: cdktf.stringToTerraform(struct!.natType),
    pool_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolPrefixes),
    pre_nat_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preNatSources),
    dnat_mappings: cdktf.listMapper(cloudRouterBgpSessionNatDnatMappingsToTerraform, true)(struct!.dnatMappings),
  }
}


export function cloudRouterBgpSessionNatToHclTerraform(struct?: CloudRouterBgpSessionNatOutputReference | CloudRouterBgpSessionNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_type: {
      value: cdktf.stringToHclTerraform(struct!.natType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.poolPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pre_nat_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preNatSources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dnat_mappings: {
      value: cdktf.listMapperHcl(cloudRouterBgpSessionNatDnatMappingsToHclTerraform, true)(struct!.dnatMappings),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRouterBgpSessionNatDnatMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterBgpSessionNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRouterBgpSessionNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._natType !== undefined) {
      hasAnyValues = true;
      internalValueResult.natType = this._natType;
    }
    if (this._poolPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolPrefixes = this._poolPrefixes;
    }
    if (this._preNatSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.preNatSources = this._preNatSources;
    }
    if (this._dnatMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnatMappings = this._dnatMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterBgpSessionNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._natType = undefined;
      this._poolPrefixes = undefined;
      this._preNatSources = undefined;
      this._dnatMappings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._natType = value.natType;
      this._poolPrefixes = value.poolPrefixes;
      this._preNatSources = value.preNatSources;
      this._dnatMappings.internalValue = value.dnatMappings;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // nat_type - computed: false, optional: true, required: false
  private _natType?: string; 
  public get natType() {
    return this.getStringAttribute('nat_type');
  }
  public set natType(value: string) {
    this._natType = value;
  }
  public resetNatType() {
    this._natType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTypeInput() {
    return this._natType;
  }

  // pool_prefixes - computed: false, optional: true, required: false
  private _poolPrefixes?: string[]; 
  public get poolPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('pool_prefixes'));
  }
  public set poolPrefixes(value: string[]) {
    this._poolPrefixes = value;
  }
  public resetPoolPrefixes() {
    this._poolPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolPrefixesInput() {
    return this._poolPrefixes;
  }

  // pre_nat_sources - computed: false, optional: true, required: false
  private _preNatSources?: string[]; 
  public get preNatSources() {
    return cdktf.Fn.tolist(this.getListAttribute('pre_nat_sources'));
  }
  public set preNatSources(value: string[]) {
    this._preNatSources = value;
  }
  public resetPreNatSources() {
    this._preNatSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preNatSourcesInput() {
    return this._preNatSources;
  }

  // dnat_mappings - computed: false, optional: true, required: false
  private _dnatMappings = new CloudRouterBgpSessionNatDnatMappingsList(this, "dnat_mappings", true);
  public get dnatMappings() {
    return this._dnatMappings;
  }
  public putDnatMappings(value: CloudRouterBgpSessionNatDnatMappings[] | cdktf.IResolvable) {
    this._dnatMappings.internalValue = value;
  }
  public resetDnatMappings() {
    this._dnatMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnatMappingsInput() {
    return this._dnatMappings.internalValue;
  }
}
export interface CloudRouterBgpSessionPrefixes {
  /**
  * The BGP prepend value of this prefix. It is used when type = out.
  * 
  * 	Available range is 1 through 5. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#as_prepend CloudRouterBgpSession#as_prepend}
  */
  readonly asPrepend?: number;
  /**
  * The local_preference of this prefix. It is used when type = in.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#local_preference CloudRouterBgpSession#local_preference}
  */
  readonly localPreference?: number;
  /**
  * The match type of this prefix.
  * 
  * 	Enum: `"exact"` `"orlonger"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#match_type CloudRouterBgpSession#match_type}
  */
  readonly matchType?: string;
  /**
  * The MED of this prefix. It is used when type = out.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#med CloudRouterBgpSession#med}
  */
  readonly med?: number;
  /**
  * The actual IP Prefix of this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#prefix CloudRouterBgpSession#prefix}
  */
  readonly prefix: string;
  /**
  * Whether this prefix is in (Allowed Prefixes from Cloud) or out (Allowed Prefixes to Cloud).
  * 		Enum: in, out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#type CloudRouterBgpSession#type}
  */
  readonly type: string;
}

export function cloudRouterBgpSessionPrefixesToTerraform(struct?: CloudRouterBgpSessionPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_prepend: cdktf.numberToTerraform(struct!.asPrepend),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    med: cdktf.numberToTerraform(struct!.med),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudRouterBgpSessionPrefixesToHclTerraform(struct?: CloudRouterBgpSessionPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_prepend: {
      value: cdktf.numberToHclTerraform(struct!.asPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    med: {
      value: cdktf.numberToHclTerraform(struct!.med),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class CloudRouterBgpSessionPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRouterBgpSessionPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPrepend = this._asPrepend;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._med !== undefined) {
      hasAnyValues = true;
      internalValueResult.med = this._med;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterBgpSessionPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPrepend = undefined;
      this._localPreference = undefined;
      this._matchType = undefined;
      this._med = undefined;
      this._prefix = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPrepend = value.asPrepend;
      this._localPreference = value.localPreference;
      this._matchType = value.matchType;
      this._med = value.med;
      this._prefix = value.prefix;
      this._type = value.type;
    }
  }

  // as_prepend - computed: false, optional: true, required: false
  private _asPrepend?: number; 
  public get asPrepend() {
    return this.getNumberAttribute('as_prepend');
  }
  public set asPrepend(value: number) {
    this._asPrepend = value;
  }
  public resetAsPrepend() {
    this._asPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPrependInput() {
    return this._asPrepend;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // med - computed: false, optional: true, required: false
  private _med?: number; 
  public get med() {
    return this.getNumberAttribute('med');
  }
  public set med(value: number) {
    this._med = value;
  }
  public resetMed() {
    this._med = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInput() {
    return this._med;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudRouterBgpSessionPrefixesList extends cdktf.ComplexList {
  public internalValue? : CloudRouterBgpSessionPrefixes[] | cdktf.IResolvable

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
  public get(index: number): CloudRouterBgpSessionPrefixesOutputReference {
    return new CloudRouterBgpSessionPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRouterBgpSessionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#create CloudRouterBgpSession#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#delete CloudRouterBgpSession#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#read CloudRouterBgpSession#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#update CloudRouterBgpSession#update}
  */
  readonly update?: string;
}

export function cloudRouterBgpSessionTimeoutsToTerraform(struct?: CloudRouterBgpSessionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudRouterBgpSessionTimeoutsToHclTerraform(struct?: CloudRouterBgpSessionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterBgpSessionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudRouterBgpSessionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterBgpSessionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session packetfabric_cloud_router_bgp_session}
*/
export class CloudRouterBgpSession extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cloud_router_bgp_session";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudRouterBgpSession resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudRouterBgpSession to import
  * @param importFromId The id of the existing CloudRouterBgpSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudRouterBgpSession to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cloud_router_bgp_session", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_bgp_session packetfabric_cloud_router_bgp_session} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudRouterBgpSessionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudRouterBgpSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cloud_router_bgp_session',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3',
        providerVersionConstraint: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressFamily = config.addressFamily;
    this._asPrepend = config.asPrepend;
    this._bfdInterval = config.bfdInterval;
    this._bfdMultiplier = config.bfdMultiplier;
    this._circuitId = config.circuitId;
    this._connectionId = config.connectionId;
    this._disabled = config.disabled;
    this._includeSubDefaults = config.includeSubDefaults;
    this._l3Address = config.l3Address;
    this._localPreference = config.localPreference;
    this._md5 = config.md5;
    this._med = config.med;
    this._multihopTtl = config.multihopTtl;
    this._orlonger = config.orlonger;
    this._primarySubnet = config.primarySubnet;
    this._remoteAddress = config.remoteAddress;
    this._remoteAsn = config.remoteAsn;
    this._secondarySubnet = config.secondarySubnet;
    this._nat.internalValue = config.nat;
    this._prefixes.internalValue = config.prefixes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: true, required: false
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  public resetAddressFamily() {
    this._addressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // as_prepend - computed: false, optional: true, required: false
  private _asPrepend?: number; 
  public get asPrepend() {
    return this.getNumberAttribute('as_prepend');
  }
  public set asPrepend(value: number) {
    this._asPrepend = value;
  }
  public resetAsPrepend() {
    this._asPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPrependInput() {
    return this._asPrepend;
  }

  // bfd_interval - computed: false, optional: true, required: false
  private _bfdInterval?: number; 
  public get bfdInterval() {
    return this.getNumberAttribute('bfd_interval');
  }
  public set bfdInterval(value: number) {
    this._bfdInterval = value;
  }
  public resetBfdInterval() {
    this._bfdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIntervalInput() {
    return this._bfdInterval;
  }

  // bfd_multiplier - computed: false, optional: true, required: false
  private _bfdMultiplier?: number; 
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }
  public set bfdMultiplier(value: number) {
    this._bfdMultiplier = value;
  }
  public resetBfdMultiplier() {
    this._bfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMultiplierInput() {
    return this._bfdMultiplier;
  }

  // circuit_id - computed: false, optional: false, required: true
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_sub_defaults - computed: false, optional: true, required: false
  private _includeSubDefaults?: boolean | cdktf.IResolvable; 
  public get includeSubDefaults() {
    return this.getBooleanAttribute('include_sub_defaults');
  }
  public set includeSubDefaults(value: boolean | cdktf.IResolvable) {
    this._includeSubDefaults = value;
  }
  public resetIncludeSubDefaults() {
    this._includeSubDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubDefaultsInput() {
    return this._includeSubDefaults;
  }

  // l3_address - computed: false, optional: true, required: false
  private _l3Address?: string; 
  public get l3Address() {
    return this.getStringAttribute('l3_address');
  }
  public set l3Address(value: string) {
    this._l3Address = value;
  }
  public resetL3Address() {
    this._l3Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3AddressInput() {
    return this._l3Address;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // md5 - computed: false, optional: true, required: false
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  public resetMd5() {
    this._md5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
  }

  // med - computed: false, optional: true, required: false
  private _med?: number; 
  public get med() {
    return this.getNumberAttribute('med');
  }
  public set med(value: number) {
    this._med = value;
  }
  public resetMed() {
    this._med = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInput() {
    return this._med;
  }

  // multihop_ttl - computed: false, optional: true, required: false
  private _multihopTtl?: number; 
  public get multihopTtl() {
    return this.getNumberAttribute('multihop_ttl');
  }
  public set multihopTtl(value: number) {
    this._multihopTtl = value;
  }
  public resetMultihopTtl() {
    this._multihopTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihopTtlInput() {
    return this._multihopTtl;
  }

  // orlonger - computed: false, optional: true, required: false
  private _orlonger?: boolean | cdktf.IResolvable; 
  public get orlonger() {
    return this.getBooleanAttribute('orlonger');
  }
  public set orlonger(value: boolean | cdktf.IResolvable) {
    this._orlonger = value;
  }
  public resetOrlonger() {
    this._orlonger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orlongerInput() {
    return this._orlonger;
  }

  // primary_subnet - computed: false, optional: true, required: false
  private _primarySubnet?: string; 
  public get primarySubnet() {
    return this.getStringAttribute('primary_subnet');
  }
  public set primarySubnet(value: string) {
    this._primarySubnet = value;
  }
  public resetPrimarySubnet() {
    this._primarySubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySubnetInput() {
    return this._primarySubnet;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // remote_asn - computed: false, optional: false, required: true
  private _remoteAsn?: number; 
  public get remoteAsn() {
    return this.getNumberAttribute('remote_asn');
  }
  public set remoteAsn(value: number) {
    this._remoteAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsnInput() {
    return this._remoteAsn;
  }

  // secondary_subnet - computed: false, optional: true, required: false
  private _secondarySubnet?: string; 
  public get secondarySubnet() {
    return this.getStringAttribute('secondary_subnet');
  }
  public set secondarySubnet(value: string) {
    this._secondarySubnet = value;
  }
  public resetSecondarySubnet() {
    this._secondarySubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySubnetInput() {
    return this._secondarySubnet;
  }

  // nat - computed: false, optional: true, required: false
  private _nat = new CloudRouterBgpSessionNatOutputReference(this, "nat");
  public get nat() {
    return this._nat;
  }
  public putNat(value: CloudRouterBgpSessionNat) {
    this._nat.internalValue = value;
  }
  public resetNat() {
    this._nat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat.internalValue;
  }

  // prefixes - computed: false, optional: false, required: true
  private _prefixes = new CloudRouterBgpSessionPrefixesList(this, "prefixes", true);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: CloudRouterBgpSessionPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudRouterBgpSessionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudRouterBgpSessionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: cdktf.stringToTerraform(this._addressFamily),
      as_prepend: cdktf.numberToTerraform(this._asPrepend),
      bfd_interval: cdktf.numberToTerraform(this._bfdInterval),
      bfd_multiplier: cdktf.numberToTerraform(this._bfdMultiplier),
      circuit_id: cdktf.stringToTerraform(this._circuitId),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      include_sub_defaults: cdktf.booleanToTerraform(this._includeSubDefaults),
      l3_address: cdktf.stringToTerraform(this._l3Address),
      local_preference: cdktf.numberToTerraform(this._localPreference),
      md5: cdktf.stringToTerraform(this._md5),
      med: cdktf.numberToTerraform(this._med),
      multihop_ttl: cdktf.numberToTerraform(this._multihopTtl),
      orlonger: cdktf.booleanToTerraform(this._orlonger),
      primary_subnet: cdktf.stringToTerraform(this._primarySubnet),
      remote_address: cdktf.stringToTerraform(this._remoteAddress),
      remote_asn: cdktf.numberToTerraform(this._remoteAsn),
      secondary_subnet: cdktf.stringToTerraform(this._secondarySubnet),
      nat: cloudRouterBgpSessionNatToTerraform(this._nat.internalValue),
      prefixes: cdktf.listMapper(cloudRouterBgpSessionPrefixesToTerraform, true)(this._prefixes.internalValue),
      timeouts: cloudRouterBgpSessionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_family: {
        value: cdktf.stringToHclTerraform(this._addressFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_prepend: {
        value: cdktf.numberToHclTerraform(this._asPrepend),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_interval: {
        value: cdktf.numberToHclTerraform(this._bfdInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_multiplier: {
        value: cdktf.numberToHclTerraform(this._bfdMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      circuit_id: {
        value: cdktf.stringToHclTerraform(this._circuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_sub_defaults: {
        value: cdktf.booleanToHclTerraform(this._includeSubDefaults),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l3_address: {
        value: cdktf.stringToHclTerraform(this._l3Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_preference: {
        value: cdktf.numberToHclTerraform(this._localPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      md5: {
        value: cdktf.stringToHclTerraform(this._md5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      med: {
        value: cdktf.numberToHclTerraform(this._med),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multihop_ttl: {
        value: cdktf.numberToHclTerraform(this._multihopTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      orlonger: {
        value: cdktf.booleanToHclTerraform(this._orlonger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_subnet: {
        value: cdktf.stringToHclTerraform(this._primarySubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_address: {
        value: cdktf.stringToHclTerraform(this._remoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_asn: {
        value: cdktf.numberToHclTerraform(this._remoteAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_subnet: {
        value: cdktf.stringToHclTerraform(this._secondarySubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat: {
        value: cloudRouterBgpSessionNatToHclTerraform(this._nat.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudRouterBgpSessionNatList",
      },
      prefixes: {
        value: cdktf.listMapperHcl(cloudRouterBgpSessionPrefixesToHclTerraform, true)(this._prefixes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudRouterBgpSessionPrefixesList",
      },
      timeouts: {
        value: cloudRouterBgpSessionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudRouterBgpSessionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
