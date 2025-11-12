// https://registry.terraform.io/providers/rhythmictech/errorcheck/3.0.0/docs/resources/is_valid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IsValidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhythmictech/errorcheck/3.0.0/docs/resources/is_valid#id IsValid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhythmictech/errorcheck/3.0.0/docs/resources/is_valid#name IsValid#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhythmictech/errorcheck/3.0.0/docs/resources/is_valid#test IsValid#test}
  */
  readonly test: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/rhythmictech/errorcheck/3.0.0/docs/resources/is_valid errorcheck_is_valid}
*/
export class IsValid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "errorcheck_is_valid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IsValid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IsValid to import
  * @param importFromId The id of the existing IsValid that should be imported. Refer to the {@link https://registry.terraform.io/providers/rhythmictech/errorcheck/3.0.0/docs/resources/is_valid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IsValid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "errorcheck_is_valid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rhythmictech/errorcheck/3.0.0/docs/resources/is_valid errorcheck_is_valid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IsValidConfig
  */
  public constructor(scope: Construct, id: string, config: IsValidConfig) {
    super(scope, id, {
      terraformResourceType: 'errorcheck_is_valid',
      terraformGeneratorMetadata: {
        providerName: 'errorcheck',
        providerVersion: '3.0.0',
        providerVersionConstraint: '3.0.0'
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
    this._name = config.name;
    this._test = config.test;
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

  // test - computed: false, optional: false, required: true
  private _test?: { [key: string]: string }; 
  public get test() {
    return this.getStringMapAttribute('test');
  }
  public set test(value: { [key: string]: string }) {
    this._test = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      test: cdktf.hashMapper(cdktf.stringToTerraform)(this._test),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._test),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
