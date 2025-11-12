// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FeoactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#cachemaxage Feoaction#cachemaxage}
  */
  readonly cachemaxage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#clientsidemeasurements Feoaction#clientsidemeasurements}
  */
  readonly clientsidemeasurements?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#convertimporttolink Feoaction#convertimporttolink}
  */
  readonly convertimporttolink?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#csscombine Feoaction#csscombine}
  */
  readonly csscombine?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#cssimginline Feoaction#cssimginline}
  */
  readonly cssimginline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#cssinline Feoaction#cssinline}
  */
  readonly cssinline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#cssminify Feoaction#cssminify}
  */
  readonly cssminify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#cssmovetohead Feoaction#cssmovetohead}
  */
  readonly cssmovetohead?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#dnsshards Feoaction#dnsshards}
  */
  readonly dnsshards?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#domainsharding Feoaction#domainsharding}
  */
  readonly domainsharding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#htmlminify Feoaction#htmlminify}
  */
  readonly htmlminify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#id Feoaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#imggiftopng Feoaction#imggiftopng}
  */
  readonly imggiftopng?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#imginline Feoaction#imginline}
  */
  readonly imginline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#imglazyload Feoaction#imglazyload}
  */
  readonly imglazyload?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#imgshrinktoattrib Feoaction#imgshrinktoattrib}
  */
  readonly imgshrinktoattrib?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#imgtojpegxr Feoaction#imgtojpegxr}
  */
  readonly imgtojpegxr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#imgtowebp Feoaction#imgtowebp}
  */
  readonly imgtowebp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#jpgoptimize Feoaction#jpgoptimize}
  */
  readonly jpgoptimize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#jsinline Feoaction#jsinline}
  */
  readonly jsinline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#jsminify Feoaction#jsminify}
  */
  readonly jsminify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#jsmovetoend Feoaction#jsmovetoend}
  */
  readonly jsmovetoend?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#name Feoaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#pageextendcache Feoaction#pageextendcache}
  */
  readonly pageextendcache?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction citrixadc_feoaction}
*/
export class Feoaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_feoaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Feoaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Feoaction to import
  * @param importFromId The id of the existing Feoaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Feoaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_feoaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/feoaction citrixadc_feoaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeoactionConfig
  */
  public constructor(scope: Construct, id: string, config: FeoactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_feoaction',
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
    this._cachemaxage = config.cachemaxage;
    this._clientsidemeasurements = config.clientsidemeasurements;
    this._convertimporttolink = config.convertimporttolink;
    this._csscombine = config.csscombine;
    this._cssimginline = config.cssimginline;
    this._cssinline = config.cssinline;
    this._cssminify = config.cssminify;
    this._cssmovetohead = config.cssmovetohead;
    this._dnsshards = config.dnsshards;
    this._domainsharding = config.domainsharding;
    this._htmlminify = config.htmlminify;
    this._id = config.id;
    this._imggiftopng = config.imggiftopng;
    this._imginline = config.imginline;
    this._imglazyload = config.imglazyload;
    this._imgshrinktoattrib = config.imgshrinktoattrib;
    this._imgtojpegxr = config.imgtojpegxr;
    this._imgtowebp = config.imgtowebp;
    this._jpgoptimize = config.jpgoptimize;
    this._jsinline = config.jsinline;
    this._jsminify = config.jsminify;
    this._jsmovetoend = config.jsmovetoend;
    this._name = config.name;
    this._pageextendcache = config.pageextendcache;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cachemaxage - computed: true, optional: true, required: false
  private _cachemaxage?: string; 
  public get cachemaxage() {
    return this.getStringAttribute('cachemaxage');
  }
  public set cachemaxage(value: string) {
    this._cachemaxage = value;
  }
  public resetCachemaxage() {
    this._cachemaxage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachemaxageInput() {
    return this._cachemaxage;
  }

  // clientsidemeasurements - computed: true, optional: true, required: false
  private _clientsidemeasurements?: boolean | cdktf.IResolvable; 
  public get clientsidemeasurements() {
    return this.getBooleanAttribute('clientsidemeasurements');
  }
  public set clientsidemeasurements(value: boolean | cdktf.IResolvable) {
    this._clientsidemeasurements = value;
  }
  public resetClientsidemeasurements() {
    this._clientsidemeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsidemeasurementsInput() {
    return this._clientsidemeasurements;
  }

  // convertimporttolink - computed: true, optional: true, required: false
  private _convertimporttolink?: boolean | cdktf.IResolvable; 
  public get convertimporttolink() {
    return this.getBooleanAttribute('convertimporttolink');
  }
  public set convertimporttolink(value: boolean | cdktf.IResolvable) {
    this._convertimporttolink = value;
  }
  public resetConvertimporttolink() {
    this._convertimporttolink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertimporttolinkInput() {
    return this._convertimporttolink;
  }

  // csscombine - computed: true, optional: true, required: false
  private _csscombine?: boolean | cdktf.IResolvable; 
  public get csscombine() {
    return this.getBooleanAttribute('csscombine');
  }
  public set csscombine(value: boolean | cdktf.IResolvable) {
    this._csscombine = value;
  }
  public resetCsscombine() {
    this._csscombine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csscombineInput() {
    return this._csscombine;
  }

  // cssimginline - computed: true, optional: true, required: false
  private _cssimginline?: boolean | cdktf.IResolvable; 
  public get cssimginline() {
    return this.getBooleanAttribute('cssimginline');
  }
  public set cssimginline(value: boolean | cdktf.IResolvable) {
    this._cssimginline = value;
  }
  public resetCssimginline() {
    this._cssimginline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssimginlineInput() {
    return this._cssimginline;
  }

  // cssinline - computed: true, optional: true, required: false
  private _cssinline?: boolean | cdktf.IResolvable; 
  public get cssinline() {
    return this.getBooleanAttribute('cssinline');
  }
  public set cssinline(value: boolean | cdktf.IResolvable) {
    this._cssinline = value;
  }
  public resetCssinline() {
    this._cssinline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssinlineInput() {
    return this._cssinline;
  }

  // cssminify - computed: true, optional: true, required: false
  private _cssminify?: boolean | cdktf.IResolvable; 
  public get cssminify() {
    return this.getBooleanAttribute('cssminify');
  }
  public set cssminify(value: boolean | cdktf.IResolvable) {
    this._cssminify = value;
  }
  public resetCssminify() {
    this._cssminify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssminifyInput() {
    return this._cssminify;
  }

  // cssmovetohead - computed: true, optional: true, required: false
  private _cssmovetohead?: boolean | cdktf.IResolvable; 
  public get cssmovetohead() {
    return this.getBooleanAttribute('cssmovetohead');
  }
  public set cssmovetohead(value: boolean | cdktf.IResolvable) {
    this._cssmovetohead = value;
  }
  public resetCssmovetohead() {
    this._cssmovetohead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssmovetoheadInput() {
    return this._cssmovetohead;
  }

  // dnsshards - computed: true, optional: true, required: false
  private _dnsshards?: string[]; 
  public get dnsshards() {
    return this.getListAttribute('dnsshards');
  }
  public set dnsshards(value: string[]) {
    this._dnsshards = value;
  }
  public resetDnsshards() {
    this._dnsshards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsshardsInput() {
    return this._dnsshards;
  }

  // domainsharding - computed: true, optional: true, required: false
  private _domainsharding?: string; 
  public get domainsharding() {
    return this.getStringAttribute('domainsharding');
  }
  public set domainsharding(value: string) {
    this._domainsharding = value;
  }
  public resetDomainsharding() {
    this._domainsharding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainshardingInput() {
    return this._domainsharding;
  }

  // htmlminify - computed: true, optional: true, required: false
  private _htmlminify?: boolean | cdktf.IResolvable; 
  public get htmlminify() {
    return this.getBooleanAttribute('htmlminify');
  }
  public set htmlminify(value: boolean | cdktf.IResolvable) {
    this._htmlminify = value;
  }
  public resetHtmlminify() {
    this._htmlminify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlminifyInput() {
    return this._htmlminify;
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

  // imggiftopng - computed: true, optional: true, required: false
  private _imggiftopng?: boolean | cdktf.IResolvable; 
  public get imggiftopng() {
    return this.getBooleanAttribute('imggiftopng');
  }
  public set imggiftopng(value: boolean | cdktf.IResolvable) {
    this._imggiftopng = value;
  }
  public resetImggiftopng() {
    this._imggiftopng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imggiftopngInput() {
    return this._imggiftopng;
  }

  // imginline - computed: true, optional: true, required: false
  private _imginline?: boolean | cdktf.IResolvable; 
  public get imginline() {
    return this.getBooleanAttribute('imginline');
  }
  public set imginline(value: boolean | cdktf.IResolvable) {
    this._imginline = value;
  }
  public resetImginline() {
    this._imginline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imginlineInput() {
    return this._imginline;
  }

  // imglazyload - computed: true, optional: true, required: false
  private _imglazyload?: boolean | cdktf.IResolvable; 
  public get imglazyload() {
    return this.getBooleanAttribute('imglazyload');
  }
  public set imglazyload(value: boolean | cdktf.IResolvable) {
    this._imglazyload = value;
  }
  public resetImglazyload() {
    this._imglazyload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imglazyloadInput() {
    return this._imglazyload;
  }

  // imgshrinktoattrib - computed: true, optional: true, required: false
  private _imgshrinktoattrib?: boolean | cdktf.IResolvable; 
  public get imgshrinktoattrib() {
    return this.getBooleanAttribute('imgshrinktoattrib');
  }
  public set imgshrinktoattrib(value: boolean | cdktf.IResolvable) {
    this._imgshrinktoattrib = value;
  }
  public resetImgshrinktoattrib() {
    this._imgshrinktoattrib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgshrinktoattribInput() {
    return this._imgshrinktoattrib;
  }

  // imgtojpegxr - computed: true, optional: true, required: false
  private _imgtojpegxr?: boolean | cdktf.IResolvable; 
  public get imgtojpegxr() {
    return this.getBooleanAttribute('imgtojpegxr');
  }
  public set imgtojpegxr(value: boolean | cdktf.IResolvable) {
    this._imgtojpegxr = value;
  }
  public resetImgtojpegxr() {
    this._imgtojpegxr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgtojpegxrInput() {
    return this._imgtojpegxr;
  }

  // imgtowebp - computed: true, optional: true, required: false
  private _imgtowebp?: boolean | cdktf.IResolvable; 
  public get imgtowebp() {
    return this.getBooleanAttribute('imgtowebp');
  }
  public set imgtowebp(value: boolean | cdktf.IResolvable) {
    this._imgtowebp = value;
  }
  public resetImgtowebp() {
    this._imgtowebp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgtowebpInput() {
    return this._imgtowebp;
  }

  // jpgoptimize - computed: true, optional: true, required: false
  private _jpgoptimize?: boolean | cdktf.IResolvable; 
  public get jpgoptimize() {
    return this.getBooleanAttribute('jpgoptimize');
  }
  public set jpgoptimize(value: boolean | cdktf.IResolvable) {
    this._jpgoptimize = value;
  }
  public resetJpgoptimize() {
    this._jpgoptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpgoptimizeInput() {
    return this._jpgoptimize;
  }

  // jsinline - computed: true, optional: true, required: false
  private _jsinline?: boolean | cdktf.IResolvable; 
  public get jsinline() {
    return this.getBooleanAttribute('jsinline');
  }
  public set jsinline(value: boolean | cdktf.IResolvable) {
    this._jsinline = value;
  }
  public resetJsinline() {
    this._jsinline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsinlineInput() {
    return this._jsinline;
  }

  // jsminify - computed: true, optional: true, required: false
  private _jsminify?: boolean | cdktf.IResolvable; 
  public get jsminify() {
    return this.getBooleanAttribute('jsminify');
  }
  public set jsminify(value: boolean | cdktf.IResolvable) {
    this._jsminify = value;
  }
  public resetJsminify() {
    this._jsminify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsminifyInput() {
    return this._jsminify;
  }

  // jsmovetoend - computed: true, optional: true, required: false
  private _jsmovetoend?: boolean | cdktf.IResolvable; 
  public get jsmovetoend() {
    return this.getBooleanAttribute('jsmovetoend');
  }
  public set jsmovetoend(value: boolean | cdktf.IResolvable) {
    this._jsmovetoend = value;
  }
  public resetJsmovetoend() {
    this._jsmovetoend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsmovetoendInput() {
    return this._jsmovetoend;
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

  // pageextendcache - computed: true, optional: true, required: false
  private _pageextendcache?: boolean | cdktf.IResolvable; 
  public get pageextendcache() {
    return this.getBooleanAttribute('pageextendcache');
  }
  public set pageextendcache(value: boolean | cdktf.IResolvable) {
    this._pageextendcache = value;
  }
  public resetPageextendcache() {
    this._pageextendcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageextendcacheInput() {
    return this._pageextendcache;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cachemaxage: cdktf.stringToTerraform(this._cachemaxage),
      clientsidemeasurements: cdktf.booleanToTerraform(this._clientsidemeasurements),
      convertimporttolink: cdktf.booleanToTerraform(this._convertimporttolink),
      csscombine: cdktf.booleanToTerraform(this._csscombine),
      cssimginline: cdktf.booleanToTerraform(this._cssimginline),
      cssinline: cdktf.booleanToTerraform(this._cssinline),
      cssminify: cdktf.booleanToTerraform(this._cssminify),
      cssmovetohead: cdktf.booleanToTerraform(this._cssmovetohead),
      dnsshards: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsshards),
      domainsharding: cdktf.stringToTerraform(this._domainsharding),
      htmlminify: cdktf.booleanToTerraform(this._htmlminify),
      id: cdktf.stringToTerraform(this._id),
      imggiftopng: cdktf.booleanToTerraform(this._imggiftopng),
      imginline: cdktf.booleanToTerraform(this._imginline),
      imglazyload: cdktf.booleanToTerraform(this._imglazyload),
      imgshrinktoattrib: cdktf.booleanToTerraform(this._imgshrinktoattrib),
      imgtojpegxr: cdktf.booleanToTerraform(this._imgtojpegxr),
      imgtowebp: cdktf.booleanToTerraform(this._imgtowebp),
      jpgoptimize: cdktf.booleanToTerraform(this._jpgoptimize),
      jsinline: cdktf.booleanToTerraform(this._jsinline),
      jsminify: cdktf.booleanToTerraform(this._jsminify),
      jsmovetoend: cdktf.booleanToTerraform(this._jsmovetoend),
      name: cdktf.stringToTerraform(this._name),
      pageextendcache: cdktf.booleanToTerraform(this._pageextendcache),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cachemaxage: {
        value: cdktf.stringToHclTerraform(this._cachemaxage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientsidemeasurements: {
        value: cdktf.booleanToHclTerraform(this._clientsidemeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      convertimporttolink: {
        value: cdktf.booleanToHclTerraform(this._convertimporttolink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      csscombine: {
        value: cdktf.booleanToHclTerraform(this._csscombine),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cssimginline: {
        value: cdktf.booleanToHclTerraform(this._cssimginline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cssinline: {
        value: cdktf.booleanToHclTerraform(this._cssinline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cssminify: {
        value: cdktf.booleanToHclTerraform(this._cssminify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cssmovetohead: {
        value: cdktf.booleanToHclTerraform(this._cssmovetohead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dnsshards: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsshards),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      domainsharding: {
        value: cdktf.stringToHclTerraform(this._domainsharding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      htmlminify: {
        value: cdktf.booleanToHclTerraform(this._htmlminify),
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
      imggiftopng: {
        value: cdktf.booleanToHclTerraform(this._imggiftopng),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      imginline: {
        value: cdktf.booleanToHclTerraform(this._imginline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      imglazyload: {
        value: cdktf.booleanToHclTerraform(this._imglazyload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      imgshrinktoattrib: {
        value: cdktf.booleanToHclTerraform(this._imgshrinktoattrib),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      imgtojpegxr: {
        value: cdktf.booleanToHclTerraform(this._imgtojpegxr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      imgtowebp: {
        value: cdktf.booleanToHclTerraform(this._imgtowebp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jpgoptimize: {
        value: cdktf.booleanToHclTerraform(this._jpgoptimize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jsinline: {
        value: cdktf.booleanToHclTerraform(this._jsinline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jsminify: {
        value: cdktf.booleanToHclTerraform(this._jsminify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jsmovetoend: {
        value: cdktf.booleanToHclTerraform(this._jsmovetoend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pageextendcache: {
        value: cdktf.booleanToHclTerraform(this._pageextendcache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
