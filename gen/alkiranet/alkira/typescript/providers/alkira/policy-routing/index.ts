// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRoutingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Prefix list ID to send aggregates out towards on-prem connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#advertise_custom_routes_prefix_id PolicyRouting#advertise_custom_routes_prefix_id}
  */
  readonly advertiseCustomRoutesPrefixId?: number;
  /**
  * Advertise Alkira’s Internet Connector to selected scope. This only applies to `OUTBOUND` policy. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#advertise_internet_exit PolicyRouting#advertise_internet_exit}
  */
  readonly advertiseInternetExit?: boolean | cdktf.IResolvable;
  /**
  * Advertise routes from other on premise connectors to selected scope. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#advertise_on_prem_routes PolicyRouting#advertise_on_prem_routes}
  */
  readonly advertiseOnPremRoutes?: boolean | cdktf.IResolvable;
  /**
  * The description of the routing policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#description PolicyRouting#description}
  */
  readonly description?: string;
  /**
  * The direction of the route, `INBOUND` or `OUTBOUND`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#direction PolicyRouting#direction}
  */
  readonly direction: string;
  /**
  * Whether enable AS-override on associated connectors. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#enable_as_override PolicyRouting#enable_as_override}
  */
  readonly enableAsOverride?: boolean | cdktf.IResolvable;
  /**
  * Whether the routing policy is enabled. By default, it is set to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#enabled PolicyRouting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Excludes given associated connector from `included_groups`. `implicit_group_id` of a branch/on-premise connector for which a user defined group is used in `included_groups` can be used here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#excluded_group_ids PolicyRouting#excluded_group_ids}
  */
  readonly excludedGroupIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#id PolicyRouting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defines the scope for the policy. Connector associated with group IDs metioned here is where this policy would be applied. Group IDs that associated with branch/on-premise connectors can be used here. These group should not contain any cloud connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#included_group_ids PolicyRouting#included_group_ids}
  */
  readonly includedGroupIds: number[];
  /**
  * The name of the routing policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#name PolicyRouting#name}
  */
  readonly name: string;
  /**
  * IDs of segments that will define the policy scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#segment_id PolicyRouting#segment_id}
  */
  readonly segmentId: string;
  /**
  * Prefix list ID to source routes from cloud connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#source_routes_prefix_list_id PolicyRouting#source_routes_prefix_list_id}
  */
  readonly sourceRoutesPrefixListId?: number;
  /**
  * The category of connectors this policy targets. Value could be `USERS_AND_SITES` or `CLOUD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#target_connector_category PolicyRouting#target_connector_category}
  */
  readonly targetConnectorCategory?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#rule PolicyRouting#rule}
  */
  readonly rule?: PolicyRoutingRule[] | cdktf.IResolvable;
}
export interface PolicyRoutingRule {
  /**
  * Action to be set on matched routes. Value could be `ALLOW`, `DENY` and `ALLOW_W_SET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#action PolicyRouting#action}
  */
  readonly action: string;
  /**
  * This acts as match all if enabledand should be used as exlusive match option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#match_all PolicyRouting#match_all}
  */
  readonly matchAll?: boolean | cdktf.IResolvable;
  /**
  * IDs of a AS Path Lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#match_as_path_list_ids PolicyRouting#match_as_path_list_ids}
  */
  readonly matchAsPathListIds?: number[];
  /**
  * IDs of Community Lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#match_community_list_ids PolicyRouting#match_community_list_ids}
  */
  readonly matchCommunityListIds?: number[];
  /**
  * List of CXPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#match_cxps PolicyRouting#match_cxps}
  */
  readonly matchCxps?: string[];
  /**
  * IDs of Extended Community Lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#match_extended_community_list_ids PolicyRouting#match_extended_community_list_ids}
  */
  readonly matchExtendedCommunityListIds?: number[];
  /**
  * IDs of groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#match_group_ids PolicyRouting#match_group_ids}
  */
  readonly matchGroupIds?: number[];
  /**
  * IDs of Prefix Lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#match_prefix_list_ids PolicyRouting#match_prefix_list_ids}
  */
  readonly matchPrefixListIds?: number[];
  /**
  * IDs of segment resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#match_segment_resource_ids PolicyRouting#match_segment_resource_ids}
  */
  readonly matchSegmentResourceIds?: number[];
  /**
  * The name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#name PolicyRouting#name}
  */
  readonly name: string;
  /**
  * This allows to redistribute routes with lower preference to the restrictedCxps. Hence, this option can only be used with `RESTRICTED_CXPS` distribution_type. Also only 1 CXP is allowed in restricted_cxps, when this is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#routes_distribution_as_secondary PolicyRouting#routes_distribution_as_secondary}
  */
  readonly routesDistributionAsSecondary?: boolean | cdktf.IResolvable;
  /**
  * List of cxps to which routes distribution is restricted. Should be used only with distributionType `RESTRICTED_CXPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#routes_distribution_restricted_cxps PolicyRouting#routes_distribution_restricted_cxps}
  */
  readonly routesDistributionRestrictedCxps?: string[];
  /**
  * Redistribute routes that match with this rule match codition to. The value could be `ALL`, `LOCAL_ONLY` and `RESTRICTED_CXPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#routes_distribution_type PolicyRouting#routes_distribution_type}
  */
  readonly routesDistributionType?: string;
  /**
  * Allows to prepend one or more AS numbers to the current AS PATH. Each AS number can be a value from 0 through 65535. Example - 100 100 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#set_as_path_prepend PolicyRouting#set_as_path_prepend}
  */
  readonly setAsPathPrepend?: string;
  /**
  * ASNs that will be replaced with the local segment ASN. Accepts a comma-separated string of ASNs or 'ALL'. Can be null. This option can be applied only to `USERS_AND_SITES` connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#set_as_path_replace_with_segment_asn PolicyRouting#set_as_path_replace_with_segment_asn}
  */
  readonly setAsPathReplaceWithSegmentAsn?: string;
  /**
  * Allows to add one or more community attributes to the existing communities on the route. Community attribute is specified in this format: `as-number:community-value`. as-number and community-value can be a value from `0` through `65535`. Example: `65512:20 65512:21`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#set_community PolicyRouting#set_community}
  */
  readonly setCommunity?: string;
  /**
  * Allows to add one or more extended community attributes to the existing extended communities on the route. Extended community attribute is specified in this format: `type:administrator:assigned-number`. Currently only type origin(soo) is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#set_extended_community PolicyRouting#set_extended_community}
  */
  readonly setExtendedCommunity?: string;
  /**
  * Multi Exit Discriminator. BGP attribute to suggest the preferred path into your network. Lower values are more preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#set_med PolicyRouting#set_med}
  */
  readonly setMed?: number;
}

export function policyRoutingRuleToTerraform(struct?: PolicyRoutingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    match_all: cdktf.booleanToTerraform(struct!.matchAll),
    match_as_path_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.matchAsPathListIds),
    match_community_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.matchCommunityListIds),
    match_cxps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchCxps),
    match_extended_community_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.matchExtendedCommunityListIds),
    match_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.matchGroupIds),
    match_prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.matchPrefixListIds),
    match_segment_resource_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.matchSegmentResourceIds),
    name: cdktf.stringToTerraform(struct!.name),
    routes_distribution_as_secondary: cdktf.booleanToTerraform(struct!.routesDistributionAsSecondary),
    routes_distribution_restricted_cxps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routesDistributionRestrictedCxps),
    routes_distribution_type: cdktf.stringToTerraform(struct!.routesDistributionType),
    set_as_path_prepend: cdktf.stringToTerraform(struct!.setAsPathPrepend),
    set_as_path_replace_with_segment_asn: cdktf.stringToTerraform(struct!.setAsPathReplaceWithSegmentAsn),
    set_community: cdktf.stringToTerraform(struct!.setCommunity),
    set_extended_community: cdktf.stringToTerraform(struct!.setExtendedCommunity),
    set_med: cdktf.numberToTerraform(struct!.setMed),
  }
}


export function policyRoutingRuleToHclTerraform(struct?: PolicyRoutingRule | cdktf.IResolvable): any {
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
    match_all: {
      value: cdktf.booleanToHclTerraform(struct!.matchAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_as_path_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.matchAsPathListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    match_community_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.matchCommunityListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    match_cxps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchCxps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_extended_community_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.matchExtendedCommunityListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    match_group_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.matchGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    match_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.matchPrefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    match_segment_resource_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.matchSegmentResourceIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes_distribution_as_secondary: {
      value: cdktf.booleanToHclTerraform(struct!.routesDistributionAsSecondary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routes_distribution_restricted_cxps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routesDistributionRestrictedCxps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    routes_distribution_type: {
      value: cdktf.stringToHclTerraform(struct!.routesDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_as_path_prepend: {
      value: cdktf.stringToHclTerraform(struct!.setAsPathPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_as_path_replace_with_segment_asn: {
      value: cdktf.stringToHclTerraform(struct!.setAsPathReplaceWithSegmentAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_community: {
      value: cdktf.stringToHclTerraform(struct!.setCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_extended_community: {
      value: cdktf.stringToHclTerraform(struct!.setExtendedCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_med: {
      value: cdktf.numberToHclTerraform(struct!.setMed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRoutingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRoutingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._matchAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAll = this._matchAll;
    }
    if (this._matchAsPathListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAsPathListIds = this._matchAsPathListIds;
    }
    if (this._matchCommunityListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCommunityListIds = this._matchCommunityListIds;
    }
    if (this._matchCxps !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCxps = this._matchCxps;
    }
    if (this._matchExtendedCommunityListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExtendedCommunityListIds = this._matchExtendedCommunityListIds;
    }
    if (this._matchGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchGroupIds = this._matchGroupIds;
    }
    if (this._matchPrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPrefixListIds = this._matchPrefixListIds;
    }
    if (this._matchSegmentResourceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSegmentResourceIds = this._matchSegmentResourceIds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routesDistributionAsSecondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.routesDistributionAsSecondary = this._routesDistributionAsSecondary;
    }
    if (this._routesDistributionRestrictedCxps !== undefined) {
      hasAnyValues = true;
      internalValueResult.routesDistributionRestrictedCxps = this._routesDistributionRestrictedCxps;
    }
    if (this._routesDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.routesDistributionType = this._routesDistributionType;
    }
    if (this._setAsPathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAsPathPrepend = this._setAsPathPrepend;
    }
    if (this._setAsPathReplaceWithSegmentAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAsPathReplaceWithSegmentAsn = this._setAsPathReplaceWithSegmentAsn;
    }
    if (this._setCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCommunity = this._setCommunity;
    }
    if (this._setExtendedCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExtendedCommunity = this._setExtendedCommunity;
    }
    if (this._setMed !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMed = this._setMed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRoutingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._matchAll = undefined;
      this._matchAsPathListIds = undefined;
      this._matchCommunityListIds = undefined;
      this._matchCxps = undefined;
      this._matchExtendedCommunityListIds = undefined;
      this._matchGroupIds = undefined;
      this._matchPrefixListIds = undefined;
      this._matchSegmentResourceIds = undefined;
      this._name = undefined;
      this._routesDistributionAsSecondary = undefined;
      this._routesDistributionRestrictedCxps = undefined;
      this._routesDistributionType = undefined;
      this._setAsPathPrepend = undefined;
      this._setAsPathReplaceWithSegmentAsn = undefined;
      this._setCommunity = undefined;
      this._setExtendedCommunity = undefined;
      this._setMed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._matchAll = value.matchAll;
      this._matchAsPathListIds = value.matchAsPathListIds;
      this._matchCommunityListIds = value.matchCommunityListIds;
      this._matchCxps = value.matchCxps;
      this._matchExtendedCommunityListIds = value.matchExtendedCommunityListIds;
      this._matchGroupIds = value.matchGroupIds;
      this._matchPrefixListIds = value.matchPrefixListIds;
      this._matchSegmentResourceIds = value.matchSegmentResourceIds;
      this._name = value.name;
      this._routesDistributionAsSecondary = value.routesDistributionAsSecondary;
      this._routesDistributionRestrictedCxps = value.routesDistributionRestrictedCxps;
      this._routesDistributionType = value.routesDistributionType;
      this._setAsPathPrepend = value.setAsPathPrepend;
      this._setAsPathReplaceWithSegmentAsn = value.setAsPathReplaceWithSegmentAsn;
      this._setCommunity = value.setCommunity;
      this._setExtendedCommunity = value.setExtendedCommunity;
      this._setMed = value.setMed;
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

  // match_all - computed: false, optional: true, required: false
  private _matchAll?: boolean | cdktf.IResolvable; 
  public get matchAll() {
    return this.getBooleanAttribute('match_all');
  }
  public set matchAll(value: boolean | cdktf.IResolvable) {
    this._matchAll = value;
  }
  public resetMatchAll() {
    this._matchAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllInput() {
    return this._matchAll;
  }

  // match_as_path_list_ids - computed: false, optional: true, required: false
  private _matchAsPathListIds?: number[]; 
  public get matchAsPathListIds() {
    return this.getNumberListAttribute('match_as_path_list_ids');
  }
  public set matchAsPathListIds(value: number[]) {
    this._matchAsPathListIds = value;
  }
  public resetMatchAsPathListIds() {
    this._matchAsPathListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAsPathListIdsInput() {
    return this._matchAsPathListIds;
  }

  // match_community_list_ids - computed: false, optional: true, required: false
  private _matchCommunityListIds?: number[]; 
  public get matchCommunityListIds() {
    return this.getNumberListAttribute('match_community_list_ids');
  }
  public set matchCommunityListIds(value: number[]) {
    this._matchCommunityListIds = value;
  }
  public resetMatchCommunityListIds() {
    this._matchCommunityListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCommunityListIdsInput() {
    return this._matchCommunityListIds;
  }

  // match_cxps - computed: false, optional: true, required: false
  private _matchCxps?: string[]; 
  public get matchCxps() {
    return this.getListAttribute('match_cxps');
  }
  public set matchCxps(value: string[]) {
    this._matchCxps = value;
  }
  public resetMatchCxps() {
    this._matchCxps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCxpsInput() {
    return this._matchCxps;
  }

  // match_extended_community_list_ids - computed: false, optional: true, required: false
  private _matchExtendedCommunityListIds?: number[]; 
  public get matchExtendedCommunityListIds() {
    return this.getNumberListAttribute('match_extended_community_list_ids');
  }
  public set matchExtendedCommunityListIds(value: number[]) {
    this._matchExtendedCommunityListIds = value;
  }
  public resetMatchExtendedCommunityListIds() {
    this._matchExtendedCommunityListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExtendedCommunityListIdsInput() {
    return this._matchExtendedCommunityListIds;
  }

  // match_group_ids - computed: false, optional: true, required: false
  private _matchGroupIds?: number[]; 
  public get matchGroupIds() {
    return this.getNumberListAttribute('match_group_ids');
  }
  public set matchGroupIds(value: number[]) {
    this._matchGroupIds = value;
  }
  public resetMatchGroupIds() {
    this._matchGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchGroupIdsInput() {
    return this._matchGroupIds;
  }

  // match_prefix_list_ids - computed: false, optional: true, required: false
  private _matchPrefixListIds?: number[]; 
  public get matchPrefixListIds() {
    return this.getNumberListAttribute('match_prefix_list_ids');
  }
  public set matchPrefixListIds(value: number[]) {
    this._matchPrefixListIds = value;
  }
  public resetMatchPrefixListIds() {
    this._matchPrefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPrefixListIdsInput() {
    return this._matchPrefixListIds;
  }

  // match_segment_resource_ids - computed: false, optional: true, required: false
  private _matchSegmentResourceIds?: number[]; 
  public get matchSegmentResourceIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('match_segment_resource_ids')));
  }
  public set matchSegmentResourceIds(value: number[]) {
    this._matchSegmentResourceIds = value;
  }
  public resetMatchSegmentResourceIds() {
    this._matchSegmentResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSegmentResourceIdsInput() {
    return this._matchSegmentResourceIds;
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

  // routes_distribution_as_secondary - computed: false, optional: true, required: false
  private _routesDistributionAsSecondary?: boolean | cdktf.IResolvable; 
  public get routesDistributionAsSecondary() {
    return this.getBooleanAttribute('routes_distribution_as_secondary');
  }
  public set routesDistributionAsSecondary(value: boolean | cdktf.IResolvable) {
    this._routesDistributionAsSecondary = value;
  }
  public resetRoutesDistributionAsSecondary() {
    this._routesDistributionAsSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesDistributionAsSecondaryInput() {
    return this._routesDistributionAsSecondary;
  }

  // routes_distribution_restricted_cxps - computed: false, optional: true, required: false
  private _routesDistributionRestrictedCxps?: string[]; 
  public get routesDistributionRestrictedCxps() {
    return this.getListAttribute('routes_distribution_restricted_cxps');
  }
  public set routesDistributionRestrictedCxps(value: string[]) {
    this._routesDistributionRestrictedCxps = value;
  }
  public resetRoutesDistributionRestrictedCxps() {
    this._routesDistributionRestrictedCxps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesDistributionRestrictedCxpsInput() {
    return this._routesDistributionRestrictedCxps;
  }

  // routes_distribution_type - computed: false, optional: true, required: false
  private _routesDistributionType?: string; 
  public get routesDistributionType() {
    return this.getStringAttribute('routes_distribution_type');
  }
  public set routesDistributionType(value: string) {
    this._routesDistributionType = value;
  }
  public resetRoutesDistributionType() {
    this._routesDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesDistributionTypeInput() {
    return this._routesDistributionType;
  }

  // sequence_no - computed: true, optional: false, required: false
  public get sequenceNo() {
    return this.getNumberAttribute('sequence_no');
  }

  // set_as_path_prepend - computed: false, optional: true, required: false
  private _setAsPathPrepend?: string; 
  public get setAsPathPrepend() {
    return this.getStringAttribute('set_as_path_prepend');
  }
  public set setAsPathPrepend(value: string) {
    this._setAsPathPrepend = value;
  }
  public resetSetAsPathPrepend() {
    this._setAsPathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsPathPrependInput() {
    return this._setAsPathPrepend;
  }

  // set_as_path_replace_with_segment_asn - computed: false, optional: true, required: false
  private _setAsPathReplaceWithSegmentAsn?: string; 
  public get setAsPathReplaceWithSegmentAsn() {
    return this.getStringAttribute('set_as_path_replace_with_segment_asn');
  }
  public set setAsPathReplaceWithSegmentAsn(value: string) {
    this._setAsPathReplaceWithSegmentAsn = value;
  }
  public resetSetAsPathReplaceWithSegmentAsn() {
    this._setAsPathReplaceWithSegmentAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsPathReplaceWithSegmentAsnInput() {
    return this._setAsPathReplaceWithSegmentAsn;
  }

  // set_community - computed: false, optional: true, required: false
  private _setCommunity?: string; 
  public get setCommunity() {
    return this.getStringAttribute('set_community');
  }
  public set setCommunity(value: string) {
    this._setCommunity = value;
  }
  public resetSetCommunity() {
    this._setCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunityInput() {
    return this._setCommunity;
  }

  // set_extended_community - computed: false, optional: true, required: false
  private _setExtendedCommunity?: string; 
  public get setExtendedCommunity() {
    return this.getStringAttribute('set_extended_community');
  }
  public set setExtendedCommunity(value: string) {
    this._setExtendedCommunity = value;
  }
  public resetSetExtendedCommunity() {
    this._setExtendedCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtendedCommunityInput() {
    return this._setExtendedCommunity;
  }

  // set_med - computed: false, optional: true, required: false
  private _setMed?: number; 
  public get setMed() {
    return this.getNumberAttribute('set_med');
  }
  public set setMed(value: number) {
    this._setMed = value;
  }
  public resetSetMed() {
    this._setMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMedInput() {
    return this._setMed;
  }
}

export class PolicyRoutingRuleList extends cdktf.ComplexList {
  public internalValue? : PolicyRoutingRule[] | cdktf.IResolvable

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
  public get(index: number): PolicyRoutingRuleOutputReference {
    return new PolicyRoutingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing alkira_policy_routing}
*/
export class PolicyRouting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_policy_routing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyRouting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyRouting to import
  * @param importFromId The id of the existing PolicyRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyRouting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_policy_routing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_routing alkira_policy_routing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRoutingConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRoutingConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_policy_routing',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseCustomRoutesPrefixId = config.advertiseCustomRoutesPrefixId;
    this._advertiseInternetExit = config.advertiseInternetExit;
    this._advertiseOnPremRoutes = config.advertiseOnPremRoutes;
    this._description = config.description;
    this._direction = config.direction;
    this._enableAsOverride = config.enableAsOverride;
    this._enabled = config.enabled;
    this._excludedGroupIds = config.excludedGroupIds;
    this._id = config.id;
    this._includedGroupIds = config.includedGroupIds;
    this._name = config.name;
    this._segmentId = config.segmentId;
    this._sourceRoutesPrefixListId = config.sourceRoutesPrefixListId;
    this._targetConnectorCategory = config.targetConnectorCategory;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_custom_routes_prefix_id - computed: false, optional: true, required: false
  private _advertiseCustomRoutesPrefixId?: number; 
  public get advertiseCustomRoutesPrefixId() {
    return this.getNumberAttribute('advertise_custom_routes_prefix_id');
  }
  public set advertiseCustomRoutesPrefixId(value: number) {
    this._advertiseCustomRoutesPrefixId = value;
  }
  public resetAdvertiseCustomRoutesPrefixId() {
    this._advertiseCustomRoutesPrefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseCustomRoutesPrefixIdInput() {
    return this._advertiseCustomRoutesPrefixId;
  }

  // advertise_internet_exit - computed: false, optional: true, required: false
  private _advertiseInternetExit?: boolean | cdktf.IResolvable; 
  public get advertiseInternetExit() {
    return this.getBooleanAttribute('advertise_internet_exit');
  }
  public set advertiseInternetExit(value: boolean | cdktf.IResolvable) {
    this._advertiseInternetExit = value;
  }
  public resetAdvertiseInternetExit() {
    this._advertiseInternetExit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInternetExitInput() {
    return this._advertiseInternetExit;
  }

  // advertise_on_prem_routes - computed: false, optional: true, required: false
  private _advertiseOnPremRoutes?: boolean | cdktf.IResolvable; 
  public get advertiseOnPremRoutes() {
    return this.getBooleanAttribute('advertise_on_prem_routes');
  }
  public set advertiseOnPremRoutes(value: boolean | cdktf.IResolvable) {
    this._advertiseOnPremRoutes = value;
  }
  public resetAdvertiseOnPremRoutes() {
    this._advertiseOnPremRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnPremRoutesInput() {
    return this._advertiseOnPremRoutes;
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

  // enable_as_override - computed: false, optional: true, required: false
  private _enableAsOverride?: boolean | cdktf.IResolvable; 
  public get enableAsOverride() {
    return this.getBooleanAttribute('enable_as_override');
  }
  public set enableAsOverride(value: boolean | cdktf.IResolvable) {
    this._enableAsOverride = value;
  }
  public resetEnableAsOverride() {
    this._enableAsOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAsOverrideInput() {
    return this._enableAsOverride;
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

  // excluded_group_ids - computed: false, optional: true, required: false
  private _excludedGroupIds?: number[]; 
  public get excludedGroupIds() {
    return this.getNumberListAttribute('excluded_group_ids');
  }
  public set excludedGroupIds(value: number[]) {
    this._excludedGroupIds = value;
  }
  public resetExcludedGroupIds() {
    this._excludedGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedGroupIdsInput() {
    return this._excludedGroupIds;
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

  // included_group_ids - computed: false, optional: false, required: true
  private _includedGroupIds?: number[]; 
  public get includedGroupIds() {
    return this.getNumberListAttribute('included_group_ids');
  }
  public set includedGroupIds(value: number[]) {
    this._includedGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includedGroupIdsInput() {
    return this._includedGroupIds;
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

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // source_routes_prefix_list_id - computed: false, optional: true, required: false
  private _sourceRoutesPrefixListId?: number; 
  public get sourceRoutesPrefixListId() {
    return this.getNumberAttribute('source_routes_prefix_list_id');
  }
  public set sourceRoutesPrefixListId(value: number) {
    this._sourceRoutesPrefixListId = value;
  }
  public resetSourceRoutesPrefixListId() {
    this._sourceRoutesPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRoutesPrefixListIdInput() {
    return this._sourceRoutesPrefixListId;
  }

  // target_connector_category - computed: false, optional: true, required: false
  private _targetConnectorCategory?: string; 
  public get targetConnectorCategory() {
    return this.getStringAttribute('target_connector_category');
  }
  public set targetConnectorCategory(value: string) {
    this._targetConnectorCategory = value;
  }
  public resetTargetConnectorCategory() {
    this._targetConnectorCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConnectorCategoryInput() {
    return this._targetConnectorCategory;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new PolicyRoutingRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: PolicyRoutingRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_custom_routes_prefix_id: cdktf.numberToTerraform(this._advertiseCustomRoutesPrefixId),
      advertise_internet_exit: cdktf.booleanToTerraform(this._advertiseInternetExit),
      advertise_on_prem_routes: cdktf.booleanToTerraform(this._advertiseOnPremRoutes),
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.stringToTerraform(this._direction),
      enable_as_override: cdktf.booleanToTerraform(this._enableAsOverride),
      enabled: cdktf.booleanToTerraform(this._enabled),
      excluded_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludedGroupIds),
      id: cdktf.stringToTerraform(this._id),
      included_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._includedGroupIds),
      name: cdktf.stringToTerraform(this._name),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      source_routes_prefix_list_id: cdktf.numberToTerraform(this._sourceRoutesPrefixListId),
      target_connector_category: cdktf.stringToTerraform(this._targetConnectorCategory),
      rule: cdktf.listMapper(policyRoutingRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_custom_routes_prefix_id: {
        value: cdktf.numberToHclTerraform(this._advertiseCustomRoutesPrefixId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      advertise_internet_exit: {
        value: cdktf.booleanToHclTerraform(this._advertiseInternetExit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_on_prem_routes: {
        value: cdktf.booleanToHclTerraform(this._advertiseOnPremRoutes),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_as_override: {
        value: cdktf.booleanToHclTerraform(this._enableAsOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excluded_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._excludedGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      included_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._includedGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_routes_prefix_list_id: {
        value: cdktf.numberToHclTerraform(this._sourceRoutesPrefixListId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_connector_category: {
        value: cdktf.stringToHclTerraform(this._targetConnectorCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(policyRoutingRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyRoutingRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
