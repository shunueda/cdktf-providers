// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateGtpPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify GTP Filtering Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#filtering_policy_name TemplateGtpPolicy#filtering_policy_name}
  */
  readonly filteringPolicyName?: string;
  /**
  * Specify GTP General Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#general_policy_name TemplateGtpPolicy#general_policy_name}
  */
  readonly generalPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#id TemplateGtpPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify GTP Logging Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#logging_policy_name TemplateGtpPolicy#logging_policy_name}
  */
  readonly loggingPolicyName?: string;
  /**
  * Configure the GTP Policy Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#name TemplateGtpPolicy#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#packet_capture_template TemplateGtpPolicy#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Specify Rate Limit Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#rate_limit_policy_name TemplateGtpPolicy#rate_limit_policy_name}
  */
  readonly rateLimitPolicyName?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#user_tag TemplateGtpPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#uuid TemplateGtpPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify GTP Validation Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#validation_policy_name TemplateGtpPolicy#validation_policy_name}
  */
  readonly validationPolicyName?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#sampling_enable TemplateGtpPolicy#sampling_enable}
  */
  readonly samplingEnable?: TemplateGtpPolicySamplingEnable[] | cdktf.IResolvable;
}
export interface TemplateGtpPolicySamplingEnable {
  /**
  * 'all': all; 'gtp-v0-c-tunnel-created': GTPv0-C Tunnel Created; 'gtp-v0-c-tunnel-half-open': GTPv0-C Half open tunnel created; 'gtp-v0-c-tunnel-half-closed': GTPv0-C Tunnel Delete Request; 'gtp-v0-c-tunnel-closed': GTPv0-C Tunnel Marked Deleted; 'gtp-v0-c-tunnel-deleted': GTPv0-C Tunnel Deleted; 'gtp-v0-c-half-open-tunnel-closed': GTPv0-C Half open tunnel closed; 'gtp-v1-c-tunnel-created': GTPv1-C Tunnel Created; 'gtp-v1-c-tunnel-half-open': GTPv1-C Half open tunnel created; 'gtp-v1-c-tunnel-half-closed': GTPv1-C Tunnel Delete Request; 'gtp-v1-c-tunnel-closed': GTPv1-C Tunnel Marked Deleted; 'gtp-v1-c-tunnel-deleted': GTPv1-C Tunnel Deleted; 'gtp-v1-c-half-open-tunnel-closed': GTPv1-C Half open tunnel closed; 'gtp-v2-c-tunnel-created': GTPv2-C Tunnel Created; 'gtp-v2-c-tunnel-half-open': GTPv2-C Half open tunnel created; 'gtp-v2-c-tunnel-half-closed': GTPv2-C Tunnel Delete Request; 'gtp-v2-c-tunnel-closed': GTPv2-C Tunnel Marked Deleted; 'gtp-v2-c-tunnel-deleted': GTPv2-C Tunnel Deleted; 'gtp-v2-c-half-open-tunnel-closed': GTPv2-C Half open tunnel closed; 'gtp-u-tunnel-created': GTP-U Tunnel Created; 'gtp-u-tunnel-deleted': GTP-U Tunnel Deleted; 'gtp-v0-c-update-pdp-resp-unsuccess': GTPv0-C Update PDP Context Response Unsuccessful; 'gtp-v1-c-update-pdp-resp-unsuccess': GTPv1-C Update PDP Context Response Unsuccessful; 'gtp-v2-c-mod_bearer-resp-unsuccess': GTPv2-C Modify Bearer Response Unsuccessful; 'gtp-v0-c-create-pdp-resp-unsuccess': GTPv0-C Create PDP Context Response Unsuccessful; 'gtp-v1-c-create-pdp-resp-unsuccess': GTPv1-C Create PDP Context Response Unsuccessful; 'gtp-v2-c-create-sess-resp-unsuccess': GTPv2-C Create Session Response Unsuccessful; 'gtp-v2-c-piggyback-message': GTPv2-C Piggyback Message; 'gtp-path-management-message': GTP Path Management Messages Received; 'gtp-v0-c-tunnel-deleted-restart': GTPv0-C Tunnel Deleted with Restart/failure; 'gtp-v1-c-tunnel-deleted-restart': GTPv1-C Tunnel Deleted with Restart/failure; 'gtp-v2-c-tunnel-deleted-restart': GTPv2-C Tunnel Deleted with Restart/failure; 'gtp-v0-c-reserved-message-allow': Permit GTPv0-C Reserved Messages; 'gtp-v1-c-reserved-message-allow': Permit GTPv1-C Reserved Messages; 'gtp-v2-c-reserved-message-allow': Permit GTPv2-C Reserved Messages; 'gtp-v2-c-load-contr-info-exceed': GTPv2-C Load Control Info IEs in message exceeded 2; 'gtp-v1-c-pdu-notification-request-forward': GTPv1-C PDU Notification Request Forward; 'gtp-v1-c-pdu-notification-reject-request-forward': GTPv1-C PDU Notification Reject Request Forward; 'gtp-v0-c-pdu-notification-request-forward': GTPv0-C PDU Notification Request Forward; 'gtp-v0-c-pdu-notification-reject-request-forward': GTPv0-C PDU Notification Reject Request Forward; 'gtp-v0-c-message-skipped-apn-filtering-no-imsi': GTPv0-C APN/IMSI Filtering Skipped (No IMSI); 'gtp-v1-c-message-skipped-apn-filtering-no-imsi': GTPv1-C APN/IMSI Filtering Skipped (No IMSI); 'gtp-v2-c-message-skipped-apn-filtering-no-imsi': GTPv2-C APN/IMSI Filtering Skipped (No IMSI); 'gtp-v0-c-message-skipped-msisdn-filtering-no-imsi': GTPv0-C MSISDN Filtering Skipped (No MSISDN); 'gtp-v1-c-message-skipped-msisdn-filtering-no-imsi': GTPv1-C MSISDN Filtering Skipped (No MSISDN); 'gtp-v2-c-message-skipped-msisdn-filtering-no-imsi': GTPv2-C MSISDN Filtering Skipped (No MSISDN); 'gtp-v0-c-packet-dummy-msisdn': GTPv0-C Packet With Dummy MSISDN Forwarded; 'gtp-v1-c-packet-dummy-msisdn': GTPv1-C Packet With Dummy MSISDN Forwarded; 'gtp-v2-c-packet-dummy-msisdn': GTPv2-C Packet With Dummy MSISDN Forwarded; 'drop-vld-sanity-gtp-v2-c-message-with-teid-zero-expected': Validation Drop: GTPv2-C Create Session Request with TEID; 'drop-vld-sanity-gtp-v1-c-message-with-teid-zero-expected': Validation Drop: GTPv1-C PDU Notification Request with TEID; 'drop-vld-sanity-gtp-v0-c-message-with-teid-zero-expected': Validation Drop: GTPv0-C PDU Notification Request with TEID; 'drop-vld-gtp-ie-repeat-count-exceed': Validation Drop: GTP repeated IE count exceeded; 'drop-vld-reserved-field-set': Validation Drop: Reserved Header Field Set; 'drop-vld-tunnel-id-flag': Validation Drop: Tunnel Header Flag Not Set; 'drop-vld-invalid-flow-label-v0': Validation Drop: Invalid Flow Label in GTPv0-C Header; 'drop-vld-invalid-teid': Validation Drop: Invalid TEID Value; 'drop-vld-out-of-state': Validation Drop: Out Of State GTP Message; 'drop-vld-mandatory-information-element': Validation Drop: Mandatory IE Not Present; 'drop-vld-mandatory-ie-in-grouped-ie': Validation Drop: Mandatory IE in Grouped IE Not Present; 'drop-vld-out-of-order-ie': Validation Drop: GTPv1-C Message Out of Order IE; 'drop-vld-out-of-state-ie': Validation Drop: Unexpected IE Present in Message; 'drop-vld-reserved-information-element': Validation Drop: Reserved IE Field Present; 'drop-vld-version-not-supported': Validation Drop: Invalid GTP version; 'drop-vld-message-length': Validation Drop: Message Length Exceeded; 'drop-vld-cross-layer-correlation': Validation Drop: Cross Layer IP Address Mismatch; 'drop-vld-country-code-mismatch': Validation Drop: Country Code Mismatch in IMSI and MSISDN; 'drop-vld-gtp-u-spoofed-source-address': Validation Drop: GTP-U IP Address Spoofed; 'drop-vld-gtp-bearer-count-exceed': Validation Drop: GTP Bearer count exceeded max (11); 'drop-vld-gtp-v2-wrong-lbi-create-bearer-req': Validation Drop: GTPV2-C Wrong LBI in Create Bearer Request; 'gtp-c-handover-in-progress-with-conn': GTP-C matching a conn with Handover In Progress; 'drop-vld-v0-reserved-message-drop': Validation Drop: GTPv0-C Reserved Message Drop; 'drop-vld-v1-reserved-message-drop': Validation Drop: GTPv1-C Reserved Message Drop; 'drop-vld-v2-reserved-message-drop': Validation Drop: GTPv2-C Reserved Message Drop; 'drop-vld-invalid-pkt-len-piggyback': Validation Drop: Piggyback message invalid packet length; 'drop-vld-sanity-failed-piggyback': Validation Drop: piggyback message anomaly failed; 'drop-vld-sequence-num-correlation': Validation Drop: GTP-C Sequence number Mismatch; 'drop-vld-gtpv0-seqnum-buffer-full': Validation Drop: GTPV0-C conn Sequence number Buffer Full; 'drop-vld-gtpv1-seqnum-buffer-full': Validation Drop: GTPV1-C conn Sequence number Buffer Full; 'drop-vld-gtpv2-seqnum-buffer-full': Validation Drop: GTPV2-C conn Sequence number Buffer Full; 'drop-vld-gtp-invalid-imsi-len-drop': Validation Drop: GTP-C Invalid IMSI Length Drop; 'drop-vld-gtp-invalid-apn-len-drop': Validation Drop: GTP-C Invalid APN Length Drop; 'drop-vld-protocol-flag-unset': Validation Drop: Protocol flag in Header Field not Set; 'drop-vld-gtpv0-subscriber-attr-miss': Validation Drop: GTPV0-c Subscriber Attributes Missing; 'drop-vld-gtpv1-subscriber-attr-miss': Validation Drop: GTPV1-c Subscriber Attributes Missing; 'drop-vld-gtpv2-subscriber-attr-miss': Validation Drop: GTPV2-c Subscriber Attributes Missing; 'drop-vld-gtp-v0-c-ie-len-exceed-msg-len': GTPv0-C IE Length Exceeds Message Length; 'drop-vld-gtp-v1-c-ie-len-exceed-msg-len': GTPv1-C IE Length Exceeds Message Length; 'drop-vld-gtp-v2-c-ie-len-exceed-msg-len': GTPv2-C IE Length Exceeds Message Length; 'drop-vld-gtp-v0-c-message-length-mismatch': GTPv0-C Message Length Mismatch Across Layers; 'drop-vld-gtp-v1-c-message-length-mismatch': GTPv1-C Message Length Mismatch Across Layers; 'drop-vld-gtp-v2-c-message-length-mismatch': GTPv2-C Message Length Mismatch Across Layers; 'drop-vld-gtp-v0-c-message-skipped-apn-filtering-no-apn': Validation Drop: GTPv0-C APN/IMSI Filtering Dropped (No APN); 'drop-vld-gtp-v1-c-message-skipped-apn-filtering-no-apn': Validation Drop: GTPv1-C APN/IMSI Filtering Dropped (No APN); 'drop-vld-gtp-v2-c-message-skipped-apn-filtering-no-apn': Validation Drop: GTPv2-C APN/IMSI Filtering Dropped (No APN);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#counters1 TemplateGtpPolicy#counters1}
  */
  readonly counters1?: string;
  /**
  * 'drop-flt-message-filtering': Filtering Drop: Message Type Not Permitted on Interface; 'drop-flt-apn-filtering': Filtering Drop: APN IMSI Filtering; 'drop-flt-msisdn-filtering': Filtering Drop: MSISDN Filtering; 'drop-flt-rat-type-filtering': Filtering Drop: RAT Type Filtering; 'drop-flt-gtp-in-gtp': Filtering Drop: GTP in GTP Tunnel Present; 'drop-rl-gtp-v0-c-agg': Rate-limit Drop: Maximum GTPv0-C Message rate; 'drop-rl-gtp-v1-c-agg': Rate-limit Drop: Maximum GTPv1-C Message rate; 'drop-rl-gtp-v2-c-agg': Rate-limit Drop: Maximum GTPv2-C Message rate; 'drop-rl-gtp-v1-c-create-pdp-request': Rate-limit Drop: GTPv1-C Create PDP Request rate; 'drop-rl-gtp-v2-c-create-session-request': Rate-limit Drop: GTPv2-C Create Session Request rate; 'drop-rl-gtp-v1-c-update-pdp-request': Rate-limit Drop: GTPv1-C Update PDP Request rate; 'drop-rl-gtp-v2-c-modify-bearer-request': Rate-limit Drop: GTPv2-C Modify Bearer Request rate; 'drop-rl-gtp-u-tunnel-create': Rate-limit Drop: GTP-U Tunnel Creation rate; 'drop-rl-gtp-u-uplink-byte': Rate-limit Drop: GTP-U Uplink byte rate; 'drop-rl-gtp-u-uplink-packet': Rate-limit Drop: GTP-U Uplink packet rate; 'drop-rl-gtp-u-downlink-byte': Rate-limit Drop: GTP-U Downlink byte rate; 'drop-rl-gtp-u-downlink-packet': Rate-limit Drop: GTP-U Downlink packet rate; 'drop-rl-gtp-u-total-byte': Rate-limit Drop: GTP-U Total byte rate; 'drop-rl-gtp-u-total-packet': Rate-limit Drop: GTP-U Total packet rate; 'drop-rl-gtp-u-max-concurrent-tunnels': Rate-limit Drop: GTP-U Concurrent Tunnels;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#counters2 TemplateGtpPolicy#counters2}
  */
  readonly counters2?: string;
}

export function templateGtpPolicySamplingEnableToTerraform(struct?: TemplateGtpPolicySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
  }
}


export function templateGtpPolicySamplingEnableToHclTerraform(struct?: TemplateGtpPolicySamplingEnable | cdktf.IResolvable): any {
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
    counters2: {
      value: cdktf.stringToHclTerraform(struct!.counters2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateGtpPolicySamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateGtpPolicySamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    if (this._counters2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters2 = this._counters2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateGtpPolicySamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
      this._counters2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
      this._counters2 = value.counters2;
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

  // counters2 - computed: false, optional: true, required: false
  private _counters2?: string; 
  public get counters2() {
    return this.getStringAttribute('counters2');
  }
  public set counters2(value: string) {
    this._counters2 = value;
  }
  public resetCounters2() {
    this._counters2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters2Input() {
    return this._counters2;
  }
}

export class TemplateGtpPolicySamplingEnableList extends cdktf.ComplexList {
  public internalValue? : TemplateGtpPolicySamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): TemplateGtpPolicySamplingEnableOutputReference {
    return new TemplateGtpPolicySamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy thunder_template_gtp_policy}
*/
export class TemplateGtpPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_gtp_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateGtpPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateGtpPolicy to import
  * @param importFromId The id of the existing TemplateGtpPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateGtpPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_gtp_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_gtp_policy thunder_template_gtp_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateGtpPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateGtpPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_gtp_policy',
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
    this._filteringPolicyName = config.filteringPolicyName;
    this._generalPolicyName = config.generalPolicyName;
    this._id = config.id;
    this._loggingPolicyName = config.loggingPolicyName;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._rateLimitPolicyName = config.rateLimitPolicyName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._validationPolicyName = config.validationPolicyName;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filtering_policy_name - computed: false, optional: true, required: false
  private _filteringPolicyName?: string; 
  public get filteringPolicyName() {
    return this.getStringAttribute('filtering_policy_name');
  }
  public set filteringPolicyName(value: string) {
    this._filteringPolicyName = value;
  }
  public resetFilteringPolicyName() {
    this._filteringPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringPolicyNameInput() {
    return this._filteringPolicyName;
  }

  // general_policy_name - computed: false, optional: true, required: false
  private _generalPolicyName?: string; 
  public get generalPolicyName() {
    return this.getStringAttribute('general_policy_name');
  }
  public set generalPolicyName(value: string) {
    this._generalPolicyName = value;
  }
  public resetGeneralPolicyName() {
    this._generalPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalPolicyNameInput() {
    return this._generalPolicyName;
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

  // logging_policy_name - computed: false, optional: true, required: false
  private _loggingPolicyName?: string; 
  public get loggingPolicyName() {
    return this.getStringAttribute('logging_policy_name');
  }
  public set loggingPolicyName(value: string) {
    this._loggingPolicyName = value;
  }
  public resetLoggingPolicyName() {
    this._loggingPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingPolicyNameInput() {
    return this._loggingPolicyName;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // rate_limit_policy_name - computed: false, optional: true, required: false
  private _rateLimitPolicyName?: string; 
  public get rateLimitPolicyName() {
    return this.getStringAttribute('rate_limit_policy_name');
  }
  public set rateLimitPolicyName(value: string) {
    this._rateLimitPolicyName = value;
  }
  public resetRateLimitPolicyName() {
    this._rateLimitPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitPolicyNameInput() {
    return this._rateLimitPolicyName;
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

  // validation_policy_name - computed: false, optional: true, required: false
  private _validationPolicyName?: string; 
  public get validationPolicyName() {
    return this.getStringAttribute('validation_policy_name');
  }
  public set validationPolicyName(value: string) {
    this._validationPolicyName = value;
  }
  public resetValidationPolicyName() {
    this._validationPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationPolicyNameInput() {
    return this._validationPolicyName;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new TemplateGtpPolicySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: TemplateGtpPolicySamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filtering_policy_name: cdktf.stringToTerraform(this._filteringPolicyName),
      general_policy_name: cdktf.stringToTerraform(this._generalPolicyName),
      id: cdktf.stringToTerraform(this._id),
      logging_policy_name: cdktf.stringToTerraform(this._loggingPolicyName),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      rate_limit_policy_name: cdktf.stringToTerraform(this._rateLimitPolicyName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      validation_policy_name: cdktf.stringToTerraform(this._validationPolicyName),
      sampling_enable: cdktf.listMapper(templateGtpPolicySamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filtering_policy_name: {
        value: cdktf.stringToHclTerraform(this._filteringPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      general_policy_name: {
        value: cdktf.stringToHclTerraform(this._generalPolicyName),
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
      logging_policy_name: {
        value: cdktf.stringToHclTerraform(this._loggingPolicyName),
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
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_policy_name: {
        value: cdktf.stringToHclTerraform(this._rateLimitPolicyName),
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
      validation_policy_name: {
        value: cdktf.stringToHclTerraform(this._validationPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(templateGtpPolicySamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateGtpPolicySamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
