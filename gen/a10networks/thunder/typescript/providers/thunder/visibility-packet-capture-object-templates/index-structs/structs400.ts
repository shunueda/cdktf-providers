import * as cdktf from 'cdktf';
import { VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsIncA,
visibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsIncAToTerraform,
visibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsIncAToHclTerraform,
VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsIncAOutputReference,
VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsRateA,
visibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsRateAToTerraform,
visibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsRateAToHclTerraform,
VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsRateAOutputReference,
VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsSeverityA,
visibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsSeverityAToTerraform,
visibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsSeverityAToHclTerraform,
VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsSeverityAOutputReference } from './structs0'
export interface VisibilityPacketCaptureObjectTemplatesSlbPortTmplListStructA {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#capture_config VisibilityPacketCaptureObjectTemplatesA#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#name VisibilityPacketCaptureObjectTemplatesA#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#user_tag VisibilityPacketCaptureObjectTemplatesA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsRateA;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesA#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsSeverityA;
}

export function visibilityPacketCaptureObjectTemplatesSlbPortTmplListStructAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbPortTmplListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config: cdktf.stringToTerraform(struct!.captureConfig),
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    trigger_stats_inc: visibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsIncAToTerraform(struct!.triggerStatsInc),
    trigger_stats_rate: visibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsRateAToTerraform(struct!.triggerStatsRate),
    trigger_stats_severity: visibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsSeverityAToTerraform(struct!.triggerStatsSeverity),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbPortTmplListStructAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbPortTmplListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config: {
      value: cdktf.stringToHclTerraform(struct!.captureConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_stats_inc: {
      value: visibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsIncAToHclTerraform(struct!.triggerStatsInc),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsIncAList",
    },
    trigger_stats_rate: {
      value: visibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsRateAToHclTerraform(struct!.triggerStatsRate),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsRateAList",
    },
    trigger_stats_severity: {
      value: visibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsSeverityAToHclTerraform(struct!.triggerStatsSeverity),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsSeverityAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesSlbPortTmplListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbPortTmplListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfig = this._captureConfig;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._triggerStatsInc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsInc = this._triggerStatsInc?.internalValue;
    }
    if (this._triggerStatsRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsRate = this._triggerStatsRate?.internalValue;
    }
    if (this._triggerStatsSeverity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsSeverity = this._triggerStatsSeverity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbPortTmplListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureConfig = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._triggerStatsInc.internalValue = undefined;
      this._triggerStatsRate.internalValue = undefined;
      this._triggerStatsSeverity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureConfig = value.captureConfig;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._triggerStatsInc.internalValue = value.triggerStatsInc;
      this._triggerStatsRate.internalValue = value.triggerStatsRate;
      this._triggerStatsSeverity.internalValue = value.triggerStatsSeverity;
    }
  }

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsRateA) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // trigger_stats_severity - computed: false, optional: true, required: false
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsSeverityAOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesSlbPortTmplListTriggerStatsSeverityA) {
    this._triggerStatsSeverity.internalValue = value;
  }
  public resetTriggerStatsSeverity() {
    this._triggerStatsSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsSeverityInput() {
    return this._triggerStatsSeverity.internalValue;
  }
}

export class VisibilityPacketCaptureObjectTemplatesSlbPortTmplListStructAList extends cdktf.ComplexList {
  public internalValue? : VisibilityPacketCaptureObjectTemplatesSlbPortTmplListStructA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VisibilityPacketCaptureObjectTemplatesSlbPortTmplListStructAOutputReference {
    return new VisibilityPacketCaptureObjectTemplatesSlbPortTmplListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Response status 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#es_resp_300 VisibilityPacketCaptureObjectTemplatesA#es_resp_300}
  */
  readonly esResp300?: number;
  /**
  * Enable automatic packet-capture for Response status 400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#es_resp_400 VisibilityPacketCaptureObjectTemplatesA#es_resp_400}
  */
  readonly esResp400?: number;
  /**
  * Enable automatic packet-capture for Response status 500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#es_resp_500 VisibilityPacketCaptureObjectTemplatesA#es_resp_500}
  */
  readonly esResp500?: number;
  /**
  * Enable automatic packet-capture for Response status 3xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#resp_3xx VisibilityPacketCaptureObjectTemplatesA#resp_3xx}
  */
  readonly resp3Xx?: number;
  /**
  * Enable automatic packet-capture for Response status 4xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#resp_4xx VisibilityPacketCaptureObjectTemplatesA#resp_4xx}
  */
  readonly resp4Xx?: number;
  /**
  * Enable automatic packet-capture for Response status 5xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#resp_5xx VisibilityPacketCaptureObjectTemplatesA#resp_5xx}
  */
  readonly resp5Xx?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    es_resp_300: cdktf.numberToTerraform(struct!.esResp300),
    es_resp_400: cdktf.numberToTerraform(struct!.esResp400),
    es_resp_500: cdktf.numberToTerraform(struct!.esResp500),
    resp_3xx: cdktf.numberToTerraform(struct!.resp3Xx),
    resp_4xx: cdktf.numberToTerraform(struct!.resp4Xx),
    resp_5xx: cdktf.numberToTerraform(struct!.resp5Xx),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    es_resp_300: {
      value: cdktf.numberToHclTerraform(struct!.esResp300),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_resp_400: {
      value: cdktf.numberToHclTerraform(struct!.esResp400),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_resp_500: {
      value: cdktf.numberToHclTerraform(struct!.esResp500),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_3xx: {
      value: cdktf.numberToHclTerraform(struct!.resp3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_4xx: {
      value: cdktf.numberToHclTerraform(struct!.resp4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_5xx: {
      value: cdktf.numberToHclTerraform(struct!.resp5Xx),
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

export class VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._esResp300 !== undefined) {
      hasAnyValues = true;
      internalValueResult.esResp300 = this._esResp300;
    }
    if (this._esResp400 !== undefined) {
      hasAnyValues = true;
      internalValueResult.esResp400 = this._esResp400;
    }
    if (this._esResp500 !== undefined) {
      hasAnyValues = true;
      internalValueResult.esResp500 = this._esResp500;
    }
    if (this._resp3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp3Xx = this._resp3Xx;
    }
    if (this._resp4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp4Xx = this._resp4Xx;
    }
    if (this._resp5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp5Xx = this._resp5Xx;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._esResp300 = undefined;
      this._esResp400 = undefined;
      this._esResp500 = undefined;
      this._resp3Xx = undefined;
      this._resp4Xx = undefined;
      this._resp5Xx = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._esResp300 = value.esResp300;
      this._esResp400 = value.esResp400;
      this._esResp500 = value.esResp500;
      this._resp3Xx = value.resp3Xx;
      this._resp4Xx = value.resp4Xx;
      this._resp5Xx = value.resp5Xx;
      this._uuid = value.uuid;
    }
  }

  // es_resp_300 - computed: false, optional: true, required: false
  private _esResp300?: number; 
  public get esResp300() {
    return this.getNumberAttribute('es_resp_300');
  }
  public set esResp300(value: number) {
    this._esResp300 = value;
  }
  public resetEsResp300() {
    this._esResp300 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esResp300Input() {
    return this._esResp300;
  }

  // es_resp_400 - computed: false, optional: true, required: false
  private _esResp400?: number; 
  public get esResp400() {
    return this.getNumberAttribute('es_resp_400');
  }
  public set esResp400(value: number) {
    this._esResp400 = value;
  }
  public resetEsResp400() {
    this._esResp400 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esResp400Input() {
    return this._esResp400;
  }

  // es_resp_500 - computed: false, optional: true, required: false
  private _esResp500?: number; 
  public get esResp500() {
    return this.getNumberAttribute('es_resp_500');
  }
  public set esResp500(value: number) {
    this._esResp500 = value;
  }
  public resetEsResp500() {
    this._esResp500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esResp500Input() {
    return this._esResp500;
  }

  // resp_3xx - computed: false, optional: true, required: false
  private _resp3Xx?: number; 
  public get resp3Xx() {
    return this.getNumberAttribute('resp_3xx');
  }
  public set resp3Xx(value: number) {
    this._resp3Xx = value;
  }
  public resetResp3Xx() {
    this._resp3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp3XxInput() {
    return this._resp3Xx;
  }

  // resp_4xx - computed: false, optional: true, required: false
  private _resp4Xx?: number; 
  public get resp4Xx() {
    return this.getNumberAttribute('resp_4xx');
  }
  public set resp4Xx(value: number) {
    this._resp4Xx = value;
  }
  public resetResp4Xx() {
    this._resp4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp4XxInput() {
    return this._resp4Xx;
  }

  // resp_5xx - computed: false, optional: true, required: false
  private _resp5Xx?: number; 
  public get resp5Xx() {
    return this.getNumberAttribute('resp_5xx');
  }
  public set resp5Xx(value: number) {
    this._resp5Xx = value;
  }
  public resetResp5Xx() {
    this._resp5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp5XxInput() {
    return this._resp5Xx;
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
export interface VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#duration VisibilityPacketCaptureObjectTemplatesA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Response status 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#es_resp_300 VisibilityPacketCaptureObjectTemplatesA#es_resp_300}
  */
  readonly esResp300?: number;
  /**
  * Enable automatic packet-capture for Response status 400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#es_resp_400 VisibilityPacketCaptureObjectTemplatesA#es_resp_400}
  */
  readonly esResp400?: number;
  /**
  * Enable automatic packet-capture for Response status 500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#es_resp_500 VisibilityPacketCaptureObjectTemplatesA#es_resp_500}
  */
  readonly esResp500?: number;
  /**
  * Enable automatic packet-capture for Response status 3xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#resp_3xx VisibilityPacketCaptureObjectTemplatesA#resp_3xx}
  */
  readonly resp3Xx?: number;
  /**
  * Enable automatic packet-capture for Response status 4xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#resp_4xx VisibilityPacketCaptureObjectTemplatesA#resp_4xx}
  */
  readonly resp4Xx?: number;
  /**
  * Enable automatic packet-capture for Response status 5xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#resp_5xx VisibilityPacketCaptureObjectTemplatesA#resp_5xx}
  */
  readonly resp5Xx?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    es_resp_300: cdktf.numberToTerraform(struct!.esResp300),
    es_resp_400: cdktf.numberToTerraform(struct!.esResp400),
    es_resp_500: cdktf.numberToTerraform(struct!.esResp500),
    resp_3xx: cdktf.numberToTerraform(struct!.resp3Xx),
    resp_4xx: cdktf.numberToTerraform(struct!.resp4Xx),
    resp_5xx: cdktf.numberToTerraform(struct!.resp5Xx),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateA): any {
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
    es_resp_300: {
      value: cdktf.numberToHclTerraform(struct!.esResp300),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_resp_400: {
      value: cdktf.numberToHclTerraform(struct!.esResp400),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_resp_500: {
      value: cdktf.numberToHclTerraform(struct!.esResp500),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_3xx: {
      value: cdktf.numberToHclTerraform(struct!.resp3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_4xx: {
      value: cdktf.numberToHclTerraform(struct!.resp4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_5xx: {
      value: cdktf.numberToHclTerraform(struct!.resp5Xx),
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

export class VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._esResp300 !== undefined) {
      hasAnyValues = true;
      internalValueResult.esResp300 = this._esResp300;
    }
    if (this._esResp400 !== undefined) {
      hasAnyValues = true;
      internalValueResult.esResp400 = this._esResp400;
    }
    if (this._esResp500 !== undefined) {
      hasAnyValues = true;
      internalValueResult.esResp500 = this._esResp500;
    }
    if (this._resp3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp3Xx = this._resp3Xx;
    }
    if (this._resp4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp4Xx = this._resp4Xx;
    }
    if (this._resp5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp5Xx = this._resp5Xx;
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

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._esResp300 = undefined;
      this._esResp400 = undefined;
      this._esResp500 = undefined;
      this._resp3Xx = undefined;
      this._resp4Xx = undefined;
      this._resp5Xx = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._esResp300 = value.esResp300;
      this._esResp400 = value.esResp400;
      this._esResp500 = value.esResp500;
      this._resp3Xx = value.resp3Xx;
      this._resp4Xx = value.resp4Xx;
      this._resp5Xx = value.resp5Xx;
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

  // es_resp_300 - computed: false, optional: true, required: false
  private _esResp300?: number; 
  public get esResp300() {
    return this.getNumberAttribute('es_resp_300');
  }
  public set esResp300(value: number) {
    this._esResp300 = value;
  }
  public resetEsResp300() {
    this._esResp300 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esResp300Input() {
    return this._esResp300;
  }

  // es_resp_400 - computed: false, optional: true, required: false
  private _esResp400?: number; 
  public get esResp400() {
    return this.getNumberAttribute('es_resp_400');
  }
  public set esResp400(value: number) {
    this._esResp400 = value;
  }
  public resetEsResp400() {
    this._esResp400 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esResp400Input() {
    return this._esResp400;
  }

  // es_resp_500 - computed: false, optional: true, required: false
  private _esResp500?: number; 
  public get esResp500() {
    return this.getNumberAttribute('es_resp_500');
  }
  public set esResp500(value: number) {
    this._esResp500 = value;
  }
  public resetEsResp500() {
    this._esResp500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esResp500Input() {
    return this._esResp500;
  }

  // resp_3xx - computed: false, optional: true, required: false
  private _resp3Xx?: number; 
  public get resp3Xx() {
    return this.getNumberAttribute('resp_3xx');
  }
  public set resp3Xx(value: number) {
    this._resp3Xx = value;
  }
  public resetResp3Xx() {
    this._resp3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp3XxInput() {
    return this._resp3Xx;
  }

  // resp_4xx - computed: false, optional: true, required: false
  private _resp4Xx?: number; 
  public get resp4Xx() {
    return this.getNumberAttribute('resp_4xx');
  }
  public set resp4Xx(value: number) {
    this._resp4Xx = value;
  }
  public resetResp4Xx() {
    this._resp4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp4XxInput() {
    return this._resp4Xx;
  }

  // resp_5xx - computed: false, optional: true, required: false
  private _resp5Xx?: number; 
  public get resp5Xx() {
    return this.getNumberAttribute('resp_5xx');
  }
  public set resp5Xx(value: number) {
    this._resp5Xx = value;
  }
  public resetResp5Xx() {
    this._resp5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp5XxInput() {
    return this._resp5Xx;
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
export interface VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityA {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop VisibilityPacketCaptureObjectTemplatesA#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_alert VisibilityPacketCaptureObjectTemplatesA#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_critical VisibilityPacketCaptureObjectTemplatesA#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_warning VisibilityPacketCaptureObjectTemplatesA#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error VisibilityPacketCaptureObjectTemplatesA#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_alert VisibilityPacketCaptureObjectTemplatesA#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_critical VisibilityPacketCaptureObjectTemplatesA#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_warning VisibilityPacketCaptureObjectTemplatesA#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.numberToTerraform(struct!.drop),
    drop_alert: cdktf.numberToTerraform(struct!.dropAlert),
    drop_critical: cdktf.numberToTerraform(struct!.dropCritical),
    drop_warning: cdktf.numberToTerraform(struct!.dropWarning),
    error: cdktf.numberToTerraform(struct!.error),
    error_alert: cdktf.numberToTerraform(struct!.errorAlert),
    error_critical: cdktf.numberToTerraform(struct!.errorCritical),
    error_warning: cdktf.numberToTerraform(struct!.errorWarning),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_alert: {
      value: cdktf.numberToHclTerraform(struct!.dropAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_critical: {
      value: cdktf.numberToHclTerraform(struct!.dropCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_warning: {
      value: cdktf.numberToHclTerraform(struct!.dropWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_alert: {
      value: cdktf.numberToHclTerraform(struct!.errorAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_critical: {
      value: cdktf.numberToHclTerraform(struct!.errorCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_warning: {
      value: cdktf.numberToHclTerraform(struct!.errorWarning),
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

export class VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._dropAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropAlert = this._dropAlert;
    }
    if (this._dropCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCritical = this._dropCritical;
    }
    if (this._dropWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropWarning = this._dropWarning;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._errorAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAlert = this._errorAlert;
    }
    if (this._errorCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCritical = this._errorCritical;
    }
    if (this._errorWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorWarning = this._errorWarning;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drop = undefined;
      this._dropAlert = undefined;
      this._dropCritical = undefined;
      this._dropWarning = undefined;
      this._error = undefined;
      this._errorAlert = undefined;
      this._errorCritical = undefined;
      this._errorWarning = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drop = value.drop;
      this._dropAlert = value.dropAlert;
      this._dropCritical = value.dropCritical;
      this._dropWarning = value.dropWarning;
      this._error = value.error;
      this._errorAlert = value.errorAlert;
      this._errorCritical = value.errorCritical;
      this._errorWarning = value.errorWarning;
      this._uuid = value.uuid;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_alert - computed: false, optional: true, required: false
  private _dropAlert?: number; 
  public get dropAlert() {
    return this.getNumberAttribute('drop_alert');
  }
  public set dropAlert(value: number) {
    this._dropAlert = value;
  }
  public resetDropAlert() {
    this._dropAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAlertInput() {
    return this._dropAlert;
  }

  // drop_critical - computed: false, optional: true, required: false
  private _dropCritical?: number; 
  public get dropCritical() {
    return this.getNumberAttribute('drop_critical');
  }
  public set dropCritical(value: number) {
    this._dropCritical = value;
  }
  public resetDropCritical() {
    this._dropCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCriticalInput() {
    return this._dropCritical;
  }

  // drop_warning - computed: false, optional: true, required: false
  private _dropWarning?: number; 
  public get dropWarning() {
    return this.getNumberAttribute('drop_warning');
  }
  public set dropWarning(value: number) {
    this._dropWarning = value;
  }
  public resetDropWarning() {
    this._dropWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWarningInput() {
    return this._dropWarning;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // error_alert - computed: false, optional: true, required: false
  private _errorAlert?: number; 
  public get errorAlert() {
    return this.getNumberAttribute('error_alert');
  }
  public set errorAlert(value: number) {
    this._errorAlert = value;
  }
  public resetErrorAlert() {
    this._errorAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAlertInput() {
    return this._errorAlert;
  }

  // error_critical - computed: false, optional: true, required: false
  private _errorCritical?: number; 
  public get errorCritical() {
    return this.getNumberAttribute('error_critical');
  }
  public set errorCritical(value: number) {
    this._errorCritical = value;
  }
  public resetErrorCritical() {
    this._errorCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCriticalInput() {
    return this._errorCritical;
  }

  // error_warning - computed: false, optional: true, required: false
  private _errorWarning?: number; 
  public get errorWarning() {
    return this.getNumberAttribute('error_warning');
  }
  public set errorWarning(value: number) {
    this._errorWarning = value;
  }
  public resetErrorWarning() {
    this._errorWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorWarningInput() {
    return this._errorWarning;
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
export interface VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListStructA {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#capture_config VisibilityPacketCaptureObjectTemplatesA#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#name VisibilityPacketCaptureObjectTemplatesA#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#user_tag VisibilityPacketCaptureObjectTemplatesA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateA;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesA#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityA;
}

export function visibilityPacketCaptureObjectTemplatesSlbServiceTmplListStructAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config: cdktf.stringToTerraform(struct!.captureConfig),
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    trigger_stats_inc: visibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncAToTerraform(struct!.triggerStatsInc),
    trigger_stats_rate: visibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateAToTerraform(struct!.triggerStatsRate),
    trigger_stats_severity: visibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityAToTerraform(struct!.triggerStatsSeverity),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbServiceTmplListStructAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config: {
      value: cdktf.stringToHclTerraform(struct!.captureConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_stats_inc: {
      value: visibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncAToHclTerraform(struct!.triggerStatsInc),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncAList",
    },
    trigger_stats_rate: {
      value: visibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateAToHclTerraform(struct!.triggerStatsRate),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateAList",
    },
    trigger_stats_severity: {
      value: visibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityAToHclTerraform(struct!.triggerStatsSeverity),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfig = this._captureConfig;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._triggerStatsInc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsInc = this._triggerStatsInc?.internalValue;
    }
    if (this._triggerStatsRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsRate = this._triggerStatsRate?.internalValue;
    }
    if (this._triggerStatsSeverity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsSeverity = this._triggerStatsSeverity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureConfig = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._triggerStatsInc.internalValue = undefined;
      this._triggerStatsRate.internalValue = undefined;
      this._triggerStatsSeverity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureConfig = value.captureConfig;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._triggerStatsInc.internalValue = value.triggerStatsInc;
      this._triggerStatsRate.internalValue = value.triggerStatsRate;
      this._triggerStatsSeverity.internalValue = value.triggerStatsSeverity;
    }
  }

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsRateA) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // trigger_stats_severity - computed: false, optional: true, required: false
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityAOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListTriggerStatsSeverityA) {
    this._triggerStatsSeverity.internalValue = value;
  }
  public resetTriggerStatsSeverity() {
    this._triggerStatsSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsSeverityInput() {
    return this._triggerStatsSeverity.internalValue;
  }
}

export class VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListStructAList extends cdktf.ComplexList {
  public internalValue? : VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListStructA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListStructAOutputReference {
    return new VisibilityPacketCaptureObjectTemplatesSlbServiceTmplListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for slbTemplateCacheContentToobig, help content_toobig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#content_toobig VisibilityPacketCaptureObjectTemplatesA#content_toobig}
  */
  readonly contentToobig?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheContentToosmall, help content_toosmall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#content_toosmall VisibilityPacketCaptureObjectTemplatesA#content_toosmall}
  */
  readonly contentToosmall?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheEntryCreateFailures, help entry_create_failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#entry_create_failures VisibilityPacketCaptureObjectTemplatesA#entry_create_failures}
  */
  readonly entryCreateFailures?: number;
  /**
  * Enable automatic packet-capture for header_save_error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#header_save_error VisibilityPacketCaptureObjectTemplatesA#header_save_error}
  */
  readonly headerSaveError?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheNcReqHeader, help nc_req_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#nc_req_header VisibilityPacketCaptureObjectTemplatesA#nc_req_header}
  */
  readonly ncReqHeader?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheNcResHeader, help nc_res_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#nc_res_header VisibilityPacketCaptureObjectTemplatesA#nc_res_header}
  */
  readonly ncResHeader?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheRvFailure, help rv_failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#rv_failure VisibilityPacketCaptureObjectTemplatesA#rv_failure}
  */
  readonly rvFailure?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_toobig: cdktf.numberToTerraform(struct!.contentToobig),
    content_toosmall: cdktf.numberToTerraform(struct!.contentToosmall),
    entry_create_failures: cdktf.numberToTerraform(struct!.entryCreateFailures),
    header_save_error: cdktf.numberToTerraform(struct!.headerSaveError),
    nc_req_header: cdktf.numberToTerraform(struct!.ncReqHeader),
    nc_res_header: cdktf.numberToTerraform(struct!.ncResHeader),
    rv_failure: cdktf.numberToTerraform(struct!.rvFailure),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_toobig: {
      value: cdktf.numberToHclTerraform(struct!.contentToobig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content_toosmall: {
      value: cdktf.numberToHclTerraform(struct!.contentToosmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_create_failures: {
      value: cdktf.numberToHclTerraform(struct!.entryCreateFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_save_error: {
      value: cdktf.numberToHclTerraform(struct!.headerSaveError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nc_req_header: {
      value: cdktf.numberToHclTerraform(struct!.ncReqHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nc_res_header: {
      value: cdktf.numberToHclTerraform(struct!.ncResHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rv_failure: {
      value: cdktf.numberToHclTerraform(struct!.rvFailure),
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

export class VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentToobig !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentToobig = this._contentToobig;
    }
    if (this._contentToosmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentToosmall = this._contentToosmall;
    }
    if (this._entryCreateFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCreateFailures = this._entryCreateFailures;
    }
    if (this._headerSaveError !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSaveError = this._headerSaveError;
    }
    if (this._ncReqHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncReqHeader = this._ncReqHeader;
    }
    if (this._ncResHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncResHeader = this._ncResHeader;
    }
    if (this._rvFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.rvFailure = this._rvFailure;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentToobig = undefined;
      this._contentToosmall = undefined;
      this._entryCreateFailures = undefined;
      this._headerSaveError = undefined;
      this._ncReqHeader = undefined;
      this._ncResHeader = undefined;
      this._rvFailure = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentToobig = value.contentToobig;
      this._contentToosmall = value.contentToosmall;
      this._entryCreateFailures = value.entryCreateFailures;
      this._headerSaveError = value.headerSaveError;
      this._ncReqHeader = value.ncReqHeader;
      this._ncResHeader = value.ncResHeader;
      this._rvFailure = value.rvFailure;
      this._uuid = value.uuid;
    }
  }

  // content_toobig - computed: false, optional: true, required: false
  private _contentToobig?: number; 
  public get contentToobig() {
    return this.getNumberAttribute('content_toobig');
  }
  public set contentToobig(value: number) {
    this._contentToobig = value;
  }
  public resetContentToobig() {
    this._contentToobig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentToobigInput() {
    return this._contentToobig;
  }

  // content_toosmall - computed: false, optional: true, required: false
  private _contentToosmall?: number; 
  public get contentToosmall() {
    return this.getNumberAttribute('content_toosmall');
  }
  public set contentToosmall(value: number) {
    this._contentToosmall = value;
  }
  public resetContentToosmall() {
    this._contentToosmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentToosmallInput() {
    return this._contentToosmall;
  }

  // entry_create_failures - computed: false, optional: true, required: false
  private _entryCreateFailures?: number; 
  public get entryCreateFailures() {
    return this.getNumberAttribute('entry_create_failures');
  }
  public set entryCreateFailures(value: number) {
    this._entryCreateFailures = value;
  }
  public resetEntryCreateFailures() {
    this._entryCreateFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCreateFailuresInput() {
    return this._entryCreateFailures;
  }

  // header_save_error - computed: false, optional: true, required: false
  private _headerSaveError?: number; 
  public get headerSaveError() {
    return this.getNumberAttribute('header_save_error');
  }
  public set headerSaveError(value: number) {
    this._headerSaveError = value;
  }
  public resetHeaderSaveError() {
    this._headerSaveError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSaveErrorInput() {
    return this._headerSaveError;
  }

  // nc_req_header - computed: false, optional: true, required: false
  private _ncReqHeader?: number; 
  public get ncReqHeader() {
    return this.getNumberAttribute('nc_req_header');
  }
  public set ncReqHeader(value: number) {
    this._ncReqHeader = value;
  }
  public resetNcReqHeader() {
    this._ncReqHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncReqHeaderInput() {
    return this._ncReqHeader;
  }

  // nc_res_header - computed: false, optional: true, required: false
  private _ncResHeader?: number; 
  public get ncResHeader() {
    return this.getNumberAttribute('nc_res_header');
  }
  public set ncResHeader(value: number) {
    this._ncResHeader = value;
  }
  public resetNcResHeader() {
    this._ncResHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncResHeaderInput() {
    return this._ncResHeader;
  }

  // rv_failure - computed: false, optional: true, required: false
  private _rvFailure?: number; 
  public get rvFailure() {
    return this.getNumberAttribute('rv_failure');
  }
  public set rvFailure(value: number) {
    this._rvFailure = value;
  }
  public resetRvFailure() {
    this._rvFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rvFailureInput() {
    return this._rvFailure;
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
export interface VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for slbTemplateCacheContentToobig, help content_toobig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#content_toobig VisibilityPacketCaptureObjectTemplatesA#content_toobig}
  */
  readonly contentToobig?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheContentToosmall, help content_toosmall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#content_toosmall VisibilityPacketCaptureObjectTemplatesA#content_toosmall}
  */
  readonly contentToosmall?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#duration VisibilityPacketCaptureObjectTemplatesA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheEntryCreateFailures, help entry_create_failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#entry_create_failures VisibilityPacketCaptureObjectTemplatesA#entry_create_failures}
  */
  readonly entryCreateFailures?: number;
  /**
  * Enable automatic packet-capture for header_save_error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#header_save_error VisibilityPacketCaptureObjectTemplatesA#header_save_error}
  */
  readonly headerSaveError?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheNcReqHeader, help nc_req_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#nc_req_header VisibilityPacketCaptureObjectTemplatesA#nc_req_header}
  */
  readonly ncReqHeader?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheNcResHeader, help nc_res_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#nc_res_header VisibilityPacketCaptureObjectTemplatesA#nc_res_header}
  */
  readonly ncResHeader?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheRvFailure, help rv_failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#rv_failure VisibilityPacketCaptureObjectTemplatesA#rv_failure}
  */
  readonly rvFailure?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_toobig: cdktf.numberToTerraform(struct!.contentToobig),
    content_toosmall: cdktf.numberToTerraform(struct!.contentToosmall),
    duration: cdktf.numberToTerraform(struct!.duration),
    entry_create_failures: cdktf.numberToTerraform(struct!.entryCreateFailures),
    header_save_error: cdktf.numberToTerraform(struct!.headerSaveError),
    nc_req_header: cdktf.numberToTerraform(struct!.ncReqHeader),
    nc_res_header: cdktf.numberToTerraform(struct!.ncResHeader),
    rv_failure: cdktf.numberToTerraform(struct!.rvFailure),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_toobig: {
      value: cdktf.numberToHclTerraform(struct!.contentToobig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content_toosmall: {
      value: cdktf.numberToHclTerraform(struct!.contentToosmall),
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
    entry_create_failures: {
      value: cdktf.numberToHclTerraform(struct!.entryCreateFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_save_error: {
      value: cdktf.numberToHclTerraform(struct!.headerSaveError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nc_req_header: {
      value: cdktf.numberToHclTerraform(struct!.ncReqHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nc_res_header: {
      value: cdktf.numberToHclTerraform(struct!.ncResHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rv_failure: {
      value: cdktf.numberToHclTerraform(struct!.rvFailure),
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

export class VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentToobig !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentToobig = this._contentToobig;
    }
    if (this._contentToosmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentToosmall = this._contentToosmall;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._entryCreateFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCreateFailures = this._entryCreateFailures;
    }
    if (this._headerSaveError !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSaveError = this._headerSaveError;
    }
    if (this._ncReqHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncReqHeader = this._ncReqHeader;
    }
    if (this._ncResHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncResHeader = this._ncResHeader;
    }
    if (this._rvFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.rvFailure = this._rvFailure;
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

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentToobig = undefined;
      this._contentToosmall = undefined;
      this._duration = undefined;
      this._entryCreateFailures = undefined;
      this._headerSaveError = undefined;
      this._ncReqHeader = undefined;
      this._ncResHeader = undefined;
      this._rvFailure = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentToobig = value.contentToobig;
      this._contentToosmall = value.contentToosmall;
      this._duration = value.duration;
      this._entryCreateFailures = value.entryCreateFailures;
      this._headerSaveError = value.headerSaveError;
      this._ncReqHeader = value.ncReqHeader;
      this._ncResHeader = value.ncResHeader;
      this._rvFailure = value.rvFailure;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

  // content_toobig - computed: false, optional: true, required: false
  private _contentToobig?: number; 
  public get contentToobig() {
    return this.getNumberAttribute('content_toobig');
  }
  public set contentToobig(value: number) {
    this._contentToobig = value;
  }
  public resetContentToobig() {
    this._contentToobig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentToobigInput() {
    return this._contentToobig;
  }

  // content_toosmall - computed: false, optional: true, required: false
  private _contentToosmall?: number; 
  public get contentToosmall() {
    return this.getNumberAttribute('content_toosmall');
  }
  public set contentToosmall(value: number) {
    this._contentToosmall = value;
  }
  public resetContentToosmall() {
    this._contentToosmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentToosmallInput() {
    return this._contentToosmall;
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

  // entry_create_failures - computed: false, optional: true, required: false
  private _entryCreateFailures?: number; 
  public get entryCreateFailures() {
    return this.getNumberAttribute('entry_create_failures');
  }
  public set entryCreateFailures(value: number) {
    this._entryCreateFailures = value;
  }
  public resetEntryCreateFailures() {
    this._entryCreateFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCreateFailuresInput() {
    return this._entryCreateFailures;
  }

  // header_save_error - computed: false, optional: true, required: false
  private _headerSaveError?: number; 
  public get headerSaveError() {
    return this.getNumberAttribute('header_save_error');
  }
  public set headerSaveError(value: number) {
    this._headerSaveError = value;
  }
  public resetHeaderSaveError() {
    this._headerSaveError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSaveErrorInput() {
    return this._headerSaveError;
  }

  // nc_req_header - computed: false, optional: true, required: false
  private _ncReqHeader?: number; 
  public get ncReqHeader() {
    return this.getNumberAttribute('nc_req_header');
  }
  public set ncReqHeader(value: number) {
    this._ncReqHeader = value;
  }
  public resetNcReqHeader() {
    this._ncReqHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncReqHeaderInput() {
    return this._ncReqHeader;
  }

  // nc_res_header - computed: false, optional: true, required: false
  private _ncResHeader?: number; 
  public get ncResHeader() {
    return this.getNumberAttribute('nc_res_header');
  }
  public set ncResHeader(value: number) {
    this._ncResHeader = value;
  }
  public resetNcResHeader() {
    this._ncResHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncResHeaderInput() {
    return this._ncResHeader;
  }

  // rv_failure - computed: false, optional: true, required: false
  private _rvFailure?: number; 
  public get rvFailure() {
    return this.getNumberAttribute('rv_failure');
  }
  public set rvFailure(value: number) {
    this._rvFailure = value;
  }
  public resetRvFailure() {
    this._rvFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rvFailureInput() {
    return this._rvFailure;
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
export interface VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityA {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop VisibilityPacketCaptureObjectTemplatesA#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_alert VisibilityPacketCaptureObjectTemplatesA#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_critical VisibilityPacketCaptureObjectTemplatesA#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_warning VisibilityPacketCaptureObjectTemplatesA#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error VisibilityPacketCaptureObjectTemplatesA#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_alert VisibilityPacketCaptureObjectTemplatesA#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_critical VisibilityPacketCaptureObjectTemplatesA#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_warning VisibilityPacketCaptureObjectTemplatesA#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.numberToTerraform(struct!.drop),
    drop_alert: cdktf.numberToTerraform(struct!.dropAlert),
    drop_critical: cdktf.numberToTerraform(struct!.dropCritical),
    drop_warning: cdktf.numberToTerraform(struct!.dropWarning),
    error: cdktf.numberToTerraform(struct!.error),
    error_alert: cdktf.numberToTerraform(struct!.errorAlert),
    error_critical: cdktf.numberToTerraform(struct!.errorCritical),
    error_warning: cdktf.numberToTerraform(struct!.errorWarning),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_alert: {
      value: cdktf.numberToHclTerraform(struct!.dropAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_critical: {
      value: cdktf.numberToHclTerraform(struct!.dropCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_warning: {
      value: cdktf.numberToHclTerraform(struct!.dropWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_alert: {
      value: cdktf.numberToHclTerraform(struct!.errorAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_critical: {
      value: cdktf.numberToHclTerraform(struct!.errorCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_warning: {
      value: cdktf.numberToHclTerraform(struct!.errorWarning),
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

export class VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._dropAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropAlert = this._dropAlert;
    }
    if (this._dropCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCritical = this._dropCritical;
    }
    if (this._dropWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropWarning = this._dropWarning;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._errorAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAlert = this._errorAlert;
    }
    if (this._errorCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCritical = this._errorCritical;
    }
    if (this._errorWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorWarning = this._errorWarning;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drop = undefined;
      this._dropAlert = undefined;
      this._dropCritical = undefined;
      this._dropWarning = undefined;
      this._error = undefined;
      this._errorAlert = undefined;
      this._errorCritical = undefined;
      this._errorWarning = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drop = value.drop;
      this._dropAlert = value.dropAlert;
      this._dropCritical = value.dropCritical;
      this._dropWarning = value.dropWarning;
      this._error = value.error;
      this._errorAlert = value.errorAlert;
      this._errorCritical = value.errorCritical;
      this._errorWarning = value.errorWarning;
      this._uuid = value.uuid;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_alert - computed: false, optional: true, required: false
  private _dropAlert?: number; 
  public get dropAlert() {
    return this.getNumberAttribute('drop_alert');
  }
  public set dropAlert(value: number) {
    this._dropAlert = value;
  }
  public resetDropAlert() {
    this._dropAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAlertInput() {
    return this._dropAlert;
  }

  // drop_critical - computed: false, optional: true, required: false
  private _dropCritical?: number; 
  public get dropCritical() {
    return this.getNumberAttribute('drop_critical');
  }
  public set dropCritical(value: number) {
    this._dropCritical = value;
  }
  public resetDropCritical() {
    this._dropCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCriticalInput() {
    return this._dropCritical;
  }

  // drop_warning - computed: false, optional: true, required: false
  private _dropWarning?: number; 
  public get dropWarning() {
    return this.getNumberAttribute('drop_warning');
  }
  public set dropWarning(value: number) {
    this._dropWarning = value;
  }
  public resetDropWarning() {
    this._dropWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWarningInput() {
    return this._dropWarning;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // error_alert - computed: false, optional: true, required: false
  private _errorAlert?: number; 
  public get errorAlert() {
    return this.getNumberAttribute('error_alert');
  }
  public set errorAlert(value: number) {
    this._errorAlert = value;
  }
  public resetErrorAlert() {
    this._errorAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAlertInput() {
    return this._errorAlert;
  }

  // error_critical - computed: false, optional: true, required: false
  private _errorCritical?: number; 
  public get errorCritical() {
    return this.getNumberAttribute('error_critical');
  }
  public set errorCritical(value: number) {
    this._errorCritical = value;
  }
  public resetErrorCritical() {
    this._errorCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCriticalInput() {
    return this._errorCritical;
  }

  // error_warning - computed: false, optional: true, required: false
  private _errorWarning?: number; 
  public get errorWarning() {
    return this.getNumberAttribute('error_warning');
  }
  public set errorWarning(value: number) {
    this._errorWarning = value;
  }
  public resetErrorWarning() {
    this._errorWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorWarningInput() {
    return this._errorWarning;
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
export interface VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListStructA {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#capture_config VisibilityPacketCaptureObjectTemplatesA#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#name VisibilityPacketCaptureObjectTemplatesA#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#user_tag VisibilityPacketCaptureObjectTemplatesA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateA;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesA#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityA;
}

export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListStructAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config: cdktf.stringToTerraform(struct!.captureConfig),
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    trigger_stats_inc: visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncAToTerraform(struct!.triggerStatsInc),
    trigger_stats_rate: visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateAToTerraform(struct!.triggerStatsRate),
    trigger_stats_severity: visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityAToTerraform(struct!.triggerStatsSeverity),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListStructAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config: {
      value: cdktf.stringToHclTerraform(struct!.captureConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_stats_inc: {
      value: visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncAToHclTerraform(struct!.triggerStatsInc),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncAList",
    },
    trigger_stats_rate: {
      value: visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateAToHclTerraform(struct!.triggerStatsRate),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateAList",
    },
    trigger_stats_severity: {
      value: visibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityAToHclTerraform(struct!.triggerStatsSeverity),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfig = this._captureConfig;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._triggerStatsInc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsInc = this._triggerStatsInc?.internalValue;
    }
    if (this._triggerStatsRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsRate = this._triggerStatsRate?.internalValue;
    }
    if (this._triggerStatsSeverity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsSeverity = this._triggerStatsSeverity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureConfig = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._triggerStatsInc.internalValue = undefined;
      this._triggerStatsRate.internalValue = undefined;
      this._triggerStatsSeverity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureConfig = value.captureConfig;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._triggerStatsInc.internalValue = value.triggerStatsInc;
      this._triggerStatsRate.internalValue = value.triggerStatsRate;
      this._triggerStatsSeverity.internalValue = value.triggerStatsSeverity;
    }
  }

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsRateA) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // trigger_stats_severity - computed: false, optional: true, required: false
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityAOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListTriggerStatsSeverityA) {
    this._triggerStatsSeverity.internalValue = value;
  }
  public resetTriggerStatsSeverity() {
    this._triggerStatsSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsSeverityInput() {
    return this._triggerStatsSeverity.internalValue;
  }
}

export class VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListStructAList extends cdktf.ComplexList {
  public internalValue? : VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListStructA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListStructAOutputReference {
    return new VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Compression miss no client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#compression_miss_no_client VisibilityPacketCaptureObjectTemplatesA#compression_miss_no_client}
  */
  readonly compressionMissNoClient?: number;
  /**
  * Enable automatic packet-capture for Compression miss template exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#compression_miss_template_exclusion VisibilityPacketCaptureObjectTemplatesA#compression_miss_template_exclusion}
  */
  readonly compressionMissTemplateExclusion?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting Bad FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#dnsrrl_bad_fqdn VisibilityPacketCaptureObjectTemplatesA#dnsrrl_bad_fqdn}
  */
  readonly dnsrrlBadFqdn?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting NX Responses Exceed Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#dnsrrl_nx_exceed VisibilityPacketCaptureObjectTemplatesA#dnsrrl_nx_exceed}
  */
  readonly dnsrrlNxExceed?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting Total Responses Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#dnsrrl_total_dropped VisibilityPacketCaptureObjectTemplatesA#dnsrrl_total_dropped}
  */
  readonly dnsrrlTotalDropped?: number;
  /**
  * Enable automatic packet-capture for Total failure actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#es_total_failure_actions VisibilityPacketCaptureObjectTemplatesA#es_total_failure_actions}
  */
  readonly esTotalFailureActions?: number;
  /**
  * Enable automatic packet-capture for Geo-location Deny count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#loc_deny VisibilityPacketCaptureObjectTemplatesA#loc_deny}
  */
  readonly locDeny?: number;
  /**
  * Enable automatic packet-capture for Total MF DNS packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#total_mf_dns_pkts VisibilityPacketCaptureObjectTemplatesA#total_mf_dns_pkts}
  */
  readonly totalMfDnsPkts?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_miss_no_client: cdktf.numberToTerraform(struct!.compressionMissNoClient),
    compression_miss_template_exclusion: cdktf.numberToTerraform(struct!.compressionMissTemplateExclusion),
    dnsrrl_bad_fqdn: cdktf.numberToTerraform(struct!.dnsrrlBadFqdn),
    dnsrrl_nx_exceed: cdktf.numberToTerraform(struct!.dnsrrlNxExceed),
    dnsrrl_total_dropped: cdktf.numberToTerraform(struct!.dnsrrlTotalDropped),
    es_total_failure_actions: cdktf.numberToTerraform(struct!.esTotalFailureActions),
    loc_deny: cdktf.numberToTerraform(struct!.locDeny),
    total_mf_dns_pkts: cdktf.numberToTerraform(struct!.totalMfDnsPkts),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_miss_no_client: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissNoClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_miss_template_exclusion: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissTemplateExclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_bad_fqdn: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlBadFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_nx_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlNxExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_total_dropped: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlTotalDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_total_failure_actions: {
      value: cdktf.numberToHclTerraform(struct!.esTotalFailureActions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loc_deny: {
      value: cdktf.numberToHclTerraform(struct!.locDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_mf_dns_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalMfDnsPkts),
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

export class VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionMissNoClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissNoClient = this._compressionMissNoClient;
    }
    if (this._compressionMissTemplateExclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissTemplateExclusion = this._compressionMissTemplateExclusion;
    }
    if (this._dnsrrlBadFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlBadFqdn = this._dnsrrlBadFqdn;
    }
    if (this._dnsrrlNxExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlNxExceed = this._dnsrrlNxExceed;
    }
    if (this._dnsrrlTotalDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlTotalDropped = this._dnsrrlTotalDropped;
    }
    if (this._esTotalFailureActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.esTotalFailureActions = this._esTotalFailureActions;
    }
    if (this._locDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.locDeny = this._locDeny;
    }
    if (this._totalMfDnsPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMfDnsPkts = this._totalMfDnsPkts;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionMissNoClient = undefined;
      this._compressionMissTemplateExclusion = undefined;
      this._dnsrrlBadFqdn = undefined;
      this._dnsrrlNxExceed = undefined;
      this._dnsrrlTotalDropped = undefined;
      this._esTotalFailureActions = undefined;
      this._locDeny = undefined;
      this._totalMfDnsPkts = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionMissNoClient = value.compressionMissNoClient;
      this._compressionMissTemplateExclusion = value.compressionMissTemplateExclusion;
      this._dnsrrlBadFqdn = value.dnsrrlBadFqdn;
      this._dnsrrlNxExceed = value.dnsrrlNxExceed;
      this._dnsrrlTotalDropped = value.dnsrrlTotalDropped;
      this._esTotalFailureActions = value.esTotalFailureActions;
      this._locDeny = value.locDeny;
      this._totalMfDnsPkts = value.totalMfDnsPkts;
      this._uuid = value.uuid;
    }
  }

  // compression_miss_no_client - computed: false, optional: true, required: false
  private _compressionMissNoClient?: number; 
  public get compressionMissNoClient() {
    return this.getNumberAttribute('compression_miss_no_client');
  }
  public set compressionMissNoClient(value: number) {
    this._compressionMissNoClient = value;
  }
  public resetCompressionMissNoClient() {
    this._compressionMissNoClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissNoClientInput() {
    return this._compressionMissNoClient;
  }

  // compression_miss_template_exclusion - computed: false, optional: true, required: false
  private _compressionMissTemplateExclusion?: number; 
  public get compressionMissTemplateExclusion() {
    return this.getNumberAttribute('compression_miss_template_exclusion');
  }
  public set compressionMissTemplateExclusion(value: number) {
    this._compressionMissTemplateExclusion = value;
  }
  public resetCompressionMissTemplateExclusion() {
    this._compressionMissTemplateExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissTemplateExclusionInput() {
    return this._compressionMissTemplateExclusion;
  }

  // dnsrrl_bad_fqdn - computed: false, optional: true, required: false
  private _dnsrrlBadFqdn?: number; 
  public get dnsrrlBadFqdn() {
    return this.getNumberAttribute('dnsrrl_bad_fqdn');
  }
  public set dnsrrlBadFqdn(value: number) {
    this._dnsrrlBadFqdn = value;
  }
  public resetDnsrrlBadFqdn() {
    this._dnsrrlBadFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlBadFqdnInput() {
    return this._dnsrrlBadFqdn;
  }

  // dnsrrl_nx_exceed - computed: false, optional: true, required: false
  private _dnsrrlNxExceed?: number; 
  public get dnsrrlNxExceed() {
    return this.getNumberAttribute('dnsrrl_nx_exceed');
  }
  public set dnsrrlNxExceed(value: number) {
    this._dnsrrlNxExceed = value;
  }
  public resetDnsrrlNxExceed() {
    this._dnsrrlNxExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlNxExceedInput() {
    return this._dnsrrlNxExceed;
  }

  // dnsrrl_total_dropped - computed: false, optional: true, required: false
  private _dnsrrlTotalDropped?: number; 
  public get dnsrrlTotalDropped() {
    return this.getNumberAttribute('dnsrrl_total_dropped');
  }
  public set dnsrrlTotalDropped(value: number) {
    this._dnsrrlTotalDropped = value;
  }
  public resetDnsrrlTotalDropped() {
    this._dnsrrlTotalDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlTotalDroppedInput() {
    return this._dnsrrlTotalDropped;
  }

  // es_total_failure_actions - computed: false, optional: true, required: false
  private _esTotalFailureActions?: number; 
  public get esTotalFailureActions() {
    return this.getNumberAttribute('es_total_failure_actions');
  }
  public set esTotalFailureActions(value: number) {
    this._esTotalFailureActions = value;
  }
  public resetEsTotalFailureActions() {
    this._esTotalFailureActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esTotalFailureActionsInput() {
    return this._esTotalFailureActions;
  }

  // loc_deny - computed: false, optional: true, required: false
  private _locDeny?: number; 
  public get locDeny() {
    return this.getNumberAttribute('loc_deny');
  }
  public set locDeny(value: number) {
    this._locDeny = value;
  }
  public resetLocDeny() {
    this._locDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locDenyInput() {
    return this._locDeny;
  }

  // total_mf_dns_pkts - computed: false, optional: true, required: false
  private _totalMfDnsPkts?: number; 
  public get totalMfDnsPkts() {
    return this.getNumberAttribute('total_mf_dns_pkts');
  }
  public set totalMfDnsPkts(value: number) {
    this._totalMfDnsPkts = value;
  }
  public resetTotalMfDnsPkts() {
    this._totalMfDnsPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMfDnsPktsInput() {
    return this._totalMfDnsPkts;
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
export interface VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Compression miss no client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#compression_miss_no_client VisibilityPacketCaptureObjectTemplatesA#compression_miss_no_client}
  */
  readonly compressionMissNoClient?: number;
  /**
  * Enable automatic packet-capture for Compression miss template exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#compression_miss_template_exclusion VisibilityPacketCaptureObjectTemplatesA#compression_miss_template_exclusion}
  */
  readonly compressionMissTemplateExclusion?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting Bad FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#dnsrrl_bad_fqdn VisibilityPacketCaptureObjectTemplatesA#dnsrrl_bad_fqdn}
  */
  readonly dnsrrlBadFqdn?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting NX Responses Exceed Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#dnsrrl_nx_exceed VisibilityPacketCaptureObjectTemplatesA#dnsrrl_nx_exceed}
  */
  readonly dnsrrlNxExceed?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting Total Responses Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#dnsrrl_total_dropped VisibilityPacketCaptureObjectTemplatesA#dnsrrl_total_dropped}
  */
  readonly dnsrrlTotalDropped?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#duration VisibilityPacketCaptureObjectTemplatesA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Total failure actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#es_total_failure_actions VisibilityPacketCaptureObjectTemplatesA#es_total_failure_actions}
  */
  readonly esTotalFailureActions?: number;
  /**
  * Enable automatic packet-capture for Geo-location Deny count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#loc_deny VisibilityPacketCaptureObjectTemplatesA#loc_deny}
  */
  readonly locDeny?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Total MF DNS packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#total_mf_dns_pkts VisibilityPacketCaptureObjectTemplatesA#total_mf_dns_pkts}
  */
  readonly totalMfDnsPkts?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_miss_no_client: cdktf.numberToTerraform(struct!.compressionMissNoClient),
    compression_miss_template_exclusion: cdktf.numberToTerraform(struct!.compressionMissTemplateExclusion),
    dnsrrl_bad_fqdn: cdktf.numberToTerraform(struct!.dnsrrlBadFqdn),
    dnsrrl_nx_exceed: cdktf.numberToTerraform(struct!.dnsrrlNxExceed),
    dnsrrl_total_dropped: cdktf.numberToTerraform(struct!.dnsrrlTotalDropped),
    duration: cdktf.numberToTerraform(struct!.duration),
    es_total_failure_actions: cdktf.numberToTerraform(struct!.esTotalFailureActions),
    loc_deny: cdktf.numberToTerraform(struct!.locDeny),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    total_mf_dns_pkts: cdktf.numberToTerraform(struct!.totalMfDnsPkts),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_miss_no_client: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissNoClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_miss_template_exclusion: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissTemplateExclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_bad_fqdn: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlBadFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_nx_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlNxExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_total_dropped: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlTotalDropped),
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
    es_total_failure_actions: {
      value: cdktf.numberToHclTerraform(struct!.esTotalFailureActions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loc_deny: {
      value: cdktf.numberToHclTerraform(struct!.locDeny),
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
    total_mf_dns_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalMfDnsPkts),
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

export class VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionMissNoClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissNoClient = this._compressionMissNoClient;
    }
    if (this._compressionMissTemplateExclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissTemplateExclusion = this._compressionMissTemplateExclusion;
    }
    if (this._dnsrrlBadFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlBadFqdn = this._dnsrrlBadFqdn;
    }
    if (this._dnsrrlNxExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlNxExceed = this._dnsrrlNxExceed;
    }
    if (this._dnsrrlTotalDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlTotalDropped = this._dnsrrlTotalDropped;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._esTotalFailureActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.esTotalFailureActions = this._esTotalFailureActions;
    }
    if (this._locDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.locDeny = this._locDeny;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._totalMfDnsPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMfDnsPkts = this._totalMfDnsPkts;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionMissNoClient = undefined;
      this._compressionMissTemplateExclusion = undefined;
      this._dnsrrlBadFqdn = undefined;
      this._dnsrrlNxExceed = undefined;
      this._dnsrrlTotalDropped = undefined;
      this._duration = undefined;
      this._esTotalFailureActions = undefined;
      this._locDeny = undefined;
      this._thresholdExceededBy = undefined;
      this._totalMfDnsPkts = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionMissNoClient = value.compressionMissNoClient;
      this._compressionMissTemplateExclusion = value.compressionMissTemplateExclusion;
      this._dnsrrlBadFqdn = value.dnsrrlBadFqdn;
      this._dnsrrlNxExceed = value.dnsrrlNxExceed;
      this._dnsrrlTotalDropped = value.dnsrrlTotalDropped;
      this._duration = value.duration;
      this._esTotalFailureActions = value.esTotalFailureActions;
      this._locDeny = value.locDeny;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._totalMfDnsPkts = value.totalMfDnsPkts;
      this._uuid = value.uuid;
    }
  }

  // compression_miss_no_client - computed: false, optional: true, required: false
  private _compressionMissNoClient?: number; 
  public get compressionMissNoClient() {
    return this.getNumberAttribute('compression_miss_no_client');
  }
  public set compressionMissNoClient(value: number) {
    this._compressionMissNoClient = value;
  }
  public resetCompressionMissNoClient() {
    this._compressionMissNoClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissNoClientInput() {
    return this._compressionMissNoClient;
  }

  // compression_miss_template_exclusion - computed: false, optional: true, required: false
  private _compressionMissTemplateExclusion?: number; 
  public get compressionMissTemplateExclusion() {
    return this.getNumberAttribute('compression_miss_template_exclusion');
  }
  public set compressionMissTemplateExclusion(value: number) {
    this._compressionMissTemplateExclusion = value;
  }
  public resetCompressionMissTemplateExclusion() {
    this._compressionMissTemplateExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissTemplateExclusionInput() {
    return this._compressionMissTemplateExclusion;
  }

  // dnsrrl_bad_fqdn - computed: false, optional: true, required: false
  private _dnsrrlBadFqdn?: number; 
  public get dnsrrlBadFqdn() {
    return this.getNumberAttribute('dnsrrl_bad_fqdn');
  }
  public set dnsrrlBadFqdn(value: number) {
    this._dnsrrlBadFqdn = value;
  }
  public resetDnsrrlBadFqdn() {
    this._dnsrrlBadFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlBadFqdnInput() {
    return this._dnsrrlBadFqdn;
  }

  // dnsrrl_nx_exceed - computed: false, optional: true, required: false
  private _dnsrrlNxExceed?: number; 
  public get dnsrrlNxExceed() {
    return this.getNumberAttribute('dnsrrl_nx_exceed');
  }
  public set dnsrrlNxExceed(value: number) {
    this._dnsrrlNxExceed = value;
  }
  public resetDnsrrlNxExceed() {
    this._dnsrrlNxExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlNxExceedInput() {
    return this._dnsrrlNxExceed;
  }

  // dnsrrl_total_dropped - computed: false, optional: true, required: false
  private _dnsrrlTotalDropped?: number; 
  public get dnsrrlTotalDropped() {
    return this.getNumberAttribute('dnsrrl_total_dropped');
  }
  public set dnsrrlTotalDropped(value: number) {
    this._dnsrrlTotalDropped = value;
  }
  public resetDnsrrlTotalDropped() {
    this._dnsrrlTotalDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlTotalDroppedInput() {
    return this._dnsrrlTotalDropped;
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

  // es_total_failure_actions - computed: false, optional: true, required: false
  private _esTotalFailureActions?: number; 
  public get esTotalFailureActions() {
    return this.getNumberAttribute('es_total_failure_actions');
  }
  public set esTotalFailureActions(value: number) {
    this._esTotalFailureActions = value;
  }
  public resetEsTotalFailureActions() {
    this._esTotalFailureActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esTotalFailureActionsInput() {
    return this._esTotalFailureActions;
  }

  // loc_deny - computed: false, optional: true, required: false
  private _locDeny?: number; 
  public get locDeny() {
    return this.getNumberAttribute('loc_deny');
  }
  public set locDeny(value: number) {
    this._locDeny = value;
  }
  public resetLocDeny() {
    this._locDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locDenyInput() {
    return this._locDeny;
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

  // total_mf_dns_pkts - computed: false, optional: true, required: false
  private _totalMfDnsPkts?: number; 
  public get totalMfDnsPkts() {
    return this.getNumberAttribute('total_mf_dns_pkts');
  }
  public set totalMfDnsPkts(value: number) {
    this._totalMfDnsPkts = value;
  }
  public resetTotalMfDnsPkts() {
    this._totalMfDnsPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMfDnsPktsInput() {
    return this._totalMfDnsPkts;
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
export interface VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityA {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop VisibilityPacketCaptureObjectTemplatesA#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_alert VisibilityPacketCaptureObjectTemplatesA#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_critical VisibilityPacketCaptureObjectTemplatesA#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_warning VisibilityPacketCaptureObjectTemplatesA#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error VisibilityPacketCaptureObjectTemplatesA#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_alert VisibilityPacketCaptureObjectTemplatesA#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_critical VisibilityPacketCaptureObjectTemplatesA#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_warning VisibilityPacketCaptureObjectTemplatesA#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.numberToTerraform(struct!.drop),
    drop_alert: cdktf.numberToTerraform(struct!.dropAlert),
    drop_critical: cdktf.numberToTerraform(struct!.dropCritical),
    drop_warning: cdktf.numberToTerraform(struct!.dropWarning),
    error: cdktf.numberToTerraform(struct!.error),
    error_alert: cdktf.numberToTerraform(struct!.errorAlert),
    error_critical: cdktf.numberToTerraform(struct!.errorCritical),
    error_warning: cdktf.numberToTerraform(struct!.errorWarning),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityAOutputReference | VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_alert: {
      value: cdktf.numberToHclTerraform(struct!.dropAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_critical: {
      value: cdktf.numberToHclTerraform(struct!.dropCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_warning: {
      value: cdktf.numberToHclTerraform(struct!.dropWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_alert: {
      value: cdktf.numberToHclTerraform(struct!.errorAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_critical: {
      value: cdktf.numberToHclTerraform(struct!.errorCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_warning: {
      value: cdktf.numberToHclTerraform(struct!.errorWarning),
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

export class VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._dropAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropAlert = this._dropAlert;
    }
    if (this._dropCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCritical = this._dropCritical;
    }
    if (this._dropWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropWarning = this._dropWarning;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._errorAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAlert = this._errorAlert;
    }
    if (this._errorCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCritical = this._errorCritical;
    }
    if (this._errorWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorWarning = this._errorWarning;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drop = undefined;
      this._dropAlert = undefined;
      this._dropCritical = undefined;
      this._dropWarning = undefined;
      this._error = undefined;
      this._errorAlert = undefined;
      this._errorCritical = undefined;
      this._errorWarning = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drop = value.drop;
      this._dropAlert = value.dropAlert;
      this._dropCritical = value.dropCritical;
      this._dropWarning = value.dropWarning;
      this._error = value.error;
      this._errorAlert = value.errorAlert;
      this._errorCritical = value.errorCritical;
      this._errorWarning = value.errorWarning;
      this._uuid = value.uuid;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_alert - computed: false, optional: true, required: false
  private _dropAlert?: number; 
  public get dropAlert() {
    return this.getNumberAttribute('drop_alert');
  }
  public set dropAlert(value: number) {
    this._dropAlert = value;
  }
  public resetDropAlert() {
    this._dropAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAlertInput() {
    return this._dropAlert;
  }

  // drop_critical - computed: false, optional: true, required: false
  private _dropCritical?: number; 
  public get dropCritical() {
    return this.getNumberAttribute('drop_critical');
  }
  public set dropCritical(value: number) {
    this._dropCritical = value;
  }
  public resetDropCritical() {
    this._dropCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCriticalInput() {
    return this._dropCritical;
  }

  // drop_warning - computed: false, optional: true, required: false
  private _dropWarning?: number; 
  public get dropWarning() {
    return this.getNumberAttribute('drop_warning');
  }
  public set dropWarning(value: number) {
    this._dropWarning = value;
  }
  public resetDropWarning() {
    this._dropWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWarningInput() {
    return this._dropWarning;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // error_alert - computed: false, optional: true, required: false
  private _errorAlert?: number; 
  public get errorAlert() {
    return this.getNumberAttribute('error_alert');
  }
  public set errorAlert(value: number) {
    this._errorAlert = value;
  }
  public resetErrorAlert() {
    this._errorAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAlertInput() {
    return this._errorAlert;
  }

  // error_critical - computed: false, optional: true, required: false
  private _errorCritical?: number; 
  public get errorCritical() {
    return this.getNumberAttribute('error_critical');
  }
  public set errorCritical(value: number) {
    this._errorCritical = value;
  }
  public resetErrorCritical() {
    this._errorCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCriticalInput() {
    return this._errorCritical;
  }

  // error_warning - computed: false, optional: true, required: false
  private _errorWarning?: number; 
  public get errorWarning() {
    return this.getNumberAttribute('error_warning');
  }
  public set errorWarning(value: number) {
    this._errorWarning = value;
  }
  public resetErrorWarning() {
    this._errorWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorWarningInput() {
    return this._errorWarning;
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
export interface VisibilityPacketCaptureObjectTemplatesSlbVportTmplListStructA {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#capture_config VisibilityPacketCaptureObjectTemplatesA#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#name VisibilityPacketCaptureObjectTemplatesA#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#user_tag VisibilityPacketCaptureObjectTemplatesA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateA;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesA#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityA;
}

export function visibilityPacketCaptureObjectTemplatesSlbVportTmplListStructAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config: cdktf.stringToTerraform(struct!.captureConfig),
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    trigger_stats_inc: visibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncAToTerraform(struct!.triggerStatsInc),
    trigger_stats_rate: visibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateAToTerraform(struct!.triggerStatsRate),
    trigger_stats_severity: visibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityAToTerraform(struct!.triggerStatsSeverity),
  }
}


export function visibilityPacketCaptureObjectTemplatesSlbVportTmplListStructAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config: {
      value: cdktf.stringToHclTerraform(struct!.captureConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_stats_inc: {
      value: visibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncAToHclTerraform(struct!.triggerStatsInc),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncAList",
    },
    trigger_stats_rate: {
      value: visibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateAToHclTerraform(struct!.triggerStatsRate),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateAList",
    },
    trigger_stats_severity: {
      value: visibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityAToHclTerraform(struct!.triggerStatsSeverity),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesSlbVportTmplListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSlbVportTmplListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfig = this._captureConfig;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._triggerStatsInc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsInc = this._triggerStatsInc?.internalValue;
    }
    if (this._triggerStatsRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsRate = this._triggerStatsRate?.internalValue;
    }
    if (this._triggerStatsSeverity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsSeverity = this._triggerStatsSeverity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureConfig = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._triggerStatsInc.internalValue = undefined;
      this._triggerStatsRate.internalValue = undefined;
      this._triggerStatsSeverity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureConfig = value.captureConfig;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._triggerStatsInc.internalValue = value.triggerStatsInc;
      this._triggerStatsRate.internalValue = value.triggerStatsRate;
      this._triggerStatsSeverity.internalValue = value.triggerStatsSeverity;
    }
  }

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsRateA) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // trigger_stats_severity - computed: false, optional: true, required: false
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityAOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesSlbVportTmplListTriggerStatsSeverityA) {
    this._triggerStatsSeverity.internalValue = value;
  }
  public resetTriggerStatsSeverity() {
    this._triggerStatsSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsSeverityInput() {
    return this._triggerStatsSeverity.internalValue;
  }
}

export class VisibilityPacketCaptureObjectTemplatesSlbVportTmplListStructAList extends cdktf.ComplexList {
  public internalValue? : VisibilityPacketCaptureObjectTemplatesSlbVportTmplListStructA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VisibilityPacketCaptureObjectTemplatesSlbVportTmplListStructAOutputReference {
    return new VisibilityPacketCaptureObjectTemplatesSlbVportTmplListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Forward REQ data failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#forward_req_data_fail VisibilityPacketCaptureObjectTemplatesA#forward_req_data_fail}
  */
  readonly forwardReqDataFail?: number;
  /**
  * Enable automatic packet-capture for Forward request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#forward_req_fail VisibilityPacketCaptureObjectTemplatesA#forward_req_fail}
  */
  readonly forwardReqFail?: number;
  /**
  * Enable automatic packet-capture for Get all headers fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#get_all_headers_fail VisibilityPacketCaptureObjectTemplatesA#get_all_headers_fail}
  */
  readonly fetchAllHeadersFail?: number;
  /**
  * Enable automatic packet-capture for Ins response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#insert_resonse_line_fail VisibilityPacketCaptureObjectTemplatesA#insert_resonse_line_fail}
  */
  readonly insertResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Line extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#line_extend_fail VisibilityPacketCaptureObjectTemplatesA#line_extend_fail}
  */
  readonly lineExtendFail?: number;
  /**
  * Enable automatic packet-capture for Table extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#line_table_extend_fail VisibilityPacketCaptureObjectTemplatesA#line_table_extend_fail}
  */
  readonly lineTableExtendFail?: number;
  /**
  * Enable automatic packet-capture for Line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#line_too_long VisibilityPacketCaptureObjectTemplatesA#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Enable automatic packet-capture for No proxy error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#no_proxy VisibilityPacketCaptureObjectTemplatesA#no_proxy}
  */
  readonly noProxy?: number;
  /**
  * Enable automatic packet-capture for Parse request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#parse_req_fail VisibilityPacketCaptureObjectTemplatesA#parse_req_fail}
  */
  readonly parseReqFail?: number;
  /**
  * Enable automatic packet-capture for Parse request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#parse_request_line_fail VisibilityPacketCaptureObjectTemplatesA#parse_request_line_fail}
  */
  readonly parseRequestLineFail?: number;
  /**
  * Enable automatic packet-capture for Parse response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#parse_resonse_line_fail VisibilityPacketCaptureObjectTemplatesA#parse_resonse_line_fail}
  */
  readonly parseResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Read request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#read_request_line_fail VisibilityPacketCaptureObjectTemplatesA#read_request_line_fail}
  */
  readonly readRequestLineFail?: number;
  /**
  * Enable automatic packet-capture for Recv server unknown-code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#recv_server_unknow_reply_code VisibilityPacketCaptureObjectTemplatesA#recv_server_unknow_reply_code}
  */
  readonly recvServerUnknowReplyCode?: number;
  /**
  * Enable automatic packet-capture for Del response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#remove_resonse_line_fail VisibilityPacketCaptureObjectTemplatesA#remove_resonse_line_fail}
  */
  readonly removeResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Sent client serv-not-rdy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#send_client_service_not_ready VisibilityPacketCaptureObjectTemplatesA#send_client_service_not_ready}
  */
  readonly sendClientServiceNotReady?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#server_select_fail VisibilityPacketCaptureObjectTemplatesA#server_select_fail}
  */
  readonly serverSelectFail?: number;
  /**
  * Enable automatic packet-capture for Server side STARTTLS fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#server_starttls_fail VisibilityPacketCaptureObjectTemplatesA#server_starttls_fail}
  */
  readonly serverStarttlsFail?: number;
  /**
  * Enable automatic packet-capture for Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#snat_fail VisibilityPacketCaptureObjectTemplatesA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Too many headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#too_many_headers VisibilityPacketCaptureObjectTemplatesA#too_many_headers}
  */
  readonly tooManyHeaders?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncAOutputReference | VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_req_data_fail: cdktf.numberToTerraform(struct!.forwardReqDataFail),
    forward_req_fail: cdktf.numberToTerraform(struct!.forwardReqFail),
    get_all_headers_fail: cdktf.numberToTerraform(struct!.fetchAllHeadersFail),
    insert_resonse_line_fail: cdktf.numberToTerraform(struct!.insertResonseLineFail),
    line_extend_fail: cdktf.numberToTerraform(struct!.lineExtendFail),
    line_table_extend_fail: cdktf.numberToTerraform(struct!.lineTableExtendFail),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    no_proxy: cdktf.numberToTerraform(struct!.noProxy),
    parse_req_fail: cdktf.numberToTerraform(struct!.parseReqFail),
    parse_request_line_fail: cdktf.numberToTerraform(struct!.parseRequestLineFail),
    parse_resonse_line_fail: cdktf.numberToTerraform(struct!.parseResonseLineFail),
    read_request_line_fail: cdktf.numberToTerraform(struct!.readRequestLineFail),
    recv_server_unknow_reply_code: cdktf.numberToTerraform(struct!.recvServerUnknowReplyCode),
    remove_resonse_line_fail: cdktf.numberToTerraform(struct!.removeResonseLineFail),
    send_client_service_not_ready: cdktf.numberToTerraform(struct!.sendClientServiceNotReady),
    server_select_fail: cdktf.numberToTerraform(struct!.serverSelectFail),
    server_starttls_fail: cdktf.numberToTerraform(struct!.serverStarttlsFail),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    too_many_headers: cdktf.numberToTerraform(struct!.tooManyHeaders),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncAOutputReference | VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_req_data_fail: {
      value: cdktf.numberToHclTerraform(struct!.forwardReqDataFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_req_fail: {
      value: cdktf.numberToHclTerraform(struct!.forwardReqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    get_all_headers_fail: {
      value: cdktf.numberToHclTerraform(struct!.fetchAllHeadersFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.insertResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_extend_fail: {
      value: cdktf.numberToHclTerraform(struct!.lineExtendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_table_extend_fail: {
      value: cdktf.numberToHclTerraform(struct!.lineTableExtendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.lineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_proxy: {
      value: cdktf.numberToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_req_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseReqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_request_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseRequestLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_request_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.readRequestLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_server_unknow_reply_code: {
      value: cdktf.numberToHclTerraform(struct!.recvServerUnknowReplyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.removeResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_service_not_ready: {
      value: cdktf.numberToHclTerraform(struct!.sendClientServiceNotReady),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_select_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverSelectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_starttls_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverStarttlsFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    too_many_headers: {
      value: cdktf.numberToHclTerraform(struct!.tooManyHeaders),
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

export class VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardReqDataFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardReqDataFail = this._forwardReqDataFail;
    }
    if (this._forwardReqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardReqFail = this._forwardReqFail;
    }
    if (this._getAllHeadersFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchAllHeadersFail = this._getAllHeadersFail;
    }
    if (this._insertResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertResonseLineFail = this._insertResonseLineFail;
    }
    if (this._lineExtendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineExtendFail = this._lineExtendFail;
    }
    if (this._lineTableExtendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTableExtendFail = this._lineTableExtendFail;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._parseReqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseReqFail = this._parseReqFail;
    }
    if (this._parseRequestLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseRequestLineFail = this._parseRequestLineFail;
    }
    if (this._parseResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseResonseLineFail = this._parseResonseLineFail;
    }
    if (this._readRequestLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.readRequestLineFail = this._readRequestLineFail;
    }
    if (this._recvServerUnknowReplyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvServerUnknowReplyCode = this._recvServerUnknowReplyCode;
    }
    if (this._removeResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeResonseLineFail = this._removeResonseLineFail;
    }
    if (this._sendClientServiceNotReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientServiceNotReady = this._sendClientServiceNotReady;
    }
    if (this._serverSelectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectFail = this._serverSelectFail;
    }
    if (this._serverStarttlsFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverStarttlsFail = this._serverStarttlsFail;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._tooManyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyHeaders = this._tooManyHeaders;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardReqDataFail = undefined;
      this._forwardReqFail = undefined;
      this._getAllHeadersFail = undefined;
      this._insertResonseLineFail = undefined;
      this._lineExtendFail = undefined;
      this._lineTableExtendFail = undefined;
      this._lineTooLong = undefined;
      this._noProxy = undefined;
      this._parseReqFail = undefined;
      this._parseRequestLineFail = undefined;
      this._parseResonseLineFail = undefined;
      this._readRequestLineFail = undefined;
      this._recvServerUnknowReplyCode = undefined;
      this._removeResonseLineFail = undefined;
      this._sendClientServiceNotReady = undefined;
      this._serverSelectFail = undefined;
      this._serverStarttlsFail = undefined;
      this._snatFail = undefined;
      this._tooManyHeaders = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardReqDataFail = value.forwardReqDataFail;
      this._forwardReqFail = value.forwardReqFail;
      this._getAllHeadersFail = value.fetchAllHeadersFail;
      this._insertResonseLineFail = value.insertResonseLineFail;
      this._lineExtendFail = value.lineExtendFail;
      this._lineTableExtendFail = value.lineTableExtendFail;
      this._lineTooLong = value.lineTooLong;
      this._noProxy = value.noProxy;
      this._parseReqFail = value.parseReqFail;
      this._parseRequestLineFail = value.parseRequestLineFail;
      this._parseResonseLineFail = value.parseResonseLineFail;
      this._readRequestLineFail = value.readRequestLineFail;
      this._recvServerUnknowReplyCode = value.recvServerUnknowReplyCode;
      this._removeResonseLineFail = value.removeResonseLineFail;
      this._sendClientServiceNotReady = value.sendClientServiceNotReady;
      this._serverSelectFail = value.serverSelectFail;
      this._serverStarttlsFail = value.serverStarttlsFail;
      this._snatFail = value.snatFail;
      this._tooManyHeaders = value.tooManyHeaders;
      this._uuid = value.uuid;
    }
  }

  // forward_req_data_fail - computed: false, optional: true, required: false
  private _forwardReqDataFail?: number; 
  public get forwardReqDataFail() {
    return this.getNumberAttribute('forward_req_data_fail');
  }
  public set forwardReqDataFail(value: number) {
    this._forwardReqDataFail = value;
  }
  public resetForwardReqDataFail() {
    this._forwardReqDataFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardReqDataFailInput() {
    return this._forwardReqDataFail;
  }

  // forward_req_fail - computed: false, optional: true, required: false
  private _forwardReqFail?: number; 
  public get forwardReqFail() {
    return this.getNumberAttribute('forward_req_fail');
  }
  public set forwardReqFail(value: number) {
    this._forwardReqFail = value;
  }
  public resetForwardReqFail() {
    this._forwardReqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardReqFailInput() {
    return this._forwardReqFail;
  }

  // get_all_headers_fail - computed: false, optional: true, required: false
  private _getAllHeadersFail?: number; 
  public get fetchAllHeadersFail() {
    return this.getNumberAttribute('get_all_headers_fail');
  }
  public set fetchAllHeadersFail(value: number) {
    this._getAllHeadersFail = value;
  }
  public resetFetchAllHeadersFail() {
    this._getAllHeadersFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllHeadersFailInput() {
    return this._getAllHeadersFail;
  }

  // insert_resonse_line_fail - computed: false, optional: true, required: false
  private _insertResonseLineFail?: number; 
  public get insertResonseLineFail() {
    return this.getNumberAttribute('insert_resonse_line_fail');
  }
  public set insertResonseLineFail(value: number) {
    this._insertResonseLineFail = value;
  }
  public resetInsertResonseLineFail() {
    this._insertResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertResonseLineFailInput() {
    return this._insertResonseLineFail;
  }

  // line_extend_fail - computed: false, optional: true, required: false
  private _lineExtendFail?: number; 
  public get lineExtendFail() {
    return this.getNumberAttribute('line_extend_fail');
  }
  public set lineExtendFail(value: number) {
    this._lineExtendFail = value;
  }
  public resetLineExtendFail() {
    this._lineExtendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineExtendFailInput() {
    return this._lineExtendFail;
  }

  // line_table_extend_fail - computed: false, optional: true, required: false
  private _lineTableExtendFail?: number; 
  public get lineTableExtendFail() {
    return this.getNumberAttribute('line_table_extend_fail');
  }
  public set lineTableExtendFail(value: number) {
    this._lineTableExtendFail = value;
  }
  public resetLineTableExtendFail() {
    this._lineTableExtendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTableExtendFailInput() {
    return this._lineTableExtendFail;
  }

  // line_too_long - computed: false, optional: true, required: false
  private _lineTooLong?: number; 
  public get lineTooLong() {
    return this.getNumberAttribute('line_too_long');
  }
  public set lineTooLong(value: number) {
    this._lineTooLong = value;
  }
  public resetLineTooLong() {
    this._lineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTooLongInput() {
    return this._lineTooLong;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: number; 
  public get noProxy() {
    return this.getNumberAttribute('no_proxy');
  }
  public set noProxy(value: number) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // parse_req_fail - computed: false, optional: true, required: false
  private _parseReqFail?: number; 
  public get parseReqFail() {
    return this.getNumberAttribute('parse_req_fail');
  }
  public set parseReqFail(value: number) {
    this._parseReqFail = value;
  }
  public resetParseReqFail() {
    this._parseReqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseReqFailInput() {
    return this._parseReqFail;
  }

  // parse_request_line_fail - computed: false, optional: true, required: false
  private _parseRequestLineFail?: number; 
  public get parseRequestLineFail() {
    return this.getNumberAttribute('parse_request_line_fail');
  }
  public set parseRequestLineFail(value: number) {
    this._parseRequestLineFail = value;
  }
  public resetParseRequestLineFail() {
    this._parseRequestLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseRequestLineFailInput() {
    return this._parseRequestLineFail;
  }

  // parse_resonse_line_fail - computed: false, optional: true, required: false
  private _parseResonseLineFail?: number; 
  public get parseResonseLineFail() {
    return this.getNumberAttribute('parse_resonse_line_fail');
  }
  public set parseResonseLineFail(value: number) {
    this._parseResonseLineFail = value;
  }
  public resetParseResonseLineFail() {
    this._parseResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseResonseLineFailInput() {
    return this._parseResonseLineFail;
  }

  // read_request_line_fail - computed: false, optional: true, required: false
  private _readRequestLineFail?: number; 
  public get readRequestLineFail() {
    return this.getNumberAttribute('read_request_line_fail');
  }
  public set readRequestLineFail(value: number) {
    this._readRequestLineFail = value;
  }
  public resetReadRequestLineFail() {
    this._readRequestLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readRequestLineFailInput() {
    return this._readRequestLineFail;
  }

  // recv_server_unknow_reply_code - computed: false, optional: true, required: false
  private _recvServerUnknowReplyCode?: number; 
  public get recvServerUnknowReplyCode() {
    return this.getNumberAttribute('recv_server_unknow_reply_code');
  }
  public set recvServerUnknowReplyCode(value: number) {
    this._recvServerUnknowReplyCode = value;
  }
  public resetRecvServerUnknowReplyCode() {
    this._recvServerUnknowReplyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvServerUnknowReplyCodeInput() {
    return this._recvServerUnknowReplyCode;
  }

  // remove_resonse_line_fail - computed: false, optional: true, required: false
  private _removeResonseLineFail?: number; 
  public get removeResonseLineFail() {
    return this.getNumberAttribute('remove_resonse_line_fail');
  }
  public set removeResonseLineFail(value: number) {
    this._removeResonseLineFail = value;
  }
  public resetRemoveResonseLineFail() {
    this._removeResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeResonseLineFailInput() {
    return this._removeResonseLineFail;
  }

  // send_client_service_not_ready - computed: false, optional: true, required: false
  private _sendClientServiceNotReady?: number; 
  public get sendClientServiceNotReady() {
    return this.getNumberAttribute('send_client_service_not_ready');
  }
  public set sendClientServiceNotReady(value: number) {
    this._sendClientServiceNotReady = value;
  }
  public resetSendClientServiceNotReady() {
    this._sendClientServiceNotReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientServiceNotReadyInput() {
    return this._sendClientServiceNotReady;
  }

  // server_select_fail - computed: false, optional: true, required: false
  private _serverSelectFail?: number; 
  public get serverSelectFail() {
    return this.getNumberAttribute('server_select_fail');
  }
  public set serverSelectFail(value: number) {
    this._serverSelectFail = value;
  }
  public resetServerSelectFail() {
    this._serverSelectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectFailInput() {
    return this._serverSelectFail;
  }

  // server_starttls_fail - computed: false, optional: true, required: false
  private _serverStarttlsFail?: number; 
  public get serverStarttlsFail() {
    return this.getNumberAttribute('server_starttls_fail');
  }
  public set serverStarttlsFail(value: number) {
    this._serverStarttlsFail = value;
  }
  public resetServerStarttlsFail() {
    this._serverStarttlsFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverStarttlsFailInput() {
    return this._serverStarttlsFail;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
  }

  // too_many_headers - computed: false, optional: true, required: false
  private _tooManyHeaders?: number; 
  public get tooManyHeaders() {
    return this.getNumberAttribute('too_many_headers');
  }
  public set tooManyHeaders(value: number) {
    this._tooManyHeaders = value;
  }
  public resetTooManyHeaders() {
    this._tooManyHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooManyHeadersInput() {
    return this._tooManyHeaders;
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
export interface VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#duration VisibilityPacketCaptureObjectTemplatesA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Forward REQ data failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#forward_req_data_fail VisibilityPacketCaptureObjectTemplatesA#forward_req_data_fail}
  */
  readonly forwardReqDataFail?: number;
  /**
  * Enable automatic packet-capture for Forward request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#forward_req_fail VisibilityPacketCaptureObjectTemplatesA#forward_req_fail}
  */
  readonly forwardReqFail?: number;
  /**
  * Enable automatic packet-capture for Get all headers fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#get_all_headers_fail VisibilityPacketCaptureObjectTemplatesA#get_all_headers_fail}
  */
  readonly fetchAllHeadersFail?: number;
  /**
  * Enable automatic packet-capture for Ins response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#insert_resonse_line_fail VisibilityPacketCaptureObjectTemplatesA#insert_resonse_line_fail}
  */
  readonly insertResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Line extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#line_extend_fail VisibilityPacketCaptureObjectTemplatesA#line_extend_fail}
  */
  readonly lineExtendFail?: number;
  /**
  * Enable automatic packet-capture for Table extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#line_table_extend_fail VisibilityPacketCaptureObjectTemplatesA#line_table_extend_fail}
  */
  readonly lineTableExtendFail?: number;
  /**
  * Enable automatic packet-capture for Line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#line_too_long VisibilityPacketCaptureObjectTemplatesA#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Enable automatic packet-capture for No proxy error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#no_proxy VisibilityPacketCaptureObjectTemplatesA#no_proxy}
  */
  readonly noProxy?: number;
  /**
  * Enable automatic packet-capture for Parse request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#parse_req_fail VisibilityPacketCaptureObjectTemplatesA#parse_req_fail}
  */
  readonly parseReqFail?: number;
  /**
  * Enable automatic packet-capture for Parse request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#parse_request_line_fail VisibilityPacketCaptureObjectTemplatesA#parse_request_line_fail}
  */
  readonly parseRequestLineFail?: number;
  /**
  * Enable automatic packet-capture for Parse response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#parse_resonse_line_fail VisibilityPacketCaptureObjectTemplatesA#parse_resonse_line_fail}
  */
  readonly parseResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Read request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#read_request_line_fail VisibilityPacketCaptureObjectTemplatesA#read_request_line_fail}
  */
  readonly readRequestLineFail?: number;
  /**
  * Enable automatic packet-capture for Recv server unknown-code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#recv_server_unknow_reply_code VisibilityPacketCaptureObjectTemplatesA#recv_server_unknow_reply_code}
  */
  readonly recvServerUnknowReplyCode?: number;
  /**
  * Enable automatic packet-capture for Del response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#remove_resonse_line_fail VisibilityPacketCaptureObjectTemplatesA#remove_resonse_line_fail}
  */
  readonly removeResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Sent client serv-not-rdy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#send_client_service_not_ready VisibilityPacketCaptureObjectTemplatesA#send_client_service_not_ready}
  */
  readonly sendClientServiceNotReady?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#server_select_fail VisibilityPacketCaptureObjectTemplatesA#server_select_fail}
  */
  readonly serverSelectFail?: number;
  /**
  * Enable automatic packet-capture for Server side STARTTLS fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#server_starttls_fail VisibilityPacketCaptureObjectTemplatesA#server_starttls_fail}
  */
  readonly serverStarttlsFail?: number;
  /**
  * Enable automatic packet-capture for Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#snat_fail VisibilityPacketCaptureObjectTemplatesA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Too many headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#too_many_headers VisibilityPacketCaptureObjectTemplatesA#too_many_headers}
  */
  readonly tooManyHeaders?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateAOutputReference | VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    forward_req_data_fail: cdktf.numberToTerraform(struct!.forwardReqDataFail),
    forward_req_fail: cdktf.numberToTerraform(struct!.forwardReqFail),
    get_all_headers_fail: cdktf.numberToTerraform(struct!.fetchAllHeadersFail),
    insert_resonse_line_fail: cdktf.numberToTerraform(struct!.insertResonseLineFail),
    line_extend_fail: cdktf.numberToTerraform(struct!.lineExtendFail),
    line_table_extend_fail: cdktf.numberToTerraform(struct!.lineTableExtendFail),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    no_proxy: cdktf.numberToTerraform(struct!.noProxy),
    parse_req_fail: cdktf.numberToTerraform(struct!.parseReqFail),
    parse_request_line_fail: cdktf.numberToTerraform(struct!.parseRequestLineFail),
    parse_resonse_line_fail: cdktf.numberToTerraform(struct!.parseResonseLineFail),
    read_request_line_fail: cdktf.numberToTerraform(struct!.readRequestLineFail),
    recv_server_unknow_reply_code: cdktf.numberToTerraform(struct!.recvServerUnknowReplyCode),
    remove_resonse_line_fail: cdktf.numberToTerraform(struct!.removeResonseLineFail),
    send_client_service_not_ready: cdktf.numberToTerraform(struct!.sendClientServiceNotReady),
    server_select_fail: cdktf.numberToTerraform(struct!.serverSelectFail),
    server_starttls_fail: cdktf.numberToTerraform(struct!.serverStarttlsFail),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    too_many_headers: cdktf.numberToTerraform(struct!.tooManyHeaders),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateAOutputReference | VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateA): any {
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
    forward_req_data_fail: {
      value: cdktf.numberToHclTerraform(struct!.forwardReqDataFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_req_fail: {
      value: cdktf.numberToHclTerraform(struct!.forwardReqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    get_all_headers_fail: {
      value: cdktf.numberToHclTerraform(struct!.fetchAllHeadersFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.insertResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_extend_fail: {
      value: cdktf.numberToHclTerraform(struct!.lineExtendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_table_extend_fail: {
      value: cdktf.numberToHclTerraform(struct!.lineTableExtendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.lineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_proxy: {
      value: cdktf.numberToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_req_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseReqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_request_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseRequestLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_request_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.readRequestLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_server_unknow_reply_code: {
      value: cdktf.numberToHclTerraform(struct!.recvServerUnknowReplyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.removeResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_service_not_ready: {
      value: cdktf.numberToHclTerraform(struct!.sendClientServiceNotReady),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_select_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverSelectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_starttls_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverStarttlsFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
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
    too_many_headers: {
      value: cdktf.numberToHclTerraform(struct!.tooManyHeaders),
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

export class VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._forwardReqDataFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardReqDataFail = this._forwardReqDataFail;
    }
    if (this._forwardReqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardReqFail = this._forwardReqFail;
    }
    if (this._getAllHeadersFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchAllHeadersFail = this._getAllHeadersFail;
    }
    if (this._insertResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertResonseLineFail = this._insertResonseLineFail;
    }
    if (this._lineExtendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineExtendFail = this._lineExtendFail;
    }
    if (this._lineTableExtendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTableExtendFail = this._lineTableExtendFail;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._parseReqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseReqFail = this._parseReqFail;
    }
    if (this._parseRequestLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseRequestLineFail = this._parseRequestLineFail;
    }
    if (this._parseResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseResonseLineFail = this._parseResonseLineFail;
    }
    if (this._readRequestLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.readRequestLineFail = this._readRequestLineFail;
    }
    if (this._recvServerUnknowReplyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvServerUnknowReplyCode = this._recvServerUnknowReplyCode;
    }
    if (this._removeResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeResonseLineFail = this._removeResonseLineFail;
    }
    if (this._sendClientServiceNotReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientServiceNotReady = this._sendClientServiceNotReady;
    }
    if (this._serverSelectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectFail = this._serverSelectFail;
    }
    if (this._serverStarttlsFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverStarttlsFail = this._serverStarttlsFail;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._tooManyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyHeaders = this._tooManyHeaders;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._forwardReqDataFail = undefined;
      this._forwardReqFail = undefined;
      this._getAllHeadersFail = undefined;
      this._insertResonseLineFail = undefined;
      this._lineExtendFail = undefined;
      this._lineTableExtendFail = undefined;
      this._lineTooLong = undefined;
      this._noProxy = undefined;
      this._parseReqFail = undefined;
      this._parseRequestLineFail = undefined;
      this._parseResonseLineFail = undefined;
      this._readRequestLineFail = undefined;
      this._recvServerUnknowReplyCode = undefined;
      this._removeResonseLineFail = undefined;
      this._sendClientServiceNotReady = undefined;
      this._serverSelectFail = undefined;
      this._serverStarttlsFail = undefined;
      this._snatFail = undefined;
      this._thresholdExceededBy = undefined;
      this._tooManyHeaders = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._forwardReqDataFail = value.forwardReqDataFail;
      this._forwardReqFail = value.forwardReqFail;
      this._getAllHeadersFail = value.fetchAllHeadersFail;
      this._insertResonseLineFail = value.insertResonseLineFail;
      this._lineExtendFail = value.lineExtendFail;
      this._lineTableExtendFail = value.lineTableExtendFail;
      this._lineTooLong = value.lineTooLong;
      this._noProxy = value.noProxy;
      this._parseReqFail = value.parseReqFail;
      this._parseRequestLineFail = value.parseRequestLineFail;
      this._parseResonseLineFail = value.parseResonseLineFail;
      this._readRequestLineFail = value.readRequestLineFail;
      this._recvServerUnknowReplyCode = value.recvServerUnknowReplyCode;
      this._removeResonseLineFail = value.removeResonseLineFail;
      this._sendClientServiceNotReady = value.sendClientServiceNotReady;
      this._serverSelectFail = value.serverSelectFail;
      this._serverStarttlsFail = value.serverStarttlsFail;
      this._snatFail = value.snatFail;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._tooManyHeaders = value.tooManyHeaders;
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

  // forward_req_data_fail - computed: false, optional: true, required: false
  private _forwardReqDataFail?: number; 
  public get forwardReqDataFail() {
    return this.getNumberAttribute('forward_req_data_fail');
  }
  public set forwardReqDataFail(value: number) {
    this._forwardReqDataFail = value;
  }
  public resetForwardReqDataFail() {
    this._forwardReqDataFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardReqDataFailInput() {
    return this._forwardReqDataFail;
  }

  // forward_req_fail - computed: false, optional: true, required: false
  private _forwardReqFail?: number; 
  public get forwardReqFail() {
    return this.getNumberAttribute('forward_req_fail');
  }
  public set forwardReqFail(value: number) {
    this._forwardReqFail = value;
  }
  public resetForwardReqFail() {
    this._forwardReqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardReqFailInput() {
    return this._forwardReqFail;
  }

  // get_all_headers_fail - computed: false, optional: true, required: false
  private _getAllHeadersFail?: number; 
  public get fetchAllHeadersFail() {
    return this.getNumberAttribute('get_all_headers_fail');
  }
  public set fetchAllHeadersFail(value: number) {
    this._getAllHeadersFail = value;
  }
  public resetFetchAllHeadersFail() {
    this._getAllHeadersFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllHeadersFailInput() {
    return this._getAllHeadersFail;
  }

  // insert_resonse_line_fail - computed: false, optional: true, required: false
  private _insertResonseLineFail?: number; 
  public get insertResonseLineFail() {
    return this.getNumberAttribute('insert_resonse_line_fail');
  }
  public set insertResonseLineFail(value: number) {
    this._insertResonseLineFail = value;
  }
  public resetInsertResonseLineFail() {
    this._insertResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertResonseLineFailInput() {
    return this._insertResonseLineFail;
  }

  // line_extend_fail - computed: false, optional: true, required: false
  private _lineExtendFail?: number; 
  public get lineExtendFail() {
    return this.getNumberAttribute('line_extend_fail');
  }
  public set lineExtendFail(value: number) {
    this._lineExtendFail = value;
  }
  public resetLineExtendFail() {
    this._lineExtendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineExtendFailInput() {
    return this._lineExtendFail;
  }

  // line_table_extend_fail - computed: false, optional: true, required: false
  private _lineTableExtendFail?: number; 
  public get lineTableExtendFail() {
    return this.getNumberAttribute('line_table_extend_fail');
  }
  public set lineTableExtendFail(value: number) {
    this._lineTableExtendFail = value;
  }
  public resetLineTableExtendFail() {
    this._lineTableExtendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTableExtendFailInput() {
    return this._lineTableExtendFail;
  }

  // line_too_long - computed: false, optional: true, required: false
  private _lineTooLong?: number; 
  public get lineTooLong() {
    return this.getNumberAttribute('line_too_long');
  }
  public set lineTooLong(value: number) {
    this._lineTooLong = value;
  }
  public resetLineTooLong() {
    this._lineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTooLongInput() {
    return this._lineTooLong;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: number; 
  public get noProxy() {
    return this.getNumberAttribute('no_proxy');
  }
  public set noProxy(value: number) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // parse_req_fail - computed: false, optional: true, required: false
  private _parseReqFail?: number; 
  public get parseReqFail() {
    return this.getNumberAttribute('parse_req_fail');
  }
  public set parseReqFail(value: number) {
    this._parseReqFail = value;
  }
  public resetParseReqFail() {
    this._parseReqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseReqFailInput() {
    return this._parseReqFail;
  }

  // parse_request_line_fail - computed: false, optional: true, required: false
  private _parseRequestLineFail?: number; 
  public get parseRequestLineFail() {
    return this.getNumberAttribute('parse_request_line_fail');
  }
  public set parseRequestLineFail(value: number) {
    this._parseRequestLineFail = value;
  }
  public resetParseRequestLineFail() {
    this._parseRequestLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseRequestLineFailInput() {
    return this._parseRequestLineFail;
  }

  // parse_resonse_line_fail - computed: false, optional: true, required: false
  private _parseResonseLineFail?: number; 
  public get parseResonseLineFail() {
    return this.getNumberAttribute('parse_resonse_line_fail');
  }
  public set parseResonseLineFail(value: number) {
    this._parseResonseLineFail = value;
  }
  public resetParseResonseLineFail() {
    this._parseResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseResonseLineFailInput() {
    return this._parseResonseLineFail;
  }

  // read_request_line_fail - computed: false, optional: true, required: false
  private _readRequestLineFail?: number; 
  public get readRequestLineFail() {
    return this.getNumberAttribute('read_request_line_fail');
  }
  public set readRequestLineFail(value: number) {
    this._readRequestLineFail = value;
  }
  public resetReadRequestLineFail() {
    this._readRequestLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readRequestLineFailInput() {
    return this._readRequestLineFail;
  }

  // recv_server_unknow_reply_code - computed: false, optional: true, required: false
  private _recvServerUnknowReplyCode?: number; 
  public get recvServerUnknowReplyCode() {
    return this.getNumberAttribute('recv_server_unknow_reply_code');
  }
  public set recvServerUnknowReplyCode(value: number) {
    this._recvServerUnknowReplyCode = value;
  }
  public resetRecvServerUnknowReplyCode() {
    this._recvServerUnknowReplyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvServerUnknowReplyCodeInput() {
    return this._recvServerUnknowReplyCode;
  }

  // remove_resonse_line_fail - computed: false, optional: true, required: false
  private _removeResonseLineFail?: number; 
  public get removeResonseLineFail() {
    return this.getNumberAttribute('remove_resonse_line_fail');
  }
  public set removeResonseLineFail(value: number) {
    this._removeResonseLineFail = value;
  }
  public resetRemoveResonseLineFail() {
    this._removeResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeResonseLineFailInput() {
    return this._removeResonseLineFail;
  }

  // send_client_service_not_ready - computed: false, optional: true, required: false
  private _sendClientServiceNotReady?: number; 
  public get sendClientServiceNotReady() {
    return this.getNumberAttribute('send_client_service_not_ready');
  }
  public set sendClientServiceNotReady(value: number) {
    this._sendClientServiceNotReady = value;
  }
  public resetSendClientServiceNotReady() {
    this._sendClientServiceNotReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientServiceNotReadyInput() {
    return this._sendClientServiceNotReady;
  }

  // server_select_fail - computed: false, optional: true, required: false
  private _serverSelectFail?: number; 
  public get serverSelectFail() {
    return this.getNumberAttribute('server_select_fail');
  }
  public set serverSelectFail(value: number) {
    this._serverSelectFail = value;
  }
  public resetServerSelectFail() {
    this._serverSelectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectFailInput() {
    return this._serverSelectFail;
  }

  // server_starttls_fail - computed: false, optional: true, required: false
  private _serverStarttlsFail?: number; 
  public get serverStarttlsFail() {
    return this.getNumberAttribute('server_starttls_fail');
  }
  public set serverStarttlsFail(value: number) {
    this._serverStarttlsFail = value;
  }
  public resetServerStarttlsFail() {
    this._serverStarttlsFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverStarttlsFailInput() {
    return this._serverStarttlsFail;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
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

  // too_many_headers - computed: false, optional: true, required: false
  private _tooManyHeaders?: number; 
  public get tooManyHeaders() {
    return this.getNumberAttribute('too_many_headers');
  }
  public set tooManyHeaders(value: number) {
    this._tooManyHeaders = value;
  }
  public resetTooManyHeaders() {
    this._tooManyHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooManyHeadersInput() {
    return this._tooManyHeaders;
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
export interface VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityA {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop VisibilityPacketCaptureObjectTemplatesA#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_alert VisibilityPacketCaptureObjectTemplatesA#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_critical VisibilityPacketCaptureObjectTemplatesA#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_warning VisibilityPacketCaptureObjectTemplatesA#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error VisibilityPacketCaptureObjectTemplatesA#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_alert VisibilityPacketCaptureObjectTemplatesA#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_critical VisibilityPacketCaptureObjectTemplatesA#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_warning VisibilityPacketCaptureObjectTemplatesA#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityAOutputReference | VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.numberToTerraform(struct!.drop),
    drop_alert: cdktf.numberToTerraform(struct!.dropAlert),
    drop_critical: cdktf.numberToTerraform(struct!.dropCritical),
    drop_warning: cdktf.numberToTerraform(struct!.dropWarning),
    error: cdktf.numberToTerraform(struct!.error),
    error_alert: cdktf.numberToTerraform(struct!.errorAlert),
    error_critical: cdktf.numberToTerraform(struct!.errorCritical),
    error_warning: cdktf.numberToTerraform(struct!.errorWarning),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityAOutputReference | VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_alert: {
      value: cdktf.numberToHclTerraform(struct!.dropAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_critical: {
      value: cdktf.numberToHclTerraform(struct!.dropCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_warning: {
      value: cdktf.numberToHclTerraform(struct!.dropWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_alert: {
      value: cdktf.numberToHclTerraform(struct!.errorAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_critical: {
      value: cdktf.numberToHclTerraform(struct!.errorCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_warning: {
      value: cdktf.numberToHclTerraform(struct!.errorWarning),
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

export class VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._dropAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropAlert = this._dropAlert;
    }
    if (this._dropCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCritical = this._dropCritical;
    }
    if (this._dropWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropWarning = this._dropWarning;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._errorAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAlert = this._errorAlert;
    }
    if (this._errorCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCritical = this._errorCritical;
    }
    if (this._errorWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorWarning = this._errorWarning;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drop = undefined;
      this._dropAlert = undefined;
      this._dropCritical = undefined;
      this._dropWarning = undefined;
      this._error = undefined;
      this._errorAlert = undefined;
      this._errorCritical = undefined;
      this._errorWarning = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drop = value.drop;
      this._dropAlert = value.dropAlert;
      this._dropCritical = value.dropCritical;
      this._dropWarning = value.dropWarning;
      this._error = value.error;
      this._errorAlert = value.errorAlert;
      this._errorCritical = value.errorCritical;
      this._errorWarning = value.errorWarning;
      this._uuid = value.uuid;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_alert - computed: false, optional: true, required: false
  private _dropAlert?: number; 
  public get dropAlert() {
    return this.getNumberAttribute('drop_alert');
  }
  public set dropAlert(value: number) {
    this._dropAlert = value;
  }
  public resetDropAlert() {
    this._dropAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAlertInput() {
    return this._dropAlert;
  }

  // drop_critical - computed: false, optional: true, required: false
  private _dropCritical?: number; 
  public get dropCritical() {
    return this.getNumberAttribute('drop_critical');
  }
  public set dropCritical(value: number) {
    this._dropCritical = value;
  }
  public resetDropCritical() {
    this._dropCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCriticalInput() {
    return this._dropCritical;
  }

  // drop_warning - computed: false, optional: true, required: false
  private _dropWarning?: number; 
  public get dropWarning() {
    return this.getNumberAttribute('drop_warning');
  }
  public set dropWarning(value: number) {
    this._dropWarning = value;
  }
  public resetDropWarning() {
    this._dropWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWarningInput() {
    return this._dropWarning;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // error_alert - computed: false, optional: true, required: false
  private _errorAlert?: number; 
  public get errorAlert() {
    return this.getNumberAttribute('error_alert');
  }
  public set errorAlert(value: number) {
    this._errorAlert = value;
  }
  public resetErrorAlert() {
    this._errorAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAlertInput() {
    return this._errorAlert;
  }

  // error_critical - computed: false, optional: true, required: false
  private _errorCritical?: number; 
  public get errorCritical() {
    return this.getNumberAttribute('error_critical');
  }
  public set errorCritical(value: number) {
    this._errorCritical = value;
  }
  public resetErrorCritical() {
    this._errorCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCriticalInput() {
    return this._errorCritical;
  }

  // error_warning - computed: false, optional: true, required: false
  private _errorWarning?: number; 
  public get errorWarning() {
    return this.getNumberAttribute('error_warning');
  }
  public set errorWarning(value: number) {
    this._errorWarning = value;
  }
  public resetErrorWarning() {
    this._errorWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorWarningInput() {
    return this._errorWarning;
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
export interface VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListStructA {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#capture_config VisibilityPacketCaptureObjectTemplatesA#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#name VisibilityPacketCaptureObjectTemplatesA#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#user_tag VisibilityPacketCaptureObjectTemplatesA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateA;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesA#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityA;
}

export function visibilityPacketCaptureObjectTemplatesSmtpVportTmplListStructAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config: cdktf.stringToTerraform(struct!.captureConfig),
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    trigger_stats_inc: visibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncAToTerraform(struct!.triggerStatsInc),
    trigger_stats_rate: visibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateAToTerraform(struct!.triggerStatsRate),
    trigger_stats_severity: visibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityAToTerraform(struct!.triggerStatsSeverity),
  }
}


export function visibilityPacketCaptureObjectTemplatesSmtpVportTmplListStructAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config: {
      value: cdktf.stringToHclTerraform(struct!.captureConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_stats_inc: {
      value: visibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncAToHclTerraform(struct!.triggerStatsInc),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncAList",
    },
    trigger_stats_rate: {
      value: visibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateAToHclTerraform(struct!.triggerStatsRate),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateAList",
    },
    trigger_stats_severity: {
      value: visibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityAToHclTerraform(struct!.triggerStatsSeverity),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfig = this._captureConfig;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._triggerStatsInc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsInc = this._triggerStatsInc?.internalValue;
    }
    if (this._triggerStatsRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsRate = this._triggerStatsRate?.internalValue;
    }
    if (this._triggerStatsSeverity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsSeverity = this._triggerStatsSeverity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureConfig = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._triggerStatsInc.internalValue = undefined;
      this._triggerStatsRate.internalValue = undefined;
      this._triggerStatsSeverity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureConfig = value.captureConfig;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._triggerStatsInc.internalValue = value.triggerStatsInc;
      this._triggerStatsRate.internalValue = value.triggerStatsRate;
      this._triggerStatsSeverity.internalValue = value.triggerStatsSeverity;
    }
  }

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsRateA) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // trigger_stats_severity - computed: false, optional: true, required: false
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityAOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListTriggerStatsSeverityA) {
    this._triggerStatsSeverity.internalValue = value;
  }
  public resetTriggerStatsSeverity() {
    this._triggerStatsSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsSeverityInput() {
    return this._triggerStatsSeverity.internalValue;
  }
}

export class VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListStructAList extends cdktf.ComplexList {
  public internalValue? : VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListStructA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListStructAOutputReference {
    return new VisibilityPacketCaptureObjectTemplatesSmtpVportTmplListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Validation Drop: Country Code Mismatch in IMSI and MSISDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_country_code_mismatch VisibilityPacketCaptureObjectTemplatesA#drop_vld_country_code_mismatch}
  */
  readonly dropVldCountryCodeMismatch?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Cross Layer IP Address Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_cross_layer_correlation VisibilityPacketCaptureObjectTemplatesA#drop_vld_cross_layer_correlation}
  */
  readonly dropVldCrossLayerCorrelation?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP Bearer count exceeded max (11)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtp_bearer_count_exceed VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtp_bearer_count_exceed}
  */
  readonly dropVldGtpBearerCountExceed?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP repeated IE count exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtp_ie_repeat_count_exceed VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtp_ie_repeat_count_exceed}
  */
  readonly dropVldGtpIeRepeatCountExceed?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Invalid APN Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtp_invalid_apn_len_drop VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtp_invalid_apn_len_drop}
  */
  readonly dropVldGtpInvalidApnLenDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Invalid IMSI Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtp_invalid_imsi_len_drop VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtp_invalid_imsi_len_drop}
  */
  readonly dropVldGtpInvalidImsiLenDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-U IP Address Spoofed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtp_u_spoofed_source_address VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtp_u_spoofed_source_address}
  */
  readonly dropVldGtpUSpoofedSourceAddress?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV2-C Wrong LBI in Create Bearer Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtp_v2_wrong_lbi_create_bearer VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtp_v2_wrong_lbi_create_bearer}
  */
  readonly dropVldGtpV2WrongLbiCreateBearer?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV0-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtpv0_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtpv0_seqnum_buffer_full}
  */
  readonly dropVldGtpv0SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV1-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtpv1_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtpv1_seqnum_buffer_full}
  */
  readonly dropVldGtpv1SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV2-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtpv2_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtpv2_seqnum_buffer_full}
  */
  readonly dropVldGtpv2SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid Flow Label in GTPv0-C Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_invalid_flow_label_v0 VisibilityPacketCaptureObjectTemplatesA#drop_vld_invalid_flow_label_v0}
  */
  readonly dropVldInvalidFlowLabelV0?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Piggyback message invalid packet length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_invalid_pkt_len_piggyback VisibilityPacketCaptureObjectTemplatesA#drop_vld_invalid_pkt_len_piggyback}
  */
  readonly dropVldInvalidPktLenPiggyback?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid TEID Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_invalid_teid VisibilityPacketCaptureObjectTemplatesA#drop_vld_invalid_teid}
  */
  readonly dropVldInvalidTeid?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Mandatory IE in Grouped IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_mandatory_ie_in_grouped_ie VisibilityPacketCaptureObjectTemplatesA#drop_vld_mandatory_ie_in_grouped_ie}
  */
  readonly dropVldMandatoryIeInGroupedIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Mandatory IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_mandatory_information_element VisibilityPacketCaptureObjectTemplatesA#drop_vld_mandatory_information_element}
  */
  readonly dropVldMandatoryInformationElement?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Message Length Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_message_length VisibilityPacketCaptureObjectTemplatesA#drop_vld_message_length}
  */
  readonly dropVldMessageLength?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv1-C Message Out of Order IE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_out_of_order_ie VisibilityPacketCaptureObjectTemplatesA#drop_vld_out_of_order_ie}
  */
  readonly dropVldOutOfOrderIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Out Of State GTP Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_out_of_state VisibilityPacketCaptureObjectTemplatesA#drop_vld_out_of_state}
  */
  readonly dropVldOutOfState?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Unexpected IE Present in Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_out_of_state_ie VisibilityPacketCaptureObjectTemplatesA#drop_vld_out_of_state_ie}
  */
  readonly dropVldOutOfStateIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Protocol flag in Header Field not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_protocol_flag_unset VisibilityPacketCaptureObjectTemplatesA#drop_vld_protocol_flag_unset}
  */
  readonly dropVldProtocolFlagUnset?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Reserved Header Field Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_reserved_field_set VisibilityPacketCaptureObjectTemplatesA#drop_vld_reserved_field_set}
  */
  readonly dropVldReservedFieldSet?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Reserved IE Field Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_reserved_information_element VisibilityPacketCaptureObjectTemplatesA#drop_vld_reserved_information_element}
  */
  readonly dropVldReservedInformationElement?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: piggyback message anomaly failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_sanity_failed_piggyback VisibilityPacketCaptureObjectTemplatesA#drop_vld_sanity_failed_piggyback}
  */
  readonly dropVldSanityFailedPiggyback?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Sequence number Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_sequence_num_correlation VisibilityPacketCaptureObjectTemplatesA#drop_vld_sequence_num_correlation}
  */
  readonly dropVldSequenceNumCorrelation?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Tunnel Header Flag Not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_tunnel_id_flag VisibilityPacketCaptureObjectTemplatesA#drop_vld_tunnel_id_flag}
  */
  readonly dropVldTunnelIdFlag?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv0-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_v0_reserved_message_drop VisibilityPacketCaptureObjectTemplatesA#drop_vld_v0_reserved_message_drop}
  */
  readonly dropVldV0ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv1-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_v1_reserved_message_drop VisibilityPacketCaptureObjectTemplatesA#drop_vld_v1_reserved_message_drop}
  */
  readonly dropVldV1ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv2-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_v2_reserved_message_drop VisibilityPacketCaptureObjectTemplatesA#drop_vld_v2_reserved_message_drop}
  */
  readonly dropVldV2ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid GTP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_version_not_supported VisibilityPacketCaptureObjectTemplatesA#drop_vld_version_not_supported}
  */
  readonly dropVldVersionNotSupported?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncAOutputReference | VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_vld_country_code_mismatch: cdktf.numberToTerraform(struct!.dropVldCountryCodeMismatch),
    drop_vld_cross_layer_correlation: cdktf.numberToTerraform(struct!.dropVldCrossLayerCorrelation),
    drop_vld_gtp_bearer_count_exceed: cdktf.numberToTerraform(struct!.dropVldGtpBearerCountExceed),
    drop_vld_gtp_ie_repeat_count_exceed: cdktf.numberToTerraform(struct!.dropVldGtpIeRepeatCountExceed),
    drop_vld_gtp_invalid_apn_len_drop: cdktf.numberToTerraform(struct!.dropVldGtpInvalidApnLenDrop),
    drop_vld_gtp_invalid_imsi_len_drop: cdktf.numberToTerraform(struct!.dropVldGtpInvalidImsiLenDrop),
    drop_vld_gtp_u_spoofed_source_address: cdktf.numberToTerraform(struct!.dropVldGtpUSpoofedSourceAddress),
    drop_vld_gtp_v2_wrong_lbi_create_bearer: cdktf.numberToTerraform(struct!.dropVldGtpV2WrongLbiCreateBearer),
    drop_vld_gtpv0_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv0SeqnumBufferFull),
    drop_vld_gtpv1_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv1SeqnumBufferFull),
    drop_vld_gtpv2_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv2SeqnumBufferFull),
    drop_vld_invalid_flow_label_v0: cdktf.numberToTerraform(struct!.dropVldInvalidFlowLabelV0),
    drop_vld_invalid_pkt_len_piggyback: cdktf.numberToTerraform(struct!.dropVldInvalidPktLenPiggyback),
    drop_vld_invalid_teid: cdktf.numberToTerraform(struct!.dropVldInvalidTeid),
    drop_vld_mandatory_ie_in_grouped_ie: cdktf.numberToTerraform(struct!.dropVldMandatoryIeInGroupedIe),
    drop_vld_mandatory_information_element: cdktf.numberToTerraform(struct!.dropVldMandatoryInformationElement),
    drop_vld_message_length: cdktf.numberToTerraform(struct!.dropVldMessageLength),
    drop_vld_out_of_order_ie: cdktf.numberToTerraform(struct!.dropVldOutOfOrderIe),
    drop_vld_out_of_state: cdktf.numberToTerraform(struct!.dropVldOutOfState),
    drop_vld_out_of_state_ie: cdktf.numberToTerraform(struct!.dropVldOutOfStateIe),
    drop_vld_protocol_flag_unset: cdktf.numberToTerraform(struct!.dropVldProtocolFlagUnset),
    drop_vld_reserved_field_set: cdktf.numberToTerraform(struct!.dropVldReservedFieldSet),
    drop_vld_reserved_information_element: cdktf.numberToTerraform(struct!.dropVldReservedInformationElement),
    drop_vld_sanity_failed_piggyback: cdktf.numberToTerraform(struct!.dropVldSanityFailedPiggyback),
    drop_vld_sequence_num_correlation: cdktf.numberToTerraform(struct!.dropVldSequenceNumCorrelation),
    drop_vld_tunnel_id_flag: cdktf.numberToTerraform(struct!.dropVldTunnelIdFlag),
    drop_vld_v0_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV0ReservedMessageDrop),
    drop_vld_v1_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV1ReservedMessageDrop),
    drop_vld_v2_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV2ReservedMessageDrop),
    drop_vld_version_not_supported: cdktf.numberToTerraform(struct!.dropVldVersionNotSupported),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncAOutputReference | VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_vld_country_code_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dropVldCountryCodeMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_cross_layer_correlation: {
      value: cdktf.numberToHclTerraform(struct!.dropVldCrossLayerCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_bearer_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpBearerCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_ie_repeat_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpIeRepeatCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_invalid_apn_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpInvalidApnLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_invalid_imsi_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpInvalidImsiLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_u_spoofed_source_address: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpUSpoofedSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_wrong_lbi_create_bearer: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2WrongLbiCreateBearer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv0_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv0SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv1_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv1SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv2_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv2SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_flow_label_v0: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidFlowLabelV0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_pkt_len_piggyback: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidPktLenPiggyback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_teid: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidTeid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_mandatory_ie_in_grouped_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMandatoryIeInGroupedIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_mandatory_information_element: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMandatoryInformationElement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_message_length: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMessageLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_order_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfOrderIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_state: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_state_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfStateIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_protocol_flag_unset: {
      value: cdktf.numberToHclTerraform(struct!.dropVldProtocolFlagUnset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_reserved_field_set: {
      value: cdktf.numberToHclTerraform(struct!.dropVldReservedFieldSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_reserved_information_element: {
      value: cdktf.numberToHclTerraform(struct!.dropVldReservedInformationElement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_sanity_failed_piggyback: {
      value: cdktf.numberToHclTerraform(struct!.dropVldSanityFailedPiggyback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_sequence_num_correlation: {
      value: cdktf.numberToHclTerraform(struct!.dropVldSequenceNumCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_tunnel_id_flag: {
      value: cdktf.numberToHclTerraform(struct!.dropVldTunnelIdFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v0_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV0ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v1_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV1ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v2_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV2ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_version_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.dropVldVersionNotSupported),
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

export class VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropVldCountryCodeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldCountryCodeMismatch = this._dropVldCountryCodeMismatch;
    }
    if (this._dropVldCrossLayerCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldCrossLayerCorrelation = this._dropVldCrossLayerCorrelation;
    }
    if (this._dropVldGtpBearerCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpBearerCountExceed = this._dropVldGtpBearerCountExceed;
    }
    if (this._dropVldGtpIeRepeatCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpIeRepeatCountExceed = this._dropVldGtpIeRepeatCountExceed;
    }
    if (this._dropVldGtpInvalidApnLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpInvalidApnLenDrop = this._dropVldGtpInvalidApnLenDrop;
    }
    if (this._dropVldGtpInvalidImsiLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpInvalidImsiLenDrop = this._dropVldGtpInvalidImsiLenDrop;
    }
    if (this._dropVldGtpUSpoofedSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpUSpoofedSourceAddress = this._dropVldGtpUSpoofedSourceAddress;
    }
    if (this._dropVldGtpV2WrongLbiCreateBearer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2WrongLbiCreateBearer = this._dropVldGtpV2WrongLbiCreateBearer;
    }
    if (this._dropVldGtpv0SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv0SeqnumBufferFull = this._dropVldGtpv0SeqnumBufferFull;
    }
    if (this._dropVldGtpv1SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv1SeqnumBufferFull = this._dropVldGtpv1SeqnumBufferFull;
    }
    if (this._dropVldGtpv2SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv2SeqnumBufferFull = this._dropVldGtpv2SeqnumBufferFull;
    }
    if (this._dropVldInvalidFlowLabelV0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidFlowLabelV0 = this._dropVldInvalidFlowLabelV0;
    }
    if (this._dropVldInvalidPktLenPiggyback !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidPktLenPiggyback = this._dropVldInvalidPktLenPiggyback;
    }
    if (this._dropVldInvalidTeid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidTeid = this._dropVldInvalidTeid;
    }
    if (this._dropVldMandatoryIeInGroupedIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMandatoryIeInGroupedIe = this._dropVldMandatoryIeInGroupedIe;
    }
    if (this._dropVldMandatoryInformationElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMandatoryInformationElement = this._dropVldMandatoryInformationElement;
    }
    if (this._dropVldMessageLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMessageLength = this._dropVldMessageLength;
    }
    if (this._dropVldOutOfOrderIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfOrderIe = this._dropVldOutOfOrderIe;
    }
    if (this._dropVldOutOfState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfState = this._dropVldOutOfState;
    }
    if (this._dropVldOutOfStateIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfStateIe = this._dropVldOutOfStateIe;
    }
    if (this._dropVldProtocolFlagUnset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldProtocolFlagUnset = this._dropVldProtocolFlagUnset;
    }
    if (this._dropVldReservedFieldSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldReservedFieldSet = this._dropVldReservedFieldSet;
    }
    if (this._dropVldReservedInformationElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldReservedInformationElement = this._dropVldReservedInformationElement;
    }
    if (this._dropVldSanityFailedPiggyback !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldSanityFailedPiggyback = this._dropVldSanityFailedPiggyback;
    }
    if (this._dropVldSequenceNumCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldSequenceNumCorrelation = this._dropVldSequenceNumCorrelation;
    }
    if (this._dropVldTunnelIdFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldTunnelIdFlag = this._dropVldTunnelIdFlag;
    }
    if (this._dropVldV0ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV0ReservedMessageDrop = this._dropVldV0ReservedMessageDrop;
    }
    if (this._dropVldV1ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV1ReservedMessageDrop = this._dropVldV1ReservedMessageDrop;
    }
    if (this._dropVldV2ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV2ReservedMessageDrop = this._dropVldV2ReservedMessageDrop;
    }
    if (this._dropVldVersionNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldVersionNotSupported = this._dropVldVersionNotSupported;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropVldCountryCodeMismatch = undefined;
      this._dropVldCrossLayerCorrelation = undefined;
      this._dropVldGtpBearerCountExceed = undefined;
      this._dropVldGtpIeRepeatCountExceed = undefined;
      this._dropVldGtpInvalidApnLenDrop = undefined;
      this._dropVldGtpInvalidImsiLenDrop = undefined;
      this._dropVldGtpUSpoofedSourceAddress = undefined;
      this._dropVldGtpV2WrongLbiCreateBearer = undefined;
      this._dropVldGtpv0SeqnumBufferFull = undefined;
      this._dropVldGtpv1SeqnumBufferFull = undefined;
      this._dropVldGtpv2SeqnumBufferFull = undefined;
      this._dropVldInvalidFlowLabelV0 = undefined;
      this._dropVldInvalidPktLenPiggyback = undefined;
      this._dropVldInvalidTeid = undefined;
      this._dropVldMandatoryIeInGroupedIe = undefined;
      this._dropVldMandatoryInformationElement = undefined;
      this._dropVldMessageLength = undefined;
      this._dropVldOutOfOrderIe = undefined;
      this._dropVldOutOfState = undefined;
      this._dropVldOutOfStateIe = undefined;
      this._dropVldProtocolFlagUnset = undefined;
      this._dropVldReservedFieldSet = undefined;
      this._dropVldReservedInformationElement = undefined;
      this._dropVldSanityFailedPiggyback = undefined;
      this._dropVldSequenceNumCorrelation = undefined;
      this._dropVldTunnelIdFlag = undefined;
      this._dropVldV0ReservedMessageDrop = undefined;
      this._dropVldV1ReservedMessageDrop = undefined;
      this._dropVldV2ReservedMessageDrop = undefined;
      this._dropVldVersionNotSupported = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropVldCountryCodeMismatch = value.dropVldCountryCodeMismatch;
      this._dropVldCrossLayerCorrelation = value.dropVldCrossLayerCorrelation;
      this._dropVldGtpBearerCountExceed = value.dropVldGtpBearerCountExceed;
      this._dropVldGtpIeRepeatCountExceed = value.dropVldGtpIeRepeatCountExceed;
      this._dropVldGtpInvalidApnLenDrop = value.dropVldGtpInvalidApnLenDrop;
      this._dropVldGtpInvalidImsiLenDrop = value.dropVldGtpInvalidImsiLenDrop;
      this._dropVldGtpUSpoofedSourceAddress = value.dropVldGtpUSpoofedSourceAddress;
      this._dropVldGtpV2WrongLbiCreateBearer = value.dropVldGtpV2WrongLbiCreateBearer;
      this._dropVldGtpv0SeqnumBufferFull = value.dropVldGtpv0SeqnumBufferFull;
      this._dropVldGtpv1SeqnumBufferFull = value.dropVldGtpv1SeqnumBufferFull;
      this._dropVldGtpv2SeqnumBufferFull = value.dropVldGtpv2SeqnumBufferFull;
      this._dropVldInvalidFlowLabelV0 = value.dropVldInvalidFlowLabelV0;
      this._dropVldInvalidPktLenPiggyback = value.dropVldInvalidPktLenPiggyback;
      this._dropVldInvalidTeid = value.dropVldInvalidTeid;
      this._dropVldMandatoryIeInGroupedIe = value.dropVldMandatoryIeInGroupedIe;
      this._dropVldMandatoryInformationElement = value.dropVldMandatoryInformationElement;
      this._dropVldMessageLength = value.dropVldMessageLength;
      this._dropVldOutOfOrderIe = value.dropVldOutOfOrderIe;
      this._dropVldOutOfState = value.dropVldOutOfState;
      this._dropVldOutOfStateIe = value.dropVldOutOfStateIe;
      this._dropVldProtocolFlagUnset = value.dropVldProtocolFlagUnset;
      this._dropVldReservedFieldSet = value.dropVldReservedFieldSet;
      this._dropVldReservedInformationElement = value.dropVldReservedInformationElement;
      this._dropVldSanityFailedPiggyback = value.dropVldSanityFailedPiggyback;
      this._dropVldSequenceNumCorrelation = value.dropVldSequenceNumCorrelation;
      this._dropVldTunnelIdFlag = value.dropVldTunnelIdFlag;
      this._dropVldV0ReservedMessageDrop = value.dropVldV0ReservedMessageDrop;
      this._dropVldV1ReservedMessageDrop = value.dropVldV1ReservedMessageDrop;
      this._dropVldV2ReservedMessageDrop = value.dropVldV2ReservedMessageDrop;
      this._dropVldVersionNotSupported = value.dropVldVersionNotSupported;
      this._uuid = value.uuid;
    }
  }

  // drop_vld_country_code_mismatch - computed: false, optional: true, required: false
  private _dropVldCountryCodeMismatch?: number; 
  public get dropVldCountryCodeMismatch() {
    return this.getNumberAttribute('drop_vld_country_code_mismatch');
  }
  public set dropVldCountryCodeMismatch(value: number) {
    this._dropVldCountryCodeMismatch = value;
  }
  public resetDropVldCountryCodeMismatch() {
    this._dropVldCountryCodeMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldCountryCodeMismatchInput() {
    return this._dropVldCountryCodeMismatch;
  }

  // drop_vld_cross_layer_correlation - computed: false, optional: true, required: false
  private _dropVldCrossLayerCorrelation?: number; 
  public get dropVldCrossLayerCorrelation() {
    return this.getNumberAttribute('drop_vld_cross_layer_correlation');
  }
  public set dropVldCrossLayerCorrelation(value: number) {
    this._dropVldCrossLayerCorrelation = value;
  }
  public resetDropVldCrossLayerCorrelation() {
    this._dropVldCrossLayerCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldCrossLayerCorrelationInput() {
    return this._dropVldCrossLayerCorrelation;
  }

  // drop_vld_gtp_bearer_count_exceed - computed: false, optional: true, required: false
  private _dropVldGtpBearerCountExceed?: number; 
  public get dropVldGtpBearerCountExceed() {
    return this.getNumberAttribute('drop_vld_gtp_bearer_count_exceed');
  }
  public set dropVldGtpBearerCountExceed(value: number) {
    this._dropVldGtpBearerCountExceed = value;
  }
  public resetDropVldGtpBearerCountExceed() {
    this._dropVldGtpBearerCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpBearerCountExceedInput() {
    return this._dropVldGtpBearerCountExceed;
  }

  // drop_vld_gtp_ie_repeat_count_exceed - computed: false, optional: true, required: false
  private _dropVldGtpIeRepeatCountExceed?: number; 
  public get dropVldGtpIeRepeatCountExceed() {
    return this.getNumberAttribute('drop_vld_gtp_ie_repeat_count_exceed');
  }
  public set dropVldGtpIeRepeatCountExceed(value: number) {
    this._dropVldGtpIeRepeatCountExceed = value;
  }
  public resetDropVldGtpIeRepeatCountExceed() {
    this._dropVldGtpIeRepeatCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpIeRepeatCountExceedInput() {
    return this._dropVldGtpIeRepeatCountExceed;
  }

  // drop_vld_gtp_invalid_apn_len_drop - computed: false, optional: true, required: false
  private _dropVldGtpInvalidApnLenDrop?: number; 
  public get dropVldGtpInvalidApnLenDrop() {
    return this.getNumberAttribute('drop_vld_gtp_invalid_apn_len_drop');
  }
  public set dropVldGtpInvalidApnLenDrop(value: number) {
    this._dropVldGtpInvalidApnLenDrop = value;
  }
  public resetDropVldGtpInvalidApnLenDrop() {
    this._dropVldGtpInvalidApnLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpInvalidApnLenDropInput() {
    return this._dropVldGtpInvalidApnLenDrop;
  }

  // drop_vld_gtp_invalid_imsi_len_drop - computed: false, optional: true, required: false
  private _dropVldGtpInvalidImsiLenDrop?: number; 
  public get dropVldGtpInvalidImsiLenDrop() {
    return this.getNumberAttribute('drop_vld_gtp_invalid_imsi_len_drop');
  }
  public set dropVldGtpInvalidImsiLenDrop(value: number) {
    this._dropVldGtpInvalidImsiLenDrop = value;
  }
  public resetDropVldGtpInvalidImsiLenDrop() {
    this._dropVldGtpInvalidImsiLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpInvalidImsiLenDropInput() {
    return this._dropVldGtpInvalidImsiLenDrop;
  }

  // drop_vld_gtp_u_spoofed_source_address - computed: false, optional: true, required: false
  private _dropVldGtpUSpoofedSourceAddress?: number; 
  public get dropVldGtpUSpoofedSourceAddress() {
    return this.getNumberAttribute('drop_vld_gtp_u_spoofed_source_address');
  }
  public set dropVldGtpUSpoofedSourceAddress(value: number) {
    this._dropVldGtpUSpoofedSourceAddress = value;
  }
  public resetDropVldGtpUSpoofedSourceAddress() {
    this._dropVldGtpUSpoofedSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpUSpoofedSourceAddressInput() {
    return this._dropVldGtpUSpoofedSourceAddress;
  }

  // drop_vld_gtp_v2_wrong_lbi_create_bearer - computed: false, optional: true, required: false
  private _dropVldGtpV2WrongLbiCreateBearer?: number; 
  public get dropVldGtpV2WrongLbiCreateBearer() {
    return this.getNumberAttribute('drop_vld_gtp_v2_wrong_lbi_create_bearer');
  }
  public set dropVldGtpV2WrongLbiCreateBearer(value: number) {
    this._dropVldGtpV2WrongLbiCreateBearer = value;
  }
  public resetDropVldGtpV2WrongLbiCreateBearer() {
    this._dropVldGtpV2WrongLbiCreateBearer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2WrongLbiCreateBearerInput() {
    return this._dropVldGtpV2WrongLbiCreateBearer;
  }

  // drop_vld_gtpv0_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv0SeqnumBufferFull?: number; 
  public get dropVldGtpv0SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv0_seqnum_buffer_full');
  }
  public set dropVldGtpv0SeqnumBufferFull(value: number) {
    this._dropVldGtpv0SeqnumBufferFull = value;
  }
  public resetDropVldGtpv0SeqnumBufferFull() {
    this._dropVldGtpv0SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv0SeqnumBufferFullInput() {
    return this._dropVldGtpv0SeqnumBufferFull;
  }

  // drop_vld_gtpv1_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv1SeqnumBufferFull?: number; 
  public get dropVldGtpv1SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv1_seqnum_buffer_full');
  }
  public set dropVldGtpv1SeqnumBufferFull(value: number) {
    this._dropVldGtpv1SeqnumBufferFull = value;
  }
  public resetDropVldGtpv1SeqnumBufferFull() {
    this._dropVldGtpv1SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv1SeqnumBufferFullInput() {
    return this._dropVldGtpv1SeqnumBufferFull;
  }

  // drop_vld_gtpv2_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv2SeqnumBufferFull?: number; 
  public get dropVldGtpv2SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv2_seqnum_buffer_full');
  }
  public set dropVldGtpv2SeqnumBufferFull(value: number) {
    this._dropVldGtpv2SeqnumBufferFull = value;
  }
  public resetDropVldGtpv2SeqnumBufferFull() {
    this._dropVldGtpv2SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv2SeqnumBufferFullInput() {
    return this._dropVldGtpv2SeqnumBufferFull;
  }

  // drop_vld_invalid_flow_label_v0 - computed: false, optional: true, required: false
  private _dropVldInvalidFlowLabelV0?: number; 
  public get dropVldInvalidFlowLabelV0() {
    return this.getNumberAttribute('drop_vld_invalid_flow_label_v0');
  }
  public set dropVldInvalidFlowLabelV0(value: number) {
    this._dropVldInvalidFlowLabelV0 = value;
  }
  public resetDropVldInvalidFlowLabelV0() {
    this._dropVldInvalidFlowLabelV0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidFlowLabelV0Input() {
    return this._dropVldInvalidFlowLabelV0;
  }

  // drop_vld_invalid_pkt_len_piggyback - computed: false, optional: true, required: false
  private _dropVldInvalidPktLenPiggyback?: number; 
  public get dropVldInvalidPktLenPiggyback() {
    return this.getNumberAttribute('drop_vld_invalid_pkt_len_piggyback');
  }
  public set dropVldInvalidPktLenPiggyback(value: number) {
    this._dropVldInvalidPktLenPiggyback = value;
  }
  public resetDropVldInvalidPktLenPiggyback() {
    this._dropVldInvalidPktLenPiggyback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidPktLenPiggybackInput() {
    return this._dropVldInvalidPktLenPiggyback;
  }

  // drop_vld_invalid_teid - computed: false, optional: true, required: false
  private _dropVldInvalidTeid?: number; 
  public get dropVldInvalidTeid() {
    return this.getNumberAttribute('drop_vld_invalid_teid');
  }
  public set dropVldInvalidTeid(value: number) {
    this._dropVldInvalidTeid = value;
  }
  public resetDropVldInvalidTeid() {
    this._dropVldInvalidTeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidTeidInput() {
    return this._dropVldInvalidTeid;
  }

  // drop_vld_mandatory_ie_in_grouped_ie - computed: false, optional: true, required: false
  private _dropVldMandatoryIeInGroupedIe?: number; 
  public get dropVldMandatoryIeInGroupedIe() {
    return this.getNumberAttribute('drop_vld_mandatory_ie_in_grouped_ie');
  }
  public set dropVldMandatoryIeInGroupedIe(value: number) {
    this._dropVldMandatoryIeInGroupedIe = value;
  }
  public resetDropVldMandatoryIeInGroupedIe() {
    this._dropVldMandatoryIeInGroupedIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMandatoryIeInGroupedIeInput() {
    return this._dropVldMandatoryIeInGroupedIe;
  }

  // drop_vld_mandatory_information_element - computed: false, optional: true, required: false
  private _dropVldMandatoryInformationElement?: number; 
  public get dropVldMandatoryInformationElement() {
    return this.getNumberAttribute('drop_vld_mandatory_information_element');
  }
  public set dropVldMandatoryInformationElement(value: number) {
    this._dropVldMandatoryInformationElement = value;
  }
  public resetDropVldMandatoryInformationElement() {
    this._dropVldMandatoryInformationElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMandatoryInformationElementInput() {
    return this._dropVldMandatoryInformationElement;
  }

  // drop_vld_message_length - computed: false, optional: true, required: false
  private _dropVldMessageLength?: number; 
  public get dropVldMessageLength() {
    return this.getNumberAttribute('drop_vld_message_length');
  }
  public set dropVldMessageLength(value: number) {
    this._dropVldMessageLength = value;
  }
  public resetDropVldMessageLength() {
    this._dropVldMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMessageLengthInput() {
    return this._dropVldMessageLength;
  }

  // drop_vld_out_of_order_ie - computed: false, optional: true, required: false
  private _dropVldOutOfOrderIe?: number; 
  public get dropVldOutOfOrderIe() {
    return this.getNumberAttribute('drop_vld_out_of_order_ie');
  }
  public set dropVldOutOfOrderIe(value: number) {
    this._dropVldOutOfOrderIe = value;
  }
  public resetDropVldOutOfOrderIe() {
    this._dropVldOutOfOrderIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfOrderIeInput() {
    return this._dropVldOutOfOrderIe;
  }

  // drop_vld_out_of_state - computed: false, optional: true, required: false
  private _dropVldOutOfState?: number; 
  public get dropVldOutOfState() {
    return this.getNumberAttribute('drop_vld_out_of_state');
  }
  public set dropVldOutOfState(value: number) {
    this._dropVldOutOfState = value;
  }
  public resetDropVldOutOfState() {
    this._dropVldOutOfState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfStateInput() {
    return this._dropVldOutOfState;
  }

  // drop_vld_out_of_state_ie - computed: false, optional: true, required: false
  private _dropVldOutOfStateIe?: number; 
  public get dropVldOutOfStateIe() {
    return this.getNumberAttribute('drop_vld_out_of_state_ie');
  }
  public set dropVldOutOfStateIe(value: number) {
    this._dropVldOutOfStateIe = value;
  }
  public resetDropVldOutOfStateIe() {
    this._dropVldOutOfStateIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfStateIeInput() {
    return this._dropVldOutOfStateIe;
  }

  // drop_vld_protocol_flag_unset - computed: false, optional: true, required: false
  private _dropVldProtocolFlagUnset?: number; 
  public get dropVldProtocolFlagUnset() {
    return this.getNumberAttribute('drop_vld_protocol_flag_unset');
  }
  public set dropVldProtocolFlagUnset(value: number) {
    this._dropVldProtocolFlagUnset = value;
  }
  public resetDropVldProtocolFlagUnset() {
    this._dropVldProtocolFlagUnset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldProtocolFlagUnsetInput() {
    return this._dropVldProtocolFlagUnset;
  }

  // drop_vld_reserved_field_set - computed: false, optional: true, required: false
  private _dropVldReservedFieldSet?: number; 
  public get dropVldReservedFieldSet() {
    return this.getNumberAttribute('drop_vld_reserved_field_set');
  }
  public set dropVldReservedFieldSet(value: number) {
    this._dropVldReservedFieldSet = value;
  }
  public resetDropVldReservedFieldSet() {
    this._dropVldReservedFieldSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldReservedFieldSetInput() {
    return this._dropVldReservedFieldSet;
  }

  // drop_vld_reserved_information_element - computed: false, optional: true, required: false
  private _dropVldReservedInformationElement?: number; 
  public get dropVldReservedInformationElement() {
    return this.getNumberAttribute('drop_vld_reserved_information_element');
  }
  public set dropVldReservedInformationElement(value: number) {
    this._dropVldReservedInformationElement = value;
  }
  public resetDropVldReservedInformationElement() {
    this._dropVldReservedInformationElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldReservedInformationElementInput() {
    return this._dropVldReservedInformationElement;
  }

  // drop_vld_sanity_failed_piggyback - computed: false, optional: true, required: false
  private _dropVldSanityFailedPiggyback?: number; 
  public get dropVldSanityFailedPiggyback() {
    return this.getNumberAttribute('drop_vld_sanity_failed_piggyback');
  }
  public set dropVldSanityFailedPiggyback(value: number) {
    this._dropVldSanityFailedPiggyback = value;
  }
  public resetDropVldSanityFailedPiggyback() {
    this._dropVldSanityFailedPiggyback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldSanityFailedPiggybackInput() {
    return this._dropVldSanityFailedPiggyback;
  }

  // drop_vld_sequence_num_correlation - computed: false, optional: true, required: false
  private _dropVldSequenceNumCorrelation?: number; 
  public get dropVldSequenceNumCorrelation() {
    return this.getNumberAttribute('drop_vld_sequence_num_correlation');
  }
  public set dropVldSequenceNumCorrelation(value: number) {
    this._dropVldSequenceNumCorrelation = value;
  }
  public resetDropVldSequenceNumCorrelation() {
    this._dropVldSequenceNumCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldSequenceNumCorrelationInput() {
    return this._dropVldSequenceNumCorrelation;
  }

  // drop_vld_tunnel_id_flag - computed: false, optional: true, required: false
  private _dropVldTunnelIdFlag?: number; 
  public get dropVldTunnelIdFlag() {
    return this.getNumberAttribute('drop_vld_tunnel_id_flag');
  }
  public set dropVldTunnelIdFlag(value: number) {
    this._dropVldTunnelIdFlag = value;
  }
  public resetDropVldTunnelIdFlag() {
    this._dropVldTunnelIdFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldTunnelIdFlagInput() {
    return this._dropVldTunnelIdFlag;
  }

  // drop_vld_v0_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV0ReservedMessageDrop?: number; 
  public get dropVldV0ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v0_reserved_message_drop');
  }
  public set dropVldV0ReservedMessageDrop(value: number) {
    this._dropVldV0ReservedMessageDrop = value;
  }
  public resetDropVldV0ReservedMessageDrop() {
    this._dropVldV0ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV0ReservedMessageDropInput() {
    return this._dropVldV0ReservedMessageDrop;
  }

  // drop_vld_v1_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV1ReservedMessageDrop?: number; 
  public get dropVldV1ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v1_reserved_message_drop');
  }
  public set dropVldV1ReservedMessageDrop(value: number) {
    this._dropVldV1ReservedMessageDrop = value;
  }
  public resetDropVldV1ReservedMessageDrop() {
    this._dropVldV1ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV1ReservedMessageDropInput() {
    return this._dropVldV1ReservedMessageDrop;
  }

  // drop_vld_v2_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV2ReservedMessageDrop?: number; 
  public get dropVldV2ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v2_reserved_message_drop');
  }
  public set dropVldV2ReservedMessageDrop(value: number) {
    this._dropVldV2ReservedMessageDrop = value;
  }
  public resetDropVldV2ReservedMessageDrop() {
    this._dropVldV2ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV2ReservedMessageDropInput() {
    return this._dropVldV2ReservedMessageDrop;
  }

  // drop_vld_version_not_supported - computed: false, optional: true, required: false
  private _dropVldVersionNotSupported?: number; 
  public get dropVldVersionNotSupported() {
    return this.getNumberAttribute('drop_vld_version_not_supported');
  }
  public set dropVldVersionNotSupported(value: number) {
    this._dropVldVersionNotSupported = value;
  }
  public resetDropVldVersionNotSupported() {
    this._dropVldVersionNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldVersionNotSupportedInput() {
    return this._dropVldVersionNotSupported;
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
export interface VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Validation Drop: Country Code Mismatch in IMSI and MSISDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_country_code_mismatch VisibilityPacketCaptureObjectTemplatesA#drop_vld_country_code_mismatch}
  */
  readonly dropVldCountryCodeMismatch?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Cross Layer IP Address Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_cross_layer_correlation VisibilityPacketCaptureObjectTemplatesA#drop_vld_cross_layer_correlation}
  */
  readonly dropVldCrossLayerCorrelation?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP Bearer count exceeded max (11)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtp_bearer_count_exceed VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtp_bearer_count_exceed}
  */
  readonly dropVldGtpBearerCountExceed?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP repeated IE count exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtp_ie_repeat_count_exceed VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtp_ie_repeat_count_exceed}
  */
  readonly dropVldGtpIeRepeatCountExceed?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Invalid APN Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtp_invalid_apn_len_drop VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtp_invalid_apn_len_drop}
  */
  readonly dropVldGtpInvalidApnLenDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Invalid IMSI Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtp_invalid_imsi_len_drop VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtp_invalid_imsi_len_drop}
  */
  readonly dropVldGtpInvalidImsiLenDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-U IP Address Spoofed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtp_u_spoofed_source_address VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtp_u_spoofed_source_address}
  */
  readonly dropVldGtpUSpoofedSourceAddress?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV2-C Wrong LBI in Create Bearer Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtp_v2_wrong_lbi_create_bearer VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtp_v2_wrong_lbi_create_bearer}
  */
  readonly dropVldGtpV2WrongLbiCreateBearer?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV0-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtpv0_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtpv0_seqnum_buffer_full}
  */
  readonly dropVldGtpv0SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV1-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtpv1_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtpv1_seqnum_buffer_full}
  */
  readonly dropVldGtpv1SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPV2-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_gtpv2_seqnum_buffer_full VisibilityPacketCaptureObjectTemplatesA#drop_vld_gtpv2_seqnum_buffer_full}
  */
  readonly dropVldGtpv2SeqnumBufferFull?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid Flow Label in GTPv0-C Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_invalid_flow_label_v0 VisibilityPacketCaptureObjectTemplatesA#drop_vld_invalid_flow_label_v0}
  */
  readonly dropVldInvalidFlowLabelV0?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Piggyback message invalid packet length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_invalid_pkt_len_piggyback VisibilityPacketCaptureObjectTemplatesA#drop_vld_invalid_pkt_len_piggyback}
  */
  readonly dropVldInvalidPktLenPiggyback?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid TEID Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_invalid_teid VisibilityPacketCaptureObjectTemplatesA#drop_vld_invalid_teid}
  */
  readonly dropVldInvalidTeid?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Mandatory IE in Grouped IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_mandatory_ie_in_grouped_ie VisibilityPacketCaptureObjectTemplatesA#drop_vld_mandatory_ie_in_grouped_ie}
  */
  readonly dropVldMandatoryIeInGroupedIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Mandatory IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_mandatory_information_element VisibilityPacketCaptureObjectTemplatesA#drop_vld_mandatory_information_element}
  */
  readonly dropVldMandatoryInformationElement?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Message Length Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_message_length VisibilityPacketCaptureObjectTemplatesA#drop_vld_message_length}
  */
  readonly dropVldMessageLength?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv1-C Message Out of Order IE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_out_of_order_ie VisibilityPacketCaptureObjectTemplatesA#drop_vld_out_of_order_ie}
  */
  readonly dropVldOutOfOrderIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Out Of State GTP Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_out_of_state VisibilityPacketCaptureObjectTemplatesA#drop_vld_out_of_state}
  */
  readonly dropVldOutOfState?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Unexpected IE Present in Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_out_of_state_ie VisibilityPacketCaptureObjectTemplatesA#drop_vld_out_of_state_ie}
  */
  readonly dropVldOutOfStateIe?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Protocol flag in Header Field not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_protocol_flag_unset VisibilityPacketCaptureObjectTemplatesA#drop_vld_protocol_flag_unset}
  */
  readonly dropVldProtocolFlagUnset?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Reserved Header Field Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_reserved_field_set VisibilityPacketCaptureObjectTemplatesA#drop_vld_reserved_field_set}
  */
  readonly dropVldReservedFieldSet?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Reserved IE Field Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_reserved_information_element VisibilityPacketCaptureObjectTemplatesA#drop_vld_reserved_information_element}
  */
  readonly dropVldReservedInformationElement?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: piggyback message anomaly failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_sanity_failed_piggyback VisibilityPacketCaptureObjectTemplatesA#drop_vld_sanity_failed_piggyback}
  */
  readonly dropVldSanityFailedPiggyback?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTP-C Sequence number Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_sequence_num_correlation VisibilityPacketCaptureObjectTemplatesA#drop_vld_sequence_num_correlation}
  */
  readonly dropVldSequenceNumCorrelation?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Tunnel Header Flag Not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_tunnel_id_flag VisibilityPacketCaptureObjectTemplatesA#drop_vld_tunnel_id_flag}
  */
  readonly dropVldTunnelIdFlag?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv0-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_v0_reserved_message_drop VisibilityPacketCaptureObjectTemplatesA#drop_vld_v0_reserved_message_drop}
  */
  readonly dropVldV0ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv1-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_v1_reserved_message_drop VisibilityPacketCaptureObjectTemplatesA#drop_vld_v1_reserved_message_drop}
  */
  readonly dropVldV1ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: GTPv2-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_v2_reserved_message_drop VisibilityPacketCaptureObjectTemplatesA#drop_vld_v2_reserved_message_drop}
  */
  readonly dropVldV2ReservedMessageDrop?: number;
  /**
  * Enable automatic packet-capture for Validation Drop: Invalid GTP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_vld_version_not_supported VisibilityPacketCaptureObjectTemplatesA#drop_vld_version_not_supported}
  */
  readonly dropVldVersionNotSupported?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#duration VisibilityPacketCaptureObjectTemplatesA#duration}
  */
  readonly duration?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateAOutputReference | VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_vld_country_code_mismatch: cdktf.numberToTerraform(struct!.dropVldCountryCodeMismatch),
    drop_vld_cross_layer_correlation: cdktf.numberToTerraform(struct!.dropVldCrossLayerCorrelation),
    drop_vld_gtp_bearer_count_exceed: cdktf.numberToTerraform(struct!.dropVldGtpBearerCountExceed),
    drop_vld_gtp_ie_repeat_count_exceed: cdktf.numberToTerraform(struct!.dropVldGtpIeRepeatCountExceed),
    drop_vld_gtp_invalid_apn_len_drop: cdktf.numberToTerraform(struct!.dropVldGtpInvalidApnLenDrop),
    drop_vld_gtp_invalid_imsi_len_drop: cdktf.numberToTerraform(struct!.dropVldGtpInvalidImsiLenDrop),
    drop_vld_gtp_u_spoofed_source_address: cdktf.numberToTerraform(struct!.dropVldGtpUSpoofedSourceAddress),
    drop_vld_gtp_v2_wrong_lbi_create_bearer: cdktf.numberToTerraform(struct!.dropVldGtpV2WrongLbiCreateBearer),
    drop_vld_gtpv0_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv0SeqnumBufferFull),
    drop_vld_gtpv1_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv1SeqnumBufferFull),
    drop_vld_gtpv2_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv2SeqnumBufferFull),
    drop_vld_invalid_flow_label_v0: cdktf.numberToTerraform(struct!.dropVldInvalidFlowLabelV0),
    drop_vld_invalid_pkt_len_piggyback: cdktf.numberToTerraform(struct!.dropVldInvalidPktLenPiggyback),
    drop_vld_invalid_teid: cdktf.numberToTerraform(struct!.dropVldInvalidTeid),
    drop_vld_mandatory_ie_in_grouped_ie: cdktf.numberToTerraform(struct!.dropVldMandatoryIeInGroupedIe),
    drop_vld_mandatory_information_element: cdktf.numberToTerraform(struct!.dropVldMandatoryInformationElement),
    drop_vld_message_length: cdktf.numberToTerraform(struct!.dropVldMessageLength),
    drop_vld_out_of_order_ie: cdktf.numberToTerraform(struct!.dropVldOutOfOrderIe),
    drop_vld_out_of_state: cdktf.numberToTerraform(struct!.dropVldOutOfState),
    drop_vld_out_of_state_ie: cdktf.numberToTerraform(struct!.dropVldOutOfStateIe),
    drop_vld_protocol_flag_unset: cdktf.numberToTerraform(struct!.dropVldProtocolFlagUnset),
    drop_vld_reserved_field_set: cdktf.numberToTerraform(struct!.dropVldReservedFieldSet),
    drop_vld_reserved_information_element: cdktf.numberToTerraform(struct!.dropVldReservedInformationElement),
    drop_vld_sanity_failed_piggyback: cdktf.numberToTerraform(struct!.dropVldSanityFailedPiggyback),
    drop_vld_sequence_num_correlation: cdktf.numberToTerraform(struct!.dropVldSequenceNumCorrelation),
    drop_vld_tunnel_id_flag: cdktf.numberToTerraform(struct!.dropVldTunnelIdFlag),
    drop_vld_v0_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV0ReservedMessageDrop),
    drop_vld_v1_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV1ReservedMessageDrop),
    drop_vld_v2_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV2ReservedMessageDrop),
    drop_vld_version_not_supported: cdktf.numberToTerraform(struct!.dropVldVersionNotSupported),
    duration: cdktf.numberToTerraform(struct!.duration),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateAOutputReference | VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_vld_country_code_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dropVldCountryCodeMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_cross_layer_correlation: {
      value: cdktf.numberToHclTerraform(struct!.dropVldCrossLayerCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_bearer_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpBearerCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_ie_repeat_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpIeRepeatCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_invalid_apn_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpInvalidApnLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_invalid_imsi_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpInvalidImsiLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_u_spoofed_source_address: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpUSpoofedSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_wrong_lbi_create_bearer: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2WrongLbiCreateBearer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv0_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv0SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv1_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv1SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv2_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv2SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_flow_label_v0: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidFlowLabelV0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_pkt_len_piggyback: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidPktLenPiggyback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_teid: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidTeid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_mandatory_ie_in_grouped_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMandatoryIeInGroupedIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_mandatory_information_element: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMandatoryInformationElement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_message_length: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMessageLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_order_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfOrderIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_state: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_state_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfStateIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_protocol_flag_unset: {
      value: cdktf.numberToHclTerraform(struct!.dropVldProtocolFlagUnset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_reserved_field_set: {
      value: cdktf.numberToHclTerraform(struct!.dropVldReservedFieldSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_reserved_information_element: {
      value: cdktf.numberToHclTerraform(struct!.dropVldReservedInformationElement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_sanity_failed_piggyback: {
      value: cdktf.numberToHclTerraform(struct!.dropVldSanityFailedPiggyback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_sequence_num_correlation: {
      value: cdktf.numberToHclTerraform(struct!.dropVldSequenceNumCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_tunnel_id_flag: {
      value: cdktf.numberToHclTerraform(struct!.dropVldTunnelIdFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v0_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV0ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v1_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV1ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v2_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV2ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_version_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.dropVldVersionNotSupported),
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

export class VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropVldCountryCodeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldCountryCodeMismatch = this._dropVldCountryCodeMismatch;
    }
    if (this._dropVldCrossLayerCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldCrossLayerCorrelation = this._dropVldCrossLayerCorrelation;
    }
    if (this._dropVldGtpBearerCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpBearerCountExceed = this._dropVldGtpBearerCountExceed;
    }
    if (this._dropVldGtpIeRepeatCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpIeRepeatCountExceed = this._dropVldGtpIeRepeatCountExceed;
    }
    if (this._dropVldGtpInvalidApnLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpInvalidApnLenDrop = this._dropVldGtpInvalidApnLenDrop;
    }
    if (this._dropVldGtpInvalidImsiLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpInvalidImsiLenDrop = this._dropVldGtpInvalidImsiLenDrop;
    }
    if (this._dropVldGtpUSpoofedSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpUSpoofedSourceAddress = this._dropVldGtpUSpoofedSourceAddress;
    }
    if (this._dropVldGtpV2WrongLbiCreateBearer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2WrongLbiCreateBearer = this._dropVldGtpV2WrongLbiCreateBearer;
    }
    if (this._dropVldGtpv0SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv0SeqnumBufferFull = this._dropVldGtpv0SeqnumBufferFull;
    }
    if (this._dropVldGtpv1SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv1SeqnumBufferFull = this._dropVldGtpv1SeqnumBufferFull;
    }
    if (this._dropVldGtpv2SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv2SeqnumBufferFull = this._dropVldGtpv2SeqnumBufferFull;
    }
    if (this._dropVldInvalidFlowLabelV0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidFlowLabelV0 = this._dropVldInvalidFlowLabelV0;
    }
    if (this._dropVldInvalidPktLenPiggyback !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidPktLenPiggyback = this._dropVldInvalidPktLenPiggyback;
    }
    if (this._dropVldInvalidTeid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidTeid = this._dropVldInvalidTeid;
    }
    if (this._dropVldMandatoryIeInGroupedIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMandatoryIeInGroupedIe = this._dropVldMandatoryIeInGroupedIe;
    }
    if (this._dropVldMandatoryInformationElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMandatoryInformationElement = this._dropVldMandatoryInformationElement;
    }
    if (this._dropVldMessageLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMessageLength = this._dropVldMessageLength;
    }
    if (this._dropVldOutOfOrderIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfOrderIe = this._dropVldOutOfOrderIe;
    }
    if (this._dropVldOutOfState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfState = this._dropVldOutOfState;
    }
    if (this._dropVldOutOfStateIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfStateIe = this._dropVldOutOfStateIe;
    }
    if (this._dropVldProtocolFlagUnset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldProtocolFlagUnset = this._dropVldProtocolFlagUnset;
    }
    if (this._dropVldReservedFieldSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldReservedFieldSet = this._dropVldReservedFieldSet;
    }
    if (this._dropVldReservedInformationElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldReservedInformationElement = this._dropVldReservedInformationElement;
    }
    if (this._dropVldSanityFailedPiggyback !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldSanityFailedPiggyback = this._dropVldSanityFailedPiggyback;
    }
    if (this._dropVldSequenceNumCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldSequenceNumCorrelation = this._dropVldSequenceNumCorrelation;
    }
    if (this._dropVldTunnelIdFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldTunnelIdFlag = this._dropVldTunnelIdFlag;
    }
    if (this._dropVldV0ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV0ReservedMessageDrop = this._dropVldV0ReservedMessageDrop;
    }
    if (this._dropVldV1ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV1ReservedMessageDrop = this._dropVldV1ReservedMessageDrop;
    }
    if (this._dropVldV2ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV2ReservedMessageDrop = this._dropVldV2ReservedMessageDrop;
    }
    if (this._dropVldVersionNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldVersionNotSupported = this._dropVldVersionNotSupported;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
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

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropVldCountryCodeMismatch = undefined;
      this._dropVldCrossLayerCorrelation = undefined;
      this._dropVldGtpBearerCountExceed = undefined;
      this._dropVldGtpIeRepeatCountExceed = undefined;
      this._dropVldGtpInvalidApnLenDrop = undefined;
      this._dropVldGtpInvalidImsiLenDrop = undefined;
      this._dropVldGtpUSpoofedSourceAddress = undefined;
      this._dropVldGtpV2WrongLbiCreateBearer = undefined;
      this._dropVldGtpv0SeqnumBufferFull = undefined;
      this._dropVldGtpv1SeqnumBufferFull = undefined;
      this._dropVldGtpv2SeqnumBufferFull = undefined;
      this._dropVldInvalidFlowLabelV0 = undefined;
      this._dropVldInvalidPktLenPiggyback = undefined;
      this._dropVldInvalidTeid = undefined;
      this._dropVldMandatoryIeInGroupedIe = undefined;
      this._dropVldMandatoryInformationElement = undefined;
      this._dropVldMessageLength = undefined;
      this._dropVldOutOfOrderIe = undefined;
      this._dropVldOutOfState = undefined;
      this._dropVldOutOfStateIe = undefined;
      this._dropVldProtocolFlagUnset = undefined;
      this._dropVldReservedFieldSet = undefined;
      this._dropVldReservedInformationElement = undefined;
      this._dropVldSanityFailedPiggyback = undefined;
      this._dropVldSequenceNumCorrelation = undefined;
      this._dropVldTunnelIdFlag = undefined;
      this._dropVldV0ReservedMessageDrop = undefined;
      this._dropVldV1ReservedMessageDrop = undefined;
      this._dropVldV2ReservedMessageDrop = undefined;
      this._dropVldVersionNotSupported = undefined;
      this._duration = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropVldCountryCodeMismatch = value.dropVldCountryCodeMismatch;
      this._dropVldCrossLayerCorrelation = value.dropVldCrossLayerCorrelation;
      this._dropVldGtpBearerCountExceed = value.dropVldGtpBearerCountExceed;
      this._dropVldGtpIeRepeatCountExceed = value.dropVldGtpIeRepeatCountExceed;
      this._dropVldGtpInvalidApnLenDrop = value.dropVldGtpInvalidApnLenDrop;
      this._dropVldGtpInvalidImsiLenDrop = value.dropVldGtpInvalidImsiLenDrop;
      this._dropVldGtpUSpoofedSourceAddress = value.dropVldGtpUSpoofedSourceAddress;
      this._dropVldGtpV2WrongLbiCreateBearer = value.dropVldGtpV2WrongLbiCreateBearer;
      this._dropVldGtpv0SeqnumBufferFull = value.dropVldGtpv0SeqnumBufferFull;
      this._dropVldGtpv1SeqnumBufferFull = value.dropVldGtpv1SeqnumBufferFull;
      this._dropVldGtpv2SeqnumBufferFull = value.dropVldGtpv2SeqnumBufferFull;
      this._dropVldInvalidFlowLabelV0 = value.dropVldInvalidFlowLabelV0;
      this._dropVldInvalidPktLenPiggyback = value.dropVldInvalidPktLenPiggyback;
      this._dropVldInvalidTeid = value.dropVldInvalidTeid;
      this._dropVldMandatoryIeInGroupedIe = value.dropVldMandatoryIeInGroupedIe;
      this._dropVldMandatoryInformationElement = value.dropVldMandatoryInformationElement;
      this._dropVldMessageLength = value.dropVldMessageLength;
      this._dropVldOutOfOrderIe = value.dropVldOutOfOrderIe;
      this._dropVldOutOfState = value.dropVldOutOfState;
      this._dropVldOutOfStateIe = value.dropVldOutOfStateIe;
      this._dropVldProtocolFlagUnset = value.dropVldProtocolFlagUnset;
      this._dropVldReservedFieldSet = value.dropVldReservedFieldSet;
      this._dropVldReservedInformationElement = value.dropVldReservedInformationElement;
      this._dropVldSanityFailedPiggyback = value.dropVldSanityFailedPiggyback;
      this._dropVldSequenceNumCorrelation = value.dropVldSequenceNumCorrelation;
      this._dropVldTunnelIdFlag = value.dropVldTunnelIdFlag;
      this._dropVldV0ReservedMessageDrop = value.dropVldV0ReservedMessageDrop;
      this._dropVldV1ReservedMessageDrop = value.dropVldV1ReservedMessageDrop;
      this._dropVldV2ReservedMessageDrop = value.dropVldV2ReservedMessageDrop;
      this._dropVldVersionNotSupported = value.dropVldVersionNotSupported;
      this._duration = value.duration;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

  // drop_vld_country_code_mismatch - computed: false, optional: true, required: false
  private _dropVldCountryCodeMismatch?: number; 
  public get dropVldCountryCodeMismatch() {
    return this.getNumberAttribute('drop_vld_country_code_mismatch');
  }
  public set dropVldCountryCodeMismatch(value: number) {
    this._dropVldCountryCodeMismatch = value;
  }
  public resetDropVldCountryCodeMismatch() {
    this._dropVldCountryCodeMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldCountryCodeMismatchInput() {
    return this._dropVldCountryCodeMismatch;
  }

  // drop_vld_cross_layer_correlation - computed: false, optional: true, required: false
  private _dropVldCrossLayerCorrelation?: number; 
  public get dropVldCrossLayerCorrelation() {
    return this.getNumberAttribute('drop_vld_cross_layer_correlation');
  }
  public set dropVldCrossLayerCorrelation(value: number) {
    this._dropVldCrossLayerCorrelation = value;
  }
  public resetDropVldCrossLayerCorrelation() {
    this._dropVldCrossLayerCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldCrossLayerCorrelationInput() {
    return this._dropVldCrossLayerCorrelation;
  }

  // drop_vld_gtp_bearer_count_exceed - computed: false, optional: true, required: false
  private _dropVldGtpBearerCountExceed?: number; 
  public get dropVldGtpBearerCountExceed() {
    return this.getNumberAttribute('drop_vld_gtp_bearer_count_exceed');
  }
  public set dropVldGtpBearerCountExceed(value: number) {
    this._dropVldGtpBearerCountExceed = value;
  }
  public resetDropVldGtpBearerCountExceed() {
    this._dropVldGtpBearerCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpBearerCountExceedInput() {
    return this._dropVldGtpBearerCountExceed;
  }

  // drop_vld_gtp_ie_repeat_count_exceed - computed: false, optional: true, required: false
  private _dropVldGtpIeRepeatCountExceed?: number; 
  public get dropVldGtpIeRepeatCountExceed() {
    return this.getNumberAttribute('drop_vld_gtp_ie_repeat_count_exceed');
  }
  public set dropVldGtpIeRepeatCountExceed(value: number) {
    this._dropVldGtpIeRepeatCountExceed = value;
  }
  public resetDropVldGtpIeRepeatCountExceed() {
    this._dropVldGtpIeRepeatCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpIeRepeatCountExceedInput() {
    return this._dropVldGtpIeRepeatCountExceed;
  }

  // drop_vld_gtp_invalid_apn_len_drop - computed: false, optional: true, required: false
  private _dropVldGtpInvalidApnLenDrop?: number; 
  public get dropVldGtpInvalidApnLenDrop() {
    return this.getNumberAttribute('drop_vld_gtp_invalid_apn_len_drop');
  }
  public set dropVldGtpInvalidApnLenDrop(value: number) {
    this._dropVldGtpInvalidApnLenDrop = value;
  }
  public resetDropVldGtpInvalidApnLenDrop() {
    this._dropVldGtpInvalidApnLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpInvalidApnLenDropInput() {
    return this._dropVldGtpInvalidApnLenDrop;
  }

  // drop_vld_gtp_invalid_imsi_len_drop - computed: false, optional: true, required: false
  private _dropVldGtpInvalidImsiLenDrop?: number; 
  public get dropVldGtpInvalidImsiLenDrop() {
    return this.getNumberAttribute('drop_vld_gtp_invalid_imsi_len_drop');
  }
  public set dropVldGtpInvalidImsiLenDrop(value: number) {
    this._dropVldGtpInvalidImsiLenDrop = value;
  }
  public resetDropVldGtpInvalidImsiLenDrop() {
    this._dropVldGtpInvalidImsiLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpInvalidImsiLenDropInput() {
    return this._dropVldGtpInvalidImsiLenDrop;
  }

  // drop_vld_gtp_u_spoofed_source_address - computed: false, optional: true, required: false
  private _dropVldGtpUSpoofedSourceAddress?: number; 
  public get dropVldGtpUSpoofedSourceAddress() {
    return this.getNumberAttribute('drop_vld_gtp_u_spoofed_source_address');
  }
  public set dropVldGtpUSpoofedSourceAddress(value: number) {
    this._dropVldGtpUSpoofedSourceAddress = value;
  }
  public resetDropVldGtpUSpoofedSourceAddress() {
    this._dropVldGtpUSpoofedSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpUSpoofedSourceAddressInput() {
    return this._dropVldGtpUSpoofedSourceAddress;
  }

  // drop_vld_gtp_v2_wrong_lbi_create_bearer - computed: false, optional: true, required: false
  private _dropVldGtpV2WrongLbiCreateBearer?: number; 
  public get dropVldGtpV2WrongLbiCreateBearer() {
    return this.getNumberAttribute('drop_vld_gtp_v2_wrong_lbi_create_bearer');
  }
  public set dropVldGtpV2WrongLbiCreateBearer(value: number) {
    this._dropVldGtpV2WrongLbiCreateBearer = value;
  }
  public resetDropVldGtpV2WrongLbiCreateBearer() {
    this._dropVldGtpV2WrongLbiCreateBearer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2WrongLbiCreateBearerInput() {
    return this._dropVldGtpV2WrongLbiCreateBearer;
  }

  // drop_vld_gtpv0_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv0SeqnumBufferFull?: number; 
  public get dropVldGtpv0SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv0_seqnum_buffer_full');
  }
  public set dropVldGtpv0SeqnumBufferFull(value: number) {
    this._dropVldGtpv0SeqnumBufferFull = value;
  }
  public resetDropVldGtpv0SeqnumBufferFull() {
    this._dropVldGtpv0SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv0SeqnumBufferFullInput() {
    return this._dropVldGtpv0SeqnumBufferFull;
  }

  // drop_vld_gtpv1_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv1SeqnumBufferFull?: number; 
  public get dropVldGtpv1SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv1_seqnum_buffer_full');
  }
  public set dropVldGtpv1SeqnumBufferFull(value: number) {
    this._dropVldGtpv1SeqnumBufferFull = value;
  }
  public resetDropVldGtpv1SeqnumBufferFull() {
    this._dropVldGtpv1SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv1SeqnumBufferFullInput() {
    return this._dropVldGtpv1SeqnumBufferFull;
  }

  // drop_vld_gtpv2_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv2SeqnumBufferFull?: number; 
  public get dropVldGtpv2SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv2_seqnum_buffer_full');
  }
  public set dropVldGtpv2SeqnumBufferFull(value: number) {
    this._dropVldGtpv2SeqnumBufferFull = value;
  }
  public resetDropVldGtpv2SeqnumBufferFull() {
    this._dropVldGtpv2SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv2SeqnumBufferFullInput() {
    return this._dropVldGtpv2SeqnumBufferFull;
  }

  // drop_vld_invalid_flow_label_v0 - computed: false, optional: true, required: false
  private _dropVldInvalidFlowLabelV0?: number; 
  public get dropVldInvalidFlowLabelV0() {
    return this.getNumberAttribute('drop_vld_invalid_flow_label_v0');
  }
  public set dropVldInvalidFlowLabelV0(value: number) {
    this._dropVldInvalidFlowLabelV0 = value;
  }
  public resetDropVldInvalidFlowLabelV0() {
    this._dropVldInvalidFlowLabelV0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidFlowLabelV0Input() {
    return this._dropVldInvalidFlowLabelV0;
  }

  // drop_vld_invalid_pkt_len_piggyback - computed: false, optional: true, required: false
  private _dropVldInvalidPktLenPiggyback?: number; 
  public get dropVldInvalidPktLenPiggyback() {
    return this.getNumberAttribute('drop_vld_invalid_pkt_len_piggyback');
  }
  public set dropVldInvalidPktLenPiggyback(value: number) {
    this._dropVldInvalidPktLenPiggyback = value;
  }
  public resetDropVldInvalidPktLenPiggyback() {
    this._dropVldInvalidPktLenPiggyback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidPktLenPiggybackInput() {
    return this._dropVldInvalidPktLenPiggyback;
  }

  // drop_vld_invalid_teid - computed: false, optional: true, required: false
  private _dropVldInvalidTeid?: number; 
  public get dropVldInvalidTeid() {
    return this.getNumberAttribute('drop_vld_invalid_teid');
  }
  public set dropVldInvalidTeid(value: number) {
    this._dropVldInvalidTeid = value;
  }
  public resetDropVldInvalidTeid() {
    this._dropVldInvalidTeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidTeidInput() {
    return this._dropVldInvalidTeid;
  }

  // drop_vld_mandatory_ie_in_grouped_ie - computed: false, optional: true, required: false
  private _dropVldMandatoryIeInGroupedIe?: number; 
  public get dropVldMandatoryIeInGroupedIe() {
    return this.getNumberAttribute('drop_vld_mandatory_ie_in_grouped_ie');
  }
  public set dropVldMandatoryIeInGroupedIe(value: number) {
    this._dropVldMandatoryIeInGroupedIe = value;
  }
  public resetDropVldMandatoryIeInGroupedIe() {
    this._dropVldMandatoryIeInGroupedIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMandatoryIeInGroupedIeInput() {
    return this._dropVldMandatoryIeInGroupedIe;
  }

  // drop_vld_mandatory_information_element - computed: false, optional: true, required: false
  private _dropVldMandatoryInformationElement?: number; 
  public get dropVldMandatoryInformationElement() {
    return this.getNumberAttribute('drop_vld_mandatory_information_element');
  }
  public set dropVldMandatoryInformationElement(value: number) {
    this._dropVldMandatoryInformationElement = value;
  }
  public resetDropVldMandatoryInformationElement() {
    this._dropVldMandatoryInformationElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMandatoryInformationElementInput() {
    return this._dropVldMandatoryInformationElement;
  }

  // drop_vld_message_length - computed: false, optional: true, required: false
  private _dropVldMessageLength?: number; 
  public get dropVldMessageLength() {
    return this.getNumberAttribute('drop_vld_message_length');
  }
  public set dropVldMessageLength(value: number) {
    this._dropVldMessageLength = value;
  }
  public resetDropVldMessageLength() {
    this._dropVldMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMessageLengthInput() {
    return this._dropVldMessageLength;
  }

  // drop_vld_out_of_order_ie - computed: false, optional: true, required: false
  private _dropVldOutOfOrderIe?: number; 
  public get dropVldOutOfOrderIe() {
    return this.getNumberAttribute('drop_vld_out_of_order_ie');
  }
  public set dropVldOutOfOrderIe(value: number) {
    this._dropVldOutOfOrderIe = value;
  }
  public resetDropVldOutOfOrderIe() {
    this._dropVldOutOfOrderIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfOrderIeInput() {
    return this._dropVldOutOfOrderIe;
  }

  // drop_vld_out_of_state - computed: false, optional: true, required: false
  private _dropVldOutOfState?: number; 
  public get dropVldOutOfState() {
    return this.getNumberAttribute('drop_vld_out_of_state');
  }
  public set dropVldOutOfState(value: number) {
    this._dropVldOutOfState = value;
  }
  public resetDropVldOutOfState() {
    this._dropVldOutOfState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfStateInput() {
    return this._dropVldOutOfState;
  }

  // drop_vld_out_of_state_ie - computed: false, optional: true, required: false
  private _dropVldOutOfStateIe?: number; 
  public get dropVldOutOfStateIe() {
    return this.getNumberAttribute('drop_vld_out_of_state_ie');
  }
  public set dropVldOutOfStateIe(value: number) {
    this._dropVldOutOfStateIe = value;
  }
  public resetDropVldOutOfStateIe() {
    this._dropVldOutOfStateIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfStateIeInput() {
    return this._dropVldOutOfStateIe;
  }

  // drop_vld_protocol_flag_unset - computed: false, optional: true, required: false
  private _dropVldProtocolFlagUnset?: number; 
  public get dropVldProtocolFlagUnset() {
    return this.getNumberAttribute('drop_vld_protocol_flag_unset');
  }
  public set dropVldProtocolFlagUnset(value: number) {
    this._dropVldProtocolFlagUnset = value;
  }
  public resetDropVldProtocolFlagUnset() {
    this._dropVldProtocolFlagUnset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldProtocolFlagUnsetInput() {
    return this._dropVldProtocolFlagUnset;
  }

  // drop_vld_reserved_field_set - computed: false, optional: true, required: false
  private _dropVldReservedFieldSet?: number; 
  public get dropVldReservedFieldSet() {
    return this.getNumberAttribute('drop_vld_reserved_field_set');
  }
  public set dropVldReservedFieldSet(value: number) {
    this._dropVldReservedFieldSet = value;
  }
  public resetDropVldReservedFieldSet() {
    this._dropVldReservedFieldSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldReservedFieldSetInput() {
    return this._dropVldReservedFieldSet;
  }

  // drop_vld_reserved_information_element - computed: false, optional: true, required: false
  private _dropVldReservedInformationElement?: number; 
  public get dropVldReservedInformationElement() {
    return this.getNumberAttribute('drop_vld_reserved_information_element');
  }
  public set dropVldReservedInformationElement(value: number) {
    this._dropVldReservedInformationElement = value;
  }
  public resetDropVldReservedInformationElement() {
    this._dropVldReservedInformationElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldReservedInformationElementInput() {
    return this._dropVldReservedInformationElement;
  }

  // drop_vld_sanity_failed_piggyback - computed: false, optional: true, required: false
  private _dropVldSanityFailedPiggyback?: number; 
  public get dropVldSanityFailedPiggyback() {
    return this.getNumberAttribute('drop_vld_sanity_failed_piggyback');
  }
  public set dropVldSanityFailedPiggyback(value: number) {
    this._dropVldSanityFailedPiggyback = value;
  }
  public resetDropVldSanityFailedPiggyback() {
    this._dropVldSanityFailedPiggyback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldSanityFailedPiggybackInput() {
    return this._dropVldSanityFailedPiggyback;
  }

  // drop_vld_sequence_num_correlation - computed: false, optional: true, required: false
  private _dropVldSequenceNumCorrelation?: number; 
  public get dropVldSequenceNumCorrelation() {
    return this.getNumberAttribute('drop_vld_sequence_num_correlation');
  }
  public set dropVldSequenceNumCorrelation(value: number) {
    this._dropVldSequenceNumCorrelation = value;
  }
  public resetDropVldSequenceNumCorrelation() {
    this._dropVldSequenceNumCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldSequenceNumCorrelationInput() {
    return this._dropVldSequenceNumCorrelation;
  }

  // drop_vld_tunnel_id_flag - computed: false, optional: true, required: false
  private _dropVldTunnelIdFlag?: number; 
  public get dropVldTunnelIdFlag() {
    return this.getNumberAttribute('drop_vld_tunnel_id_flag');
  }
  public set dropVldTunnelIdFlag(value: number) {
    this._dropVldTunnelIdFlag = value;
  }
  public resetDropVldTunnelIdFlag() {
    this._dropVldTunnelIdFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldTunnelIdFlagInput() {
    return this._dropVldTunnelIdFlag;
  }

  // drop_vld_v0_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV0ReservedMessageDrop?: number; 
  public get dropVldV0ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v0_reserved_message_drop');
  }
  public set dropVldV0ReservedMessageDrop(value: number) {
    this._dropVldV0ReservedMessageDrop = value;
  }
  public resetDropVldV0ReservedMessageDrop() {
    this._dropVldV0ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV0ReservedMessageDropInput() {
    return this._dropVldV0ReservedMessageDrop;
  }

  // drop_vld_v1_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV1ReservedMessageDrop?: number; 
  public get dropVldV1ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v1_reserved_message_drop');
  }
  public set dropVldV1ReservedMessageDrop(value: number) {
    this._dropVldV1ReservedMessageDrop = value;
  }
  public resetDropVldV1ReservedMessageDrop() {
    this._dropVldV1ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV1ReservedMessageDropInput() {
    return this._dropVldV1ReservedMessageDrop;
  }

  // drop_vld_v2_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV2ReservedMessageDrop?: number; 
  public get dropVldV2ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v2_reserved_message_drop');
  }
  public set dropVldV2ReservedMessageDrop(value: number) {
    this._dropVldV2ReservedMessageDrop = value;
  }
  public resetDropVldV2ReservedMessageDrop() {
    this._dropVldV2ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV2ReservedMessageDropInput() {
    return this._dropVldV2ReservedMessageDrop;
  }

  // drop_vld_version_not_supported - computed: false, optional: true, required: false
  private _dropVldVersionNotSupported?: number; 
  public get dropVldVersionNotSupported() {
    return this.getNumberAttribute('drop_vld_version_not_supported');
  }
  public set dropVldVersionNotSupported(value: number) {
    this._dropVldVersionNotSupported = value;
  }
  public resetDropVldVersionNotSupported() {
    this._dropVldVersionNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldVersionNotSupportedInput() {
    return this._dropVldVersionNotSupported;
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
export interface VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityA {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop VisibilityPacketCaptureObjectTemplatesA#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_alert VisibilityPacketCaptureObjectTemplatesA#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_critical VisibilityPacketCaptureObjectTemplatesA#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#drop_warning VisibilityPacketCaptureObjectTemplatesA#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error VisibilityPacketCaptureObjectTemplatesA#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_alert VisibilityPacketCaptureObjectTemplatesA#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_critical VisibilityPacketCaptureObjectTemplatesA#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#error_warning VisibilityPacketCaptureObjectTemplatesA#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityAOutputReference | VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.numberToTerraform(struct!.drop),
    drop_alert: cdktf.numberToTerraform(struct!.dropAlert),
    drop_critical: cdktf.numberToTerraform(struct!.dropCritical),
    drop_warning: cdktf.numberToTerraform(struct!.dropWarning),
    error: cdktf.numberToTerraform(struct!.error),
    error_alert: cdktf.numberToTerraform(struct!.errorAlert),
    error_critical: cdktf.numberToTerraform(struct!.errorCritical),
    error_warning: cdktf.numberToTerraform(struct!.errorWarning),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityAOutputReference | VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_alert: {
      value: cdktf.numberToHclTerraform(struct!.dropAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_critical: {
      value: cdktf.numberToHclTerraform(struct!.dropCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_warning: {
      value: cdktf.numberToHclTerraform(struct!.dropWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_alert: {
      value: cdktf.numberToHclTerraform(struct!.errorAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_critical: {
      value: cdktf.numberToHclTerraform(struct!.errorCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_warning: {
      value: cdktf.numberToHclTerraform(struct!.errorWarning),
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

export class VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._dropAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropAlert = this._dropAlert;
    }
    if (this._dropCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCritical = this._dropCritical;
    }
    if (this._dropWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropWarning = this._dropWarning;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._errorAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAlert = this._errorAlert;
    }
    if (this._errorCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCritical = this._errorCritical;
    }
    if (this._errorWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorWarning = this._errorWarning;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drop = undefined;
      this._dropAlert = undefined;
      this._dropCritical = undefined;
      this._dropWarning = undefined;
      this._error = undefined;
      this._errorAlert = undefined;
      this._errorCritical = undefined;
      this._errorWarning = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drop = value.drop;
      this._dropAlert = value.dropAlert;
      this._dropCritical = value.dropCritical;
      this._dropWarning = value.dropWarning;
      this._error = value.error;
      this._errorAlert = value.errorAlert;
      this._errorCritical = value.errorCritical;
      this._errorWarning = value.errorWarning;
      this._uuid = value.uuid;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_alert - computed: false, optional: true, required: false
  private _dropAlert?: number; 
  public get dropAlert() {
    return this.getNumberAttribute('drop_alert');
  }
  public set dropAlert(value: number) {
    this._dropAlert = value;
  }
  public resetDropAlert() {
    this._dropAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAlertInput() {
    return this._dropAlert;
  }

  // drop_critical - computed: false, optional: true, required: false
  private _dropCritical?: number; 
  public get dropCritical() {
    return this.getNumberAttribute('drop_critical');
  }
  public set dropCritical(value: number) {
    this._dropCritical = value;
  }
  public resetDropCritical() {
    this._dropCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCriticalInput() {
    return this._dropCritical;
  }

  // drop_warning - computed: false, optional: true, required: false
  private _dropWarning?: number; 
  public get dropWarning() {
    return this.getNumberAttribute('drop_warning');
  }
  public set dropWarning(value: number) {
    this._dropWarning = value;
  }
  public resetDropWarning() {
    this._dropWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWarningInput() {
    return this._dropWarning;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // error_alert - computed: false, optional: true, required: false
  private _errorAlert?: number; 
  public get errorAlert() {
    return this.getNumberAttribute('error_alert');
  }
  public set errorAlert(value: number) {
    this._errorAlert = value;
  }
  public resetErrorAlert() {
    this._errorAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAlertInput() {
    return this._errorAlert;
  }

  // error_critical - computed: false, optional: true, required: false
  private _errorCritical?: number; 
  public get errorCritical() {
    return this.getNumberAttribute('error_critical');
  }
  public set errorCritical(value: number) {
    this._errorCritical = value;
  }
  public resetErrorCritical() {
    this._errorCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCriticalInput() {
    return this._errorCritical;
  }

  // error_warning - computed: false, optional: true, required: false
  private _errorWarning?: number; 
  public get errorWarning() {
    return this.getNumberAttribute('error_warning');
  }
  public set errorWarning(value: number) {
    this._errorWarning = value;
  }
  public resetErrorWarning() {
    this._errorWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorWarningInput() {
    return this._errorWarning;
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
export interface VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListStructA {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#capture_config VisibilityPacketCaptureObjectTemplatesA#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#name VisibilityPacketCaptureObjectTemplatesA#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#user_tag VisibilityPacketCaptureObjectTemplatesA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#uuid VisibilityPacketCaptureObjectTemplatesA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateA;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesA#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityA;
}

export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListStructAToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config: cdktf.stringToTerraform(struct!.captureConfig),
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    trigger_stats_inc: visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncAToTerraform(struct!.triggerStatsInc),
    trigger_stats_rate: visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateAToTerraform(struct!.triggerStatsRate),
    trigger_stats_severity: visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityAToTerraform(struct!.triggerStatsSeverity),
  }
}


export function visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListStructAToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config: {
      value: cdktf.stringToHclTerraform(struct!.captureConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_stats_inc: {
      value: visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncAToHclTerraform(struct!.triggerStatsInc),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncAList",
    },
    trigger_stats_rate: {
      value: visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateAToHclTerraform(struct!.triggerStatsRate),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateAList",
    },
    trigger_stats_severity: {
      value: visibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityAToHclTerraform(struct!.triggerStatsSeverity),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfig = this._captureConfig;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._triggerStatsInc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsInc = this._triggerStatsInc?.internalValue;
    }
    if (this._triggerStatsRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsRate = this._triggerStatsRate?.internalValue;
    }
    if (this._triggerStatsSeverity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerStatsSeverity = this._triggerStatsSeverity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureConfig = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._triggerStatsInc.internalValue = undefined;
      this._triggerStatsRate.internalValue = undefined;
      this._triggerStatsSeverity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureConfig = value.captureConfig;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._triggerStatsInc.internalValue = value.triggerStatsInc;
      this._triggerStatsRate.internalValue = value.triggerStatsRate;
      this._triggerStatsSeverity.internalValue = value.triggerStatsSeverity;
    }
  }

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsRateA) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // trigger_stats_severity - computed: false, optional: true, required: false
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityAOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListTriggerStatsSeverityA) {
    this._triggerStatsSeverity.internalValue = value;
  }
  public resetTriggerStatsSeverity() {
    this._triggerStatsSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsSeverityInput() {
    return this._triggerStatsSeverity.internalValue;
  }
}

export class VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListStructAList extends cdktf.ComplexList {
  public internalValue? : VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListStructA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListStructAOutputReference {
    return new VisibilityPacketCaptureObjectTemplatesTemplGtpPlcyTmplListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
