// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_table_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackCenTransitRouterRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_table_association#id ApsarastackCenTransitRouterRouteTableAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the transit router attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_table_association#transit_router_attachment_id ApsarastackCenTransitRouterRouteTableAssociation#transit_router_attachment_id}
  */
  readonly transitRouterAttachmentId: string;
  /**
  * The ID of the transit router route table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_table_association#transit_router_route_table_id ApsarastackCenTransitRouterRouteTableAssociation#transit_router_route_table_id}
  */
  readonly transitRouterRouteTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_table_association apsarastack_cen_transit_router_route_table_association}
*/
export class ApsarastackCenTransitRouterRouteTableAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_cen_transit_router_route_table_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackCenTransitRouterRouteTableAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackCenTransitRouterRouteTableAssociation to import
  * @param importFromId The id of the existing ApsarastackCenTransitRouterRouteTableAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_table_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackCenTransitRouterRouteTableAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_cen_transit_router_route_table_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_transit_router_route_table_association apsarastack_cen_transit_router_route_table_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackCenTransitRouterRouteTableAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackCenTransitRouterRouteTableAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_cen_transit_router_route_table_association',
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
    this._transitRouterAttachmentId = config.transitRouterAttachmentId;
    this._transitRouterRouteTableId = config.transitRouterRouteTableId;
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

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_attachment_id - computed: false, optional: false, required: true
  private _transitRouterAttachmentId?: string; 
  public get transitRouterAttachmentId() {
    return this.getStringAttribute('transit_router_attachment_id');
  }
  public set transitRouterAttachmentId(value: string) {
    this._transitRouterAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterAttachmentIdInput() {
    return this._transitRouterAttachmentId;
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
      transit_router_attachment_id: cdktf.stringToTerraform(this._transitRouterAttachmentId),
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
      transit_router_attachment_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterAttachmentId),
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
