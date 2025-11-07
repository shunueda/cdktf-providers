// https://registry.terraform.io/providers/bwoznicki/assert/0.0.1/docs/data-sources/test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAssertTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bwoznicki/assert/0.0.1/docs/data-sources/test#id DataAssertTest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bwoznicki/assert/0.0.1/docs/data-sources/test#test DataAssertTest#test}
  */
  readonly test: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bwoznicki/assert/0.0.1/docs/data-sources/test#throw DataAssertTest#throw}
  */
  readonly throw: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bwoznicki/assert/0.0.1/docs/data-sources/test assert_test}
*/
export class DataAssertTest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "assert_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAssertTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAssertTest to import
  * @param importFromId The id of the existing DataAssertTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/bwoznicki/assert/0.0.1/docs/data-sources/test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAssertTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "assert_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bwoznicki/assert/0.0.1/docs/data-sources/test assert_test} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAssertTestConfig
  */
  public constructor(scope: Construct, id: string, config: DataAssertTestConfig) {
    super(scope, id, {
      terraformResourceType: 'assert_test',
      terraformGeneratorMetadata: {
        providerName: 'assert',
        providerVersion: '0.0.1'
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
    this._test = config.test;
    this._throw = config.throw;
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

  // test - computed: false, optional: false, required: true
  private _test?: boolean | cdktf.IResolvable; 
  public get test() {
    return this.getBooleanAttribute('test');
  }
  public set test(value: boolean | cdktf.IResolvable) {
    this._test = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test;
  }

  // throw - computed: false, optional: false, required: true
  private _throw?: string; 
  public get throw() {
    return this.getStringAttribute('throw');
  }
  public set throw(value: string) {
    this._throw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throwInput() {
    return this._throw;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      test: cdktf.booleanToTerraform(this._test),
      throw: cdktf.stringToTerraform(this._throw),
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
      test: {
        value: cdktf.booleanToHclTerraform(this._test),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      throw: {
        value: cdktf.stringToHclTerraform(this._throw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
