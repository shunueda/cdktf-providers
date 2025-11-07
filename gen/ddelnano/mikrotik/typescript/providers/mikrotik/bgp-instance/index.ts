// https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The 32-bit BGP autonomous system number. Must be a value within 0 to 4294967295.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#as BgpInstance#as}
  */
  readonly as: number;
  /**
  * In case this instance is a route reflector: whether to redistribute routes learned from one routing reflection client to other clients. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#client_to_client_reflection BgpInstance#client_to_client_reflection}
  */
  readonly clientToClientReflection?: boolean | cdktf.IResolvable;
  /**
  * In case this instance is a route reflector: cluster ID of the router reflector cluster this instance belongs to. Default: `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#cluster_id BgpInstance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The comment of the BGP instance to be created. Default: `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#comment BgpInstance#comment}
  */
  readonly comment?: string;
  /**
  * In case of BGP confederations: autonomous system number that identifies the [local] confederation as a whole. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#confederation BgpInstance#confederation}
  */
  readonly confederation?: number;
  /**
  * List of AS numbers internal to the [local] confederation. For example: `10,20,30-50`. Default: `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#confederation_peers BgpInstance#confederation_peers}
  */
  readonly confederationPeers?: string;
  /**
  * Whether instance is disabled. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#disabled BgpInstance#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to ignore AS_PATH attribute in BGP route selection algorithm. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#ignore_as_path_len BgpInstance#ignore_as_path_len}
  */
  readonly ignoreAsPathLen?: boolean | cdktf.IResolvable;
  /**
  * The name of the BGP instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#name BgpInstance#name}
  */
  readonly name: string;
  /**
  * Output routing filter chain used by all BGP peers belonging to this instance. Default: `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#out_filter BgpInstance#out_filter}
  */
  readonly outFilter?: string;
  /**
  * If enabled, this BGP instance will redistribute the information about connected routes. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#redistribute_connected BgpInstance#redistribute_connected}
  */
  readonly redistributeConnected?: boolean | cdktf.IResolvable;
  /**
  * If enabled, this BGP instance will redistribute the information about routes learned by OSPF. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#redistribute_ospf BgpInstance#redistribute_ospf}
  */
  readonly redistributeOspf?: boolean | cdktf.IResolvable;
  /**
  * If enabled, this BGP instance will redistribute the information about routes learned by other BGP instances. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#redistribute_other_bgp BgpInstance#redistribute_other_bgp}
  */
  readonly redistributeOtherBgp?: boolean | cdktf.IResolvable;
  /**
  * If enabled, this BGP instance will redistribute the information about routes learned by RIP. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#redistribute_rip BgpInstance#redistribute_rip}
  */
  readonly redistributeRip?: boolean | cdktf.IResolvable;
  /**
  * If enabled, the router will redistribute the information about static routes added to its routing database. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#redistribute_static BgpInstance#redistribute_static}
  */
  readonly redistributeStatic?: boolean | cdktf.IResolvable;
  /**
  * BGP Router ID (for this instance). If set to 0.0.0.0, BGP will use one of router's IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#router_id BgpInstance#router_id}
  */
  readonly routerId: string;
  /**
  * Name of routing table this BGP instance operates on.  Default: `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#routing_table BgpInstance#routing_table}
  */
  readonly routingTable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance mikrotik_bgp_instance}
*/
export class BgpInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mikrotik_bgp_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpInstance to import
  * @param importFromId The id of the existing BgpInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mikrotik_bgp_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_instance mikrotik_bgp_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: BgpInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'mikrotik_bgp_instance',
      terraformGeneratorMetadata: {
        providerName: 'mikrotik',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._as = config.as;
    this._clientToClientReflection = config.clientToClientReflection;
    this._clusterId = config.clusterId;
    this._comment = config.comment;
    this._confederation = config.confederation;
    this._confederationPeers = config.confederationPeers;
    this._disabled = config.disabled;
    this._ignoreAsPathLen = config.ignoreAsPathLen;
    this._name = config.name;
    this._outFilter = config.outFilter;
    this._redistributeConnected = config.redistributeConnected;
    this._redistributeOspf = config.redistributeOspf;
    this._redistributeOtherBgp = config.redistributeOtherBgp;
    this._redistributeRip = config.redistributeRip;
    this._redistributeStatic = config.redistributeStatic;
    this._routerId = config.routerId;
    this._routingTable = config.routingTable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as - computed: false, optional: false, required: true
  private _as?: number; 
  public get as() {
    return this.getNumberAttribute('as');
  }
  public set as(value: number) {
    this._as = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asInput() {
    return this._as;
  }

  // client_to_client_reflection - computed: true, optional: true, required: false
  private _clientToClientReflection?: boolean | cdktf.IResolvable; 
  public get clientToClientReflection() {
    return this.getBooleanAttribute('client_to_client_reflection');
  }
  public set clientToClientReflection(value: boolean | cdktf.IResolvable) {
    this._clientToClientReflection = value;
  }
  public resetClientToClientReflection() {
    this._clientToClientReflection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientToClientReflectionInput() {
    return this._clientToClientReflection;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // confederation - computed: true, optional: true, required: false
  private _confederation?: number; 
  public get confederation() {
    return this.getNumberAttribute('confederation');
  }
  public set confederation(value: number) {
    this._confederation = value;
  }
  public resetConfederation() {
    this._confederation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confederationInput() {
    return this._confederation;
  }

  // confederation_peers - computed: true, optional: true, required: false
  private _confederationPeers?: string; 
  public get confederationPeers() {
    return this.getStringAttribute('confederation_peers');
  }
  public set confederationPeers(value: string) {
    this._confederationPeers = value;
  }
  public resetConfederationPeers() {
    this._confederationPeers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confederationPeersInput() {
    return this._confederationPeers;
  }

  // disabled - computed: true, optional: true, required: false
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

  // ignore_as_path_len - computed: true, optional: true, required: false
  private _ignoreAsPathLen?: boolean | cdktf.IResolvable; 
  public get ignoreAsPathLen() {
    return this.getBooleanAttribute('ignore_as_path_len');
  }
  public set ignoreAsPathLen(value: boolean | cdktf.IResolvable) {
    this._ignoreAsPathLen = value;
  }
  public resetIgnoreAsPathLen() {
    this._ignoreAsPathLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAsPathLenInput() {
    return this._ignoreAsPathLen;
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

  // out_filter - computed: true, optional: true, required: false
  private _outFilter?: string; 
  public get outFilter() {
    return this.getStringAttribute('out_filter');
  }
  public set outFilter(value: string) {
    this._outFilter = value;
  }
  public resetOutFilter() {
    this._outFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outFilterInput() {
    return this._outFilter;
  }

  // redistribute_connected - computed: true, optional: true, required: false
  private _redistributeConnected?: boolean | cdktf.IResolvable; 
  public get redistributeConnected() {
    return this.getBooleanAttribute('redistribute_connected');
  }
  public set redistributeConnected(value: boolean | cdktf.IResolvable) {
    this._redistributeConnected = value;
  }
  public resetRedistributeConnected() {
    this._redistributeConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnectedInput() {
    return this._redistributeConnected;
  }

  // redistribute_ospf - computed: true, optional: true, required: false
  private _redistributeOspf?: boolean | cdktf.IResolvable; 
  public get redistributeOspf() {
    return this.getBooleanAttribute('redistribute_ospf');
  }
  public set redistributeOspf(value: boolean | cdktf.IResolvable) {
    this._redistributeOspf = value;
  }
  public resetRedistributeOspf() {
    this._redistributeOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeOspfInput() {
    return this._redistributeOspf;
  }

  // redistribute_other_bgp - computed: true, optional: true, required: false
  private _redistributeOtherBgp?: boolean | cdktf.IResolvable; 
  public get redistributeOtherBgp() {
    return this.getBooleanAttribute('redistribute_other_bgp');
  }
  public set redistributeOtherBgp(value: boolean | cdktf.IResolvable) {
    this._redistributeOtherBgp = value;
  }
  public resetRedistributeOtherBgp() {
    this._redistributeOtherBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeOtherBgpInput() {
    return this._redistributeOtherBgp;
  }

  // redistribute_rip - computed: true, optional: true, required: false
  private _redistributeRip?: boolean | cdktf.IResolvable; 
  public get redistributeRip() {
    return this.getBooleanAttribute('redistribute_rip');
  }
  public set redistributeRip(value: boolean | cdktf.IResolvable) {
    this._redistributeRip = value;
  }
  public resetRedistributeRip() {
    this._redistributeRip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeRipInput() {
    return this._redistributeRip;
  }

  // redistribute_static - computed: true, optional: true, required: false
  private _redistributeStatic?: boolean | cdktf.IResolvable; 
  public get redistributeStatic() {
    return this.getBooleanAttribute('redistribute_static');
  }
  public set redistributeStatic(value: boolean | cdktf.IResolvable) {
    this._redistributeStatic = value;
  }
  public resetRedistributeStatic() {
    this._redistributeStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStaticInput() {
    return this._redistributeStatic;
  }

  // router_id - computed: false, optional: false, required: true
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // routing_table - computed: true, optional: true, required: false
  private _routingTable?: string; 
  public get routingTable() {
    return this.getStringAttribute('routing_table');
  }
  public set routingTable(value: string) {
    this._routingTable = value;
  }
  public resetRoutingTable() {
    this._routingTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableInput() {
    return this._routingTable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as: cdktf.numberToTerraform(this._as),
      client_to_client_reflection: cdktf.booleanToTerraform(this._clientToClientReflection),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      comment: cdktf.stringToTerraform(this._comment),
      confederation: cdktf.numberToTerraform(this._confederation),
      confederation_peers: cdktf.stringToTerraform(this._confederationPeers),
      disabled: cdktf.booleanToTerraform(this._disabled),
      ignore_as_path_len: cdktf.booleanToTerraform(this._ignoreAsPathLen),
      name: cdktf.stringToTerraform(this._name),
      out_filter: cdktf.stringToTerraform(this._outFilter),
      redistribute_connected: cdktf.booleanToTerraform(this._redistributeConnected),
      redistribute_ospf: cdktf.booleanToTerraform(this._redistributeOspf),
      redistribute_other_bgp: cdktf.booleanToTerraform(this._redistributeOtherBgp),
      redistribute_rip: cdktf.booleanToTerraform(this._redistributeRip),
      redistribute_static: cdktf.booleanToTerraform(this._redistributeStatic),
      router_id: cdktf.stringToTerraform(this._routerId),
      routing_table: cdktf.stringToTerraform(this._routingTable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as: {
        value: cdktf.numberToHclTerraform(this._as),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_to_client_reflection: {
        value: cdktf.booleanToHclTerraform(this._clientToClientReflection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confederation: {
        value: cdktf.numberToHclTerraform(this._confederation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      confederation_peers: {
        value: cdktf.stringToHclTerraform(this._confederationPeers),
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
      ignore_as_path_len: {
        value: cdktf.booleanToHclTerraform(this._ignoreAsPathLen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_filter: {
        value: cdktf.stringToHclTerraform(this._outFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_connected: {
        value: cdktf.booleanToHclTerraform(this._redistributeConnected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redistribute_ospf: {
        value: cdktf.booleanToHclTerraform(this._redistributeOspf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redistribute_other_bgp: {
        value: cdktf.booleanToHclTerraform(this._redistributeOtherBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redistribute_rip: {
        value: cdktf.booleanToHclTerraform(this._redistributeRip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redistribute_static: {
        value: cdktf.booleanToHclTerraform(this._redistributeStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_table: {
        value: cdktf.stringToHclTerraform(this._routingTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
