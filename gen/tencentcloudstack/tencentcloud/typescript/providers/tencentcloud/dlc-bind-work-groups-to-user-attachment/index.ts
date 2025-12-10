// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dlc_bind_work_groups_to_user_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcBindWorkGroupsToUserAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dlc_bind_work_groups_to_user_attachment#id DlcBindWorkGroupsToUserAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * add_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dlc_bind_work_groups_to_user_attachment#add_info DlcBindWorkGroupsToUserAttachment#add_info}
  */
  readonly addInfo: DlcBindWorkGroupsToUserAttachmentAddInfo;
}
export interface DlcBindWorkGroupsToUserAttachmentAddInfo {
  /**
  * User ID, which matches Uin on the CAM side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dlc_bind_work_groups_to_user_attachment#user_id DlcBindWorkGroupsToUserAttachment#user_id}
  */
  readonly userId: string;
  /**
  * Collections of IDs of working groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dlc_bind_work_groups_to_user_attachment#work_group_ids DlcBindWorkGroupsToUserAttachment#work_group_ids}
  */
  readonly workGroupIds: number[];
}

export function dlcBindWorkGroupsToUserAttachmentAddInfoToTerraform(struct?: DlcBindWorkGroupsToUserAttachmentAddInfoOutputReference | DlcBindWorkGroupsToUserAttachmentAddInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_id: cdktf.stringToTerraform(struct!.userId),
    work_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.workGroupIds),
  }
}


export function dlcBindWorkGroupsToUserAttachmentAddInfoToHclTerraform(struct?: DlcBindWorkGroupsToUserAttachmentAddInfoOutputReference | DlcBindWorkGroupsToUserAttachmentAddInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_group_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.workGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcBindWorkGroupsToUserAttachmentAddInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcBindWorkGroupsToUserAttachmentAddInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._workGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.workGroupIds = this._workGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcBindWorkGroupsToUserAttachmentAddInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userId = undefined;
      this._workGroupIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userId = value.userId;
      this._workGroupIds = value.workGroupIds;
    }
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // work_group_ids - computed: false, optional: false, required: true
  private _workGroupIds?: number[]; 
  public get workGroupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('work_group_ids')));
  }
  public set workGroupIds(value: number[]) {
    this._workGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupIdsInput() {
    return this._workGroupIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dlc_bind_work_groups_to_user_attachment tencentcloud_dlc_bind_work_groups_to_user_attachment}
*/
export class DlcBindWorkGroupsToUserAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_bind_work_groups_to_user_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcBindWorkGroupsToUserAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcBindWorkGroupsToUserAttachment to import
  * @param importFromId The id of the existing DlcBindWorkGroupsToUserAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dlc_bind_work_groups_to_user_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcBindWorkGroupsToUserAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_bind_work_groups_to_user_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dlc_bind_work_groups_to_user_attachment tencentcloud_dlc_bind_work_groups_to_user_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcBindWorkGroupsToUserAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DlcBindWorkGroupsToUserAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_bind_work_groups_to_user_attachment',
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
    this._id = config.id;
    this._addInfo.internalValue = config.addInfo;
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

  // add_info - computed: false, optional: false, required: true
  private _addInfo = new DlcBindWorkGroupsToUserAttachmentAddInfoOutputReference(this, "add_info");
  public get addInfo() {
    return this._addInfo;
  }
  public putAddInfo(value: DlcBindWorkGroupsToUserAttachmentAddInfo) {
    this._addInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addInfoInput() {
    return this._addInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      add_info: dlcBindWorkGroupsToUserAttachmentAddInfoToTerraform(this._addInfo.internalValue),
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
      add_info: {
        value: dlcBindWorkGroupsToUserAttachmentAddInfoToHclTerraform(this._addInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcBindWorkGroupsToUserAttachmentAddInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
