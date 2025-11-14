// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeUnifiedAuditPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definition#unified_audit_policy_definition_id DataOciDataSafeUnifiedAuditPolicyDefinition#unified_audit_policy_definition_id}
  */
  readonly unifiedAuditPolicyDefinitionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definition oci_data_safe_unified_audit_policy_definition}
*/
export class DataOciDataSafeUnifiedAuditPolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_unified_audit_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeUnifiedAuditPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeUnifiedAuditPolicyDefinition to import
  * @param importFromId The id of the existing DataOciDataSafeUnifiedAuditPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeUnifiedAuditPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_unified_audit_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_unified_audit_policy_definition oci_data_safe_unified_audit_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeUnifiedAuditPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeUnifiedAuditPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_unified_audit_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._unifiedAuditPolicyDefinitionId = config.unifiedAuditPolicyDefinitionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_policy_category - computed: true, optional: false, required: false
  public get auditPolicyCategory() {
    return this.getStringAttribute('audit_policy_category');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // is_seeded - computed: true, optional: false, required: false
  public get isSeeded() {
    return this.getBooleanAttribute('is_seeded');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // policy_definition_statement - computed: true, optional: false, required: false
  public get policyDefinitionStatement() {
    return this.getStringAttribute('policy_definition_statement');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // unified_audit_policy_definition_id - computed: false, optional: false, required: true
  private _unifiedAuditPolicyDefinitionId?: string; 
  public get unifiedAuditPolicyDefinitionId() {
    return this.getStringAttribute('unified_audit_policy_definition_id');
  }
  public set unifiedAuditPolicyDefinitionId(value: string) {
    this._unifiedAuditPolicyDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedAuditPolicyDefinitionIdInput() {
    return this._unifiedAuditPolicyDefinitionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      unified_audit_policy_definition_id: cdktf.stringToTerraform(this._unifiedAuditPolicyDefinitionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      unified_audit_policy_definition_id: {
        value: cdktf.stringToHclTerraform(this._unifiedAuditPolicyDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
