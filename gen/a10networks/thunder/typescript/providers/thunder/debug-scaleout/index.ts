// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_scaleout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugScaleoutConfig extends cdktf.TerraformMetaArguments {
  /**
  * Debug logs for scaleout config change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_scaleout#config DebugScaleout#config}
  */
  readonly config?: number;
  /**
  * Debug level (Level 1-3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_scaleout#debug_level DebugScaleout#debug_level}
  */
  readonly debugLevel?: number;
  /**
  * Debug logs for scaleout events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_scaleout#event DebugScaleout#event}
  */
  readonly event?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_scaleout#id DebugScaleout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Debug logs for scaleout packet flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_scaleout#packet DebugScaleout#packet}
  */
  readonly packet?: number;
  /**
  * Debug logs for scaleout session sync events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_scaleout#session_sync DebugScaleout#session_sync}
  */
  readonly sessionSync?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_scaleout#uuid DebugScaleout#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_scaleout thunder_debug_scaleout}
*/
export class DebugScaleout extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_scaleout";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugScaleout resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugScaleout to import
  * @param importFromId The id of the existing DebugScaleout that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_scaleout#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugScaleout to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_scaleout", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_scaleout thunder_debug_scaleout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugScaleoutConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugScaleoutConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_scaleout',
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
    this._config = config.config;
    this._debugLevel = config.debugLevel;
    this._event = config.event;
    this._id = config.id;
    this._packet = config.packet;
    this._sessionSync = config.sessionSync;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config?: number; 
  public get config() {
    return this.getNumberAttribute('config');
  }
  public set config(value: number) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // debug_level - computed: false, optional: true, required: false
  private _debugLevel?: number; 
  public get debugLevel() {
    return this.getNumberAttribute('debug_level');
  }
  public set debugLevel(value: number) {
    this._debugLevel = value;
  }
  public resetDebugLevel() {
    this._debugLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLevelInput() {
    return this._debugLevel;
  }

  // event - computed: false, optional: true, required: false
  private _event?: number; 
  public get event() {
    return this.getNumberAttribute('event');
  }
  public set event(value: number) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
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

  // packet - computed: false, optional: true, required: false
  private _packet?: number; 
  public get packet() {
    return this.getNumberAttribute('packet');
  }
  public set packet(value: number) {
    this._packet = value;
  }
  public resetPacket() {
    this._packet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetInput() {
    return this._packet;
  }

  // session_sync - computed: false, optional: true, required: false
  private _sessionSync?: number; 
  public get sessionSync() {
    return this.getNumberAttribute('session_sync');
  }
  public set sessionSync(value: number) {
    this._sessionSync = value;
  }
  public resetSessionSync() {
    this._sessionSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSyncInput() {
    return this._sessionSync;
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
      config: cdktf.numberToTerraform(this._config),
      debug_level: cdktf.numberToTerraform(this._debugLevel),
      event: cdktf.numberToTerraform(this._event),
      id: cdktf.stringToTerraform(this._id),
      packet: cdktf.numberToTerraform(this._packet),
      session_sync: cdktf.numberToTerraform(this._sessionSync),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.numberToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      debug_level: {
        value: cdktf.numberToHclTerraform(this._debugLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event: {
        value: cdktf.numberToHclTerraform(this._event),
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
      packet: {
        value: cdktf.numberToHclTerraform(this._packet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_sync: {
        value: cdktf.numberToHclTerraform(this._sessionSync),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
