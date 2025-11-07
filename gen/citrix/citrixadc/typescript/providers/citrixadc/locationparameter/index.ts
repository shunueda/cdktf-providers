// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/locationparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocationparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/locationparameter#context Locationparameter#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/locationparameter#id Locationparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/locationparameter#matchwildcardtoany Locationparameter#matchwildcardtoany}
  */
  readonly matchwildcardtoany?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/locationparameter#q1label Locationparameter#q1label}
  */
  readonly q1Label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/locationparameter#q2label Locationparameter#q2label}
  */
  readonly q2Label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/locationparameter#q3label Locationparameter#q3label}
  */
  readonly q3Label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/locationparameter#q4label Locationparameter#q4label}
  */
  readonly q4Label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/locationparameter#q5label Locationparameter#q5label}
  */
  readonly q5Label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/locationparameter#q6label Locationparameter#q6label}
  */
  readonly q6Label?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/locationparameter citrixadc_locationparameter}
*/
export class Locationparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_locationparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Locationparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Locationparameter to import
  * @param importFromId The id of the existing Locationparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/locationparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Locationparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_locationparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/locationparameter citrixadc_locationparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LocationparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_locationparameter',
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
    this._context = config.context;
    this._id = config.id;
    this._matchwildcardtoany = config.matchwildcardtoany;
    this._q1Label = config.q1Label;
    this._q2Label = config.q2Label;
    this._q3Label = config.q3Label;
    this._q4Label = config.q4Label;
    this._q5Label = config.q5Label;
    this._q6Label = config.q6Label;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: true, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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

  // matchwildcardtoany - computed: true, optional: true, required: false
  private _matchwildcardtoany?: string; 
  public get matchwildcardtoany() {
    return this.getStringAttribute('matchwildcardtoany');
  }
  public set matchwildcardtoany(value: string) {
    this._matchwildcardtoany = value;
  }
  public resetMatchwildcardtoany() {
    this._matchwildcardtoany = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchwildcardtoanyInput() {
    return this._matchwildcardtoany;
  }

  // q1label - computed: true, optional: true, required: false
  private _q1Label?: string; 
  public get q1Label() {
    return this.getStringAttribute('q1label');
  }
  public set q1Label(value: string) {
    this._q1Label = value;
  }
  public resetQ1Label() {
    this._q1Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get q1LabelInput() {
    return this._q1Label;
  }

  // q2label - computed: true, optional: true, required: false
  private _q2Label?: string; 
  public get q2Label() {
    return this.getStringAttribute('q2label');
  }
  public set q2Label(value: string) {
    this._q2Label = value;
  }
  public resetQ2Label() {
    this._q2Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get q2LabelInput() {
    return this._q2Label;
  }

  // q3label - computed: true, optional: true, required: false
  private _q3Label?: string; 
  public get q3Label() {
    return this.getStringAttribute('q3label');
  }
  public set q3Label(value: string) {
    this._q3Label = value;
  }
  public resetQ3Label() {
    this._q3Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get q3LabelInput() {
    return this._q3Label;
  }

  // q4label - computed: true, optional: true, required: false
  private _q4Label?: string; 
  public get q4Label() {
    return this.getStringAttribute('q4label');
  }
  public set q4Label(value: string) {
    this._q4Label = value;
  }
  public resetQ4Label() {
    this._q4Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get q4LabelInput() {
    return this._q4Label;
  }

  // q5label - computed: true, optional: true, required: false
  private _q5Label?: string; 
  public get q5Label() {
    return this.getStringAttribute('q5label');
  }
  public set q5Label(value: string) {
    this._q5Label = value;
  }
  public resetQ5Label() {
    this._q5Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get q5LabelInput() {
    return this._q5Label;
  }

  // q6label - computed: true, optional: true, required: false
  private _q6Label?: string; 
  public get q6Label() {
    return this.getStringAttribute('q6label');
  }
  public set q6Label(value: string) {
    this._q6Label = value;
  }
  public resetQ6Label() {
    this._q6Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get q6LabelInput() {
    return this._q6Label;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context: cdktf.stringToTerraform(this._context),
      id: cdktf.stringToTerraform(this._id),
      matchwildcardtoany: cdktf.stringToTerraform(this._matchwildcardtoany),
      q1label: cdktf.stringToTerraform(this._q1Label),
      q2label: cdktf.stringToTerraform(this._q2Label),
      q3label: cdktf.stringToTerraform(this._q3Label),
      q4label: cdktf.stringToTerraform(this._q4Label),
      q5label: cdktf.stringToTerraform(this._q5Label),
      q6label: cdktf.stringToTerraform(this._q6Label),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktf.stringToHclTerraform(this._context),
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
      matchwildcardtoany: {
        value: cdktf.stringToHclTerraform(this._matchwildcardtoany),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      q1label: {
        value: cdktf.stringToHclTerraform(this._q1Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      q2label: {
        value: cdktf.stringToHclTerraform(this._q2Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      q3label: {
        value: cdktf.stringToHclTerraform(this._q3Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      q4label: {
        value: cdktf.stringToHclTerraform(this._q4Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      q5label: {
        value: cdktf.stringToHclTerraform(this._q5Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      q6label: {
        value: cdktf.stringToHclTerraform(this._q6Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
