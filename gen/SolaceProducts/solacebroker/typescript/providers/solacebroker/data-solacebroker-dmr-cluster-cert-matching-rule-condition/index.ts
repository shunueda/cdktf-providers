// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/dmr_cluster_cert_matching_rule_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerDmrClusterCertMatchingRuleConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/dmr_cluster_cert_matching_rule_condition#dmr_cluster_name DataSolacebrokerDmrClusterCertMatchingRuleCondition#dmr_cluster_name}
  */
  readonly dmrClusterName: string;
  /**
  * The name of the rule.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/dmr_cluster_cert_matching_rule_condition#rule_name DataSolacebrokerDmrClusterCertMatchingRuleCondition#rule_name}
  */
  readonly ruleName: string;
  /**
  * Certificate field to be compared with the Attribute.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The allowed values and their meaning are:
  * 
  * <pre>
  * "certificate-thumbprint" - The attribute is computed as the SHA-1 hash over the entire DER-encoded contents of the client certificate.
  * "common-name" - The attribute is extracted from the certificate's first instance of the Common Name attribute in the Subject DN.
  * "common-name-last" - The attribute is extracted from the certificate's last instance of the Common Name attribute in the Subject DN.
  * "subject-alternate-name-msupn" - The attribute is extracted from the certificate's Other Name type of the Subject Alternative Name and must have the msUPN signature.
  * "uid" - The attribute is extracted from the certificate's first instance of the User Identifier attribute in the Subject DN.
  * "uid-last" - The attribute is extracted from the certificate's last instance of the User Identifier attribute in the Subject DN.
  * "org-unit" - The attribute is extracted from the certificate's first instance of the Org Unit attribute in the Subject DN.
  * "org-unit-last" - The attribute is extracted from the certificate's last instance of the Org Unit attribute in the Subject DN.
  * "issuer" - The attribute is extracted from the certificate's Issuer DN.
  * "subject" - The attribute is extracted from the certificate's Subject DN.
  * "serial-number" - The attribute is extracted from the certificate's Serial Number.
  * "dns-name" - The attribute is extracted from the certificate's Subject Alt Name DNS Name.
  * "ip-address" - The attribute is extracted from the certificate's Subject Alt Name IP Address.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/dmr_cluster_cert_matching_rule_condition#source DataSolacebrokerDmrClusterCertMatchingRuleCondition#source}
  */
  readonly source: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/dmr_cluster_cert_matching_rule_condition solacebroker_dmr_cluster_cert_matching_rule_condition}
*/
export class DataSolacebrokerDmrClusterCertMatchingRuleCondition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_dmr_cluster_cert_matching_rule_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerDmrClusterCertMatchingRuleCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerDmrClusterCertMatchingRuleCondition to import
  * @param importFromId The id of the existing DataSolacebrokerDmrClusterCertMatchingRuleCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/dmr_cluster_cert_matching_rule_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerDmrClusterCertMatchingRuleCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_dmr_cluster_cert_matching_rule_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/dmr_cluster_cert_matching_rule_condition solacebroker_dmr_cluster_cert_matching_rule_condition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerDmrClusterCertMatchingRuleConditionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerDmrClusterCertMatchingRuleConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_dmr_cluster_cert_matching_rule_condition',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
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
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

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

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dmr_cluster_name: cdktf.stringToTerraform(this._dmrClusterName),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      source: cdktf.stringToTerraform(this._source),
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
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
