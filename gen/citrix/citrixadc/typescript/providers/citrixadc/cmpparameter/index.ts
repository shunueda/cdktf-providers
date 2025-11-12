// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmpparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#addvaryheader Cmpparameter#addvaryheader}
  */
  readonly addvaryheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#cmpbypasspct Cmpparameter#cmpbypasspct}
  */
  readonly cmpbypasspct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#cmplevel Cmpparameter#cmplevel}
  */
  readonly cmplevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#cmponpush Cmpparameter#cmponpush}
  */
  readonly cmponpush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#externalcache Cmpparameter#externalcache}
  */
  readonly externalcache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#heurexpiry Cmpparameter#heurexpiry}
  */
  readonly heurexpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#heurexpiryhistwt Cmpparameter#heurexpiryhistwt}
  */
  readonly heurexpiryhistwt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#heurexpirythres Cmpparameter#heurexpirythres}
  */
  readonly heurexpirythres?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#id Cmpparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#minressize Cmpparameter#minressize}
  */
  readonly minressize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#policytype Cmpparameter#policytype}
  */
  readonly policytype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#quantumsize Cmpparameter#quantumsize}
  */
  readonly quantumsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#randomgzipfilename Cmpparameter#randomgzipfilename}
  */
  readonly randomgzipfilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#randomgzipfilenamemaxlength Cmpparameter#randomgzipfilenamemaxlength}
  */
  readonly randomgzipfilenamemaxlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#randomgzipfilenameminlength Cmpparameter#randomgzipfilenameminlength}
  */
  readonly randomgzipfilenameminlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#servercmp Cmpparameter#servercmp}
  */
  readonly servercmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#varyheadervalue Cmpparameter#varyheadervalue}
  */
  readonly varyheadervalue?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter citrixadc_cmpparameter}
*/
export class Cmpparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_cmpparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cmpparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cmpparameter to import
  * @param importFromId The id of the existing Cmpparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cmpparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_cmpparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cmpparameter citrixadc_cmpparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmpparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CmpparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_cmpparameter',
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
    this._addvaryheader = config.addvaryheader;
    this._cmpbypasspct = config.cmpbypasspct;
    this._cmplevel = config.cmplevel;
    this._cmponpush = config.cmponpush;
    this._externalcache = config.externalcache;
    this._heurexpiry = config.heurexpiry;
    this._heurexpiryhistwt = config.heurexpiryhistwt;
    this._heurexpirythres = config.heurexpirythres;
    this._id = config.id;
    this._minressize = config.minressize;
    this._policytype = config.policytype;
    this._quantumsize = config.quantumsize;
    this._randomgzipfilename = config.randomgzipfilename;
    this._randomgzipfilenamemaxlength = config.randomgzipfilenamemaxlength;
    this._randomgzipfilenameminlength = config.randomgzipfilenameminlength;
    this._servercmp = config.servercmp;
    this._varyheadervalue = config.varyheadervalue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addvaryheader - computed: true, optional: true, required: false
  private _addvaryheader?: string; 
  public get addvaryheader() {
    return this.getStringAttribute('addvaryheader');
  }
  public set addvaryheader(value: string) {
    this._addvaryheader = value;
  }
  public resetAddvaryheader() {
    this._addvaryheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addvaryheaderInput() {
    return this._addvaryheader;
  }

  // cmpbypasspct - computed: true, optional: true, required: false
  private _cmpbypasspct?: number; 
  public get cmpbypasspct() {
    return this.getNumberAttribute('cmpbypasspct');
  }
  public set cmpbypasspct(value: number) {
    this._cmpbypasspct = value;
  }
  public resetCmpbypasspct() {
    this._cmpbypasspct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpbypasspctInput() {
    return this._cmpbypasspct;
  }

  // cmplevel - computed: true, optional: true, required: false
  private _cmplevel?: string; 
  public get cmplevel() {
    return this.getStringAttribute('cmplevel');
  }
  public set cmplevel(value: string) {
    this._cmplevel = value;
  }
  public resetCmplevel() {
    this._cmplevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmplevelInput() {
    return this._cmplevel;
  }

  // cmponpush - computed: true, optional: true, required: false
  private _cmponpush?: string; 
  public get cmponpush() {
    return this.getStringAttribute('cmponpush');
  }
  public set cmponpush(value: string) {
    this._cmponpush = value;
  }
  public resetCmponpush() {
    this._cmponpush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmponpushInput() {
    return this._cmponpush;
  }

  // externalcache - computed: true, optional: true, required: false
  private _externalcache?: string; 
  public get externalcache() {
    return this.getStringAttribute('externalcache');
  }
  public set externalcache(value: string) {
    this._externalcache = value;
  }
  public resetExternalcache() {
    this._externalcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalcacheInput() {
    return this._externalcache;
  }

  // heurexpiry - computed: true, optional: true, required: false
  private _heurexpiry?: string; 
  public get heurexpiry() {
    return this.getStringAttribute('heurexpiry');
  }
  public set heurexpiry(value: string) {
    this._heurexpiry = value;
  }
  public resetHeurexpiry() {
    this._heurexpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heurexpiryInput() {
    return this._heurexpiry;
  }

  // heurexpiryhistwt - computed: true, optional: true, required: false
  private _heurexpiryhistwt?: number; 
  public get heurexpiryhistwt() {
    return this.getNumberAttribute('heurexpiryhistwt');
  }
  public set heurexpiryhistwt(value: number) {
    this._heurexpiryhistwt = value;
  }
  public resetHeurexpiryhistwt() {
    this._heurexpiryhistwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heurexpiryhistwtInput() {
    return this._heurexpiryhistwt;
  }

  // heurexpirythres - computed: true, optional: true, required: false
  private _heurexpirythres?: number; 
  public get heurexpirythres() {
    return this.getNumberAttribute('heurexpirythres');
  }
  public set heurexpirythres(value: number) {
    this._heurexpirythres = value;
  }
  public resetHeurexpirythres() {
    this._heurexpirythres = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heurexpirythresInput() {
    return this._heurexpirythres;
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

  // minressize - computed: true, optional: true, required: false
  private _minressize?: number; 
  public get minressize() {
    return this.getNumberAttribute('minressize');
  }
  public set minressize(value: number) {
    this._minressize = value;
  }
  public resetMinressize() {
    this._minressize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minressizeInput() {
    return this._minressize;
  }

  // policytype - computed: true, optional: true, required: false
  private _policytype?: string; 
  public get policytype() {
    return this.getStringAttribute('policytype');
  }
  public set policytype(value: string) {
    this._policytype = value;
  }
  public resetPolicytype() {
    this._policytype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policytypeInput() {
    return this._policytype;
  }

  // quantumsize - computed: true, optional: true, required: false
  private _quantumsize?: number; 
  public get quantumsize() {
    return this.getNumberAttribute('quantumsize');
  }
  public set quantumsize(value: number) {
    this._quantumsize = value;
  }
  public resetQuantumsize() {
    this._quantumsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantumsizeInput() {
    return this._quantumsize;
  }

  // randomgzipfilename - computed: true, optional: true, required: false
  private _randomgzipfilename?: string; 
  public get randomgzipfilename() {
    return this.getStringAttribute('randomgzipfilename');
  }
  public set randomgzipfilename(value: string) {
    this._randomgzipfilename = value;
  }
  public resetRandomgzipfilename() {
    this._randomgzipfilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomgzipfilenameInput() {
    return this._randomgzipfilename;
  }

  // randomgzipfilenamemaxlength - computed: true, optional: true, required: false
  private _randomgzipfilenamemaxlength?: number; 
  public get randomgzipfilenamemaxlength() {
    return this.getNumberAttribute('randomgzipfilenamemaxlength');
  }
  public set randomgzipfilenamemaxlength(value: number) {
    this._randomgzipfilenamemaxlength = value;
  }
  public resetRandomgzipfilenamemaxlength() {
    this._randomgzipfilenamemaxlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomgzipfilenamemaxlengthInput() {
    return this._randomgzipfilenamemaxlength;
  }

  // randomgzipfilenameminlength - computed: true, optional: true, required: false
  private _randomgzipfilenameminlength?: number; 
  public get randomgzipfilenameminlength() {
    return this.getNumberAttribute('randomgzipfilenameminlength');
  }
  public set randomgzipfilenameminlength(value: number) {
    this._randomgzipfilenameminlength = value;
  }
  public resetRandomgzipfilenameminlength() {
    this._randomgzipfilenameminlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomgzipfilenameminlengthInput() {
    return this._randomgzipfilenameminlength;
  }

  // servercmp - computed: true, optional: true, required: false
  private _servercmp?: string; 
  public get servercmp() {
    return this.getStringAttribute('servercmp');
  }
  public set servercmp(value: string) {
    this._servercmp = value;
  }
  public resetServercmp() {
    this._servercmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servercmpInput() {
    return this._servercmp;
  }

  // varyheadervalue - computed: true, optional: true, required: false
  private _varyheadervalue?: string; 
  public get varyheadervalue() {
    return this.getStringAttribute('varyheadervalue');
  }
  public set varyheadervalue(value: string) {
    this._varyheadervalue = value;
  }
  public resetVaryheadervalue() {
    this._varyheadervalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varyheadervalueInput() {
    return this._varyheadervalue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addvaryheader: cdktf.stringToTerraform(this._addvaryheader),
      cmpbypasspct: cdktf.numberToTerraform(this._cmpbypasspct),
      cmplevel: cdktf.stringToTerraform(this._cmplevel),
      cmponpush: cdktf.stringToTerraform(this._cmponpush),
      externalcache: cdktf.stringToTerraform(this._externalcache),
      heurexpiry: cdktf.stringToTerraform(this._heurexpiry),
      heurexpiryhistwt: cdktf.numberToTerraform(this._heurexpiryhistwt),
      heurexpirythres: cdktf.numberToTerraform(this._heurexpirythres),
      id: cdktf.stringToTerraform(this._id),
      minressize: cdktf.numberToTerraform(this._minressize),
      policytype: cdktf.stringToTerraform(this._policytype),
      quantumsize: cdktf.numberToTerraform(this._quantumsize),
      randomgzipfilename: cdktf.stringToTerraform(this._randomgzipfilename),
      randomgzipfilenamemaxlength: cdktf.numberToTerraform(this._randomgzipfilenamemaxlength),
      randomgzipfilenameminlength: cdktf.numberToTerraform(this._randomgzipfilenameminlength),
      servercmp: cdktf.stringToTerraform(this._servercmp),
      varyheadervalue: cdktf.stringToTerraform(this._varyheadervalue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addvaryheader: {
        value: cdktf.stringToHclTerraform(this._addvaryheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmpbypasspct: {
        value: cdktf.numberToHclTerraform(this._cmpbypasspct),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cmplevel: {
        value: cdktf.stringToHclTerraform(this._cmplevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmponpush: {
        value: cdktf.stringToHclTerraform(this._cmponpush),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      externalcache: {
        value: cdktf.stringToHclTerraform(this._externalcache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heurexpiry: {
        value: cdktf.stringToHclTerraform(this._heurexpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heurexpiryhistwt: {
        value: cdktf.numberToHclTerraform(this._heurexpiryhistwt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      heurexpirythres: {
        value: cdktf.numberToHclTerraform(this._heurexpirythres),
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
      minressize: {
        value: cdktf.numberToHclTerraform(this._minressize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policytype: {
        value: cdktf.stringToHclTerraform(this._policytype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quantumsize: {
        value: cdktf.numberToHclTerraform(this._quantumsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      randomgzipfilename: {
        value: cdktf.stringToHclTerraform(this._randomgzipfilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      randomgzipfilenamemaxlength: {
        value: cdktf.numberToHclTerraform(this._randomgzipfilenamemaxlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      randomgzipfilenameminlength: {
        value: cdktf.numberToHclTerraform(this._randomgzipfilenameminlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servercmp: {
        value: cdktf.stringToHclTerraform(this._servercmp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      varyheadervalue: {
        value: cdktf.stringToHclTerraform(this._varyheadervalue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
