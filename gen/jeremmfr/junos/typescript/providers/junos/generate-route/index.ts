// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenerateRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Remove inactive route from forwarding table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#active GenerateRoute#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Address of BGP system to add AGGREGATOR path attribute to route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#as_path_aggregator_address GenerateRoute#as_path_aggregator_address}
  */
  readonly asPathAggregatorAddress?: string;
  /**
  * AS number to add AGGREGATOR path attribute to route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#as_path_aggregator_as_number GenerateRoute#as_path_aggregator_as_number}
  */
  readonly asPathAggregatorAsNumber?: string;
  /**
  * Add ATOMIC_AGGREGATE path attribute to route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#as_path_atomic_aggregate GenerateRoute#as_path_atomic_aggregate}
  */
  readonly asPathAtomicAggregate?: boolean | cdktf.IResolvable;
  /**
  * Define origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#as_path_origin GenerateRoute#as_path_origin}
  */
  readonly asPathOrigin?: string;
  /**
  * Path to as-path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#as_path_path GenerateRoute#as_path_path}
  */
  readonly asPathPath?: string;
  /**
  * Include longest common sequences from contributing paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#brief GenerateRoute#brief}
  */
  readonly brief?: boolean | cdktf.IResolvable;
  /**
  * BGP community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#community GenerateRoute#community}
  */
  readonly community?: string[];
  /**
  * Destination prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#destination GenerateRoute#destination}
  */
  readonly destination: string;
  /**
  * Drop packets to destination; send no ICMP unreachables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#discard GenerateRoute#discard}
  */
  readonly discard?: boolean | cdktf.IResolvable;
  /**
  * Include all AS numbers from all contributing paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#full GenerateRoute#full}
  */
  readonly full?: boolean | cdktf.IResolvable;
  /**
  * Metric for generate route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#metric GenerateRoute#metric}
  */
  readonly metric?: number;
  /**
  * Next hop to another table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#next_table GenerateRoute#next_table}
  */
  readonly nextTable?: string;
  /**
  * Retain inactive route in forwarding table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#passive GenerateRoute#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Policy filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#policy GenerateRoute#policy}
  */
  readonly policy?: string[];
  /**
  * Preference for aggregate route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#preference GenerateRoute#preference}
  */
  readonly preference?: number;
  /**
  * Routing instance for generate route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#routing_instance GenerateRoute#routing_instance}
  */
  readonly routingInstance?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route junos_generate_route}
*/
export class GenerateRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_generate_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenerateRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenerateRoute to import
  * @param importFromId The id of the existing GenerateRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenerateRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_generate_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/generate_route junos_generate_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenerateRouteConfig
  */
  public constructor(scope: Construct, id: string, config: GenerateRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_generate_route',
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
    this._brief = config.brief;
    this._community = config.community;
    this._destination = config.destination;
    this._discard = config.discard;
    this._full = config.full;
    this._metric = config.metric;
    this._nextTable = config.nextTable;
    this._passive = config.passive;
    this._policy = config.policy;
    this._preference = config.preference;
    this._routingInstance = config.routingInstance;
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

  // brief - computed: false, optional: true, required: false
  private _brief?: boolean | cdktf.IResolvable; 
  public get brief() {
    return this.getBooleanAttribute('brief');
  }
  public set brief(value: boolean | cdktf.IResolvable) {
    this._brief = value;
  }
  public resetBrief() {
    this._brief = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get briefInput() {
    return this._brief;
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

  // full - computed: false, optional: true, required: false
  private _full?: boolean | cdktf.IResolvable; 
  public get full() {
    return this.getBooleanAttribute('full');
  }
  public set full(value: boolean | cdktf.IResolvable) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy - computed: false, optional: true, required: false
  private _policy?: string[]; 
  public get policy() {
    return this.getListAttribute('policy');
  }
  public set policy(value: string[]) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
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
      brief: cdktf.booleanToTerraform(this._brief),
      community: cdktf.listMapper(cdktf.stringToTerraform, false)(this._community),
      destination: cdktf.stringToTerraform(this._destination),
      discard: cdktf.booleanToTerraform(this._discard),
      full: cdktf.booleanToTerraform(this._full),
      metric: cdktf.numberToTerraform(this._metric),
      next_table: cdktf.stringToTerraform(this._nextTable),
      passive: cdktf.booleanToTerraform(this._passive),
      policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policy),
      preference: cdktf.numberToTerraform(this._preference),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
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
      brief: {
        value: cdktf.booleanToHclTerraform(this._brief),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      full: {
        value: cdktf.booleanToHclTerraform(this._full),
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
      next_table: {
        value: cdktf.stringToHclTerraform(this._nextTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive: {
        value: cdktf.booleanToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      preference: {
        value: cdktf.numberToHclTerraform(this._preference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
