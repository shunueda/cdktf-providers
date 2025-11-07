// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NstcpparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#ackonpush Nstcpparam#ackonpush}
  */
  readonly ackonpush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#autosyncookietimeout Nstcpparam#autosyncookietimeout}
  */
  readonly autosyncookietimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#connflushifnomem Nstcpparam#connflushifnomem}
  */
  readonly connflushifnomem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#connflushthres Nstcpparam#connflushthres}
  */
  readonly connflushthres?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#delayedack Nstcpparam#delayedack}
  */
  readonly delayedack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#downstaterst Nstcpparam#downstaterst}
  */
  readonly downstaterst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#id Nstcpparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#initialcwnd Nstcpparam#initialcwnd}
  */
  readonly initialcwnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#kaprobeupdatelastactivity Nstcpparam#kaprobeupdatelastactivity}
  */
  readonly kaprobeupdatelastactivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#learnvsvrmss Nstcpparam#learnvsvrmss}
  */
  readonly learnvsvrmss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#limitedpersist Nstcpparam#limitedpersist}
  */
  readonly limitedpersist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#maxburst Nstcpparam#maxburst}
  */
  readonly maxburst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#maxdynserverprobes Nstcpparam#maxdynserverprobes}
  */
  readonly maxdynserverprobes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#maxpktpermss Nstcpparam#maxpktpermss}
  */
  readonly maxpktpermss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#maxsynackretx Nstcpparam#maxsynackretx}
  */
  readonly maxsynackretx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#maxsynhold Nstcpparam#maxsynhold}
  */
  readonly maxsynhold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#maxsynholdperprobe Nstcpparam#maxsynholdperprobe}
  */
  readonly maxsynholdperprobe?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#maxtimewaitconn Nstcpparam#maxtimewaitconn}
  */
  readonly maxtimewaitconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#minrto Nstcpparam#minrto}
  */
  readonly minrto?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#mptcpchecksum Nstcpparam#mptcpchecksum}
  */
  readonly mptcpchecksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#mptcpclosemptcpsessiononlastsfclose Nstcpparam#mptcpclosemptcpsessiononlastsfclose}
  */
  readonly mptcpclosemptcpsessiononlastsfclose?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#mptcpconcloseonpassivesf Nstcpparam#mptcpconcloseonpassivesf}
  */
  readonly mptcpconcloseonpassivesf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#mptcpimmediatesfcloseonfin Nstcpparam#mptcpimmediatesfcloseonfin}
  */
  readonly mptcpimmediatesfcloseonfin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#mptcpmaxpendingsf Nstcpparam#mptcpmaxpendingsf}
  */
  readonly mptcpmaxpendingsf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#mptcpmaxsf Nstcpparam#mptcpmaxsf}
  */
  readonly mptcpmaxsf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#mptcppendingjointhreshold Nstcpparam#mptcppendingjointhreshold}
  */
  readonly mptcppendingjointhreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#mptcprtostoswitchsf Nstcpparam#mptcprtostoswitchsf}
  */
  readonly mptcprtostoswitchsf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#mptcpsfreplacetimeout Nstcpparam#mptcpsfreplacetimeout}
  */
  readonly mptcpsfreplacetimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#mptcpsftimeout Nstcpparam#mptcpsftimeout}
  */
  readonly mptcpsftimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#mptcpusebackupondss Nstcpparam#mptcpusebackupondss}
  */
  readonly mptcpusebackupondss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#msslearndelay Nstcpparam#msslearndelay}
  */
  readonly msslearndelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#msslearninterval Nstcpparam#msslearninterval}
  */
  readonly msslearninterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#nagle Nstcpparam#nagle}
  */
  readonly nagle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#oooqsize Nstcpparam#oooqsize}
  */
  readonly oooqsize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#pktperretx Nstcpparam#pktperretx}
  */
  readonly pktperretx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#recvbuffsize Nstcpparam#recvbuffsize}
  */
  readonly recvbuffsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#sack Nstcpparam#sack}
  */
  readonly sack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#slowstartincr Nstcpparam#slowstartincr}
  */
  readonly slowstartincr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#synattackdetection Nstcpparam#synattackdetection}
  */
  readonly synattackdetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#synholdfastgiveup Nstcpparam#synholdfastgiveup}
  */
  readonly synholdfastgiveup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#tcpfastopencookietimeout Nstcpparam#tcpfastopencookietimeout}
  */
  readonly tcpfastopencookietimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#tcpfintimeout Nstcpparam#tcpfintimeout}
  */
  readonly tcpfintimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#tcpmaxretries Nstcpparam#tcpmaxretries}
  */
  readonly tcpmaxretries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#ws Nstcpparam#ws}
  */
  readonly ws?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#wsval Nstcpparam#wsval}
  */
  readonly wsval?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam citrixadc_nstcpparam}
*/
export class Nstcpparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nstcpparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nstcpparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nstcpparam to import
  * @param importFromId The id of the existing Nstcpparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nstcpparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nstcpparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstcpparam citrixadc_nstcpparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NstcpparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NstcpparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nstcpparam',
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
    this._ackonpush = config.ackonpush;
    this._autosyncookietimeout = config.autosyncookietimeout;
    this._connflushifnomem = config.connflushifnomem;
    this._connflushthres = config.connflushthres;
    this._delayedack = config.delayedack;
    this._downstaterst = config.downstaterst;
    this._id = config.id;
    this._initialcwnd = config.initialcwnd;
    this._kaprobeupdatelastactivity = config.kaprobeupdatelastactivity;
    this._learnvsvrmss = config.learnvsvrmss;
    this._limitedpersist = config.limitedpersist;
    this._maxburst = config.maxburst;
    this._maxdynserverprobes = config.maxdynserverprobes;
    this._maxpktpermss = config.maxpktpermss;
    this._maxsynackretx = config.maxsynackretx;
    this._maxsynhold = config.maxsynhold;
    this._maxsynholdperprobe = config.maxsynholdperprobe;
    this._maxtimewaitconn = config.maxtimewaitconn;
    this._minrto = config.minrto;
    this._mptcpchecksum = config.mptcpchecksum;
    this._mptcpclosemptcpsessiononlastsfclose = config.mptcpclosemptcpsessiononlastsfclose;
    this._mptcpconcloseonpassivesf = config.mptcpconcloseonpassivesf;
    this._mptcpimmediatesfcloseonfin = config.mptcpimmediatesfcloseonfin;
    this._mptcpmaxpendingsf = config.mptcpmaxpendingsf;
    this._mptcpmaxsf = config.mptcpmaxsf;
    this._mptcppendingjointhreshold = config.mptcppendingjointhreshold;
    this._mptcprtostoswitchsf = config.mptcprtostoswitchsf;
    this._mptcpsfreplacetimeout = config.mptcpsfreplacetimeout;
    this._mptcpsftimeout = config.mptcpsftimeout;
    this._mptcpusebackupondss = config.mptcpusebackupondss;
    this._msslearndelay = config.msslearndelay;
    this._msslearninterval = config.msslearninterval;
    this._nagle = config.nagle;
    this._oooqsize = config.oooqsize;
    this._pktperretx = config.pktperretx;
    this._recvbuffsize = config.recvbuffsize;
    this._sack = config.sack;
    this._slowstartincr = config.slowstartincr;
    this._synattackdetection = config.synattackdetection;
    this._synholdfastgiveup = config.synholdfastgiveup;
    this._tcpfastopencookietimeout = config.tcpfastopencookietimeout;
    this._tcpfintimeout = config.tcpfintimeout;
    this._tcpmaxretries = config.tcpmaxretries;
    this._ws = config.ws;
    this._wsval = config.wsval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // autosyncookietimeout - computed: true, optional: true, required: false
  private _autosyncookietimeout?: number; 
  public get autosyncookietimeout() {
    return this.getNumberAttribute('autosyncookietimeout');
  }
  public set autosyncookietimeout(value: number) {
    this._autosyncookietimeout = value;
  }
  public resetAutosyncookietimeout() {
    this._autosyncookietimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autosyncookietimeoutInput() {
    return this._autosyncookietimeout;
  }

  // connflushifnomem - computed: true, optional: true, required: false
  private _connflushifnomem?: string; 
  public get connflushifnomem() {
    return this.getStringAttribute('connflushifnomem');
  }
  public set connflushifnomem(value: string) {
    this._connflushifnomem = value;
  }
  public resetConnflushifnomem() {
    this._connflushifnomem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connflushifnomemInput() {
    return this._connflushifnomem;
  }

  // connflushthres - computed: true, optional: true, required: false
  private _connflushthres?: number; 
  public get connflushthres() {
    return this.getNumberAttribute('connflushthres');
  }
  public set connflushthres(value: number) {
    this._connflushthres = value;
  }
  public resetConnflushthres() {
    this._connflushthres = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connflushthresInput() {
    return this._connflushthres;
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

  // downstaterst - computed: true, optional: true, required: false
  private _downstaterst?: string; 
  public get downstaterst() {
    return this.getStringAttribute('downstaterst');
  }
  public set downstaterst(value: string) {
    this._downstaterst = value;
  }
  public resetDownstaterst() {
    this._downstaterst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstaterstInput() {
    return this._downstaterst;
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

  // learnvsvrmss - computed: true, optional: true, required: false
  private _learnvsvrmss?: string; 
  public get learnvsvrmss() {
    return this.getStringAttribute('learnvsvrmss');
  }
  public set learnvsvrmss(value: string) {
    this._learnvsvrmss = value;
  }
  public resetLearnvsvrmss() {
    this._learnvsvrmss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnvsvrmssInput() {
    return this._learnvsvrmss;
  }

  // limitedpersist - computed: true, optional: true, required: false
  private _limitedpersist?: string; 
  public get limitedpersist() {
    return this.getStringAttribute('limitedpersist');
  }
  public set limitedpersist(value: string) {
    this._limitedpersist = value;
  }
  public resetLimitedpersist() {
    this._limitedpersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitedpersistInput() {
    return this._limitedpersist;
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

  // maxdynserverprobes - computed: true, optional: true, required: false
  private _maxdynserverprobes?: number; 
  public get maxdynserverprobes() {
    return this.getNumberAttribute('maxdynserverprobes');
  }
  public set maxdynserverprobes(value: number) {
    this._maxdynserverprobes = value;
  }
  public resetMaxdynserverprobes() {
    this._maxdynserverprobes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxdynserverprobesInput() {
    return this._maxdynserverprobes;
  }

  // maxpktpermss - computed: true, optional: true, required: false
  private _maxpktpermss?: string; 
  public get maxpktpermss() {
    return this.getStringAttribute('maxpktpermss');
  }
  public set maxpktpermss(value: string) {
    this._maxpktpermss = value;
  }
  public resetMaxpktpermss() {
    this._maxpktpermss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpktpermssInput() {
    return this._maxpktpermss;
  }

  // maxsynackretx - computed: true, optional: true, required: false
  private _maxsynackretx?: number; 
  public get maxsynackretx() {
    return this.getNumberAttribute('maxsynackretx');
  }
  public set maxsynackretx(value: number) {
    this._maxsynackretx = value;
  }
  public resetMaxsynackretx() {
    this._maxsynackretx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxsynackretxInput() {
    return this._maxsynackretx;
  }

  // maxsynhold - computed: true, optional: true, required: false
  private _maxsynhold?: number; 
  public get maxsynhold() {
    return this.getNumberAttribute('maxsynhold');
  }
  public set maxsynhold(value: number) {
    this._maxsynhold = value;
  }
  public resetMaxsynhold() {
    this._maxsynhold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxsynholdInput() {
    return this._maxsynhold;
  }

  // maxsynholdperprobe - computed: true, optional: true, required: false
  private _maxsynholdperprobe?: number; 
  public get maxsynholdperprobe() {
    return this.getNumberAttribute('maxsynholdperprobe');
  }
  public set maxsynholdperprobe(value: number) {
    this._maxsynholdperprobe = value;
  }
  public resetMaxsynholdperprobe() {
    this._maxsynholdperprobe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxsynholdperprobeInput() {
    return this._maxsynholdperprobe;
  }

  // maxtimewaitconn - computed: true, optional: true, required: false
  private _maxtimewaitconn?: number; 
  public get maxtimewaitconn() {
    return this.getNumberAttribute('maxtimewaitconn');
  }
  public set maxtimewaitconn(value: number) {
    this._maxtimewaitconn = value;
  }
  public resetMaxtimewaitconn() {
    this._maxtimewaitconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxtimewaitconnInput() {
    return this._maxtimewaitconn;
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

  // mptcpchecksum - computed: true, optional: true, required: false
  private _mptcpchecksum?: string; 
  public get mptcpchecksum() {
    return this.getStringAttribute('mptcpchecksum');
  }
  public set mptcpchecksum(value: string) {
    this._mptcpchecksum = value;
  }
  public resetMptcpchecksum() {
    this._mptcpchecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpchecksumInput() {
    return this._mptcpchecksum;
  }

  // mptcpclosemptcpsessiononlastsfclose - computed: true, optional: true, required: false
  private _mptcpclosemptcpsessiononlastsfclose?: string; 
  public get mptcpclosemptcpsessiononlastsfclose() {
    return this.getStringAttribute('mptcpclosemptcpsessiononlastsfclose');
  }
  public set mptcpclosemptcpsessiononlastsfclose(value: string) {
    this._mptcpclosemptcpsessiononlastsfclose = value;
  }
  public resetMptcpclosemptcpsessiononlastsfclose() {
    this._mptcpclosemptcpsessiononlastsfclose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpclosemptcpsessiononlastsfcloseInput() {
    return this._mptcpclosemptcpsessiononlastsfclose;
  }

  // mptcpconcloseonpassivesf - computed: true, optional: true, required: false
  private _mptcpconcloseonpassivesf?: string; 
  public get mptcpconcloseonpassivesf() {
    return this.getStringAttribute('mptcpconcloseonpassivesf');
  }
  public set mptcpconcloseonpassivesf(value: string) {
    this._mptcpconcloseonpassivesf = value;
  }
  public resetMptcpconcloseonpassivesf() {
    this._mptcpconcloseonpassivesf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpconcloseonpassivesfInput() {
    return this._mptcpconcloseonpassivesf;
  }

  // mptcpimmediatesfcloseonfin - computed: true, optional: true, required: false
  private _mptcpimmediatesfcloseonfin?: string; 
  public get mptcpimmediatesfcloseonfin() {
    return this.getStringAttribute('mptcpimmediatesfcloseonfin');
  }
  public set mptcpimmediatesfcloseonfin(value: string) {
    this._mptcpimmediatesfcloseonfin = value;
  }
  public resetMptcpimmediatesfcloseonfin() {
    this._mptcpimmediatesfcloseonfin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpimmediatesfcloseonfinInput() {
    return this._mptcpimmediatesfcloseonfin;
  }

  // mptcpmaxpendingsf - computed: true, optional: true, required: false
  private _mptcpmaxpendingsf?: string; 
  public get mptcpmaxpendingsf() {
    return this.getStringAttribute('mptcpmaxpendingsf');
  }
  public set mptcpmaxpendingsf(value: string) {
    this._mptcpmaxpendingsf = value;
  }
  public resetMptcpmaxpendingsf() {
    this._mptcpmaxpendingsf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpmaxpendingsfInput() {
    return this._mptcpmaxpendingsf;
  }

  // mptcpmaxsf - computed: true, optional: true, required: false
  private _mptcpmaxsf?: number; 
  public get mptcpmaxsf() {
    return this.getNumberAttribute('mptcpmaxsf');
  }
  public set mptcpmaxsf(value: number) {
    this._mptcpmaxsf = value;
  }
  public resetMptcpmaxsf() {
    this._mptcpmaxsf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpmaxsfInput() {
    return this._mptcpmaxsf;
  }

  // mptcppendingjointhreshold - computed: true, optional: true, required: false
  private _mptcppendingjointhreshold?: string; 
  public get mptcppendingjointhreshold() {
    return this.getStringAttribute('mptcppendingjointhreshold');
  }
  public set mptcppendingjointhreshold(value: string) {
    this._mptcppendingjointhreshold = value;
  }
  public resetMptcppendingjointhreshold() {
    this._mptcppendingjointhreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcppendingjointhresholdInput() {
    return this._mptcppendingjointhreshold;
  }

  // mptcprtostoswitchsf - computed: true, optional: true, required: false
  private _mptcprtostoswitchsf?: number; 
  public get mptcprtostoswitchsf() {
    return this.getNumberAttribute('mptcprtostoswitchsf');
  }
  public set mptcprtostoswitchsf(value: number) {
    this._mptcprtostoswitchsf = value;
  }
  public resetMptcprtostoswitchsf() {
    this._mptcprtostoswitchsf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcprtostoswitchsfInput() {
    return this._mptcprtostoswitchsf;
  }

  // mptcpsfreplacetimeout - computed: true, optional: true, required: false
  private _mptcpsfreplacetimeout?: string; 
  public get mptcpsfreplacetimeout() {
    return this.getStringAttribute('mptcpsfreplacetimeout');
  }
  public set mptcpsfreplacetimeout(value: string) {
    this._mptcpsfreplacetimeout = value;
  }
  public resetMptcpsfreplacetimeout() {
    this._mptcpsfreplacetimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpsfreplacetimeoutInput() {
    return this._mptcpsfreplacetimeout;
  }

  // mptcpsftimeout - computed: true, optional: true, required: false
  private _mptcpsftimeout?: string; 
  public get mptcpsftimeout() {
    return this.getStringAttribute('mptcpsftimeout');
  }
  public set mptcpsftimeout(value: string) {
    this._mptcpsftimeout = value;
  }
  public resetMptcpsftimeout() {
    this._mptcpsftimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpsftimeoutInput() {
    return this._mptcpsftimeout;
  }

  // mptcpusebackupondss - computed: true, optional: true, required: false
  private _mptcpusebackupondss?: string; 
  public get mptcpusebackupondss() {
    return this.getStringAttribute('mptcpusebackupondss');
  }
  public set mptcpusebackupondss(value: string) {
    this._mptcpusebackupondss = value;
  }
  public resetMptcpusebackupondss() {
    this._mptcpusebackupondss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpusebackupondssInput() {
    return this._mptcpusebackupondss;
  }

  // msslearndelay - computed: true, optional: true, required: false
  private _msslearndelay?: number; 
  public get msslearndelay() {
    return this.getNumberAttribute('msslearndelay');
  }
  public set msslearndelay(value: number) {
    this._msslearndelay = value;
  }
  public resetMsslearndelay() {
    this._msslearndelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msslearndelayInput() {
    return this._msslearndelay;
  }

  // msslearninterval - computed: true, optional: true, required: false
  private _msslearninterval?: number; 
  public get msslearninterval() {
    return this.getNumberAttribute('msslearninterval');
  }
  public set msslearninterval(value: number) {
    this._msslearninterval = value;
  }
  public resetMsslearninterval() {
    this._msslearninterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msslearnintervalInput() {
    return this._msslearninterval;
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

  // oooqsize - computed: true, optional: true, required: false
  private _oooqsize?: string; 
  public get oooqsize() {
    return this.getStringAttribute('oooqsize');
  }
  public set oooqsize(value: string) {
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

  // recvbuffsize - computed: true, optional: true, required: false
  private _recvbuffsize?: number; 
  public get recvbuffsize() {
    return this.getNumberAttribute('recvbuffsize');
  }
  public set recvbuffsize(value: number) {
    this._recvbuffsize = value;
  }
  public resetRecvbuffsize() {
    this._recvbuffsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvbuffsizeInput() {
    return this._recvbuffsize;
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

  // synattackdetection - computed: true, optional: true, required: false
  private _synattackdetection?: string; 
  public get synattackdetection() {
    return this.getStringAttribute('synattackdetection');
  }
  public set synattackdetection(value: string) {
    this._synattackdetection = value;
  }
  public resetSynattackdetection() {
    this._synattackdetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synattackdetectionInput() {
    return this._synattackdetection;
  }

  // synholdfastgiveup - computed: true, optional: true, required: false
  private _synholdfastgiveup?: number; 
  public get synholdfastgiveup() {
    return this.getNumberAttribute('synholdfastgiveup');
  }
  public set synholdfastgiveup(value: number) {
    this._synholdfastgiveup = value;
  }
  public resetSynholdfastgiveup() {
    this._synholdfastgiveup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synholdfastgiveupInput() {
    return this._synholdfastgiveup;
  }

  // tcpfastopencookietimeout - computed: true, optional: true, required: false
  private _tcpfastopencookietimeout?: string; 
  public get tcpfastopencookietimeout() {
    return this.getStringAttribute('tcpfastopencookietimeout');
  }
  public set tcpfastopencookietimeout(value: string) {
    this._tcpfastopencookietimeout = value;
  }
  public resetTcpfastopencookietimeout() {
    this._tcpfastopencookietimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpfastopencookietimeoutInput() {
    return this._tcpfastopencookietimeout;
  }

  // tcpfintimeout - computed: true, optional: true, required: false
  private _tcpfintimeout?: number; 
  public get tcpfintimeout() {
    return this.getNumberAttribute('tcpfintimeout');
  }
  public set tcpfintimeout(value: number) {
    this._tcpfintimeout = value;
  }
  public resetTcpfintimeout() {
    this._tcpfintimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpfintimeoutInput() {
    return this._tcpfintimeout;
  }

  // tcpmaxretries - computed: true, optional: true, required: false
  private _tcpmaxretries?: number; 
  public get tcpmaxretries() {
    return this.getNumberAttribute('tcpmaxretries');
  }
  public set tcpmaxretries(value: number) {
    this._tcpmaxretries = value;
  }
  public resetTcpmaxretries() {
    this._tcpmaxretries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpmaxretriesInput() {
    return this._tcpmaxretries;
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
  private _wsval?: string; 
  public get wsval() {
    return this.getStringAttribute('wsval');
  }
  public set wsval(value: string) {
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
      ackonpush: cdktf.stringToTerraform(this._ackonpush),
      autosyncookietimeout: cdktf.numberToTerraform(this._autosyncookietimeout),
      connflushifnomem: cdktf.stringToTerraform(this._connflushifnomem),
      connflushthres: cdktf.numberToTerraform(this._connflushthres),
      delayedack: cdktf.numberToTerraform(this._delayedack),
      downstaterst: cdktf.stringToTerraform(this._downstaterst),
      id: cdktf.stringToTerraform(this._id),
      initialcwnd: cdktf.numberToTerraform(this._initialcwnd),
      kaprobeupdatelastactivity: cdktf.stringToTerraform(this._kaprobeupdatelastactivity),
      learnvsvrmss: cdktf.stringToTerraform(this._learnvsvrmss),
      limitedpersist: cdktf.stringToTerraform(this._limitedpersist),
      maxburst: cdktf.numberToTerraform(this._maxburst),
      maxdynserverprobes: cdktf.numberToTerraform(this._maxdynserverprobes),
      maxpktpermss: cdktf.stringToTerraform(this._maxpktpermss),
      maxsynackretx: cdktf.numberToTerraform(this._maxsynackretx),
      maxsynhold: cdktf.numberToTerraform(this._maxsynhold),
      maxsynholdperprobe: cdktf.numberToTerraform(this._maxsynholdperprobe),
      maxtimewaitconn: cdktf.numberToTerraform(this._maxtimewaitconn),
      minrto: cdktf.numberToTerraform(this._minrto),
      mptcpchecksum: cdktf.stringToTerraform(this._mptcpchecksum),
      mptcpclosemptcpsessiononlastsfclose: cdktf.stringToTerraform(this._mptcpclosemptcpsessiononlastsfclose),
      mptcpconcloseonpassivesf: cdktf.stringToTerraform(this._mptcpconcloseonpassivesf),
      mptcpimmediatesfcloseonfin: cdktf.stringToTerraform(this._mptcpimmediatesfcloseonfin),
      mptcpmaxpendingsf: cdktf.stringToTerraform(this._mptcpmaxpendingsf),
      mptcpmaxsf: cdktf.numberToTerraform(this._mptcpmaxsf),
      mptcppendingjointhreshold: cdktf.stringToTerraform(this._mptcppendingjointhreshold),
      mptcprtostoswitchsf: cdktf.numberToTerraform(this._mptcprtostoswitchsf),
      mptcpsfreplacetimeout: cdktf.stringToTerraform(this._mptcpsfreplacetimeout),
      mptcpsftimeout: cdktf.stringToTerraform(this._mptcpsftimeout),
      mptcpusebackupondss: cdktf.stringToTerraform(this._mptcpusebackupondss),
      msslearndelay: cdktf.numberToTerraform(this._msslearndelay),
      msslearninterval: cdktf.numberToTerraform(this._msslearninterval),
      nagle: cdktf.stringToTerraform(this._nagle),
      oooqsize: cdktf.stringToTerraform(this._oooqsize),
      pktperretx: cdktf.numberToTerraform(this._pktperretx),
      recvbuffsize: cdktf.numberToTerraform(this._recvbuffsize),
      sack: cdktf.stringToTerraform(this._sack),
      slowstartincr: cdktf.numberToTerraform(this._slowstartincr),
      synattackdetection: cdktf.stringToTerraform(this._synattackdetection),
      synholdfastgiveup: cdktf.numberToTerraform(this._synholdfastgiveup),
      tcpfastopencookietimeout: cdktf.stringToTerraform(this._tcpfastopencookietimeout),
      tcpfintimeout: cdktf.numberToTerraform(this._tcpfintimeout),
      tcpmaxretries: cdktf.numberToTerraform(this._tcpmaxretries),
      ws: cdktf.stringToTerraform(this._ws),
      wsval: cdktf.stringToTerraform(this._wsval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ackonpush: {
        value: cdktf.stringToHclTerraform(this._ackonpush),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autosyncookietimeout: {
        value: cdktf.numberToHclTerraform(this._autosyncookietimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connflushifnomem: {
        value: cdktf.stringToHclTerraform(this._connflushifnomem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connflushthres: {
        value: cdktf.numberToHclTerraform(this._connflushthres),
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
      downstaterst: {
        value: cdktf.stringToHclTerraform(this._downstaterst),
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
      kaprobeupdatelastactivity: {
        value: cdktf.stringToHclTerraform(this._kaprobeupdatelastactivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      learnvsvrmss: {
        value: cdktf.stringToHclTerraform(this._learnvsvrmss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limitedpersist: {
        value: cdktf.stringToHclTerraform(this._limitedpersist),
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
      maxdynserverprobes: {
        value: cdktf.numberToHclTerraform(this._maxdynserverprobes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxpktpermss: {
        value: cdktf.stringToHclTerraform(this._maxpktpermss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxsynackretx: {
        value: cdktf.numberToHclTerraform(this._maxsynackretx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxsynhold: {
        value: cdktf.numberToHclTerraform(this._maxsynhold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxsynholdperprobe: {
        value: cdktf.numberToHclTerraform(this._maxsynholdperprobe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxtimewaitconn: {
        value: cdktf.numberToHclTerraform(this._maxtimewaitconn),
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
      mptcpchecksum: {
        value: cdktf.stringToHclTerraform(this._mptcpchecksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mptcpclosemptcpsessiononlastsfclose: {
        value: cdktf.stringToHclTerraform(this._mptcpclosemptcpsessiononlastsfclose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mptcpconcloseonpassivesf: {
        value: cdktf.stringToHclTerraform(this._mptcpconcloseonpassivesf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mptcpimmediatesfcloseonfin: {
        value: cdktf.stringToHclTerraform(this._mptcpimmediatesfcloseonfin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mptcpmaxpendingsf: {
        value: cdktf.stringToHclTerraform(this._mptcpmaxpendingsf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mptcpmaxsf: {
        value: cdktf.numberToHclTerraform(this._mptcpmaxsf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mptcppendingjointhreshold: {
        value: cdktf.stringToHclTerraform(this._mptcppendingjointhreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mptcprtostoswitchsf: {
        value: cdktf.numberToHclTerraform(this._mptcprtostoswitchsf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mptcpsfreplacetimeout: {
        value: cdktf.stringToHclTerraform(this._mptcpsfreplacetimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mptcpsftimeout: {
        value: cdktf.stringToHclTerraform(this._mptcpsftimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mptcpusebackupondss: {
        value: cdktf.stringToHclTerraform(this._mptcpusebackupondss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msslearndelay: {
        value: cdktf.numberToHclTerraform(this._msslearndelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msslearninterval: {
        value: cdktf.numberToHclTerraform(this._msslearninterval),
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
      oooqsize: {
        value: cdktf.stringToHclTerraform(this._oooqsize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pktperretx: {
        value: cdktf.numberToHclTerraform(this._pktperretx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recvbuffsize: {
        value: cdktf.numberToHclTerraform(this._recvbuffsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sack: {
        value: cdktf.stringToHclTerraform(this._sack),
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
      synattackdetection: {
        value: cdktf.stringToHclTerraform(this._synattackdetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synholdfastgiveup: {
        value: cdktf.numberToHclTerraform(this._synholdfastgiveup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcpfastopencookietimeout: {
        value: cdktf.stringToHclTerraform(this._tcpfastopencookietimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcpfintimeout: {
        value: cdktf.numberToHclTerraform(this._tcpfintimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcpmaxretries: {
        value: cdktf.numberToHclTerraform(this._tcpmaxretries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ws: {
        value: cdktf.stringToHclTerraform(this._ws),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wsval: {
        value: cdktf.stringToHclTerraform(this._wsval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
