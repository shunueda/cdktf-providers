// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_mac_discovery_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtSegmentMacDiscoveryProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_mac_discovery_profile#id DataVcdNsxtSegmentMacDiscoveryProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of Segment MAC Discovery Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_mac_discovery_profile#name DataVcdNsxtSegmentMacDiscoveryProfile#name}
  */
  readonly name: string;
  /**
  * ID of NSX-T Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_mac_discovery_profile#nsxt_manager_id DataVcdNsxtSegmentMacDiscoveryProfile#nsxt_manager_id}
  */
  readonly nsxtManagerId?: string;
  /**
  * ID of VDC Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_mac_discovery_profile#vdc_group_id DataVcdNsxtSegmentMacDiscoveryProfile#vdc_group_id}
  */
  readonly vdcGroupId?: string;
  /**
  * ID of VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_mac_discovery_profile#vdc_id DataVcdNsxtSegmentMacDiscoveryProfile#vdc_id}
  */
  readonly vdcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_mac_discovery_profile vcd_nsxt_segment_mac_discovery_profile}
*/
export class DataVcdNsxtSegmentMacDiscoveryProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_segment_mac_discovery_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtSegmentMacDiscoveryProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtSegmentMacDiscoveryProfile to import
  * @param importFromId The id of the existing DataVcdNsxtSegmentMacDiscoveryProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_mac_discovery_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtSegmentMacDiscoveryProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_segment_mac_discovery_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_mac_discovery_profile vcd_nsxt_segment_mac_discovery_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtSegmentMacDiscoveryProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtSegmentMacDiscoveryProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_segment_mac_discovery_profile',
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
    this._vdcGroupId = config.vdcGroupId;
    this._vdcId = config.vdcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // is_mac_change_enabled - computed: true, optional: false, required: false
  public get isMacChangeEnabled() {
    return this.getBooleanAttribute('is_mac_change_enabled');
  }

  // is_mac_learning_enabled - computed: true, optional: false, required: false
  public get isMacLearningEnabled() {
    return this.getBooleanAttribute('is_mac_learning_enabled');
  }

  // is_unknown_unicast_flooding_enabled - computed: true, optional: false, required: false
  public get isUnknownUnicastFloodingEnabled() {
    return this.getBooleanAttribute('is_unknown_unicast_flooding_enabled');
  }

  // mac_learning_aging_time - computed: true, optional: false, required: false
  public get macLearningAgingTime() {
    return this.getNumberAttribute('mac_learning_aging_time');
  }

  // mac_limit - computed: true, optional: false, required: false
  public get macLimit() {
    return this.getNumberAttribute('mac_limit');
  }

  // mac_policy - computed: true, optional: false, required: false
  public get macPolicy() {
    return this.getStringAttribute('mac_policy');
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

  // nsxt_manager_id - computed: false, optional: true, required: false
  private _nsxtManagerId?: string; 
  public get nsxtManagerId() {
    return this.getStringAttribute('nsxt_manager_id');
  }
  public set nsxtManagerId(value: string) {
    this._nsxtManagerId = value;
  }
  public resetNsxtManagerId() {
    this._nsxtManagerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtManagerIdInput() {
    return this._nsxtManagerId;
  }

  // vdc_group_id - computed: false, optional: true, required: false
  private _vdcGroupId?: string; 
  public get vdcGroupId() {
    return this.getStringAttribute('vdc_group_id');
  }
  public set vdcGroupId(value: string) {
    this._vdcGroupId = value;
  }
  public resetVdcGroupId() {
    this._vdcGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcGroupIdInput() {
    return this._vdcGroupId;
  }

  // vdc_id - computed: false, optional: true, required: false
  private _vdcId?: string; 
  public get vdcId() {
    return this.getStringAttribute('vdc_id');
  }
  public set vdcId(value: string) {
    this._vdcId = value;
  }
  public resetVdcId() {
    this._vdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcIdInput() {
    return this._vdcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nsxt_manager_id: cdktf.stringToTerraform(this._nsxtManagerId),
      vdc_group_id: cdktf.stringToTerraform(this._vdcGroupId),
      vdc_id: cdktf.stringToTerraform(this._vdcId),
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
      vdc_group_id: {
        value: cdktf.stringToHclTerraform(this._vdcGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc_id: {
        value: cdktf.stringToHclTerraform(this._vdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
