// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditsyslogactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#acl Auditsyslogaction#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#alg Auditsyslogaction#alg}
  */
  readonly alg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#appflowexport Auditsyslogaction#appflowexport}
  */
  readonly appflowexport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#contentinspectionlog Auditsyslogaction#contentinspectionlog}
  */
  readonly contentinspectionlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#dateformat Auditsyslogaction#dateformat}
  */
  readonly dateformat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#dns Auditsyslogaction#dns}
  */
  readonly dns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#domainresolvenow Auditsyslogaction#domainresolvenow}
  */
  readonly domainresolvenow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#domainresolveretry Auditsyslogaction#domainresolveretry}
  */
  readonly domainresolveretry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#httpauthtoken Auditsyslogaction#httpauthtoken}
  */
  readonly httpauthtoken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#httpendpointurl Auditsyslogaction#httpendpointurl}
  */
  readonly httpendpointurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#id Auditsyslogaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#lbvservername Auditsyslogaction#lbvservername}
  */
  readonly lbvservername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#logfacility Auditsyslogaction#logfacility}
  */
  readonly logfacility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#loglevel Auditsyslogaction#loglevel}
  */
  readonly loglevel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#lsn Auditsyslogaction#lsn}
  */
  readonly lsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#managementlog Auditsyslogaction#managementlog}
  */
  readonly managementlog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#maxlogdatasizetohold Auditsyslogaction#maxlogdatasizetohold}
  */
  readonly maxlogdatasizetohold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#mgmtloglevel Auditsyslogaction#mgmtloglevel}
  */
  readonly mgmtloglevel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#name Auditsyslogaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#netprofile Auditsyslogaction#netprofile}
  */
  readonly netprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#protocolviolations Auditsyslogaction#protocolviolations}
  */
  readonly protocolviolations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#serverdomainname Auditsyslogaction#serverdomainname}
  */
  readonly serverdomainname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#serverip Auditsyslogaction#serverip}
  */
  readonly serverip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#serverport Auditsyslogaction#serverport}
  */
  readonly serverport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#sslinterception Auditsyslogaction#sslinterception}
  */
  readonly sslinterception?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#streamanalytics Auditsyslogaction#streamanalytics}
  */
  readonly streamanalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#subscriberlog Auditsyslogaction#subscriberlog}
  */
  readonly subscriberlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#syslogcompliance Auditsyslogaction#syslogcompliance}
  */
  readonly syslogcompliance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#tcp Auditsyslogaction#tcp}
  */
  readonly tcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#tcpprofilename Auditsyslogaction#tcpprofilename}
  */
  readonly tcpprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#timezone Auditsyslogaction#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#transport Auditsyslogaction#transport}
  */
  readonly transport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#urlfiltering Auditsyslogaction#urlfiltering}
  */
  readonly urlfiltering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#userdefinedauditlog Auditsyslogaction#userdefinedauditlog}
  */
  readonly userdefinedauditlog?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction citrixadc_auditsyslogaction}
*/
export class Auditsyslogaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_auditsyslogaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Auditsyslogaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Auditsyslogaction to import
  * @param importFromId The id of the existing Auditsyslogaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Auditsyslogaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_auditsyslogaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/auditsyslogaction citrixadc_auditsyslogaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditsyslogactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuditsyslogactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_auditsyslogaction',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._alg = config.alg;
    this._appflowexport = config.appflowexport;
    this._contentinspectionlog = config.contentinspectionlog;
    this._dateformat = config.dateformat;
    this._dns = config.dns;
    this._domainresolvenow = config.domainresolvenow;
    this._domainresolveretry = config.domainresolveretry;
    this._httpauthtoken = config.httpauthtoken;
    this._httpendpointurl = config.httpendpointurl;
    this._id = config.id;
    this._lbvservername = config.lbvservername;
    this._logfacility = config.logfacility;
    this._loglevel = config.loglevel;
    this._lsn = config.lsn;
    this._managementlog = config.managementlog;
    this._maxlogdatasizetohold = config.maxlogdatasizetohold;
    this._mgmtloglevel = config.mgmtloglevel;
    this._name = config.name;
    this._netprofile = config.netprofile;
    this._protocolviolations = config.protocolviolations;
    this._serverdomainname = config.serverdomainname;
    this._serverip = config.serverip;
    this._serverport = config.serverport;
    this._sslinterception = config.sslinterception;
    this._streamanalytics = config.streamanalytics;
    this._subscriberlog = config.subscriberlog;
    this._syslogcompliance = config.syslogcompliance;
    this._tcp = config.tcp;
    this._tcpprofilename = config.tcpprofilename;
    this._timezone = config.timezone;
    this._transport = config.transport;
    this._urlfiltering = config.urlfiltering;
    this._userdefinedauditlog = config.userdefinedauditlog;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // alg - computed: true, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // appflowexport - computed: true, optional: true, required: false
  private _appflowexport?: string; 
  public get appflowexport() {
    return this.getStringAttribute('appflowexport');
  }
  public set appflowexport(value: string) {
    this._appflowexport = value;
  }
  public resetAppflowexport() {
    this._appflowexport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appflowexportInput() {
    return this._appflowexport;
  }

  // contentinspectionlog - computed: true, optional: true, required: false
  private _contentinspectionlog?: string; 
  public get contentinspectionlog() {
    return this.getStringAttribute('contentinspectionlog');
  }
  public set contentinspectionlog(value: string) {
    this._contentinspectionlog = value;
  }
  public resetContentinspectionlog() {
    this._contentinspectionlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentinspectionlogInput() {
    return this._contentinspectionlog;
  }

  // dateformat - computed: true, optional: true, required: false
  private _dateformat?: string; 
  public get dateformat() {
    return this.getStringAttribute('dateformat');
  }
  public set dateformat(value: string) {
    this._dateformat = value;
  }
  public resetDateformat() {
    this._dateformat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateformatInput() {
    return this._dateformat;
  }

  // dns - computed: true, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // domainresolvenow - computed: true, optional: true, required: false
  private _domainresolvenow?: boolean | cdktf.IResolvable; 
  public get domainresolvenow() {
    return this.getBooleanAttribute('domainresolvenow');
  }
  public set domainresolvenow(value: boolean | cdktf.IResolvable) {
    this._domainresolvenow = value;
  }
  public resetDomainresolvenow() {
    this._domainresolvenow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainresolvenowInput() {
    return this._domainresolvenow;
  }

  // domainresolveretry - computed: true, optional: true, required: false
  private _domainresolveretry?: number; 
  public get domainresolveretry() {
    return this.getNumberAttribute('domainresolveretry');
  }
  public set domainresolveretry(value: number) {
    this._domainresolveretry = value;
  }
  public resetDomainresolveretry() {
    this._domainresolveretry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainresolveretryInput() {
    return this._domainresolveretry;
  }

  // httpauthtoken - computed: true, optional: true, required: false
  private _httpauthtoken?: string; 
  public get httpauthtoken() {
    return this.getStringAttribute('httpauthtoken');
  }
  public set httpauthtoken(value: string) {
    this._httpauthtoken = value;
  }
  public resetHttpauthtoken() {
    this._httpauthtoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpauthtokenInput() {
    return this._httpauthtoken;
  }

  // httpendpointurl - computed: true, optional: true, required: false
  private _httpendpointurl?: string; 
  public get httpendpointurl() {
    return this.getStringAttribute('httpendpointurl');
  }
  public set httpendpointurl(value: string) {
    this._httpendpointurl = value;
  }
  public resetHttpendpointurl() {
    this._httpendpointurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpendpointurlInput() {
    return this._httpendpointurl;
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

  // lbvservername - computed: true, optional: true, required: false
  private _lbvservername?: string; 
  public get lbvservername() {
    return this.getStringAttribute('lbvservername');
  }
  public set lbvservername(value: string) {
    this._lbvservername = value;
  }
  public resetLbvservername() {
    this._lbvservername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbvservernameInput() {
    return this._lbvservername;
  }

  // logfacility - computed: true, optional: true, required: false
  private _logfacility?: string; 
  public get logfacility() {
    return this.getStringAttribute('logfacility');
  }
  public set logfacility(value: string) {
    this._logfacility = value;
  }
  public resetLogfacility() {
    this._logfacility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logfacilityInput() {
    return this._logfacility;
  }

  // loglevel - computed: true, optional: true, required: false
  private _loglevel?: string[]; 
  public get loglevel() {
    return cdktf.Fn.tolist(this.getListAttribute('loglevel'));
  }
  public set loglevel(value: string[]) {
    this._loglevel = value;
  }
  public resetLoglevel() {
    this._loglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loglevelInput() {
    return this._loglevel;
  }

  // lsn - computed: true, optional: true, required: false
  private _lsn?: string; 
  public get lsn() {
    return this.getStringAttribute('lsn');
  }
  public set lsn(value: string) {
    this._lsn = value;
  }
  public resetLsn() {
    this._lsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnInput() {
    return this._lsn;
  }

  // managementlog - computed: true, optional: true, required: false
  private _managementlog?: string[]; 
  public get managementlog() {
    return this.getListAttribute('managementlog');
  }
  public set managementlog(value: string[]) {
    this._managementlog = value;
  }
  public resetManagementlog() {
    this._managementlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementlogInput() {
    return this._managementlog;
  }

  // maxlogdatasizetohold - computed: true, optional: true, required: false
  private _maxlogdatasizetohold?: number; 
  public get maxlogdatasizetohold() {
    return this.getNumberAttribute('maxlogdatasizetohold');
  }
  public set maxlogdatasizetohold(value: number) {
    this._maxlogdatasizetohold = value;
  }
  public resetMaxlogdatasizetohold() {
    this._maxlogdatasizetohold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxlogdatasizetoholdInput() {
    return this._maxlogdatasizetohold;
  }

  // mgmtloglevel - computed: true, optional: true, required: false
  private _mgmtloglevel?: string[]; 
  public get mgmtloglevel() {
    return this.getListAttribute('mgmtloglevel');
  }
  public set mgmtloglevel(value: string[]) {
    this._mgmtloglevel = value;
  }
  public resetMgmtloglevel() {
    this._mgmtloglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtloglevelInput() {
    return this._mgmtloglevel;
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

  // protocolviolations - computed: true, optional: true, required: false
  private _protocolviolations?: string; 
  public get protocolviolations() {
    return this.getStringAttribute('protocolviolations');
  }
  public set protocolviolations(value: string) {
    this._protocolviolations = value;
  }
  public resetProtocolviolations() {
    this._protocolviolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolviolationsInput() {
    return this._protocolviolations;
  }

  // serverdomainname - computed: true, optional: true, required: false
  private _serverdomainname?: string; 
  public get serverdomainname() {
    return this.getStringAttribute('serverdomainname');
  }
  public set serverdomainname(value: string) {
    this._serverdomainname = value;
  }
  public resetServerdomainname() {
    this._serverdomainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverdomainnameInput() {
    return this._serverdomainname;
  }

  // serverip - computed: true, optional: true, required: false
  private _serverip?: string; 
  public get serverip() {
    return this.getStringAttribute('serverip');
  }
  public set serverip(value: string) {
    this._serverip = value;
  }
  public resetServerip() {
    this._serverip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveripInput() {
    return this._serverip;
  }

  // serverport - computed: true, optional: true, required: false
  private _serverport?: number; 
  public get serverport() {
    return this.getNumberAttribute('serverport');
  }
  public set serverport(value: number) {
    this._serverport = value;
  }
  public resetServerport() {
    this._serverport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverportInput() {
    return this._serverport;
  }

  // sslinterception - computed: true, optional: true, required: false
  private _sslinterception?: string; 
  public get sslinterception() {
    return this.getStringAttribute('sslinterception');
  }
  public set sslinterception(value: string) {
    this._sslinterception = value;
  }
  public resetSslinterception() {
    this._sslinterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslinterceptionInput() {
    return this._sslinterception;
  }

  // streamanalytics - computed: true, optional: true, required: false
  private _streamanalytics?: string; 
  public get streamanalytics() {
    return this.getStringAttribute('streamanalytics');
  }
  public set streamanalytics(value: string) {
    this._streamanalytics = value;
  }
  public resetStreamanalytics() {
    this._streamanalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamanalyticsInput() {
    return this._streamanalytics;
  }

  // subscriberlog - computed: true, optional: true, required: false
  private _subscriberlog?: string; 
  public get subscriberlog() {
    return this.getStringAttribute('subscriberlog');
  }
  public set subscriberlog(value: string) {
    this._subscriberlog = value;
  }
  public resetSubscriberlog() {
    this._subscriberlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberlogInput() {
    return this._subscriberlog;
  }

  // syslogcompliance - computed: true, optional: true, required: false
  private _syslogcompliance?: string; 
  public get syslogcompliance() {
    return this.getStringAttribute('syslogcompliance');
  }
  public set syslogcompliance(value: string) {
    this._syslogcompliance = value;
  }
  public resetSyslogcompliance() {
    this._syslogcompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogcomplianceInput() {
    return this._syslogcompliance;
  }

  // tcp - computed: true, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
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

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // transport - computed: true, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // urlfiltering - computed: true, optional: true, required: false
  private _urlfiltering?: string; 
  public get urlfiltering() {
    return this.getStringAttribute('urlfiltering');
  }
  public set urlfiltering(value: string) {
    this._urlfiltering = value;
  }
  public resetUrlfiltering() {
    this._urlfiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlfilteringInput() {
    return this._urlfiltering;
  }

  // userdefinedauditlog - computed: true, optional: true, required: false
  private _userdefinedauditlog?: string; 
  public get userdefinedauditlog() {
    return this.getStringAttribute('userdefinedauditlog');
  }
  public set userdefinedauditlog(value: string) {
    this._userdefinedauditlog = value;
  }
  public resetUserdefinedauditlog() {
    this._userdefinedauditlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdefinedauditlogInput() {
    return this._userdefinedauditlog;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.stringToTerraform(this._acl),
      alg: cdktf.stringToTerraform(this._alg),
      appflowexport: cdktf.stringToTerraform(this._appflowexport),
      contentinspectionlog: cdktf.stringToTerraform(this._contentinspectionlog),
      dateformat: cdktf.stringToTerraform(this._dateformat),
      dns: cdktf.stringToTerraform(this._dns),
      domainresolvenow: cdktf.booleanToTerraform(this._domainresolvenow),
      domainresolveretry: cdktf.numberToTerraform(this._domainresolveretry),
      httpauthtoken: cdktf.stringToTerraform(this._httpauthtoken),
      httpendpointurl: cdktf.stringToTerraform(this._httpendpointurl),
      id: cdktf.stringToTerraform(this._id),
      lbvservername: cdktf.stringToTerraform(this._lbvservername),
      logfacility: cdktf.stringToTerraform(this._logfacility),
      loglevel: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loglevel),
      lsn: cdktf.stringToTerraform(this._lsn),
      managementlog: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementlog),
      maxlogdatasizetohold: cdktf.numberToTerraform(this._maxlogdatasizetohold),
      mgmtloglevel: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mgmtloglevel),
      name: cdktf.stringToTerraform(this._name),
      netprofile: cdktf.stringToTerraform(this._netprofile),
      protocolviolations: cdktf.stringToTerraform(this._protocolviolations),
      serverdomainname: cdktf.stringToTerraform(this._serverdomainname),
      serverip: cdktf.stringToTerraform(this._serverip),
      serverport: cdktf.numberToTerraform(this._serverport),
      sslinterception: cdktf.stringToTerraform(this._sslinterception),
      streamanalytics: cdktf.stringToTerraform(this._streamanalytics),
      subscriberlog: cdktf.stringToTerraform(this._subscriberlog),
      syslogcompliance: cdktf.stringToTerraform(this._syslogcompliance),
      tcp: cdktf.stringToTerraform(this._tcp),
      tcpprofilename: cdktf.stringToTerraform(this._tcpprofilename),
      timezone: cdktf.stringToTerraform(this._timezone),
      transport: cdktf.stringToTerraform(this._transport),
      urlfiltering: cdktf.stringToTerraform(this._urlfiltering),
      userdefinedauditlog: cdktf.stringToTerraform(this._userdefinedauditlog),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alg: {
        value: cdktf.stringToHclTerraform(this._alg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appflowexport: {
        value: cdktf.stringToHclTerraform(this._appflowexport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contentinspectionlog: {
        value: cdktf.stringToHclTerraform(this._contentinspectionlog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dateformat: {
        value: cdktf.stringToHclTerraform(this._dateformat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns: {
        value: cdktf.stringToHclTerraform(this._dns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domainresolvenow: {
        value: cdktf.booleanToHclTerraform(this._domainresolvenow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domainresolveretry: {
        value: cdktf.numberToHclTerraform(this._domainresolveretry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      httpauthtoken: {
        value: cdktf.stringToHclTerraform(this._httpauthtoken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpendpointurl: {
        value: cdktf.stringToHclTerraform(this._httpendpointurl),
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
      lbvservername: {
        value: cdktf.stringToHclTerraform(this._lbvservername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logfacility: {
        value: cdktf.stringToHclTerraform(this._logfacility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loglevel: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loglevel),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      lsn: {
        value: cdktf.stringToHclTerraform(this._lsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managementlog: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementlog),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      maxlogdatasizetohold: {
        value: cdktf.numberToHclTerraform(this._maxlogdatasizetohold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mgmtloglevel: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mgmtloglevel),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      protocolviolations: {
        value: cdktf.stringToHclTerraform(this._protocolviolations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverdomainname: {
        value: cdktf.stringToHclTerraform(this._serverdomainname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverip: {
        value: cdktf.stringToHclTerraform(this._serverip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverport: {
        value: cdktf.numberToHclTerraform(this._serverport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslinterception: {
        value: cdktf.stringToHclTerraform(this._sslinterception),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      streamanalytics: {
        value: cdktf.stringToHclTerraform(this._streamanalytics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriberlog: {
        value: cdktf.stringToHclTerraform(this._subscriberlog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslogcompliance: {
        value: cdktf.stringToHclTerraform(this._syslogcompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp: {
        value: cdktf.stringToHclTerraform(this._tcp),
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
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport: {
        value: cdktf.stringToHclTerraform(this._transport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urlfiltering: {
        value: cdktf.stringToHclTerraform(this._urlfiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userdefinedauditlog: {
        value: cdktf.stringToHclTerraform(this._userdefinedauditlog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
