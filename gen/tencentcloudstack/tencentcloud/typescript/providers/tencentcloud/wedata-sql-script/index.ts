// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataSqlScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Permission scope: SHARED, PRIVATE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#access_scope WedataSqlScript#access_scope}
  */
  readonly accessScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#id WedataSqlScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Parent folder path, /aaa/bbb/ccc, root directory is empty string or /.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#parent_folder_path WedataSqlScript#parent_folder_path}
  */
  readonly parentFolderPath?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#project_id WedataSqlScript#project_id}
  */
  readonly projectId: string;
  /**
  * Script content, if there is a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#script_content WedataSqlScript#script_content}
  */
  readonly scriptContent?: string;
  /**
  * Script name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#script_name WedataSqlScript#script_name}
  */
  readonly scriptName: string;
  /**
  * script_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#script_config WedataSqlScript#script_config}
  */
  readonly scriptConfig?: WedataSqlScriptScriptConfig;
}
export interface WedataSqlScriptScriptConfig {
  /**
  * Advanced settings, execution configuration parameters, map-json String,String. Encoded in Base64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#advance_config WedataSqlScript#advance_config}
  */
  readonly advanceConfig?: string;
  /**
  * Computing resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#compute_resource WedataSqlScript#compute_resource}
  */
  readonly computeResource?: string;
  /**
  * Data source environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#datasource_env WedataSqlScript#datasource_env}
  */
  readonly datasourceEnv?: string;
  /**
  * Data source ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#datasource_id WedataSqlScript#datasource_id}
  */
  readonly datasourceId?: string;
  /**
  * Execution resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#executor_group_id WedataSqlScript#executor_group_id}
  */
  readonly executorGroupId?: string;
  /**
  * Advanced runtime parameters, variable substitution, map-json String,String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#params WedataSqlScript#params}
  */
  readonly params?: string;
}

export function wedataSqlScriptScriptConfigToTerraform(struct?: WedataSqlScriptScriptConfigOutputReference | WedataSqlScriptScriptConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advance_config: cdktf.stringToTerraform(struct!.advanceConfig),
    compute_resource: cdktf.stringToTerraform(struct!.computeResource),
    datasource_env: cdktf.stringToTerraform(struct!.datasourceEnv),
    datasource_id: cdktf.stringToTerraform(struct!.datasourceId),
    executor_group_id: cdktf.stringToTerraform(struct!.executorGroupId),
    params: cdktf.stringToTerraform(struct!.params),
  }
}


export function wedataSqlScriptScriptConfigToHclTerraform(struct?: WedataSqlScriptScriptConfigOutputReference | WedataSqlScriptScriptConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advance_config: {
      value: cdktf.stringToHclTerraform(struct!.advanceConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_resource: {
      value: cdktf.stringToHclTerraform(struct!.computeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasource_env: {
      value: cdktf.stringToHclTerraform(struct!.datasourceEnv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasource_id: {
      value: cdktf.stringToHclTerraform(struct!.datasourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executor_group_id: {
      value: cdktf.stringToHclTerraform(struct!.executorGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.stringToHclTerraform(struct!.params),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataSqlScriptScriptConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataSqlScriptScriptConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advanceConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.advanceConfig = this._advanceConfig;
    }
    if (this._computeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeResource = this._computeResource;
    }
    if (this._datasourceEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceEnv = this._datasourceEnv;
    }
    if (this._datasourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceId = this._datasourceId;
    }
    if (this._executorGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorGroupId = this._executorGroupId;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataSqlScriptScriptConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advanceConfig = undefined;
      this._computeResource = undefined;
      this._datasourceEnv = undefined;
      this._datasourceId = undefined;
      this._executorGroupId = undefined;
      this._params = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advanceConfig = value.advanceConfig;
      this._computeResource = value.computeResource;
      this._datasourceEnv = value.datasourceEnv;
      this._datasourceId = value.datasourceId;
      this._executorGroupId = value.executorGroupId;
      this._params = value.params;
    }
  }

  // advance_config - computed: false, optional: true, required: false
  private _advanceConfig?: string; 
  public get advanceConfig() {
    return this.getStringAttribute('advance_config');
  }
  public set advanceConfig(value: string) {
    this._advanceConfig = value;
  }
  public resetAdvanceConfig() {
    this._advanceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advanceConfigInput() {
    return this._advanceConfig;
  }

  // compute_resource - computed: false, optional: true, required: false
  private _computeResource?: string; 
  public get computeResource() {
    return this.getStringAttribute('compute_resource');
  }
  public set computeResource(value: string) {
    this._computeResource = value;
  }
  public resetComputeResource() {
    this._computeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourceInput() {
    return this._computeResource;
  }

  // datasource_env - computed: false, optional: true, required: false
  private _datasourceEnv?: string; 
  public get datasourceEnv() {
    return this.getStringAttribute('datasource_env');
  }
  public set datasourceEnv(value: string) {
    this._datasourceEnv = value;
  }
  public resetDatasourceEnv() {
    this._datasourceEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceEnvInput() {
    return this._datasourceEnv;
  }

  // datasource_id - computed: false, optional: true, required: false
  private _datasourceId?: string; 
  public get datasourceId() {
    return this.getStringAttribute('datasource_id');
  }
  public set datasourceId(value: string) {
    this._datasourceId = value;
  }
  public resetDatasourceId() {
    this._datasourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceIdInput() {
    return this._datasourceId;
  }

  // executor_group_id - computed: false, optional: true, required: false
  private _executorGroupId?: string; 
  public get executorGroupId() {
    return this.getStringAttribute('executor_group_id');
  }
  public set executorGroupId(value: string) {
    this._executorGroupId = value;
  }
  public resetExecutorGroupId() {
    this._executorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorGroupIdInput() {
    return this._executorGroupId;
  }

  // params - computed: false, optional: true, required: false
  private _params?: string; 
  public get params() {
    return this.getStringAttribute('params');
  }
  public set params(value: string) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script tencentcloud_wedata_sql_script}
*/
export class WedataSqlScript extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_sql_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataSqlScript resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataSqlScript to import
  * @param importFromId The id of the existing WedataSqlScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataSqlScript to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_sql_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/wedata_sql_script tencentcloud_wedata_sql_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataSqlScriptConfig
  */
  public constructor(scope: Construct, id: string, config: WedataSqlScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_sql_script',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessScope = config.accessScope;
    this._id = config.id;
    this._parentFolderPath = config.parentFolderPath;
    this._projectId = config.projectId;
    this._scriptContent = config.scriptContent;
    this._scriptName = config.scriptName;
    this._scriptConfig.internalValue = config.scriptConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_scope - computed: true, optional: true, required: false
  private _accessScope?: string; 
  public get accessScope() {
    return this.getStringAttribute('access_scope');
  }
  public set accessScope(value: string) {
    this._accessScope = value;
  }
  public resetAccessScope() {
    this._accessScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessScopeInput() {
    return this._accessScope;
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

  // parent_folder_path - computed: false, optional: true, required: false
  private _parentFolderPath?: string; 
  public get parentFolderPath() {
    return this.getStringAttribute('parent_folder_path');
  }
  public set parentFolderPath(value: string) {
    this._parentFolderPath = value;
  }
  public resetParentFolderPath() {
    this._parentFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFolderPathInput() {
    return this._parentFolderPath;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
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

  // script_content - computed: false, optional: true, required: false
  private _scriptContent?: string; 
  public get scriptContent() {
    return this.getStringAttribute('script_content');
  }
  public set scriptContent(value: string) {
    this._scriptContent = value;
  }
  public resetScriptContent() {
    this._scriptContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptContentInput() {
    return this._scriptContent;
  }

  // script_id - computed: true, optional: false, required: false
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }

  // script_name - computed: false, optional: false, required: true
  private _scriptName?: string; 
  public get scriptName() {
    return this.getStringAttribute('script_name');
  }
  public set scriptName(value: string) {
    this._scriptName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptNameInput() {
    return this._scriptName;
  }

  // script_config - computed: false, optional: true, required: false
  private _scriptConfig = new WedataSqlScriptScriptConfigOutputReference(this, "script_config");
  public get scriptConfig() {
    return this._scriptConfig;
  }
  public putScriptConfig(value: WedataSqlScriptScriptConfig) {
    this._scriptConfig.internalValue = value;
  }
  public resetScriptConfig() {
    this._scriptConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptConfigInput() {
    return this._scriptConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_scope: cdktf.stringToTerraform(this._accessScope),
      id: cdktf.stringToTerraform(this._id),
      parent_folder_path: cdktf.stringToTerraform(this._parentFolderPath),
      project_id: cdktf.stringToTerraform(this._projectId),
      script_content: cdktf.stringToTerraform(this._scriptContent),
      script_name: cdktf.stringToTerraform(this._scriptName),
      script_config: wedataSqlScriptScriptConfigToTerraform(this._scriptConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_scope: {
        value: cdktf.stringToHclTerraform(this._accessScope),
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
      parent_folder_path: {
        value: cdktf.stringToHclTerraform(this._parentFolderPath),
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
      script_content: {
        value: cdktf.stringToHclTerraform(this._scriptContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_name: {
        value: cdktf.stringToHclTerraform(this._scriptName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_config: {
        value: wedataSqlScriptScriptConfigToHclTerraform(this._scriptConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataSqlScriptScriptConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
