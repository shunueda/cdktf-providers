// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sql_firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSqlFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sql_firewall_policy#sql_firewall_policy_id DataOciDataSafeSqlFirewallPolicy#sql_firewall_policy_id}
  */
  readonly sqlFirewallPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sql_firewall_policy oci_data_safe_sql_firewall_policy}
*/
export class DataOciDataSafeSqlFirewallPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sql_firewall_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSqlFirewallPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSqlFirewallPolicy to import
  * @param importFromId The id of the existing DataOciDataSafeSqlFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sql_firewall_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSqlFirewallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sql_firewall_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sql_firewall_policy oci_data_safe_sql_firewall_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSqlFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSqlFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sql_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._sqlFirewallPolicyId = config.sqlFirewallPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_client_ips - computed: true, optional: false, required: false
  public get allowedClientIps() {
    return this.getListAttribute('allowed_client_ips');
  }

  // allowed_client_os_usernames - computed: true, optional: false, required: false
  public get allowedClientOsUsernames() {
    return this.getListAttribute('allowed_client_os_usernames');
  }

  // allowed_client_programs - computed: true, optional: false, required: false
  public get allowedClientPrograms() {
    return this.getListAttribute('allowed_client_programs');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // db_user_name - computed: true, optional: false, required: false
  public get dbUserName() {
    return this.getStringAttribute('db_user_name');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enforcement_scope - computed: true, optional: false, required: false
  public get enforcementScope() {
    return this.getStringAttribute('enforcement_scope');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // security_policy_id - computed: true, optional: false, required: false
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }

  // sql_firewall_policy_id - computed: false, optional: false, required: true
  private _sqlFirewallPolicyId?: string; 
  public get sqlFirewallPolicyId() {
    return this.getStringAttribute('sql_firewall_policy_id');
  }
  public set sqlFirewallPolicyId(value: string) {
    this._sqlFirewallPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlFirewallPolicyIdInput() {
    return this._sqlFirewallPolicyId;
  }

  // sql_level - computed: true, optional: false, required: false
  public get sqlLevel() {
    return this.getStringAttribute('sql_level');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // violation_action - computed: true, optional: false, required: false
  public get violationAction() {
    return this.getStringAttribute('violation_action');
  }

  // violation_audit - computed: true, optional: false, required: false
  public get violationAudit() {
    return this.getStringAttribute('violation_audit');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sql_firewall_policy_id: cdktf.stringToTerraform(this._sqlFirewallPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sql_firewall_policy_id: {
        value: cdktf.stringToHclTerraform(this._sqlFirewallPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
