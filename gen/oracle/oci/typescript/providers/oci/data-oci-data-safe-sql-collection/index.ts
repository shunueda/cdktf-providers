// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sql_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSqlCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sql_collection#sql_collection_id DataOciDataSafeSqlCollection#sql_collection_id}
  */
  readonly sqlCollectionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sql_collection oci_data_safe_sql_collection}
*/
export class DataOciDataSafeSqlCollection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sql_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSqlCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSqlCollection to import
  * @param importFromId The id of the existing DataOciDataSafeSqlCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sql_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSqlCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sql_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sql_collection oci_data_safe_sql_collection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSqlCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSqlCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sql_collection',
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
    this._sqlCollectionId = config.sqlCollectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // generate_sql_firewall_policy_trigger - computed: true, optional: false, required: false
  public get generateSqlFirewallPolicyTrigger() {
    return this.getBooleanAttribute('generate_sql_firewall_policy_trigger');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // purge_logs_trigger - computed: true, optional: false, required: false
  public get purgeLogsTrigger() {
    return this.getBooleanAttribute('purge_logs_trigger');
  }

  // refresh_log_insights_trigger - computed: true, optional: false, required: false
  public get refreshLogInsightsTrigger() {
    return this.getBooleanAttribute('refresh_log_insights_trigger');
  }

  // sql_collection_id - computed: false, optional: false, required: true
  private _sqlCollectionId?: string; 
  public get sqlCollectionId() {
    return this.getStringAttribute('sql_collection_id');
  }
  public set sqlCollectionId(value: string) {
    this._sqlCollectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlCollectionIdInput() {
    return this._sqlCollectionId;
  }

  // sql_level - computed: true, optional: false, required: false
  public get sqlLevel() {
    return this.getStringAttribute('sql_level');
  }

  // start_trigger - computed: true, optional: false, required: false
  public get startTrigger() {
    return this.getBooleanAttribute('start_trigger');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stop_trigger - computed: true, optional: false, required: false
  public get stopTrigger() {
    return this.getBooleanAttribute('stop_trigger');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_started - computed: true, optional: false, required: false
  public get timeLastStarted() {
    return this.getStringAttribute('time_last_started');
  }

  // time_last_stopped - computed: true, optional: false, required: false
  public get timeLastStopped() {
    return this.getStringAttribute('time_last_stopped');
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
      sql_collection_id: cdktf.stringToTerraform(this._sqlCollectionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sql_collection_id: {
        value: cdktf.stringToHclTerraform(this._sqlCollectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
