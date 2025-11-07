// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnvserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#advancedepa Vpnvserver#advancedepa}
  */
  readonly advancedepa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#appflowlog Vpnvserver#appflowlog}
  */
  readonly appflowlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#authentication Vpnvserver#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#authnprofile Vpnvserver#authnprofile}
  */
  readonly authnprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#certkeynames Vpnvserver#certkeynames}
  */
  readonly certkeynames?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#cginfrahomepageredirect Vpnvserver#cginfrahomepageredirect}
  */
  readonly cginfrahomepageredirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#comment Vpnvserver#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#deploymenttype Vpnvserver#deploymenttype}
  */
  readonly deploymenttype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#devicecert Vpnvserver#devicecert}
  */
  readonly devicecert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#doublehop Vpnvserver#doublehop}
  */
  readonly doublehop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#downstateflush Vpnvserver#downstateflush}
  */
  readonly downstateflush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#dtls Vpnvserver#dtls}
  */
  readonly dtls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#failedlogintimeout Vpnvserver#failedlogintimeout}
  */
  readonly failedlogintimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#httpprofilename Vpnvserver#httpprofilename}
  */
  readonly httpprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#icaonly Vpnvserver#icaonly}
  */
  readonly icaonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#icaproxysessionmigration Vpnvserver#icaproxysessionmigration}
  */
  readonly icaproxysessionmigration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#icmpvsrresponse Vpnvserver#icmpvsrresponse}
  */
  readonly icmpvsrresponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#id Vpnvserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#ipset Vpnvserver#ipset}
  */
  readonly ipset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#ipv46 Vpnvserver#ipv46}
  */
  readonly ipv46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#l2conn Vpnvserver#l2conn}
  */
  readonly l2Conn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#linuxepapluginupgrade Vpnvserver#linuxepapluginupgrade}
  */
  readonly linuxepapluginupgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#listenpolicy Vpnvserver#listenpolicy}
  */
  readonly listenpolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#listenpriority Vpnvserver#listenpriority}
  */
  readonly listenpriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#loginonce Vpnvserver#loginonce}
  */
  readonly loginonce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#logoutonsmartcardremoval Vpnvserver#logoutonsmartcardremoval}
  */
  readonly logoutonsmartcardremoval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#macepapluginupgrade Vpnvserver#macepapluginupgrade}
  */
  readonly macepapluginupgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#maxaaausers Vpnvserver#maxaaausers}
  */
  readonly maxaaausers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#maxloginattempts Vpnvserver#maxloginattempts}
  */
  readonly maxloginattempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#name Vpnvserver#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#netprofile Vpnvserver#netprofile}
  */
  readonly netprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#pcoipvserverprofilename Vpnvserver#pcoipvserverprofilename}
  */
  readonly pcoipvserverprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#port Vpnvserver#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#range Vpnvserver#range}
  */
  readonly range?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#rdpserverprofilename Vpnvserver#rdpserverprofilename}
  */
  readonly rdpserverprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#rhistate Vpnvserver#rhistate}
  */
  readonly rhistate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#samesite Vpnvserver#samesite}
  */
  readonly samesite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#servicetype Vpnvserver#servicetype}
  */
  readonly servicetype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#state Vpnvserver#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#tcpprofilename Vpnvserver#tcpprofilename}
  */
  readonly tcpprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#userdomains Vpnvserver#userdomains}
  */
  readonly userdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#vserverfqdn Vpnvserver#vserverfqdn}
  */
  readonly vserverfqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#windowsepapluginupgrade Vpnvserver#windowsepapluginupgrade}
  */
  readonly windowsepapluginupgrade?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver citrixadc_vpnvserver}
*/
export class Vpnvserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnvserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpnvserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpnvserver to import
  * @param importFromId The id of the existing Vpnvserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpnvserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnvserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnvserver citrixadc_vpnvserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnvserverConfig
  */
  public constructor(scope: Construct, id: string, config: VpnvserverConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnvserver',
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
    this._advancedepa = config.advancedepa;
    this._appflowlog = config.appflowlog;
    this._authentication = config.authentication;
    this._authnprofile = config.authnprofile;
    this._certkeynames = config.certkeynames;
    this._cginfrahomepageredirect = config.cginfrahomepageredirect;
    this._comment = config.comment;
    this._deploymenttype = config.deploymenttype;
    this._devicecert = config.devicecert;
    this._doublehop = config.doublehop;
    this._downstateflush = config.downstateflush;
    this._dtls = config.dtls;
    this._failedlogintimeout = config.failedlogintimeout;
    this._httpprofilename = config.httpprofilename;
    this._icaonly = config.icaonly;
    this._icaproxysessionmigration = config.icaproxysessionmigration;
    this._icmpvsrresponse = config.icmpvsrresponse;
    this._id = config.id;
    this._ipset = config.ipset;
    this._ipv46 = config.ipv46;
    this._l2Conn = config.l2Conn;
    this._linuxepapluginupgrade = config.linuxepapluginupgrade;
    this._listenpolicy = config.listenpolicy;
    this._listenpriority = config.listenpriority;
    this._loginonce = config.loginonce;
    this._logoutonsmartcardremoval = config.logoutonsmartcardremoval;
    this._macepapluginupgrade = config.macepapluginupgrade;
    this._maxaaausers = config.maxaaausers;
    this._maxloginattempts = config.maxloginattempts;
    this._name = config.name;
    this._netprofile = config.netprofile;
    this._pcoipvserverprofilename = config.pcoipvserverprofilename;
    this._port = config.port;
    this._range = config.range;
    this._rdpserverprofilename = config.rdpserverprofilename;
    this._rhistate = config.rhistate;
    this._samesite = config.samesite;
    this._servicetype = config.servicetype;
    this._state = config.state;
    this._tcpprofilename = config.tcpprofilename;
    this._userdomains = config.userdomains;
    this._vserverfqdn = config.vserverfqdn;
    this._windowsepapluginupgrade = config.windowsepapluginupgrade;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advancedepa - computed: true, optional: true, required: false
  private _advancedepa?: string; 
  public get advancedepa() {
    return this.getStringAttribute('advancedepa');
  }
  public set advancedepa(value: string) {
    this._advancedepa = value;
  }
  public resetAdvancedepa() {
    this._advancedepa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedepaInput() {
    return this._advancedepa;
  }

  // appflowlog - computed: true, optional: true, required: false
  private _appflowlog?: string; 
  public get appflowlog() {
    return this.getStringAttribute('appflowlog');
  }
  public set appflowlog(value: string) {
    this._appflowlog = value;
  }
  public resetAppflowlog() {
    this._appflowlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appflowlogInput() {
    return this._appflowlog;
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // authnprofile - computed: true, optional: true, required: false
  private _authnprofile?: string; 
  public get authnprofile() {
    return this.getStringAttribute('authnprofile');
  }
  public set authnprofile(value: string) {
    this._authnprofile = value;
  }
  public resetAuthnprofile() {
    this._authnprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnprofileInput() {
    return this._authnprofile;
  }

  // certkeynames - computed: true, optional: true, required: false
  private _certkeynames?: string; 
  public get certkeynames() {
    return this.getStringAttribute('certkeynames');
  }
  public set certkeynames(value: string) {
    this._certkeynames = value;
  }
  public resetCertkeynames() {
    this._certkeynames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certkeynamesInput() {
    return this._certkeynames;
  }

  // cginfrahomepageredirect - computed: true, optional: true, required: false
  private _cginfrahomepageredirect?: string; 
  public get cginfrahomepageredirect() {
    return this.getStringAttribute('cginfrahomepageredirect');
  }
  public set cginfrahomepageredirect(value: string) {
    this._cginfrahomepageredirect = value;
  }
  public resetCginfrahomepageredirect() {
    this._cginfrahomepageredirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cginfrahomepageredirectInput() {
    return this._cginfrahomepageredirect;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // deploymenttype - computed: true, optional: true, required: false
  private _deploymenttype?: string; 
  public get deploymenttype() {
    return this.getStringAttribute('deploymenttype');
  }
  public set deploymenttype(value: string) {
    this._deploymenttype = value;
  }
  public resetDeploymenttype() {
    this._deploymenttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymenttypeInput() {
    return this._deploymenttype;
  }

  // devicecert - computed: true, optional: true, required: false
  private _devicecert?: string; 
  public get devicecert() {
    return this.getStringAttribute('devicecert');
  }
  public set devicecert(value: string) {
    this._devicecert = value;
  }
  public resetDevicecert() {
    this._devicecert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicecertInput() {
    return this._devicecert;
  }

  // doublehop - computed: true, optional: true, required: false
  private _doublehop?: string; 
  public get doublehop() {
    return this.getStringAttribute('doublehop');
  }
  public set doublehop(value: string) {
    this._doublehop = value;
  }
  public resetDoublehop() {
    this._doublehop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doublehopInput() {
    return this._doublehop;
  }

  // downstateflush - computed: true, optional: true, required: false
  private _downstateflush?: string; 
  public get downstateflush() {
    return this.getStringAttribute('downstateflush');
  }
  public set downstateflush(value: string) {
    this._downstateflush = value;
  }
  public resetDownstateflush() {
    this._downstateflush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstateflushInput() {
    return this._downstateflush;
  }

  // dtls - computed: true, optional: true, required: false
  private _dtls?: string; 
  public get dtls() {
    return this.getStringAttribute('dtls');
  }
  public set dtls(value: string) {
    this._dtls = value;
  }
  public resetDtls() {
    this._dtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtlsInput() {
    return this._dtls;
  }

  // failedlogintimeout - computed: true, optional: true, required: false
  private _failedlogintimeout?: number; 
  public get failedlogintimeout() {
    return this.getNumberAttribute('failedlogintimeout');
  }
  public set failedlogintimeout(value: number) {
    this._failedlogintimeout = value;
  }
  public resetFailedlogintimeout() {
    this._failedlogintimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedlogintimeoutInput() {
    return this._failedlogintimeout;
  }

  // httpprofilename - computed: true, optional: true, required: false
  private _httpprofilename?: string; 
  public get httpprofilename() {
    return this.getStringAttribute('httpprofilename');
  }
  public set httpprofilename(value: string) {
    this._httpprofilename = value;
  }
  public resetHttpprofilename() {
    this._httpprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpprofilenameInput() {
    return this._httpprofilename;
  }

  // icaonly - computed: true, optional: true, required: false
  private _icaonly?: string; 
  public get icaonly() {
    return this.getStringAttribute('icaonly');
  }
  public set icaonly(value: string) {
    this._icaonly = value;
  }
  public resetIcaonly() {
    this._icaonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icaonlyInput() {
    return this._icaonly;
  }

  // icaproxysessionmigration - computed: true, optional: true, required: false
  private _icaproxysessionmigration?: string; 
  public get icaproxysessionmigration() {
    return this.getStringAttribute('icaproxysessionmigration');
  }
  public set icaproxysessionmigration(value: string) {
    this._icaproxysessionmigration = value;
  }
  public resetIcaproxysessionmigration() {
    this._icaproxysessionmigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icaproxysessionmigrationInput() {
    return this._icaproxysessionmigration;
  }

  // icmpvsrresponse - computed: true, optional: true, required: false
  private _icmpvsrresponse?: string; 
  public get icmpvsrresponse() {
    return this.getStringAttribute('icmpvsrresponse');
  }
  public set icmpvsrresponse(value: string) {
    this._icmpvsrresponse = value;
  }
  public resetIcmpvsrresponse() {
    this._icmpvsrresponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpvsrresponseInput() {
    return this._icmpvsrresponse;
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

  // ipset - computed: true, optional: true, required: false
  private _ipset?: string; 
  public get ipset() {
    return this.getStringAttribute('ipset');
  }
  public set ipset(value: string) {
    this._ipset = value;
  }
  public resetIpset() {
    this._ipset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsetInput() {
    return this._ipset;
  }

  // ipv46 - computed: true, optional: true, required: false
  private _ipv46?: string; 
  public get ipv46() {
    return this.getStringAttribute('ipv46');
  }
  public set ipv46(value: string) {
    this._ipv46 = value;
  }
  public resetIpv46() {
    this._ipv46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv46Input() {
    return this._ipv46;
  }

  // l2conn - computed: true, optional: true, required: false
  private _l2Conn?: string; 
  public get l2Conn() {
    return this.getStringAttribute('l2conn');
  }
  public set l2Conn(value: string) {
    this._l2Conn = value;
  }
  public resetL2Conn() {
    this._l2Conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2ConnInput() {
    return this._l2Conn;
  }

  // linuxepapluginupgrade - computed: true, optional: true, required: false
  private _linuxepapluginupgrade?: string; 
  public get linuxepapluginupgrade() {
    return this.getStringAttribute('linuxepapluginupgrade');
  }
  public set linuxepapluginupgrade(value: string) {
    this._linuxepapluginupgrade = value;
  }
  public resetLinuxepapluginupgrade() {
    this._linuxepapluginupgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxepapluginupgradeInput() {
    return this._linuxepapluginupgrade;
  }

  // listenpolicy - computed: true, optional: true, required: false
  private _listenpolicy?: string; 
  public get listenpolicy() {
    return this.getStringAttribute('listenpolicy');
  }
  public set listenpolicy(value: string) {
    this._listenpolicy = value;
  }
  public resetListenpolicy() {
    this._listenpolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenpolicyInput() {
    return this._listenpolicy;
  }

  // listenpriority - computed: true, optional: true, required: false
  private _listenpriority?: number; 
  public get listenpriority() {
    return this.getNumberAttribute('listenpriority');
  }
  public set listenpriority(value: number) {
    this._listenpriority = value;
  }
  public resetListenpriority() {
    this._listenpriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenpriorityInput() {
    return this._listenpriority;
  }

  // loginonce - computed: true, optional: true, required: false
  private _loginonce?: string; 
  public get loginonce() {
    return this.getStringAttribute('loginonce');
  }
  public set loginonce(value: string) {
    this._loginonce = value;
  }
  public resetLoginonce() {
    this._loginonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginonceInput() {
    return this._loginonce;
  }

  // logoutonsmartcardremoval - computed: true, optional: true, required: false
  private _logoutonsmartcardremoval?: string; 
  public get logoutonsmartcardremoval() {
    return this.getStringAttribute('logoutonsmartcardremoval');
  }
  public set logoutonsmartcardremoval(value: string) {
    this._logoutonsmartcardremoval = value;
  }
  public resetLogoutonsmartcardremoval() {
    this._logoutonsmartcardremoval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutonsmartcardremovalInput() {
    return this._logoutonsmartcardremoval;
  }

  // macepapluginupgrade - computed: true, optional: true, required: false
  private _macepapluginupgrade?: string; 
  public get macepapluginupgrade() {
    return this.getStringAttribute('macepapluginupgrade');
  }
  public set macepapluginupgrade(value: string) {
    this._macepapluginupgrade = value;
  }
  public resetMacepapluginupgrade() {
    this._macepapluginupgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macepapluginupgradeInput() {
    return this._macepapluginupgrade;
  }

  // maxaaausers - computed: true, optional: true, required: false
  private _maxaaausers?: number; 
  public get maxaaausers() {
    return this.getNumberAttribute('maxaaausers');
  }
  public set maxaaausers(value: number) {
    this._maxaaausers = value;
  }
  public resetMaxaaausers() {
    this._maxaaausers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxaaausersInput() {
    return this._maxaaausers;
  }

  // maxloginattempts - computed: true, optional: true, required: false
  private _maxloginattempts?: number; 
  public get maxloginattempts() {
    return this.getNumberAttribute('maxloginattempts');
  }
  public set maxloginattempts(value: number) {
    this._maxloginattempts = value;
  }
  public resetMaxloginattempts() {
    this._maxloginattempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxloginattemptsInput() {
    return this._maxloginattempts;
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

  // netprofile - computed: true, optional: true, required: false
  private _netprofile?: string; 
  public get netprofile() {
    return this.getStringAttribute('netprofile');
  }
  public set netprofile(value: string) {
    this._netprofile = value;
  }
  public resetNetprofile() {
    this._netprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netprofileInput() {
    return this._netprofile;
  }

  // pcoipvserverprofilename - computed: true, optional: true, required: false
  private _pcoipvserverprofilename?: string; 
  public get pcoipvserverprofilename() {
    return this.getStringAttribute('pcoipvserverprofilename');
  }
  public set pcoipvserverprofilename(value: string) {
    this._pcoipvserverprofilename = value;
  }
  public resetPcoipvserverprofilename() {
    this._pcoipvserverprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcoipvserverprofilenameInput() {
    return this._pcoipvserverprofilename;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // range - computed: true, optional: true, required: false
  private _range?: number; 
  public get range() {
    return this.getNumberAttribute('range');
  }
  public set range(value: number) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // rdpserverprofilename - computed: true, optional: true, required: false
  private _rdpserverprofilename?: string; 
  public get rdpserverprofilename() {
    return this.getStringAttribute('rdpserverprofilename');
  }
  public set rdpserverprofilename(value: string) {
    this._rdpserverprofilename = value;
  }
  public resetRdpserverprofilename() {
    this._rdpserverprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpserverprofilenameInput() {
    return this._rdpserverprofilename;
  }

  // rhistate - computed: true, optional: true, required: false
  private _rhistate?: string; 
  public get rhistate() {
    return this.getStringAttribute('rhistate');
  }
  public set rhistate(value: string) {
    this._rhistate = value;
  }
  public resetRhistate() {
    this._rhistate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rhistateInput() {
    return this._rhistate;
  }

  // samesite - computed: true, optional: true, required: false
  private _samesite?: string; 
  public get samesite() {
    return this.getStringAttribute('samesite');
  }
  public set samesite(value: string) {
    this._samesite = value;
  }
  public resetSamesite() {
    this._samesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteInput() {
    return this._samesite;
  }

  // servicetype - computed: false, optional: false, required: true
  private _servicetype?: string; 
  public get servicetype() {
    return this.getStringAttribute('servicetype');
  }
  public set servicetype(value: string) {
    this._servicetype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicetypeInput() {
    return this._servicetype;
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

  // tcpprofilename - computed: true, optional: true, required: false
  private _tcpprofilename?: string; 
  public get tcpprofilename() {
    return this.getStringAttribute('tcpprofilename');
  }
  public set tcpprofilename(value: string) {
    this._tcpprofilename = value;
  }
  public resetTcpprofilename() {
    this._tcpprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpprofilenameInput() {
    return this._tcpprofilename;
  }

  // userdomains - computed: true, optional: true, required: false
  private _userdomains?: string; 
  public get userdomains() {
    return this.getStringAttribute('userdomains');
  }
  public set userdomains(value: string) {
    this._userdomains = value;
  }
  public resetUserdomains() {
    this._userdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdomainsInput() {
    return this._userdomains;
  }

  // vserverfqdn - computed: true, optional: true, required: false
  private _vserverfqdn?: string; 
  public get vserverfqdn() {
    return this.getStringAttribute('vserverfqdn');
  }
  public set vserverfqdn(value: string) {
    this._vserverfqdn = value;
  }
  public resetVserverfqdn() {
    this._vserverfqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverfqdnInput() {
    return this._vserverfqdn;
  }

  // windowsepapluginupgrade - computed: true, optional: true, required: false
  private _windowsepapluginupgrade?: string; 
  public get windowsepapluginupgrade() {
    return this.getStringAttribute('windowsepapluginupgrade');
  }
  public set windowsepapluginupgrade(value: string) {
    this._windowsepapluginupgrade = value;
  }
  public resetWindowsepapluginupgrade() {
    this._windowsepapluginupgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsepapluginupgradeInput() {
    return this._windowsepapluginupgrade;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advancedepa: cdktf.stringToTerraform(this._advancedepa),
      appflowlog: cdktf.stringToTerraform(this._appflowlog),
      authentication: cdktf.stringToTerraform(this._authentication),
      authnprofile: cdktf.stringToTerraform(this._authnprofile),
      certkeynames: cdktf.stringToTerraform(this._certkeynames),
      cginfrahomepageredirect: cdktf.stringToTerraform(this._cginfrahomepageredirect),
      comment: cdktf.stringToTerraform(this._comment),
      deploymenttype: cdktf.stringToTerraform(this._deploymenttype),
      devicecert: cdktf.stringToTerraform(this._devicecert),
      doublehop: cdktf.stringToTerraform(this._doublehop),
      downstateflush: cdktf.stringToTerraform(this._downstateflush),
      dtls: cdktf.stringToTerraform(this._dtls),
      failedlogintimeout: cdktf.numberToTerraform(this._failedlogintimeout),
      httpprofilename: cdktf.stringToTerraform(this._httpprofilename),
      icaonly: cdktf.stringToTerraform(this._icaonly),
      icaproxysessionmigration: cdktf.stringToTerraform(this._icaproxysessionmigration),
      icmpvsrresponse: cdktf.stringToTerraform(this._icmpvsrresponse),
      id: cdktf.stringToTerraform(this._id),
      ipset: cdktf.stringToTerraform(this._ipset),
      ipv46: cdktf.stringToTerraform(this._ipv46),
      l2conn: cdktf.stringToTerraform(this._l2Conn),
      linuxepapluginupgrade: cdktf.stringToTerraform(this._linuxepapluginupgrade),
      listenpolicy: cdktf.stringToTerraform(this._listenpolicy),
      listenpriority: cdktf.numberToTerraform(this._listenpriority),
      loginonce: cdktf.stringToTerraform(this._loginonce),
      logoutonsmartcardremoval: cdktf.stringToTerraform(this._logoutonsmartcardremoval),
      macepapluginupgrade: cdktf.stringToTerraform(this._macepapluginupgrade),
      maxaaausers: cdktf.numberToTerraform(this._maxaaausers),
      maxloginattempts: cdktf.numberToTerraform(this._maxloginattempts),
      name: cdktf.stringToTerraform(this._name),
      netprofile: cdktf.stringToTerraform(this._netprofile),
      pcoipvserverprofilename: cdktf.stringToTerraform(this._pcoipvserverprofilename),
      port: cdktf.numberToTerraform(this._port),
      range: cdktf.numberToTerraform(this._range),
      rdpserverprofilename: cdktf.stringToTerraform(this._rdpserverprofilename),
      rhistate: cdktf.stringToTerraform(this._rhistate),
      samesite: cdktf.stringToTerraform(this._samesite),
      servicetype: cdktf.stringToTerraform(this._servicetype),
      state: cdktf.stringToTerraform(this._state),
      tcpprofilename: cdktf.stringToTerraform(this._tcpprofilename),
      userdomains: cdktf.stringToTerraform(this._userdomains),
      vserverfqdn: cdktf.stringToTerraform(this._vserverfqdn),
      windowsepapluginupgrade: cdktf.stringToTerraform(this._windowsepapluginupgrade),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advancedepa: {
        value: cdktf.stringToHclTerraform(this._advancedepa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appflowlog: {
        value: cdktf.stringToHclTerraform(this._appflowlog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authnprofile: {
        value: cdktf.stringToHclTerraform(this._authnprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certkeynames: {
        value: cdktf.stringToHclTerraform(this._certkeynames),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cginfrahomepageredirect: {
        value: cdktf.stringToHclTerraform(this._cginfrahomepageredirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploymenttype: {
        value: cdktf.stringToHclTerraform(this._deploymenttype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devicecert: {
        value: cdktf.stringToHclTerraform(this._devicecert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      doublehop: {
        value: cdktf.stringToHclTerraform(this._doublehop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      downstateflush: {
        value: cdktf.stringToHclTerraform(this._downstateflush),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtls: {
        value: cdktf.stringToHclTerraform(this._dtls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failedlogintimeout: {
        value: cdktf.numberToHclTerraform(this._failedlogintimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      httpprofilename: {
        value: cdktf.stringToHclTerraform(this._httpprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icaonly: {
        value: cdktf.stringToHclTerraform(this._icaonly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icaproxysessionmigration: {
        value: cdktf.stringToHclTerraform(this._icaproxysessionmigration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmpvsrresponse: {
        value: cdktf.stringToHclTerraform(this._icmpvsrresponse),
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
      ipset: {
        value: cdktf.stringToHclTerraform(this._ipset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv46: {
        value: cdktf.stringToHclTerraform(this._ipv46),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2conn: {
        value: cdktf.stringToHclTerraform(this._l2Conn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linuxepapluginupgrade: {
        value: cdktf.stringToHclTerraform(this._linuxepapluginupgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listenpolicy: {
        value: cdktf.stringToHclTerraform(this._listenpolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listenpriority: {
        value: cdktf.numberToHclTerraform(this._listenpriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      loginonce: {
        value: cdktf.stringToHclTerraform(this._loginonce),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logoutonsmartcardremoval: {
        value: cdktf.stringToHclTerraform(this._logoutonsmartcardremoval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macepapluginupgrade: {
        value: cdktf.stringToHclTerraform(this._macepapluginupgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxaaausers: {
        value: cdktf.numberToHclTerraform(this._maxaaausers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxloginattempts: {
        value: cdktf.numberToHclTerraform(this._maxloginattempts),
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
      netprofile: {
        value: cdktf.stringToHclTerraform(this._netprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcoipvserverprofilename: {
        value: cdktf.stringToHclTerraform(this._pcoipvserverprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      range: {
        value: cdktf.numberToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rdpserverprofilename: {
        value: cdktf.stringToHclTerraform(this._rdpserverprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rhistate: {
        value: cdktf.stringToHclTerraform(this._rhistate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samesite: {
        value: cdktf.stringToHclTerraform(this._samesite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicetype: {
        value: cdktf.stringToHclTerraform(this._servicetype),
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
      tcpprofilename: {
        value: cdktf.stringToHclTerraform(this._tcpprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userdomains: {
        value: cdktf.stringToHclTerraform(this._userdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vserverfqdn: {
        value: cdktf.stringToHclTerraform(this._vserverfqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      windowsepapluginupgrade: {
        value: cdktf.stringToHclTerraform(this._windowsepapluginupgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
