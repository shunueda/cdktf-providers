// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_alerts_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NpaPublishersAlertsConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_alerts_configuration#admin_users NpaPublishersAlertsConfiguration#admin_users}
  */
  readonly adminUsers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_alerts_configuration#event_types NpaPublishersAlertsConfiguration#event_types}
  */
  readonly eventTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_alerts_configuration#selected_users NpaPublishersAlertsConfiguration#selected_users}
  */
  readonly selectedUsers: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_alerts_configuration netskope_npa_publishers_alerts_configuration}
*/
export class NpaPublishersAlertsConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_publishers_alerts_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NpaPublishersAlertsConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NpaPublishersAlertsConfiguration to import
  * @param importFromId The id of the existing NpaPublishersAlertsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_alerts_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NpaPublishersAlertsConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_publishers_alerts_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_alerts_configuration netskope_npa_publishers_alerts_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NpaPublishersAlertsConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: NpaPublishersAlertsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_publishers_alerts_configuration',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminUsers = config.adminUsers;
    this._eventTypes = config.eventTypes;
    this._selectedUsers = config.selectedUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_users - computed: false, optional: false, required: true
  private _adminUsers?: string[]; 
  public get adminUsers() {
    return this.getListAttribute('admin_users');
  }
  public set adminUsers(value: string[]) {
    this._adminUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers;
  }

  // event_types - computed: false, optional: false, required: true
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return this.getListAttribute('event_types');
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
  }

  // selected_users - computed: false, optional: false, required: true
  private _selectedUsers?: string; 
  public get selectedUsers() {
    return this.getStringAttribute('selected_users');
  }
  public set selectedUsers(value: string) {
    this._selectedUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedUsersInput() {
    return this._selectedUsers;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminUsers),
      event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventTypes),
      selected_users: cdktf.stringToTerraform(this._selectedUsers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      event_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      selected_users: {
        value: cdktf.stringToHclTerraform(this._selectedUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
