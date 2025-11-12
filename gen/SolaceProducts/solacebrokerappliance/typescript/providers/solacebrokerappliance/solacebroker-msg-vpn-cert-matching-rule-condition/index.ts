// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_cert_matching_rule_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnCertMatchingRuleConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client Username Attribute to be compared with certificate content. Either an attribute or an expression must be provided on creation, but not both.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The default value is `""`. Note that this attribute requires replacement of the resource when updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_cert_matching_rule_condition#attribute SolacebrokerMsgVpnCertMatchingRuleCondition#attribute}
  */
  readonly attribute?: string;
  /**
  * Glob expression to be matched with certificate content. Either an expression or an attribute must be provided on creation, but not both.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The default value is `""`. Note that this attribute requires replacement of the resource when updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_cert_matching_rule_condition#expression SolacebrokerMsgVpnCertMatchingRuleCondition#expression}
  */
  readonly expression?: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_cert_matching_rule_condition#msg_vpn_name SolacebrokerMsgVpnCertMatchingRuleCondition#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the rule.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_cert_matching_rule_condition#rule_name SolacebrokerMsgVpnCertMatchingRuleCondition#rule_name}
  */
  readonly ruleName: string;
  /**
  * Certificate field to be compared with the Attribute.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The allowed values and their meaning are:
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_cert_matching_rule_condition#source SolacebrokerMsgVpnCertMatchingRuleCondition#source}
  */
  readonly source: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_cert_matching_rule_condition solacebroker_msg_vpn_cert_matching_rule_condition}
*/
export class SolacebrokerMsgVpnCertMatchingRuleCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_cert_matching_rule_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnCertMatchingRuleCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnCertMatchingRuleCondition to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnCertMatchingRuleCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_cert_matching_rule_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnCertMatchingRuleCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_cert_matching_rule_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_cert_matching_rule_condition solacebroker_msg_vpn_cert_matching_rule_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnCertMatchingRuleConditionConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnCertMatchingRuleConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_cert_matching_rule_condition',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attribute = config.attribute;
    this._expression = config.expression;
    this._msgVpnName = config.msgVpnName;
    this._ruleName = config.ruleName;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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
      attribute: cdktf.stringToTerraform(this._attribute),
      expression: cdktf.stringToTerraform(this._expression),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      source: cdktf.stringToTerraform(this._source),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute: {
        value: cdktf.stringToHclTerraform(this._attribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expression: {
        value: cdktf.stringToHclTerraform(this._expression),
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
