// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/monitor_grafana_notification_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorGrafanaNotificationChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * channel name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/monitor_grafana_notification_channel#channel_name MonitorGrafanaNotificationChannel#channel_name}
  */
  readonly channelName?: string;
  /**
  * extra grafana organization id list, default to 1 representing Main Org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/monitor_grafana_notification_channel#extra_org_ids MonitorGrafanaNotificationChannel#extra_org_ids}
  */
  readonly extraOrgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/monitor_grafana_notification_channel#id MonitorGrafanaNotificationChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * grafana instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/monitor_grafana_notification_channel#instance_id MonitorGrafanaNotificationChannel#instance_id}
  */
  readonly instanceId: string;
  /**
  * Grafana organization which channel will be installed, default to 1 representing Main Org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/monitor_grafana_notification_channel#org_id MonitorGrafanaNotificationChannel#org_id}
  */
  readonly orgId?: number;
  /**
  * cloud monitor notification template notice-id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/monitor_grafana_notification_channel#receivers MonitorGrafanaNotificationChannel#receivers}
  */
  readonly receivers?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/monitor_grafana_notification_channel tencentcloud_monitor_grafana_notification_channel}
*/
export class MonitorGrafanaNotificationChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_grafana_notification_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorGrafanaNotificationChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorGrafanaNotificationChannel to import
  * @param importFromId The id of the existing MonitorGrafanaNotificationChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/monitor_grafana_notification_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorGrafanaNotificationChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_grafana_notification_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/monitor_grafana_notification_channel tencentcloud_monitor_grafana_notification_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorGrafanaNotificationChannelConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorGrafanaNotificationChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_grafana_notification_channel',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channelName = config.channelName;
    this._extraOrgIds = config.extraOrgIds;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._orgId = config.orgId;
    this._receivers = config.receivers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // channel_name - computed: true, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // extra_org_ids - computed: false, optional: true, required: false
  private _extraOrgIds?: string[]; 
  public get extraOrgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('extra_org_ids'));
  }
  public set extraOrgIds(value: string[]) {
    this._extraOrgIds = value;
  }
  public resetExtraOrgIds() {
    this._extraOrgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraOrgIdsInput() {
    return this._extraOrgIds;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // org_id - computed: true, optional: true, required: false
  private _orgId?: number; 
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }
  public set orgId(value: number) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // receivers - computed: true, optional: true, required: false
  private _receivers?: string[]; 
  public get receivers() {
    return cdktf.Fn.tolist(this.getListAttribute('receivers'));
  }
  public set receivers(value: string[]) {
    this._receivers = value;
  }
  public resetReceivers() {
    this._receivers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiversInput() {
    return this._receivers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_name: cdktf.stringToTerraform(this._channelName),
      extra_org_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraOrgIds),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      org_id: cdktf.numberToTerraform(this._orgId),
      receivers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._receivers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_name: {
        value: cdktf.stringToHclTerraform(this._channelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_org_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extraOrgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.numberToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      receivers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._receivers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
