// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsfeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#aaa Nsfeature#aaa}
  */
  readonly aaa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#adaptivetcp Nsfeature#adaptivetcp}
  */
  readonly adaptivetcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#apigateway Nsfeature#apigateway}
  */
  readonly apigateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#appflow Nsfeature#appflow}
  */
  readonly appflow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#appfw Nsfeature#appfw}
  */
  readonly appfw?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#appqoe Nsfeature#appqoe}
  */
  readonly appqoe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#bgp Nsfeature#bgp}
  */
  readonly bgp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#bot Nsfeature#bot}
  */
  readonly bot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#cf Nsfeature#cf}
  */
  readonly cf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#ch Nsfeature#ch}
  */
  readonly ch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#ci Nsfeature#ci}
  */
  readonly ci?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#cloudbridge Nsfeature#cloudbridge}
  */
  readonly cloudbridge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#cmp Nsfeature#cmp}
  */
  readonly cmp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#contentaccelerator Nsfeature#contentaccelerator}
  */
  readonly contentaccelerator?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#cqa Nsfeature#cqa}
  */
  readonly cqa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#cr Nsfeature#cr}
  */
  readonly cr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#cs Nsfeature#cs}
  */
  readonly cs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#feo Nsfeature#feo}
  */
  readonly feo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#forwardproxy Nsfeature#forwardproxy}
  */
  readonly forwardproxy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#gslb Nsfeature#gslb}
  */
  readonly gslb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#hdosp Nsfeature#hdosp}
  */
  readonly hdosp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#htmlinjection Nsfeature#htmlinjection}
  */
  readonly htmlinjection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#ic Nsfeature#ic}
  */
  readonly ic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#id Nsfeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#ipv6pt Nsfeature#ipv6pt}
  */
  readonly ipv6Pt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#isis Nsfeature#isis}
  */
  readonly isis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#lb Nsfeature#lb}
  */
  readonly lb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#lsn Nsfeature#lsn}
  */
  readonly lsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#ospf Nsfeature#ospf}
  */
  readonly ospf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#pq Nsfeature#pq}
  */
  readonly pq?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#push Nsfeature#push}
  */
  readonly push?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#rdpproxy Nsfeature#rdpproxy}
  */
  readonly rdpproxy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#rep Nsfeature#rep}
  */
  readonly rep?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#responder Nsfeature#responder}
  */
  readonly responder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#rewrite Nsfeature#rewrite}
  */
  readonly rewrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#rip Nsfeature#rip}
  */
  readonly rip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#rise Nsfeature#rise}
  */
  readonly rise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#sp Nsfeature#sp}
  */
  readonly sp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#ssl Nsfeature#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#sslinterception Nsfeature#sslinterception}
  */
  readonly sslinterception?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#sslvpn Nsfeature#sslvpn}
  */
  readonly sslvpn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#urlfiltering Nsfeature#urlfiltering}
  */
  readonly urlfiltering?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#videooptimization Nsfeature#videooptimization}
  */
  readonly videooptimization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#wl Nsfeature#wl}
  */
  readonly wl?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature citrixadc_nsfeature}
*/
export class Nsfeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsfeature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsfeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsfeature to import
  * @param importFromId The id of the existing Nsfeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsfeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsfeature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsfeature citrixadc_nsfeature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsfeatureConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsfeatureConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsfeature',
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
    this._aaa = config.aaa;
    this._adaptivetcp = config.adaptivetcp;
    this._apigateway = config.apigateway;
    this._appflow = config.appflow;
    this._appfw = config.appfw;
    this._appqoe = config.appqoe;
    this._bgp = config.bgp;
    this._bot = config.bot;
    this._cf = config.cf;
    this._ch = config.ch;
    this._ci = config.ci;
    this._cloudbridge = config.cloudbridge;
    this._cmp = config.cmp;
    this._contentaccelerator = config.contentaccelerator;
    this._cqa = config.cqa;
    this._cr = config.cr;
    this._cs = config.cs;
    this._feo = config.feo;
    this._forwardproxy = config.forwardproxy;
    this._gslb = config.gslb;
    this._hdosp = config.hdosp;
    this._htmlinjection = config.htmlinjection;
    this._ic = config.ic;
    this._id = config.id;
    this._ipv6Pt = config.ipv6Pt;
    this._isis = config.isis;
    this._lb = config.lb;
    this._lsn = config.lsn;
    this._ospf = config.ospf;
    this._pq = config.pq;
    this._push = config.push;
    this._rdpproxy = config.rdpproxy;
    this._rep = config.rep;
    this._responder = config.responder;
    this._rewrite = config.rewrite;
    this._rip = config.rip;
    this._rise = config.rise;
    this._sp = config.sp;
    this._ssl = config.ssl;
    this._sslinterception = config.sslinterception;
    this._sslvpn = config.sslvpn;
    this._urlfiltering = config.urlfiltering;
    this._videooptimization = config.videooptimization;
    this._wl = config.wl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaa - computed: true, optional: true, required: false
  private _aaa?: boolean | cdktf.IResolvable; 
  public get aaa() {
    return this.getBooleanAttribute('aaa');
  }
  public set aaa(value: boolean | cdktf.IResolvable) {
    this._aaa = value;
  }
  public resetAaa() {
    this._aaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaInput() {
    return this._aaa;
  }

  // adaptivetcp - computed: true, optional: true, required: false
  private _adaptivetcp?: boolean | cdktf.IResolvable; 
  public get adaptivetcp() {
    return this.getBooleanAttribute('adaptivetcp');
  }
  public set adaptivetcp(value: boolean | cdktf.IResolvable) {
    this._adaptivetcp = value;
  }
  public resetAdaptivetcp() {
    this._adaptivetcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptivetcpInput() {
    return this._adaptivetcp;
  }

  // apigateway - computed: true, optional: true, required: false
  private _apigateway?: boolean | cdktf.IResolvable; 
  public get apigateway() {
    return this.getBooleanAttribute('apigateway');
  }
  public set apigateway(value: boolean | cdktf.IResolvable) {
    this._apigateway = value;
  }
  public resetApigateway() {
    this._apigateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apigatewayInput() {
    return this._apigateway;
  }

  // appflow - computed: true, optional: true, required: false
  private _appflow?: boolean | cdktf.IResolvable; 
  public get appflow() {
    return this.getBooleanAttribute('appflow');
  }
  public set appflow(value: boolean | cdktf.IResolvable) {
    this._appflow = value;
  }
  public resetAppflow() {
    this._appflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appflowInput() {
    return this._appflow;
  }

  // appfw - computed: true, optional: true, required: false
  private _appfw?: boolean | cdktf.IResolvable; 
  public get appfw() {
    return this.getBooleanAttribute('appfw');
  }
  public set appfw(value: boolean | cdktf.IResolvable) {
    this._appfw = value;
  }
  public resetAppfw() {
    this._appfw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appfwInput() {
    return this._appfw;
  }

  // appqoe - computed: true, optional: true, required: false
  private _appqoe?: boolean | cdktf.IResolvable; 
  public get appqoe() {
    return this.getBooleanAttribute('appqoe');
  }
  public set appqoe(value: boolean | cdktf.IResolvable) {
    this._appqoe = value;
  }
  public resetAppqoe() {
    this._appqoe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appqoeInput() {
    return this._appqoe;
  }

  // bgp - computed: true, optional: true, required: false
  private _bgp?: boolean | cdktf.IResolvable; 
  public get bgp() {
    return this.getBooleanAttribute('bgp');
  }
  public set bgp(value: boolean | cdktf.IResolvable) {
    this._bgp = value;
  }
  public resetBgp() {
    this._bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp;
  }

  // bot - computed: true, optional: true, required: false
  private _bot?: boolean | cdktf.IResolvable; 
  public get bot() {
    return this.getBooleanAttribute('bot');
  }
  public set bot(value: boolean | cdktf.IResolvable) {
    this._bot = value;
  }
  public resetBot() {
    this._bot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botInput() {
    return this._bot;
  }

  // cf - computed: true, optional: true, required: false
  private _cf?: boolean | cdktf.IResolvable; 
  public get cf() {
    return this.getBooleanAttribute('cf');
  }
  public set cf(value: boolean | cdktf.IResolvable) {
    this._cf = value;
  }
  public resetCf() {
    this._cf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfInput() {
    return this._cf;
  }

  // ch - computed: true, optional: true, required: false
  private _ch?: boolean | cdktf.IResolvable; 
  public get ch() {
    return this.getBooleanAttribute('ch');
  }
  public set ch(value: boolean | cdktf.IResolvable) {
    this._ch = value;
  }
  public resetCh() {
    this._ch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chInput() {
    return this._ch;
  }

  // ci - computed: true, optional: true, required: false
  private _ci?: boolean | cdktf.IResolvable; 
  public get ci() {
    return this.getBooleanAttribute('ci');
  }
  public set ci(value: boolean | cdktf.IResolvable) {
    this._ci = value;
  }
  public resetCi() {
    this._ci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciInput() {
    return this._ci;
  }

  // cloudbridge - computed: true, optional: true, required: false
  private _cloudbridge?: boolean | cdktf.IResolvable; 
  public get cloudbridge() {
    return this.getBooleanAttribute('cloudbridge');
  }
  public set cloudbridge(value: boolean | cdktf.IResolvable) {
    this._cloudbridge = value;
  }
  public resetCloudbridge() {
    this._cloudbridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudbridgeInput() {
    return this._cloudbridge;
  }

  // cmp - computed: true, optional: true, required: false
  private _cmp?: boolean | cdktf.IResolvable; 
  public get cmp() {
    return this.getBooleanAttribute('cmp');
  }
  public set cmp(value: boolean | cdktf.IResolvable) {
    this._cmp = value;
  }
  public resetCmp() {
    this._cmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpInput() {
    return this._cmp;
  }

  // contentaccelerator - computed: true, optional: true, required: false
  private _contentaccelerator?: boolean | cdktf.IResolvable; 
  public get contentaccelerator() {
    return this.getBooleanAttribute('contentaccelerator');
  }
  public set contentaccelerator(value: boolean | cdktf.IResolvable) {
    this._contentaccelerator = value;
  }
  public resetContentaccelerator() {
    this._contentaccelerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentacceleratorInput() {
    return this._contentaccelerator;
  }

  // cqa - computed: true, optional: true, required: false
  private _cqa?: boolean | cdktf.IResolvable; 
  public get cqa() {
    return this.getBooleanAttribute('cqa');
  }
  public set cqa(value: boolean | cdktf.IResolvable) {
    this._cqa = value;
  }
  public resetCqa() {
    this._cqa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cqaInput() {
    return this._cqa;
  }

  // cr - computed: true, optional: true, required: false
  private _cr?: boolean | cdktf.IResolvable; 
  public get cr() {
    return this.getBooleanAttribute('cr');
  }
  public set cr(value: boolean | cdktf.IResolvable) {
    this._cr = value;
  }
  public resetCr() {
    this._cr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crInput() {
    return this._cr;
  }

  // cs - computed: true, optional: true, required: false
  private _cs?: boolean | cdktf.IResolvable; 
  public get cs() {
    return this.getBooleanAttribute('cs');
  }
  public set cs(value: boolean | cdktf.IResolvable) {
    this._cs = value;
  }
  public resetCs() {
    this._cs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csInput() {
    return this._cs;
  }

  // feo - computed: true, optional: true, required: false
  private _feo?: boolean | cdktf.IResolvable; 
  public get feo() {
    return this.getBooleanAttribute('feo');
  }
  public set feo(value: boolean | cdktf.IResolvable) {
    this._feo = value;
  }
  public resetFeo() {
    this._feo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feoInput() {
    return this._feo;
  }

  // forwardproxy - computed: true, optional: true, required: false
  private _forwardproxy?: boolean | cdktf.IResolvable; 
  public get forwardproxy() {
    return this.getBooleanAttribute('forwardproxy');
  }
  public set forwardproxy(value: boolean | cdktf.IResolvable) {
    this._forwardproxy = value;
  }
  public resetForwardproxy() {
    this._forwardproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardproxyInput() {
    return this._forwardproxy;
  }

  // gslb - computed: true, optional: true, required: false
  private _gslb?: boolean | cdktf.IResolvable; 
  public get gslb() {
    return this.getBooleanAttribute('gslb');
  }
  public set gslb(value: boolean | cdktf.IResolvable) {
    this._gslb = value;
  }
  public resetGslb() {
    this._gslb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbInput() {
    return this._gslb;
  }

  // hdosp - computed: true, optional: true, required: false
  private _hdosp?: boolean | cdktf.IResolvable; 
  public get hdosp() {
    return this.getBooleanAttribute('hdosp');
  }
  public set hdosp(value: boolean | cdktf.IResolvable) {
    this._hdosp = value;
  }
  public resetHdosp() {
    this._hdosp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdospInput() {
    return this._hdosp;
  }

  // htmlinjection - computed: true, optional: true, required: false
  private _htmlinjection?: boolean | cdktf.IResolvable; 
  public get htmlinjection() {
    return this.getBooleanAttribute('htmlinjection');
  }
  public set htmlinjection(value: boolean | cdktf.IResolvable) {
    this._htmlinjection = value;
  }
  public resetHtmlinjection() {
    this._htmlinjection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlinjectionInput() {
    return this._htmlinjection;
  }

  // ic - computed: true, optional: true, required: false
  private _ic?: boolean | cdktf.IResolvable; 
  public get ic() {
    return this.getBooleanAttribute('ic');
  }
  public set ic(value: boolean | cdktf.IResolvable) {
    this._ic = value;
  }
  public resetIc() {
    this._ic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icInput() {
    return this._ic;
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

  // ipv6pt - computed: true, optional: true, required: false
  private _ipv6Pt?: boolean | cdktf.IResolvable; 
  public get ipv6Pt() {
    return this.getBooleanAttribute('ipv6pt');
  }
  public set ipv6Pt(value: boolean | cdktf.IResolvable) {
    this._ipv6Pt = value;
  }
  public resetIpv6Pt() {
    this._ipv6Pt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PtInput() {
    return this._ipv6Pt;
  }

  // isis - computed: true, optional: true, required: false
  private _isis?: boolean | cdktf.IResolvable; 
  public get isis() {
    return this.getBooleanAttribute('isis');
  }
  public set isis(value: boolean | cdktf.IResolvable) {
    this._isis = value;
  }
  public resetIsis() {
    this._isis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis;
  }

  // lb - computed: true, optional: true, required: false
  private _lb?: boolean | cdktf.IResolvable; 
  public get lb() {
    return this.getBooleanAttribute('lb');
  }
  public set lb(value: boolean | cdktf.IResolvable) {
    this._lb = value;
  }
  public resetLb() {
    this._lb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbInput() {
    return this._lb;
  }

  // lsn - computed: true, optional: true, required: false
  private _lsn?: boolean | cdktf.IResolvable; 
  public get lsn() {
    return this.getBooleanAttribute('lsn');
  }
  public set lsn(value: boolean | cdktf.IResolvable) {
    this._lsn = value;
  }
  public resetLsn() {
    this._lsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnInput() {
    return this._lsn;
  }

  // ospf - computed: true, optional: true, required: false
  private _ospf?: boolean | cdktf.IResolvable; 
  public get ospf() {
    return this.getBooleanAttribute('ospf');
  }
  public set ospf(value: boolean | cdktf.IResolvable) {
    this._ospf = value;
  }
  public resetOspf() {
    this._ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf;
  }

  // pq - computed: true, optional: true, required: false
  private _pq?: boolean | cdktf.IResolvable; 
  public get pq() {
    return this.getBooleanAttribute('pq');
  }
  public set pq(value: boolean | cdktf.IResolvable) {
    this._pq = value;
  }
  public resetPq() {
    this._pq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pqInput() {
    return this._pq;
  }

  // push - computed: true, optional: true, required: false
  private _push?: boolean | cdktf.IResolvable; 
  public get push() {
    return this.getBooleanAttribute('push');
  }
  public set push(value: boolean | cdktf.IResolvable) {
    this._push = value;
  }
  public resetPush() {
    this._push = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push;
  }

  // rdpproxy - computed: true, optional: true, required: false
  private _rdpproxy?: boolean | cdktf.IResolvable; 
  public get rdpproxy() {
    return this.getBooleanAttribute('rdpproxy');
  }
  public set rdpproxy(value: boolean | cdktf.IResolvable) {
    this._rdpproxy = value;
  }
  public resetRdpproxy() {
    this._rdpproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpproxyInput() {
    return this._rdpproxy;
  }

  // rep - computed: true, optional: true, required: false
  private _rep?: boolean | cdktf.IResolvable; 
  public get rep() {
    return this.getBooleanAttribute('rep');
  }
  public set rep(value: boolean | cdktf.IResolvable) {
    this._rep = value;
  }
  public resetRep() {
    this._rep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repInput() {
    return this._rep;
  }

  // responder - computed: true, optional: true, required: false
  private _responder?: boolean | cdktf.IResolvable; 
  public get responder() {
    return this.getBooleanAttribute('responder');
  }
  public set responder(value: boolean | cdktf.IResolvable) {
    this._responder = value;
  }
  public resetResponder() {
    this._responder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderInput() {
    return this._responder;
  }

  // rewrite - computed: true, optional: true, required: false
  private _rewrite?: boolean | cdktf.IResolvable; 
  public get rewrite() {
    return this.getBooleanAttribute('rewrite');
  }
  public set rewrite(value: boolean | cdktf.IResolvable) {
    this._rewrite = value;
  }
  public resetRewrite() {
    this._rewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite;
  }

  // rip - computed: true, optional: true, required: false
  private _rip?: boolean | cdktf.IResolvable; 
  public get rip() {
    return this.getBooleanAttribute('rip');
  }
  public set rip(value: boolean | cdktf.IResolvable) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
  }

  // rise - computed: true, optional: true, required: false
  private _rise?: boolean | cdktf.IResolvable; 
  public get rise() {
    return this.getBooleanAttribute('rise');
  }
  public set rise(value: boolean | cdktf.IResolvable) {
    this._rise = value;
  }
  public resetRise() {
    this._rise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riseInput() {
    return this._rise;
  }

  // sp - computed: true, optional: true, required: false
  private _sp?: boolean | cdktf.IResolvable; 
  public get sp() {
    return this.getBooleanAttribute('sp');
  }
  public set sp(value: boolean | cdktf.IResolvable) {
    this._sp = value;
  }
  public resetSp() {
    this._sp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // sslinterception - computed: true, optional: true, required: false
  private _sslinterception?: boolean | cdktf.IResolvable; 
  public get sslinterception() {
    return this.getBooleanAttribute('sslinterception');
  }
  public set sslinterception(value: boolean | cdktf.IResolvable) {
    this._sslinterception = value;
  }
  public resetSslinterception() {
    this._sslinterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslinterceptionInput() {
    return this._sslinterception;
  }

  // sslvpn - computed: true, optional: true, required: false
  private _sslvpn?: boolean | cdktf.IResolvable; 
  public get sslvpn() {
    return this.getBooleanAttribute('sslvpn');
  }
  public set sslvpn(value: boolean | cdktf.IResolvable) {
    this._sslvpn = value;
  }
  public resetSslvpn() {
    this._sslvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnInput() {
    return this._sslvpn;
  }

  // urlfiltering - computed: true, optional: true, required: false
  private _urlfiltering?: boolean | cdktf.IResolvable; 
  public get urlfiltering() {
    return this.getBooleanAttribute('urlfiltering');
  }
  public set urlfiltering(value: boolean | cdktf.IResolvable) {
    this._urlfiltering = value;
  }
  public resetUrlfiltering() {
    this._urlfiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlfilteringInput() {
    return this._urlfiltering;
  }

  // videooptimization - computed: true, optional: true, required: false
  private _videooptimization?: boolean | cdktf.IResolvable; 
  public get videooptimization() {
    return this.getBooleanAttribute('videooptimization');
  }
  public set videooptimization(value: boolean | cdktf.IResolvable) {
    this._videooptimization = value;
  }
  public resetVideooptimization() {
    this._videooptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videooptimizationInput() {
    return this._videooptimization;
  }

  // wl - computed: true, optional: true, required: false
  private _wl?: boolean | cdktf.IResolvable; 
  public get wl() {
    return this.getBooleanAttribute('wl');
  }
  public set wl(value: boolean | cdktf.IResolvable) {
    this._wl = value;
  }
  public resetWl() {
    this._wl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wlInput() {
    return this._wl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aaa: cdktf.booleanToTerraform(this._aaa),
      adaptivetcp: cdktf.booleanToTerraform(this._adaptivetcp),
      apigateway: cdktf.booleanToTerraform(this._apigateway),
      appflow: cdktf.booleanToTerraform(this._appflow),
      appfw: cdktf.booleanToTerraform(this._appfw),
      appqoe: cdktf.booleanToTerraform(this._appqoe),
      bgp: cdktf.booleanToTerraform(this._bgp),
      bot: cdktf.booleanToTerraform(this._bot),
      cf: cdktf.booleanToTerraform(this._cf),
      ch: cdktf.booleanToTerraform(this._ch),
      ci: cdktf.booleanToTerraform(this._ci),
      cloudbridge: cdktf.booleanToTerraform(this._cloudbridge),
      cmp: cdktf.booleanToTerraform(this._cmp),
      contentaccelerator: cdktf.booleanToTerraform(this._contentaccelerator),
      cqa: cdktf.booleanToTerraform(this._cqa),
      cr: cdktf.booleanToTerraform(this._cr),
      cs: cdktf.booleanToTerraform(this._cs),
      feo: cdktf.booleanToTerraform(this._feo),
      forwardproxy: cdktf.booleanToTerraform(this._forwardproxy),
      gslb: cdktf.booleanToTerraform(this._gslb),
      hdosp: cdktf.booleanToTerraform(this._hdosp),
      htmlinjection: cdktf.booleanToTerraform(this._htmlinjection),
      ic: cdktf.booleanToTerraform(this._ic),
      id: cdktf.stringToTerraform(this._id),
      ipv6pt: cdktf.booleanToTerraform(this._ipv6Pt),
      isis: cdktf.booleanToTerraform(this._isis),
      lb: cdktf.booleanToTerraform(this._lb),
      lsn: cdktf.booleanToTerraform(this._lsn),
      ospf: cdktf.booleanToTerraform(this._ospf),
      pq: cdktf.booleanToTerraform(this._pq),
      push: cdktf.booleanToTerraform(this._push),
      rdpproxy: cdktf.booleanToTerraform(this._rdpproxy),
      rep: cdktf.booleanToTerraform(this._rep),
      responder: cdktf.booleanToTerraform(this._responder),
      rewrite: cdktf.booleanToTerraform(this._rewrite),
      rip: cdktf.booleanToTerraform(this._rip),
      rise: cdktf.booleanToTerraform(this._rise),
      sp: cdktf.booleanToTerraform(this._sp),
      ssl: cdktf.booleanToTerraform(this._ssl),
      sslinterception: cdktf.booleanToTerraform(this._sslinterception),
      sslvpn: cdktf.booleanToTerraform(this._sslvpn),
      urlfiltering: cdktf.booleanToTerraform(this._urlfiltering),
      videooptimization: cdktf.booleanToTerraform(this._videooptimization),
      wl: cdktf.booleanToTerraform(this._wl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aaa: {
        value: cdktf.booleanToHclTerraform(this._aaa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      adaptivetcp: {
        value: cdktf.booleanToHclTerraform(this._adaptivetcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      apigateway: {
        value: cdktf.booleanToHclTerraform(this._apigateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      appflow: {
        value: cdktf.booleanToHclTerraform(this._appflow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      appfw: {
        value: cdktf.booleanToHclTerraform(this._appfw),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      appqoe: {
        value: cdktf.booleanToHclTerraform(this._appqoe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp: {
        value: cdktf.booleanToHclTerraform(this._bgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bot: {
        value: cdktf.booleanToHclTerraform(this._bot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cf: {
        value: cdktf.booleanToHclTerraform(this._cf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ch: {
        value: cdktf.booleanToHclTerraform(this._ch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ci: {
        value: cdktf.booleanToHclTerraform(this._ci),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloudbridge: {
        value: cdktf.booleanToHclTerraform(this._cloudbridge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cmp: {
        value: cdktf.booleanToHclTerraform(this._cmp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contentaccelerator: {
        value: cdktf.booleanToHclTerraform(this._contentaccelerator),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cqa: {
        value: cdktf.booleanToHclTerraform(this._cqa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cr: {
        value: cdktf.booleanToHclTerraform(this._cr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cs: {
        value: cdktf.booleanToHclTerraform(this._cs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feo: {
        value: cdktf.booleanToHclTerraform(this._feo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forwardproxy: {
        value: cdktf.booleanToHclTerraform(this._forwardproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gslb: {
        value: cdktf.booleanToHclTerraform(this._gslb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hdosp: {
        value: cdktf.booleanToHclTerraform(this._hdosp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      htmlinjection: {
        value: cdktf.booleanToHclTerraform(this._htmlinjection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ic: {
        value: cdktf.booleanToHclTerraform(this._ic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6pt: {
        value: cdktf.booleanToHclTerraform(this._ipv6Pt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      isis: {
        value: cdktf.booleanToHclTerraform(this._isis),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lb: {
        value: cdktf.booleanToHclTerraform(this._lb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lsn: {
        value: cdktf.booleanToHclTerraform(this._lsn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ospf: {
        value: cdktf.booleanToHclTerraform(this._ospf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pq: {
        value: cdktf.booleanToHclTerraform(this._pq),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      push: {
        value: cdktf.booleanToHclTerraform(this._push),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rdpproxy: {
        value: cdktf.booleanToHclTerraform(this._rdpproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rep: {
        value: cdktf.booleanToHclTerraform(this._rep),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      responder: {
        value: cdktf.booleanToHclTerraform(this._responder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rewrite: {
        value: cdktf.booleanToHclTerraform(this._rewrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rip: {
        value: cdktf.booleanToHclTerraform(this._rip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rise: {
        value: cdktf.booleanToHclTerraform(this._rise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sp: {
        value: cdktf.booleanToHclTerraform(this._sp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl: {
        value: cdktf.booleanToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sslinterception: {
        value: cdktf.booleanToHclTerraform(this._sslinterception),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sslvpn: {
        value: cdktf.booleanToHclTerraform(this._sslvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      urlfiltering: {
        value: cdktf.booleanToHclTerraform(this._urlfiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      videooptimization: {
        value: cdktf.booleanToHclTerraform(this._videooptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wl: {
        value: cdktf.booleanToHclTerraform(this._wl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
