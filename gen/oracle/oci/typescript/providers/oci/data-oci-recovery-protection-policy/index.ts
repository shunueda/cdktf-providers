// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/recovery_protection_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciRecoveryProtectionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/recovery_protection_policy#protection_policy_id DataOciRecoveryProtectionPolicy#protection_policy_id}
  */
  readonly protectionPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/recovery_protection_policy oci_recovery_protection_policy}
*/
export class DataOciRecoveryProtectionPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_recovery_protection_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciRecoveryProtectionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciRecoveryProtectionPolicy to import
  * @param importFromId The id of the existing DataOciRecoveryProtectionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/recovery_protection_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciRecoveryProtectionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_recovery_protection_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/recovery_protection_policy oci_recovery_protection_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciRecoveryProtectionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciRecoveryProtectionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_recovery_protection_policy',
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
    this._protectionPolicyId = config.protectionPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_retention_period_in_days - computed: true, optional: false, required: false
  public get backupRetentionPeriodInDays() {
    return this.getNumberAttribute('backup_retention_period_in_days');
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

  // is_predefined_policy - computed: true, optional: false, required: false
  public get isPredefinedPolicy() {
    return this.getBooleanAttribute('is_predefined_policy');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // must_enforce_cloud_locality - computed: true, optional: false, required: false
  public get mustEnforceCloudLocality() {
    return this.getBooleanAttribute('must_enforce_cloud_locality');
  }

  // policy_locked_date_time - computed: true, optional: false, required: false
  public get policyLockedDateTime() {
    return this.getStringAttribute('policy_locked_date_time');
  }

  // protection_policy_id - computed: false, optional: false, required: true
  private _protectionPolicyId?: string; 
  public get protectionPolicyId() {
    return this.getStringAttribute('protection_policy_id');
  }
  public set protectionPolicyId(value: string) {
    this._protectionPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionPolicyIdInput() {
    return this._protectionPolicyId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      protection_policy_id: cdktf.stringToTerraform(this._protectionPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      protection_policy_id: {
        value: cdktf.stringToHclTerraform(this._protectionPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
