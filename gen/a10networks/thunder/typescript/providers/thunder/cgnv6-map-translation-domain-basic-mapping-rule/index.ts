// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6MapTranslationDomainBasicMappingRuleAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Length of Embedded Address (EA) bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#ea_length Cgnv6MapTranslationDomainBasicMappingRuleA#ea_length}
  */
  readonly eaLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#id Cgnv6MapTranslationDomainBasicMappingRuleA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#name Cgnv6MapTranslationDomainBasicMappingRuleA#name}
  */
  readonly name: string;
  /**
  * Starting Port, Must be Power of 2 value or zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#port_start Cgnv6MapTranslationDomainBasicMappingRuleA#port_start}
  */
  readonly portStart?: number;
  /**
  * 'prefix-addr': Each CE is assigned an IPv4 prefix; 'single-addr': Each CE is assigned an IPv4 address; 'shared-addr': Each CE is assigned a shared IPv4 address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#rule_ipv4_address_port_settings Cgnv6MapTranslationDomainBasicMappingRuleA#rule_ipv4_address_port_settings}
  */
  readonly ruleIpv4AddressPortSettings?: string;
  /**
  * Port sharing ratio for each NAT IP. Must be Power of 2 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#share_ratio Cgnv6MapTranslationDomainBasicMappingRuleA#share_ratio}
  */
  readonly shareRatio?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#uuid Cgnv6MapTranslationDomainBasicMappingRuleA#uuid}
  */
  readonly uuid?: string;
  /**
  * prefix_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#prefix_rule_list Cgnv6MapTranslationDomainBasicMappingRuleA#prefix_rule_list}
  */
  readonly prefixRuleList?: Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructA[] | cdktf.IResolvable;
}
export interface Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructA {
  /**
  * Subnet mask (subnet bigger than /8 is not allowed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#ipv4_netmask Cgnv6MapTranslationDomainBasicMappingRuleA#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * MAP BMR prefix rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#name Cgnv6MapTranslationDomainBasicMappingRuleA#name}
  */
  readonly name: string;
  /**
  * IPv4 prefix of BMR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#rule_ipv4_prefix Cgnv6MapTranslationDomainBasicMappingRuleA#rule_ipv4_prefix}
  */
  readonly ruleIpv4Prefix?: string;
  /**
  * IPv6 prefix of BMR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#rule_ipv6_prefix Cgnv6MapTranslationDomainBasicMappingRuleA#rule_ipv6_prefix}
  */
  readonly ruleIpv6Prefix?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#user_tag Cgnv6MapTranslationDomainBasicMappingRuleA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#uuid Cgnv6MapTranslationDomainBasicMappingRuleA#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructAToTerraform(struct?: Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
    name: cdktf.stringToTerraform(struct!.name),
    rule_ipv4_prefix: cdktf.stringToTerraform(struct!.ruleIpv4Prefix),
    rule_ipv6_prefix: cdktf.stringToTerraform(struct!.ruleIpv6Prefix),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructAToHclTerraform(struct?: Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ruleIpv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ruleIpv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ruleIpv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIpv4Prefix = this._ruleIpv4Prefix;
    }
    if (this._ruleIpv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIpv6Prefix = this._ruleIpv6Prefix;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Netmask = undefined;
      this._name = undefined;
      this._ruleIpv4Prefix = undefined;
      this._ruleIpv6Prefix = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Netmask = value.ipv4Netmask;
      this._name = value.name;
      this._ruleIpv4Prefix = value.ruleIpv4Prefix;
      this._ruleIpv6Prefix = value.ruleIpv6Prefix;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
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
}

export class Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructAList extends cdktf.ComplexList {
  public internalValue? : Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructAOutputReference {
    return new Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule thunder_cgnv6_map_translation_domain_basic_mapping_rule}
*/
export class Cgnv6MapTranslationDomainBasicMappingRuleA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_map_translation_domain_basic_mapping_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6MapTranslationDomainBasicMappingRuleA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6MapTranslationDomainBasicMappingRuleA to import
  * @param importFromId The id of the existing Cgnv6MapTranslationDomainBasicMappingRuleA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6MapTranslationDomainBasicMappingRuleA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_map_translation_domain_basic_mapping_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_basic_mapping_rule thunder_cgnv6_map_translation_domain_basic_mapping_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6MapTranslationDomainBasicMappingRuleAConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6MapTranslationDomainBasicMappingRuleAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_map_translation_domain_basic_mapping_rule',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eaLength = config.eaLength;
    this._id = config.id;
    this._name = config.name;
    this._portStart = config.portStart;
    this._ruleIpv4AddressPortSettings = config.ruleIpv4AddressPortSettings;
    this._shareRatio = config.shareRatio;
    this._uuid = config.uuid;
    this._prefixRuleList.internalValue = config.prefixRuleList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rule_ipv4_address_port_settings - computed: false, optional: true, required: false
  private _ruleIpv4AddressPortSettings?: string; 
  public get ruleIpv4AddressPortSettings() {
    return this.getStringAttribute('rule_ipv4_address_port_settings');
  }
  public set ruleIpv4AddressPortSettings(value: string) {
    this._ruleIpv4AddressPortSettings = value;
  }
  public resetRuleIpv4AddressPortSettings() {
    this._ruleIpv4AddressPortSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIpv4AddressPortSettingsInput() {
    return this._ruleIpv4AddressPortSettings;
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

  // prefix_rule_list - computed: false, optional: true, required: false
  private _prefixRuleList = new Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructAList(this, "prefix_rule_list", false);
  public get prefixRuleList() {
    return this._prefixRuleList;
  }
  public putPrefixRuleList(value: Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructA[] | cdktf.IResolvable) {
    this._prefixRuleList.internalValue = value;
  }
  public resetPrefixRuleList() {
    this._prefixRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRuleListInput() {
    return this._prefixRuleList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ea_length: cdktf.numberToTerraform(this._eaLength),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port_start: cdktf.numberToTerraform(this._portStart),
      rule_ipv4_address_port_settings: cdktf.stringToTerraform(this._ruleIpv4AddressPortSettings),
      share_ratio: cdktf.numberToTerraform(this._shareRatio),
      uuid: cdktf.stringToTerraform(this._uuid),
      prefix_rule_list: cdktf.listMapper(cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructAToTerraform, true)(this._prefixRuleList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      rule_ipv4_address_port_settings: {
        value: cdktf.stringToHclTerraform(this._ruleIpv4AddressPortSettings),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_rule_list: {
        value: cdktf.listMapperHcl(cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructAToHclTerraform, true)(this._prefixRuleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
