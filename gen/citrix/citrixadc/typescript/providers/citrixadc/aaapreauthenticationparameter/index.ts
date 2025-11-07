// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaapreauthenticationparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationparameter#deletefiles Aaapreauthenticationparameter#deletefiles}
  */
  readonly deletefiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationparameter#id Aaapreauthenticationparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationparameter#killprocess Aaapreauthenticationparameter#killprocess}
  */
  readonly killprocess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationparameter#preauthenticationaction Aaapreauthenticationparameter#preauthenticationaction}
  */
  readonly preauthenticationaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationparameter#rule Aaapreauthenticationparameter#rule}
  */
  readonly rule?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationparameter citrixadc_aaapreauthenticationparameter}
*/
export class Aaapreauthenticationparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_aaapreauthenticationparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Aaapreauthenticationparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Aaapreauthenticationparameter to import
  * @param importFromId The id of the existing Aaapreauthenticationparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Aaapreauthenticationparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_aaapreauthenticationparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationparameter citrixadc_aaapreauthenticationparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaapreauthenticationparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AaapreauthenticationparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_aaapreauthenticationparameter',
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
    this._deletefiles = config.deletefiles;
    this._id = config.id;
    this._killprocess = config.killprocess;
    this._preauthenticationaction = config.preauthenticationaction;
    this._rule = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletefiles - computed: true, optional: true, required: false
  private _deletefiles?: string; 
  public get deletefiles() {
    return this.getStringAttribute('deletefiles');
  }
  public set deletefiles(value: string) {
    this._deletefiles = value;
  }
  public resetDeletefiles() {
    this._deletefiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletefilesInput() {
    return this._deletefiles;
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

  // killprocess - computed: true, optional: true, required: false
  private _killprocess?: string; 
  public get killprocess() {
    return this.getStringAttribute('killprocess');
  }
  public set killprocess(value: string) {
    this._killprocess = value;
  }
  public resetKillprocess() {
    this._killprocess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get killprocessInput() {
    return this._killprocess;
  }

  // preauthenticationaction - computed: true, optional: true, required: false
  private _preauthenticationaction?: string; 
  public get preauthenticationaction() {
    return this.getStringAttribute('preauthenticationaction');
  }
  public set preauthenticationaction(value: string) {
    this._preauthenticationaction = value;
  }
  public resetPreauthenticationaction() {
    this._preauthenticationaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preauthenticationactionInput() {
    return this._preauthenticationaction;
  }

  // rule - computed: true, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletefiles: cdktf.stringToTerraform(this._deletefiles),
      id: cdktf.stringToTerraform(this._id),
      killprocess: cdktf.stringToTerraform(this._killprocess),
      preauthenticationaction: cdktf.stringToTerraform(this._preauthenticationaction),
      rule: cdktf.stringToTerraform(this._rule),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletefiles: {
        value: cdktf.stringToHclTerraform(this._deletefiles),
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
      killprocess: {
        value: cdktf.stringToHclTerraform(this._killprocess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preauthenticationaction: {
        value: cdktf.stringToHclTerraform(this._preauthenticationaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
