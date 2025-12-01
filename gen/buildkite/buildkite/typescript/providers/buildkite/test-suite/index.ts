// https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/test_suite
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TestSuiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default branch for the repository this test suite is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/test_suite#default_branch TestSuite#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * The emoji associated with this test suite, eg :buildkite:
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/test_suite#emoji TestSuite#emoji}
  */
  readonly emoji?: string;
  /**
  * The name to give the test suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/test_suite#name TestSuite#name}
  */
  readonly name: string;
  /**
  * The GraphQL ID of the team to mark as the owner/admin of the test suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/test_suite#team_owner_id TestSuite#team_owner_id}
  */
  readonly teamOwnerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/test_suite buildkite_test_suite}
*/
export class TestSuite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_test_suite";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TestSuite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TestSuite to import
  * @param importFromId The id of the existing TestSuite that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/test_suite#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TestSuite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_test_suite", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/test_suite buildkite_test_suite} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TestSuiteConfig
  */
  public constructor(scope: Construct, id: string, config: TestSuiteConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_test_suite',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.27.1',
        providerVersionConstraint: '1.27.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultBranch = config.defaultBranch;
    this._emoji = config.emoji;
    this._name = config.name;
    this._teamOwnerId = config.teamOwnerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: true, optional: false, required: false
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }

  // default_branch - computed: false, optional: false, required: true
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
  }

  // emoji - computed: false, optional: true, required: false
  private _emoji?: string; 
  public get emoji() {
    return this.getStringAttribute('emoji');
  }
  public set emoji(value: string) {
    this._emoji = value;
  }
  public resetEmoji() {
    this._emoji = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emojiInput() {
    return this._emoji;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // team_owner_id - computed: false, optional: false, required: true
  private _teamOwnerId?: string; 
  public get teamOwnerId() {
    return this.getStringAttribute('team_owner_id');
  }
  public set teamOwnerId(value: string) {
    this._teamOwnerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamOwnerIdInput() {
    return this._teamOwnerId;
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
      default_branch: cdktf.stringToTerraform(this._defaultBranch),
      emoji: cdktf.stringToTerraform(this._emoji),
      name: cdktf.stringToTerraform(this._name),
      team_owner_id: cdktf.stringToTerraform(this._teamOwnerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_branch: {
        value: cdktf.stringToHclTerraform(this._defaultBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emoji: {
        value: cdktf.stringToHclTerraform(this._emoji),
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
      team_owner_id: {
        value: cdktf.stringToHclTerraform(this._teamOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
