// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutePolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default action, either `accept` or `reject`
  *   - Choices: `accept`, `reject`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#default_action RoutePolicyDefinition#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#description RoutePolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#name RoutePolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of ACL sequences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#sequences RoutePolicyDefinition#sequences}
  */
  readonly sequences?: RoutePolicyDefinitionSequences[] | cdktf.IResolvable;
}
export interface RoutePolicyDefinitionSequencesActionEntries {
  /**
  * Aggregator, Attribute conditional on `type` being equal to `aggregator`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#aggregator RoutePolicyDefinition#aggregator}
  */
  readonly aggregator?: number;
  /**
  * IP address, Attribute conditional on `type` being equal to `aggregator`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#aggregator_ip_address RoutePolicyDefinition#aggregator_ip_address}
  */
  readonly aggregatorIpAddress?: string;
  /**
  * Space separated list of ASN to exclude, Attribute conditional on `type` being equal to `asPath`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#as_path_exclude RoutePolicyDefinition#as_path_exclude}
  */
  readonly asPathExclude?: string;
  /**
  * Space separated list of ASN to prepend, Attribute conditional on `type` being equal to `asPath`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#as_path_prepend RoutePolicyDefinition#as_path_prepend}
  */
  readonly asPathPrepend?: string;
  /**
  * Atomic aggregate, Attribute conditional on `type` being equal to `atomicAggregate`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#atomic_aggregate RoutePolicyDefinition#atomic_aggregate}
  */
  readonly atomicAggregate?: boolean | cdktf.IResolvable;
  /**
  * Community value, e.g. `1000:10000` or `internet` or `local-AS`, Attribute conditional on `type` being equal to `community`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#community RoutePolicyDefinition#community}
  */
  readonly community?: string;
  /**
  * Community additive, Attribute conditional on `type` being equal to `communityAdditive`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#community_additive RoutePolicyDefinition#community_additive}
  */
  readonly communityAdditive?: boolean | cdktf.IResolvable;
  /**
  * Community variable, Attribute conditional on `type` being equal to `community`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#community_variable RoutePolicyDefinition#community_variable}
  */
  readonly communityVariable?: string;
  /**
  * Local preference, Attribute conditional on `type` being equal to `localPreference`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#local_preference RoutePolicyDefinition#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Metric, Attribute conditional on `type` being equal to `metric`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#metric RoutePolicyDefinition#metric}
  */
  readonly metric?: number;
  /**
  * Metric type, Attribute conditional on `type` being equal to `metricType`
  *   - Choices: `type1`, `type2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#metric_type RoutePolicyDefinition#metric_type}
  */
  readonly metricType?: string;
  /**
  * Next hop IP, Attribute conditional on `type` being equal to `nextHop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#next_hop RoutePolicyDefinition#next_hop}
  */
  readonly nextHop?: string;
  /**
  * OMP tag, Attribute conditional on `type` being equal to `ompTag`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#omp_tag RoutePolicyDefinition#omp_tag}
  */
  readonly ompTag?: number;
  /**
  * Origin, Attribute conditional on `type` being equal to `origin`
  *   - Choices: `igp`, `egp`, `incomplete`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#origin RoutePolicyDefinition#origin}
  */
  readonly origin?: string;
  /**
  * Originator IP, Attribute conditional on `type` being equal to `originator`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#originator RoutePolicyDefinition#originator}
  */
  readonly originator?: string;
  /**
  * OSPF tag, Attribute conditional on `type` being equal to `ospfTag`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#ospf_tag RoutePolicyDefinition#ospf_tag}
  */
  readonly ospfTag?: number;
  /**
  * Type of action entry
  *   - Choices: `aggregator`, `asPath`, `atomicAggregate`, `community`, `communityAdditive`, `localPreference`, `metric`, `weight`, `metricType`, `nextHop`, `ompTag`, `ospfTag`, `origin`, `originator`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#type RoutePolicyDefinition#type}
  */
  readonly type: string;
  /**
  * Weight, Attribute conditional on `type` being equal to `weight`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#weight RoutePolicyDefinition#weight}
  */
  readonly weight?: number;
}

export function routePolicyDefinitionSequencesActionEntriesToTerraform(struct?: RoutePolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktf.numberToTerraform(struct!.aggregator),
    aggregator_ip_address: cdktf.stringToTerraform(struct!.aggregatorIpAddress),
    as_path_exclude: cdktf.stringToTerraform(struct!.asPathExclude),
    as_path_prepend: cdktf.stringToTerraform(struct!.asPathPrepend),
    atomic_aggregate: cdktf.booleanToTerraform(struct!.atomicAggregate),
    community: cdktf.stringToTerraform(struct!.community),
    community_additive: cdktf.booleanToTerraform(struct!.communityAdditive),
    community_variable: cdktf.stringToTerraform(struct!.communityVariable),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    omp_tag: cdktf.numberToTerraform(struct!.ompTag),
    origin: cdktf.stringToTerraform(struct!.origin),
    originator: cdktf.stringToTerraform(struct!.originator),
    ospf_tag: cdktf.numberToTerraform(struct!.ospfTag),
    type: cdktf.stringToTerraform(struct!.type),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function routePolicyDefinitionSequencesActionEntriesToHclTerraform(struct?: RoutePolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregator: {
      value: cdktf.numberToHclTerraform(struct!.aggregator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aggregator_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.aggregatorIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_path_exclude: {
      value: cdktf.stringToHclTerraform(struct!.asPathExclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_path_prepend: {
      value: cdktf.stringToHclTerraform(struct!.asPathPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    atomic_aggregate: {
      value: cdktf.booleanToHclTerraform(struct!.atomicAggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
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
    originator: {
      value: cdktf.stringToHclTerraform(struct!.originator),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class RoutePolicyDefinitionSequencesActionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutePolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
    }
    if (this._aggregatorIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatorIpAddress = this._aggregatorIpAddress;
    }
    if (this._asPathExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathExclude = this._asPathExclude;
    }
    if (this._asPathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathPrepend = this._asPathPrepend;
    }
    if (this._atomicAggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.atomicAggregate = this._atomicAggregate;
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
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._ompTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ompTag = this._ompTag;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._originator !== undefined) {
      hasAnyValues = true;
      internalValueResult.originator = this._originator;
    }
    if (this._ospfTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfTag = this._ospfTag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutePolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregator = undefined;
      this._aggregatorIpAddress = undefined;
      this._asPathExclude = undefined;
      this._asPathPrepend = undefined;
      this._atomicAggregate = undefined;
      this._community = undefined;
      this._communityAdditive = undefined;
      this._communityVariable = undefined;
      this._localPreference = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._nextHop = undefined;
      this._ompTag = undefined;
      this._origin = undefined;
      this._originator = undefined;
      this._ospfTag = undefined;
      this._type = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregator = value.aggregator;
      this._aggregatorIpAddress = value.aggregatorIpAddress;
      this._asPathExclude = value.asPathExclude;
      this._asPathPrepend = value.asPathPrepend;
      this._atomicAggregate = value.atomicAggregate;
      this._community = value.community;
      this._communityAdditive = value.communityAdditive;
      this._communityVariable = value.communityVariable;
      this._localPreference = value.localPreference;
      this._metric = value.metric;
      this._metricType = value.metricType;
      this._nextHop = value.nextHop;
      this._ompTag = value.ompTag;
      this._origin = value.origin;
      this._originator = value.originator;
      this._ospfTag = value.ospfTag;
      this._type = value.type;
      this._weight = value.weight;
    }
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator?: number; 
  public get aggregator() {
    return this.getNumberAttribute('aggregator');
  }
  public set aggregator(value: number) {
    this._aggregator = value;
  }
  public resetAggregator() {
    this._aggregator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator;
  }

  // aggregator_ip_address - computed: false, optional: true, required: false
  private _aggregatorIpAddress?: string; 
  public get aggregatorIpAddress() {
    return this.getStringAttribute('aggregator_ip_address');
  }
  public set aggregatorIpAddress(value: string) {
    this._aggregatorIpAddress = value;
  }
  public resetAggregatorIpAddress() {
    this._aggregatorIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorIpAddressInput() {
    return this._aggregatorIpAddress;
  }

  // as_path_exclude - computed: false, optional: true, required: false
  private _asPathExclude?: string; 
  public get asPathExclude() {
    return this.getStringAttribute('as_path_exclude');
  }
  public set asPathExclude(value: string) {
    this._asPathExclude = value;
  }
  public resetAsPathExclude() {
    this._asPathExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathExcludeInput() {
    return this._asPathExclude;
  }

  // as_path_prepend - computed: false, optional: true, required: false
  private _asPathPrepend?: string; 
  public get asPathPrepend() {
    return this.getStringAttribute('as_path_prepend');
  }
  public set asPathPrepend(value: string) {
    this._asPathPrepend = value;
  }
  public resetAsPathPrepend() {
    this._asPathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathPrependInput() {
    return this._asPathPrepend;
  }

  // atomic_aggregate - computed: false, optional: true, required: false
  private _atomicAggregate?: boolean | cdktf.IResolvable; 
  public get atomicAggregate() {
    return this.getBooleanAttribute('atomic_aggregate');
  }
  public set atomicAggregate(value: boolean | cdktf.IResolvable) {
    this._atomicAggregate = value;
  }
  public resetAtomicAggregate() {
    this._atomicAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atomicAggregateInput() {
    return this._atomicAggregate;
  }

  // community - computed: false, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
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

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
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

  // originator - computed: false, optional: true, required: false
  private _originator?: string; 
  public get originator() {
    return this.getStringAttribute('originator');
  }
  public set originator(value: string) {
    this._originator = value;
  }
  public resetOriginator() {
    this._originator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatorInput() {
    return this._originator;
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

export class RoutePolicyDefinitionSequencesActionEntriesList extends cdktf.ComplexList {
  public internalValue? : RoutePolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable

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
  public get(index: number): RoutePolicyDefinitionSequencesActionEntriesOutputReference {
    return new RoutePolicyDefinitionSequencesActionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutePolicyDefinitionSequencesMatchEntries {
  /**
  * AS path list ID, Attribute conditional on `type` being equal to `asPath`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#as_path_list_id RoutePolicyDefinition#as_path_list_id}
  */
  readonly asPathListId?: string;
  /**
  * AS path list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#as_path_list_version RoutePolicyDefinition#as_path_list_version}
  */
  readonly asPathListVersion?: number;
  /**
  * Community list ID, Attribute conditional on `type` being equal to `community`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#community_list_id RoutePolicyDefinition#community_list_id}
  */
  readonly communityListId?: string;
  /**
  * Community list IDs, Attribute conditional on `type` being equal to `advancedCommunity`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#community_list_ids RoutePolicyDefinition#community_list_ids}
  */
  readonly communityListIds?: string[];
  /**
  * Community list match flag
  *   - Choices: `and`, `or`, `exact`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#community_list_match_flag RoutePolicyDefinition#community_list_match_flag}
  */
  readonly communityListMatchFlag?: string;
  /**
  * Community list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#community_list_version RoutePolicyDefinition#community_list_version}
  */
  readonly communityListVersion?: number;
  /**
  * Community list versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#community_list_versions RoutePolicyDefinition#community_list_versions}
  */
  readonly communityListVersions?: string[];
  /**
  * Expanded community list ID, Attribute conditional on `type` being equal to `expandedCommunity`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#expanded_community_list_id RoutePolicyDefinition#expanded_community_list_id}
  */
  readonly expandedCommunityListId?: string;
  /**
  * Expanded community list variable, Attribute conditional on `type` being equal to `expandedCommunityInline`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#expanded_community_list_variable RoutePolicyDefinition#expanded_community_list_variable}
  */
  readonly expandedCommunityListVariable?: string;
  /**
  * Expanded community list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#expanded_community_list_version RoutePolicyDefinition#expanded_community_list_version}
  */
  readonly expandedCommunityListVersion?: number;
  /**
  * Extended community list ID, Attribute conditional on `type` being equal to `extCommunity`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#extended_community_list_id RoutePolicyDefinition#extended_community_list_id}
  */
  readonly extendedCommunityListId?: string;
  /**
  * Extended community list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#extended_community_list_version RoutePolicyDefinition#extended_community_list_version}
  */
  readonly extendedCommunityListVersion?: number;
  /**
  * Local preference, Attribute conditional on `type` being equal to `localPreference`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#local_preference RoutePolicyDefinition#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Metric, Attribute conditional on `type` being equal to `metric`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#metric RoutePolicyDefinition#metric}
  */
  readonly metric?: number;
  /**
  * Next hop prefix list ID, Attribute conditional on `type` being equal to `nextHop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#next_hop_prefix_list_id RoutePolicyDefinition#next_hop_prefix_list_id}
  */
  readonly nextHopPrefixListId?: string;
  /**
  * Next hop prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#next_hop_prefix_list_version RoutePolicyDefinition#next_hop_prefix_list_version}
  */
  readonly nextHopPrefixListVersion?: number;
  /**
  * OMP tag, Attribute conditional on `type` being equal to `ompTag`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#omp_tag RoutePolicyDefinition#omp_tag}
  */
  readonly ompTag?: number;
  /**
  * Origin, Attribute conditional on `type` being equal to `origin`
  *   - Choices: `igp`, `egp`, `incomplete`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#origin RoutePolicyDefinition#origin}
  */
  readonly origin?: string;
  /**
  * OSPF tag, Attribute conditional on `type` being equal to `ospfTag`
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#ospf_tag RoutePolicyDefinition#ospf_tag}
  */
  readonly ospfTag?: number;
  /**
  * Peer IP, Attribute conditional on `type` being equal to `peer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#peer RoutePolicyDefinition#peer}
  */
  readonly peer?: string;
  /**
  * Prefix list ID, Attribute conditional on `type` being equal to `address`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#prefix_list_id RoutePolicyDefinition#prefix_list_id}
  */
  readonly prefixListId?: string;
  /**
  * Prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#prefix_list_version RoutePolicyDefinition#prefix_list_version}
  */
  readonly prefixListVersion?: number;
  /**
  * Type of match entry
  *   - Choices: `address`, `asPath`, `community`, `advancedCommunity`, `expandedCommunity`, `expandedCommunityInline`, `extCommunity`, `localPreference`, `metric`, `nextHop`, `origin`, `peer`, `ompTag`, `ospfTag`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#type RoutePolicyDefinition#type}
  */
  readonly type: string;
}

export function routePolicyDefinitionSequencesMatchEntriesToTerraform(struct?: RoutePolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path_list_id: cdktf.stringToTerraform(struct!.asPathListId),
    as_path_list_version: cdktf.numberToTerraform(struct!.asPathListVersion),
    community_list_id: cdktf.stringToTerraform(struct!.communityListId),
    community_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.communityListIds),
    community_list_match_flag: cdktf.stringToTerraform(struct!.communityListMatchFlag),
    community_list_version: cdktf.numberToTerraform(struct!.communityListVersion),
    community_list_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.communityListVersions),
    expanded_community_list_id: cdktf.stringToTerraform(struct!.expandedCommunityListId),
    expanded_community_list_variable: cdktf.stringToTerraform(struct!.expandedCommunityListVariable),
    expanded_community_list_version: cdktf.numberToTerraform(struct!.expandedCommunityListVersion),
    extended_community_list_id: cdktf.stringToTerraform(struct!.extendedCommunityListId),
    extended_community_list_version: cdktf.numberToTerraform(struct!.extendedCommunityListVersion),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: cdktf.numberToTerraform(struct!.metric),
    next_hop_prefix_list_id: cdktf.stringToTerraform(struct!.nextHopPrefixListId),
    next_hop_prefix_list_version: cdktf.numberToTerraform(struct!.nextHopPrefixListVersion),
    omp_tag: cdktf.numberToTerraform(struct!.ompTag),
    origin: cdktf.stringToTerraform(struct!.origin),
    ospf_tag: cdktf.numberToTerraform(struct!.ospfTag),
    peer: cdktf.stringToTerraform(struct!.peer),
    prefix_list_id: cdktf.stringToTerraform(struct!.prefixListId),
    prefix_list_version: cdktf.numberToTerraform(struct!.prefixListVersion),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function routePolicyDefinitionSequencesMatchEntriesToHclTerraform(struct?: RoutePolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
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
    as_path_list_version: {
      value: cdktf.numberToHclTerraform(struct!.asPathListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    community_list_id: {
      value: cdktf.stringToHclTerraform(struct!.communityListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community_list_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.communityListIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    community_list_match_flag: {
      value: cdktf.stringToHclTerraform(struct!.communityListMatchFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community_list_version: {
      value: cdktf.numberToHclTerraform(struct!.communityListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    community_list_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.communityListVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expanded_community_list_id: {
      value: cdktf.stringToHclTerraform(struct!.expandedCommunityListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expanded_community_list_variable: {
      value: cdktf.stringToHclTerraform(struct!.expandedCommunityListVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expanded_community_list_version: {
      value: cdktf.numberToHclTerraform(struct!.expandedCommunityListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extended_community_list_id: {
      value: cdktf.stringToHclTerraform(struct!.extendedCommunityListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extended_community_list_version: {
      value: cdktf.numberToHclTerraform(struct!.extendedCommunityListVersion),
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
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_hop_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.nextHopPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.nextHopPrefixListVersion),
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
    peer: {
      value: cdktf.stringToHclTerraform(struct!.peer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.prefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.prefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class RoutePolicyDefinitionSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutePolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPathListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathListId = this._asPathListId;
    }
    if (this._asPathListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathListVersion = this._asPathListVersion;
    }
    if (this._communityListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityListId = this._communityListId;
    }
    if (this._communityListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityListIds = this._communityListIds;
    }
    if (this._communityListMatchFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityListMatchFlag = this._communityListMatchFlag;
    }
    if (this._communityListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityListVersion = this._communityListVersion;
    }
    if (this._communityListVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityListVersions = this._communityListVersions;
    }
    if (this._expandedCommunityListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandedCommunityListId = this._expandedCommunityListId;
    }
    if (this._expandedCommunityListVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandedCommunityListVariable = this._expandedCommunityListVariable;
    }
    if (this._expandedCommunityListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandedCommunityListVersion = this._expandedCommunityListVersion;
    }
    if (this._extendedCommunityListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedCommunityListId = this._extendedCommunityListId;
    }
    if (this._extendedCommunityListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedCommunityListVersion = this._extendedCommunityListVersion;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._nextHopPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopPrefixListId = this._nextHopPrefixListId;
    }
    if (this._nextHopPrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopPrefixListVersion = this._nextHopPrefixListVersion;
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
    if (this._peer !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer;
    }
    if (this._prefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListId = this._prefixListId;
    }
    if (this._prefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListVersion = this._prefixListVersion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutePolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPathListId = undefined;
      this._asPathListVersion = undefined;
      this._communityListId = undefined;
      this._communityListIds = undefined;
      this._communityListMatchFlag = undefined;
      this._communityListVersion = undefined;
      this._communityListVersions = undefined;
      this._expandedCommunityListId = undefined;
      this._expandedCommunityListVariable = undefined;
      this._expandedCommunityListVersion = undefined;
      this._extendedCommunityListId = undefined;
      this._extendedCommunityListVersion = undefined;
      this._localPreference = undefined;
      this._metric = undefined;
      this._nextHopPrefixListId = undefined;
      this._nextHopPrefixListVersion = undefined;
      this._ompTag = undefined;
      this._origin = undefined;
      this._ospfTag = undefined;
      this._peer = undefined;
      this._prefixListId = undefined;
      this._prefixListVersion = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPathListId = value.asPathListId;
      this._asPathListVersion = value.asPathListVersion;
      this._communityListId = value.communityListId;
      this._communityListIds = value.communityListIds;
      this._communityListMatchFlag = value.communityListMatchFlag;
      this._communityListVersion = value.communityListVersion;
      this._communityListVersions = value.communityListVersions;
      this._expandedCommunityListId = value.expandedCommunityListId;
      this._expandedCommunityListVariable = value.expandedCommunityListVariable;
      this._expandedCommunityListVersion = value.expandedCommunityListVersion;
      this._extendedCommunityListId = value.extendedCommunityListId;
      this._extendedCommunityListVersion = value.extendedCommunityListVersion;
      this._localPreference = value.localPreference;
      this._metric = value.metric;
      this._nextHopPrefixListId = value.nextHopPrefixListId;
      this._nextHopPrefixListVersion = value.nextHopPrefixListVersion;
      this._ompTag = value.ompTag;
      this._origin = value.origin;
      this._ospfTag = value.ospfTag;
      this._peer = value.peer;
      this._prefixListId = value.prefixListId;
      this._prefixListVersion = value.prefixListVersion;
      this._type = value.type;
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

  // as_path_list_version - computed: false, optional: true, required: false
  private _asPathListVersion?: number; 
  public get asPathListVersion() {
    return this.getNumberAttribute('as_path_list_version');
  }
  public set asPathListVersion(value: number) {
    this._asPathListVersion = value;
  }
  public resetAsPathListVersion() {
    this._asPathListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathListVersionInput() {
    return this._asPathListVersion;
  }

  // community_list_id - computed: false, optional: true, required: false
  private _communityListId?: string; 
  public get communityListId() {
    return this.getStringAttribute('community_list_id');
  }
  public set communityListId(value: string) {
    this._communityListId = value;
  }
  public resetCommunityListId() {
    this._communityListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityListIdInput() {
    return this._communityListId;
  }

  // community_list_ids - computed: false, optional: true, required: false
  private _communityListIds?: string[]; 
  public get communityListIds() {
    return cdktf.Fn.tolist(this.getListAttribute('community_list_ids'));
  }
  public set communityListIds(value: string[]) {
    this._communityListIds = value;
  }
  public resetCommunityListIds() {
    this._communityListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityListIdsInput() {
    return this._communityListIds;
  }

  // community_list_match_flag - computed: false, optional: true, required: false
  private _communityListMatchFlag?: string; 
  public get communityListMatchFlag() {
    return this.getStringAttribute('community_list_match_flag');
  }
  public set communityListMatchFlag(value: string) {
    this._communityListMatchFlag = value;
  }
  public resetCommunityListMatchFlag() {
    this._communityListMatchFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityListMatchFlagInput() {
    return this._communityListMatchFlag;
  }

  // community_list_version - computed: false, optional: true, required: false
  private _communityListVersion?: number; 
  public get communityListVersion() {
    return this.getNumberAttribute('community_list_version');
  }
  public set communityListVersion(value: number) {
    this._communityListVersion = value;
  }
  public resetCommunityListVersion() {
    this._communityListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityListVersionInput() {
    return this._communityListVersion;
  }

  // community_list_versions - computed: false, optional: true, required: false
  private _communityListVersions?: string[]; 
  public get communityListVersions() {
    return this.getListAttribute('community_list_versions');
  }
  public set communityListVersions(value: string[]) {
    this._communityListVersions = value;
  }
  public resetCommunityListVersions() {
    this._communityListVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityListVersionsInput() {
    return this._communityListVersions;
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

  // expanded_community_list_variable - computed: false, optional: true, required: false
  private _expandedCommunityListVariable?: string; 
  public get expandedCommunityListVariable() {
    return this.getStringAttribute('expanded_community_list_variable');
  }
  public set expandedCommunityListVariable(value: string) {
    this._expandedCommunityListVariable = value;
  }
  public resetExpandedCommunityListVariable() {
    this._expandedCommunityListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedCommunityListVariableInput() {
    return this._expandedCommunityListVariable;
  }

  // expanded_community_list_version - computed: false, optional: true, required: false
  private _expandedCommunityListVersion?: number; 
  public get expandedCommunityListVersion() {
    return this.getNumberAttribute('expanded_community_list_version');
  }
  public set expandedCommunityListVersion(value: number) {
    this._expandedCommunityListVersion = value;
  }
  public resetExpandedCommunityListVersion() {
    this._expandedCommunityListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedCommunityListVersionInput() {
    return this._expandedCommunityListVersion;
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

  // extended_community_list_version - computed: false, optional: true, required: false
  private _extendedCommunityListVersion?: number; 
  public get extendedCommunityListVersion() {
    return this.getNumberAttribute('extended_community_list_version');
  }
  public set extendedCommunityListVersion(value: number) {
    this._extendedCommunityListVersion = value;
  }
  public resetExtendedCommunityListVersion() {
    this._extendedCommunityListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCommunityListVersionInput() {
    return this._extendedCommunityListVersion;
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

  // next_hop_prefix_list_id - computed: false, optional: true, required: false
  private _nextHopPrefixListId?: string; 
  public get nextHopPrefixListId() {
    return this.getStringAttribute('next_hop_prefix_list_id');
  }
  public set nextHopPrefixListId(value: string) {
    this._nextHopPrefixListId = value;
  }
  public resetNextHopPrefixListId() {
    this._nextHopPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopPrefixListIdInput() {
    return this._nextHopPrefixListId;
  }

  // next_hop_prefix_list_version - computed: false, optional: true, required: false
  private _nextHopPrefixListVersion?: number; 
  public get nextHopPrefixListVersion() {
    return this.getNumberAttribute('next_hop_prefix_list_version');
  }
  public set nextHopPrefixListVersion(value: number) {
    this._nextHopPrefixListVersion = value;
  }
  public resetNextHopPrefixListVersion() {
    this._nextHopPrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopPrefixListVersionInput() {
    return this._nextHopPrefixListVersion;
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

  // peer - computed: false, optional: true, required: false
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // prefix_list_id - computed: false, optional: true, required: false
  private _prefixListId?: string; 
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }
  public set prefixListId(value: string) {
    this._prefixListId = value;
  }
  public resetPrefixListId() {
    this._prefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
  }

  // prefix_list_version - computed: false, optional: true, required: false
  private _prefixListVersion?: number; 
  public get prefixListVersion() {
    return this.getNumberAttribute('prefix_list_version');
  }
  public set prefixListVersion(value: number) {
    this._prefixListVersion = value;
  }
  public resetPrefixListVersion() {
    this._prefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListVersionInput() {
    return this._prefixListVersion;
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

export class RoutePolicyDefinitionSequencesMatchEntriesList extends cdktf.ComplexList {
  public internalValue? : RoutePolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable

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
  public get(index: number): RoutePolicyDefinitionSequencesMatchEntriesOutputReference {
    return new RoutePolicyDefinitionSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutePolicyDefinitionSequences {
  /**
  * List of action entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#action_entries RoutePolicyDefinition#action_entries}
  */
  readonly actionEntries?: RoutePolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable;
  /**
  * Base action, either `accept` or `reject`
  *   - Choices: `accept`, `reject`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#base_action RoutePolicyDefinition#base_action}
  */
  readonly baseAction?: string;
  /**
  * Sequence ID
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#id RoutePolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * IP version, either `ipv4` or `ipv6`
  *   - Choices: `ipv4`, `ipv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#ip_type RoutePolicyDefinition#ip_type}
  */
  readonly ipType?: string;
  /**
  * List of match entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#match_entries RoutePolicyDefinition#match_entries}
  */
  readonly matchEntries?: RoutePolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable;
  /**
  * Sequence name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#name RoutePolicyDefinition#name}
  */
  readonly name: string;
}

export function routePolicyDefinitionSequencesToTerraform(struct?: RoutePolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_entries: cdktf.listMapper(routePolicyDefinitionSequencesActionEntriesToTerraform, false)(struct!.actionEntries),
    base_action: cdktf.stringToTerraform(struct!.baseAction),
    id: cdktf.numberToTerraform(struct!.id),
    ip_type: cdktf.stringToTerraform(struct!.ipType),
    match_entries: cdktf.listMapper(routePolicyDefinitionSequencesMatchEntriesToTerraform, false)(struct!.matchEntries),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routePolicyDefinitionSequencesToHclTerraform(struct?: RoutePolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_entries: {
      value: cdktf.listMapperHcl(routePolicyDefinitionSequencesActionEntriesToHclTerraform, false)(struct!.actionEntries),
      isBlock: true,
      type: "set",
      storageClassType: "RoutePolicyDefinitionSequencesActionEntriesList",
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
    ip_type: {
      value: cdktf.stringToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_entries: {
      value: cdktf.listMapperHcl(routePolicyDefinitionSequencesMatchEntriesToHclTerraform, false)(struct!.matchEntries),
      isBlock: true,
      type: "set",
      storageClassType: "RoutePolicyDefinitionSequencesMatchEntriesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutePolicyDefinitionSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutePolicyDefinitionSequences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionEntries = this._actionEntries?.internalValue;
    }
    if (this._baseAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseAction = this._baseAction;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    if (this._matchEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntries = this._matchEntries?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutePolicyDefinitionSequences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = undefined;
      this._baseAction = undefined;
      this._id = undefined;
      this._ipType = undefined;
      this._matchEntries.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = value.actionEntries;
      this._baseAction = value.baseAction;
      this._id = value.id;
      this._ipType = value.ipType;
      this._matchEntries.internalValue = value.matchEntries;
      this._name = value.name;
    }
  }

  // action_entries - computed: false, optional: true, required: false
  private _actionEntries = new RoutePolicyDefinitionSequencesActionEntriesList(this, "action_entries", true);
  public get actionEntries() {
    return this._actionEntries;
  }
  public putActionEntries(value: RoutePolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable) {
    this._actionEntries.internalValue = value;
  }
  public resetActionEntries() {
    this._actionEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEntriesInput() {
    return this._actionEntries.internalValue;
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

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_type - computed: false, optional: true, required: false
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }

  // match_entries - computed: false, optional: true, required: false
  private _matchEntries = new RoutePolicyDefinitionSequencesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: RoutePolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable) {
    this._matchEntries.internalValue = value;
  }
  public resetMatchEntries() {
    this._matchEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntriesInput() {
    return this._matchEntries.internalValue;
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
}

export class RoutePolicyDefinitionSequencesList extends cdktf.ComplexList {
  public internalValue? : RoutePolicyDefinitionSequences[] | cdktf.IResolvable

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
  public get(index: number): RoutePolicyDefinitionSequencesOutputReference {
    return new RoutePolicyDefinitionSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition sdwan_route_policy_definition}
*/
export class RoutePolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_route_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutePolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutePolicyDefinition to import
  * @param importFromId The id of the existing RoutePolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutePolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_route_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/route_policy_definition sdwan_route_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutePolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: RoutePolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_route_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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
  private _sequences = new RoutePolicyDefinitionSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }
  public putSequences(value: RoutePolicyDefinitionSequences[] | cdktf.IResolvable) {
    this._sequences.internalValue = value;
  }
  public resetSequences() {
    this._sequences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencesInput() {
    return this._sequences.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
      name: cdktf.stringToTerraform(this._name),
      sequences: cdktf.listMapper(routePolicyDefinitionSequencesToTerraform, false)(this._sequences.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequences: {
        value: cdktf.listMapperHcl(routePolicyDefinitionSequencesToHclTerraform, false)(this._sequences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutePolicyDefinitionSequencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
