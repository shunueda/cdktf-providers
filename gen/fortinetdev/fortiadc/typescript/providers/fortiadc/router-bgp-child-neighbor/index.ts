// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpChildNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#distribute_list_in RouterBgpChildNeighbor#distribute_list_in}
  */
  readonly distributeListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#distribute_list_in6 RouterBgpChildNeighbor#distribute_list_in6}
  */
  readonly distributeListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#distribute_list_out RouterBgpChildNeighbor#distribute_list_out}
  */
  readonly distributeListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#distribute_list_out6 RouterBgpChildNeighbor#distribute_list_out6}
  */
  readonly distributeListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#holdtime RouterBgpChildNeighbor#holdtime}
  */
  readonly holdtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#id RouterBgpChildNeighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#interface RouterBgpChildNeighbor#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#ip RouterBgpChildNeighbor#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#ip6 RouterBgpChildNeighbor#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#keepalive RouterBgpChildNeighbor#keepalive}
  */
  readonly keepalive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#mkey RouterBgpChildNeighbor#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#port RouterBgpChildNeighbor#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#prefix_list_in RouterBgpChildNeighbor#prefix_list_in}
  */
  readonly prefixListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#prefix_list_in6 RouterBgpChildNeighbor#prefix_list_in6}
  */
  readonly prefixListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#prefix_list_out RouterBgpChildNeighbor#prefix_list_out}
  */
  readonly prefixListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#prefix_list_out6 RouterBgpChildNeighbor#prefix_list_out6}
  */
  readonly prefixListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#remote_as RouterBgpChildNeighbor#remote_as}
  */
  readonly remoteAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#type RouterBgpChildNeighbor#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#vdom RouterBgpChildNeighbor#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#weight RouterBgpChildNeighbor#weight}
  */
  readonly weight?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor fortiadc_router_bgp_child_neighbor}
*/
export class RouterBgpChildNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_router_bgp_child_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpChildNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpChildNeighbor to import
  * @param importFromId The id of the existing RouterBgpChildNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpChildNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_router_bgp_child_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp_child_neighbor fortiadc_router_bgp_child_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpChildNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpChildNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_router_bgp_child_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._distributeListIn = config.distributeListIn;
    this._distributeListIn6 = config.distributeListIn6;
    this._distributeListOut = config.distributeListOut;
    this._distributeListOut6 = config.distributeListOut6;
    this._holdtime = config.holdtime;
    this._id = config.id;
    this._interface = config.interface;
    this._ip = config.ip;
    this._ip6 = config.ip6;
    this._keepalive = config.keepalive;
    this._mkey = config.mkey;
    this._port = config.port;
    this._prefixListIn = config.prefixListIn;
    this._prefixListIn6 = config.prefixListIn6;
    this._prefixListOut = config.prefixListOut;
    this._prefixListOut6 = config.prefixListOut6;
    this._remoteAs = config.remoteAs;
    this._type = config.type;
    this._vdom = config.vdom;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // distribute_list_in - computed: true, optional: true, required: false
  private _distributeListIn?: string; 
  public get distributeListIn() {
    return this.getStringAttribute('distribute_list_in');
  }
  public set distributeListIn(value: string) {
    this._distributeListIn = value;
  }
  public resetDistributeListIn() {
    this._distributeListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInInput() {
    return this._distributeListIn;
  }

  // distribute_list_in6 - computed: true, optional: true, required: false
  private _distributeListIn6?: string; 
  public get distributeListIn6() {
    return this.getStringAttribute('distribute_list_in6');
  }
  public set distributeListIn6(value: string) {
    this._distributeListIn6 = value;
  }
  public resetDistributeListIn6() {
    this._distributeListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListIn6Input() {
    return this._distributeListIn6;
  }

  // distribute_list_out - computed: true, optional: true, required: false
  private _distributeListOut?: string; 
  public get distributeListOut() {
    return this.getStringAttribute('distribute_list_out');
  }
  public set distributeListOut(value: string) {
    this._distributeListOut = value;
  }
  public resetDistributeListOut() {
    this._distributeListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOutInput() {
    return this._distributeListOut;
  }

  // distribute_list_out6 - computed: true, optional: true, required: false
  private _distributeListOut6?: string; 
  public get distributeListOut6() {
    return this.getStringAttribute('distribute_list_out6');
  }
  public set distributeListOut6(value: string) {
    this._distributeListOut6 = value;
  }
  public resetDistributeListOut6() {
    this._distributeListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOut6Input() {
    return this._distributeListOut6;
  }

  // holdtime - computed: true, optional: true, required: false
  private _holdtime?: string; 
  public get holdtime() {
    return this.getStringAttribute('holdtime');
  }
  public set holdtime(value: string) {
    this._holdtime = value;
  }
  public resetHoldtime() {
    this._holdtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeInput() {
    return this._holdtime;
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

  // interface - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // keepalive - computed: true, optional: true, required: false
  private _keepalive?: string; 
  public get keepalive() {
    return this.getStringAttribute('keepalive');
  }
  public set keepalive(value: string) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // prefix_list_in - computed: true, optional: true, required: false
  private _prefixListIn?: string; 
  public get prefixListIn() {
    return this.getStringAttribute('prefix_list_in');
  }
  public set prefixListIn(value: string) {
    this._prefixListIn = value;
  }
  public resetPrefixListIn() {
    this._prefixListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInInput() {
    return this._prefixListIn;
  }

  // prefix_list_in6 - computed: true, optional: true, required: false
  private _prefixListIn6?: string; 
  public get prefixListIn6() {
    return this.getStringAttribute('prefix_list_in6');
  }
  public set prefixListIn6(value: string) {
    this._prefixListIn6 = value;
  }
  public resetPrefixListIn6() {
    this._prefixListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIn6Input() {
    return this._prefixListIn6;
  }

  // prefix_list_out - computed: true, optional: true, required: false
  private _prefixListOut?: string; 
  public get prefixListOut() {
    return this.getStringAttribute('prefix_list_out');
  }
  public set prefixListOut(value: string) {
    this._prefixListOut = value;
  }
  public resetPrefixListOut() {
    this._prefixListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOutInput() {
    return this._prefixListOut;
  }

  // prefix_list_out6 - computed: true, optional: true, required: false
  private _prefixListOut6?: string; 
  public get prefixListOut6() {
    return this.getStringAttribute('prefix_list_out6');
  }
  public set prefixListOut6(value: string) {
    this._prefixListOut6 = value;
  }
  public resetPrefixListOut6() {
    this._prefixListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOut6Input() {
    return this._prefixListOut6;
  }

  // remote_as - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      distribute_list_in: cdktf.stringToTerraform(this._distributeListIn),
      distribute_list_in6: cdktf.stringToTerraform(this._distributeListIn6),
      distribute_list_out: cdktf.stringToTerraform(this._distributeListOut),
      distribute_list_out6: cdktf.stringToTerraform(this._distributeListOut6),
      holdtime: cdktf.stringToTerraform(this._holdtime),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ip: cdktf.stringToTerraform(this._ip),
      ip6: cdktf.stringToTerraform(this._ip6),
      keepalive: cdktf.stringToTerraform(this._keepalive),
      mkey: cdktf.stringToTerraform(this._mkey),
      port: cdktf.stringToTerraform(this._port),
      prefix_list_in: cdktf.stringToTerraform(this._prefixListIn),
      prefix_list_in6: cdktf.stringToTerraform(this._prefixListIn6),
      prefix_list_out: cdktf.stringToTerraform(this._prefixListOut),
      prefix_list_out6: cdktf.stringToTerraform(this._prefixListOut6),
      remote_as: cdktf.stringToTerraform(this._remoteAs),
      type: cdktf.stringToTerraform(this._type),
      vdom: cdktf.stringToTerraform(this._vdom),
      weight: cdktf.stringToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      distribute_list_in: {
        value: cdktf.stringToHclTerraform(this._distributeListIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_in6: {
        value: cdktf.stringToHclTerraform(this._distributeListIn6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_out: {
        value: cdktf.stringToHclTerraform(this._distributeListOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_list_out6: {
        value: cdktf.stringToHclTerraform(this._distributeListOut6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      holdtime: {
        value: cdktf.stringToHclTerraform(this._holdtime),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6: {
        value: cdktf.stringToHclTerraform(this._ip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive: {
        value: cdktf.stringToHclTerraform(this._keepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_in: {
        value: cdktf.stringToHclTerraform(this._prefixListIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_in6: {
        value: cdktf.stringToHclTerraform(this._prefixListIn6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_out: {
        value: cdktf.stringToHclTerraform(this._prefixListOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_out6: {
        value: cdktf.stringToHclTerraform(this._prefixListOut6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_as: {
        value: cdktf.stringToHclTerraform(this._remoteAs),
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
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.stringToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
