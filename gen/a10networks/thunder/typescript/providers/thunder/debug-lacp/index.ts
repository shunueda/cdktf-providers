// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugLacpConfig extends cdktf.TerraformMetaArguments {
  /**
  * all - turn on all debugging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp#all DebugLacp#all}
  */
  readonly all?: number;
  /**
  * cli - echo commands to console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp#cli DebugLacp#cli}
  */
  readonly cli?: number;
  /**
  * detail - echo timer start/stop to console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp#detail DebugLacp#detail}
  */
  readonly detail?: number;
  /**
  * event - echo events to console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp#event DebugLacp#event}
  */
  readonly event?: number;
  /**
  * ha - echo High availability events to console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp#ha DebugLacp#ha}
  */
  readonly ha?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp#id DebugLacp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * packet - echo packet contents to console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp#packet DebugLacp#packet}
  */
  readonly packet?: number;
  /**
  * sync - echo synchronization to console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp#sync DebugLacp#sync}
  */
  readonly sync?: number;
  /**
  * timer - echo timer expiry to console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp#timer DebugLacp#timer}
  */
  readonly timer?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp#uuid DebugLacp#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp thunder_debug_lacp}
*/
export class DebugLacp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_lacp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugLacp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugLacp to import
  * @param importFromId The id of the existing DebugLacp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugLacp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_lacp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lacp thunder_debug_lacp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugLacpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugLacpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_lacp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._all = config.all;
    this._cli = config.cli;
    this._detail = config.detail;
    this._event = config.event;
    this._ha = config.ha;
    this._id = config.id;
    this._packet = config.packet;
    this._sync = config.sync;
    this._timer = config.timer;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // cli - computed: false, optional: true, required: false
  private _cli?: number; 
  public get cli() {
    return this.getNumberAttribute('cli');
  }
  public set cli(value: number) {
    this._cli = value;
  }
  public resetCli() {
    this._cli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliInput() {
    return this._cli;
  }

  // detail - computed: false, optional: true, required: false
  private _detail?: number; 
  public get detail() {
    return this.getNumberAttribute('detail');
  }
  public set detail(value: number) {
    this._detail = value;
  }
  public resetDetail() {
    this._detail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail;
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

  // ha - computed: false, optional: true, required: false
  private _ha?: number; 
  public get ha() {
    return this.getNumberAttribute('ha');
  }
  public set ha(value: number) {
    this._ha = value;
  }
  public resetHa() {
    this._ha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInput() {
    return this._ha;
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

  // sync - computed: false, optional: true, required: false
  private _sync?: number; 
  public get sync() {
    return this.getNumberAttribute('sync');
  }
  public set sync(value: number) {
    this._sync = value;
  }
  public resetSync() {
    this._sync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync;
  }

  // timer - computed: false, optional: true, required: false
  private _timer?: number; 
  public get timer() {
    return this.getNumberAttribute('timer');
  }
  public set timer(value: number) {
    this._timer = value;
  }
  public resetTimer() {
    this._timer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer;
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
      all: cdktf.numberToTerraform(this._all),
      cli: cdktf.numberToTerraform(this._cli),
      detail: cdktf.numberToTerraform(this._detail),
      event: cdktf.numberToTerraform(this._event),
      ha: cdktf.numberToTerraform(this._ha),
      id: cdktf.stringToTerraform(this._id),
      packet: cdktf.numberToTerraform(this._packet),
      sync: cdktf.numberToTerraform(this._sync),
      timer: cdktf.numberToTerraform(this._timer),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.numberToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cli: {
        value: cdktf.numberToHclTerraform(this._cli),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detail: {
        value: cdktf.numberToHclTerraform(this._detail),
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
      ha: {
        value: cdktf.numberToHclTerraform(this._ha),
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
      sync: {
        value: cdktf.numberToHclTerraform(this._sync),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timer: {
        value: cdktf.numberToHclTerraform(this._timer),
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
