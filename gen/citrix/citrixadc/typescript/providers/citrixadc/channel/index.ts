// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#bandwidthhigh Channel#bandwidthhigh}
  */
  readonly bandwidthhigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#bandwidthnormal Channel#bandwidthnormal}
  */
  readonly bandwidthnormal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#channel_id Channel#channel_id}
  */
  readonly channelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#conndistr Channel#conndistr}
  */
  readonly conndistr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#flowctl Channel#flowctl}
  */
  readonly flowctl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#haheartbeat Channel#haheartbeat}
  */
  readonly haheartbeat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#hamonitor Channel#hamonitor}
  */
  readonly hamonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#id Channel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#ifalias Channel#ifalias}
  */
  readonly ifalias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#ifnum Channel#ifnum}
  */
  readonly ifnum?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#lamac Channel#lamac}
  */
  readonly lamac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#linkredundancy Channel#linkredundancy}
  */
  readonly linkredundancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#lrminthroughput Channel#lrminthroughput}
  */
  readonly lrminthroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#macdistr Channel#macdistr}
  */
  readonly macdistr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#mode Channel#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#mtu Channel#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#speed Channel#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#state Channel#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#tagall Channel#tagall}
  */
  readonly tagall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#throughput Channel#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#trunk Channel#trunk}
  */
  readonly trunk?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel citrixadc_channel}
*/
export class Channel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Channel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Channel to import
  * @param importFromId The id of the existing Channel that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Channel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/channel citrixadc_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChannelConfig
  */
  public constructor(scope: Construct, id: string, config: ChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_channel',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidthhigh = config.bandwidthhigh;
    this._bandwidthnormal = config.bandwidthnormal;
    this._channelId = config.channelId;
    this._conndistr = config.conndistr;
    this._flowctl = config.flowctl;
    this._haheartbeat = config.haheartbeat;
    this._hamonitor = config.hamonitor;
    this._id = config.id;
    this._ifalias = config.ifalias;
    this._ifnum = config.ifnum;
    this._lamac = config.lamac;
    this._linkredundancy = config.linkredundancy;
    this._lrminthroughput = config.lrminthroughput;
    this._macdistr = config.macdistr;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._speed = config.speed;
    this._state = config.state;
    this._tagall = config.tagall;
    this._throughput = config.throughput;
    this._trunk = config.trunk;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidthhigh - computed: true, optional: true, required: false
  private _bandwidthhigh?: number; 
  public get bandwidthhigh() {
    return this.getNumberAttribute('bandwidthhigh');
  }
  public set bandwidthhigh(value: number) {
    this._bandwidthhigh = value;
  }
  public resetBandwidthhigh() {
    this._bandwidthhigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthhighInput() {
    return this._bandwidthhigh;
  }

  // bandwidthnormal - computed: true, optional: true, required: false
  private _bandwidthnormal?: number; 
  public get bandwidthnormal() {
    return this.getNumberAttribute('bandwidthnormal');
  }
  public set bandwidthnormal(value: number) {
    this._bandwidthnormal = value;
  }
  public resetBandwidthnormal() {
    this._bandwidthnormal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthnormalInput() {
    return this._bandwidthnormal;
  }

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // conndistr - computed: true, optional: true, required: false
  private _conndistr?: string; 
  public get conndistr() {
    return this.getStringAttribute('conndistr');
  }
  public set conndistr(value: string) {
    this._conndistr = value;
  }
  public resetConndistr() {
    this._conndistr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conndistrInput() {
    return this._conndistr;
  }

  // flowctl - computed: true, optional: true, required: false
  private _flowctl?: string; 
  public get flowctl() {
    return this.getStringAttribute('flowctl');
  }
  public set flowctl(value: string) {
    this._flowctl = value;
  }
  public resetFlowctl() {
    this._flowctl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowctlInput() {
    return this._flowctl;
  }

  // haheartbeat - computed: true, optional: true, required: false
  private _haheartbeat?: string; 
  public get haheartbeat() {
    return this.getStringAttribute('haheartbeat');
  }
  public set haheartbeat(value: string) {
    this._haheartbeat = value;
  }
  public resetHaheartbeat() {
    this._haheartbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haheartbeatInput() {
    return this._haheartbeat;
  }

  // hamonitor - computed: true, optional: true, required: false
  private _hamonitor?: string; 
  public get hamonitor() {
    return this.getStringAttribute('hamonitor');
  }
  public set hamonitor(value: string) {
    this._hamonitor = value;
  }
  public resetHamonitor() {
    this._hamonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hamonitorInput() {
    return this._hamonitor;
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

  // ifalias - computed: true, optional: true, required: false
  private _ifalias?: string; 
  public get ifalias() {
    return this.getStringAttribute('ifalias');
  }
  public set ifalias(value: string) {
    this._ifalias = value;
  }
  public resetIfalias() {
    this._ifalias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifaliasInput() {
    return this._ifalias;
  }

  // ifnum - computed: true, optional: true, required: false
  private _ifnum?: string[]; 
  public get ifnum() {
    return this.getListAttribute('ifnum');
  }
  public set ifnum(value: string[]) {
    this._ifnum = value;
  }
  public resetIfnum() {
    this._ifnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // lamac - computed: true, optional: true, required: false
  private _lamac?: string; 
  public get lamac() {
    return this.getStringAttribute('lamac');
  }
  public set lamac(value: string) {
    this._lamac = value;
  }
  public resetLamac() {
    this._lamac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lamacInput() {
    return this._lamac;
  }

  // linkredundancy - computed: true, optional: true, required: false
  private _linkredundancy?: string; 
  public get linkredundancy() {
    return this.getStringAttribute('linkredundancy');
  }
  public set linkredundancy(value: string) {
    this._linkredundancy = value;
  }
  public resetLinkredundancy() {
    this._linkredundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkredundancyInput() {
    return this._linkredundancy;
  }

  // lrminthroughput - computed: true, optional: true, required: false
  private _lrminthroughput?: number; 
  public get lrminthroughput() {
    return this.getNumberAttribute('lrminthroughput');
  }
  public set lrminthroughput(value: number) {
    this._lrminthroughput = value;
  }
  public resetLrminthroughput() {
    this._lrminthroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lrminthroughputInput() {
    return this._lrminthroughput;
  }

  // macdistr - computed: true, optional: true, required: false
  private _macdistr?: string; 
  public get macdistr() {
    return this.getStringAttribute('macdistr');
  }
  public set macdistr(value: string) {
    this._macdistr = value;
  }
  public resetMacdistr() {
    this._macdistr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macdistrInput() {
    return this._macdistr;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // speed - computed: true, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tagall - computed: true, optional: true, required: false
  private _tagall?: string; 
  public get tagall() {
    return this.getStringAttribute('tagall');
  }
  public set tagall(value: string) {
    this._tagall = value;
  }
  public resetTagall() {
    this._tagall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagallInput() {
    return this._tagall;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // trunk - computed: true, optional: true, required: false
  private _trunk?: string; 
  public get trunk() {
    return this.getStringAttribute('trunk');
  }
  public set trunk(value: string) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidthhigh: cdktf.numberToTerraform(this._bandwidthhigh),
      bandwidthnormal: cdktf.numberToTerraform(this._bandwidthnormal),
      channel_id: cdktf.stringToTerraform(this._channelId),
      conndistr: cdktf.stringToTerraform(this._conndistr),
      flowctl: cdktf.stringToTerraform(this._flowctl),
      haheartbeat: cdktf.stringToTerraform(this._haheartbeat),
      hamonitor: cdktf.stringToTerraform(this._hamonitor),
      id: cdktf.stringToTerraform(this._id),
      ifalias: cdktf.stringToTerraform(this._ifalias),
      ifnum: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ifnum),
      lamac: cdktf.stringToTerraform(this._lamac),
      linkredundancy: cdktf.stringToTerraform(this._linkredundancy),
      lrminthroughput: cdktf.numberToTerraform(this._lrminthroughput),
      macdistr: cdktf.stringToTerraform(this._macdistr),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.numberToTerraform(this._mtu),
      speed: cdktf.stringToTerraform(this._speed),
      state: cdktf.stringToTerraform(this._state),
      tagall: cdktf.stringToTerraform(this._tagall),
      throughput: cdktf.numberToTerraform(this._throughput),
      trunk: cdktf.stringToTerraform(this._trunk),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidthhigh: {
        value: cdktf.numberToHclTerraform(this._bandwidthhigh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidthnormal: {
        value: cdktf.numberToHclTerraform(this._bandwidthnormal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      channel_id: {
        value: cdktf.stringToHclTerraform(this._channelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conndistr: {
        value: cdktf.stringToHclTerraform(this._conndistr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flowctl: {
        value: cdktf.stringToHclTerraform(this._flowctl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      haheartbeat: {
        value: cdktf.stringToHclTerraform(this._haheartbeat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hamonitor: {
        value: cdktf.stringToHclTerraform(this._hamonitor),
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
      ifalias: {
        value: cdktf.stringToHclTerraform(this._ifalias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ifnum: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ifnum),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      lamac: {
        value: cdktf.stringToHclTerraform(this._lamac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linkredundancy: {
        value: cdktf.stringToHclTerraform(this._linkredundancy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lrminthroughput: {
        value: cdktf.numberToHclTerraform(this._lrminthroughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      macdistr: {
        value: cdktf.stringToHclTerraform(this._macdistr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tagall: {
        value: cdktf.stringToHclTerraform(this._tagall),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throughput: {
        value: cdktf.numberToHclTerraform(this._throughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trunk: {
        value: cdktf.stringToHclTerraform(this._trunk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
