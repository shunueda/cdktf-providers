// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_connect_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenTransitRouterConnectAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_connect_attachment#cen_id CenTransitRouterConnectAttachment#cen_id}
  */
  readonly cenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_connect_attachment#id CenTransitRouterConnectAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_connect_attachment#transit_router_attachment_name CenTransitRouterConnectAttachment#transit_router_attachment_name}
  */
  readonly transitRouterAttachmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_connect_attachment#transit_router_id CenTransitRouterConnectAttachment#transit_router_id}
  */
  readonly transitRouterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_connect_attachment alibabacloudstack_cen_transit_router_connect_attachment}
*/
export class CenTransitRouterConnectAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cen_transit_router_connect_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenTransitRouterConnectAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenTransitRouterConnectAttachment to import
  * @param importFromId The id of the existing CenTransitRouterConnectAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_connect_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenTransitRouterConnectAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cen_transit_router_connect_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cen_transit_router_connect_attachment alibabacloudstack_cen_transit_router_connect_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenTransitRouterConnectAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CenTransitRouterConnectAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cen_transit_router_connect_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cenId = config.cenId;
    this._id = config.id;
    this._transitRouterAttachmentName = config.transitRouterAttachmentName;
    this._transitRouterId = config.transitRouterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cen_id - computed: false, optional: false, required: true
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_owner_id - computed: true, optional: false, required: false
  public get resourceOwnerId() {
    return this.getNumberAttribute('resource_owner_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_attachment_id - computed: true, optional: false, required: false
  public get transitRouterAttachmentId() {
    return this.getStringAttribute('transit_router_attachment_id');
  }

  // transit_router_attachment_name - computed: false, optional: true, required: false
  private _transitRouterAttachmentName?: string; 
  public get transitRouterAttachmentName() {
    return this.getStringAttribute('transit_router_attachment_name');
  }
  public set transitRouterAttachmentName(value: string) {
    this._transitRouterAttachmentName = value;
  }
  public resetTransitRouterAttachmentName() {
    this._transitRouterAttachmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterAttachmentNameInput() {
    return this._transitRouterAttachmentName;
  }

  // transit_router_id - computed: false, optional: false, required: true
  private _transitRouterId?: string; 
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }
  public set transitRouterId(value: string) {
    this._transitRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterIdInput() {
    return this._transitRouterId;
  }

  // transport_type - computed: true, optional: false, required: false
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cen_id: cdktf.stringToTerraform(this._cenId),
      id: cdktf.stringToTerraform(this._id),
      transit_router_attachment_name: cdktf.stringToTerraform(this._transitRouterAttachmentName),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
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
      transit_router_attachment_name: {
        value: cdktf.stringToHclTerraform(this._transitRouterAttachmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
