// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule#domain_name Cgnv6MapTranslationDomainBasicMappingRulePrefixRule#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule#id Cgnv6MapTranslationDomainBasicMappingRulePrefixRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Subnet mask (subnet bigger than /8 is not allowed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule#ipv4_netmask Cgnv6MapTranslationDomainBasicMappingRulePrefixRule#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * MAP BMR prefix rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule#name Cgnv6MapTranslationDomainBasicMappingRulePrefixRule#name}
  */
  readonly name: string;
  /**
  * IPv4 prefix of BMR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule#rule_ipv4_prefix Cgnv6MapTranslationDomainBasicMappingRulePrefixRule#rule_ipv4_prefix}
  */
  readonly ruleIpv4Prefix?: string;
  /**
  * IPv6 prefix of BMR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule#rule_ipv6_prefix Cgnv6MapTranslationDomainBasicMappingRulePrefixRule#rule_ipv6_prefix}
  */
  readonly ruleIpv6Prefix?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule#user_tag Cgnv6MapTranslationDomainBasicMappingRulePrefixRule#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule#uuid Cgnv6MapTranslationDomainBasicMappingRulePrefixRule#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule thunder_cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule}
*/
export class Cgnv6MapTranslationDomainBasicMappingRulePrefixRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6MapTranslationDomainBasicMappingRulePrefixRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6MapTranslationDomainBasicMappingRulePrefixRule to import
  * @param importFromId The id of the existing Cgnv6MapTranslationDomainBasicMappingRulePrefixRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6MapTranslationDomainBasicMappingRulePrefixRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule thunder_cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_map_translation_domain_basic_mapping_rule_prefix_rule',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainName = config.domainName;
    this._id = config.id;
    this._ipv4Netmask = config.ipv4Netmask;
    this._name = config.name;
    this._ruleIpv4Prefix = config.ruleIpv4Prefix;
    this._ruleIpv6Prefix = config.ruleIpv6Prefix;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: string; 
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: string) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rule_ipv4_prefix - computed: false, optional: true, required: false
  private _ruleIpv4Prefix?: string; 
  public get ruleIpv4Prefix() {
    return this.getStringAttribute('rule_ipv4_prefix');
  }
  public set ruleIpv4Prefix(value: string) {
    this._ruleIpv4Prefix = value;
  }
  public resetRuleIpv4Prefix() {
    this._ruleIpv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIpv4PrefixInput() {
    return this._ruleIpv4Prefix;
  }

  // rule_ipv6_prefix - computed: false, optional: true, required: false
  private _ruleIpv6Prefix?: string; 
  public get ruleIpv6Prefix() {
    return this.getStringAttribute('rule_ipv6_prefix');
  }
  public set ruleIpv6Prefix(value: string) {
    this._ruleIpv6Prefix = value;
  }
  public resetRuleIpv6Prefix() {
    this._ruleIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIpv6PrefixInput() {
    return this._ruleIpv6Prefix;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      ipv4_netmask: cdktf.stringToTerraform(this._ipv4Netmask),
      name: cdktf.stringToTerraform(this._name),
      rule_ipv4_prefix: cdktf.stringToTerraform(this._ruleIpv4Prefix),
      rule_ipv6_prefix: cdktf.stringToTerraform(this._ruleIpv6Prefix),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      ipv4_netmask: {
        value: cdktf.stringToHclTerraform(this._ipv4Netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_ipv4_prefix: {
        value: cdktf.stringToHclTerraform(this._ruleIpv4Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_ipv6_prefix: {
        value: cdktf.stringToHclTerraform(this._ruleIpv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
