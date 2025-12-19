// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateTcpProgressionTrackingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#id DdosTemplateTcpProgressionTrackingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignore TLS handshake, support SSL-L4 port only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#ignore_tls_handshake DdosTemplateTcpProgressionTrackingA#ignore_tls_handshake}
  */
  readonly ignoreTlsHandshake?: number;
  /**
  * 'enable-check': Enable Progression Tracking Check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#progression_tracking_enabled DdosTemplateTcpProgressionTrackingA#progression_tracking_enabled}
  */
  readonly progressionTrackingEnabled: string;
  /**
  * Tcp_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#tcp_name DdosTemplateTcpProgressionTrackingA#tcp_name}
  */
  readonly tcpName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#uuid DdosTemplateTcpProgressionTrackingA#uuid}
  */
  readonly uuid?: string;
  /**
  * mitigation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#mitigation DdosTemplateTcpProgressionTrackingA#mitigation}
  */
  readonly mitigation?: DdosTemplateTcpProgressionTrackingMitigationA;
  /**
  * profiling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#profiling DdosTemplateTcpProgressionTrackingA#profiling}
  */
  readonly profiling?: DdosTemplateTcpProgressionTrackingProfilingA;
}
export interface DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingA {
  /**
  * Set the maximum duration time (in unit of 100ms, up to 24 hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#conn_duration_max DdosTemplateTcpProgressionTrackingA#conn_duration_max}
  */
  readonly connDurationMax?: number;
  /**
  * Set the minimum duration time (in unit of 100ms, up to 24 hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#conn_duration_min DdosTemplateTcpProgressionTrackingA#conn_duration_min}
  */
  readonly connDurationMin?: number;
  /**
  * Set the maximum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#conn_rcvd_max DdosTemplateTcpProgressionTrackingA#conn_rcvd_max}
  */
  readonly connRcvdMax?: number;
  /**
  * Set the minimum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#conn_rcvd_min DdosTemplateTcpProgressionTrackingA#conn_rcvd_min}
  */
  readonly connRcvdMin?: number;
  /**
  * Set the maximum received to sent ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#conn_rcvd_sent_ratio_max DdosTemplateTcpProgressionTrackingA#conn_rcvd_sent_ratio_max}
  */
  readonly connRcvdSentRatioMax?: number;
  /**
  * Set the minimum received to sent ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#conn_rcvd_sent_ratio_min DdosTemplateTcpProgressionTrackingA#conn_rcvd_sent_ratio_min}
  */
  readonly connRcvdSentRatioMin?: number;
  /**
  * Set the maximum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#conn_sent_max DdosTemplateTcpProgressionTrackingA#conn_sent_max}
  */
  readonly connSentMax?: number;
  /**
  * Set the minimum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#conn_sent_min DdosTemplateTcpProgressionTrackingA#conn_sent_min}
  */
  readonly connSentMin?: number;
  /**
  * Set the violation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#conn_violation DdosTemplateTcpProgressionTrackingA#conn_violation}
  */
  readonly connViolation?: number;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#progression_tracking_conn_action DdosTemplateTcpProgressionTrackingA#progression_tracking_conn_action}
  */
  readonly progressionTrackingConnAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#progression_tracking_conn_action_list_name DdosTemplateTcpProgressionTrackingA#progression_tracking_conn_action_list_name}
  */
  readonly progressionTrackingConnActionListName?: string;
  /**
  * 'enable-check': Enable General Progression Tracking per Connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#progression_tracking_conn_enabled DdosTemplateTcpProgressionTrackingA#progression_tracking_conn_enabled}
  */
  readonly progressionTrackingConnEnabled?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#uuid DdosTemplateTcpProgressionTrackingA#uuid}
  */
  readonly uuid?: string;
}

export function ddosTemplateTcpProgressionTrackingMitigationConnectionTrackingAToTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingAOutputReference | DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_duration_max: cdktf.numberToTerraform(struct!.connDurationMax),
    conn_duration_min: cdktf.numberToTerraform(struct!.connDurationMin),
    conn_rcvd_max: cdktf.numberToTerraform(struct!.connRcvdMax),
    conn_rcvd_min: cdktf.numberToTerraform(struct!.connRcvdMin),
    conn_rcvd_sent_ratio_max: cdktf.numberToTerraform(struct!.connRcvdSentRatioMax),
    conn_rcvd_sent_ratio_min: cdktf.numberToTerraform(struct!.connRcvdSentRatioMin),
    conn_sent_max: cdktf.numberToTerraform(struct!.connSentMax),
    conn_sent_min: cdktf.numberToTerraform(struct!.connSentMin),
    conn_violation: cdktf.numberToTerraform(struct!.connViolation),
    progression_tracking_conn_action: cdktf.stringToTerraform(struct!.progressionTrackingConnAction),
    progression_tracking_conn_action_list_name: cdktf.stringToTerraform(struct!.progressionTrackingConnActionListName),
    progression_tracking_conn_enabled: cdktf.stringToTerraform(struct!.progressionTrackingConnEnabled),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosTemplateTcpProgressionTrackingMitigationConnectionTrackingAToHclTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingAOutputReference | DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_duration_max: {
      value: cdktf.numberToHclTerraform(struct!.connDurationMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_duration_min: {
      value: cdktf.numberToHclTerraform(struct!.connDurationMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rcvd_max: {
      value: cdktf.numberToHclTerraform(struct!.connRcvdMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rcvd_min: {
      value: cdktf.numberToHclTerraform(struct!.connRcvdMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rcvd_sent_ratio_max: {
      value: cdktf.numberToHclTerraform(struct!.connRcvdSentRatioMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rcvd_sent_ratio_min: {
      value: cdktf.numberToHclTerraform(struct!.connRcvdSentRatioMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_sent_max: {
      value: cdktf.numberToHclTerraform(struct!.connSentMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_sent_min: {
      value: cdktf.numberToHclTerraform(struct!.connSentMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_violation: {
      value: cdktf.numberToHclTerraform(struct!.connViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    progression_tracking_conn_action: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingConnAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_conn_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingConnActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_conn_enabled: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingConnEnabled),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connDurationMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.connDurationMax = this._connDurationMax;
    }
    if (this._connDurationMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.connDurationMin = this._connDurationMin;
    }
    if (this._connRcvdMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRcvdMax = this._connRcvdMax;
    }
    if (this._connRcvdMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRcvdMin = this._connRcvdMin;
    }
    if (this._connRcvdSentRatioMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRcvdSentRatioMax = this._connRcvdSentRatioMax;
    }
    if (this._connRcvdSentRatioMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRcvdSentRatioMin = this._connRcvdSentRatioMin;
    }
    if (this._connSentMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSentMax = this._connSentMax;
    }
    if (this._connSentMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSentMin = this._connSentMin;
    }
    if (this._connViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.connViolation = this._connViolation;
    }
    if (this._progressionTrackingConnAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingConnAction = this._progressionTrackingConnAction;
    }
    if (this._progressionTrackingConnActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingConnActionListName = this._progressionTrackingConnActionListName;
    }
    if (this._progressionTrackingConnEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingConnEnabled = this._progressionTrackingConnEnabled;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connDurationMax = undefined;
      this._connDurationMin = undefined;
      this._connRcvdMax = undefined;
      this._connRcvdMin = undefined;
      this._connRcvdSentRatioMax = undefined;
      this._connRcvdSentRatioMin = undefined;
      this._connSentMax = undefined;
      this._connSentMin = undefined;
      this._connViolation = undefined;
      this._progressionTrackingConnAction = undefined;
      this._progressionTrackingConnActionListName = undefined;
      this._progressionTrackingConnEnabled = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connDurationMax = value.connDurationMax;
      this._connDurationMin = value.connDurationMin;
      this._connRcvdMax = value.connRcvdMax;
      this._connRcvdMin = value.connRcvdMin;
      this._connRcvdSentRatioMax = value.connRcvdSentRatioMax;
      this._connRcvdSentRatioMin = value.connRcvdSentRatioMin;
      this._connSentMax = value.connSentMax;
      this._connSentMin = value.connSentMin;
      this._connViolation = value.connViolation;
      this._progressionTrackingConnAction = value.progressionTrackingConnAction;
      this._progressionTrackingConnActionListName = value.progressionTrackingConnActionListName;
      this._progressionTrackingConnEnabled = value.progressionTrackingConnEnabled;
      this._uuid = value.uuid;
    }
  }

  // conn_duration_max - computed: false, optional: true, required: false
  private _connDurationMax?: number; 
  public get connDurationMax() {
    return this.getNumberAttribute('conn_duration_max');
  }
  public set connDurationMax(value: number) {
    this._connDurationMax = value;
  }
  public resetConnDurationMax() {
    this._connDurationMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connDurationMaxInput() {
    return this._connDurationMax;
  }

  // conn_duration_min - computed: false, optional: true, required: false
  private _connDurationMin?: number; 
  public get connDurationMin() {
    return this.getNumberAttribute('conn_duration_min');
  }
  public set connDurationMin(value: number) {
    this._connDurationMin = value;
  }
  public resetConnDurationMin() {
    this._connDurationMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connDurationMinInput() {
    return this._connDurationMin;
  }

  // conn_rcvd_max - computed: false, optional: true, required: false
  private _connRcvdMax?: number; 
  public get connRcvdMax() {
    return this.getNumberAttribute('conn_rcvd_max');
  }
  public set connRcvdMax(value: number) {
    this._connRcvdMax = value;
  }
  public resetConnRcvdMax() {
    this._connRcvdMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRcvdMaxInput() {
    return this._connRcvdMax;
  }

  // conn_rcvd_min - computed: false, optional: true, required: false
  private _connRcvdMin?: number; 
  public get connRcvdMin() {
    return this.getNumberAttribute('conn_rcvd_min');
  }
  public set connRcvdMin(value: number) {
    this._connRcvdMin = value;
  }
  public resetConnRcvdMin() {
    this._connRcvdMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRcvdMinInput() {
    return this._connRcvdMin;
  }

  // conn_rcvd_sent_ratio_max - computed: false, optional: true, required: false
  private _connRcvdSentRatioMax?: number; 
  public get connRcvdSentRatioMax() {
    return this.getNumberAttribute('conn_rcvd_sent_ratio_max');
  }
  public set connRcvdSentRatioMax(value: number) {
    this._connRcvdSentRatioMax = value;
  }
  public resetConnRcvdSentRatioMax() {
    this._connRcvdSentRatioMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRcvdSentRatioMaxInput() {
    return this._connRcvdSentRatioMax;
  }

  // conn_rcvd_sent_ratio_min - computed: false, optional: true, required: false
  private _connRcvdSentRatioMin?: number; 
  public get connRcvdSentRatioMin() {
    return this.getNumberAttribute('conn_rcvd_sent_ratio_min');
  }
  public set connRcvdSentRatioMin(value: number) {
    this._connRcvdSentRatioMin = value;
  }
  public resetConnRcvdSentRatioMin() {
    this._connRcvdSentRatioMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRcvdSentRatioMinInput() {
    return this._connRcvdSentRatioMin;
  }

  // conn_sent_max - computed: false, optional: true, required: false
  private _connSentMax?: number; 
  public get connSentMax() {
    return this.getNumberAttribute('conn_sent_max');
  }
  public set connSentMax(value: number) {
    this._connSentMax = value;
  }
  public resetConnSentMax() {
    this._connSentMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSentMaxInput() {
    return this._connSentMax;
  }

  // conn_sent_min - computed: false, optional: true, required: false
  private _connSentMin?: number; 
  public get connSentMin() {
    return this.getNumberAttribute('conn_sent_min');
  }
  public set connSentMin(value: number) {
    this._connSentMin = value;
  }
  public resetConnSentMin() {
    this._connSentMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSentMinInput() {
    return this._connSentMin;
  }

  // conn_violation - computed: false, optional: true, required: false
  private _connViolation?: number; 
  public get connViolation() {
    return this.getNumberAttribute('conn_violation');
  }
  public set connViolation(value: number) {
    this._connViolation = value;
  }
  public resetConnViolation() {
    this._connViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connViolationInput() {
    return this._connViolation;
  }

  // progression_tracking_conn_action - computed: false, optional: true, required: false
  private _progressionTrackingConnAction?: string; 
  public get progressionTrackingConnAction() {
    return this.getStringAttribute('progression_tracking_conn_action');
  }
  public set progressionTrackingConnAction(value: string) {
    this._progressionTrackingConnAction = value;
  }
  public resetProgressionTrackingConnAction() {
    this._progressionTrackingConnAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingConnActionInput() {
    return this._progressionTrackingConnAction;
  }

  // progression_tracking_conn_action_list_name - computed: false, optional: true, required: false
  private _progressionTrackingConnActionListName?: string; 
  public get progressionTrackingConnActionListName() {
    return this.getStringAttribute('progression_tracking_conn_action_list_name');
  }
  public set progressionTrackingConnActionListName(value: string) {
    this._progressionTrackingConnActionListName = value;
  }
  public resetProgressionTrackingConnActionListName() {
    this._progressionTrackingConnActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingConnActionListNameInput() {
    return this._progressionTrackingConnActionListName;
  }

  // progression_tracking_conn_enabled - computed: false, optional: true, required: false
  private _progressionTrackingConnEnabled?: string; 
  public get progressionTrackingConnEnabled() {
    return this.getStringAttribute('progression_tracking_conn_enabled');
  }
  public set progressionTrackingConnEnabled(value: string) {
    this._progressionTrackingConnEnabled = value;
  }
  public resetProgressionTrackingConnEnabled() {
    this._progressionTrackingConnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingConnEnabledInput() {
    return this._progressionTrackingConnEnabled;
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
export interface DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA {
  /**
  * Set the maximum idle time before the first request (in unit of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#first_request_max_time DdosTemplateTcpProgressionTrackingA#first_request_max_time}
  */
  readonly firstRequestMaxTime?: number;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#progression_tracking_req_action DdosTemplateTcpProgressionTrackingA#progression_tracking_req_action}
  */
  readonly progressionTrackingReqAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#progression_tracking_req_action_list_name DdosTemplateTcpProgressionTrackingA#progression_tracking_req_action_list_name}
  */
  readonly progressionTrackingReqActionListName?: string;
  /**
  * 'enable-check': Enable General Progression Tracking per Request Response;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#progression_tracking_req_enabled DdosTemplateTcpProgressionTrackingA#progression_tracking_req_enabled}
  */
  readonly progressionTrackingReqEnabled?: string;
  /**
  * Set the maximum request length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#request_length_max DdosTemplateTcpProgressionTrackingA#request_length_max}
  */
  readonly requestLengthMax?: number;
  /**
  * Set the minimum request length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#request_length_min DdosTemplateTcpProgressionTrackingA#request_length_min}
  */
  readonly requestLengthMin?: number;
  /**
  * 'enable': Enable Request Response Model; 'disable': Disable Request Response Model;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#request_response_model DdosTemplateTcpProgressionTrackingA#request_response_model}
  */
  readonly requestResponseModel?: string;
  /**
  * Set the maximum request to response time (in unit of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#request_to_response_max_time DdosTemplateTcpProgressionTrackingA#request_to_response_max_time}
  */
  readonly requestToResponseMaxTime?: number;
  /**
  * Set the maximum response length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#response_length_max DdosTemplateTcpProgressionTrackingA#response_length_max}
  */
  readonly responseLengthMax?: number;
  /**
  * Set the minimum response length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#response_length_min DdosTemplateTcpProgressionTrackingA#response_length_min}
  */
  readonly responseLengthMin?: number;
  /**
  * Set the maximum response to request time (in unit of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#response_to_request_max_time DdosTemplateTcpProgressionTrackingA#response_to_request_max_time}
  */
  readonly responseToRequestMaxTime?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#uuid DdosTemplateTcpProgressionTrackingA#uuid}
  */
  readonly uuid?: string;
  /**
  * Set the violation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#violation DdosTemplateTcpProgressionTrackingA#violation}
  */
  readonly violation?: number;
}

export function ddosTemplateTcpProgressionTrackingMitigationRequestTrackingAToTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationRequestTrackingAOutputReference | DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_request_max_time: cdktf.numberToTerraform(struct!.firstRequestMaxTime),
    progression_tracking_req_action: cdktf.stringToTerraform(struct!.progressionTrackingReqAction),
    progression_tracking_req_action_list_name: cdktf.stringToTerraform(struct!.progressionTrackingReqActionListName),
    progression_tracking_req_enabled: cdktf.stringToTerraform(struct!.progressionTrackingReqEnabled),
    request_length_max: cdktf.numberToTerraform(struct!.requestLengthMax),
    request_length_min: cdktf.numberToTerraform(struct!.requestLengthMin),
    request_response_model: cdktf.stringToTerraform(struct!.requestResponseModel),
    request_to_response_max_time: cdktf.numberToTerraform(struct!.requestToResponseMaxTime),
    response_length_max: cdktf.numberToTerraform(struct!.responseLengthMax),
    response_length_min: cdktf.numberToTerraform(struct!.responseLengthMin),
    response_to_request_max_time: cdktf.numberToTerraform(struct!.responseToRequestMaxTime),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    violation: cdktf.numberToTerraform(struct!.violation),
  }
}


export function ddosTemplateTcpProgressionTrackingMitigationRequestTrackingAToHclTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationRequestTrackingAOutputReference | DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first_request_max_time: {
      value: cdktf.numberToHclTerraform(struct!.firstRequestMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    progression_tracking_req_action: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingReqAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_req_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingReqActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_req_enabled: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingReqEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_length_max: {
      value: cdktf.numberToHclTerraform(struct!.requestLengthMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_length_min: {
      value: cdktf.numberToHclTerraform(struct!.requestLengthMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_response_model: {
      value: cdktf.stringToHclTerraform(struct!.requestResponseModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_to_response_max_time: {
      value: cdktf.numberToHclTerraform(struct!.requestToResponseMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_length_max: {
      value: cdktf.numberToHclTerraform(struct!.responseLengthMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_length_min: {
      value: cdktf.numberToHclTerraform(struct!.responseLengthMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_to_request_max_time: {
      value: cdktf.numberToHclTerraform(struct!.responseToRequestMaxTime),
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
    violation: {
      value: cdktf.numberToHclTerraform(struct!.violation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpProgressionTrackingMitigationRequestTrackingAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstRequestMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstRequestMaxTime = this._firstRequestMaxTime;
    }
    if (this._progressionTrackingReqAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingReqAction = this._progressionTrackingReqAction;
    }
    if (this._progressionTrackingReqActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingReqActionListName = this._progressionTrackingReqActionListName;
    }
    if (this._progressionTrackingReqEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingReqEnabled = this._progressionTrackingReqEnabled;
    }
    if (this._requestLengthMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLengthMax = this._requestLengthMax;
    }
    if (this._requestLengthMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLengthMin = this._requestLengthMin;
    }
    if (this._requestResponseModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestResponseModel = this._requestResponseModel;
    }
    if (this._requestToResponseMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestToResponseMaxTime = this._requestToResponseMaxTime;
    }
    if (this._responseLengthMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseLengthMax = this._responseLengthMax;
    }
    if (this._responseLengthMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseLengthMin = this._responseLengthMin;
    }
    if (this._responseToRequestMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseToRequestMaxTime = this._responseToRequestMaxTime;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._violation !== undefined) {
      hasAnyValues = true;
      internalValueResult.violation = this._violation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firstRequestMaxTime = undefined;
      this._progressionTrackingReqAction = undefined;
      this._progressionTrackingReqActionListName = undefined;
      this._progressionTrackingReqEnabled = undefined;
      this._requestLengthMax = undefined;
      this._requestLengthMin = undefined;
      this._requestResponseModel = undefined;
      this._requestToResponseMaxTime = undefined;
      this._responseLengthMax = undefined;
      this._responseLengthMin = undefined;
      this._responseToRequestMaxTime = undefined;
      this._uuid = undefined;
      this._violation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firstRequestMaxTime = value.firstRequestMaxTime;
      this._progressionTrackingReqAction = value.progressionTrackingReqAction;
      this._progressionTrackingReqActionListName = value.progressionTrackingReqActionListName;
      this._progressionTrackingReqEnabled = value.progressionTrackingReqEnabled;
      this._requestLengthMax = value.requestLengthMax;
      this._requestLengthMin = value.requestLengthMin;
      this._requestResponseModel = value.requestResponseModel;
      this._requestToResponseMaxTime = value.requestToResponseMaxTime;
      this._responseLengthMax = value.responseLengthMax;
      this._responseLengthMin = value.responseLengthMin;
      this._responseToRequestMaxTime = value.responseToRequestMaxTime;
      this._uuid = value.uuid;
      this._violation = value.violation;
    }
  }

  // first_request_max_time - computed: false, optional: true, required: false
  private _firstRequestMaxTime?: number; 
  public get firstRequestMaxTime() {
    return this.getNumberAttribute('first_request_max_time');
  }
  public set firstRequestMaxTime(value: number) {
    this._firstRequestMaxTime = value;
  }
  public resetFirstRequestMaxTime() {
    this._firstRequestMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstRequestMaxTimeInput() {
    return this._firstRequestMaxTime;
  }

  // progression_tracking_req_action - computed: false, optional: true, required: false
  private _progressionTrackingReqAction?: string; 
  public get progressionTrackingReqAction() {
    return this.getStringAttribute('progression_tracking_req_action');
  }
  public set progressionTrackingReqAction(value: string) {
    this._progressionTrackingReqAction = value;
  }
  public resetProgressionTrackingReqAction() {
    this._progressionTrackingReqAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingReqActionInput() {
    return this._progressionTrackingReqAction;
  }

  // progression_tracking_req_action_list_name - computed: false, optional: true, required: false
  private _progressionTrackingReqActionListName?: string; 
  public get progressionTrackingReqActionListName() {
    return this.getStringAttribute('progression_tracking_req_action_list_name');
  }
  public set progressionTrackingReqActionListName(value: string) {
    this._progressionTrackingReqActionListName = value;
  }
  public resetProgressionTrackingReqActionListName() {
    this._progressionTrackingReqActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingReqActionListNameInput() {
    return this._progressionTrackingReqActionListName;
  }

  // progression_tracking_req_enabled - computed: false, optional: true, required: false
  private _progressionTrackingReqEnabled?: string; 
  public get progressionTrackingReqEnabled() {
    return this.getStringAttribute('progression_tracking_req_enabled');
  }
  public set progressionTrackingReqEnabled(value: string) {
    this._progressionTrackingReqEnabled = value;
  }
  public resetProgressionTrackingReqEnabled() {
    this._progressionTrackingReqEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingReqEnabledInput() {
    return this._progressionTrackingReqEnabled;
  }

  // request_length_max - computed: false, optional: true, required: false
  private _requestLengthMax?: number; 
  public get requestLengthMax() {
    return this.getNumberAttribute('request_length_max');
  }
  public set requestLengthMax(value: number) {
    this._requestLengthMax = value;
  }
  public resetRequestLengthMax() {
    this._requestLengthMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLengthMaxInput() {
    return this._requestLengthMax;
  }

  // request_length_min - computed: false, optional: true, required: false
  private _requestLengthMin?: number; 
  public get requestLengthMin() {
    return this.getNumberAttribute('request_length_min');
  }
  public set requestLengthMin(value: number) {
    this._requestLengthMin = value;
  }
  public resetRequestLengthMin() {
    this._requestLengthMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLengthMinInput() {
    return this._requestLengthMin;
  }

  // request_response_model - computed: false, optional: true, required: false
  private _requestResponseModel?: string; 
  public get requestResponseModel() {
    return this.getStringAttribute('request_response_model');
  }
  public set requestResponseModel(value: string) {
    this._requestResponseModel = value;
  }
  public resetRequestResponseModel() {
    this._requestResponseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestResponseModelInput() {
    return this._requestResponseModel;
  }

  // request_to_response_max_time - computed: false, optional: true, required: false
  private _requestToResponseMaxTime?: number; 
  public get requestToResponseMaxTime() {
    return this.getNumberAttribute('request_to_response_max_time');
  }
  public set requestToResponseMaxTime(value: number) {
    this._requestToResponseMaxTime = value;
  }
  public resetRequestToResponseMaxTime() {
    this._requestToResponseMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestToResponseMaxTimeInput() {
    return this._requestToResponseMaxTime;
  }

  // response_length_max - computed: false, optional: true, required: false
  private _responseLengthMax?: number; 
  public get responseLengthMax() {
    return this.getNumberAttribute('response_length_max');
  }
  public set responseLengthMax(value: number) {
    this._responseLengthMax = value;
  }
  public resetResponseLengthMax() {
    this._responseLengthMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseLengthMaxInput() {
    return this._responseLengthMax;
  }

  // response_length_min - computed: false, optional: true, required: false
  private _responseLengthMin?: number; 
  public get responseLengthMin() {
    return this.getNumberAttribute('response_length_min');
  }
  public set responseLengthMin(value: number) {
    this._responseLengthMin = value;
  }
  public resetResponseLengthMin() {
    this._responseLengthMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseLengthMinInput() {
    return this._responseLengthMin;
  }

  // response_to_request_max_time - computed: false, optional: true, required: false
  private _responseToRequestMaxTime?: number; 
  public get responseToRequestMaxTime() {
    return this.getNumberAttribute('response_to_request_max_time');
  }
  public set responseToRequestMaxTime(value: number) {
    this._responseToRequestMaxTime = value;
  }
  public resetResponseToRequestMaxTime() {
    this._responseToRequestMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseToRequestMaxTimeInput() {
    return this._responseToRequestMaxTime;
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

  // violation - computed: false, optional: true, required: false
  private _violation?: number; 
  public get violation() {
    return this.getNumberAttribute('violation');
  }
  public set violation(value: number) {
    this._violation = value;
  }
  public resetViolation() {
    this._violation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationInput() {
    return this._violation;
  }
}
export interface DdosTemplateTcpProgressionTrackingMitigationSlowAttackA {
  /**
  * Set client query time (in unit of 100ms). Suggested value larger than 30 secs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#init_request_max_time DdosTemplateTcpProgressionTrackingA#init_request_max_time}
  */
  readonly initRequestMaxTime?: number;
  /**
  * Set server think time (in unit of 100ms). Suggested value larger than 45 secs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#init_response_max_time DdosTemplateTcpProgressionTrackingA#init_response_max_time}
  */
  readonly initResponseMaxTime?: number;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'reset': Reset client connection; 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#progression_tracking_slow_action DdosTemplateTcpProgressionTrackingA#progression_tracking_slow_action}
  */
  readonly progressionTrackingSlowAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#progression_tracking_slow_action_list_name DdosTemplateTcpProgressionTrackingA#progression_tracking_slow_action_list_name}
  */
  readonly progressionTrackingSlowActionListName?: string;
  /**
  * Set the transferred packets per response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#response_pkt_rate_max DdosTemplateTcpProgressionTrackingA#response_pkt_rate_max}
  */
  readonly responsePktRateMax?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#uuid DdosTemplateTcpProgressionTrackingA#uuid}
  */
  readonly uuid?: string;
}

export function ddosTemplateTcpProgressionTrackingMitigationSlowAttackAToTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationSlowAttackAOutputReference | DdosTemplateTcpProgressionTrackingMitigationSlowAttackA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    init_request_max_time: cdktf.numberToTerraform(struct!.initRequestMaxTime),
    init_response_max_time: cdktf.numberToTerraform(struct!.initResponseMaxTime),
    progression_tracking_slow_action: cdktf.stringToTerraform(struct!.progressionTrackingSlowAction),
    progression_tracking_slow_action_list_name: cdktf.stringToTerraform(struct!.progressionTrackingSlowActionListName),
    response_pkt_rate_max: cdktf.numberToTerraform(struct!.responsePktRateMax),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosTemplateTcpProgressionTrackingMitigationSlowAttackAToHclTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationSlowAttackAOutputReference | DdosTemplateTcpProgressionTrackingMitigationSlowAttackA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    init_request_max_time: {
      value: cdktf.numberToHclTerraform(struct!.initRequestMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    init_response_max_time: {
      value: cdktf.numberToHclTerraform(struct!.initResponseMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    progression_tracking_slow_action: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingSlowAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_slow_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingSlowActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_pkt_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.responsePktRateMax),
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

export class DdosTemplateTcpProgressionTrackingMitigationSlowAttackAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpProgressionTrackingMitigationSlowAttackA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initRequestMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.initRequestMaxTime = this._initRequestMaxTime;
    }
    if (this._initResponseMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.initResponseMaxTime = this._initResponseMaxTime;
    }
    if (this._progressionTrackingSlowAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingSlowAction = this._progressionTrackingSlowAction;
    }
    if (this._progressionTrackingSlowActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingSlowActionListName = this._progressionTrackingSlowActionListName;
    }
    if (this._responsePktRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsePktRateMax = this._responsePktRateMax;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpProgressionTrackingMitigationSlowAttackA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._initRequestMaxTime = undefined;
      this._initResponseMaxTime = undefined;
      this._progressionTrackingSlowAction = undefined;
      this._progressionTrackingSlowActionListName = undefined;
      this._responsePktRateMax = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._initRequestMaxTime = value.initRequestMaxTime;
      this._initResponseMaxTime = value.initResponseMaxTime;
      this._progressionTrackingSlowAction = value.progressionTrackingSlowAction;
      this._progressionTrackingSlowActionListName = value.progressionTrackingSlowActionListName;
      this._responsePktRateMax = value.responsePktRateMax;
      this._uuid = value.uuid;
    }
  }

  // init_request_max_time - computed: false, optional: true, required: false
  private _initRequestMaxTime?: number; 
  public get initRequestMaxTime() {
    return this.getNumberAttribute('init_request_max_time');
  }
  public set initRequestMaxTime(value: number) {
    this._initRequestMaxTime = value;
  }
  public resetInitRequestMaxTime() {
    this._initRequestMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initRequestMaxTimeInput() {
    return this._initRequestMaxTime;
  }

  // init_response_max_time - computed: false, optional: true, required: false
  private _initResponseMaxTime?: number; 
  public get initResponseMaxTime() {
    return this.getNumberAttribute('init_response_max_time');
  }
  public set initResponseMaxTime(value: number) {
    this._initResponseMaxTime = value;
  }
  public resetInitResponseMaxTime() {
    this._initResponseMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initResponseMaxTimeInput() {
    return this._initResponseMaxTime;
  }

  // progression_tracking_slow_action - computed: false, optional: true, required: false
  private _progressionTrackingSlowAction?: string; 
  public get progressionTrackingSlowAction() {
    return this.getStringAttribute('progression_tracking_slow_action');
  }
  public set progressionTrackingSlowAction(value: string) {
    this._progressionTrackingSlowAction = value;
  }
  public resetProgressionTrackingSlowAction() {
    this._progressionTrackingSlowAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingSlowActionInput() {
    return this._progressionTrackingSlowAction;
  }

  // progression_tracking_slow_action_list_name - computed: false, optional: true, required: false
  private _progressionTrackingSlowActionListName?: string; 
  public get progressionTrackingSlowActionListName() {
    return this.getStringAttribute('progression_tracking_slow_action_list_name');
  }
  public set progressionTrackingSlowActionListName(value: string) {
    this._progressionTrackingSlowActionListName = value;
  }
  public resetProgressionTrackingSlowActionListName() {
    this._progressionTrackingSlowActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingSlowActionListNameInput() {
    return this._progressionTrackingSlowActionListName;
  }

  // response_pkt_rate_max - computed: false, optional: true, required: false
  private _responsePktRateMax?: number; 
  public get responsePktRateMax() {
    return this.getNumberAttribute('response_pkt_rate_max');
  }
  public set responsePktRateMax(value: number) {
    this._responsePktRateMax = value;
  }
  public resetResponsePktRateMax() {
    this._responsePktRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePktRateMaxInput() {
    return this._responsePktRateMax;
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
export interface DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingA {
  /**
  * 'enable-check': Enable Progression Tracking per Time Window;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#progression_tracking_win_enabled DdosTemplateTcpProgressionTrackingA#progression_tracking_win_enabled}
  */
  readonly progressionTrackingWinEnabled?: string;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#progression_tracking_windows_action DdosTemplateTcpProgressionTrackingA#progression_tracking_windows_action}
  */
  readonly progressionTrackingWindowsAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#progression_tracking_windows_action_list_name DdosTemplateTcpProgressionTrackingA#progression_tracking_windows_action_list_name}
  */
  readonly progressionTrackingWindowsActionListName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#uuid DdosTemplateTcpProgressionTrackingA#uuid}
  */
  readonly uuid?: string;
  /**
  * Set the maximum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#window_rcvd_max DdosTemplateTcpProgressionTrackingA#window_rcvd_max}
  */
  readonly windowRcvdMax?: number;
  /**
  * Set the minimum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#window_rcvd_min DdosTemplateTcpProgressionTrackingA#window_rcvd_min}
  */
  readonly windowRcvdMin?: number;
  /**
  * Set the maximum received to sent ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#window_rcvd_sent_ratio_max DdosTemplateTcpProgressionTrackingA#window_rcvd_sent_ratio_max}
  */
  readonly windowRcvdSentRatioMax?: number;
  /**
  * Set the minimum received to sent ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#window_rcvd_sent_ratio_min DdosTemplateTcpProgressionTrackingA#window_rcvd_sent_ratio_min}
  */
  readonly windowRcvdSentRatioMin?: number;
  /**
  * Set the maximum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#window_sent_max DdosTemplateTcpProgressionTrackingA#window_sent_max}
  */
  readonly windowSentMax?: number;
  /**
  * Set the minimum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#window_sent_min DdosTemplateTcpProgressionTrackingA#window_sent_min}
  */
  readonly windowSentMin?: number;
  /**
  * Set the violation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#window_violation DdosTemplateTcpProgressionTrackingA#window_violation}
  */
  readonly windowViolation?: number;
}

export function ddosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingAToTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingAOutputReference | DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    progression_tracking_win_enabled: cdktf.stringToTerraform(struct!.progressionTrackingWinEnabled),
    progression_tracking_windows_action: cdktf.stringToTerraform(struct!.progressionTrackingWindowsAction),
    progression_tracking_windows_action_list_name: cdktf.stringToTerraform(struct!.progressionTrackingWindowsActionListName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    window_rcvd_max: cdktf.numberToTerraform(struct!.windowRcvdMax),
    window_rcvd_min: cdktf.numberToTerraform(struct!.windowRcvdMin),
    window_rcvd_sent_ratio_max: cdktf.numberToTerraform(struct!.windowRcvdSentRatioMax),
    window_rcvd_sent_ratio_min: cdktf.numberToTerraform(struct!.windowRcvdSentRatioMin),
    window_sent_max: cdktf.numberToTerraform(struct!.windowSentMax),
    window_sent_min: cdktf.numberToTerraform(struct!.windowSentMin),
    window_violation: cdktf.numberToTerraform(struct!.windowViolation),
  }
}


export function ddosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingAToHclTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingAOutputReference | DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    progression_tracking_win_enabled: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingWinEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_windows_action: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingWindowsAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progression_tracking_windows_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.progressionTrackingWindowsActionListName),
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
    window_rcvd_max: {
      value: cdktf.numberToHclTerraform(struct!.windowRcvdMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_rcvd_min: {
      value: cdktf.numberToHclTerraform(struct!.windowRcvdMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_rcvd_sent_ratio_max: {
      value: cdktf.numberToHclTerraform(struct!.windowRcvdSentRatioMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_rcvd_sent_ratio_min: {
      value: cdktf.numberToHclTerraform(struct!.windowRcvdSentRatioMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_sent_max: {
      value: cdktf.numberToHclTerraform(struct!.windowSentMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_sent_min: {
      value: cdktf.numberToHclTerraform(struct!.windowSentMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_violation: {
      value: cdktf.numberToHclTerraform(struct!.windowViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._progressionTrackingWinEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingWinEnabled = this._progressionTrackingWinEnabled;
    }
    if (this._progressionTrackingWindowsAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingWindowsAction = this._progressionTrackingWindowsAction;
    }
    if (this._progressionTrackingWindowsActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTrackingWindowsActionListName = this._progressionTrackingWindowsActionListName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._windowRcvdMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowRcvdMax = this._windowRcvdMax;
    }
    if (this._windowRcvdMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowRcvdMin = this._windowRcvdMin;
    }
    if (this._windowRcvdSentRatioMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowRcvdSentRatioMax = this._windowRcvdSentRatioMax;
    }
    if (this._windowRcvdSentRatioMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowRcvdSentRatioMin = this._windowRcvdSentRatioMin;
    }
    if (this._windowSentMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSentMax = this._windowSentMax;
    }
    if (this._windowSentMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSentMin = this._windowSentMin;
    }
    if (this._windowViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowViolation = this._windowViolation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._progressionTrackingWinEnabled = undefined;
      this._progressionTrackingWindowsAction = undefined;
      this._progressionTrackingWindowsActionListName = undefined;
      this._uuid = undefined;
      this._windowRcvdMax = undefined;
      this._windowRcvdMin = undefined;
      this._windowRcvdSentRatioMax = undefined;
      this._windowRcvdSentRatioMin = undefined;
      this._windowSentMax = undefined;
      this._windowSentMin = undefined;
      this._windowViolation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._progressionTrackingWinEnabled = value.progressionTrackingWinEnabled;
      this._progressionTrackingWindowsAction = value.progressionTrackingWindowsAction;
      this._progressionTrackingWindowsActionListName = value.progressionTrackingWindowsActionListName;
      this._uuid = value.uuid;
      this._windowRcvdMax = value.windowRcvdMax;
      this._windowRcvdMin = value.windowRcvdMin;
      this._windowRcvdSentRatioMax = value.windowRcvdSentRatioMax;
      this._windowRcvdSentRatioMin = value.windowRcvdSentRatioMin;
      this._windowSentMax = value.windowSentMax;
      this._windowSentMin = value.windowSentMin;
      this._windowViolation = value.windowViolation;
    }
  }

  // progression_tracking_win_enabled - computed: false, optional: true, required: false
  private _progressionTrackingWinEnabled?: string; 
  public get progressionTrackingWinEnabled() {
    return this.getStringAttribute('progression_tracking_win_enabled');
  }
  public set progressionTrackingWinEnabled(value: string) {
    this._progressionTrackingWinEnabled = value;
  }
  public resetProgressionTrackingWinEnabled() {
    this._progressionTrackingWinEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingWinEnabledInput() {
    return this._progressionTrackingWinEnabled;
  }

  // progression_tracking_windows_action - computed: false, optional: true, required: false
  private _progressionTrackingWindowsAction?: string; 
  public get progressionTrackingWindowsAction() {
    return this.getStringAttribute('progression_tracking_windows_action');
  }
  public set progressionTrackingWindowsAction(value: string) {
    this._progressionTrackingWindowsAction = value;
  }
  public resetProgressionTrackingWindowsAction() {
    this._progressionTrackingWindowsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingWindowsActionInput() {
    return this._progressionTrackingWindowsAction;
  }

  // progression_tracking_windows_action_list_name - computed: false, optional: true, required: false
  private _progressionTrackingWindowsActionListName?: string; 
  public get progressionTrackingWindowsActionListName() {
    return this.getStringAttribute('progression_tracking_windows_action_list_name');
  }
  public set progressionTrackingWindowsActionListName(value: string) {
    this._progressionTrackingWindowsActionListName = value;
  }
  public resetProgressionTrackingWindowsActionListName() {
    this._progressionTrackingWindowsActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingWindowsActionListNameInput() {
    return this._progressionTrackingWindowsActionListName;
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

  // window_rcvd_max - computed: false, optional: true, required: false
  private _windowRcvdMax?: number; 
  public get windowRcvdMax() {
    return this.getNumberAttribute('window_rcvd_max');
  }
  public set windowRcvdMax(value: number) {
    this._windowRcvdMax = value;
  }
  public resetWindowRcvdMax() {
    this._windowRcvdMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowRcvdMaxInput() {
    return this._windowRcvdMax;
  }

  // window_rcvd_min - computed: false, optional: true, required: false
  private _windowRcvdMin?: number; 
  public get windowRcvdMin() {
    return this.getNumberAttribute('window_rcvd_min');
  }
  public set windowRcvdMin(value: number) {
    this._windowRcvdMin = value;
  }
  public resetWindowRcvdMin() {
    this._windowRcvdMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowRcvdMinInput() {
    return this._windowRcvdMin;
  }

  // window_rcvd_sent_ratio_max - computed: false, optional: true, required: false
  private _windowRcvdSentRatioMax?: number; 
  public get windowRcvdSentRatioMax() {
    return this.getNumberAttribute('window_rcvd_sent_ratio_max');
  }
  public set windowRcvdSentRatioMax(value: number) {
    this._windowRcvdSentRatioMax = value;
  }
  public resetWindowRcvdSentRatioMax() {
    this._windowRcvdSentRatioMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowRcvdSentRatioMaxInput() {
    return this._windowRcvdSentRatioMax;
  }

  // window_rcvd_sent_ratio_min - computed: false, optional: true, required: false
  private _windowRcvdSentRatioMin?: number; 
  public get windowRcvdSentRatioMin() {
    return this.getNumberAttribute('window_rcvd_sent_ratio_min');
  }
  public set windowRcvdSentRatioMin(value: number) {
    this._windowRcvdSentRatioMin = value;
  }
  public resetWindowRcvdSentRatioMin() {
    this._windowRcvdSentRatioMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowRcvdSentRatioMinInput() {
    return this._windowRcvdSentRatioMin;
  }

  // window_sent_max - computed: false, optional: true, required: false
  private _windowSentMax?: number; 
  public get windowSentMax() {
    return this.getNumberAttribute('window_sent_max');
  }
  public set windowSentMax(value: number) {
    this._windowSentMax = value;
  }
  public resetWindowSentMax() {
    this._windowSentMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSentMaxInput() {
    return this._windowSentMax;
  }

  // window_sent_min - computed: false, optional: true, required: false
  private _windowSentMin?: number; 
  public get windowSentMin() {
    return this.getNumberAttribute('window_sent_min');
  }
  public set windowSentMin(value: number) {
    this._windowSentMin = value;
  }
  public resetWindowSentMin() {
    this._windowSentMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSentMinInput() {
    return this._windowSentMin;
  }

  // window_violation - computed: false, optional: true, required: false
  private _windowViolation?: number; 
  public get windowViolation() {
    return this.getNumberAttribute('window_violation');
  }
  public set windowViolation(value: number) {
    this._windowViolation = value;
  }
  public resetWindowViolation() {
    this._windowViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowViolationInput() {
    return this._windowViolation;
  }
}
export interface DdosTemplateTcpProgressionTrackingMitigationA {
  /**
  * connection_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#connection_tracking DdosTemplateTcpProgressionTrackingA#connection_tracking}
  */
  readonly connectionTracking?: DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingA;
  /**
  * request_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#request_tracking DdosTemplateTcpProgressionTrackingA#request_tracking}
  */
  readonly requestTracking?: DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA;
  /**
  * slow_attack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#slow_attack DdosTemplateTcpProgressionTrackingA#slow_attack}
  */
  readonly slowAttack?: DdosTemplateTcpProgressionTrackingMitigationSlowAttackA;
  /**
  * time_window_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#time_window_tracking DdosTemplateTcpProgressionTrackingA#time_window_tracking}
  */
  readonly timeWindowTracking?: DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingA;
}

export function ddosTemplateTcpProgressionTrackingMitigationAToTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationAOutputReference | DdosTemplateTcpProgressionTrackingMitigationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_tracking: ddosTemplateTcpProgressionTrackingMitigationConnectionTrackingAToTerraform(struct!.connectionTracking),
    request_tracking: ddosTemplateTcpProgressionTrackingMitigationRequestTrackingAToTerraform(struct!.requestTracking),
    slow_attack: ddosTemplateTcpProgressionTrackingMitigationSlowAttackAToTerraform(struct!.slowAttack),
    time_window_tracking: ddosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingAToTerraform(struct!.timeWindowTracking),
  }
}


export function ddosTemplateTcpProgressionTrackingMitigationAToHclTerraform(struct?: DdosTemplateTcpProgressionTrackingMitigationAOutputReference | DdosTemplateTcpProgressionTrackingMitigationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_tracking: {
      value: ddosTemplateTcpProgressionTrackingMitigationConnectionTrackingAToHclTerraform(struct!.connectionTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingAList",
    },
    request_tracking: {
      value: ddosTemplateTcpProgressionTrackingMitigationRequestTrackingAToHclTerraform(struct!.requestTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpProgressionTrackingMitigationRequestTrackingAList",
    },
    slow_attack: {
      value: ddosTemplateTcpProgressionTrackingMitigationSlowAttackAToHclTerraform(struct!.slowAttack),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpProgressionTrackingMitigationSlowAttackAList",
    },
    time_window_tracking: {
      value: ddosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingAToHclTerraform(struct!.timeWindowTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateTcpProgressionTrackingMitigationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpProgressionTrackingMitigationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTracking = this._connectionTracking?.internalValue;
    }
    if (this._requestTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTracking = this._requestTracking?.internalValue;
    }
    if (this._slowAttack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowAttack = this._slowAttack?.internalValue;
    }
    if (this._timeWindowTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindowTracking = this._timeWindowTracking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpProgressionTrackingMitigationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionTracking.internalValue = undefined;
      this._requestTracking.internalValue = undefined;
      this._slowAttack.internalValue = undefined;
      this._timeWindowTracking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionTracking.internalValue = value.connectionTracking;
      this._requestTracking.internalValue = value.requestTracking;
      this._slowAttack.internalValue = value.slowAttack;
      this._timeWindowTracking.internalValue = value.timeWindowTracking;
    }
  }

  // connection_tracking - computed: false, optional: true, required: false
  private _connectionTracking = new DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingAOutputReference(this, "connection_tracking");
  public get connectionTracking() {
    return this._connectionTracking;
  }
  public putConnectionTracking(value: DdosTemplateTcpProgressionTrackingMitigationConnectionTrackingA) {
    this._connectionTracking.internalValue = value;
  }
  public resetConnectionTracking() {
    this._connectionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTrackingInput() {
    return this._connectionTracking.internalValue;
  }

  // request_tracking - computed: false, optional: true, required: false
  private _requestTracking = new DdosTemplateTcpProgressionTrackingMitigationRequestTrackingAOutputReference(this, "request_tracking");
  public get requestTracking() {
    return this._requestTracking;
  }
  public putRequestTracking(value: DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA) {
    this._requestTracking.internalValue = value;
  }
  public resetRequestTracking() {
    this._requestTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTrackingInput() {
    return this._requestTracking.internalValue;
  }

  // slow_attack - computed: false, optional: true, required: false
  private _slowAttack = new DdosTemplateTcpProgressionTrackingMitigationSlowAttackAOutputReference(this, "slow_attack");
  public get slowAttack() {
    return this._slowAttack;
  }
  public putSlowAttack(value: DdosTemplateTcpProgressionTrackingMitigationSlowAttackA) {
    this._slowAttack.internalValue = value;
  }
  public resetSlowAttack() {
    this._slowAttack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowAttackInput() {
    return this._slowAttack.internalValue;
  }

  // time_window_tracking - computed: false, optional: true, required: false
  private _timeWindowTracking = new DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingAOutputReference(this, "time_window_tracking");
  public get timeWindowTracking() {
    return this._timeWindowTracking;
  }
  public putTimeWindowTracking(value: DdosTemplateTcpProgressionTrackingMitigationTimeWindowTrackingA) {
    this._timeWindowTracking.internalValue = value;
  }
  public resetTimeWindowTracking() {
    this._timeWindowTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowTrackingInput() {
    return this._timeWindowTracking.internalValue;
  }
}
export interface DdosTemplateTcpProgressionTrackingProfilingA {
  /**
  * Enable auto-config progression tracking learning for connection model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#profiling_connection_life_model DdosTemplateTcpProgressionTrackingA#profiling_connection_life_model}
  */
  readonly profilingConnectionLifeModel?: number;
  /**
  * Enable auto-config progression tracking learning for request response model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#profiling_request_response_model DdosTemplateTcpProgressionTrackingA#profiling_request_response_model}
  */
  readonly profilingRequestResponseModel?: number;
  /**
  * Enable auto-config progression tracking learning for time window model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#profiling_time_window_model DdosTemplateTcpProgressionTrackingA#profiling_time_window_model}
  */
  readonly profilingTimeWindowModel?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#uuid DdosTemplateTcpProgressionTrackingA#uuid}
  */
  readonly uuid?: string;
}

export function ddosTemplateTcpProgressionTrackingProfilingAToTerraform(struct?: DdosTemplateTcpProgressionTrackingProfilingAOutputReference | DdosTemplateTcpProgressionTrackingProfilingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profiling_connection_life_model: cdktf.numberToTerraform(struct!.profilingConnectionLifeModel),
    profiling_request_response_model: cdktf.numberToTerraform(struct!.profilingRequestResponseModel),
    profiling_time_window_model: cdktf.numberToTerraform(struct!.profilingTimeWindowModel),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosTemplateTcpProgressionTrackingProfilingAToHclTerraform(struct?: DdosTemplateTcpProgressionTrackingProfilingAOutputReference | DdosTemplateTcpProgressionTrackingProfilingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profiling_connection_life_model: {
      value: cdktf.numberToHclTerraform(struct!.profilingConnectionLifeModel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profiling_request_response_model: {
      value: cdktf.numberToHclTerraform(struct!.profilingRequestResponseModel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profiling_time_window_model: {
      value: cdktf.numberToHclTerraform(struct!.profilingTimeWindowModel),
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

export class DdosTemplateTcpProgressionTrackingProfilingAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateTcpProgressionTrackingProfilingA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profilingConnectionLifeModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilingConnectionLifeModel = this._profilingConnectionLifeModel;
    }
    if (this._profilingRequestResponseModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilingRequestResponseModel = this._profilingRequestResponseModel;
    }
    if (this._profilingTimeWindowModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilingTimeWindowModel = this._profilingTimeWindowModel;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateTcpProgressionTrackingProfilingA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._profilingConnectionLifeModel = undefined;
      this._profilingRequestResponseModel = undefined;
      this._profilingTimeWindowModel = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._profilingConnectionLifeModel = value.profilingConnectionLifeModel;
      this._profilingRequestResponseModel = value.profilingRequestResponseModel;
      this._profilingTimeWindowModel = value.profilingTimeWindowModel;
      this._uuid = value.uuid;
    }
  }

  // profiling_connection_life_model - computed: false, optional: true, required: false
  private _profilingConnectionLifeModel?: number; 
  public get profilingConnectionLifeModel() {
    return this.getNumberAttribute('profiling_connection_life_model');
  }
  public set profilingConnectionLifeModel(value: number) {
    this._profilingConnectionLifeModel = value;
  }
  public resetProfilingConnectionLifeModel() {
    this._profilingConnectionLifeModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingConnectionLifeModelInput() {
    return this._profilingConnectionLifeModel;
  }

  // profiling_request_response_model - computed: false, optional: true, required: false
  private _profilingRequestResponseModel?: number; 
  public get profilingRequestResponseModel() {
    return this.getNumberAttribute('profiling_request_response_model');
  }
  public set profilingRequestResponseModel(value: number) {
    this._profilingRequestResponseModel = value;
  }
  public resetProfilingRequestResponseModel() {
    this._profilingRequestResponseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingRequestResponseModelInput() {
    return this._profilingRequestResponseModel;
  }

  // profiling_time_window_model - computed: false, optional: true, required: false
  private _profilingTimeWindowModel?: number; 
  public get profilingTimeWindowModel() {
    return this.getNumberAttribute('profiling_time_window_model');
  }
  public set profilingTimeWindowModel(value: number) {
    this._profilingTimeWindowModel = value;
  }
  public resetProfilingTimeWindowModel() {
    this._profilingTimeWindowModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingTimeWindowModelInput() {
    return this._profilingTimeWindowModel;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking thunder_ddos_template_tcp_progression_tracking}
*/
export class DdosTemplateTcpProgressionTrackingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_tcp_progression_tracking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateTcpProgressionTrackingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateTcpProgressionTrackingA to import
  * @param importFromId The id of the existing DdosTemplateTcpProgressionTrackingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateTcpProgressionTrackingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_tcp_progression_tracking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking thunder_ddos_template_tcp_progression_tracking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateTcpProgressionTrackingAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateTcpProgressionTrackingAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_tcp_progression_tracking',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._ignoreTlsHandshake = config.ignoreTlsHandshake;
    this._progressionTrackingEnabled = config.progressionTrackingEnabled;
    this._tcpName = config.tcpName;
    this._uuid = config.uuid;
    this._mitigation.internalValue = config.mitigation;
    this._profiling.internalValue = config.profiling;
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

  // ignore_tls_handshake - computed: false, optional: true, required: false
  private _ignoreTlsHandshake?: number; 
  public get ignoreTlsHandshake() {
    return this.getNumberAttribute('ignore_tls_handshake');
  }
  public set ignoreTlsHandshake(value: number) {
    this._ignoreTlsHandshake = value;
  }
  public resetIgnoreTlsHandshake() {
    this._ignoreTlsHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTlsHandshakeInput() {
    return this._ignoreTlsHandshake;
  }

  // progression_tracking_enabled - computed: false, optional: false, required: true
  private _progressionTrackingEnabled?: string; 
  public get progressionTrackingEnabled() {
    return this.getStringAttribute('progression_tracking_enabled');
  }
  public set progressionTrackingEnabled(value: string) {
    this._progressionTrackingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingEnabledInput() {
    return this._progressionTrackingEnabled;
  }

  // tcp_name - computed: false, optional: false, required: true
  private _tcpName?: string; 
  public get tcpName() {
    return this.getStringAttribute('tcp_name');
  }
  public set tcpName(value: string) {
    this._tcpName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNameInput() {
    return this._tcpName;
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

  // mitigation - computed: false, optional: true, required: false
  private _mitigation = new DdosTemplateTcpProgressionTrackingMitigationAOutputReference(this, "mitigation");
  public get mitigation() {
    return this._mitigation;
  }
  public putMitigation(value: DdosTemplateTcpProgressionTrackingMitigationA) {
    this._mitigation.internalValue = value;
  }
  public resetMitigation() {
    this._mitigation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationInput() {
    return this._mitigation.internalValue;
  }

  // profiling - computed: false, optional: true, required: false
  private _profiling = new DdosTemplateTcpProgressionTrackingProfilingAOutputReference(this, "profiling");
  public get profiling() {
    return this._profiling;
  }
  public putProfiling(value: DdosTemplateTcpProgressionTrackingProfilingA) {
    this._profiling.internalValue = value;
  }
  public resetProfiling() {
    this._profiling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingInput() {
    return this._profiling.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ignore_tls_handshake: cdktf.numberToTerraform(this._ignoreTlsHandshake),
      progression_tracking_enabled: cdktf.stringToTerraform(this._progressionTrackingEnabled),
      tcp_name: cdktf.stringToTerraform(this._tcpName),
      uuid: cdktf.stringToTerraform(this._uuid),
      mitigation: ddosTemplateTcpProgressionTrackingMitigationAToTerraform(this._mitigation.internalValue),
      profiling: ddosTemplateTcpProgressionTrackingProfilingAToTerraform(this._profiling.internalValue),
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
      ignore_tls_handshake: {
        value: cdktf.numberToHclTerraform(this._ignoreTlsHandshake),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      progression_tracking_enabled: {
        value: cdktf.stringToHclTerraform(this._progressionTrackingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_name: {
        value: cdktf.stringToHclTerraform(this._tcpName),
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
      mitigation: {
        value: ddosTemplateTcpProgressionTrackingMitigationAToHclTerraform(this._mitigation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateTcpProgressionTrackingMitigationAList",
      },
      profiling: {
        value: ddosTemplateTcpProgressionTrackingProfilingAToHclTerraform(this._profiling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateTcpProgressionTrackingProfilingAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
