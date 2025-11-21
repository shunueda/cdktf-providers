// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/management_agent_management_agent_install_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciManagementAgentManagementAgentInstallKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/management_agent_management_agent_install_key#management_agent_install_key_id DataOciManagementAgentManagementAgentInstallKey#management_agent_install_key_id}
  */
  readonly managementAgentInstallKeyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/management_agent_management_agent_install_key oci_management_agent_management_agent_install_key}
*/
export class DataOciManagementAgentManagementAgentInstallKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_management_agent_management_agent_install_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciManagementAgentManagementAgentInstallKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciManagementAgentManagementAgentInstallKey to import
  * @param importFromId The id of the existing DataOciManagementAgentManagementAgentInstallKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/management_agent_management_agent_install_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciManagementAgentManagementAgentInstallKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_management_agent_management_agent_install_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/management_agent_management_agent_install_key oci_management_agent_management_agent_install_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciManagementAgentManagementAgentInstallKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciManagementAgentManagementAgentInstallKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_management_agent_management_agent_install_key',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._managementAgentInstallKeyId = config.managementAgentInstallKeyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_key_install_count - computed: true, optional: false, required: false
  public get allowedKeyInstallCount() {
    return this.getNumberAttribute('allowed_key_install_count');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by_principal_id - computed: true, optional: false, required: false
  public get createdByPrincipalId() {
    return this.getStringAttribute('created_by_principal_id');
  }

  // current_key_install_count - computed: true, optional: false, required: false
  public get currentKeyInstallCount() {
    return this.getNumberAttribute('current_key_install_count');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_unlimited - computed: true, optional: false, required: false
  public get isUnlimited() {
    return this.getBooleanAttribute('is_unlimited');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // management_agent_install_key_id - computed: false, optional: false, required: true
  private _managementAgentInstallKeyId?: string; 
  public get managementAgentInstallKeyId() {
    return this.getStringAttribute('management_agent_install_key_id');
  }
  public set managementAgentInstallKeyId(value: string) {
    this._managementAgentInstallKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAgentInstallKeyIdInput() {
    return this._managementAgentInstallKeyId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_expires - computed: true, optional: false, required: false
  public get timeExpires() {
    return this.getStringAttribute('time_expires');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      management_agent_install_key_id: cdktf.stringToTerraform(this._managementAgentInstallKeyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      management_agent_install_key_id: {
        value: cdktf.stringToHclTerraform(this._managementAgentInstallKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
