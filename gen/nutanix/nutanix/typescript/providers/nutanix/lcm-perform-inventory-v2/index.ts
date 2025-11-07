// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_perform_inventory_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LcmPerformInventoryV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_perform_inventory_v2#id LcmPerformInventoryV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_perform_inventory_v2#x_cluster_id LcmPerformInventoryV2#x_cluster_id}
  */
  readonly xClusterId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_perform_inventory_v2 nutanix_lcm_perform_inventory_v2}
*/
export class LcmPerformInventoryV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_lcm_perform_inventory_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LcmPerformInventoryV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LcmPerformInventoryV2 to import
  * @param importFromId The id of the existing LcmPerformInventoryV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_perform_inventory_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LcmPerformInventoryV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_lcm_perform_inventory_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_perform_inventory_v2 nutanix_lcm_perform_inventory_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LcmPerformInventoryV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: LcmPerformInventoryV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_lcm_perform_inventory_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
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
    this._xClusterId = config.xClusterId;
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

  // x_cluster_id - computed: false, optional: true, required: false
  private _xClusterId?: string; 
  public get xClusterId() {
    return this.getStringAttribute('x_cluster_id');
  }
  public set xClusterId(value: string) {
    this._xClusterId = value;
  }
  public resetXClusterId() {
    this._xClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xClusterIdInput() {
    return this._xClusterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      x_cluster_id: cdktf.stringToTerraform(this._xClusterId),
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
      x_cluster_id: {
        value: cdktf.stringToHclTerraform(this._xClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
