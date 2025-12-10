// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cam_list_attached_user_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCamListAttachedUserPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * 0: Return direct association and group association policies, 1: Only return direct association policies, 2: Only return group association policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cam_list_attached_user_policy#attach_type DataTencentcloudCamListAttachedUserPolicy#attach_type}
  */
  readonly attachType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cam_list_attached_user_policy#id DataTencentcloudCamListAttachedUserPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Search Keywords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cam_list_attached_user_policy#keyword DataTencentcloudCamListAttachedUserPolicy#keyword}
  */
  readonly keyword?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cam_list_attached_user_policy#result_output_file DataTencentcloudCamListAttachedUserPolicy#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Policy type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cam_list_attached_user_policy#strategy_type DataTencentcloudCamListAttachedUserPolicy#strategy_type}
  */
  readonly strategyType?: number;
  /**
  * Target User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cam_list_attached_user_policy#target_uin DataTencentcloudCamListAttachedUserPolicy#target_uin}
  */
  readonly targetUin: number;
}
export interface DataTencentcloudCamListAttachedUserPolicyPolicyListGroups {
}

export function dataTencentcloudCamListAttachedUserPolicyPolicyListGroupsToTerraform(struct?: DataTencentcloudCamListAttachedUserPolicyPolicyListGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCamListAttachedUserPolicyPolicyListGroupsToHclTerraform(struct?: DataTencentcloudCamListAttachedUserPolicyPolicyListGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCamListAttachedUserPolicyPolicyListGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudCamListAttachedUserPolicyPolicyListGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCamListAttachedUserPolicyPolicyListGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
}

export class DataTencentcloudCamListAttachedUserPolicyPolicyListGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCamListAttachedUserPolicyPolicyListGroupsOutputReference {
    return new DataTencentcloudCamListAttachedUserPolicyPolicyListGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCamListAttachedUserPolicyPolicyListStruct {
}

export function dataTencentcloudCamListAttachedUserPolicyPolicyListStructToTerraform(struct?: DataTencentcloudCamListAttachedUserPolicyPolicyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCamListAttachedUserPolicyPolicyListStructToHclTerraform(struct?: DataTencentcloudCamListAttachedUserPolicyPolicyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCamListAttachedUserPolicyPolicyListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudCamListAttachedUserPolicyPolicyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCamListAttachedUserPolicyPolicyListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_time - computed: true, optional: false, required: false
  public get addTime() {
    return this.getStringAttribute('add_time');
  }

  // create_mode - computed: true, optional: false, required: false
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }

  // deactived - computed: true, optional: false, required: false
  public get deactived() {
    return this.getNumberAttribute('deactived');
  }

  // deactived_detail - computed: true, optional: false, required: false
  public get deactivedDetail() {
    return cdktf.Fn.tolist(this.getListAttribute('deactived_detail'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataTencentcloudCamListAttachedUserPolicyPolicyListGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // strategy_type - computed: true, optional: false, required: false
  public get strategyType() {
    return this.getStringAttribute('strategy_type');
  }
}

export class DataTencentcloudCamListAttachedUserPolicyPolicyListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCamListAttachedUserPolicyPolicyListStructOutputReference {
    return new DataTencentcloudCamListAttachedUserPolicyPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cam_list_attached_user_policy tencentcloud_cam_list_attached_user_policy}
*/
export class DataTencentcloudCamListAttachedUserPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cam_list_attached_user_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCamListAttachedUserPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCamListAttachedUserPolicy to import
  * @param importFromId The id of the existing DataTencentcloudCamListAttachedUserPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cam_list_attached_user_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCamListAttachedUserPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cam_list_attached_user_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cam_list_attached_user_policy tencentcloud_cam_list_attached_user_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCamListAttachedUserPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCamListAttachedUserPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cam_list_attached_user_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachType = config.attachType;
    this._id = config.id;
    this._keyword = config.keyword;
    this._resultOutputFile = config.resultOutputFile;
    this._strategyType = config.strategyType;
    this._targetUin = config.targetUin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attach_type - computed: false, optional: false, required: true
  private _attachType?: number; 
  public get attachType() {
    return this.getNumberAttribute('attach_type');
  }
  public set attachType(value: number) {
    this._attachType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachTypeInput() {
    return this._attachType;
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

  // keyword - computed: false, optional: true, required: false
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  public resetKeyword() {
    this._keyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // policy_list - computed: true, optional: false, required: false
  private _policyList = new DataTencentcloudCamListAttachedUserPolicyPolicyListStructList(this, "policy_list", false);
  public get policyList() {
    return this._policyList;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // strategy_type - computed: false, optional: true, required: false
  private _strategyType?: number; 
  public get strategyType() {
    return this.getNumberAttribute('strategy_type');
  }
  public set strategyType(value: number) {
    this._strategyType = value;
  }
  public resetStrategyType() {
    this._strategyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyTypeInput() {
    return this._strategyType;
  }

  // target_uin - computed: false, optional: false, required: true
  private _targetUin?: number; 
  public get targetUin() {
    return this.getNumberAttribute('target_uin');
  }
  public set targetUin(value: number) {
    this._targetUin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUinInput() {
    return this._targetUin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attach_type: cdktf.numberToTerraform(this._attachType),
      id: cdktf.stringToTerraform(this._id),
      keyword: cdktf.stringToTerraform(this._keyword),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      strategy_type: cdktf.numberToTerraform(this._strategyType),
      target_uin: cdktf.numberToTerraform(this._targetUin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attach_type: {
        value: cdktf.numberToHclTerraform(this._attachType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyword: {
        value: cdktf.stringToHclTerraform(this._keyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategy_type: {
        value: cdktf.numberToHclTerraform(this._strategyType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_uin: {
        value: cdktf.numberToHclTerraform(this._targetUin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
