// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_qos_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtSegmentQosProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_qos_profile#id DataVcdNsxtSegmentQosProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of Segment QoS Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_qos_profile#name DataVcdNsxtSegmentQosProfile#name}
  */
  readonly name: string;
  /**
  * ID of NSX-T Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_qos_profile#nsxt_manager_id DataVcdNsxtSegmentQosProfile#nsxt_manager_id}
  */
  readonly nsxtManagerId?: string;
  /**
  * ID of VDC Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_qos_profile#vdc_group_id DataVcdNsxtSegmentQosProfile#vdc_group_id}
  */
  readonly vdcGroupId?: string;
  /**
  * ID of VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_qos_profile#vdc_id DataVcdNsxtSegmentQosProfile#vdc_id}
  */
  readonly vdcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_qos_profile vcd_nsxt_segment_qos_profile}
*/
export class DataVcdNsxtSegmentQosProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_segment_qos_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtSegmentQosProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtSegmentQosProfile to import
  * @param importFromId The id of the existing DataVcdNsxtSegmentQosProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_qos_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtSegmentQosProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_segment_qos_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_qos_profile vcd_nsxt_segment_qos_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtSegmentQosProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtSegmentQosProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_segment_qos_profile',
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

  // class_of_service - computed: true, optional: false, required: false
  public get classOfService() {
    return this.getNumberAttribute('class_of_service');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dscp_priority - computed: true, optional: false, required: false
  public get dscpPriority() {
    return this.getNumberAttribute('dscp_priority');
  }

  // dscp_trust_mode - computed: true, optional: false, required: false
  public get dscpTrustMode() {
    return this.getStringAttribute('dscp_trust_mode');
  }

  // egress_rate_limiter_avg_bandwidth - computed: true, optional: false, required: false
  public get egressRateLimiterAvgBandwidth() {
    return this.getNumberAttribute('egress_rate_limiter_avg_bandwidth');
  }

  // egress_rate_limiter_burst_size - computed: true, optional: false, required: false
  public get egressRateLimiterBurstSize() {
    return this.getNumberAttribute('egress_rate_limiter_burst_size');
  }

  // egress_rate_limiter_peak_bandwidth - computed: true, optional: false, required: false
  public get egressRateLimiterPeakBandwidth() {
    return this.getNumberAttribute('egress_rate_limiter_peak_bandwidth');
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

  // ingress_broadcast_rate_limiter_avg_bandwidth - computed: true, optional: false, required: false
  public get ingressBroadcastRateLimiterAvgBandwidth() {
    return this.getNumberAttribute('ingress_broadcast_rate_limiter_avg_bandwidth');
  }

  // ingress_broadcast_rate_limiter_burst_size - computed: true, optional: false, required: false
  public get ingressBroadcastRateLimiterBurstSize() {
    return this.getNumberAttribute('ingress_broadcast_rate_limiter_burst_size');
  }

  // ingress_broadcast_rate_limiter_peak_bandwidth - computed: true, optional: false, required: false
  public get ingressBroadcastRateLimiterPeakBandwidth() {
    return this.getNumberAttribute('ingress_broadcast_rate_limiter_peak_bandwidth');
  }

  // ingress_rate_limiter_avg_bandwidth - computed: true, optional: false, required: false
  public get ingressRateLimiterAvgBandwidth() {
    return this.getNumberAttribute('ingress_rate_limiter_avg_bandwidth');
  }

  // ingress_rate_limiter_burst_size - computed: true, optional: false, required: false
  public get ingressRateLimiterBurstSize() {
    return this.getNumberAttribute('ingress_rate_limiter_burst_size');
  }

  // ingress_rate_limiter_peak_bandwidth - computed: true, optional: false, required: false
  public get ingressRateLimiterPeakBandwidth() {
    return this.getNumberAttribute('ingress_rate_limiter_peak_bandwidth');
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
