// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbHttp2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http2#id SlbHttp2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http2#uuid SlbHttp2#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http2#sampling_enable SlbHttp2#sampling_enable}
  */
  readonly samplingEnable?: SlbHttp2SamplingEnable[] | cdktf.IResolvable;
}
export interface SlbHttp2SamplingEnable {
  /**
  * 'all': all; 'curr_proxy': Curr Proxy Conns; 'total_proxy': Total Proxy Conns; 'connection_preface_rcvd': Connection preface rcvd; 'control_frame': Control Frame Rcvd; 'headers_frame': HEADERS Frame Rcvd; 'continuation_frame': CONTINUATION Frame Rcvd; 'rst_frame_rcvd': RST_STREAM Frame Rcvd; 'settings_frame': SETTINGS Frame Rcvd; 'window_update_frame': WINDOW_UPDATE Frame Rcvd; 'ping_frame': PING Frame Rcvd; 'goaway_frame': GOAWAY Frame Rcvd; 'priority_frame': PRIORITY Frame Rcvd; 'data_frame': DATA Frame Recvd; 'unknown_frame': Unknown Frame Recvd; 'connection_preface_sent': Connection preface sent; 'settings_frame_sent': SETTINGS Frame Sent; 'settings_ack_sent': SETTINGS ACK Frame Sent; 'empty_settings_sent': Empty SETTINGS Frame Sent; 'ping_frame_sent': PING Frame Sent; 'window_update_frame_sent': WINDOW_UPDATE Frame Sent; 'rst_frame_sent': RST_STREAM Frame Sent; 'goaway_frame_sent': GOAWAY Frame Sent; 'header_to_app': HEADER Frame to HTTP; 'data_to_app': DATA Frame to HTTP; 'protocol_error': Protocol Error; 'internal_error': Internal Error; 'proxy_alloc_error': HTTP2 Proxy alloc Error; 'split_buff_fail': Splitting Buffer Failed; 'invalid_frame_size': Invalid Frame Size Rcvd; 'error_max_invalid_stream': Max Invalid Stream Rcvd; 'data_no_stream': DATA Frame Rcvd on non-existent stream; 'flow_control_error': Flow Control Error; 'settings_timeout': Settings Timeout; 'frame_size_error': Frame Size Error; 'refused_stream': Refused Stream; 'cancel': cancel; 'compression_error': compression error; 'connect_error': connect error; 'enhance_your_calm': enhance your calm error; 'inadequate_security': inadequate security; 'http_1_1_required': HTTP1.1 Required; 'deflate_alloc_fail': deflate alloc fail; 'inflate_alloc_fail': inflate alloc fail; 'inflate_header_fail': Inflate Header Fail; 'bad_connection_preface': Bad Connection Preface; 'cant_allocate_control_frame': Cant allocate control frame; 'cant_allocate_settings_frame': Cant allocate SETTINGS frame; 'bad_frame_type_for_stream_state': Bad frame type for stream state; 'wrong_stream_state': Wrong Stream State; 'data_queue_alloc_error': Data Queue Alloc Error; 'buff_alloc_error': Buff alloc error; 'cant_allocate_rst_frame': Cant allocate RST_STREAM frame; 'cant_allocate_goaway_frame': Cant allocate GOAWAY frame; 'cant_allocate_ping_frame': Cant allocate PING frame; 'cant_allocate_stream': Cant allocate stream; 'cant_allocate_window_frame': Cant allocate WINDOW_UPDATE frame; 'header_no_stream': header no stream; 'header_padlen_gt_frame_payload': Header padlen greater than frame payload size; 'streams_gt_max_concur_streams': Streams greater than max allowed concurrent streams; 'idle_state_unexpected_frame': Unxpected frame received in idle state; 'reserved_local_state_unexpected_frame': Unexpected frame received in reserved local state; 'reserved_remote_state_unexpected_frame': Unexpected frame received in reserved remote state; 'half_closed_remote_state_unexpected_frame': Unexpected frame received in half closed remote state; 'closed_state_unexpected_frame': Unexpected frame received in closed state; 'zero_window_size_on_stream': Window Update with zero increment rcvd; 'exceeds_max_window_size_stream': Window Update with increment that results in exceeding max window; 'stream_closed': stream closed; 'continuation_before_headers': CONTINUATION frame with no headers frame; 'invalid_frame_during_headers': frame before headers were complete; 'headers_after_continuation': headers frame before CONTINUATION was complete; 'push_promise_frame_sent': Push Promise Frame Sent; 'invalid_push_promise': unexpected PUSH_PROMISE frame; 'invalid_stream_id': received invalid stream ID; 'headers_interleaved': headers interleaved on streams; 'trailers_no_end_stream': trailers not marked as end-of-stream; 'invalid_setting_value': invalid setting-frame value; 'invalid_window_update': window-update value out of range; 'frame_header_bytes_received': frame header bytes received; 'frame_header_bytes_sent': frame header bytes sent; 'control_bytes_received': HTTP/2 control frame bytes received; 'control_bytes_sent': HTTP/2 control frame bytes sent; 'header_bytes_received': HTTP/2 header bytes received; 'header_bytes_sent': HTTP/2 header bytes sent; 'data_bytes_received': HTTP/2 data bytes received; 'data_bytes_sent': HTTP/2 data bytes sent; 'total_bytes_received': HTTP/2 total bytes received; 'total_bytes_sent': HTTP/2 total bytes sent; 'peak_proxy': Peak Proxy Conns; 'control_frame_sent': Control Frame Sent; 'continuation_frame_sent': CONTINUATION Frame Sent; 'data_frame_sent': DATA Frame Sent; 'headers_frame_sent': HEADERS Frame Sent; 'priority_frame_sent': PRIORITY Frame Sent; 'settings_ack_rcvd': SETTINGS ACK Frame Rcvd; 'empty_settings_rcvd': Empty SETTINGS Frame Rcvd; 'alloc_fail_total': Alloc Fail - Total; 'err_rcvd_total': Error Rcvd - Total; 'err_sent_total': Error Rent - Total; 'err_sent_proto_err': Error Sent - PROTOCOL_ERROR; 'err_sent_internal_err': Error Sent - INTERNAL_ERROR; 'err_sent_flow_control': Error Sent - FLOW_CONTROL_ERROR; 'err_sent_setting_timeout': Error Sent - SETTINGS_TIMEOUT; 'err_sent_stream_closed': Error Sent - STREAM_CLOSED; 'err_sent_frame_size_err': Error Sent - FRAME_SIZE_ERROR; 'err_sent_refused_stream': Error Sent - REFUSED_STREAM; 'err_sent_cancel': Error Sent - CANCEL; 'err_sent_compression_err': Error Sent - COMPRESSION_ERROR; 'err_sent_connect_err': Error Sent - CONNECT_ERROR; 'err_sent_your_calm': Error Sent - ENHANCE_YOUR_CALM; 'err_sent_inadequate_security': Error Sent - INADEQUATE_SECURITY; 'err_sent_http11_required': Error Sent - HTTP_1_1_REQUIRED; 'http2_rejected': HTTP2 Rejected; 'current_stream': Current Streams; 'stream_create': Stream Create; 'stream_free': Stream Free; 'end_stream_rcvd': End Stream Recieved; 'end_stream_sent': End Stream Sent; 'transaction_limited': transaction_limited; 'frame_flood_detected': frame flood detected; 'stream_cancel_flood_detected': stream cancel flood detected;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http2#counters1 SlbHttp2#counters1}
  */
  readonly counters1?: string;
}

export function slbHttp2SamplingEnableToTerraform(struct?: SlbHttp2SamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbHttp2SamplingEnableToHclTerraform(struct?: SlbHttp2SamplingEnable | cdktf.IResolvable): any {
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

export class SlbHttp2SamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbHttp2SamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbHttp2SamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbHttp2SamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbHttp2SamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbHttp2SamplingEnableOutputReference {
    return new SlbHttp2SamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http2 thunder_slb_http2}
*/
export class SlbHttp2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_http2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbHttp2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbHttp2 to import
  * @param importFromId The id of the existing SlbHttp2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbHttp2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_http2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http2 thunder_slb_http2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbHttp2Config = {}
  */
  public constructor(scope: Construct, id: string, config: SlbHttp2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_http2',
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
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
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
  private _samplingEnable = new SlbHttp2SamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbHttp2SamplingEnable[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(slbHttp2SamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(slbHttp2SamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbHttp2SamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
