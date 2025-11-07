// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_dmr_cluster_cert_matching_rule_attribute_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerDmrClusterCertMatchingRuleAttributeFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Link Attribute to be tested.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_dmr_cluster_cert_matching_rule_attribute_filter#attribute_name SolacebrokerDmrClusterCertMatchingRuleAttributeFilter#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Expected attribute value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_dmr_cluster_cert_matching_rule_attribute_filter#attribute_value SolacebrokerDmrClusterCertMatchingRuleAttributeFilter#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * The name of the Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_dmr_cluster_cert_matching_rule_attribute_filter#dmr_cluster_name SolacebrokerDmrClusterCertMatchingRuleAttributeFilter#dmr_cluster_name}
  */
  readonly dmrClusterName: string;
  /**
  * The name of the filter.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_dmr_cluster_cert_matching_rule_attribute_filter#filter_name SolacebrokerDmrClusterCertMatchingRuleAttributeFilter#filter_name}
  */
  readonly filterName: string;
  /**
  * The name of the rule.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_dmr_cluster_cert_matching_rule_attribute_filter#rule_name SolacebrokerDmrClusterCertMatchingRuleAttributeFilter#rule_name}
  */
  readonly ruleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_dmr_cluster_cert_matching_rule_attribute_filter solacebroker_dmr_cluster_cert_matching_rule_attribute_filter}
*/
export class SolacebrokerDmrClusterCertMatchingRuleAttributeFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_dmr_cluster_cert_matching_rule_attribute_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerDmrClusterCertMatchingRuleAttributeFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerDmrClusterCertMatchingRuleAttributeFilter to import
  * @param importFromId The id of the existing SolacebrokerDmrClusterCertMatchingRuleAttributeFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_dmr_cluster_cert_matching_rule_attribute_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerDmrClusterCertMatchingRuleAttributeFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_dmr_cluster_cert_matching_rule_attribute_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_dmr_cluster_cert_matching_rule_attribute_filter solacebroker_dmr_cluster_cert_matching_rule_attribute_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerDmrClusterCertMatchingRuleAttributeFilterConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerDmrClusterCertMatchingRuleAttributeFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_dmr_cluster_cert_matching_rule_attribute_filter',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
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
    this._attributeName = config.attributeName;
    this._attributeValue = config.attributeValue;
    this._dmrClusterName = config.dmrClusterName;
    this._filterName = config.filterName;
    this._ruleName = config.ruleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
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

  // filter_name - computed: false, optional: false, required: true
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
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
      attribute_name: cdktf.stringToTerraform(this._attributeName),
      attribute_value: cdktf.stringToTerraform(this._attributeValue),
      dmr_cluster_name: cdktf.stringToTerraform(this._dmrClusterName),
      filter_name: cdktf.stringToTerraform(this._filterName),
      rule_name: cdktf.stringToTerraform(this._ruleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_name: {
        value: cdktf.stringToHclTerraform(this._attributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_value: {
        value: cdktf.stringToHclTerraform(this._attributeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dmr_cluster_name: {
        value: cdktf.stringToHclTerraform(this._dmrClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_name: {
        value: cdktf.stringToHclTerraform(this._filterName),
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
