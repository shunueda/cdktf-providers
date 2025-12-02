// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/role_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/role_subscription#id RoleSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the notification. Valid values: 
  * 	- 'CONNECTOR_AGENT' -  Disconnects and reconnects: On-prem provisioning, on-prem MFA agents, and RADIUS server agent.
  * 	- 'USER_LOCKED_OUT' - User lockouts.
  * 	- 'APP_IMPORT' - App user import status.
  * 	- 'LDAP_AGENT' - Disconnects and reconnects: LDAP agent.
  * 	- 'AD_AGENT' - Disconnects and reconnects: AD agent.
  * 	- 'OKTA_ANNOUNCEMENT' - Okta release notes and announcements.
  * 	- 'OKTA_UPDATE' - Scheduled system updates.
  * 	- 'IWA_AGENT' - Disconnects and reconnects: IWA agent.
  * 	- 'USER_DEPROVISION' - User deprovisions.
  * 	- 'REPORT_SUSPICIOUS_ACTIVITY' - User reporting of suspicious activity.
  * 	- 'RATELIMIT_NOTIFICATION' - Rate limit warning and violation.
  * 	- 'AGENT_AUTO_UPDATE_NOTIFICATION' - Agent auto-update notifications: AD Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/role_subscription#notification_type RoleSubscription#notification_type}
  */
  readonly notificationType: string;
  /**
  * Type of the role. Valid values:
  * 	'API_ADMIN',
  * 	'APP_ADMIN',
  * 	'CUSTOM',
  * 	'GROUP_MEMBERSHIP_ADMIN',
  * 	'HELP_DESK_ADMIN',
  * 	'MOBILE_ADMIN',
  * 	'ORG_ADMIN',
  * 	'READ_ONLY_ADMIN',
  * 	'REPORT_ADMIN',
  * 	'SUPER_ADMIN',
  * 	'USER_ADMIN'
  * 	. See [API docs](https://developer.okta.com/docs/reference/api/admin-notifications/#role-types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/role_subscription#role_type RoleSubscription#role_type}
  */
  readonly roleType: string;
  /**
  * Subscription status. Valid values: `subscribed`, `unsubscribed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/role_subscription#status RoleSubscription#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/role_subscription okta_role_subscription}
*/
export class RoleSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_role_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoleSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoleSubscription to import
  * @param importFromId The id of the existing RoleSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/role_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoleSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_role_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/role_subscription okta_role_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: RoleSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_role_subscription',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
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
    this._notificationType = config.notificationType;
    this._roleType = config.roleType;
    this._status = config.status;
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

  // notification_type - computed: false, optional: false, required: true
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // role_type - computed: false, optional: false, required: true
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      role_type: cdktf.stringToTerraform(this._roleType),
      status: cdktf.stringToTerraform(this._status),
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
      notification_type: {
        value: cdktf.stringToHclTerraform(this._notificationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_type: {
        value: cdktf.stringToHclTerraform(this._roleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
