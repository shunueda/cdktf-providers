// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorNotificationChannelTeamEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#enabled MonitorNotificationChannelTeamEmail#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#id MonitorNotificationChannelTeamEmail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#include_admin_users MonitorNotificationChannelTeamEmail#include_admin_users}
  */
  readonly includeAdminUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#name MonitorNotificationChannelTeamEmail#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#notify_when_ok MonitorNotificationChannelTeamEmail#notify_when_ok}
  */
  readonly notifyWhenOk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#notify_when_resolved MonitorNotificationChannelTeamEmail#notify_when_resolved}
  */
  readonly notifyWhenResolved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#send_test_notification MonitorNotificationChannelTeamEmail#send_test_notification}
  */
  readonly sendTestNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#share_with_current_team MonitorNotificationChannelTeamEmail#share_with_current_team}
  */
  readonly shareWithCurrentTeam?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#team_id MonitorNotificationChannelTeamEmail#team_id}
  */
  readonly teamId: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#timeouts MonitorNotificationChannelTeamEmail#timeouts}
  */
  readonly timeouts?: MonitorNotificationChannelTeamEmailTimeouts;
}
export interface MonitorNotificationChannelTeamEmailTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#create MonitorNotificationChannelTeamEmail#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#delete MonitorNotificationChannelTeamEmail#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#read MonitorNotificationChannelTeamEmail#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#update MonitorNotificationChannelTeamEmail#update}
  */
  readonly update?: string;
}

export function monitorNotificationChannelTeamEmailTimeoutsToTerraform(struct?: MonitorNotificationChannelTeamEmailTimeouts | cdktf.IResolvable): any {
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


export function monitorNotificationChannelTeamEmailTimeoutsToHclTerraform(struct?: MonitorNotificationChannelTeamEmailTimeouts | cdktf.IResolvable): any {
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

export class MonitorNotificationChannelTeamEmailTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorNotificationChannelTeamEmailTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorNotificationChannelTeamEmailTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email sysdig_monitor_notification_channel_team_email}
*/
export class MonitorNotificationChannelTeamEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_monitor_notification_channel_team_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorNotificationChannelTeamEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorNotificationChannelTeamEmail to import
  * @param importFromId The id of the existing MonitorNotificationChannelTeamEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorNotificationChannelTeamEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_monitor_notification_channel_team_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/monitor_notification_channel_team_email sysdig_monitor_notification_channel_team_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorNotificationChannelTeamEmailConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorNotificationChannelTeamEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_monitor_notification_channel_team_email',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.1.0'
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
    this._includeAdminUsers = config.includeAdminUsers;
    this._name = config.name;
    this._notifyWhenOk = config.notifyWhenOk;
    this._notifyWhenResolved = config.notifyWhenResolved;
    this._sendTestNotification = config.sendTestNotification;
    this._shareWithCurrentTeam = config.shareWithCurrentTeam;
    this._teamId = config.teamId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // include_admin_users - computed: false, optional: true, required: false
  private _includeAdminUsers?: boolean | cdktf.IResolvable; 
  public get includeAdminUsers() {
    return this.getBooleanAttribute('include_admin_users');
  }
  public set includeAdminUsers(value: boolean | cdktf.IResolvable) {
    this._includeAdminUsers = value;
  }
  public resetIncludeAdminUsers() {
    this._includeAdminUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAdminUsersInput() {
    return this._includeAdminUsers;
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

  // team_id - computed: false, optional: false, required: true
  private _teamId?: number; 
  public get teamId() {
    return this.getNumberAttribute('team_id');
  }
  public set teamId(value: number) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorNotificationChannelTeamEmailTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorNotificationChannelTeamEmailTimeouts) {
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
      include_admin_users: cdktf.booleanToTerraform(this._includeAdminUsers),
      name: cdktf.stringToTerraform(this._name),
      notify_when_ok: cdktf.booleanToTerraform(this._notifyWhenOk),
      notify_when_resolved: cdktf.booleanToTerraform(this._notifyWhenResolved),
      send_test_notification: cdktf.booleanToTerraform(this._sendTestNotification),
      share_with_current_team: cdktf.booleanToTerraform(this._shareWithCurrentTeam),
      team_id: cdktf.numberToTerraform(this._teamId),
      timeouts: monitorNotificationChannelTeamEmailTimeoutsToTerraform(this._timeouts.internalValue),
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
      include_admin_users: {
        value: cdktf.booleanToHclTerraform(this._includeAdminUsers),
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
      team_id: {
        value: cdktf.numberToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: monitorNotificationChannelTeamEmailTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorNotificationChannelTeamEmailTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
