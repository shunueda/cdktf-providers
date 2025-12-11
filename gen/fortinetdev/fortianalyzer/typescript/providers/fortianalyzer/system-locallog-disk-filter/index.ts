// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLocallogDiskFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#aid SystemLocallogDiskFilter#aid}
  */
  readonly aid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#controller SystemLocallogDiskFilter#controller}
  */
  readonly controller?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#devcfg SystemLocallogDiskFilter#devcfg}
  */
  readonly devcfg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#devops SystemLocallogDiskFilter#devops}
  */
  readonly devops?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#diskquota SystemLocallogDiskFilter#diskquota}
  */
  readonly diskquota?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#dm SystemLocallogDiskFilter#dm}
  */
  readonly dm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#docker SystemLocallogDiskFilter#docker}
  */
  readonly docker?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#dvm SystemLocallogDiskFilter#dvm}
  */
  readonly dvm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#ediscovery SystemLocallogDiskFilter#ediscovery}
  */
  readonly ediscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#epmgr SystemLocallogDiskFilter#epmgr}
  */
  readonly epmgr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#event SystemLocallogDiskFilter#event}
  */
  readonly event?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#eventmgmt SystemLocallogDiskFilter#eventmgmt}
  */
  readonly eventmgmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#faz SystemLocallogDiskFilter#faz}
  */
  readonly faz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#fazha SystemLocallogDiskFilter#fazha}
  */
  readonly fazha?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#fazsys SystemLocallogDiskFilter#fazsys}
  */
  readonly fazsys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#fgd SystemLocallogDiskFilter#fgd}
  */
  readonly fgd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#fgfm SystemLocallogDiskFilter#fgfm}
  */
  readonly fgfm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#fips SystemLocallogDiskFilter#fips}
  */
  readonly fips?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#fmgws SystemLocallogDiskFilter#fmgws}
  */
  readonly fmgws?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#fmlmgr SystemLocallogDiskFilter#fmlmgr}
  */
  readonly fmlmgr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#fmwmgr SystemLocallogDiskFilter#fmwmgr}
  */
  readonly fmwmgr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#fortiview SystemLocallogDiskFilter#fortiview}
  */
  readonly fortiview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#glbcfg SystemLocallogDiskFilter#glbcfg}
  */
  readonly glbcfg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#ha SystemLocallogDiskFilter#ha}
  */
  readonly ha?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#hcache SystemLocallogDiskFilter#hcache}
  */
  readonly hcache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#id SystemLocallogDiskFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#incident SystemLocallogDiskFilter#incident}
  */
  readonly incident?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#iolog SystemLocallogDiskFilter#iolog}
  */
  readonly iolog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#logd SystemLocallogDiskFilter#logd}
  */
  readonly logd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#logdb SystemLocallogDiskFilter#logdb}
  */
  readonly logdb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#logdev SystemLocallogDiskFilter#logdev}
  */
  readonly logdev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#logfile SystemLocallogDiskFilter#logfile}
  */
  readonly logfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#logging SystemLocallogDiskFilter#logging}
  */
  readonly logging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#lrmgr SystemLocallogDiskFilter#lrmgr}
  */
  readonly lrmgr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#objcfg SystemLocallogDiskFilter#objcfg}
  */
  readonly objcfg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#report SystemLocallogDiskFilter#report}
  */
  readonly report?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#rev SystemLocallogDiskFilter#rev}
  */
  readonly rev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#rtmon SystemLocallogDiskFilter#rtmon}
  */
  readonly rtmon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#scfw SystemLocallogDiskFilter#scfw}
  */
  readonly scfw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#scply SystemLocallogDiskFilter#scply}
  */
  readonly scply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#scrmgr SystemLocallogDiskFilter#scrmgr}
  */
  readonly scrmgr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#scvpn SystemLocallogDiskFilter#scvpn}
  */
  readonly scvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#system SystemLocallogDiskFilter#system}
  */
  readonly systemAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#webport SystemLocallogDiskFilter#webport}
  */
  readonly webport?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter fortianalyzer_system_locallog_disk_filter}
*/
export class SystemLocallogDiskFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_locallog_disk_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLocallogDiskFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLocallogDiskFilter to import
  * @param importFromId The id of the existing SystemLocallogDiskFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLocallogDiskFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_locallog_disk_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_locallog_disk_filter fortianalyzer_system_locallog_disk_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLocallogDiskFilterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLocallogDiskFilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_locallog_disk_filter',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aid = config.aid;
    this._controller = config.controller;
    this._devcfg = config.devcfg;
    this._devops = config.devops;
    this._diskquota = config.diskquota;
    this._dm = config.dm;
    this._docker = config.docker;
    this._dvm = config.dvm;
    this._ediscovery = config.ediscovery;
    this._epmgr = config.epmgr;
    this._event = config.event;
    this._eventmgmt = config.eventmgmt;
    this._faz = config.faz;
    this._fazha = config.fazha;
    this._fazsys = config.fazsys;
    this._fgd = config.fgd;
    this._fgfm = config.fgfm;
    this._fips = config.fips;
    this._fmgws = config.fmgws;
    this._fmlmgr = config.fmlmgr;
    this._fmwmgr = config.fmwmgr;
    this._fortiview = config.fortiview;
    this._glbcfg = config.glbcfg;
    this._ha = config.ha;
    this._hcache = config.hcache;
    this._id = config.id;
    this._incident = config.incident;
    this._iolog = config.iolog;
    this._logd = config.logd;
    this._logdb = config.logdb;
    this._logdev = config.logdev;
    this._logfile = config.logfile;
    this._logging = config.logging;
    this._lrmgr = config.lrmgr;
    this._objcfg = config.objcfg;
    this._report = config.report;
    this._rev = config.rev;
    this._rtmon = config.rtmon;
    this._scfw = config.scfw;
    this._scply = config.scply;
    this._scrmgr = config.scrmgr;
    this._scvpn = config.scvpn;
    this._system = config.systemAttribute;
    this._webport = config.webport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aid - computed: true, optional: true, required: false
  private _aid?: string; 
  public get aid() {
    return this.getStringAttribute('aid');
  }
  public set aid(value: string) {
    this._aid = value;
  }
  public resetAid() {
    this._aid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aidInput() {
    return this._aid;
  }

  // controller - computed: true, optional: true, required: false
  private _controller?: string; 
  public get controller() {
    return this.getStringAttribute('controller');
  }
  public set controller(value: string) {
    this._controller = value;
  }
  public resetController() {
    this._controller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller;
  }

  // devcfg - computed: true, optional: true, required: false
  private _devcfg?: string; 
  public get devcfg() {
    return this.getStringAttribute('devcfg');
  }
  public set devcfg(value: string) {
    this._devcfg = value;
  }
  public resetDevcfg() {
    this._devcfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devcfgInput() {
    return this._devcfg;
  }

  // devops - computed: true, optional: true, required: false
  private _devops?: string; 
  public get devops() {
    return this.getStringAttribute('devops');
  }
  public set devops(value: string) {
    this._devops = value;
  }
  public resetDevops() {
    this._devops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devopsInput() {
    return this._devops;
  }

  // diskquota - computed: true, optional: true, required: false
  private _diskquota?: string; 
  public get diskquota() {
    return this.getStringAttribute('diskquota');
  }
  public set diskquota(value: string) {
    this._diskquota = value;
  }
  public resetDiskquota() {
    this._diskquota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskquotaInput() {
    return this._diskquota;
  }

  // dm - computed: true, optional: true, required: false
  private _dm?: string; 
  public get dm() {
    return this.getStringAttribute('dm');
  }
  public set dm(value: string) {
    this._dm = value;
  }
  public resetDm() {
    this._dm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmInput() {
    return this._dm;
  }

  // docker - computed: true, optional: true, required: false
  private _docker?: string; 
  public get docker() {
    return this.getStringAttribute('docker');
  }
  public set docker(value: string) {
    this._docker = value;
  }
  public resetDocker() {
    this._docker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerInput() {
    return this._docker;
  }

  // dvm - computed: true, optional: true, required: false
  private _dvm?: string; 
  public get dvm() {
    return this.getStringAttribute('dvm');
  }
  public set dvm(value: string) {
    this._dvm = value;
  }
  public resetDvm() {
    this._dvm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvmInput() {
    return this._dvm;
  }

  // ediscovery - computed: true, optional: true, required: false
  private _ediscovery?: string; 
  public get ediscovery() {
    return this.getStringAttribute('ediscovery');
  }
  public set ediscovery(value: string) {
    this._ediscovery = value;
  }
  public resetEdiscovery() {
    this._ediscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ediscoveryInput() {
    return this._ediscovery;
  }

  // epmgr - computed: true, optional: true, required: false
  private _epmgr?: string; 
  public get epmgr() {
    return this.getStringAttribute('epmgr');
  }
  public set epmgr(value: string) {
    this._epmgr = value;
  }
  public resetEpmgr() {
    this._epmgr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epmgrInput() {
    return this._epmgr;
  }

  // event - computed: true, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // eventmgmt - computed: true, optional: true, required: false
  private _eventmgmt?: string; 
  public get eventmgmt() {
    return this.getStringAttribute('eventmgmt');
  }
  public set eventmgmt(value: string) {
    this._eventmgmt = value;
  }
  public resetEventmgmt() {
    this._eventmgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventmgmtInput() {
    return this._eventmgmt;
  }

  // faz - computed: true, optional: true, required: false
  private _faz?: string; 
  public get faz() {
    return this.getStringAttribute('faz');
  }
  public set faz(value: string) {
    this._faz = value;
  }
  public resetFaz() {
    this._faz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazInput() {
    return this._faz;
  }

  // fazha - computed: true, optional: true, required: false
  private _fazha?: string; 
  public get fazha() {
    return this.getStringAttribute('fazha');
  }
  public set fazha(value: string) {
    this._fazha = value;
  }
  public resetFazha() {
    this._fazha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazhaInput() {
    return this._fazha;
  }

  // fazsys - computed: true, optional: true, required: false
  private _fazsys?: string; 
  public get fazsys() {
    return this.getStringAttribute('fazsys');
  }
  public set fazsys(value: string) {
    this._fazsys = value;
  }
  public resetFazsys() {
    this._fazsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazsysInput() {
    return this._fazsys;
  }

  // fgd - computed: true, optional: true, required: false
  private _fgd?: string; 
  public get fgd() {
    return this.getStringAttribute('fgd');
  }
  public set fgd(value: string) {
    this._fgd = value;
  }
  public resetFgd() {
    this._fgd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgdInput() {
    return this._fgd;
  }

  // fgfm - computed: true, optional: true, required: false
  private _fgfm?: string; 
  public get fgfm() {
    return this.getStringAttribute('fgfm');
  }
  public set fgfm(value: string) {
    this._fgfm = value;
  }
  public resetFgfm() {
    this._fgfm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgfmInput() {
    return this._fgfm;
  }

  // fips - computed: true, optional: true, required: false
  private _fips?: string; 
  public get fips() {
    return this.getStringAttribute('fips');
  }
  public set fips(value: string) {
    this._fips = value;
  }
  public resetFips() {
    this._fips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsInput() {
    return this._fips;
  }

  // fmgws - computed: true, optional: true, required: false
  private _fmgws?: string; 
  public get fmgws() {
    return this.getStringAttribute('fmgws');
  }
  public set fmgws(value: string) {
    this._fmgws = value;
  }
  public resetFmgws() {
    this._fmgws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgwsInput() {
    return this._fmgws;
  }

  // fmlmgr - computed: true, optional: true, required: false
  private _fmlmgr?: string; 
  public get fmlmgr() {
    return this.getStringAttribute('fmlmgr');
  }
  public set fmlmgr(value: string) {
    this._fmlmgr = value;
  }
  public resetFmlmgr() {
    this._fmlmgr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmlmgrInput() {
    return this._fmlmgr;
  }

  // fmwmgr - computed: true, optional: true, required: false
  private _fmwmgr?: string; 
  public get fmwmgr() {
    return this.getStringAttribute('fmwmgr');
  }
  public set fmwmgr(value: string) {
    this._fmwmgr = value;
  }
  public resetFmwmgr() {
    this._fmwmgr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmwmgrInput() {
    return this._fmwmgr;
  }

  // fortiview - computed: true, optional: true, required: false
  private _fortiview?: string; 
  public get fortiview() {
    return this.getStringAttribute('fortiview');
  }
  public set fortiview(value: string) {
    this._fortiview = value;
  }
  public resetFortiview() {
    this._fortiview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiviewInput() {
    return this._fortiview;
  }

  // glbcfg - computed: true, optional: true, required: false
  private _glbcfg?: string; 
  public get glbcfg() {
    return this.getStringAttribute('glbcfg');
  }
  public set glbcfg(value: string) {
    this._glbcfg = value;
  }
  public resetGlbcfg() {
    this._glbcfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glbcfgInput() {
    return this._glbcfg;
  }

  // ha - computed: true, optional: true, required: false
  private _ha?: string; 
  public get ha() {
    return this.getStringAttribute('ha');
  }
  public set ha(value: string) {
    this._ha = value;
  }
  public resetHa() {
    this._ha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInput() {
    return this._ha;
  }

  // hcache - computed: true, optional: true, required: false
  private _hcache?: string; 
  public get hcache() {
    return this.getStringAttribute('hcache');
  }
  public set hcache(value: string) {
    this._hcache = value;
  }
  public resetHcache() {
    this._hcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcacheInput() {
    return this._hcache;
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

  // incident - computed: true, optional: true, required: false
  private _incident?: string; 
  public get incident() {
    return this.getStringAttribute('incident');
  }
  public set incident(value: string) {
    this._incident = value;
  }
  public resetIncident() {
    this._incident = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentInput() {
    return this._incident;
  }

  // iolog - computed: true, optional: true, required: false
  private _iolog?: string; 
  public get iolog() {
    return this.getStringAttribute('iolog');
  }
  public set iolog(value: string) {
    this._iolog = value;
  }
  public resetIolog() {
    this._iolog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iologInput() {
    return this._iolog;
  }

  // logd - computed: true, optional: true, required: false
  private _logd?: string; 
  public get logd() {
    return this.getStringAttribute('logd');
  }
  public set logd(value: string) {
    this._logd = value;
  }
  public resetLogd() {
    this._logd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logdInput() {
    return this._logd;
  }

  // logdb - computed: true, optional: true, required: false
  private _logdb?: string; 
  public get logdb() {
    return this.getStringAttribute('logdb');
  }
  public set logdb(value: string) {
    this._logdb = value;
  }
  public resetLogdb() {
    this._logdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logdbInput() {
    return this._logdb;
  }

  // logdev - computed: true, optional: true, required: false
  private _logdev?: string; 
  public get logdev() {
    return this.getStringAttribute('logdev');
  }
  public set logdev(value: string) {
    this._logdev = value;
  }
  public resetLogdev() {
    this._logdev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logdevInput() {
    return this._logdev;
  }

  // logfile - computed: true, optional: true, required: false
  private _logfile?: string; 
  public get logfile() {
    return this.getStringAttribute('logfile');
  }
  public set logfile(value: string) {
    this._logfile = value;
  }
  public resetLogfile() {
    this._logfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logfileInput() {
    return this._logfile;
  }

  // logging - computed: true, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // lrmgr - computed: true, optional: true, required: false
  private _lrmgr?: string; 
  public get lrmgr() {
    return this.getStringAttribute('lrmgr');
  }
  public set lrmgr(value: string) {
    this._lrmgr = value;
  }
  public resetLrmgr() {
    this._lrmgr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lrmgrInput() {
    return this._lrmgr;
  }

  // objcfg - computed: true, optional: true, required: false
  private _objcfg?: string; 
  public get objcfg() {
    return this.getStringAttribute('objcfg');
  }
  public set objcfg(value: string) {
    this._objcfg = value;
  }
  public resetObjcfg() {
    this._objcfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objcfgInput() {
    return this._objcfg;
  }

  // report - computed: true, optional: true, required: false
  private _report?: string; 
  public get report() {
    return this.getStringAttribute('report');
  }
  public set report(value: string) {
    this._report = value;
  }
  public resetReport() {
    this._report = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report;
  }

  // rev - computed: true, optional: true, required: false
  private _rev?: string; 
  public get rev() {
    return this.getStringAttribute('rev');
  }
  public set rev(value: string) {
    this._rev = value;
  }
  public resetRev() {
    this._rev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revInput() {
    return this._rev;
  }

  // rtmon - computed: true, optional: true, required: false
  private _rtmon?: string; 
  public get rtmon() {
    return this.getStringAttribute('rtmon');
  }
  public set rtmon(value: string) {
    this._rtmon = value;
  }
  public resetRtmon() {
    this._rtmon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtmonInput() {
    return this._rtmon;
  }

  // scfw - computed: true, optional: true, required: false
  private _scfw?: string; 
  public get scfw() {
    return this.getStringAttribute('scfw');
  }
  public set scfw(value: string) {
    this._scfw = value;
  }
  public resetScfw() {
    this._scfw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scfwInput() {
    return this._scfw;
  }

  // scply - computed: true, optional: true, required: false
  private _scply?: string; 
  public get scply() {
    return this.getStringAttribute('scply');
  }
  public set scply(value: string) {
    this._scply = value;
  }
  public resetScply() {
    this._scply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scplyInput() {
    return this._scply;
  }

  // scrmgr - computed: true, optional: true, required: false
  private _scrmgr?: string; 
  public get scrmgr() {
    return this.getStringAttribute('scrmgr');
  }
  public set scrmgr(value: string) {
    this._scrmgr = value;
  }
  public resetScrmgr() {
    this._scrmgr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrmgrInput() {
    return this._scrmgr;
  }

  // scvpn - computed: true, optional: true, required: false
  private _scvpn?: string; 
  public get scvpn() {
    return this.getStringAttribute('scvpn');
  }
  public set scvpn(value: string) {
    this._scvpn = value;
  }
  public resetScvpn() {
    this._scvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scvpnInput() {
    return this._scvpn;
  }

  // system - computed: true, optional: true, required: false
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // webport - computed: true, optional: true, required: false
  private _webport?: string; 
  public get webport() {
    return this.getStringAttribute('webport');
  }
  public set webport(value: string) {
    this._webport = value;
  }
  public resetWebport() {
    this._webport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webportInput() {
    return this._webport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aid: cdktf.stringToTerraform(this._aid),
      controller: cdktf.stringToTerraform(this._controller),
      devcfg: cdktf.stringToTerraform(this._devcfg),
      devops: cdktf.stringToTerraform(this._devops),
      diskquota: cdktf.stringToTerraform(this._diskquota),
      dm: cdktf.stringToTerraform(this._dm),
      docker: cdktf.stringToTerraform(this._docker),
      dvm: cdktf.stringToTerraform(this._dvm),
      ediscovery: cdktf.stringToTerraform(this._ediscovery),
      epmgr: cdktf.stringToTerraform(this._epmgr),
      event: cdktf.stringToTerraform(this._event),
      eventmgmt: cdktf.stringToTerraform(this._eventmgmt),
      faz: cdktf.stringToTerraform(this._faz),
      fazha: cdktf.stringToTerraform(this._fazha),
      fazsys: cdktf.stringToTerraform(this._fazsys),
      fgd: cdktf.stringToTerraform(this._fgd),
      fgfm: cdktf.stringToTerraform(this._fgfm),
      fips: cdktf.stringToTerraform(this._fips),
      fmgws: cdktf.stringToTerraform(this._fmgws),
      fmlmgr: cdktf.stringToTerraform(this._fmlmgr),
      fmwmgr: cdktf.stringToTerraform(this._fmwmgr),
      fortiview: cdktf.stringToTerraform(this._fortiview),
      glbcfg: cdktf.stringToTerraform(this._glbcfg),
      ha: cdktf.stringToTerraform(this._ha),
      hcache: cdktf.stringToTerraform(this._hcache),
      id: cdktf.stringToTerraform(this._id),
      incident: cdktf.stringToTerraform(this._incident),
      iolog: cdktf.stringToTerraform(this._iolog),
      logd: cdktf.stringToTerraform(this._logd),
      logdb: cdktf.stringToTerraform(this._logdb),
      logdev: cdktf.stringToTerraform(this._logdev),
      logfile: cdktf.stringToTerraform(this._logfile),
      logging: cdktf.stringToTerraform(this._logging),
      lrmgr: cdktf.stringToTerraform(this._lrmgr),
      objcfg: cdktf.stringToTerraform(this._objcfg),
      report: cdktf.stringToTerraform(this._report),
      rev: cdktf.stringToTerraform(this._rev),
      rtmon: cdktf.stringToTerraform(this._rtmon),
      scfw: cdktf.stringToTerraform(this._scfw),
      scply: cdktf.stringToTerraform(this._scply),
      scrmgr: cdktf.stringToTerraform(this._scrmgr),
      scvpn: cdktf.stringToTerraform(this._scvpn),
      system: cdktf.stringToTerraform(this._system),
      webport: cdktf.stringToTerraform(this._webport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aid: {
        value: cdktf.stringToHclTerraform(this._aid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller: {
        value: cdktf.stringToHclTerraform(this._controller),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devcfg: {
        value: cdktf.stringToHclTerraform(this._devcfg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devops: {
        value: cdktf.stringToHclTerraform(this._devops),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diskquota: {
        value: cdktf.stringToHclTerraform(this._diskquota),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dm: {
        value: cdktf.stringToHclTerraform(this._dm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker: {
        value: cdktf.stringToHclTerraform(this._docker),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dvm: {
        value: cdktf.stringToHclTerraform(this._dvm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ediscovery: {
        value: cdktf.stringToHclTerraform(this._ediscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epmgr: {
        value: cdktf.stringToHclTerraform(this._epmgr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event: {
        value: cdktf.stringToHclTerraform(this._event),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventmgmt: {
        value: cdktf.stringToHclTerraform(this._eventmgmt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faz: {
        value: cdktf.stringToHclTerraform(this._faz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fazha: {
        value: cdktf.stringToHclTerraform(this._fazha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fazsys: {
        value: cdktf.stringToHclTerraform(this._fazsys),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgd: {
        value: cdktf.stringToHclTerraform(this._fgd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgfm: {
        value: cdktf.stringToHclTerraform(this._fgfm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fips: {
        value: cdktf.stringToHclTerraform(this._fips),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmgws: {
        value: cdktf.stringToHclTerraform(this._fmgws),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmlmgr: {
        value: cdktf.stringToHclTerraform(this._fmlmgr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmwmgr: {
        value: cdktf.stringToHclTerraform(this._fmwmgr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiview: {
        value: cdktf.stringToHclTerraform(this._fortiview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glbcfg: {
        value: cdktf.stringToHclTerraform(this._glbcfg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha: {
        value: cdktf.stringToHclTerraform(this._ha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hcache: {
        value: cdktf.stringToHclTerraform(this._hcache),
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
      incident: {
        value: cdktf.stringToHclTerraform(this._incident),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iolog: {
        value: cdktf.stringToHclTerraform(this._iolog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logd: {
        value: cdktf.stringToHclTerraform(this._logd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logdb: {
        value: cdktf.stringToHclTerraform(this._logdb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logdev: {
        value: cdktf.stringToHclTerraform(this._logdev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logfile: {
        value: cdktf.stringToHclTerraform(this._logfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging: {
        value: cdktf.stringToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lrmgr: {
        value: cdktf.stringToHclTerraform(this._lrmgr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      objcfg: {
        value: cdktf.stringToHclTerraform(this._objcfg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report: {
        value: cdktf.stringToHclTerraform(this._report),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rev: {
        value: cdktf.stringToHclTerraform(this._rev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtmon: {
        value: cdktf.stringToHclTerraform(this._rtmon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scfw: {
        value: cdktf.stringToHclTerraform(this._scfw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scply: {
        value: cdktf.stringToHclTerraform(this._scply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scrmgr: {
        value: cdktf.stringToHclTerraform(this._scrmgr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scvpn: {
        value: cdktf.stringToHclTerraform(this._scvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system: {
        value: cdktf.stringToHclTerraform(this._system),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webport: {
        value: cdktf.stringToHclTerraform(this._webport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
