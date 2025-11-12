// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_edgegateway_service_engine_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtAlbEdgegatewayServiceEngineGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge Gateway ID in which ALB Service Engine Group should be located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_edgegateway_service_engine_group#edge_gateway_id NsxtAlbEdgegatewayServiceEngineGroup#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_edgegateway_service_engine_group#id NsxtAlbEdgegatewayServiceEngineGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of virtual services to be used in this Service Engine Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_edgegateway_service_engine_group#max_virtual_services NsxtAlbEdgegatewayServiceEngineGroup#max_virtual_services}
  */
  readonly maxVirtualServices?: number;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_edgegateway_service_engine_group#org NsxtAlbEdgegatewayServiceEngineGroup#org}
  */
  readonly org?: string;
  /**
  * Number of reserved virtual services for this Service Engine Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_edgegateway_service_engine_group#reserved_virtual_services NsxtAlbEdgegatewayServiceEngineGroup#reserved_virtual_services}
  */
  readonly reservedVirtualServices?: string;
  /**
  * Service Engine Group ID to attach to this NSX-T Edge Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_edgegateway_service_engine_group#service_engine_group_id NsxtAlbEdgegatewayServiceEngineGroup#service_engine_group_id}
  */
  readonly serviceEngineGroupId: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_edgegateway_service_engine_group#vdc NsxtAlbEdgegatewayServiceEngineGroup#vdc}
  */
  readonly vdc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_edgegateway_service_engine_group vcd_nsxt_alb_edgegateway_service_engine_group}
*/
export class NsxtAlbEdgegatewayServiceEngineGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_alb_edgegateway_service_engine_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtAlbEdgegatewayServiceEngineGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtAlbEdgegatewayServiceEngineGroup to import
  * @param importFromId The id of the existing NsxtAlbEdgegatewayServiceEngineGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_edgegateway_service_engine_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtAlbEdgegatewayServiceEngineGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_alb_edgegateway_service_engine_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_edgegateway_service_engine_group vcd_nsxt_alb_edgegateway_service_engine_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtAlbEdgegatewayServiceEngineGroupConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtAlbEdgegatewayServiceEngineGroupConfig) {
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
    this._maxVirtualServices = config.maxVirtualServices;
    this._org = config.org;
    this._reservedVirtualServices = config.reservedVirtualServices;
    this._serviceEngineGroupId = config.serviceEngineGroupId;
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

  // max_virtual_services - computed: true, optional: true, required: false
  private _maxVirtualServices?: number; 
  public get maxVirtualServices() {
    return this.getNumberAttribute('max_virtual_services');
  }
  public set maxVirtualServices(value: number) {
    this._maxVirtualServices = value;
  }
  public resetMaxVirtualServices() {
    this._maxVirtualServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVirtualServicesInput() {
    return this._maxVirtualServices;
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

  // reserved_virtual_services - computed: true, optional: true, required: false
  private _reservedVirtualServices?: string; 
  public get reservedVirtualServices() {
    return this.getStringAttribute('reserved_virtual_services');
  }
  public set reservedVirtualServices(value: string) {
    this._reservedVirtualServices = value;
  }
  public resetReservedVirtualServices() {
    this._reservedVirtualServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedVirtualServicesInput() {
    return this._reservedVirtualServices;
  }

  // service_engine_group_id - computed: false, optional: false, required: true
  private _serviceEngineGroupId?: string; 
  public get serviceEngineGroupId() {
    return this.getStringAttribute('service_engine_group_id');
  }
  public set serviceEngineGroupId(value: string) {
    this._serviceEngineGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEngineGroupIdInput() {
    return this._serviceEngineGroupId;
  }

  // service_engine_group_name - computed: true, optional: false, required: false
  public get serviceEngineGroupName() {
    return this.getStringAttribute('service_engine_group_name');
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
      max_virtual_services: cdktf.numberToTerraform(this._maxVirtualServices),
      org: cdktf.stringToTerraform(this._org),
      reserved_virtual_services: cdktf.stringToTerraform(this._reservedVirtualServices),
      service_engine_group_id: cdktf.stringToTerraform(this._serviceEngineGroupId),
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
      max_virtual_services: {
        value: cdktf.numberToHclTerraform(this._maxVirtualServices),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_virtual_services: {
        value: cdktf.stringToHclTerraform(this._reservedVirtualServices),
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
