// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceRoutePolicyFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default Action
  *   - Choices: `reject`, `accept`
  *   - Default value: `reject`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#default_action ServiceRoutePolicyFeature#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#description ServiceRoutePolicyFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#feature_profile_id ServiceRoutePolicyFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#name ServiceRoutePolicyFeature#name}
  */
  readonly name: string;
  /**
  * Route Policy List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#sequences ServiceRoutePolicyFeature#sequences}
  */
  readonly sequences?: ServiceRoutePolicyFeatureSequences[] | cdktf.IResolvable;
}
export interface ServiceRoutePolicyFeatureSequencesActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#as_path_prepend ServiceRoutePolicyFeature#as_path_prepend}
  */
  readonly asPathPrepend?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#community ServiceRoutePolicyFeature#community}
  */
  readonly community?: string[];
  /**
  * 
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#community_additive ServiceRoutePolicyFeature#community_additive}
  */
  readonly communityAdditive?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#community_variable ServiceRoutePolicyFeature#community_variable}
  */
  readonly communityVariable?: string;
  /**
  * Set Ipv4 Next Hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#ipv4_next_hop ServiceRoutePolicyFeature#ipv4_next_hop}
  */
  readonly ipv4NextHop?: string;
  /**
  * Set Ipv6 Next Hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#ipv6_next_hop ServiceRoutePolicyFeature#ipv6_next_hop}
  */
  readonly ipv6NextHop?: string;
  /**
  * Set Local Preference
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#local_preference ServiceRoutePolicyFeature#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Set Metric
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#metric ServiceRoutePolicyFeature#metric}
  */
  readonly metric?: number;
  /**
  * Set Metric Type
  *   - Choices: `type1`, `type2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#metric_type ServiceRoutePolicyFeature#metric_type}
  */
  readonly metricType?: string;
  /**
  * Set OMP Tag
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#omp_tag ServiceRoutePolicyFeature#omp_tag}
  */
  readonly ompTag?: number;
  /**
  * Set Origin
  *   - Choices: `EGP`, `IGP`, `Incomplete`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#origin ServiceRoutePolicyFeature#origin}
  */
  readonly origin?: string;
  /**
  * Set OSPF Tag
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#ospf_tag ServiceRoutePolicyFeature#ospf_tag}
  */
  readonly ospfTag?: number;
  /**
  * Set Weight
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#weight ServiceRoutePolicyFeature#weight}
  */
  readonly weight?: number;
}

export function serviceRoutePolicyFeatureSequencesActionsToTerraform(struct?: ServiceRoutePolicyFeatureSequencesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path_prepend: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asPathPrepend),
    community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.community),
    community_additive: cdktf.booleanToTerraform(struct!.communityAdditive),
    community_variable: cdktf.stringToTerraform(struct!.communityVariable),
    ipv4_next_hop: cdktf.stringToTerraform(struct!.ipv4NextHop),
    ipv6_next_hop: cdktf.stringToTerraform(struct!.ipv6NextHop),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    omp_tag: cdktf.numberToTerraform(struct!.ompTag),
    origin: cdktf.stringToTerraform(struct!.origin),
    ospf_tag: cdktf.numberToTerraform(struct!.ospfTag),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function serviceRoutePolicyFeatureSequencesActionsToHclTerraform(struct?: ServiceRoutePolicyFeatureSequencesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_path_prepend: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asPathPrepend),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.community),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    community_additive: {
      value: cdktf.booleanToHclTerraform(struct!.communityAdditive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    community_variable: {
      value: cdktf.stringToHclTerraform(struct!.communityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_next_hop: {
      value: cdktf.stringToHclTerraform(struct!.ipv4NextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_next_hop: {
      value: cdktf.stringToHclTerraform(struct!.ipv6NextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    omp_tag: {
      value: cdktf.numberToHclTerraform(struct!.ompTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ospf_tag: {
      value: cdktf.numberToHclTerraform(struct!.ospfTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceRoutePolicyFeatureSequencesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceRoutePolicyFeatureSequencesActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathPrepend = this._asPathPrepend;
    }
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._communityAdditive !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityAdditive = this._communityAdditive;
    }
    if (this._communityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityVariable = this._communityVariable;
    }
    if (this._ipv4NextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NextHop = this._ipv4NextHop;
    }
    if (this._ipv6NextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NextHop = this._ipv6NextHop;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._ompTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ompTag = this._ompTag;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._ospfTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfTag = this._ospfTag;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceRoutePolicyFeatureSequencesActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPathPrepend = undefined;
      this._community = undefined;
      this._communityAdditive = undefined;
      this._communityVariable = undefined;
      this._ipv4NextHop = undefined;
      this._ipv6NextHop = undefined;
      this._localPreference = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._ompTag = undefined;
      this._origin = undefined;
      this._ospfTag = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPathPrepend = value.asPathPrepend;
      this._community = value.community;
      this._communityAdditive = value.communityAdditive;
      this._communityVariable = value.communityVariable;
      this._ipv4NextHop = value.ipv4NextHop;
      this._ipv6NextHop = value.ipv6NextHop;
      this._localPreference = value.localPreference;
      this._metric = value.metric;
      this._metricType = value.metricType;
      this._ompTag = value.ompTag;
      this._origin = value.origin;
      this._ospfTag = value.ospfTag;
      this._weight = value.weight;
    }
  }

  // as_path_prepend - computed: false, optional: true, required: false
  private _asPathPrepend?: number[]; 
  public get asPathPrepend() {
    return this.getNumberListAttribute('as_path_prepend');
  }
  public set asPathPrepend(value: number[]) {
    this._asPathPrepend = value;
  }
  public resetAsPathPrepend() {
    this._asPathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathPrependInput() {
    return this._asPathPrepend;
  }

  // community - computed: false, optional: true, required: false
  private _community?: string[]; 
  public get community() {
    return cdktf.Fn.tolist(this.getListAttribute('community'));
  }
  public set community(value: string[]) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // community_additive - computed: false, optional: true, required: false
  private _communityAdditive?: boolean | cdktf.IResolvable; 
  public get communityAdditive() {
    return this.getBooleanAttribute('community_additive');
  }
  public set communityAdditive(value: boolean | cdktf.IResolvable) {
    this._communityAdditive = value;
  }
  public resetCommunityAdditive() {
    this._communityAdditive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityAdditiveInput() {
    return this._communityAdditive;
  }

  // community_variable - computed: false, optional: true, required: false
  private _communityVariable?: string; 
  public get communityVariable() {
    return this.getStringAttribute('community_variable');
  }
  public set communityVariable(value: string) {
    this._communityVariable = value;
  }
  public resetCommunityVariable() {
    this._communityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityVariableInput() {
    return this._communityVariable;
  }

  // ipv4_next_hop - computed: false, optional: true, required: false
  private _ipv4NextHop?: string; 
  public get ipv4NextHop() {
    return this.getStringAttribute('ipv4_next_hop');
  }
  public set ipv4NextHop(value: string) {
    this._ipv4NextHop = value;
  }
  public resetIpv4NextHop() {
    this._ipv4NextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NextHopInput() {
    return this._ipv4NextHop;
  }

  // ipv6_next_hop - computed: false, optional: true, required: false
  private _ipv6NextHop?: string; 
  public get ipv6NextHop() {
    return this.getStringAttribute('ipv6_next_hop');
  }
  public set ipv6NextHop(value: string) {
    this._ipv6NextHop = value;
  }
  public resetIpv6NextHop() {
    this._ipv6NextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NextHopInput() {
    return this._ipv6NextHop;
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

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // omp_tag - computed: false, optional: true, required: false
  private _ompTag?: number; 
  public get ompTag() {
    return this.getNumberAttribute('omp_tag');
  }
  public set ompTag(value: number) {
    this._ompTag = value;
  }
  public resetOmpTag() {
    this._ompTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompTagInput() {
    return this._ompTag;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // ospf_tag - computed: false, optional: true, required: false
  private _ospfTag?: number; 
  public get ospfTag() {
    return this.getNumberAttribute('ospf_tag');
  }
  public set ospfTag(value: number) {
    this._ospfTag = value;
  }
  public resetOspfTag() {
    this._ospfTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfTagInput() {
    return this._ospfTag;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ServiceRoutePolicyFeatureSequencesActionsList extends cdktf.ComplexList {
  public internalValue? : ServiceRoutePolicyFeatureSequencesActions[] | cdktf.IResolvable

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
  public get(index: number): ServiceRoutePolicyFeatureSequencesActionsOutputReference {
    return new ServiceRoutePolicyFeatureSequencesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityLists {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#id ServiceRoutePolicyFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function serviceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityListsToTerraform(struct?: ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function serviceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityListsToHclTerraform(struct?: ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityListsList extends cdktf.ComplexList {
  public internalValue? : ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityLists[] | cdktf.IResolvable

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
  public get(index: number): ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityListsOutputReference {
    return new ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceRoutePolicyFeatureSequencesMatchEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#as_path_list_id ServiceRoutePolicyFeature#as_path_list_id}
  */
  readonly asPathListId?: string;
  /**
  * BGP Local Preference
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#bgp_local_preference ServiceRoutePolicyFeature#bgp_local_preference}
  */
  readonly bgpLocalPreference?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#expanded_community_list_id ServiceRoutePolicyFeature#expanded_community_list_id}
  */
  readonly expandedCommunityListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#extended_community_list_id ServiceRoutePolicyFeature#extended_community_list_id}
  */
  readonly extendedCommunityListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#ipv4_address_prefix_list_id ServiceRoutePolicyFeature#ipv4_address_prefix_list_id}
  */
  readonly ipv4AddressPrefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#ipv4_next_hop_prefix_list_id ServiceRoutePolicyFeature#ipv4_next_hop_prefix_list_id}
  */
  readonly ipv4NextHopPrefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#ipv6_address_prefix_list_id ServiceRoutePolicyFeature#ipv6_address_prefix_list_id}
  */
  readonly ipv6AddressPrefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#ipv6_next_hop_prefix_list_id ServiceRoutePolicyFeature#ipv6_next_hop_prefix_list_id}
  */
  readonly ipv6NextHopPrefixListId?: string;
  /**
  * Select Metric
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#metric ServiceRoutePolicyFeature#metric}
  */
  readonly metric?: number;
  /**
  * Select OMP Tag
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#omp_tag ServiceRoutePolicyFeature#omp_tag}
  */
  readonly ompTag?: number;
  /**
  * Select OSPF Tag
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#ospf_tag ServiceRoutePolicyFeature#ospf_tag}
  */
  readonly ospfTag?: number;
  /**
  * Select a condition such as OR, AND or EXACT
  *   - Choices: `OR`, `AND`, `EXACT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#standard_community_list_criteria ServiceRoutePolicyFeature#standard_community_list_criteria}
  */
  readonly standardCommunityListCriteria?: string;
  /**
  * Select a standard community list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#standard_community_lists ServiceRoutePolicyFeature#standard_community_lists}
  */
  readonly standardCommunityLists?: ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityLists[] | cdktf.IResolvable;
}

export function serviceRoutePolicyFeatureSequencesMatchEntriesToTerraform(struct?: ServiceRoutePolicyFeatureSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path_list_id: cdktf.stringToTerraform(struct!.asPathListId),
    bgp_local_preference: cdktf.numberToTerraform(struct!.bgpLocalPreference),
    expanded_community_list_id: cdktf.stringToTerraform(struct!.expandedCommunityListId),
    extended_community_list_id: cdktf.stringToTerraform(struct!.extendedCommunityListId),
    ipv4_address_prefix_list_id: cdktf.stringToTerraform(struct!.ipv4AddressPrefixListId),
    ipv4_next_hop_prefix_list_id: cdktf.stringToTerraform(struct!.ipv4NextHopPrefixListId),
    ipv6_address_prefix_list_id: cdktf.stringToTerraform(struct!.ipv6AddressPrefixListId),
    ipv6_next_hop_prefix_list_id: cdktf.stringToTerraform(struct!.ipv6NextHopPrefixListId),
    metric: cdktf.numberToTerraform(struct!.metric),
    omp_tag: cdktf.numberToTerraform(struct!.ompTag),
    ospf_tag: cdktf.numberToTerraform(struct!.ospfTag),
    standard_community_list_criteria: cdktf.stringToTerraform(struct!.standardCommunityListCriteria),
    standard_community_lists: cdktf.listMapper(serviceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityListsToTerraform, false)(struct!.standardCommunityLists),
  }
}


export function serviceRoutePolicyFeatureSequencesMatchEntriesToHclTerraform(struct?: ServiceRoutePolicyFeatureSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_path_list_id: {
      value: cdktf.stringToHclTerraform(struct!.asPathListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_local_preference: {
      value: cdktf.numberToHclTerraform(struct!.bgpLocalPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expanded_community_list_id: {
      value: cdktf.stringToHclTerraform(struct!.expandedCommunityListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extended_community_list_id: {
      value: cdktf.stringToHclTerraform(struct!.extendedCommunityListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AddressPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_next_hop_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.ipv4NextHopPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.ipv6AddressPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_next_hop_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.ipv6NextHopPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    omp_tag: {
      value: cdktf.numberToHclTerraform(struct!.ompTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospf_tag: {
      value: cdktf.numberToHclTerraform(struct!.ospfTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standard_community_list_criteria: {
      value: cdktf.stringToHclTerraform(struct!.standardCommunityListCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_community_lists: {
      value: cdktf.listMapperHcl(serviceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityListsToHclTerraform, false)(struct!.standardCommunityLists),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityListsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceRoutePolicyFeatureSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceRoutePolicyFeatureSequencesMatchEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPathListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathListId = this._asPathListId;
    }
    if (this._bgpLocalPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpLocalPreference = this._bgpLocalPreference;
    }
    if (this._expandedCommunityListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandedCommunityListId = this._expandedCommunityListId;
    }
    if (this._extendedCommunityListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedCommunityListId = this._extendedCommunityListId;
    }
    if (this._ipv4AddressPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressPrefixListId = this._ipv4AddressPrefixListId;
    }
    if (this._ipv4NextHopPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NextHopPrefixListId = this._ipv4NextHopPrefixListId;
    }
    if (this._ipv6AddressPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressPrefixListId = this._ipv6AddressPrefixListId;
    }
    if (this._ipv6NextHopPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NextHopPrefixListId = this._ipv6NextHopPrefixListId;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._ompTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ompTag = this._ompTag;
    }
    if (this._ospfTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfTag = this._ospfTag;
    }
    if (this._standardCommunityListCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardCommunityListCriteria = this._standardCommunityListCriteria;
    }
    if (this._standardCommunityLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardCommunityLists = this._standardCommunityLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceRoutePolicyFeatureSequencesMatchEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPathListId = undefined;
      this._bgpLocalPreference = undefined;
      this._expandedCommunityListId = undefined;
      this._extendedCommunityListId = undefined;
      this._ipv4AddressPrefixListId = undefined;
      this._ipv4NextHopPrefixListId = undefined;
      this._ipv6AddressPrefixListId = undefined;
      this._ipv6NextHopPrefixListId = undefined;
      this._metric = undefined;
      this._ompTag = undefined;
      this._ospfTag = undefined;
      this._standardCommunityListCriteria = undefined;
      this._standardCommunityLists.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPathListId = value.asPathListId;
      this._bgpLocalPreference = value.bgpLocalPreference;
      this._expandedCommunityListId = value.expandedCommunityListId;
      this._extendedCommunityListId = value.extendedCommunityListId;
      this._ipv4AddressPrefixListId = value.ipv4AddressPrefixListId;
      this._ipv4NextHopPrefixListId = value.ipv4NextHopPrefixListId;
      this._ipv6AddressPrefixListId = value.ipv6AddressPrefixListId;
      this._ipv6NextHopPrefixListId = value.ipv6NextHopPrefixListId;
      this._metric = value.metric;
      this._ompTag = value.ompTag;
      this._ospfTag = value.ospfTag;
      this._standardCommunityListCriteria = value.standardCommunityListCriteria;
      this._standardCommunityLists.internalValue = value.standardCommunityLists;
    }
  }

  // as_path_list_id - computed: false, optional: true, required: false
  private _asPathListId?: string; 
  public get asPathListId() {
    return this.getStringAttribute('as_path_list_id');
  }
  public set asPathListId(value: string) {
    this._asPathListId = value;
  }
  public resetAsPathListId() {
    this._asPathListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathListIdInput() {
    return this._asPathListId;
  }

  // bgp_local_preference - computed: false, optional: true, required: false
  private _bgpLocalPreference?: number; 
  public get bgpLocalPreference() {
    return this.getNumberAttribute('bgp_local_preference');
  }
  public set bgpLocalPreference(value: number) {
    this._bgpLocalPreference = value;
  }
  public resetBgpLocalPreference() {
    this._bgpLocalPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLocalPreferenceInput() {
    return this._bgpLocalPreference;
  }

  // expanded_community_list_id - computed: false, optional: true, required: false
  private _expandedCommunityListId?: string; 
  public get expandedCommunityListId() {
    return this.getStringAttribute('expanded_community_list_id');
  }
  public set expandedCommunityListId(value: string) {
    this._expandedCommunityListId = value;
  }
  public resetExpandedCommunityListId() {
    this._expandedCommunityListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedCommunityListIdInput() {
    return this._expandedCommunityListId;
  }

  // extended_community_list_id - computed: false, optional: true, required: false
  private _extendedCommunityListId?: string; 
  public get extendedCommunityListId() {
    return this.getStringAttribute('extended_community_list_id');
  }
  public set extendedCommunityListId(value: string) {
    this._extendedCommunityListId = value;
  }
  public resetExtendedCommunityListId() {
    this._extendedCommunityListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCommunityListIdInput() {
    return this._extendedCommunityListId;
  }

  // ipv4_address_prefix_list_id - computed: false, optional: true, required: false
  private _ipv4AddressPrefixListId?: string; 
  public get ipv4AddressPrefixListId() {
    return this.getStringAttribute('ipv4_address_prefix_list_id');
  }
  public set ipv4AddressPrefixListId(value: string) {
    this._ipv4AddressPrefixListId = value;
  }
  public resetIpv4AddressPrefixListId() {
    this._ipv4AddressPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressPrefixListIdInput() {
    return this._ipv4AddressPrefixListId;
  }

  // ipv4_next_hop_prefix_list_id - computed: false, optional: true, required: false
  private _ipv4NextHopPrefixListId?: string; 
  public get ipv4NextHopPrefixListId() {
    return this.getStringAttribute('ipv4_next_hop_prefix_list_id');
  }
  public set ipv4NextHopPrefixListId(value: string) {
    this._ipv4NextHopPrefixListId = value;
  }
  public resetIpv4NextHopPrefixListId() {
    this._ipv4NextHopPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NextHopPrefixListIdInput() {
    return this._ipv4NextHopPrefixListId;
  }

  // ipv6_address_prefix_list_id - computed: false, optional: true, required: false
  private _ipv6AddressPrefixListId?: string; 
  public get ipv6AddressPrefixListId() {
    return this.getStringAttribute('ipv6_address_prefix_list_id');
  }
  public set ipv6AddressPrefixListId(value: string) {
    this._ipv6AddressPrefixListId = value;
  }
  public resetIpv6AddressPrefixListId() {
    this._ipv6AddressPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressPrefixListIdInput() {
    return this._ipv6AddressPrefixListId;
  }

  // ipv6_next_hop_prefix_list_id - computed: false, optional: true, required: false
  private _ipv6NextHopPrefixListId?: string; 
  public get ipv6NextHopPrefixListId() {
    return this.getStringAttribute('ipv6_next_hop_prefix_list_id');
  }
  public set ipv6NextHopPrefixListId(value: string) {
    this._ipv6NextHopPrefixListId = value;
  }
  public resetIpv6NextHopPrefixListId() {
    this._ipv6NextHopPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NextHopPrefixListIdInput() {
    return this._ipv6NextHopPrefixListId;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // omp_tag - computed: false, optional: true, required: false
  private _ompTag?: number; 
  public get ompTag() {
    return this.getNumberAttribute('omp_tag');
  }
  public set ompTag(value: number) {
    this._ompTag = value;
  }
  public resetOmpTag() {
    this._ompTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompTagInput() {
    return this._ompTag;
  }

  // ospf_tag - computed: false, optional: true, required: false
  private _ospfTag?: number; 
  public get ospfTag() {
    return this.getNumberAttribute('ospf_tag');
  }
  public set ospfTag(value: number) {
    this._ospfTag = value;
  }
  public resetOspfTag() {
    this._ospfTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfTagInput() {
    return this._ospfTag;
  }

  // standard_community_list_criteria - computed: false, optional: true, required: false
  private _standardCommunityListCriteria?: string; 
  public get standardCommunityListCriteria() {
    return this.getStringAttribute('standard_community_list_criteria');
  }
  public set standardCommunityListCriteria(value: string) {
    this._standardCommunityListCriteria = value;
  }
  public resetStandardCommunityListCriteria() {
    this._standardCommunityListCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardCommunityListCriteriaInput() {
    return this._standardCommunityListCriteria;
  }

  // standard_community_lists - computed: false, optional: true, required: false
  private _standardCommunityLists = new ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityListsList(this, "standard_community_lists", false);
  public get standardCommunityLists() {
    return this._standardCommunityLists;
  }
  public putStandardCommunityLists(value: ServiceRoutePolicyFeatureSequencesMatchEntriesStandardCommunityLists[] | cdktf.IResolvable) {
    this._standardCommunityLists.internalValue = value;
  }
  public resetStandardCommunityLists() {
    this._standardCommunityLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardCommunityListsInput() {
    return this._standardCommunityLists.internalValue;
  }
}

export class ServiceRoutePolicyFeatureSequencesMatchEntriesList extends cdktf.ComplexList {
  public internalValue? : ServiceRoutePolicyFeatureSequencesMatchEntries[] | cdktf.IResolvable

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
  public get(index: number): ServiceRoutePolicyFeatureSequencesMatchEntriesOutputReference {
    return new ServiceRoutePolicyFeatureSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceRoutePolicyFeatureSequences {
  /**
  * Define list of actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#actions ServiceRoutePolicyFeature#actions}
  */
  readonly actions?: ServiceRoutePolicyFeatureSequencesActions[] | cdktf.IResolvable;
  /**
  * Base Action
  *   - Choices: `reject`, `accept`
  *   - Default value: `reject`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#base_action ServiceRoutePolicyFeature#base_action}
  */
  readonly baseAction?: string;
  /**
  * Sequence Id
  *   - Range: `1`-`65536`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#id ServiceRoutePolicyFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Define match conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#match_entries ServiceRoutePolicyFeature#match_entries}
  */
  readonly matchEntries?: ServiceRoutePolicyFeatureSequencesMatchEntries[] | cdktf.IResolvable;
  /**
  * Sequence Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#name ServiceRoutePolicyFeature#name}
  */
  readonly name?: string;
  /**
  * protocol such as IPV4, IPV6, or BOTH
  *   - Choices: `IPV4`, `IPV6`, `BOTH`
  *   - Default value: `IPV4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#protocol ServiceRoutePolicyFeature#protocol}
  */
  readonly protocol?: string;
}

export function serviceRoutePolicyFeatureSequencesToTerraform(struct?: ServiceRoutePolicyFeatureSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(serviceRoutePolicyFeatureSequencesActionsToTerraform, false)(struct!.actions),
    base_action: cdktf.stringToTerraform(struct!.baseAction),
    id: cdktf.numberToTerraform(struct!.id),
    match_entries: cdktf.listMapper(serviceRoutePolicyFeatureSequencesMatchEntriesToTerraform, false)(struct!.matchEntries),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function serviceRoutePolicyFeatureSequencesToHclTerraform(struct?: ServiceRoutePolicyFeatureSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(serviceRoutePolicyFeatureSequencesActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceRoutePolicyFeatureSequencesActionsList",
    },
    base_action: {
      value: cdktf.stringToHclTerraform(struct!.baseAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_entries: {
      value: cdktf.listMapperHcl(serviceRoutePolicyFeatureSequencesMatchEntriesToHclTerraform, false)(struct!.matchEntries),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceRoutePolicyFeatureSequencesMatchEntriesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceRoutePolicyFeatureSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceRoutePolicyFeatureSequences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._baseAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseAction = this._baseAction;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._matchEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntries = this._matchEntries?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceRoutePolicyFeatureSequences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._baseAction = undefined;
      this._id = undefined;
      this._matchEntries.internalValue = undefined;
      this._name = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._baseAction = value.baseAction;
      this._id = value.id;
      this._matchEntries.internalValue = value.matchEntries;
      this._name = value.name;
      this._protocol = value.protocol;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new ServiceRoutePolicyFeatureSequencesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: ServiceRoutePolicyFeatureSequencesActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // base_action - computed: false, optional: true, required: false
  private _baseAction?: string; 
  public get baseAction() {
    return this.getStringAttribute('base_action');
  }
  public set baseAction(value: string) {
    this._baseAction = value;
  }
  public resetBaseAction() {
    this._baseAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseActionInput() {
    return this._baseAction;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // match_entries - computed: false, optional: true, required: false
  private _matchEntries = new ServiceRoutePolicyFeatureSequencesMatchEntriesList(this, "match_entries", false);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: ServiceRoutePolicyFeatureSequencesMatchEntries[] | cdktf.IResolvable) {
    this._matchEntries.internalValue = value;
  }
  public resetMatchEntries() {
    this._matchEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntriesInput() {
    return this._matchEntries.internalValue;
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
}

export class ServiceRoutePolicyFeatureSequencesList extends cdktf.ComplexList {
  public internalValue? : ServiceRoutePolicyFeatureSequences[] | cdktf.IResolvable

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
  public get(index: number): ServiceRoutePolicyFeatureSequencesOutputReference {
    return new ServiceRoutePolicyFeatureSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature sdwan_service_route_policy_feature}
*/
export class ServiceRoutePolicyFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_route_policy_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceRoutePolicyFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceRoutePolicyFeature to import
  * @param importFromId The id of the existing ServiceRoutePolicyFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceRoutePolicyFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_route_policy_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_route_policy_feature sdwan_service_route_policy_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceRoutePolicyFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceRoutePolicyFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_route_policy_feature',
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
    this._defaultAction = config.defaultAction;
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
    this._sequences.internalValue = config.sequences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
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

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
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

  // sequences - computed: false, optional: true, required: false
  private _sequences = new ServiceRoutePolicyFeatureSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }
  public putSequences(value: ServiceRoutePolicyFeatureSequences[] | cdktf.IResolvable) {
    this._sequences.internalValue = value;
  }
  public resetSequences() {
    this._sequences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencesInput() {
    return this._sequences.internalValue;
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
      default_action: cdktf.stringToTerraform(this._defaultAction),
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
      sequences: cdktf.listMapper(serviceRoutePolicyFeatureSequencesToTerraform, false)(this._sequences.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
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
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
      sequences: {
        value: cdktf.listMapperHcl(serviceRoutePolicyFeatureSequencesToHclTerraform, false)(this._sequences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceRoutePolicyFeatureSequencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
