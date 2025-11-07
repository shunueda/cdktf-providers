// https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs/data-sources/equal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAssertEqualConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list describing the current state. Example: a list of instance ids from a data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs/data-sources/equal#current DataAssertEqual#current}
  */
  readonly current: string[];
  /**
  * A list describing the expected state. Example: a list of instance ids extracted from resources declared in the same workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs/data-sources/equal#expected DataAssertEqual#expected}
  */
  readonly expected: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs/data-sources/equal#id DataAssertEqual#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The error message if the expected != current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs/data-sources/equal#message DataAssertEqual#message}
  */
  readonly message?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs/data-sources/equal assert_equal}
*/
export class DataAssertEqual extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "assert_equal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAssertEqual resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAssertEqual to import
  * @param importFromId The id of the existing DataAssertEqual that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs/data-sources/equal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAssertEqual to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "assert_equal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs/data-sources/equal assert_equal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAssertEqualConfig
  */
  public constructor(scope: Construct, id: string, config: DataAssertEqualConfig) {
    super(scope, id, {
      terraformResourceType: 'assert_equal',
      terraformGeneratorMetadata: {
        providerName: 'assert',
        providerVersion: '0.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._current = config.current;
    this._expected = config.expected;
    this._id = config.id;
    this._message = config.message;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current - computed: false, optional: false, required: true
  private _current?: string[]; 
  public get current() {
    return this.getListAttribute('current');
  }
  public set current(value: string[]) {
    this._current = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currentInput() {
    return this._current;
  }

  // expected - computed: false, optional: false, required: true
  private _expected?: string[]; 
  public get expected() {
    return this.getListAttribute('expected');
  }
  public set expected(value: string[]) {
    this._expected = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedInput() {
    return this._expected;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      current: cdktf.listMapper(cdktf.stringToTerraform, false)(this._current),
      expected: cdktf.listMapper(cdktf.stringToTerraform, false)(this._expected),
      id: cdktf.stringToTerraform(this._id),
      message: cdktf.stringToTerraform(this._message),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      current: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._current),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      expected: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._expected),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
