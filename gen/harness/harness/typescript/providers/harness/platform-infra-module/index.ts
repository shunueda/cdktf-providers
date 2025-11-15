// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformInfraModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timestamp when the module was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#created PlatformInfraModule#created}
  */
  readonly created?: number;
  /**
  * Description of the module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#description PlatformInfraModule#description}
  */
  readonly description?: string;
  /**
  * Unique identifier of the module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#id PlatformInfraModule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#name PlatformInfraModule#name}
  */
  readonly name: string;
  /**
  * For account connectors, the repository where the module can be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#repository PlatformInfraModule#repository}
  */
  readonly repository?: string;
  /**
  * Name of the branch to fetch the code from. This cannot be set if repository commit is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#repository_branch PlatformInfraModule#repository_branch}
  */
  readonly repositoryBranch?: string;
  /**
  * Tag to fetch the code from. This cannot be set if repository branch is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#repository_commit PlatformInfraModule#repository_commit}
  */
  readonly repositoryCommit?: string;
  /**
  * Reference to the connector to be used to fetch the code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#repository_connector PlatformInfraModule#repository_connector}
  */
  readonly repositoryConnector?: string;
  /**
  * Path to the module within the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#repository_path PlatformInfraModule#repository_path}
  */
  readonly repositoryPath?: string;
  /**
  * URL of the repository where the module is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#repository_url PlatformInfraModule#repository_url}
  */
  readonly repositoryUrl?: string;
  /**
  * Timestamp when the module was last synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#synced PlatformInfraModule#synced}
  */
  readonly synced?: number;
  /**
  * Provider of the module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#system PlatformInfraModule#system}
  */
  readonly systemAttribute: string;
  /**
  * Git tags associated with the module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#tags PlatformInfraModule#tags}
  */
  readonly tags?: string;
  /**
  * List of versions of the module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#versions PlatformInfraModule#versions}
  */
  readonly versions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module harness_platform_infra_module}
*/
export class PlatformInfraModule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_infra_module";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformInfraModule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformInfraModule to import
  * @param importFromId The id of the existing PlatformInfraModule that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformInfraModule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_infra_module", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_infra_module harness_platform_infra_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformInfraModuleConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformInfraModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_infra_module',
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
    this._created = config.created;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._repository = config.repository;
    this._repositoryBranch = config.repositoryBranch;
    this._repositoryCommit = config.repositoryCommit;
    this._repositoryConnector = config.repositoryConnector;
    this._repositoryPath = config.repositoryPath;
    this._repositoryUrl = config.repositoryUrl;
    this._synced = config.synced;
    this._system = config.systemAttribute;
    this._tags = config.tags;
    this._versions = config.versions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: true, required: false
  private _created?: number; 
  public get created() {
    return this.getNumberAttribute('created');
  }
  public set created(value: number) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
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

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // repository_branch - computed: false, optional: true, required: false
  private _repositoryBranch?: string; 
  public get repositoryBranch() {
    return this.getStringAttribute('repository_branch');
  }
  public set repositoryBranch(value: string) {
    this._repositoryBranch = value;
  }
  public resetRepositoryBranch() {
    this._repositoryBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryBranchInput() {
    return this._repositoryBranch;
  }

  // repository_commit - computed: false, optional: true, required: false
  private _repositoryCommit?: string; 
  public get repositoryCommit() {
    return this.getStringAttribute('repository_commit');
  }
  public set repositoryCommit(value: string) {
    this._repositoryCommit = value;
  }
  public resetRepositoryCommit() {
    this._repositoryCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCommitInput() {
    return this._repositoryCommit;
  }

  // repository_connector - computed: false, optional: true, required: false
  private _repositoryConnector?: string; 
  public get repositoryConnector() {
    return this.getStringAttribute('repository_connector');
  }
  public set repositoryConnector(value: string) {
    this._repositoryConnector = value;
  }
  public resetRepositoryConnector() {
    this._repositoryConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryConnectorInput() {
    return this._repositoryConnector;
  }

  // repository_path - computed: false, optional: true, required: false
  private _repositoryPath?: string; 
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
  public set repositoryPath(value: string) {
    this._repositoryPath = value;
  }
  public resetRepositoryPath() {
    this._repositoryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPathInput() {
    return this._repositoryPath;
  }

  // repository_url - computed: true, optional: true, required: false
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  public resetRepositoryUrl() {
    this._repositoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }

  // synced - computed: true, optional: true, required: false
  private _synced?: number; 
  public get synced() {
    return this.getNumberAttribute('synced');
  }
  public set synced(value: number) {
    this._synced = value;
  }
  public resetSynced() {
    this._synced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncedInput() {
    return this._synced;
  }

  // system - computed: false, optional: false, required: true
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // versions - computed: true, optional: true, required: false
  private _versions?: string[]; 
  public get versions() {
    return this.getListAttribute('versions');
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created: cdktf.numberToTerraform(this._created),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repository: cdktf.stringToTerraform(this._repository),
      repository_branch: cdktf.stringToTerraform(this._repositoryBranch),
      repository_commit: cdktf.stringToTerraform(this._repositoryCommit),
      repository_connector: cdktf.stringToTerraform(this._repositoryConnector),
      repository_path: cdktf.stringToTerraform(this._repositoryPath),
      repository_url: cdktf.stringToTerraform(this._repositoryUrl),
      synced: cdktf.numberToTerraform(this._synced),
      system: cdktf.stringToTerraform(this._system),
      tags: cdktf.stringToTerraform(this._tags),
      versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._versions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created: {
        value: cdktf.numberToHclTerraform(this._created),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_branch: {
        value: cdktf.stringToHclTerraform(this._repositoryBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_commit: {
        value: cdktf.stringToHclTerraform(this._repositoryCommit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_connector: {
        value: cdktf.stringToHclTerraform(this._repositoryConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_path: {
        value: cdktf.stringToHclTerraform(this._repositoryPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_url: {
        value: cdktf.stringToHclTerraform(this._repositoryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synced: {
        value: cdktf.numberToHclTerraform(this._synced),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system: {
        value: cdktf.stringToHclTerraform(this._system),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._versions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
