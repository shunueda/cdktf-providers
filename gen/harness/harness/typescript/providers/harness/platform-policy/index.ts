// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#description PlatformPolicy#description}
  */
  readonly description?: string;
  /**
  * Base branch for the new git branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#git_base_branch PlatformPolicy#git_base_branch}
  */
  readonly gitBaseBranch?: string;
  /**
  * Git branch for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#git_branch PlatformPolicy#git_branch}
  */
  readonly gitBranch?: string;
  /**
  * Git commit message for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#git_commit_msg PlatformPolicy#git_commit_msg}
  */
  readonly gitCommitMsg?: string;
  /**
  * The existing commit sha of the file being updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#git_commit_sha PlatformPolicy#git_commit_sha}
  */
  readonly gitCommitSha?: string;
  /**
  * Git connector reference for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#git_connector_ref PlatformPolicy#git_connector_ref}
  */
  readonly gitConnectorRef?: string;
  /**
  * The existing file id of the file being updated, not required for bitbucket files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#git_file_id PlatformPolicy#git_file_id}
  */
  readonly gitFileId?: string;
  /**
  * Flag to import the policy from git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#git_import PlatformPolicy#git_import}
  */
  readonly gitImport?: boolean | cdktf.IResolvable;
  /**
  * Flag to create a new branch for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#git_is_new_branch PlatformPolicy#git_is_new_branch}
  */
  readonly gitIsNewBranch?: boolean | cdktf.IResolvable;
  /**
  * Git path for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#git_path PlatformPolicy#git_path}
  */
  readonly gitPath?: string;
  /**
  * Git repository for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#git_repo PlatformPolicy#git_repo}
  */
  readonly gitRepo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#id PlatformPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#identifier PlatformPolicy#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#name PlatformPolicy#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#org_id PlatformPolicy#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#project_id PlatformPolicy#project_id}
  */
  readonly projectId?: string;
  /**
  * Rego code for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#rego PlatformPolicy#rego}
  */
  readonly rego: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#tags PlatformPolicy#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy harness_platform_policy}
*/
export class PlatformPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformPolicy to import
  * @param importFromId The id of the existing PlatformPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_policy harness_platform_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_policy',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._gitBaseBranch = config.gitBaseBranch;
    this._gitBranch = config.gitBranch;
    this._gitCommitMsg = config.gitCommitMsg;
    this._gitCommitSha = config.gitCommitSha;
    this._gitConnectorRef = config.gitConnectorRef;
    this._gitFileId = config.gitFileId;
    this._gitImport = config.gitImport;
    this._gitIsNewBranch = config.gitIsNewBranch;
    this._gitPath = config.gitPath;
    this._gitRepo = config.gitRepo;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._rego = config.rego;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // git_base_branch - computed: false, optional: true, required: false
  private _gitBaseBranch?: string; 
  public get gitBaseBranch() {
    return this.getStringAttribute('git_base_branch');
  }
  public set gitBaseBranch(value: string) {
    this._gitBaseBranch = value;
  }
  public resetGitBaseBranch() {
    this._gitBaseBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitBaseBranchInput() {
    return this._gitBaseBranch;
  }

  // git_branch - computed: false, optional: true, required: false
  private _gitBranch?: string; 
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }
  public set gitBranch(value: string) {
    this._gitBranch = value;
  }
  public resetGitBranch() {
    this._gitBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitBranchInput() {
    return this._gitBranch;
  }

  // git_commit_msg - computed: false, optional: true, required: false
  private _gitCommitMsg?: string; 
  public get gitCommitMsg() {
    return this.getStringAttribute('git_commit_msg');
  }
  public set gitCommitMsg(value: string) {
    this._gitCommitMsg = value;
  }
  public resetGitCommitMsg() {
    this._gitCommitMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCommitMsgInput() {
    return this._gitCommitMsg;
  }

  // git_commit_sha - computed: true, optional: true, required: false
  private _gitCommitSha?: string; 
  public get gitCommitSha() {
    return this.getStringAttribute('git_commit_sha');
  }
  public set gitCommitSha(value: string) {
    this._gitCommitSha = value;
  }
  public resetGitCommitSha() {
    this._gitCommitSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCommitShaInput() {
    return this._gitCommitSha;
  }

  // git_connector_ref - computed: false, optional: true, required: false
  private _gitConnectorRef?: string; 
  public get gitConnectorRef() {
    return this.getStringAttribute('git_connector_ref');
  }
  public set gitConnectorRef(value: string) {
    this._gitConnectorRef = value;
  }
  public resetGitConnectorRef() {
    this._gitConnectorRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitConnectorRefInput() {
    return this._gitConnectorRef;
  }

  // git_file_id - computed: true, optional: true, required: false
  private _gitFileId?: string; 
  public get gitFileId() {
    return this.getStringAttribute('git_file_id');
  }
  public set gitFileId(value: string) {
    this._gitFileId = value;
  }
  public resetGitFileId() {
    this._gitFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitFileIdInput() {
    return this._gitFileId;
  }

  // git_import - computed: false, optional: true, required: false
  private _gitImport?: boolean | cdktf.IResolvable; 
  public get gitImport() {
    return this.getBooleanAttribute('git_import');
  }
  public set gitImport(value: boolean | cdktf.IResolvable) {
    this._gitImport = value;
  }
  public resetGitImport() {
    this._gitImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitImportInput() {
    return this._gitImport;
  }

  // git_is_new_branch - computed: false, optional: true, required: false
  private _gitIsNewBranch?: boolean | cdktf.IResolvable; 
  public get gitIsNewBranch() {
    return this.getBooleanAttribute('git_is_new_branch');
  }
  public set gitIsNewBranch(value: boolean | cdktf.IResolvable) {
    this._gitIsNewBranch = value;
  }
  public resetGitIsNewBranch() {
    this._gitIsNewBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitIsNewBranchInput() {
    return this._gitIsNewBranch;
  }

  // git_path - computed: false, optional: true, required: false
  private _gitPath?: string; 
  public get gitPath() {
    return this.getStringAttribute('git_path');
  }
  public set gitPath(value: string) {
    this._gitPath = value;
  }
  public resetGitPath() {
    this._gitPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitPathInput() {
    return this._gitPath;
  }

  // git_repo - computed: false, optional: true, required: false
  private _gitRepo?: string; 
  public get gitRepo() {
    return this.getStringAttribute('git_repo');
  }
  public set gitRepo(value: string) {
    this._gitRepo = value;
  }
  public resetGitRepo() {
    this._gitRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // rego - computed: false, optional: false, required: true
  private _rego?: string; 
  public get rego() {
    return this.getStringAttribute('rego');
  }
  public set rego(value: string) {
    this._rego = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regoInput() {
    return this._rego;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      git_base_branch: cdktf.stringToTerraform(this._gitBaseBranch),
      git_branch: cdktf.stringToTerraform(this._gitBranch),
      git_commit_msg: cdktf.stringToTerraform(this._gitCommitMsg),
      git_commit_sha: cdktf.stringToTerraform(this._gitCommitSha),
      git_connector_ref: cdktf.stringToTerraform(this._gitConnectorRef),
      git_file_id: cdktf.stringToTerraform(this._gitFileId),
      git_import: cdktf.booleanToTerraform(this._gitImport),
      git_is_new_branch: cdktf.booleanToTerraform(this._gitIsNewBranch),
      git_path: cdktf.stringToTerraform(this._gitPath),
      git_repo: cdktf.stringToTerraform(this._gitRepo),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      rego: cdktf.stringToTerraform(this._rego),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_base_branch: {
        value: cdktf.stringToHclTerraform(this._gitBaseBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_branch: {
        value: cdktf.stringToHclTerraform(this._gitBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_commit_msg: {
        value: cdktf.stringToHclTerraform(this._gitCommitMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_commit_sha: {
        value: cdktf.stringToHclTerraform(this._gitCommitSha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_connector_ref: {
        value: cdktf.stringToHclTerraform(this._gitConnectorRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_file_id: {
        value: cdktf.stringToHclTerraform(this._gitFileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_import: {
        value: cdktf.booleanToHclTerraform(this._gitImport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      git_is_new_branch: {
        value: cdktf.booleanToHclTerraform(this._gitIsNewBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      git_path: {
        value: cdktf.stringToHclTerraform(this._gitPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_repo: {
        value: cdktf.stringToHclTerraform(this._gitRepo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rego: {
        value: cdktf.stringToHclTerraform(this._rego),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
