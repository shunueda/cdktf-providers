// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/notification_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSite24X7NotificationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/notification_profile#id DataSite24X7NotificationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Regular expression denoting the name of the notification profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/notification_profile#name_regex DataSite24X7NotificationProfile#name_regex}
  */
  readonly nameRegex: string;
  /**
  * Configuration denoting whether to raise alerts for downtime only after executing the pre-configured monitor actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/notification_profile#notify_after_executing_actions DataSite24X7NotificationProfile#notify_after_executing_actions}
  */
  readonly notifyAfterExecutingActions?: boolean | cdktf.IResolvable;
  /**
  * Display name for the notification profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/notification_profile#profile_name DataSite24X7NotificationProfile#profile_name}
  */
  readonly profileName?: string;
  /**
  * Configuration denoting whether send root cause analysis when the monitor is down is enabled for this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/notification_profile#rca_needed DataSite24X7NotificationProfile#rca_needed}
  */
  readonly rcaNeeded?: boolean | cdktf.IResolvable;
  /**
  * Configuration denoting whether to stop automation from being executed on the dependent monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/notification_profile#suppress_automation DataSite24X7NotificationProfile#suppress_automation}
  */
  readonly suppressAutomation?: boolean | cdktf.IResolvable;
  /**
  * Email template ID for notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/notification_profile#template_id DataSite24X7NotificationProfile#template_id}
  */
  readonly templateId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/notification_profile site24x7_notification_profile}
*/
export class DataSite24X7NotificationProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_notification_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSite24X7NotificationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSite24X7NotificationProfile to import
  * @param importFromId The id of the existing DataSite24X7NotificationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/notification_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSite24X7NotificationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_notification_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/notification_profile site24x7_notification_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSite24X7NotificationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataSite24X7NotificationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_notification_profile',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3',
        providerVersionConstraint: '2.0.3'
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
    this._nameRegex = config.nameRegex;
    this._notifyAfterExecutingActions = config.notifyAfterExecutingActions;
    this._profileName = config.profileName;
    this._rcaNeeded = config.rcaNeeded;
    this._suppressAutomation = config.suppressAutomation;
    this._templateId = config.templateId;
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

  // matching_ids - computed: true, optional: false, required: false
  public get matchingIds() {
    return this.getListAttribute('matching_ids');
  }

  // matching_ids_and_names - computed: true, optional: false, required: false
  public get matchingIdsAndNames() {
    return this.getListAttribute('matching_ids_and_names');
  }

  // name_regex - computed: false, optional: false, required: true
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // notify_after_executing_actions - computed: false, optional: true, required: false
  private _notifyAfterExecutingActions?: boolean | cdktf.IResolvable; 
  public get notifyAfterExecutingActions() {
    return this.getBooleanAttribute('notify_after_executing_actions');
  }
  public set notifyAfterExecutingActions(value: boolean | cdktf.IResolvable) {
    this._notifyAfterExecutingActions = value;
  }
  public resetNotifyAfterExecutingActions() {
    this._notifyAfterExecutingActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyAfterExecutingActionsInput() {
    return this._notifyAfterExecutingActions;
  }

  // profile_name - computed: true, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // rca_needed - computed: false, optional: true, required: false
  private _rcaNeeded?: boolean | cdktf.IResolvable; 
  public get rcaNeeded() {
    return this.getBooleanAttribute('rca_needed');
  }
  public set rcaNeeded(value: boolean | cdktf.IResolvable) {
    this._rcaNeeded = value;
  }
  public resetRcaNeeded() {
    this._rcaNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcaNeededInput() {
    return this._rcaNeeded;
  }

  // suppress_automation - computed: false, optional: true, required: false
  private _suppressAutomation?: boolean | cdktf.IResolvable; 
  public get suppressAutomation() {
    return this.getBooleanAttribute('suppress_automation');
  }
  public set suppressAutomation(value: boolean | cdktf.IResolvable) {
    this._suppressAutomation = value;
  }
  public resetSuppressAutomation() {
    this._suppressAutomation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressAutomationInput() {
    return this._suppressAutomation;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      notify_after_executing_actions: cdktf.booleanToTerraform(this._notifyAfterExecutingActions),
      profile_name: cdktf.stringToTerraform(this._profileName),
      rca_needed: cdktf.booleanToTerraform(this._rcaNeeded),
      suppress_automation: cdktf.booleanToTerraform(this._suppressAutomation),
      template_id: cdktf.stringToTerraform(this._templateId),
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_after_executing_actions: {
        value: cdktf.booleanToHclTerraform(this._notifyAfterExecutingActions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rca_needed: {
        value: cdktf.booleanToHclTerraform(this._rcaNeeded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suppress_automation: {
        value: cdktf.booleanToHclTerraform(this._suppressAutomation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
