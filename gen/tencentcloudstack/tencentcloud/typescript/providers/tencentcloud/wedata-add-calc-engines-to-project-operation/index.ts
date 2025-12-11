// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_add_calc_engines_to_project_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataAddCalcEnginesToProjectOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_add_calc_engines_to_project_operation#id WedataAddCalcEnginesToProjectOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID to be modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_add_calc_engines_to_project_operation#project_id WedataAddCalcEnginesToProjectOperation#project_id}
  */
  readonly projectId: string;
  /**
  * dlc_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_add_calc_engines_to_project_operation#dlc_info WedataAddCalcEnginesToProjectOperation#dlc_info}
  */
  readonly dlcInfo: WedataAddCalcEnginesToProjectOperationDlcInfo[] | cdktf.IResolvable;
}
export interface WedataAddCalcEnginesToProjectOperationDlcInfo {
  /**
  * Access account (only effective for standard mode projects and required for standard mode), used to submit DLC tasks.
  * It is recommended to use a specified sub-account and set corresponding database table permissions for the sub-account; task runner mode may cause task failures when the responsible person leaves; main account mode is not easy for permission control when multiple projects have different permissions.
  * 
  * Enum values:
  * - TASK_RUNNER (Task Runner)
  * - OWNER (Main Account Mode)
  * - SUB (Sub-Account Mode).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_add_calc_engines_to_project_operation#access_account WedataAddCalcEnginesToProjectOperation#access_account}
  */
  readonly accessAccount?: string;
  /**
  * DLC resource names (need to add role Uin to DLC, otherwise resources may not be available).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_add_calc_engines_to_project_operation#compute_resources WedataAddCalcEnginesToProjectOperation#compute_resources}
  */
  readonly computeResources: string[];
  /**
  * Specify the default database for the DLC cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_add_calc_engines_to_project_operation#default_database WedataAddCalcEnginesToProjectOperation#default_database}
  */
  readonly defaultDatabase: string;
  /**
  * DLC region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_add_calc_engines_to_project_operation#region WedataAddCalcEnginesToProjectOperation#region}
  */
  readonly region: string;
  /**
  * Cluster configuration tag (only effective for standard mode projects and required for standard mode). Enum values:
  * - Prod  (Production environment)
  * - Dev  (Development environment).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_add_calc_engines_to_project_operation#standard_mode_env_tag WedataAddCalcEnginesToProjectOperation#standard_mode_env_tag}
  */
  readonly standardModeEnvTag?: string;
  /**
  * Sub-account ID (only effective for standard mode projects), when AccessAccount is in sub-account mode, the sub-account ID information needs to be specified, other modes do not need to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_add_calc_engines_to_project_operation#sub_account_uin WedataAddCalcEnginesToProjectOperation#sub_account_uin}
  */
  readonly subAccountUin?: string;
}

export function wedataAddCalcEnginesToProjectOperationDlcInfoToTerraform(struct?: WedataAddCalcEnginesToProjectOperationDlcInfo | cdktf.IResolvable): any {
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


export function wedataAddCalcEnginesToProjectOperationDlcInfoToHclTerraform(struct?: WedataAddCalcEnginesToProjectOperationDlcInfo | cdktf.IResolvable): any {
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

export class WedataAddCalcEnginesToProjectOperationDlcInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WedataAddCalcEnginesToProjectOperationDlcInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: WedataAddCalcEnginesToProjectOperationDlcInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessAccount = undefined;
      this._computeResources = undefined;
      this._defaultDatabase = undefined;
      this._region = undefined;
      this._standardModeEnvTag = undefined;
      this._subAccountUin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class WedataAddCalcEnginesToProjectOperationDlcInfoList extends cdktf.ComplexList {
  public internalValue? : WedataAddCalcEnginesToProjectOperationDlcInfo[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WedataAddCalcEnginesToProjectOperationDlcInfoOutputReference {
    return new WedataAddCalcEnginesToProjectOperationDlcInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_add_calc_engines_to_project_operation tencentcloud_wedata_add_calc_engines_to_project_operation}
*/
export class WedataAddCalcEnginesToProjectOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_add_calc_engines_to_project_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataAddCalcEnginesToProjectOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataAddCalcEnginesToProjectOperation to import
  * @param importFromId The id of the existing WedataAddCalcEnginesToProjectOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_add_calc_engines_to_project_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataAddCalcEnginesToProjectOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_add_calc_engines_to_project_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_add_calc_engines_to_project_operation tencentcloud_wedata_add_calc_engines_to_project_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataAddCalcEnginesToProjectOperationConfig
  */
  public constructor(scope: Construct, id: string, config: WedataAddCalcEnginesToProjectOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_add_calc_engines_to_project_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._projectId = config.projectId;
    this._dlcInfo.internalValue = config.dlcInfo;
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

  // dlc_info - computed: false, optional: false, required: true
  private _dlcInfo = new WedataAddCalcEnginesToProjectOperationDlcInfoList(this, "dlc_info", false);
  public get dlcInfo() {
    return this._dlcInfo;
  }
  public putDlcInfo(value: WedataAddCalcEnginesToProjectOperationDlcInfo[] | cdktf.IResolvable) {
    this._dlcInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dlcInfoInput() {
    return this._dlcInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      dlc_info: cdktf.listMapper(wedataAddCalcEnginesToProjectOperationDlcInfoToTerraform, true)(this._dlcInfo.internalValue),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlc_info: {
        value: cdktf.listMapperHcl(wedataAddCalcEnginesToProjectOperationDlcInfoToHclTerraform, true)(this._dlcInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataAddCalcEnginesToProjectOperationDlcInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
