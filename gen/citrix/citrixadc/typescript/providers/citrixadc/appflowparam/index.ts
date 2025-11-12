// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppflowparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#aaausername Appflowparam#aaausername}
  */
  readonly aaausername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#analyticsauthtoken Appflowparam#analyticsauthtoken}
  */
  readonly analyticsauthtoken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#appnamerefresh Appflowparam#appnamerefresh}
  */
  readonly appnamerefresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#auditlogs Appflowparam#auditlogs}
  */
  readonly auditlogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#cacheinsight Appflowparam#cacheinsight}
  */
  readonly cacheinsight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#clienttrafficonly Appflowparam#clienttrafficonly}
  */
  readonly clienttrafficonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#connectionchaining Appflowparam#connectionchaining}
  */
  readonly connectionchaining?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#cqareporting Appflowparam#cqareporting}
  */
  readonly cqareporting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#distributedtracing Appflowparam#distributedtracing}
  */
  readonly distributedtracing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#disttracingsamplingrate Appflowparam#disttracingsamplingrate}
  */
  readonly disttracingsamplingrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#emailaddress Appflowparam#emailaddress}
  */
  readonly emailaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#events Appflowparam#events}
  */
  readonly events?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#flowrecordinterval Appflowparam#flowrecordinterval}
  */
  readonly flowrecordinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#gxsessionreporting Appflowparam#gxsessionreporting}
  */
  readonly gxsessionreporting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httpauthorization Appflowparam#httpauthorization}
  */
  readonly httpauthorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httpcontenttype Appflowparam#httpcontenttype}
  */
  readonly httpcontenttype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httpcookie Appflowparam#httpcookie}
  */
  readonly httpcookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httpdomain Appflowparam#httpdomain}
  */
  readonly httpdomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httphost Appflowparam#httphost}
  */
  readonly httphost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httplocation Appflowparam#httplocation}
  */
  readonly httplocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httpmethod Appflowparam#httpmethod}
  */
  readonly httpmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httpquerywithurl Appflowparam#httpquerywithurl}
  */
  readonly httpquerywithurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httpreferer Appflowparam#httpreferer}
  */
  readonly httpreferer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httpsetcookie Appflowparam#httpsetcookie}
  */
  readonly httpsetcookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httpsetcookie2 Appflowparam#httpsetcookie2}
  */
  readonly httpsetcookie2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httpurl Appflowparam#httpurl}
  */
  readonly httpurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httpuseragent Appflowparam#httpuseragent}
  */
  readonly httpuseragent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httpvia Appflowparam#httpvia}
  */
  readonly httpvia?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#httpxforwardedfor Appflowparam#httpxforwardedfor}
  */
  readonly httpxforwardedfor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#id Appflowparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#identifiername Appflowparam#identifiername}
  */
  readonly identifiername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#identifiersessionname Appflowparam#identifiersessionname}
  */
  readonly identifiersessionname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#logstreamovernsip Appflowparam#logstreamovernsip}
  */
  readonly logstreamovernsip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#lsnlogging Appflowparam#lsnlogging}
  */
  readonly lsnlogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#metrics Appflowparam#metrics}
  */
  readonly metrics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#observationdomainid Appflowparam#observationdomainid}
  */
  readonly observationdomainid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#observationdomainname Appflowparam#observationdomainname}
  */
  readonly observationdomainname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#observationpointid Appflowparam#observationpointid}
  */
  readonly observationpointid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#securityinsightrecordinterval Appflowparam#securityinsightrecordinterval}
  */
  readonly securityinsightrecordinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#securityinsighttraffic Appflowparam#securityinsighttraffic}
  */
  readonly securityinsighttraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#skipcacheredirectionhttptransaction Appflowparam#skipcacheredirectionhttptransaction}
  */
  readonly skipcacheredirectionhttptransaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#subscriberawareness Appflowparam#subscriberawareness}
  */
  readonly subscriberawareness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#subscriberidobfuscation Appflowparam#subscriberidobfuscation}
  */
  readonly subscriberidobfuscation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#subscriberidobfuscationalgo Appflowparam#subscriberidobfuscationalgo}
  */
  readonly subscriberidobfuscationalgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#tcpattackcounterinterval Appflowparam#tcpattackcounterinterval}
  */
  readonly tcpattackcounterinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#templaterefresh Appflowparam#templaterefresh}
  */
  readonly templaterefresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#timeseriesovernsip Appflowparam#timeseriesovernsip}
  */
  readonly timeseriesovernsip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#udppmtu Appflowparam#udppmtu}
  */
  readonly udppmtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#urlcategory Appflowparam#urlcategory}
  */
  readonly urlcategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#usagerecordinterval Appflowparam#usagerecordinterval}
  */
  readonly usagerecordinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#videoinsight Appflowparam#videoinsight}
  */
  readonly videoinsight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#websaasappusagereporting Appflowparam#websaasappusagereporting}
  */
  readonly websaasappusagereporting?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam citrixadc_appflowparam}
*/
export class Appflowparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appflowparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appflowparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appflowparam to import
  * @param importFromId The id of the existing Appflowparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appflowparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appflowparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowparam citrixadc_appflowparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppflowparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AppflowparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appflowparam',
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
    this._aaausername = config.aaausername;
    this._analyticsauthtoken = config.analyticsauthtoken;
    this._appnamerefresh = config.appnamerefresh;
    this._auditlogs = config.auditlogs;
    this._cacheinsight = config.cacheinsight;
    this._clienttrafficonly = config.clienttrafficonly;
    this._connectionchaining = config.connectionchaining;
    this._cqareporting = config.cqareporting;
    this._distributedtracing = config.distributedtracing;
    this._disttracingsamplingrate = config.disttracingsamplingrate;
    this._emailaddress = config.emailaddress;
    this._events = config.events;
    this._flowrecordinterval = config.flowrecordinterval;
    this._gxsessionreporting = config.gxsessionreporting;
    this._httpauthorization = config.httpauthorization;
    this._httpcontenttype = config.httpcontenttype;
    this._httpcookie = config.httpcookie;
    this._httpdomain = config.httpdomain;
    this._httphost = config.httphost;
    this._httplocation = config.httplocation;
    this._httpmethod = config.httpmethod;
    this._httpquerywithurl = config.httpquerywithurl;
    this._httpreferer = config.httpreferer;
    this._httpsetcookie = config.httpsetcookie;
    this._httpsetcookie2 = config.httpsetcookie2;
    this._httpurl = config.httpurl;
    this._httpuseragent = config.httpuseragent;
    this._httpvia = config.httpvia;
    this._httpxforwardedfor = config.httpxforwardedfor;
    this._id = config.id;
    this._identifiername = config.identifiername;
    this._identifiersessionname = config.identifiersessionname;
    this._logstreamovernsip = config.logstreamovernsip;
    this._lsnlogging = config.lsnlogging;
    this._metrics = config.metrics;
    this._observationdomainid = config.observationdomainid;
    this._observationdomainname = config.observationdomainname;
    this._observationpointid = config.observationpointid;
    this._securityinsightrecordinterval = config.securityinsightrecordinterval;
    this._securityinsighttraffic = config.securityinsighttraffic;
    this._skipcacheredirectionhttptransaction = config.skipcacheredirectionhttptransaction;
    this._subscriberawareness = config.subscriberawareness;
    this._subscriberidobfuscation = config.subscriberidobfuscation;
    this._subscriberidobfuscationalgo = config.subscriberidobfuscationalgo;
    this._tcpattackcounterinterval = config.tcpattackcounterinterval;
    this._templaterefresh = config.templaterefresh;
    this._timeseriesovernsip = config.timeseriesovernsip;
    this._udppmtu = config.udppmtu;
    this._urlcategory = config.urlcategory;
    this._usagerecordinterval = config.usagerecordinterval;
    this._videoinsight = config.videoinsight;
    this._websaasappusagereporting = config.websaasappusagereporting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaausername - computed: true, optional: true, required: false
  private _aaausername?: string; 
  public get aaausername() {
    return this.getStringAttribute('aaausername');
  }
  public set aaausername(value: string) {
    this._aaausername = value;
  }
  public resetAaausername() {
    this._aaausername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaausernameInput() {
    return this._aaausername;
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

  // appnamerefresh - computed: true, optional: true, required: false
  private _appnamerefresh?: number; 
  public get appnamerefresh() {
    return this.getNumberAttribute('appnamerefresh');
  }
  public set appnamerefresh(value: number) {
    this._appnamerefresh = value;
  }
  public resetAppnamerefresh() {
    this._appnamerefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appnamerefreshInput() {
    return this._appnamerefresh;
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

  // cacheinsight - computed: true, optional: true, required: false
  private _cacheinsight?: string; 
  public get cacheinsight() {
    return this.getStringAttribute('cacheinsight');
  }
  public set cacheinsight(value: string) {
    this._cacheinsight = value;
  }
  public resetCacheinsight() {
    this._cacheinsight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheinsightInput() {
    return this._cacheinsight;
  }

  // clienttrafficonly - computed: true, optional: true, required: false
  private _clienttrafficonly?: string; 
  public get clienttrafficonly() {
    return this.getStringAttribute('clienttrafficonly');
  }
  public set clienttrafficonly(value: string) {
    this._clienttrafficonly = value;
  }
  public resetClienttrafficonly() {
    this._clienttrafficonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clienttrafficonlyInput() {
    return this._clienttrafficonly;
  }

  // connectionchaining - computed: true, optional: true, required: false
  private _connectionchaining?: string; 
  public get connectionchaining() {
    return this.getStringAttribute('connectionchaining');
  }
  public set connectionchaining(value: string) {
    this._connectionchaining = value;
  }
  public resetConnectionchaining() {
    this._connectionchaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionchainingInput() {
    return this._connectionchaining;
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

  // distributedtracing - computed: true, optional: true, required: false
  private _distributedtracing?: string; 
  public get distributedtracing() {
    return this.getStringAttribute('distributedtracing');
  }
  public set distributedtracing(value: string) {
    this._distributedtracing = value;
  }
  public resetDistributedtracing() {
    this._distributedtracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedtracingInput() {
    return this._distributedtracing;
  }

  // disttracingsamplingrate - computed: true, optional: true, required: false
  private _disttracingsamplingrate?: number; 
  public get disttracingsamplingrate() {
    return this.getNumberAttribute('disttracingsamplingrate');
  }
  public set disttracingsamplingrate(value: number) {
    this._disttracingsamplingrate = value;
  }
  public resetDisttracingsamplingrate() {
    this._disttracingsamplingrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disttracingsamplingrateInput() {
    return this._disttracingsamplingrate;
  }

  // emailaddress - computed: true, optional: true, required: false
  private _emailaddress?: string; 
  public get emailaddress() {
    return this.getStringAttribute('emailaddress');
  }
  public set emailaddress(value: string) {
    this._emailaddress = value;
  }
  public resetEmailaddress() {
    this._emailaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailaddressInput() {
    return this._emailaddress;
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

  // flowrecordinterval - computed: true, optional: true, required: false
  private _flowrecordinterval?: number; 
  public get flowrecordinterval() {
    return this.getNumberAttribute('flowrecordinterval');
  }
  public set flowrecordinterval(value: number) {
    this._flowrecordinterval = value;
  }
  public resetFlowrecordinterval() {
    this._flowrecordinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowrecordintervalInput() {
    return this._flowrecordinterval;
  }

  // gxsessionreporting - computed: true, optional: true, required: false
  private _gxsessionreporting?: string; 
  public get gxsessionreporting() {
    return this.getStringAttribute('gxsessionreporting');
  }
  public set gxsessionreporting(value: string) {
    this._gxsessionreporting = value;
  }
  public resetGxsessionreporting() {
    this._gxsessionreporting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gxsessionreportingInput() {
    return this._gxsessionreporting;
  }

  // httpauthorization - computed: true, optional: true, required: false
  private _httpauthorization?: string; 
  public get httpauthorization() {
    return this.getStringAttribute('httpauthorization');
  }
  public set httpauthorization(value: string) {
    this._httpauthorization = value;
  }
  public resetHttpauthorization() {
    this._httpauthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpauthorizationInput() {
    return this._httpauthorization;
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

  // httpdomain - computed: true, optional: true, required: false
  private _httpdomain?: string; 
  public get httpdomain() {
    return this.getStringAttribute('httpdomain');
  }
  public set httpdomain(value: string) {
    this._httpdomain = value;
  }
  public resetHttpdomain() {
    this._httpdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpdomainInput() {
    return this._httpdomain;
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

  // httpquerywithurl - computed: true, optional: true, required: false
  private _httpquerywithurl?: string; 
  public get httpquerywithurl() {
    return this.getStringAttribute('httpquerywithurl');
  }
  public set httpquerywithurl(value: string) {
    this._httpquerywithurl = value;
  }
  public resetHttpquerywithurl() {
    this._httpquerywithurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpquerywithurlInput() {
    return this._httpquerywithurl;
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

  // httpxforwardedfor - computed: true, optional: true, required: false
  private _httpxforwardedfor?: string; 
  public get httpxforwardedfor() {
    return this.getStringAttribute('httpxforwardedfor');
  }
  public set httpxforwardedfor(value: string) {
    this._httpxforwardedfor = value;
  }
  public resetHttpxforwardedfor() {
    this._httpxforwardedfor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpxforwardedforInput() {
    return this._httpxforwardedfor;
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

  // identifiername - computed: true, optional: true, required: false
  private _identifiername?: string; 
  public get identifiername() {
    return this.getStringAttribute('identifiername');
  }
  public set identifiername(value: string) {
    this._identifiername = value;
  }
  public resetIdentifiername() {
    this._identifiername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiernameInput() {
    return this._identifiername;
  }

  // identifiersessionname - computed: true, optional: true, required: false
  private _identifiersessionname?: string; 
  public get identifiersessionname() {
    return this.getStringAttribute('identifiersessionname');
  }
  public set identifiersessionname(value: string) {
    this._identifiersessionname = value;
  }
  public resetIdentifiersessionname() {
    this._identifiersessionname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersessionnameInput() {
    return this._identifiersessionname;
  }

  // logstreamovernsip - computed: true, optional: true, required: false
  private _logstreamovernsip?: string; 
  public get logstreamovernsip() {
    return this.getStringAttribute('logstreamovernsip');
  }
  public set logstreamovernsip(value: string) {
    this._logstreamovernsip = value;
  }
  public resetLogstreamovernsip() {
    this._logstreamovernsip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstreamovernsipInput() {
    return this._logstreamovernsip;
  }

  // lsnlogging - computed: true, optional: true, required: false
  private _lsnlogging?: string; 
  public get lsnlogging() {
    return this.getStringAttribute('lsnlogging');
  }
  public set lsnlogging(value: string) {
    this._lsnlogging = value;
  }
  public resetLsnlogging() {
    this._lsnlogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnloggingInput() {
    return this._lsnlogging;
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

  // observationdomainid - computed: true, optional: true, required: false
  private _observationdomainid?: number; 
  public get observationdomainid() {
    return this.getNumberAttribute('observationdomainid');
  }
  public set observationdomainid(value: number) {
    this._observationdomainid = value;
  }
  public resetObservationdomainid() {
    this._observationdomainid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observationdomainidInput() {
    return this._observationdomainid;
  }

  // observationdomainname - computed: true, optional: true, required: false
  private _observationdomainname?: string; 
  public get observationdomainname() {
    return this.getStringAttribute('observationdomainname');
  }
  public set observationdomainname(value: string) {
    this._observationdomainname = value;
  }
  public resetObservationdomainname() {
    this._observationdomainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observationdomainnameInput() {
    return this._observationdomainname;
  }

  // observationpointid - computed: true, optional: true, required: false
  private _observationpointid?: number; 
  public get observationpointid() {
    return this.getNumberAttribute('observationpointid');
  }
  public set observationpointid(value: number) {
    this._observationpointid = value;
  }
  public resetObservationpointid() {
    this._observationpointid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observationpointidInput() {
    return this._observationpointid;
  }

  // securityinsightrecordinterval - computed: true, optional: true, required: false
  private _securityinsightrecordinterval?: number; 
  public get securityinsightrecordinterval() {
    return this.getNumberAttribute('securityinsightrecordinterval');
  }
  public set securityinsightrecordinterval(value: number) {
    this._securityinsightrecordinterval = value;
  }
  public resetSecurityinsightrecordinterval() {
    this._securityinsightrecordinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityinsightrecordintervalInput() {
    return this._securityinsightrecordinterval;
  }

  // securityinsighttraffic - computed: true, optional: true, required: false
  private _securityinsighttraffic?: string; 
  public get securityinsighttraffic() {
    return this.getStringAttribute('securityinsighttraffic');
  }
  public set securityinsighttraffic(value: string) {
    this._securityinsighttraffic = value;
  }
  public resetSecurityinsighttraffic() {
    this._securityinsighttraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityinsighttrafficInput() {
    return this._securityinsighttraffic;
  }

  // skipcacheredirectionhttptransaction - computed: true, optional: true, required: false
  private _skipcacheredirectionhttptransaction?: string; 
  public get skipcacheredirectionhttptransaction() {
    return this.getStringAttribute('skipcacheredirectionhttptransaction');
  }
  public set skipcacheredirectionhttptransaction(value: string) {
    this._skipcacheredirectionhttptransaction = value;
  }
  public resetSkipcacheredirectionhttptransaction() {
    this._skipcacheredirectionhttptransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipcacheredirectionhttptransactionInput() {
    return this._skipcacheredirectionhttptransaction;
  }

  // subscriberawareness - computed: true, optional: true, required: false
  private _subscriberawareness?: string; 
  public get subscriberawareness() {
    return this.getStringAttribute('subscriberawareness');
  }
  public set subscriberawareness(value: string) {
    this._subscriberawareness = value;
  }
  public resetSubscriberawareness() {
    this._subscriberawareness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberawarenessInput() {
    return this._subscriberawareness;
  }

  // subscriberidobfuscation - computed: true, optional: true, required: false
  private _subscriberidobfuscation?: string; 
  public get subscriberidobfuscation() {
    return this.getStringAttribute('subscriberidobfuscation');
  }
  public set subscriberidobfuscation(value: string) {
    this._subscriberidobfuscation = value;
  }
  public resetSubscriberidobfuscation() {
    this._subscriberidobfuscation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberidobfuscationInput() {
    return this._subscriberidobfuscation;
  }

  // subscriberidobfuscationalgo - computed: true, optional: true, required: false
  private _subscriberidobfuscationalgo?: string; 
  public get subscriberidobfuscationalgo() {
    return this.getStringAttribute('subscriberidobfuscationalgo');
  }
  public set subscriberidobfuscationalgo(value: string) {
    this._subscriberidobfuscationalgo = value;
  }
  public resetSubscriberidobfuscationalgo() {
    this._subscriberidobfuscationalgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberidobfuscationalgoInput() {
    return this._subscriberidobfuscationalgo;
  }

  // tcpattackcounterinterval - computed: true, optional: true, required: false
  private _tcpattackcounterinterval?: number; 
  public get tcpattackcounterinterval() {
    return this.getNumberAttribute('tcpattackcounterinterval');
  }
  public set tcpattackcounterinterval(value: number) {
    this._tcpattackcounterinterval = value;
  }
  public resetTcpattackcounterinterval() {
    this._tcpattackcounterinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpattackcounterintervalInput() {
    return this._tcpattackcounterinterval;
  }

  // templaterefresh - computed: true, optional: true, required: false
  private _templaterefresh?: number; 
  public get templaterefresh() {
    return this.getNumberAttribute('templaterefresh');
  }
  public set templaterefresh(value: number) {
    this._templaterefresh = value;
  }
  public resetTemplaterefresh() {
    this._templaterefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templaterefreshInput() {
    return this._templaterefresh;
  }

  // timeseriesovernsip - computed: true, optional: true, required: false
  private _timeseriesovernsip?: string; 
  public get timeseriesovernsip() {
    return this.getStringAttribute('timeseriesovernsip');
  }
  public set timeseriesovernsip(value: string) {
    this._timeseriesovernsip = value;
  }
  public resetTimeseriesovernsip() {
    this._timeseriesovernsip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesovernsipInput() {
    return this._timeseriesovernsip;
  }

  // udppmtu - computed: true, optional: true, required: false
  private _udppmtu?: number; 
  public get udppmtu() {
    return this.getNumberAttribute('udppmtu');
  }
  public set udppmtu(value: number) {
    this._udppmtu = value;
  }
  public resetUdppmtu() {
    this._udppmtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udppmtuInput() {
    return this._udppmtu;
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

  // usagerecordinterval - computed: true, optional: true, required: false
  private _usagerecordinterval?: number; 
  public get usagerecordinterval() {
    return this.getNumberAttribute('usagerecordinterval');
  }
  public set usagerecordinterval(value: number) {
    this._usagerecordinterval = value;
  }
  public resetUsagerecordinterval() {
    this._usagerecordinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagerecordintervalInput() {
    return this._usagerecordinterval;
  }

  // videoinsight - computed: true, optional: true, required: false
  private _videoinsight?: string; 
  public get videoinsight() {
    return this.getStringAttribute('videoinsight');
  }
  public set videoinsight(value: string) {
    this._videoinsight = value;
  }
  public resetVideoinsight() {
    this._videoinsight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoinsightInput() {
    return this._videoinsight;
  }

  // websaasappusagereporting - computed: true, optional: true, required: false
  private _websaasappusagereporting?: string; 
  public get websaasappusagereporting() {
    return this.getStringAttribute('websaasappusagereporting');
  }
  public set websaasappusagereporting(value: string) {
    this._websaasappusagereporting = value;
  }
  public resetWebsaasappusagereporting() {
    this._websaasappusagereporting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websaasappusagereportingInput() {
    return this._websaasappusagereporting;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aaausername: cdktf.stringToTerraform(this._aaausername),
      analyticsauthtoken: cdktf.stringToTerraform(this._analyticsauthtoken),
      appnamerefresh: cdktf.numberToTerraform(this._appnamerefresh),
      auditlogs: cdktf.stringToTerraform(this._auditlogs),
      cacheinsight: cdktf.stringToTerraform(this._cacheinsight),
      clienttrafficonly: cdktf.stringToTerraform(this._clienttrafficonly),
      connectionchaining: cdktf.stringToTerraform(this._connectionchaining),
      cqareporting: cdktf.stringToTerraform(this._cqareporting),
      distributedtracing: cdktf.stringToTerraform(this._distributedtracing),
      disttracingsamplingrate: cdktf.numberToTerraform(this._disttracingsamplingrate),
      emailaddress: cdktf.stringToTerraform(this._emailaddress),
      events: cdktf.stringToTerraform(this._events),
      flowrecordinterval: cdktf.numberToTerraform(this._flowrecordinterval),
      gxsessionreporting: cdktf.stringToTerraform(this._gxsessionreporting),
      httpauthorization: cdktf.stringToTerraform(this._httpauthorization),
      httpcontenttype: cdktf.stringToTerraform(this._httpcontenttype),
      httpcookie: cdktf.stringToTerraform(this._httpcookie),
      httpdomain: cdktf.stringToTerraform(this._httpdomain),
      httphost: cdktf.stringToTerraform(this._httphost),
      httplocation: cdktf.stringToTerraform(this._httplocation),
      httpmethod: cdktf.stringToTerraform(this._httpmethod),
      httpquerywithurl: cdktf.stringToTerraform(this._httpquerywithurl),
      httpreferer: cdktf.stringToTerraform(this._httpreferer),
      httpsetcookie: cdktf.stringToTerraform(this._httpsetcookie),
      httpsetcookie2: cdktf.stringToTerraform(this._httpsetcookie2),
      httpurl: cdktf.stringToTerraform(this._httpurl),
      httpuseragent: cdktf.stringToTerraform(this._httpuseragent),
      httpvia: cdktf.stringToTerraform(this._httpvia),
      httpxforwardedfor: cdktf.stringToTerraform(this._httpxforwardedfor),
      id: cdktf.stringToTerraform(this._id),
      identifiername: cdktf.stringToTerraform(this._identifiername),
      identifiersessionname: cdktf.stringToTerraform(this._identifiersessionname),
      logstreamovernsip: cdktf.stringToTerraform(this._logstreamovernsip),
      lsnlogging: cdktf.stringToTerraform(this._lsnlogging),
      metrics: cdktf.stringToTerraform(this._metrics),
      observationdomainid: cdktf.numberToTerraform(this._observationdomainid),
      observationdomainname: cdktf.stringToTerraform(this._observationdomainname),
      observationpointid: cdktf.numberToTerraform(this._observationpointid),
      securityinsightrecordinterval: cdktf.numberToTerraform(this._securityinsightrecordinterval),
      securityinsighttraffic: cdktf.stringToTerraform(this._securityinsighttraffic),
      skipcacheredirectionhttptransaction: cdktf.stringToTerraform(this._skipcacheredirectionhttptransaction),
      subscriberawareness: cdktf.stringToTerraform(this._subscriberawareness),
      subscriberidobfuscation: cdktf.stringToTerraform(this._subscriberidobfuscation),
      subscriberidobfuscationalgo: cdktf.stringToTerraform(this._subscriberidobfuscationalgo),
      tcpattackcounterinterval: cdktf.numberToTerraform(this._tcpattackcounterinterval),
      templaterefresh: cdktf.numberToTerraform(this._templaterefresh),
      timeseriesovernsip: cdktf.stringToTerraform(this._timeseriesovernsip),
      udppmtu: cdktf.numberToTerraform(this._udppmtu),
      urlcategory: cdktf.stringToTerraform(this._urlcategory),
      usagerecordinterval: cdktf.numberToTerraform(this._usagerecordinterval),
      videoinsight: cdktf.stringToTerraform(this._videoinsight),
      websaasappusagereporting: cdktf.stringToTerraform(this._websaasappusagereporting),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aaausername: {
        value: cdktf.stringToHclTerraform(this._aaausername),
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
      appnamerefresh: {
        value: cdktf.numberToHclTerraform(this._appnamerefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auditlogs: {
        value: cdktf.stringToHclTerraform(this._auditlogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacheinsight: {
        value: cdktf.stringToHclTerraform(this._cacheinsight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clienttrafficonly: {
        value: cdktf.stringToHclTerraform(this._clienttrafficonly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectionchaining: {
        value: cdktf.stringToHclTerraform(this._connectionchaining),
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
      distributedtracing: {
        value: cdktf.stringToHclTerraform(this._distributedtracing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disttracingsamplingrate: {
        value: cdktf.numberToHclTerraform(this._disttracingsamplingrate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      emailaddress: {
        value: cdktf.stringToHclTerraform(this._emailaddress),
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
      flowrecordinterval: {
        value: cdktf.numberToHclTerraform(this._flowrecordinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gxsessionreporting: {
        value: cdktf.stringToHclTerraform(this._gxsessionreporting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpauthorization: {
        value: cdktf.stringToHclTerraform(this._httpauthorization),
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
      httpdomain: {
        value: cdktf.stringToHclTerraform(this._httpdomain),
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
      httpquerywithurl: {
        value: cdktf.stringToHclTerraform(this._httpquerywithurl),
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
      httpxforwardedfor: {
        value: cdktf.stringToHclTerraform(this._httpxforwardedfor),
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
      identifiername: {
        value: cdktf.stringToHclTerraform(this._identifiername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifiersessionname: {
        value: cdktf.stringToHclTerraform(this._identifiersessionname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logstreamovernsip: {
        value: cdktf.stringToHclTerraform(this._logstreamovernsip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsnlogging: {
        value: cdktf.stringToHclTerraform(this._lsnlogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics: {
        value: cdktf.stringToHclTerraform(this._metrics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      observationdomainid: {
        value: cdktf.numberToHclTerraform(this._observationdomainid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      observationdomainname: {
        value: cdktf.stringToHclTerraform(this._observationdomainname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      observationpointid: {
        value: cdktf.numberToHclTerraform(this._observationpointid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      securityinsightrecordinterval: {
        value: cdktf.numberToHclTerraform(this._securityinsightrecordinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      securityinsighttraffic: {
        value: cdktf.stringToHclTerraform(this._securityinsighttraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skipcacheredirectionhttptransaction: {
        value: cdktf.stringToHclTerraform(this._skipcacheredirectionhttptransaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriberawareness: {
        value: cdktf.stringToHclTerraform(this._subscriberawareness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriberidobfuscation: {
        value: cdktf.stringToHclTerraform(this._subscriberidobfuscation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriberidobfuscationalgo: {
        value: cdktf.stringToHclTerraform(this._subscriberidobfuscationalgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcpattackcounterinterval: {
        value: cdktf.numberToHclTerraform(this._tcpattackcounterinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      templaterefresh: {
        value: cdktf.numberToHclTerraform(this._templaterefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeseriesovernsip: {
        value: cdktf.stringToHclTerraform(this._timeseriesovernsip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udppmtu: {
        value: cdktf.numberToHclTerraform(this._udppmtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      urlcategory: {
        value: cdktf.stringToHclTerraform(this._urlcategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usagerecordinterval: {
        value: cdktf.numberToHclTerraform(this._usagerecordinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      videoinsight: {
        value: cdktf.stringToHclTerraform(this._videoinsight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      websaasappusagereporting: {
        value: cdktf.stringToHclTerraform(this._websaasappusagereporting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
