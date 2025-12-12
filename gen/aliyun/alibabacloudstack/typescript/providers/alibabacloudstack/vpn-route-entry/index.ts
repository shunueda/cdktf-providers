// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpn_route_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnRouteEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpn_route_entry#id VpnRouteEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpn_route_entry#next_hop VpnRouteEntry#next_hop}
  */
  readonly nextHop: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpn_route_entry#publish_vpc VpnRouteEntry#publish_vpc}
  */
  readonly publishVpc: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpn_route_entry#route_dest VpnRouteEntry#route_dest}
  */
  readonly routeDest: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpn_route_entry#vpn_gateway_id VpnRouteEntry#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpn_route_entry#weight VpnRouteEntry#weight}
  */
  readonly weight: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpn_route_entry alibabacloudstack_vpn_route_entry}
*/
export class VpnRouteEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_vpn_route_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnRouteEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnRouteEntry to import
  * @param importFromId The id of the existing VpnRouteEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpn_route_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnRouteEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_vpn_route_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpn_route_entry alibabacloudstack_vpn_route_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnRouteEntryConfig
  */
  public constructor(scope: Construct, id: string, config: VpnRouteEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_vpn_route_entry',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._nextHop = config.nextHop;
    this._publishVpc = config.publishVpc;
    this._routeDest = config.routeDest;
    this._vpnGatewayId = config.vpnGatewayId;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // publish_vpc - computed: false, optional: false, required: true
  private _publishVpc?: boolean | cdktf.IResolvable; 
  public get publishVpc() {
    return this.getBooleanAttribute('publish_vpc');
  }
  public set publishVpc(value: boolean | cdktf.IResolvable) {
    this._publishVpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishVpcInput() {
    return this._publishVpc;
  }

  // route_dest - computed: false, optional: false, required: true
  private _routeDest?: string; 
  public get routeDest() {
    return this.getStringAttribute('route_dest');
  }
  public set routeDest(value: string) {
    this._routeDest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDestInput() {
    return this._routeDest;
  }

  // vpn_gateway_id - computed: false, optional: false, required: true
  private _vpnGatewayId?: string; 
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
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
      id: cdktf.stringToTerraform(this._id),
      next_hop: cdktf.stringToTerraform(this._nextHop),
      publish_vpc: cdktf.booleanToTerraform(this._publishVpc),
      route_dest: cdktf.stringToTerraform(this._routeDest),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop: {
        value: cdktf.stringToHclTerraform(this._nextHop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish_vpc: {
        value: cdktf.booleanToHclTerraform(this._publishVpc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_dest: {
        value: cdktf.stringToHclTerraform(this._routeDest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gateway_id: {
        value: cdktf.stringToHclTerraform(this._vpnGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
