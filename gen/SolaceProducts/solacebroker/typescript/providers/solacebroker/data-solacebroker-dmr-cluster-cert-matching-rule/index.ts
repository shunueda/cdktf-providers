// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_cert_matching_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerDmrClusterCertMatchingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_cert_matching_rule#dmr_cluster_name DataSolacebrokerDmrClusterCertMatchingRule#dmr_cluster_name}
  */
  readonly dmrClusterName: string;
  /**
  * The name of the rule.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_cert_matching_rule#rule_name DataSolacebrokerDmrClusterCertMatchingRule#rule_name}
  */
  readonly ruleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_cert_matching_rule solacebroker_dmr_cluster_cert_matching_rule}
*/
export class DataSolacebrokerDmrClusterCertMatchingRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_dmr_cluster_cert_matching_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerDmrClusterCertMatchingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerDmrClusterCertMatchingRule to import
  * @param importFromId The id of the existing DataSolacebrokerDmrClusterCertMatchingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_cert_matching_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerDmrClusterCertMatchingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_dmr_cluster_cert_matching_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_cert_matching_rule solacebroker_dmr_cluster_cert_matching_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerDmrClusterCertMatchingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerDmrClusterCertMatchingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_dmr_cluster_cert_matching_rule',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dmrClusterName = config.dmrClusterName;
    this._ruleName = config.ruleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dmr_cluster_name - computed: false, optional: false, required: true
  private _dmrClusterName?: string; 
  public get dmrClusterName() {
    return this.getStringAttribute('dmr_cluster_name');
  }
  public set dmrClusterName(value: string) {
    this._dmrClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dmrClusterNameInput() {
    return this._dmrClusterName;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dmr_cluster_name: cdktf.stringToTerraform(this._dmrClusterName),
      rule_name: cdktf.stringToTerraform(this._ruleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dmr_cluster_name: {
        value: cdktf.stringToHclTerraform(this._dmrClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
