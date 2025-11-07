// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_route_propagation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualGatewayRoutePropagationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_route_propagation#enable VirtualGatewayRoutePropagation#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_route_propagation#id VirtualGatewayRoutePropagation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_route_propagation#route_table_id VirtualGatewayRoutePropagation#route_table_id}
  */
  readonly routeTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_route_propagation#virtual_gateway_id VirtualGatewayRoutePropagation#virtual_gateway_id}
  */
  readonly virtualGatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_route_propagation outscale_virtual_gateway_route_propagation}
*/
export class VirtualGatewayRoutePropagation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_virtual_gateway_route_propagation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualGatewayRoutePropagation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualGatewayRoutePropagation to import
  * @param importFromId The id of the existing VirtualGatewayRoutePropagation that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_route_propagation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualGatewayRoutePropagation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_virtual_gateway_route_propagation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/virtual_gateway_route_propagation outscale_virtual_gateway_route_propagation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualGatewayRoutePropagationConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualGatewayRoutePropagationConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_virtual_gateway_route_propagation',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enable = config.enable;
    this._id = config.id;
    this._routeTableId = config.routeTableId;
    this._virtualGatewayId = config.virtualGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // virtual_gateway_id - computed: false, optional: false, required: true
  private _virtualGatewayId?: string; 
  public get virtualGatewayId() {
    return this.getStringAttribute('virtual_gateway_id');
  }
  public set virtualGatewayId(value: string) {
    this._virtualGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualGatewayIdInput() {
    return this._virtualGatewayId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.booleanToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      virtual_gateway_id: cdktf.stringToTerraform(this._virtualGatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
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
      route_table_id: {
        value: cdktf.stringToHclTerraform(this._routeTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_gateway_id: {
        value: cdktf.stringToHclTerraform(this._virtualGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
