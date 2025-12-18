// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/feoparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FeoparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/feoparameter#cssinlinethressize Feoparameter#cssinlinethressize}
  */
  readonly cssinlinethressize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/feoparameter#id Feoparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/feoparameter#imginlinethressize Feoparameter#imginlinethressize}
  */
  readonly imginlinethressize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/feoparameter#jpegqualitypercent Feoparameter#jpegqualitypercent}
  */
  readonly jpegqualitypercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/feoparameter#jsinlinethressize Feoparameter#jsinlinethressize}
  */
  readonly jsinlinethressize?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/feoparameter citrixadc_feoparameter}
*/
export class Feoparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_feoparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Feoparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Feoparameter to import
  * @param importFromId The id of the existing Feoparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/feoparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Feoparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_feoparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/feoparameter citrixadc_feoparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeoparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FeoparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_feoparameter',
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
    this._cssinlinethressize = config.cssinlinethressize;
    this._id = config.id;
    this._imginlinethressize = config.imginlinethressize;
    this._jpegqualitypercent = config.jpegqualitypercent;
    this._jsinlinethressize = config.jsinlinethressize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cssinlinethressize - computed: true, optional: true, required: false
  private _cssinlinethressize?: number; 
  public get cssinlinethressize() {
    return this.getNumberAttribute('cssinlinethressize');
  }
  public set cssinlinethressize(value: number) {
    this._cssinlinethressize = value;
  }
  public resetCssinlinethressize() {
    this._cssinlinethressize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssinlinethressizeInput() {
    return this._cssinlinethressize;
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

  // imginlinethressize - computed: true, optional: true, required: false
  private _imginlinethressize?: number; 
  public get imginlinethressize() {
    return this.getNumberAttribute('imginlinethressize');
  }
  public set imginlinethressize(value: number) {
    this._imginlinethressize = value;
  }
  public resetImginlinethressize() {
    this._imginlinethressize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imginlinethressizeInput() {
    return this._imginlinethressize;
  }

  // jpegqualitypercent - computed: true, optional: true, required: false
  private _jpegqualitypercent?: number; 
  public get jpegqualitypercent() {
    return this.getNumberAttribute('jpegqualitypercent');
  }
  public set jpegqualitypercent(value: number) {
    this._jpegqualitypercent = value;
  }
  public resetJpegqualitypercent() {
    this._jpegqualitypercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpegqualitypercentInput() {
    return this._jpegqualitypercent;
  }

  // jsinlinethressize - computed: true, optional: true, required: false
  private _jsinlinethressize?: number; 
  public get jsinlinethressize() {
    return this.getNumberAttribute('jsinlinethressize');
  }
  public set jsinlinethressize(value: number) {
    this._jsinlinethressize = value;
  }
  public resetJsinlinethressize() {
    this._jsinlinethressize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsinlinethressizeInput() {
    return this._jsinlinethressize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cssinlinethressize: cdktf.numberToTerraform(this._cssinlinethressize),
      id: cdktf.stringToTerraform(this._id),
      imginlinethressize: cdktf.numberToTerraform(this._imginlinethressize),
      jpegqualitypercent: cdktf.numberToTerraform(this._jpegqualitypercent),
      jsinlinethressize: cdktf.numberToTerraform(this._jsinlinethressize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cssinlinethressize: {
        value: cdktf.numberToHclTerraform(this._cssinlinethressize),
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
      imginlinethressize: {
        value: cdktf.numberToHclTerraform(this._imginlinethressize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jpegqualitypercent: {
        value: cdktf.numberToHclTerraform(this._jpegqualitypercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jsinlinethressize: {
        value: cdktf.numberToHclTerraform(this._jsinlinethressize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
