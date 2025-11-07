// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDebugConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#access_vlan SystemDebug#access_vlan}
  */
  readonly accessVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#alertd SystemDebug#alertd}
  */
  readonly alertd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#apache SystemDebug#apache}
  */
  readonly apache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#auto_script SystemDebug#auto_script}
  */
  readonly autoScript?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#autod SystemDebug#autod}
  */
  readonly autod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#bfdd SystemDebug#bfdd}
  */
  readonly bfdd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#bgpd SystemDebug#bgpd}
  */
  readonly bgpd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#cli SystemDebug#cli}
  */
  readonly cli?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#ctrld SystemDebug#ctrld}
  */
  readonly ctrld?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#cu_swtpd SystemDebug#cu_swtpd}
  */
  readonly cuSwtpd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#delayclid SystemDebug#delayclid}
  */
  readonly delayclid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#dhcp6c SystemDebug#dhcp6c}
  */
  readonly dhcp6C?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#dhcpc SystemDebug#dhcpc}
  */
  readonly dhcpc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#dhcprelay SystemDebug#dhcprelay}
  */
  readonly dhcprelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#dhcps SystemDebug#dhcps}
  */
  readonly dhcps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#dmid SystemDebug#dmid}
  */
  readonly dmid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#dnsproxy SystemDebug#dnsproxy}
  */
  readonly dnsproxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#eap_proxy SystemDebug#eap_proxy}
  */
  readonly eapProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#email_server SystemDebug#email_server}
  */
  readonly emailServer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#erspan_auto_mgr SystemDebug#erspan_auto_mgr}
  */
  readonly erspanAutoMgr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#flan_mgr SystemDebug#flan_mgr}
  */
  readonly flanMgr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#flcmdd SystemDebug#flcmdd}
  */
  readonly flcmdd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#flow_export SystemDebug#flow_export}
  */
  readonly flowExport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#fnbamd SystemDebug#fnbamd}
  */
  readonly fnbamd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#fortilinkd SystemDebug#fortilinkd}
  */
  readonly fortilinkd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#fpmd SystemDebug#fpmd}
  */
  readonly fpmd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#gratarp SystemDebug#gratarp}
  */
  readonly gratarp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#gui SystemDebug#gui}
  */
  readonly gui?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#gvrpd SystemDebug#gvrpd}
  */
  readonly gvrpd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#httpsd SystemDebug#httpsd}
  */
  readonly httpsd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#id SystemDebug#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#ip6addrd SystemDebug#ip6addrd}
  */
  readonly ip6Addrd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#ipconflictd SystemDebug#ipconflictd}
  */
  readonly ipconflictd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#isisd SystemDebug#isisd}
  */
  readonly isisd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#l2d SystemDebug#l2d}
  */
  readonly l2D?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#l2dbg SystemDebug#l2dbg}
  */
  readonly l2Dbg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#l3 SystemDebug#l3}
  */
  readonly l3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#lacpd SystemDebug#lacpd}
  */
  readonly lacpd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#libswitchd SystemDebug#libswitchd}
  */
  readonly libswitchd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#link_monitor SystemDebug#link_monitor}
  */
  readonly linkMonitor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#lldpmedd SystemDebug#lldpmedd}
  */
  readonly lldpmedd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#macsec_srv SystemDebug#macsec_srv}
  */
  readonly macsecSrv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#mcast_snooping SystemDebug#mcast_snooping}
  */
  readonly mcastSnooping?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#miglogd SystemDebug#miglogd}
  */
  readonly miglogd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#ntpd SystemDebug#ntpd}
  */
  readonly ntpd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#nwmcfgd SystemDebug#nwmcfgd}
  */
  readonly nwmcfgd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#nwmonitord SystemDebug#nwmonitord}
  */
  readonly nwmonitord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#ospf6d SystemDebug#ospf6d}
  */
  readonly ospf6D?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#ospfd SystemDebug#ospfd}
  */
  readonly ospfd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#pbrd SystemDebug#pbrd}
  */
  readonly pbrd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#pimd SystemDebug#pimd}
  */
  readonly pimd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#portspeedd SystemDebug#portspeedd}
  */
  readonly portspeedd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#radius_das SystemDebug#radius_das}
  */
  readonly radiusDas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#radvd SystemDebug#radvd}
  */
  readonly radvd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#raguard SystemDebug#raguard}
  */
  readonly raguard?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#ripd SystemDebug#ripd}
  */
  readonly ripd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#ripngd SystemDebug#ripngd}
  */
  readonly ripngd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#router_launcher SystemDebug#router_launcher}
  */
  readonly routerLauncher?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#rsyslogd SystemDebug#rsyslogd}
  */
  readonly rsyslogd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#rvi_daemon SystemDebug#rvi_daemon}
  */
  readonly rviDaemon?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#scep SystemDebug#scep}
  */
  readonly scep?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#sflowd SystemDebug#sflowd}
  */
  readonly sflowd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#snmpd SystemDebug#snmpd}
  */
  readonly snmpd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#sshd SystemDebug#sshd}
  */
  readonly sshd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#staticd SystemDebug#staticd}
  */
  readonly staticd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#statsd SystemDebug#statsd}
  */
  readonly statsd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#stpd SystemDebug#stpd}
  */
  readonly stpd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#switch_launcher SystemDebug#switch_launcher}
  */
  readonly switchLauncher?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#trunkd SystemDebug#trunkd}
  */
  readonly trunkd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#vrrpd SystemDebug#vrrpd}
  */
  readonly vrrpd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#wiredap SystemDebug#wiredap}
  */
  readonly wiredap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#wpa_supp SystemDebug#wpa_supp}
  */
  readonly wpaSupp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#zebra SystemDebug#zebra}
  */
  readonly zebra?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug fortiswitch_system_debug}
*/
export class SystemDebug extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_debug";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDebug resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDebug to import
  * @param importFromId The id of the existing SystemDebug that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDebug to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_debug", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_debug fortiswitch_system_debug} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDebugConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDebugConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_debug',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessVlan = config.accessVlan;
    this._alertd = config.alertd;
    this._apache = config.apache;
    this._autoScript = config.autoScript;
    this._autod = config.autod;
    this._bfdd = config.bfdd;
    this._bgpd = config.bgpd;
    this._cli = config.cli;
    this._ctrld = config.ctrld;
    this._cuSwtpd = config.cuSwtpd;
    this._delayclid = config.delayclid;
    this._dhcp6C = config.dhcp6C;
    this._dhcpc = config.dhcpc;
    this._dhcprelay = config.dhcprelay;
    this._dhcps = config.dhcps;
    this._dmid = config.dmid;
    this._dnsproxy = config.dnsproxy;
    this._eapProxy = config.eapProxy;
    this._emailServer = config.emailServer;
    this._erspanAutoMgr = config.erspanAutoMgr;
    this._flanMgr = config.flanMgr;
    this._flcmdd = config.flcmdd;
    this._flowExport = config.flowExport;
    this._fnbamd = config.fnbamd;
    this._fortilinkd = config.fortilinkd;
    this._fpmd = config.fpmd;
    this._gratarp = config.gratarp;
    this._gui = config.gui;
    this._gvrpd = config.gvrpd;
    this._httpsd = config.httpsd;
    this._id = config.id;
    this._ip6Addrd = config.ip6Addrd;
    this._ipconflictd = config.ipconflictd;
    this._isisd = config.isisd;
    this._l2D = config.l2D;
    this._l2Dbg = config.l2Dbg;
    this._l3 = config.l3;
    this._lacpd = config.lacpd;
    this._libswitchd = config.libswitchd;
    this._linkMonitor = config.linkMonitor;
    this._lldpmedd = config.lldpmedd;
    this._macsecSrv = config.macsecSrv;
    this._mcastSnooping = config.mcastSnooping;
    this._miglogd = config.miglogd;
    this._ntpd = config.ntpd;
    this._nwmcfgd = config.nwmcfgd;
    this._nwmonitord = config.nwmonitord;
    this._ospf6D = config.ospf6D;
    this._ospfd = config.ospfd;
    this._pbrd = config.pbrd;
    this._pimd = config.pimd;
    this._portspeedd = config.portspeedd;
    this._radiusDas = config.radiusDas;
    this._radvd = config.radvd;
    this._raguard = config.raguard;
    this._ripd = config.ripd;
    this._ripngd = config.ripngd;
    this._routerLauncher = config.routerLauncher;
    this._rsyslogd = config.rsyslogd;
    this._rviDaemon = config.rviDaemon;
    this._scep = config.scep;
    this._sflowd = config.sflowd;
    this._snmpd = config.snmpd;
    this._sshd = config.sshd;
    this._staticd = config.staticd;
    this._statsd = config.statsd;
    this._stpd = config.stpd;
    this._switchLauncher = config.switchLauncher;
    this._trunkd = config.trunkd;
    this._vrrpd = config.vrrpd;
    this._wiredap = config.wiredap;
    this._wpaSupp = config.wpaSupp;
    this._zebra = config.zebra;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_vlan - computed: true, optional: true, required: false
  private _accessVlan?: number; 
  public get accessVlan() {
    return this.getNumberAttribute('access_vlan');
  }
  public set accessVlan(value: number) {
    this._accessVlan = value;
  }
  public resetAccessVlan() {
    this._accessVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVlanInput() {
    return this._accessVlan;
  }

  // alertd - computed: true, optional: true, required: false
  private _alertd?: number; 
  public get alertd() {
    return this.getNumberAttribute('alertd');
  }
  public set alertd(value: number) {
    this._alertd = value;
  }
  public resetAlertd() {
    this._alertd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertdInput() {
    return this._alertd;
  }

  // apache - computed: true, optional: true, required: false
  private _apache?: number; 
  public get apache() {
    return this.getNumberAttribute('apache');
  }
  public set apache(value: number) {
    this._apache = value;
  }
  public resetApache() {
    this._apache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apacheInput() {
    return this._apache;
  }

  // auto_script - computed: true, optional: true, required: false
  private _autoScript?: number; 
  public get autoScript() {
    return this.getNumberAttribute('auto_script');
  }
  public set autoScript(value: number) {
    this._autoScript = value;
  }
  public resetAutoScript() {
    this._autoScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScriptInput() {
    return this._autoScript;
  }

  // autod - computed: true, optional: true, required: false
  private _autod?: number; 
  public get autod() {
    return this.getNumberAttribute('autod');
  }
  public set autod(value: number) {
    this._autod = value;
  }
  public resetAutod() {
    this._autod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodInput() {
    return this._autod;
  }

  // bfdd - computed: true, optional: true, required: false
  private _bfdd?: number; 
  public get bfdd() {
    return this.getNumberAttribute('bfdd');
  }
  public set bfdd(value: number) {
    this._bfdd = value;
  }
  public resetBfdd() {
    this._bfdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfddInput() {
    return this._bfdd;
  }

  // bgpd - computed: true, optional: true, required: false
  private _bgpd?: number; 
  public get bgpd() {
    return this.getNumberAttribute('bgpd');
  }
  public set bgpd(value: number) {
    this._bgpd = value;
  }
  public resetBgpd() {
    this._bgpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpdInput() {
    return this._bgpd;
  }

  // cli - computed: true, optional: true, required: false
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

  // ctrld - computed: true, optional: true, required: false
  private _ctrld?: number; 
  public get ctrld() {
    return this.getNumberAttribute('ctrld');
  }
  public set ctrld(value: number) {
    this._ctrld = value;
  }
  public resetCtrld() {
    this._ctrld = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrldInput() {
    return this._ctrld;
  }

  // cu_swtpd - computed: true, optional: true, required: false
  private _cuSwtpd?: number; 
  public get cuSwtpd() {
    return this.getNumberAttribute('cu_swtpd');
  }
  public set cuSwtpd(value: number) {
    this._cuSwtpd = value;
  }
  public resetCuSwtpd() {
    this._cuSwtpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cuSwtpdInput() {
    return this._cuSwtpd;
  }

  // delayclid - computed: true, optional: true, required: false
  private _delayclid?: number; 
  public get delayclid() {
    return this.getNumberAttribute('delayclid');
  }
  public set delayclid(value: number) {
    this._delayclid = value;
  }
  public resetDelayclid() {
    this._delayclid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayclidInput() {
    return this._delayclid;
  }

  // dhcp6c - computed: true, optional: true, required: false
  private _dhcp6C?: number; 
  public get dhcp6C() {
    return this.getNumberAttribute('dhcp6c');
  }
  public set dhcp6C(value: number) {
    this._dhcp6C = value;
  }
  public resetDhcp6C() {
    this._dhcp6C = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6CInput() {
    return this._dhcp6C;
  }

  // dhcpc - computed: true, optional: true, required: false
  private _dhcpc?: number; 
  public get dhcpc() {
    return this.getNumberAttribute('dhcpc');
  }
  public set dhcpc(value: number) {
    this._dhcpc = value;
  }
  public resetDhcpc() {
    this._dhcpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpcInput() {
    return this._dhcpc;
  }

  // dhcprelay - computed: true, optional: true, required: false
  private _dhcprelay?: number; 
  public get dhcprelay() {
    return this.getNumberAttribute('dhcprelay');
  }
  public set dhcprelay(value: number) {
    this._dhcprelay = value;
  }
  public resetDhcprelay() {
    this._dhcprelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcprelayInput() {
    return this._dhcprelay;
  }

  // dhcps - computed: true, optional: true, required: false
  private _dhcps?: number; 
  public get dhcps() {
    return this.getNumberAttribute('dhcps');
  }
  public set dhcps(value: number) {
    this._dhcps = value;
  }
  public resetDhcps() {
    this._dhcps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpsInput() {
    return this._dhcps;
  }

  // dmid - computed: true, optional: true, required: false
  private _dmid?: number; 
  public get dmid() {
    return this.getNumberAttribute('dmid');
  }
  public set dmid(value: number) {
    this._dmid = value;
  }
  public resetDmid() {
    this._dmid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmidInput() {
    return this._dmid;
  }

  // dnsproxy - computed: true, optional: true, required: false
  private _dnsproxy?: number; 
  public get dnsproxy() {
    return this.getNumberAttribute('dnsproxy');
  }
  public set dnsproxy(value: number) {
    this._dnsproxy = value;
  }
  public resetDnsproxy() {
    this._dnsproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsproxyInput() {
    return this._dnsproxy;
  }

  // eap_proxy - computed: true, optional: true, required: false
  private _eapProxy?: number; 
  public get eapProxy() {
    return this.getNumberAttribute('eap_proxy');
  }
  public set eapProxy(value: number) {
    this._eapProxy = value;
  }
  public resetEapProxy() {
    this._eapProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapProxyInput() {
    return this._eapProxy;
  }

  // email_server - computed: true, optional: true, required: false
  private _emailServer?: number; 
  public get emailServer() {
    return this.getNumberAttribute('email_server');
  }
  public set emailServer(value: number) {
    this._emailServer = value;
  }
  public resetEmailServer() {
    this._emailServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailServerInput() {
    return this._emailServer;
  }

  // erspan_auto_mgr - computed: true, optional: true, required: false
  private _erspanAutoMgr?: number; 
  public get erspanAutoMgr() {
    return this.getNumberAttribute('erspan_auto_mgr');
  }
  public set erspanAutoMgr(value: number) {
    this._erspanAutoMgr = value;
  }
  public resetErspanAutoMgr() {
    this._erspanAutoMgr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erspanAutoMgrInput() {
    return this._erspanAutoMgr;
  }

  // flan_mgr - computed: true, optional: true, required: false
  private _flanMgr?: number; 
  public get flanMgr() {
    return this.getNumberAttribute('flan_mgr');
  }
  public set flanMgr(value: number) {
    this._flanMgr = value;
  }
  public resetFlanMgr() {
    this._flanMgr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flanMgrInput() {
    return this._flanMgr;
  }

  // flcmdd - computed: true, optional: true, required: false
  private _flcmdd?: number; 
  public get flcmdd() {
    return this.getNumberAttribute('flcmdd');
  }
  public set flcmdd(value: number) {
    this._flcmdd = value;
  }
  public resetFlcmdd() {
    this._flcmdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flcmddInput() {
    return this._flcmdd;
  }

  // flow_export - computed: true, optional: true, required: false
  private _flowExport?: number; 
  public get flowExport() {
    return this.getNumberAttribute('flow_export');
  }
  public set flowExport(value: number) {
    this._flowExport = value;
  }
  public resetFlowExport() {
    this._flowExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowExportInput() {
    return this._flowExport;
  }

  // fnbamd - computed: true, optional: true, required: false
  private _fnbamd?: number; 
  public get fnbamd() {
    return this.getNumberAttribute('fnbamd');
  }
  public set fnbamd(value: number) {
    this._fnbamd = value;
  }
  public resetFnbamd() {
    this._fnbamd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnbamdInput() {
    return this._fnbamd;
  }

  // fortilinkd - computed: true, optional: true, required: false
  private _fortilinkd?: number; 
  public get fortilinkd() {
    return this.getNumberAttribute('fortilinkd');
  }
  public set fortilinkd(value: number) {
    this._fortilinkd = value;
  }
  public resetFortilinkd() {
    this._fortilinkd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkdInput() {
    return this._fortilinkd;
  }

  // fpmd - computed: true, optional: true, required: false
  private _fpmd?: number; 
  public get fpmd() {
    return this.getNumberAttribute('fpmd');
  }
  public set fpmd(value: number) {
    this._fpmd = value;
  }
  public resetFpmd() {
    this._fpmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpmdInput() {
    return this._fpmd;
  }

  // gratarp - computed: true, optional: true, required: false
  private _gratarp?: number; 
  public get gratarp() {
    return this.getNumberAttribute('gratarp');
  }
  public set gratarp(value: number) {
    this._gratarp = value;
  }
  public resetGratarp() {
    this._gratarp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gratarpInput() {
    return this._gratarp;
  }

  // gui - computed: true, optional: true, required: false
  private _gui?: number; 
  public get gui() {
    return this.getNumberAttribute('gui');
  }
  public set gui(value: number) {
    this._gui = value;
  }
  public resetGui() {
    this._gui = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiInput() {
    return this._gui;
  }

  // gvrpd - computed: true, optional: true, required: false
  private _gvrpd?: number; 
  public get gvrpd() {
    return this.getNumberAttribute('gvrpd');
  }
  public set gvrpd(value: number) {
    this._gvrpd = value;
  }
  public resetGvrpd() {
    this._gvrpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvrpdInput() {
    return this._gvrpd;
  }

  // httpsd - computed: true, optional: true, required: false
  private _httpsd?: number; 
  public get httpsd() {
    return this.getNumberAttribute('httpsd');
  }
  public set httpsd(value: number) {
    this._httpsd = value;
  }
  public resetHttpsd() {
    this._httpsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsdInput() {
    return this._httpsd;
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

  // ip6addrd - computed: true, optional: true, required: false
  private _ip6Addrd?: number; 
  public get ip6Addrd() {
    return this.getNumberAttribute('ip6addrd');
  }
  public set ip6Addrd(value: number) {
    this._ip6Addrd = value;
  }
  public resetIp6Addrd() {
    this._ip6Addrd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddrdInput() {
    return this._ip6Addrd;
  }

  // ipconflictd - computed: true, optional: true, required: false
  private _ipconflictd?: number; 
  public get ipconflictd() {
    return this.getNumberAttribute('ipconflictd');
  }
  public set ipconflictd(value: number) {
    this._ipconflictd = value;
  }
  public resetIpconflictd() {
    this._ipconflictd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconflictdInput() {
    return this._ipconflictd;
  }

  // isisd - computed: true, optional: true, required: false
  private _isisd?: number; 
  public get isisd() {
    return this.getNumberAttribute('isisd');
  }
  public set isisd(value: number) {
    this._isisd = value;
  }
  public resetIsisd() {
    this._isisd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisdInput() {
    return this._isisd;
  }

  // l2d - computed: true, optional: true, required: false
  private _l2D?: number; 
  public get l2D() {
    return this.getNumberAttribute('l2d');
  }
  public set l2D(value: number) {
    this._l2D = value;
  }
  public resetL2D() {
    this._l2D = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2DInput() {
    return this._l2D;
  }

  // l2dbg - computed: true, optional: true, required: false
  private _l2Dbg?: number; 
  public get l2Dbg() {
    return this.getNumberAttribute('l2dbg');
  }
  public set l2Dbg(value: number) {
    this._l2Dbg = value;
  }
  public resetL2Dbg() {
    this._l2Dbg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2DbgInput() {
    return this._l2Dbg;
  }

  // l3 - computed: true, optional: true, required: false
  private _l3?: number; 
  public get l3() {
    return this.getNumberAttribute('l3');
  }
  public set l3(value: number) {
    this._l3 = value;
  }
  public resetL3() {
    this._l3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3Input() {
    return this._l3;
  }

  // lacpd - computed: true, optional: true, required: false
  private _lacpd?: number; 
  public get lacpd() {
    return this.getNumberAttribute('lacpd');
  }
  public set lacpd(value: number) {
    this._lacpd = value;
  }
  public resetLacpd() {
    this._lacpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpdInput() {
    return this._lacpd;
  }

  // libswitchd - computed: true, optional: true, required: false
  private _libswitchd?: number; 
  public get libswitchd() {
    return this.getNumberAttribute('libswitchd');
  }
  public set libswitchd(value: number) {
    this._libswitchd = value;
  }
  public resetLibswitchd() {
    this._libswitchd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libswitchdInput() {
    return this._libswitchd;
  }

  // link_monitor - computed: true, optional: true, required: false
  private _linkMonitor?: number; 
  public get linkMonitor() {
    return this.getNumberAttribute('link_monitor');
  }
  public set linkMonitor(value: number) {
    this._linkMonitor = value;
  }
  public resetLinkMonitor() {
    this._linkMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkMonitorInput() {
    return this._linkMonitor;
  }

  // lldpmedd - computed: true, optional: true, required: false
  private _lldpmedd?: number; 
  public get lldpmedd() {
    return this.getNumberAttribute('lldpmedd');
  }
  public set lldpmedd(value: number) {
    this._lldpmedd = value;
  }
  public resetLldpmedd() {
    this._lldpmedd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpmeddInput() {
    return this._lldpmedd;
  }

  // macsec_srv - computed: true, optional: true, required: false
  private _macsecSrv?: number; 
  public get macsecSrv() {
    return this.getNumberAttribute('macsec_srv');
  }
  public set macsecSrv(value: number) {
    this._macsecSrv = value;
  }
  public resetMacsecSrv() {
    this._macsecSrv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecSrvInput() {
    return this._macsecSrv;
  }

  // mcast_snooping - computed: true, optional: true, required: false
  private _mcastSnooping?: number; 
  public get mcastSnooping() {
    return this.getNumberAttribute('mcast_snooping');
  }
  public set mcastSnooping(value: number) {
    this._mcastSnooping = value;
  }
  public resetMcastSnooping() {
    this._mcastSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastSnoopingInput() {
    return this._mcastSnooping;
  }

  // miglogd - computed: true, optional: true, required: false
  private _miglogd?: number; 
  public get miglogd() {
    return this.getNumberAttribute('miglogd');
  }
  public set miglogd(value: number) {
    this._miglogd = value;
  }
  public resetMiglogd() {
    this._miglogd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get miglogdInput() {
    return this._miglogd;
  }

  // ntpd - computed: true, optional: true, required: false
  private _ntpd?: number; 
  public get ntpd() {
    return this.getNumberAttribute('ntpd');
  }
  public set ntpd(value: number) {
    this._ntpd = value;
  }
  public resetNtpd() {
    this._ntpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpdInput() {
    return this._ntpd;
  }

  // nwmcfgd - computed: true, optional: true, required: false
  private _nwmcfgd?: number; 
  public get nwmcfgd() {
    return this.getNumberAttribute('nwmcfgd');
  }
  public set nwmcfgd(value: number) {
    this._nwmcfgd = value;
  }
  public resetNwmcfgd() {
    this._nwmcfgd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwmcfgdInput() {
    return this._nwmcfgd;
  }

  // nwmonitord - computed: true, optional: true, required: false
  private _nwmonitord?: number; 
  public get nwmonitord() {
    return this.getNumberAttribute('nwmonitord');
  }
  public set nwmonitord(value: number) {
    this._nwmonitord = value;
  }
  public resetNwmonitord() {
    this._nwmonitord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwmonitordInput() {
    return this._nwmonitord;
  }

  // ospf6d - computed: true, optional: true, required: false
  private _ospf6D?: number; 
  public get ospf6D() {
    return this.getNumberAttribute('ospf6d');
  }
  public set ospf6D(value: number) {
    this._ospf6D = value;
  }
  public resetOspf6D() {
    this._ospf6D = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospf6DInput() {
    return this._ospf6D;
  }

  // ospfd - computed: true, optional: true, required: false
  private _ospfd?: number; 
  public get ospfd() {
    return this.getNumberAttribute('ospfd');
  }
  public set ospfd(value: number) {
    this._ospfd = value;
  }
  public resetOspfd() {
    this._ospfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfdInput() {
    return this._ospfd;
  }

  // pbrd - computed: true, optional: true, required: false
  private _pbrd?: number; 
  public get pbrd() {
    return this.getNumberAttribute('pbrd');
  }
  public set pbrd(value: number) {
    this._pbrd = value;
  }
  public resetPbrd() {
    this._pbrd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbrdInput() {
    return this._pbrd;
  }

  // pimd - computed: true, optional: true, required: false
  private _pimd?: number; 
  public get pimd() {
    return this.getNumberAttribute('pimd');
  }
  public set pimd(value: number) {
    this._pimd = value;
  }
  public resetPimd() {
    this._pimd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimdInput() {
    return this._pimd;
  }

  // portspeedd - computed: true, optional: true, required: false
  private _portspeedd?: number; 
  public get portspeedd() {
    return this.getNumberAttribute('portspeedd');
  }
  public set portspeedd(value: number) {
    this._portspeedd = value;
  }
  public resetPortspeedd() {
    this._portspeedd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portspeeddInput() {
    return this._portspeedd;
  }

  // radius_das - computed: true, optional: true, required: false
  private _radiusDas?: number; 
  public get radiusDas() {
    return this.getNumberAttribute('radius_das');
  }
  public set radiusDas(value: number) {
    this._radiusDas = value;
  }
  public resetRadiusDas() {
    this._radiusDas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDasInput() {
    return this._radiusDas;
  }

  // radvd - computed: true, optional: true, required: false
  private _radvd?: number; 
  public get radvd() {
    return this.getNumberAttribute('radvd');
  }
  public set radvd(value: number) {
    this._radvd = value;
  }
  public resetRadvd() {
    this._radvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radvdInput() {
    return this._radvd;
  }

  // raguard - computed: true, optional: true, required: false
  private _raguard?: number; 
  public get raguard() {
    return this.getNumberAttribute('raguard');
  }
  public set raguard(value: number) {
    this._raguard = value;
  }
  public resetRaguard() {
    this._raguard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raguardInput() {
    return this._raguard;
  }

  // ripd - computed: true, optional: true, required: false
  private _ripd?: number; 
  public get ripd() {
    return this.getNumberAttribute('ripd');
  }
  public set ripd(value: number) {
    this._ripd = value;
  }
  public resetRipd() {
    this._ripd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripdInput() {
    return this._ripd;
  }

  // ripngd - computed: true, optional: true, required: false
  private _ripngd?: number; 
  public get ripngd() {
    return this.getNumberAttribute('ripngd');
  }
  public set ripngd(value: number) {
    this._ripngd = value;
  }
  public resetRipngd() {
    this._ripngd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripngdInput() {
    return this._ripngd;
  }

  // router_launcher - computed: true, optional: true, required: false
  private _routerLauncher?: number; 
  public get routerLauncher() {
    return this.getNumberAttribute('router_launcher');
  }
  public set routerLauncher(value: number) {
    this._routerLauncher = value;
  }
  public resetRouterLauncher() {
    this._routerLauncher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerLauncherInput() {
    return this._routerLauncher;
  }

  // rsyslogd - computed: true, optional: true, required: false
  private _rsyslogd?: number; 
  public get rsyslogd() {
    return this.getNumberAttribute('rsyslogd');
  }
  public set rsyslogd(value: number) {
    this._rsyslogd = value;
  }
  public resetRsyslogd() {
    this._rsyslogd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsyslogdInput() {
    return this._rsyslogd;
  }

  // rvi_daemon - computed: true, optional: true, required: false
  private _rviDaemon?: number; 
  public get rviDaemon() {
    return this.getNumberAttribute('rvi_daemon');
  }
  public set rviDaemon(value: number) {
    this._rviDaemon = value;
  }
  public resetRviDaemon() {
    this._rviDaemon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rviDaemonInput() {
    return this._rviDaemon;
  }

  // scep - computed: true, optional: true, required: false
  private _scep?: number; 
  public get scep() {
    return this.getNumberAttribute('scep');
  }
  public set scep(value: number) {
    this._scep = value;
  }
  public resetScep() {
    this._scep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepInput() {
    return this._scep;
  }

  // sflowd - computed: true, optional: true, required: false
  private _sflowd?: number; 
  public get sflowd() {
    return this.getNumberAttribute('sflowd');
  }
  public set sflowd(value: number) {
    this._sflowd = value;
  }
  public resetSflowd() {
    this._sflowd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowdInput() {
    return this._sflowd;
  }

  // snmpd - computed: true, optional: true, required: false
  private _snmpd?: number; 
  public get snmpd() {
    return this.getNumberAttribute('snmpd');
  }
  public set snmpd(value: number) {
    this._snmpd = value;
  }
  public resetSnmpd() {
    this._snmpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpdInput() {
    return this._snmpd;
  }

  // sshd - computed: true, optional: true, required: false
  private _sshd?: number; 
  public get sshd() {
    return this.getNumberAttribute('sshd');
  }
  public set sshd(value: number) {
    this._sshd = value;
  }
  public resetSshd() {
    this._sshd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshdInput() {
    return this._sshd;
  }

  // staticd - computed: true, optional: true, required: false
  private _staticd?: number; 
  public get staticd() {
    return this.getNumberAttribute('staticd');
  }
  public set staticd(value: number) {
    this._staticd = value;
  }
  public resetStaticd() {
    this._staticd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticdInput() {
    return this._staticd;
  }

  // statsd - computed: true, optional: true, required: false
  private _statsd?: number; 
  public get statsd() {
    return this.getNumberAttribute('statsd');
  }
  public set statsd(value: number) {
    this._statsd = value;
  }
  public resetStatsd() {
    this._statsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsdInput() {
    return this._statsd;
  }

  // stpd - computed: true, optional: true, required: false
  private _stpd?: number; 
  public get stpd() {
    return this.getNumberAttribute('stpd');
  }
  public set stpd(value: number) {
    this._stpd = value;
  }
  public resetStpd() {
    this._stpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpdInput() {
    return this._stpd;
  }

  // switch_launcher - computed: true, optional: true, required: false
  private _switchLauncher?: number; 
  public get switchLauncher() {
    return this.getNumberAttribute('switch_launcher');
  }
  public set switchLauncher(value: number) {
    this._switchLauncher = value;
  }
  public resetSwitchLauncher() {
    this._switchLauncher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchLauncherInput() {
    return this._switchLauncher;
  }

  // trunkd - computed: true, optional: true, required: false
  private _trunkd?: number; 
  public get trunkd() {
    return this.getNumberAttribute('trunkd');
  }
  public set trunkd(value: number) {
    this._trunkd = value;
  }
  public resetTrunkd() {
    this._trunkd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkdInput() {
    return this._trunkd;
  }

  // vrrpd - computed: true, optional: true, required: false
  private _vrrpd?: number; 
  public get vrrpd() {
    return this.getNumberAttribute('vrrpd');
  }
  public set vrrpd(value: number) {
    this._vrrpd = value;
  }
  public resetVrrpd() {
    this._vrrpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpdInput() {
    return this._vrrpd;
  }

  // wiredap - computed: true, optional: true, required: false
  private _wiredap?: number; 
  public get wiredap() {
    return this.getNumberAttribute('wiredap');
  }
  public set wiredap(value: number) {
    this._wiredap = value;
  }
  public resetWiredap() {
    this._wiredap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wiredapInput() {
    return this._wiredap;
  }

  // wpa_supp - computed: true, optional: true, required: false
  private _wpaSupp?: number; 
  public get wpaSupp() {
    return this.getNumberAttribute('wpa_supp');
  }
  public set wpaSupp(value: number) {
    this._wpaSupp = value;
  }
  public resetWpaSupp() {
    this._wpaSupp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wpaSuppInput() {
    return this._wpaSupp;
  }

  // zebra - computed: true, optional: true, required: false
  private _zebra?: number; 
  public get zebra() {
    return this.getNumberAttribute('zebra');
  }
  public set zebra(value: number) {
    this._zebra = value;
  }
  public resetZebra() {
    this._zebra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zebraInput() {
    return this._zebra;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_vlan: cdktf.numberToTerraform(this._accessVlan),
      alertd: cdktf.numberToTerraform(this._alertd),
      apache: cdktf.numberToTerraform(this._apache),
      auto_script: cdktf.numberToTerraform(this._autoScript),
      autod: cdktf.numberToTerraform(this._autod),
      bfdd: cdktf.numberToTerraform(this._bfdd),
      bgpd: cdktf.numberToTerraform(this._bgpd),
      cli: cdktf.numberToTerraform(this._cli),
      ctrld: cdktf.numberToTerraform(this._ctrld),
      cu_swtpd: cdktf.numberToTerraform(this._cuSwtpd),
      delayclid: cdktf.numberToTerraform(this._delayclid),
      dhcp6c: cdktf.numberToTerraform(this._dhcp6C),
      dhcpc: cdktf.numberToTerraform(this._dhcpc),
      dhcprelay: cdktf.numberToTerraform(this._dhcprelay),
      dhcps: cdktf.numberToTerraform(this._dhcps),
      dmid: cdktf.numberToTerraform(this._dmid),
      dnsproxy: cdktf.numberToTerraform(this._dnsproxy),
      eap_proxy: cdktf.numberToTerraform(this._eapProxy),
      email_server: cdktf.numberToTerraform(this._emailServer),
      erspan_auto_mgr: cdktf.numberToTerraform(this._erspanAutoMgr),
      flan_mgr: cdktf.numberToTerraform(this._flanMgr),
      flcmdd: cdktf.numberToTerraform(this._flcmdd),
      flow_export: cdktf.numberToTerraform(this._flowExport),
      fnbamd: cdktf.numberToTerraform(this._fnbamd),
      fortilinkd: cdktf.numberToTerraform(this._fortilinkd),
      fpmd: cdktf.numberToTerraform(this._fpmd),
      gratarp: cdktf.numberToTerraform(this._gratarp),
      gui: cdktf.numberToTerraform(this._gui),
      gvrpd: cdktf.numberToTerraform(this._gvrpd),
      httpsd: cdktf.numberToTerraform(this._httpsd),
      id: cdktf.stringToTerraform(this._id),
      ip6addrd: cdktf.numberToTerraform(this._ip6Addrd),
      ipconflictd: cdktf.numberToTerraform(this._ipconflictd),
      isisd: cdktf.numberToTerraform(this._isisd),
      l2d: cdktf.numberToTerraform(this._l2D),
      l2dbg: cdktf.numberToTerraform(this._l2Dbg),
      l3: cdktf.numberToTerraform(this._l3),
      lacpd: cdktf.numberToTerraform(this._lacpd),
      libswitchd: cdktf.numberToTerraform(this._libswitchd),
      link_monitor: cdktf.numberToTerraform(this._linkMonitor),
      lldpmedd: cdktf.numberToTerraform(this._lldpmedd),
      macsec_srv: cdktf.numberToTerraform(this._macsecSrv),
      mcast_snooping: cdktf.numberToTerraform(this._mcastSnooping),
      miglogd: cdktf.numberToTerraform(this._miglogd),
      ntpd: cdktf.numberToTerraform(this._ntpd),
      nwmcfgd: cdktf.numberToTerraform(this._nwmcfgd),
      nwmonitord: cdktf.numberToTerraform(this._nwmonitord),
      ospf6d: cdktf.numberToTerraform(this._ospf6D),
      ospfd: cdktf.numberToTerraform(this._ospfd),
      pbrd: cdktf.numberToTerraform(this._pbrd),
      pimd: cdktf.numberToTerraform(this._pimd),
      portspeedd: cdktf.numberToTerraform(this._portspeedd),
      radius_das: cdktf.numberToTerraform(this._radiusDas),
      radvd: cdktf.numberToTerraform(this._radvd),
      raguard: cdktf.numberToTerraform(this._raguard),
      ripd: cdktf.numberToTerraform(this._ripd),
      ripngd: cdktf.numberToTerraform(this._ripngd),
      router_launcher: cdktf.numberToTerraform(this._routerLauncher),
      rsyslogd: cdktf.numberToTerraform(this._rsyslogd),
      rvi_daemon: cdktf.numberToTerraform(this._rviDaemon),
      scep: cdktf.numberToTerraform(this._scep),
      sflowd: cdktf.numberToTerraform(this._sflowd),
      snmpd: cdktf.numberToTerraform(this._snmpd),
      sshd: cdktf.numberToTerraform(this._sshd),
      staticd: cdktf.numberToTerraform(this._staticd),
      statsd: cdktf.numberToTerraform(this._statsd),
      stpd: cdktf.numberToTerraform(this._stpd),
      switch_launcher: cdktf.numberToTerraform(this._switchLauncher),
      trunkd: cdktf.numberToTerraform(this._trunkd),
      vrrpd: cdktf.numberToTerraform(this._vrrpd),
      wiredap: cdktf.numberToTerraform(this._wiredap),
      wpa_supp: cdktf.numberToTerraform(this._wpaSupp),
      zebra: cdktf.numberToTerraform(this._zebra),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_vlan: {
        value: cdktf.numberToHclTerraform(this._accessVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alertd: {
        value: cdktf.numberToHclTerraform(this._alertd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apache: {
        value: cdktf.numberToHclTerraform(this._apache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_script: {
        value: cdktf.numberToHclTerraform(this._autoScript),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autod: {
        value: cdktf.numberToHclTerraform(this._autod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfdd: {
        value: cdktf.numberToHclTerraform(this._bfdd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgpd: {
        value: cdktf.numberToHclTerraform(this._bgpd),
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
      ctrld: {
        value: cdktf.numberToHclTerraform(this._ctrld),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cu_swtpd: {
        value: cdktf.numberToHclTerraform(this._cuSwtpd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delayclid: {
        value: cdktf.numberToHclTerraform(this._delayclid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp6c: {
        value: cdktf.numberToHclTerraform(this._dhcp6C),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcpc: {
        value: cdktf.numberToHclTerraform(this._dhcpc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcprelay: {
        value: cdktf.numberToHclTerraform(this._dhcprelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcps: {
        value: cdktf.numberToHclTerraform(this._dhcps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dmid: {
        value: cdktf.numberToHclTerraform(this._dmid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dnsproxy: {
        value: cdktf.numberToHclTerraform(this._dnsproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eap_proxy: {
        value: cdktf.numberToHclTerraform(this._eapProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email_server: {
        value: cdktf.numberToHclTerraform(this._emailServer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      erspan_auto_mgr: {
        value: cdktf.numberToHclTerraform(this._erspanAutoMgr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flan_mgr: {
        value: cdktf.numberToHclTerraform(this._flanMgr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flcmdd: {
        value: cdktf.numberToHclTerraform(this._flcmdd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flow_export: {
        value: cdktf.numberToHclTerraform(this._flowExport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fnbamd: {
        value: cdktf.numberToHclTerraform(this._fnbamd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortilinkd: {
        value: cdktf.numberToHclTerraform(this._fortilinkd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fpmd: {
        value: cdktf.numberToHclTerraform(this._fpmd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gratarp: {
        value: cdktf.numberToHclTerraform(this._gratarp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gui: {
        value: cdktf.numberToHclTerraform(this._gui),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gvrpd: {
        value: cdktf.numberToHclTerraform(this._gvrpd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      httpsd: {
        value: cdktf.numberToHclTerraform(this._httpsd),
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
      ip6addrd: {
        value: cdktf.numberToHclTerraform(this._ip6Addrd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipconflictd: {
        value: cdktf.numberToHclTerraform(this._ipconflictd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isisd: {
        value: cdktf.numberToHclTerraform(this._isisd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2d: {
        value: cdktf.numberToHclTerraform(this._l2D),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2dbg: {
        value: cdktf.numberToHclTerraform(this._l2Dbg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3: {
        value: cdktf.numberToHclTerraform(this._l3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lacpd: {
        value: cdktf.numberToHclTerraform(this._lacpd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      libswitchd: {
        value: cdktf.numberToHclTerraform(this._libswitchd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_monitor: {
        value: cdktf.numberToHclTerraform(this._linkMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lldpmedd: {
        value: cdktf.numberToHclTerraform(this._lldpmedd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      macsec_srv: {
        value: cdktf.numberToHclTerraform(this._macsecSrv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mcast_snooping: {
        value: cdktf.numberToHclTerraform(this._mcastSnooping),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      miglogd: {
        value: cdktf.numberToHclTerraform(this._miglogd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntpd: {
        value: cdktf.numberToHclTerraform(this._ntpd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nwmcfgd: {
        value: cdktf.numberToHclTerraform(this._nwmcfgd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nwmonitord: {
        value: cdktf.numberToHclTerraform(this._nwmonitord),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospf6d: {
        value: cdktf.numberToHclTerraform(this._ospf6D),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospfd: {
        value: cdktf.numberToHclTerraform(this._ospfd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pbrd: {
        value: cdktf.numberToHclTerraform(this._pbrd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pimd: {
        value: cdktf.numberToHclTerraform(this._pimd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      portspeedd: {
        value: cdktf.numberToHclTerraform(this._portspeedd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_das: {
        value: cdktf.numberToHclTerraform(this._radiusDas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radvd: {
        value: cdktf.numberToHclTerraform(this._radvd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      raguard: {
        value: cdktf.numberToHclTerraform(this._raguard),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ripd: {
        value: cdktf.numberToHclTerraform(this._ripd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ripngd: {
        value: cdktf.numberToHclTerraform(this._ripngd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      router_launcher: {
        value: cdktf.numberToHclTerraform(this._routerLauncher),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rsyslogd: {
        value: cdktf.numberToHclTerraform(this._rsyslogd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rvi_daemon: {
        value: cdktf.numberToHclTerraform(this._rviDaemon),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scep: {
        value: cdktf.numberToHclTerraform(this._scep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sflowd: {
        value: cdktf.numberToHclTerraform(this._sflowd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snmpd: {
        value: cdktf.numberToHclTerraform(this._snmpd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sshd: {
        value: cdktf.numberToHclTerraform(this._sshd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      staticd: {
        value: cdktf.numberToHclTerraform(this._staticd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      statsd: {
        value: cdktf.numberToHclTerraform(this._statsd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stpd: {
        value: cdktf.numberToHclTerraform(this._stpd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switch_launcher: {
        value: cdktf.numberToHclTerraform(this._switchLauncher),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trunkd: {
        value: cdktf.numberToHclTerraform(this._trunkd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrrpd: {
        value: cdktf.numberToHclTerraform(this._vrrpd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wiredap: {
        value: cdktf.numberToHclTerraform(this._wiredap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wpa_supp: {
        value: cdktf.numberToHclTerraform(this._wpaSupp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zebra: {
        value: cdktf.numberToHclTerraform(this._zebra),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
