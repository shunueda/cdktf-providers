// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_database_security_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeDatabaseSecurityConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_database_security_config#database_security_config_id DataOciDataSafeDatabaseSecurityConfig#database_security_config_id}
  */
  readonly databaseSecurityConfigId: string;
}
export interface DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig {
}

export function dataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigToTerraform(struct?: DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigToHclTerraform(struct?: DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_job - computed: true, optional: false, required: false
  public get excludeJob() {
    return this.getStringAttribute('exclude_job');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_status_updated - computed: true, optional: false, required: false
  public get timeStatusUpdated() {
    return this.getStringAttribute('time_status_updated');
  }

  // violation_log_auto_purge - computed: true, optional: false, required: false
  public get violationLogAutoPurge() {
    return this.getStringAttribute('violation_log_auto_purge');
  }
}

export class DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference {
    return new DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_database_security_config oci_data_safe_database_security_config}
*/
export class DataOciDataSafeDatabaseSecurityConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_database_security_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeDatabaseSecurityConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeDatabaseSecurityConfig to import
  * @param importFromId The id of the existing DataOciDataSafeDatabaseSecurityConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_database_security_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeDatabaseSecurityConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_database_security_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_database_security_config oci_data_safe_database_security_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeDatabaseSecurityConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeDatabaseSecurityConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_database_security_config',
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
    this._databaseSecurityConfigId = config.databaseSecurityConfigId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database_security_config_id - computed: false, optional: false, required: true
  private _databaseSecurityConfigId?: string; 
  public get databaseSecurityConfigId() {
    return this.getStringAttribute('database_security_config_id');
  }
  public set databaseSecurityConfigId(value: string) {
    this._databaseSecurityConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSecurityConfigIdInput() {
    return this._databaseSecurityConfigId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // refresh_trigger - computed: true, optional: false, required: false
  public get refreshTrigger() {
    return this.getNumberAttribute('refresh_trigger');
  }

  // sql_firewall_config - computed: true, optional: false, required: false
  private _sqlFirewallConfig = new DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList(this, "sql_firewall_config", false);
  public get sqlFirewallConfig() {
    return this._sqlFirewallConfig;
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

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_refreshed - computed: true, optional: false, required: false
  public get timeLastRefreshed() {
    return this.getStringAttribute('time_last_refreshed');
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
      database_security_config_id: cdktf.stringToTerraform(this._databaseSecurityConfigId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_security_config_id: {
        value: cdktf.stringToHclTerraform(this._databaseSecurityConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
