// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/pts_alert_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PtsAlertChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * AMP Consumer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/pts_alert_channel#amp_consumer_id PtsAlertChannel#amp_consumer_id}
  */
  readonly ampConsumerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/pts_alert_channel#id PtsAlertChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Notice ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/pts_alert_channel#notice_id PtsAlertChannel#notice_id}
  */
  readonly noticeId: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/pts_alert_channel#project_id PtsAlertChannel#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/pts_alert_channel tencentcloud_pts_alert_channel}
*/
export class PtsAlertChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_pts_alert_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PtsAlertChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PtsAlertChannel to import
  * @param importFromId The id of the existing PtsAlertChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/pts_alert_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PtsAlertChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_pts_alert_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/pts_alert_channel tencentcloud_pts_alert_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PtsAlertChannelConfig
  */
  public constructor(scope: Construct, id: string, config: PtsAlertChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_pts_alert_channel',
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
    this._ampConsumerId = config.ampConsumerId;
    this._id = config.id;
    this._noticeId = config.noticeId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amp_consumer_id - computed: false, optional: true, required: false
  private _ampConsumerId?: string; 
  public get ampConsumerId() {
    return this.getStringAttribute('amp_consumer_id');
  }
  public set ampConsumerId(value: string) {
    this._ampConsumerId = value;
  }
  public resetAmpConsumerId() {
    this._ampConsumerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ampConsumerIdInput() {
    return this._ampConsumerId;
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getNumberAttribute('app_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // notice_id - computed: false, optional: false, required: true
  private _noticeId?: string; 
  public get noticeId() {
    return this.getStringAttribute('notice_id');
  }
  public set noticeId(value: string) {
    this._noticeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeIdInput() {
    return this._noticeId;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // sub_account_uin - computed: true, optional: false, required: false
  public get subAccountUin() {
    return this.getStringAttribute('sub_account_uin');
  }

  // uin - computed: true, optional: false, required: false
  public get uin() {
    return this.getStringAttribute('uin');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amp_consumer_id: cdktf.stringToTerraform(this._ampConsumerId),
      id: cdktf.stringToTerraform(this._id),
      notice_id: cdktf.stringToTerraform(this._noticeId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amp_consumer_id: {
        value: cdktf.stringToHclTerraform(this._ampConsumerId),
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
      notice_id: {
        value: cdktf.stringToHclTerraform(this._noticeId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
