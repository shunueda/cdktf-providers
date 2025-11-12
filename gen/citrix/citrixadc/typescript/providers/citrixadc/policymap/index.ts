// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policymap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicymapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policymap#id Policymap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policymap#mappolicyname Policymap#mappolicyname}
  */
  readonly mappolicyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policymap#sd Policymap#sd}
  */
  readonly sd: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policymap#su Policymap#su}
  */
  readonly su?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policymap#td Policymap#td}
  */
  readonly td: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policymap#tu Policymap#tu}
  */
  readonly tu?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policymap citrixadc_policymap}
*/
export class Policymap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_policymap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policymap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policymap to import
  * @param importFromId The id of the existing Policymap that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policymap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policymap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_policymap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/policymap citrixadc_policymap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicymapConfig
  */
  public constructor(scope: Construct, id: string, config: PolicymapConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_policymap',
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
    this._id = config.id;
    this._mappolicyname = config.mappolicyname;
    this._sd = config.sd;
    this._su = config.su;
    this._td = config.td;
    this._tu = config.tu;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mappolicyname - computed: false, optional: false, required: true
  private _mappolicyname?: string; 
  public get mappolicyname() {
    return this.getStringAttribute('mappolicyname');
  }
  public set mappolicyname(value: string) {
    this._mappolicyname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappolicynameInput() {
    return this._mappolicyname;
  }

  // sd - computed: false, optional: false, required: true
  private _sd?: string; 
  public get sd() {
    return this.getStringAttribute('sd');
  }
  public set sd(value: string) {
    this._sd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sdInput() {
    return this._sd;
  }

  // su - computed: true, optional: true, required: false
  private _su?: string; 
  public get su() {
    return this.getStringAttribute('su');
  }
  public set su(value: string) {
    this._su = value;
  }
  public resetSu() {
    this._su = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suInput() {
    return this._su;
  }

  // td - computed: false, optional: false, required: true
  private _td?: string; 
  public get td() {
    return this.getStringAttribute('td');
  }
  public set td(value: string) {
    this._td = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // tu - computed: true, optional: true, required: false
  private _tu?: string; 
  public get tu() {
    return this.getStringAttribute('tu');
  }
  public set tu(value: string) {
    this._tu = value;
  }
  public resetTu() {
    this._tu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuInput() {
    return this._tu;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mappolicyname: cdktf.stringToTerraform(this._mappolicyname),
      sd: cdktf.stringToTerraform(this._sd),
      su: cdktf.stringToTerraform(this._su),
      td: cdktf.stringToTerraform(this._td),
      tu: cdktf.stringToTerraform(this._tu),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappolicyname: {
        value: cdktf.stringToHclTerraform(this._mappolicyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sd: {
        value: cdktf.stringToHclTerraform(this._sd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      su: {
        value: cdktf.stringToHclTerraform(this._su),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.stringToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tu: {
        value: cdktf.stringToHclTerraform(this._tu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
