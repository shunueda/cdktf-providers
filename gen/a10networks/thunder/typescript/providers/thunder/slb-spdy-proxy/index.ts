// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_spdy_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbSpdyProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_spdy_proxy#id SlbSpdyProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_spdy_proxy#uuid SlbSpdyProxy#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_spdy_proxy#sampling_enable SlbSpdyProxy#sampling_enable}
  */
  readonly samplingEnable?: SlbSpdyProxySamplingEnable[] | cdktf.IResolvable;
}
export interface SlbSpdyProxySamplingEnable {
  /**
  * 'all': all; 'curr_proxy': Curr Proxy Conns; 'total_proxy': Total Proxy Conns; 'curr_http_proxy': Curr HTTP Proxy Conns; 'total_http_proxy': Total HTTP Proxy Conns; 'total_v2_proxy': Version 2 Streams; 'total_v3_proxy': Version 3 Streams; 'curr_stream': Curr Streams; 'total_stream': Total Streams; 'total_stream_succ': Streams(succ); 'client_rst': client_rst; 'server_rst': Server RST sent; 'client_goaway': client_goaway; 'server_goaway': Server GOAWAY sent; 'tcp_err': TCP sock error; 'inflate_ctx': Inflate context; 'deflate_ctx': Deflate context; 'ping_sent': PING sent; 'stream_not_found': STREAM not found; 'client_fin': Client FIN; 'server_fin': Server FIN; 'stream_close': Stream close; 'stream_err': Stream err; 'session_err': Session err; 'control_frame': Control frame received; 'syn_frame': SYN stream frame received; 'syn_reply_frame': SYN reply frame received; 'headers_frame': Headers frame received; 'settings_frame': Setting frame received; 'window_frame': Window update frame received; 'ping_frame': Ping frame received; 'data_frame': Data frame received; 'data_no_stream': Data no stream found; 'data_no_stream_no_goaway': Data no stream and no goaway; 'data_no_stream_goaway_close': Data no stream and no goaway and close session; 'est_cb_no_tuple': Est callback no tuple; 'data_cb_no_tuple': Data callback no tuple; 'ctx_alloc_fail': Context alloc fail; 'fin_close_session': FIN close session; 'server_rst_close_stream': Server RST close stream; 'stream_found': Stream found; 'close_stream_session_not_found': Close stream session not found; 'close_stream_stream_not_found': Close stream stream not found; 'close_stream_already_closed': Closing closed stream; 'close_stream_session_close': Stream close session close; 'close_session_already_closed': Closing closed session; 'max_concurrent_stream_limit': Max concurrent stream limit; 'stream_alloc_fail': Stream alloc fail; 'http_conn_alloc_fail': HTTP connection allocation fail; 'request_header_alloc_fail': Request/Header allocation fail; 'name_value_total_len_ex': Name value total length exceeded; 'name_value_zero_len': Name value zero name length; 'name_value_invalid_http_ver': Name value invalid http version; 'name_value_connection': Name value connection; 'name_value_keepalive': Name value keep alive; 'name_value_proxy_conn': Name value proxy-connection; 'name_value_trasnfer_encod': Name value transfer encoding; 'name_value_no_must_have': Name value no must have; 'decompress_fail': Decompress fail; 'syn_after_goaway': SYN after goaway; 'stream_lt_prev': Stream id less than previous; 'syn_stream_exist_or_even': Stream already exists; 'syn_unidir': Unidirectional SYN; 'syn_reply_alr_rcvd': SYN reply already received; 'client_rst_nostream': Close RST stream not found; 'window_no_stream': Window update no stream found; 'invalid_window_size': Invalid window size; 'unknown_control_frame': Unknown control frame; 'data_on_closed_stream': Data on closed stream; 'invalid_frame_size': Invalid frame size; 'invalid_version': Invalid version; 'header_after_session_close': Header after session close; 'compress_ctx_alloc_fail': Compression context allocation fail; 'header_compress_fail': Header compress fail; 'http_data_session_close': HTTP data session close; 'http_data_stream_not_found': HTTP data stream not found; 'close_stream_not_http_proxy': Close Stream not http-proxy; 'session_needs_requeue': Session needs requeue; 'new_stream_session_del': New Stream after Session delete; 'fin_stream_closed': HTTP FIN stream already closed; 'http_close_stream_closed': HTTP close stream already closed; 'http_err_stream_closed': HTTP error stream already closed; 'http_hdr_stream_close': HTTP header stream already closed; 'http_data_stream_close': HTTP data stream already closed; 'session_close': Session close;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_spdy_proxy#counters1 SlbSpdyProxy#counters1}
  */
  readonly counters1?: string;
}

export function slbSpdyProxySamplingEnableToTerraform(struct?: SlbSpdyProxySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbSpdyProxySamplingEnableToHclTerraform(struct?: SlbSpdyProxySamplingEnable | cdktf.IResolvable): any {
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

export class SlbSpdyProxySamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbSpdyProxySamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbSpdyProxySamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbSpdyProxySamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbSpdyProxySamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbSpdyProxySamplingEnableOutputReference {
    return new SlbSpdyProxySamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_spdy_proxy thunder_slb_spdy_proxy}
*/
export class SlbSpdyProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_spdy_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbSpdyProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbSpdyProxy to import
  * @param importFromId The id of the existing SlbSpdyProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_spdy_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbSpdyProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_spdy_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_spdy_proxy thunder_slb_spdy_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbSpdyProxyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbSpdyProxyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_spdy_proxy',
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
  private _samplingEnable = new SlbSpdyProxySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbSpdyProxySamplingEnable[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(slbSpdyProxySamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(slbSpdyProxySamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbSpdyProxySamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
