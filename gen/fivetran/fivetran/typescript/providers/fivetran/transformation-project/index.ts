// https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransformationProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the group within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project#group_id TransformationProject#group_id}
  */
  readonly groupId: string;
  /**
  * Specifies whether the setup tests should be run automatically. The default value is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project#run_tests TransformationProject#run_tests}
  */
  readonly runTests?: boolean | cdktf.IResolvable;
  /**
  * Transformation project type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project#type TransformationProject#type}
  */
  readonly type: string;
  /**
  * project_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project#project_config TransformationProject#project_config}
  */
  readonly projectConfig?: TransformationProjectProjectConfig;
}
export interface TransformationProjectProjectConfig {
  /**
  * The version of transformation that should run the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project#dbt_version TransformationProject#dbt_version}
  */
  readonly dbtVersion?: string;
  /**
  * Default schema in destination. This production schema will contain your transformed data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project#default_schema TransformationProject#default_schema}
  */
  readonly defaultSchema?: string;
  /**
  * List of environment variables defined as key-value pairs in the raw string format using = as a separator. The variable name should have the DBT_ prefix and can contain A-Z, 0-9, dash, underscore, or dot characters. Example: "DBT_VARIABLE=variable_value"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project#environment_vars TransformationProject#environment_vars}
  */
  readonly environmentVars?: string[];
  /**
  * Folder in Git repo with your transformation project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project#folder_path TransformationProject#folder_path}
  */
  readonly folderPath?: string;
  /**
  * Git branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project#git_branch TransformationProject#git_branch}
  */
  readonly gitBranch?: string;
  /**
  * Git remote URL with your transformation project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project#git_remote_url TransformationProject#git_remote_url}
  */
  readonly gitRemoteUrl?: string;
  /**
  * Target name to set or override the value from the deployment.yaml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project#target_name TransformationProject#target_name}
  */
  readonly targetName?: string;
  /**
  * The number of threads transformation will use (from 1 to 32). Make sure this value is compatible with your destination type. For example, Snowflake supports only 8 concurrent queries on an X-Small warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project#threads TransformationProject#threads}
  */
  readonly threads?: number;
}

export function transformationProjectProjectConfigToTerraform(struct?: TransformationProjectProjectConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbt_version: cdktf.stringToTerraform(struct!.dbtVersion),
    default_schema: cdktf.stringToTerraform(struct!.defaultSchema),
    environment_vars: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environmentVars),
    folder_path: cdktf.stringToTerraform(struct!.folderPath),
    git_branch: cdktf.stringToTerraform(struct!.gitBranch),
    git_remote_url: cdktf.stringToTerraform(struct!.gitRemoteUrl),
    target_name: cdktf.stringToTerraform(struct!.targetName),
    threads: cdktf.numberToTerraform(struct!.threads),
  }
}


export function transformationProjectProjectConfigToHclTerraform(struct?: TransformationProjectProjectConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbt_version: {
      value: cdktf.stringToHclTerraform(struct!.dbtVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_schema: {
      value: cdktf.stringToHclTerraform(struct!.defaultSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_vars: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environmentVars),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    folder_path: {
      value: cdktf.stringToHclTerraform(struct!.folderPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_branch: {
      value: cdktf.stringToHclTerraform(struct!.gitBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_remote_url: {
      value: cdktf.stringToHclTerraform(struct!.gitRemoteUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_name: {
      value: cdktf.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threads: {
      value: cdktf.numberToHclTerraform(struct!.threads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransformationProjectProjectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransformationProjectProjectConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbtVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtVersion = this._dbtVersion;
    }
    if (this._defaultSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSchema = this._defaultSchema;
    }
    if (this._environmentVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVars = this._environmentVars;
    }
    if (this._folderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderPath = this._folderPath;
    }
    if (this._gitBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitBranch = this._gitBranch;
    }
    if (this._gitRemoteUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRemoteUrl = this._gitRemoteUrl;
    }
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    if (this._threads !== undefined) {
      hasAnyValues = true;
      internalValueResult.threads = this._threads;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformationProjectProjectConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbtVersion = undefined;
      this._defaultSchema = undefined;
      this._environmentVars = undefined;
      this._folderPath = undefined;
      this._gitBranch = undefined;
      this._gitRemoteUrl = undefined;
      this._targetName = undefined;
      this._threads = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbtVersion = value.dbtVersion;
      this._defaultSchema = value.defaultSchema;
      this._environmentVars = value.environmentVars;
      this._folderPath = value.folderPath;
      this._gitBranch = value.gitBranch;
      this._gitRemoteUrl = value.gitRemoteUrl;
      this._targetName = value.targetName;
      this._threads = value.threads;
    }
  }

  // dbt_version - computed: false, optional: true, required: false
  private _dbtVersion?: string; 
  public get dbtVersion() {
    return this.getStringAttribute('dbt_version');
  }
  public set dbtVersion(value: string) {
    this._dbtVersion = value;
  }
  public resetDbtVersion() {
    this._dbtVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtVersionInput() {
    return this._dbtVersion;
  }

  // default_schema - computed: false, optional: true, required: false
  private _defaultSchema?: string; 
  public get defaultSchema() {
    return this.getStringAttribute('default_schema');
  }
  public set defaultSchema(value: string) {
    this._defaultSchema = value;
  }
  public resetDefaultSchema() {
    this._defaultSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSchemaInput() {
    return this._defaultSchema;
  }

  // environment_vars - computed: false, optional: true, required: false
  private _environmentVars?: string[]; 
  public get environmentVars() {
    return cdktf.Fn.tolist(this.getListAttribute('environment_vars'));
  }
  public set environmentVars(value: string[]) {
    this._environmentVars = value;
  }
  public resetEnvironmentVars() {
    this._environmentVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVarsInput() {
    return this._environmentVars;
  }

  // folder_path - computed: false, optional: true, required: false
  private _folderPath?: string; 
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }
  public set folderPath(value: string) {
    this._folderPath = value;
  }
  public resetFolderPath() {
    this._folderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderPathInput() {
    return this._folderPath;
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

  // git_remote_url - computed: false, optional: true, required: false
  private _gitRemoteUrl?: string; 
  public get gitRemoteUrl() {
    return this.getStringAttribute('git_remote_url');
  }
  public set gitRemoteUrl(value: string) {
    this._gitRemoteUrl = value;
  }
  public resetGitRemoteUrl() {
    this._gitRemoteUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRemoteUrlInput() {
    return this._gitRemoteUrl;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // threads - computed: true, optional: true, required: false
  private _threads?: number; 
  public get threads() {
    return this.getNumberAttribute('threads');
  }
  public set threads(value: number) {
    this._threads = value;
  }
  public resetThreads() {
    this._threads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsInput() {
    return this._threads;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project fivetran_transformation_project}
*/
export class TransformationProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_transformation_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransformationProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransformationProject to import
  * @param importFromId The id of the existing TransformationProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransformationProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_transformation_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/transformation_project fivetran_transformation_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformationProjectConfig
  */
  public constructor(scope: Construct, id: string, config: TransformationProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_transformation_project',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.13',
        providerVersionConstraint: '1.9.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._runTests = config.runTests;
    this._type = config.type;
    this._projectConfig.internalValue = config.projectConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by_id - computed: true, optional: false, required: false
  public get createdById() {
    return this.getStringAttribute('created_by_id');
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    return cdktf.Fn.tolist(this.getListAttribute('errors'));
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // run_tests - computed: true, optional: true, required: false
  private _runTests?: boolean | cdktf.IResolvable; 
  public get runTests() {
    return this.getBooleanAttribute('run_tests');
  }
  public set runTests(value: boolean | cdktf.IResolvable) {
    this._runTests = value;
  }
  public resetRunTests() {
    this._runTests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTestsInput() {
    return this._runTests;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // project_config - computed: false, optional: true, required: false
  private _projectConfig = new TransformationProjectProjectConfigOutputReference(this, "project_config");
  public get projectConfig() {
    return this._projectConfig;
  }
  public putProjectConfig(value: TransformationProjectProjectConfig) {
    this._projectConfig.internalValue = value;
  }
  public resetProjectConfig() {
    this._projectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectConfigInput() {
    return this._projectConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      run_tests: cdktf.booleanToTerraform(this._runTests),
      type: cdktf.stringToTerraform(this._type),
      project_config: transformationProjectProjectConfigToTerraform(this._projectConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_tests: {
        value: cdktf.booleanToHclTerraform(this._runTests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_config: {
        value: transformationProjectProjectConfigToHclTerraform(this._projectConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TransformationProjectProjectConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
