// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformInputSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set#id DataHarnessPlatformInputSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set#identifier DataHarnessPlatformInputSet#identifier}
  */
  readonly identifier?: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set#name DataHarnessPlatformInputSet#name}
  */
  readonly name?: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set#org_id DataHarnessPlatformInputSet#org_id}
  */
  readonly orgId: string;
  /**
  * Identifier of the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set#pipeline_id DataHarnessPlatformInputSet#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set#project_id DataHarnessPlatformInputSet#project_id}
  */
  readonly projectId: string;
  /**
  * git_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set#git_details DataHarnessPlatformInputSet#git_details}
  */
  readonly gitDetails?: DataHarnessPlatformInputSetGitDetails;
}
export interface DataHarnessPlatformInputSetGitDetails {
  /**
  * Name of the default branch (this checks out a new branch titled by branch_name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set#base_branch DataHarnessPlatformInputSet#base_branch}
  */
  readonly baseBranch?: string;
  /**
  * Last commit identifier (for Git Repositories other than Github). To be provided only when updating Pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set#last_commit_id DataHarnessPlatformInputSet#last_commit_id}
  */
  readonly lastCommitId?: string;
  /**
  * Last object identifier (for Github). To be provided only when updating Pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set#last_object_id DataHarnessPlatformInputSet#last_object_id}
  */
  readonly lastObjectId?: string;
}

export function dataHarnessPlatformInputSetGitDetailsToTerraform(struct?: DataHarnessPlatformInputSetGitDetailsOutputReference | DataHarnessPlatformInputSetGitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_branch: cdktf.stringToTerraform(struct!.baseBranch),
    last_commit_id: cdktf.stringToTerraform(struct!.lastCommitId),
    last_object_id: cdktf.stringToTerraform(struct!.lastObjectId),
  }
}


export function dataHarnessPlatformInputSetGitDetailsToHclTerraform(struct?: DataHarnessPlatformInputSetGitDetailsOutputReference | DataHarnessPlatformInputSetGitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_branch: {
      value: cdktf.stringToHclTerraform(struct!.baseBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_commit_id: {
      value: cdktf.stringToHclTerraform(struct!.lastCommitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_object_id: {
      value: cdktf.stringToHclTerraform(struct!.lastObjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformInputSetGitDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHarnessPlatformInputSetGitDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseBranch = this._baseBranch;
    }
    if (this._lastCommitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastCommitId = this._lastCommitId;
    }
    if (this._lastObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObjectId = this._lastObjectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformInputSetGitDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseBranch = undefined;
      this._lastCommitId = undefined;
      this._lastObjectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseBranch = value.baseBranch;
      this._lastCommitId = value.lastCommitId;
      this._lastObjectId = value.lastObjectId;
    }
  }

  // base_branch - computed: true, optional: true, required: false
  private _baseBranch?: string; 
  public get baseBranch() {
    return this.getStringAttribute('base_branch');
  }
  public set baseBranch(value: string) {
    this._baseBranch = value;
  }
  public resetBaseBranch() {
    this._baseBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseBranchInput() {
    return this._baseBranch;
  }

  // branch_name - computed: true, optional: false, required: false
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }

  // commit_message - computed: true, optional: false, required: false
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }

  // connector_ref - computed: true, optional: false, required: false
  public get connectorRef() {
    return this.getStringAttribute('connector_ref');
  }

  // file_path - computed: true, optional: false, required: false
  public get filePath() {
    return this.getStringAttribute('file_path');
  }

  // last_commit_id - computed: true, optional: true, required: false
  private _lastCommitId?: string; 
  public get lastCommitId() {
    return this.getStringAttribute('last_commit_id');
  }
  public set lastCommitId(value: string) {
    this._lastCommitId = value;
  }
  public resetLastCommitId() {
    this._lastCommitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastCommitIdInput() {
    return this._lastCommitId;
  }

  // last_object_id - computed: true, optional: true, required: false
  private _lastObjectId?: string; 
  public get lastObjectId() {
    return this.getStringAttribute('last_object_id');
  }
  public set lastObjectId(value: string) {
    this._lastObjectId = value;
  }
  public resetLastObjectId() {
    this._lastObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastObjectIdInput() {
    return this._lastObjectId;
  }

  // parent_entity_connector_ref - computed: true, optional: false, required: false
  public get parentEntityConnectorRef() {
    return this.getStringAttribute('parent_entity_connector_ref');
  }

  // parent_entity_repo_name - computed: true, optional: false, required: false
  public get parentEntityRepoName() {
    return this.getStringAttribute('parent_entity_repo_name');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }

  // store_type - computed: true, optional: false, required: false
  public get storeType() {
    return this.getStringAttribute('store_type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set harness_platform_input_set}
*/
export class DataHarnessPlatformInputSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_input_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformInputSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformInputSet to import
  * @param importFromId The id of the existing DataHarnessPlatformInputSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformInputSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_input_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_input_set harness_platform_input_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformInputSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformInputSetConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_input_set',
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
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._pipelineId = config.pipelineId;
    this._projectId = config.projectId;
    this._gitDetails.internalValue = config.gitDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // git_details - computed: false, optional: true, required: false
  private _gitDetails = new DataHarnessPlatformInputSetGitDetailsOutputReference(this, "git_details");
  public get gitDetails() {
    return this._gitDetails;
  }
  public putGitDetails(value: DataHarnessPlatformInputSetGitDetails) {
    this._gitDetails.internalValue = value;
  }
  public resetGitDetails() {
    this._gitDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDetailsInput() {
    return this._gitDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
      project_id: cdktf.stringToTerraform(this._projectId),
      git_details: dataHarnessPlatformInputSetGitDetailsToTerraform(this._gitDetails.internalValue),
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
      pipeline_id: {
        value: cdktf.stringToHclTerraform(this._pipelineId),
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
      git_details: {
        value: dataHarnessPlatformInputSetGitDetailsToHclTerraform(this._gitDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessPlatformInputSetGitDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
