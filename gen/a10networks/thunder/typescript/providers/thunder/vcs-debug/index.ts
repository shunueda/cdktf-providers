// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcsDebugConfig extends cdktf.TerraformMetaArguments {
  /**
  * Daemon component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#daemon VcsDebug#daemon}
  */
  readonly daemon?: number;
  /**
  * Daemon message component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#daemon_msg VcsDebug#daemon_msg}
  */
  readonly daemonMsg?: number;
  /**
  * Election component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#election VcsDebug#election}
  */
  readonly election?: number;
  /**
  * Election pdu component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#election_pdu VcsDebug#election_pdu}
  */
  readonly electionPdu?: number;
  /**
  * Encoder component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#encoder VcsDebug#encoder}
  */
  readonly encoder?: number;
  /**
  * Handler component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#handler VcsDebug#handler}
  */
  readonly handler?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#id VcsDebug#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Information component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#info VcsDebug#info}
  */
  readonly info?: number;
  /**
  * Lib component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#lib VcsDebug#lib}
  */
  readonly lib?: number;
  /**
  * Net component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#net VcsDebug#net}
  */
  readonly net?: number;
  /**
  * SSL component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#ssl VcsDebug#ssl}
  */
  readonly ssl?: number;
  /**
  * Utility component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#util VcsDebug#util}
  */
  readonly util?: number;
  /**
  * vBlade component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#vblade VcsDebug#vblade}
  */
  readonly vblade?: number;
  /**
  * vBlade Message component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#vblade_msg VcsDebug#vblade_msg}
  */
  readonly vbladeMsg?: number;
  /**
  * vMaster component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#vmaster VcsDebug#vmaster}
  */
  readonly vmaster?: number;
  /**
  * vMaster Message component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#vmaster_msg VcsDebug#vmaster_msg}
  */
  readonly vmasterMsg?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug thunder_vcs_debug}
*/
export class VcsDebug extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vcs_debug";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcsDebug resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcsDebug to import
  * @param importFromId The id of the existing VcsDebug that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcsDebug to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vcs_debug", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_debug thunder_vcs_debug} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcsDebugConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VcsDebugConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vcs_debug',
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
    this._daemon = config.daemon;
    this._daemonMsg = config.daemonMsg;
    this._election = config.election;
    this._electionPdu = config.electionPdu;
    this._encoder = config.encoder;
    this._handler = config.handler;
    this._id = config.id;
    this._info = config.info;
    this._lib = config.lib;
    this._net = config.net;
    this._ssl = config.ssl;
    this._util = config.util;
    this._vblade = config.vblade;
    this._vbladeMsg = config.vbladeMsg;
    this._vmaster = config.vmaster;
    this._vmasterMsg = config.vmasterMsg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daemon - computed: false, optional: true, required: false
  private _daemon?: number; 
  public get daemon() {
    return this.getNumberAttribute('daemon');
  }
  public set daemon(value: number) {
    this._daemon = value;
  }
  public resetDaemon() {
    this._daemon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonInput() {
    return this._daemon;
  }

  // daemon_msg - computed: false, optional: true, required: false
  private _daemonMsg?: number; 
  public get daemonMsg() {
    return this.getNumberAttribute('daemon_msg');
  }
  public set daemonMsg(value: number) {
    this._daemonMsg = value;
  }
  public resetDaemonMsg() {
    this._daemonMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonMsgInput() {
    return this._daemonMsg;
  }

  // election - computed: false, optional: true, required: false
  private _election?: number; 
  public get election() {
    return this.getNumberAttribute('election');
  }
  public set election(value: number) {
    this._election = value;
  }
  public resetElection() {
    this._election = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electionInput() {
    return this._election;
  }

  // election_pdu - computed: false, optional: true, required: false
  private _electionPdu?: number; 
  public get electionPdu() {
    return this.getNumberAttribute('election_pdu');
  }
  public set electionPdu(value: number) {
    this._electionPdu = value;
  }
  public resetElectionPdu() {
    this._electionPdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electionPduInput() {
    return this._electionPdu;
  }

  // encoder - computed: false, optional: true, required: false
  private _encoder?: number; 
  public get encoder() {
    return this.getNumberAttribute('encoder');
  }
  public set encoder(value: number) {
    this._encoder = value;
  }
  public resetEncoder() {
    this._encoder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encoderInput() {
    return this._encoder;
  }

  // handler - computed: false, optional: true, required: false
  private _handler?: number; 
  public get handler() {
    return this.getNumberAttribute('handler');
  }
  public set handler(value: number) {
    this._handler = value;
  }
  public resetHandler() {
    this._handler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
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

  // info - computed: false, optional: true, required: false
  private _info?: number; 
  public get info() {
    return this.getNumberAttribute('info');
  }
  public set info(value: number) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
  }

  // lib - computed: false, optional: true, required: false
  private _lib?: number; 
  public get lib() {
    return this.getNumberAttribute('lib');
  }
  public set lib(value: number) {
    this._lib = value;
  }
  public resetLib() {
    this._lib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libInput() {
    return this._lib;
  }

  // net - computed: false, optional: true, required: false
  private _net?: number; 
  public get net() {
    return this.getNumberAttribute('net');
  }
  public set net(value: number) {
    this._net = value;
  }
  public resetNet() {
    this._net = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: number; 
  public get ssl() {
    return this.getNumberAttribute('ssl');
  }
  public set ssl(value: number) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // util - computed: false, optional: true, required: false
  private _util?: number; 
  public get util() {
    return this.getNumberAttribute('util');
  }
  public set util(value: number) {
    this._util = value;
  }
  public resetUtil() {
    this._util = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilInput() {
    return this._util;
  }

  // vblade - computed: false, optional: true, required: false
  private _vblade?: number; 
  public get vblade() {
    return this.getNumberAttribute('vblade');
  }
  public set vblade(value: number) {
    this._vblade = value;
  }
  public resetVblade() {
    this._vblade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vbladeInput() {
    return this._vblade;
  }

  // vblade_msg - computed: false, optional: true, required: false
  private _vbladeMsg?: number; 
  public get vbladeMsg() {
    return this.getNumberAttribute('vblade_msg');
  }
  public set vbladeMsg(value: number) {
    this._vbladeMsg = value;
  }
  public resetVbladeMsg() {
    this._vbladeMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vbladeMsgInput() {
    return this._vbladeMsg;
  }

  // vmaster - computed: false, optional: true, required: false
  private _vmaster?: number; 
  public get vmaster() {
    return this.getNumberAttribute('vmaster');
  }
  public set vmaster(value: number) {
    this._vmaster = value;
  }
  public resetVmaster() {
    this._vmaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmasterInput() {
    return this._vmaster;
  }

  // vmaster_msg - computed: false, optional: true, required: false
  private _vmasterMsg?: number; 
  public get vmasterMsg() {
    return this.getNumberAttribute('vmaster_msg');
  }
  public set vmasterMsg(value: number) {
    this._vmasterMsg = value;
  }
  public resetVmasterMsg() {
    this._vmasterMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmasterMsgInput() {
    return this._vmasterMsg;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      daemon: cdktf.numberToTerraform(this._daemon),
      daemon_msg: cdktf.numberToTerraform(this._daemonMsg),
      election: cdktf.numberToTerraform(this._election),
      election_pdu: cdktf.numberToTerraform(this._electionPdu),
      encoder: cdktf.numberToTerraform(this._encoder),
      handler: cdktf.numberToTerraform(this._handler),
      id: cdktf.stringToTerraform(this._id),
      info: cdktf.numberToTerraform(this._info),
      lib: cdktf.numberToTerraform(this._lib),
      net: cdktf.numberToTerraform(this._net),
      ssl: cdktf.numberToTerraform(this._ssl),
      util: cdktf.numberToTerraform(this._util),
      vblade: cdktf.numberToTerraform(this._vblade),
      vblade_msg: cdktf.numberToTerraform(this._vbladeMsg),
      vmaster: cdktf.numberToTerraform(this._vmaster),
      vmaster_msg: cdktf.numberToTerraform(this._vmasterMsg),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      daemon: {
        value: cdktf.numberToHclTerraform(this._daemon),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      daemon_msg: {
        value: cdktf.numberToHclTerraform(this._daemonMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      election: {
        value: cdktf.numberToHclTerraform(this._election),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      election_pdu: {
        value: cdktf.numberToHclTerraform(this._electionPdu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encoder: {
        value: cdktf.numberToHclTerraform(this._encoder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      handler: {
        value: cdktf.numberToHclTerraform(this._handler),
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
      info: {
        value: cdktf.numberToHclTerraform(this._info),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lib: {
        value: cdktf.numberToHclTerraform(this._lib),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      net: {
        value: cdktf.numberToHclTerraform(this._net),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl: {
        value: cdktf.numberToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      util: {
        value: cdktf.numberToHclTerraform(this._util),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vblade: {
        value: cdktf.numberToHclTerraform(this._vblade),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vblade_msg: {
        value: cdktf.numberToHclTerraform(this._vbladeMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vmaster: {
        value: cdktf.numberToHclTerraform(this._vmaster),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vmaster_msg: {
        value: cdktf.numberToHclTerraform(this._vmasterMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
