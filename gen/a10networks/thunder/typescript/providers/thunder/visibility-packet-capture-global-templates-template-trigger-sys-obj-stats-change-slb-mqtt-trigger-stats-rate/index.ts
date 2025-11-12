// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Null client id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#client_id_null VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#client_id_null}
  */
  readonly clientIdNull?: number;
  /**
  * Enable automatic packet-capture for Null conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#conn_null VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#conn_null}
  */
  readonly connNull?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Insertion failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#insertion_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#insertion_failed}
  */
  readonly insertionFailed?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Parse connect failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#parse_connect_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#parse_connect_fail}
  */
  readonly parseConnectFail?: number;
  /**
  * Enable automatic packet-capture for Parse publish failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#parse_publish_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#parse_publish_fail}
  */
  readonly parsePublishFail?: number;
  /**
  * Enable automatic packet-capture for Parse subscribe failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#parse_subscribe_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#parse_subscribe_fail}
  */
  readonly parseSubscribeFail?: number;
  /**
  * Enable automatic packet-capture for Parse unsubscribe failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#parse_unsubscribe_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#parse_unsubscribe_fail}
  */
  readonly parseUnsubscribeFail?: number;
  /**
  * Enable automatic packet-capture for Session already exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#session_exist VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#session_exist}
  */
  readonly sessionExist?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for tuple-already-linked failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#tuple_already_linked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#tuple_already_linked}
  */
  readonly tupleAlreadyLinked?: number;
  /**
  * Enable automatic packet-capture for tuple-not-linked failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#tuple_not_linked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#tuple_not_linked}
  */
  readonly tupleNotLinked?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt_trigger_stats_rate',
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
    this._clientIdNull = config.clientIdNull;
    this._connNull = config.connNull;
    this._duration = config.duration;
    this._id = config.id;
    this._insertionFailed = config.insertionFailed;
    this._name = config.name;
    this._parseConnectFail = config.parseConnectFail;
    this._parsePublishFail = config.parsePublishFail;
    this._parseSubscribeFail = config.parseSubscribeFail;
    this._parseUnsubscribeFail = config.parseUnsubscribeFail;
    this._sessionExist = config.sessionExist;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._tupleAlreadyLinked = config.tupleAlreadyLinked;
    this._tupleNotLinked = config.tupleNotLinked;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id_null - computed: false, optional: true, required: false
  private _clientIdNull?: number; 
  public get clientIdNull() {
    return this.getNumberAttribute('client_id_null');
  }
  public set clientIdNull(value: number) {
    this._clientIdNull = value;
  }
  public resetClientIdNull() {
    this._clientIdNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdNullInput() {
    return this._clientIdNull;
  }

  // conn_null - computed: false, optional: true, required: false
  private _connNull?: number; 
  public get connNull() {
    return this.getNumberAttribute('conn_null');
  }
  public set connNull(value: number) {
    this._connNull = value;
  }
  public resetConnNull() {
    this._connNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connNullInput() {
    return this._connNull;
  }

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

  // insertion_failed - computed: false, optional: true, required: false
  private _insertionFailed?: number; 
  public get insertionFailed() {
    return this.getNumberAttribute('insertion_failed');
  }
  public set insertionFailed(value: number) {
    this._insertionFailed = value;
  }
  public resetInsertionFailed() {
    this._insertionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertionFailedInput() {
    return this._insertionFailed;
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

  // parse_connect_fail - computed: false, optional: true, required: false
  private _parseConnectFail?: number; 
  public get parseConnectFail() {
    return this.getNumberAttribute('parse_connect_fail');
  }
  public set parseConnectFail(value: number) {
    this._parseConnectFail = value;
  }
  public resetParseConnectFail() {
    this._parseConnectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseConnectFailInput() {
    return this._parseConnectFail;
  }

  // parse_publish_fail - computed: false, optional: true, required: false
  private _parsePublishFail?: number; 
  public get parsePublishFail() {
    return this.getNumberAttribute('parse_publish_fail');
  }
  public set parsePublishFail(value: number) {
    this._parsePublishFail = value;
  }
  public resetParsePublishFail() {
    this._parsePublishFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsePublishFailInput() {
    return this._parsePublishFail;
  }

  // parse_subscribe_fail - computed: false, optional: true, required: false
  private _parseSubscribeFail?: number; 
  public get parseSubscribeFail() {
    return this.getNumberAttribute('parse_subscribe_fail');
  }
  public set parseSubscribeFail(value: number) {
    this._parseSubscribeFail = value;
  }
  public resetParseSubscribeFail() {
    this._parseSubscribeFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseSubscribeFailInput() {
    return this._parseSubscribeFail;
  }

  // parse_unsubscribe_fail - computed: false, optional: true, required: false
  private _parseUnsubscribeFail?: number; 
  public get parseUnsubscribeFail() {
    return this.getNumberAttribute('parse_unsubscribe_fail');
  }
  public set parseUnsubscribeFail(value: number) {
    this._parseUnsubscribeFail = value;
  }
  public resetParseUnsubscribeFail() {
    this._parseUnsubscribeFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseUnsubscribeFailInput() {
    return this._parseUnsubscribeFail;
  }

  // session_exist - computed: false, optional: true, required: false
  private _sessionExist?: number; 
  public get sessionExist() {
    return this.getNumberAttribute('session_exist');
  }
  public set sessionExist(value: number) {
    this._sessionExist = value;
  }
  public resetSessionExist() {
    this._sessionExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionExistInput() {
    return this._sessionExist;
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

  // tuple_already_linked - computed: false, optional: true, required: false
  private _tupleAlreadyLinked?: number; 
  public get tupleAlreadyLinked() {
    return this.getNumberAttribute('tuple_already_linked');
  }
  public set tupleAlreadyLinked(value: number) {
    this._tupleAlreadyLinked = value;
  }
  public resetTupleAlreadyLinked() {
    this._tupleAlreadyLinked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tupleAlreadyLinkedInput() {
    return this._tupleAlreadyLinked;
  }

  // tuple_not_linked - computed: false, optional: true, required: false
  private _tupleNotLinked?: number; 
  public get tupleNotLinked() {
    return this.getNumberAttribute('tuple_not_linked');
  }
  public set tupleNotLinked(value: number) {
    this._tupleNotLinked = value;
  }
  public resetTupleNotLinked() {
    this._tupleNotLinked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tupleNotLinkedInput() {
    return this._tupleNotLinked;
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
      client_id_null: cdktf.numberToTerraform(this._clientIdNull),
      conn_null: cdktf.numberToTerraform(this._connNull),
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      insertion_failed: cdktf.numberToTerraform(this._insertionFailed),
      name: cdktf.stringToTerraform(this._name),
      parse_connect_fail: cdktf.numberToTerraform(this._parseConnectFail),
      parse_publish_fail: cdktf.numberToTerraform(this._parsePublishFail),
      parse_subscribe_fail: cdktf.numberToTerraform(this._parseSubscribeFail),
      parse_unsubscribe_fail: cdktf.numberToTerraform(this._parseUnsubscribeFail),
      session_exist: cdktf.numberToTerraform(this._sessionExist),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      tuple_already_linked: cdktf.numberToTerraform(this._tupleAlreadyLinked),
      tuple_not_linked: cdktf.numberToTerraform(this._tupleNotLinked),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id_null: {
        value: cdktf.numberToHclTerraform(this._clientIdNull),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_null: {
        value: cdktf.numberToHclTerraform(this._connNull),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
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
      insertion_failed: {
        value: cdktf.numberToHclTerraform(this._insertionFailed),
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
      parse_connect_fail: {
        value: cdktf.numberToHclTerraform(this._parseConnectFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parse_publish_fail: {
        value: cdktf.numberToHclTerraform(this._parsePublishFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parse_subscribe_fail: {
        value: cdktf.numberToHclTerraform(this._parseSubscribeFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parse_unsubscribe_fail: {
        value: cdktf.numberToHclTerraform(this._parseUnsubscribeFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_exist: {
        value: cdktf.numberToHclTerraform(this._sessionExist),
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
      tuple_already_linked: {
        value: cdktf.numberToHclTerraform(this._tupleAlreadyLinked),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tuple_not_linked: {
        value: cdktf.numberToHclTerraform(this._tupleNotLinked),
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
