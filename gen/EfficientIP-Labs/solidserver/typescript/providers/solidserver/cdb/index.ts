// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb#id Cdb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the label 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb#label1 Cdb#label1}
  */
  readonly label1?: string;
  /**
  * The name of the label 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb#label10 Cdb#label10}
  */
  readonly label10?: string;
  /**
  * The name of the label 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb#label2 Cdb#label2}
  */
  readonly label2?: string;
  /**
  * The name of the label 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb#label3 Cdb#label3}
  */
  readonly label3?: string;
  /**
  * The name of the label 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb#label4 Cdb#label4}
  */
  readonly label4?: string;
  /**
  * The name of the label 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb#label5 Cdb#label5}
  */
  readonly label5?: string;
  /**
  * The name of the label 6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb#label6 Cdb#label6}
  */
  readonly label6?: string;
  /**
  * The name of the label 7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb#label7 Cdb#label7}
  */
  readonly label7?: string;
  /**
  * The name of the label 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb#label8 Cdb#label8}
  */
  readonly label8?: string;
  /**
  * The name of the label 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb#label9 Cdb#label9}
  */
  readonly label9?: string;
  /**
  * The name of the custom DB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb#name Cdb#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb solidserver_cdb}
*/
export class Cdb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_cdb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cdb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cdb to import
  * @param importFromId The id of the existing Cdb that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cdb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_cdb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/cdb solidserver_cdb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdbConfig
  */
  public constructor(scope: Construct, id: string, config: CdbConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_cdb',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.26',
        providerVersionConstraint: '1.1.26'
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
    this._label1 = config.label1;
    this._label10 = config.label10;
    this._label2 = config.label2;
    this._label3 = config.label3;
    this._label4 = config.label4;
    this._label5 = config.label5;
    this._label6 = config.label6;
    this._label7 = config.label7;
    this._label8 = config.label8;
    this._label9 = config.label9;
    this._name = config.name;
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

  // label1 - computed: false, optional: true, required: false
  private _label1?: string; 
  public get label1() {
    return this.getStringAttribute('label1');
  }
  public set label1(value: string) {
    this._label1 = value;
  }
  public resetLabel1() {
    this._label1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get label1Input() {
    return this._label1;
  }

  // label10 - computed: false, optional: true, required: false
  private _label10?: string; 
  public get label10() {
    return this.getStringAttribute('label10');
  }
  public set label10(value: string) {
    this._label10 = value;
  }
  public resetLabel10() {
    this._label10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get label10Input() {
    return this._label10;
  }

  // label2 - computed: false, optional: true, required: false
  private _label2?: string; 
  public get label2() {
    return this.getStringAttribute('label2');
  }
  public set label2(value: string) {
    this._label2 = value;
  }
  public resetLabel2() {
    this._label2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get label2Input() {
    return this._label2;
  }

  // label3 - computed: false, optional: true, required: false
  private _label3?: string; 
  public get label3() {
    return this.getStringAttribute('label3');
  }
  public set label3(value: string) {
    this._label3 = value;
  }
  public resetLabel3() {
    this._label3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get label3Input() {
    return this._label3;
  }

  // label4 - computed: false, optional: true, required: false
  private _label4?: string; 
  public get label4() {
    return this.getStringAttribute('label4');
  }
  public set label4(value: string) {
    this._label4 = value;
  }
  public resetLabel4() {
    this._label4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get label4Input() {
    return this._label4;
  }

  // label5 - computed: false, optional: true, required: false
  private _label5?: string; 
  public get label5() {
    return this.getStringAttribute('label5');
  }
  public set label5(value: string) {
    this._label5 = value;
  }
  public resetLabel5() {
    this._label5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get label5Input() {
    return this._label5;
  }

  // label6 - computed: false, optional: true, required: false
  private _label6?: string; 
  public get label6() {
    return this.getStringAttribute('label6');
  }
  public set label6(value: string) {
    this._label6 = value;
  }
  public resetLabel6() {
    this._label6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get label6Input() {
    return this._label6;
  }

  // label7 - computed: false, optional: true, required: false
  private _label7?: string; 
  public get label7() {
    return this.getStringAttribute('label7');
  }
  public set label7(value: string) {
    this._label7 = value;
  }
  public resetLabel7() {
    this._label7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get label7Input() {
    return this._label7;
  }

  // label8 - computed: false, optional: true, required: false
  private _label8?: string; 
  public get label8() {
    return this.getStringAttribute('label8');
  }
  public set label8(value: string) {
    this._label8 = value;
  }
  public resetLabel8() {
    this._label8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get label8Input() {
    return this._label8;
  }

  // label9 - computed: false, optional: true, required: false
  private _label9?: string; 
  public get label9() {
    return this.getStringAttribute('label9');
  }
  public set label9(value: string) {
    this._label9 = value;
  }
  public resetLabel9() {
    this._label9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get label9Input() {
    return this._label9;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      label1: cdktf.stringToTerraform(this._label1),
      label10: cdktf.stringToTerraform(this._label10),
      label2: cdktf.stringToTerraform(this._label2),
      label3: cdktf.stringToTerraform(this._label3),
      label4: cdktf.stringToTerraform(this._label4),
      label5: cdktf.stringToTerraform(this._label5),
      label6: cdktf.stringToTerraform(this._label6),
      label7: cdktf.stringToTerraform(this._label7),
      label8: cdktf.stringToTerraform(this._label8),
      label9: cdktf.stringToTerraform(this._label9),
      name: cdktf.stringToTerraform(this._name),
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
      label1: {
        value: cdktf.stringToHclTerraform(this._label1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label10: {
        value: cdktf.stringToHclTerraform(this._label10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label2: {
        value: cdktf.stringToHclTerraform(this._label2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label3: {
        value: cdktf.stringToHclTerraform(this._label3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label4: {
        value: cdktf.stringToHclTerraform(this._label4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label5: {
        value: cdktf.stringToHclTerraform(this._label5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label6: {
        value: cdktf.stringToHclTerraform(this._label6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label7: {
        value: cdktf.stringToHclTerraform(this._label7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label8: {
        value: cdktf.stringToHclTerraform(this._label8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label9: {
        value: cdktf.stringToHclTerraform(this._label9),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
