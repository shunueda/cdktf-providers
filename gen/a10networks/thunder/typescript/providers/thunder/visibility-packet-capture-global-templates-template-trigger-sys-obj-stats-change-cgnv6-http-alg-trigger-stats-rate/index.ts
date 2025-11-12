// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Buff Insertion Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate#header_insertion_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA#header_insertion_failed}
  */
  readonly headerInsertionFailed?: number;
  /**
  * Enable automatic packet-capture for Buff Removal Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate#header_removal_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA#header_removal_failed}
  */
  readonly headerRemovalFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Out-of-Memory Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate#out_of_memory_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA#out_of_memory_dropped}
  */
  readonly outOfMemoryDropped?: number;
  /**
  * Enable automatic packet-capture for Packet Out-of-Order Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate#out_of_order_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA#out_of_order_dropped}
  */
  readonly outOfOrderDropped?: number;
  /**
  * Enable automatic packet-capture for Queue Length Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate#queue_len_exceed_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA#queue_len_exceed_dropped}
  */
  readonly queueLenExceedDropped?: number;
  /**
  * Enable automatic packet-capture for Query Request Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate#radius_requst_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA#radius_requst_dropped}
  */
  readonly radiusRequstDropped?: number;
  /**
  * Enable automatic packet-capture for Query Response Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate#radius_response_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA#radius_response_dropped}
  */
  readonly radiusResponseDropped?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg_trigger_stats_rate',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._duration = config.duration;
    this._headerInsertionFailed = config.headerInsertionFailed;
    this._headerRemovalFailed = config.headerRemovalFailed;
    this._id = config.id;
    this._name = config.name;
    this._outOfMemoryDropped = config.outOfMemoryDropped;
    this._outOfOrderDropped = config.outOfOrderDropped;
    this._queueLenExceedDropped = config.queueLenExceedDropped;
    this._radiusRequstDropped = config.radiusRequstDropped;
    this._radiusResponseDropped = config.radiusResponseDropped;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // header_insertion_failed - computed: false, optional: true, required: false
  private _headerInsertionFailed?: number; 
  public get headerInsertionFailed() {
    return this.getNumberAttribute('header_insertion_failed');
  }
  public set headerInsertionFailed(value: number) {
    this._headerInsertionFailed = value;
  }
  public resetHeaderInsertionFailed() {
    this._headerInsertionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInsertionFailedInput() {
    return this._headerInsertionFailed;
  }

  // header_removal_failed - computed: false, optional: true, required: false
  private _headerRemovalFailed?: number; 
  public get headerRemovalFailed() {
    return this.getNumberAttribute('header_removal_failed');
  }
  public set headerRemovalFailed(value: number) {
    this._headerRemovalFailed = value;
  }
  public resetHeaderRemovalFailed() {
    this._headerRemovalFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRemovalFailedInput() {
    return this._headerRemovalFailed;
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

  // out_of_memory_dropped - computed: false, optional: true, required: false
  private _outOfMemoryDropped?: number; 
  public get outOfMemoryDropped() {
    return this.getNumberAttribute('out_of_memory_dropped');
  }
  public set outOfMemoryDropped(value: number) {
    this._outOfMemoryDropped = value;
  }
  public resetOutOfMemoryDropped() {
    this._outOfMemoryDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfMemoryDroppedInput() {
    return this._outOfMemoryDropped;
  }

  // out_of_order_dropped - computed: false, optional: true, required: false
  private _outOfOrderDropped?: number; 
  public get outOfOrderDropped() {
    return this.getNumberAttribute('out_of_order_dropped');
  }
  public set outOfOrderDropped(value: number) {
    this._outOfOrderDropped = value;
  }
  public resetOutOfOrderDropped() {
    this._outOfOrderDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfOrderDroppedInput() {
    return this._outOfOrderDropped;
  }

  // queue_len_exceed_dropped - computed: false, optional: true, required: false
  private _queueLenExceedDropped?: number; 
  public get queueLenExceedDropped() {
    return this.getNumberAttribute('queue_len_exceed_dropped');
  }
  public set queueLenExceedDropped(value: number) {
    this._queueLenExceedDropped = value;
  }
  public resetQueueLenExceedDropped() {
    this._queueLenExceedDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueLenExceedDroppedInput() {
    return this._queueLenExceedDropped;
  }

  // radius_requst_dropped - computed: false, optional: true, required: false
  private _radiusRequstDropped?: number; 
  public get radiusRequstDropped() {
    return this.getNumberAttribute('radius_requst_dropped');
  }
  public set radiusRequstDropped(value: number) {
    this._radiusRequstDropped = value;
  }
  public resetRadiusRequstDropped() {
    this._radiusRequstDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusRequstDroppedInput() {
    return this._radiusRequstDropped;
  }

  // radius_response_dropped - computed: false, optional: true, required: false
  private _radiusResponseDropped?: number; 
  public get radiusResponseDropped() {
    return this.getNumberAttribute('radius_response_dropped');
  }
  public set radiusResponseDropped(value: number) {
    this._radiusResponseDropped = value;
  }
  public resetRadiusResponseDropped() {
    this._radiusResponseDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusResponseDroppedInput() {
    return this._radiusResponseDropped;
  }

  // threshold_exceeded_by - computed: false, optional: true, required: false
  private _thresholdExceededBy?: number; 
  public get thresholdExceededBy() {
    return this.getNumberAttribute('threshold_exceeded_by');
  }
  public set thresholdExceededBy(value: number) {
    this._thresholdExceededBy = value;
  }
  public resetThresholdExceededBy() {
    this._thresholdExceededBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceededByInput() {
    return this._thresholdExceededBy;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration: cdktf.numberToTerraform(this._duration),
      header_insertion_failed: cdktf.numberToTerraform(this._headerInsertionFailed),
      header_removal_failed: cdktf.numberToTerraform(this._headerRemovalFailed),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      out_of_memory_dropped: cdktf.numberToTerraform(this._outOfMemoryDropped),
      out_of_order_dropped: cdktf.numberToTerraform(this._outOfOrderDropped),
      queue_len_exceed_dropped: cdktf.numberToTerraform(this._queueLenExceedDropped),
      radius_requst_dropped: cdktf.numberToTerraform(this._radiusRequstDropped),
      radius_response_dropped: cdktf.numberToTerraform(this._radiusResponseDropped),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_insertion_failed: {
        value: cdktf.numberToHclTerraform(this._headerInsertionFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_removal_failed: {
        value: cdktf.numberToHclTerraform(this._headerRemovalFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      out_of_memory_dropped: {
        value: cdktf.numberToHclTerraform(this._outOfMemoryDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      out_of_order_dropped: {
        value: cdktf.numberToHclTerraform(this._outOfOrderDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_len_exceed_dropped: {
        value: cdktf.numberToHclTerraform(this._queueLenExceedDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_requst_dropped: {
        value: cdktf.numberToHclTerraform(this._radiusRequstDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_response_dropped: {
        value: cdktf.numberToHclTerraform(this._radiusResponseDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_exceeded_by: {
        value: cdktf.numberToHclTerraform(this._thresholdExceededBy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
