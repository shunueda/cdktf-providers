// https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/notification_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the integration that is used for sending the notification. Use the `sentry_organization_integration` data source to retrieve an integration. Required if `service_type` is `slack`, `pagerduty` or `opsgenie`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/notification_action#integration_id NotificationAction#integration_id}
  */
  readonly integrationId?: string;
  /**
  * The organization of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/notification_action#organization NotificationAction#organization}
  */
  readonly organization: string;
  /**
  * The list of project slugs that the Notification Action is created for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/notification_action#projects NotificationAction#projects}
  */
  readonly projects: string[];
  /**
  * The service that is used for sending the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/notification_action#service_type NotificationAction#service_type}
  */
  readonly serviceType: string;
  /**
  * The display name of the target that is used for sending the notification (e.g. Slack channel name). Required if `service_type` is `slack` or `opsgenie`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/notification_action#target_display NotificationAction#target_display}
  */
  readonly targetDisplay?: string;
  /**
  * The identifier of the target that is used for sending the notification (e.g. Slack channel ID). Required if `service_type` is `slack` or `opsgenie`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/notification_action#target_identifier NotificationAction#target_identifier}
  */
  readonly targetIdentifier?: string;
  /**
  * The type of trigger that will activate this action. Valid values are `spike-protection`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/notification_action#trigger_type NotificationAction#trigger_type}
  */
  readonly triggerType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/notification_action sentry_notification_action}
*/
export class NotificationAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_notification_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationAction to import
  * @param importFromId The id of the existing NotificationAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/notification_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_notification_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/notification_action sentry_notification_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationActionConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationActionConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_notification_action',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._integrationId = config.integrationId;
    this._organization = config.organization;
    this._projects = config.projects;
    this._serviceType = config.serviceType;
    this._targetDisplay = config.targetDisplay;
    this._targetIdentifier = config.targetIdentifier;
    this._triggerType = config.triggerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // projects - computed: false, optional: false, required: true
  private _projects?: string[]; 
  public get projects() {
    return this.getListAttribute('projects');
  }
  public set projects(value: string[]) {
    this._projects = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // target_display - computed: false, optional: true, required: false
  private _targetDisplay?: string; 
  public get targetDisplay() {
    return this.getStringAttribute('target_display');
  }
  public set targetDisplay(value: string) {
    this._targetDisplay = value;
  }
  public resetTargetDisplay() {
    this._targetDisplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDisplayInput() {
    return this._targetDisplay;
  }

  // target_identifier - computed: false, optional: true, required: false
  private _targetIdentifier?: string; 
  public get targetIdentifier() {
    return this.getStringAttribute('target_identifier');
  }
  public set targetIdentifier(value: string) {
    this._targetIdentifier = value;
  }
  public resetTargetIdentifier() {
    this._targetIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdentifierInput() {
    return this._targetIdentifier;
  }

  // trigger_type - computed: false, optional: false, required: true
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      integration_id: cdktf.stringToTerraform(this._integrationId),
      organization: cdktf.stringToTerraform(this._organization),
      projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projects),
      service_type: cdktf.stringToTerraform(this._serviceType),
      target_display: cdktf.stringToTerraform(this._targetDisplay),
      target_identifier: cdktf.stringToTerraform(this._targetIdentifier),
      trigger_type: cdktf.stringToTerraform(this._triggerType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      projects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projects),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_display: {
        value: cdktf.stringToHclTerraform(this._targetDisplay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_identifier: {
        value: cdktf.stringToHclTerraform(this._targetIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_type: {
        value: cdktf.stringToHclTerraform(this._triggerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
