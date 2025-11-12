// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for HA Standby Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#ha_standby_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#ha_standby_dropped}
  */
  readonly haStandbyDropped?: number;
  /**
  * Enable automatic packet-capture for Radius Request has Invalid Key Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#invalid_key VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#invalid_key}
  */
  readonly invalidKey?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Dropped (Malformed Packet)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#radius_request_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#radius_request_dropped}
  */
  readonly radiusRequestDropped?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Dropped (Table Full)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#radius_table_full VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#radius_table_full}
  */
  readonly radiusTableFull?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Bad Secret Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#request_bad_secret_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#request_bad_secret_dropped}
  */
  readonly requestBadSecretDropped?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#request_ignored VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#request_ignored}
  */
  readonly requestIgnored?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Malformed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#request_malformed_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#request_malformed_dropped}
  */
  readonly requestMalformedDropped?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request No Key Attribute Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#request_no_key_vap_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#request_no_key_vap_dropped}
  */
  readonly requestNoKeyVapDropped?: number;
  /**
  * Enable automatic packet-capture for RADIUS Secret Not Configured Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#secret_not_configured_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#secret_not_configured_dropped}
  */
  readonly secretNotConfiguredDropped?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ha_standby_dropped: cdktf.numberToTerraform(struct!.haStandbyDropped),
    invalid_key: cdktf.numberToTerraform(struct!.invalidKey),
    radius_request_dropped: cdktf.numberToTerraform(struct!.radiusRequestDropped),
    radius_table_full: cdktf.numberToTerraform(struct!.radiusTableFull),
    request_bad_secret_dropped: cdktf.numberToTerraform(struct!.requestBadSecretDropped),
    request_ignored: cdktf.numberToTerraform(struct!.requestIgnored),
    request_malformed_dropped: cdktf.numberToTerraform(struct!.requestMalformedDropped),
    request_no_key_vap_dropped: cdktf.numberToTerraform(struct!.requestNoKeyVapDropped),
    secret_not_configured_dropped: cdktf.numberToTerraform(struct!.secretNotConfiguredDropped),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ha_standby_dropped: {
      value: cdktf.numberToHclTerraform(struct!.haStandbyDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_key: {
      value: cdktf.numberToHclTerraform(struct!.invalidKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.radiusRequestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_full: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_bad_secret_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestBadSecretDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_ignored: {
      value: cdktf.numberToHclTerraform(struct!.requestIgnored),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_malformed_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestMalformedDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_no_key_vap_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestNoKeyVapDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_not_configured_dropped: {
      value: cdktf.numberToHclTerraform(struct!.secretNotConfiguredDropped),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._haStandbyDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.haStandbyDropped = this._haStandbyDropped;
    }
    if (this._invalidKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidKey = this._invalidKey;
    }
    if (this._radiusRequestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusRequestDropped = this._radiusRequestDropped;
    }
    if (this._radiusTableFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableFull = this._radiusTableFull;
    }
    if (this._requestBadSecretDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBadSecretDropped = this._requestBadSecretDropped;
    }
    if (this._requestIgnored !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestIgnored = this._requestIgnored;
    }
    if (this._requestMalformedDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMalformedDropped = this._requestMalformedDropped;
    }
    if (this._requestNoKeyVapDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestNoKeyVapDropped = this._requestNoKeyVapDropped;
    }
    if (this._secretNotConfiguredDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNotConfiguredDropped = this._secretNotConfiguredDropped;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._haStandbyDropped = undefined;
      this._invalidKey = undefined;
      this._radiusRequestDropped = undefined;
      this._radiusTableFull = undefined;
      this._requestBadSecretDropped = undefined;
      this._requestIgnored = undefined;
      this._requestMalformedDropped = undefined;
      this._requestNoKeyVapDropped = undefined;
      this._secretNotConfiguredDropped = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._haStandbyDropped = value.haStandbyDropped;
      this._invalidKey = value.invalidKey;
      this._radiusRequestDropped = value.radiusRequestDropped;
      this._radiusTableFull = value.radiusTableFull;
      this._requestBadSecretDropped = value.requestBadSecretDropped;
      this._requestIgnored = value.requestIgnored;
      this._requestMalformedDropped = value.requestMalformedDropped;
      this._requestNoKeyVapDropped = value.requestNoKeyVapDropped;
      this._secretNotConfiguredDropped = value.secretNotConfiguredDropped;
      this._uuid = value.uuid;
    }
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for HA Standby Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#ha_standby_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#ha_standby_dropped}
  */
  readonly haStandbyDropped?: number;
  /**
  * Enable automatic packet-capture for Radius Request has Invalid Key Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#invalid_key VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#invalid_key}
  */
  readonly invalidKey?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Dropped (Malformed Packet)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#radius_request_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#radius_request_dropped}
  */
  readonly radiusRequestDropped?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Dropped (Table Full)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#radius_table_full VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#radius_table_full}
  */
  readonly radiusTableFull?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Bad Secret Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#request_bad_secret_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#request_bad_secret_dropped}
  */
  readonly requestBadSecretDropped?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#request_ignored VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#request_ignored}
  */
  readonly requestIgnored?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request Malformed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#request_malformed_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#request_malformed_dropped}
  */
  readonly requestMalformedDropped?: number;
  /**
  * Enable automatic packet-capture for RADIUS Request No Key Attribute Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#request_no_key_vap_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#request_no_key_vap_dropped}
  */
  readonly requestNoKeyVapDropped?: number;
  /**
  * Enable automatic packet-capture for RADIUS Secret Not Configured Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#secret_not_configured_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#secret_not_configured_dropped}
  */
  readonly secretNotConfiguredDropped?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    ha_standby_dropped: cdktf.numberToTerraform(struct!.haStandbyDropped),
    invalid_key: cdktf.numberToTerraform(struct!.invalidKey),
    radius_request_dropped: cdktf.numberToTerraform(struct!.radiusRequestDropped),
    radius_table_full: cdktf.numberToTerraform(struct!.radiusTableFull),
    request_bad_secret_dropped: cdktf.numberToTerraform(struct!.requestBadSecretDropped),
    request_ignored: cdktf.numberToTerraform(struct!.requestIgnored),
    request_malformed_dropped: cdktf.numberToTerraform(struct!.requestMalformedDropped),
    request_no_key_vap_dropped: cdktf.numberToTerraform(struct!.requestNoKeyVapDropped),
    secret_not_configured_dropped: cdktf.numberToTerraform(struct!.secretNotConfiguredDropped),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_standby_dropped: {
      value: cdktf.numberToHclTerraform(struct!.haStandbyDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_key: {
      value: cdktf.numberToHclTerraform(struct!.invalidKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.radiusRequestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_full: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_bad_secret_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestBadSecretDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_ignored: {
      value: cdktf.numberToHclTerraform(struct!.requestIgnored),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_malformed_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestMalformedDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_no_key_vap_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestNoKeyVapDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_not_configured_dropped: {
      value: cdktf.numberToHclTerraform(struct!.secretNotConfiguredDropped),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._haStandbyDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.haStandbyDropped = this._haStandbyDropped;
    }
    if (this._invalidKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidKey = this._invalidKey;
    }
    if (this._radiusRequestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusRequestDropped = this._radiusRequestDropped;
    }
    if (this._radiusTableFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableFull = this._radiusTableFull;
    }
    if (this._requestBadSecretDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBadSecretDropped = this._requestBadSecretDropped;
    }
    if (this._requestIgnored !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestIgnored = this._requestIgnored;
    }
    if (this._requestMalformedDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMalformedDropped = this._requestMalformedDropped;
    }
    if (this._requestNoKeyVapDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestNoKeyVapDropped = this._requestNoKeyVapDropped;
    }
    if (this._secretNotConfiguredDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNotConfiguredDropped = this._secretNotConfiguredDropped;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._haStandbyDropped = undefined;
      this._invalidKey = undefined;
      this._radiusRequestDropped = undefined;
      this._radiusTableFull = undefined;
      this._requestBadSecretDropped = undefined;
      this._requestIgnored = undefined;
      this._requestMalformedDropped = undefined;
      this._requestNoKeyVapDropped = undefined;
      this._secretNotConfiguredDropped = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._haStandbyDropped = value.haStandbyDropped;
      this._invalidKey = value.invalidKey;
      this._radiusRequestDropped = value.radiusRequestDropped;
      this._radiusTableFull = value.radiusTableFull;
      this._requestBadSecretDropped = value.requestBadSecretDropped;
      this._requestIgnored = value.requestIgnored;
      this._requestMalformedDropped = value.requestMalformedDropped;
      this._requestNoKeyVapDropped = value.requestNoKeyVapDropped;
      this._secretNotConfiguredDropped = value.secretNotConfiguredDropped;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_radius',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
