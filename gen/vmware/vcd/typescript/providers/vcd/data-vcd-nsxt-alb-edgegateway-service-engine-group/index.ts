// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_edgegateway_service_engine_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtAlbEdgegatewayServiceEngineGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge Gateway ID in which ALB Service Engine Group should be located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_edgegateway_service_engine_group#edge_gateway_id DataVcdNsxtAlbEdgegatewayServiceEngineGroup#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_edgegateway_service_engine_group#id DataVcdNsxtAlbEdgegatewayServiceEngineGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_edgegateway_service_engine_group#org DataVcdNsxtAlbEdgegatewayServiceEngineGroup#org}
  */
  readonly org?: string;
  /**
  * Service Engine Group ID which is attached to NSX-T Edge Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_edgegateway_service_engine_group#service_engine_group_id DataVcdNsxtAlbEdgegatewayServiceEngineGroup#service_engine_group_id}
  */
  readonly serviceEngineGroupId?: string;
  /**
  * Service Engine Group Name which is attached to NSX-T Edge Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_edgegateway_service_engine_group#service_engine_group_name DataVcdNsxtAlbEdgegatewayServiceEngineGroup#service_engine_group_name}
  */
  readonly serviceEngineGroupName?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_edgegateway_service_engine_group#vdc DataVcdNsxtAlbEdgegatewayServiceEngineGroup#vdc}
  */
  readonly vdc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_edgegateway_service_engine_group vcd_nsxt_alb_edgegateway_service_engine_group}
*/
export class DataVcdNsxtAlbEdgegatewayServiceEngineGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_alb_edgegateway_service_engine_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtAlbEdgegatewayServiceEngineGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtAlbEdgegatewayServiceEngineGroup to import
  * @param importFromId The id of the existing DataVcdNsxtAlbEdgegatewayServiceEngineGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_edgegateway_service_engine_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtAlbEdgegatewayServiceEngineGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_alb_edgegateway_service_engine_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_edgegateway_service_engine_group vcd_nsxt_alb_edgegateway_service_engine_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtAlbEdgegatewayServiceEngineGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtAlbEdgegatewayServiceEngineGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_alb_edgegateway_service_engine_group',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeGatewayId = config.edgeGatewayId;
    this._id = config.id;
    this._org = config.org;
    this._serviceEngineGroupId = config.serviceEngineGroupId;
    this._serviceEngineGroupName = config.serviceEngineGroupName;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployed_virtual_services - computed: true, optional: false, required: false
  public get deployedVirtualServices() {
    return this.getNumberAttribute('deployed_virtual_services');
  }

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
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

  // max_virtual_services - computed: true, optional: false, required: false
  public get maxVirtualServices() {
    return this.getNumberAttribute('max_virtual_services');
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // reserved_virtual_services - computed: true, optional: false, required: false
  public get reservedVirtualServices() {
    return this.getStringAttribute('reserved_virtual_services');
  }

  // service_engine_group_id - computed: true, optional: true, required: false
  private _serviceEngineGroupId?: string; 
  public get serviceEngineGroupId() {
    return this.getStringAttribute('service_engine_group_id');
  }
  public set serviceEngineGroupId(value: string) {
    this._serviceEngineGroupId = value;
  }
  public resetServiceEngineGroupId() {
    this._serviceEngineGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEngineGroupIdInput() {
    return this._serviceEngineGroupId;
  }

  // service_engine_group_name - computed: true, optional: true, required: false
  private _serviceEngineGroupName?: string; 
  public get serviceEngineGroupName() {
    return this.getStringAttribute('service_engine_group_name');
  }
  public set serviceEngineGroupName(value: string) {
    this._serviceEngineGroupName = value;
  }
  public resetServiceEngineGroupName() {
    this._serviceEngineGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEngineGroupNameInput() {
    return this._serviceEngineGroupName;
  }

  // vdc - computed: true, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      id: cdktf.stringToTerraform(this._id),
      org: cdktf.stringToTerraform(this._org),
      service_engine_group_id: cdktf.stringToTerraform(this._serviceEngineGroupId),
      service_engine_group_name: cdktf.stringToTerraform(this._serviceEngineGroupName),
      vdc: cdktf.stringToTerraform(this._vdc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_engine_group_id: {
        value: cdktf.stringToHclTerraform(this._serviceEngineGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_engine_group_name: {
        value: cdktf.stringToHclTerraform(this._serviceEngineGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
