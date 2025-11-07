// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agent_get_auto_upgradable_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciManagementAgentManagementAgentGetAutoUpgradableConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agent_get_auto_upgradable_config#compartment_id DataOciManagementAgentManagementAgentGetAutoUpgradableConfig#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agent_get_auto_upgradable_config#id DataOciManagementAgentManagementAgentGetAutoUpgradableConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agent_get_auto_upgradable_config oci_management_agent_management_agent_get_auto_upgradable_config}
*/
export class DataOciManagementAgentManagementAgentGetAutoUpgradableConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_management_agent_management_agent_get_auto_upgradable_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciManagementAgentManagementAgentGetAutoUpgradableConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciManagementAgentManagementAgentGetAutoUpgradableConfig to import
  * @param importFromId The id of the existing DataOciManagementAgentManagementAgentGetAutoUpgradableConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agent_get_auto_upgradable_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciManagementAgentManagementAgentGetAutoUpgradableConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_management_agent_management_agent_get_auto_upgradable_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agent_get_auto_upgradable_config oci_management_agent_management_agent_get_auto_upgradable_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciManagementAgentManagementAgentGetAutoUpgradableConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciManagementAgentManagementAgentGetAutoUpgradableConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_management_agent_management_agent_get_auto_upgradable_config',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // is_agent_auto_upgradable - computed: true, optional: false, required: false
  public get isAgentAutoUpgradable() {
    return this.getBooleanAttribute('is_agent_auto_upgradable');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
