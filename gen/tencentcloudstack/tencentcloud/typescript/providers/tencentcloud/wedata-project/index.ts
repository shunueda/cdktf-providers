// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#id WedataProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of bound resource group IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#resource_ids WedataProject#resource_ids}
  */
  readonly resourceIds?: string[];
  /**
  * Item status: 0: disabled, 1: enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#status WedataProject#status}
  */
  readonly status?: number;
  /**
  * dlc_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#dlc_info WedataProject#dlc_info}
  */
  readonly dlcInfo?: WedataProjectDlcInfo;
  /**
  * project block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#project WedataProject#project}
  */
  readonly project: WedataProjectProject;
}
export interface WedataProjectDlcInfo {
  /**
  * Access account (only effective for standard mode projects and required for standard mode), used to submit DLC tasks.
  * It is recommended to use a specified sub-account and set corresponding database table permissions for the sub-account; task runner mode may cause task failure when the responsible person leaves; main account mode is not easy for permission control when multiple projects have different permissions.
  * 
  * Enum values:
  * - TASK_RUNNER (Task Runner)
  * - OWNER (Main Account Mode)
  * - SUB (Sub Account Mode).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#access_account WedataProject#access_account}
  */
  readonly accessAccount?: string;
  /**
  * DLC resource name (need to add role Uin to DLC, otherwise may not be able to obtain resources).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#compute_resources WedataProject#compute_resources}
  */
  readonly computeResources: string[];
  /**
  * Specify the default database for DLC cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#default_database WedataProject#default_database}
  */
  readonly defaultDatabase: string;
  /**
  * DLC region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#region WedataProject#region}
  */
  readonly region: string;
  /**
  * Cluster configuration tag (only effective for standard mode projects and required for standard mode). Enum values:
  * - Prod  (Production environment)
  * - Dev  (Development environment).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#standard_mode_env_tag WedataProject#standard_mode_env_tag}
  */
  readonly standardModeEnvTag?: string;
  /**
  * Sub-account ID (only effective for standard mode projects), when AccessAccount is in sub-account mode, the sub-account ID information needs to be specified, other modes do not need to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#sub_account_uin WedataProject#sub_account_uin}
  */
  readonly subAccountUin?: string;
}

export function wedataProjectDlcInfoToTerraform(struct?: WedataProjectDlcInfoOutputReference | WedataProjectDlcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_account: cdktf.stringToTerraform(struct!.accessAccount),
    compute_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.computeResources),
    default_database: cdktf.stringToTerraform(struct!.defaultDatabase),
    region: cdktf.stringToTerraform(struct!.region),
    standard_mode_env_tag: cdktf.stringToTerraform(struct!.standardModeEnvTag),
    sub_account_uin: cdktf.stringToTerraform(struct!.subAccountUin),
  }
}


export function wedataProjectDlcInfoToHclTerraform(struct?: WedataProjectDlcInfoOutputReference | WedataProjectDlcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_account: {
      value: cdktf.stringToHclTerraform(struct!.accessAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.computeResources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_database: {
      value: cdktf.stringToHclTerraform(struct!.defaultDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_mode_env_tag: {
      value: cdktf.stringToHclTerraform(struct!.standardModeEnvTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_account_uin: {
      value: cdktf.stringToHclTerraform(struct!.subAccountUin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataProjectDlcInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataProjectDlcInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessAccount = this._accessAccount;
    }
    if (this._computeResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeResources = this._computeResources;
    }
    if (this._defaultDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDatabase = this._defaultDatabase;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._standardModeEnvTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardModeEnvTag = this._standardModeEnvTag;
    }
    if (this._subAccountUin !== undefined) {
      hasAnyValues = true;
      internalValueResult.subAccountUin = this._subAccountUin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataProjectDlcInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessAccount = undefined;
      this._computeResources = undefined;
      this._defaultDatabase = undefined;
      this._region = undefined;
      this._standardModeEnvTag = undefined;
      this._subAccountUin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessAccount = value.accessAccount;
      this._computeResources = value.computeResources;
      this._defaultDatabase = value.defaultDatabase;
      this._region = value.region;
      this._standardModeEnvTag = value.standardModeEnvTag;
      this._subAccountUin = value.subAccountUin;
    }
  }

  // access_account - computed: false, optional: true, required: false
  private _accessAccount?: string; 
  public get accessAccount() {
    return this.getStringAttribute('access_account');
  }
  public set accessAccount(value: string) {
    this._accessAccount = value;
  }
  public resetAccessAccount() {
    this._accessAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAccountInput() {
    return this._accessAccount;
  }

  // compute_resources - computed: false, optional: false, required: true
  private _computeResources?: string[]; 
  public get computeResources() {
    return cdktf.Fn.tolist(this.getListAttribute('compute_resources'));
  }
  public set computeResources(value: string[]) {
    this._computeResources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourcesInput() {
    return this._computeResources;
  }

  // default_database - computed: false, optional: false, required: true
  private _defaultDatabase?: string; 
  public get defaultDatabase() {
    return this.getStringAttribute('default_database');
  }
  public set defaultDatabase(value: string) {
    this._defaultDatabase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatabaseInput() {
    return this._defaultDatabase;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // standard_mode_env_tag - computed: false, optional: true, required: false
  private _standardModeEnvTag?: string; 
  public get standardModeEnvTag() {
    return this.getStringAttribute('standard_mode_env_tag');
  }
  public set standardModeEnvTag(value: string) {
    this._standardModeEnvTag = value;
  }
  public resetStandardModeEnvTag() {
    this._standardModeEnvTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardModeEnvTagInput() {
    return this._standardModeEnvTag;
  }

  // sub_account_uin - computed: false, optional: true, required: false
  private _subAccountUin?: string; 
  public get subAccountUin() {
    return this.getStringAttribute('sub_account_uin');
  }
  public set subAccountUin(value: string) {
    this._subAccountUin = value;
  }
  public resetSubAccountUin() {
    this._subAccountUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subAccountUinInput() {
    return this._subAccountUin;
  }
}
export interface WedataProjectProject {
  /**
  * Project display name, can be Chinese name starting with a letter, can contain letters, numbers, and underscores, cannot exceed 32 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#display_name WedataProject#display_name}
  */
  readonly displayName: string;
  /**
  * Project mode, SIMPLE (default): Simple mode STANDARD: Standard mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#project_model WedataProject#project_model}
  */
  readonly projectModel?: string;
  /**
  * Project identifier, English name starting with a letter, can contain letters, numbers, and underscores, cannot exceed 32 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#project_name WedataProject#project_name}
  */
  readonly projectName: string;
}

export function wedataProjectProjectToTerraform(struct?: WedataProjectProjectOutputReference | WedataProjectProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    project_model: cdktf.stringToTerraform(struct!.projectModel),
    project_name: cdktf.stringToTerraform(struct!.projectName),
  }
}


export function wedataProjectProjectToHclTerraform(struct?: WedataProjectProjectOutputReference | WedataProjectProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_model: {
      value: cdktf.stringToHclTerraform(struct!.projectModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataProjectProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataProjectProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._projectModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectModel = this._projectModel;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataProjectProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._projectModel = undefined;
      this._projectName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._projectModel = value.projectModel;
      this._projectName = value.projectName;
    }
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // project_model - computed: false, optional: true, required: false
  private _projectModel?: string; 
  public get projectModel() {
    return this.getStringAttribute('project_model');
  }
  public set projectModel(value: string) {
    this._projectModel = value;
  }
  public resetProjectModel() {
    this._projectModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectModelInput() {
    return this._projectModel;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project tencentcloud_wedata_project}
*/
export class WedataProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataProject to import
  * @param importFromId The id of the existing WedataProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/wedata_project tencentcloud_wedata_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataProjectConfig
  */
  public constructor(scope: Construct, id: string, config: WedataProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_project',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._resourceIds = config.resourceIds;
    this._status = config.status;
    this._dlcInfo.internalValue = config.dlcInfo;
    this._project.internalValue = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // resource_ids - computed: false, optional: true, required: false
  private _resourceIds?: string[]; 
  public get resourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_ids'));
  }
  public set resourceIds(value: string[]) {
    this._resourceIds = value;
  }
  public resetResourceIds() {
    this._resourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds;
  }

  // status - computed: true, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // dlc_info - computed: false, optional: true, required: false
  private _dlcInfo = new WedataProjectDlcInfoOutputReference(this, "dlc_info");
  public get dlcInfo() {
    return this._dlcInfo;
  }
  public putDlcInfo(value: WedataProjectDlcInfo) {
    this._dlcInfo.internalValue = value;
  }
  public resetDlcInfo() {
    this._dlcInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlcInfoInput() {
    return this._dlcInfo.internalValue;
  }

  // project - computed: false, optional: false, required: true
  private _project = new WedataProjectProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: WedataProjectProject) {
    this._project.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceIds),
      status: cdktf.numberToTerraform(this._status),
      dlc_info: wedataProjectDlcInfoToTerraform(this._dlcInfo.internalValue),
      project: wedataProjectProjectToTerraform(this._project.internalValue),
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
      resource_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dlc_info: {
        value: wedataProjectDlcInfoToHclTerraform(this._dlcInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataProjectDlcInfoList",
      },
      project: {
        value: wedataProjectProjectToHclTerraform(this._project.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataProjectProjectList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
