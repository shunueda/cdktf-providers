// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyTier0GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default rule logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#default_rule_logging PolicyTier0Gateway#default_rule_logging}
  */
  readonly defaultRuleLogging?: boolean | cdktf.IResolvable;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#description PolicyTier0Gateway#description}
  */
  readonly description?: string;
  /**
  * Policy path to DHCP server or relay configuration to use for this Tier0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#dhcp_config_path PolicyTier0Gateway#dhcp_config_path}
  */
  readonly dhcpConfigPath?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#display_name PolicyTier0Gateway#display_name}
  */
  readonly displayName: string;
  /**
  * The path of the edge cluster connected to this gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#edge_cluster_path PolicyTier0Gateway#edge_cluster_path}
  */
  readonly edgeClusterPath?: string;
  /**
  * Enable edge firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#enable_firewall PolicyTier0Gateway#enable_firewall}
  */
  readonly enableFirewall?: boolean | cdktf.IResolvable;
  /**
  * Enable distinct route distinguisher per edge node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#enable_rd_per_edge PolicyTier0Gateway#enable_rd_per_edge}
  */
  readonly enableRdPerEdge?: boolean | cdktf.IResolvable;
  /**
  * Failover mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#failover_mode PolicyTier0Gateway#failover_mode}
  */
  readonly failoverMode?: string;
  /**
  * Force whitelisting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#force_whitelisting PolicyTier0Gateway#force_whitelisting}
  */
  readonly forceWhitelisting?: boolean | cdktf.IResolvable;
  /**
  * High-availability Mode for Tier-0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#ha_mode PolicyTier0Gateway#ha_mode}
  */
  readonly haMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#id PolicyTier0Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Internal transit subnets in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#internal_transit_subnets PolicyTier0Gateway#internal_transit_subnets}
  */
  readonly internalTransitSubnets?: string[];
  /**
  * The path of an IPv6 DAD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#ipv6_dad_profile_path PolicyTier0Gateway#ipv6_dad_profile_path}
  */
  readonly ipv6DadProfilePath?: string;
  /**
  * The path of an IPv6 NDRA profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#ipv6_ndra_profile_path PolicyTier0Gateway#ipv6_ndra_profile_path}
  */
  readonly ipv6NdraProfilePath?: string;
  /**
  * Flag to control multi VRF inter SR. This is one time toggle flag and can't be disabled once enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#multi_vrf_inter_sr PolicyTier0Gateway#multi_vrf_inter_sr}
  */
  readonly multiVrfInterSr?: boolean | cdktf.IResolvable;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#nsx_id PolicyTier0Gateway#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Route distinguisher administrator address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#rd_admin_address PolicyTier0Gateway#rd_admin_address}
  */
  readonly rdAdminAddress?: string;
  /**
  * Transit subnets in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#transit_subnets PolicyTier0Gateway#transit_subnets}
  */
  readonly transitSubnets?: string[];
  /**
  * VRF transit subnets in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#vrf_transit_subnets PolicyTier0Gateway#vrf_transit_subnets}
  */
  readonly vrfTransitSubnets?: string[];
  /**
  * advanced_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#advanced_config PolicyTier0Gateway#advanced_config}
  */
  readonly advancedConfig?: PolicyTier0GatewayAdvancedConfig;
  /**
  * bgp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#bgp_config PolicyTier0Gateway#bgp_config}
  */
  readonly bgpConfig?: PolicyTier0GatewayBgpConfig;
  /**
  * intersite_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#intersite_config PolicyTier0Gateway#intersite_config}
  */
  readonly intersiteConfig?: PolicyTier0GatewayIntersiteConfig;
  /**
  * locale_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#locale_service PolicyTier0Gateway#locale_service}
  */
  readonly localeService?: PolicyTier0GatewayLocaleService[] | cdktf.IResolvable;
  /**
  * redistribution_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#redistribution_config PolicyTier0Gateway#redistribution_config}
  */
  readonly redistributionConfig?: PolicyTier0GatewayRedistributionConfig;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#tag PolicyTier0Gateway#tag}
  */
  readonly tag?: PolicyTier0GatewayTag[] | cdktf.IResolvable;
  /**
  * vrf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#vrf_config PolicyTier0Gateway#vrf_config}
  */
  readonly vrfConfig?: PolicyTier0GatewayVrfConfig;
}
export interface PolicyTier0GatewayAdvancedConfig {
  /**
  * Connectivity configuration to manually connect Tier-0/Tier1 segment from corresponding gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#connectivity PolicyTier0Gateway#connectivity}
  */
  readonly connectivity?: string;
  /**
  * Extra time in seconds the router must wait before sending the UP notification after the peer routing session is established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#forwarding_up_timer PolicyTier0Gateway#forwarding_up_timer}
  */
  readonly forwardingUpTimer?: number;
}

export function policyTier0GatewayAdvancedConfigToTerraform(struct?: PolicyTier0GatewayAdvancedConfigOutputReference | PolicyTier0GatewayAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivity: cdktf.stringToTerraform(struct!.connectivity),
    forwarding_up_timer: cdktf.numberToTerraform(struct!.forwardingUpTimer),
  }
}


export function policyTier0GatewayAdvancedConfigToHclTerraform(struct?: PolicyTier0GatewayAdvancedConfigOutputReference | PolicyTier0GatewayAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connectivity: {
      value: cdktf.stringToHclTerraform(struct!.connectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarding_up_timer: {
      value: cdktf.numberToHclTerraform(struct!.forwardingUpTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayAdvancedConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyTier0GatewayAdvancedConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity;
    }
    if (this._forwardingUpTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingUpTimer = this._forwardingUpTimer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayAdvancedConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivity = undefined;
      this._forwardingUpTimer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivity = value.connectivity;
      this._forwardingUpTimer = value.forwardingUpTimer;
    }
  }

  // connectivity - computed: true, optional: true, required: false
  private _connectivity?: string; 
  public get connectivity() {
    return this.getStringAttribute('connectivity');
  }
  public set connectivity(value: string) {
    this._connectivity = value;
  }
  public resetConnectivity() {
    this._connectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity;
  }

  // forwarding_up_timer - computed: true, optional: true, required: false
  private _forwardingUpTimer?: number; 
  public get forwardingUpTimer() {
    return this.getNumberAttribute('forwarding_up_timer');
  }
  public set forwardingUpTimer(value: number) {
    this._forwardingUpTimer = value;
  }
  public resetForwardingUpTimer() {
    this._forwardingUpTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingUpTimerInput() {
    return this._forwardingUpTimer;
  }
}
export interface PolicyTier0GatewayBgpConfigRouteAggregation {
  /**
  * CIDR of aggregate address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#prefix PolicyTier0Gateway#prefix}
  */
  readonly prefix?: string;
  /**
  * Send only summarized route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#summary_only PolicyTier0Gateway#summary_only}
  */
  readonly summaryOnly?: boolean | cdktf.IResolvable;
}

export function policyTier0GatewayBgpConfigRouteAggregationToTerraform(struct?: PolicyTier0GatewayBgpConfigRouteAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    summary_only: cdktf.booleanToTerraform(struct!.summaryOnly),
  }
}


export function policyTier0GatewayBgpConfigRouteAggregationToHclTerraform(struct?: PolicyTier0GatewayBgpConfigRouteAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary_only: {
      value: cdktf.booleanToHclTerraform(struct!.summaryOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayBgpConfigRouteAggregationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0GatewayBgpConfigRouteAggregation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._summaryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnly = this._summaryOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayBgpConfigRouteAggregation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._summaryOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._summaryOnly = value.summaryOnly;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // summary_only - computed: false, optional: true, required: false
  private _summaryOnly?: boolean | cdktf.IResolvable; 
  public get summaryOnly() {
    return this.getBooleanAttribute('summary_only');
  }
  public set summaryOnly(value: boolean | cdktf.IResolvable) {
    this._summaryOnly = value;
  }
  public resetSummaryOnly() {
    this._summaryOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryOnlyInput() {
    return this._summaryOnly;
  }
}

export class PolicyTier0GatewayBgpConfigRouteAggregationList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0GatewayBgpConfigRouteAggregation[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0GatewayBgpConfigRouteAggregationOutputReference {
    return new PolicyTier0GatewayBgpConfigRouteAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier0GatewayBgpConfigTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#scope PolicyTier0Gateway#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#tag PolicyTier0Gateway#tag}
  */
  readonly tag?: string;
}

export function policyTier0GatewayBgpConfigTagToTerraform(struct?: PolicyTier0GatewayBgpConfigTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyTier0GatewayBgpConfigTagToHclTerraform(struct?: PolicyTier0GatewayBgpConfigTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayBgpConfigTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0GatewayBgpConfigTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayBgpConfigTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyTier0GatewayBgpConfigTagList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0GatewayBgpConfigTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0GatewayBgpConfigTagOutputReference {
    return new PolicyTier0GatewayBgpConfigTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier0GatewayBgpConfig {
  /**
  * Flag to enable ECMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#ecmp PolicyTier0Gateway#ecmp}
  */
  readonly ecmp?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable BGP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#enabled PolicyTier0Gateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * BGP Graceful Restart Configuration Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#graceful_restart_mode PolicyTier0Gateway#graceful_restart_mode}
  */
  readonly gracefulRestartMode?: string;
  /**
  * BGP Stale Route Timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#graceful_restart_stale_route_timer PolicyTier0Gateway#graceful_restart_stale_route_timer}
  */
  readonly gracefulRestartStaleRouteTimer?: number;
  /**
  * BGP Graceful Restart Timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#graceful_restart_timer PolicyTier0Gateway#graceful_restart_timer}
  */
  readonly gracefulRestartTimer?: number;
  /**
  * Enable inter SR IBGP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#inter_sr_ibgp PolicyTier0Gateway#inter_sr_ibgp}
  */
  readonly interSrIbgp?: boolean | cdktf.IResolvable;
  /**
  * BGP AS number in ASPLAIN/ASDOT Format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#local_as_num PolicyTier0Gateway#local_as_num}
  */
  readonly localAsNum?: string;
  /**
  * Flag to enable BGP multipath relax option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#multipath_relax PolicyTier0Gateway#multipath_relax}
  */
  readonly multipathRelax?: boolean | cdktf.IResolvable;
  /**
  * route_aggregation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#route_aggregation PolicyTier0Gateway#route_aggregation}
  */
  readonly routeAggregation?: PolicyTier0GatewayBgpConfigRouteAggregation[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#tag PolicyTier0Gateway#tag}
  */
  readonly tag?: PolicyTier0GatewayBgpConfigTag[] | cdktf.IResolvable;
}

export function policyTier0GatewayBgpConfigToTerraform(struct?: PolicyTier0GatewayBgpConfigOutputReference | PolicyTier0GatewayBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ecmp: cdktf.booleanToTerraform(struct!.ecmp),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    graceful_restart_mode: cdktf.stringToTerraform(struct!.gracefulRestartMode),
    graceful_restart_stale_route_timer: cdktf.numberToTerraform(struct!.gracefulRestartStaleRouteTimer),
    graceful_restart_timer: cdktf.numberToTerraform(struct!.gracefulRestartTimer),
    inter_sr_ibgp: cdktf.booleanToTerraform(struct!.interSrIbgp),
    local_as_num: cdktf.stringToTerraform(struct!.localAsNum),
    multipath_relax: cdktf.booleanToTerraform(struct!.multipathRelax),
    route_aggregation: cdktf.listMapper(policyTier0GatewayBgpConfigRouteAggregationToTerraform, true)(struct!.routeAggregation),
    tag: cdktf.listMapper(policyTier0GatewayBgpConfigTagToTerraform, true)(struct!.tag),
  }
}


export function policyTier0GatewayBgpConfigToHclTerraform(struct?: PolicyTier0GatewayBgpConfigOutputReference | PolicyTier0GatewayBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ecmp: {
      value: cdktf.booleanToHclTerraform(struct!.ecmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    graceful_restart_mode: {
      value: cdktf.stringToHclTerraform(struct!.gracefulRestartMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graceful_restart_stale_route_timer: {
      value: cdktf.numberToHclTerraform(struct!.gracefulRestartStaleRouteTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graceful_restart_timer: {
      value: cdktf.numberToHclTerraform(struct!.gracefulRestartTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inter_sr_ibgp: {
      value: cdktf.booleanToHclTerraform(struct!.interSrIbgp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_as_num: {
      value: cdktf.stringToHclTerraform(struct!.localAsNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multipath_relax: {
      value: cdktf.booleanToHclTerraform(struct!.multipathRelax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_aggregation: {
      value: cdktf.listMapperHcl(policyTier0GatewayBgpConfigRouteAggregationToHclTerraform, true)(struct!.routeAggregation),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyTier0GatewayBgpConfigRouteAggregationList",
    },
    tag: {
      value: cdktf.listMapperHcl(policyTier0GatewayBgpConfigTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyTier0GatewayBgpConfigTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayBgpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyTier0GatewayBgpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ecmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecmp = this._ecmp;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._gracefulRestartMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestartMode = this._gracefulRestartMode;
    }
    if (this._gracefulRestartStaleRouteTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestartStaleRouteTimer = this._gracefulRestartStaleRouteTimer;
    }
    if (this._gracefulRestartTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestartTimer = this._gracefulRestartTimer;
    }
    if (this._interSrIbgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.interSrIbgp = this._interSrIbgp;
    }
    if (this._localAsNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsNum = this._localAsNum;
    }
    if (this._multipathRelax !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipathRelax = this._multipathRelax;
    }
    if (this._routeAggregation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeAggregation = this._routeAggregation?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayBgpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ecmp = undefined;
      this._enabled = undefined;
      this._gracefulRestartMode = undefined;
      this._gracefulRestartStaleRouteTimer = undefined;
      this._gracefulRestartTimer = undefined;
      this._interSrIbgp = undefined;
      this._localAsNum = undefined;
      this._multipathRelax = undefined;
      this._routeAggregation.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ecmp = value.ecmp;
      this._enabled = value.enabled;
      this._gracefulRestartMode = value.gracefulRestartMode;
      this._gracefulRestartStaleRouteTimer = value.gracefulRestartStaleRouteTimer;
      this._gracefulRestartTimer = value.gracefulRestartTimer;
      this._interSrIbgp = value.interSrIbgp;
      this._localAsNum = value.localAsNum;
      this._multipathRelax = value.multipathRelax;
      this._routeAggregation.internalValue = value.routeAggregation;
      this._tag.internalValue = value.tag;
    }
  }

  // ecmp - computed: false, optional: true, required: false
  private _ecmp?: boolean | cdktf.IResolvable; 
  public get ecmp() {
    return this.getBooleanAttribute('ecmp');
  }
  public set ecmp(value: boolean | cdktf.IResolvable) {
    this._ecmp = value;
  }
  public resetEcmp() {
    this._ecmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpInput() {
    return this._ecmp;
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

  // graceful_restart_mode - computed: false, optional: true, required: false
  private _gracefulRestartMode?: string; 
  public get gracefulRestartMode() {
    return this.getStringAttribute('graceful_restart_mode');
  }
  public set gracefulRestartMode(value: string) {
    this._gracefulRestartMode = value;
  }
  public resetGracefulRestartMode() {
    this._gracefulRestartMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartModeInput() {
    return this._gracefulRestartMode;
  }

  // graceful_restart_stale_route_timer - computed: false, optional: true, required: false
  private _gracefulRestartStaleRouteTimer?: number; 
  public get gracefulRestartStaleRouteTimer() {
    return this.getNumberAttribute('graceful_restart_stale_route_timer');
  }
  public set gracefulRestartStaleRouteTimer(value: number) {
    this._gracefulRestartStaleRouteTimer = value;
  }
  public resetGracefulRestartStaleRouteTimer() {
    this._gracefulRestartStaleRouteTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartStaleRouteTimerInput() {
    return this._gracefulRestartStaleRouteTimer;
  }

  // graceful_restart_timer - computed: false, optional: true, required: false
  private _gracefulRestartTimer?: number; 
  public get gracefulRestartTimer() {
    return this.getNumberAttribute('graceful_restart_timer');
  }
  public set gracefulRestartTimer(value: number) {
    this._gracefulRestartTimer = value;
  }
  public resetGracefulRestartTimer() {
    this._gracefulRestartTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartTimerInput() {
    return this._gracefulRestartTimer;
  }

  // inter_sr_ibgp - computed: true, optional: true, required: false
  private _interSrIbgp?: boolean | cdktf.IResolvable; 
  public get interSrIbgp() {
    return this.getBooleanAttribute('inter_sr_ibgp');
  }
  public set interSrIbgp(value: boolean | cdktf.IResolvable) {
    this._interSrIbgp = value;
  }
  public resetInterSrIbgp() {
    this._interSrIbgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interSrIbgpInput() {
    return this._interSrIbgp;
  }

  // local_as_num - computed: true, optional: true, required: false
  private _localAsNum?: string; 
  public get localAsNum() {
    return this.getStringAttribute('local_as_num');
  }
  public set localAsNum(value: string) {
    this._localAsNum = value;
  }
  public resetLocalAsNum() {
    this._localAsNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNumInput() {
    return this._localAsNum;
  }

  // multipath_relax - computed: true, optional: true, required: false
  private _multipathRelax?: boolean | cdktf.IResolvable; 
  public get multipathRelax() {
    return this.getBooleanAttribute('multipath_relax');
  }
  public set multipathRelax(value: boolean | cdktf.IResolvable) {
    this._multipathRelax = value;
  }
  public resetMultipathRelax() {
    this._multipathRelax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathRelaxInput() {
    return this._multipathRelax;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // route_aggregation - computed: false, optional: true, required: false
  private _routeAggregation = new PolicyTier0GatewayBgpConfigRouteAggregationList(this, "route_aggregation", false);
  public get routeAggregation() {
    return this._routeAggregation;
  }
  public putRouteAggregation(value: PolicyTier0GatewayBgpConfigRouteAggregation[] | cdktf.IResolvable) {
    this._routeAggregation.internalValue = value;
  }
  public resetRouteAggregation() {
    this._routeAggregation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeAggregationInput() {
    return this._routeAggregation.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyTier0GatewayBgpConfigTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyTier0GatewayBgpConfigTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface PolicyTier0GatewayIntersiteConfig {
  /**
  * Fallback sites to be used as new primary site on current primary site failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#fallback_site_paths PolicyTier0Gateway#fallback_site_paths}
  */
  readonly fallbackSitePaths?: string[];
  /**
  * Primary egress site for gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#primary_site_path PolicyTier0Gateway#primary_site_path}
  */
  readonly primarySitePath?: string;
  /**
  * IPv4 subnet for inter-site transit segment connecting service routers across sites for stretched gateway. For IPv6 link local subnet is auto configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#transit_subnet PolicyTier0Gateway#transit_subnet}
  */
  readonly transitSubnet?: string;
}

export function policyTier0GatewayIntersiteConfigToTerraform(struct?: PolicyTier0GatewayIntersiteConfigOutputReference | PolicyTier0GatewayIntersiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_site_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fallbackSitePaths),
    primary_site_path: cdktf.stringToTerraform(struct!.primarySitePath),
    transit_subnet: cdktf.stringToTerraform(struct!.transitSubnet),
  }
}


export function policyTier0GatewayIntersiteConfigToHclTerraform(struct?: PolicyTier0GatewayIntersiteConfigOutputReference | PolicyTier0GatewayIntersiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_site_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fallbackSitePaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    primary_site_path: {
      value: cdktf.stringToHclTerraform(struct!.primarySitePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_subnet: {
      value: cdktf.stringToHclTerraform(struct!.transitSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayIntersiteConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyTier0GatewayIntersiteConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackSitePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackSitePaths = this._fallbackSitePaths;
    }
    if (this._primarySitePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySitePath = this._primarySitePath;
    }
    if (this._transitSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitSubnet = this._transitSubnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayIntersiteConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallbackSitePaths = undefined;
      this._primarySitePath = undefined;
      this._transitSubnet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallbackSitePaths = value.fallbackSitePaths;
      this._primarySitePath = value.primarySitePath;
      this._transitSubnet = value.transitSubnet;
    }
  }

  // fallback_site_paths - computed: false, optional: true, required: false
  private _fallbackSitePaths?: string[]; 
  public get fallbackSitePaths() {
    return cdktf.Fn.tolist(this.getListAttribute('fallback_site_paths'));
  }
  public set fallbackSitePaths(value: string[]) {
    this._fallbackSitePaths = value;
  }
  public resetFallbackSitePaths() {
    this._fallbackSitePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackSitePathsInput() {
    return this._fallbackSitePaths;
  }

  // primary_site_path - computed: false, optional: true, required: false
  private _primarySitePath?: string; 
  public get primarySitePath() {
    return this.getStringAttribute('primary_site_path');
  }
  public set primarySitePath(value: string) {
    this._primarySitePath = value;
  }
  public resetPrimarySitePath() {
    this._primarySitePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySitePathInput() {
    return this._primarySitePath;
  }

  // transit_subnet - computed: true, optional: true, required: false
  private _transitSubnet?: string; 
  public get transitSubnet() {
    return this.getStringAttribute('transit_subnet');
  }
  public set transitSubnet(value: string) {
    this._transitSubnet = value;
  }
  public resetTransitSubnet() {
    this._transitSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitSubnetInput() {
    return this._transitSubnet;
  }
}
export interface PolicyTier0GatewayLocaleServiceRedistributionConfigRule {
  /**
  * BGP destination for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#bgp PolicyTier0Gateway#bgp}
  */
  readonly bgp?: boolean | cdktf.IResolvable;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#name PolicyTier0Gateway#name}
  */
  readonly name?: string;
  /**
  * OSPF destination for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#ospf PolicyTier0Gateway#ospf}
  */
  readonly ospf?: boolean | cdktf.IResolvable;
  /**
  * Route map to be associated with the redistribution rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#route_map_path PolicyTier0Gateway#route_map_path}
  */
  readonly routeMapPath?: string;
  /**
  * List of redistribution types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#types PolicyTier0Gateway#types}
  */
  readonly types?: string[];
}

export function policyTier0GatewayLocaleServiceRedistributionConfigRuleToTerraform(struct?: PolicyTier0GatewayLocaleServiceRedistributionConfigRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: cdktf.booleanToTerraform(struct!.bgp),
    name: cdktf.stringToTerraform(struct!.name),
    ospf: cdktf.booleanToTerraform(struct!.ospf),
    route_map_path: cdktf.stringToTerraform(struct!.routeMapPath),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function policyTier0GatewayLocaleServiceRedistributionConfigRuleToHclTerraform(struct?: PolicyTier0GatewayLocaleServiceRedistributionConfigRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: cdktf.booleanToHclTerraform(struct!.bgp),
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
    ospf: {
      value: cdktf.booleanToHclTerraform(struct!.ospf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_map_path: {
      value: cdktf.stringToHclTerraform(struct!.routeMapPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayLocaleServiceRedistributionConfigRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0GatewayLocaleServiceRedistributionConfigRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ospf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf;
    }
    if (this._routeMapPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapPath = this._routeMapPath;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayLocaleServiceRedistributionConfigRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp = undefined;
      this._name = undefined;
      this._ospf = undefined;
      this._routeMapPath = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgp = value.bgp;
      this._name = value.name;
      this._ospf = value.ospf;
      this._routeMapPath = value.routeMapPath;
      this._types = value.types;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp?: boolean | cdktf.IResolvable; 
  public get bgp() {
    return this.getBooleanAttribute('bgp');
  }
  public set bgp(value: boolean | cdktf.IResolvable) {
    this._bgp = value;
  }
  public resetBgp() {
    this._bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp;
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

  // ospf - computed: false, optional: true, required: false
  private _ospf?: boolean | cdktf.IResolvable; 
  public get ospf() {
    return this.getBooleanAttribute('ospf');
  }
  public set ospf(value: boolean | cdktf.IResolvable) {
    this._ospf = value;
  }
  public resetOspf() {
    this._ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf;
  }

  // route_map_path - computed: false, optional: true, required: false
  private _routeMapPath?: string; 
  public get routeMapPath() {
    return this.getStringAttribute('route_map_path');
  }
  public set routeMapPath(value: string) {
    this._routeMapPath = value;
  }
  public resetRouteMapPath() {
    this._routeMapPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapPathInput() {
    return this._routeMapPath;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktf.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class PolicyTier0GatewayLocaleServiceRedistributionConfigRuleList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0GatewayLocaleServiceRedistributionConfigRule[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0GatewayLocaleServiceRedistributionConfigRuleOutputReference {
    return new PolicyTier0GatewayLocaleServiceRedistributionConfigRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier0GatewayLocaleServiceRedistributionConfig {
  /**
  * Flag to enable route redistribution for BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#enabled PolicyTier0Gateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable route redistribution for OSPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#ospf_enabled PolicyTier0Gateway#ospf_enabled}
  */
  readonly ospfEnabled?: boolean | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#rule PolicyTier0Gateway#rule}
  */
  readonly rule?: PolicyTier0GatewayLocaleServiceRedistributionConfigRule[] | cdktf.IResolvable;
}

export function policyTier0GatewayLocaleServiceRedistributionConfigToTerraform(struct?: PolicyTier0GatewayLocaleServiceRedistributionConfigOutputReference | PolicyTier0GatewayLocaleServiceRedistributionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ospf_enabled: cdktf.booleanToTerraform(struct!.ospfEnabled),
    rule: cdktf.listMapper(policyTier0GatewayLocaleServiceRedistributionConfigRuleToTerraform, true)(struct!.rule),
  }
}


export function policyTier0GatewayLocaleServiceRedistributionConfigToHclTerraform(struct?: PolicyTier0GatewayLocaleServiceRedistributionConfigOutputReference | PolicyTier0GatewayLocaleServiceRedistributionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ospf_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ospfEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule: {
      value: cdktf.listMapperHcl(policyTier0GatewayLocaleServiceRedistributionConfigRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyTier0GatewayLocaleServiceRedistributionConfigRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayLocaleServiceRedistributionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyTier0GatewayLocaleServiceRedistributionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ospfEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfEnabled = this._ospfEnabled;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayLocaleServiceRedistributionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._ospfEnabled = undefined;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._ospfEnabled = value.ospfEnabled;
      this._rule.internalValue = value.rule;
    }
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

  // ospf_enabled - computed: false, optional: true, required: false
  private _ospfEnabled?: boolean | cdktf.IResolvable; 
  public get ospfEnabled() {
    return this.getBooleanAttribute('ospf_enabled');
  }
  public set ospfEnabled(value: boolean | cdktf.IResolvable) {
    this._ospfEnabled = value;
  }
  public resetOspfEnabled() {
    this._ospfEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfEnabledInput() {
    return this._ospfEnabled;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new PolicyTier0GatewayLocaleServiceRedistributionConfigRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: PolicyTier0GatewayLocaleServiceRedistributionConfigRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface PolicyTier0GatewayLocaleService {
  /**
  * The path of the edge cluster connected to this gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#edge_cluster_path PolicyTier0Gateway#edge_cluster_path}
  */
  readonly edgeClusterPath: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#nsx_id PolicyTier0Gateway#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Paths of specific edge nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#preferred_edge_paths PolicyTier0Gateway#preferred_edge_paths}
  */
  readonly preferredEdgePaths?: string[];
  /**
  * redistribution_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#redistribution_config PolicyTier0Gateway#redistribution_config}
  */
  readonly redistributionConfig?: PolicyTier0GatewayLocaleServiceRedistributionConfig;
}

export function policyTier0GatewayLocaleServiceToTerraform(struct?: PolicyTier0GatewayLocaleService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edge_cluster_path: cdktf.stringToTerraform(struct!.edgeClusterPath),
    nsx_id: cdktf.stringToTerraform(struct!.nsxId),
    preferred_edge_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredEdgePaths),
    redistribution_config: policyTier0GatewayLocaleServiceRedistributionConfigToTerraform(struct!.redistributionConfig),
  }
}


export function policyTier0GatewayLocaleServiceToHclTerraform(struct?: PolicyTier0GatewayLocaleService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edge_cluster_path: {
      value: cdktf.stringToHclTerraform(struct!.edgeClusterPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsx_id: {
      value: cdktf.stringToHclTerraform(struct!.nsxId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_edge_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredEdgePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    redistribution_config: {
      value: policyTier0GatewayLocaleServiceRedistributionConfigToHclTerraform(struct!.redistributionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyTier0GatewayLocaleServiceRedistributionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayLocaleServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0GatewayLocaleService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeClusterPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeClusterPath = this._edgeClusterPath;
    }
    if (this._nsxId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxId = this._nsxId;
    }
    if (this._preferredEdgePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredEdgePaths = this._preferredEdgePaths;
    }
    if (this._redistributionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributionConfig = this._redistributionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayLocaleService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edgeClusterPath = undefined;
      this._nsxId = undefined;
      this._preferredEdgePaths = undefined;
      this._redistributionConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edgeClusterPath = value.edgeClusterPath;
      this._nsxId = value.nsxId;
      this._preferredEdgePaths = value.preferredEdgePaths;
      this._redistributionConfig.internalValue = value.redistributionConfig;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // edge_cluster_path - computed: false, optional: false, required: true
  private _edgeClusterPath?: string; 
  public get edgeClusterPath() {
    return this.getStringAttribute('edge_cluster_path');
  }
  public set edgeClusterPath(value: string) {
    this._edgeClusterPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterPathInput() {
    return this._edgeClusterPath;
  }

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // preferred_edge_paths - computed: false, optional: true, required: false
  private _preferredEdgePaths?: string[]; 
  public get preferredEdgePaths() {
    return this.getListAttribute('preferred_edge_paths');
  }
  public set preferredEdgePaths(value: string[]) {
    this._preferredEdgePaths = value;
  }
  public resetPreferredEdgePaths() {
    this._preferredEdgePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredEdgePathsInput() {
    return this._preferredEdgePaths;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // redistribution_config - computed: false, optional: true, required: false
  private _redistributionConfig = new PolicyTier0GatewayLocaleServiceRedistributionConfigOutputReference(this, "redistribution_config");
  public get redistributionConfig() {
    return this._redistributionConfig;
  }
  public putRedistributionConfig(value: PolicyTier0GatewayLocaleServiceRedistributionConfig) {
    this._redistributionConfig.internalValue = value;
  }
  public resetRedistributionConfig() {
    this._redistributionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionConfigInput() {
    return this._redistributionConfig.internalValue;
  }
}

export class PolicyTier0GatewayLocaleServiceList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0GatewayLocaleService[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0GatewayLocaleServiceOutputReference {
    return new PolicyTier0GatewayLocaleServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier0GatewayRedistributionConfigRule {
  /**
  * BGP destination for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#bgp PolicyTier0Gateway#bgp}
  */
  readonly bgp?: boolean | cdktf.IResolvable;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#name PolicyTier0Gateway#name}
  */
  readonly name?: string;
  /**
  * OSPF destination for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#ospf PolicyTier0Gateway#ospf}
  */
  readonly ospf?: boolean | cdktf.IResolvable;
  /**
  * Route map to be associated with the redistribution rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#route_map_path PolicyTier0Gateway#route_map_path}
  */
  readonly routeMapPath?: string;
  /**
  * List of redistribution types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#types PolicyTier0Gateway#types}
  */
  readonly types?: string[];
}

export function policyTier0GatewayRedistributionConfigRuleToTerraform(struct?: PolicyTier0GatewayRedistributionConfigRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: cdktf.booleanToTerraform(struct!.bgp),
    name: cdktf.stringToTerraform(struct!.name),
    ospf: cdktf.booleanToTerraform(struct!.ospf),
    route_map_path: cdktf.stringToTerraform(struct!.routeMapPath),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function policyTier0GatewayRedistributionConfigRuleToHclTerraform(struct?: PolicyTier0GatewayRedistributionConfigRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: cdktf.booleanToHclTerraform(struct!.bgp),
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
    ospf: {
      value: cdktf.booleanToHclTerraform(struct!.ospf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_map_path: {
      value: cdktf.stringToHclTerraform(struct!.routeMapPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayRedistributionConfigRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0GatewayRedistributionConfigRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ospf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf;
    }
    if (this._routeMapPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapPath = this._routeMapPath;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayRedistributionConfigRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp = undefined;
      this._name = undefined;
      this._ospf = undefined;
      this._routeMapPath = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgp = value.bgp;
      this._name = value.name;
      this._ospf = value.ospf;
      this._routeMapPath = value.routeMapPath;
      this._types = value.types;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp?: boolean | cdktf.IResolvable; 
  public get bgp() {
    return this.getBooleanAttribute('bgp');
  }
  public set bgp(value: boolean | cdktf.IResolvable) {
    this._bgp = value;
  }
  public resetBgp() {
    this._bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp;
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

  // ospf - computed: false, optional: true, required: false
  private _ospf?: boolean | cdktf.IResolvable; 
  public get ospf() {
    return this.getBooleanAttribute('ospf');
  }
  public set ospf(value: boolean | cdktf.IResolvable) {
    this._ospf = value;
  }
  public resetOspf() {
    this._ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf;
  }

  // route_map_path - computed: false, optional: true, required: false
  private _routeMapPath?: string; 
  public get routeMapPath() {
    return this.getStringAttribute('route_map_path');
  }
  public set routeMapPath(value: string) {
    this._routeMapPath = value;
  }
  public resetRouteMapPath() {
    this._routeMapPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapPathInput() {
    return this._routeMapPath;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktf.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class PolicyTier0GatewayRedistributionConfigRuleList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0GatewayRedistributionConfigRule[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0GatewayRedistributionConfigRuleOutputReference {
    return new PolicyTier0GatewayRedistributionConfigRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier0GatewayRedistributionConfig {
  /**
  * Flag to enable route redistribution for BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#enabled PolicyTier0Gateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable route redistribution for OSPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#ospf_enabled PolicyTier0Gateway#ospf_enabled}
  */
  readonly ospfEnabled?: boolean | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#rule PolicyTier0Gateway#rule}
  */
  readonly rule?: PolicyTier0GatewayRedistributionConfigRule[] | cdktf.IResolvable;
}

export function policyTier0GatewayRedistributionConfigToTerraform(struct?: PolicyTier0GatewayRedistributionConfigOutputReference | PolicyTier0GatewayRedistributionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ospf_enabled: cdktf.booleanToTerraform(struct!.ospfEnabled),
    rule: cdktf.listMapper(policyTier0GatewayRedistributionConfigRuleToTerraform, true)(struct!.rule),
  }
}


export function policyTier0GatewayRedistributionConfigToHclTerraform(struct?: PolicyTier0GatewayRedistributionConfigOutputReference | PolicyTier0GatewayRedistributionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ospf_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ospfEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule: {
      value: cdktf.listMapperHcl(policyTier0GatewayRedistributionConfigRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyTier0GatewayRedistributionConfigRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayRedistributionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyTier0GatewayRedistributionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ospfEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfEnabled = this._ospfEnabled;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayRedistributionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._ospfEnabled = undefined;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._ospfEnabled = value.ospfEnabled;
      this._rule.internalValue = value.rule;
    }
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

  // ospf_enabled - computed: false, optional: true, required: false
  private _ospfEnabled?: boolean | cdktf.IResolvable; 
  public get ospfEnabled() {
    return this.getBooleanAttribute('ospf_enabled');
  }
  public set ospfEnabled(value: boolean | cdktf.IResolvable) {
    this._ospfEnabled = value;
  }
  public resetOspfEnabled() {
    this._ospfEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfEnabledInput() {
    return this._ospfEnabled;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new PolicyTier0GatewayRedistributionConfigRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: PolicyTier0GatewayRedistributionConfigRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface PolicyTier0GatewayTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#scope PolicyTier0Gateway#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#tag PolicyTier0Gateway#tag}
  */
  readonly tag?: string;
}

export function policyTier0GatewayTagToTerraform(struct?: PolicyTier0GatewayTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyTier0GatewayTagToHclTerraform(struct?: PolicyTier0GatewayTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0GatewayTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyTier0GatewayTagList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0GatewayTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0GatewayTagOutputReference {
    return new PolicyTier0GatewayTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier0GatewayVrfConfigRouteTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#address_family PolicyTier0Gateway#address_family}
  */
  readonly addressFamily?: string;
  /**
  * When set to false, targets should be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#auto_mode PolicyTier0Gateway#auto_mode}
  */
  readonly autoMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#export_targets PolicyTier0Gateway#export_targets}
  */
  readonly exportTargets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#import_targets PolicyTier0Gateway#import_targets}
  */
  readonly importTargets?: string[];
}

export function policyTier0GatewayVrfConfigRouteTargetToTerraform(struct?: PolicyTier0GatewayVrfConfigRouteTargetOutputReference | PolicyTier0GatewayVrfConfigRouteTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: cdktf.stringToTerraform(struct!.addressFamily),
    auto_mode: cdktf.booleanToTerraform(struct!.autoMode),
    export_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exportTargets),
    import_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.importTargets),
  }
}


export function policyTier0GatewayVrfConfigRouteTargetToHclTerraform(struct?: PolicyTier0GatewayVrfConfigRouteTargetOutputReference | PolicyTier0GatewayVrfConfigRouteTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: cdktf.stringToHclTerraform(struct!.addressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_mode: {
      value: cdktf.booleanToHclTerraform(struct!.autoMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exportTargets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    import_targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.importTargets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayVrfConfigRouteTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyTier0GatewayVrfConfigRouteTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._autoMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMode = this._autoMode;
    }
    if (this._exportTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportTargets = this._exportTargets;
    }
    if (this._importTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.importTargets = this._importTargets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayVrfConfigRouteTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressFamily = undefined;
      this._autoMode = undefined;
      this._exportTargets = undefined;
      this._importTargets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressFamily = value.addressFamily;
      this._autoMode = value.autoMode;
      this._exportTargets = value.exportTargets;
      this._importTargets = value.importTargets;
    }
  }

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

  // auto_mode - computed: false, optional: true, required: false
  private _autoMode?: boolean | cdktf.IResolvable; 
  public get autoMode() {
    return this.getBooleanAttribute('auto_mode');
  }
  public set autoMode(value: boolean | cdktf.IResolvable) {
    this._autoMode = value;
  }
  public resetAutoMode() {
    this._autoMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoModeInput() {
    return this._autoMode;
  }

  // export_targets - computed: false, optional: true, required: false
  private _exportTargets?: string[]; 
  public get exportTargets() {
    return this.getListAttribute('export_targets');
  }
  public set exportTargets(value: string[]) {
    this._exportTargets = value;
  }
  public resetExportTargets() {
    this._exportTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportTargetsInput() {
    return this._exportTargets;
  }

  // import_targets - computed: false, optional: true, required: false
  private _importTargets?: string[]; 
  public get importTargets() {
    return this.getListAttribute('import_targets');
  }
  public set importTargets(value: string[]) {
    this._importTargets = value;
  }
  public resetImportTargets() {
    this._importTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importTargetsInput() {
    return this._importTargets;
  }
}
export interface PolicyTier0GatewayVrfConfigTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#scope PolicyTier0Gateway#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#tag PolicyTier0Gateway#tag}
  */
  readonly tag?: string;
}

export function policyTier0GatewayVrfConfigTagToTerraform(struct?: PolicyTier0GatewayVrfConfigTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyTier0GatewayVrfConfigTagToHclTerraform(struct?: PolicyTier0GatewayVrfConfigTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayVrfConfigTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0GatewayVrfConfigTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayVrfConfigTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyTier0GatewayVrfConfigTagList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0GatewayVrfConfigTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0GatewayVrfConfigTagOutputReference {
    return new PolicyTier0GatewayVrfConfigTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier0GatewayVrfConfig {
  /**
  * L3 VNI associated with the VRF for overlay traffic. VNI must be unique and belong to configured VNI pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#evpn_transit_vni PolicyTier0Gateway#evpn_transit_vni}
  */
  readonly evpnTransitVni?: number;
  /**
  * Default tier0 path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#gateway_path PolicyTier0Gateway#gateway_path}
  */
  readonly gatewayPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#route_distinguisher PolicyTier0Gateway#route_distinguisher}
  */
  readonly routeDistinguisher?: string;
  /**
  * route_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#route_target PolicyTier0Gateway#route_target}
  */
  readonly routeTarget?: PolicyTier0GatewayVrfConfigRouteTarget;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#tag PolicyTier0Gateway#tag}
  */
  readonly tag?: PolicyTier0GatewayVrfConfigTag[] | cdktf.IResolvable;
}

export function policyTier0GatewayVrfConfigToTerraform(struct?: PolicyTier0GatewayVrfConfigOutputReference | PolicyTier0GatewayVrfConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evpn_transit_vni: cdktf.numberToTerraform(struct!.evpnTransitVni),
    gateway_path: cdktf.stringToTerraform(struct!.gatewayPath),
    route_distinguisher: cdktf.stringToTerraform(struct!.routeDistinguisher),
    route_target: policyTier0GatewayVrfConfigRouteTargetToTerraform(struct!.routeTarget),
    tag: cdktf.listMapper(policyTier0GatewayVrfConfigTagToTerraform, true)(struct!.tag),
  }
}


export function policyTier0GatewayVrfConfigToHclTerraform(struct?: PolicyTier0GatewayVrfConfigOutputReference | PolicyTier0GatewayVrfConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evpn_transit_vni: {
      value: cdktf.numberToHclTerraform(struct!.evpnTransitVni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway_path: {
      value: cdktf.stringToHclTerraform(struct!.gatewayPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_distinguisher: {
      value: cdktf.stringToHclTerraform(struct!.routeDistinguisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_target: {
      value: policyTier0GatewayVrfConfigRouteTargetToHclTerraform(struct!.routeTarget),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyTier0GatewayVrfConfigRouteTargetList",
    },
    tag: {
      value: cdktf.listMapperHcl(policyTier0GatewayVrfConfigTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyTier0GatewayVrfConfigTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayVrfConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyTier0GatewayVrfConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evpnTransitVni !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpnTransitVni = this._evpnTransitVni;
    }
    if (this._gatewayPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayPath = this._gatewayPath;
    }
    if (this._routeDistinguisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeDistinguisher = this._routeDistinguisher;
    }
    if (this._routeTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTarget = this._routeTarget?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayVrfConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evpnTransitVni = undefined;
      this._gatewayPath = undefined;
      this._routeDistinguisher = undefined;
      this._routeTarget.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evpnTransitVni = value.evpnTransitVni;
      this._gatewayPath = value.gatewayPath;
      this._routeDistinguisher = value.routeDistinguisher;
      this._routeTarget.internalValue = value.routeTarget;
      this._tag.internalValue = value.tag;
    }
  }

  // evpn_transit_vni - computed: false, optional: true, required: false
  private _evpnTransitVni?: number; 
  public get evpnTransitVni() {
    return this.getNumberAttribute('evpn_transit_vni');
  }
  public set evpnTransitVni(value: number) {
    this._evpnTransitVni = value;
  }
  public resetEvpnTransitVni() {
    this._evpnTransitVni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnTransitVniInput() {
    return this._evpnTransitVni;
  }

  // gateway_path - computed: false, optional: false, required: true
  private _gatewayPath?: string; 
  public get gatewayPath() {
    return this.getStringAttribute('gateway_path');
  }
  public set gatewayPath(value: string) {
    this._gatewayPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPathInput() {
    return this._gatewayPath;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // route_distinguisher - computed: false, optional: true, required: false
  private _routeDistinguisher?: string; 
  public get routeDistinguisher() {
    return this.getStringAttribute('route_distinguisher');
  }
  public set routeDistinguisher(value: string) {
    this._routeDistinguisher = value;
  }
  public resetRouteDistinguisher() {
    this._routeDistinguisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDistinguisherInput() {
    return this._routeDistinguisher;
  }

  // route_target - computed: false, optional: true, required: false
  private _routeTarget = new PolicyTier0GatewayVrfConfigRouteTargetOutputReference(this, "route_target");
  public get routeTarget() {
    return this._routeTarget;
  }
  public putRouteTarget(value: PolicyTier0GatewayVrfConfigRouteTarget) {
    this._routeTarget.internalValue = value;
  }
  public resetRouteTarget() {
    this._routeTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetInput() {
    return this._routeTarget.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyTier0GatewayVrfConfigTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyTier0GatewayVrfConfigTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway nsxt_policy_tier0_gateway}
*/
export class PolicyTier0Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_tier0_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyTier0Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyTier0Gateway to import
  * @param importFromId The id of the existing PolicyTier0Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyTier0Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_tier0_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway nsxt_policy_tier0_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyTier0GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyTier0GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_tier0_gateway',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultRuleLogging = config.defaultRuleLogging;
    this._description = config.description;
    this._dhcpConfigPath = config.dhcpConfigPath;
    this._displayName = config.displayName;
    this._edgeClusterPath = config.edgeClusterPath;
    this._enableFirewall = config.enableFirewall;
    this._enableRdPerEdge = config.enableRdPerEdge;
    this._failoverMode = config.failoverMode;
    this._forceWhitelisting = config.forceWhitelisting;
    this._haMode = config.haMode;
    this._id = config.id;
    this._internalTransitSubnets = config.internalTransitSubnets;
    this._ipv6DadProfilePath = config.ipv6DadProfilePath;
    this._ipv6NdraProfilePath = config.ipv6NdraProfilePath;
    this._multiVrfInterSr = config.multiVrfInterSr;
    this._nsxId = config.nsxId;
    this._rdAdminAddress = config.rdAdminAddress;
    this._transitSubnets = config.transitSubnets;
    this._vrfTransitSubnets = config.vrfTransitSubnets;
    this._advancedConfig.internalValue = config.advancedConfig;
    this._bgpConfig.internalValue = config.bgpConfig;
    this._intersiteConfig.internalValue = config.intersiteConfig;
    this._localeService.internalValue = config.localeService;
    this._redistributionConfig.internalValue = config.redistributionConfig;
    this._tag.internalValue = config.tag;
    this._vrfConfig.internalValue = config.vrfConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_rule_logging - computed: false, optional: true, required: false
  private _defaultRuleLogging?: boolean | cdktf.IResolvable; 
  public get defaultRuleLogging() {
    return this.getBooleanAttribute('default_rule_logging');
  }
  public set defaultRuleLogging(value: boolean | cdktf.IResolvable) {
    this._defaultRuleLogging = value;
  }
  public resetDefaultRuleLogging() {
    this._defaultRuleLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRuleLoggingInput() {
    return this._defaultRuleLogging;
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

  // dhcp_config_path - computed: false, optional: true, required: false
  private _dhcpConfigPath?: string; 
  public get dhcpConfigPath() {
    return this.getStringAttribute('dhcp_config_path');
  }
  public set dhcpConfigPath(value: string) {
    this._dhcpConfigPath = value;
  }
  public resetDhcpConfigPath() {
    this._dhcpConfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigPathInput() {
    return this._dhcpConfigPath;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // edge_cluster_path - computed: false, optional: true, required: false
  private _edgeClusterPath?: string; 
  public get edgeClusterPath() {
    return this.getStringAttribute('edge_cluster_path');
  }
  public set edgeClusterPath(value: string) {
    this._edgeClusterPath = value;
  }
  public resetEdgeClusterPath() {
    this._edgeClusterPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterPathInput() {
    return this._edgeClusterPath;
  }

  // enable_firewall - computed: false, optional: true, required: false
  private _enableFirewall?: boolean | cdktf.IResolvable; 
  public get enableFirewall() {
    return this.getBooleanAttribute('enable_firewall');
  }
  public set enableFirewall(value: boolean | cdktf.IResolvable) {
    this._enableFirewall = value;
  }
  public resetEnableFirewall() {
    this._enableFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFirewallInput() {
    return this._enableFirewall;
  }

  // enable_rd_per_edge - computed: false, optional: true, required: false
  private _enableRdPerEdge?: boolean | cdktf.IResolvable; 
  public get enableRdPerEdge() {
    return this.getBooleanAttribute('enable_rd_per_edge');
  }
  public set enableRdPerEdge(value: boolean | cdktf.IResolvable) {
    this._enableRdPerEdge = value;
  }
  public resetEnableRdPerEdge() {
    this._enableRdPerEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRdPerEdgeInput() {
    return this._enableRdPerEdge;
  }

  // failover_mode - computed: false, optional: true, required: false
  private _failoverMode?: string; 
  public get failoverMode() {
    return this.getStringAttribute('failover_mode');
  }
  public set failoverMode(value: string) {
    this._failoverMode = value;
  }
  public resetFailoverMode() {
    this._failoverMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverModeInput() {
    return this._failoverMode;
  }

  // force_whitelisting - computed: false, optional: true, required: false
  private _forceWhitelisting?: boolean | cdktf.IResolvable; 
  public get forceWhitelisting() {
    return this.getBooleanAttribute('force_whitelisting');
  }
  public set forceWhitelisting(value: boolean | cdktf.IResolvable) {
    this._forceWhitelisting = value;
  }
  public resetForceWhitelisting() {
    this._forceWhitelisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceWhitelistingInput() {
    return this._forceWhitelisting;
  }

  // ha_mode - computed: false, optional: true, required: false
  private _haMode?: string; 
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }
  public set haMode(value: string) {
    this._haMode = value;
  }
  public resetHaMode() {
    this._haMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haModeInput() {
    return this._haMode;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // internal_transit_subnets - computed: true, optional: true, required: false
  private _internalTransitSubnets?: string[]; 
  public get internalTransitSubnets() {
    return this.getListAttribute('internal_transit_subnets');
  }
  public set internalTransitSubnets(value: string[]) {
    this._internalTransitSubnets = value;
  }
  public resetInternalTransitSubnets() {
    this._internalTransitSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalTransitSubnetsInput() {
    return this._internalTransitSubnets;
  }

  // ipv6_dad_profile_path - computed: true, optional: true, required: false
  private _ipv6DadProfilePath?: string; 
  public get ipv6DadProfilePath() {
    return this.getStringAttribute('ipv6_dad_profile_path');
  }
  public set ipv6DadProfilePath(value: string) {
    this._ipv6DadProfilePath = value;
  }
  public resetIpv6DadProfilePath() {
    this._ipv6DadProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DadProfilePathInput() {
    return this._ipv6DadProfilePath;
  }

  // ipv6_ndra_profile_path - computed: true, optional: true, required: false
  private _ipv6NdraProfilePath?: string; 
  public get ipv6NdraProfilePath() {
    return this.getStringAttribute('ipv6_ndra_profile_path');
  }
  public set ipv6NdraProfilePath(value: string) {
    this._ipv6NdraProfilePath = value;
  }
  public resetIpv6NdraProfilePath() {
    this._ipv6NdraProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NdraProfilePathInput() {
    return this._ipv6NdraProfilePath;
  }

  // multi_vrf_inter_sr - computed: false, optional: true, required: false
  private _multiVrfInterSr?: boolean | cdktf.IResolvable; 
  public get multiVrfInterSr() {
    return this.getBooleanAttribute('multi_vrf_inter_sr');
  }
  public set multiVrfInterSr(value: boolean | cdktf.IResolvable) {
    this._multiVrfInterSr = value;
  }
  public resetMultiVrfInterSr() {
    this._multiVrfInterSr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiVrfInterSrInput() {
    return this._multiVrfInterSr;
  }

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // rd_admin_address - computed: false, optional: true, required: false
  private _rdAdminAddress?: string; 
  public get rdAdminAddress() {
    return this.getStringAttribute('rd_admin_address');
  }
  public set rdAdminAddress(value: string) {
    this._rdAdminAddress = value;
  }
  public resetRdAdminAddress() {
    this._rdAdminAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdAdminAddressInput() {
    return this._rdAdminAddress;
  }

  // redistribution_set - computed: true, optional: false, required: false
  public get redistributionSet() {
    return this.getBooleanAttribute('redistribution_set');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // transit_subnets - computed: true, optional: true, required: false
  private _transitSubnets?: string[]; 
  public get transitSubnets() {
    return this.getListAttribute('transit_subnets');
  }
  public set transitSubnets(value: string[]) {
    this._transitSubnets = value;
  }
  public resetTransitSubnets() {
    this._transitSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitSubnetsInput() {
    return this._transitSubnets;
  }

  // vrf_transit_subnets - computed: true, optional: true, required: false
  private _vrfTransitSubnets?: string[]; 
  public get vrfTransitSubnets() {
    return this.getListAttribute('vrf_transit_subnets');
  }
  public set vrfTransitSubnets(value: string[]) {
    this._vrfTransitSubnets = value;
  }
  public resetVrfTransitSubnets() {
    this._vrfTransitSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTransitSubnetsInput() {
    return this._vrfTransitSubnets;
  }

  // advanced_config - computed: false, optional: true, required: false
  private _advancedConfig = new PolicyTier0GatewayAdvancedConfigOutputReference(this, "advanced_config");
  public get advancedConfig() {
    return this._advancedConfig;
  }
  public putAdvancedConfig(value: PolicyTier0GatewayAdvancedConfig) {
    this._advancedConfig.internalValue = value;
  }
  public resetAdvancedConfig() {
    this._advancedConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigInput() {
    return this._advancedConfig.internalValue;
  }

  // bgp_config - computed: false, optional: true, required: false
  private _bgpConfig = new PolicyTier0GatewayBgpConfigOutputReference(this, "bgp_config");
  public get bgpConfig() {
    return this._bgpConfig;
  }
  public putBgpConfig(value: PolicyTier0GatewayBgpConfig) {
    this._bgpConfig.internalValue = value;
  }
  public resetBgpConfig() {
    this._bgpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpConfigInput() {
    return this._bgpConfig.internalValue;
  }

  // intersite_config - computed: false, optional: true, required: false
  private _intersiteConfig = new PolicyTier0GatewayIntersiteConfigOutputReference(this, "intersite_config");
  public get intersiteConfig() {
    return this._intersiteConfig;
  }
  public putIntersiteConfig(value: PolicyTier0GatewayIntersiteConfig) {
    this._intersiteConfig.internalValue = value;
  }
  public resetIntersiteConfig() {
    this._intersiteConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intersiteConfigInput() {
    return this._intersiteConfig.internalValue;
  }

  // locale_service - computed: false, optional: true, required: false
  private _localeService = new PolicyTier0GatewayLocaleServiceList(this, "locale_service", true);
  public get localeService() {
    return this._localeService;
  }
  public putLocaleService(value: PolicyTier0GatewayLocaleService[] | cdktf.IResolvable) {
    this._localeService.internalValue = value;
  }
  public resetLocaleService() {
    this._localeService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeServiceInput() {
    return this._localeService.internalValue;
  }

  // redistribution_config - computed: false, optional: true, required: false
  private _redistributionConfig = new PolicyTier0GatewayRedistributionConfigOutputReference(this, "redistribution_config");
  public get redistributionConfig() {
    return this._redistributionConfig;
  }
  public putRedistributionConfig(value: PolicyTier0GatewayRedistributionConfig) {
    this._redistributionConfig.internalValue = value;
  }
  public resetRedistributionConfig() {
    this._redistributionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionConfigInput() {
    return this._redistributionConfig.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyTier0GatewayTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyTier0GatewayTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // vrf_config - computed: false, optional: true, required: false
  private _vrfConfig = new PolicyTier0GatewayVrfConfigOutputReference(this, "vrf_config");
  public get vrfConfig() {
    return this._vrfConfig;
  }
  public putVrfConfig(value: PolicyTier0GatewayVrfConfig) {
    this._vrfConfig.internalValue = value;
  }
  public resetVrfConfig() {
    this._vrfConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfConfigInput() {
    return this._vrfConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_rule_logging: cdktf.booleanToTerraform(this._defaultRuleLogging),
      description: cdktf.stringToTerraform(this._description),
      dhcp_config_path: cdktf.stringToTerraform(this._dhcpConfigPath),
      display_name: cdktf.stringToTerraform(this._displayName),
      edge_cluster_path: cdktf.stringToTerraform(this._edgeClusterPath),
      enable_firewall: cdktf.booleanToTerraform(this._enableFirewall),
      enable_rd_per_edge: cdktf.booleanToTerraform(this._enableRdPerEdge),
      failover_mode: cdktf.stringToTerraform(this._failoverMode),
      force_whitelisting: cdktf.booleanToTerraform(this._forceWhitelisting),
      ha_mode: cdktf.stringToTerraform(this._haMode),
      id: cdktf.stringToTerraform(this._id),
      internal_transit_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internalTransitSubnets),
      ipv6_dad_profile_path: cdktf.stringToTerraform(this._ipv6DadProfilePath),
      ipv6_ndra_profile_path: cdktf.stringToTerraform(this._ipv6NdraProfilePath),
      multi_vrf_inter_sr: cdktf.booleanToTerraform(this._multiVrfInterSr),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      rd_admin_address: cdktf.stringToTerraform(this._rdAdminAddress),
      transit_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitSubnets),
      vrf_transit_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vrfTransitSubnets),
      advanced_config: policyTier0GatewayAdvancedConfigToTerraform(this._advancedConfig.internalValue),
      bgp_config: policyTier0GatewayBgpConfigToTerraform(this._bgpConfig.internalValue),
      intersite_config: policyTier0GatewayIntersiteConfigToTerraform(this._intersiteConfig.internalValue),
      locale_service: cdktf.listMapper(policyTier0GatewayLocaleServiceToTerraform, true)(this._localeService.internalValue),
      redistribution_config: policyTier0GatewayRedistributionConfigToTerraform(this._redistributionConfig.internalValue),
      tag: cdktf.listMapper(policyTier0GatewayTagToTerraform, true)(this._tag.internalValue),
      vrf_config: policyTier0GatewayVrfConfigToTerraform(this._vrfConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_rule_logging: {
        value: cdktf.booleanToHclTerraform(this._defaultRuleLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_config_path: {
        value: cdktf.stringToHclTerraform(this._dhcpConfigPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_cluster_path: {
        value: cdktf.stringToHclTerraform(this._edgeClusterPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_firewall: {
        value: cdktf.booleanToHclTerraform(this._enableFirewall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rd_per_edge: {
        value: cdktf.booleanToHclTerraform(this._enableRdPerEdge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failover_mode: {
        value: cdktf.stringToHclTerraform(this._failoverMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_whitelisting: {
        value: cdktf.booleanToHclTerraform(this._forceWhitelisting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ha_mode: {
        value: cdktf.stringToHclTerraform(this._haMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_transit_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internalTransitSubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_dad_profile_path: {
        value: cdktf.stringToHclTerraform(this._ipv6DadProfilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_ndra_profile_path: {
        value: cdktf.stringToHclTerraform(this._ipv6NdraProfilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_vrf_inter_sr: {
        value: cdktf.booleanToHclTerraform(this._multiVrfInterSr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd_admin_address: {
        value: cdktf.stringToHclTerraform(this._rdAdminAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitSubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vrf_transit_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vrfTransitSubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      advanced_config: {
        value: policyTier0GatewayAdvancedConfigToHclTerraform(this._advancedConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier0GatewayAdvancedConfigList",
      },
      bgp_config: {
        value: policyTier0GatewayBgpConfigToHclTerraform(this._bgpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier0GatewayBgpConfigList",
      },
      intersite_config: {
        value: policyTier0GatewayIntersiteConfigToHclTerraform(this._intersiteConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier0GatewayIntersiteConfigList",
      },
      locale_service: {
        value: cdktf.listMapperHcl(policyTier0GatewayLocaleServiceToHclTerraform, true)(this._localeService.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyTier0GatewayLocaleServiceList",
      },
      redistribution_config: {
        value: policyTier0GatewayRedistributionConfigToHclTerraform(this._redistributionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier0GatewayRedistributionConfigList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyTier0GatewayTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyTier0GatewayTagList",
      },
      vrf_config: {
        value: policyTier0GatewayVrfConfigToHclTerraform(this._vrfConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier0GatewayVrfConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
