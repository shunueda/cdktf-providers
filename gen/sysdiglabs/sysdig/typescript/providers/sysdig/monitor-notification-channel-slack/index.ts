// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorNotificationChannelSlackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#channel MonitorNotificationChannelSlack#channel}
  */
  readonly channel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#enabled MonitorNotificationChannelSlack#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#id MonitorNotificationChannelSlack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#is_private_channel MonitorNotificationChannelSlack#is_private_channel}
  */
  readonly isPrivateChannel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#name MonitorNotificationChannelSlack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#notify_when_ok MonitorNotificationChannelSlack#notify_when_ok}
  */
  readonly notifyWhenOk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#notify_when_resolved MonitorNotificationChannelSlack#notify_when_resolved}
  */
  readonly notifyWhenResolved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#private_channel_url MonitorNotificationChannelSlack#private_channel_url}
  */
  readonly privateChannelUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#send_test_notification MonitorNotificationChannelSlack#send_test_notification}
  */
  readonly sendTestNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#share_with_current_team MonitorNotificationChannelSlack#share_with_current_team}
  */
  readonly shareWithCurrentTeam?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#show_section_alert_details MonitorNotificationChannelSlack#show_section_alert_details}
  */
  readonly showSectionAlertDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#show_section_capturing_information MonitorNotificationChannelSlack#show_section_capturing_information}
  */
  readonly showSectionCapturingInformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#show_section_dashboard_links MonitorNotificationChannelSlack#show_section_dashboard_links}
  */
  readonly showSectionDashboardLinks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#show_section_event_details MonitorNotificationChannelSlack#show_section_event_details}
  */
  readonly showSectionEventDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#show_section_notification_chart MonitorNotificationChannelSlack#show_section_notification_chart}
  */
  readonly showSectionNotificationChart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#show_section_runbook_links MonitorNotificationChannelSlack#show_section_runbook_links}
  */
  readonly showSectionRunbookLinks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#show_section_user_defined_content MonitorNotificationChannelSlack#show_section_user_defined_content}
  */
  readonly showSectionUserDefinedContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#url MonitorNotificationChannelSlack#url}
  */
  readonly url: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#timeouts MonitorNotificationChannelSlack#timeouts}
  */
  readonly timeouts?: MonitorNotificationChannelSlackTimeouts;
}
export interface MonitorNotificationChannelSlackTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#create MonitorNotificationChannelSlack#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#delete MonitorNotificationChannelSlack#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#read MonitorNotificationChannelSlack#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#update MonitorNotificationChannelSlack#update}
  */
  readonly update?: string;
}

export function monitorNotificationChannelSlackTimeoutsToTerraform(struct?: MonitorNotificationChannelSlackTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function monitorNotificationChannelSlackTimeoutsToHclTerraform(struct?: MonitorNotificationChannelSlackTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorNotificationChannelSlackTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorNotificationChannelSlackTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorNotificationChannelSlackTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack sysdig_monitor_notification_channel_slack}
*/
export class MonitorNotificationChannelSlack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_monitor_notification_channel_slack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorNotificationChannelSlack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorNotificationChannelSlack to import
  * @param importFromId The id of the existing MonitorNotificationChannelSlack that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorNotificationChannelSlack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_monitor_notification_channel_slack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_notification_channel_slack sysdig_monitor_notification_channel_slack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorNotificationChannelSlackConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorNotificationChannelSlackConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_monitor_notification_channel_slack',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.3.1',
        providerVersionConstraint: '3.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channel = config.channel;
    this._enabled = config.enabled;
    this._id = config.id;
    this._isPrivateChannel = config.isPrivateChannel;
    this._name = config.name;
    this._notifyWhenOk = config.notifyWhenOk;
    this._notifyWhenResolved = config.notifyWhenResolved;
    this._privateChannelUrl = config.privateChannelUrl;
    this._sendTestNotification = config.sendTestNotification;
    this._shareWithCurrentTeam = config.shareWithCurrentTeam;
    this._showSectionAlertDetails = config.showSectionAlertDetails;
    this._showSectionCapturingInformation = config.showSectionCapturingInformation;
    this._showSectionDashboardLinks = config.showSectionDashboardLinks;
    this._showSectionEventDetails = config.showSectionEventDetails;
    this._showSectionNotificationChart = config.showSectionNotificationChart;
    this._showSectionRunbookLinks = config.showSectionRunbookLinks;
    this._showSectionUserDefinedContent = config.showSectionUserDefinedContent;
    this._url = config.url;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
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

  // is_private_channel - computed: false, optional: true, required: false
  private _isPrivateChannel?: boolean | cdktf.IResolvable; 
  public get isPrivateChannel() {
    return this.getBooleanAttribute('is_private_channel');
  }
  public set isPrivateChannel(value: boolean | cdktf.IResolvable) {
    this._isPrivateChannel = value;
  }
  public resetIsPrivateChannel() {
    this._isPrivateChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateChannelInput() {
    return this._isPrivateChannel;
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

  // private_channel_url - computed: false, optional: true, required: false
  private _privateChannelUrl?: string; 
  public get privateChannelUrl() {
    return this.getStringAttribute('private_channel_url');
  }
  public set privateChannelUrl(value: string) {
    this._privateChannelUrl = value;
  }
  public resetPrivateChannelUrl() {
    this._privateChannelUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateChannelUrlInput() {
    return this._privateChannelUrl;
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

  // show_section_alert_details - computed: false, optional: true, required: false
  private _showSectionAlertDetails?: boolean | cdktf.IResolvable; 
  public get showSectionAlertDetails() {
    return this.getBooleanAttribute('show_section_alert_details');
  }
  public set showSectionAlertDetails(value: boolean | cdktf.IResolvable) {
    this._showSectionAlertDetails = value;
  }
  public resetShowSectionAlertDetails() {
    this._showSectionAlertDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSectionAlertDetailsInput() {
    return this._showSectionAlertDetails;
  }

  // show_section_capturing_information - computed: false, optional: true, required: false
  private _showSectionCapturingInformation?: boolean | cdktf.IResolvable; 
  public get showSectionCapturingInformation() {
    return this.getBooleanAttribute('show_section_capturing_information');
  }
  public set showSectionCapturingInformation(value: boolean | cdktf.IResolvable) {
    this._showSectionCapturingInformation = value;
  }
  public resetShowSectionCapturingInformation() {
    this._showSectionCapturingInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSectionCapturingInformationInput() {
    return this._showSectionCapturingInformation;
  }

  // show_section_dashboard_links - computed: false, optional: true, required: false
  private _showSectionDashboardLinks?: boolean | cdktf.IResolvable; 
  public get showSectionDashboardLinks() {
    return this.getBooleanAttribute('show_section_dashboard_links');
  }
  public set showSectionDashboardLinks(value: boolean | cdktf.IResolvable) {
    this._showSectionDashboardLinks = value;
  }
  public resetShowSectionDashboardLinks() {
    this._showSectionDashboardLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSectionDashboardLinksInput() {
    return this._showSectionDashboardLinks;
  }

  // show_section_event_details - computed: false, optional: true, required: false
  private _showSectionEventDetails?: boolean | cdktf.IResolvable; 
  public get showSectionEventDetails() {
    return this.getBooleanAttribute('show_section_event_details');
  }
  public set showSectionEventDetails(value: boolean | cdktf.IResolvable) {
    this._showSectionEventDetails = value;
  }
  public resetShowSectionEventDetails() {
    this._showSectionEventDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSectionEventDetailsInput() {
    return this._showSectionEventDetails;
  }

  // show_section_notification_chart - computed: false, optional: true, required: false
  private _showSectionNotificationChart?: boolean | cdktf.IResolvable; 
  public get showSectionNotificationChart() {
    return this.getBooleanAttribute('show_section_notification_chart');
  }
  public set showSectionNotificationChart(value: boolean | cdktf.IResolvable) {
    this._showSectionNotificationChart = value;
  }
  public resetShowSectionNotificationChart() {
    this._showSectionNotificationChart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSectionNotificationChartInput() {
    return this._showSectionNotificationChart;
  }

  // show_section_runbook_links - computed: false, optional: true, required: false
  private _showSectionRunbookLinks?: boolean | cdktf.IResolvable; 
  public get showSectionRunbookLinks() {
    return this.getBooleanAttribute('show_section_runbook_links');
  }
  public set showSectionRunbookLinks(value: boolean | cdktf.IResolvable) {
    this._showSectionRunbookLinks = value;
  }
  public resetShowSectionRunbookLinks() {
    this._showSectionRunbookLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSectionRunbookLinksInput() {
    return this._showSectionRunbookLinks;
  }

  // show_section_user_defined_content - computed: false, optional: true, required: false
  private _showSectionUserDefinedContent?: boolean | cdktf.IResolvable; 
  public get showSectionUserDefinedContent() {
    return this.getBooleanAttribute('show_section_user_defined_content');
  }
  public set showSectionUserDefinedContent(value: boolean | cdktf.IResolvable) {
    this._showSectionUserDefinedContent = value;
  }
  public resetShowSectionUserDefinedContent() {
    this._showSectionUserDefinedContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSectionUserDefinedContentInput() {
    return this._showSectionUserDefinedContent;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorNotificationChannelSlackTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorNotificationChannelSlackTimeouts) {
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
      channel: cdktf.stringToTerraform(this._channel),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      is_private_channel: cdktf.booleanToTerraform(this._isPrivateChannel),
      name: cdktf.stringToTerraform(this._name),
      notify_when_ok: cdktf.booleanToTerraform(this._notifyWhenOk),
      notify_when_resolved: cdktf.booleanToTerraform(this._notifyWhenResolved),
      private_channel_url: cdktf.stringToTerraform(this._privateChannelUrl),
      send_test_notification: cdktf.booleanToTerraform(this._sendTestNotification),
      share_with_current_team: cdktf.booleanToTerraform(this._shareWithCurrentTeam),
      show_section_alert_details: cdktf.booleanToTerraform(this._showSectionAlertDetails),
      show_section_capturing_information: cdktf.booleanToTerraform(this._showSectionCapturingInformation),
      show_section_dashboard_links: cdktf.booleanToTerraform(this._showSectionDashboardLinks),
      show_section_event_details: cdktf.booleanToTerraform(this._showSectionEventDetails),
      show_section_notification_chart: cdktf.booleanToTerraform(this._showSectionNotificationChart),
      show_section_runbook_links: cdktf.booleanToTerraform(this._showSectionRunbookLinks),
      show_section_user_defined_content: cdktf.booleanToTerraform(this._showSectionUserDefinedContent),
      url: cdktf.stringToTerraform(this._url),
      timeouts: monitorNotificationChannelSlackTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      is_private_channel: {
        value: cdktf.booleanToHclTerraform(this._isPrivateChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      private_channel_url: {
        value: cdktf.stringToHclTerraform(this._privateChannelUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      show_section_alert_details: {
        value: cdktf.booleanToHclTerraform(this._showSectionAlertDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_section_capturing_information: {
        value: cdktf.booleanToHclTerraform(this._showSectionCapturingInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_section_dashboard_links: {
        value: cdktf.booleanToHclTerraform(this._showSectionDashboardLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_section_event_details: {
        value: cdktf.booleanToHclTerraform(this._showSectionEventDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_section_notification_chart: {
        value: cdktf.booleanToHclTerraform(this._showSectionNotificationChart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_section_runbook_links: {
        value: cdktf.booleanToHclTerraform(this._showSectionRunbookLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_section_user_defined_content: {
        value: cdktf.booleanToHclTerraform(this._showSectionUserDefinedContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: monitorNotificationChannelSlackTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorNotificationChannelSlackTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
