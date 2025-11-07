// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/route_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/route_entry#destination_cidrblock RouteEntry#destination_cidrblock}
  */
  readonly destinationCidrblock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/route_entry#id RouteEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/route_entry#name RouteEntry#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/route_entry#nexthop_id RouteEntry#nexthop_id}
  */
  readonly nexthopId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/route_entry#nexthop_type RouteEntry#nexthop_type}
  */
  readonly nexthopType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/route_entry#route_table_id RouteEntry#route_table_id}
  */
  readonly routeTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/route_entry#router_id RouteEntry#router_id}
  */
  readonly routerId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/route_entry alibabacloudstack_route_entry}
*/
export class RouteEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_route_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouteEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouteEntry to import
  * @param importFromId The id of the existing RouteEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/route_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouteEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_route_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/route_entry alibabacloudstack_route_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteEntryConfig
  */
  public constructor(scope: Construct, id: string, config: RouteEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_route_entry',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationCidrblock = config.destinationCidrblock;
    this._id = config.id;
    this._name = config.name;
    this._nexthopId = config.nexthopId;
    this._nexthopType = config.nexthopType;
    this._routeTableId = config.routeTableId;
    this._routerId = config.routerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_cidrblock - computed: false, optional: true, required: false
  private _destinationCidrblock?: string; 
  public get destinationCidrblock() {
    return this.getStringAttribute('destination_cidrblock');
  }
  public set destinationCidrblock(value: string) {
    this._destinationCidrblock = value;
  }
  public resetDestinationCidrblock() {
    this._destinationCidrblock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrblockInput() {
    return this._destinationCidrblock;
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

  // name - computed: false, optional: true, required: false
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

  // nexthop_id - computed: false, optional: true, required: false
  private _nexthopId?: string; 
  public get nexthopId() {
    return this.getStringAttribute('nexthop_id');
  }
  public set nexthopId(value: string) {
    this._nexthopId = value;
  }
  public resetNexthopId() {
    this._nexthopId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopIdInput() {
    return this._nexthopId;
  }

  // nexthop_type - computed: false, optional: true, required: false
  private _nexthopType?: string; 
  public get nexthopType() {
    return this.getStringAttribute('nexthop_type');
  }
  public set nexthopType(value: string) {
    this._nexthopType = value;
  }
  public resetNexthopType() {
    this._nexthopType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopTypeInput() {
    return this._nexthopType;
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

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_cidrblock: cdktf.stringToTerraform(this._destinationCidrblock),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nexthop_id: cdktf.stringToTerraform(this._nexthopId),
      nexthop_type: cdktf.stringToTerraform(this._nexthopType),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      router_id: cdktf.stringToTerraform(this._routerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_cidrblock: {
        value: cdktf.stringToHclTerraform(this._destinationCidrblock),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop_id: {
        value: cdktf.stringToHclTerraform(this._nexthopId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop_type: {
        value: cdktf.stringToHclTerraform(this._nexthopType),
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
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
