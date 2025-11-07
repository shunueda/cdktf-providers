// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/router_interface_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterInterfaceConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/router_interface_connection#id RouterInterfaceConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/router_interface_connection#interface_id RouterInterfaceConnection#interface_id}
  */
  readonly interfaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/router_interface_connection#opposite_interface_id RouterInterfaceConnection#opposite_interface_id}
  */
  readonly oppositeInterfaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/router_interface_connection#opposite_interface_owner_id RouterInterfaceConnection#opposite_interface_owner_id}
  */
  readonly oppositeInterfaceOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/router_interface_connection#opposite_router_id RouterInterfaceConnection#opposite_router_id}
  */
  readonly oppositeRouterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/router_interface_connection#opposite_router_type RouterInterfaceConnection#opposite_router_type}
  */
  readonly oppositeRouterType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/router_interface_connection alicloud_router_interface_connection}
*/
export class RouterInterfaceConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_router_interface_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterInterfaceConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterInterfaceConnection to import
  * @param importFromId The id of the existing RouterInterfaceConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/router_interface_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterInterfaceConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_router_interface_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/router_interface_connection alicloud_router_interface_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterInterfaceConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: RouterInterfaceConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_router_interface_connection',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
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
    this._interfaceId = config.interfaceId;
    this._oppositeInterfaceId = config.oppositeInterfaceId;
    this._oppositeInterfaceOwnerId = config.oppositeInterfaceOwnerId;
    this._oppositeRouterId = config.oppositeRouterId;
    this._oppositeRouterType = config.oppositeRouterType;
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

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // opposite_interface_id - computed: false, optional: false, required: true
  private _oppositeInterfaceId?: string; 
  public get oppositeInterfaceId() {
    return this.getStringAttribute('opposite_interface_id');
  }
  public set oppositeInterfaceId(value: string) {
    this._oppositeInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeInterfaceIdInput() {
    return this._oppositeInterfaceId;
  }

  // opposite_interface_owner_id - computed: true, optional: true, required: false
  private _oppositeInterfaceOwnerId?: string; 
  public get oppositeInterfaceOwnerId() {
    return this.getStringAttribute('opposite_interface_owner_id');
  }
  public set oppositeInterfaceOwnerId(value: string) {
    this._oppositeInterfaceOwnerId = value;
  }
  public resetOppositeInterfaceOwnerId() {
    this._oppositeInterfaceOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeInterfaceOwnerIdInput() {
    return this._oppositeInterfaceOwnerId;
  }

  // opposite_router_id - computed: true, optional: true, required: false
  private _oppositeRouterId?: string; 
  public get oppositeRouterId() {
    return this.getStringAttribute('opposite_router_id');
  }
  public set oppositeRouterId(value: string) {
    this._oppositeRouterId = value;
  }
  public resetOppositeRouterId() {
    this._oppositeRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeRouterIdInput() {
    return this._oppositeRouterId;
  }

  // opposite_router_type - computed: false, optional: true, required: false
  private _oppositeRouterType?: string; 
  public get oppositeRouterType() {
    return this.getStringAttribute('opposite_router_type');
  }
  public set oppositeRouterType(value: string) {
    this._oppositeRouterType = value;
  }
  public resetOppositeRouterType() {
    this._oppositeRouterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeRouterTypeInput() {
    return this._oppositeRouterType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      opposite_interface_id: cdktf.stringToTerraform(this._oppositeInterfaceId),
      opposite_interface_owner_id: cdktf.stringToTerraform(this._oppositeInterfaceOwnerId),
      opposite_router_id: cdktf.stringToTerraform(this._oppositeRouterId),
      opposite_router_type: cdktf.stringToTerraform(this._oppositeRouterType),
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
      interface_id: {
        value: cdktf.stringToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opposite_interface_id: {
        value: cdktf.stringToHclTerraform(this._oppositeInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opposite_interface_owner_id: {
        value: cdktf.stringToHclTerraform(this._oppositeInterfaceOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opposite_router_id: {
        value: cdktf.stringToHclTerraform(this._oppositeRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opposite_router_type: {
        value: cdktf.stringToHclTerraform(this._oppositeRouterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
