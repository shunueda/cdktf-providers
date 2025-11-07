// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Gateway address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_route#gw NetRoute#gw}
  */
  readonly gw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_route#id NetRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_route#name NetRoute#name}
  */
  readonly name: string;
  /**
  * Destination network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_route#network NetRoute#network}
  */
  readonly network: string;
  /**
  * reject route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_route#reject NetRoute#reject}
  */
  readonly reject?: boolean | cdktf.IResolvable;
  /**
  * tunnel_ref to route traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_route#tunnel_ref NetRoute#tunnel_ref}
  */
  readonly tunnelRef?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_route bigip_net_route}
*/
export class NetRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_net_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetRoute to import
  * @param importFromId The id of the existing NetRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_net_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_route bigip_net_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetRouteConfig
  */
  public constructor(scope: Construct, id: string, config: NetRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_net_route',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gw = config.gw;
    this._id = config.id;
    this._name = config.name;
    this._network = config.network;
    this._reject = config.reject;
    this._tunnelRef = config.tunnelRef;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gw - computed: false, optional: true, required: false
  private _gw?: string; 
  public get gw() {
    return this.getStringAttribute('gw');
  }
  public set gw(value: string) {
    this._gw = value;
  }
  public resetGw() {
    this._gw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwInput() {
    return this._gw;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // tunnel_ref - computed: false, optional: true, required: false
  private _tunnelRef?: string; 
  public get tunnelRef() {
    return this.getStringAttribute('tunnel_ref');
  }
  public set tunnelRef(value: string) {
    this._tunnelRef = value;
  }
  public resetTunnelRef() {
    this._tunnelRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRefInput() {
    return this._tunnelRef;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gw: cdktf.stringToTerraform(this._gw),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      reject: cdktf.booleanToTerraform(this._reject),
      tunnel_ref: cdktf.stringToTerraform(this._tunnelRef),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gw: {
        value: cdktf.stringToHclTerraform(this._gw),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reject: {
        value: cdktf.booleanToHclTerraform(this._reject),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_ref: {
        value: cdktf.stringToHclTerraform(this._tunnelRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
