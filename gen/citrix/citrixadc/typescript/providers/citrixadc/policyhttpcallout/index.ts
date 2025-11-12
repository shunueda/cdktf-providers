// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyhttpcalloutConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#bodyexpr Policyhttpcallout#bodyexpr}
  */
  readonly bodyexpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#cacheforsecs Policyhttpcallout#cacheforsecs}
  */
  readonly cacheforsecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#comment Policyhttpcallout#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#fullreqexpr Policyhttpcallout#fullreqexpr}
  */
  readonly fullreqexpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#headers Policyhttpcallout#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#hostexpr Policyhttpcallout#hostexpr}
  */
  readonly hostexpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#httpmethod Policyhttpcallout#httpmethod}
  */
  readonly httpmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#id Policyhttpcallout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#ipaddress Policyhttpcallout#ipaddress}
  */
  readonly ipaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#name Policyhttpcallout#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#parameters Policyhttpcallout#parameters}
  */
  readonly parameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#port Policyhttpcallout#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#resultexpr Policyhttpcallout#resultexpr}
  */
  readonly resultexpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#returntype Policyhttpcallout#returntype}
  */
  readonly returntype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#scheme Policyhttpcallout#scheme}
  */
  readonly scheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#urlstemexpr Policyhttpcallout#urlstemexpr}
  */
  readonly urlstemexpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#vserver Policyhttpcallout#vserver}
  */
  readonly vserver?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout citrixadc_policyhttpcallout}
*/
export class Policyhttpcallout extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_policyhttpcallout";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policyhttpcallout resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policyhttpcallout to import
  * @param importFromId The id of the existing Policyhttpcallout that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policyhttpcallout to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_policyhttpcallout", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policyhttpcallout citrixadc_policyhttpcallout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyhttpcalloutConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyhttpcalloutConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_policyhttpcallout',
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
    this._bodyexpr = config.bodyexpr;
    this._cacheforsecs = config.cacheforsecs;
    this._comment = config.comment;
    this._fullreqexpr = config.fullreqexpr;
    this._headers = config.headers;
    this._hostexpr = config.hostexpr;
    this._httpmethod = config.httpmethod;
    this._id = config.id;
    this._ipaddress = config.ipaddress;
    this._name = config.name;
    this._parameters = config.parameters;
    this._port = config.port;
    this._resultexpr = config.resultexpr;
    this._returntype = config.returntype;
    this._scheme = config.scheme;
    this._urlstemexpr = config.urlstemexpr;
    this._vserver = config.vserver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bodyexpr - computed: true, optional: true, required: false
  private _bodyexpr?: string; 
  public get bodyexpr() {
    return this.getStringAttribute('bodyexpr');
  }
  public set bodyexpr(value: string) {
    this._bodyexpr = value;
  }
  public resetBodyexpr() {
    this._bodyexpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyexprInput() {
    return this._bodyexpr;
  }

  // cacheforsecs - computed: true, optional: true, required: false
  private _cacheforsecs?: number; 
  public get cacheforsecs() {
    return this.getNumberAttribute('cacheforsecs');
  }
  public set cacheforsecs(value: number) {
    this._cacheforsecs = value;
  }
  public resetCacheforsecs() {
    this._cacheforsecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheforsecsInput() {
    return this._cacheforsecs;
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

  // fullreqexpr - computed: true, optional: true, required: false
  private _fullreqexpr?: string; 
  public get fullreqexpr() {
    return this.getStringAttribute('fullreqexpr');
  }
  public set fullreqexpr(value: string) {
    this._fullreqexpr = value;
  }
  public resetFullreqexpr() {
    this._fullreqexpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullreqexprInput() {
    return this._fullreqexpr;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // hostexpr - computed: true, optional: true, required: false
  private _hostexpr?: string; 
  public get hostexpr() {
    return this.getStringAttribute('hostexpr');
  }
  public set hostexpr(value: string) {
    this._hostexpr = value;
  }
  public resetHostexpr() {
    this._hostexpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostexprInput() {
    return this._hostexpr;
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

  // ipaddress - computed: true, optional: true, required: false
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  public resetIpaddress() {
    this._ipaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // resultexpr - computed: true, optional: true, required: false
  private _resultexpr?: string; 
  public get resultexpr() {
    return this.getStringAttribute('resultexpr');
  }
  public set resultexpr(value: string) {
    this._resultexpr = value;
  }
  public resetResultexpr() {
    this._resultexpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultexprInput() {
    return this._resultexpr;
  }

  // returntype - computed: false, optional: true, required: false
  private _returntype?: string; 
  public get returntype() {
    return this.getStringAttribute('returntype');
  }
  public set returntype(value: string) {
    this._returntype = value;
  }
  public resetReturntype() {
    this._returntype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returntypeInput() {
    return this._returntype;
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // urlstemexpr - computed: true, optional: true, required: false
  private _urlstemexpr?: string; 
  public get urlstemexpr() {
    return this.getStringAttribute('urlstemexpr');
  }
  public set urlstemexpr(value: string) {
    this._urlstemexpr = value;
  }
  public resetUrlstemexpr() {
    this._urlstemexpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlstemexprInput() {
    return this._urlstemexpr;
  }

  // vserver - computed: true, optional: true, required: false
  private _vserver?: string; 
  public get vserver() {
    return this.getStringAttribute('vserver');
  }
  public set vserver(value: string) {
    this._vserver = value;
  }
  public resetVserver() {
    this._vserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverInput() {
    return this._vserver;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bodyexpr: cdktf.stringToTerraform(this._bodyexpr),
      cacheforsecs: cdktf.numberToTerraform(this._cacheforsecs),
      comment: cdktf.stringToTerraform(this._comment),
      fullreqexpr: cdktf.stringToTerraform(this._fullreqexpr),
      headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._headers),
      hostexpr: cdktf.stringToTerraform(this._hostexpr),
      httpmethod: cdktf.stringToTerraform(this._httpmethod),
      id: cdktf.stringToTerraform(this._id),
      ipaddress: cdktf.stringToTerraform(this._ipaddress),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._parameters),
      port: cdktf.numberToTerraform(this._port),
      resultexpr: cdktf.stringToTerraform(this._resultexpr),
      returntype: cdktf.stringToTerraform(this._returntype),
      scheme: cdktf.stringToTerraform(this._scheme),
      urlstemexpr: cdktf.stringToTerraform(this._urlstemexpr),
      vserver: cdktf.stringToTerraform(this._vserver),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bodyexpr: {
        value: cdktf.stringToHclTerraform(this._bodyexpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacheforsecs: {
        value: cdktf.numberToHclTerraform(this._cacheforsecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fullreqexpr: {
        value: cdktf.stringToHclTerraform(this._fullreqexpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._headers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hostexpr: {
        value: cdktf.stringToHclTerraform(this._hostexpr),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipaddress: {
        value: cdktf.stringToHclTerraform(this._ipaddress),
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
      parameters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._parameters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resultexpr: {
        value: cdktf.stringToHclTerraform(this._resultexpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      returntype: {
        value: cdktf.stringToHclTerraform(this._returntype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheme: {
        value: cdktf.stringToHclTerraform(this._scheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urlstemexpr: {
        value: cdktf.stringToHclTerraform(this._urlstemexpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vserver: {
        value: cdktf.stringToHclTerraform(this._vserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
