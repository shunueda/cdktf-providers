// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackCenTransitRouterRouteEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_entry#id ApsarastackCenTransitRouterRouteEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Description of the route entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_entry#transit_router_route_entry_description ApsarastackCenTransitRouterRouteEntry#transit_router_route_entry_description}
  */
  readonly transitRouterRouteEntryDescription?: string;
  /**
  * Destination CIDR block of the route entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_entry#transit_router_route_entry_destination_cidr_block ApsarastackCenTransitRouterRouteEntry#transit_router_route_entry_destination_cidr_block}
  */
  readonly transitRouterRouteEntryDestinationCidrBlock: string;
  /**
  * Name of the route entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_entry#transit_router_route_entry_name ApsarastackCenTransitRouterRouteEntry#transit_router_route_entry_name}
  */
  readonly transitRouterRouteEntryName?: string;
  /**
  * Next hop ID of the route entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_entry#transit_router_route_entry_next_hop_id ApsarastackCenTransitRouterRouteEntry#transit_router_route_entry_next_hop_id}
  */
  readonly transitRouterRouteEntryNextHopId?: string;
  /**
  * Next hop type of the route entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_entry#transit_router_route_entry_next_hop_type ApsarastackCenTransitRouterRouteEntry#transit_router_route_entry_next_hop_type}
  */
  readonly transitRouterRouteEntryNextHopType: string;
  /**
  * ID of the route table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_entry#transit_router_route_table_id ApsarastackCenTransitRouterRouteEntry#transit_router_route_table_id}
  */
  readonly transitRouterRouteTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_entry apsarastack_cen_transit_router_route_entry}
*/
export class ApsarastackCenTransitRouterRouteEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_cen_transit_router_route_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackCenTransitRouterRouteEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackCenTransitRouterRouteEntry to import
  * @param importFromId The id of the existing ApsarastackCenTransitRouterRouteEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackCenTransitRouterRouteEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_cen_transit_router_route_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_entry apsarastack_cen_transit_router_route_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackCenTransitRouterRouteEntryConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackCenTransitRouterRouteEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_cen_transit_router_route_entry',
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
    this._transitRouterRouteEntryDescription = config.transitRouterRouteEntryDescription;
    this._transitRouterRouteEntryDestinationCidrBlock = config.transitRouterRouteEntryDestinationCidrBlock;
    this._transitRouterRouteEntryName = config.transitRouterRouteEntryName;
    this._transitRouterRouteEntryNextHopId = config.transitRouterRouteEntryNextHopId;
    this._transitRouterRouteEntryNextHopType = config.transitRouterRouteEntryNextHopType;
    this._transitRouterRouteTableId = config.transitRouterRouteTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // operational_mode - computed: true, optional: false, required: false
  public get operationalMode() {
    return this.getBooleanAttribute('operational_mode');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_route_entry_description - computed: false, optional: true, required: false
  private _transitRouterRouteEntryDescription?: string; 
  public get transitRouterRouteEntryDescription() {
    return this.getStringAttribute('transit_router_route_entry_description');
  }
  public set transitRouterRouteEntryDescription(value: string) {
    this._transitRouterRouteEntryDescription = value;
  }
  public resetTransitRouterRouteEntryDescription() {
    this._transitRouterRouteEntryDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteEntryDescriptionInput() {
    return this._transitRouterRouteEntryDescription;
  }

  // transit_router_route_entry_destination_cidr_block - computed: false, optional: false, required: true
  private _transitRouterRouteEntryDestinationCidrBlock?: string; 
  public get transitRouterRouteEntryDestinationCidrBlock() {
    return this.getStringAttribute('transit_router_route_entry_destination_cidr_block');
  }
  public set transitRouterRouteEntryDestinationCidrBlock(value: string) {
    this._transitRouterRouteEntryDestinationCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteEntryDestinationCidrBlockInput() {
    return this._transitRouterRouteEntryDestinationCidrBlock;
  }

  // transit_router_route_entry_id - computed: true, optional: false, required: false
  public get transitRouterRouteEntryId() {
    return this.getStringAttribute('transit_router_route_entry_id');
  }

  // transit_router_route_entry_name - computed: false, optional: true, required: false
  private _transitRouterRouteEntryName?: string; 
  public get transitRouterRouteEntryName() {
    return this.getStringAttribute('transit_router_route_entry_name');
  }
  public set transitRouterRouteEntryName(value: string) {
    this._transitRouterRouteEntryName = value;
  }
  public resetTransitRouterRouteEntryName() {
    this._transitRouterRouteEntryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteEntryNameInput() {
    return this._transitRouterRouteEntryName;
  }

  // transit_router_route_entry_next_hop_id - computed: false, optional: true, required: false
  private _transitRouterRouteEntryNextHopId?: string; 
  public get transitRouterRouteEntryNextHopId() {
    return this.getStringAttribute('transit_router_route_entry_next_hop_id');
  }
  public set transitRouterRouteEntryNextHopId(value: string) {
    this._transitRouterRouteEntryNextHopId = value;
  }
  public resetTransitRouterRouteEntryNextHopId() {
    this._transitRouterRouteEntryNextHopId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteEntryNextHopIdInput() {
    return this._transitRouterRouteEntryNextHopId;
  }

  // transit_router_route_entry_next_hop_type - computed: false, optional: false, required: true
  private _transitRouterRouteEntryNextHopType?: string; 
  public get transitRouterRouteEntryNextHopType() {
    return this.getStringAttribute('transit_router_route_entry_next_hop_type');
  }
  public set transitRouterRouteEntryNextHopType(value: string) {
    this._transitRouterRouteEntryNextHopType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteEntryNextHopTypeInput() {
    return this._transitRouterRouteEntryNextHopType;
  }

  // transit_router_route_entry_type - computed: true, optional: false, required: false
  public get transitRouterRouteEntryType() {
    return this.getStringAttribute('transit_router_route_entry_type');
  }

  // transit_router_route_table_id - computed: false, optional: false, required: true
  private _transitRouterRouteTableId?: string; 
  public get transitRouterRouteTableId() {
    return this.getStringAttribute('transit_router_route_table_id');
  }
  public set transitRouterRouteTableId(value: string) {
    this._transitRouterRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteTableIdInput() {
    return this._transitRouterRouteTableId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      transit_router_route_entry_description: cdktf.stringToTerraform(this._transitRouterRouteEntryDescription),
      transit_router_route_entry_destination_cidr_block: cdktf.stringToTerraform(this._transitRouterRouteEntryDestinationCidrBlock),
      transit_router_route_entry_name: cdktf.stringToTerraform(this._transitRouterRouteEntryName),
      transit_router_route_entry_next_hop_id: cdktf.stringToTerraform(this._transitRouterRouteEntryNextHopId),
      transit_router_route_entry_next_hop_type: cdktf.stringToTerraform(this._transitRouterRouteEntryNextHopType),
      transit_router_route_table_id: cdktf.stringToTerraform(this._transitRouterRouteTableId),
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
      transit_router_route_entry_description: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteEntryDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_entry_destination_cidr_block: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteEntryDestinationCidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_entry_name: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_entry_next_hop_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteEntryNextHopId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_entry_next_hop_type: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteEntryNextHopType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_table_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
