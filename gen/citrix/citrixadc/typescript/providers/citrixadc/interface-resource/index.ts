// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#autoneg InterfaceResource#autoneg}
  */
  readonly autoneg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#bandwidthhigh InterfaceResource#bandwidthhigh}
  */
  readonly bandwidthhigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#bandwidthnormal InterfaceResource#bandwidthnormal}
  */
  readonly bandwidthnormal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#duplex InterfaceResource#duplex}
  */
  readonly duplex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#flowctl InterfaceResource#flowctl}
  */
  readonly flowctl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#haheartbeat InterfaceResource#haheartbeat}
  */
  readonly haheartbeat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#hamonitor InterfaceResource#hamonitor}
  */
  readonly hamonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#id InterfaceResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#ifalias InterfaceResource#ifalias}
  */
  readonly ifalias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#interface_id InterfaceResource#interface_id}
  */
  readonly interfaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#lacpkey InterfaceResource#lacpkey}
  */
  readonly lacpkey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#lacpmode InterfaceResource#lacpmode}
  */
  readonly lacpmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#lacppriority InterfaceResource#lacppriority}
  */
  readonly lacppriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#lacptimeout InterfaceResource#lacptimeout}
  */
  readonly lacptimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#lagtype InterfaceResource#lagtype}
  */
  readonly lagtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#linkredundancy InterfaceResource#linkredundancy}
  */
  readonly linkredundancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#lldpmode InterfaceResource#lldpmode}
  */
  readonly lldpmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#lrsetpriority InterfaceResource#lrsetpriority}
  */
  readonly lrsetpriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#mtu InterfaceResource#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#ringsize InterfaceResource#ringsize}
  */
  readonly ringsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#ringtype InterfaceResource#ringtype}
  */
  readonly ringtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#speed InterfaceResource#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#state InterfaceResource#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#tagall InterfaceResource#tagall}
  */
  readonly tagall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#throughput InterfaceResource#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#trunk InterfaceResource#trunk}
  */
  readonly trunk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#trunkmode InterfaceResource#trunkmode}
  */
  readonly trunkmode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface citrixadc_interface}
*/
export class InterfaceResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceResource to import
  * @param importFromId The id of the existing InterfaceResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/interface citrixadc_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceResourceConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_interface',
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
    this._autoneg = config.autoneg;
    this._bandwidthhigh = config.bandwidthhigh;
    this._bandwidthnormal = config.bandwidthnormal;
    this._duplex = config.duplex;
    this._flowctl = config.flowctl;
    this._haheartbeat = config.haheartbeat;
    this._hamonitor = config.hamonitor;
    this._id = config.id;
    this._ifalias = config.ifalias;
    this._interfaceId = config.interfaceId;
    this._lacpkey = config.lacpkey;
    this._lacpmode = config.lacpmode;
    this._lacppriority = config.lacppriority;
    this._lacptimeout = config.lacptimeout;
    this._lagtype = config.lagtype;
    this._linkredundancy = config.linkredundancy;
    this._lldpmode = config.lldpmode;
    this._lrsetpriority = config.lrsetpriority;
    this._mtu = config.mtu;
    this._ringsize = config.ringsize;
    this._ringtype = config.ringtype;
    this._speed = config.speed;
    this._state = config.state;
    this._tagall = config.tagall;
    this._throughput = config.throughput;
    this._trunk = config.trunk;
    this._trunkmode = config.trunkmode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoneg - computed: true, optional: true, required: false
  private _autoneg?: string; 
  public get autoneg() {
    return this.getStringAttribute('autoneg');
  }
  public set autoneg(value: string) {
    this._autoneg = value;
  }
  public resetAutoneg() {
    this._autoneg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonegInput() {
    return this._autoneg;
  }

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

  // duplex - computed: true, optional: true, required: false
  private _duplex?: string; 
  public get duplex() {
    return this.getStringAttribute('duplex');
  }
  public set duplex(value: string) {
    this._duplex = value;
  }
  public resetDuplex() {
    this._duplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexInput() {
    return this._duplex;
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

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // lacpkey - computed: true, optional: true, required: false
  private _lacpkey?: number; 
  public get lacpkey() {
    return this.getNumberAttribute('lacpkey');
  }
  public set lacpkey(value: number) {
    this._lacpkey = value;
  }
  public resetLacpkey() {
    this._lacpkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpkeyInput() {
    return this._lacpkey;
  }

  // lacpmode - computed: true, optional: true, required: false
  private _lacpmode?: string; 
  public get lacpmode() {
    return this.getStringAttribute('lacpmode');
  }
  public set lacpmode(value: string) {
    this._lacpmode = value;
  }
  public resetLacpmode() {
    this._lacpmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpmodeInput() {
    return this._lacpmode;
  }

  // lacppriority - computed: true, optional: true, required: false
  private _lacppriority?: number; 
  public get lacppriority() {
    return this.getNumberAttribute('lacppriority');
  }
  public set lacppriority(value: number) {
    this._lacppriority = value;
  }
  public resetLacppriority() {
    this._lacppriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacppriorityInput() {
    return this._lacppriority;
  }

  // lacptimeout - computed: true, optional: true, required: false
  private _lacptimeout?: string; 
  public get lacptimeout() {
    return this.getStringAttribute('lacptimeout');
  }
  public set lacptimeout(value: string) {
    this._lacptimeout = value;
  }
  public resetLacptimeout() {
    this._lacptimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacptimeoutInput() {
    return this._lacptimeout;
  }

  // lagtype - computed: true, optional: true, required: false
  private _lagtype?: string; 
  public get lagtype() {
    return this.getStringAttribute('lagtype');
  }
  public set lagtype(value: string) {
    this._lagtype = value;
  }
  public resetLagtype() {
    this._lagtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagtypeInput() {
    return this._lagtype;
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

  // lldpmode - computed: true, optional: true, required: false
  private _lldpmode?: string; 
  public get lldpmode() {
    return this.getStringAttribute('lldpmode');
  }
  public set lldpmode(value: string) {
    this._lldpmode = value;
  }
  public resetLldpmode() {
    this._lldpmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpmodeInput() {
    return this._lldpmode;
  }

  // lrsetpriority - computed: true, optional: true, required: false
  private _lrsetpriority?: number; 
  public get lrsetpriority() {
    return this.getNumberAttribute('lrsetpriority');
  }
  public set lrsetpriority(value: number) {
    this._lrsetpriority = value;
  }
  public resetLrsetpriority() {
    this._lrsetpriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lrsetpriorityInput() {
    return this._lrsetpriority;
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

  // ringsize - computed: true, optional: true, required: false
  private _ringsize?: number; 
  public get ringsize() {
    return this.getNumberAttribute('ringsize');
  }
  public set ringsize(value: number) {
    this._ringsize = value;
  }
  public resetRingsize() {
    this._ringsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringsizeInput() {
    return this._ringsize;
  }

  // ringtype - computed: true, optional: true, required: false
  private _ringtype?: string; 
  public get ringtype() {
    return this.getStringAttribute('ringtype');
  }
  public set ringtype(value: string) {
    this._ringtype = value;
  }
  public resetRingtype() {
    this._ringtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringtypeInput() {
    return this._ringtype;
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

  // trunkmode - computed: true, optional: true, required: false
  private _trunkmode?: string; 
  public get trunkmode() {
    return this.getStringAttribute('trunkmode');
  }
  public set trunkmode(value: string) {
    this._trunkmode = value;
  }
  public resetTrunkmode() {
    this._trunkmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkmodeInput() {
    return this._trunkmode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoneg: cdktf.stringToTerraform(this._autoneg),
      bandwidthhigh: cdktf.numberToTerraform(this._bandwidthhigh),
      bandwidthnormal: cdktf.numberToTerraform(this._bandwidthnormal),
      duplex: cdktf.stringToTerraform(this._duplex),
      flowctl: cdktf.stringToTerraform(this._flowctl),
      haheartbeat: cdktf.stringToTerraform(this._haheartbeat),
      hamonitor: cdktf.stringToTerraform(this._hamonitor),
      id: cdktf.stringToTerraform(this._id),
      ifalias: cdktf.stringToTerraform(this._ifalias),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      lacpkey: cdktf.numberToTerraform(this._lacpkey),
      lacpmode: cdktf.stringToTerraform(this._lacpmode),
      lacppriority: cdktf.numberToTerraform(this._lacppriority),
      lacptimeout: cdktf.stringToTerraform(this._lacptimeout),
      lagtype: cdktf.stringToTerraform(this._lagtype),
      linkredundancy: cdktf.stringToTerraform(this._linkredundancy),
      lldpmode: cdktf.stringToTerraform(this._lldpmode),
      lrsetpriority: cdktf.numberToTerraform(this._lrsetpriority),
      mtu: cdktf.numberToTerraform(this._mtu),
      ringsize: cdktf.numberToTerraform(this._ringsize),
      ringtype: cdktf.stringToTerraform(this._ringtype),
      speed: cdktf.stringToTerraform(this._speed),
      state: cdktf.stringToTerraform(this._state),
      tagall: cdktf.stringToTerraform(this._tagall),
      throughput: cdktf.numberToTerraform(this._throughput),
      trunk: cdktf.stringToTerraform(this._trunk),
      trunkmode: cdktf.stringToTerraform(this._trunkmode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoneg: {
        value: cdktf.stringToHclTerraform(this._autoneg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      duplex: {
        value: cdktf.stringToHclTerraform(this._duplex),
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
      interface_id: {
        value: cdktf.stringToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lacpkey: {
        value: cdktf.numberToHclTerraform(this._lacpkey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lacpmode: {
        value: cdktf.stringToHclTerraform(this._lacpmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lacppriority: {
        value: cdktf.numberToHclTerraform(this._lacppriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lacptimeout: {
        value: cdktf.stringToHclTerraform(this._lacptimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lagtype: {
        value: cdktf.stringToHclTerraform(this._lagtype),
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
      lldpmode: {
        value: cdktf.stringToHclTerraform(this._lldpmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lrsetpriority: {
        value: cdktf.numberToHclTerraform(this._lrsetpriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ringsize: {
        value: cdktf.numberToHclTerraform(this._ringsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ringtype: {
        value: cdktf.stringToHclTerraform(this._ringtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      trunkmode: {
        value: cdktf.stringToHclTerraform(this._trunkmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
