// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ess_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ess_notification#id EssNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ess_notification#notification_arn EssNotification#notification_arn}
  */
  readonly notificationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ess_notification#notification_types EssNotification#notification_types}
  */
  readonly notificationTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ess_notification#scaling_group_id EssNotification#scaling_group_id}
  */
  readonly scalingGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ess_notification alibabacloudstack_ess_notification}
*/
export class EssNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ess_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EssNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EssNotification to import
  * @param importFromId The id of the existing EssNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ess_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EssNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ess_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ess_notification alibabacloudstack_ess_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: EssNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ess_notification',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._notificationArn = config.notificationArn;
    this._notificationTypes = config.notificationTypes;
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

  // notification_arn - computed: false, optional: false, required: true
  private _notificationArn?: string; 
  public get notificationArn() {
    return this.getStringAttribute('notification_arn');
  }
  public set notificationArn(value: string) {
    this._notificationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationArnInput() {
    return this._notificationArn;
  }

  // notification_types - computed: false, optional: false, required: true
  private _notificationTypes?: string[]; 
  public get notificationTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_types'));
  }
  public set notificationTypes(value: string[]) {
    this._notificationTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypesInput() {
    return this._notificationTypes;
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
      notification_arn: cdktf.stringToTerraform(this._notificationArn),
      notification_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationTypes),
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
      notification_arn: {
        value: cdktf.stringToHclTerraform(this._notificationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationTypes),
        isBlock: false,
        type: "set",
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
