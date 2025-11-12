// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/team_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktapamTeamSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Team name is populated as the ID for team settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/team_settings#id DataOktapamTeamSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/team_settings oktapam_team_settings}
*/
export class DataOktapamTeamSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_team_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktapamTeamSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktapamTeamSettings to import
  * @param importFromId The id of the existing DataOktapamTeamSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/team_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktapamTeamSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_team_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/team_settings oktapam_team_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktapamTeamSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktapamTeamSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_team_settings',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approve_device_without_interaction - computed: true, optional: false, required: false
  public get approveDeviceWithoutInteraction() {
    return this.getBooleanAttribute('approve_device_without_interaction');
  }

  // client_session_duration - computed: true, optional: false, required: false
  public get clientSessionDuration() {
    return this.getNumberAttribute('client_session_duration');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_user_sid - computed: true, optional: false, required: false
  public get includeUserSid() {
    return this.getStringAttribute('include_user_sid');
  }

  // reactivate_users_via_idp - computed: true, optional: false, required: false
  public get reactivateUsersViaIdp() {
    return this.getBooleanAttribute('reactivate_users_via_idp');
  }

  // user_provisioning_exact_username - computed: true, optional: false, required: false
  public get userProvisioningExactUsername() {
    return this.getBooleanAttribute('user_provisioning_exact_username');
  }

  // web_session_duration - computed: true, optional: false, required: false
  public get webSessionDuration() {
    return this.getNumberAttribute('web_session_duration');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
