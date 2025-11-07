// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpn_pbr_route_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpngatewayVpnPbrRouteEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpn_pbr_route_entry#id VpngatewayVpnPbrRouteEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpn_pbr_route_entry#next_hop VpngatewayVpnPbrRouteEntry#next_hop}
  */
  readonly nextHop: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpn_pbr_route_entry#overlay_mode VpngatewayVpnPbrRouteEntry#overlay_mode}
  */
  readonly overlayMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpn_pbr_route_entry#publish_vpc VpngatewayVpnPbrRouteEntry#publish_vpc}
  */
  readonly publishVpc: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpn_pbr_route_entry#route_dest VpngatewayVpnPbrRouteEntry#route_dest}
  */
  readonly routeDest: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpn_pbr_route_entry#route_source VpngatewayVpnPbrRouteEntry#route_source}
  */
  readonly routeSource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpn_pbr_route_entry#vpn_gateway_id VpngatewayVpnPbrRouteEntry#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpn_pbr_route_entry#weight VpngatewayVpnPbrRouteEntry#weight}
  */
  readonly weight: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpn_pbr_route_entry alibabacloudstack_vpngateway_vpn_pbr_route_entry}
*/
export class VpngatewayVpnPbrRouteEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_vpngateway_vpn_pbr_route_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpngatewayVpnPbrRouteEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpngatewayVpnPbrRouteEntry to import
  * @param importFromId The id of the existing VpngatewayVpnPbrRouteEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpn_pbr_route_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpngatewayVpnPbrRouteEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_vpngateway_vpn_pbr_route_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpn_pbr_route_entry alibabacloudstack_vpngateway_vpn_pbr_route_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpngatewayVpnPbrRouteEntryConfig
  */
  public constructor(scope: Construct, id: string, config: VpngatewayVpnPbrRouteEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_vpngateway_vpn_pbr_route_entry',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
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
    this._overlayMode = config.overlayMode;
    this._publishVpc = config.publishVpc;
    this._routeDest = config.routeDest;
    this._routeSource = config.routeSource;
    this._vpnGatewayId = config.vpnGatewayId;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
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

  // overlay_mode - computed: false, optional: true, required: false
  private _overlayMode?: string; 
  public get overlayMode() {
    return this.getStringAttribute('overlay_mode');
  }
  public set overlayMode(value: string) {
    this._overlayMode = value;
  }
  public resetOverlayMode() {
    this._overlayMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayModeInput() {
    return this._overlayMode;
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

  // route_source - computed: false, optional: false, required: true
  private _routeSource?: string; 
  public get routeSource() {
    return this.getStringAttribute('route_source');
  }
  public set routeSource(value: string) {
    this._routeSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSourceInput() {
    return this._routeSource;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
      overlay_mode: cdktf.stringToTerraform(this._overlayMode),
      publish_vpc: cdktf.booleanToTerraform(this._publishVpc),
      route_dest: cdktf.stringToTerraform(this._routeDest),
      route_source: cdktf.stringToTerraform(this._routeSource),
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
      overlay_mode: {
        value: cdktf.stringToHclTerraform(this._overlayMode),
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
      route_source: {
        value: cdktf.stringToHclTerraform(this._routeSource),
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
