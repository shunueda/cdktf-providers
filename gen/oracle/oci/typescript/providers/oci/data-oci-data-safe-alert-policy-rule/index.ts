// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_alert_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeAlertPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_alert_policy_rule#alert_policy_id DataOciDataSafeAlertPolicyRule#alert_policy_id}
  */
  readonly alertPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_alert_policy_rule#rule_key DataOciDataSafeAlertPolicyRule#rule_key}
  */
  readonly ruleKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_alert_policy_rule oci_data_safe_alert_policy_rule}
*/
export class DataOciDataSafeAlertPolicyRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_alert_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeAlertPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeAlertPolicyRule to import
  * @param importFromId The id of the existing DataOciDataSafeAlertPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_alert_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeAlertPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_alert_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_alert_policy_rule oci_data_safe_alert_policy_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeAlertPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeAlertPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_alert_policy_rule',
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
    this._alertPolicyId = config.alertPolicyId;
    this._ruleKey = config.ruleKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_policy_id - computed: false, optional: false, required: true
  private _alertPolicyId?: string; 
  public get alertPolicyId() {
    return this.getStringAttribute('alert_policy_id');
  }
  public set alertPolicyId(value: string) {
    this._alertPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPolicyIdInput() {
    return this._alertPolicyId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // rule_key - computed: false, optional: false, required: true
  private _ruleKey?: string; 
  public get ruleKey() {
    return this.getStringAttribute('rule_key');
  }
  public set ruleKey(value: string) {
    this._ruleKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleKeyInput() {
    return this._ruleKey;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_policy_id: cdktf.stringToTerraform(this._alertPolicyId),
      rule_key: cdktf.stringToTerraform(this._ruleKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_policy_id: {
        value: cdktf.stringToHclTerraform(this._alertPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_key: {
        value: cdktf.stringToHclTerraform(this._ruleKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
