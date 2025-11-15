// https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualComposerRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the virtual repository should search through remote repositories when trying to resolve an artifact requested by another Artifactory instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository#artifactory_requests_can_retrieve_remote_artifacts VirtualComposerRepository#artifactory_requests_can_retrieve_remote_artifacts}
  */
  readonly artifactoryRequestsCanRetrieveRemoteArtifacts?: boolean | cdktf.IResolvable;
  /**
  * Default repository to deploy artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository#default_deployment_repo VirtualComposerRepository#default_deployment_repo}
  */
  readonly defaultDeploymentRepo?: string;
  /**
  * Public description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository#description VirtualComposerRepository#description}
  */
  readonly description?: string;
  /**
  * List of artifact patterns to exclude when evaluating artifact requests, in the form of `x/y/** /z/*`.By default no artifacts are excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository#excludes_pattern VirtualComposerRepository#excludes_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly excludesPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository#id VirtualComposerRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of comma-separated artifact patterns to include when evaluating artifact requests in the form of `x/y/** /z/*`. When used, only artifacts matching one of the include patterns are served. By default, all artifacts are included (`** /*`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository#includes_pattern VirtualComposerRepository#includes_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly includesPattern?: string;
  /**
  * A mandatory identifier for the repository that must be unique. Must be 1 - 64 alphanumeric and hyphen characters. It cannot contain spaces or special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository#key VirtualComposerRepository#key}
  */
  readonly key: string;
  /**
  * Internal description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository#notes VirtualComposerRepository#notes}
  */
  readonly notes?: string;
  /**
  * Before Artifactory 7.53.1, up to 2 values (`DEV` and `PROD`) are allowed. From 7.53.1 to 7.107.1, only one value is allowed. From 7.107.1, multiple values are allowed.The attribute should only be used if the repository is already assigned to the existing project. If not, the attribute will be ignored by Artifactory, but will remain in the Terraform state, which will create state drift during the update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository#project_environments VirtualComposerRepository#project_environments}
  */
  readonly projectEnvironments?: string[];
  /**
  * Project key for assigning this repository to. Must be 2 - 32 lowercase alphanumeric and hyphen characters. When assigning repository to a project, repository key must be prefixed with project key, separated by a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository#project_key VirtualComposerRepository#project_key}
  */
  readonly projectKey?: string;
  /**
  * Repository layout key for the virtual repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository#repo_layout_ref VirtualComposerRepository#repo_layout_ref}
  */
  readonly repoLayoutRef?: string;
  /**
  * The effective list of actual repositories included in this virtual repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository#repositories VirtualComposerRepository#repositories}
  */
  readonly repositories?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository artifactory_virtual_composer_repository}
*/
export class VirtualComposerRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_virtual_composer_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualComposerRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualComposerRepository to import
  * @param importFromId The id of the existing VirtualComposerRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualComposerRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_virtual_composer_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/virtual_composer_repository artifactory_virtual_composer_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualComposerRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualComposerRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_virtual_composer_repository',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.0',
        providerVersionConstraint: '12.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactoryRequestsCanRetrieveRemoteArtifacts = config.artifactoryRequestsCanRetrieveRemoteArtifacts;
    this._defaultDeploymentRepo = config.defaultDeploymentRepo;
    this._description = config.description;
    this._excludesPattern = config.excludesPattern;
    this._id = config.id;
    this._includesPattern = config.includesPattern;
    this._key = config.key;
    this._notes = config.notes;
    this._projectEnvironments = config.projectEnvironments;
    this._projectKey = config.projectKey;
    this._repoLayoutRef = config.repoLayoutRef;
    this._repositories = config.repositories;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifactory_requests_can_retrieve_remote_artifacts - computed: false, optional: true, required: false
  private _artifactoryRequestsCanRetrieveRemoteArtifacts?: boolean | cdktf.IResolvable; 
  public get artifactoryRequestsCanRetrieveRemoteArtifacts() {
    return this.getBooleanAttribute('artifactory_requests_can_retrieve_remote_artifacts');
  }
  public set artifactoryRequestsCanRetrieveRemoteArtifacts(value: boolean | cdktf.IResolvable) {
    this._artifactoryRequestsCanRetrieveRemoteArtifacts = value;
  }
  public resetArtifactoryRequestsCanRetrieveRemoteArtifacts() {
    this._artifactoryRequestsCanRetrieveRemoteArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactoryRequestsCanRetrieveRemoteArtifactsInput() {
    return this._artifactoryRequestsCanRetrieveRemoteArtifacts;
  }

  // default_deployment_repo - computed: false, optional: true, required: false
  private _defaultDeploymentRepo?: string; 
  public get defaultDeploymentRepo() {
    return this.getStringAttribute('default_deployment_repo');
  }
  public set defaultDeploymentRepo(value: string) {
    this._defaultDeploymentRepo = value;
  }
  public resetDefaultDeploymentRepo() {
    this._defaultDeploymentRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDeploymentRepoInput() {
    return this._defaultDeploymentRepo;
  }

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

  // excludes_pattern - computed: false, optional: true, required: false
  private _excludesPattern?: string; 
  public get excludesPattern() {
    return this.getStringAttribute('excludes_pattern');
  }
  public set excludesPattern(value: string) {
    this._excludesPattern = value;
  }
  public resetExcludesPattern() {
    this._excludesPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesPatternInput() {
    return this._excludesPattern;
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

  // includes_pattern - computed: false, optional: true, required: false
  private _includesPattern?: string; 
  public get includesPattern() {
    return this.getStringAttribute('includes_pattern');
  }
  public set includesPattern(value: string) {
    this._includesPattern = value;
  }
  public resetIncludesPattern() {
    this._includesPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesPatternInput() {
    return this._includesPattern;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // project_environments - computed: true, optional: true, required: false
  private _projectEnvironments?: string[]; 
  public get projectEnvironments() {
    return cdktf.Fn.tolist(this.getListAttribute('project_environments'));
  }
  public set projectEnvironments(value: string[]) {
    this._projectEnvironments = value;
  }
  public resetProjectEnvironments() {
    this._projectEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectEnvironmentsInput() {
    return this._projectEnvironments;
  }

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // repo_layout_ref - computed: false, optional: true, required: false
  private _repoLayoutRef?: string; 
  public get repoLayoutRef() {
    return this.getStringAttribute('repo_layout_ref');
  }
  public set repoLayoutRef(value: string) {
    this._repoLayoutRef = value;
  }
  public resetRepoLayoutRef() {
    this._repoLayoutRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoLayoutRefInput() {
    return this._repoLayoutRef;
  }

  // repositories - computed: false, optional: true, required: false
  private _repositories?: string[]; 
  public get repositories() {
    return this.getListAttribute('repositories');
  }
  public set repositories(value: string[]) {
    this._repositories = value;
  }
  public resetRepositories() {
    this._repositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifactory_requests_can_retrieve_remote_artifacts: cdktf.booleanToTerraform(this._artifactoryRequestsCanRetrieveRemoteArtifacts),
      default_deployment_repo: cdktf.stringToTerraform(this._defaultDeploymentRepo),
      description: cdktf.stringToTerraform(this._description),
      excludes_pattern: cdktf.stringToTerraform(this._excludesPattern),
      id: cdktf.stringToTerraform(this._id),
      includes_pattern: cdktf.stringToTerraform(this._includesPattern),
      key: cdktf.stringToTerraform(this._key),
      notes: cdktf.stringToTerraform(this._notes),
      project_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectEnvironments),
      project_key: cdktf.stringToTerraform(this._projectKey),
      repo_layout_ref: cdktf.stringToTerraform(this._repoLayoutRef),
      repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repositories),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifactory_requests_can_retrieve_remote_artifacts: {
        value: cdktf.booleanToHclTerraform(this._artifactoryRequestsCanRetrieveRemoteArtifacts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_deployment_repo: {
        value: cdktf.stringToHclTerraform(this._defaultDeploymentRepo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excludes_pattern: {
        value: cdktf.stringToHclTerraform(this._excludesPattern),
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
      includes_pattern: {
        value: cdktf.stringToHclTerraform(this._includesPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectEnvironments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_layout_ref: {
        value: cdktf.stringToHclTerraform(this._repoLayoutRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repositories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repositories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
