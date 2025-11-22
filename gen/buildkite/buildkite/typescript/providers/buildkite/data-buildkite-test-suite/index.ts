// https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/data-sources/test_suite
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBuildkiteTestSuiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The generated slug of the test suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/data-sources/test_suite#slug DataBuildkiteTestSuite#slug}
  */
  readonly slug: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/data-sources/test_suite buildkite_test_suite}
*/
export class DataBuildkiteTestSuite extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_test_suite";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBuildkiteTestSuite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBuildkiteTestSuite to import
  * @param importFromId The id of the existing DataBuildkiteTestSuite that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/data-sources/test_suite#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBuildkiteTestSuite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_test_suite", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/data-sources/test_suite buildkite_test_suite} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBuildkiteTestSuiteConfig
  */
  public constructor(scope: Construct, id: string, config: DataBuildkiteTestSuiteConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_test_suite',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.27.0',
        providerVersionConstraint: '1.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_branch - computed: true, optional: false, required: false
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
