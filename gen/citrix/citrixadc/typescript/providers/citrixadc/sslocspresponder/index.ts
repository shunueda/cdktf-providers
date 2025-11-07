// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslocspresponderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#batchingdelay Sslocspresponder#batchingdelay}
  */
  readonly batchingdelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#batchingdepth Sslocspresponder#batchingdepth}
  */
  readonly batchingdepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#cache Sslocspresponder#cache}
  */
  readonly cache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#cachetimeout Sslocspresponder#cachetimeout}
  */
  readonly cachetimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#httpmethod Sslocspresponder#httpmethod}
  */
  readonly httpmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#id Sslocspresponder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#insertclientcert Sslocspresponder#insertclientcert}
  */
  readonly insertclientcert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#name Sslocspresponder#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#ocspurlresolvetimeout Sslocspresponder#ocspurlresolvetimeout}
  */
  readonly ocspurlresolvetimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#producedattimeskew Sslocspresponder#producedattimeskew}
  */
  readonly producedattimeskew?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#respondercert Sslocspresponder#respondercert}
  */
  readonly respondercert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#resptimeout Sslocspresponder#resptimeout}
  */
  readonly resptimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#signingcert Sslocspresponder#signingcert}
  */
  readonly signingcert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#trustresponder Sslocspresponder#trustresponder}
  */
  readonly trustresponder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#url Sslocspresponder#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#usenonce Sslocspresponder#usenonce}
  */
  readonly usenonce?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder citrixadc_sslocspresponder}
*/
export class Sslocspresponder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslocspresponder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslocspresponder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslocspresponder to import
  * @param importFromId The id of the existing Sslocspresponder that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslocspresponder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslocspresponder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslocspresponder citrixadc_sslocspresponder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslocspresponderConfig
  */
  public constructor(scope: Construct, id: string, config: SslocspresponderConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslocspresponder',
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
    this._batchingdelay = config.batchingdelay;
    this._batchingdepth = config.batchingdepth;
    this._cache = config.cache;
    this._cachetimeout = config.cachetimeout;
    this._httpmethod = config.httpmethod;
    this._id = config.id;
    this._insertclientcert = config.insertclientcert;
    this._name = config.name;
    this._ocspurlresolvetimeout = config.ocspurlresolvetimeout;
    this._producedattimeskew = config.producedattimeskew;
    this._respondercert = config.respondercert;
    this._resptimeout = config.resptimeout;
    this._signingcert = config.signingcert;
    this._trustresponder = config.trustresponder;
    this._url = config.url;
    this._usenonce = config.usenonce;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batchingdelay - computed: true, optional: true, required: false
  private _batchingdelay?: number; 
  public get batchingdelay() {
    return this.getNumberAttribute('batchingdelay');
  }
  public set batchingdelay(value: number) {
    this._batchingdelay = value;
  }
  public resetBatchingdelay() {
    this._batchingdelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchingdelayInput() {
    return this._batchingdelay;
  }

  // batchingdepth - computed: true, optional: true, required: false
  private _batchingdepth?: number; 
  public get batchingdepth() {
    return this.getNumberAttribute('batchingdepth');
  }
  public set batchingdepth(value: number) {
    this._batchingdepth = value;
  }
  public resetBatchingdepth() {
    this._batchingdepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchingdepthInput() {
    return this._batchingdepth;
  }

  // cache - computed: true, optional: true, required: false
  private _cache?: string; 
  public get cache() {
    return this.getStringAttribute('cache');
  }
  public set cache(value: string) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // cachetimeout - computed: true, optional: true, required: false
  private _cachetimeout?: number; 
  public get cachetimeout() {
    return this.getNumberAttribute('cachetimeout');
  }
  public set cachetimeout(value: number) {
    this._cachetimeout = value;
  }
  public resetCachetimeout() {
    this._cachetimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachetimeoutInput() {
    return this._cachetimeout;
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

  // insertclientcert - computed: true, optional: true, required: false
  private _insertclientcert?: string; 
  public get insertclientcert() {
    return this.getStringAttribute('insertclientcert');
  }
  public set insertclientcert(value: string) {
    this._insertclientcert = value;
  }
  public resetInsertclientcert() {
    this._insertclientcert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertclientcertInput() {
    return this._insertclientcert;
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

  // ocspurlresolvetimeout - computed: true, optional: true, required: false
  private _ocspurlresolvetimeout?: number; 
  public get ocspurlresolvetimeout() {
    return this.getNumberAttribute('ocspurlresolvetimeout');
  }
  public set ocspurlresolvetimeout(value: number) {
    this._ocspurlresolvetimeout = value;
  }
  public resetOcspurlresolvetimeout() {
    this._ocspurlresolvetimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspurlresolvetimeoutInput() {
    return this._ocspurlresolvetimeout;
  }

  // producedattimeskew - computed: true, optional: true, required: false
  private _producedattimeskew?: number; 
  public get producedattimeskew() {
    return this.getNumberAttribute('producedattimeskew');
  }
  public set producedattimeskew(value: number) {
    this._producedattimeskew = value;
  }
  public resetProducedattimeskew() {
    this._producedattimeskew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producedattimeskewInput() {
    return this._producedattimeskew;
  }

  // respondercert - computed: true, optional: true, required: false
  private _respondercert?: string; 
  public get respondercert() {
    return this.getStringAttribute('respondercert');
  }
  public set respondercert(value: string) {
    this._respondercert = value;
  }
  public resetRespondercert() {
    this._respondercert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondercertInput() {
    return this._respondercert;
  }

  // resptimeout - computed: true, optional: true, required: false
  private _resptimeout?: number; 
  public get resptimeout() {
    return this.getNumberAttribute('resptimeout');
  }
  public set resptimeout(value: number) {
    this._resptimeout = value;
  }
  public resetResptimeout() {
    this._resptimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resptimeoutInput() {
    return this._resptimeout;
  }

  // signingcert - computed: true, optional: true, required: false
  private _signingcert?: string; 
  public get signingcert() {
    return this.getStringAttribute('signingcert');
  }
  public set signingcert(value: string) {
    this._signingcert = value;
  }
  public resetSigningcert() {
    this._signingcert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingcertInput() {
    return this._signingcert;
  }

  // trustresponder - computed: true, optional: true, required: false
  private _trustresponder?: boolean | cdktf.IResolvable; 
  public get trustresponder() {
    return this.getBooleanAttribute('trustresponder');
  }
  public set trustresponder(value: boolean | cdktf.IResolvable) {
    this._trustresponder = value;
  }
  public resetTrustresponder() {
    this._trustresponder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustresponderInput() {
    return this._trustresponder;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // usenonce - computed: true, optional: true, required: false
  private _usenonce?: string; 
  public get usenonce() {
    return this.getStringAttribute('usenonce');
  }
  public set usenonce(value: string) {
    this._usenonce = value;
  }
  public resetUsenonce() {
    this._usenonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usenonceInput() {
    return this._usenonce;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      batchingdelay: cdktf.numberToTerraform(this._batchingdelay),
      batchingdepth: cdktf.numberToTerraform(this._batchingdepth),
      cache: cdktf.stringToTerraform(this._cache),
      cachetimeout: cdktf.numberToTerraform(this._cachetimeout),
      httpmethod: cdktf.stringToTerraform(this._httpmethod),
      id: cdktf.stringToTerraform(this._id),
      insertclientcert: cdktf.stringToTerraform(this._insertclientcert),
      name: cdktf.stringToTerraform(this._name),
      ocspurlresolvetimeout: cdktf.numberToTerraform(this._ocspurlresolvetimeout),
      producedattimeskew: cdktf.numberToTerraform(this._producedattimeskew),
      respondercert: cdktf.stringToTerraform(this._respondercert),
      resptimeout: cdktf.numberToTerraform(this._resptimeout),
      signingcert: cdktf.stringToTerraform(this._signingcert),
      trustresponder: cdktf.booleanToTerraform(this._trustresponder),
      url: cdktf.stringToTerraform(this._url),
      usenonce: cdktf.stringToTerraform(this._usenonce),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      batchingdelay: {
        value: cdktf.numberToHclTerraform(this._batchingdelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      batchingdepth: {
        value: cdktf.numberToHclTerraform(this._batchingdepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache: {
        value: cdktf.stringToHclTerraform(this._cache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cachetimeout: {
        value: cdktf.numberToHclTerraform(this._cachetimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      httpmethod: {
        value: cdktf.stringToHclTerraform(this._httpmethod),
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
      insertclientcert: {
        value: cdktf.stringToHclTerraform(this._insertclientcert),
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
      ocspurlresolvetimeout: {
        value: cdktf.numberToHclTerraform(this._ocspurlresolvetimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      producedattimeskew: {
        value: cdktf.numberToHclTerraform(this._producedattimeskew),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      respondercert: {
        value: cdktf.stringToHclTerraform(this._respondercert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resptimeout: {
        value: cdktf.numberToHclTerraform(this._resptimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signingcert: {
        value: cdktf.stringToHclTerraform(this._signingcert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trustresponder: {
        value: cdktf.booleanToHclTerraform(this._trustresponder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usenonce: {
        value: cdktf.stringToHclTerraform(this._usenonce),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
