// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_qos_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtEdgegatewayQosProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_qos_profile#id DataVcdNsxtEdgegatewayQosProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of QoS profile in NSX-T manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_qos_profile#name DataVcdNsxtEdgegatewayQosProfile#name}
  */
  readonly name: string;
  /**
  * ID of NSX-T manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_qos_profile#nsxt_manager_id DataVcdNsxtEdgegatewayQosProfile#nsxt_manager_id}
  */
  readonly nsxtManagerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_qos_profile vcd_nsxt_edgegateway_qos_profile}
*/
export class DataVcdNsxtEdgegatewayQosProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_edgegateway_qos_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtEdgegatewayQosProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtEdgegatewayQosProfile to import
  * @param importFromId The id of the existing DataVcdNsxtEdgegatewayQosProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_qos_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtEdgegatewayQosProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_edgegateway_qos_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway_qos_profile vcd_nsxt_edgegateway_qos_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtEdgegatewayQosProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtEdgegatewayQosProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_edgegateway_qos_profile',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
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
    this._name = config.name;
    this._nsxtManagerId = config.nsxtManagerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // burst_size - computed: true, optional: false, required: false
  public get burstSize() {
    return this.getNumberAttribute('burst_size');
  }

  // committed_bandwidth - computed: true, optional: false, required: false
  public get committedBandwidth() {
    return this.getNumberAttribute('committed_bandwidth');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // excess_action - computed: true, optional: false, required: false
  public get excessAction() {
    return this.getStringAttribute('excess_action');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nsxt_manager_id - computed: false, optional: false, required: true
  private _nsxtManagerId?: string; 
  public get nsxtManagerId() {
    return this.getStringAttribute('nsxt_manager_id');
  }
  public set nsxtManagerId(value: string) {
    this._nsxtManagerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtManagerIdInput() {
    return this._nsxtManagerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nsxt_manager_id: cdktf.stringToTerraform(this._nsxtManagerId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsxt_manager_id: {
        value: cdktf.stringToHclTerraform(this._nsxtManagerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
