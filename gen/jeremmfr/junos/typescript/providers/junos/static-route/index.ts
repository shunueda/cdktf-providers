// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StaticRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Remove inactive route from forwarding table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#active StaticRoute#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Address of BGP system to add AGGREGATOR path attribute to route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#as_path_aggregator_address StaticRoute#as_path_aggregator_address}
  */
  readonly asPathAggregatorAddress?: string;
  /**
  * AS number to add AGGREGATOR path attribute to route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#as_path_aggregator_as_number StaticRoute#as_path_aggregator_as_number}
  */
  readonly asPathAggregatorAsNumber?: string;
  /**
  * Add ATOMIC_AGGREGATE path attribute to route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#as_path_atomic_aggregate StaticRoute#as_path_atomic_aggregate}
  */
  readonly asPathAtomicAggregate?: boolean | cdktf.IResolvable;
  /**
  * Define origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#as_path_origin StaticRoute#as_path_origin}
  */
  readonly asPathOrigin?: string;
  /**
  * Path to as-path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#as_path_path StaticRoute#as_path_path}
  */
  readonly asPathPath?: string;
  /**
  * BGP community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#community StaticRoute#community}
  */
  readonly community?: string[];
  /**
  * Destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#destination StaticRoute#destination}
  */
  readonly destination: string;
  /**
  * Drop packets to destination; send no ICMP unreachables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#discard StaticRoute#discard}
  */
  readonly discard?: boolean | cdktf.IResolvable;
  /**
  * Install route into forwarding table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#install StaticRoute#install}
  */
  readonly install?: boolean | cdktf.IResolvable;
  /**
  * Metric for static route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#metric StaticRoute#metric}
  */
  readonly metric?: number;
  /**
  * Next-hop to destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#next_hop StaticRoute#next_hop}
  */
  readonly nextHop?: string[];
  /**
  * Next hop to another table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#next_table StaticRoute#next_table}
  */
  readonly nextTable?: string;
  /**
  * Don't install route into forwarding table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#no_install StaticRoute#no_install}
  */
  readonly noInstall?: boolean | cdktf.IResolvable;
  /**
  * Don't mark route as eligible to be readvertised.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#no_readvertise StaticRoute#no_readvertise}
  */
  readonly noReadvertise?: boolean | cdktf.IResolvable;
  /**
  * Don't allow resolution of indirectly connected next hops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#no_resolve StaticRoute#no_resolve}
  */
  readonly noResolve?: boolean | cdktf.IResolvable;
  /**
  * Don't always keep route in forwarding table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#no_retain StaticRoute#no_retain}
  */
  readonly noRetain?: boolean | cdktf.IResolvable;
  /**
  * Retain inactive route in forwarding table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#passive StaticRoute#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Preference for aggregate route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#preference StaticRoute#preference}
  */
  readonly preference?: number;
  /**
  * Mark route as eligible to be readvertised.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#readvertise StaticRoute#readvertise}
  */
  readonly readvertise?: boolean | cdktf.IResolvable;
  /**
  * Install a receive route for the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#receive StaticRoute#receive}
  */
  readonly receive?: boolean | cdktf.IResolvable;
  /**
  * Drop packets to destination; send ICMP unreachables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#reject StaticRoute#reject}
  */
  readonly reject?: boolean | cdktf.IResolvable;
  /**
  * Allow resolution of indirectly connected next hops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#resolve StaticRoute#resolve}
  */
  readonly resolve?: boolean | cdktf.IResolvable;
  /**
  * Always keep route in forwarding table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#retain StaticRoute#retain}
  */
  readonly retain?: boolean | cdktf.IResolvable;
  /**
  * Routing instance for static route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#routing_instance StaticRoute#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * qualified_next_hop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#qualified_next_hop StaticRoute#qualified_next_hop}
  */
  readonly qualifiedNextHop?: StaticRouteQualifiedNextHop[] | cdktf.IResolvable;
}
export interface StaticRouteQualifiedNextHop {
  /**
  * Interface of qualified next hop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#interface StaticRoute#interface}
  */
  readonly interface?: string;
  /**
  * Metric of qualified next hop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#metric StaticRoute#metric}
  */
  readonly metric?: number;
  /**
  * Next-hop with qualifiers to destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#next_hop StaticRoute#next_hop}
  */
  readonly nextHop: string;
  /**
  * Preference of qualified next hop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#preference StaticRoute#preference}
  */
  readonly preference?: number;
}

export function staticRouteQualifiedNextHopToTerraform(struct?: StaticRouteQualifiedNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    metric: cdktf.numberToTerraform(struct!.metric),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    preference: cdktf.numberToTerraform(struct!.preference),
  }
}


export function staticRouteQualifiedNextHopToHclTerraform(struct?: StaticRouteQualifiedNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
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
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticRouteQualifiedNextHopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StaticRouteQualifiedNextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticRouteQualifiedNextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._metric = undefined;
      this._nextHop = undefined;
      this._preference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._metric = value.metric;
      this._nextHop = value.nextHop;
      this._preference = value.preference;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }
}

export class StaticRouteQualifiedNextHopList extends cdktf.ComplexList {
  public internalValue? : StaticRouteQualifiedNextHop[] | cdktf.IResolvable

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
  public get(index: number): StaticRouteQualifiedNextHopOutputReference {
    return new StaticRouteQualifiedNextHopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route junos_static_route}
*/
export class StaticRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_static_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StaticRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StaticRoute to import
  * @param importFromId The id of the existing StaticRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StaticRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_static_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/static_route junos_static_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StaticRouteConfig
  */
  public constructor(scope: Construct, id: string, config: StaticRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_static_route',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._asPathAggregatorAddress = config.asPathAggregatorAddress;
    this._asPathAggregatorAsNumber = config.asPathAggregatorAsNumber;
    this._asPathAtomicAggregate = config.asPathAtomicAggregate;
    this._asPathOrigin = config.asPathOrigin;
    this._asPathPath = config.asPathPath;
    this._community = config.community;
    this._destination = config.destination;
    this._discard = config.discard;
    this._install = config.install;
    this._metric = config.metric;
    this._nextHop = config.nextHop;
    this._nextTable = config.nextTable;
    this._noInstall = config.noInstall;
    this._noReadvertise = config.noReadvertise;
    this._noResolve = config.noResolve;
    this._noRetain = config.noRetain;
    this._passive = config.passive;
    this._preference = config.preference;
    this._readvertise = config.readvertise;
    this._receive = config.receive;
    this._reject = config.reject;
    this._resolve = config.resolve;
    this._retain = config.retain;
    this._routingInstance = config.routingInstance;
    this._qualifiedNextHop.internalValue = config.qualifiedNextHop;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // as_path_aggregator_address - computed: false, optional: true, required: false
  private _asPathAggregatorAddress?: string; 
  public get asPathAggregatorAddress() {
    return this.getStringAttribute('as_path_aggregator_address');
  }
  public set asPathAggregatorAddress(value: string) {
    this._asPathAggregatorAddress = value;
  }
  public resetAsPathAggregatorAddress() {
    this._asPathAggregatorAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathAggregatorAddressInput() {
    return this._asPathAggregatorAddress;
  }

  // as_path_aggregator_as_number - computed: false, optional: true, required: false
  private _asPathAggregatorAsNumber?: string; 
  public get asPathAggregatorAsNumber() {
    return this.getStringAttribute('as_path_aggregator_as_number');
  }
  public set asPathAggregatorAsNumber(value: string) {
    this._asPathAggregatorAsNumber = value;
  }
  public resetAsPathAggregatorAsNumber() {
    this._asPathAggregatorAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathAggregatorAsNumberInput() {
    return this._asPathAggregatorAsNumber;
  }

  // as_path_atomic_aggregate - computed: false, optional: true, required: false
  private _asPathAtomicAggregate?: boolean | cdktf.IResolvable; 
  public get asPathAtomicAggregate() {
    return this.getBooleanAttribute('as_path_atomic_aggregate');
  }
  public set asPathAtomicAggregate(value: boolean | cdktf.IResolvable) {
    this._asPathAtomicAggregate = value;
  }
  public resetAsPathAtomicAggregate() {
    this._asPathAtomicAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathAtomicAggregateInput() {
    return this._asPathAtomicAggregate;
  }

  // as_path_origin - computed: false, optional: true, required: false
  private _asPathOrigin?: string; 
  public get asPathOrigin() {
    return this.getStringAttribute('as_path_origin');
  }
  public set asPathOrigin(value: string) {
    this._asPathOrigin = value;
  }
  public resetAsPathOrigin() {
    this._asPathOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathOriginInput() {
    return this._asPathOrigin;
  }

  // as_path_path - computed: false, optional: true, required: false
  private _asPathPath?: string; 
  public get asPathPath() {
    return this.getStringAttribute('as_path_path');
  }
  public set asPathPath(value: string) {
    this._asPathPath = value;
  }
  public resetAsPathPath() {
    this._asPathPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathPathInput() {
    return this._asPathPath;
  }

  // community - computed: false, optional: true, required: false
  private _community?: string[]; 
  public get community() {
    return this.getListAttribute('community');
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

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // discard - computed: false, optional: true, required: false
  private _discard?: boolean | cdktf.IResolvable; 
  public get discard() {
    return this.getBooleanAttribute('discard');
  }
  public set discard(value: boolean | cdktf.IResolvable) {
    this._discard = value;
  }
  public resetDiscard() {
    this._discard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // install - computed: false, optional: true, required: false
  private _install?: boolean | cdktf.IResolvable; 
  public get install() {
    return this.getBooleanAttribute('install');
  }
  public set install(value: boolean | cdktf.IResolvable) {
    this._install = value;
  }
  public resetInstall() {
    this._install = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installInput() {
    return this._install;
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

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string[]; 
  public get nextHop() {
    return this.getListAttribute('next_hop');
  }
  public set nextHop(value: string[]) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // next_table - computed: false, optional: true, required: false
  private _nextTable?: string; 
  public get nextTable() {
    return this.getStringAttribute('next_table');
  }
  public set nextTable(value: string) {
    this._nextTable = value;
  }
  public resetNextTable() {
    this._nextTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextTableInput() {
    return this._nextTable;
  }

  // no_install - computed: false, optional: true, required: false
  private _noInstall?: boolean | cdktf.IResolvable; 
  public get noInstall() {
    return this.getBooleanAttribute('no_install');
  }
  public set noInstall(value: boolean | cdktf.IResolvable) {
    this._noInstall = value;
  }
  public resetNoInstall() {
    this._noInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInstallInput() {
    return this._noInstall;
  }

  // no_readvertise - computed: false, optional: true, required: false
  private _noReadvertise?: boolean | cdktf.IResolvable; 
  public get noReadvertise() {
    return this.getBooleanAttribute('no_readvertise');
  }
  public set noReadvertise(value: boolean | cdktf.IResolvable) {
    this._noReadvertise = value;
  }
  public resetNoReadvertise() {
    this._noReadvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noReadvertiseInput() {
    return this._noReadvertise;
  }

  // no_resolve - computed: false, optional: true, required: false
  private _noResolve?: boolean | cdktf.IResolvable; 
  public get noResolve() {
    return this.getBooleanAttribute('no_resolve');
  }
  public set noResolve(value: boolean | cdktf.IResolvable) {
    this._noResolve = value;
  }
  public resetNoResolve() {
    this._noResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noResolveInput() {
    return this._noResolve;
  }

  // no_retain - computed: false, optional: true, required: false
  private _noRetain?: boolean | cdktf.IResolvable; 
  public get noRetain() {
    return this.getBooleanAttribute('no_retain');
  }
  public set noRetain(value: boolean | cdktf.IResolvable) {
    this._noRetain = value;
  }
  public resetNoRetain() {
    this._noRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRetainInput() {
    return this._noRetain;
  }

  // passive - computed: false, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // readvertise - computed: false, optional: true, required: false
  private _readvertise?: boolean | cdktf.IResolvable; 
  public get readvertise() {
    return this.getBooleanAttribute('readvertise');
  }
  public set readvertise(value: boolean | cdktf.IResolvable) {
    this._readvertise = value;
  }
  public resetReadvertise() {
    this._readvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readvertiseInput() {
    return this._readvertise;
  }

  // receive - computed: false, optional: true, required: false
  private _receive?: boolean | cdktf.IResolvable; 
  public get receive() {
    return this.getBooleanAttribute('receive');
  }
  public set receive(value: boolean | cdktf.IResolvable) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // reject - computed: false, optional: true, required: false
  private _reject?: boolean | cdktf.IResolvable; 
  public get reject() {
    return this.getBooleanAttribute('reject');
  }
  public set reject(value: boolean | cdktf.IResolvable) {
    this._reject = value;
  }
  public resetReject() {
    this._reject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectInput() {
    return this._reject;
  }

  // resolve - computed: false, optional: true, required: false
  private _resolve?: boolean | cdktf.IResolvable; 
  public get resolve() {
    return this.getBooleanAttribute('resolve');
  }
  public set resolve(value: boolean | cdktf.IResolvable) {
    this._resolve = value;
  }
  public resetResolve() {
    this._resolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveInput() {
    return this._resolve;
  }

  // retain - computed: false, optional: true, required: false
  private _retain?: boolean | cdktf.IResolvable; 
  public get retain() {
    return this.getBooleanAttribute('retain');
  }
  public set retain(value: boolean | cdktf.IResolvable) {
    this._retain = value;
  }
  public resetRetain() {
    this._retain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainInput() {
    return this._retain;
  }

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // qualified_next_hop - computed: false, optional: true, required: false
  private _qualifiedNextHop = new StaticRouteQualifiedNextHopList(this, "qualified_next_hop", false);
  public get qualifiedNextHop() {
    return this._qualifiedNextHop;
  }
  public putQualifiedNextHop(value: StaticRouteQualifiedNextHop[] | cdktf.IResolvable) {
    this._qualifiedNextHop.internalValue = value;
  }
  public resetQualifiedNextHop() {
    this._qualifiedNextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifiedNextHopInput() {
    return this._qualifiedNextHop.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      as_path_aggregator_address: cdktf.stringToTerraform(this._asPathAggregatorAddress),
      as_path_aggregator_as_number: cdktf.stringToTerraform(this._asPathAggregatorAsNumber),
      as_path_atomic_aggregate: cdktf.booleanToTerraform(this._asPathAtomicAggregate),
      as_path_origin: cdktf.stringToTerraform(this._asPathOrigin),
      as_path_path: cdktf.stringToTerraform(this._asPathPath),
      community: cdktf.listMapper(cdktf.stringToTerraform, false)(this._community),
      destination: cdktf.stringToTerraform(this._destination),
      discard: cdktf.booleanToTerraform(this._discard),
      install: cdktf.booleanToTerraform(this._install),
      metric: cdktf.numberToTerraform(this._metric),
      next_hop: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nextHop),
      next_table: cdktf.stringToTerraform(this._nextTable),
      no_install: cdktf.booleanToTerraform(this._noInstall),
      no_readvertise: cdktf.booleanToTerraform(this._noReadvertise),
      no_resolve: cdktf.booleanToTerraform(this._noResolve),
      no_retain: cdktf.booleanToTerraform(this._noRetain),
      passive: cdktf.booleanToTerraform(this._passive),
      preference: cdktf.numberToTerraform(this._preference),
      readvertise: cdktf.booleanToTerraform(this._readvertise),
      receive: cdktf.booleanToTerraform(this._receive),
      reject: cdktf.booleanToTerraform(this._reject),
      resolve: cdktf.booleanToTerraform(this._resolve),
      retain: cdktf.booleanToTerraform(this._retain),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      qualified_next_hop: cdktf.listMapper(staticRouteQualifiedNextHopToTerraform, true)(this._qualifiedNextHop.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      as_path_aggregator_address: {
        value: cdktf.stringToHclTerraform(this._asPathAggregatorAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_path_aggregator_as_number: {
        value: cdktf.stringToHclTerraform(this._asPathAggregatorAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_path_atomic_aggregate: {
        value: cdktf.booleanToHclTerraform(this._asPathAtomicAggregate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      as_path_origin: {
        value: cdktf.stringToHclTerraform(this._asPathOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_path_path: {
        value: cdktf.stringToHclTerraform(this._asPathPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      community: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._community),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discard: {
        value: cdktf.booleanToHclTerraform(this._discard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      install: {
        value: cdktf.booleanToHclTerraform(this._install),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric: {
        value: cdktf.numberToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      next_hop: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nextHop),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      next_table: {
        value: cdktf.stringToHclTerraform(this._nextTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_install: {
        value: cdktf.booleanToHclTerraform(this._noInstall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_readvertise: {
        value: cdktf.booleanToHclTerraform(this._noReadvertise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_resolve: {
        value: cdktf.booleanToHclTerraform(this._noResolve),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_retain: {
        value: cdktf.booleanToHclTerraform(this._noRetain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passive: {
        value: cdktf.booleanToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preference: {
        value: cdktf.numberToHclTerraform(this._preference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      readvertise: {
        value: cdktf.booleanToHclTerraform(this._readvertise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      receive: {
        value: cdktf.booleanToHclTerraform(this._receive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reject: {
        value: cdktf.booleanToHclTerraform(this._reject),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resolve: {
        value: cdktf.booleanToHclTerraform(this._resolve),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retain: {
        value: cdktf.booleanToHclTerraform(this._retain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qualified_next_hop: {
        value: cdktf.listMapperHcl(staticRouteQualifiedNextHopToHclTerraform, true)(this._qualifiedNextHop.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StaticRouteQualifiedNextHopList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
