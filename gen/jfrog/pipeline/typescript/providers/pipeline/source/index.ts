// https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * For single branch pipeline sources. Name of branch that has the pipeline definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source#branch Source#branch}
  */
  readonly branch?: string;
  /**
  * For multi-branch pipeline sources, a regular expression of the branches to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source#branch_exclude_pattern Source#branch_exclude_pattern}
  */
  readonly branchExcludePattern?: string;
  /**
  * For multi-branch pipeline sources, a regular expression of the branches to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source#branch_include_pattern Source#branch_include_pattern}
  */
  readonly branchIncludePattern?: string;
  /**
  * In a project, an array of environment names in which this pipeline source will be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source#environments Source#environments}
  */
  readonly environments?: string[];
  /**
  * A regular expression to determine which files to include in pipeline sync (the YML files), with default pipelines.yml. If a templateId was provided, it must be values.yml.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source#file_filter Source#file_filter}
  */
  readonly fileFilter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source#id Source#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * True if the pipeline source is to be a multi-branch pipeline source. Otherwise, it will be a single-branch pipeline source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source#is_multi_branch Source#is_multi_branch}
  */
  readonly isMultiBranch?: boolean | cdktf.IResolvable;
  /**
  * The name of the pipeline source. Should be prefixed with the project key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source#name Source#name}
  */
  readonly name: string;
  /**
  * Id of the project where the pipeline source will live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source#project_id Source#project_id}
  */
  readonly projectId: number;
  /**
  * Id of the project Github integration to use to create the pipeline source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source#project_integration_id Source#project_integration_id}
  */
  readonly projectIntegrationId: number;
  /**
  * The full name of the Git repository including the user/organization as it appears in a Git clone command. For example, myOrg/myProject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source#repository_full_name Source#repository_full_name}
  */
  readonly repositoryFullName?: string;
  /**
  * The id of a template to use for this pipeline source, in which case the fileFilter will only specify the values.yml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source#template_id Source#template_id}
  */
  readonly templateId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source pipeline_source}
*/
export class Source extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipeline_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Source resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Source to import
  * @param importFromId The id of the existing Source that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Source to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipeline_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/source pipeline_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceConfig
  */
  public constructor(scope: Construct, id: string, config: SourceConfig) {
    super(scope, id, {
      terraformResourceType: 'pipeline_source',
      terraformGeneratorMetadata: {
        providerName: 'pipeline',
        providerVersion: '1.2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._branch = config.branch;
    this._branchExcludePattern = config.branchExcludePattern;
    this._branchIncludePattern = config.branchIncludePattern;
    this._environments = config.environments;
    this._fileFilter = config.fileFilter;
    this._id = config.id;
    this._isMultiBranch = config.isMultiBranch;
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectIntegrationId = config.projectIntegrationId;
    this._repositoryFullName = config.repositoryFullName;
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // branch_exclude_pattern - computed: false, optional: true, required: false
  private _branchExcludePattern?: string; 
  public get branchExcludePattern() {
    return this.getStringAttribute('branch_exclude_pattern');
  }
  public set branchExcludePattern(value: string) {
    this._branchExcludePattern = value;
  }
  public resetBranchExcludePattern() {
    this._branchExcludePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchExcludePatternInput() {
    return this._branchExcludePattern;
  }

  // branch_include_pattern - computed: false, optional: true, required: false
  private _branchIncludePattern?: string; 
  public get branchIncludePattern() {
    return this.getStringAttribute('branch_include_pattern');
  }
  public set branchIncludePattern(value: string) {
    this._branchIncludePattern = value;
  }
  public resetBranchIncludePattern() {
    this._branchIncludePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchIncludePatternInput() {
    return this._branchIncludePattern;
  }

  // environments - computed: false, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // file_filter - computed: false, optional: false, required: true
  private _fileFilter?: string; 
  public get fileFilter() {
    return this.getStringAttribute('file_filter');
  }
  public set fileFilter(value: string) {
    this._fileFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterInput() {
    return this._fileFilter;
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

  // is_multi_branch - computed: false, optional: true, required: false
  private _isMultiBranch?: boolean | cdktf.IResolvable; 
  public get isMultiBranch() {
    return this.getBooleanAttribute('is_multi_branch');
  }
  public set isMultiBranch(value: boolean | cdktf.IResolvable) {
    this._isMultiBranch = value;
  }
  public resetIsMultiBranch() {
    this._isMultiBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMultiBranchInput() {
    return this._isMultiBranch;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_integration_id - computed: false, optional: false, required: true
  private _projectIntegrationId?: number; 
  public get projectIntegrationId() {
    return this.getNumberAttribute('project_integration_id');
  }
  public set projectIntegrationId(value: number) {
    this._projectIntegrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIntegrationIdInput() {
    return this._projectIntegrationId;
  }

  // repository_full_name - computed: false, optional: true, required: false
  private _repositoryFullName?: string; 
  public get repositoryFullName() {
    return this.getStringAttribute('repository_full_name');
  }
  public set repositoryFullName(value: string) {
    this._repositoryFullName = value;
  }
  public resetRepositoryFullName() {
    this._repositoryFullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryFullNameInput() {
    return this._repositoryFullName;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: number; 
  public get templateId() {
    return this.getNumberAttribute('template_id');
  }
  public set templateId(value: number) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      branch_exclude_pattern: cdktf.stringToTerraform(this._branchExcludePattern),
      branch_include_pattern: cdktf.stringToTerraform(this._branchIncludePattern),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      file_filter: cdktf.stringToTerraform(this._fileFilter),
      id: cdktf.stringToTerraform(this._id),
      is_multi_branch: cdktf.booleanToTerraform(this._isMultiBranch),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_integration_id: cdktf.numberToTerraform(this._projectIntegrationId),
      repository_full_name: cdktf.stringToTerraform(this._repositoryFullName),
      template_id: cdktf.numberToTerraform(this._templateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branch_exclude_pattern: {
        value: cdktf.stringToHclTerraform(this._branchExcludePattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branch_include_pattern: {
        value: cdktf.stringToHclTerraform(this._branchIncludePattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      file_filter: {
        value: cdktf.stringToHclTerraform(this._fileFilter),
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
      is_multi_branch: {
        value: cdktf.booleanToHclTerraform(this._isMultiBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_integration_id: {
        value: cdktf.numberToHclTerraform(this._projectIntegrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repository_full_name: {
        value: cdktf.stringToHclTerraform(this._repositoryFullName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.numberToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
