// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbHttp3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http3#id SlbHttp3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http3#uuid SlbHttp3#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http3#sampling_enable SlbHttp3#sampling_enable}
  */
  readonly samplingEnable?: SlbHttp3SamplingEnable[] | cdktf.IResolvable;
}
export interface SlbHttp3SamplingEnable {
  /**
  * 'all': all; 'client_conn_curr': Current HTTP/3 Client Connections; 'server_conn_curr': Current HTTP/3 Server Connections; 'client_conn_total': Total HTTP/3 Client Connections; 'server_conn_total': Total HTTP/3 Server Connections; 'client_conn_peak': Peak HTTP/3 Client Connections; 'server_conn_peak': Peak HTTP/3 Server Connections; 'client_request_streams_curr': Current Request Streams on client side; 'server_request_streams_curr': Current Request Streams on server side; 'client_request_streams_total': Total Request Streams on client side; 'server_request_streams_total': Total Request Streams on server side; 'client_request_push_curr': Current Push Streams on client side; 'server_request_push_curr': Current Push Streams on server side; 'client_request_push_total': Total Push Streams on client side; 'server_request_push_total': Total Push Streams on server side; 'client_request_other_curr': Current Other Streams on client side (control, decoder, encoder); 'server_request_other_curr': urrent Other Streams on server side (control, decoder, encoder); 'client_request_other_total': Total Other Streams on client side (control, decoder, encoder); 'server_request_other_total': Total Other Streams on server side (control, decoder, encoder); 'client_frame_type_headers_rcvd': HEADERS Frame received on client side; 'client_frame_type_headers_sent': HEADERS Frame sent on client side; 'client_frame_type_data_rcvd': DATA Frame received on client side; 'client_frame_type_data_sent': DATA Frame sent on client side; 'client_frame_type_cancel_push_rcvd': CANCEL PUSH Frame received on client side; 'client_frame_type_cancel_push_sent': CANCEL PUSH Frame sent on client side; 'client_frame_type_settings_rcvd': SETTINGS Frame received on client side; 'client_frame_type_settings_sent': SETTINGS Frame sent on client side; 'client_frame_type_push_promise_rcvd': PUSH PROMISE Frame received on client side; 'client_frame_type_push_promise_sent': PUSH PROMISE Frame sent on client side; 'client_frame_type_goaway_rcvd': GOAWAY Frame received on client side; 'client_frame_type_goaway_sent': GOAWAY Frame sent on client side; 'client_frame_type_max_push_id_rcvd': MAX PUSH ID Frame received on client side; 'client_frame_type_max_push_id_sent': MAX PUSH ID Frame sent on client side; 'client_frame_type_unknown_rcvd': Unknown Frame received on client side; 'client_header_frames_to_app': HEADER Frames passed to HTTP layer on client side; 'client_data_frames_to_app': DATA Frames passed to HTTP layer on client side; 'client_header_bytes_rcvd': Bytes received in HEADER frames on client side; 'client_header_bytes_sent': Bytes sent in HEADER frames on client side; 'client_data_bytes_rcvd': Bytes received in DATA frames on client side; 'client_data_bytes_sent': Bytes sent in DATA frames on client side; 'client_other_frame_bytes_rcvd': Bytes received in other frames (SETTINGS, GOAWAY, PUSH_PROMISE etc) on client side; 'client_other_frame_bytes_sent': Bytes sent in other frames (SETTINGS, GOAWAY, PUSH_PROMISE etc) on client side; 'client_heading_bytes_rcvd': Bytes received in HEADERS/DATA frame/stream heading on client side; 'client_heading_bytes_sent': Bytes sent in HEADERS/DATA frame/stream heading on client side; 'client_total_bytes_rcvd': Total Bytes received on client side; 'client_total_bytes_sent': Total Bytes sent on client side; 'server_frame_type_headers_rcvd': HEADERS Frame received on server side; 'server_frame_type_headers_sent': HEADERS Frame sent on server side; 'server_frame_type_data_rcvd': DATA Frame received on server side; 'server_frame_type_data_sent': DATA Frame sent on server side; 'server_frame_type_cancel_push_rcvd': CANCEL PUSH Frame received on server side; 'server_frame_type_cancel_push_sent': CANCEL PUSH Frame sent on server side; 'server_frame_type_settings_rcvd': SETTINGS Frame received on server side; 'server_frame_type_settings_sent': SETTINGS Frame sent on server side; 'server_frame_type_push_promise_rcvd': PUSH PROMISE Frame received on server side; 'server_frame_type_push_promise_sent': PUSH PROMISE Frame sent on server side; 'server_frame_type_goaway_rcvd': GOAWAY Frame received on server side; 'server_frame_type_goaway_sent': GOAWAY Frame sent on server side; 'server_frame_type_max_push_id_rcvd': MAX PUSH ID Frame received on server side; 'server_frame_type_max_push_id_sent': MAX PUSH ID Frame sent on server side; 'server_frame_type_unknown_rcvd': Unknown Frame received on server side; 'server_header_frames_to_app': HEADER Frames passed to HTTP layer on server side; 'server_data_frames_to_app': DATA Frames passed to HTTP layer on server side; 'server_header_bytes_rcvd': Bytes received in HEADER frames on server side; 'server_header_bytes_sent': Bytes sent in HEADER frames on server side; 'server_data_bytes_rcvd': Bytes received in DATA frames on server side; 'server_data_bytes_sent': Bytes sent in DATA frames on server side; 'server_other_frame_bytes_rcvd': Bytes received in other frames (SETTINGS, GOAWAY, PUSH_PROMISE etc) on server side; 'server_other_frame_bytes_sent': Bytes sent in other frames (SETTINGS, GOAWAY, PUSH_PROMISE etc) on server side; 'server_heading_bytes_rcvd': Bytes received in HEADERS/DATA frame/stream heading on server side; 'server_heading_bytes_sent': Bytes sent in HEADERS/DATA frame/stream heading on server side; 'server_total_bytes_rcvd': Total Bytes received on server side; 'server_total_bytes_sent': Total Bytes sent on server side; 'invalid_argument': Invalid Argument; 'invalid_state': Invalid State; 'wouldblock': Wouldblock; 'stream_in_use': Stream In Use; 'push_id_blocked': Push Id Blocked; 'malformed_http_header': Malformed Http Header; 'remove_http_header': Remove Http Header; 'malformed_http_messaging': Malformed Http Messaging; 'too_late': Too Late; 'qpack_fatal': Qpack Fatal; 'qpack_header_too_large': Qpack Header Too Large; 'ignore_stream': Ignore Stream; 'stream_not_found': Stream Not Found; 'ignore_push_promise': Ignore Push Promise; 'qpack_decompression_failed': Qpack Decompression Failed; 'qpack_encoder_stream_error': Qpack Encoder Stream Error; 'qpack_decoder_stream_error': Qpack Decoder Stream Error; 'h3_frame_unexpected': H3 Frame Unexpected; 'h3_frame_error': H3 Frame Error; 'h3_missing_settings': H3 Missing Settings; 'h3_internal_error': H3 Internal Error; 'h3_closed_critical_stream': H3 Closed Critical Stream; 'h3_general_protocol_error': H3 General Protocol Error; 'h3_id_error': H3 Id Error; 'h3_settings_error': H3 Settings Error; 'h3_stream_creation_error': H3 Stream Creation Error; 'fatal': Fatal Error; 'conn_alloc_error': HTTP/3 Connection Allocation Error; 'alloc_fail_total': Memory Allocation Failures; 'http3_rejected': HTTP3 Rejected;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http3#counters1 SlbHttp3#counters1}
  */
  readonly counters1?: string;
}

export function slbHttp3SamplingEnableToTerraform(struct?: SlbHttp3SamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbHttp3SamplingEnableToHclTerraform(struct?: SlbHttp3SamplingEnable | cdktf.IResolvable): any {
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

export class SlbHttp3SamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbHttp3SamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbHttp3SamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbHttp3SamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbHttp3SamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbHttp3SamplingEnableOutputReference {
    return new SlbHttp3SamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http3 thunder_slb_http3}
*/
export class SlbHttp3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_http3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbHttp3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbHttp3 to import
  * @param importFromId The id of the existing SlbHttp3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbHttp3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_http3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_http3 thunder_slb_http3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbHttp3Config = {}
  */
  public constructor(scope: Construct, id: string, config: SlbHttp3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_http3',
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
  private _samplingEnable = new SlbHttp3SamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbHttp3SamplingEnable[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(slbHttp3SamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(slbHttp3SamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbHttp3SamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
