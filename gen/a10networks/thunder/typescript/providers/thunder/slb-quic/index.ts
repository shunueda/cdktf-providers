// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_quic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbQuicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_quic#id SlbQuic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_quic#uuid SlbQuic#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_quic#sampling_enable SlbQuic#sampling_enable}
  */
  readonly samplingEnable?: SlbQuicSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbQuicSamplingEnable {
  /**
  * 'all': all; 'client_conn_attempted': Client connection attempted; 'client_conn_handshake': Client connection handshake; 'client_conn_created': Client connection created; 'client_conn_local_closed': Client connection local closed; 'client_conn_remote_closed': Client connection remote closed; 'client_conn_failed': Client connection failed; 'server_conn_attempted': Server connection attempted; 'server_conn_handshake': Server connection handshake; 'server_conn_created': Server connection created; 'server_conn_local_closed': Server connection local closed; 'server_conn_remote_closed': Server connection remote closed; 'server_conn_failed': Server connection failed; 'q_conn_created': Q connection created; 'q_conn_freed': Q connection freed; 'local_bi_stream_current': Current local bi-stream; 'remote_bi_stream_current': Current remote bi-stream; 'local_bi_stream_created': Local bi-stream created; 'remote_bi_stream_created': Remote bi-stream created; 'local_bi_stream_closed': Local bi-stream closed; 'remote_bi_stream_closed': Remote bi-stream closed; 'local_uni_stream_current': Current local uni-stream; 'remote_uni_stream_current': Current remote uni-stream; 'local_uni_stream_created': Local uni-stream created; 'remote_uni_stream_created': Remote uni-stream created; 'local_uni_stream_closed': Local uni-stream closed; 'remote_uni_stream_closed': Remote uni-stream closed; 'stream_error': Stream error; 'stream_fail_to_insert': Stream fail to insert; 'padding_frame_rx': padding frame receive; 'padding_frame_tx': padding frame send; 'ping_frame_rx': ping frame receive; 'ping_frame_tx': ping frame send; 'ack_frame_rx': ack frame receive; 'ack_frame_tx': ack frame send; 'ack_ecn_frame_rx': ack enc frame receive; 'ack_ecn_frame_tx': ack enc frame send; 'stream_rst_frame_rx': stream reset frame receive; 'stream_rst_frame_tx': stream reset frame send; 'stream_stop_frame_rx': stream stop frame receive; 'stream_stop_frame_tx': stream stop frame send; 'crypto_frame_rx': crypto frame receive; 'crypto_frame_tx': crypto frame send; 'new_token_frame_rx': new token frame receive; 'new_token_frame_tx': new token frame send; 'stream_frame_rx': stream frame receive; 'stream_frame_tx': stream frame send; 'stream_09_frame_rx': stream 09 frame receive; 'stream_09_frame_tx': stream 09 frame send; 'stream_0a_frame_rx': stream 0a frame receive; 'stream_0a_frame_tx': stream 0a frame send; 'stream_0b_frame_rx': stream 0b frame receive; 'stream_0b_frame_tx': stream 0b frame send; 'stream_0c_frame_rx': stream 0c frame receive; 'stream_0c_frame_tx': stream 0c frame send; 'stream_0d_frame_rx': stream 0d frame receive; 'stream_0d_frame_tx': stream 0d frame send; 'stream_0e_frame_rx': stream 0e frame receive; 'stream_0e_frame_tx': stream 0e frame send; 'stream_0f_frame_rx': stream 0f frame receive; 'stream_0f_frame_tx': stream 0f frame send; 'max_data_frame_rx': max data frame receive; 'max_data_frame_tx': max data frame send; 'max_stream_data_frame_rx': max stream data frame receive; 'max_stream_data_frame_tx': max stream data frame send; 'max_bi_stream_frame_rx': max bi stream frame receive; 'max_bi_stream_frame_tx': max bi stream frame send; 'max_uni_stream_frame_rx': max uni stream frame receive; 'max_uni_stream_frame_tx': max uni stream frame send; 'data_blocked_frame_rx': data blocked frame receive; 'data_blocked_frame_tx': data blocked frame send; 'stream_data_blocked_frame_rx': stream data blocked frame receive; 'stream_data_blocked_frame_tx': stream data blocked frame send; 'bi_stream_data_blocked_frame_rx': bi stream data blocked frame receive; 'bi_stream_data_blocked_frame_tx': bi stream data blocked frame send; 'uni_stream_data_blocked_frame_rx': uni stream data blocked frame receive; 'uni_stream_data_blocked_frame_tx': uni stream data blocked frame send; 'new_conn_id_frame_rx': new conn id frame receive; 'new_conn_id_frame_tx': new conn id frame send; 'retire_conn_id_frame_rx': retire conn id frame receive; 'retire_conn_id_frame_tx': retire conn id frame send; 'path_challenge_frame_rx': path challenge frame receive; 'path_challenge_frame_tx': path challenge frame send; 'path_response_frame_rx': path response frame receive; 'path_response_frame_tx': path response frame send; 'conn_close_frame_rx': conn close frame receive; 'conn_close_frame_tx': conn close frame send; 'app_conn_close_frame_rx': app conn close frame receive; 'app_conn_close_frame_tx': app conn close frame send; 'handshake_done_frame_rx': handshake done frame receive; 'handshake_done_frame_tx': handshake done frame send; 'unknown_frame': Unknown frame; 'stream_fin_receive': Stream FIN receive; 'stream_fin_up': Stream FIN up; 'stream_fin_down': Stream FIN down; 'stream_fin_send': Stream FIN send; 'stream_congest': Stream congest; 'stream_open': Stream open; 'stream_pause_data': Stream pause data; 'stream_resume_data': Stream resume data; 'stream_not_send': Stream not send; 'stream_stop_send': Stream stop send; 'stream_created': Stream created; 'stream_freed': Stream freed; 'INITIAL_rx': INITIAL receive; 'INITIAL_tx': INITIAL send; 'RTT_0_rx': RTT_0 receive; 'RTT_0_tx': RTT_0 send; 'HANDSHAKE_rx': HANDSHAKE receive; 'HANDSHAKE_tx': HANDSHAKE send; 'RETRY_rx': RETRY receive; 'RETRY_tx': RETRY send; 'VER_rx': Version receive; 'VER_tx': Version send; 'RTT_updated': RTT updated; 'Needs_ack': Needs ACK; 'Delayed_ack': Delayed ACK; 'Packet_rx': Packet receive; 'Packet_tx': Packet send; 'Packet_tx_failed': Packet send failed; 'Congest_wnd_inc': Congestion window increase; 'Congest_wnd_dec': Congestion window decrease; 'No_congest_wnd': No congestion window; 'Burst_limited': Burst limited; 'Packet_loop_limited': Packet loop limited; 'Receive_wnd_limited': Receive window limited; 'Parse_error': Parse error; 'Error_close': Conn closed of error; 'Unknown_scid': Unknown scid; 'Dcid_mismatch': Dcid mismatch; 'Packet_too_short': Packet_too_short; 'Invalid_version': Invalid version; 'Invalid_Packet': Invalid packet; 'Invalid_conn_match': Invalid conn match; 'Invalid_session_packet': Invalid session packet; 'Stateless_reset': Stateless resert; 'Packet_lost': Packet lost; 'Packet_drop': Packet drop; 'Packet_retransmit': Packet retransmit; 'Packet_out_of_order': Packet out of order; 'Quic_packet_drop': Quic packet drop; 'Encode_error': Encode error; 'Decode_failed': Decode failed; 'Decode_stream_error': Decode stream error; 'Exceed_flow_control': Exceed flow control; 'Crypto_stream_not_found': Crypto stream not found; 'Exceed_max_stream_id': Exceed_max_stream_id; 'Stream_id_mismatch': Stream_id_mismatch; 'Ack_delay_huge': Ack_delay_huge; 'Ack_rng_huge_1': Ack_rng_huge_1; 'Ack_rng_huge_2': Ack_rng_huge_2; 'Ack_rng_huge_3': Ack_rng_huge_3; 'Too_noisy_fuzzing': Too_noisy_fuzzing; 'Max_stream_too_big': Max_stream_too_big; 'Stream_blocked': Stream_blocked; 'New_conn_id_len_zero': New_conn_id_len_zero; 'New_conn_id_len_non_zero': New_conn_id_len_non_zero; 'Illegal_stream_len': Illegal_stream_len; 'Illegal_reason_len': Illegal_reason_len; 'Illegal_seq': Illegal_seq; 'Illegal_rpt': Illegal_rpt; 'Illegal_len': Illegal_len; 'Illegal_token_len': Illegal_token_len; 'Cannot_insert_cid': Cannot_insert_cid; 'Cannot_insert_srt': Cannot_insert_srt; 'Cannot_retire_cid': Cannot_retire_cid; 'No_next_scid': No_next_scid; 'Token_len_too_long': Token_len_too_long; 'Server_receive_new_token': Server_receive_new_token; 'Zero_frame_packet': Zero_frame_packet;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_quic#counters1 SlbQuic#counters1}
  */
  readonly counters1?: string;
  /**
  * 'Err_frame_dec1': Err_frame_dec1; 'Err_frame_dec': Err_frame_dec; 'Err_frame_decb': Err_frame_decb; 'Err_frame_final_size': Err_frame_final_size; 'Err_flow_control': Err_flow_control; 'Err_protocol_violation': Err_protocol_violation; 'Server_rx_handshake_done': Server_rx_handshake_done; 'Pkt_acked_failed': Pkt_acked_failed; 'Pn_insert_failed': Pn insert failed; 'Pn_delete_failed': Pn delete failed; 'Acked_packet_freed': Acked packet freed; 'Tx_buffer_enq': Tx buffer enqueued; 'Tx_buffer_deq': Tx buffer dequeued; 'App_buffer_enq': App buffer enqueued; 'App_buffer_deq': App buffer dequeued; 'App_buffer_queue_full': App buffer queue full; 'Iov_buffer_bind': Iov buffer bind; 'Iov_buffer_unbind': Iov buffer unbind; 'Iov_buffer_dup': Iov buffer dup; 'Iov_alloc_len': Iov alloc len; 'Iov_IO': Iov IO; 'Iov_System': Iov System; 'No_tx_queue': No tx queue; 'wsocket_created': wsocket created; 'wsocket_closed': wsocket closed; 'a10_socket_created': a10 socket created; 'a10_socket_closed': a10 socket closed; 'No_a10_socket': no a10 socket; 'No_other_side_socket': no other side socket; 'No_w_engine': no w engine; 'No_w_socket': no w socket; 'on_ld_timeout': lost detection timeout; 'idle_alarm': conn idle timeout; 'ack_alarm': ack timeout; 'close_alarm': close timeout; 'delay_alarm': delay timeout; 'quic_malloc': QUIC malloc; 'quic_free': QUIC free; 'quic_malloc_failure': QUIC malloc failure; 'quick_malloc_failure': quick malloc failure; 'quic_lb': QUIC LB; 'cid_zero': CID Zero; 'cid_cpu_hash': CID CPU Hash; 'invalid_cid_sig': Invalid CID Signature; 'key_update_rx': QUIC TLS key update received; 'key_update_tx': QUIC TLS key update sent;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_quic#counters2 SlbQuic#counters2}
  */
  readonly counters2?: string;
}

export function slbQuicSamplingEnableToTerraform(struct?: SlbQuicSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
  }
}


export function slbQuicSamplingEnableToHclTerraform(struct?: SlbQuicSamplingEnable | cdktf.IResolvable): any {
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

export class SlbQuicSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbQuicSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbQuicSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbQuicSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbQuicSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbQuicSamplingEnableOutputReference {
    return new SlbQuicSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_quic thunder_slb_quic}
*/
export class SlbQuic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_quic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbQuic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbQuic to import
  * @param importFromId The id of the existing SlbQuic that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_quic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbQuic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_quic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_quic thunder_slb_quic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbQuicConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbQuicConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_quic',
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
  private _samplingEnable = new SlbQuicSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbQuicSamplingEnable[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(slbQuicSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(slbQuicSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbQuicSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
