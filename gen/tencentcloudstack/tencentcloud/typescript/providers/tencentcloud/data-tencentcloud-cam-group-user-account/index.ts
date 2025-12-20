// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cam_group_user_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCamGroupUserAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cam_group_user_account#id DataTencentcloudCamGroupUserAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cam_group_user_account#result_output_file DataTencentcloudCamGroupUserAccount#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Number per page. The default is 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cam_group_user_account#rp DataTencentcloudCamGroupUserAccount#rp}
  */
  readonly rp?: number;
  /**
  * Sub-user uin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cam_group_user_account#sub_uin DataTencentcloudCamGroupUserAccount#sub_uin}
  */
  readonly subUin?: number;
  /**
  * Sub-user uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cam_group_user_account#uid DataTencentcloudCamGroupUserAccount#uid}
  */
  readonly uid?: number;
}
export interface DataTencentcloudCamGroupUserAccountGroupInfo {
}

export function dataTencentcloudCamGroupUserAccountGroupInfoToTerraform(struct?: DataTencentcloudCamGroupUserAccountGroupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCamGroupUserAccountGroupInfoToHclTerraform(struct?: DataTencentcloudCamGroupUserAccountGroupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCamGroupUserAccountGroupInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCamGroupUserAccountGroupInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCamGroupUserAccountGroupInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }
}

export class DataTencentcloudCamGroupUserAccountGroupInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCamGroupUserAccountGroupInfoOutputReference {
    return new DataTencentcloudCamGroupUserAccountGroupInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cam_group_user_account tencentcloud_cam_group_user_account}
*/
export class DataTencentcloudCamGroupUserAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cam_group_user_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCamGroupUserAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCamGroupUserAccount to import
  * @param importFromId The id of the existing DataTencentcloudCamGroupUserAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cam_group_user_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCamGroupUserAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cam_group_user_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cam_group_user_account tencentcloud_cam_group_user_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCamGroupUserAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCamGroupUserAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cam_group_user_account',
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
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._rp = config.rp;
    this._subUin = config.subUin;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_info - computed: true, optional: false, required: false
  private _groupInfo = new DataTencentcloudCamGroupUserAccountGroupInfoList(this, "group_info", false);
  public get groupInfo() {
    return this._groupInfo;
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

  // rp - computed: false, optional: true, required: false
  private _rp?: number; 
  public get rp() {
    return this.getNumberAttribute('rp');
  }
  public set rp(value: number) {
    this._rp = value;
  }
  public resetRp() {
    this._rp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpInput() {
    return this._rp;
  }

  // sub_uin - computed: false, optional: true, required: false
  private _subUin?: number; 
  public get subUin() {
    return this.getNumberAttribute('sub_uin');
  }
  public set subUin(value: number) {
    this._subUin = value;
  }
  public resetSubUin() {
    this._subUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subUinInput() {
    return this._subUin;
  }

  // total_num - computed: true, optional: false, required: false
  public get totalNum() {
    return this.getNumberAttribute('total_num');
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      rp: cdktf.numberToTerraform(this._rp),
      sub_uin: cdktf.numberToTerraform(this._subUin),
      uid: cdktf.numberToTerraform(this._uid),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp: {
        value: cdktf.numberToHclTerraform(this._rp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sub_uin: {
        value: cdktf.numberToHclTerraform(this._subUin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uid: {
        value: cdktf.numberToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
