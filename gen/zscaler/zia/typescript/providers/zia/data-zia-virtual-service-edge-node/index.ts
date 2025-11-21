// https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/virtual_service_edge_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaVirtualServiceEdgeNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * System-generated Virtual Service Edge cluster ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/virtual_service_edge_node#id DataZiaVirtualServiceEdgeNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Name of the Virtual Service Edge cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/virtual_service_edge_node#name DataZiaVirtualServiceEdgeNode#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/virtual_service_edge_node zia_virtual_service_edge_node}
*/
export class DataZiaVirtualServiceEdgeNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_virtual_service_edge_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaVirtualServiceEdgeNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaVirtualServiceEdgeNode to import
  * @param importFromId The id of the existing DataZiaVirtualServiceEdgeNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/virtual_service_edge_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaVirtualServiceEdgeNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_virtual_service_edge_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/data-sources/virtual_service_edge_node zia_virtual_service_edge_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaVirtualServiceEdgeNodeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaVirtualServiceEdgeNodeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_virtual_service_edge_node',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.2',
        providerVersionConstraint: '4.6.2'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // default_gateway - computed: true, optional: false, required: false
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }

  // deployment_mode - computed: true, optional: false, required: false
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }

  // establish_support_tunnel_enabled - computed: true, optional: false, required: false
  public get establishSupportTunnelEnabled() {
    return this.getBooleanAttribute('establish_support_tunnel_enabled');
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // in_production - computed: true, optional: false, required: false
  public get inProduction() {
    return this.getBooleanAttribute('in_production');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_sec_enabled - computed: true, optional: false, required: false
  public get ipSecEnabled() {
    return this.getBooleanAttribute('ip_sec_enabled');
  }

  // load_balancer_ip_address - computed: true, optional: false, required: false
  public get loadBalancerIpAddress() {
    return this.getStringAttribute('load_balancer_ip_address');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_demand_support_tunnel_enabled - computed: true, optional: false, required: false
  public get onDemandSupportTunnelEnabled() {
    return this.getBooleanAttribute('on_demand_support_tunnel_enabled');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vzen_sku_type - computed: true, optional: false, required: false
  public get vzenSkuType() {
    return this.getStringAttribute('vzen_sku_type');
  }

  // zgateway_id - computed: true, optional: false, required: false
  public get zgatewayId() {
    return this.getNumberAttribute('zgateway_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
