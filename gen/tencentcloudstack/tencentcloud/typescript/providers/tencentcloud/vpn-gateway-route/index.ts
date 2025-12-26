// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpn_gateway_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnGatewayRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination IDC IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpn_gateway_route#destination_cidr_block VpnGatewayRoute#destination_cidr_block}
  */
  readonly destinationCidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpn_gateway_route#id VpnGatewayRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID of the next hop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpn_gateway_route#instance_id VpnGatewayRoute#instance_id}
  */
  readonly instanceId: string;
  /**
  * Next hop type (type of the associated instance). Valid values: VPNCONN (VPN tunnel) and CCN (CCN instance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpn_gateway_route#instance_type VpnGatewayRoute#instance_type}
  */
  readonly instanceType: string;
  /**
  * Priority. Valid values: 0 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpn_gateway_route#priority VpnGatewayRoute#priority}
  */
  readonly priority: number;
  /**
  * Status. Valid values: ENABLE and DISABLE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpn_gateway_route#status VpnGatewayRoute#status}
  */
  readonly status: string;
  /**
  * VPN gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpn_gateway_route#vpn_gateway_id VpnGatewayRoute#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpn_gateway_route tencentcloud_vpn_gateway_route}
*/
export class VpnGatewayRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpn_gateway_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnGatewayRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnGatewayRoute to import
  * @param importFromId The id of the existing VpnGatewayRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpn_gateway_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnGatewayRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpn_gateway_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpn_gateway_route tencentcloud_vpn_gateway_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnGatewayRouteConfig
  */
  public constructor(scope: Construct, id: string, config: VpnGatewayRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpn_gateway_route',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceType = config.instanceType;
    this._priority = config.priority;
    this._status = config.status;
    this._vpnGatewayId = config.vpnGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // destination_cidr_block - computed: false, optional: false, required: true
  private _destinationCidrBlock?: string; 
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // route_id - computed: true, optional: false, required: false
  public get routeId() {
    return this.getStringAttribute('route_id');
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      priority: cdktf.numberToTerraform(this._priority),
      status: cdktf.stringToTerraform(this._status),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_cidr_block: {
        value: cdktf.stringToHclTerraform(this._destinationCidrBlock),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
