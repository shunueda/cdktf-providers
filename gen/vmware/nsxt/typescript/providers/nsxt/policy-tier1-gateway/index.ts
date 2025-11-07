// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyTier1GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default rule logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#default_rule_logging PolicyTier1Gateway#default_rule_logging}
  */
  readonly defaultRuleLogging?: boolean | cdktf.IResolvable;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#description PolicyTier1Gateway#description}
  */
  readonly description?: string;
  /**
  * Policy path to DHCP server or relay configuration to use for this Tier1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#dhcp_config_path PolicyTier1Gateway#dhcp_config_path}
  */
  readonly dhcpConfigPath?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#display_name PolicyTier1Gateway#display_name}
  */
  readonly displayName: string;
  /**
  * The path of the edge cluster connected to this gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#edge_cluster_path PolicyTier1Gateway#edge_cluster_path}
  */
  readonly edgeClusterPath?: string;
  /**
  * Policy path to gateway QoS profile in egress direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#egress_qos_profile_path PolicyTier1Gateway#egress_qos_profile_path}
  */
  readonly egressQosProfilePath?: string;
  /**
  * Enable edge firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#enable_firewall PolicyTier1Gateway#enable_firewall}
  */
  readonly enableFirewall?: boolean | cdktf.IResolvable;
  /**
  * Enable standby relocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#enable_standby_relocation PolicyTier1Gateway#enable_standby_relocation}
  */
  readonly enableStandbyRelocation?: boolean | cdktf.IResolvable;
  /**
  * Failover mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#failover_mode PolicyTier1Gateway#failover_mode}
  */
  readonly failoverMode?: string;
  /**
  * Force whitelisting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#force_whitelisting PolicyTier1Gateway#force_whitelisting}
  */
  readonly forceWhitelisting?: boolean | cdktf.IResolvable;
  /**
  * High-availability Mode for Tier-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#ha_mode PolicyTier1Gateway#ha_mode}
  */
  readonly haMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#id PolicyTier1Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy path to gateway QoS profile in ingress direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#ingress_qos_profile_path PolicyTier1Gateway#ingress_qos_profile_path}
  */
  readonly ingressQosProfilePath?: string;
  /**
  * The path of an IPv6 DAD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#ipv6_dad_profile_path PolicyTier1Gateway#ipv6_dad_profile_path}
  */
  readonly ipv6DadProfilePath?: string;
  /**
  * The path of an IPv6 NDRA profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#ipv6_ndra_profile_path PolicyTier1Gateway#ipv6_ndra_profile_path}
  */
  readonly ipv6NdraProfilePath?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#nsx_id PolicyTier1Gateway#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Edge node allocation at different sizes for routing and load balancer service to meet performance and scalability requirements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#pool_allocation PolicyTier1Gateway#pool_allocation}
  */
  readonly poolAllocation?: string;
  /**
  * Enable different types of route advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#route_advertisement_types PolicyTier1Gateway#route_advertisement_types}
  */
  readonly routeAdvertisementTypes?: string[];
  /**
  * The path of the connected Tier0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#tier0_path PolicyTier1Gateway#tier0_path}
  */
  readonly tier0Path?: string;
  /**
  * Tier-1 Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#type PolicyTier1Gateway#type}
  */
  readonly type?: string;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#context PolicyTier1Gateway#context}
  */
  readonly context?: PolicyTier1GatewayContext;
  /**
  * intersite_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#intersite_config PolicyTier1Gateway#intersite_config}
  */
  readonly intersiteConfig?: PolicyTier1GatewayIntersiteConfig;
  /**
  * locale_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#locale_service PolicyTier1Gateway#locale_service}
  */
  readonly localeService?: PolicyTier1GatewayLocaleService[] | cdktf.IResolvable;
  /**
  * route_advertisement_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#route_advertisement_rule PolicyTier1Gateway#route_advertisement_rule}
  */
  readonly routeAdvertisementRule?: PolicyTier1GatewayRouteAdvertisementRule[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#tag PolicyTier1Gateway#tag}
  */
  readonly tag?: PolicyTier1GatewayTag[] | cdktf.IResolvable;
}
export interface PolicyTier1GatewayContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#project_id PolicyTier1Gateway#project_id}
  */
  readonly projectId: string;
}

export function policyTier1GatewayContextToTerraform(struct?: PolicyTier1GatewayContextOutputReference | PolicyTier1GatewayContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyTier1GatewayContextToHclTerraform(struct?: PolicyTier1GatewayContextOutputReference | PolicyTier1GatewayContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier1GatewayContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyTier1GatewayContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier1GatewayContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface PolicyTier1GatewayIntersiteConfig {
  /**
  * Fallback sites to be used as new primary site on current primary site failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#fallback_site_paths PolicyTier1Gateway#fallback_site_paths}
  */
  readonly fallbackSitePaths?: string[];
  /**
  * Primary egress site for gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#primary_site_path PolicyTier1Gateway#primary_site_path}
  */
  readonly primarySitePath?: string;
  /**
  * IPv4 subnet for inter-site transit segment connecting service routers across sites for stretched gateway. For IPv6 link local subnet is auto configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#transit_subnet PolicyTier1Gateway#transit_subnet}
  */
  readonly transitSubnet?: string;
}

export function policyTier1GatewayIntersiteConfigToTerraform(struct?: PolicyTier1GatewayIntersiteConfigOutputReference | PolicyTier1GatewayIntersiteConfig): any {
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


export function policyTier1GatewayIntersiteConfigToHclTerraform(struct?: PolicyTier1GatewayIntersiteConfigOutputReference | PolicyTier1GatewayIntersiteConfig): any {
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

export class PolicyTier1GatewayIntersiteConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyTier1GatewayIntersiteConfig | undefined {
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

  public set internalValue(value: PolicyTier1GatewayIntersiteConfig | undefined) {
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
export interface PolicyTier1GatewayLocaleService {
  /**
  * The path of the edge cluster connected to this gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#edge_cluster_path PolicyTier1Gateway#edge_cluster_path}
  */
  readonly edgeClusterPath: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#nsx_id PolicyTier1Gateway#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Paths of specific edge nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#preferred_edge_paths PolicyTier1Gateway#preferred_edge_paths}
  */
  readonly preferredEdgePaths?: string[];
}

export function policyTier1GatewayLocaleServiceToTerraform(struct?: PolicyTier1GatewayLocaleService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edge_cluster_path: cdktf.stringToTerraform(struct!.edgeClusterPath),
    nsx_id: cdktf.stringToTerraform(struct!.nsxId),
    preferred_edge_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredEdgePaths),
  }
}


export function policyTier1GatewayLocaleServiceToHclTerraform(struct?: PolicyTier1GatewayLocaleService | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier1GatewayLocaleServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier1GatewayLocaleService | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier1GatewayLocaleService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edgeClusterPath = undefined;
      this._nsxId = undefined;
      this._preferredEdgePaths = undefined;
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
}

export class PolicyTier1GatewayLocaleServiceList extends cdktf.ComplexList {
  public internalValue? : PolicyTier1GatewayLocaleService[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier1GatewayLocaleServiceOutputReference {
    return new PolicyTier1GatewayLocaleServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier1GatewayRouteAdvertisementRule {
  /**
  * Action to advertise filtered routes to the connected Tier0 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#action PolicyTier1Gateway#action}
  */
  readonly action?: string;
  /**
  * Name of this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#name PolicyTier1Gateway#name}
  */
  readonly name: string;
  /**
  * Prefix operator to apply on networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#prefix_operator PolicyTier1Gateway#prefix_operator}
  */
  readonly prefixOperator?: string;
  /**
  * Enable different types of route advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#route_advertisement_types PolicyTier1Gateway#route_advertisement_types}
  */
  readonly routeAdvertisementTypes?: string[];
  /**
  * List of network CIDRs to be routed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#subnets PolicyTier1Gateway#subnets}
  */
  readonly subnets: string[];
}

export function policyTier1GatewayRouteAdvertisementRuleToTerraform(struct?: PolicyTier1GatewayRouteAdvertisementRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    prefix_operator: cdktf.stringToTerraform(struct!.prefixOperator),
    route_advertisement_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeAdvertisementTypes),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function policyTier1GatewayRouteAdvertisementRuleToHclTerraform(struct?: PolicyTier1GatewayRouteAdvertisementRule | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_operator: {
      value: cdktf.stringToHclTerraform(struct!.prefixOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_advertisement_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeAdvertisementTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier1GatewayRouteAdvertisementRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier1GatewayRouteAdvertisementRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefixOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixOperator = this._prefixOperator;
    }
    if (this._routeAdvertisementTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeAdvertisementTypes = this._routeAdvertisementTypes;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier1GatewayRouteAdvertisementRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._prefixOperator = undefined;
      this._routeAdvertisementTypes = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._prefixOperator = value.prefixOperator;
      this._routeAdvertisementTypes = value.routeAdvertisementTypes;
      this._subnets = value.subnets;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // prefix_operator - computed: false, optional: true, required: false
  private _prefixOperator?: string; 
  public get prefixOperator() {
    return this.getStringAttribute('prefix_operator');
  }
  public set prefixOperator(value: string) {
    this._prefixOperator = value;
  }
  public resetPrefixOperator() {
    this._prefixOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixOperatorInput() {
    return this._prefixOperator;
  }

  // route_advertisement_types - computed: false, optional: true, required: false
  private _routeAdvertisementTypes?: string[]; 
  public get routeAdvertisementTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('route_advertisement_types'));
  }
  public set routeAdvertisementTypes(value: string[]) {
    this._routeAdvertisementTypes = value;
  }
  public resetRouteAdvertisementTypes() {
    this._routeAdvertisementTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeAdvertisementTypesInput() {
    return this._routeAdvertisementTypes;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class PolicyTier1GatewayRouteAdvertisementRuleList extends cdktf.ComplexList {
  public internalValue? : PolicyTier1GatewayRouteAdvertisementRule[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier1GatewayRouteAdvertisementRuleOutputReference {
    return new PolicyTier1GatewayRouteAdvertisementRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTier1GatewayTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#scope PolicyTier1Gateway#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#tag PolicyTier1Gateway#tag}
  */
  readonly tag?: string;
}

export function policyTier1GatewayTagToTerraform(struct?: PolicyTier1GatewayTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyTier1GatewayTagToHclTerraform(struct?: PolicyTier1GatewayTag | cdktf.IResolvable): any {
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

export class PolicyTier1GatewayTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier1GatewayTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyTier1GatewayTag | cdktf.IResolvable | undefined) {
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

export class PolicyTier1GatewayTagList extends cdktf.ComplexList {
  public internalValue? : PolicyTier1GatewayTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier1GatewayTagOutputReference {
    return new PolicyTier1GatewayTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway nsxt_policy_tier1_gateway}
*/
export class PolicyTier1Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_tier1_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyTier1Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyTier1Gateway to import
  * @param importFromId The id of the existing PolicyTier1Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyTier1Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_tier1_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway nsxt_policy_tier1_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyTier1GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyTier1GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_tier1_gateway',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
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
    this._egressQosProfilePath = config.egressQosProfilePath;
    this._enableFirewall = config.enableFirewall;
    this._enableStandbyRelocation = config.enableStandbyRelocation;
    this._failoverMode = config.failoverMode;
    this._forceWhitelisting = config.forceWhitelisting;
    this._haMode = config.haMode;
    this._id = config.id;
    this._ingressQosProfilePath = config.ingressQosProfilePath;
    this._ipv6DadProfilePath = config.ipv6DadProfilePath;
    this._ipv6NdraProfilePath = config.ipv6NdraProfilePath;
    this._nsxId = config.nsxId;
    this._poolAllocation = config.poolAllocation;
    this._routeAdvertisementTypes = config.routeAdvertisementTypes;
    this._tier0Path = config.tier0Path;
    this._type = config.type;
    this._context.internalValue = config.context;
    this._intersiteConfig.internalValue = config.intersiteConfig;
    this._localeService.internalValue = config.localeService;
    this._routeAdvertisementRule.internalValue = config.routeAdvertisementRule;
    this._tag.internalValue = config.tag;
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

  // egress_qos_profile_path - computed: false, optional: true, required: false
  private _egressQosProfilePath?: string; 
  public get egressQosProfilePath() {
    return this.getStringAttribute('egress_qos_profile_path');
  }
  public set egressQosProfilePath(value: string) {
    this._egressQosProfilePath = value;
  }
  public resetEgressQosProfilePath() {
    this._egressQosProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressQosProfilePathInput() {
    return this._egressQosProfilePath;
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

  // enable_standby_relocation - computed: false, optional: true, required: false
  private _enableStandbyRelocation?: boolean | cdktf.IResolvable; 
  public get enableStandbyRelocation() {
    return this.getBooleanAttribute('enable_standby_relocation');
  }
  public set enableStandbyRelocation(value: boolean | cdktf.IResolvable) {
    this._enableStandbyRelocation = value;
  }
  public resetEnableStandbyRelocation() {
    this._enableStandbyRelocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStandbyRelocationInput() {
    return this._enableStandbyRelocation;
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

  // ha_mode - computed: true, optional: true, required: false
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

  // ingress_qos_profile_path - computed: false, optional: true, required: false
  private _ingressQosProfilePath?: string; 
  public get ingressQosProfilePath() {
    return this.getStringAttribute('ingress_qos_profile_path');
  }
  public set ingressQosProfilePath(value: string) {
    this._ingressQosProfilePath = value;
  }
  public resetIngressQosProfilePath() {
    this._ingressQosProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressQosProfilePathInput() {
    return this._ingressQosProfilePath;
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

  // pool_allocation - computed: false, optional: true, required: false
  private _poolAllocation?: string; 
  public get poolAllocation() {
    return this.getStringAttribute('pool_allocation');
  }
  public set poolAllocation(value: string) {
    this._poolAllocation = value;
  }
  public resetPoolAllocation() {
    this._poolAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolAllocationInput() {
    return this._poolAllocation;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // route_advertisement_types - computed: true, optional: true, required: false
  private _routeAdvertisementTypes?: string[]; 
  public get routeAdvertisementTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('route_advertisement_types'));
  }
  public set routeAdvertisementTypes(value: string[]) {
    this._routeAdvertisementTypes = value;
  }
  public resetRouteAdvertisementTypes() {
    this._routeAdvertisementTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeAdvertisementTypesInput() {
    return this._routeAdvertisementTypes;
  }

  // tier0_path - computed: false, optional: true, required: false
  private _tier0Path?: string; 
  public get tier0Path() {
    return this.getStringAttribute('tier0_path');
  }
  public set tier0Path(value: string) {
    this._tier0Path = value;
  }
  public resetTier0Path() {
    this._tier0Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tier0PathInput() {
    return this._tier0Path;
  }

  // type - computed: false, optional: true, required: false
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

  // context - computed: false, optional: true, required: false
  private _context = new PolicyTier1GatewayContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyTier1GatewayContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // intersite_config - computed: false, optional: true, required: false
  private _intersiteConfig = new PolicyTier1GatewayIntersiteConfigOutputReference(this, "intersite_config");
  public get intersiteConfig() {
    return this._intersiteConfig;
  }
  public putIntersiteConfig(value: PolicyTier1GatewayIntersiteConfig) {
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
  private _localeService = new PolicyTier1GatewayLocaleServiceList(this, "locale_service", true);
  public get localeService() {
    return this._localeService;
  }
  public putLocaleService(value: PolicyTier1GatewayLocaleService[] | cdktf.IResolvable) {
    this._localeService.internalValue = value;
  }
  public resetLocaleService() {
    this._localeService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeServiceInput() {
    return this._localeService.internalValue;
  }

  // route_advertisement_rule - computed: false, optional: true, required: false
  private _routeAdvertisementRule = new PolicyTier1GatewayRouteAdvertisementRuleList(this, "route_advertisement_rule", false);
  public get routeAdvertisementRule() {
    return this._routeAdvertisementRule;
  }
  public putRouteAdvertisementRule(value: PolicyTier1GatewayRouteAdvertisementRule[] | cdktf.IResolvable) {
    this._routeAdvertisementRule.internalValue = value;
  }
  public resetRouteAdvertisementRule() {
    this._routeAdvertisementRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeAdvertisementRuleInput() {
    return this._routeAdvertisementRule.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyTier1GatewayTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyTier1GatewayTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
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
      egress_qos_profile_path: cdktf.stringToTerraform(this._egressQosProfilePath),
      enable_firewall: cdktf.booleanToTerraform(this._enableFirewall),
      enable_standby_relocation: cdktf.booleanToTerraform(this._enableStandbyRelocation),
      failover_mode: cdktf.stringToTerraform(this._failoverMode),
      force_whitelisting: cdktf.booleanToTerraform(this._forceWhitelisting),
      ha_mode: cdktf.stringToTerraform(this._haMode),
      id: cdktf.stringToTerraform(this._id),
      ingress_qos_profile_path: cdktf.stringToTerraform(this._ingressQosProfilePath),
      ipv6_dad_profile_path: cdktf.stringToTerraform(this._ipv6DadProfilePath),
      ipv6_ndra_profile_path: cdktf.stringToTerraform(this._ipv6NdraProfilePath),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      pool_allocation: cdktf.stringToTerraform(this._poolAllocation),
      route_advertisement_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routeAdvertisementTypes),
      tier0_path: cdktf.stringToTerraform(this._tier0Path),
      type: cdktf.stringToTerraform(this._type),
      context: policyTier1GatewayContextToTerraform(this._context.internalValue),
      intersite_config: policyTier1GatewayIntersiteConfigToTerraform(this._intersiteConfig.internalValue),
      locale_service: cdktf.listMapper(policyTier1GatewayLocaleServiceToTerraform, true)(this._localeService.internalValue),
      route_advertisement_rule: cdktf.listMapper(policyTier1GatewayRouteAdvertisementRuleToTerraform, true)(this._routeAdvertisementRule.internalValue),
      tag: cdktf.listMapper(policyTier1GatewayTagToTerraform, true)(this._tag.internalValue),
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
      egress_qos_profile_path: {
        value: cdktf.stringToHclTerraform(this._egressQosProfilePath),
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
      enable_standby_relocation: {
        value: cdktf.booleanToHclTerraform(this._enableStandbyRelocation),
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
      ingress_qos_profile_path: {
        value: cdktf.stringToHclTerraform(this._ingressQosProfilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_allocation: {
        value: cdktf.stringToHclTerraform(this._poolAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_advertisement_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routeAdvertisementTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tier0_path: {
        value: cdktf.stringToHclTerraform(this._tier0Path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: policyTier1GatewayContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier1GatewayContextList",
      },
      intersite_config: {
        value: policyTier1GatewayIntersiteConfigToHclTerraform(this._intersiteConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier1GatewayIntersiteConfigList",
      },
      locale_service: {
        value: cdktf.listMapperHcl(policyTier1GatewayLocaleServiceToHclTerraform, true)(this._localeService.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyTier1GatewayLocaleServiceList",
      },
      route_advertisement_rule: {
        value: cdktf.listMapperHcl(policyTier1GatewayRouteAdvertisementRuleToHclTerraform, true)(this._routeAdvertisementRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier1GatewayRouteAdvertisementRuleList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyTier1GatewayTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyTier1GatewayTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
