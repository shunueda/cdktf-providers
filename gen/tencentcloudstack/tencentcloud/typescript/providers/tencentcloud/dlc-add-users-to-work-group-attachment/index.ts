// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dlc_add_users_to_work_group_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcAddUsersToWorkGroupAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dlc_add_users_to_work_group_attachment#id DlcAddUsersToWorkGroupAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * add_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dlc_add_users_to_work_group_attachment#add_info DlcAddUsersToWorkGroupAttachment#add_info}
  */
  readonly addInfo: DlcAddUsersToWorkGroupAttachmentAddInfo;
}
export interface DlcAddUsersToWorkGroupAttachmentAddInfo {
  /**
  * User ID which matches the Uin on the CAM side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dlc_add_users_to_work_group_attachment#user_ids DlcAddUsersToWorkGroupAttachment#user_ids}
  */
  readonly userIds: string[];
  /**
  * Working group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dlc_add_users_to_work_group_attachment#work_group_id DlcAddUsersToWorkGroupAttachment#work_group_id}
  */
  readonly workGroupId: number;
}

export function dlcAddUsersToWorkGroupAttachmentAddInfoToTerraform(struct?: DlcAddUsersToWorkGroupAttachmentAddInfoOutputReference | DlcAddUsersToWorkGroupAttachmentAddInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userIds),
    work_group_id: cdktf.numberToTerraform(struct!.workGroupId),
  }
}


export function dlcAddUsersToWorkGroupAttachmentAddInfoToHclTerraform(struct?: DlcAddUsersToWorkGroupAttachmentAddInfoOutputReference | DlcAddUsersToWorkGroupAttachmentAddInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    work_group_id: {
      value: cdktf.numberToHclTerraform(struct!.workGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcAddUsersToWorkGroupAttachmentAddInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcAddUsersToWorkGroupAttachmentAddInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIds = this._userIds;
    }
    if (this._workGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workGroupId = this._workGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcAddUsersToWorkGroupAttachmentAddInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userIds = undefined;
      this._workGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userIds = value.userIds;
      this._workGroupId = value.workGroupId;
    }
  }

  // user_ids - computed: false, optional: false, required: true
  private _userIds?: string[]; 
  public get userIds() {
    return cdktf.Fn.tolist(this.getListAttribute('user_ids'));
  }
  public set userIds(value: string[]) {
    this._userIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // work_group_id - computed: false, optional: false, required: true
  private _workGroupId?: number; 
  public get workGroupId() {
    return this.getNumberAttribute('work_group_id');
  }
  public set workGroupId(value: number) {
    this._workGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupIdInput() {
    return this._workGroupId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dlc_add_users_to_work_group_attachment tencentcloud_dlc_add_users_to_work_group_attachment}
*/
export class DlcAddUsersToWorkGroupAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_add_users_to_work_group_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcAddUsersToWorkGroupAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcAddUsersToWorkGroupAttachment to import
  * @param importFromId The id of the existing DlcAddUsersToWorkGroupAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dlc_add_users_to_work_group_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcAddUsersToWorkGroupAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_add_users_to_work_group_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dlc_add_users_to_work_group_attachment tencentcloud_dlc_add_users_to_work_group_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcAddUsersToWorkGroupAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DlcAddUsersToWorkGroupAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_add_users_to_work_group_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
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
  private _addInfo = new DlcAddUsersToWorkGroupAttachmentAddInfoOutputReference(this, "add_info");
  public get addInfo() {
    return this._addInfo;
  }
  public putAddInfo(value: DlcAddUsersToWorkGroupAttachmentAddInfo) {
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
      add_info: dlcAddUsersToWorkGroupAttachmentAddInfoToTerraform(this._addInfo.internalValue),
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
        value: dlcAddUsersToWorkGroupAttachmentAddInfoToHclTerraform(this._addInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcAddUsersToWorkGroupAttachmentAddInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
