// https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/data-sources/test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKestraTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Test namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/data-sources/test#namespace DataKestraTest#namespace}
  */
  readonly namespace: string;
  /**
  * The Test id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/data-sources/test#test_id DataKestraTest#test_id}
  */
  readonly testId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/data-sources/test kestra_test}
*/
export class DataKestraTest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kestra_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKestraTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKestraTest to import
  * @param importFromId The id of the existing DataKestraTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/data-sources/test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKestraTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kestra_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/data-sources/test kestra_test} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKestraTestConfig
  */
  public constructor(scope: Construct, id: string, config: DataKestraTestConfig) {
    super(scope, id, {
      terraformResourceType: 'kestra_test',
      terraformGeneratorMetadata: {
        providerName: 'kestra',
        providerVersion: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._namespace = config.namespace;
    this._testId = config.testId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // test_id - computed: false, optional: false, required: true
  private _testId?: string; 
  public get testId() {
    return this.getStringAttribute('test_id');
  }
  public set testId(value: string) {
    this._testId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testIdInput() {
    return this._testId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      namespace: cdktf.stringToTerraform(this._namespace),
      test_id: cdktf.stringToTerraform(this._testId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_id: {
        value: cdktf.stringToHclTerraform(this._testId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
