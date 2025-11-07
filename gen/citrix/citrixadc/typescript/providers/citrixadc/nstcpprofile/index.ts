// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NstcpprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#ackaggregation Nstcpprofile#ackaggregation}
  */
  readonly ackaggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#ackonpush Nstcpprofile#ackonpush}
  */
  readonly ackonpush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#applyadaptivetcp Nstcpprofile#applyadaptivetcp}
  */
  readonly applyadaptivetcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#buffersize Nstcpprofile#buffersize}
  */
  readonly buffersize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#burstratecontrol Nstcpprofile#burstratecontrol}
  */
  readonly burstratecontrol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#clientiptcpoption Nstcpprofile#clientiptcpoption}
  */
  readonly clientiptcpoption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#clientiptcpoptionnumber Nstcpprofile#clientiptcpoptionnumber}
  */
  readonly clientiptcpoptionnumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#delayedack Nstcpprofile#delayedack}
  */
  readonly delayedack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#dropestconnontimeout Nstcpprofile#dropestconnontimeout}
  */
  readonly dropestconnontimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#drophalfclosedconnontimeout Nstcpprofile#drophalfclosedconnontimeout}
  */
  readonly drophalfclosedconnontimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#dsack Nstcpprofile#dsack}
  */
  readonly dsack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#dupackthresh Nstcpprofile#dupackthresh}
  */
  readonly dupackthresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#dynamicreceivebuffering Nstcpprofile#dynamicreceivebuffering}
  */
  readonly dynamicreceivebuffering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#ecn Nstcpprofile#ecn}
  */
  readonly ecn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#establishclientconn Nstcpprofile#establishclientconn}
  */
  readonly establishclientconn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#fack Nstcpprofile#fack}
  */
  readonly fack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#flavor Nstcpprofile#flavor}
  */
  readonly flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#frto Nstcpprofile#frto}
  */
  readonly frto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#hystart Nstcpprofile#hystart}
  */
  readonly hystart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#id Nstcpprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#initialcwnd Nstcpprofile#initialcwnd}
  */
  readonly initialcwnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#ka Nstcpprofile#ka}
  */
  readonly ka?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#kaconnidletime Nstcpprofile#kaconnidletime}
  */
  readonly kaconnidletime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#kamaxprobes Nstcpprofile#kamaxprobes}
  */
  readonly kamaxprobes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#kaprobeinterval Nstcpprofile#kaprobeinterval}
  */
  readonly kaprobeinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#kaprobeupdatelastactivity Nstcpprofile#kaprobeupdatelastactivity}
  */
  readonly kaprobeupdatelastactivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#maxburst Nstcpprofile#maxburst}
  */
  readonly maxburst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#maxcwnd Nstcpprofile#maxcwnd}
  */
  readonly maxcwnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#maxpktpermss Nstcpprofile#maxpktpermss}
  */
  readonly maxpktpermss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#minrto Nstcpprofile#minrto}
  */
  readonly minrto?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#mpcapablecbit Nstcpprofile#mpcapablecbit}
  */
  readonly mpcapablecbit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#mptcp Nstcpprofile#mptcp}
  */
  readonly mptcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#mptcpdropdataonpreestsf Nstcpprofile#mptcpdropdataonpreestsf}
  */
  readonly mptcpdropdataonpreestsf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#mptcpfastopen Nstcpprofile#mptcpfastopen}
  */
  readonly mptcpfastopen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#mptcpsessiontimeout Nstcpprofile#mptcpsessiontimeout}
  */
  readonly mptcpsessiontimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#mss Nstcpprofile#mss}
  */
  readonly mss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#nagle Nstcpprofile#nagle}
  */
  readonly nagle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#name Nstcpprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#oooqsize Nstcpprofile#oooqsize}
  */
  readonly oooqsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#pktperretx Nstcpprofile#pktperretx}
  */
  readonly pktperretx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#rateqmax Nstcpprofile#rateqmax}
  */
  readonly rateqmax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#rstmaxack Nstcpprofile#rstmaxack}
  */
  readonly rstmaxack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#rstwindowattenuate Nstcpprofile#rstwindowattenuate}
  */
  readonly rstwindowattenuate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#sack Nstcpprofile#sack}
  */
  readonly sack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#sendbuffsize Nstcpprofile#sendbuffsize}
  */
  readonly sendbuffsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#sendclientportintcpoption Nstcpprofile#sendclientportintcpoption}
  */
  readonly sendclientportintcpoption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#slowstartincr Nstcpprofile#slowstartincr}
  */
  readonly slowstartincr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#slowstartthreshold Nstcpprofile#slowstartthreshold}
  */
  readonly slowstartthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#spoofsyndrop Nstcpprofile#spoofsyndrop}
  */
  readonly spoofsyndrop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#syncookie Nstcpprofile#syncookie}
  */
  readonly syncookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#taillossprobe Nstcpprofile#taillossprobe}
  */
  readonly taillossprobe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#tcpfastopen Nstcpprofile#tcpfastopen}
  */
  readonly tcpfastopen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#tcpfastopencookiesize Nstcpprofile#tcpfastopencookiesize}
  */
  readonly tcpfastopencookiesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#tcpmode Nstcpprofile#tcpmode}
  */
  readonly tcpmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#tcprate Nstcpprofile#tcprate}
  */
  readonly tcprate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#tcpsegoffload Nstcpprofile#tcpsegoffload}
  */
  readonly tcpsegoffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#timestamp Nstcpprofile#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#ws Nstcpprofile#ws}
  */
  readonly ws?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#wsval Nstcpprofile#wsval}
  */
  readonly wsval?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile citrixadc_nstcpprofile}
*/
export class Nstcpprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nstcpprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nstcpprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nstcpprofile to import
  * @param importFromId The id of the existing Nstcpprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nstcpprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nstcpprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpprofile citrixadc_nstcpprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NstcpprofileConfig
  */
  public constructor(scope: Construct, id: string, config: NstcpprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nstcpprofile',
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
    this._ackaggregation = config.ackaggregation;
    this._ackonpush = config.ackonpush;
    this._applyadaptivetcp = config.applyadaptivetcp;
    this._buffersize = config.buffersize;
    this._burstratecontrol = config.burstratecontrol;
    this._clientiptcpoption = config.clientiptcpoption;
    this._clientiptcpoptionnumber = config.clientiptcpoptionnumber;
    this._delayedack = config.delayedack;
    this._dropestconnontimeout = config.dropestconnontimeout;
    this._drophalfclosedconnontimeout = config.drophalfclosedconnontimeout;
    this._dsack = config.dsack;
    this._dupackthresh = config.dupackthresh;
    this._dynamicreceivebuffering = config.dynamicreceivebuffering;
    this._ecn = config.ecn;
    this._establishclientconn = config.establishclientconn;
    this._fack = config.fack;
    this._flavor = config.flavor;
    this._frto = config.frto;
    this._hystart = config.hystart;
    this._id = config.id;
    this._initialcwnd = config.initialcwnd;
    this._ka = config.ka;
    this._kaconnidletime = config.kaconnidletime;
    this._kamaxprobes = config.kamaxprobes;
    this._kaprobeinterval = config.kaprobeinterval;
    this._kaprobeupdatelastactivity = config.kaprobeupdatelastactivity;
    this._maxburst = config.maxburst;
    this._maxcwnd = config.maxcwnd;
    this._maxpktpermss = config.maxpktpermss;
    this._minrto = config.minrto;
    this._mpcapablecbit = config.mpcapablecbit;
    this._mptcp = config.mptcp;
    this._mptcpdropdataonpreestsf = config.mptcpdropdataonpreestsf;
    this._mptcpfastopen = config.mptcpfastopen;
    this._mptcpsessiontimeout = config.mptcpsessiontimeout;
    this._mss = config.mss;
    this._nagle = config.nagle;
    this._name = config.name;
    this._oooqsize = config.oooqsize;
    this._pktperretx = config.pktperretx;
    this._rateqmax = config.rateqmax;
    this._rstmaxack = config.rstmaxack;
    this._rstwindowattenuate = config.rstwindowattenuate;
    this._sack = config.sack;
    this._sendbuffsize = config.sendbuffsize;
    this._sendclientportintcpoption = config.sendclientportintcpoption;
    this._slowstartincr = config.slowstartincr;
    this._slowstartthreshold = config.slowstartthreshold;
    this._spoofsyndrop = config.spoofsyndrop;
    this._syncookie = config.syncookie;
    this._taillossprobe = config.taillossprobe;
    this._tcpfastopen = config.tcpfastopen;
    this._tcpfastopencookiesize = config.tcpfastopencookiesize;
    this._tcpmode = config.tcpmode;
    this._tcprate = config.tcprate;
    this._tcpsegoffload = config.tcpsegoffload;
    this._timestamp = config.timestamp;
    this._ws = config.ws;
    this._wsval = config.wsval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ackaggregation - computed: true, optional: true, required: false
  private _ackaggregation?: string; 
  public get ackaggregation() {
    return this.getStringAttribute('ackaggregation');
  }
  public set ackaggregation(value: string) {
    this._ackaggregation = value;
  }
  public resetAckaggregation() {
    this._ackaggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackaggregationInput() {
    return this._ackaggregation;
  }

  // ackonpush - computed: true, optional: true, required: false
  private _ackonpush?: string; 
  public get ackonpush() {
    return this.getStringAttribute('ackonpush');
  }
  public set ackonpush(value: string) {
    this._ackonpush = value;
  }
  public resetAckonpush() {
    this._ackonpush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackonpushInput() {
    return this._ackonpush;
  }

  // applyadaptivetcp - computed: true, optional: true, required: false
  private _applyadaptivetcp?: string; 
  public get applyadaptivetcp() {
    return this.getStringAttribute('applyadaptivetcp');
  }
  public set applyadaptivetcp(value: string) {
    this._applyadaptivetcp = value;
  }
  public resetApplyadaptivetcp() {
    this._applyadaptivetcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyadaptivetcpInput() {
    return this._applyadaptivetcp;
  }

  // buffersize - computed: true, optional: true, required: false
  private _buffersize?: number; 
  public get buffersize() {
    return this.getNumberAttribute('buffersize');
  }
  public set buffersize(value: number) {
    this._buffersize = value;
  }
  public resetBuffersize() {
    this._buffersize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffersizeInput() {
    return this._buffersize;
  }

  // burstratecontrol - computed: true, optional: true, required: false
  private _burstratecontrol?: string; 
  public get burstratecontrol() {
    return this.getStringAttribute('burstratecontrol');
  }
  public set burstratecontrol(value: string) {
    this._burstratecontrol = value;
  }
  public resetBurstratecontrol() {
    this._burstratecontrol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstratecontrolInput() {
    return this._burstratecontrol;
  }

  // clientiptcpoption - computed: true, optional: true, required: false
  private _clientiptcpoption?: string; 
  public get clientiptcpoption() {
    return this.getStringAttribute('clientiptcpoption');
  }
  public set clientiptcpoption(value: string) {
    this._clientiptcpoption = value;
  }
  public resetClientiptcpoption() {
    this._clientiptcpoption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientiptcpoptionInput() {
    return this._clientiptcpoption;
  }

  // clientiptcpoptionnumber - computed: true, optional: true, required: false
  private _clientiptcpoptionnumber?: number; 
  public get clientiptcpoptionnumber() {
    return this.getNumberAttribute('clientiptcpoptionnumber');
  }
  public set clientiptcpoptionnumber(value: number) {
    this._clientiptcpoptionnumber = value;
  }
  public resetClientiptcpoptionnumber() {
    this._clientiptcpoptionnumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientiptcpoptionnumberInput() {
    return this._clientiptcpoptionnumber;
  }

  // delayedack - computed: true, optional: true, required: false
  private _delayedack?: number; 
  public get delayedack() {
    return this.getNumberAttribute('delayedack');
  }
  public set delayedack(value: number) {
    this._delayedack = value;
  }
  public resetDelayedack() {
    this._delayedack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayedackInput() {
    return this._delayedack;
  }

  // dropestconnontimeout - computed: true, optional: true, required: false
  private _dropestconnontimeout?: string; 
  public get dropestconnontimeout() {
    return this.getStringAttribute('dropestconnontimeout');
  }
  public set dropestconnontimeout(value: string) {
    this._dropestconnontimeout = value;
  }
  public resetDropestconnontimeout() {
    this._dropestconnontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropestconnontimeoutInput() {
    return this._dropestconnontimeout;
  }

  // drophalfclosedconnontimeout - computed: true, optional: true, required: false
  private _drophalfclosedconnontimeout?: string; 
  public get drophalfclosedconnontimeout() {
    return this.getStringAttribute('drophalfclosedconnontimeout');
  }
  public set drophalfclosedconnontimeout(value: string) {
    this._drophalfclosedconnontimeout = value;
  }
  public resetDrophalfclosedconnontimeout() {
    this._drophalfclosedconnontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drophalfclosedconnontimeoutInput() {
    return this._drophalfclosedconnontimeout;
  }

  // dsack - computed: true, optional: true, required: false
  private _dsack?: string; 
  public get dsack() {
    return this.getStringAttribute('dsack');
  }
  public set dsack(value: string) {
    this._dsack = value;
  }
  public resetDsack() {
    this._dsack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsackInput() {
    return this._dsack;
  }

  // dupackthresh - computed: true, optional: true, required: false
  private _dupackthresh?: number; 
  public get dupackthresh() {
    return this.getNumberAttribute('dupackthresh');
  }
  public set dupackthresh(value: number) {
    this._dupackthresh = value;
  }
  public resetDupackthresh() {
    this._dupackthresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dupackthreshInput() {
    return this._dupackthresh;
  }

  // dynamicreceivebuffering - computed: true, optional: true, required: false
  private _dynamicreceivebuffering?: string; 
  public get dynamicreceivebuffering() {
    return this.getStringAttribute('dynamicreceivebuffering');
  }
  public set dynamicreceivebuffering(value: string) {
    this._dynamicreceivebuffering = value;
  }
  public resetDynamicreceivebuffering() {
    this._dynamicreceivebuffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicreceivebufferingInput() {
    return this._dynamicreceivebuffering;
  }

  // ecn - computed: true, optional: true, required: false
  private _ecn?: string; 
  public get ecn() {
    return this.getStringAttribute('ecn');
  }
  public set ecn(value: string) {
    this._ecn = value;
  }
  public resetEcn() {
    this._ecn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecnInput() {
    return this._ecn;
  }

  // establishclientconn - computed: true, optional: true, required: false
  private _establishclientconn?: string; 
  public get establishclientconn() {
    return this.getStringAttribute('establishclientconn');
  }
  public set establishclientconn(value: string) {
    this._establishclientconn = value;
  }
  public resetEstablishclientconn() {
    this._establishclientconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get establishclientconnInput() {
    return this._establishclientconn;
  }

  // fack - computed: true, optional: true, required: false
  private _fack?: string; 
  public get fack() {
    return this.getStringAttribute('fack');
  }
  public set fack(value: string) {
    this._fack = value;
  }
  public resetFack() {
    this._fack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fackInput() {
    return this._fack;
  }

  // flavor - computed: true, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // frto - computed: true, optional: true, required: false
  private _frto?: string; 
  public get frto() {
    return this.getStringAttribute('frto');
  }
  public set frto(value: string) {
    this._frto = value;
  }
  public resetFrto() {
    this._frto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frtoInput() {
    return this._frto;
  }

  // hystart - computed: true, optional: true, required: false
  private _hystart?: string; 
  public get hystart() {
    return this.getStringAttribute('hystart');
  }
  public set hystart(value: string) {
    this._hystart = value;
  }
  public resetHystart() {
    this._hystart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hystartInput() {
    return this._hystart;
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

  // initialcwnd - computed: true, optional: true, required: false
  private _initialcwnd?: number; 
  public get initialcwnd() {
    return this.getNumberAttribute('initialcwnd');
  }
  public set initialcwnd(value: number) {
    this._initialcwnd = value;
  }
  public resetInitialcwnd() {
    this._initialcwnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialcwndInput() {
    return this._initialcwnd;
  }

  // ka - computed: true, optional: true, required: false
  private _ka?: string; 
  public get ka() {
    return this.getStringAttribute('ka');
  }
  public set ka(value: string) {
    this._ka = value;
  }
  public resetKa() {
    this._ka = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kaInput() {
    return this._ka;
  }

  // kaconnidletime - computed: true, optional: true, required: false
  private _kaconnidletime?: number; 
  public get kaconnidletime() {
    return this.getNumberAttribute('kaconnidletime');
  }
  public set kaconnidletime(value: number) {
    this._kaconnidletime = value;
  }
  public resetKaconnidletime() {
    this._kaconnidletime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kaconnidletimeInput() {
    return this._kaconnidletime;
  }

  // kamaxprobes - computed: true, optional: true, required: false
  private _kamaxprobes?: number; 
  public get kamaxprobes() {
    return this.getNumberAttribute('kamaxprobes');
  }
  public set kamaxprobes(value: number) {
    this._kamaxprobes = value;
  }
  public resetKamaxprobes() {
    this._kamaxprobes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kamaxprobesInput() {
    return this._kamaxprobes;
  }

  // kaprobeinterval - computed: true, optional: true, required: false
  private _kaprobeinterval?: number; 
  public get kaprobeinterval() {
    return this.getNumberAttribute('kaprobeinterval');
  }
  public set kaprobeinterval(value: number) {
    this._kaprobeinterval = value;
  }
  public resetKaprobeinterval() {
    this._kaprobeinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kaprobeintervalInput() {
    return this._kaprobeinterval;
  }

  // kaprobeupdatelastactivity - computed: true, optional: true, required: false
  private _kaprobeupdatelastactivity?: string; 
  public get kaprobeupdatelastactivity() {
    return this.getStringAttribute('kaprobeupdatelastactivity');
  }
  public set kaprobeupdatelastactivity(value: string) {
    this._kaprobeupdatelastactivity = value;
  }
  public resetKaprobeupdatelastactivity() {
    this._kaprobeupdatelastactivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kaprobeupdatelastactivityInput() {
    return this._kaprobeupdatelastactivity;
  }

  // maxburst - computed: true, optional: true, required: false
  private _maxburst?: number; 
  public get maxburst() {
    return this.getNumberAttribute('maxburst');
  }
  public set maxburst(value: number) {
    this._maxburst = value;
  }
  public resetMaxburst() {
    this._maxburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxburstInput() {
    return this._maxburst;
  }

  // maxcwnd - computed: true, optional: true, required: false
  private _maxcwnd?: number; 
  public get maxcwnd() {
    return this.getNumberAttribute('maxcwnd');
  }
  public set maxcwnd(value: number) {
    this._maxcwnd = value;
  }
  public resetMaxcwnd() {
    this._maxcwnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxcwndInput() {
    return this._maxcwnd;
  }

  // maxpktpermss - computed: true, optional: true, required: false
  private _maxpktpermss?: number; 
  public get maxpktpermss() {
    return this.getNumberAttribute('maxpktpermss');
  }
  public set maxpktpermss(value: number) {
    this._maxpktpermss = value;
  }
  public resetMaxpktpermss() {
    this._maxpktpermss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpktpermssInput() {
    return this._maxpktpermss;
  }

  // minrto - computed: true, optional: true, required: false
  private _minrto?: number; 
  public get minrto() {
    return this.getNumberAttribute('minrto');
  }
  public set minrto(value: number) {
    this._minrto = value;
  }
  public resetMinrto() {
    this._minrto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minrtoInput() {
    return this._minrto;
  }

  // mpcapablecbit - computed: true, optional: true, required: false
  private _mpcapablecbit?: string; 
  public get mpcapablecbit() {
    return this.getStringAttribute('mpcapablecbit');
  }
  public set mpcapablecbit(value: string) {
    this._mpcapablecbit = value;
  }
  public resetMpcapablecbit() {
    this._mpcapablecbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpcapablecbitInput() {
    return this._mpcapablecbit;
  }

  // mptcp - computed: true, optional: true, required: false
  private _mptcp?: string; 
  public get mptcp() {
    return this.getStringAttribute('mptcp');
  }
  public set mptcp(value: string) {
    this._mptcp = value;
  }
  public resetMptcp() {
    this._mptcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpInput() {
    return this._mptcp;
  }

  // mptcpdropdataonpreestsf - computed: true, optional: true, required: false
  private _mptcpdropdataonpreestsf?: string; 
  public get mptcpdropdataonpreestsf() {
    return this.getStringAttribute('mptcpdropdataonpreestsf');
  }
  public set mptcpdropdataonpreestsf(value: string) {
    this._mptcpdropdataonpreestsf = value;
  }
  public resetMptcpdropdataonpreestsf() {
    this._mptcpdropdataonpreestsf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpdropdataonpreestsfInput() {
    return this._mptcpdropdataonpreestsf;
  }

  // mptcpfastopen - computed: true, optional: true, required: false
  private _mptcpfastopen?: string; 
  public get mptcpfastopen() {
    return this.getStringAttribute('mptcpfastopen');
  }
  public set mptcpfastopen(value: string) {
    this._mptcpfastopen = value;
  }
  public resetMptcpfastopen() {
    this._mptcpfastopen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpfastopenInput() {
    return this._mptcpfastopen;
  }

  // mptcpsessiontimeout - computed: true, optional: true, required: false
  private _mptcpsessiontimeout?: number; 
  public get mptcpsessiontimeout() {
    return this.getNumberAttribute('mptcpsessiontimeout');
  }
  public set mptcpsessiontimeout(value: number) {
    this._mptcpsessiontimeout = value;
  }
  public resetMptcpsessiontimeout() {
    this._mptcpsessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpsessiontimeoutInput() {
    return this._mptcpsessiontimeout;
  }

  // mss - computed: true, optional: true, required: false
  private _mss?: number; 
  public get mss() {
    return this.getNumberAttribute('mss');
  }
  public set mss(value: number) {
    this._mss = value;
  }
  public resetMss() {
    this._mss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssInput() {
    return this._mss;
  }

  // nagle - computed: true, optional: true, required: false
  private _nagle?: string; 
  public get nagle() {
    return this.getStringAttribute('nagle');
  }
  public set nagle(value: string) {
    this._nagle = value;
  }
  public resetNagle() {
    this._nagle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nagleInput() {
    return this._nagle;
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

  // oooqsize - computed: true, optional: true, required: false
  private _oooqsize?: number; 
  public get oooqsize() {
    return this.getNumberAttribute('oooqsize');
  }
  public set oooqsize(value: number) {
    this._oooqsize = value;
  }
  public resetOooqsize() {
    this._oooqsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oooqsizeInput() {
    return this._oooqsize;
  }

  // pktperretx - computed: true, optional: true, required: false
  private _pktperretx?: number; 
  public get pktperretx() {
    return this.getNumberAttribute('pktperretx');
  }
  public set pktperretx(value: number) {
    this._pktperretx = value;
  }
  public resetPktperretx() {
    this._pktperretx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktperretxInput() {
    return this._pktperretx;
  }

  // rateqmax - computed: true, optional: true, required: false
  private _rateqmax?: number; 
  public get rateqmax() {
    return this.getNumberAttribute('rateqmax');
  }
  public set rateqmax(value: number) {
    this._rateqmax = value;
  }
  public resetRateqmax() {
    this._rateqmax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateqmaxInput() {
    return this._rateqmax;
  }

  // rstmaxack - computed: true, optional: true, required: false
  private _rstmaxack?: string; 
  public get rstmaxack() {
    return this.getStringAttribute('rstmaxack');
  }
  public set rstmaxack(value: string) {
    this._rstmaxack = value;
  }
  public resetRstmaxack() {
    this._rstmaxack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstmaxackInput() {
    return this._rstmaxack;
  }

  // rstwindowattenuate - computed: true, optional: true, required: false
  private _rstwindowattenuate?: string; 
  public get rstwindowattenuate() {
    return this.getStringAttribute('rstwindowattenuate');
  }
  public set rstwindowattenuate(value: string) {
    this._rstwindowattenuate = value;
  }
  public resetRstwindowattenuate() {
    this._rstwindowattenuate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstwindowattenuateInput() {
    return this._rstwindowattenuate;
  }

  // sack - computed: true, optional: true, required: false
  private _sack?: string; 
  public get sack() {
    return this.getStringAttribute('sack');
  }
  public set sack(value: string) {
    this._sack = value;
  }
  public resetSack() {
    this._sack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sackInput() {
    return this._sack;
  }

  // sendbuffsize - computed: true, optional: true, required: false
  private _sendbuffsize?: number; 
  public get sendbuffsize() {
    return this.getNumberAttribute('sendbuffsize');
  }
  public set sendbuffsize(value: number) {
    this._sendbuffsize = value;
  }
  public resetSendbuffsize() {
    this._sendbuffsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendbuffsizeInput() {
    return this._sendbuffsize;
  }

  // sendclientportintcpoption - computed: true, optional: true, required: false
  private _sendclientportintcpoption?: string; 
  public get sendclientportintcpoption() {
    return this.getStringAttribute('sendclientportintcpoption');
  }
  public set sendclientportintcpoption(value: string) {
    this._sendclientportintcpoption = value;
  }
  public resetSendclientportintcpoption() {
    this._sendclientportintcpoption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendclientportintcpoptionInput() {
    return this._sendclientportintcpoption;
  }

  // slowstartincr - computed: true, optional: true, required: false
  private _slowstartincr?: number; 
  public get slowstartincr() {
    return this.getNumberAttribute('slowstartincr');
  }
  public set slowstartincr(value: number) {
    this._slowstartincr = value;
  }
  public resetSlowstartincr() {
    this._slowstartincr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowstartincrInput() {
    return this._slowstartincr;
  }

  // slowstartthreshold - computed: true, optional: true, required: false
  private _slowstartthreshold?: number; 
  public get slowstartthreshold() {
    return this.getNumberAttribute('slowstartthreshold');
  }
  public set slowstartthreshold(value: number) {
    this._slowstartthreshold = value;
  }
  public resetSlowstartthreshold() {
    this._slowstartthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowstartthresholdInput() {
    return this._slowstartthreshold;
  }

  // spoofsyndrop - computed: true, optional: true, required: false
  private _spoofsyndrop?: string; 
  public get spoofsyndrop() {
    return this.getStringAttribute('spoofsyndrop');
  }
  public set spoofsyndrop(value: string) {
    this._spoofsyndrop = value;
  }
  public resetSpoofsyndrop() {
    this._spoofsyndrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofsyndropInput() {
    return this._spoofsyndrop;
  }

  // syncookie - computed: true, optional: true, required: false
  private _syncookie?: string; 
  public get syncookie() {
    return this.getStringAttribute('syncookie');
  }
  public set syncookie(value: string) {
    this._syncookie = value;
  }
  public resetSyncookie() {
    this._syncookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncookieInput() {
    return this._syncookie;
  }

  // taillossprobe - computed: true, optional: true, required: false
  private _taillossprobe?: string; 
  public get taillossprobe() {
    return this.getStringAttribute('taillossprobe');
  }
  public set taillossprobe(value: string) {
    this._taillossprobe = value;
  }
  public resetTaillossprobe() {
    this._taillossprobe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taillossprobeInput() {
    return this._taillossprobe;
  }

  // tcpfastopen - computed: true, optional: true, required: false
  private _tcpfastopen?: string; 
  public get tcpfastopen() {
    return this.getStringAttribute('tcpfastopen');
  }
  public set tcpfastopen(value: string) {
    this._tcpfastopen = value;
  }
  public resetTcpfastopen() {
    this._tcpfastopen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpfastopenInput() {
    return this._tcpfastopen;
  }

  // tcpfastopencookiesize - computed: true, optional: true, required: false
  private _tcpfastopencookiesize?: number; 
  public get tcpfastopencookiesize() {
    return this.getNumberAttribute('tcpfastopencookiesize');
  }
  public set tcpfastopencookiesize(value: number) {
    this._tcpfastopencookiesize = value;
  }
  public resetTcpfastopencookiesize() {
    this._tcpfastopencookiesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpfastopencookiesizeInput() {
    return this._tcpfastopencookiesize;
  }

  // tcpmode - computed: true, optional: true, required: false
  private _tcpmode?: string; 
  public get tcpmode() {
    return this.getStringAttribute('tcpmode');
  }
  public set tcpmode(value: string) {
    this._tcpmode = value;
  }
  public resetTcpmode() {
    this._tcpmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpmodeInput() {
    return this._tcpmode;
  }

  // tcprate - computed: true, optional: true, required: false
  private _tcprate?: number; 
  public get tcprate() {
    return this.getNumberAttribute('tcprate');
  }
  public set tcprate(value: number) {
    this._tcprate = value;
  }
  public resetTcprate() {
    this._tcprate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcprateInput() {
    return this._tcprate;
  }

  // tcpsegoffload - computed: true, optional: true, required: false
  private _tcpsegoffload?: string; 
  public get tcpsegoffload() {
    return this.getStringAttribute('tcpsegoffload');
  }
  public set tcpsegoffload(value: string) {
    this._tcpsegoffload = value;
  }
  public resetTcpsegoffload() {
    this._tcpsegoffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpsegoffloadInput() {
    return this._tcpsegoffload;
  }

  // timestamp - computed: true, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // ws - computed: true, optional: true, required: false
  private _ws?: string; 
  public get ws() {
    return this.getStringAttribute('ws');
  }
  public set ws(value: string) {
    this._ws = value;
  }
  public resetWs() {
    this._ws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsInput() {
    return this._ws;
  }

  // wsval - computed: true, optional: true, required: false
  private _wsval?: number; 
  public get wsval() {
    return this.getNumberAttribute('wsval');
  }
  public set wsval(value: number) {
    this._wsval = value;
  }
  public resetWsval() {
    this._wsval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsvalInput() {
    return this._wsval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ackaggregation: cdktf.stringToTerraform(this._ackaggregation),
      ackonpush: cdktf.stringToTerraform(this._ackonpush),
      applyadaptivetcp: cdktf.stringToTerraform(this._applyadaptivetcp),
      buffersize: cdktf.numberToTerraform(this._buffersize),
      burstratecontrol: cdktf.stringToTerraform(this._burstratecontrol),
      clientiptcpoption: cdktf.stringToTerraform(this._clientiptcpoption),
      clientiptcpoptionnumber: cdktf.numberToTerraform(this._clientiptcpoptionnumber),
      delayedack: cdktf.numberToTerraform(this._delayedack),
      dropestconnontimeout: cdktf.stringToTerraform(this._dropestconnontimeout),
      drophalfclosedconnontimeout: cdktf.stringToTerraform(this._drophalfclosedconnontimeout),
      dsack: cdktf.stringToTerraform(this._dsack),
      dupackthresh: cdktf.numberToTerraform(this._dupackthresh),
      dynamicreceivebuffering: cdktf.stringToTerraform(this._dynamicreceivebuffering),
      ecn: cdktf.stringToTerraform(this._ecn),
      establishclientconn: cdktf.stringToTerraform(this._establishclientconn),
      fack: cdktf.stringToTerraform(this._fack),
      flavor: cdktf.stringToTerraform(this._flavor),
      frto: cdktf.stringToTerraform(this._frto),
      hystart: cdktf.stringToTerraform(this._hystart),
      id: cdktf.stringToTerraform(this._id),
      initialcwnd: cdktf.numberToTerraform(this._initialcwnd),
      ka: cdktf.stringToTerraform(this._ka),
      kaconnidletime: cdktf.numberToTerraform(this._kaconnidletime),
      kamaxprobes: cdktf.numberToTerraform(this._kamaxprobes),
      kaprobeinterval: cdktf.numberToTerraform(this._kaprobeinterval),
      kaprobeupdatelastactivity: cdktf.stringToTerraform(this._kaprobeupdatelastactivity),
      maxburst: cdktf.numberToTerraform(this._maxburst),
      maxcwnd: cdktf.numberToTerraform(this._maxcwnd),
      maxpktpermss: cdktf.numberToTerraform(this._maxpktpermss),
      minrto: cdktf.numberToTerraform(this._minrto),
      mpcapablecbit: cdktf.stringToTerraform(this._mpcapablecbit),
      mptcp: cdktf.stringToTerraform(this._mptcp),
      mptcpdropdataonpreestsf: cdktf.stringToTerraform(this._mptcpdropdataonpreestsf),
      mptcpfastopen: cdktf.stringToTerraform(this._mptcpfastopen),
      mptcpsessiontimeout: cdktf.numberToTerraform(this._mptcpsessiontimeout),
      mss: cdktf.numberToTerraform(this._mss),
      nagle: cdktf.stringToTerraform(this._nagle),
      name: cdktf.stringToTerraform(this._name),
      oooqsize: cdktf.numberToTerraform(this._oooqsize),
      pktperretx: cdktf.numberToTerraform(this._pktperretx),
      rateqmax: cdktf.numberToTerraform(this._rateqmax),
      rstmaxack: cdktf.stringToTerraform(this._rstmaxack),
      rstwindowattenuate: cdktf.stringToTerraform(this._rstwindowattenuate),
      sack: cdktf.stringToTerraform(this._sack),
      sendbuffsize: cdktf.numberToTerraform(this._sendbuffsize),
      sendclientportintcpoption: cdktf.stringToTerraform(this._sendclientportintcpoption),
      slowstartincr: cdktf.numberToTerraform(this._slowstartincr),
      slowstartthreshold: cdktf.numberToTerraform(this._slowstartthreshold),
      spoofsyndrop: cdktf.stringToTerraform(this._spoofsyndrop),
      syncookie: cdktf.stringToTerraform(this._syncookie),
      taillossprobe: cdktf.stringToTerraform(this._taillossprobe),
      tcpfastopen: cdktf.stringToTerraform(this._tcpfastopen),
      tcpfastopencookiesize: cdktf.numberToTerraform(this._tcpfastopencookiesize),
      tcpmode: cdktf.stringToTerraform(this._tcpmode),
      tcprate: cdktf.numberToTerraform(this._tcprate),
      tcpsegoffload: cdktf.stringToTerraform(this._tcpsegoffload),
      timestamp: cdktf.stringToTerraform(this._timestamp),
      ws: cdktf.stringToTerraform(this._ws),
      wsval: cdktf.numberToTerraform(this._wsval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ackaggregation: {
        value: cdktf.stringToHclTerraform(this._ackaggregation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ackonpush: {
        value: cdktf.stringToHclTerraform(this._ackonpush),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      applyadaptivetcp: {
        value: cdktf.stringToHclTerraform(this._applyadaptivetcp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buffersize: {
        value: cdktf.numberToHclTerraform(this._buffersize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      burstratecontrol: {
        value: cdktf.stringToHclTerraform(this._burstratecontrol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientiptcpoption: {
        value: cdktf.stringToHclTerraform(this._clientiptcpoption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientiptcpoptionnumber: {
        value: cdktf.numberToHclTerraform(this._clientiptcpoptionnumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delayedack: {
        value: cdktf.numberToHclTerraform(this._delayedack),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dropestconnontimeout: {
        value: cdktf.stringToHclTerraform(this._dropestconnontimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drophalfclosedconnontimeout: {
        value: cdktf.stringToHclTerraform(this._drophalfclosedconnontimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dsack: {
        value: cdktf.stringToHclTerraform(this._dsack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dupackthresh: {
        value: cdktf.numberToHclTerraform(this._dupackthresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamicreceivebuffering: {
        value: cdktf.stringToHclTerraform(this._dynamicreceivebuffering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecn: {
        value: cdktf.stringToHclTerraform(this._ecn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      establishclientconn: {
        value: cdktf.stringToHclTerraform(this._establishclientconn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fack: {
        value: cdktf.stringToHclTerraform(this._fack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frto: {
        value: cdktf.stringToHclTerraform(this._frto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hystart: {
        value: cdktf.stringToHclTerraform(this._hystart),
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
      initialcwnd: {
        value: cdktf.numberToHclTerraform(this._initialcwnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ka: {
        value: cdktf.stringToHclTerraform(this._ka),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kaconnidletime: {
        value: cdktf.numberToHclTerraform(this._kaconnidletime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kamaxprobes: {
        value: cdktf.numberToHclTerraform(this._kamaxprobes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kaprobeinterval: {
        value: cdktf.numberToHclTerraform(this._kaprobeinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kaprobeupdatelastactivity: {
        value: cdktf.stringToHclTerraform(this._kaprobeupdatelastactivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxburst: {
        value: cdktf.numberToHclTerraform(this._maxburst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxcwnd: {
        value: cdktf.numberToHclTerraform(this._maxcwnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxpktpermss: {
        value: cdktf.numberToHclTerraform(this._maxpktpermss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minrto: {
        value: cdktf.numberToHclTerraform(this._minrto),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mpcapablecbit: {
        value: cdktf.stringToHclTerraform(this._mpcapablecbit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mptcp: {
        value: cdktf.stringToHclTerraform(this._mptcp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mptcpdropdataonpreestsf: {
        value: cdktf.stringToHclTerraform(this._mptcpdropdataonpreestsf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mptcpfastopen: {
        value: cdktf.stringToHclTerraform(this._mptcpfastopen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mptcpsessiontimeout: {
        value: cdktf.numberToHclTerraform(this._mptcpsessiontimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mss: {
        value: cdktf.numberToHclTerraform(this._mss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nagle: {
        value: cdktf.stringToHclTerraform(this._nagle),
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
      oooqsize: {
        value: cdktf.numberToHclTerraform(this._oooqsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pktperretx: {
        value: cdktf.numberToHclTerraform(this._pktperretx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rateqmax: {
        value: cdktf.numberToHclTerraform(this._rateqmax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rstmaxack: {
        value: cdktf.stringToHclTerraform(this._rstmaxack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rstwindowattenuate: {
        value: cdktf.stringToHclTerraform(this._rstwindowattenuate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sack: {
        value: cdktf.stringToHclTerraform(this._sack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sendbuffsize: {
        value: cdktf.numberToHclTerraform(this._sendbuffsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sendclientportintcpoption: {
        value: cdktf.stringToHclTerraform(this._sendclientportintcpoption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slowstartincr: {
        value: cdktf.numberToHclTerraform(this._slowstartincr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slowstartthreshold: {
        value: cdktf.numberToHclTerraform(this._slowstartthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spoofsyndrop: {
        value: cdktf.stringToHclTerraform(this._spoofsyndrop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syncookie: {
        value: cdktf.stringToHclTerraform(this._syncookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      taillossprobe: {
        value: cdktf.stringToHclTerraform(this._taillossprobe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcpfastopen: {
        value: cdktf.stringToHclTerraform(this._tcpfastopen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcpfastopencookiesize: {
        value: cdktf.numberToHclTerraform(this._tcpfastopencookiesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcpmode: {
        value: cdktf.stringToHclTerraform(this._tcpmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcprate: {
        value: cdktf.numberToHclTerraform(this._tcprate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcpsegoffload: {
        value: cdktf.stringToHclTerraform(this._tcpsegoffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp: {
        value: cdktf.stringToHclTerraform(this._timestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ws: {
        value: cdktf.stringToHclTerraform(this._ws),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wsval: {
        value: cdktf.numberToHclTerraform(this._wsval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
