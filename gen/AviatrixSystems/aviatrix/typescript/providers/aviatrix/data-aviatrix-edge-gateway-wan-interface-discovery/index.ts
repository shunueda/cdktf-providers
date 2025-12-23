// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/data-sources/edge_gateway_wan_interface_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviatrixEdgeGatewayWanInterfaceDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge gateway name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/data-sources/edge_gateway_wan_interface_discovery#gw_name DataAviatrixEdgeGatewayWanInterfaceDiscovery#gw_name}
  */
  readonly gwName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/data-sources/edge_gateway_wan_interface_discovery#id DataAviatrixEdgeGatewayWanInterfaceDiscovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the WAN interface to be discovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/data-sources/edge_gateway_wan_interface_discovery#wan_interface_name DataAviatrixEdgeGatewayWanInterfaceDiscovery#wan_interface_name}
  */
  readonly wanInterfaceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/data-sources/edge_gateway_wan_interface_discovery aviatrix_edge_gateway_wan_interface_discovery}
*/
export class DataAviatrixEdgeGatewayWanInterfaceDiscovery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_edge_gateway_wan_interface_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviatrixEdgeGatewayWanInterfaceDiscovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviatrixEdgeGatewayWanInterfaceDiscovery to import
  * @param importFromId The id of the existing DataAviatrixEdgeGatewayWanInterfaceDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/data-sources/edge_gateway_wan_interface_discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviatrixEdgeGatewayWanInterfaceDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_edge_gateway_wan_interface_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/data-sources/edge_gateway_wan_interface_discovery aviatrix_edge_gateway_wan_interface_discovery} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviatrixEdgeGatewayWanInterfaceDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAviatrixEdgeGatewayWanInterfaceDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_edge_gateway_wan_interface_discovery',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gwName = config.gwName;
    this._id = config.id;
    this._wanInterfaceName = config.wanInterfaceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gw_name - computed: false, optional: false, required: true
  private _gwName?: string; 
  public get gwName() {
    return this.getStringAttribute('gw_name');
  }
  public set gwName(value: string) {
    this._gwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwNameInput() {
    return this._gwName;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // wan_interface_name - computed: false, optional: false, required: true
  private _wanInterfaceName?: string; 
  public get wanInterfaceName() {
    return this.getStringAttribute('wan_interface_name');
  }
  public set wanInterfaceName(value: string) {
    this._wanInterfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wanInterfaceNameInput() {
    return this._wanInterfaceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gw_name: cdktf.stringToTerraform(this._gwName),
      id: cdktf.stringToTerraform(this._id),
      wan_interface_name: cdktf.stringToTerraform(this._wanInterfaceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gw_name: {
        value: cdktf.stringToHclTerraform(this._gwName),
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
      wan_interface_name: {
        value: cdktf.stringToHclTerraform(this._wanInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
