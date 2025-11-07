// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmProfileHttp2Config extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to enable all HTTP/2 modes, or only enable the Selected Modes listed in the Enabled column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#activation_modes LtmProfileHttp2#activation_modes}
  */
  readonly activationModes?: string[];
  /**
  * Specifies the number of outstanding concurrent requests that are allowed on a single HTTP/2 connection. The default is 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#concurrent_streams_per_connection LtmProfileHttp2#concurrent_streams_per_connection}
  */
  readonly concurrentStreamsPerConnection?: number;
  /**
  * Specifies the number of seconds that an HTTP/2 connection is idly left open before being shut down. The default is 300 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#connection_idle_timeout LtmProfileHttp2#connection_idle_timeout}
  */
  readonly connectionIdleTimeout?: number;
  /**
  * Name of Parent Http2 profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#defaults_from LtmProfileHttp2#defaults_from}
  */
  readonly defaultsFrom?: string;
  /**
  * Enable or disable enforcement of TLS requirements,Default:enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#enforce_tls_requirements LtmProfileHttp2#enforce_tls_requirements}
  */
  readonly enforceTlsRequirements?: string;
  /**
  * The size of the data frames, in bytes, that the HTTP/2 protocol sends to the client. Default: 2048
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#frame_size LtmProfileHttp2#frame_size}
  */
  readonly frameSize?: number;
  /**
  * The size of the header table, in KB, for the HTTP headers that the HTTP/2 protocol compresses to save bandwidth.Default: 4096
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#header_table_size LtmProfileHttp2#header_table_size}
  */
  readonly headerTableSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#id LtmProfileHttp2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable to include content-length in HTTP/2 headers,Default : disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#include_content_length LtmProfileHttp2#include_content_length}
  */
  readonly includeContentLength?: string;
  /**
  * Specifies whether an HTTP header indicating the use of HTTP/2 should be inserted into the request that goes to the server. The default value is Disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#insert_header LtmProfileHttp2#insert_header}
  */
  readonly insertHeader?: string;
  /**
  * Specifies the name of the HTTP header controlled by Insert Header. The default X-HTTP2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#insert_header_name LtmProfileHttp2#insert_header_name}
  */
  readonly insertHeaderName?: string;
  /**
  * Name of the Http2 Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#name LtmProfileHttp2#name}
  */
  readonly name: string;
  /**
  * The flow-control size for upload streams, in KB. Default: 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#receive_window LtmProfileHttp2#receive_window}
  */
  readonly receiveWindow?: number;
  /**
  * The total size of combined data frames, in bytes, that the HTTP/2 protocol sends in a single write function. Default: 16384
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#write_size LtmProfileHttp2#write_size}
  */
  readonly writeSize?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2 bigip_ltm_profile_http2}
*/
export class LtmProfileHttp2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_profile_http2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmProfileHttp2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmProfileHttp2 to import
  * @param importFromId The id of the existing LtmProfileHttp2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmProfileHttp2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_profile_http2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_http2 bigip_ltm_profile_http2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmProfileHttp2Config
  */
  public constructor(scope: Construct, id: string, config: LtmProfileHttp2Config) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_profile_http2',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activationModes = config.activationModes;
    this._concurrentStreamsPerConnection = config.concurrentStreamsPerConnection;
    this._connectionIdleTimeout = config.connectionIdleTimeout;
    this._defaultsFrom = config.defaultsFrom;
    this._enforceTlsRequirements = config.enforceTlsRequirements;
    this._frameSize = config.frameSize;
    this._headerTableSize = config.headerTableSize;
    this._id = config.id;
    this._includeContentLength = config.includeContentLength;
    this._insertHeader = config.insertHeader;
    this._insertHeaderName = config.insertHeaderName;
    this._name = config.name;
    this._receiveWindow = config.receiveWindow;
    this._writeSize = config.writeSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_modes - computed: true, optional: true, required: false
  private _activationModes?: string[]; 
  public get activationModes() {
    return cdktf.Fn.tolist(this.getListAttribute('activation_modes'));
  }
  public set activationModes(value: string[]) {
    this._activationModes = value;
  }
  public resetActivationModes() {
    this._activationModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationModesInput() {
    return this._activationModes;
  }

  // concurrent_streams_per_connection - computed: true, optional: true, required: false
  private _concurrentStreamsPerConnection?: number; 
  public get concurrentStreamsPerConnection() {
    return this.getNumberAttribute('concurrent_streams_per_connection');
  }
  public set concurrentStreamsPerConnection(value: number) {
    this._concurrentStreamsPerConnection = value;
  }
  public resetConcurrentStreamsPerConnection() {
    this._concurrentStreamsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentStreamsPerConnectionInput() {
    return this._concurrentStreamsPerConnection;
  }

  // connection_idle_timeout - computed: true, optional: true, required: false
  private _connectionIdleTimeout?: number; 
  public get connectionIdleTimeout() {
    return this.getNumberAttribute('connection_idle_timeout');
  }
  public set connectionIdleTimeout(value: number) {
    this._connectionIdleTimeout = value;
  }
  public resetConnectionIdleTimeout() {
    this._connectionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdleTimeoutInput() {
    return this._connectionIdleTimeout;
  }

  // defaults_from - computed: true, optional: true, required: false
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  public resetDefaultsFrom() {
    this._defaultsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
  }

  // enforce_tls_requirements - computed: true, optional: true, required: false
  private _enforceTlsRequirements?: string; 
  public get enforceTlsRequirements() {
    return this.getStringAttribute('enforce_tls_requirements');
  }
  public set enforceTlsRequirements(value: string) {
    this._enforceTlsRequirements = value;
  }
  public resetEnforceTlsRequirements() {
    this._enforceTlsRequirements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTlsRequirementsInput() {
    return this._enforceTlsRequirements;
  }

  // frame_size - computed: true, optional: true, required: false
  private _frameSize?: number; 
  public get frameSize() {
    return this.getNumberAttribute('frame_size');
  }
  public set frameSize(value: number) {
    this._frameSize = value;
  }
  public resetFrameSize() {
    this._frameSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameSizeInput() {
    return this._frameSize;
  }

  // header_table_size - computed: true, optional: true, required: false
  private _headerTableSize?: number; 
  public get headerTableSize() {
    return this.getNumberAttribute('header_table_size');
  }
  public set headerTableSize(value: number) {
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

  // include_content_length - computed: true, optional: true, required: false
  private _includeContentLength?: string; 
  public get includeContentLength() {
    return this.getStringAttribute('include_content_length');
  }
  public set includeContentLength(value: string) {
    this._includeContentLength = value;
  }
  public resetIncludeContentLength() {
    this._includeContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeContentLengthInput() {
    return this._includeContentLength;
  }

  // insert_header - computed: true, optional: true, required: false
  private _insertHeader?: string; 
  public get insertHeader() {
    return this.getStringAttribute('insert_header');
  }
  public set insertHeader(value: string) {
    this._insertHeader = value;
  }
  public resetInsertHeader() {
    this._insertHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader;
  }

  // insert_header_name - computed: true, optional: true, required: false
  private _insertHeaderName?: string; 
  public get insertHeaderName() {
    return this.getStringAttribute('insert_header_name');
  }
  public set insertHeaderName(value: string) {
    this._insertHeaderName = value;
  }
  public resetInsertHeaderName() {
    this._insertHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderNameInput() {
    return this._insertHeaderName;
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

  // receive_window - computed: true, optional: true, required: false
  private _receiveWindow?: number; 
  public get receiveWindow() {
    return this.getNumberAttribute('receive_window');
  }
  public set receiveWindow(value: number) {
    this._receiveWindow = value;
  }
  public resetReceiveWindow() {
    this._receiveWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveWindowInput() {
    return this._receiveWindow;
  }

  // write_size - computed: true, optional: true, required: false
  private _writeSize?: number; 
  public get writeSize() {
    return this.getNumberAttribute('write_size');
  }
  public set writeSize(value: number) {
    this._writeSize = value;
  }
  public resetWriteSize() {
    this._writeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeSizeInput() {
    return this._writeSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._activationModes),
      concurrent_streams_per_connection: cdktf.numberToTerraform(this._concurrentStreamsPerConnection),
      connection_idle_timeout: cdktf.numberToTerraform(this._connectionIdleTimeout),
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      enforce_tls_requirements: cdktf.stringToTerraform(this._enforceTlsRequirements),
      frame_size: cdktf.numberToTerraform(this._frameSize),
      header_table_size: cdktf.numberToTerraform(this._headerTableSize),
      id: cdktf.stringToTerraform(this._id),
      include_content_length: cdktf.stringToTerraform(this._includeContentLength),
      insert_header: cdktf.stringToTerraform(this._insertHeader),
      insert_header_name: cdktf.stringToTerraform(this._insertHeaderName),
      name: cdktf.stringToTerraform(this._name),
      receive_window: cdktf.numberToTerraform(this._receiveWindow),
      write_size: cdktf.numberToTerraform(this._writeSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_modes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._activationModes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      concurrent_streams_per_connection: {
        value: cdktf.numberToHclTerraform(this._concurrentStreamsPerConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._connectionIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_tls_requirements: {
        value: cdktf.stringToHclTerraform(this._enforceTlsRequirements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frame_size: {
        value: cdktf.numberToHclTerraform(this._frameSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_table_size: {
        value: cdktf.numberToHclTerraform(this._headerTableSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_content_length: {
        value: cdktf.stringToHclTerraform(this._includeContentLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_header: {
        value: cdktf.stringToHclTerraform(this._insertHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_header_name: {
        value: cdktf.stringToHclTerraform(this._insertHeaderName),
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
      receive_window: {
        value: cdktf.numberToHclTerraform(this._receiveWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      write_size: {
        value: cdktf.numberToHclTerraform(this._writeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
