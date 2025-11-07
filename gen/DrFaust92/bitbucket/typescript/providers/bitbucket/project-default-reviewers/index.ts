// https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_default_reviewers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectDefaultReviewersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_default_reviewers#id ProjectDefaultReviewers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_default_reviewers#project ProjectDefaultReviewers#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_default_reviewers#reviewers ProjectDefaultReviewers#reviewers}
  */
  readonly reviewers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_default_reviewers#workspace ProjectDefaultReviewers#workspace}
  */
  readonly workspace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_default_reviewers bitbucket_project_default_reviewers}
*/
export class ProjectDefaultReviewers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitbucket_project_default_reviewers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectDefaultReviewers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectDefaultReviewers to import
  * @param importFromId The id of the existing ProjectDefaultReviewers that should be imported. Refer to the {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_default_reviewers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectDefaultReviewers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitbucket_project_default_reviewers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_default_reviewers bitbucket_project_default_reviewers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectDefaultReviewersConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectDefaultReviewersConfig) {
    super(scope, id, {
      terraformResourceType: 'bitbucket_project_default_reviewers',
      terraformGeneratorMetadata: {
        providerName: 'bitbucket',
        providerVersion: '2.50.0'
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
    this._project = config.project;
    this._reviewers = config.reviewers;
    this._workspace = config.workspace;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // reviewers - computed: false, optional: false, required: true
  private _reviewers?: string[]; 
  public get reviewers() {
    return cdktf.Fn.tolist(this.getListAttribute('reviewers'));
  }
  public set reviewers(value: string[]) {
    this._reviewers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewersInput() {
    return this._reviewers;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      reviewers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reviewers),
      workspace: cdktf.stringToTerraform(this._workspace),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reviewers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reviewers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
