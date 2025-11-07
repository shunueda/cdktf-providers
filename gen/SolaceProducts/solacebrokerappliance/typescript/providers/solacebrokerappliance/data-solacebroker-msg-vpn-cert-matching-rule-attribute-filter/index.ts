// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_cert_matching_rule_attribute_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnCertMatchingRuleAttributeFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the filter.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_cert_matching_rule_attribute_filter#filter_name DataSolacebrokerMsgVpnCertMatchingRuleAttributeFilter#filter_name}
  */
  readonly filterName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_cert_matching_rule_attribute_filter#msg_vpn_name DataSolacebrokerMsgVpnCertMatchingRuleAttributeFilter#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the rule.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_cert_matching_rule_attribute_filter#rule_name DataSolacebrokerMsgVpnCertMatchingRuleAttributeFilter#rule_name}
  */
  readonly ruleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_cert_matching_rule_attribute_filter solacebroker_msg_vpn_cert_matching_rule_attribute_filter}
*/
export class DataSolacebrokerMsgVpnCertMatchingRuleAttributeFilter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_cert_matching_rule_attribute_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnCertMatchingRuleAttributeFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnCertMatchingRuleAttributeFilter to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnCertMatchingRuleAttributeFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_cert_matching_rule_attribute_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnCertMatchingRuleAttributeFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_cert_matching_rule_attribute_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_cert_matching_rule_attribute_filter solacebroker_msg_vpn_cert_matching_rule_attribute_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnCertMatchingRuleAttributeFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnCertMatchingRuleAttributeFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_cert_matching_rule_attribute_filter',
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
    this._filterName = config.filterName;
    this._msgVpnName = config.msgVpnName;
    this._ruleName = config.ruleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
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

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
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
      filter_name: cdktf.stringToTerraform(this._filterName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      rule_name: cdktf.stringToTerraform(this._ruleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_name: {
        value: cdktf.stringToHclTerraform(this._filterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
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
