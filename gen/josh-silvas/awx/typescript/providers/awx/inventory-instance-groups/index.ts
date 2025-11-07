// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_instance_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InventoryInstanceGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_instance_groups#id InventoryInstanceGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the instance group to associate with the inventory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_instance_groups#instance_group_id InventoryInstanceGroups#instance_group_id}
  */
  readonly instanceGroupId: number;
  /**
  * The ID of the inventory to associate the instance group with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_instance_groups#inventory_id InventoryInstanceGroups#inventory_id}
  */
  readonly inventoryId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_instance_groups awx_inventory_instance_groups}
*/
export class InventoryInstanceGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_inventory_instance_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InventoryInstanceGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InventoryInstanceGroups to import
  * @param importFromId The id of the existing InventoryInstanceGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_instance_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InventoryInstanceGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_inventory_instance_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_instance_groups awx_inventory_instance_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InventoryInstanceGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: InventoryInstanceGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_inventory_instance_groups',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '1.7.5'
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
    this._instanceGroupId = config.instanceGroupId;
    this._inventoryId = config.inventoryId;
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

  // instance_group_id - computed: false, optional: false, required: true
  private _instanceGroupId?: number; 
  public get instanceGroupId() {
    return this.getNumberAttribute('instance_group_id');
  }
  public set instanceGroupId(value: number) {
    this._instanceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupIdInput() {
    return this._instanceGroupId;
  }

  // inventory_id - computed: false, optional: false, required: true
  private _inventoryId?: number; 
  public get inventoryId() {
    return this.getNumberAttribute('inventory_id');
  }
  public set inventoryId(value: number) {
    this._inventoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryIdInput() {
    return this._inventoryId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_group_id: cdktf.numberToTerraform(this._instanceGroupId),
      inventory_id: cdktf.numberToTerraform(this._inventoryId),
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
      instance_group_id: {
        value: cdktf.numberToHclTerraform(this._instanceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inventory_id: {
        value: cdktf.numberToHclTerraform(this._inventoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
