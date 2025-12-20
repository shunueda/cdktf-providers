// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataCodeFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Code file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file#code_file_content WedataCodeFile#code_file_content}
  */
  readonly codeFileContent?: string;
  /**
  * Code file name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file#code_file_name WedataCodeFile#code_file_name}
  */
  readonly codeFileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file#id WedataCodeFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Parent folder path, for example /aaa/bbb/ccc, path header must start with a slash, root directory pass /.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file#parent_folder_path WedataCodeFile#parent_folder_path}
  */
  readonly parentFolderPath: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file#project_id WedataCodeFile#project_id}
  */
  readonly projectId: string;
  /**
  * code_file_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file#code_file_config WedataCodeFile#code_file_config}
  */
  readonly codeFileConfig?: WedataCodeFileCodeFileConfig;
}
export interface WedataCodeFileCodeFileConfigNotebookSessionInfo {
  /**
  * Session ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file#notebook_session_id WedataCodeFile#notebook_session_id}
  */
  readonly notebookSessionId?: string;
  /**
  * Session name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file#notebook_session_name WedataCodeFile#notebook_session_name}
  */
  readonly notebookSessionName?: string;
}

export function wedataCodeFileCodeFileConfigNotebookSessionInfoToTerraform(struct?: WedataCodeFileCodeFileConfigNotebookSessionInfoOutputReference | WedataCodeFileCodeFileConfigNotebookSessionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_session_id: cdktf.stringToTerraform(struct!.notebookSessionId),
    notebook_session_name: cdktf.stringToTerraform(struct!.notebookSessionName),
  }
}


export function wedataCodeFileCodeFileConfigNotebookSessionInfoToHclTerraform(struct?: WedataCodeFileCodeFileConfigNotebookSessionInfoOutputReference | WedataCodeFileCodeFileConfigNotebookSessionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notebook_session_id: {
      value: cdktf.stringToHclTerraform(struct!.notebookSessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notebook_session_name: {
      value: cdktf.stringToHclTerraform(struct!.notebookSessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataCodeFileCodeFileConfigNotebookSessionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataCodeFileCodeFileConfigNotebookSessionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookSessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookSessionId = this._notebookSessionId;
    }
    if (this._notebookSessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookSessionName = this._notebookSessionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataCodeFileCodeFileConfigNotebookSessionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notebookSessionId = undefined;
      this._notebookSessionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notebookSessionId = value.notebookSessionId;
      this._notebookSessionName = value.notebookSessionName;
    }
  }

  // notebook_session_id - computed: false, optional: true, required: false
  private _notebookSessionId?: string; 
  public get notebookSessionId() {
    return this.getStringAttribute('notebook_session_id');
  }
  public set notebookSessionId(value: string) {
    this._notebookSessionId = value;
  }
  public resetNotebookSessionId() {
    this._notebookSessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookSessionIdInput() {
    return this._notebookSessionId;
  }

  // notebook_session_name - computed: false, optional: true, required: false
  private _notebookSessionName?: string; 
  public get notebookSessionName() {
    return this.getStringAttribute('notebook_session_name');
  }
  public set notebookSessionName(value: string) {
    this._notebookSessionName = value;
  }
  public resetNotebookSessionName() {
    this._notebookSessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookSessionNameInput() {
    return this._notebookSessionName;
  }
}
export interface WedataCodeFileCodeFileConfig {
  /**
  * Advanced runtime parameters, variable substitution, map-json String,String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file#params WedataCodeFile#params}
  */
  readonly params?: string;
  /**
  * notebook_session_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file#notebook_session_info WedataCodeFile#notebook_session_info}
  */
  readonly notebookSessionInfo?: WedataCodeFileCodeFileConfigNotebookSessionInfo;
}

export function wedataCodeFileCodeFileConfigToTerraform(struct?: WedataCodeFileCodeFileConfigOutputReference | WedataCodeFileCodeFileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: cdktf.stringToTerraform(struct!.params),
    notebook_session_info: wedataCodeFileCodeFileConfigNotebookSessionInfoToTerraform(struct!.notebookSessionInfo),
  }
}


export function wedataCodeFileCodeFileConfigToHclTerraform(struct?: WedataCodeFileCodeFileConfigOutputReference | WedataCodeFileCodeFileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    params: {
      value: cdktf.stringToHclTerraform(struct!.params),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notebook_session_info: {
      value: wedataCodeFileCodeFileConfigNotebookSessionInfoToHclTerraform(struct!.notebookSessionInfo),
      isBlock: true,
      type: "list",
      storageClassType: "WedataCodeFileCodeFileConfigNotebookSessionInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataCodeFileCodeFileConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataCodeFileCodeFileConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._notebookSessionInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookSessionInfo = this._notebookSessionInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataCodeFileCodeFileConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._params = undefined;
      this._notebookSessionInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._params = value.params;
      this._notebookSessionInfo.internalValue = value.notebookSessionInfo;
    }
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

  // notebook_session_info - computed: false, optional: true, required: false
  private _notebookSessionInfo = new WedataCodeFileCodeFileConfigNotebookSessionInfoOutputReference(this, "notebook_session_info");
  public get notebookSessionInfo() {
    return this._notebookSessionInfo;
  }
  public putNotebookSessionInfo(value: WedataCodeFileCodeFileConfigNotebookSessionInfo) {
    this._notebookSessionInfo.internalValue = value;
  }
  public resetNotebookSessionInfo() {
    this._notebookSessionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookSessionInfoInput() {
    return this._notebookSessionInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file tencentcloud_wedata_code_file}
*/
export class WedataCodeFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_code_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataCodeFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataCodeFile to import
  * @param importFromId The id of the existing WedataCodeFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataCodeFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_code_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/wedata_code_file tencentcloud_wedata_code_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataCodeFileConfig
  */
  public constructor(scope: Construct, id: string, config: WedataCodeFileConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_code_file',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._codeFileContent = config.codeFileContent;
    this._codeFileName = config.codeFileName;
    this._id = config.id;
    this._parentFolderPath = config.parentFolderPath;
    this._projectId = config.projectId;
    this._codeFileConfig.internalValue = config.codeFileConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_scope - computed: true, optional: false, required: false
  public get accessScope() {
    return this.getStringAttribute('access_scope');
  }

  // code_file_content - computed: false, optional: true, required: false
  private _codeFileContent?: string; 
  public get codeFileContent() {
    return this.getStringAttribute('code_file_content');
  }
  public set codeFileContent(value: string) {
    this._codeFileContent = value;
  }
  public resetCodeFileContent() {
    this._codeFileContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeFileContentInput() {
    return this._codeFileContent;
  }

  // code_file_id - computed: true, optional: false, required: false
  public get codeFileId() {
    return this.getStringAttribute('code_file_id');
  }

  // code_file_name - computed: false, optional: false, required: true
  private _codeFileName?: string; 
  public get codeFileName() {
    return this.getStringAttribute('code_file_name');
  }
  public set codeFileName(value: string) {
    this._codeFileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeFileNameInput() {
    return this._codeFileName;
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

  // parent_folder_path - computed: false, optional: false, required: true
  private _parentFolderPath?: string; 
  public get parentFolderPath() {
    return this.getStringAttribute('parent_folder_path');
  }
  public set parentFolderPath(value: string) {
    this._parentFolderPath = value;
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

  // code_file_config - computed: false, optional: true, required: false
  private _codeFileConfig = new WedataCodeFileCodeFileConfigOutputReference(this, "code_file_config");
  public get codeFileConfig() {
    return this._codeFileConfig;
  }
  public putCodeFileConfig(value: WedataCodeFileCodeFileConfig) {
    this._codeFileConfig.internalValue = value;
  }
  public resetCodeFileConfig() {
    this._codeFileConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeFileConfigInput() {
    return this._codeFileConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code_file_content: cdktf.stringToTerraform(this._codeFileContent),
      code_file_name: cdktf.stringToTerraform(this._codeFileName),
      id: cdktf.stringToTerraform(this._id),
      parent_folder_path: cdktf.stringToTerraform(this._parentFolderPath),
      project_id: cdktf.stringToTerraform(this._projectId),
      code_file_config: wedataCodeFileCodeFileConfigToTerraform(this._codeFileConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      code_file_content: {
        value: cdktf.stringToHclTerraform(this._codeFileContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_file_name: {
        value: cdktf.stringToHclTerraform(this._codeFileName),
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
      code_file_config: {
        value: wedataCodeFileCodeFileConfigToHclTerraform(this._codeFileConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataCodeFileCodeFileConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
