// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/data-sources/monitor_notification_channel_slack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSysdigMonitorNotificationChannelSlackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/data-sources/monitor_notification_channel_slack#enabled DataSysdigMonitorNotificationChannelSlack#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/data-sources/monitor_notification_channel_slack#id DataSysdigMonitorNotificationChannelSlack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/data-sources/monitor_notification_channel_slack#name DataSysdigMonitorNotificationChannelSlack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/data-sources/monitor_notification_channel_slack#notify_when_ok DataSysdigMonitorNotificationChannelSlack#notify_when_ok}
  */
  readonly notifyWhenOk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/data-sources/monitor_notification_channel_slack#notify_when_resolved DataSysdigMonitorNotificationChannelSlack#notify_when_resolved}
  */
  readonly notifyWhenResolved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/data-sources/monitor_notification_channel_slack#send_test_notification DataSysdigMonitorNotificationChannelSlack#send_test_notification}
  */
  readonly sendTestNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/data-sources/monitor_notification_channel_slack#share_with_current_team DataSysdigMonitorNotificationChannelSlack#share_with_current_team}
  */
  readonly shareWithCurrentTeam?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/data-sources/monitor_notification_channel_slack#timeouts DataSysdigMonitorNotificationChannelSlack#timeouts}
  */
  readonly timeouts?: DataSysdigMonitorNotificationChannelSlackTimeouts;
}
export interface DataSysdigMonitorNotificationChannelSlackTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/data-sources/monitor_notification_channel_slack#read DataSysdigMonitorNotificationChannelSlack#read}
  */
  readonly read?: string;
}

export function dataSysdigMonitorNotificationChannelSlackTimeoutsToTerraform(struct?: DataSysdigMonitorNotificationChannelSlackTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataSysdigMonitorNotificationChannelSlackTimeoutsToHclTerraform(struct?: DataSysdigMonitorNotificationChannelSlackTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSysdigMonitorNotificationChannelSlackTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSysdigMonitorNotificationChannelSlackTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSysdigMonitorNotificationChannelSlackTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/data-sources/monitor_notification_channel_slack sysdig_monitor_notification_channel_slack}
*/
export class DataSysdigMonitorNotificationChannelSlack extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_monitor_notification_channel_slack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSysdigMonitorNotificationChannelSlack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSysdigMonitorNotificationChannelSlack to import
  * @param importFromId The id of the existing DataSysdigMonitorNotificationChannelSlack that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/data-sources/monitor_notification_channel_slack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSysdigMonitorNotificationChannelSlack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_monitor_notification_channel_slack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/data-sources/monitor_notification_channel_slack sysdig_monitor_notification_channel_slack} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSysdigMonitorNotificationChannelSlackConfig
  */
  public constructor(scope: Construct, id: string, config: DataSysdigMonitorNotificationChannelSlackConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_monitor_notification_channel_slack',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._notifyWhenOk = config.notifyWhenOk;
    this._notifyWhenResolved = config.notifyWhenResolved;
    this._sendTestNotification = config.sendTestNotification;
    this._shareWithCurrentTeam = config.shareWithCurrentTeam;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // is_private_channel - computed: true, optional: false, required: false
  public get isPrivateChannel() {
    return this.getBooleanAttribute('is_private_channel');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notify_when_ok - computed: false, optional: true, required: false
  private _notifyWhenOk?: boolean | cdktf.IResolvable; 
  public get notifyWhenOk() {
    return this.getBooleanAttribute('notify_when_ok');
  }
  public set notifyWhenOk(value: boolean | cdktf.IResolvable) {
    this._notifyWhenOk = value;
  }
  public resetNotifyWhenOk() {
    this._notifyWhenOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyWhenOkInput() {
    return this._notifyWhenOk;
  }

  // notify_when_resolved - computed: false, optional: true, required: false
  private _notifyWhenResolved?: boolean | cdktf.IResolvable; 
  public get notifyWhenResolved() {
    return this.getBooleanAttribute('notify_when_resolved');
  }
  public set notifyWhenResolved(value: boolean | cdktf.IResolvable) {
    this._notifyWhenResolved = value;
  }
  public resetNotifyWhenResolved() {
    this._notifyWhenResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyWhenResolvedInput() {
    return this._notifyWhenResolved;
  }

  // private_channel_url - computed: true, optional: false, required: false
  public get privateChannelUrl() {
    return this.getStringAttribute('private_channel_url');
  }

  // send_test_notification - computed: false, optional: true, required: false
  private _sendTestNotification?: boolean | cdktf.IResolvable; 
  public get sendTestNotification() {
    return this.getBooleanAttribute('send_test_notification');
  }
  public set sendTestNotification(value: boolean | cdktf.IResolvable) {
    this._sendTestNotification = value;
  }
  public resetSendTestNotification() {
    this._sendTestNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTestNotificationInput() {
    return this._sendTestNotification;
  }

  // share_with_current_team - computed: false, optional: true, required: false
  private _shareWithCurrentTeam?: boolean | cdktf.IResolvable; 
  public get shareWithCurrentTeam() {
    return this.getBooleanAttribute('share_with_current_team');
  }
  public set shareWithCurrentTeam(value: boolean | cdktf.IResolvable) {
    this._shareWithCurrentTeam = value;
  }
  public resetShareWithCurrentTeam() {
    this._shareWithCurrentTeam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareWithCurrentTeamInput() {
    return this._shareWithCurrentTeam;
  }

  // show_section_alert_details - computed: true, optional: false, required: false
  public get showSectionAlertDetails() {
    return this.getBooleanAttribute('show_section_alert_details');
  }

  // show_section_capturing_information - computed: true, optional: false, required: false
  public get showSectionCapturingInformation() {
    return this.getBooleanAttribute('show_section_capturing_information');
  }

  // show_section_dashboard_links - computed: true, optional: false, required: false
  public get showSectionDashboardLinks() {
    return this.getBooleanAttribute('show_section_dashboard_links');
  }

  // show_section_event_details - computed: true, optional: false, required: false
  public get showSectionEventDetails() {
    return this.getBooleanAttribute('show_section_event_details');
  }

  // show_section_notification_chart - computed: true, optional: false, required: false
  public get showSectionNotificationChart() {
    return this.getBooleanAttribute('show_section_notification_chart');
  }

  // show_section_runbook_links - computed: true, optional: false, required: false
  public get showSectionRunbookLinks() {
    return this.getBooleanAttribute('show_section_runbook_links');
  }

  // show_section_user_defined_content - computed: true, optional: false, required: false
  public get showSectionUserDefinedContent() {
    return this.getBooleanAttribute('show_section_user_defined_content');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSysdigMonitorNotificationChannelSlackTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSysdigMonitorNotificationChannelSlackTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notify_when_ok: cdktf.booleanToTerraform(this._notifyWhenOk),
      notify_when_resolved: cdktf.booleanToTerraform(this._notifyWhenResolved),
      send_test_notification: cdktf.booleanToTerraform(this._sendTestNotification),
      share_with_current_team: cdktf.booleanToTerraform(this._shareWithCurrentTeam),
      timeouts: dataSysdigMonitorNotificationChannelSlackTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_when_ok: {
        value: cdktf.booleanToHclTerraform(this._notifyWhenOk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_when_resolved: {
        value: cdktf.booleanToHclTerraform(this._notifyWhenResolved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_test_notification: {
        value: cdktf.booleanToHclTerraform(this._sendTestNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      share_with_current_team: {
        value: cdktf.booleanToHclTerraform(this._shareWithCurrentTeam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: dataSysdigMonitorNotificationChannelSlackTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSysdigMonitorNotificationChannelSlackTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
