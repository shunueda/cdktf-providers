// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstEntryPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#deny DdosDstEntryPort#deny}
  */
  readonly deny?: number;
  /**
  * Enable ddos detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#detection_enable DdosDstEntryPort#detection_enable}
  */
  readonly detectionEnable?: number;
  /**
  * DNS Cache Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#dns_cache DdosDstEntryPort#dns_cache}
  */
  readonly dnsCache?: string;
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#dst_entry_name DdosDstEntryPort#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Enable ddos top-k entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#enable_top_k DdosDstEntryPort#enable_top_k}
  */
  readonly enableTopK?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#glid DdosDstEntryPort#glid}
  */
  readonly glid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#id DdosDstEntryPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#port_num DdosDstEntryPort#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port; 'sip-udp': SIP-UDP Port; 'sip-tcp': SIP-TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#protocol DdosDstEntryPort#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#set_counter_base_val DdosDstEntryPort#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#topk_num_records DdosDstEntryPort#topk_num_records}
  */
  readonly topkNumRecords?: number;
  /**
  * 'avg': window average; 'max-peak': max peak;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#topk_sort_key DdosDstEntryPort#topk_sort_key}
  */
  readonly topkSortKey?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#user_tag DdosDstEntryPort#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#uuid DdosDstEntryPort#uuid}
  */
  readonly uuid?: string;
  /**
  * capture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#capture_config DdosDstEntryPort#capture_config}
  */
  readonly captureConfig?: DdosDstEntryPortCaptureConfig;
  /**
  * glid_exceed_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#glid_exceed_action DdosDstEntryPort#glid_exceed_action}
  */
  readonly glidExceedAction?: DdosDstEntryPortGlidExceedAction;
  /**
  * pattern_recognition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#pattern_recognition DdosDstEntryPort#pattern_recognition}
  */
  readonly patternRecognition?: DdosDstEntryPortPatternRecognition;
  /**
  * pattern_recognition_pu_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#pattern_recognition_pu_details DdosDstEntryPort#pattern_recognition_pu_details}
  */
  readonly patternRecognitionPuDetails?: DdosDstEntryPortPatternRecognitionPuDetails;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#port_ind DdosDstEntryPort#port_ind}
  */
  readonly portInd?: DdosDstEntryPortPortInd;
  /**
  * progression_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#progression_tracking DdosDstEntryPort#progression_tracking}
  */
  readonly progressionTracking?: DdosDstEntryPortProgressionTracking;
  /**
  * sflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#sflow DdosDstEntryPort#sflow}
  */
  readonly sflow?: DdosDstEntryPortSflow;
  /**
  * signature_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#signature_extraction DdosDstEntryPort#signature_extraction}
  */
  readonly signatureExtraction?: DdosDstEntryPortSignatureExtraction;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#template DdosDstEntryPort#template}
  */
  readonly template?: DdosDstEntryPortTemplate;
  /**
  * topk_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#topk_sources DdosDstEntryPort#topk_sources}
  */
  readonly topkSources?: DdosDstEntryPortTopkSources;
}
export interface DdosDstEntryPortCaptureConfig {
  /**
  * 'drop': Apply capture-config to dropped packets; 'forward': Apply capture-config to forwarded packets; 'all': Apply capture-config to both dropped and forwarded packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#capture_config_mode DdosDstEntryPort#capture_config_mode}
  */
  readonly captureConfigMode?: string;
  /**
  * Capture-config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#capture_config_name DdosDstEntryPort#capture_config_name}
  */
  readonly captureConfigName?: string;
}

export function ddosDstEntryPortCaptureConfigToTerraform(struct?: DdosDstEntryPortCaptureConfigOutputReference | DdosDstEntryPortCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config_mode: cdktf.stringToTerraform(struct!.captureConfigMode),
    capture_config_name: cdktf.stringToTerraform(struct!.captureConfigName),
  }
}


export function ddosDstEntryPortCaptureConfigToHclTerraform(struct?: DdosDstEntryPortCaptureConfigOutputReference | DdosDstEntryPortCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config_mode: {
      value: cdktf.stringToHclTerraform(struct!.captureConfigMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_config_name: {
      value: cdktf.stringToHclTerraform(struct!.captureConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortCaptureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortCaptureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfigMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfigMode = this._captureConfigMode;
    }
    if (this._captureConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfigName = this._captureConfigName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortCaptureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._captureConfigMode = undefined;
      this._captureConfigName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._captureConfigMode = value.captureConfigMode;
      this._captureConfigName = value.captureConfigName;
    }
  }

  // capture_config_mode - computed: false, optional: true, required: false
  private _captureConfigMode?: string; 
  public get captureConfigMode() {
    return this.getStringAttribute('capture_config_mode');
  }
  public set captureConfigMode(value: string) {
    this._captureConfigMode = value;
  }
  public resetCaptureConfigMode() {
    this._captureConfigMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigModeInput() {
    return this._captureConfigMode;
  }

  // capture_config_name - computed: false, optional: true, required: false
  private _captureConfigName?: string; 
  public get captureConfigName() {
    return this.getStringAttribute('capture_config_name');
  }
  public set captureConfigName(value: string) {
    this._captureConfigName = value;
  }
  public resetCaptureConfigName() {
    this._captureConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigNameInput() {
    return this._captureConfigName;
  }
}
export interface DdosDstEntryPortGlidExceedActionStatelessEncapActionCfg {
  /**
  * Apply legacy encap template for encap action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#encap_template DdosDstEntryPort#encap_template}
  */
  readonly encapTemplate?: string;
  /**
  * 'stateless-tunnel-encap': Encapsulate all packets; 'stateless-tunnel-encap-scrubbed': Encapsulate all packets and allow packets to go through other DDoS checks before sent (conn-limit exceeded packet can not be scrubbed, it will default to stateless-tunnel-encap);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#stateless_encap_action DdosDstEntryPort#stateless_encap_action}
  */
  readonly statelessEncapAction?: string;
}

export function ddosDstEntryPortGlidExceedActionStatelessEncapActionCfgToTerraform(struct?: DdosDstEntryPortGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryPortGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap_template: cdktf.stringToTerraform(struct!.encapTemplate),
    stateless_encap_action: cdktf.stringToTerraform(struct!.statelessEncapAction),
  }
}


export function ddosDstEntryPortGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct?: DdosDstEntryPortGlidExceedActionStatelessEncapActionCfgOutputReference | DdosDstEntryPortGlidExceedActionStatelessEncapActionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap_template: {
      value: cdktf.stringToHclTerraform(struct!.encapTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stateless_encap_action: {
      value: cdktf.stringToHclTerraform(struct!.statelessEncapAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortGlidExceedActionStatelessEncapActionCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortGlidExceedActionStatelessEncapActionCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encapTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapTemplate = this._encapTemplate;
    }
    if (this._statelessEncapAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapAction = this._statelessEncapAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortGlidExceedActionStatelessEncapActionCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encapTemplate = undefined;
      this._statelessEncapAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encapTemplate = value.encapTemplate;
      this._statelessEncapAction = value.statelessEncapAction;
    }
  }

  // encap_template - computed: false, optional: true, required: false
  private _encapTemplate?: string; 
  public get encapTemplate() {
    return this.getStringAttribute('encap_template');
  }
  public set encapTemplate(value: string) {
    this._encapTemplate = value;
  }
  public resetEncapTemplate() {
    this._encapTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapTemplateInput() {
    return this._encapTemplate;
  }

  // stateless_encap_action - computed: false, optional: true, required: false
  private _statelessEncapAction?: string; 
  public get statelessEncapAction() {
    return this.getStringAttribute('stateless_encap_action');
  }
  public set statelessEncapAction(value: string) {
    this._statelessEncapAction = value;
  }
  public resetStatelessEncapAction() {
    this._statelessEncapAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionInput() {
    return this._statelessEncapAction;
  }
}
export interface DdosDstEntryPortGlidExceedAction {
  /**
  * stateless_encap_action_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#stateless_encap_action_cfg DdosDstEntryPort#stateless_encap_action_cfg}
  */
  readonly statelessEncapActionCfg?: DdosDstEntryPortGlidExceedActionStatelessEncapActionCfg;
}

export function ddosDstEntryPortGlidExceedActionToTerraform(struct?: DdosDstEntryPortGlidExceedActionOutputReference | DdosDstEntryPortGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stateless_encap_action_cfg: ddosDstEntryPortGlidExceedActionStatelessEncapActionCfgToTerraform(struct!.statelessEncapActionCfg),
  }
}


export function ddosDstEntryPortGlidExceedActionToHclTerraform(struct?: DdosDstEntryPortGlidExceedActionOutputReference | DdosDstEntryPortGlidExceedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stateless_encap_action_cfg: {
      value: ddosDstEntryPortGlidExceedActionStatelessEncapActionCfgToHclTerraform(struct!.statelessEncapActionCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortGlidExceedActionStatelessEncapActionCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortGlidExceedActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortGlidExceedAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statelessEncapActionCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessEncapActionCfg = this._statelessEncapActionCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortGlidExceedAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statelessEncapActionCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statelessEncapActionCfg.internalValue = value.statelessEncapActionCfg;
    }
  }

  // stateless_encap_action_cfg - computed: false, optional: true, required: false
  private _statelessEncapActionCfg = new DdosDstEntryPortGlidExceedActionStatelessEncapActionCfgOutputReference(this, "stateless_encap_action_cfg");
  public get statelessEncapActionCfg() {
    return this._statelessEncapActionCfg;
  }
  public putStatelessEncapActionCfg(value: DdosDstEntryPortGlidExceedActionStatelessEncapActionCfg) {
    this._statelessEncapActionCfg.internalValue = value;
  }
  public resetStatelessEncapActionCfg() {
    this._statelessEncapActionCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessEncapActionCfgInput() {
    return this._statelessEncapActionCfg.internalValue;
  }
}
export interface DdosDstEntryPortPatternRecognition {
  /**
  * 'heuristic': heuristic algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#algorithm DdosDstEntryPort#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Extracted filter inactive threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#filter_inactive_threshold DdosDstEntryPort#filter_inactive_threshold}
  */
  readonly filterInactiveThreshold?: number;
  /**
  * Extracted filter threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#filter_threshold DdosDstEntryPort#filter_threshold}
  */
  readonly filterThreshold?: number;
  /**
  * 'capture-never-expire': War-time capture without rate exceeding and never expires; 'manual': Manual mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#mode DdosDstEntryPort#mode}
  */
  readonly mode?: string;
  /**
  * 'high': High Sensitivity; 'medium': Medium Sensitivity; 'low': Low Sensitivity;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#sensitivity DdosDstEntryPort#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#uuid DdosDstEntryPort#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortPatternRecognitionToTerraform(struct?: DdosDstEntryPortPatternRecognitionOutputReference | DdosDstEntryPortPatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    filter_inactive_threshold: cdktf.numberToTerraform(struct!.filterInactiveThreshold),
    filter_threshold: cdktf.numberToTerraform(struct!.filterThreshold),
    mode: cdktf.stringToTerraform(struct!.mode),
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortPatternRecognitionToHclTerraform(struct?: DdosDstEntryPortPatternRecognitionOutputReference | DdosDstEntryPortPatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_inactive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filterInactiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.sensitivity),
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

export class DdosDstEntryPortPatternRecognitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortPatternRecognition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._filterInactiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterInactiveThreshold = this._filterInactiveThreshold;
    }
    if (this._filterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterThreshold = this._filterThreshold;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortPatternRecognition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._filterInactiveThreshold = undefined;
      this._filterThreshold = undefined;
      this._mode = undefined;
      this._sensitivity = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._filterInactiveThreshold = value.filterInactiveThreshold;
      this._filterThreshold = value.filterThreshold;
      this._mode = value.mode;
      this._sensitivity = value.sensitivity;
      this._uuid = value.uuid;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // filter_inactive_threshold - computed: false, optional: true, required: false
  private _filterInactiveThreshold?: number; 
  public get filterInactiveThreshold() {
    return this.getNumberAttribute('filter_inactive_threshold');
  }
  public set filterInactiveThreshold(value: number) {
    this._filterInactiveThreshold = value;
  }
  public resetFilterInactiveThreshold() {
    this._filterInactiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInactiveThresholdInput() {
    return this._filterInactiveThreshold;
  }

  // filter_threshold - computed: false, optional: true, required: false
  private _filterThreshold?: number; 
  public get filterThreshold() {
    return this.getNumberAttribute('filter_threshold');
  }
  public set filterThreshold(value: number) {
    this._filterThreshold = value;
  }
  public resetFilterThreshold() {
    this._filterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterThresholdInput() {
    return this._filterThreshold;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
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
export interface DdosDstEntryPortPatternRecognitionPuDetails {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#uuid DdosDstEntryPort#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortPatternRecognitionPuDetailsToTerraform(struct?: DdosDstEntryPortPatternRecognitionPuDetailsOutputReference | DdosDstEntryPortPatternRecognitionPuDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortPatternRecognitionPuDetailsToHclTerraform(struct?: DdosDstEntryPortPatternRecognitionPuDetailsOutputReference | DdosDstEntryPortPatternRecognitionPuDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDstEntryPortPatternRecognitionPuDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortPatternRecognitionPuDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortPatternRecognitionPuDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface DdosDstEntryPortPortIndSamplingEnable {
  /**
  * 'all': all; 'ip-proto-type': IP Protocol Type; 'ddet_ind_pkt_rate_current': Pkt Rate Current; 'ddet_ind_pkt_rate_min': Pkt Rate Min; 'ddet_ind_pkt_rate_max': Pkt Rate Max; 'ddet_ind_pkt_drop_rate_current': Pkt Drop Rate Current; 'ddet_ind_pkt_drop_rate_min': Pkt Drop Rate Min; 'ddet_ind_pkt_drop_rate_max': Pkt Drop Rate Max; 'ddet_ind_syn_rate_current': TCP SYN Rate Current; 'ddet_ind_syn_rate_min': TCP SYN Rate Min; 'ddet_ind_syn_rate_max': TCP SYN Rate Max; 'ddet_ind_fin_rate_current': TCP FIN Rate Current; 'ddet_ind_fin_rate_min': TCP FIN Rate Min; 'ddet_ind_fin_rate_max': TCP FIN Rate Max; 'ddet_ind_rst_rate_current': TCP RST Rate Current; 'ddet_ind_rst_rate_min': TCP RST Rate Min; 'ddet_ind_rst_rate_max': TCP RST Rate Max; 'ddet_ind_small_window_ack_rate_current': TCP Small Window ACK Rate Current; 'ddet_ind_small_window_ack_rate_min': TCP Small Window ACK Rate Min; 'ddet_ind_small_window_ack_rate_max': TCP Small Window ACK Rate Max; 'ddet_ind_empty_ack_rate_current': TCP Empty ACK Rate Current; 'ddet_ind_empty_ack_rate_min': TCP Empty ACK Rate Min; 'ddet_ind_empty_ack_rate_max': TCP Empty ACK Rate Max; 'ddet_ind_small_payload_rate_current': TCP Small Payload Rate Current; 'ddet_ind_small_payload_rate_min': TCP Small Payload Rate Min; 'ddet_ind_small_payload_rate_max': TCP Small Payload Rate Max; 'ddet_ind_pkt_drop_ratio_current': Pkt Drop / Pkt Rcvd Current; 'ddet_ind_pkt_drop_ratio_min': Pkt Drop / Pkt Rcvd Min; 'ddet_ind_pkt_drop_ratio_max': Pkt Drop / Pkt Rcvd Max; 'ddet_ind_inb_per_outb_current': Bytes-to / Bytes-from Current; 'ddet_ind_inb_per_outb_min': Bytes-to / Bytes-from Min; 'ddet_ind_inb_per_outb_max': Bytes-to / Bytes-from Max; 'ddet_ind_syn_per_fin_rate_current': TCP SYN Rate / FIN Rate Current; 'ddet_ind_syn_per_fin_rate_min': TCP SYN Rate / FIN Rate Min; 'ddet_ind_syn_per_fin_rate_max': TCP SYN Rate / FIN Rate Max; 'ddet_ind_conn_miss_rate_current': TCP Session Miss Rate Current; 'ddet_ind_conn_miss_rate_min': TCP Session Miss Rate Min; 'ddet_ind_conn_miss_rate_max': TCP Session Miss Rate Max; 'ddet_ind_concurrent_conns_current': TCP/UDP Concurrent Sessions Current; 'ddet_ind_concurrent_conns_min': TCP/UDP Concurrent Sessions Min; 'ddet_ind_concurrent_conns_max': TCP/UDP Concurrent Sessions Max; 'ddet_ind_data_cpu_util_current': Data CPU Utilization Current; 'ddet_ind_data_cpu_util_min': Data CPU Utilization Min; 'ddet_ind_data_cpu_util_max': Data CPU Utilization Max; 'ddet_ind_outside_intf_util_current': Outside Interface Utilization Current; 'ddet_ind_outside_intf_util_min': Outside Interface Utilization Min; 'ddet_ind_outside_intf_util_max': Outside Interface Utilization Max; 'ddet_ind_frag_rate_current': Frag Pkt Rate Current; 'ddet_ind_frag_rate_min': Frag Pkt Rate Min; 'ddet_ind_frag_rate_max': Frag Pkt Rate Max; 'ddet_ind_bit_rate_current': Bit Rate Current; 'ddet_ind_bit_rate_min': Bit Rate Min; 'ddet_ind_bit_rate_max': Bit Rate Max;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#counters1 DdosDstEntryPort#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstEntryPortPortIndSamplingEnableToTerraform(struct?: DdosDstEntryPortPortIndSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstEntryPortPortIndSamplingEnableToHclTerraform(struct?: DdosDstEntryPortPortIndSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortPortIndSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntryPortPortIndSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortPortIndSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class DdosDstEntryPortPortIndSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntryPortPortIndSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntryPortPortIndSamplingEnableOutputReference {
    return new DdosDstEntryPortPortIndSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntryPortPortInd {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#uuid DdosDstEntryPort#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#sampling_enable DdosDstEntryPort#sampling_enable}
  */
  readonly samplingEnable?: DdosDstEntryPortPortIndSamplingEnable[] | cdktf.IResolvable;
}

export function ddosDstEntryPortPortIndToTerraform(struct?: DdosDstEntryPortPortIndOutputReference | DdosDstEntryPortPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(ddosDstEntryPortPortIndSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function ddosDstEntryPortPortIndToHclTerraform(struct?: DdosDstEntryPortPortIndOutputReference | DdosDstEntryPortPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstEntryPortPortIndSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortPortIndSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortPortInd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstEntryPortPortIndSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstEntryPortPortIndSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface DdosDstEntryPortProgressionTracking {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#uuid DdosDstEntryPort#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortProgressionTrackingToTerraform(struct?: DdosDstEntryPortProgressionTrackingOutputReference | DdosDstEntryPortProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortProgressionTrackingToHclTerraform(struct?: DdosDstEntryPortProgressionTrackingOutputReference | DdosDstEntryPortProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDstEntryPortProgressionTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortProgressionTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortProgressionTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface DdosDstEntryPortSflowPollingSflowTcp {
  /**
  * Enable sFlow basic TCP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#sflow_tcp_basic DdosDstEntryPort#sflow_tcp_basic}
  */
  readonly sflowTcpBasic?: number;
  /**
  * Enable sFlow stateful TCP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#sflow_tcp_stateful DdosDstEntryPort#sflow_tcp_stateful}
  */
  readonly sflowTcpStateful?: number;
}

export function ddosDstEntryPortSflowPollingSflowTcpToTerraform(struct?: DdosDstEntryPortSflowPollingSflowTcpOutputReference | DdosDstEntryPortSflowPollingSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_tcp_basic: cdktf.numberToTerraform(struct!.sflowTcpBasic),
    sflow_tcp_stateful: cdktf.numberToTerraform(struct!.sflowTcpStateful),
  }
}


export function ddosDstEntryPortSflowPollingSflowTcpToHclTerraform(struct?: DdosDstEntryPortSflowPollingSflowTcpOutputReference | DdosDstEntryPortSflowPollingSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sflow_tcp_basic: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpBasic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_tcp_stateful: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpStateful),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortSflowPollingSflowTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortSflowPollingSflowTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sflowTcpBasic !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpBasic = this._sflowTcpBasic;
    }
    if (this._sflowTcpStateful !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpStateful = this._sflowTcpStateful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortSflowPollingSflowTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sflowTcpBasic = undefined;
      this._sflowTcpStateful = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sflowTcpBasic = value.sflowTcpBasic;
      this._sflowTcpStateful = value.sflowTcpStateful;
    }
  }

  // sflow_tcp_basic - computed: false, optional: true, required: false
  private _sflowTcpBasic?: number; 
  public get sflowTcpBasic() {
    return this.getNumberAttribute('sflow_tcp_basic');
  }
  public set sflowTcpBasic(value: number) {
    this._sflowTcpBasic = value;
  }
  public resetSflowTcpBasic() {
    this._sflowTcpBasic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpBasicInput() {
    return this._sflowTcpBasic;
  }

  // sflow_tcp_stateful - computed: false, optional: true, required: false
  private _sflowTcpStateful?: number; 
  public get sflowTcpStateful() {
    return this.getNumberAttribute('sflow_tcp_stateful');
  }
  public set sflowTcpStateful(value: number) {
    this._sflowTcpStateful = value;
  }
  public resetSflowTcpStateful() {
    this._sflowTcpStateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpStatefulInput() {
    return this._sflowTcpStateful;
  }
}
export interface DdosDstEntryPortSflowPolling {
  /**
  * Enable sFlow HTTP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#sflow_http DdosDstEntryPort#sflow_http}
  */
  readonly sflowHttp?: number;
  /**
  * Enable sFlow packet-level counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#sflow_packets DdosDstEntryPort#sflow_packets}
  */
  readonly sflowPackets?: number;
  /**
  * sflow_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#sflow_tcp DdosDstEntryPort#sflow_tcp}
  */
  readonly sflowTcp?: DdosDstEntryPortSflowPollingSflowTcp;
}

export function ddosDstEntryPortSflowPollingToTerraform(struct?: DdosDstEntryPortSflowPollingOutputReference | DdosDstEntryPortSflowPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_http: cdktf.numberToTerraform(struct!.sflowHttp),
    sflow_packets: cdktf.numberToTerraform(struct!.sflowPackets),
    sflow_tcp: ddosDstEntryPortSflowPollingSflowTcpToTerraform(struct!.sflowTcp),
  }
}


export function ddosDstEntryPortSflowPollingToHclTerraform(struct?: DdosDstEntryPortSflowPollingOutputReference | DdosDstEntryPortSflowPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sflow_http: {
      value: cdktf.numberToHclTerraform(struct!.sflowHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_packets: {
      value: cdktf.numberToHclTerraform(struct!.sflowPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_tcp: {
      value: ddosDstEntryPortSflowPollingSflowTcpToHclTerraform(struct!.sflowTcp),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortSflowPollingSflowTcpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortSflowPollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortSflowPolling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sflowHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowHttp = this._sflowHttp;
    }
    if (this._sflowPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowPackets = this._sflowPackets;
    }
    if (this._sflowTcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcp = this._sflowTcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortSflowPolling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sflowHttp = undefined;
      this._sflowPackets = undefined;
      this._sflowTcp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sflowHttp = value.sflowHttp;
      this._sflowPackets = value.sflowPackets;
      this._sflowTcp.internalValue = value.sflowTcp;
    }
  }

  // sflow_http - computed: false, optional: true, required: false
  private _sflowHttp?: number; 
  public get sflowHttp() {
    return this.getNumberAttribute('sflow_http');
  }
  public set sflowHttp(value: number) {
    this._sflowHttp = value;
  }
  public resetSflowHttp() {
    this._sflowHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowHttpInput() {
    return this._sflowHttp;
  }

  // sflow_packets - computed: false, optional: true, required: false
  private _sflowPackets?: number; 
  public get sflowPackets() {
    return this.getNumberAttribute('sflow_packets');
  }
  public set sflowPackets(value: number) {
    this._sflowPackets = value;
  }
  public resetSflowPackets() {
    this._sflowPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowPacketsInput() {
    return this._sflowPackets;
  }

  // sflow_tcp - computed: false, optional: true, required: false
  private _sflowTcp = new DdosDstEntryPortSflowPollingSflowTcpOutputReference(this, "sflow_tcp");
  public get sflowTcp() {
    return this._sflowTcp;
  }
  public putSflowTcp(value: DdosDstEntryPortSflowPollingSflowTcp) {
    this._sflowTcp.internalValue = value;
  }
  public resetSflowTcp() {
    this._sflowTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpInput() {
    return this._sflowTcp.internalValue;
  }
}
export interface DdosDstEntryPortSflow {
  /**
  * polling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#polling DdosDstEntryPort#polling}
  */
  readonly polling?: DdosDstEntryPortSflowPolling;
}

export function ddosDstEntryPortSflowToTerraform(struct?: DdosDstEntryPortSflowOutputReference | DdosDstEntryPortSflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    polling: ddosDstEntryPortSflowPollingToTerraform(struct!.polling),
  }
}


export function ddosDstEntryPortSflowToHclTerraform(struct?: DdosDstEntryPortSflowOutputReference | DdosDstEntryPortSflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    polling: {
      value: ddosDstEntryPortSflowPollingToHclTerraform(struct!.polling),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntryPortSflowPollingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortSflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortSflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._polling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.polling = this._polling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortSflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._polling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._polling.internalValue = value.polling;
    }
  }

  // polling - computed: false, optional: true, required: false
  private _polling = new DdosDstEntryPortSflowPollingOutputReference(this, "polling");
  public get polling() {
    return this._polling;
  }
  public putPolling(value: DdosDstEntryPortSflowPolling) {
    this._polling.internalValue = value;
  }
  public resetPolling() {
    this._polling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingInput() {
    return this._polling.internalValue;
  }
}
export interface DdosDstEntryPortSignatureExtraction {
  /**
  * 'heuristic': heuristic algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#algorithm DdosDstEntryPort#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Enable manual mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#manual_mode DdosDstEntryPort#manual_mode}
  */
  readonly manualMode?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#uuid DdosDstEntryPort#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortSignatureExtractionToTerraform(struct?: DdosDstEntryPortSignatureExtractionOutputReference | DdosDstEntryPortSignatureExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    manual_mode: cdktf.numberToTerraform(struct!.manualMode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortSignatureExtractionToHclTerraform(struct?: DdosDstEntryPortSignatureExtractionOutputReference | DdosDstEntryPortSignatureExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manual_mode: {
      value: cdktf.numberToHclTerraform(struct!.manualMode),
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

export class DdosDstEntryPortSignatureExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortSignatureExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._manualMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualMode = this._manualMode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortSignatureExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._manualMode = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._manualMode = value.manualMode;
      this._uuid = value.uuid;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // manual_mode - computed: false, optional: true, required: false
  private _manualMode?: number; 
  public get manualMode() {
    return this.getNumberAttribute('manual_mode');
  }
  public set manualMode(value: number) {
    this._manualMode = value;
  }
  public resetManualMode() {
    this._manualMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualModeInput() {
    return this._manualMode;
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
export interface DdosDstEntryPortTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#dns DdosDstEntryPort#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#http DdosDstEntryPort#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#sip DdosDstEntryPort#sip}
  */
  readonly sip?: string;
  /**
  * DDOS SSL-L4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#ssl_l4 DdosDstEntryPort#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#tcp DdosDstEntryPort#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#udp DdosDstEntryPort#udp}
  */
  readonly udp?: string;
}

export function ddosDstEntryPortTemplateToTerraform(struct?: DdosDstEntryPortTemplateOutputReference | DdosDstEntryPortTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    http: cdktf.stringToTerraform(struct!.http),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstEntryPortTemplateToHclTerraform(struct?: DdosDstEntryPortTemplateOutputReference | DdosDstEntryPortTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntryPortTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._http = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._http = value.http;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstEntryPortTopkSources {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#uuid DdosDstEntryPort#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntryPortTopkSourcesToTerraform(struct?: DdosDstEntryPortTopkSourcesOutputReference | DdosDstEntryPortTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntryPortTopkSourcesToHclTerraform(struct?: DdosDstEntryPortTopkSourcesOutputReference | DdosDstEntryPortTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDstEntryPortTopkSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntryPortTopkSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntryPortTopkSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port thunder_ddos_dst_entry_port}
*/
export class DdosDstEntryPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstEntryPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstEntryPort to import
  * @param importFromId The id of the existing DdosDstEntryPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstEntryPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_port thunder_ddos_dst_entry_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstEntryPortConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstEntryPortConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_port',
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
    this._deny = config.deny;
    this._detectionEnable = config.detectionEnable;
    this._dnsCache = config.dnsCache;
    this._dstEntryName = config.dstEntryName;
    this._enableTopK = config.enableTopK;
    this._glid = config.glid;
    this._id = config.id;
    this._portNum = config.portNum;
    this._protocol = config.protocol;
    this._setCounterBaseVal = config.setCounterBaseVal;
    this._topkNumRecords = config.topkNumRecords;
    this._topkSortKey = config.topkSortKey;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._captureConfig.internalValue = config.captureConfig;
    this._glidExceedAction.internalValue = config.glidExceedAction;
    this._patternRecognition.internalValue = config.patternRecognition;
    this._patternRecognitionPuDetails.internalValue = config.patternRecognitionPuDetails;
    this._portInd.internalValue = config.portInd;
    this._progressionTracking.internalValue = config.progressionTracking;
    this._sflow.internalValue = config.sflow;
    this._signatureExtraction.internalValue = config.signatureExtraction;
    this._template.internalValue = config.template;
    this._topkSources.internalValue = config.topkSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // detection_enable - computed: false, optional: true, required: false
  private _detectionEnable?: number; 
  public get detectionEnable() {
    return this.getNumberAttribute('detection_enable');
  }
  public set detectionEnable(value: number) {
    this._detectionEnable = value;
  }
  public resetDetectionEnable() {
    this._detectionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionEnableInput() {
    return this._detectionEnable;
  }

  // dns_cache - computed: false, optional: true, required: false
  private _dnsCache?: string; 
  public get dnsCache() {
    return this.getStringAttribute('dns_cache');
  }
  public set dnsCache(value: string) {
    this._dnsCache = value;
  }
  public resetDnsCache() {
    this._dnsCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheInput() {
    return this._dnsCache;
  }

  // dst_entry_name - computed: false, optional: false, required: true
  private _dstEntryName?: string; 
  public get dstEntryName() {
    return this.getStringAttribute('dst_entry_name');
  }
  public set dstEntryName(value: string) {
    this._dstEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryNameInput() {
    return this._dstEntryName;
  }

  // enable_top_k - computed: false, optional: true, required: false
  private _enableTopK?: number; 
  public get enableTopK() {
    return this.getNumberAttribute('enable_top_k');
  }
  public set enableTopK(value: number) {
    this._enableTopK = value;
  }
  public resetEnableTopK() {
    this._enableTopK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKInput() {
    return this._enableTopK;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
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

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // set_counter_base_val - computed: false, optional: true, required: false
  private _setCounterBaseVal?: number; 
  public get setCounterBaseVal() {
    return this.getNumberAttribute('set_counter_base_val');
  }
  public set setCounterBaseVal(value: number) {
    this._setCounterBaseVal = value;
  }
  public resetSetCounterBaseVal() {
    this._setCounterBaseVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCounterBaseValInput() {
    return this._setCounterBaseVal;
  }

  // topk_num_records - computed: false, optional: true, required: false
  private _topkNumRecords?: number; 
  public get topkNumRecords() {
    return this.getNumberAttribute('topk_num_records');
  }
  public set topkNumRecords(value: number) {
    this._topkNumRecords = value;
  }
  public resetTopkNumRecords() {
    this._topkNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkNumRecordsInput() {
    return this._topkNumRecords;
  }

  // topk_sort_key - computed: false, optional: true, required: false
  private _topkSortKey?: string; 
  public get topkSortKey() {
    return this.getStringAttribute('topk_sort_key');
  }
  public set topkSortKey(value: string) {
    this._topkSortKey = value;
  }
  public resetTopkSortKey() {
    this._topkSortKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSortKeyInput() {
    return this._topkSortKey;
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

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig = new DdosDstEntryPortCaptureConfigOutputReference(this, "capture_config");
  public get captureConfig() {
    return this._captureConfig;
  }
  public putCaptureConfig(value: DdosDstEntryPortCaptureConfig) {
    this._captureConfig.internalValue = value;
  }
  public resetCaptureConfig() {
    this._captureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig.internalValue;
  }

  // glid_exceed_action - computed: false, optional: true, required: false
  private _glidExceedAction = new DdosDstEntryPortGlidExceedActionOutputReference(this, "glid_exceed_action");
  public get glidExceedAction() {
    return this._glidExceedAction;
  }
  public putGlidExceedAction(value: DdosDstEntryPortGlidExceedAction) {
    this._glidExceedAction.internalValue = value;
  }
  public resetGlidExceedAction() {
    this._glidExceedAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidExceedActionInput() {
    return this._glidExceedAction.internalValue;
  }

  // pattern_recognition - computed: false, optional: true, required: false
  private _patternRecognition = new DdosDstEntryPortPatternRecognitionOutputReference(this, "pattern_recognition");
  public get patternRecognition() {
    return this._patternRecognition;
  }
  public putPatternRecognition(value: DdosDstEntryPortPatternRecognition) {
    this._patternRecognition.internalValue = value;
  }
  public resetPatternRecognition() {
    this._patternRecognition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionInput() {
    return this._patternRecognition.internalValue;
  }

  // pattern_recognition_pu_details - computed: false, optional: true, required: false
  private _patternRecognitionPuDetails = new DdosDstEntryPortPatternRecognitionPuDetailsOutputReference(this, "pattern_recognition_pu_details");
  public get patternRecognitionPuDetails() {
    return this._patternRecognitionPuDetails;
  }
  public putPatternRecognitionPuDetails(value: DdosDstEntryPortPatternRecognitionPuDetails) {
    this._patternRecognitionPuDetails.internalValue = value;
  }
  public resetPatternRecognitionPuDetails() {
    this._patternRecognitionPuDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionPuDetailsInput() {
    return this._patternRecognitionPuDetails.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DdosDstEntryPortPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DdosDstEntryPortPortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // progression_tracking - computed: false, optional: true, required: false
  private _progressionTracking = new DdosDstEntryPortProgressionTrackingOutputReference(this, "progression_tracking");
  public get progressionTracking() {
    return this._progressionTracking;
  }
  public putProgressionTracking(value: DdosDstEntryPortProgressionTracking) {
    this._progressionTracking.internalValue = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking.internalValue;
  }

  // sflow - computed: false, optional: true, required: false
  private _sflow = new DdosDstEntryPortSflowOutputReference(this, "sflow");
  public get sflow() {
    return this._sflow;
  }
  public putSflow(value: DdosDstEntryPortSflow) {
    this._sflow.internalValue = value;
  }
  public resetSflow() {
    this._sflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInput() {
    return this._sflow.internalValue;
  }

  // signature_extraction - computed: false, optional: true, required: false
  private _signatureExtraction = new DdosDstEntryPortSignatureExtractionOutputReference(this, "signature_extraction");
  public get signatureExtraction() {
    return this._signatureExtraction;
  }
  public putSignatureExtraction(value: DdosDstEntryPortSignatureExtraction) {
    this._signatureExtraction.internalValue = value;
  }
  public resetSignatureExtraction() {
    this._signatureExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureExtractionInput() {
    return this._signatureExtraction.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntryPortTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntryPortTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // topk_sources - computed: false, optional: true, required: false
  private _topkSources = new DdosDstEntryPortTopkSourcesOutputReference(this, "topk_sources");
  public get topkSources() {
    return this._topkSources;
  }
  public putTopkSources(value: DdosDstEntryPortTopkSources) {
    this._topkSources.internalValue = value;
  }
  public resetTopkSources() {
    this._topkSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSourcesInput() {
    return this._topkSources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deny: cdktf.numberToTerraform(this._deny),
      detection_enable: cdktf.numberToTerraform(this._detectionEnable),
      dns_cache: cdktf.stringToTerraform(this._dnsCache),
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      enable_top_k: cdktf.numberToTerraform(this._enableTopK),
      glid: cdktf.stringToTerraform(this._glid),
      id: cdktf.stringToTerraform(this._id),
      port_num: cdktf.numberToTerraform(this._portNum),
      protocol: cdktf.stringToTerraform(this._protocol),
      set_counter_base_val: cdktf.numberToTerraform(this._setCounterBaseVal),
      topk_num_records: cdktf.numberToTerraform(this._topkNumRecords),
      topk_sort_key: cdktf.stringToTerraform(this._topkSortKey),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      capture_config: ddosDstEntryPortCaptureConfigToTerraform(this._captureConfig.internalValue),
      glid_exceed_action: ddosDstEntryPortGlidExceedActionToTerraform(this._glidExceedAction.internalValue),
      pattern_recognition: ddosDstEntryPortPatternRecognitionToTerraform(this._patternRecognition.internalValue),
      pattern_recognition_pu_details: ddosDstEntryPortPatternRecognitionPuDetailsToTerraform(this._patternRecognitionPuDetails.internalValue),
      port_ind: ddosDstEntryPortPortIndToTerraform(this._portInd.internalValue),
      progression_tracking: ddosDstEntryPortProgressionTrackingToTerraform(this._progressionTracking.internalValue),
      sflow: ddosDstEntryPortSflowToTerraform(this._sflow.internalValue),
      signature_extraction: ddosDstEntryPortSignatureExtractionToTerraform(this._signatureExtraction.internalValue),
      template: ddosDstEntryPortTemplateToTerraform(this._template.internalValue),
      topk_sources: ddosDstEntryPortTopkSourcesToTerraform(this._topkSources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deny: {
        value: cdktf.numberToHclTerraform(this._deny),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detection_enable: {
        value: cdktf.numberToHclTerraform(this._detectionEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache: {
        value: cdktf.stringToHclTerraform(this._dnsCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_top_k: {
        value: cdktf.numberToHclTerraform(this._enableTopK),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      glid: {
        value: cdktf.stringToHclTerraform(this._glid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_num: {
        value: cdktf.numberToHclTerraform(this._portNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_counter_base_val: {
        value: cdktf.numberToHclTerraform(this._setCounterBaseVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topk_num_records: {
        value: cdktf.numberToHclTerraform(this._topkNumRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topk_sort_key: {
        value: cdktf.stringToHclTerraform(this._topkSortKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      capture_config: {
        value: ddosDstEntryPortCaptureConfigToHclTerraform(this._captureConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryPortCaptureConfigList",
      },
      glid_exceed_action: {
        value: ddosDstEntryPortGlidExceedActionToHclTerraform(this._glidExceedAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryPortGlidExceedActionList",
      },
      pattern_recognition: {
        value: ddosDstEntryPortPatternRecognitionToHclTerraform(this._patternRecognition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryPortPatternRecognitionList",
      },
      pattern_recognition_pu_details: {
        value: ddosDstEntryPortPatternRecognitionPuDetailsToHclTerraform(this._patternRecognitionPuDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryPortPatternRecognitionPuDetailsList",
      },
      port_ind: {
        value: ddosDstEntryPortPortIndToHclTerraform(this._portInd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryPortPortIndList",
      },
      progression_tracking: {
        value: ddosDstEntryPortProgressionTrackingToHclTerraform(this._progressionTracking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryPortProgressionTrackingList",
      },
      sflow: {
        value: ddosDstEntryPortSflowToHclTerraform(this._sflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryPortSflowList",
      },
      signature_extraction: {
        value: ddosDstEntryPortSignatureExtractionToHclTerraform(this._signatureExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryPortSignatureExtractionList",
      },
      template: {
        value: ddosDstEntryPortTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryPortTemplateList",
      },
      topk_sources: {
        value: ddosDstEntryPortTopkSourcesToHclTerraform(this._topkSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntryPortTopkSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
