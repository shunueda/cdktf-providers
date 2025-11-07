// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoBgpFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set BGP address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#address_families CiscoBgpFeatureTemplate#address_families}
  */
  readonly addressFamilies?: CiscoBgpFeatureTemplateAddressFamilies[] | cdktf.IResolvable;
  /**
  * Compare MEDs from all ASs when selecting active BGP paths
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#always_compare_med CiscoBgpFeatureTemplate#always_compare_med}
  */
  readonly alwaysCompareMed?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#always_compare_med_variable CiscoBgpFeatureTemplate#always_compare_med_variable}
  */
  readonly alwaysCompareMedVariable?: string;
  /**
  * Set autonomous system number <1..4294967295> or <XX.YY>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#as_number CiscoBgpFeatureTemplate#as_number}
  */
  readonly asNumber?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#as_number_variable CiscoBgpFeatureTemplate#as_number_variable}
  */
  readonly asNumberVariable?: string;
  /**
  * Compare router IDs when selecting active BGP paths
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#compare_router_id CiscoBgpFeatureTemplate#compare_router_id}
  */
  readonly compareRouterId?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#compare_router_id_variable CiscoBgpFeatureTemplate#compare_router_id_variable}
  */
  readonly compareRouterIdVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#description CiscoBgpFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * Compare MEDs from all routes from same AS when selecting active BGP paths
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#deterministic_med CiscoBgpFeatureTemplate#deterministic_med}
  */
  readonly deterministicMed?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#deterministic_med_variable CiscoBgpFeatureTemplate#deterministic_med_variable}
  */
  readonly deterministicMedVariable?: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#device_types CiscoBgpFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Set administrative distance for external BGP routes
  *   - Range: `1`-`255`
  *   - Default value: `20`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#distance_external CiscoBgpFeatureTemplate#distance_external}
  */
  readonly distanceExternal?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#distance_external_variable CiscoBgpFeatureTemplate#distance_external_variable}
  */
  readonly distanceExternalVariable?: string;
  /**
  * Set administrative distance for internal BGP routes
  *   - Range: `1`-`255`
  *   - Default value: `200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#distance_internal CiscoBgpFeatureTemplate#distance_internal}
  */
  readonly distanceInternal?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#distance_internal_variable CiscoBgpFeatureTemplate#distance_internal_variable}
  */
  readonly distanceInternalVariable?: string;
  /**
  * Set administrative distance for local BGP routes
  *   - Range: `1`-`255`
  *   - Default value: `20`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#distance_local CiscoBgpFeatureTemplate#distance_local}
  */
  readonly distanceLocal?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#distance_local_variable CiscoBgpFeatureTemplate#distance_local_variable}
  */
  readonly distanceLocalVariable?: string;
  /**
  * Set the interval when BGP considers a neighbor to be down
  *   - Range: `0`-`65535`
  *   - Default value: `180`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#holdtime CiscoBgpFeatureTemplate#holdtime}
  */
  readonly holdtime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#holdtime_variable CiscoBgpFeatureTemplate#holdtime_variable}
  */
  readonly holdtimeVariable?: string;
  /**
  * Set BGP neighbors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#ipv4_neighbors CiscoBgpFeatureTemplate#ipv4_neighbors}
  */
  readonly ipv4Neighbors?: CiscoBgpFeatureTemplateIpv4Neighbors[] | cdktf.IResolvable;
  /**
  * Router Target for IPV4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#ipv4_route_targets CiscoBgpFeatureTemplate#ipv4_route_targets}
  */
  readonly ipv4RouteTargets?: CiscoBgpFeatureTemplateIpv4RouteTargets[] | cdktf.IResolvable;
  /**
  * Set BGP IPv6 neighbors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#ipv6_neighbors CiscoBgpFeatureTemplate#ipv6_neighbors}
  */
  readonly ipv6Neighbors?: CiscoBgpFeatureTemplateIpv6Neighbors[] | cdktf.IResolvable;
  /**
  * Router Target for IPV6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#ipv6_route_targets CiscoBgpFeatureTemplate#ipv6_route_targets}
  */
  readonly ipv6RouteTargets?: CiscoBgpFeatureTemplateIpv6RouteTargets[] | cdktf.IResolvable;
  /**
  * Set how often keepalive messages are sent to BGP peer
  *   - Range: `0`-`65535`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#keepalive CiscoBgpFeatureTemplate#keepalive}
  */
  readonly keepalive?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#keepalive_variable CiscoBgpFeatureTemplate#keepalive_variable}
  */
  readonly keepaliveVariable?: string;
  /**
  * If path has no MED, consider it to be worst path when selecting active BGP paths
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#missing_med_worst CiscoBgpFeatureTemplate#missing_med_worst}
  */
  readonly missingMedWorst?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#missing_med_worst_variable CiscoBgpFeatureTemplate#missing_med_worst_variable}
  */
  readonly missingMedWorstVariable?: string;
  /**
  * MPLS BGP Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#mpls_interfaces CiscoBgpFeatureTemplate#mpls_interfaces}
  */
  readonly mplsInterfaces?: CiscoBgpFeatureTemplateMplsInterfaces[] | cdktf.IResolvable;
  /**
  * Ignore AS for multipath selection
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#multipath_relax CiscoBgpFeatureTemplate#multipath_relax}
  */
  readonly multipathRelax?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#multipath_relax_variable CiscoBgpFeatureTemplate#multipath_relax_variable}
  */
  readonly multipathRelaxVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#name CiscoBgpFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Propagate AS Path 
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#propagate_aspath CiscoBgpFeatureTemplate#propagate_aspath}
  */
  readonly propagateAspath?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#propagate_aspath_variable CiscoBgpFeatureTemplate#propagate_aspath_variable}
  */
  readonly propagateAspathVariable?: string;
  /**
  * Propagate Community
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#propagate_community CiscoBgpFeatureTemplate#propagate_community}
  */
  readonly propagateCommunity?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#propagate_community_variable CiscoBgpFeatureTemplate#propagate_community_variable}
  */
  readonly propagateCommunityVariable?: string;
  /**
  * Configure BGP router identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#router_id CiscoBgpFeatureTemplate#router_id}
  */
  readonly routerId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#router_id_variable CiscoBgpFeatureTemplate#router_id_variable}
  */
  readonly routerIdVariable?: string;
  /**
  * Enable or disable BGP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#shutdown CiscoBgpFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#shutdown_variable CiscoBgpFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
}
export interface CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddresses {
  /**
  * Set AS set path information
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#as_set_path CiscoBgpFeatureTemplate#as_set_path}
  */
  readonly asSetPath?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#as_set_path_variable CiscoBgpFeatureTemplate#as_set_path_variable}
  */
  readonly asSetPathVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure the prefixes to aggregate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#prefix CiscoBgpFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#prefix_variable CiscoBgpFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
  /**
  * Filter out more specific routes from updates
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#summary_only CiscoBgpFeatureTemplate#summary_only}
  */
  readonly summaryOnly?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#summary_only_variable CiscoBgpFeatureTemplate#summary_only_variable}
  */
  readonly summaryOnlyVariable?: string;
}

export function ciscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesToTerraform(struct?: CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_set_path: cdktf.booleanToTerraform(struct!.asSetPath),
    as_set_path_variable: cdktf.stringToTerraform(struct!.asSetPathVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
    summary_only: cdktf.booleanToTerraform(struct!.summaryOnly),
    summary_only_variable: cdktf.stringToTerraform(struct!.summaryOnlyVariable),
  }
}


export function ciscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesToHclTerraform(struct?: CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_set_path: {
      value: cdktf.booleanToHclTerraform(struct!.asSetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    as_set_path_variable: {
      value: cdktf.stringToHclTerraform(struct!.asSetPathVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixVariable),
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
    summary_only_variable: {
      value: cdktf.stringToHclTerraform(struct!.summaryOnlyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asSetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSetPath = this._asSetPath;
    }
    if (this._asSetPathVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSetPathVariable = this._asSetPathVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    if (this._summaryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnly = this._summaryOnly;
    }
    if (this._summaryOnlyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnlyVariable = this._summaryOnlyVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asSetPath = undefined;
      this._asSetPathVariable = undefined;
      this._optional = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
      this._summaryOnly = undefined;
      this._summaryOnlyVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asSetPath = value.asSetPath;
      this._asSetPathVariable = value.asSetPathVariable;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
      this._summaryOnly = value.summaryOnly;
      this._summaryOnlyVariable = value.summaryOnlyVariable;
    }
  }

  // as_set_path - computed: false, optional: true, required: false
  private _asSetPath?: boolean | cdktf.IResolvable; 
  public get asSetPath() {
    return this.getBooleanAttribute('as_set_path');
  }
  public set asSetPath(value: boolean | cdktf.IResolvable) {
    this._asSetPath = value;
  }
  public resetAsSetPath() {
    this._asSetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetPathInput() {
    return this._asSetPath;
  }

  // as_set_path_variable - computed: false, optional: true, required: false
  private _asSetPathVariable?: string; 
  public get asSetPathVariable() {
    return this.getStringAttribute('as_set_path_variable');
  }
  public set asSetPathVariable(value: string) {
    this._asSetPathVariable = value;
  }
  public resetAsSetPathVariable() {
    this._asSetPathVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetPathVariableInput() {
    return this._asSetPathVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // prefix_variable - computed: false, optional: true, required: false
  private _prefixVariable?: string; 
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
  public set prefixVariable(value: string) {
    this._prefixVariable = value;
  }
  public resetPrefixVariable() {
    this._prefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVariableInput() {
    return this._prefixVariable;
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

  // summary_only_variable - computed: false, optional: true, required: false
  private _summaryOnlyVariable?: string; 
  public get summaryOnlyVariable() {
    return this.getStringAttribute('summary_only_variable');
  }
  public set summaryOnlyVariable(value: string) {
    this._summaryOnlyVariable = value;
  }
  public resetSummaryOnlyVariable() {
    this._summaryOnlyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryOnlyVariableInput() {
    return this._summaryOnlyVariable;
  }
}

export class CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddresses[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesOutputReference {
    return new CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateAddressFamiliesIpv4Networks {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure the prefixes for BGP to announce
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#prefix CiscoBgpFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#prefix_variable CiscoBgpFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
}

export function ciscoBgpFeatureTemplateAddressFamiliesIpv4NetworksToTerraform(struct?: CiscoBgpFeatureTemplateAddressFamiliesIpv4Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
  }
}


export function ciscoBgpFeatureTemplateAddressFamiliesIpv4NetworksToHclTerraform(struct?: CiscoBgpFeatureTemplateAddressFamiliesIpv4Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateAddressFamiliesIpv4NetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateAddressFamiliesIpv4Networks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateAddressFamiliesIpv4Networks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // prefix_variable - computed: false, optional: true, required: false
  private _prefixVariable?: string; 
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
  public set prefixVariable(value: string) {
    this._prefixVariable = value;
  }
  public resetPrefixVariable() {
    this._prefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVariableInput() {
    return this._prefixVariable;
  }
}

export class CiscoBgpFeatureTemplateAddressFamiliesIpv4NetworksList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateAddressFamiliesIpv4Networks[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateAddressFamiliesIpv4NetworksOutputReference {
    return new CiscoBgpFeatureTemplateAddressFamiliesIpv4NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddresses {
  /**
  * Set AS set path information
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#as_set_path CiscoBgpFeatureTemplate#as_set_path}
  */
  readonly asSetPath?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#as_set_path_variable CiscoBgpFeatureTemplate#as_set_path_variable}
  */
  readonly asSetPathVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure the IPv6 prefixes to aggregate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#prefix CiscoBgpFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#prefix_variable CiscoBgpFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
  /**
  * Filter out more specific routes from updates
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#summary_only CiscoBgpFeatureTemplate#summary_only}
  */
  readonly summaryOnly?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#summary_only_variable CiscoBgpFeatureTemplate#summary_only_variable}
  */
  readonly summaryOnlyVariable?: string;
}

export function ciscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesToTerraform(struct?: CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_set_path: cdktf.booleanToTerraform(struct!.asSetPath),
    as_set_path_variable: cdktf.stringToTerraform(struct!.asSetPathVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
    summary_only: cdktf.booleanToTerraform(struct!.summaryOnly),
    summary_only_variable: cdktf.stringToTerraform(struct!.summaryOnlyVariable),
  }
}


export function ciscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesToHclTerraform(struct?: CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_set_path: {
      value: cdktf.booleanToHclTerraform(struct!.asSetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    as_set_path_variable: {
      value: cdktf.stringToHclTerraform(struct!.asSetPathVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixVariable),
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
    summary_only_variable: {
      value: cdktf.stringToHclTerraform(struct!.summaryOnlyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asSetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSetPath = this._asSetPath;
    }
    if (this._asSetPathVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSetPathVariable = this._asSetPathVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    if (this._summaryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnly = this._summaryOnly;
    }
    if (this._summaryOnlyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnlyVariable = this._summaryOnlyVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asSetPath = undefined;
      this._asSetPathVariable = undefined;
      this._optional = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
      this._summaryOnly = undefined;
      this._summaryOnlyVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asSetPath = value.asSetPath;
      this._asSetPathVariable = value.asSetPathVariable;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
      this._summaryOnly = value.summaryOnly;
      this._summaryOnlyVariable = value.summaryOnlyVariable;
    }
  }

  // as_set_path - computed: false, optional: true, required: false
  private _asSetPath?: boolean | cdktf.IResolvable; 
  public get asSetPath() {
    return this.getBooleanAttribute('as_set_path');
  }
  public set asSetPath(value: boolean | cdktf.IResolvable) {
    this._asSetPath = value;
  }
  public resetAsSetPath() {
    this._asSetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetPathInput() {
    return this._asSetPath;
  }

  // as_set_path_variable - computed: false, optional: true, required: false
  private _asSetPathVariable?: string; 
  public get asSetPathVariable() {
    return this.getStringAttribute('as_set_path_variable');
  }
  public set asSetPathVariable(value: string) {
    this._asSetPathVariable = value;
  }
  public resetAsSetPathVariable() {
    this._asSetPathVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetPathVariableInput() {
    return this._asSetPathVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // prefix_variable - computed: false, optional: true, required: false
  private _prefixVariable?: string; 
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
  public set prefixVariable(value: string) {
    this._prefixVariable = value;
  }
  public resetPrefixVariable() {
    this._prefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVariableInput() {
    return this._prefixVariable;
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

  // summary_only_variable - computed: false, optional: true, required: false
  private _summaryOnlyVariable?: string; 
  public get summaryOnlyVariable() {
    return this.getStringAttribute('summary_only_variable');
  }
  public set summaryOnlyVariable(value: string) {
    this._summaryOnlyVariable = value;
  }
  public resetSummaryOnlyVariable() {
    this._summaryOnlyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryOnlyVariableInput() {
    return this._summaryOnlyVariable;
  }
}

export class CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddresses[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesOutputReference {
    return new CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateAddressFamiliesIpv6Networks {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure the prefixes for BGP to announce
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#prefix CiscoBgpFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#prefix_variable CiscoBgpFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
}

export function ciscoBgpFeatureTemplateAddressFamiliesIpv6NetworksToTerraform(struct?: CiscoBgpFeatureTemplateAddressFamiliesIpv6Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
  }
}


export function ciscoBgpFeatureTemplateAddressFamiliesIpv6NetworksToHclTerraform(struct?: CiscoBgpFeatureTemplateAddressFamiliesIpv6Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateAddressFamiliesIpv6NetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateAddressFamiliesIpv6Networks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateAddressFamiliesIpv6Networks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // prefix_variable - computed: false, optional: true, required: false
  private _prefixVariable?: string; 
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
  public set prefixVariable(value: string) {
    this._prefixVariable = value;
  }
  public resetPrefixVariable() {
    this._prefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVariableInput() {
    return this._prefixVariable;
  }
}

export class CiscoBgpFeatureTemplateAddressFamiliesIpv6NetworksList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateAddressFamiliesIpv6Networks[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateAddressFamiliesIpv6NetworksOutputReference {
    return new CiscoBgpFeatureTemplateAddressFamiliesIpv6NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutes {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set the protocol to redistribute routes from
  *   - Choices: `static`, `connected`, `ospf`, `ospfv3`, `omp`, `eigrp`, `nat`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#protocol CiscoBgpFeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#protocol_variable CiscoBgpFeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Configure policy to apply to prefixes received from BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#route_policy CiscoBgpFeatureTemplate#route_policy}
  */
  readonly routePolicy?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#route_policy_variable CiscoBgpFeatureTemplate#route_policy_variable}
  */
  readonly routePolicyVariable?: string;
}

export function ciscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesToTerraform(struct?: CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
    route_policy_variable: cdktf.stringToTerraform(struct!.routePolicyVariable),
  }
}


export function ciscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesToHclTerraform(struct?: CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
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
    protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.protocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy_variable: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    if (this._routePolicyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyVariable = this._routePolicyVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._routePolicy = undefined;
      this._routePolicyVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._routePolicy = value.routePolicy;
      this._routePolicyVariable = value.routePolicyVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // protocol_variable - computed: false, optional: true, required: false
  private _protocolVariable?: string; 
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }
  public set protocolVariable(value: string) {
    this._protocolVariable = value;
  }
  public resetProtocolVariable() {
    this._protocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVariableInput() {
    return this._protocolVariable;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }

  // route_policy_variable - computed: false, optional: true, required: false
  private _routePolicyVariable?: string; 
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
  public set routePolicyVariable(value: string) {
    this._routePolicyVariable = value;
  }
  public resetRoutePolicyVariable() {
    this._routePolicyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyVariableInput() {
    return this._routePolicyVariable;
  }
}

export class CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutes[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesOutputReference {
    return new CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateAddressFamilies {
  /**
  * BGP Default Information Originate
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#default_information_originate CiscoBgpFeatureTemplate#default_information_originate}
  */
  readonly defaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#default_information_originate_variable CiscoBgpFeatureTemplate#default_information_originate_variable}
  */
  readonly defaultInformationOriginateVariable?: string;
  /**
  * Set BGP address family
  *   - Choices: `ipv4-unicast`, `ipv6-unicast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#family_type CiscoBgpFeatureTemplate#family_type}
  */
  readonly familyType?: string;
  /**
  * Aggregate prefixes in specific range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#ipv4_aggregate_addresses CiscoBgpFeatureTemplate#ipv4_aggregate_addresses}
  */
  readonly ipv4AggregateAddresses?: CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddresses[] | cdktf.IResolvable;
  /**
  * Configure the networks for BGP to advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#ipv4_networks CiscoBgpFeatureTemplate#ipv4_networks}
  */
  readonly ipv4Networks?: CiscoBgpFeatureTemplateAddressFamiliesIpv4Networks[] | cdktf.IResolvable;
  /**
  * IPv6 Aggregate prefixes in specific range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#ipv6_aggregate_addresses CiscoBgpFeatureTemplate#ipv6_aggregate_addresses}
  */
  readonly ipv6AggregateAddresses?: CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddresses[] | cdktf.IResolvable;
  /**
  * Configure the networks for BGP to advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#ipv6_networks CiscoBgpFeatureTemplate#ipv6_networks}
  */
  readonly ipv6Networks?: CiscoBgpFeatureTemplateAddressFamiliesIpv6Networks[] | cdktf.IResolvable;
  /**
  * Set maximum number of parallel IBGP paths for multipath load sharing
  *   - Range: `0`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_paths CiscoBgpFeatureTemplate#maximum_paths}
  */
  readonly maximumPaths?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_paths_variable CiscoBgpFeatureTemplate#maximum_paths_variable}
  */
  readonly maximumPathsVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Redistribute routes into BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#redistribute_routes CiscoBgpFeatureTemplate#redistribute_routes}
  */
  readonly redistributeRoutes?: CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutes[] | cdktf.IResolvable;
  /**
  * Filter
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#table_map_filter CiscoBgpFeatureTemplate#table_map_filter}
  */
  readonly tableMapFilter?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#table_map_filter_variable CiscoBgpFeatureTemplate#table_map_filter_variable}
  */
  readonly tableMapFilterVariable?: string;
  /**
  * Map external entry attributes into routing table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#table_map_policy CiscoBgpFeatureTemplate#table_map_policy}
  */
  readonly tableMapPolicy?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#table_map_policy_variable CiscoBgpFeatureTemplate#table_map_policy_variable}
  */
  readonly tableMapPolicyVariable?: string;
}

export function ciscoBgpFeatureTemplateAddressFamiliesToTerraform(struct?: CiscoBgpFeatureTemplateAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_information_originate: cdktf.booleanToTerraform(struct!.defaultInformationOriginate),
    default_information_originate_variable: cdktf.stringToTerraform(struct!.defaultInformationOriginateVariable),
    family_type: cdktf.stringToTerraform(struct!.familyType),
    ipv4_aggregate_addresses: cdktf.listMapper(ciscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesToTerraform, false)(struct!.ipv4AggregateAddresses),
    ipv4_networks: cdktf.listMapper(ciscoBgpFeatureTemplateAddressFamiliesIpv4NetworksToTerraform, false)(struct!.ipv4Networks),
    ipv6_aggregate_addresses: cdktf.listMapper(ciscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesToTerraform, false)(struct!.ipv6AggregateAddresses),
    ipv6_networks: cdktf.listMapper(ciscoBgpFeatureTemplateAddressFamiliesIpv6NetworksToTerraform, false)(struct!.ipv6Networks),
    maximum_paths: cdktf.numberToTerraform(struct!.maximumPaths),
    maximum_paths_variable: cdktf.stringToTerraform(struct!.maximumPathsVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    redistribute_routes: cdktf.listMapper(ciscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesToTerraform, false)(struct!.redistributeRoutes),
    table_map_filter: cdktf.booleanToTerraform(struct!.tableMapFilter),
    table_map_filter_variable: cdktf.stringToTerraform(struct!.tableMapFilterVariable),
    table_map_policy: cdktf.stringToTerraform(struct!.tableMapPolicy),
    table_map_policy_variable: cdktf.stringToTerraform(struct!.tableMapPolicyVariable),
  }
}


export function ciscoBgpFeatureTemplateAddressFamiliesToHclTerraform(struct?: CiscoBgpFeatureTemplateAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_information_originate: {
      value: cdktf.booleanToHclTerraform(struct!.defaultInformationOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_information_originate_variable: {
      value: cdktf.stringToHclTerraform(struct!.defaultInformationOriginateVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family_type: {
      value: cdktf.stringToHclTerraform(struct!.familyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_aggregate_addresses: {
      value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesToHclTerraform, false)(struct!.ipv4AggregateAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesList",
    },
    ipv4_networks: {
      value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateAddressFamiliesIpv4NetworksToHclTerraform, false)(struct!.ipv4Networks),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoBgpFeatureTemplateAddressFamiliesIpv4NetworksList",
    },
    ipv6_aggregate_addresses: {
      value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesToHclTerraform, false)(struct!.ipv6AggregateAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesList",
    },
    ipv6_networks: {
      value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateAddressFamiliesIpv6NetworksToHclTerraform, false)(struct!.ipv6Networks),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoBgpFeatureTemplateAddressFamiliesIpv6NetworksList",
    },
    maximum_paths: {
      value: cdktf.numberToHclTerraform(struct!.maximumPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_paths_variable: {
      value: cdktf.stringToHclTerraform(struct!.maximumPathsVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redistribute_routes: {
      value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesToHclTerraform, false)(struct!.redistributeRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesList",
    },
    table_map_filter: {
      value: cdktf.booleanToHclTerraform(struct!.tableMapFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    table_map_filter_variable: {
      value: cdktf.stringToHclTerraform(struct!.tableMapFilterVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_map_policy: {
      value: cdktf.stringToHclTerraform(struct!.tableMapPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_map_policy_variable: {
      value: cdktf.stringToHclTerraform(struct!.tableMapPolicyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateAddressFamilies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultInformationOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInformationOriginate = this._defaultInformationOriginate;
    }
    if (this._defaultInformationOriginateVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInformationOriginateVariable = this._defaultInformationOriginateVariable;
    }
    if (this._familyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyType = this._familyType;
    }
    if (this._ipv4AggregateAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AggregateAddresses = this._ipv4AggregateAddresses?.internalValue;
    }
    if (this._ipv4Networks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Networks = this._ipv4Networks?.internalValue;
    }
    if (this._ipv6AggregateAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AggregateAddresses = this._ipv6AggregateAddresses?.internalValue;
    }
    if (this._ipv6Networks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Networks = this._ipv6Networks?.internalValue;
    }
    if (this._maximumPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPaths = this._maximumPaths;
    }
    if (this._maximumPathsVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPathsVariable = this._maximumPathsVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._redistributeRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributeRoutes = this._redistributeRoutes?.internalValue;
    }
    if (this._tableMapFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableMapFilter = this._tableMapFilter;
    }
    if (this._tableMapFilterVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableMapFilterVariable = this._tableMapFilterVariable;
    }
    if (this._tableMapPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableMapPolicy = this._tableMapPolicy;
    }
    if (this._tableMapPolicyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableMapPolicyVariable = this._tableMapPolicyVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateAddressFamilies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultInformationOriginate = undefined;
      this._defaultInformationOriginateVariable = undefined;
      this._familyType = undefined;
      this._ipv4AggregateAddresses.internalValue = undefined;
      this._ipv4Networks.internalValue = undefined;
      this._ipv6AggregateAddresses.internalValue = undefined;
      this._ipv6Networks.internalValue = undefined;
      this._maximumPaths = undefined;
      this._maximumPathsVariable = undefined;
      this._optional = undefined;
      this._redistributeRoutes.internalValue = undefined;
      this._tableMapFilter = undefined;
      this._tableMapFilterVariable = undefined;
      this._tableMapPolicy = undefined;
      this._tableMapPolicyVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultInformationOriginate = value.defaultInformationOriginate;
      this._defaultInformationOriginateVariable = value.defaultInformationOriginateVariable;
      this._familyType = value.familyType;
      this._ipv4AggregateAddresses.internalValue = value.ipv4AggregateAddresses;
      this._ipv4Networks.internalValue = value.ipv4Networks;
      this._ipv6AggregateAddresses.internalValue = value.ipv6AggregateAddresses;
      this._ipv6Networks.internalValue = value.ipv6Networks;
      this._maximumPaths = value.maximumPaths;
      this._maximumPathsVariable = value.maximumPathsVariable;
      this._optional = value.optional;
      this._redistributeRoutes.internalValue = value.redistributeRoutes;
      this._tableMapFilter = value.tableMapFilter;
      this._tableMapFilterVariable = value.tableMapFilterVariable;
      this._tableMapPolicy = value.tableMapPolicy;
      this._tableMapPolicyVariable = value.tableMapPolicyVariable;
    }
  }

  // default_information_originate - computed: false, optional: true, required: false
  private _defaultInformationOriginate?: boolean | cdktf.IResolvable; 
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
  }
  public set defaultInformationOriginate(value: boolean | cdktf.IResolvable) {
    this._defaultInformationOriginate = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate;
  }

  // default_information_originate_variable - computed: false, optional: true, required: false
  private _defaultInformationOriginateVariable?: string; 
  public get defaultInformationOriginateVariable() {
    return this.getStringAttribute('default_information_originate_variable');
  }
  public set defaultInformationOriginateVariable(value: string) {
    this._defaultInformationOriginateVariable = value;
  }
  public resetDefaultInformationOriginateVariable() {
    this._defaultInformationOriginateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateVariableInput() {
    return this._defaultInformationOriginateVariable;
  }

  // family_type - computed: false, optional: true, required: false
  private _familyType?: string; 
  public get familyType() {
    return this.getStringAttribute('family_type');
  }
  public set familyType(value: string) {
    this._familyType = value;
  }
  public resetFamilyType() {
    this._familyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyTypeInput() {
    return this._familyType;
  }

  // ipv4_aggregate_addresses - computed: false, optional: true, required: false
  private _ipv4AggregateAddresses = new CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesList(this, "ipv4_aggregate_addresses", false);
  public get ipv4AggregateAddresses() {
    return this._ipv4AggregateAddresses;
  }
  public putIpv4AggregateAddresses(value: CiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddresses[] | cdktf.IResolvable) {
    this._ipv4AggregateAddresses.internalValue = value;
  }
  public resetIpv4AggregateAddresses() {
    this._ipv4AggregateAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AggregateAddressesInput() {
    return this._ipv4AggregateAddresses.internalValue;
  }

  // ipv4_networks - computed: false, optional: true, required: false
  private _ipv4Networks = new CiscoBgpFeatureTemplateAddressFamiliesIpv4NetworksList(this, "ipv4_networks", false);
  public get ipv4Networks() {
    return this._ipv4Networks;
  }
  public putIpv4Networks(value: CiscoBgpFeatureTemplateAddressFamiliesIpv4Networks[] | cdktf.IResolvable) {
    this._ipv4Networks.internalValue = value;
  }
  public resetIpv4Networks() {
    this._ipv4Networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetworksInput() {
    return this._ipv4Networks.internalValue;
  }

  // ipv6_aggregate_addresses - computed: false, optional: true, required: false
  private _ipv6AggregateAddresses = new CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesList(this, "ipv6_aggregate_addresses", false);
  public get ipv6AggregateAddresses() {
    return this._ipv6AggregateAddresses;
  }
  public putIpv6AggregateAddresses(value: CiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddresses[] | cdktf.IResolvable) {
    this._ipv6AggregateAddresses.internalValue = value;
  }
  public resetIpv6AggregateAddresses() {
    this._ipv6AggregateAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AggregateAddressesInput() {
    return this._ipv6AggregateAddresses.internalValue;
  }

  // ipv6_networks - computed: false, optional: true, required: false
  private _ipv6Networks = new CiscoBgpFeatureTemplateAddressFamiliesIpv6NetworksList(this, "ipv6_networks", false);
  public get ipv6Networks() {
    return this._ipv6Networks;
  }
  public putIpv6Networks(value: CiscoBgpFeatureTemplateAddressFamiliesIpv6Networks[] | cdktf.IResolvable) {
    this._ipv6Networks.internalValue = value;
  }
  public resetIpv6Networks() {
    this._ipv6Networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetworksInput() {
    return this._ipv6Networks.internalValue;
  }

  // maximum_paths - computed: false, optional: true, required: false
  private _maximumPaths?: number; 
  public get maximumPaths() {
    return this.getNumberAttribute('maximum_paths');
  }
  public set maximumPaths(value: number) {
    this._maximumPaths = value;
  }
  public resetMaximumPaths() {
    this._maximumPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsInput() {
    return this._maximumPaths;
  }

  // maximum_paths_variable - computed: false, optional: true, required: false
  private _maximumPathsVariable?: string; 
  public get maximumPathsVariable() {
    return this.getStringAttribute('maximum_paths_variable');
  }
  public set maximumPathsVariable(value: string) {
    this._maximumPathsVariable = value;
  }
  public resetMaximumPathsVariable() {
    this._maximumPathsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsVariableInput() {
    return this._maximumPathsVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // redistribute_routes - computed: false, optional: true, required: false
  private _redistributeRoutes = new CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesList(this, "redistribute_routes", false);
  public get redistributeRoutes() {
    return this._redistributeRoutes;
  }
  public putRedistributeRoutes(value: CiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutes[] | cdktf.IResolvable) {
    this._redistributeRoutes.internalValue = value;
  }
  public resetRedistributeRoutes() {
    this._redistributeRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeRoutesInput() {
    return this._redistributeRoutes.internalValue;
  }

  // table_map_filter - computed: false, optional: true, required: false
  private _tableMapFilter?: boolean | cdktf.IResolvable; 
  public get tableMapFilter() {
    return this.getBooleanAttribute('table_map_filter');
  }
  public set tableMapFilter(value: boolean | cdktf.IResolvable) {
    this._tableMapFilter = value;
  }
  public resetTableMapFilter() {
    this._tableMapFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMapFilterInput() {
    return this._tableMapFilter;
  }

  // table_map_filter_variable - computed: false, optional: true, required: false
  private _tableMapFilterVariable?: string; 
  public get tableMapFilterVariable() {
    return this.getStringAttribute('table_map_filter_variable');
  }
  public set tableMapFilterVariable(value: string) {
    this._tableMapFilterVariable = value;
  }
  public resetTableMapFilterVariable() {
    this._tableMapFilterVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMapFilterVariableInput() {
    return this._tableMapFilterVariable;
  }

  // table_map_policy - computed: false, optional: true, required: false
  private _tableMapPolicy?: string; 
  public get tableMapPolicy() {
    return this.getStringAttribute('table_map_policy');
  }
  public set tableMapPolicy(value: string) {
    this._tableMapPolicy = value;
  }
  public resetTableMapPolicy() {
    this._tableMapPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMapPolicyInput() {
    return this._tableMapPolicy;
  }

  // table_map_policy_variable - computed: false, optional: true, required: false
  private _tableMapPolicyVariable?: string; 
  public get tableMapPolicyVariable() {
    return this.getStringAttribute('table_map_policy_variable');
  }
  public set tableMapPolicyVariable(value: string) {
    this._tableMapPolicyVariable = value;
  }
  public resetTableMapPolicyVariable() {
    this._tableMapPolicyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMapPolicyVariableInput() {
    return this._tableMapPolicyVariable;
  }
}

export class CiscoBgpFeatureTemplateAddressFamiliesList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateAddressFamilies[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateAddressFamiliesOutputReference {
    return new CiscoBgpFeatureTemplateAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePolicies {
  /**
  * Set direction for applying route policy
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#direction CiscoBgpFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure name of route policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#policy_name CiscoBgpFeatureTemplate#policy_name}
  */
  readonly policyName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#policy_name_variable CiscoBgpFeatureTemplate#policy_name_variable}
  */
  readonly policyNameVariable?: string;
}

export function ciscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesToTerraform(struct?: CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    optional: cdktf.booleanToTerraform(struct!.optional),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    policy_name_variable: cdktf.stringToTerraform(struct!.policyNameVariable),
  }
}


export function ciscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesToHclTerraform(struct?: CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePolicies | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.policyNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._policyNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyNameVariable = this._policyNameVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._optional = undefined;
      this._policyName = undefined;
      this._policyNameVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._optional = value.optional;
      this._policyName = value.policyName;
      this._policyNameVariable = value.policyNameVariable;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_name_variable - computed: false, optional: true, required: false
  private _policyNameVariable?: string; 
  public get policyNameVariable() {
    return this.getStringAttribute('policy_name_variable');
  }
  public set policyNameVariable(value: string) {
    this._policyNameVariable = value;
  }
  public resetPolicyNameVariable() {
    this._policyNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameVariableInput() {
    return this._policyNameVariable;
  }
}

export class CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePolicies[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesOutputReference {
    return new CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateIpv4NeighborsAddressFamilies {
  /**
  * Set BGP address family
  *   - Choices: `ipv4-unicast`, `vpnv4-unicast`, `vpnv6-unicast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#family_type CiscoBgpFeatureTemplate#family_type}
  */
  readonly familyType?: string;
  /**
  * Set maximum number of prefixes accepted from BGP peer
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes CiscoBgpFeatureTemplate#maximum_prefixes}
  */
  readonly maximumPrefixes?: number;
  /**
  * Set when to restart BGP connection if threshold is exceeded
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_restart CiscoBgpFeatureTemplate#maximum_prefixes_restart}
  */
  readonly maximumPrefixesRestart?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_restart_variable CiscoBgpFeatureTemplate#maximum_prefixes_restart_variable}
  */
  readonly maximumPrefixesRestartVariable?: string;
  /**
  * Set threshold at which to generate a warning message
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_threshold CiscoBgpFeatureTemplate#maximum_prefixes_threshold}
  */
  readonly maximumPrefixesThreshold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_threshold_variable CiscoBgpFeatureTemplate#maximum_prefixes_threshold_variable}
  */
  readonly maximumPrefixesThresholdVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_variable CiscoBgpFeatureTemplate#maximum_prefixes_variable}
  */
  readonly maximumPrefixesVariable?: string;
  /**
  * Display only a warning message when threshold is exceeded
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_warning_only CiscoBgpFeatureTemplate#maximum_prefixes_warning_only}
  */
  readonly maximumPrefixesWarningOnly?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_warning_only_variable CiscoBgpFeatureTemplate#maximum_prefixes_warning_only_variable}
  */
  readonly maximumPrefixesWarningOnlyVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Select route policy to apply to prefixes received from BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#route_policies CiscoBgpFeatureTemplate#route_policies}
  */
  readonly routePolicies?: CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePolicies[] | cdktf.IResolvable;
}

export function ciscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesToTerraform(struct?: CiscoBgpFeatureTemplateIpv4NeighborsAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family_type: cdktf.stringToTerraform(struct!.familyType),
    maximum_prefixes: cdktf.numberToTerraform(struct!.maximumPrefixes),
    maximum_prefixes_restart: cdktf.numberToTerraform(struct!.maximumPrefixesRestart),
    maximum_prefixes_restart_variable: cdktf.stringToTerraform(struct!.maximumPrefixesRestartVariable),
    maximum_prefixes_threshold: cdktf.numberToTerraform(struct!.maximumPrefixesThreshold),
    maximum_prefixes_threshold_variable: cdktf.stringToTerraform(struct!.maximumPrefixesThresholdVariable),
    maximum_prefixes_variable: cdktf.stringToTerraform(struct!.maximumPrefixesVariable),
    maximum_prefixes_warning_only: cdktf.booleanToTerraform(struct!.maximumPrefixesWarningOnly),
    maximum_prefixes_warning_only_variable: cdktf.stringToTerraform(struct!.maximumPrefixesWarningOnlyVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    route_policies: cdktf.listMapper(ciscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesToTerraform, false)(struct!.routePolicies),
  }
}


export function ciscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesToHclTerraform(struct?: CiscoBgpFeatureTemplateIpv4NeighborsAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family_type: {
      value: cdktf.stringToHclTerraform(struct!.familyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefixes: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefixes_restart: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixesRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefixes_restart_variable: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixesRestartVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefixes_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixesThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefixes_threshold_variable: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixesThresholdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefixes_variable: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixesVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefixes_warning_only: {
      value: cdktf.booleanToHclTerraform(struct!.maximumPrefixesWarningOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_prefixes_warning_only_variable: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixesWarningOnlyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_policies: {
      value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesToHclTerraform, false)(struct!.routePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateIpv4NeighborsAddressFamilies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._familyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyType = this._familyType;
    }
    if (this._maximumPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixes = this._maximumPrefixes;
    }
    if (this._maximumPrefixesRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesRestart = this._maximumPrefixesRestart;
    }
    if (this._maximumPrefixesRestartVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesRestartVariable = this._maximumPrefixesRestartVariable;
    }
    if (this._maximumPrefixesThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesThreshold = this._maximumPrefixesThreshold;
    }
    if (this._maximumPrefixesThresholdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesThresholdVariable = this._maximumPrefixesThresholdVariable;
    }
    if (this._maximumPrefixesVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesVariable = this._maximumPrefixesVariable;
    }
    if (this._maximumPrefixesWarningOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesWarningOnly = this._maximumPrefixesWarningOnly;
    }
    if (this._maximumPrefixesWarningOnlyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesWarningOnlyVariable = this._maximumPrefixesWarningOnlyVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._routePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicies = this._routePolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateIpv4NeighborsAddressFamilies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._familyType = undefined;
      this._maximumPrefixes = undefined;
      this._maximumPrefixesRestart = undefined;
      this._maximumPrefixesRestartVariable = undefined;
      this._maximumPrefixesThreshold = undefined;
      this._maximumPrefixesThresholdVariable = undefined;
      this._maximumPrefixesVariable = undefined;
      this._maximumPrefixesWarningOnly = undefined;
      this._maximumPrefixesWarningOnlyVariable = undefined;
      this._optional = undefined;
      this._routePolicies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._familyType = value.familyType;
      this._maximumPrefixes = value.maximumPrefixes;
      this._maximumPrefixesRestart = value.maximumPrefixesRestart;
      this._maximumPrefixesRestartVariable = value.maximumPrefixesRestartVariable;
      this._maximumPrefixesThreshold = value.maximumPrefixesThreshold;
      this._maximumPrefixesThresholdVariable = value.maximumPrefixesThresholdVariable;
      this._maximumPrefixesVariable = value.maximumPrefixesVariable;
      this._maximumPrefixesWarningOnly = value.maximumPrefixesWarningOnly;
      this._maximumPrefixesWarningOnlyVariable = value.maximumPrefixesWarningOnlyVariable;
      this._optional = value.optional;
      this._routePolicies.internalValue = value.routePolicies;
    }
  }

  // family_type - computed: false, optional: true, required: false
  private _familyType?: string; 
  public get familyType() {
    return this.getStringAttribute('family_type');
  }
  public set familyType(value: string) {
    this._familyType = value;
  }
  public resetFamilyType() {
    this._familyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyTypeInput() {
    return this._familyType;
  }

  // maximum_prefixes - computed: false, optional: true, required: false
  private _maximumPrefixes?: number; 
  public get maximumPrefixes() {
    return this.getNumberAttribute('maximum_prefixes');
  }
  public set maximumPrefixes(value: number) {
    this._maximumPrefixes = value;
  }
  public resetMaximumPrefixes() {
    this._maximumPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesInput() {
    return this._maximumPrefixes;
  }

  // maximum_prefixes_restart - computed: false, optional: true, required: false
  private _maximumPrefixesRestart?: number; 
  public get maximumPrefixesRestart() {
    return this.getNumberAttribute('maximum_prefixes_restart');
  }
  public set maximumPrefixesRestart(value: number) {
    this._maximumPrefixesRestart = value;
  }
  public resetMaximumPrefixesRestart() {
    this._maximumPrefixesRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesRestartInput() {
    return this._maximumPrefixesRestart;
  }

  // maximum_prefixes_restart_variable - computed: false, optional: true, required: false
  private _maximumPrefixesRestartVariable?: string; 
  public get maximumPrefixesRestartVariable() {
    return this.getStringAttribute('maximum_prefixes_restart_variable');
  }
  public set maximumPrefixesRestartVariable(value: string) {
    this._maximumPrefixesRestartVariable = value;
  }
  public resetMaximumPrefixesRestartVariable() {
    this._maximumPrefixesRestartVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesRestartVariableInput() {
    return this._maximumPrefixesRestartVariable;
  }

  // maximum_prefixes_threshold - computed: false, optional: true, required: false
  private _maximumPrefixesThreshold?: number; 
  public get maximumPrefixesThreshold() {
    return this.getNumberAttribute('maximum_prefixes_threshold');
  }
  public set maximumPrefixesThreshold(value: number) {
    this._maximumPrefixesThreshold = value;
  }
  public resetMaximumPrefixesThreshold() {
    this._maximumPrefixesThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesThresholdInput() {
    return this._maximumPrefixesThreshold;
  }

  // maximum_prefixes_threshold_variable - computed: false, optional: true, required: false
  private _maximumPrefixesThresholdVariable?: string; 
  public get maximumPrefixesThresholdVariable() {
    return this.getStringAttribute('maximum_prefixes_threshold_variable');
  }
  public set maximumPrefixesThresholdVariable(value: string) {
    this._maximumPrefixesThresholdVariable = value;
  }
  public resetMaximumPrefixesThresholdVariable() {
    this._maximumPrefixesThresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesThresholdVariableInput() {
    return this._maximumPrefixesThresholdVariable;
  }

  // maximum_prefixes_variable - computed: false, optional: true, required: false
  private _maximumPrefixesVariable?: string; 
  public get maximumPrefixesVariable() {
    return this.getStringAttribute('maximum_prefixes_variable');
  }
  public set maximumPrefixesVariable(value: string) {
    this._maximumPrefixesVariable = value;
  }
  public resetMaximumPrefixesVariable() {
    this._maximumPrefixesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesVariableInput() {
    return this._maximumPrefixesVariable;
  }

  // maximum_prefixes_warning_only - computed: false, optional: true, required: false
  private _maximumPrefixesWarningOnly?: boolean | cdktf.IResolvable; 
  public get maximumPrefixesWarningOnly() {
    return this.getBooleanAttribute('maximum_prefixes_warning_only');
  }
  public set maximumPrefixesWarningOnly(value: boolean | cdktf.IResolvable) {
    this._maximumPrefixesWarningOnly = value;
  }
  public resetMaximumPrefixesWarningOnly() {
    this._maximumPrefixesWarningOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesWarningOnlyInput() {
    return this._maximumPrefixesWarningOnly;
  }

  // maximum_prefixes_warning_only_variable - computed: false, optional: true, required: false
  private _maximumPrefixesWarningOnlyVariable?: string; 
  public get maximumPrefixesWarningOnlyVariable() {
    return this.getStringAttribute('maximum_prefixes_warning_only_variable');
  }
  public set maximumPrefixesWarningOnlyVariable(value: string) {
    this._maximumPrefixesWarningOnlyVariable = value;
  }
  public resetMaximumPrefixesWarningOnlyVariable() {
    this._maximumPrefixesWarningOnlyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesWarningOnlyVariableInput() {
    return this._maximumPrefixesWarningOnlyVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // route_policies - computed: false, optional: true, required: false
  private _routePolicies = new CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesList(this, "route_policies", false);
  public get routePolicies() {
    return this._routePolicies;
  }
  public putRoutePolicies(value: CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePolicies[] | cdktf.IResolvable) {
    this._routePolicies.internalValue = value;
  }
  public resetRoutePolicies() {
    this._routePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePoliciesInput() {
    return this._routePolicies.internalValue;
  }
}

export class CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateIpv4NeighborsAddressFamilies[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesOutputReference {
    return new CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateIpv4Neighbors {
  /**
  * Set neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#address CiscoBgpFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Set BGP address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#address_families CiscoBgpFeatureTemplate#address_families}
  */
  readonly addressFamilies?: CiscoBgpFeatureTemplateIpv4NeighborsAddressFamilies[] | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#address_variable CiscoBgpFeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * As Number
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#allow_as_in CiscoBgpFeatureTemplate#allow_as_in}
  */
  readonly allowAsIn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#allow_as_in_variable CiscoBgpFeatureTemplate#allow_as_in_variable}
  */
  readonly allowAsInVariable?: string;
  /**
  * As Override
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#as_override CiscoBgpFeatureTemplate#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#as_override_variable CiscoBgpFeatureTemplate#as_override_variable}
  */
  readonly asOverrideVariable?: string;
  /**
  * Set description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#description CiscoBgpFeatureTemplate#description}
  */
  readonly description?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#description_variable CiscoBgpFeatureTemplate#description_variable}
  */
  readonly descriptionVariable?: string;
  /**
  * Set TTL value for peers that are not directly connected
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#ebgp_multihop CiscoBgpFeatureTemplate#ebgp_multihop}
  */
  readonly ebgpMultihop?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#ebgp_multihop_variable CiscoBgpFeatureTemplate#ebgp_multihop_variable}
  */
  readonly ebgpMultihopVariable?: string;
  /**
  * Set how long to wait since receiving a keepalive message to consider BGP peer unavailable
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#holdtime CiscoBgpFeatureTemplate#holdtime}
  */
  readonly holdtime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#holdtime_variable CiscoBgpFeatureTemplate#holdtime_variable}
  */
  readonly holdtimeVariable?: string;
  /**
  * Set how often to advertise keepalive messages to BGP peer
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#keepalive CiscoBgpFeatureTemplate#keepalive}
  */
  readonly keepalive?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#keepalive_variable CiscoBgpFeatureTemplate#keepalive_variable}
  */
  readonly keepaliveVariable?: string;
  /**
  * Set router to be next hop for routes advertised to neighbor
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#next_hop_self CiscoBgpFeatureTemplate#next_hop_self}
  */
  readonly nextHopSelf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#next_hop_self_variable CiscoBgpFeatureTemplate#next_hop_self_variable}
  */
  readonly nextHopSelfVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set MD5 password on TCP connection with BGP peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#password CiscoBgpFeatureTemplate#password}
  */
  readonly password?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#password_variable CiscoBgpFeatureTemplate#password_variable}
  */
  readonly passwordVariable?: string;
  /**
  * Set remote autonomous system number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#remote_as CiscoBgpFeatureTemplate#remote_as}
  */
  readonly remoteAs?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#remote_as_variable CiscoBgpFeatureTemplate#remote_as_variable}
  */
  readonly remoteAsVariable?: string;
  /**
  * Send community attribute
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_community CiscoBgpFeatureTemplate#send_community}
  */
  readonly sendCommunity?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_community_variable CiscoBgpFeatureTemplate#send_community_variable}
  */
  readonly sendCommunityVariable?: string;
  /**
  * Send extended community attribute
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_ext_community CiscoBgpFeatureTemplate#send_ext_community}
  */
  readonly sendExtCommunity?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_ext_community_variable CiscoBgpFeatureTemplate#send_ext_community_variable}
  */
  readonly sendExtCommunityVariable?: string;
  /**
  * Send label
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_label CiscoBgpFeatureTemplate#send_label}
  */
  readonly sendLabel?: boolean | cdktf.IResolvable;
  /**
  * Send label
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_label_explicit CiscoBgpFeatureTemplate#send_label_explicit}
  */
  readonly sendLabelExplicit?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_label_explicit_variable CiscoBgpFeatureTemplate#send_label_explicit_variable}
  */
  readonly sendLabelExplicitVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_label_variable CiscoBgpFeatureTemplate#send_label_variable}
  */
  readonly sendLabelVariable?: string;
  /**
  * Enable or disable a BGP neighbor
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#shutdown CiscoBgpFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#shutdown_variable CiscoBgpFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Set IP address of interface for TCP connection to BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#source_interface CiscoBgpFeatureTemplate#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#source_interface_variable CiscoBgpFeatureTemplate#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
}

export function ciscoBgpFeatureTemplateIpv4NeighborsToTerraform(struct?: CiscoBgpFeatureTemplateIpv4Neighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_families: cdktf.listMapper(ciscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesToTerraform, false)(struct!.addressFamilies),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    allow_as_in: cdktf.numberToTerraform(struct!.allowAsIn),
    allow_as_in_variable: cdktf.stringToTerraform(struct!.allowAsInVariable),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    as_override_variable: cdktf.stringToTerraform(struct!.asOverrideVariable),
    description: cdktf.stringToTerraform(struct!.description),
    description_variable: cdktf.stringToTerraform(struct!.descriptionVariable),
    ebgp_multihop: cdktf.numberToTerraform(struct!.ebgpMultihop),
    ebgp_multihop_variable: cdktf.stringToTerraform(struct!.ebgpMultihopVariable),
    holdtime: cdktf.numberToTerraform(struct!.holdtime),
    holdtime_variable: cdktf.stringToTerraform(struct!.holdtimeVariable),
    keepalive: cdktf.numberToTerraform(struct!.keepalive),
    keepalive_variable: cdktf.stringToTerraform(struct!.keepaliveVariable),
    next_hop_self: cdktf.booleanToTerraform(struct!.nextHopSelf),
    next_hop_self_variable: cdktf.stringToTerraform(struct!.nextHopSelfVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    password: cdktf.stringToTerraform(struct!.password),
    password_variable: cdktf.stringToTerraform(struct!.passwordVariable),
    remote_as: cdktf.stringToTerraform(struct!.remoteAs),
    remote_as_variable: cdktf.stringToTerraform(struct!.remoteAsVariable),
    send_community: cdktf.booleanToTerraform(struct!.sendCommunity),
    send_community_variable: cdktf.stringToTerraform(struct!.sendCommunityVariable),
    send_ext_community: cdktf.booleanToTerraform(struct!.sendExtCommunity),
    send_ext_community_variable: cdktf.stringToTerraform(struct!.sendExtCommunityVariable),
    send_label: cdktf.booleanToTerraform(struct!.sendLabel),
    send_label_explicit: cdktf.booleanToTerraform(struct!.sendLabelExplicit),
    send_label_explicit_variable: cdktf.stringToTerraform(struct!.sendLabelExplicitVariable),
    send_label_variable: cdktf.stringToTerraform(struct!.sendLabelVariable),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
    shutdown_variable: cdktf.stringToTerraform(struct!.shutdownVariable),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
  }
}


export function ciscoBgpFeatureTemplateIpv4NeighborsToHclTerraform(struct?: CiscoBgpFeatureTemplateIpv4Neighbors | cdktf.IResolvable): any {
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
    address_families: {
      value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesToHclTerraform, false)(struct!.addressFamilies),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesList",
    },
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_as_in: {
      value: cdktf.numberToHclTerraform(struct!.allowAsIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_as_in_variable: {
      value: cdktf.stringToHclTerraform(struct!.allowAsInVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_override: {
      value: cdktf.booleanToHclTerraform(struct!.asOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    as_override_variable: {
      value: cdktf.stringToHclTerraform(struct!.asOverrideVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_variable: {
      value: cdktf.stringToHclTerraform(struct!.descriptionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebgp_multihop: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_multihop_variable: {
      value: cdktf.stringToHclTerraform(struct!.ebgpMultihopVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    holdtime: {
      value: cdktf.numberToHclTerraform(struct!.holdtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    holdtime_variable: {
      value: cdktf.stringToHclTerraform(struct!.holdtimeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive: {
      value: cdktf.numberToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_variable: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self: {
      value: cdktf.booleanToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    next_hop_self_variable: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelfVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
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
    password_variable: {
      value: cdktf.stringToHclTerraform(struct!.passwordVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_as: {
      value: cdktf.stringToHclTerraform(struct!.remoteAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_as_variable: {
      value: cdktf.stringToHclTerraform(struct!.remoteAsVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community: {
      value: cdktf.booleanToHclTerraform(struct!.sendCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_ext_community: {
      value: cdktf.booleanToHclTerraform(struct!.sendExtCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_ext_community_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendExtCommunityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_label: {
      value: cdktf.booleanToHclTerraform(struct!.sendLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_label_explicit: {
      value: cdktf.booleanToHclTerraform(struct!.sendLabelExplicit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_label_explicit_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendLabelExplicitVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_label_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendLabelVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shutdown_variable: {
      value: cdktf.stringToHclTerraform(struct!.shutdownVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateIpv4NeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateIpv4Neighbors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressFamilies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamilies = this._addressFamilies?.internalValue;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._allowAsIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAsIn = this._allowAsIn;
    }
    if (this._allowAsInVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAsInVariable = this._allowAsInVariable;
    }
    if (this._asOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverride = this._asOverride;
    }
    if (this._asOverrideVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverrideVariable = this._asOverrideVariable;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionVariable = this._descriptionVariable;
    }
    if (this._ebgpMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihop = this._ebgpMultihop;
    }
    if (this._ebgpMultihopVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihopVariable = this._ebgpMultihopVariable;
    }
    if (this._holdtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdtime = this._holdtime;
    }
    if (this._holdtimeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdtimeVariable = this._holdtimeVariable;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._keepaliveVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveVariable = this._keepaliveVariable;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._nextHopSelfVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelfVariable = this._nextHopSelfVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordVariable = this._passwordVariable;
    }
    if (this._remoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAs = this._remoteAs;
    }
    if (this._remoteAsVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAsVariable = this._remoteAsVariable;
    }
    if (this._sendCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity = this._sendCommunity;
    }
    if (this._sendCommunityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVariable = this._sendCommunityVariable;
    }
    if (this._sendExtCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendExtCommunity = this._sendExtCommunity;
    }
    if (this._sendExtCommunityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendExtCommunityVariable = this._sendExtCommunityVariable;
    }
    if (this._sendLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLabel = this._sendLabel;
    }
    if (this._sendLabelExplicit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLabelExplicit = this._sendLabelExplicit;
    }
    if (this._sendLabelExplicitVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLabelExplicitVariable = this._sendLabelExplicitVariable;
    }
    if (this._sendLabelVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLabelVariable = this._sendLabelVariable;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._shutdownVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownVariable = this._shutdownVariable;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._sourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceVariable = this._sourceInterfaceVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateIpv4Neighbors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressFamilies.internalValue = undefined;
      this._addressVariable = undefined;
      this._allowAsIn = undefined;
      this._allowAsInVariable = undefined;
      this._asOverride = undefined;
      this._asOverrideVariable = undefined;
      this._description = undefined;
      this._descriptionVariable = undefined;
      this._ebgpMultihop = undefined;
      this._ebgpMultihopVariable = undefined;
      this._holdtime = undefined;
      this._holdtimeVariable = undefined;
      this._keepalive = undefined;
      this._keepaliveVariable = undefined;
      this._nextHopSelf = undefined;
      this._nextHopSelfVariable = undefined;
      this._optional = undefined;
      this._password = undefined;
      this._passwordVariable = undefined;
      this._remoteAs = undefined;
      this._remoteAsVariable = undefined;
      this._sendCommunity = undefined;
      this._sendCommunityVariable = undefined;
      this._sendExtCommunity = undefined;
      this._sendExtCommunityVariable = undefined;
      this._sendLabel = undefined;
      this._sendLabelExplicit = undefined;
      this._sendLabelExplicitVariable = undefined;
      this._sendLabelVariable = undefined;
      this._shutdown = undefined;
      this._shutdownVariable = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressFamilies.internalValue = value.addressFamilies;
      this._addressVariable = value.addressVariable;
      this._allowAsIn = value.allowAsIn;
      this._allowAsInVariable = value.allowAsInVariable;
      this._asOverride = value.asOverride;
      this._asOverrideVariable = value.asOverrideVariable;
      this._description = value.description;
      this._descriptionVariable = value.descriptionVariable;
      this._ebgpMultihop = value.ebgpMultihop;
      this._ebgpMultihopVariable = value.ebgpMultihopVariable;
      this._holdtime = value.holdtime;
      this._holdtimeVariable = value.holdtimeVariable;
      this._keepalive = value.keepalive;
      this._keepaliveVariable = value.keepaliveVariable;
      this._nextHopSelf = value.nextHopSelf;
      this._nextHopSelfVariable = value.nextHopSelfVariable;
      this._optional = value.optional;
      this._password = value.password;
      this._passwordVariable = value.passwordVariable;
      this._remoteAs = value.remoteAs;
      this._remoteAsVariable = value.remoteAsVariable;
      this._sendCommunity = value.sendCommunity;
      this._sendCommunityVariable = value.sendCommunityVariable;
      this._sendExtCommunity = value.sendExtCommunity;
      this._sendExtCommunityVariable = value.sendExtCommunityVariable;
      this._sendLabel = value.sendLabel;
      this._sendLabelExplicit = value.sendLabelExplicit;
      this._sendLabelExplicitVariable = value.sendLabelExplicitVariable;
      this._sendLabelVariable = value.sendLabelVariable;
      this._shutdown = value.shutdown;
      this._shutdownVariable = value.shutdownVariable;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
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

  // address_families - computed: false, optional: true, required: false
  private _addressFamilies = new CiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }
  public putAddressFamilies(value: CiscoBgpFeatureTemplateIpv4NeighborsAddressFamilies[] | cdktf.IResolvable) {
    this._addressFamilies.internalValue = value;
  }
  public resetAddressFamilies() {
    this._addressFamilies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamiliesInput() {
    return this._addressFamilies.internalValue;
  }

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }

  // allow_as_in - computed: false, optional: true, required: false
  private _allowAsIn?: number; 
  public get allowAsIn() {
    return this.getNumberAttribute('allow_as_in');
  }
  public set allowAsIn(value: number) {
    this._allowAsIn = value;
  }
  public resetAllowAsIn() {
    this._allowAsIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAsInInput() {
    return this._allowAsIn;
  }

  // allow_as_in_variable - computed: false, optional: true, required: false
  private _allowAsInVariable?: string; 
  public get allowAsInVariable() {
    return this.getStringAttribute('allow_as_in_variable');
  }
  public set allowAsInVariable(value: string) {
    this._allowAsInVariable = value;
  }
  public resetAllowAsInVariable() {
    this._allowAsInVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAsInVariableInput() {
    return this._allowAsInVariable;
  }

  // as_override - computed: false, optional: true, required: false
  private _asOverride?: boolean | cdktf.IResolvable; 
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }
  public set asOverride(value: boolean | cdktf.IResolvable) {
    this._asOverride = value;
  }
  public resetAsOverride() {
    this._asOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideInput() {
    return this._asOverride;
  }

  // as_override_variable - computed: false, optional: true, required: false
  private _asOverrideVariable?: string; 
  public get asOverrideVariable() {
    return this.getStringAttribute('as_override_variable');
  }
  public set asOverrideVariable(value: string) {
    this._asOverrideVariable = value;
  }
  public resetAsOverrideVariable() {
    this._asOverrideVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideVariableInput() {
    return this._asOverrideVariable;
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

  // description_variable - computed: false, optional: true, required: false
  private _descriptionVariable?: string; 
  public get descriptionVariable() {
    return this.getStringAttribute('description_variable');
  }
  public set descriptionVariable(value: string) {
    this._descriptionVariable = value;
  }
  public resetDescriptionVariable() {
    this._descriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionVariableInput() {
    return this._descriptionVariable;
  }

  // ebgp_multihop - computed: false, optional: true, required: false
  private _ebgpMultihop?: number; 
  public get ebgpMultihop() {
    return this.getNumberAttribute('ebgp_multihop');
  }
  public set ebgpMultihop(value: number) {
    this._ebgpMultihop = value;
  }
  public resetEbgpMultihop() {
    this._ebgpMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopInput() {
    return this._ebgpMultihop;
  }

  // ebgp_multihop_variable - computed: false, optional: true, required: false
  private _ebgpMultihopVariable?: string; 
  public get ebgpMultihopVariable() {
    return this.getStringAttribute('ebgp_multihop_variable');
  }
  public set ebgpMultihopVariable(value: string) {
    this._ebgpMultihopVariable = value;
  }
  public resetEbgpMultihopVariable() {
    this._ebgpMultihopVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopVariableInput() {
    return this._ebgpMultihopVariable;
  }

  // holdtime - computed: false, optional: true, required: false
  private _holdtime?: number; 
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }
  public set holdtime(value: number) {
    this._holdtime = value;
  }
  public resetHoldtime() {
    this._holdtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeInput() {
    return this._holdtime;
  }

  // holdtime_variable - computed: false, optional: true, required: false
  private _holdtimeVariable?: string; 
  public get holdtimeVariable() {
    return this.getStringAttribute('holdtime_variable');
  }
  public set holdtimeVariable(value: string) {
    this._holdtimeVariable = value;
  }
  public resetHoldtimeVariable() {
    this._holdtimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeVariableInput() {
    return this._holdtimeVariable;
  }

  // keepalive - computed: false, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // keepalive_variable - computed: false, optional: true, required: false
  private _keepaliveVariable?: string; 
  public get keepaliveVariable() {
    return this.getStringAttribute('keepalive_variable');
  }
  public set keepaliveVariable(value: string) {
    this._keepaliveVariable = value;
  }
  public resetKeepaliveVariable() {
    this._keepaliveVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveVariableInput() {
    return this._keepaliveVariable;
  }

  // next_hop_self - computed: false, optional: true, required: false
  private _nextHopSelf?: boolean | cdktf.IResolvable; 
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }
  public set nextHopSelf(value: boolean | cdktf.IResolvable) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // next_hop_self_variable - computed: false, optional: true, required: false
  private _nextHopSelfVariable?: string; 
  public get nextHopSelfVariable() {
    return this.getStringAttribute('next_hop_self_variable');
  }
  public set nextHopSelfVariable(value: string) {
    this._nextHopSelfVariable = value;
  }
  public resetNextHopSelfVariable() {
    this._nextHopSelfVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfVariableInput() {
    return this._nextHopSelfVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // password_variable - computed: false, optional: true, required: false
  private _passwordVariable?: string; 
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }
  public set passwordVariable(value: string) {
    this._passwordVariable = value;
  }
  public resetPasswordVariable() {
    this._passwordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVariableInput() {
    return this._passwordVariable;
  }

  // remote_as - computed: false, optional: true, required: false
  private _remoteAs?: string; 
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
  }
  public set remoteAs(value: string) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // remote_as_variable - computed: false, optional: true, required: false
  private _remoteAsVariable?: string; 
  public get remoteAsVariable() {
    return this.getStringAttribute('remote_as_variable');
  }
  public set remoteAsVariable(value: string) {
    this._remoteAsVariable = value;
  }
  public resetRemoteAsVariable() {
    this._remoteAsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsVariableInput() {
    return this._remoteAsVariable;
  }

  // send_community - computed: false, optional: true, required: false
  private _sendCommunity?: boolean | cdktf.IResolvable; 
  public get sendCommunity() {
    return this.getBooleanAttribute('send_community');
  }
  public set sendCommunity(value: boolean | cdktf.IResolvable) {
    this._sendCommunity = value;
  }
  public resetSendCommunity() {
    this._sendCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity;
  }

  // send_community_variable - computed: false, optional: true, required: false
  private _sendCommunityVariable?: string; 
  public get sendCommunityVariable() {
    return this.getStringAttribute('send_community_variable');
  }
  public set sendCommunityVariable(value: string) {
    this._sendCommunityVariable = value;
  }
  public resetSendCommunityVariable() {
    this._sendCommunityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityVariableInput() {
    return this._sendCommunityVariable;
  }

  // send_ext_community - computed: false, optional: true, required: false
  private _sendExtCommunity?: boolean | cdktf.IResolvable; 
  public get sendExtCommunity() {
    return this.getBooleanAttribute('send_ext_community');
  }
  public set sendExtCommunity(value: boolean | cdktf.IResolvable) {
    this._sendExtCommunity = value;
  }
  public resetSendExtCommunity() {
    this._sendExtCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendExtCommunityInput() {
    return this._sendExtCommunity;
  }

  // send_ext_community_variable - computed: false, optional: true, required: false
  private _sendExtCommunityVariable?: string; 
  public get sendExtCommunityVariable() {
    return this.getStringAttribute('send_ext_community_variable');
  }
  public set sendExtCommunityVariable(value: string) {
    this._sendExtCommunityVariable = value;
  }
  public resetSendExtCommunityVariable() {
    this._sendExtCommunityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendExtCommunityVariableInput() {
    return this._sendExtCommunityVariable;
  }

  // send_label - computed: false, optional: true, required: false
  private _sendLabel?: boolean | cdktf.IResolvable; 
  public get sendLabel() {
    return this.getBooleanAttribute('send_label');
  }
  public set sendLabel(value: boolean | cdktf.IResolvable) {
    this._sendLabel = value;
  }
  public resetSendLabel() {
    this._sendLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLabelInput() {
    return this._sendLabel;
  }

  // send_label_explicit - computed: false, optional: true, required: false
  private _sendLabelExplicit?: boolean | cdktf.IResolvable; 
  public get sendLabelExplicit() {
    return this.getBooleanAttribute('send_label_explicit');
  }
  public set sendLabelExplicit(value: boolean | cdktf.IResolvable) {
    this._sendLabelExplicit = value;
  }
  public resetSendLabelExplicit() {
    this._sendLabelExplicit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLabelExplicitInput() {
    return this._sendLabelExplicit;
  }

  // send_label_explicit_variable - computed: false, optional: true, required: false
  private _sendLabelExplicitVariable?: string; 
  public get sendLabelExplicitVariable() {
    return this.getStringAttribute('send_label_explicit_variable');
  }
  public set sendLabelExplicitVariable(value: string) {
    this._sendLabelExplicitVariable = value;
  }
  public resetSendLabelExplicitVariable() {
    this._sendLabelExplicitVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLabelExplicitVariableInput() {
    return this._sendLabelExplicitVariable;
  }

  // send_label_variable - computed: false, optional: true, required: false
  private _sendLabelVariable?: string; 
  public get sendLabelVariable() {
    return this.getStringAttribute('send_label_variable');
  }
  public set sendLabelVariable(value: string) {
    this._sendLabelVariable = value;
  }
  public resetSendLabelVariable() {
    this._sendLabelVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLabelVariableInput() {
    return this._sendLabelVariable;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // shutdown_variable - computed: false, optional: true, required: false
  private _shutdownVariable?: string; 
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }
  public set shutdownVariable(value: string) {
    this._shutdownVariable = value;
  }
  public resetShutdownVariable() {
    this._shutdownVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownVariableInput() {
    return this._shutdownVariable;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // source_interface_variable - computed: false, optional: true, required: false
  private _sourceInterfaceVariable?: string; 
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }
  public set sourceInterfaceVariable(value: string) {
    this._sourceInterfaceVariable = value;
  }
  public resetSourceInterfaceVariable() {
    this._sourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceVariableInput() {
    return this._sourceInterfaceVariable;
  }
}

export class CiscoBgpFeatureTemplateIpv4NeighborsList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateIpv4Neighbors[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateIpv4NeighborsOutputReference {
    return new CiscoBgpFeatureTemplateIpv4NeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateIpv4RouteTargetsExport {
  /**
  * asn-ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#asn_ip CiscoBgpFeatureTemplate#asn_ip}
  */
  readonly asnIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#asn_ip_variable CiscoBgpFeatureTemplate#asn_ip_variable}
  */
  readonly asnIpVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoBgpFeatureTemplateIpv4RouteTargetsExportToTerraform(struct?: CiscoBgpFeatureTemplateIpv4RouteTargetsExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_ip: cdktf.stringToTerraform(struct!.asnIp),
    asn_ip_variable: cdktf.stringToTerraform(struct!.asnIpVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoBgpFeatureTemplateIpv4RouteTargetsExportToHclTerraform(struct?: CiscoBgpFeatureTemplateIpv4RouteTargetsExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_ip: {
      value: cdktf.stringToHclTerraform(struct!.asnIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asn_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.asnIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateIpv4RouteTargetsExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateIpv4RouteTargetsExport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnIp = this._asnIp;
    }
    if (this._asnIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnIpVariable = this._asnIpVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateIpv4RouteTargetsExport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asnIp = undefined;
      this._asnIpVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asnIp = value.asnIp;
      this._asnIpVariable = value.asnIpVariable;
      this._optional = value.optional;
    }
  }

  // asn_ip - computed: false, optional: true, required: false
  private _asnIp?: string; 
  public get asnIp() {
    return this.getStringAttribute('asn_ip');
  }
  public set asnIp(value: string) {
    this._asnIp = value;
  }
  public resetAsnIp() {
    this._asnIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnIpInput() {
    return this._asnIp;
  }

  // asn_ip_variable - computed: false, optional: true, required: false
  private _asnIpVariable?: string; 
  public get asnIpVariable() {
    return this.getStringAttribute('asn_ip_variable');
  }
  public set asnIpVariable(value: string) {
    this._asnIpVariable = value;
  }
  public resetAsnIpVariable() {
    this._asnIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnIpVariableInput() {
    return this._asnIpVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoBgpFeatureTemplateIpv4RouteTargetsExportList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateIpv4RouteTargetsExport[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateIpv4RouteTargetsExportOutputReference {
    return new CiscoBgpFeatureTemplateIpv4RouteTargetsExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateIpv4RouteTargetsImport {
  /**
  * asn-ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#asn_ip CiscoBgpFeatureTemplate#asn_ip}
  */
  readonly asnIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#asn_ip_variable CiscoBgpFeatureTemplate#asn_ip_variable}
  */
  readonly asnIpVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoBgpFeatureTemplateIpv4RouteTargetsImportToTerraform(struct?: CiscoBgpFeatureTemplateIpv4RouteTargetsImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_ip: cdktf.stringToTerraform(struct!.asnIp),
    asn_ip_variable: cdktf.stringToTerraform(struct!.asnIpVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoBgpFeatureTemplateIpv4RouteTargetsImportToHclTerraform(struct?: CiscoBgpFeatureTemplateIpv4RouteTargetsImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_ip: {
      value: cdktf.stringToHclTerraform(struct!.asnIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asn_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.asnIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateIpv4RouteTargetsImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateIpv4RouteTargetsImport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnIp = this._asnIp;
    }
    if (this._asnIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnIpVariable = this._asnIpVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateIpv4RouteTargetsImport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asnIp = undefined;
      this._asnIpVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asnIp = value.asnIp;
      this._asnIpVariable = value.asnIpVariable;
      this._optional = value.optional;
    }
  }

  // asn_ip - computed: false, optional: true, required: false
  private _asnIp?: string; 
  public get asnIp() {
    return this.getStringAttribute('asn_ip');
  }
  public set asnIp(value: string) {
    this._asnIp = value;
  }
  public resetAsnIp() {
    this._asnIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnIpInput() {
    return this._asnIp;
  }

  // asn_ip_variable - computed: false, optional: true, required: false
  private _asnIpVariable?: string; 
  public get asnIpVariable() {
    return this.getStringAttribute('asn_ip_variable');
  }
  public set asnIpVariable(value: string) {
    this._asnIpVariable = value;
  }
  public resetAsnIpVariable() {
    this._asnIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnIpVariableInput() {
    return this._asnIpVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoBgpFeatureTemplateIpv4RouteTargetsImportList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateIpv4RouteTargetsImport[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateIpv4RouteTargetsImportOutputReference {
    return new CiscoBgpFeatureTemplateIpv4RouteTargetsImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateIpv4RouteTargets {
  /**
  * Export Target-VPN community for IPV4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#export CiscoBgpFeatureTemplate#export}
  */
  readonly export?: CiscoBgpFeatureTemplateIpv4RouteTargetsExport[] | cdktf.IResolvable;
  /**
  * Import Target-VPN community for IPV4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#import CiscoBgpFeatureTemplate#import}
  */
  readonly import?: CiscoBgpFeatureTemplateIpv4RouteTargetsImport[] | cdktf.IResolvable;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * VPN ID for IPv4
  *   - Range: `1`-`65527`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#vpn_id CiscoBgpFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#vpn_id_variable CiscoBgpFeatureTemplate#vpn_id_variable}
  */
  readonly vpnIdVariable?: string;
}

export function ciscoBgpFeatureTemplateIpv4RouteTargetsToTerraform(struct?: CiscoBgpFeatureTemplateIpv4RouteTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export: cdktf.listMapper(ciscoBgpFeatureTemplateIpv4RouteTargetsExportToTerraform, false)(struct!.export),
    import: cdktf.listMapper(ciscoBgpFeatureTemplateIpv4RouteTargetsImportToTerraform, false)(struct!.import),
    optional: cdktf.booleanToTerraform(struct!.optional),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_id_variable: cdktf.stringToTerraform(struct!.vpnIdVariable),
  }
}


export function ciscoBgpFeatureTemplateIpv4RouteTargetsToHclTerraform(struct?: CiscoBgpFeatureTemplateIpv4RouteTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export: {
      value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateIpv4RouteTargetsExportToHclTerraform, false)(struct!.export),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoBgpFeatureTemplateIpv4RouteTargetsExportList",
    },
    import: {
      value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateIpv4RouteTargetsImportToHclTerraform, false)(struct!.import),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoBgpFeatureTemplateIpv4RouteTargetsImportList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.vpnIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateIpv4RouteTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateIpv4RouteTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._export?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.export = this._export?.internalValue;
    }
    if (this._import?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.import = this._import?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    if (this._vpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIdVariable = this._vpnIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateIpv4RouteTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._export.internalValue = undefined;
      this._import.internalValue = undefined;
      this._optional = undefined;
      this._vpnId = undefined;
      this._vpnIdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._export.internalValue = value.export;
      this._import.internalValue = value.import;
      this._optional = value.optional;
      this._vpnId = value.vpnId;
      this._vpnIdVariable = value.vpnIdVariable;
    }
  }

  // export - computed: false, optional: true, required: false
  private _export = new CiscoBgpFeatureTemplateIpv4RouteTargetsExportList(this, "export", false);
  public get export() {
    return this._export;
  }
  public putExport(value: CiscoBgpFeatureTemplateIpv4RouteTargetsExport[] | cdktf.IResolvable) {
    this._export.internalValue = value;
  }
  public resetExport() {
    this._export.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export.internalValue;
  }

  // import - computed: false, optional: true, required: false
  private _import = new CiscoBgpFeatureTemplateIpv4RouteTargetsImportList(this, "import", false);
  public get import() {
    return this._import;
  }
  public putImport(value: CiscoBgpFeatureTemplateIpv4RouteTargetsImport[] | cdktf.IResolvable) {
    this._import.internalValue = value;
  }
  public resetImport() {
    this._import.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import.internalValue;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // vpn_id_variable - computed: false, optional: true, required: false
  private _vpnIdVariable?: string; 
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
  public set vpnIdVariable(value: string) {
    this._vpnIdVariable = value;
  }
  public resetVpnIdVariable() {
    this._vpnIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdVariableInput() {
    return this._vpnIdVariable;
  }
}

export class CiscoBgpFeatureTemplateIpv4RouteTargetsList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateIpv4RouteTargets[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateIpv4RouteTargetsOutputReference {
    return new CiscoBgpFeatureTemplateIpv4RouteTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePolicies {
  /**
  * Set direction for applying route policy
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#direction CiscoBgpFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure name of route policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#policy_name CiscoBgpFeatureTemplate#policy_name}
  */
  readonly policyName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#policy_name_variable CiscoBgpFeatureTemplate#policy_name_variable}
  */
  readonly policyNameVariable?: string;
}

export function ciscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesToTerraform(struct?: CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    optional: cdktf.booleanToTerraform(struct!.optional),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    policy_name_variable: cdktf.stringToTerraform(struct!.policyNameVariable),
  }
}


export function ciscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesToHclTerraform(struct?: CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePolicies | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.policyNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._policyNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyNameVariable = this._policyNameVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._optional = undefined;
      this._policyName = undefined;
      this._policyNameVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._optional = value.optional;
      this._policyName = value.policyName;
      this._policyNameVariable = value.policyNameVariable;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_name_variable - computed: false, optional: true, required: false
  private _policyNameVariable?: string; 
  public get policyNameVariable() {
    return this.getStringAttribute('policy_name_variable');
  }
  public set policyNameVariable(value: string) {
    this._policyNameVariable = value;
  }
  public resetPolicyNameVariable() {
    this._policyNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameVariableInput() {
    return this._policyNameVariable;
  }
}

export class CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePolicies[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesOutputReference {
    return new CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateIpv6NeighborsAddressFamilies {
  /**
  * Set BGP address family
  *   - Choices: `ipv6-unicast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#family_type CiscoBgpFeatureTemplate#family_type}
  */
  readonly familyType?: string;
  /**
  * Set maximum number of prefixes accepted from BGP peer
  *   - Range: `0`-`4294967295`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes CiscoBgpFeatureTemplate#maximum_prefixes}
  */
  readonly maximumPrefixes?: number;
  /**
  * Set when to restart BGP connection if threshold is exceeded
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_restart CiscoBgpFeatureTemplate#maximum_prefixes_restart}
  */
  readonly maximumPrefixesRestart?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_restart_variable CiscoBgpFeatureTemplate#maximum_prefixes_restart_variable}
  */
  readonly maximumPrefixesRestartVariable?: string;
  /**
  * Set threshold at which to generate a warning message
  *   - Range: `0`-`100`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_threshold CiscoBgpFeatureTemplate#maximum_prefixes_threshold}
  */
  readonly maximumPrefixesThreshold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_threshold_variable CiscoBgpFeatureTemplate#maximum_prefixes_threshold_variable}
  */
  readonly maximumPrefixesThresholdVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_variable CiscoBgpFeatureTemplate#maximum_prefixes_variable}
  */
  readonly maximumPrefixesVariable?: string;
  /**
  * Display only a warning message when threshold is exceeded
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_warning_only CiscoBgpFeatureTemplate#maximum_prefixes_warning_only}
  */
  readonly maximumPrefixesWarningOnly?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#maximum_prefixes_warning_only_variable CiscoBgpFeatureTemplate#maximum_prefixes_warning_only_variable}
  */
  readonly maximumPrefixesWarningOnlyVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Select route policy to apply to prefixes received from BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#route_policies CiscoBgpFeatureTemplate#route_policies}
  */
  readonly routePolicies?: CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePolicies[] | cdktf.IResolvable;
}

export function ciscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesToTerraform(struct?: CiscoBgpFeatureTemplateIpv6NeighborsAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family_type: cdktf.stringToTerraform(struct!.familyType),
    maximum_prefixes: cdktf.numberToTerraform(struct!.maximumPrefixes),
    maximum_prefixes_restart: cdktf.numberToTerraform(struct!.maximumPrefixesRestart),
    maximum_prefixes_restart_variable: cdktf.stringToTerraform(struct!.maximumPrefixesRestartVariable),
    maximum_prefixes_threshold: cdktf.numberToTerraform(struct!.maximumPrefixesThreshold),
    maximum_prefixes_threshold_variable: cdktf.stringToTerraform(struct!.maximumPrefixesThresholdVariable),
    maximum_prefixes_variable: cdktf.stringToTerraform(struct!.maximumPrefixesVariable),
    maximum_prefixes_warning_only: cdktf.booleanToTerraform(struct!.maximumPrefixesWarningOnly),
    maximum_prefixes_warning_only_variable: cdktf.stringToTerraform(struct!.maximumPrefixesWarningOnlyVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    route_policies: cdktf.listMapper(ciscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesToTerraform, false)(struct!.routePolicies),
  }
}


export function ciscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesToHclTerraform(struct?: CiscoBgpFeatureTemplateIpv6NeighborsAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family_type: {
      value: cdktf.stringToHclTerraform(struct!.familyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefixes: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefixes_restart: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixesRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefixes_restart_variable: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixesRestartVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefixes_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixesThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefixes_threshold_variable: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixesThresholdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefixes_variable: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixesVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefixes_warning_only: {
      value: cdktf.booleanToHclTerraform(struct!.maximumPrefixesWarningOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_prefixes_warning_only_variable: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixesWarningOnlyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_policies: {
      value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesToHclTerraform, false)(struct!.routePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateIpv6NeighborsAddressFamilies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._familyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyType = this._familyType;
    }
    if (this._maximumPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixes = this._maximumPrefixes;
    }
    if (this._maximumPrefixesRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesRestart = this._maximumPrefixesRestart;
    }
    if (this._maximumPrefixesRestartVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesRestartVariable = this._maximumPrefixesRestartVariable;
    }
    if (this._maximumPrefixesThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesThreshold = this._maximumPrefixesThreshold;
    }
    if (this._maximumPrefixesThresholdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesThresholdVariable = this._maximumPrefixesThresholdVariable;
    }
    if (this._maximumPrefixesVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesVariable = this._maximumPrefixesVariable;
    }
    if (this._maximumPrefixesWarningOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesWarningOnly = this._maximumPrefixesWarningOnly;
    }
    if (this._maximumPrefixesWarningOnlyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixesWarningOnlyVariable = this._maximumPrefixesWarningOnlyVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._routePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicies = this._routePolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateIpv6NeighborsAddressFamilies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._familyType = undefined;
      this._maximumPrefixes = undefined;
      this._maximumPrefixesRestart = undefined;
      this._maximumPrefixesRestartVariable = undefined;
      this._maximumPrefixesThreshold = undefined;
      this._maximumPrefixesThresholdVariable = undefined;
      this._maximumPrefixesVariable = undefined;
      this._maximumPrefixesWarningOnly = undefined;
      this._maximumPrefixesWarningOnlyVariable = undefined;
      this._optional = undefined;
      this._routePolicies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._familyType = value.familyType;
      this._maximumPrefixes = value.maximumPrefixes;
      this._maximumPrefixesRestart = value.maximumPrefixesRestart;
      this._maximumPrefixesRestartVariable = value.maximumPrefixesRestartVariable;
      this._maximumPrefixesThreshold = value.maximumPrefixesThreshold;
      this._maximumPrefixesThresholdVariable = value.maximumPrefixesThresholdVariable;
      this._maximumPrefixesVariable = value.maximumPrefixesVariable;
      this._maximumPrefixesWarningOnly = value.maximumPrefixesWarningOnly;
      this._maximumPrefixesWarningOnlyVariable = value.maximumPrefixesWarningOnlyVariable;
      this._optional = value.optional;
      this._routePolicies.internalValue = value.routePolicies;
    }
  }

  // family_type - computed: false, optional: true, required: false
  private _familyType?: string; 
  public get familyType() {
    return this.getStringAttribute('family_type');
  }
  public set familyType(value: string) {
    this._familyType = value;
  }
  public resetFamilyType() {
    this._familyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyTypeInput() {
    return this._familyType;
  }

  // maximum_prefixes - computed: false, optional: true, required: false
  private _maximumPrefixes?: number; 
  public get maximumPrefixes() {
    return this.getNumberAttribute('maximum_prefixes');
  }
  public set maximumPrefixes(value: number) {
    this._maximumPrefixes = value;
  }
  public resetMaximumPrefixes() {
    this._maximumPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesInput() {
    return this._maximumPrefixes;
  }

  // maximum_prefixes_restart - computed: false, optional: true, required: false
  private _maximumPrefixesRestart?: number; 
  public get maximumPrefixesRestart() {
    return this.getNumberAttribute('maximum_prefixes_restart');
  }
  public set maximumPrefixesRestart(value: number) {
    this._maximumPrefixesRestart = value;
  }
  public resetMaximumPrefixesRestart() {
    this._maximumPrefixesRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesRestartInput() {
    return this._maximumPrefixesRestart;
  }

  // maximum_prefixes_restart_variable - computed: false, optional: true, required: false
  private _maximumPrefixesRestartVariable?: string; 
  public get maximumPrefixesRestartVariable() {
    return this.getStringAttribute('maximum_prefixes_restart_variable');
  }
  public set maximumPrefixesRestartVariable(value: string) {
    this._maximumPrefixesRestartVariable = value;
  }
  public resetMaximumPrefixesRestartVariable() {
    this._maximumPrefixesRestartVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesRestartVariableInput() {
    return this._maximumPrefixesRestartVariable;
  }

  // maximum_prefixes_threshold - computed: false, optional: true, required: false
  private _maximumPrefixesThreshold?: number; 
  public get maximumPrefixesThreshold() {
    return this.getNumberAttribute('maximum_prefixes_threshold');
  }
  public set maximumPrefixesThreshold(value: number) {
    this._maximumPrefixesThreshold = value;
  }
  public resetMaximumPrefixesThreshold() {
    this._maximumPrefixesThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesThresholdInput() {
    return this._maximumPrefixesThreshold;
  }

  // maximum_prefixes_threshold_variable - computed: false, optional: true, required: false
  private _maximumPrefixesThresholdVariable?: string; 
  public get maximumPrefixesThresholdVariable() {
    return this.getStringAttribute('maximum_prefixes_threshold_variable');
  }
  public set maximumPrefixesThresholdVariable(value: string) {
    this._maximumPrefixesThresholdVariable = value;
  }
  public resetMaximumPrefixesThresholdVariable() {
    this._maximumPrefixesThresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesThresholdVariableInput() {
    return this._maximumPrefixesThresholdVariable;
  }

  // maximum_prefixes_variable - computed: false, optional: true, required: false
  private _maximumPrefixesVariable?: string; 
  public get maximumPrefixesVariable() {
    return this.getStringAttribute('maximum_prefixes_variable');
  }
  public set maximumPrefixesVariable(value: string) {
    this._maximumPrefixesVariable = value;
  }
  public resetMaximumPrefixesVariable() {
    this._maximumPrefixesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesVariableInput() {
    return this._maximumPrefixesVariable;
  }

  // maximum_prefixes_warning_only - computed: false, optional: true, required: false
  private _maximumPrefixesWarningOnly?: boolean | cdktf.IResolvable; 
  public get maximumPrefixesWarningOnly() {
    return this.getBooleanAttribute('maximum_prefixes_warning_only');
  }
  public set maximumPrefixesWarningOnly(value: boolean | cdktf.IResolvable) {
    this._maximumPrefixesWarningOnly = value;
  }
  public resetMaximumPrefixesWarningOnly() {
    this._maximumPrefixesWarningOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesWarningOnlyInput() {
    return this._maximumPrefixesWarningOnly;
  }

  // maximum_prefixes_warning_only_variable - computed: false, optional: true, required: false
  private _maximumPrefixesWarningOnlyVariable?: string; 
  public get maximumPrefixesWarningOnlyVariable() {
    return this.getStringAttribute('maximum_prefixes_warning_only_variable');
  }
  public set maximumPrefixesWarningOnlyVariable(value: string) {
    this._maximumPrefixesWarningOnlyVariable = value;
  }
  public resetMaximumPrefixesWarningOnlyVariable() {
    this._maximumPrefixesWarningOnlyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixesWarningOnlyVariableInput() {
    return this._maximumPrefixesWarningOnlyVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // route_policies - computed: false, optional: true, required: false
  private _routePolicies = new CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesList(this, "route_policies", false);
  public get routePolicies() {
    return this._routePolicies;
  }
  public putRoutePolicies(value: CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePolicies[] | cdktf.IResolvable) {
    this._routePolicies.internalValue = value;
  }
  public resetRoutePolicies() {
    this._routePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePoliciesInput() {
    return this._routePolicies.internalValue;
  }
}

export class CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateIpv6NeighborsAddressFamilies[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesOutputReference {
    return new CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateIpv6Neighbors {
  /**
  * Set neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#address CiscoBgpFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Set BGP address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#address_families CiscoBgpFeatureTemplate#address_families}
  */
  readonly addressFamilies?: CiscoBgpFeatureTemplateIpv6NeighborsAddressFamilies[] | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#address_variable CiscoBgpFeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  *  As Number
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#allow_as_in CiscoBgpFeatureTemplate#allow_as_in}
  */
  readonly allowAsIn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#allow_as_in_variable CiscoBgpFeatureTemplate#allow_as_in_variable}
  */
  readonly allowAsInVariable?: string;
  /**
  * As Override
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#as_override CiscoBgpFeatureTemplate#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#as_override_variable CiscoBgpFeatureTemplate#as_override_variable}
  */
  readonly asOverrideVariable?: string;
  /**
  * Set description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#description CiscoBgpFeatureTemplate#description}
  */
  readonly description?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#description_variable CiscoBgpFeatureTemplate#description_variable}
  */
  readonly descriptionVariable?: string;
  /**
  * Set TTL value for peers that are not directly connected
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#ebgp_multihop CiscoBgpFeatureTemplate#ebgp_multihop}
  */
  readonly ebgpMultihop?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#ebgp_multihop_variable CiscoBgpFeatureTemplate#ebgp_multihop_variable}
  */
  readonly ebgpMultihopVariable?: string;
  /**
  * Set how long to wait since receiving a keepalive message to consider BGP peer unavailable
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#holdtime CiscoBgpFeatureTemplate#holdtime}
  */
  readonly holdtime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#holdtime_variable CiscoBgpFeatureTemplate#holdtime_variable}
  */
  readonly holdtimeVariable?: string;
  /**
  * Set how often to advertise keepalive messages to BGP peer
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#keepalive CiscoBgpFeatureTemplate#keepalive}
  */
  readonly keepalive?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#keepalive_variable CiscoBgpFeatureTemplate#keepalive_variable}
  */
  readonly keepaliveVariable?: string;
  /**
  * Set router to be next hop for routes advertised to neighbor
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#next_hop_self CiscoBgpFeatureTemplate#next_hop_self}
  */
  readonly nextHopSelf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#next_hop_self_variable CiscoBgpFeatureTemplate#next_hop_self_variable}
  */
  readonly nextHopSelfVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set MD5 password on TCP connection with BGP peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#password CiscoBgpFeatureTemplate#password}
  */
  readonly password?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#password_variable CiscoBgpFeatureTemplate#password_variable}
  */
  readonly passwordVariable?: string;
  /**
  * Set remote autonomous system number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#remote_as CiscoBgpFeatureTemplate#remote_as}
  */
  readonly remoteAs?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#remote_as_variable CiscoBgpFeatureTemplate#remote_as_variable}
  */
  readonly remoteAsVariable?: string;
  /**
  * Send community attribute
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_community CiscoBgpFeatureTemplate#send_community}
  */
  readonly sendCommunity?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_community_variable CiscoBgpFeatureTemplate#send_community_variable}
  */
  readonly sendCommunityVariable?: string;
  /**
  * Send extended community attribute
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_ext_community CiscoBgpFeatureTemplate#send_ext_community}
  */
  readonly sendExtCommunity?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_ext_community_variable CiscoBgpFeatureTemplate#send_ext_community_variable}
  */
  readonly sendExtCommunityVariable?: string;
  /**
  * Send label
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_label CiscoBgpFeatureTemplate#send_label}
  */
  readonly sendLabel?: boolean | cdktf.IResolvable;
  /**
  * Send label Explicit
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_label_explicit CiscoBgpFeatureTemplate#send_label_explicit}
  */
  readonly sendLabelExplicit?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_label_explicit_variable CiscoBgpFeatureTemplate#send_label_explicit_variable}
  */
  readonly sendLabelExplicitVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#send_label_variable CiscoBgpFeatureTemplate#send_label_variable}
  */
  readonly sendLabelVariable?: string;
  /**
  * Enable or disable a BGP neighbor
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#shutdown CiscoBgpFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#shutdown_variable CiscoBgpFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Set IP address of interface for TCP connection to BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#source_interface CiscoBgpFeatureTemplate#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#source_interface_variable CiscoBgpFeatureTemplate#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
}

export function ciscoBgpFeatureTemplateIpv6NeighborsToTerraform(struct?: CiscoBgpFeatureTemplateIpv6Neighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_families: cdktf.listMapper(ciscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesToTerraform, false)(struct!.addressFamilies),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    allow_as_in: cdktf.numberToTerraform(struct!.allowAsIn),
    allow_as_in_variable: cdktf.stringToTerraform(struct!.allowAsInVariable),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    as_override_variable: cdktf.stringToTerraform(struct!.asOverrideVariable),
    description: cdktf.stringToTerraform(struct!.description),
    description_variable: cdktf.stringToTerraform(struct!.descriptionVariable),
    ebgp_multihop: cdktf.numberToTerraform(struct!.ebgpMultihop),
    ebgp_multihop_variable: cdktf.stringToTerraform(struct!.ebgpMultihopVariable),
    holdtime: cdktf.numberToTerraform(struct!.holdtime),
    holdtime_variable: cdktf.stringToTerraform(struct!.holdtimeVariable),
    keepalive: cdktf.numberToTerraform(struct!.keepalive),
    keepalive_variable: cdktf.stringToTerraform(struct!.keepaliveVariable),
    next_hop_self: cdktf.booleanToTerraform(struct!.nextHopSelf),
    next_hop_self_variable: cdktf.stringToTerraform(struct!.nextHopSelfVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    password: cdktf.stringToTerraform(struct!.password),
    password_variable: cdktf.stringToTerraform(struct!.passwordVariable),
    remote_as: cdktf.stringToTerraform(struct!.remoteAs),
    remote_as_variable: cdktf.stringToTerraform(struct!.remoteAsVariable),
    send_community: cdktf.booleanToTerraform(struct!.sendCommunity),
    send_community_variable: cdktf.stringToTerraform(struct!.sendCommunityVariable),
    send_ext_community: cdktf.booleanToTerraform(struct!.sendExtCommunity),
    send_ext_community_variable: cdktf.stringToTerraform(struct!.sendExtCommunityVariable),
    send_label: cdktf.booleanToTerraform(struct!.sendLabel),
    send_label_explicit: cdktf.booleanToTerraform(struct!.sendLabelExplicit),
    send_label_explicit_variable: cdktf.stringToTerraform(struct!.sendLabelExplicitVariable),
    send_label_variable: cdktf.stringToTerraform(struct!.sendLabelVariable),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
    shutdown_variable: cdktf.stringToTerraform(struct!.shutdownVariable),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
  }
}


export function ciscoBgpFeatureTemplateIpv6NeighborsToHclTerraform(struct?: CiscoBgpFeatureTemplateIpv6Neighbors | cdktf.IResolvable): any {
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
    address_families: {
      value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesToHclTerraform, false)(struct!.addressFamilies),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesList",
    },
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_as_in: {
      value: cdktf.numberToHclTerraform(struct!.allowAsIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_as_in_variable: {
      value: cdktf.stringToHclTerraform(struct!.allowAsInVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_override: {
      value: cdktf.booleanToHclTerraform(struct!.asOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    as_override_variable: {
      value: cdktf.stringToHclTerraform(struct!.asOverrideVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_variable: {
      value: cdktf.stringToHclTerraform(struct!.descriptionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebgp_multihop: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_multihop_variable: {
      value: cdktf.stringToHclTerraform(struct!.ebgpMultihopVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    holdtime: {
      value: cdktf.numberToHclTerraform(struct!.holdtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    holdtime_variable: {
      value: cdktf.stringToHclTerraform(struct!.holdtimeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive: {
      value: cdktf.numberToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_variable: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self: {
      value: cdktf.booleanToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    next_hop_self_variable: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelfVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
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
    password_variable: {
      value: cdktf.stringToHclTerraform(struct!.passwordVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_as: {
      value: cdktf.stringToHclTerraform(struct!.remoteAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_as_variable: {
      value: cdktf.stringToHclTerraform(struct!.remoteAsVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community: {
      value: cdktf.booleanToHclTerraform(struct!.sendCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_ext_community: {
      value: cdktf.booleanToHclTerraform(struct!.sendExtCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_ext_community_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendExtCommunityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_label: {
      value: cdktf.booleanToHclTerraform(struct!.sendLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_label_explicit: {
      value: cdktf.booleanToHclTerraform(struct!.sendLabelExplicit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_label_explicit_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendLabelExplicitVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_label_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendLabelVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shutdown_variable: {
      value: cdktf.stringToHclTerraform(struct!.shutdownVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateIpv6NeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateIpv6Neighbors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressFamilies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamilies = this._addressFamilies?.internalValue;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._allowAsIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAsIn = this._allowAsIn;
    }
    if (this._allowAsInVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAsInVariable = this._allowAsInVariable;
    }
    if (this._asOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverride = this._asOverride;
    }
    if (this._asOverrideVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverrideVariable = this._asOverrideVariable;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionVariable = this._descriptionVariable;
    }
    if (this._ebgpMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihop = this._ebgpMultihop;
    }
    if (this._ebgpMultihopVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihopVariable = this._ebgpMultihopVariable;
    }
    if (this._holdtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdtime = this._holdtime;
    }
    if (this._holdtimeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdtimeVariable = this._holdtimeVariable;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._keepaliveVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveVariable = this._keepaliveVariable;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._nextHopSelfVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelfVariable = this._nextHopSelfVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordVariable = this._passwordVariable;
    }
    if (this._remoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAs = this._remoteAs;
    }
    if (this._remoteAsVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAsVariable = this._remoteAsVariable;
    }
    if (this._sendCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity = this._sendCommunity;
    }
    if (this._sendCommunityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVariable = this._sendCommunityVariable;
    }
    if (this._sendExtCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendExtCommunity = this._sendExtCommunity;
    }
    if (this._sendExtCommunityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendExtCommunityVariable = this._sendExtCommunityVariable;
    }
    if (this._sendLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLabel = this._sendLabel;
    }
    if (this._sendLabelExplicit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLabelExplicit = this._sendLabelExplicit;
    }
    if (this._sendLabelExplicitVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLabelExplicitVariable = this._sendLabelExplicitVariable;
    }
    if (this._sendLabelVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLabelVariable = this._sendLabelVariable;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._shutdownVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownVariable = this._shutdownVariable;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._sourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceVariable = this._sourceInterfaceVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateIpv6Neighbors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressFamilies.internalValue = undefined;
      this._addressVariable = undefined;
      this._allowAsIn = undefined;
      this._allowAsInVariable = undefined;
      this._asOverride = undefined;
      this._asOverrideVariable = undefined;
      this._description = undefined;
      this._descriptionVariable = undefined;
      this._ebgpMultihop = undefined;
      this._ebgpMultihopVariable = undefined;
      this._holdtime = undefined;
      this._holdtimeVariable = undefined;
      this._keepalive = undefined;
      this._keepaliveVariable = undefined;
      this._nextHopSelf = undefined;
      this._nextHopSelfVariable = undefined;
      this._optional = undefined;
      this._password = undefined;
      this._passwordVariable = undefined;
      this._remoteAs = undefined;
      this._remoteAsVariable = undefined;
      this._sendCommunity = undefined;
      this._sendCommunityVariable = undefined;
      this._sendExtCommunity = undefined;
      this._sendExtCommunityVariable = undefined;
      this._sendLabel = undefined;
      this._sendLabelExplicit = undefined;
      this._sendLabelExplicitVariable = undefined;
      this._sendLabelVariable = undefined;
      this._shutdown = undefined;
      this._shutdownVariable = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressFamilies.internalValue = value.addressFamilies;
      this._addressVariable = value.addressVariable;
      this._allowAsIn = value.allowAsIn;
      this._allowAsInVariable = value.allowAsInVariable;
      this._asOverride = value.asOverride;
      this._asOverrideVariable = value.asOverrideVariable;
      this._description = value.description;
      this._descriptionVariable = value.descriptionVariable;
      this._ebgpMultihop = value.ebgpMultihop;
      this._ebgpMultihopVariable = value.ebgpMultihopVariable;
      this._holdtime = value.holdtime;
      this._holdtimeVariable = value.holdtimeVariable;
      this._keepalive = value.keepalive;
      this._keepaliveVariable = value.keepaliveVariable;
      this._nextHopSelf = value.nextHopSelf;
      this._nextHopSelfVariable = value.nextHopSelfVariable;
      this._optional = value.optional;
      this._password = value.password;
      this._passwordVariable = value.passwordVariable;
      this._remoteAs = value.remoteAs;
      this._remoteAsVariable = value.remoteAsVariable;
      this._sendCommunity = value.sendCommunity;
      this._sendCommunityVariable = value.sendCommunityVariable;
      this._sendExtCommunity = value.sendExtCommunity;
      this._sendExtCommunityVariable = value.sendExtCommunityVariable;
      this._sendLabel = value.sendLabel;
      this._sendLabelExplicit = value.sendLabelExplicit;
      this._sendLabelExplicitVariable = value.sendLabelExplicitVariable;
      this._sendLabelVariable = value.sendLabelVariable;
      this._shutdown = value.shutdown;
      this._shutdownVariable = value.shutdownVariable;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
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

  // address_families - computed: false, optional: true, required: false
  private _addressFamilies = new CiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }
  public putAddressFamilies(value: CiscoBgpFeatureTemplateIpv6NeighborsAddressFamilies[] | cdktf.IResolvable) {
    this._addressFamilies.internalValue = value;
  }
  public resetAddressFamilies() {
    this._addressFamilies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamiliesInput() {
    return this._addressFamilies.internalValue;
  }

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }

  // allow_as_in - computed: false, optional: true, required: false
  private _allowAsIn?: number; 
  public get allowAsIn() {
    return this.getNumberAttribute('allow_as_in');
  }
  public set allowAsIn(value: number) {
    this._allowAsIn = value;
  }
  public resetAllowAsIn() {
    this._allowAsIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAsInInput() {
    return this._allowAsIn;
  }

  // allow_as_in_variable - computed: false, optional: true, required: false
  private _allowAsInVariable?: string; 
  public get allowAsInVariable() {
    return this.getStringAttribute('allow_as_in_variable');
  }
  public set allowAsInVariable(value: string) {
    this._allowAsInVariable = value;
  }
  public resetAllowAsInVariable() {
    this._allowAsInVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAsInVariableInput() {
    return this._allowAsInVariable;
  }

  // as_override - computed: false, optional: true, required: false
  private _asOverride?: boolean | cdktf.IResolvable; 
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }
  public set asOverride(value: boolean | cdktf.IResolvable) {
    this._asOverride = value;
  }
  public resetAsOverride() {
    this._asOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideInput() {
    return this._asOverride;
  }

  // as_override_variable - computed: false, optional: true, required: false
  private _asOverrideVariable?: string; 
  public get asOverrideVariable() {
    return this.getStringAttribute('as_override_variable');
  }
  public set asOverrideVariable(value: string) {
    this._asOverrideVariable = value;
  }
  public resetAsOverrideVariable() {
    this._asOverrideVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideVariableInput() {
    return this._asOverrideVariable;
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

  // description_variable - computed: false, optional: true, required: false
  private _descriptionVariable?: string; 
  public get descriptionVariable() {
    return this.getStringAttribute('description_variable');
  }
  public set descriptionVariable(value: string) {
    this._descriptionVariable = value;
  }
  public resetDescriptionVariable() {
    this._descriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionVariableInput() {
    return this._descriptionVariable;
  }

  // ebgp_multihop - computed: false, optional: true, required: false
  private _ebgpMultihop?: number; 
  public get ebgpMultihop() {
    return this.getNumberAttribute('ebgp_multihop');
  }
  public set ebgpMultihop(value: number) {
    this._ebgpMultihop = value;
  }
  public resetEbgpMultihop() {
    this._ebgpMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopInput() {
    return this._ebgpMultihop;
  }

  // ebgp_multihop_variable - computed: false, optional: true, required: false
  private _ebgpMultihopVariable?: string; 
  public get ebgpMultihopVariable() {
    return this.getStringAttribute('ebgp_multihop_variable');
  }
  public set ebgpMultihopVariable(value: string) {
    this._ebgpMultihopVariable = value;
  }
  public resetEbgpMultihopVariable() {
    this._ebgpMultihopVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopVariableInput() {
    return this._ebgpMultihopVariable;
  }

  // holdtime - computed: false, optional: true, required: false
  private _holdtime?: number; 
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }
  public set holdtime(value: number) {
    this._holdtime = value;
  }
  public resetHoldtime() {
    this._holdtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeInput() {
    return this._holdtime;
  }

  // holdtime_variable - computed: false, optional: true, required: false
  private _holdtimeVariable?: string; 
  public get holdtimeVariable() {
    return this.getStringAttribute('holdtime_variable');
  }
  public set holdtimeVariable(value: string) {
    this._holdtimeVariable = value;
  }
  public resetHoldtimeVariable() {
    this._holdtimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeVariableInput() {
    return this._holdtimeVariable;
  }

  // keepalive - computed: false, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // keepalive_variable - computed: false, optional: true, required: false
  private _keepaliveVariable?: string; 
  public get keepaliveVariable() {
    return this.getStringAttribute('keepalive_variable');
  }
  public set keepaliveVariable(value: string) {
    this._keepaliveVariable = value;
  }
  public resetKeepaliveVariable() {
    this._keepaliveVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveVariableInput() {
    return this._keepaliveVariable;
  }

  // next_hop_self - computed: false, optional: true, required: false
  private _nextHopSelf?: boolean | cdktf.IResolvable; 
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }
  public set nextHopSelf(value: boolean | cdktf.IResolvable) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // next_hop_self_variable - computed: false, optional: true, required: false
  private _nextHopSelfVariable?: string; 
  public get nextHopSelfVariable() {
    return this.getStringAttribute('next_hop_self_variable');
  }
  public set nextHopSelfVariable(value: string) {
    this._nextHopSelfVariable = value;
  }
  public resetNextHopSelfVariable() {
    this._nextHopSelfVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfVariableInput() {
    return this._nextHopSelfVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // password_variable - computed: false, optional: true, required: false
  private _passwordVariable?: string; 
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }
  public set passwordVariable(value: string) {
    this._passwordVariable = value;
  }
  public resetPasswordVariable() {
    this._passwordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVariableInput() {
    return this._passwordVariable;
  }

  // remote_as - computed: false, optional: true, required: false
  private _remoteAs?: string; 
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
  }
  public set remoteAs(value: string) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // remote_as_variable - computed: false, optional: true, required: false
  private _remoteAsVariable?: string; 
  public get remoteAsVariable() {
    return this.getStringAttribute('remote_as_variable');
  }
  public set remoteAsVariable(value: string) {
    this._remoteAsVariable = value;
  }
  public resetRemoteAsVariable() {
    this._remoteAsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsVariableInput() {
    return this._remoteAsVariable;
  }

  // send_community - computed: false, optional: true, required: false
  private _sendCommunity?: boolean | cdktf.IResolvable; 
  public get sendCommunity() {
    return this.getBooleanAttribute('send_community');
  }
  public set sendCommunity(value: boolean | cdktf.IResolvable) {
    this._sendCommunity = value;
  }
  public resetSendCommunity() {
    this._sendCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity;
  }

  // send_community_variable - computed: false, optional: true, required: false
  private _sendCommunityVariable?: string; 
  public get sendCommunityVariable() {
    return this.getStringAttribute('send_community_variable');
  }
  public set sendCommunityVariable(value: string) {
    this._sendCommunityVariable = value;
  }
  public resetSendCommunityVariable() {
    this._sendCommunityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityVariableInput() {
    return this._sendCommunityVariable;
  }

  // send_ext_community - computed: false, optional: true, required: false
  private _sendExtCommunity?: boolean | cdktf.IResolvable; 
  public get sendExtCommunity() {
    return this.getBooleanAttribute('send_ext_community');
  }
  public set sendExtCommunity(value: boolean | cdktf.IResolvable) {
    this._sendExtCommunity = value;
  }
  public resetSendExtCommunity() {
    this._sendExtCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendExtCommunityInput() {
    return this._sendExtCommunity;
  }

  // send_ext_community_variable - computed: false, optional: true, required: false
  private _sendExtCommunityVariable?: string; 
  public get sendExtCommunityVariable() {
    return this.getStringAttribute('send_ext_community_variable');
  }
  public set sendExtCommunityVariable(value: string) {
    this._sendExtCommunityVariable = value;
  }
  public resetSendExtCommunityVariable() {
    this._sendExtCommunityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendExtCommunityVariableInput() {
    return this._sendExtCommunityVariable;
  }

  // send_label - computed: false, optional: true, required: false
  private _sendLabel?: boolean | cdktf.IResolvable; 
  public get sendLabel() {
    return this.getBooleanAttribute('send_label');
  }
  public set sendLabel(value: boolean | cdktf.IResolvable) {
    this._sendLabel = value;
  }
  public resetSendLabel() {
    this._sendLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLabelInput() {
    return this._sendLabel;
  }

  // send_label_explicit - computed: false, optional: true, required: false
  private _sendLabelExplicit?: boolean | cdktf.IResolvable; 
  public get sendLabelExplicit() {
    return this.getBooleanAttribute('send_label_explicit');
  }
  public set sendLabelExplicit(value: boolean | cdktf.IResolvable) {
    this._sendLabelExplicit = value;
  }
  public resetSendLabelExplicit() {
    this._sendLabelExplicit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLabelExplicitInput() {
    return this._sendLabelExplicit;
  }

  // send_label_explicit_variable - computed: false, optional: true, required: false
  private _sendLabelExplicitVariable?: string; 
  public get sendLabelExplicitVariable() {
    return this.getStringAttribute('send_label_explicit_variable');
  }
  public set sendLabelExplicitVariable(value: string) {
    this._sendLabelExplicitVariable = value;
  }
  public resetSendLabelExplicitVariable() {
    this._sendLabelExplicitVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLabelExplicitVariableInput() {
    return this._sendLabelExplicitVariable;
  }

  // send_label_variable - computed: false, optional: true, required: false
  private _sendLabelVariable?: string; 
  public get sendLabelVariable() {
    return this.getStringAttribute('send_label_variable');
  }
  public set sendLabelVariable(value: string) {
    this._sendLabelVariable = value;
  }
  public resetSendLabelVariable() {
    this._sendLabelVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLabelVariableInput() {
    return this._sendLabelVariable;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // shutdown_variable - computed: false, optional: true, required: false
  private _shutdownVariable?: string; 
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }
  public set shutdownVariable(value: string) {
    this._shutdownVariable = value;
  }
  public resetShutdownVariable() {
    this._shutdownVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownVariableInput() {
    return this._shutdownVariable;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // source_interface_variable - computed: false, optional: true, required: false
  private _sourceInterfaceVariable?: string; 
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }
  public set sourceInterfaceVariable(value: string) {
    this._sourceInterfaceVariable = value;
  }
  public resetSourceInterfaceVariable() {
    this._sourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceVariableInput() {
    return this._sourceInterfaceVariable;
  }
}

export class CiscoBgpFeatureTemplateIpv6NeighborsList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateIpv6Neighbors[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateIpv6NeighborsOutputReference {
    return new CiscoBgpFeatureTemplateIpv6NeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateIpv6RouteTargetsExport {
  /**
  * asn-ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#asn_ip CiscoBgpFeatureTemplate#asn_ip}
  */
  readonly asnIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#asn_ip_variable CiscoBgpFeatureTemplate#asn_ip_variable}
  */
  readonly asnIpVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoBgpFeatureTemplateIpv6RouteTargetsExportToTerraform(struct?: CiscoBgpFeatureTemplateIpv6RouteTargetsExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_ip: cdktf.stringToTerraform(struct!.asnIp),
    asn_ip_variable: cdktf.stringToTerraform(struct!.asnIpVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoBgpFeatureTemplateIpv6RouteTargetsExportToHclTerraform(struct?: CiscoBgpFeatureTemplateIpv6RouteTargetsExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_ip: {
      value: cdktf.stringToHclTerraform(struct!.asnIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asn_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.asnIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateIpv6RouteTargetsExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateIpv6RouteTargetsExport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnIp = this._asnIp;
    }
    if (this._asnIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnIpVariable = this._asnIpVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateIpv6RouteTargetsExport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asnIp = undefined;
      this._asnIpVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asnIp = value.asnIp;
      this._asnIpVariable = value.asnIpVariable;
      this._optional = value.optional;
    }
  }

  // asn_ip - computed: false, optional: true, required: false
  private _asnIp?: string; 
  public get asnIp() {
    return this.getStringAttribute('asn_ip');
  }
  public set asnIp(value: string) {
    this._asnIp = value;
  }
  public resetAsnIp() {
    this._asnIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnIpInput() {
    return this._asnIp;
  }

  // asn_ip_variable - computed: false, optional: true, required: false
  private _asnIpVariable?: string; 
  public get asnIpVariable() {
    return this.getStringAttribute('asn_ip_variable');
  }
  public set asnIpVariable(value: string) {
    this._asnIpVariable = value;
  }
  public resetAsnIpVariable() {
    this._asnIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnIpVariableInput() {
    return this._asnIpVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoBgpFeatureTemplateIpv6RouteTargetsExportList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateIpv6RouteTargetsExport[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateIpv6RouteTargetsExportOutputReference {
    return new CiscoBgpFeatureTemplateIpv6RouteTargetsExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateIpv6RouteTargetsImport {
  /**
  * asn-ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#asn_ip CiscoBgpFeatureTemplate#asn_ip}
  */
  readonly asnIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#asn_ip_variable CiscoBgpFeatureTemplate#asn_ip_variable}
  */
  readonly asnIpVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoBgpFeatureTemplateIpv6RouteTargetsImportToTerraform(struct?: CiscoBgpFeatureTemplateIpv6RouteTargetsImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_ip: cdktf.stringToTerraform(struct!.asnIp),
    asn_ip_variable: cdktf.stringToTerraform(struct!.asnIpVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoBgpFeatureTemplateIpv6RouteTargetsImportToHclTerraform(struct?: CiscoBgpFeatureTemplateIpv6RouteTargetsImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_ip: {
      value: cdktf.stringToHclTerraform(struct!.asnIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asn_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.asnIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateIpv6RouteTargetsImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateIpv6RouteTargetsImport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnIp = this._asnIp;
    }
    if (this._asnIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnIpVariable = this._asnIpVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateIpv6RouteTargetsImport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asnIp = undefined;
      this._asnIpVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asnIp = value.asnIp;
      this._asnIpVariable = value.asnIpVariable;
      this._optional = value.optional;
    }
  }

  // asn_ip - computed: false, optional: true, required: false
  private _asnIp?: string; 
  public get asnIp() {
    return this.getStringAttribute('asn_ip');
  }
  public set asnIp(value: string) {
    this._asnIp = value;
  }
  public resetAsnIp() {
    this._asnIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnIpInput() {
    return this._asnIp;
  }

  // asn_ip_variable - computed: false, optional: true, required: false
  private _asnIpVariable?: string; 
  public get asnIpVariable() {
    return this.getStringAttribute('asn_ip_variable');
  }
  public set asnIpVariable(value: string) {
    this._asnIpVariable = value;
  }
  public resetAsnIpVariable() {
    this._asnIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnIpVariableInput() {
    return this._asnIpVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoBgpFeatureTemplateIpv6RouteTargetsImportList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateIpv6RouteTargetsImport[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateIpv6RouteTargetsImportOutputReference {
    return new CiscoBgpFeatureTemplateIpv6RouteTargetsImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateIpv6RouteTargets {
  /**
  * Export Target-VPN community for IPV6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#export CiscoBgpFeatureTemplate#export}
  */
  readonly export?: CiscoBgpFeatureTemplateIpv6RouteTargetsExport[] | cdktf.IResolvable;
  /**
  * Import Target-VPN community for IPV6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#import CiscoBgpFeatureTemplate#import}
  */
  readonly import?: CiscoBgpFeatureTemplateIpv6RouteTargetsImport[] | cdktf.IResolvable;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * VPN ID for IPv6
  *   - Range: `1`-`65527`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#vpn_id CiscoBgpFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#vpn_id_variable CiscoBgpFeatureTemplate#vpn_id_variable}
  */
  readonly vpnIdVariable?: string;
}

export function ciscoBgpFeatureTemplateIpv6RouteTargetsToTerraform(struct?: CiscoBgpFeatureTemplateIpv6RouteTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export: cdktf.listMapper(ciscoBgpFeatureTemplateIpv6RouteTargetsExportToTerraform, false)(struct!.export),
    import: cdktf.listMapper(ciscoBgpFeatureTemplateIpv6RouteTargetsImportToTerraform, false)(struct!.import),
    optional: cdktf.booleanToTerraform(struct!.optional),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_id_variable: cdktf.stringToTerraform(struct!.vpnIdVariable),
  }
}


export function ciscoBgpFeatureTemplateIpv6RouteTargetsToHclTerraform(struct?: CiscoBgpFeatureTemplateIpv6RouteTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export: {
      value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateIpv6RouteTargetsExportToHclTerraform, false)(struct!.export),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoBgpFeatureTemplateIpv6RouteTargetsExportList",
    },
    import: {
      value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateIpv6RouteTargetsImportToHclTerraform, false)(struct!.import),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoBgpFeatureTemplateIpv6RouteTargetsImportList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.vpnIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateIpv6RouteTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateIpv6RouteTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._export?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.export = this._export?.internalValue;
    }
    if (this._import?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.import = this._import?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    if (this._vpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIdVariable = this._vpnIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateIpv6RouteTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._export.internalValue = undefined;
      this._import.internalValue = undefined;
      this._optional = undefined;
      this._vpnId = undefined;
      this._vpnIdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._export.internalValue = value.export;
      this._import.internalValue = value.import;
      this._optional = value.optional;
      this._vpnId = value.vpnId;
      this._vpnIdVariable = value.vpnIdVariable;
    }
  }

  // export - computed: false, optional: true, required: false
  private _export = new CiscoBgpFeatureTemplateIpv6RouteTargetsExportList(this, "export", false);
  public get export() {
    return this._export;
  }
  public putExport(value: CiscoBgpFeatureTemplateIpv6RouteTargetsExport[] | cdktf.IResolvable) {
    this._export.internalValue = value;
  }
  public resetExport() {
    this._export.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export.internalValue;
  }

  // import - computed: false, optional: true, required: false
  private _import = new CiscoBgpFeatureTemplateIpv6RouteTargetsImportList(this, "import", false);
  public get import() {
    return this._import;
  }
  public putImport(value: CiscoBgpFeatureTemplateIpv6RouteTargetsImport[] | cdktf.IResolvable) {
    this._import.internalValue = value;
  }
  public resetImport() {
    this._import.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import.internalValue;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // vpn_id_variable - computed: false, optional: true, required: false
  private _vpnIdVariable?: string; 
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
  public set vpnIdVariable(value: string) {
    this._vpnIdVariable = value;
  }
  public resetVpnIdVariable() {
    this._vpnIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdVariableInput() {
    return this._vpnIdVariable;
  }
}

export class CiscoBgpFeatureTemplateIpv6RouteTargetsList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateIpv6RouteTargets[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateIpv6RouteTargetsOutputReference {
    return new CiscoBgpFeatureTemplateIpv6RouteTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoBgpFeatureTemplateMplsInterfaces {
  /**
  * Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#interface_name CiscoBgpFeatureTemplate#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#interface_name_variable CiscoBgpFeatureTemplate#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#optional CiscoBgpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoBgpFeatureTemplateMplsInterfacesToTerraform(struct?: CiscoBgpFeatureTemplateMplsInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoBgpFeatureTemplateMplsInterfacesToHclTerraform(struct?: CiscoBgpFeatureTemplateMplsInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfaceNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBgpFeatureTemplateMplsInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBgpFeatureTemplateMplsInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._interfaceNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNameVariable = this._interfaceNameVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBgpFeatureTemplateMplsInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
      this._interfaceNameVariable = value.interfaceNameVariable;
      this._optional = value.optional;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // interface_name_variable - computed: false, optional: true, required: false
  private _interfaceNameVariable?: string; 
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }
  public set interfaceNameVariable(value: string) {
    this._interfaceNameVariable = value;
  }
  public resetInterfaceNameVariable() {
    this._interfaceNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameVariableInput() {
    return this._interfaceNameVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoBgpFeatureTemplateMplsInterfacesList extends cdktf.ComplexList {
  public internalValue? : CiscoBgpFeatureTemplateMplsInterfaces[] | cdktf.IResolvable

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
  public get(index: number): CiscoBgpFeatureTemplateMplsInterfacesOutputReference {
    return new CiscoBgpFeatureTemplateMplsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template sdwan_cisco_bgp_feature_template}
*/
export class CiscoBgpFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_bgp_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoBgpFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoBgpFeatureTemplate to import
  * @param importFromId The id of the existing CiscoBgpFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoBgpFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_bgp_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bgp_feature_template sdwan_cisco_bgp_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoBgpFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoBgpFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_bgp_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressFamilies.internalValue = config.addressFamilies;
    this._alwaysCompareMed = config.alwaysCompareMed;
    this._alwaysCompareMedVariable = config.alwaysCompareMedVariable;
    this._asNumber = config.asNumber;
    this._asNumberVariable = config.asNumberVariable;
    this._compareRouterId = config.compareRouterId;
    this._compareRouterIdVariable = config.compareRouterIdVariable;
    this._description = config.description;
    this._deterministicMed = config.deterministicMed;
    this._deterministicMedVariable = config.deterministicMedVariable;
    this._deviceTypes = config.deviceTypes;
    this._distanceExternal = config.distanceExternal;
    this._distanceExternalVariable = config.distanceExternalVariable;
    this._distanceInternal = config.distanceInternal;
    this._distanceInternalVariable = config.distanceInternalVariable;
    this._distanceLocal = config.distanceLocal;
    this._distanceLocalVariable = config.distanceLocalVariable;
    this._holdtime = config.holdtime;
    this._holdtimeVariable = config.holdtimeVariable;
    this._ipv4Neighbors.internalValue = config.ipv4Neighbors;
    this._ipv4RouteTargets.internalValue = config.ipv4RouteTargets;
    this._ipv6Neighbors.internalValue = config.ipv6Neighbors;
    this._ipv6RouteTargets.internalValue = config.ipv6RouteTargets;
    this._keepalive = config.keepalive;
    this._keepaliveVariable = config.keepaliveVariable;
    this._missingMedWorst = config.missingMedWorst;
    this._missingMedWorstVariable = config.missingMedWorstVariable;
    this._mplsInterfaces.internalValue = config.mplsInterfaces;
    this._multipathRelax = config.multipathRelax;
    this._multipathRelaxVariable = config.multipathRelaxVariable;
    this._name = config.name;
    this._propagateAspath = config.propagateAspath;
    this._propagateAspathVariable = config.propagateAspathVariable;
    this._propagateCommunity = config.propagateCommunity;
    this._propagateCommunityVariable = config.propagateCommunityVariable;
    this._routerId = config.routerId;
    this._routerIdVariable = config.routerIdVariable;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_families - computed: false, optional: true, required: false
  private _addressFamilies = new CiscoBgpFeatureTemplateAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }
  public putAddressFamilies(value: CiscoBgpFeatureTemplateAddressFamilies[] | cdktf.IResolvable) {
    this._addressFamilies.internalValue = value;
  }
  public resetAddressFamilies() {
    this._addressFamilies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamiliesInput() {
    return this._addressFamilies.internalValue;
  }

  // always_compare_med - computed: false, optional: true, required: false
  private _alwaysCompareMed?: boolean | cdktf.IResolvable; 
  public get alwaysCompareMed() {
    return this.getBooleanAttribute('always_compare_med');
  }
  public set alwaysCompareMed(value: boolean | cdktf.IResolvable) {
    this._alwaysCompareMed = value;
  }
  public resetAlwaysCompareMed() {
    this._alwaysCompareMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysCompareMedInput() {
    return this._alwaysCompareMed;
  }

  // always_compare_med_variable - computed: false, optional: true, required: false
  private _alwaysCompareMedVariable?: string; 
  public get alwaysCompareMedVariable() {
    return this.getStringAttribute('always_compare_med_variable');
  }
  public set alwaysCompareMedVariable(value: string) {
    this._alwaysCompareMedVariable = value;
  }
  public resetAlwaysCompareMedVariable() {
    this._alwaysCompareMedVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysCompareMedVariableInput() {
    return this._alwaysCompareMedVariable;
  }

  // as_number - computed: false, optional: true, required: false
  private _asNumber?: string; 
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }
  public set asNumber(value: string) {
    this._asNumber = value;
  }
  public resetAsNumber() {
    this._asNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // as_number_variable - computed: false, optional: true, required: false
  private _asNumberVariable?: string; 
  public get asNumberVariable() {
    return this.getStringAttribute('as_number_variable');
  }
  public set asNumberVariable(value: string) {
    this._asNumberVariable = value;
  }
  public resetAsNumberVariable() {
    this._asNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberVariableInput() {
    return this._asNumberVariable;
  }

  // compare_router_id - computed: false, optional: true, required: false
  private _compareRouterId?: boolean | cdktf.IResolvable; 
  public get compareRouterId() {
    return this.getBooleanAttribute('compare_router_id');
  }
  public set compareRouterId(value: boolean | cdktf.IResolvable) {
    this._compareRouterId = value;
  }
  public resetCompareRouterId() {
    this._compareRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareRouterIdInput() {
    return this._compareRouterId;
  }

  // compare_router_id_variable - computed: false, optional: true, required: false
  private _compareRouterIdVariable?: string; 
  public get compareRouterIdVariable() {
    return this.getStringAttribute('compare_router_id_variable');
  }
  public set compareRouterIdVariable(value: string) {
    this._compareRouterIdVariable = value;
  }
  public resetCompareRouterIdVariable() {
    this._compareRouterIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareRouterIdVariableInput() {
    return this._compareRouterIdVariable;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // deterministic_med - computed: false, optional: true, required: false
  private _deterministicMed?: boolean | cdktf.IResolvable; 
  public get deterministicMed() {
    return this.getBooleanAttribute('deterministic_med');
  }
  public set deterministicMed(value: boolean | cdktf.IResolvable) {
    this._deterministicMed = value;
  }
  public resetDeterministicMed() {
    this._deterministicMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deterministicMedInput() {
    return this._deterministicMed;
  }

  // deterministic_med_variable - computed: false, optional: true, required: false
  private _deterministicMedVariable?: string; 
  public get deterministicMedVariable() {
    return this.getStringAttribute('deterministic_med_variable');
  }
  public set deterministicMedVariable(value: string) {
    this._deterministicMedVariable = value;
  }
  public resetDeterministicMedVariable() {
    this._deterministicMedVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deterministicMedVariableInput() {
    return this._deterministicMedVariable;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // distance_external - computed: false, optional: true, required: false
  private _distanceExternal?: number; 
  public get distanceExternal() {
    return this.getNumberAttribute('distance_external');
  }
  public set distanceExternal(value: number) {
    this._distanceExternal = value;
  }
  public resetDistanceExternal() {
    this._distanceExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceExternalInput() {
    return this._distanceExternal;
  }

  // distance_external_variable - computed: false, optional: true, required: false
  private _distanceExternalVariable?: string; 
  public get distanceExternalVariable() {
    return this.getStringAttribute('distance_external_variable');
  }
  public set distanceExternalVariable(value: string) {
    this._distanceExternalVariable = value;
  }
  public resetDistanceExternalVariable() {
    this._distanceExternalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceExternalVariableInput() {
    return this._distanceExternalVariable;
  }

  // distance_internal - computed: false, optional: true, required: false
  private _distanceInternal?: number; 
  public get distanceInternal() {
    return this.getNumberAttribute('distance_internal');
  }
  public set distanceInternal(value: number) {
    this._distanceInternal = value;
  }
  public resetDistanceInternal() {
    this._distanceInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInternalInput() {
    return this._distanceInternal;
  }

  // distance_internal_variable - computed: false, optional: true, required: false
  private _distanceInternalVariable?: string; 
  public get distanceInternalVariable() {
    return this.getStringAttribute('distance_internal_variable');
  }
  public set distanceInternalVariable(value: string) {
    this._distanceInternalVariable = value;
  }
  public resetDistanceInternalVariable() {
    this._distanceInternalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInternalVariableInput() {
    return this._distanceInternalVariable;
  }

  // distance_local - computed: false, optional: true, required: false
  private _distanceLocal?: number; 
  public get distanceLocal() {
    return this.getNumberAttribute('distance_local');
  }
  public set distanceLocal(value: number) {
    this._distanceLocal = value;
  }
  public resetDistanceLocal() {
    this._distanceLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceLocalInput() {
    return this._distanceLocal;
  }

  // distance_local_variable - computed: false, optional: true, required: false
  private _distanceLocalVariable?: string; 
  public get distanceLocalVariable() {
    return this.getStringAttribute('distance_local_variable');
  }
  public set distanceLocalVariable(value: string) {
    this._distanceLocalVariable = value;
  }
  public resetDistanceLocalVariable() {
    this._distanceLocalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceLocalVariableInput() {
    return this._distanceLocalVariable;
  }

  // holdtime - computed: false, optional: true, required: false
  private _holdtime?: number; 
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }
  public set holdtime(value: number) {
    this._holdtime = value;
  }
  public resetHoldtime() {
    this._holdtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeInput() {
    return this._holdtime;
  }

  // holdtime_variable - computed: false, optional: true, required: false
  private _holdtimeVariable?: string; 
  public get holdtimeVariable() {
    return this.getStringAttribute('holdtime_variable');
  }
  public set holdtimeVariable(value: string) {
    this._holdtimeVariable = value;
  }
  public resetHoldtimeVariable() {
    this._holdtimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeVariableInput() {
    return this._holdtimeVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_neighbors - computed: false, optional: true, required: false
  private _ipv4Neighbors = new CiscoBgpFeatureTemplateIpv4NeighborsList(this, "ipv4_neighbors", false);
  public get ipv4Neighbors() {
    return this._ipv4Neighbors;
  }
  public putIpv4Neighbors(value: CiscoBgpFeatureTemplateIpv4Neighbors[] | cdktf.IResolvable) {
    this._ipv4Neighbors.internalValue = value;
  }
  public resetIpv4Neighbors() {
    this._ipv4Neighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NeighborsInput() {
    return this._ipv4Neighbors.internalValue;
  }

  // ipv4_route_targets - computed: false, optional: true, required: false
  private _ipv4RouteTargets = new CiscoBgpFeatureTemplateIpv4RouteTargetsList(this, "ipv4_route_targets", false);
  public get ipv4RouteTargets() {
    return this._ipv4RouteTargets;
  }
  public putIpv4RouteTargets(value: CiscoBgpFeatureTemplateIpv4RouteTargets[] | cdktf.IResolvable) {
    this._ipv4RouteTargets.internalValue = value;
  }
  public resetIpv4RouteTargets() {
    this._ipv4RouteTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RouteTargetsInput() {
    return this._ipv4RouteTargets.internalValue;
  }

  // ipv6_neighbors - computed: false, optional: true, required: false
  private _ipv6Neighbors = new CiscoBgpFeatureTemplateIpv6NeighborsList(this, "ipv6_neighbors", false);
  public get ipv6Neighbors() {
    return this._ipv6Neighbors;
  }
  public putIpv6Neighbors(value: CiscoBgpFeatureTemplateIpv6Neighbors[] | cdktf.IResolvable) {
    this._ipv6Neighbors.internalValue = value;
  }
  public resetIpv6Neighbors() {
    this._ipv6Neighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NeighborsInput() {
    return this._ipv6Neighbors.internalValue;
  }

  // ipv6_route_targets - computed: false, optional: true, required: false
  private _ipv6RouteTargets = new CiscoBgpFeatureTemplateIpv6RouteTargetsList(this, "ipv6_route_targets", false);
  public get ipv6RouteTargets() {
    return this._ipv6RouteTargets;
  }
  public putIpv6RouteTargets(value: CiscoBgpFeatureTemplateIpv6RouteTargets[] | cdktf.IResolvable) {
    this._ipv6RouteTargets.internalValue = value;
  }
  public resetIpv6RouteTargets() {
    this._ipv6RouteTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RouteTargetsInput() {
    return this._ipv6RouteTargets.internalValue;
  }

  // keepalive - computed: false, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // keepalive_variable - computed: false, optional: true, required: false
  private _keepaliveVariable?: string; 
  public get keepaliveVariable() {
    return this.getStringAttribute('keepalive_variable');
  }
  public set keepaliveVariable(value: string) {
    this._keepaliveVariable = value;
  }
  public resetKeepaliveVariable() {
    this._keepaliveVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveVariableInput() {
    return this._keepaliveVariable;
  }

  // missing_med_worst - computed: false, optional: true, required: false
  private _missingMedWorst?: boolean | cdktf.IResolvable; 
  public get missingMedWorst() {
    return this.getBooleanAttribute('missing_med_worst');
  }
  public set missingMedWorst(value: boolean | cdktf.IResolvable) {
    this._missingMedWorst = value;
  }
  public resetMissingMedWorst() {
    this._missingMedWorst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingMedWorstInput() {
    return this._missingMedWorst;
  }

  // missing_med_worst_variable - computed: false, optional: true, required: false
  private _missingMedWorstVariable?: string; 
  public get missingMedWorstVariable() {
    return this.getStringAttribute('missing_med_worst_variable');
  }
  public set missingMedWorstVariable(value: string) {
    this._missingMedWorstVariable = value;
  }
  public resetMissingMedWorstVariable() {
    this._missingMedWorstVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingMedWorstVariableInput() {
    return this._missingMedWorstVariable;
  }

  // mpls_interfaces - computed: false, optional: true, required: false
  private _mplsInterfaces = new CiscoBgpFeatureTemplateMplsInterfacesList(this, "mpls_interfaces", false);
  public get mplsInterfaces() {
    return this._mplsInterfaces;
  }
  public putMplsInterfaces(value: CiscoBgpFeatureTemplateMplsInterfaces[] | cdktf.IResolvable) {
    this._mplsInterfaces.internalValue = value;
  }
  public resetMplsInterfaces() {
    this._mplsInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsInterfacesInput() {
    return this._mplsInterfaces.internalValue;
  }

  // multipath_relax - computed: false, optional: true, required: false
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

  // multipath_relax_variable - computed: false, optional: true, required: false
  private _multipathRelaxVariable?: string; 
  public get multipathRelaxVariable() {
    return this.getStringAttribute('multipath_relax_variable');
  }
  public set multipathRelaxVariable(value: string) {
    this._multipathRelaxVariable = value;
  }
  public resetMultipathRelaxVariable() {
    this._multipathRelaxVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathRelaxVariableInput() {
    return this._multipathRelaxVariable;
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

  // propagate_aspath - computed: false, optional: true, required: false
  private _propagateAspath?: boolean | cdktf.IResolvable; 
  public get propagateAspath() {
    return this.getBooleanAttribute('propagate_aspath');
  }
  public set propagateAspath(value: boolean | cdktf.IResolvable) {
    this._propagateAspath = value;
  }
  public resetPropagateAspath() {
    this._propagateAspath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateAspathInput() {
    return this._propagateAspath;
  }

  // propagate_aspath_variable - computed: false, optional: true, required: false
  private _propagateAspathVariable?: string; 
  public get propagateAspathVariable() {
    return this.getStringAttribute('propagate_aspath_variable');
  }
  public set propagateAspathVariable(value: string) {
    this._propagateAspathVariable = value;
  }
  public resetPropagateAspathVariable() {
    this._propagateAspathVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateAspathVariableInput() {
    return this._propagateAspathVariable;
  }

  // propagate_community - computed: false, optional: true, required: false
  private _propagateCommunity?: boolean | cdktf.IResolvable; 
  public get propagateCommunity() {
    return this.getBooleanAttribute('propagate_community');
  }
  public set propagateCommunity(value: boolean | cdktf.IResolvable) {
    this._propagateCommunity = value;
  }
  public resetPropagateCommunity() {
    this._propagateCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateCommunityInput() {
    return this._propagateCommunity;
  }

  // propagate_community_variable - computed: false, optional: true, required: false
  private _propagateCommunityVariable?: string; 
  public get propagateCommunityVariable() {
    return this.getStringAttribute('propagate_community_variable');
  }
  public set propagateCommunityVariable(value: string) {
    this._propagateCommunityVariable = value;
  }
  public resetPropagateCommunityVariable() {
    this._propagateCommunityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateCommunityVariableInput() {
    return this._propagateCommunityVariable;
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

  // router_id_variable - computed: false, optional: true, required: false
  private _routerIdVariable?: string; 
  public get routerIdVariable() {
    return this.getStringAttribute('router_id_variable');
  }
  public set routerIdVariable(value: string) {
    this._routerIdVariable = value;
  }
  public resetRouterIdVariable() {
    this._routerIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdVariableInput() {
    return this._routerIdVariable;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // shutdown_variable - computed: false, optional: true, required: false
  private _shutdownVariable?: string; 
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }
  public set shutdownVariable(value: string) {
    this._shutdownVariable = value;
  }
  public resetShutdownVariable() {
    this._shutdownVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownVariableInput() {
    return this._shutdownVariable;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_families: cdktf.listMapper(ciscoBgpFeatureTemplateAddressFamiliesToTerraform, false)(this._addressFamilies.internalValue),
      always_compare_med: cdktf.booleanToTerraform(this._alwaysCompareMed),
      always_compare_med_variable: cdktf.stringToTerraform(this._alwaysCompareMedVariable),
      as_number: cdktf.stringToTerraform(this._asNumber),
      as_number_variable: cdktf.stringToTerraform(this._asNumberVariable),
      compare_router_id: cdktf.booleanToTerraform(this._compareRouterId),
      compare_router_id_variable: cdktf.stringToTerraform(this._compareRouterIdVariable),
      description: cdktf.stringToTerraform(this._description),
      deterministic_med: cdktf.booleanToTerraform(this._deterministicMed),
      deterministic_med_variable: cdktf.stringToTerraform(this._deterministicMedVariable),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      distance_external: cdktf.numberToTerraform(this._distanceExternal),
      distance_external_variable: cdktf.stringToTerraform(this._distanceExternalVariable),
      distance_internal: cdktf.numberToTerraform(this._distanceInternal),
      distance_internal_variable: cdktf.stringToTerraform(this._distanceInternalVariable),
      distance_local: cdktf.numberToTerraform(this._distanceLocal),
      distance_local_variable: cdktf.stringToTerraform(this._distanceLocalVariable),
      holdtime: cdktf.numberToTerraform(this._holdtime),
      holdtime_variable: cdktf.stringToTerraform(this._holdtimeVariable),
      ipv4_neighbors: cdktf.listMapper(ciscoBgpFeatureTemplateIpv4NeighborsToTerraform, false)(this._ipv4Neighbors.internalValue),
      ipv4_route_targets: cdktf.listMapper(ciscoBgpFeatureTemplateIpv4RouteTargetsToTerraform, false)(this._ipv4RouteTargets.internalValue),
      ipv6_neighbors: cdktf.listMapper(ciscoBgpFeatureTemplateIpv6NeighborsToTerraform, false)(this._ipv6Neighbors.internalValue),
      ipv6_route_targets: cdktf.listMapper(ciscoBgpFeatureTemplateIpv6RouteTargetsToTerraform, false)(this._ipv6RouteTargets.internalValue),
      keepalive: cdktf.numberToTerraform(this._keepalive),
      keepalive_variable: cdktf.stringToTerraform(this._keepaliveVariable),
      missing_med_worst: cdktf.booleanToTerraform(this._missingMedWorst),
      missing_med_worst_variable: cdktf.stringToTerraform(this._missingMedWorstVariable),
      mpls_interfaces: cdktf.listMapper(ciscoBgpFeatureTemplateMplsInterfacesToTerraform, false)(this._mplsInterfaces.internalValue),
      multipath_relax: cdktf.booleanToTerraform(this._multipathRelax),
      multipath_relax_variable: cdktf.stringToTerraform(this._multipathRelaxVariable),
      name: cdktf.stringToTerraform(this._name),
      propagate_aspath: cdktf.booleanToTerraform(this._propagateAspath),
      propagate_aspath_variable: cdktf.stringToTerraform(this._propagateAspathVariable),
      propagate_community: cdktf.booleanToTerraform(this._propagateCommunity),
      propagate_community_variable: cdktf.stringToTerraform(this._propagateCommunityVariable),
      router_id: cdktf.stringToTerraform(this._routerId),
      router_id_variable: cdktf.stringToTerraform(this._routerIdVariable),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_families: {
        value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateAddressFamiliesToHclTerraform, false)(this._addressFamilies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoBgpFeatureTemplateAddressFamiliesList",
      },
      always_compare_med: {
        value: cdktf.booleanToHclTerraform(this._alwaysCompareMed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      always_compare_med_variable: {
        value: cdktf.stringToHclTerraform(this._alwaysCompareMedVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_number: {
        value: cdktf.stringToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_number_variable: {
        value: cdktf.stringToHclTerraform(this._asNumberVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compare_router_id: {
        value: cdktf.booleanToHclTerraform(this._compareRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compare_router_id_variable: {
        value: cdktf.stringToHclTerraform(this._compareRouterIdVariable),
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
      deterministic_med: {
        value: cdktf.booleanToHclTerraform(this._deterministicMed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deterministic_med_variable: {
        value: cdktf.stringToHclTerraform(this._deterministicMedVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      distance_external: {
        value: cdktf.numberToHclTerraform(this._distanceExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_external_variable: {
        value: cdktf.stringToHclTerraform(this._distanceExternalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance_internal: {
        value: cdktf.numberToHclTerraform(this._distanceInternal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_internal_variable: {
        value: cdktf.stringToHclTerraform(this._distanceInternalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance_local: {
        value: cdktf.numberToHclTerraform(this._distanceLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_local_variable: {
        value: cdktf.stringToHclTerraform(this._distanceLocalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      holdtime: {
        value: cdktf.numberToHclTerraform(this._holdtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      holdtime_variable: {
        value: cdktf.stringToHclTerraform(this._holdtimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_neighbors: {
        value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateIpv4NeighborsToHclTerraform, false)(this._ipv4Neighbors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoBgpFeatureTemplateIpv4NeighborsList",
      },
      ipv4_route_targets: {
        value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateIpv4RouteTargetsToHclTerraform, false)(this._ipv4RouteTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoBgpFeatureTemplateIpv4RouteTargetsList",
      },
      ipv6_neighbors: {
        value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateIpv6NeighborsToHclTerraform, false)(this._ipv6Neighbors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoBgpFeatureTemplateIpv6NeighborsList",
      },
      ipv6_route_targets: {
        value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateIpv6RouteTargetsToHclTerraform, false)(this._ipv6RouteTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoBgpFeatureTemplateIpv6RouteTargetsList",
      },
      keepalive: {
        value: cdktf.numberToHclTerraform(this._keepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keepalive_variable: {
        value: cdktf.stringToHclTerraform(this._keepaliveVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      missing_med_worst: {
        value: cdktf.booleanToHclTerraform(this._missingMedWorst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      missing_med_worst_variable: {
        value: cdktf.stringToHclTerraform(this._missingMedWorstVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpls_interfaces: {
        value: cdktf.listMapperHcl(ciscoBgpFeatureTemplateMplsInterfacesToHclTerraform, false)(this._mplsInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoBgpFeatureTemplateMplsInterfacesList",
      },
      multipath_relax: {
        value: cdktf.booleanToHclTerraform(this._multipathRelax),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multipath_relax_variable: {
        value: cdktf.stringToHclTerraform(this._multipathRelaxVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      propagate_aspath: {
        value: cdktf.booleanToHclTerraform(this._propagateAspath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      propagate_aspath_variable: {
        value: cdktf.stringToHclTerraform(this._propagateAspathVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      propagate_community: {
        value: cdktf.booleanToHclTerraform(this._propagateCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      propagate_community_variable: {
        value: cdktf.stringToHclTerraform(this._propagateCommunityVariable),
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
      router_id_variable: {
        value: cdktf.stringToHclTerraform(this._routerIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_variable: {
        value: cdktf.stringToHclTerraform(this._shutdownVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
