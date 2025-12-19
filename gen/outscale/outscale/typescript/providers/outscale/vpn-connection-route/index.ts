// https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/vpn_connection_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnConnectionRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/vpn_connection_route#destination_ip_range VpnConnectionRoute#destination_ip_range}
  */
  readonly destinationIpRange: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/vpn_connection_route#id VpnConnectionRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/vpn_connection_route#vpn_connection_id VpnConnectionRoute#vpn_connection_id}
  */
  readonly vpnConnectionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/vpn_connection_route outscale_vpn_connection_route}
*/
export class VpnConnectionRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_vpn_connection_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnConnectionRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnConnectionRoute to import
  * @param importFromId The id of the existing VpnConnectionRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/vpn_connection_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnConnectionRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_vpn_connection_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/vpn_connection_route outscale_vpn_connection_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnConnectionRouteConfig
  */
  public constructor(scope: Construct, id: string, config: VpnConnectionRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_vpn_connection_route',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationIpRange = config.destinationIpRange;
    this._id = config.id;
    this._vpnConnectionId = config.vpnConnectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_ip_range - computed: false, optional: false, required: true
  private _destinationIpRange?: string; 
  public get destinationIpRange() {
    return this.getStringAttribute('destination_ip_range');
  }
  public set destinationIpRange(value: string) {
    this._destinationIpRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpRangeInput() {
    return this._destinationIpRange;
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

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // vpn_connection_id - computed: false, optional: false, required: true
  private _vpnConnectionId?: string; 
  public get vpnConnectionId() {
    return this.getStringAttribute('vpn_connection_id');
  }
  public set vpnConnectionId(value: string) {
    this._vpnConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConnectionIdInput() {
    return this._vpnConnectionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_ip_range: cdktf.stringToTerraform(this._destinationIpRange),
      id: cdktf.stringToTerraform(this._id),
      vpn_connection_id: cdktf.stringToTerraform(this._vpnConnectionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_ip_range: {
        value: cdktf.stringToHclTerraform(this._destinationIpRange),
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
      vpn_connection_id: {
        value: cdktf.stringToHclTerraform(this._vpnConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
