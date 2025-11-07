// https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicySetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set#delete_from_cluster PolicySet#delete_from_cluster}
  */
  readonly deleteFromCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set#fixed_kustomization PolicySet#fixed_kustomization}
  */
  readonly fixedKustomization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set#git_branch PolicySet#git_branch}
  */
  readonly gitBranch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set#git_credentials PolicySet#git_credentials}
  */
  readonly gitCredentials: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set#git_directory_list PolicySet#git_directory_list}
  */
  readonly gitDirectoryList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set#git_repository PolicySet#git_repository}
  */
  readonly gitRepository: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set#id PolicySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set#is_default PolicySet#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set#kustomization_file_path PolicySet#kustomization_file_path}
  */
  readonly kustomizationFilePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set#name PolicySet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set#target_based_kustomization PolicySet#target_based_kustomization}
  */
  readonly targetBasedKustomization?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set nirmata_policy_set}
*/
export class PolicySet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nirmata_policy_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicySet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicySet to import
  * @param importFromId The id of the existing PolicySet that should be imported. Refer to the {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicySet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nirmata_policy_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/policy_set nirmata_policy_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicySetConfig
  */
  public constructor(scope: Construct, id: string, config: PolicySetConfig) {
    super(scope, id, {
      terraformResourceType: 'nirmata_policy_set',
      terraformGeneratorMetadata: {
        providerName: 'nirmata',
        providerVersion: '1.1.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteFromCluster = config.deleteFromCluster;
    this._fixedKustomization = config.fixedKustomization;
    this._gitBranch = config.gitBranch;
    this._gitCredentials = config.gitCredentials;
    this._gitDirectoryList = config.gitDirectoryList;
    this._gitRepository = config.gitRepository;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._kustomizationFilePath = config.kustomizationFilePath;
    this._name = config.name;
    this._targetBasedKustomization = config.targetBasedKustomization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_from_cluster - computed: false, optional: true, required: false
  private _deleteFromCluster?: boolean | cdktf.IResolvable; 
  public get deleteFromCluster() {
    return this.getBooleanAttribute('delete_from_cluster');
  }
  public set deleteFromCluster(value: boolean | cdktf.IResolvable) {
    this._deleteFromCluster = value;
  }
  public resetDeleteFromCluster() {
    this._deleteFromCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteFromClusterInput() {
    return this._deleteFromCluster;
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

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_from_cluster: cdktf.booleanToTerraform(this._deleteFromCluster),
      fixed_kustomization: cdktf.booleanToTerraform(this._fixedKustomization),
      git_branch: cdktf.stringToTerraform(this._gitBranch),
      git_credentials: cdktf.stringToTerraform(this._gitCredentials),
      git_directory_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gitDirectoryList),
      git_repository: cdktf.stringToTerraform(this._gitRepository),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      kustomization_file_path: cdktf.stringToTerraform(this._kustomizationFilePath),
      name: cdktf.stringToTerraform(this._name),
      target_based_kustomization: cdktf.booleanToTerraform(this._targetBasedKustomization),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_from_cluster: {
        value: cdktf.booleanToHclTerraform(this._deleteFromCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
