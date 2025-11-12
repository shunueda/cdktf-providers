// https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GitApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application#catalog GitApplication#catalog}
  */
  readonly catalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application#fixed_kustomization GitApplication#fixed_kustomization}
  */
  readonly fixedKustomization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application#git_branch GitApplication#git_branch}
  */
  readonly gitBranch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application#git_credentials GitApplication#git_credentials}
  */
  readonly gitCredentials: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application#git_directory_list GitApplication#git_directory_list}
  */
  readonly gitDirectoryList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application#git_include_list GitApplication#git_include_list}
  */
  readonly gitIncludeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application#git_repository GitApplication#git_repository}
  */
  readonly gitRepository: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application#id GitApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application#kustomization_file_path GitApplication#kustomization_file_path}
  */
  readonly kustomizationFilePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application#name GitApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application#namespace GitApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application#target_based_kustomization GitApplication#target_based_kustomization}
  */
  readonly targetBasedKustomization?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application nirmata_git_application}
*/
export class GitApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nirmata_git_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GitApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GitApplication to import
  * @param importFromId The id of the existing GitApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GitApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nirmata_git_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/git_application nirmata_git_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GitApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: GitApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'nirmata_git_application',
      terraformGeneratorMetadata: {
        providerName: 'nirmata',
        providerVersion: '1.1.13',
        providerVersionConstraint: '1.1.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalog = config.catalog;
    this._fixedKustomization = config.fixedKustomization;
    this._gitBranch = config.gitBranch;
    this._gitCredentials = config.gitCredentials;
    this._gitDirectoryList = config.gitDirectoryList;
    this._gitIncludeList = config.gitIncludeList;
    this._gitRepository = config.gitRepository;
    this._id = config.id;
    this._kustomizationFilePath = config.kustomizationFilePath;
    this._name = config.name;
    this._namespace = config.namespace;
    this._targetBasedKustomization = config.targetBasedKustomization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // fixed_kustomization - computed: false, optional: true, required: false
  private _fixedKustomization?: boolean | cdktf.IResolvable; 
  public get fixedKustomization() {
    return this.getBooleanAttribute('fixed_kustomization');
  }
  public set fixedKustomization(value: boolean | cdktf.IResolvable) {
    this._fixedKustomization = value;
  }
  public resetFixedKustomization() {
    this._fixedKustomization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedKustomizationInput() {
    return this._fixedKustomization;
  }

  // git_branch - computed: false, optional: false, required: true
  private _gitBranch?: string; 
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }
  public set gitBranch(value: string) {
    this._gitBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitBranchInput() {
    return this._gitBranch;
  }

  // git_credentials - computed: false, optional: false, required: true
  private _gitCredentials?: string; 
  public get gitCredentials() {
    return this.getStringAttribute('git_credentials');
  }
  public set gitCredentials(value: string) {
    this._gitCredentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCredentialsInput() {
    return this._gitCredentials;
  }

  // git_directory_list - computed: false, optional: true, required: false
  private _gitDirectoryList?: string[]; 
  public get gitDirectoryList() {
    return this.getListAttribute('git_directory_list');
  }
  public set gitDirectoryList(value: string[]) {
    this._gitDirectoryList = value;
  }
  public resetGitDirectoryList() {
    this._gitDirectoryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDirectoryListInput() {
    return this._gitDirectoryList;
  }

  // git_include_list - computed: false, optional: true, required: false
  private _gitIncludeList?: string[]; 
  public get gitIncludeList() {
    return this.getListAttribute('git_include_list');
  }
  public set gitIncludeList(value: string[]) {
    this._gitIncludeList = value;
  }
  public resetGitIncludeList() {
    this._gitIncludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitIncludeListInput() {
    return this._gitIncludeList;
  }

  // git_repository - computed: false, optional: false, required: true
  private _gitRepository?: string; 
  public get gitRepository() {
    return this.getStringAttribute('git_repository');
  }
  public set gitRepository(value: string) {
    this._gitRepository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepositoryInput() {
    return this._gitRepository;
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

  // kustomization_file_path - computed: false, optional: true, required: false
  private _kustomizationFilePath?: string; 
  public get kustomizationFilePath() {
    return this.getStringAttribute('kustomization_file_path');
  }
  public set kustomizationFilePath(value: string) {
    this._kustomizationFilePath = value;
  }
  public resetKustomizationFilePath() {
    this._kustomizationFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizationFilePathInput() {
    return this._kustomizationFilePath;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // release_name - computed: true, optional: false, required: false
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }

  // target_based_kustomization - computed: false, optional: true, required: false
  private _targetBasedKustomization?: boolean | cdktf.IResolvable; 
  public get targetBasedKustomization() {
    return this.getBooleanAttribute('target_based_kustomization');
  }
  public set targetBasedKustomization(value: boolean | cdktf.IResolvable) {
    this._targetBasedKustomization = value;
  }
  public resetTargetBasedKustomization() {
    this._targetBasedKustomization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBasedKustomizationInput() {
    return this._targetBasedKustomization;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog: cdktf.stringToTerraform(this._catalog),
      fixed_kustomization: cdktf.booleanToTerraform(this._fixedKustomization),
      git_branch: cdktf.stringToTerraform(this._gitBranch),
      git_credentials: cdktf.stringToTerraform(this._gitCredentials),
      git_directory_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gitDirectoryList),
      git_include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gitIncludeList),
      git_repository: cdktf.stringToTerraform(this._gitRepository),
      id: cdktf.stringToTerraform(this._id),
      kustomization_file_path: cdktf.stringToTerraform(this._kustomizationFilePath),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      target_based_kustomization: cdktf.booleanToTerraform(this._targetBasedKustomization),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog: {
        value: cdktf.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fixed_kustomization: {
        value: cdktf.booleanToHclTerraform(this._fixedKustomization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      git_branch: {
        value: cdktf.stringToHclTerraform(this._gitBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_credentials: {
        value: cdktf.stringToHclTerraform(this._gitCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_directory_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gitDirectoryList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      git_include_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gitIncludeList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      git_repository: {
        value: cdktf.stringToHclTerraform(this._gitRepository),
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
      kustomization_file_path: {
        value: cdktf.stringToHclTerraform(this._kustomizationFilePath),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_based_kustomization: {
        value: cdktf.booleanToHclTerraform(this._targetBasedKustomization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
