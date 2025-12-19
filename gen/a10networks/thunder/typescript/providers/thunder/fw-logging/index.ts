// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging#cef_label FwLogging#cef_label}
  */
  readonly cefLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging#id FwLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Logging Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging#name FwLogging#name}
  */
  readonly name?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging#uuid FwLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * gtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging#gtp FwLogging#gtp}
  */
  readonly gtp?: FwLoggingGtp;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging#sampling_enable FwLogging#sampling_enable}
  */
  readonly samplingEnable?: FwLoggingSamplingEnable[] | cdktf.IResolvable;
}
export interface FwLoggingGtpSamplingEnable {
  /**
  * 'all': all; 'log_type_gtp_invalid_teid': Log Event Type GTP Invalid TEID; 'log_gtp_type_reserved_ie_present': Log Event Type GTP Reserved IE Present; 'log_type_gtp_mandatory_ie_missing': Log Event Type GTP Mandatory IE Missing; 'log_type_gtp_mandatory_ie_inside_grouped_ie_missing': Log Event Type GTP Mandatory IE Missing Inside Grouped IE; 'log_type_gtp_msisdn_filtering': Log Event Type GTP MSISDN Filtering; 'log_type_gtp_out_of_order_ie': Log Event Type GTP Out of Order IE V1; 'log_type_gtp_out_of_state_ie': Log Event Type GTP Out of State IE; 'log_type_enduser_ip_spoofed': Log Event Type GTP Enduser IP Spoofed; 'log_type_crosslayer_correlation': Log Event GTP Crosslayer Correlation; 'log_type_message_not_supported': Log Event GTP Reserved Message Found; 'log_type_out_of_state': Log Event GTP Out of State Message; 'log_type_max_msg_length': Log Event GTP Message Length Exceeded Max; 'log_type_gtp_message_filtering': Log Event Type GTP Message Filtering; 'log_type_gtp_apn_filtering': Log Event Type GTP Apn Filtering; 'log_type_gtp_rat_type_filtering': Log Event GTP RAT Type Filtering; 'log_type_country_code_mismatch': Log Event GTP Country Code Mismatch; 'log_type_gtp_in_gtp_filtering': Log Event GTP in GTP Filtering; 'log_type_gtp_node_restart': Log Event GTP SGW/PGW restarted; 'log_type_gtp_seq_num_mismatch': Log Event GTP Response Sequence number Mismatch; 'log_type_gtp_rate_limit_periodic': Log Event GTP Rate Limit Periodic; 'log_type_gtp_invalid_message_length': Log Event GTP Invalid message length across layers; 'log_type_gtp_hdr_invalid_protocol_flag': Log Event GTP Protocol flag in header; 'log_type_gtp_hdr_invalid_spare_bits': Log Event GTP invalid spare bits in header; 'log_type_gtp_hdr_invalid_piggy_flag': Log Event GTP invalid piggyback flag in header; 'log_type_gtp_invalid_version': Log Event invalid GTP version; 'log_type_gtp_invalid_ports': Log Event mismatch of GTP message and ports;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging#counters1 FwLogging#counters1}
  */
  readonly counters1?: string;
}

export function fwLoggingGtpSamplingEnableToTerraform(struct?: FwLoggingGtpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function fwLoggingGtpSamplingEnableToHclTerraform(struct?: FwLoggingGtpSamplingEnable | cdktf.IResolvable): any {
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

export class FwLoggingGtpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwLoggingGtpSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FwLoggingGtpSamplingEnable | cdktf.IResolvable | undefined) {
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

export class FwLoggingGtpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : FwLoggingGtpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): FwLoggingGtpSamplingEnableOutputReference {
    return new FwLoggingGtpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwLoggingGtp {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging#uuid FwLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging#sampling_enable FwLogging#sampling_enable}
  */
  readonly samplingEnable?: FwLoggingGtpSamplingEnable[] | cdktf.IResolvable;
}

export function fwLoggingGtpToTerraform(struct?: FwLoggingGtpOutputReference | FwLoggingGtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(fwLoggingGtpSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function fwLoggingGtpToHclTerraform(struct?: FwLoggingGtpOutputReference | FwLoggingGtp): any {
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
      value: cdktf.listMapperHcl(fwLoggingGtpSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "FwLoggingGtpSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwLoggingGtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwLoggingGtp | undefined {
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

  public set internalValue(value: FwLoggingGtp | undefined) {
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
  private _samplingEnable = new FwLoggingGtpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwLoggingGtpSamplingEnable[] | cdktf.IResolvable) {
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
export interface FwLoggingSamplingEnable {
  /**
  * 'all': all; 'log_message_sent': Log Packet Sent; 'log_type_reset': Log Event Type Reset; 'log_type_deny': Log Event Type Deny; 'log_type_session_closed': Log Event Type Session Close; 'log_type_session_opened': Log Event Type Session Open; 'rule_not_logged': Firewall Rule Not Logged; 'log-dropped': Log Packets Dropped; 'tcp-session-created': TCP Session Created; 'tcp-session-deleted': TCP Session Deleted; 'udp-session-created': UDP Session Created; 'udp-session-deleted': UDP Session Deleted; 'icmp-session-deleted': ICMP Session Deleted; 'icmp-session-created': ICMP Session Created; 'icmpv6-session-deleted': ICMPV6 Session Deleted; 'icmpv6-session-created': ICMPV6 Session Created; 'other-session-deleted': Other Session Deleted; 'other-session-created': Other Session Created; 'http-request-logged': HTTP Request Logged; 'http-logging-invalid-format': HTTP Logging Invalid Format Error; 'dcmsg_permit': Dcmsg Permit; 'alg_override_permit': Alg Override Permit; 'template_error': Template Error; 'ipv4-frag-applied': IPv4 Fragmentation Applied; 'ipv4-frag-failed': IPv4 Fragmentation Failed; 'ipv6-frag-applied': IPv6 Fragmentation Applied; 'ipv6-frag-failed': IPv6 Fragmentation Failed; 'out-of-buffers': Out of Buffers; 'add-msg-failed': Add Message to Buffer Failed; 'tcp-logging-conn-established': TCP Logging Conn Established; 'tcp-logging-conn-create-failed': TCP Logging Conn Create Failed; 'tcp-logging-conn-dropped': TCP Logging Conn Dropped; 'log-message-too-long': Log message too long; 'http-out-of-order-dropped': HTTP out-of-order dropped; 'http-alloc-failed': HTTP Request Info Allocation Failed; 'sctp-session-created': SCTP Session Created; 'sctp-session-deleted': SCTP Session Deleted; 'log_type_sctp_inner_proto_filter': Log Event Type SCTP Inner Proto Filter; 'tcp-logging-port-allocated': TCP Logging Port Allocated; 'tcp-logging-port-freed': TCP Logging Port Freed; 'tcp-logging-port-allocation-failed': TCP Logging Port Allocation Failed; 'iddos-blackhole-entry-create': iDDoS IP Entry Created; 'iddos-blackhole-entry-delete': iDDoS IP Entry Deleted; 'session-limit-exceeded': Session Limit Exceeded;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging#counters1 FwLogging#counters1}
  */
  readonly counters1?: string;
}

export function fwLoggingSamplingEnableToTerraform(struct?: FwLoggingSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function fwLoggingSamplingEnableToHclTerraform(struct?: FwLoggingSamplingEnable | cdktf.IResolvable): any {
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

export class FwLoggingSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwLoggingSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FwLoggingSamplingEnable | cdktf.IResolvable | undefined) {
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

export class FwLoggingSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : FwLoggingSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): FwLoggingSamplingEnableOutputReference {
    return new FwLoggingSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging thunder_fw_logging}
*/
export class FwLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwLogging to import
  * @param importFromId The id of the existing FwLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_logging thunder_fw_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwLoggingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FwLoggingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_logging',
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
    this._cefLabel = config.cefLabel;
    this._id = config.id;
    this._name = config.name;
    this._uuid = config.uuid;
    this._gtp.internalValue = config.gtp;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cef_label - computed: false, optional: true, required: false
  private _cefLabel?: string; 
  public get cefLabel() {
    return this.getStringAttribute('cef_label');
  }
  public set cefLabel(value: string) {
    this._cefLabel = value;
  }
  public resetCefLabel() {
    this._cefLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cefLabelInput() {
    return this._cefLabel;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // gtp - computed: false, optional: true, required: false
  private _gtp = new FwLoggingGtpOutputReference(this, "gtp");
  public get gtp() {
    return this._gtp;
  }
  public putGtp(value: FwLoggingGtp) {
    this._gtp.internalValue = value;
  }
  public resetGtp() {
    this._gtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new FwLoggingSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwLoggingSamplingEnable[] | cdktf.IResolvable) {
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
      cef_label: cdktf.stringToTerraform(this._cefLabel),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      gtp: fwLoggingGtpToTerraform(this._gtp.internalValue),
      sampling_enable: cdktf.listMapper(fwLoggingSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cef_label: {
        value: cdktf.stringToHclTerraform(this._cefLabel),
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
      gtp: {
        value: fwLoggingGtpToHclTerraform(this._gtp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwLoggingGtpList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(fwLoggingSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwLoggingSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
