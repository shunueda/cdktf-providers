// https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/test_suite_team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TestSuiteTeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access level the team has on the test suite. Either `READ_ONLY` or `MANAGE_AND_READ`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/test_suite_team#access_level TestSuiteTeam#access_level}
  */
  readonly accessLevel: string;
  /**
  * The GraphQL ID of the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/test_suite_team#team_id TestSuiteTeam#team_id}
  */
  readonly teamId: string;
  /**
  * The GraphQL ID of the test suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/test_suite_team#test_suite_id TestSuiteTeam#test_suite_id}
  */
  readonly testSuiteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/test_suite_team buildkite_test_suite_team}
*/
export class TestSuiteTeam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_test_suite_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TestSuiteTeam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TestSuiteTeam to import
  * @param importFromId The id of the existing TestSuiteTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/test_suite_team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TestSuiteTeam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_test_suite_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/test_suite_team buildkite_test_suite_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TestSuiteTeamConfig
  */
  public constructor(scope: Construct, id: string, config: TestSuiteTeamConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_test_suite_team',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.26.0',
        providerVersionConstraint: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevel = config.accessLevel;
    this._teamId = config.teamId;
    this._testSuiteId = config.testSuiteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: false, required: true
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // test_suite_id - computed: false, optional: false, required: true
  private _testSuiteId?: string; 
  public get testSuiteId() {
    return this.getStringAttribute('test_suite_id');
  }
  public set testSuiteId(value: string) {
    this._testSuiteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testSuiteIdInput() {
    return this._testSuiteId;
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
      access_level: cdktf.stringToTerraform(this._accessLevel),
      team_id: cdktf.stringToTerraform(this._teamId),
      test_suite_id: cdktf.stringToTerraform(this._testSuiteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_suite_id: {
        value: cdktf.stringToHclTerraform(this._testSuiteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
