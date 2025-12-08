// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingBgpInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance#___path___ RoutingBgpInstance#___path___}
  */
  readonly path?: string;
  /**
  * 32-bit BGP autonomous system number. Value can be entered in AS-Plain and AS-Dot formats. The parameter is also used to set up the BGP confederation, in the following format: confederation_as/as. For example, if your AS is 34 and your confederation AS is 43, then as configuration should be as=43/34.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance#as RoutingBgpInstance#as}
  */
  readonly as?: string;
  /**
  * In case this instance is a route reflector: the cluster ID of the router reflector cluster to this instance belongs. This attribute helps to recognize routing updates that come from another route reflector in this cluster and avoid routing information looping. Note that normally there is only one route reflector in a cluster; in this case, `cluster-id` does not need to be configured and BGP router ID is used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance#cluster_id RoutingBgpInstance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance#comment RoutingBgpInstance#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance#disabled RoutingBgpInstance#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance#id RoutingBgpInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to ignore the `AS_PATH` attribute in the BGP route selection algorithm. Works on input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance#ignore_as_path_len RoutingBgpInstance#ignore_as_path_len}
  */
  readonly ignoreAsPathLen?: boolean | cdktf.IResolvable;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance#name RoutingBgpInstance#name}
  */
  readonly name: string;
  /**
  * BGP Router ID to be used. Use the ID from the `/routing/router-id` configuration by specifying the reference name, or set the ID directly by specifying IP.Equal router-ids are also used to group peers into one instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance#router_id RoutingBgpInstance#router_id}
  */
  readonly routerId?: string;
  /**
  * Name of the routing table, to install routes in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance#routing_table RoutingBgpInstance#routing_table}
  */
  readonly routingTable?: string;
  /**
  * Name of the VRF BGP connections operates on. By default always use the `main` routing table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance#vrf RoutingBgpInstance#vrf}
  */
  readonly vrf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance routeros_routing_bgp_instance}
*/
export class RoutingBgpInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_routing_bgp_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingBgpInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingBgpInstance to import
  * @param importFromId The id of the existing RoutingBgpInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingBgpInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_routing_bgp_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/routing_bgp_instance routeros_routing_bgp_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingBgpInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingBgpInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_routing_bgp_instance',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._as = config.as;
    this._clusterId = config.clusterId;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._ignoreAsPathLen = config.ignoreAsPathLen;
    this._name = config.name;
    this._routerId = config.routerId;
    this._routingTable = config.routingTable;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // as - computed: false, optional: true, required: false
  private _as?: string; 
  public get as() {
    return this.getStringAttribute('as');
  }
  public set as(value: string) {
    this._as = value;
  }
  public resetAs() {
    this._as = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asInput() {
    return this._as;
  }

  // cluster_id - computed: false, optional: true, required: false
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

  // comment - computed: false, optional: true, required: false
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

  // ignore_as_path_len - computed: false, optional: true, required: false
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

  // inactive - computed: true, optional: false, required: false
  public get inactive() {
    return this.getBooleanAttribute('inactive');
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

  // routing_table - computed: false, optional: true, required: false
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

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      as: cdktf.stringToTerraform(this._as),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      ignore_as_path_len: cdktf.booleanToTerraform(this._ignoreAsPathLen),
      name: cdktf.stringToTerraform(this._name),
      router_id: cdktf.stringToTerraform(this._routerId),
      routing_table: cdktf.stringToTerraform(this._routingTable),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as: {
        value: cdktf.stringToHclTerraform(this._as),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
