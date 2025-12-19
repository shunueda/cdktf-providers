// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateQuicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of burst packet, default 16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic#burst_len SlbTemplateQuic#burst_len}
  */
  readonly burstLen?: number;
  /**
  * Connection id length in byte, default 8 bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic#connection_id_length SlbTemplateQuic#connection_id_length}
  */
  readonly connectionIdLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic#id SlbTemplateQuic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Idle Timeout (interval of 60 seconds), default 120 seconds (idle timeout in second, default 120)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic#idle_timeout SlbTemplateQuic#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Initial window size in byte, default 10000 (Initial window size, default 10000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic#initial_wnd SlbTemplateQuic#initial_wnd}
  */
  readonly initialWnd?: number;
  /**
  * Initiate key update on the client-side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic#key_update_to_client SlbTemplateQuic#key_update_to_client}
  */
  readonly keyUpdateToClient?: number;
  /**
  * Initiate key update on the server-side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic#key_update_to_server SlbTemplateQuic#key_update_to_server}
  */
  readonly keyUpdateToServer?: number;
  /**
  * QUIC Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic#name SlbTemplateQuic#name}
  */
  readonly name: string;
  /**
  * Receive buffer size in byte, default 200000 (Receive buffer size, default 200000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic#receive_buffer SlbTemplateQuic#receive_buffer}
  */
  readonly receiveBuffer?: number;
  /**
  * Enable server retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic#server_retry SlbTemplateQuic#server_retry}
  */
  readonly serverRetry?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic#user_tag SlbTemplateQuic#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic#uuid SlbTemplateQuic#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic thunder_slb_template_quic}
*/
export class SlbTemplateQuic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_quic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateQuic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateQuic to import
  * @param importFromId The id of the existing SlbTemplateQuic that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateQuic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_quic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_quic thunder_slb_template_quic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateQuicConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateQuicConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_quic',
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
    this._burstLen = config.burstLen;
    this._connectionIdLength = config.connectionIdLength;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._initialWnd = config.initialWnd;
    this._keyUpdateToClient = config.keyUpdateToClient;
    this._keyUpdateToServer = config.keyUpdateToServer;
    this._name = config.name;
    this._receiveBuffer = config.receiveBuffer;
    this._serverRetry = config.serverRetry;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // burst_len - computed: false, optional: true, required: false
  private _burstLen?: number; 
  public get burstLen() {
    return this.getNumberAttribute('burst_len');
  }
  public set burstLen(value: number) {
    this._burstLen = value;
  }
  public resetBurstLen() {
    this._burstLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstLenInput() {
    return this._burstLen;
  }

  // connection_id_length - computed: false, optional: true, required: false
  private _connectionIdLength?: number; 
  public get connectionIdLength() {
    return this.getNumberAttribute('connection_id_length');
  }
  public set connectionIdLength(value: number) {
    this._connectionIdLength = value;
  }
  public resetConnectionIdLength() {
    this._connectionIdLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdLengthInput() {
    return this._connectionIdLength;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // initial_wnd - computed: false, optional: true, required: false
  private _initialWnd?: number; 
  public get initialWnd() {
    return this.getNumberAttribute('initial_wnd');
  }
  public set initialWnd(value: number) {
    this._initialWnd = value;
  }
  public resetInitialWnd() {
    this._initialWnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialWndInput() {
    return this._initialWnd;
  }

  // key_update_to_client - computed: false, optional: true, required: false
  private _keyUpdateToClient?: number; 
  public get keyUpdateToClient() {
    return this.getNumberAttribute('key_update_to_client');
  }
  public set keyUpdateToClient(value: number) {
    this._keyUpdateToClient = value;
  }
  public resetKeyUpdateToClient() {
    this._keyUpdateToClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUpdateToClientInput() {
    return this._keyUpdateToClient;
  }

  // key_update_to_server - computed: false, optional: true, required: false
  private _keyUpdateToServer?: number; 
  public get keyUpdateToServer() {
    return this.getNumberAttribute('key_update_to_server');
  }
  public set keyUpdateToServer(value: number) {
    this._keyUpdateToServer = value;
  }
  public resetKeyUpdateToServer() {
    this._keyUpdateToServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUpdateToServerInput() {
    return this._keyUpdateToServer;
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

  // receive_buffer - computed: false, optional: true, required: false
  private _receiveBuffer?: number; 
  public get receiveBuffer() {
    return this.getNumberAttribute('receive_buffer');
  }
  public set receiveBuffer(value: number) {
    this._receiveBuffer = value;
  }
  public resetReceiveBuffer() {
    this._receiveBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveBufferInput() {
    return this._receiveBuffer;
  }

  // server_retry - computed: false, optional: true, required: false
  private _serverRetry?: number; 
  public get serverRetry() {
    return this.getNumberAttribute('server_retry');
  }
  public set serverRetry(value: number) {
    this._serverRetry = value;
  }
  public resetServerRetry() {
    this._serverRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRetryInput() {
    return this._serverRetry;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      burst_len: cdktf.numberToTerraform(this._burstLen),
      connection_id_length: cdktf.numberToTerraform(this._connectionIdLength),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      initial_wnd: cdktf.numberToTerraform(this._initialWnd),
      key_update_to_client: cdktf.numberToTerraform(this._keyUpdateToClient),
      key_update_to_server: cdktf.numberToTerraform(this._keyUpdateToServer),
      name: cdktf.stringToTerraform(this._name),
      receive_buffer: cdktf.numberToTerraform(this._receiveBuffer),
      server_retry: cdktf.numberToTerraform(this._serverRetry),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      burst_len: {
        value: cdktf.numberToHclTerraform(this._burstLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_id_length: {
        value: cdktf.numberToHclTerraform(this._connectionIdLength),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      initial_wnd: {
        value: cdktf.numberToHclTerraform(this._initialWnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_update_to_client: {
        value: cdktf.numberToHclTerraform(this._keyUpdateToClient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_update_to_server: {
        value: cdktf.numberToHclTerraform(this._keyUpdateToServer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receive_buffer: {
        value: cdktf.numberToHclTerraform(this._receiveBuffer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_retry: {
        value: cdktf.numberToHclTerraform(this._serverRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
