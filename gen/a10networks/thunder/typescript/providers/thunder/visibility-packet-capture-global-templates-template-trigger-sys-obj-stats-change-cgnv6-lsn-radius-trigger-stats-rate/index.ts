// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for HA Standby Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#ha_standby_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#ha_standby_dropped}
  */
  readonly haStandbyDropped?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Radius Request has Invalid Key Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#invalid_key VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#invalid_key}
  */
  readonly invalidKey?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for RADIUS Request Dropped (Malformed Packet)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#radius_request_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#radius_request_dropped}
  */
  readonly radiusRequestDropped?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Dropped (Table Full)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#radius_table_full VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#radius_table_full}
  */
  readonly radiusTableFull?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Bad Secret Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#request_bad_secret_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#request_bad_secret_dropped}
  */
  readonly requestBadSecretDropped?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#request_ignored VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#request_ignored}
  */
  readonly requestIgnored?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Malformed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#request_malformed_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#request_malformed_dropped}
  */
  readonly requestMalformedDropped?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request No Key Attribute Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#request_no_key_vap_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#request_no_key_vap_dropped}
  */
  readonly requestNoKeyVapDropped?: number;
  /**
  * Enable automatic packet-capture for RADIUS Secret Not Configured Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#secret_not_configured_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#secret_not_configured_dropped}
  */
  readonly secretNotConfiguredDropped?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius_trigger_stats_rate',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._haStandbyDropped = config.haStandbyDropped;
    this._id = config.id;
    this._invalidKey = config.invalidKey;
    this._name = config.name;
    this._radiusRequestDropped = config.radiusRequestDropped;
    this._radiusTableFull = config.radiusTableFull;
    this._requestBadSecretDropped = config.requestBadSecretDropped;
    this._requestIgnored = config.requestIgnored;
    this._requestMalformedDropped = config.requestMalformedDropped;
    this._requestNoKeyVapDropped = config.requestNoKeyVapDropped;
    this._secretNotConfiguredDropped = config.secretNotConfiguredDropped;
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

  // ha_standby_dropped - computed: false, optional: true, required: false
  private _haStandbyDropped?: number; 
  public get haStandbyDropped() {
    return this.getNumberAttribute('ha_standby_dropped');
  }
  public set haStandbyDropped(value: number) {
    this._haStandbyDropped = value;
  }
  public resetHaStandbyDropped() {
    this._haStandbyDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStandbyDroppedInput() {
    return this._haStandbyDropped;
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

  // invalid_key - computed: false, optional: true, required: false
  private _invalidKey?: number; 
  public get invalidKey() {
    return this.getNumberAttribute('invalid_key');
  }
  public set invalidKey(value: number) {
    this._invalidKey = value;
  }
  public resetInvalidKey() {
    this._invalidKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidKeyInput() {
    return this._invalidKey;
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

  // radius_request_dropped - computed: false, optional: true, required: false
  private _radiusRequestDropped?: number; 
  public get radiusRequestDropped() {
    return this.getNumberAttribute('radius_request_dropped');
  }
  public set radiusRequestDropped(value: number) {
    this._radiusRequestDropped = value;
  }
  public resetRadiusRequestDropped() {
    this._radiusRequestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusRequestDroppedInput() {
    return this._radiusRequestDropped;
  }

  // radius_table_full - computed: false, optional: true, required: false
  private _radiusTableFull?: number; 
  public get radiusTableFull() {
    return this.getNumberAttribute('radius_table_full');
  }
  public set radiusTableFull(value: number) {
    this._radiusTableFull = value;
  }
  public resetRadiusTableFull() {
    this._radiusTableFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableFullInput() {
    return this._radiusTableFull;
  }

  // request_bad_secret_dropped - computed: false, optional: true, required: false
  private _requestBadSecretDropped?: number; 
  public get requestBadSecretDropped() {
    return this.getNumberAttribute('request_bad_secret_dropped');
  }
  public set requestBadSecretDropped(value: number) {
    this._requestBadSecretDropped = value;
  }
  public resetRequestBadSecretDropped() {
    this._requestBadSecretDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBadSecretDroppedInput() {
    return this._requestBadSecretDropped;
  }

  // request_ignored - computed: false, optional: true, required: false
  private _requestIgnored?: number; 
  public get requestIgnored() {
    return this.getNumberAttribute('request_ignored');
  }
  public set requestIgnored(value: number) {
    this._requestIgnored = value;
  }
  public resetRequestIgnored() {
    this._requestIgnored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIgnoredInput() {
    return this._requestIgnored;
  }

  // request_malformed_dropped - computed: false, optional: true, required: false
  private _requestMalformedDropped?: number; 
  public get requestMalformedDropped() {
    return this.getNumberAttribute('request_malformed_dropped');
  }
  public set requestMalformedDropped(value: number) {
    this._requestMalformedDropped = value;
  }
  public resetRequestMalformedDropped() {
    this._requestMalformedDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMalformedDroppedInput() {
    return this._requestMalformedDropped;
  }

  // request_no_key_vap_dropped - computed: false, optional: true, required: false
  private _requestNoKeyVapDropped?: number; 
  public get requestNoKeyVapDropped() {
    return this.getNumberAttribute('request_no_key_vap_dropped');
  }
  public set requestNoKeyVapDropped(value: number) {
    this._requestNoKeyVapDropped = value;
  }
  public resetRequestNoKeyVapDropped() {
    this._requestNoKeyVapDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestNoKeyVapDroppedInput() {
    return this._requestNoKeyVapDropped;
  }

  // secret_not_configured_dropped - computed: false, optional: true, required: false
  private _secretNotConfiguredDropped?: number; 
  public get secretNotConfiguredDropped() {
    return this.getNumberAttribute('secret_not_configured_dropped');
  }
  public set secretNotConfiguredDropped(value: number) {
    this._secretNotConfiguredDropped = value;
  }
  public resetSecretNotConfiguredDropped() {
    this._secretNotConfiguredDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNotConfiguredDroppedInput() {
    return this._secretNotConfiguredDropped;
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
      ha_standby_dropped: cdktf.numberToTerraform(this._haStandbyDropped),
      id: cdktf.stringToTerraform(this._id),
      invalid_key: cdktf.numberToTerraform(this._invalidKey),
      name: cdktf.stringToTerraform(this._name),
      radius_request_dropped: cdktf.numberToTerraform(this._radiusRequestDropped),
      radius_table_full: cdktf.numberToTerraform(this._radiusTableFull),
      request_bad_secret_dropped: cdktf.numberToTerraform(this._requestBadSecretDropped),
      request_ignored: cdktf.numberToTerraform(this._requestIgnored),
      request_malformed_dropped: cdktf.numberToTerraform(this._requestMalformedDropped),
      request_no_key_vap_dropped: cdktf.numberToTerraform(this._requestNoKeyVapDropped),
      secret_not_configured_dropped: cdktf.numberToTerraform(this._secretNotConfiguredDropped),
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
      ha_standby_dropped: {
        value: cdktf.numberToHclTerraform(this._haStandbyDropped),
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
      invalid_key: {
        value: cdktf.numberToHclTerraform(this._invalidKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_request_dropped: {
        value: cdktf.numberToHclTerraform(this._radiusRequestDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_table_full: {
        value: cdktf.numberToHclTerraform(this._radiusTableFull),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_bad_secret_dropped: {
        value: cdktf.numberToHclTerraform(this._requestBadSecretDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_ignored: {
        value: cdktf.numberToHclTerraform(this._requestIgnored),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_malformed_dropped: {
        value: cdktf.numberToHclTerraform(this._requestMalformedDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_no_key_vap_dropped: {
        value: cdktf.numberToHclTerraform(this._requestNoKeyVapDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_not_configured_dropped: {
        value: cdktf.numberToHclTerraform(this._secretNotConfiguredDropped),
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
