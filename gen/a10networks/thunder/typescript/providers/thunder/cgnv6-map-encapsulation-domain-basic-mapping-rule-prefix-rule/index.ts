// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule#domain_name Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule#domain_name}
  */
  readonly domainName: string;
  /**
  * Length of Embedded Address (EA) bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule#ea_length Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule#ea_length}
  */
  readonly eaLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule#id Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'prefix-addr': Each CE is assigned an IPv4 prefix; 'single-addr': Each CE is assigned an IPv4 address; 'shared-addr': Each CE is assigned a shared IPv4 address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule#ipv4_address_port_settings Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule#ipv4_address_port_settings}
  */
  readonly ipv4AddressPortSettings?: string;
  /**
  * Subnet mask (subnet bigger than /8 is not allowed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule#ipv4_netmask Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * MAP BMR prefix rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule#name Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule#name}
  */
  readonly name: string;
  /**
  * Starting Port, Must be Power of 2 value or zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule#port_start Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule#port_start}
  */
  readonly portStart?: number;
  /**
  * IPv4 prefix of BMR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule#rule_ipv4_prefix Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule#rule_ipv4_prefix}
  */
  readonly ruleIpv4Prefix?: string;
  /**
  * IPv6 prefix of BMR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule#rule_ipv6_prefix Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule#rule_ipv6_prefix}
  */
  readonly ruleIpv6Prefix?: string;
  /**
  * Port sharing ratio for each NAT IP. Must be Power of 2 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule#share_ratio Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule#share_ratio}
  */
  readonly shareRatio?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule#user_tag Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule#uuid Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule thunder_cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule}
*/
export class Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule to import
  * @param importFromId The id of the existing Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule thunder_cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRuleConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6MapEncapsulationDomainBasicMappingRulePrefixRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_map_encapsulation_domain_basic_mapping_rule_prefix_rule',
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
    this._eaLength = config.eaLength;
    this._id = config.id;
    this._ipv4AddressPortSettings = config.ipv4AddressPortSettings;
    this._ipv4Netmask = config.ipv4Netmask;
    this._name = config.name;
    this._portStart = config.portStart;
    this._ruleIpv4Prefix = config.ruleIpv4Prefix;
    this._ruleIpv6Prefix = config.ruleIpv6Prefix;
    this._shareRatio = config.shareRatio;
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

  // ea_length - computed: false, optional: true, required: false
  private _eaLength?: number; 
  public get eaLength() {
    return this.getNumberAttribute('ea_length');
  }
  public set eaLength(value: number) {
    this._eaLength = value;
  }
  public resetEaLength() {
    this._eaLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eaLengthInput() {
    return this._eaLength;
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

  // ipv4_address_port_settings - computed: false, optional: true, required: false
  private _ipv4AddressPortSettings?: string; 
  public get ipv4AddressPortSettings() {
    return this.getStringAttribute('ipv4_address_port_settings');
  }
  public set ipv4AddressPortSettings(value: string) {
    this._ipv4AddressPortSettings = value;
  }
  public resetIpv4AddressPortSettings() {
    this._ipv4AddressPortSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressPortSettingsInput() {
    return this._ipv4AddressPortSettings;
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

  // port_start - computed: false, optional: true, required: false
  private _portStart?: number; 
  public get portStart() {
    return this.getNumberAttribute('port_start');
  }
  public set portStart(value: number) {
    this._portStart = value;
  }
  public resetPortStart() {
    this._portStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStartInput() {
    return this._portStart;
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

  // share_ratio - computed: false, optional: true, required: false
  private _shareRatio?: number; 
  public get shareRatio() {
    return this.getNumberAttribute('share_ratio');
  }
  public set shareRatio(value: number) {
    this._shareRatio = value;
  }
  public resetShareRatio() {
    this._shareRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareRatioInput() {
    return this._shareRatio;
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
      ea_length: cdktf.numberToTerraform(this._eaLength),
      id: cdktf.stringToTerraform(this._id),
      ipv4_address_port_settings: cdktf.stringToTerraform(this._ipv4AddressPortSettings),
      ipv4_netmask: cdktf.stringToTerraform(this._ipv4Netmask),
      name: cdktf.stringToTerraform(this._name),
      port_start: cdktf.numberToTerraform(this._portStart),
      rule_ipv4_prefix: cdktf.stringToTerraform(this._ruleIpv4Prefix),
      rule_ipv6_prefix: cdktf.stringToTerraform(this._ruleIpv6Prefix),
      share_ratio: cdktf.numberToTerraform(this._shareRatio),
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
      ea_length: {
        value: cdktf.numberToHclTerraform(this._eaLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address_port_settings: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressPortSettings),
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
      port_start: {
        value: cdktf.numberToHclTerraform(this._portStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      share_ratio: {
        value: cdktf.numberToHclTerraform(this._shareRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
