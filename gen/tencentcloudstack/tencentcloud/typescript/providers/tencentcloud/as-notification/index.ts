// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_notification#id AsNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of Notification Types that trigger notifications. Acceptable values are `SCALE_OUT_FAILED`, `SCALE_IN_SUCCESSFUL`, `SCALE_IN_FAILED`, `REPLACE_UNHEALTHY_INSTANCE_SUCCESSFUL` and `REPLACE_UNHEALTHY_INSTANCE_FAILED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_notification#notification_types AsNotification#notification_types}
  */
  readonly notificationTypes: string[];
  /**
  * A group of user IDs to be notified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_notification#notification_user_group_ids AsNotification#notification_user_group_ids}
  */
  readonly notificationUserGroupIds: string[];
  /**
  * ID of a scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_notification#scaling_group_id AsNotification#scaling_group_id}
  */
  readonly scalingGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_notification tencentcloud_as_notification}
*/
export class AsNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_as_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsNotification to import
  * @param importFromId The id of the existing AsNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_as_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/as_notification tencentcloud_as_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: AsNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_as_notification',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._notificationTypes = config.notificationTypes;
    this._notificationUserGroupIds = config.notificationUserGroupIds;
    this._scalingGroupId = config.scalingGroupId;
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

  // notification_types - computed: false, optional: false, required: true
  private _notificationTypes?: string[]; 
  public get notificationTypes() {
    return this.getListAttribute('notification_types');
  }
  public set notificationTypes(value: string[]) {
    this._notificationTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypesInput() {
    return this._notificationTypes;
  }

  // notification_user_group_ids - computed: false, optional: false, required: true
  private _notificationUserGroupIds?: string[]; 
  public get notificationUserGroupIds() {
    return this.getListAttribute('notification_user_group_ids');
  }
  public set notificationUserGroupIds(value: string[]) {
    this._notificationUserGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationUserGroupIdsInput() {
    return this._notificationUserGroupIds;
  }

  // scaling_group_id - computed: false, optional: false, required: true
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      notification_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationTypes),
      notification_user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationUserGroupIds),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
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
      notification_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      notification_user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationUserGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
