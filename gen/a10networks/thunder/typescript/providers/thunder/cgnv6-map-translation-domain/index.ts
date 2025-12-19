// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6MapTranslationDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * MAP-T domain description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#description Cgnv6MapTranslationDomain#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#id Cgnv6MapTranslationDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Domain MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#mtu Cgnv6MapTranslationDomain#mtu}
  */
  readonly mtu?: number;
  /**
  * MAP-T domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#name Cgnv6MapTranslationDomain#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#packet_capture_template Cgnv6MapTranslationDomain#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#user_tag Cgnv6MapTranslationDomain#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#uuid Cgnv6MapTranslationDomain#uuid}
  */
  readonly uuid?: string;
  /**
  * basic_mapping_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#basic_mapping_rule Cgnv6MapTranslationDomain#basic_mapping_rule}
  */
  readonly basicMappingRule?: Cgnv6MapTranslationDomainBasicMappingRule;
  /**
  * default_mapping_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#default_mapping_rule Cgnv6MapTranslationDomain#default_mapping_rule}
  */
  readonly defaultMappingRule?: Cgnv6MapTranslationDomainDefaultMappingRule;
  /**
  * health_check_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#health_check_gateway Cgnv6MapTranslationDomain#health_check_gateway}
  */
  readonly healthCheckGateway?: Cgnv6MapTranslationDomainHealthCheckGateway;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#sampling_enable Cgnv6MapTranslationDomain#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6MapTranslationDomainSamplingEnable[] | cdktf.IResolvable;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#tcp Cgnv6MapTranslationDomain#tcp}
  */
  readonly tcp?: Cgnv6MapTranslationDomainTcp;
}
export interface Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStruct {
  /**
  * Subnet mask (subnet bigger than /8 is not allowed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#ipv4_netmask Cgnv6MapTranslationDomain#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * MAP BMR prefix rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#name Cgnv6MapTranslationDomain#name}
  */
  readonly name: string;
  /**
  * IPv4 prefix of BMR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#rule_ipv4_prefix Cgnv6MapTranslationDomain#rule_ipv4_prefix}
  */
  readonly ruleIpv4Prefix?: string;
  /**
  * IPv6 prefix of BMR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#rule_ipv6_prefix Cgnv6MapTranslationDomain#rule_ipv6_prefix}
  */
  readonly ruleIpv6Prefix?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#user_tag Cgnv6MapTranslationDomain#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#uuid Cgnv6MapTranslationDomain#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructToTerraform(struct?: Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStruct | cdktf.IResolvable): any {
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


export function cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructToHclTerraform(struct?: Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStruct | cdktf.IResolvable): any {
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

export class Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStruct | cdktf.IResolvable | undefined) {
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

export class Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructOutputReference {
    return new Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6MapTranslationDomainBasicMappingRule {
  /**
  * Length of Embedded Address (EA) bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#ea_length Cgnv6MapTranslationDomain#ea_length}
  */
  readonly eaLength?: number;
  /**
  * Starting Port, Must be Power of 2 value or zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#port_start Cgnv6MapTranslationDomain#port_start}
  */
  readonly portStart?: number;
  /**
  * 'prefix-addr': Each CE is assigned an IPv4 prefix; 'single-addr': Each CE is assigned an IPv4 address; 'shared-addr': Each CE is assigned a shared IPv4 address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#rule_ipv4_address_port_settings Cgnv6MapTranslationDomain#rule_ipv4_address_port_settings}
  */
  readonly ruleIpv4AddressPortSettings?: string;
  /**
  * Port sharing ratio for each NAT IP. Must be Power of 2 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#share_ratio Cgnv6MapTranslationDomain#share_ratio}
  */
  readonly shareRatio?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#uuid Cgnv6MapTranslationDomain#uuid}
  */
  readonly uuid?: string;
  /**
  * prefix_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#prefix_rule_list Cgnv6MapTranslationDomain#prefix_rule_list}
  */
  readonly prefixRuleList?: Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStruct[] | cdktf.IResolvable;
}

export function cgnv6MapTranslationDomainBasicMappingRuleToTerraform(struct?: Cgnv6MapTranslationDomainBasicMappingRuleOutputReference | Cgnv6MapTranslationDomainBasicMappingRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ea_length: cdktf.numberToTerraform(struct!.eaLength),
    port_start: cdktf.numberToTerraform(struct!.portStart),
    rule_ipv4_address_port_settings: cdktf.stringToTerraform(struct!.ruleIpv4AddressPortSettings),
    share_ratio: cdktf.numberToTerraform(struct!.shareRatio),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    prefix_rule_list: cdktf.listMapper(cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructToTerraform, true)(struct!.prefixRuleList),
  }
}


export function cgnv6MapTranslationDomainBasicMappingRuleToHclTerraform(struct?: Cgnv6MapTranslationDomainBasicMappingRuleOutputReference | Cgnv6MapTranslationDomainBasicMappingRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ea_length: {
      value: cdktf.numberToHclTerraform(struct!.eaLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_start: {
      value: cdktf.numberToHclTerraform(struct!.portStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_ipv4_address_port_settings: {
      value: cdktf.stringToHclTerraform(struct!.ruleIpv4AddressPortSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_ratio: {
      value: cdktf.numberToHclTerraform(struct!.shareRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_rule_list: {
      value: cdktf.listMapperHcl(cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructToHclTerraform, true)(struct!.prefixRuleList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6MapTranslationDomainBasicMappingRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6MapTranslationDomainBasicMappingRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eaLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.eaLength = this._eaLength;
    }
    if (this._portStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portStart = this._portStart;
    }
    if (this._ruleIpv4AddressPortSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIpv4AddressPortSettings = this._ruleIpv4AddressPortSettings;
    }
    if (this._shareRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareRatio = this._shareRatio;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._prefixRuleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRuleList = this._prefixRuleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6MapTranslationDomainBasicMappingRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eaLength = undefined;
      this._portStart = undefined;
      this._ruleIpv4AddressPortSettings = undefined;
      this._shareRatio = undefined;
      this._uuid = undefined;
      this._prefixRuleList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eaLength = value.eaLength;
      this._portStart = value.portStart;
      this._ruleIpv4AddressPortSettings = value.ruleIpv4AddressPortSettings;
      this._shareRatio = value.shareRatio;
      this._uuid = value.uuid;
      this._prefixRuleList.internalValue = value.prefixRuleList;
    }
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
  private _prefixRuleList = new Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStructList(this, "prefix_rule_list", false);
  public get prefixRuleList() {
    return this._prefixRuleList;
  }
  public putPrefixRuleList(value: Cgnv6MapTranslationDomainBasicMappingRulePrefixRuleListStruct[] | cdktf.IResolvable) {
    this._prefixRuleList.internalValue = value;
  }
  public resetPrefixRuleList() {
    this._prefixRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRuleListInput() {
    return this._prefixRuleList.internalValue;
  }
}
export interface Cgnv6MapTranslationDomainDefaultMappingRule {
  /**
  * Rule IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#rule_ipv6_prefix Cgnv6MapTranslationDomain#rule_ipv6_prefix}
  */
  readonly ruleIpv6Prefix?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#uuid Cgnv6MapTranslationDomain#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6MapTranslationDomainDefaultMappingRuleToTerraform(struct?: Cgnv6MapTranslationDomainDefaultMappingRuleOutputReference | Cgnv6MapTranslationDomainDefaultMappingRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_ipv6_prefix: cdktf.stringToTerraform(struct!.ruleIpv6Prefix),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6MapTranslationDomainDefaultMappingRuleToHclTerraform(struct?: Cgnv6MapTranslationDomainDefaultMappingRuleOutputReference | Cgnv6MapTranslationDomainDefaultMappingRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ruleIpv6Prefix),
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

export class Cgnv6MapTranslationDomainDefaultMappingRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6MapTranslationDomainDefaultMappingRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleIpv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIpv6Prefix = this._ruleIpv6Prefix;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6MapTranslationDomainDefaultMappingRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleIpv6Prefix = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleIpv6Prefix = value.ruleIpv6Prefix;
      this._uuid = value.uuid;
    }
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
export interface Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStruct {
  /**
  * IPv4 Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#ipv4_gateway Cgnv6MapTranslationDomain#ipv4_gateway}
  */
  readonly ipv4Gateway?: string;
}

export function cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructToTerraform(struct?: Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_gateway: cdktf.stringToTerraform(struct!.ipv4Gateway),
  }
}


export function cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructToHclTerraform(struct?: Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Gateway = this._ipv4Gateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Gateway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Gateway = value.ipv4Gateway;
    }
  }

  // ipv4_gateway - computed: false, optional: true, required: false
  private _ipv4Gateway?: string; 
  public get ipv4Gateway() {
    return this.getStringAttribute('ipv4_gateway');
  }
  public set ipv4Gateway(value: string) {
    this._ipv4Gateway = value;
  }
  public resetIpv4Gateway() {
    this._ipv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GatewayInput() {
    return this._ipv4Gateway;
  }
}

export class Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructOutputReference {
    return new Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStruct {
  /**
  * IPv6 Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#ipv6_gateway Cgnv6MapTranslationDomain#ipv6_gateway}
  */
  readonly ipv6Gateway?: string;
}

export function cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructToTerraform(struct?: Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_gateway: cdktf.stringToTerraform(struct!.ipv6Gateway),
  }
}


export function cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructToHclTerraform(struct?: Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Gateway = this._ipv6Gateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Gateway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Gateway = value.ipv6Gateway;
    }
  }

  // ipv6_gateway - computed: false, optional: true, required: false
  private _ipv6Gateway?: string; 
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }
  public set ipv6Gateway(value: string) {
    this._ipv6Gateway = value;
  }
  public resetIpv6Gateway() {
    this._ipv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GatewayInput() {
    return this._ipv6Gateway;
  }
}

export class Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructOutputReference {
    return new Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6MapTranslationDomainHealthCheckGateway {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#uuid Cgnv6MapTranslationDomain#uuid}
  */
  readonly uuid?: string;
  /**
  * 'all-link-failure': Withdraw routes on health-check failure of all IPv4 gateways or all IPv6 gateways; 'any-link-failure': Withdraw routes on health-check failure of any gateway (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#withdraw_route Cgnv6MapTranslationDomain#withdraw_route}
  */
  readonly withdrawRoute?: string;
  /**
  * address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#address_list Cgnv6MapTranslationDomain#address_list}
  */
  readonly addressList?: Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#ipv6_address_list Cgnv6MapTranslationDomain#ipv6_address_list}
  */
  readonly ipv6AddressList?: Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStruct[] | cdktf.IResolvable;
}

export function cgnv6MapTranslationDomainHealthCheckGatewayToTerraform(struct?: Cgnv6MapTranslationDomainHealthCheckGatewayOutputReference | Cgnv6MapTranslationDomainHealthCheckGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    withdraw_route: cdktf.stringToTerraform(struct!.withdrawRoute),
    address_list: cdktf.listMapper(cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructToTerraform, true)(struct!.addressList),
    ipv6_address_list: cdktf.listMapper(cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructToTerraform, true)(struct!.ipv6AddressList),
  }
}


export function cgnv6MapTranslationDomainHealthCheckGatewayToHclTerraform(struct?: Cgnv6MapTranslationDomainHealthCheckGatewayOutputReference | Cgnv6MapTranslationDomainHealthCheckGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    withdraw_route: {
      value: cdktf.stringToHclTerraform(struct!.withdrawRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_list: {
      value: cdktf.listMapperHcl(cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructToHclTerraform, true)(struct!.addressList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructList",
    },
    ipv6_address_list: {
      value: cdktf.listMapperHcl(cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructToHclTerraform, true)(struct!.ipv6AddressList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6MapTranslationDomainHealthCheckGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6MapTranslationDomainHealthCheckGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._withdrawRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.withdrawRoute = this._withdrawRoute;
    }
    if (this._addressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressList = this._addressList?.internalValue;
    }
    if (this._ipv6AddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressList = this._ipv6AddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6MapTranslationDomainHealthCheckGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._withdrawRoute = undefined;
      this._addressList.internalValue = undefined;
      this._ipv6AddressList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._withdrawRoute = value.withdrawRoute;
      this._addressList.internalValue = value.addressList;
      this._ipv6AddressList.internalValue = value.ipv6AddressList;
    }
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

  // withdraw_route - computed: false, optional: true, required: false
  private _withdrawRoute?: string; 
  public get withdrawRoute() {
    return this.getStringAttribute('withdraw_route');
  }
  public set withdrawRoute(value: string) {
    this._withdrawRoute = value;
  }
  public resetWithdrawRoute() {
    this._withdrawRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withdrawRouteInput() {
    return this._withdrawRoute;
  }

  // address_list - computed: false, optional: true, required: false
  private _addressList = new Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructList(this, "address_list", false);
  public get addressList() {
    return this._addressList;
  }
  public putAddressList(value: Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStruct[] | cdktf.IResolvable) {
    this._addressList.internalValue = value;
  }
  public resetAddressList() {
    this._addressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList.internalValue;
  }

  // ipv6_address_list - computed: false, optional: true, required: false
  private _ipv6AddressList = new Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructList(this, "ipv6_address_list", false);
  public get ipv6AddressList() {
    return this._ipv6AddressList;
  }
  public putIpv6AddressList(value: Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStruct[] | cdktf.IResolvable) {
    this._ipv6AddressList.internalValue = value;
  }
  public resetIpv6AddressList() {
    this._ipv6AddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressListInput() {
    return this._ipv6AddressList.internalValue;
  }
}
export interface Cgnv6MapTranslationDomainSamplingEnable {
  /**
  * 'all': all; 'inbound_packet_received': Inbound IPv4 Packets Received; 'inbound_frag_packet_received': Inbound IPv4 Fragment Packets Received; 'inbound_addr_port_validation_failed': Inbound IPv4 Destination Address Port Validation Failed; 'inbound_rev_lookup_failed': Inbound IPv4 Reverse Route Lookup Failed; 'inbound_dest_unreachable': Inbound IPv6 Destination Address Unreachable; 'outbound_packet_received': Outbound IPv6 Packets Received; 'outbound_frag_packet_received': Outbound IPv6 Fragment Packets Received; 'outbound_addr_validation_failed': Outbound IPv6 Source Address Validation Failed; 'outbound_rev_lookup_failed': Outbound IPv6 Reverse Route Lookup Failed; 'outbound_dest_unreachable': Outbound IPv4 Destination Address Unreachable; 'packet_mtu_exceeded': Packet Exceeded MTU; 'frag_icmp_sent': ICMP Packet Too Big Sent; 'interface_not_configured': Interfaces not Configured Dropped; 'bmr_prefixrules_configured': BMR prefix rules configured; 'helper_count': Helper Count; 'active_dhcpv6_leases': Active DHCPv6 leases;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#counters1 Cgnv6MapTranslationDomain#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6MapTranslationDomainSamplingEnableToTerraform(struct?: Cgnv6MapTranslationDomainSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6MapTranslationDomainSamplingEnableToHclTerraform(struct?: Cgnv6MapTranslationDomainSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6MapTranslationDomainSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6MapTranslationDomainSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6MapTranslationDomainSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class Cgnv6MapTranslationDomainSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6MapTranslationDomainSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6MapTranslationDomainSamplingEnableOutputReference {
    return new Cgnv6MapTranslationDomainSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6MapTranslationDomainTcpMssClamp {
  /**
  * Specify the min value allowed for the TCP MSS (Specify the min value allowed for the TCP MSS (default: 516))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#min Cgnv6MapTranslationDomain#min}
  */
  readonly min?: number;
  /**
  * 'fixed': Specify a fixed max value for the TCP MSS; 'none': No TCP MSS clamping(default); 'subtract': Specify the value to subtract from the TCP MSS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#mss_clamp_type Cgnv6MapTranslationDomain#mss_clamp_type}
  */
  readonly mssClampType?: string;
  /**
  * Specify the value to subtract from the TCP MSS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#mss_subtract Cgnv6MapTranslationDomain#mss_subtract}
  */
  readonly mssSubtract?: number;
  /**
  * The max value allowed for the TCP MSS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#mss_value Cgnv6MapTranslationDomain#mss_value}
  */
  readonly mssValue?: number;
}

export function cgnv6MapTranslationDomainTcpMssClampToTerraform(struct?: Cgnv6MapTranslationDomainTcpMssClampOutputReference | Cgnv6MapTranslationDomainTcpMssClamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min: cdktf.numberToTerraform(struct!.min),
    mss_clamp_type: cdktf.stringToTerraform(struct!.mssClampType),
    mss_subtract: cdktf.numberToTerraform(struct!.mssSubtract),
    mss_value: cdktf.numberToTerraform(struct!.mssValue),
  }
}


export function cgnv6MapTranslationDomainTcpMssClampToHclTerraform(struct?: Cgnv6MapTranslationDomainTcpMssClampOutputReference | Cgnv6MapTranslationDomainTcpMssClamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mss_clamp_type: {
      value: cdktf.stringToHclTerraform(struct!.mssClampType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mss_subtract: {
      value: cdktf.numberToHclTerraform(struct!.mssSubtract),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mss_value: {
      value: cdktf.numberToHclTerraform(struct!.mssValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6MapTranslationDomainTcpMssClampOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6MapTranslationDomainTcpMssClamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._mssClampType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssClampType = this._mssClampType;
    }
    if (this._mssSubtract !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssSubtract = this._mssSubtract;
    }
    if (this._mssValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssValue = this._mssValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6MapTranslationDomainTcpMssClamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._min = undefined;
      this._mssClampType = undefined;
      this._mssSubtract = undefined;
      this._mssValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._min = value.min;
      this._mssClampType = value.mssClampType;
      this._mssSubtract = value.mssSubtract;
      this._mssValue = value.mssValue;
    }
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // mss_clamp_type - computed: false, optional: true, required: false
  private _mssClampType?: string; 
  public get mssClampType() {
    return this.getStringAttribute('mss_clamp_type');
  }
  public set mssClampType(value: string) {
    this._mssClampType = value;
  }
  public resetMssClampType() {
    this._mssClampType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssClampTypeInput() {
    return this._mssClampType;
  }

  // mss_subtract - computed: false, optional: true, required: false
  private _mssSubtract?: number; 
  public get mssSubtract() {
    return this.getNumberAttribute('mss_subtract');
  }
  public set mssSubtract(value: number) {
    this._mssSubtract = value;
  }
  public resetMssSubtract() {
    this._mssSubtract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssSubtractInput() {
    return this._mssSubtract;
  }

  // mss_value - computed: false, optional: true, required: false
  private _mssValue?: number; 
  public get mssValue() {
    return this.getNumberAttribute('mss_value');
  }
  public set mssValue(value: number) {
    this._mssValue = value;
  }
  public resetMssValue() {
    this._mssValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssValueInput() {
    return this._mssValue;
  }
}
export interface Cgnv6MapTranslationDomainTcp {
  /**
  * mss_clamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#mss_clamp Cgnv6MapTranslationDomain#mss_clamp}
  */
  readonly mssClamp?: Cgnv6MapTranslationDomainTcpMssClamp;
}

export function cgnv6MapTranslationDomainTcpToTerraform(struct?: Cgnv6MapTranslationDomainTcpOutputReference | Cgnv6MapTranslationDomainTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mss_clamp: cgnv6MapTranslationDomainTcpMssClampToTerraform(struct!.mssClamp),
  }
}


export function cgnv6MapTranslationDomainTcpToHclTerraform(struct?: Cgnv6MapTranslationDomainTcpOutputReference | Cgnv6MapTranslationDomainTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mss_clamp: {
      value: cgnv6MapTranslationDomainTcpMssClampToHclTerraform(struct!.mssClamp),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6MapTranslationDomainTcpMssClampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6MapTranslationDomainTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6MapTranslationDomainTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mssClamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssClamp = this._mssClamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6MapTranslationDomainTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mssClamp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mssClamp.internalValue = value.mssClamp;
    }
  }

  // mss_clamp - computed: false, optional: true, required: false
  private _mssClamp = new Cgnv6MapTranslationDomainTcpMssClampOutputReference(this, "mss_clamp");
  public get mssClamp() {
    return this._mssClamp;
  }
  public putMssClamp(value: Cgnv6MapTranslationDomainTcpMssClamp) {
    this._mssClamp.internalValue = value;
  }
  public resetMssClamp() {
    this._mssClamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssClampInput() {
    return this._mssClamp.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain thunder_cgnv6_map_translation_domain}
*/
export class Cgnv6MapTranslationDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_map_translation_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6MapTranslationDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6MapTranslationDomain to import
  * @param importFromId The id of the existing Cgnv6MapTranslationDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6MapTranslationDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_map_translation_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_map_translation_domain thunder_cgnv6_map_translation_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6MapTranslationDomainConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6MapTranslationDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_map_translation_domain',
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
    this._description = config.description;
    this._id = config.id;
    this._mtu = config.mtu;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._basicMappingRule.internalValue = config.basicMappingRule;
    this._defaultMappingRule.internalValue = config.defaultMappingRule;
    this._healthCheckGateway.internalValue = config.healthCheckGateway;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._tcp.internalValue = config.tcp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
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

  // basic_mapping_rule - computed: false, optional: true, required: false
  private _basicMappingRule = new Cgnv6MapTranslationDomainBasicMappingRuleOutputReference(this, "basic_mapping_rule");
  public get basicMappingRule() {
    return this._basicMappingRule;
  }
  public putBasicMappingRule(value: Cgnv6MapTranslationDomainBasicMappingRule) {
    this._basicMappingRule.internalValue = value;
  }
  public resetBasicMappingRule() {
    this._basicMappingRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicMappingRuleInput() {
    return this._basicMappingRule.internalValue;
  }

  // default_mapping_rule - computed: false, optional: true, required: false
  private _defaultMappingRule = new Cgnv6MapTranslationDomainDefaultMappingRuleOutputReference(this, "default_mapping_rule");
  public get defaultMappingRule() {
    return this._defaultMappingRule;
  }
  public putDefaultMappingRule(value: Cgnv6MapTranslationDomainDefaultMappingRule) {
    this._defaultMappingRule.internalValue = value;
  }
  public resetDefaultMappingRule() {
    this._defaultMappingRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMappingRuleInput() {
    return this._defaultMappingRule.internalValue;
  }

  // health_check_gateway - computed: false, optional: true, required: false
  private _healthCheckGateway = new Cgnv6MapTranslationDomainHealthCheckGatewayOutputReference(this, "health_check_gateway");
  public get healthCheckGateway() {
    return this._healthCheckGateway;
  }
  public putHealthCheckGateway(value: Cgnv6MapTranslationDomainHealthCheckGateway) {
    this._healthCheckGateway.internalValue = value;
  }
  public resetHealthCheckGateway() {
    this._healthCheckGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGatewayInput() {
    return this._healthCheckGateway.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6MapTranslationDomainSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6MapTranslationDomainSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new Cgnv6MapTranslationDomainTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: Cgnv6MapTranslationDomainTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      basic_mapping_rule: cgnv6MapTranslationDomainBasicMappingRuleToTerraform(this._basicMappingRule.internalValue),
      default_mapping_rule: cgnv6MapTranslationDomainDefaultMappingRuleToTerraform(this._defaultMappingRule.internalValue),
      health_check_gateway: cgnv6MapTranslationDomainHealthCheckGatewayToTerraform(this._healthCheckGateway.internalValue),
      sampling_enable: cdktf.listMapper(cgnv6MapTranslationDomainSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      tcp: cgnv6MapTranslationDomainTcpToTerraform(this._tcp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
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
      basic_mapping_rule: {
        value: cgnv6MapTranslationDomainBasicMappingRuleToHclTerraform(this._basicMappingRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6MapTranslationDomainBasicMappingRuleList",
      },
      default_mapping_rule: {
        value: cgnv6MapTranslationDomainDefaultMappingRuleToHclTerraform(this._defaultMappingRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6MapTranslationDomainDefaultMappingRuleList",
      },
      health_check_gateway: {
        value: cgnv6MapTranslationDomainHealthCheckGatewayToHclTerraform(this._healthCheckGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6MapTranslationDomainHealthCheckGatewayList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6MapTranslationDomainSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6MapTranslationDomainSamplingEnableList",
      },
      tcp: {
        value: cgnv6MapTranslationDomainTcpToHclTerraform(this._tcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6MapTranslationDomainTcpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
