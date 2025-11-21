// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#database_view_access_entry_key DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#database_view_access_entry_key}
  */
  readonly databaseViewAccessEntryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#security_policy_report_id}
  */
  readonly securityPolicyReportId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry oci_data_safe_security_policy_report_database_view_access_entry}
*/
export class DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_policy_report_database_view_access_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry to import
  * @param importFromId The id of the existing DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_policy_report_database_view_access_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry oci_data_safe_security_policy_report_database_view_access_entry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_policy_report_database_view_access_entry',
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
    this._databaseViewAccessEntryKey = config.databaseViewAccessEntryKey;
    this._id = config.id;
    this._securityPolicyReportId = config.securityPolicyReportId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // database_view_access_entry_key - computed: false, optional: false, required: true
  private _databaseViewAccessEntryKey?: string; 
  public get databaseViewAccessEntryKey() {
    return this.getStringAttribute('database_view_access_entry_key');
  }
  public set databaseViewAccessEntryKey(value: string) {
    this._databaseViewAccessEntryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseViewAccessEntryKeyInput() {
    return this._databaseViewAccessEntryKey;
  }

  // grant_from_role - computed: true, optional: false, required: false
  public get grantFromRole() {
    return this.getStringAttribute('grant_from_role');
  }

  // grantee - computed: true, optional: false, required: false
  public get grantee() {
    return this.getStringAttribute('grantee');
  }

  // grantor - computed: true, optional: false, required: false
  public get grantor() {
    return this.getStringAttribute('grantor');
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

  // is_access_constrained_by_database_vault - computed: true, optional: false, required: false
  public get isAccessConstrainedByDatabaseVault() {
    return this.getBooleanAttribute('is_access_constrained_by_database_vault');
  }

  // is_access_constrained_by_real_application_security - computed: true, optional: false, required: false
  public get isAccessConstrainedByRealApplicationSecurity() {
    return this.getBooleanAttribute('is_access_constrained_by_real_application_security');
  }

  // is_access_constrained_by_redaction - computed: true, optional: false, required: false
  public get isAccessConstrainedByRedaction() {
    return this.getBooleanAttribute('is_access_constrained_by_redaction');
  }

  // is_access_constrained_by_sql_firewall - computed: true, optional: false, required: false
  public get isAccessConstrainedBySqlFirewall() {
    return this.getBooleanAttribute('is_access_constrained_by_sql_firewall');
  }

  // is_access_constrained_by_virtual_private_database - computed: true, optional: false, required: false
  public get isAccessConstrainedByVirtualPrivateDatabase() {
    return this.getBooleanAttribute('is_access_constrained_by_virtual_private_database');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // privilege - computed: true, optional: false, required: false
  public get privilege() {
    return this.getStringAttribute('privilege');
  }

  // privilege_grantable - computed: true, optional: false, required: false
  public get privilegeGrantable() {
    return this.getStringAttribute('privilege_grantable');
  }

  // privilege_type - computed: true, optional: false, required: false
  public get privilegeType() {
    return this.getStringAttribute('privilege_type');
  }

  // security_policy_report_id - computed: false, optional: false, required: true
  private _securityPolicyReportId?: string; 
  public get securityPolicyReportId() {
    return this.getStringAttribute('security_policy_report_id');
  }
  public set securityPolicyReportId(value: string) {
    this._securityPolicyReportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyReportIdInput() {
    return this._securityPolicyReportId;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // table_schema - computed: true, optional: false, required: false
  public get tableSchema() {
    return this.getStringAttribute('table_schema');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // view_name - computed: true, optional: false, required: false
  public get viewName() {
    return this.getStringAttribute('view_name');
  }

  // view_schema - computed: true, optional: false, required: false
  public get viewSchema() {
    return this.getStringAttribute('view_schema');
  }

  // view_text - computed: true, optional: false, required: false
  public get viewText() {
    return this.getStringAttribute('view_text');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_view_access_entry_key: cdktf.stringToTerraform(this._databaseViewAccessEntryKey),
      id: cdktf.stringToTerraform(this._id),
      security_policy_report_id: cdktf.stringToTerraform(this._securityPolicyReportId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_view_access_entry_key: {
        value: cdktf.stringToHclTerraform(this._databaseViewAccessEntryKey),
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
      security_policy_report_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyReportId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
