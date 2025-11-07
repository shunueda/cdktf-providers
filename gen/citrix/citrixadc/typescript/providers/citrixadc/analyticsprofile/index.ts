// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnalyticsprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#allhttpheaders Analyticsprofile#allhttpheaders}
  */
  readonly allhttpheaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#analyticsauthtoken Analyticsprofile#analyticsauthtoken}
  */
  readonly analyticsauthtoken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#analyticsendpointcontenttype Analyticsprofile#analyticsendpointcontenttype}
  */
  readonly analyticsendpointcontenttype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#analyticsendpointmetadata Analyticsprofile#analyticsendpointmetadata}
  */
  readonly analyticsendpointmetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#analyticsendpointurl Analyticsprofile#analyticsendpointurl}
  */
  readonly analyticsendpointurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#auditlogs Analyticsprofile#auditlogs}
  */
  readonly auditlogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#collectors Analyticsprofile#collectors}
  */
  readonly collectors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#cqareporting Analyticsprofile#cqareporting}
  */
  readonly cqareporting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#dataformatfile Analyticsprofile#dataformatfile}
  */
  readonly dataformatfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#events Analyticsprofile#events}
  */
  readonly events?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#grpcstatus Analyticsprofile#grpcstatus}
  */
  readonly grpcstatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpauthentication Analyticsprofile#httpauthentication}
  */
  readonly httpauthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpclientsidemeasurements Analyticsprofile#httpclientsidemeasurements}
  */
  readonly httpclientsidemeasurements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpcontenttype Analyticsprofile#httpcontenttype}
  */
  readonly httpcontenttype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpcookie Analyticsprofile#httpcookie}
  */
  readonly httpcookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpcustomheaders Analyticsprofile#httpcustomheaders}
  */
  readonly httpcustomheaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpdomainname Analyticsprofile#httpdomainname}
  */
  readonly httpdomainname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httphost Analyticsprofile#httphost}
  */
  readonly httphost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httplocation Analyticsprofile#httplocation}
  */
  readonly httplocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpmethod Analyticsprofile#httpmethod}
  */
  readonly httpmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httppagetracking Analyticsprofile#httppagetracking}
  */
  readonly httppagetracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpreferer Analyticsprofile#httpreferer}
  */
  readonly httpreferer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpsetcookie Analyticsprofile#httpsetcookie}
  */
  readonly httpsetcookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpsetcookie2 Analyticsprofile#httpsetcookie2}
  */
  readonly httpsetcookie2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpurl Analyticsprofile#httpurl}
  */
  readonly httpurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpurlquery Analyticsprofile#httpurlquery}
  */
  readonly httpurlquery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpuseragent Analyticsprofile#httpuseragent}
  */
  readonly httpuseragent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpvia Analyticsprofile#httpvia}
  */
  readonly httpvia?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#httpxforwardedforheader Analyticsprofile#httpxforwardedforheader}
  */
  readonly httpxforwardedforheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#id Analyticsprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#integratedcache Analyticsprofile#integratedcache}
  */
  readonly integratedcache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#managementlog Analyticsprofile#managementlog}
  */
  readonly managementlog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#metrics Analyticsprofile#metrics}
  */
  readonly metrics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#metricsexportfrequency Analyticsprofile#metricsexportfrequency}
  */
  readonly metricsexportfrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#name Analyticsprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#outputmode Analyticsprofile#outputmode}
  */
  readonly outputmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#schemafile Analyticsprofile#schemafile}
  */
  readonly schemafile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#servemode Analyticsprofile#servemode}
  */
  readonly servemode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#tcpburstreporting Analyticsprofile#tcpburstreporting}
  */
  readonly tcpburstreporting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#topn Analyticsprofile#topn}
  */
  readonly topn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#type Analyticsprofile#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#urlcategory Analyticsprofile#urlcategory}
  */
  readonly urlcategory?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile citrixadc_analyticsprofile}
*/
export class Analyticsprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_analyticsprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Analyticsprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Analyticsprofile to import
  * @param importFromId The id of the existing Analyticsprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Analyticsprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_analyticsprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/analyticsprofile citrixadc_analyticsprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnalyticsprofileConfig
  */
  public constructor(scope: Construct, id: string, config: AnalyticsprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_analyticsprofile',
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
    this._allhttpheaders = config.allhttpheaders;
    this._analyticsauthtoken = config.analyticsauthtoken;
    this._analyticsendpointcontenttype = config.analyticsendpointcontenttype;
    this._analyticsendpointmetadata = config.analyticsendpointmetadata;
    this._analyticsendpointurl = config.analyticsendpointurl;
    this._auditlogs = config.auditlogs;
    this._collectors = config.collectors;
    this._cqareporting = config.cqareporting;
    this._dataformatfile = config.dataformatfile;
    this._events = config.events;
    this._grpcstatus = config.grpcstatus;
    this._httpauthentication = config.httpauthentication;
    this._httpclientsidemeasurements = config.httpclientsidemeasurements;
    this._httpcontenttype = config.httpcontenttype;
    this._httpcookie = config.httpcookie;
    this._httpcustomheaders = config.httpcustomheaders;
    this._httpdomainname = config.httpdomainname;
    this._httphost = config.httphost;
    this._httplocation = config.httplocation;
    this._httpmethod = config.httpmethod;
    this._httppagetracking = config.httppagetracking;
    this._httpreferer = config.httpreferer;
    this._httpsetcookie = config.httpsetcookie;
    this._httpsetcookie2 = config.httpsetcookie2;
    this._httpurl = config.httpurl;
    this._httpurlquery = config.httpurlquery;
    this._httpuseragent = config.httpuseragent;
    this._httpvia = config.httpvia;
    this._httpxforwardedforheader = config.httpxforwardedforheader;
    this._id = config.id;
    this._integratedcache = config.integratedcache;
    this._managementlog = config.managementlog;
    this._metrics = config.metrics;
    this._metricsexportfrequency = config.metricsexportfrequency;
    this._name = config.name;
    this._outputmode = config.outputmode;
    this._schemafile = config.schemafile;
    this._servemode = config.servemode;
    this._tcpburstreporting = config.tcpburstreporting;
    this._topn = config.topn;
    this._type = config.type;
    this._urlcategory = config.urlcategory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allhttpheaders - computed: true, optional: true, required: false
  private _allhttpheaders?: string; 
  public get allhttpheaders() {
    return this.getStringAttribute('allhttpheaders');
  }
  public set allhttpheaders(value: string) {
    this._allhttpheaders = value;
  }
  public resetAllhttpheaders() {
    this._allhttpheaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allhttpheadersInput() {
    return this._allhttpheaders;
  }

  // analyticsauthtoken - computed: true, optional: true, required: false
  private _analyticsauthtoken?: string; 
  public get analyticsauthtoken() {
    return this.getStringAttribute('analyticsauthtoken');
  }
  public set analyticsauthtoken(value: string) {
    this._analyticsauthtoken = value;
  }
  public resetAnalyticsauthtoken() {
    this._analyticsauthtoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsauthtokenInput() {
    return this._analyticsauthtoken;
  }

  // analyticsendpointcontenttype - computed: true, optional: true, required: false
  private _analyticsendpointcontenttype?: string; 
  public get analyticsendpointcontenttype() {
    return this.getStringAttribute('analyticsendpointcontenttype');
  }
  public set analyticsendpointcontenttype(value: string) {
    this._analyticsendpointcontenttype = value;
  }
  public resetAnalyticsendpointcontenttype() {
    this._analyticsendpointcontenttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsendpointcontenttypeInput() {
    return this._analyticsendpointcontenttype;
  }

  // analyticsendpointmetadata - computed: true, optional: true, required: false
  private _analyticsendpointmetadata?: string; 
  public get analyticsendpointmetadata() {
    return this.getStringAttribute('analyticsendpointmetadata');
  }
  public set analyticsendpointmetadata(value: string) {
    this._analyticsendpointmetadata = value;
  }
  public resetAnalyticsendpointmetadata() {
    this._analyticsendpointmetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsendpointmetadataInput() {
    return this._analyticsendpointmetadata;
  }

  // analyticsendpointurl - computed: true, optional: true, required: false
  private _analyticsendpointurl?: string; 
  public get analyticsendpointurl() {
    return this.getStringAttribute('analyticsendpointurl');
  }
  public set analyticsendpointurl(value: string) {
    this._analyticsendpointurl = value;
  }
  public resetAnalyticsendpointurl() {
    this._analyticsendpointurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsendpointurlInput() {
    return this._analyticsendpointurl;
  }

  // auditlogs - computed: true, optional: true, required: false
  private _auditlogs?: string; 
  public get auditlogs() {
    return this.getStringAttribute('auditlogs');
  }
  public set auditlogs(value: string) {
    this._auditlogs = value;
  }
  public resetAuditlogs() {
    this._auditlogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditlogsInput() {
    return this._auditlogs;
  }

  // collectors - computed: true, optional: true, required: false
  private _collectors?: string; 
  public get collectors() {
    return this.getStringAttribute('collectors');
  }
  public set collectors(value: string) {
    this._collectors = value;
  }
  public resetCollectors() {
    this._collectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors;
  }

  // cqareporting - computed: true, optional: true, required: false
  private _cqareporting?: string; 
  public get cqareporting() {
    return this.getStringAttribute('cqareporting');
  }
  public set cqareporting(value: string) {
    this._cqareporting = value;
  }
  public resetCqareporting() {
    this._cqareporting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cqareportingInput() {
    return this._cqareporting;
  }

  // dataformatfile - computed: true, optional: true, required: false
  private _dataformatfile?: string; 
  public get dataformatfile() {
    return this.getStringAttribute('dataformatfile');
  }
  public set dataformatfile(value: string) {
    this._dataformatfile = value;
  }
  public resetDataformatfile() {
    this._dataformatfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataformatfileInput() {
    return this._dataformatfile;
  }

  // events - computed: true, optional: true, required: false
  private _events?: string; 
  public get events() {
    return this.getStringAttribute('events');
  }
  public set events(value: string) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // grpcstatus - computed: true, optional: true, required: false
  private _grpcstatus?: string; 
  public get grpcstatus() {
    return this.getStringAttribute('grpcstatus');
  }
  public set grpcstatus(value: string) {
    this._grpcstatus = value;
  }
  public resetGrpcstatus() {
    this._grpcstatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcstatusInput() {
    return this._grpcstatus;
  }

  // httpauthentication - computed: true, optional: true, required: false
  private _httpauthentication?: string; 
  public get httpauthentication() {
    return this.getStringAttribute('httpauthentication');
  }
  public set httpauthentication(value: string) {
    this._httpauthentication = value;
  }
  public resetHttpauthentication() {
    this._httpauthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpauthenticationInput() {
    return this._httpauthentication;
  }

  // httpclientsidemeasurements - computed: true, optional: true, required: false
  private _httpclientsidemeasurements?: string; 
  public get httpclientsidemeasurements() {
    return this.getStringAttribute('httpclientsidemeasurements');
  }
  public set httpclientsidemeasurements(value: string) {
    this._httpclientsidemeasurements = value;
  }
  public resetHttpclientsidemeasurements() {
    this._httpclientsidemeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpclientsidemeasurementsInput() {
    return this._httpclientsidemeasurements;
  }

  // httpcontenttype - computed: true, optional: true, required: false
  private _httpcontenttype?: string; 
  public get httpcontenttype() {
    return this.getStringAttribute('httpcontenttype');
  }
  public set httpcontenttype(value: string) {
    this._httpcontenttype = value;
  }
  public resetHttpcontenttype() {
    this._httpcontenttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpcontenttypeInput() {
    return this._httpcontenttype;
  }

  // httpcookie - computed: true, optional: true, required: false
  private _httpcookie?: string; 
  public get httpcookie() {
    return this.getStringAttribute('httpcookie');
  }
  public set httpcookie(value: string) {
    this._httpcookie = value;
  }
  public resetHttpcookie() {
    this._httpcookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpcookieInput() {
    return this._httpcookie;
  }

  // httpcustomheaders - computed: true, optional: true, required: false
  private _httpcustomheaders?: string[]; 
  public get httpcustomheaders() {
    return this.getListAttribute('httpcustomheaders');
  }
  public set httpcustomheaders(value: string[]) {
    this._httpcustomheaders = value;
  }
  public resetHttpcustomheaders() {
    this._httpcustomheaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpcustomheadersInput() {
    return this._httpcustomheaders;
  }

  // httpdomainname - computed: true, optional: true, required: false
  private _httpdomainname?: string; 
  public get httpdomainname() {
    return this.getStringAttribute('httpdomainname');
  }
  public set httpdomainname(value: string) {
    this._httpdomainname = value;
  }
  public resetHttpdomainname() {
    this._httpdomainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpdomainnameInput() {
    return this._httpdomainname;
  }

  // httphost - computed: true, optional: true, required: false
  private _httphost?: string; 
  public get httphost() {
    return this.getStringAttribute('httphost');
  }
  public set httphost(value: string) {
    this._httphost = value;
  }
  public resetHttphost() {
    this._httphost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httphostInput() {
    return this._httphost;
  }

  // httplocation - computed: true, optional: true, required: false
  private _httplocation?: string; 
  public get httplocation() {
    return this.getStringAttribute('httplocation');
  }
  public set httplocation(value: string) {
    this._httplocation = value;
  }
  public resetHttplocation() {
    this._httplocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httplocationInput() {
    return this._httplocation;
  }

  // httpmethod - computed: true, optional: true, required: false
  private _httpmethod?: string; 
  public get httpmethod() {
    return this.getStringAttribute('httpmethod');
  }
  public set httpmethod(value: string) {
    this._httpmethod = value;
  }
  public resetHttpmethod() {
    this._httpmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpmethodInput() {
    return this._httpmethod;
  }

  // httppagetracking - computed: true, optional: true, required: false
  private _httppagetracking?: string; 
  public get httppagetracking() {
    return this.getStringAttribute('httppagetracking');
  }
  public set httppagetracking(value: string) {
    this._httppagetracking = value;
  }
  public resetHttppagetracking() {
    this._httppagetracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httppagetrackingInput() {
    return this._httppagetracking;
  }

  // httpreferer - computed: true, optional: true, required: false
  private _httpreferer?: string; 
  public get httpreferer() {
    return this.getStringAttribute('httpreferer');
  }
  public set httpreferer(value: string) {
    this._httpreferer = value;
  }
  public resetHttpreferer() {
    this._httpreferer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httprefererInput() {
    return this._httpreferer;
  }

  // httpsetcookie - computed: true, optional: true, required: false
  private _httpsetcookie?: string; 
  public get httpsetcookie() {
    return this.getStringAttribute('httpsetcookie');
  }
  public set httpsetcookie(value: string) {
    this._httpsetcookie = value;
  }
  public resetHttpsetcookie() {
    this._httpsetcookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsetcookieInput() {
    return this._httpsetcookie;
  }

  // httpsetcookie2 - computed: true, optional: true, required: false
  private _httpsetcookie2?: string; 
  public get httpsetcookie2() {
    return this.getStringAttribute('httpsetcookie2');
  }
  public set httpsetcookie2(value: string) {
    this._httpsetcookie2 = value;
  }
  public resetHttpsetcookie2() {
    this._httpsetcookie2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsetcookie2Input() {
    return this._httpsetcookie2;
  }

  // httpurl - computed: true, optional: true, required: false
  private _httpurl?: string; 
  public get httpurl() {
    return this.getStringAttribute('httpurl');
  }
  public set httpurl(value: string) {
    this._httpurl = value;
  }
  public resetHttpurl() {
    this._httpurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpurlInput() {
    return this._httpurl;
  }

  // httpurlquery - computed: true, optional: true, required: false
  private _httpurlquery?: string; 
  public get httpurlquery() {
    return this.getStringAttribute('httpurlquery');
  }
  public set httpurlquery(value: string) {
    this._httpurlquery = value;
  }
  public resetHttpurlquery() {
    this._httpurlquery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpurlqueryInput() {
    return this._httpurlquery;
  }

  // httpuseragent - computed: true, optional: true, required: false
  private _httpuseragent?: string; 
  public get httpuseragent() {
    return this.getStringAttribute('httpuseragent');
  }
  public set httpuseragent(value: string) {
    this._httpuseragent = value;
  }
  public resetHttpuseragent() {
    this._httpuseragent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpuseragentInput() {
    return this._httpuseragent;
  }

  // httpvia - computed: true, optional: true, required: false
  private _httpvia?: string; 
  public get httpvia() {
    return this.getStringAttribute('httpvia');
  }
  public set httpvia(value: string) {
    this._httpvia = value;
  }
  public resetHttpvia() {
    this._httpvia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpviaInput() {
    return this._httpvia;
  }

  // httpxforwardedforheader - computed: true, optional: true, required: false
  private _httpxforwardedforheader?: string; 
  public get httpxforwardedforheader() {
    return this.getStringAttribute('httpxforwardedforheader');
  }
  public set httpxforwardedforheader(value: string) {
    this._httpxforwardedforheader = value;
  }
  public resetHttpxforwardedforheader() {
    this._httpxforwardedforheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpxforwardedforheaderInput() {
    return this._httpxforwardedforheader;
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

  // integratedcache - computed: true, optional: true, required: false
  private _integratedcache?: string; 
  public get integratedcache() {
    return this.getStringAttribute('integratedcache');
  }
  public set integratedcache(value: string) {
    this._integratedcache = value;
  }
  public resetIntegratedcache() {
    this._integratedcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integratedcacheInput() {
    return this._integratedcache;
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

  // metrics - computed: true, optional: true, required: false
  private _metrics?: string; 
  public get metrics() {
    return this.getStringAttribute('metrics');
  }
  public set metrics(value: string) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // metricsexportfrequency - computed: true, optional: true, required: false
  private _metricsexportfrequency?: number; 
  public get metricsexportfrequency() {
    return this.getNumberAttribute('metricsexportfrequency');
  }
  public set metricsexportfrequency(value: number) {
    this._metricsexportfrequency = value;
  }
  public resetMetricsexportfrequency() {
    this._metricsexportfrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsexportfrequencyInput() {
    return this._metricsexportfrequency;
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

  // outputmode - computed: true, optional: true, required: false
  private _outputmode?: string; 
  public get outputmode() {
    return this.getStringAttribute('outputmode');
  }
  public set outputmode(value: string) {
    this._outputmode = value;
  }
  public resetOutputmode() {
    this._outputmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputmodeInput() {
    return this._outputmode;
  }

  // schemafile - computed: true, optional: true, required: false
  private _schemafile?: string; 
  public get schemafile() {
    return this.getStringAttribute('schemafile');
  }
  public set schemafile(value: string) {
    this._schemafile = value;
  }
  public resetSchemafile() {
    this._schemafile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemafileInput() {
    return this._schemafile;
  }

  // servemode - computed: true, optional: true, required: false
  private _servemode?: string; 
  public get servemode() {
    return this.getStringAttribute('servemode');
  }
  public set servemode(value: string) {
    this._servemode = value;
  }
  public resetServemode() {
    this._servemode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servemodeInput() {
    return this._servemode;
  }

  // tcpburstreporting - computed: true, optional: true, required: false
  private _tcpburstreporting?: string; 
  public get tcpburstreporting() {
    return this.getStringAttribute('tcpburstreporting');
  }
  public set tcpburstreporting(value: string) {
    this._tcpburstreporting = value;
  }
  public resetTcpburstreporting() {
    this._tcpburstreporting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpburstreportingInput() {
    return this._tcpburstreporting;
  }

  // topn - computed: true, optional: true, required: false
  private _topn?: string; 
  public get topn() {
    return this.getStringAttribute('topn');
  }
  public set topn(value: string) {
    this._topn = value;
  }
  public resetTopn() {
    this._topn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topnInput() {
    return this._topn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // urlcategory - computed: true, optional: true, required: false
  private _urlcategory?: string; 
  public get urlcategory() {
    return this.getStringAttribute('urlcategory');
  }
  public set urlcategory(value: string) {
    this._urlcategory = value;
  }
  public resetUrlcategory() {
    this._urlcategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlcategoryInput() {
    return this._urlcategory;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allhttpheaders: cdktf.stringToTerraform(this._allhttpheaders),
      analyticsauthtoken: cdktf.stringToTerraform(this._analyticsauthtoken),
      analyticsendpointcontenttype: cdktf.stringToTerraform(this._analyticsendpointcontenttype),
      analyticsendpointmetadata: cdktf.stringToTerraform(this._analyticsendpointmetadata),
      analyticsendpointurl: cdktf.stringToTerraform(this._analyticsendpointurl),
      auditlogs: cdktf.stringToTerraform(this._auditlogs),
      collectors: cdktf.stringToTerraform(this._collectors),
      cqareporting: cdktf.stringToTerraform(this._cqareporting),
      dataformatfile: cdktf.stringToTerraform(this._dataformatfile),
      events: cdktf.stringToTerraform(this._events),
      grpcstatus: cdktf.stringToTerraform(this._grpcstatus),
      httpauthentication: cdktf.stringToTerraform(this._httpauthentication),
      httpclientsidemeasurements: cdktf.stringToTerraform(this._httpclientsidemeasurements),
      httpcontenttype: cdktf.stringToTerraform(this._httpcontenttype),
      httpcookie: cdktf.stringToTerraform(this._httpcookie),
      httpcustomheaders: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpcustomheaders),
      httpdomainname: cdktf.stringToTerraform(this._httpdomainname),
      httphost: cdktf.stringToTerraform(this._httphost),
      httplocation: cdktf.stringToTerraform(this._httplocation),
      httpmethod: cdktf.stringToTerraform(this._httpmethod),
      httppagetracking: cdktf.stringToTerraform(this._httppagetracking),
      httpreferer: cdktf.stringToTerraform(this._httpreferer),
      httpsetcookie: cdktf.stringToTerraform(this._httpsetcookie),
      httpsetcookie2: cdktf.stringToTerraform(this._httpsetcookie2),
      httpurl: cdktf.stringToTerraform(this._httpurl),
      httpurlquery: cdktf.stringToTerraform(this._httpurlquery),
      httpuseragent: cdktf.stringToTerraform(this._httpuseragent),
      httpvia: cdktf.stringToTerraform(this._httpvia),
      httpxforwardedforheader: cdktf.stringToTerraform(this._httpxforwardedforheader),
      id: cdktf.stringToTerraform(this._id),
      integratedcache: cdktf.stringToTerraform(this._integratedcache),
      managementlog: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementlog),
      metrics: cdktf.stringToTerraform(this._metrics),
      metricsexportfrequency: cdktf.numberToTerraform(this._metricsexportfrequency),
      name: cdktf.stringToTerraform(this._name),
      outputmode: cdktf.stringToTerraform(this._outputmode),
      schemafile: cdktf.stringToTerraform(this._schemafile),
      servemode: cdktf.stringToTerraform(this._servemode),
      tcpburstreporting: cdktf.stringToTerraform(this._tcpburstreporting),
      topn: cdktf.stringToTerraform(this._topn),
      type: cdktf.stringToTerraform(this._type),
      urlcategory: cdktf.stringToTerraform(this._urlcategory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allhttpheaders: {
        value: cdktf.stringToHclTerraform(this._allhttpheaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analyticsauthtoken: {
        value: cdktf.stringToHclTerraform(this._analyticsauthtoken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analyticsendpointcontenttype: {
        value: cdktf.stringToHclTerraform(this._analyticsendpointcontenttype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analyticsendpointmetadata: {
        value: cdktf.stringToHclTerraform(this._analyticsendpointmetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analyticsendpointurl: {
        value: cdktf.stringToHclTerraform(this._analyticsendpointurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auditlogs: {
        value: cdktf.stringToHclTerraform(this._auditlogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collectors: {
        value: cdktf.stringToHclTerraform(this._collectors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cqareporting: {
        value: cdktf.stringToHclTerraform(this._cqareporting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataformatfile: {
        value: cdktf.stringToHclTerraform(this._dataformatfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events: {
        value: cdktf.stringToHclTerraform(this._events),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grpcstatus: {
        value: cdktf.stringToHclTerraform(this._grpcstatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpauthentication: {
        value: cdktf.stringToHclTerraform(this._httpauthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpclientsidemeasurements: {
        value: cdktf.stringToHclTerraform(this._httpclientsidemeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpcontenttype: {
        value: cdktf.stringToHclTerraform(this._httpcontenttype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpcookie: {
        value: cdktf.stringToHclTerraform(this._httpcookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpcustomheaders: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpcustomheaders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      httpdomainname: {
        value: cdktf.stringToHclTerraform(this._httpdomainname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httphost: {
        value: cdktf.stringToHclTerraform(this._httphost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httplocation: {
        value: cdktf.stringToHclTerraform(this._httplocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpmethod: {
        value: cdktf.stringToHclTerraform(this._httpmethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httppagetracking: {
        value: cdktf.stringToHclTerraform(this._httppagetracking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpreferer: {
        value: cdktf.stringToHclTerraform(this._httpreferer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpsetcookie: {
        value: cdktf.stringToHclTerraform(this._httpsetcookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpsetcookie2: {
        value: cdktf.stringToHclTerraform(this._httpsetcookie2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpurl: {
        value: cdktf.stringToHclTerraform(this._httpurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpurlquery: {
        value: cdktf.stringToHclTerraform(this._httpurlquery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpuseragent: {
        value: cdktf.stringToHclTerraform(this._httpuseragent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpvia: {
        value: cdktf.stringToHclTerraform(this._httpvia),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpxforwardedforheader: {
        value: cdktf.stringToHclTerraform(this._httpxforwardedforheader),
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
      integratedcache: {
        value: cdktf.stringToHclTerraform(this._integratedcache),
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
      metrics: {
        value: cdktf.stringToHclTerraform(this._metrics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metricsexportfrequency: {
        value: cdktf.numberToHclTerraform(this._metricsexportfrequency),
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
      outputmode: {
        value: cdktf.stringToHclTerraform(this._outputmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schemafile: {
        value: cdktf.stringToHclTerraform(this._schemafile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servemode: {
        value: cdktf.stringToHclTerraform(this._servemode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcpburstreporting: {
        value: cdktf.stringToHclTerraform(this._tcpburstreporting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topn: {
        value: cdktf.stringToHclTerraform(this._topn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urlcategory: {
        value: cdktf.stringToHclTerraform(this._urlcategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
