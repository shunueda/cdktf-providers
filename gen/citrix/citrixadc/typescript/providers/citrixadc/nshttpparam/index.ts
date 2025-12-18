// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NshttpparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam#conmultiplex Nshttpparam#conmultiplex}
  */
  readonly conmultiplex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam#dropinvalreqs Nshttpparam#dropinvalreqs}
  */
  readonly dropinvalreqs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam#http2serverside Nshttpparam#http2serverside}
  */
  readonly http2Serverside?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam#id Nshttpparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam#ignoreconnectcodingscheme Nshttpparam#ignoreconnectcodingscheme}
  */
  readonly ignoreconnectcodingscheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam#insnssrvrhdr Nshttpparam#insnssrvrhdr}
  */
  readonly insnssrvrhdr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam#logerrresp Nshttpparam#logerrresp}
  */
  readonly logerrresp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam#markconnreqinval Nshttpparam#markconnreqinval}
  */
  readonly markconnreqinval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam#markhttp09inval Nshttpparam#markhttp09inval}
  */
  readonly markhttp09Inval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam#maxreusepool Nshttpparam#maxreusepool}
  */
  readonly maxreusepool?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam#nssrvrhdr Nshttpparam#nssrvrhdr}
  */
  readonly nssrvrhdr?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam citrixadc_nshttpparam}
*/
export class Nshttpparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nshttpparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nshttpparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nshttpparam to import
  * @param importFromId The id of the existing Nshttpparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nshttpparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nshttpparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpparam citrixadc_nshttpparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NshttpparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NshttpparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nshttpparam',
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
    this._conmultiplex = config.conmultiplex;
    this._dropinvalreqs = config.dropinvalreqs;
    this._http2Serverside = config.http2Serverside;
    this._id = config.id;
    this._ignoreconnectcodingscheme = config.ignoreconnectcodingscheme;
    this._insnssrvrhdr = config.insnssrvrhdr;
    this._logerrresp = config.logerrresp;
    this._markconnreqinval = config.markconnreqinval;
    this._markhttp09Inval = config.markhttp09Inval;
    this._maxreusepool = config.maxreusepool;
    this._nssrvrhdr = config.nssrvrhdr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conmultiplex - computed: true, optional: true, required: false
  private _conmultiplex?: string; 
  public get conmultiplex() {
    return this.getStringAttribute('conmultiplex');
  }
  public set conmultiplex(value: string) {
    this._conmultiplex = value;
  }
  public resetConmultiplex() {
    this._conmultiplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conmultiplexInput() {
    return this._conmultiplex;
  }

  // dropinvalreqs - computed: true, optional: true, required: false
  private _dropinvalreqs?: string; 
  public get dropinvalreqs() {
    return this.getStringAttribute('dropinvalreqs');
  }
  public set dropinvalreqs(value: string) {
    this._dropinvalreqs = value;
  }
  public resetDropinvalreqs() {
    this._dropinvalreqs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropinvalreqsInput() {
    return this._dropinvalreqs;
  }

  // http2serverside - computed: true, optional: true, required: false
  private _http2Serverside?: string; 
  public get http2Serverside() {
    return this.getStringAttribute('http2serverside');
  }
  public set http2Serverside(value: string) {
    this._http2Serverside = value;
  }
  public resetHttp2Serverside() {
    this._http2Serverside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ServersideInput() {
    return this._http2Serverside;
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

  // ignoreconnectcodingscheme - computed: true, optional: true, required: false
  private _ignoreconnectcodingscheme?: string; 
  public get ignoreconnectcodingscheme() {
    return this.getStringAttribute('ignoreconnectcodingscheme');
  }
  public set ignoreconnectcodingscheme(value: string) {
    this._ignoreconnectcodingscheme = value;
  }
  public resetIgnoreconnectcodingscheme() {
    this._ignoreconnectcodingscheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreconnectcodingschemeInput() {
    return this._ignoreconnectcodingscheme;
  }

  // insnssrvrhdr - computed: true, optional: true, required: false
  private _insnssrvrhdr?: string; 
  public get insnssrvrhdr() {
    return this.getStringAttribute('insnssrvrhdr');
  }
  public set insnssrvrhdr(value: string) {
    this._insnssrvrhdr = value;
  }
  public resetInsnssrvrhdr() {
    this._insnssrvrhdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insnssrvrhdrInput() {
    return this._insnssrvrhdr;
  }

  // logerrresp - computed: true, optional: true, required: false
  private _logerrresp?: string; 
  public get logerrresp() {
    return this.getStringAttribute('logerrresp');
  }
  public set logerrresp(value: string) {
    this._logerrresp = value;
  }
  public resetLogerrresp() {
    this._logerrresp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logerrrespInput() {
    return this._logerrresp;
  }

  // markconnreqinval - computed: true, optional: true, required: false
  private _markconnreqinval?: string; 
  public get markconnreqinval() {
    return this.getStringAttribute('markconnreqinval');
  }
  public set markconnreqinval(value: string) {
    this._markconnreqinval = value;
  }
  public resetMarkconnreqinval() {
    this._markconnreqinval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markconnreqinvalInput() {
    return this._markconnreqinval;
  }

  // markhttp09inval - computed: true, optional: true, required: false
  private _markhttp09Inval?: string; 
  public get markhttp09Inval() {
    return this.getStringAttribute('markhttp09inval');
  }
  public set markhttp09Inval(value: string) {
    this._markhttp09Inval = value;
  }
  public resetMarkhttp09Inval() {
    this._markhttp09Inval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markhttp09InvalInput() {
    return this._markhttp09Inval;
  }

  // maxreusepool - computed: true, optional: true, required: false
  private _maxreusepool?: number; 
  public get maxreusepool() {
    return this.getNumberAttribute('maxreusepool');
  }
  public set maxreusepool(value: number) {
    this._maxreusepool = value;
  }
  public resetMaxreusepool() {
    this._maxreusepool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxreusepoolInput() {
    return this._maxreusepool;
  }

  // nssrvrhdr - computed: true, optional: true, required: false
  private _nssrvrhdr?: string; 
  public get nssrvrhdr() {
    return this.getStringAttribute('nssrvrhdr');
  }
  public set nssrvrhdr(value: string) {
    this._nssrvrhdr = value;
  }
  public resetNssrvrhdr() {
    this._nssrvrhdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssrvrhdrInput() {
    return this._nssrvrhdr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conmultiplex: cdktf.stringToTerraform(this._conmultiplex),
      dropinvalreqs: cdktf.stringToTerraform(this._dropinvalreqs),
      http2serverside: cdktf.stringToTerraform(this._http2Serverside),
      id: cdktf.stringToTerraform(this._id),
      ignoreconnectcodingscheme: cdktf.stringToTerraform(this._ignoreconnectcodingscheme),
      insnssrvrhdr: cdktf.stringToTerraform(this._insnssrvrhdr),
      logerrresp: cdktf.stringToTerraform(this._logerrresp),
      markconnreqinval: cdktf.stringToTerraform(this._markconnreqinval),
      markhttp09inval: cdktf.stringToTerraform(this._markhttp09Inval),
      maxreusepool: cdktf.numberToTerraform(this._maxreusepool),
      nssrvrhdr: cdktf.stringToTerraform(this._nssrvrhdr),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conmultiplex: {
        value: cdktf.stringToHclTerraform(this._conmultiplex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dropinvalreqs: {
        value: cdktf.stringToHclTerraform(this._dropinvalreqs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2serverside: {
        value: cdktf.stringToHclTerraform(this._http2Serverside),
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
      ignoreconnectcodingscheme: {
        value: cdktf.stringToHclTerraform(this._ignoreconnectcodingscheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insnssrvrhdr: {
        value: cdktf.stringToHclTerraform(this._insnssrvrhdr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logerrresp: {
        value: cdktf.stringToHclTerraform(this._logerrresp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      markconnreqinval: {
        value: cdktf.stringToHclTerraform(this._markconnreqinval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      markhttp09inval: {
        value: cdktf.stringToHclTerraform(this._markhttp09Inval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxreusepool: {
        value: cdktf.numberToHclTerraform(this._maxreusepool),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nssrvrhdr: {
        value: cdktf.stringToHclTerraform(this._nssrvrhdr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
