// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditnslogactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#acl Auditnslogaction#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#alg Auditnslogaction#alg}
  */
  readonly alg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#appflowexport Auditnslogaction#appflowexport}
  */
  readonly appflowexport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#contentinspectionlog Auditnslogaction#contentinspectionlog}
  */
  readonly contentinspectionlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#dateformat Auditnslogaction#dateformat}
  */
  readonly dateformat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#domainresolvenow Auditnslogaction#domainresolvenow}
  */
  readonly domainresolvenow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#domainresolveretry Auditnslogaction#domainresolveretry}
  */
  readonly domainresolveretry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#id Auditnslogaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#logfacility Auditnslogaction#logfacility}
  */
  readonly logfacility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#loglevel Auditnslogaction#loglevel}
  */
  readonly loglevel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#lsn Auditnslogaction#lsn}
  */
  readonly lsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#name Auditnslogaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#protocolviolations Auditnslogaction#protocolviolations}
  */
  readonly protocolviolations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#serverdomainname Auditnslogaction#serverdomainname}
  */
  readonly serverdomainname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#serverip Auditnslogaction#serverip}
  */
  readonly serverip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#serverport Auditnslogaction#serverport}
  */
  readonly serverport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#sslinterception Auditnslogaction#sslinterception}
  */
  readonly sslinterception?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#subscriberlog Auditnslogaction#subscriberlog}
  */
  readonly subscriberlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#tcp Auditnslogaction#tcp}
  */
  readonly tcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#timezone Auditnslogaction#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#urlfiltering Auditnslogaction#urlfiltering}
  */
  readonly urlfiltering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#userdefinedauditlog Auditnslogaction#userdefinedauditlog}
  */
  readonly userdefinedauditlog?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction citrixadc_auditnslogaction}
*/
export class Auditnslogaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_auditnslogaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Auditnslogaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Auditnslogaction to import
  * @param importFromId The id of the existing Auditnslogaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Auditnslogaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_auditnslogaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditnslogaction citrixadc_auditnslogaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditnslogactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuditnslogactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_auditnslogaction',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._domainresolvenow = config.domainresolvenow;
    this._domainresolveretry = config.domainresolveretry;
    this._id = config.id;
    this._logfacility = config.logfacility;
    this._loglevel = config.loglevel;
    this._lsn = config.lsn;
    this._name = config.name;
    this._protocolviolations = config.protocolviolations;
    this._serverdomainname = config.serverdomainname;
    this._serverip = config.serverip;
    this._serverport = config.serverport;
    this._sslinterception = config.sslinterception;
    this._subscriberlog = config.subscriberlog;
    this._tcp = config.tcp;
    this._timezone = config.timezone;
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
    return this.getListAttribute('loglevel');
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
      domainresolvenow: cdktf.booleanToTerraform(this._domainresolvenow),
      domainresolveretry: cdktf.numberToTerraform(this._domainresolveretry),
      id: cdktf.stringToTerraform(this._id),
      logfacility: cdktf.stringToTerraform(this._logfacility),
      loglevel: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loglevel),
      lsn: cdktf.stringToTerraform(this._lsn),
      name: cdktf.stringToTerraform(this._name),
      protocolviolations: cdktf.stringToTerraform(this._protocolviolations),
      serverdomainname: cdktf.stringToTerraform(this._serverdomainname),
      serverip: cdktf.stringToTerraform(this._serverip),
      serverport: cdktf.numberToTerraform(this._serverport),
      sslinterception: cdktf.stringToTerraform(this._sslinterception),
      subscriberlog: cdktf.stringToTerraform(this._subscriberlog),
      tcp: cdktf.stringToTerraform(this._tcp),
      timezone: cdktf.stringToTerraform(this._timezone),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
        type: "list",
        storageClassType: "stringList",
      },
      lsn: {
        value: cdktf.stringToHclTerraform(this._lsn),
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
      subscriberlog: {
        value: cdktf.stringToHclTerraform(this._subscriberlog),
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
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
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
