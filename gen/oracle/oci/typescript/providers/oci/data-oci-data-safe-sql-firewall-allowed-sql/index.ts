// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_sql_firewall_allowed_sql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSqlFirewallAllowedSqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_sql_firewall_allowed_sql#id DataOciDataSafeSqlFirewallAllowedSql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_sql_firewall_allowed_sql#sql_firewall_allowed_sql_id DataOciDataSafeSqlFirewallAllowedSql#sql_firewall_allowed_sql_id}
  */
  readonly sqlFirewallAllowedSqlId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_sql_firewall_allowed_sql oci_data_safe_sql_firewall_allowed_sql}
*/
export class DataOciDataSafeSqlFirewallAllowedSql extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sql_firewall_allowed_sql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSqlFirewallAllowedSql to import
  * @param importFromId The id of the existing DataOciDataSafeSqlFirewallAllowedSql that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_sql_firewall_allowed_sql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSqlFirewallAllowedSql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sql_firewall_allowed_sql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_sql_firewall_allowed_sql oci_data_safe_sql_firewall_allowed_sql} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSqlFirewallAllowedSqlConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSqlFirewallAllowedSqlConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sql_firewall_allowed_sql',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._sqlFirewallAllowedSqlId = config.sqlFirewallAllowedSqlId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // current_user - computed: true, optional: false, required: false
  public get currentUser() {
    return this.getStringAttribute('current_user');
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
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

  // sql_accessed_objects - computed: true, optional: false, required: false
  public get sqlAccessedObjects() {
    return this.getListAttribute('sql_accessed_objects');
  }

  // sql_firewall_allowed_sql_id - computed: false, optional: false, required: true
  private _sqlFirewallAllowedSqlId?: string; 
  public get sqlFirewallAllowedSqlId() {
    return this.getStringAttribute('sql_firewall_allowed_sql_id');
  }
  public set sqlFirewallAllowedSqlId(value: string) {
    this._sqlFirewallAllowedSqlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlFirewallAllowedSqlIdInput() {
    return this._sqlFirewallAllowedSqlId;
  }

  // sql_firewall_policy_id - computed: true, optional: false, required: false
  public get sqlFirewallPolicyId() {
    return this.getStringAttribute('sql_firewall_policy_id');
  }

  // sql_level - computed: true, optional: false, required: false
  public get sqlLevel() {
    return this.getStringAttribute('sql_level');
  }

  // sql_text - computed: true, optional: false, required: false
  public get sqlText() {
    return this.getStringAttribute('sql_text');
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

  // time_collected - computed: true, optional: false, required: false
  public get timeCollected() {
    return this.getStringAttribute('time_collected');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      sql_firewall_allowed_sql_id: cdktf.stringToTerraform(this._sqlFirewallAllowedSqlId),
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
      sql_firewall_allowed_sql_id: {
        value: cdktf.stringToHclTerraform(this._sqlFirewallAllowedSqlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
