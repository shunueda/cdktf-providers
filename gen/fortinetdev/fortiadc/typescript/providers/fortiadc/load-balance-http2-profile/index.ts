// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceHttp2ProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#backend_concurrent_stream LoadBalanceHttp2Profile#backend_concurrent_stream}
  */
  readonly backendConcurrentStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#backend_http2 LoadBalanceHttp2Profile#backend_http2}
  */
  readonly backendHttp2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#backend_max_receive_window LoadBalanceHttp2Profile#backend_max_receive_window}
  */
  readonly backendMaxReceiveWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#backend_multiplex_mode LoadBalanceHttp2Profile#backend_multiplex_mode}
  */
  readonly backendMultiplexMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#backend_proto_mode_http LoadBalanceHttp2Profile#backend_proto_mode_http}
  */
  readonly backendProtoModeHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#backend_proto_mode_https LoadBalanceHttp2Profile#backend_proto_mode_https}
  */
  readonly backendProtoModeHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#header_table_size LoadBalanceHttp2Profile#header_table_size}
  */
  readonly headerTableSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#id LoadBalanceHttp2Profile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#max_concurrent_stream LoadBalanceHttp2Profile#max_concurrent_stream}
  */
  readonly maxConcurrentStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#max_frame_size LoadBalanceHttp2Profile#max_frame_size}
  */
  readonly maxFrameSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#max_header_list_size LoadBalanceHttp2Profile#max_header_list_size}
  */
  readonly maxHeaderListSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#max_receive_window LoadBalanceHttp2Profile#max_receive_window}
  */
  readonly maxReceiveWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#mkey LoadBalanceHttp2Profile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#priority_mode LoadBalanceHttp2Profile#priority_mode}
  */
  readonly priorityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#ssl_constraint LoadBalanceHttp2Profile#ssl_constraint}
  */
  readonly sslConstraint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#upgrade_mode LoadBalanceHttp2Profile#upgrade_mode}
  */
  readonly upgradeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#vdom LoadBalanceHttp2Profile#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile fortiadc_load_balance_http2_profile}
*/
export class LoadBalanceHttp2Profile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_http2_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceHttp2Profile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceHttp2Profile to import
  * @param importFromId The id of the existing LoadBalanceHttp2Profile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceHttp2Profile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_http2_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_http2_profile fortiadc_load_balance_http2_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceHttp2ProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceHttp2ProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_http2_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backendConcurrentStream = config.backendConcurrentStream;
    this._backendHttp2 = config.backendHttp2;
    this._backendMaxReceiveWindow = config.backendMaxReceiveWindow;
    this._backendMultiplexMode = config.backendMultiplexMode;
    this._backendProtoModeHttp = config.backendProtoModeHttp;
    this._backendProtoModeHttps = config.backendProtoModeHttps;
    this._headerTableSize = config.headerTableSize;
    this._id = config.id;
    this._maxConcurrentStream = config.maxConcurrentStream;
    this._maxFrameSize = config.maxFrameSize;
    this._maxHeaderListSize = config.maxHeaderListSize;
    this._maxReceiveWindow = config.maxReceiveWindow;
    this._mkey = config.mkey;
    this._priorityMode = config.priorityMode;
    this._sslConstraint = config.sslConstraint;
    this._upgradeMode = config.upgradeMode;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_concurrent_stream - computed: true, optional: true, required: false
  private _backendConcurrentStream?: string; 
  public get backendConcurrentStream() {
    return this.getStringAttribute('backend_concurrent_stream');
  }
  public set backendConcurrentStream(value: string) {
    this._backendConcurrentStream = value;
  }
  public resetBackendConcurrentStream() {
    this._backendConcurrentStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendConcurrentStreamInput() {
    return this._backendConcurrentStream;
  }

  // backend_http2 - computed: true, optional: true, required: false
  private _backendHttp2?: string; 
  public get backendHttp2() {
    return this.getStringAttribute('backend_http2');
  }
  public set backendHttp2(value: string) {
    this._backendHttp2 = value;
  }
  public resetBackendHttp2() {
    this._backendHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendHttp2Input() {
    return this._backendHttp2;
  }

  // backend_max_receive_window - computed: true, optional: true, required: false
  private _backendMaxReceiveWindow?: string; 
  public get backendMaxReceiveWindow() {
    return this.getStringAttribute('backend_max_receive_window');
  }
  public set backendMaxReceiveWindow(value: string) {
    this._backendMaxReceiveWindow = value;
  }
  public resetBackendMaxReceiveWindow() {
    this._backendMaxReceiveWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendMaxReceiveWindowInput() {
    return this._backendMaxReceiveWindow;
  }

  // backend_multiplex_mode - computed: true, optional: true, required: false
  private _backendMultiplexMode?: string; 
  public get backendMultiplexMode() {
    return this.getStringAttribute('backend_multiplex_mode');
  }
  public set backendMultiplexMode(value: string) {
    this._backendMultiplexMode = value;
  }
  public resetBackendMultiplexMode() {
    this._backendMultiplexMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendMultiplexModeInput() {
    return this._backendMultiplexMode;
  }

  // backend_proto_mode_http - computed: true, optional: true, required: false
  private _backendProtoModeHttp?: string; 
  public get backendProtoModeHttp() {
    return this.getStringAttribute('backend_proto_mode_http');
  }
  public set backendProtoModeHttp(value: string) {
    this._backendProtoModeHttp = value;
  }
  public resetBackendProtoModeHttp() {
    this._backendProtoModeHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendProtoModeHttpInput() {
    return this._backendProtoModeHttp;
  }

  // backend_proto_mode_https - computed: true, optional: true, required: false
  private _backendProtoModeHttps?: string; 
  public get backendProtoModeHttps() {
    return this.getStringAttribute('backend_proto_mode_https');
  }
  public set backendProtoModeHttps(value: string) {
    this._backendProtoModeHttps = value;
  }
  public resetBackendProtoModeHttps() {
    this._backendProtoModeHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendProtoModeHttpsInput() {
    return this._backendProtoModeHttps;
  }

  // header_table_size - computed: true, optional: true, required: false
  private _headerTableSize?: string; 
  public get headerTableSize() {
    return this.getStringAttribute('header_table_size');
  }
  public set headerTableSize(value: string) {
    this._headerTableSize = value;
  }
  public resetHeaderTableSize() {
    this._headerTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTableSizeInput() {
    return this._headerTableSize;
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

  // max_concurrent_stream - computed: true, optional: true, required: false
  private _maxConcurrentStream?: string; 
  public get maxConcurrentStream() {
    return this.getStringAttribute('max_concurrent_stream');
  }
  public set maxConcurrentStream(value: string) {
    this._maxConcurrentStream = value;
  }
  public resetMaxConcurrentStream() {
    this._maxConcurrentStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamInput() {
    return this._maxConcurrentStream;
  }

  // max_frame_size - computed: true, optional: true, required: false
  private _maxFrameSize?: string; 
  public get maxFrameSize() {
    return this.getStringAttribute('max_frame_size');
  }
  public set maxFrameSize(value: string) {
    this._maxFrameSize = value;
  }
  public resetMaxFrameSize() {
    this._maxFrameSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFrameSizeInput() {
    return this._maxFrameSize;
  }

  // max_header_list_size - computed: true, optional: true, required: false
  private _maxHeaderListSize?: string; 
  public get maxHeaderListSize() {
    return this.getStringAttribute('max_header_list_size');
  }
  public set maxHeaderListSize(value: string) {
    this._maxHeaderListSize = value;
  }
  public resetMaxHeaderListSize() {
    this._maxHeaderListSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderListSizeInput() {
    return this._maxHeaderListSize;
  }

  // max_receive_window - computed: true, optional: true, required: false
  private _maxReceiveWindow?: string; 
  public get maxReceiveWindow() {
    return this.getStringAttribute('max_receive_window');
  }
  public set maxReceiveWindow(value: string) {
    this._maxReceiveWindow = value;
  }
  public resetMaxReceiveWindow() {
    this._maxReceiveWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReceiveWindowInput() {
    return this._maxReceiveWindow;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // priority_mode - computed: true, optional: true, required: false
  private _priorityMode?: string; 
  public get priorityMode() {
    return this.getStringAttribute('priority_mode');
  }
  public set priorityMode(value: string) {
    this._priorityMode = value;
  }
  public resetPriorityMode() {
    this._priorityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityModeInput() {
    return this._priorityMode;
  }

  // ssl_constraint - computed: true, optional: true, required: false
  private _sslConstraint?: string; 
  public get sslConstraint() {
    return this.getStringAttribute('ssl_constraint');
  }
  public set sslConstraint(value: string) {
    this._sslConstraint = value;
  }
  public resetSslConstraint() {
    this._sslConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConstraintInput() {
    return this._sslConstraint;
  }

  // upgrade_mode - computed: true, optional: true, required: false
  private _upgradeMode?: string; 
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string) {
    this._upgradeMode = value;
  }
  public resetUpgradeMode() {
    this._upgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_concurrent_stream: cdktf.stringToTerraform(this._backendConcurrentStream),
      backend_http2: cdktf.stringToTerraform(this._backendHttp2),
      backend_max_receive_window: cdktf.stringToTerraform(this._backendMaxReceiveWindow),
      backend_multiplex_mode: cdktf.stringToTerraform(this._backendMultiplexMode),
      backend_proto_mode_http: cdktf.stringToTerraform(this._backendProtoModeHttp),
      backend_proto_mode_https: cdktf.stringToTerraform(this._backendProtoModeHttps),
      header_table_size: cdktf.stringToTerraform(this._headerTableSize),
      id: cdktf.stringToTerraform(this._id),
      max_concurrent_stream: cdktf.stringToTerraform(this._maxConcurrentStream),
      max_frame_size: cdktf.stringToTerraform(this._maxFrameSize),
      max_header_list_size: cdktf.stringToTerraform(this._maxHeaderListSize),
      max_receive_window: cdktf.stringToTerraform(this._maxReceiveWindow),
      mkey: cdktf.stringToTerraform(this._mkey),
      priority_mode: cdktf.stringToTerraform(this._priorityMode),
      ssl_constraint: cdktf.stringToTerraform(this._sslConstraint),
      upgrade_mode: cdktf.stringToTerraform(this._upgradeMode),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_concurrent_stream: {
        value: cdktf.stringToHclTerraform(this._backendConcurrentStream),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_http2: {
        value: cdktf.stringToHclTerraform(this._backendHttp2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_max_receive_window: {
        value: cdktf.stringToHclTerraform(this._backendMaxReceiveWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_multiplex_mode: {
        value: cdktf.stringToHclTerraform(this._backendMultiplexMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_proto_mode_http: {
        value: cdktf.stringToHclTerraform(this._backendProtoModeHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_proto_mode_https: {
        value: cdktf.stringToHclTerraform(this._backendProtoModeHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_table_size: {
        value: cdktf.stringToHclTerraform(this._headerTableSize),
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
      max_concurrent_stream: {
        value: cdktf.stringToHclTerraform(this._maxConcurrentStream),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_frame_size: {
        value: cdktf.stringToHclTerraform(this._maxFrameSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_header_list_size: {
        value: cdktf.stringToHclTerraform(this._maxHeaderListSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_receive_window: {
        value: cdktf.stringToHclTerraform(this._maxReceiveWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_mode: {
        value: cdktf.stringToHclTerraform(this._priorityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_constraint: {
        value: cdktf.stringToHclTerraform(this._sslConstraint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_mode: {
        value: cdktf.stringToHclTerraform(this._upgradeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
