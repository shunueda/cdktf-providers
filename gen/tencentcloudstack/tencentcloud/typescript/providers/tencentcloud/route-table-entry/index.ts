// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/route_table_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteTableEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the routing table entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/route_table_entry#description RouteTableEntry#description}
  */
  readonly description?: string;
  /**
  * Destination address block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/route_table_entry#destination_cidr_block RouteTableEntry#destination_cidr_block}
  */
  readonly destinationCidrBlock: string;
  /**
  * Whether the entry is disabled, default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/route_table_entry#disabled RouteTableEntry#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/route_table_entry#id RouteTableEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of next-hop gateway. Note: when `next_type` is EIP, `next_hub` should be `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/route_table_entry#next_hub RouteTableEntry#next_hub}
  */
  readonly nextHub: string;
  /**
  * Type of next-hop. Valid values: `CVM`, `VPN`, `DIRECTCONNECT`, `PEERCONNECTION`, `HAVIP`, `NAT`, `NORMAL_CVM`, `EIP`, `LOCAL_GATEWAY`, `INTRANAT` and `USER_CCN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/route_table_entry#next_type RouteTableEntry#next_type}
  */
  readonly nextType: string;
  /**
  * ID of routing table to which this entry belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/route_table_entry#route_table_id RouteTableEntry#route_table_id}
  */
  readonly routeTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/route_table_entry tencentcloud_route_table_entry}
*/
export class RouteTableEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_route_table_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouteTableEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouteTableEntry to import
  * @param importFromId The id of the existing RouteTableEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/route_table_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouteTableEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_route_table_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/route_table_entry tencentcloud_route_table_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteTableEntryConfig
  */
  public constructor(scope: Construct, id: string, config: RouteTableEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_route_table_entry',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._disabled = config.disabled;
    this._id = config.id;
    this._nextHub = config.nextHub;
    this._nextType = config.nextType;
    this._routeTableId = config.routeTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_cidr_block - computed: false, optional: false, required: true
  private _destinationCidrBlock?: string; 
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // next_hub - computed: false, optional: false, required: true
  private _nextHub?: string; 
  public get nextHub() {
    return this.getStringAttribute('next_hub');
  }
  public set nextHub(value: string) {
    this._nextHub = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHubInput() {
    return this._nextHub;
  }

  // next_type - computed: false, optional: false, required: true
  private _nextType?: string; 
  public get nextType() {
    return this.getStringAttribute('next_type');
  }
  public set nextType(value: string) {
    this._nextType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextTypeInput() {
    return this._nextType;
  }

  // route_item_id - computed: true, optional: false, required: false
  public get routeItemId() {
    return this.getStringAttribute('route_item_id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      next_hub: cdktf.stringToTerraform(this._nextHub),
      next_type: cdktf.stringToTerraform(this._nextType),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_cidr_block: {
        value: cdktf.stringToHclTerraform(this._destinationCidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      next_hub: {
        value: cdktf.stringToHclTerraform(this._nextHub),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_type: {
        value: cdktf.stringToHclTerraform(this._nextType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
