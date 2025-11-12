// https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SettingsProfileAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the cluster to create the resource into. If omitted, resource will be created on the replica hit by the query.
  * This field must be left null when using a ClickHouse Cloud cluster.
  * When using a self hosted ClickHouse instance, this field should only be set when there is more than one replica and you are not using 'replicated' storage for user_directory.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile_association#cluster_name SettingsProfileAssociation#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * ID of the SettingsProfileAssociation to associate the Settings profile to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile_association#role_id SettingsProfileAssociation#role_id}
  */
  readonly roleId?: string;
  /**
  * ID of the settings profile to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile_association#settings_profile_id SettingsProfileAssociation#settings_profile_id}
  */
  readonly settingsProfileId: string;
  /**
  * ID of the User to associate the Settings profile to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile_association#user_id SettingsProfileAssociation#user_id}
  */
  readonly userId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile_association clickhousedbops_settings_profile_association}
*/
export class SettingsProfileAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhousedbops_settings_profile_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SettingsProfileAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SettingsProfileAssociation to import
  * @param importFromId The id of the existing SettingsProfileAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SettingsProfileAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhousedbops_settings_profile_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile_association clickhousedbops_settings_profile_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SettingsProfileAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: SettingsProfileAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'clickhousedbops_settings_profile_association',
      terraformGeneratorMetadata: {
        providerName: 'clickhousedbops',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._roleId = config.roleId;
    this._settingsProfileId = config.settingsProfileId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // role_id - computed: false, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // settings_profile_id - computed: false, optional: false, required: true
  private _settingsProfileId?: string; 
  public get settingsProfileId() {
    return this.getStringAttribute('settings_profile_id');
  }
  public set settingsProfileId(value: string) {
    this._settingsProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsProfileIdInput() {
    return this._settingsProfileId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      role_id: cdktf.stringToTerraform(this._roleId),
      settings_profile_id: cdktf.stringToTerraform(this._settingsProfileId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings_profile_id: {
        value: cdktf.stringToHclTerraform(this._settingsProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
