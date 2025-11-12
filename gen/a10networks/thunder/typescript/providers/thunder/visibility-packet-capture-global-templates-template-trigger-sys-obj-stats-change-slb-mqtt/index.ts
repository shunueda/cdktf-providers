// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Null client id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#client_id_null VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#client_id_null}
  */
  readonly clientIdNull?: number;
  /**
  * Enable automatic packet-capture for Null conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#conn_null VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#conn_null}
  */
  readonly connNull?: number;
  /**
  * Enable automatic packet-capture for Insertion failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#insertion_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#insertion_failed}
  */
  readonly insertionFailed?: number;
  /**
  * Enable automatic packet-capture for Parse connect failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#parse_connect_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#parse_connect_fail}
  */
  readonly parseConnectFail?: number;
  /**
  * Enable automatic packet-capture for Parse publish failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#parse_publish_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#parse_publish_fail}
  */
  readonly parsePublishFail?: number;
  /**
  * Enable automatic packet-capture for Parse subscribe failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#parse_subscribe_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#parse_subscribe_fail}
  */
  readonly parseSubscribeFail?: number;
  /**
  * Enable automatic packet-capture for Parse unsubscribe failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#parse_unsubscribe_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#parse_unsubscribe_fail}
  */
  readonly parseUnsubscribeFail?: number;
  /**
  * Enable automatic packet-capture for Session already exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#session_exist VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#session_exist}
  */
  readonly sessionExist?: number;
  /**
  * Enable automatic packet-capture for tuple-already-linked failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#tuple_already_linked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#tuple_already_linked}
  */
  readonly tupleAlreadyLinked?: number;
  /**
  * Enable automatic packet-capture for tuple-not-linked failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#tuple_not_linked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#tuple_not_linked}
  */
  readonly tupleNotLinked?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id_null: cdktf.numberToTerraform(struct!.clientIdNull),
    conn_null: cdktf.numberToTerraform(struct!.connNull),
    insertion_failed: cdktf.numberToTerraform(struct!.insertionFailed),
    parse_connect_fail: cdktf.numberToTerraform(struct!.parseConnectFail),
    parse_publish_fail: cdktf.numberToTerraform(struct!.parsePublishFail),
    parse_subscribe_fail: cdktf.numberToTerraform(struct!.parseSubscribeFail),
    parse_unsubscribe_fail: cdktf.numberToTerraform(struct!.parseUnsubscribeFail),
    session_exist: cdktf.numberToTerraform(struct!.sessionExist),
    tuple_already_linked: cdktf.numberToTerraform(struct!.tupleAlreadyLinked),
    tuple_not_linked: cdktf.numberToTerraform(struct!.tupleNotLinked),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id_null: {
      value: cdktf.numberToHclTerraform(struct!.clientIdNull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_null: {
      value: cdktf.numberToHclTerraform(struct!.connNull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insertion_failed: {
      value: cdktf.numberToHclTerraform(struct!.insertionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_connect_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseConnectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_publish_fail: {
      value: cdktf.numberToHclTerraform(struct!.parsePublishFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_subscribe_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseSubscribeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_unsubscribe_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseUnsubscribeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_exist: {
      value: cdktf.numberToHclTerraform(struct!.sessionExist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tuple_already_linked: {
      value: cdktf.numberToHclTerraform(struct!.tupleAlreadyLinked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tuple_not_linked: {
      value: cdktf.numberToHclTerraform(struct!.tupleNotLinked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdNull = this._clientIdNull;
    }
    if (this._connNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.connNull = this._connNull;
    }
    if (this._insertionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertionFailed = this._insertionFailed;
    }
    if (this._parseConnectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseConnectFail = this._parseConnectFail;
    }
    if (this._parsePublishFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsePublishFail = this._parsePublishFail;
    }
    if (this._parseSubscribeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseSubscribeFail = this._parseSubscribeFail;
    }
    if (this._parseUnsubscribeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseUnsubscribeFail = this._parseUnsubscribeFail;
    }
    if (this._sessionExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionExist = this._sessionExist;
    }
    if (this._tupleAlreadyLinked !== undefined) {
      hasAnyValues = true;
      internalValueResult.tupleAlreadyLinked = this._tupleAlreadyLinked;
    }
    if (this._tupleNotLinked !== undefined) {
      hasAnyValues = true;
      internalValueResult.tupleNotLinked = this._tupleNotLinked;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientIdNull = undefined;
      this._connNull = undefined;
      this._insertionFailed = undefined;
      this._parseConnectFail = undefined;
      this._parsePublishFail = undefined;
      this._parseSubscribeFail = undefined;
      this._parseUnsubscribeFail = undefined;
      this._sessionExist = undefined;
      this._tupleAlreadyLinked = undefined;
      this._tupleNotLinked = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientIdNull = value.clientIdNull;
      this._connNull = value.connNull;
      this._insertionFailed = value.insertionFailed;
      this._parseConnectFail = value.parseConnectFail;
      this._parsePublishFail = value.parsePublishFail;
      this._parseSubscribeFail = value.parseSubscribeFail;
      this._parseUnsubscribeFail = value.parseUnsubscribeFail;
      this._sessionExist = value.sessionExist;
      this._tupleAlreadyLinked = value.tupleAlreadyLinked;
      this._tupleNotLinked = value.tupleNotLinked;
      this._uuid = value.uuid;
    }
  }

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
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Null client id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#client_id_null VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#client_id_null}
  */
  readonly clientIdNull?: number;
  /**
  * Enable automatic packet-capture for Null conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#conn_null VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#conn_null}
  */
  readonly connNull?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Insertion failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#insertion_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#insertion_failed}
  */
  readonly insertionFailed?: number;
  /**
  * Enable automatic packet-capture for Parse connect failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#parse_connect_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#parse_connect_fail}
  */
  readonly parseConnectFail?: number;
  /**
  * Enable automatic packet-capture for Parse publish failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#parse_publish_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#parse_publish_fail}
  */
  readonly parsePublishFail?: number;
  /**
  * Enable automatic packet-capture for Parse subscribe failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#parse_subscribe_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#parse_subscribe_fail}
  */
  readonly parseSubscribeFail?: number;
  /**
  * Enable automatic packet-capture for Parse unsubscribe failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#parse_unsubscribe_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#parse_unsubscribe_fail}
  */
  readonly parseUnsubscribeFail?: number;
  /**
  * Enable automatic packet-capture for Session already exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#session_exist VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#session_exist}
  */
  readonly sessionExist?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for tuple-already-linked failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#tuple_already_linked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#tuple_already_linked}
  */
  readonly tupleAlreadyLinked?: number;
  /**
  * Enable automatic packet-capture for tuple-not-linked failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#tuple_not_linked VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#tuple_not_linked}
  */
  readonly tupleNotLinked?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id_null: cdktf.numberToTerraform(struct!.clientIdNull),
    conn_null: cdktf.numberToTerraform(struct!.connNull),
    duration: cdktf.numberToTerraform(struct!.duration),
    insertion_failed: cdktf.numberToTerraform(struct!.insertionFailed),
    parse_connect_fail: cdktf.numberToTerraform(struct!.parseConnectFail),
    parse_publish_fail: cdktf.numberToTerraform(struct!.parsePublishFail),
    parse_subscribe_fail: cdktf.numberToTerraform(struct!.parseSubscribeFail),
    parse_unsubscribe_fail: cdktf.numberToTerraform(struct!.parseUnsubscribeFail),
    session_exist: cdktf.numberToTerraform(struct!.sessionExist),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    tuple_already_linked: cdktf.numberToTerraform(struct!.tupleAlreadyLinked),
    tuple_not_linked: cdktf.numberToTerraform(struct!.tupleNotLinked),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id_null: {
      value: cdktf.numberToHclTerraform(struct!.clientIdNull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_null: {
      value: cdktf.numberToHclTerraform(struct!.connNull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insertion_failed: {
      value: cdktf.numberToHclTerraform(struct!.insertionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_connect_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseConnectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_publish_fail: {
      value: cdktf.numberToHclTerraform(struct!.parsePublishFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_subscribe_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseSubscribeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_unsubscribe_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseUnsubscribeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_exist: {
      value: cdktf.numberToHclTerraform(struct!.sessionExist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_exceeded_by: {
      value: cdktf.numberToHclTerraform(struct!.thresholdExceededBy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tuple_already_linked: {
      value: cdktf.numberToHclTerraform(struct!.tupleAlreadyLinked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tuple_not_linked: {
      value: cdktf.numberToHclTerraform(struct!.tupleNotLinked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdNull = this._clientIdNull;
    }
    if (this._connNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.connNull = this._connNull;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._insertionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertionFailed = this._insertionFailed;
    }
    if (this._parseConnectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseConnectFail = this._parseConnectFail;
    }
    if (this._parsePublishFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsePublishFail = this._parsePublishFail;
    }
    if (this._parseSubscribeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseSubscribeFail = this._parseSubscribeFail;
    }
    if (this._parseUnsubscribeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseUnsubscribeFail = this._parseUnsubscribeFail;
    }
    if (this._sessionExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionExist = this._sessionExist;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._tupleAlreadyLinked !== undefined) {
      hasAnyValues = true;
      internalValueResult.tupleAlreadyLinked = this._tupleAlreadyLinked;
    }
    if (this._tupleNotLinked !== undefined) {
      hasAnyValues = true;
      internalValueResult.tupleNotLinked = this._tupleNotLinked;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientIdNull = undefined;
      this._connNull = undefined;
      this._duration = undefined;
      this._insertionFailed = undefined;
      this._parseConnectFail = undefined;
      this._parsePublishFail = undefined;
      this._parseSubscribeFail = undefined;
      this._parseUnsubscribeFail = undefined;
      this._sessionExist = undefined;
      this._thresholdExceededBy = undefined;
      this._tupleAlreadyLinked = undefined;
      this._tupleNotLinked = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientIdNull = value.clientIdNull;
      this._connNull = value.connNull;
      this._duration = value.duration;
      this._insertionFailed = value.insertionFailed;
      this._parseConnectFail = value.parseConnectFail;
      this._parsePublishFail = value.parsePublishFail;
      this._parseSubscribeFail = value.parseSubscribeFail;
      this._parseUnsubscribeFail = value.parseUnsubscribeFail;
      this._sessionExist = value.sessionExist;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._tupleAlreadyLinked = value.tupleAlreadyLinked;
      this._tupleNotLinked = value.tupleNotLinked;
      this._uuid = value.uuid;
    }
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_mqtt',
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
    this._id = config.id;
    this._name = config.name;
    this._uuid = config.uuid;
    this._triggerStatsInc.internalValue = config.triggerStatsInc;
    this._triggerStatsRate.internalValue = config.triggerStatsRate;
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

  // trigger_stats_inc - computed: false, optional: true, required: false
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncA) {
    this._triggerStatsInc.internalValue = value;
  }
  public resetTriggerStatsInc() {
    this._triggerStatsInc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsIncInput() {
    return this._triggerStatsInc.internalValue;
  }

  // trigger_stats_rate - computed: false, optional: true, required: false
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateA) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_stats_inc: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMqttTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
