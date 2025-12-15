// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityIdpPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * IDP policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#name SecurityIdpPolicy#name}
  */
  readonly name: string;
  /**
  * exempt_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#exempt_rule SecurityIdpPolicy#exempt_rule}
  */
  readonly exemptRule?: SecurityIdpPolicyExemptRule[] | cdktf.IResolvable;
  /**
  * ips_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#ips_rule SecurityIdpPolicy#ips_rule}
  */
  readonly ipsRule?: SecurityIdpPolicyIpsRule[] | cdktf.IResolvable;
}
export interface SecurityIdpPolicyExemptRuleMatch {
  /**
  * Match custom attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#custom_attack SecurityIdpPolicy#custom_attack}
  */
  readonly customAttack?: string[];
  /**
  * Match custom attack groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#custom_attack_group SecurityIdpPolicy#custom_attack_group}
  */
  readonly customAttackGroup?: string[];
  /**
  * Match destination address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#destination_address SecurityIdpPolicy#destination_address}
  */
  readonly destinationAddress?: string[];
  /**
  * Don't match destination address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#destination_address_except SecurityIdpPolicy#destination_address_except}
  */
  readonly destinationAddressExcept?: string[];
  /**
  * Match dynamic attack groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#dynamic_attack_group SecurityIdpPolicy#dynamic_attack_group}
  */
  readonly dynamicAttackGroup?: string[];
  /**
  * Match from zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#from_zone SecurityIdpPolicy#from_zone}
  */
  readonly fromZone?: string;
  /**
  * Match predefined attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#predefined_attack SecurityIdpPolicy#predefined_attack}
  */
  readonly predefinedAttack?: string[];
  /**
  * Match predefined attack groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#predefined_attack_group SecurityIdpPolicy#predefined_attack_group}
  */
  readonly predefinedAttackGroup?: string[];
  /**
  * Match source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#source_address SecurityIdpPolicy#source_address}
  */
  readonly sourceAddress?: string[];
  /**
  * Don't match source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#source_address_except SecurityIdpPolicy#source_address_except}
  */
  readonly sourceAddressExcept?: string[];
  /**
  * Match to zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#to_zone SecurityIdpPolicy#to_zone}
  */
  readonly toZone?: string;
}

export function securityIdpPolicyExemptRuleMatchToTerraform(struct?: SecurityIdpPolicyExemptRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attack: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customAttack),
    custom_attack_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customAttackGroup),
    destination_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddress),
    destination_address_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddressExcept),
    dynamic_attack_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dynamicAttackGroup),
    from_zone: cdktf.stringToTerraform(struct!.fromZone),
    predefined_attack: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.predefinedAttack),
    predefined_attack_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.predefinedAttackGroup),
    source_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddress),
    source_address_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddressExcept),
    to_zone: cdktf.stringToTerraform(struct!.toZone),
  }
}


export function securityIdpPolicyExemptRuleMatchToHclTerraform(struct?: SecurityIdpPolicyExemptRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_attack: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customAttack),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_attack_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customAttackGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_address_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddressExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dynamic_attack_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dynamicAttackGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    from_zone: {
      value: cdktf.stringToHclTerraform(struct!.fromZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predefined_attack: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.predefinedAttack),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    predefined_attack_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.predefinedAttackGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_address_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddressExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    to_zone: {
      value: cdktf.stringToHclTerraform(struct!.toZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpPolicyExemptRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpPolicyExemptRuleMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAttack !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttack = this._customAttack;
    }
    if (this._customAttackGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttackGroup = this._customAttackGroup;
    }
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._destinationAddressExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddressExcept = this._destinationAddressExcept;
    }
    if (this._dynamicAttackGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicAttackGroup = this._dynamicAttackGroup;
    }
    if (this._fromZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromZone = this._fromZone;
    }
    if (this._predefinedAttack !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedAttack = this._predefinedAttack;
    }
    if (this._predefinedAttackGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedAttackGroup = this._predefinedAttackGroup;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sourceAddressExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressExcept = this._sourceAddressExcept;
    }
    if (this._toZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.toZone = this._toZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpPolicyExemptRuleMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customAttack = undefined;
      this._customAttackGroup = undefined;
      this._destinationAddress = undefined;
      this._destinationAddressExcept = undefined;
      this._dynamicAttackGroup = undefined;
      this._fromZone = undefined;
      this._predefinedAttack = undefined;
      this._predefinedAttackGroup = undefined;
      this._sourceAddress = undefined;
      this._sourceAddressExcept = undefined;
      this._toZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customAttack = value.customAttack;
      this._customAttackGroup = value.customAttackGroup;
      this._destinationAddress = value.destinationAddress;
      this._destinationAddressExcept = value.destinationAddressExcept;
      this._dynamicAttackGroup = value.dynamicAttackGroup;
      this._fromZone = value.fromZone;
      this._predefinedAttack = value.predefinedAttack;
      this._predefinedAttackGroup = value.predefinedAttackGroup;
      this._sourceAddress = value.sourceAddress;
      this._sourceAddressExcept = value.sourceAddressExcept;
      this._toZone = value.toZone;
    }
  }

  // custom_attack - computed: false, optional: true, required: false
  private _customAttack?: string[]; 
  public get customAttack() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_attack'));
  }
  public set customAttack(value: string[]) {
    this._customAttack = value;
  }
  public resetCustomAttack() {
    this._customAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttackInput() {
    return this._customAttack;
  }

  // custom_attack_group - computed: false, optional: true, required: false
  private _customAttackGroup?: string[]; 
  public get customAttackGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_attack_group'));
  }
  public set customAttackGroup(value: string[]) {
    this._customAttackGroup = value;
  }
  public resetCustomAttackGroup() {
    this._customAttackGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttackGroupInput() {
    return this._customAttackGroup;
  }

  // destination_address - computed: false, optional: true, required: false
  private _destinationAddress?: string[]; 
  public get destinationAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_address'));
  }
  public set destinationAddress(value: string[]) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // destination_address_except - computed: false, optional: true, required: false
  private _destinationAddressExcept?: string[]; 
  public get destinationAddressExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_address_except'));
  }
  public set destinationAddressExcept(value: string[]) {
    this._destinationAddressExcept = value;
  }
  public resetDestinationAddressExcept() {
    this._destinationAddressExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressExceptInput() {
    return this._destinationAddressExcept;
  }

  // dynamic_attack_group - computed: false, optional: true, required: false
  private _dynamicAttackGroup?: string[]; 
  public get dynamicAttackGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('dynamic_attack_group'));
  }
  public set dynamicAttackGroup(value: string[]) {
    this._dynamicAttackGroup = value;
  }
  public resetDynamicAttackGroup() {
    this._dynamicAttackGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicAttackGroupInput() {
    return this._dynamicAttackGroup;
  }

  // from_zone - computed: false, optional: true, required: false
  private _fromZone?: string; 
  public get fromZone() {
    return this.getStringAttribute('from_zone');
  }
  public set fromZone(value: string) {
    this._fromZone = value;
  }
  public resetFromZone() {
    this._fromZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromZoneInput() {
    return this._fromZone;
  }

  // predefined_attack - computed: false, optional: true, required: false
  private _predefinedAttack?: string[]; 
  public get predefinedAttack() {
    return cdktf.Fn.tolist(this.getListAttribute('predefined_attack'));
  }
  public set predefinedAttack(value: string[]) {
    this._predefinedAttack = value;
  }
  public resetPredefinedAttack() {
    this._predefinedAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedAttackInput() {
    return this._predefinedAttack;
  }

  // predefined_attack_group - computed: false, optional: true, required: false
  private _predefinedAttackGroup?: string[]; 
  public get predefinedAttackGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('predefined_attack_group'));
  }
  public set predefinedAttackGroup(value: string[]) {
    this._predefinedAttackGroup = value;
  }
  public resetPredefinedAttackGroup() {
    this._predefinedAttackGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedAttackGroupInput() {
    return this._predefinedAttackGroup;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string[]; 
  public get sourceAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('source_address'));
  }
  public set sourceAddress(value: string[]) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_address_except - computed: false, optional: true, required: false
  private _sourceAddressExcept?: string[]; 
  public get sourceAddressExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('source_address_except'));
  }
  public set sourceAddressExcept(value: string[]) {
    this._sourceAddressExcept = value;
  }
  public resetSourceAddressExcept() {
    this._sourceAddressExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressExceptInput() {
    return this._sourceAddressExcept;
  }

  // to_zone - computed: false, optional: true, required: false
  private _toZone?: string; 
  public get toZone() {
    return this.getStringAttribute('to_zone');
  }
  public set toZone(value: string) {
    this._toZone = value;
  }
  public resetToZone() {
    this._toZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toZoneInput() {
    return this._toZone;
  }
}
export interface SecurityIdpPolicyExemptRule {
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#description SecurityIdpPolicy#description}
  */
  readonly description?: string;
  /**
  * Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#name SecurityIdpPolicy#name}
  */
  readonly name: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#match SecurityIdpPolicy#match}
  */
  readonly match?: SecurityIdpPolicyExemptRuleMatch;
}

export function securityIdpPolicyExemptRuleToTerraform(struct?: SecurityIdpPolicyExemptRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    match: securityIdpPolicyExemptRuleMatchToTerraform(struct!.match),
  }
}


export function securityIdpPolicyExemptRuleToHclTerraform(struct?: SecurityIdpPolicyExemptRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    match: {
      value: securityIdpPolicyExemptRuleMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpPolicyExemptRuleMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpPolicyExemptRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityIdpPolicyExemptRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpPolicyExemptRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._match.internalValue = value.match;
    }
  }

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

  // match - computed: false, optional: true, required: false
  private _match = new SecurityIdpPolicyExemptRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SecurityIdpPolicyExemptRuleMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class SecurityIdpPolicyExemptRuleList extends cdktf.ComplexList {
  public internalValue? : SecurityIdpPolicyExemptRule[] | cdktf.IResolvable

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
  public get(index: number): SecurityIdpPolicyExemptRuleOutputReference {
    return new SecurityIdpPolicyExemptRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityIdpPolicyIpsRuleMatch {
  /**
  * Specify application or application-set name to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#application SecurityIdpPolicy#application}
  */
  readonly application?: string;
  /**
  * Match custom attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#custom_attack SecurityIdpPolicy#custom_attack}
  */
  readonly customAttack?: string[];
  /**
  * Match custom attack groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#custom_attack_group SecurityIdpPolicy#custom_attack_group}
  */
  readonly customAttackGroup?: string[];
  /**
  * Match destination address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#destination_address SecurityIdpPolicy#destination_address}
  */
  readonly destinationAddress?: string[];
  /**
  * Don't match destination address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#destination_address_except SecurityIdpPolicy#destination_address_except}
  */
  readonly destinationAddressExcept?: string[];
  /**
  * Match dynamic attack groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#dynamic_attack_group SecurityIdpPolicy#dynamic_attack_group}
  */
  readonly dynamicAttackGroup?: string[];
  /**
  * Match from zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#from_zone SecurityIdpPolicy#from_zone}
  */
  readonly fromZone?: string;
  /**
  * Match predefined attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#predefined_attack SecurityIdpPolicy#predefined_attack}
  */
  readonly predefinedAttack?: string[];
  /**
  * Match predefined attack groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#predefined_attack_group SecurityIdpPolicy#predefined_attack_group}
  */
  readonly predefinedAttackGroup?: string[];
  /**
  * Match source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#source_address SecurityIdpPolicy#source_address}
  */
  readonly sourceAddress?: string[];
  /**
  * Don't match source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#source_address_except SecurityIdpPolicy#source_address_except}
  */
  readonly sourceAddressExcept?: string[];
  /**
  * Match to zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#to_zone SecurityIdpPolicy#to_zone}
  */
  readonly toZone?: string;
}

export function securityIdpPolicyIpsRuleMatchToTerraform(struct?: SecurityIdpPolicyIpsRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.stringToTerraform(struct!.application),
    custom_attack: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customAttack),
    custom_attack_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customAttackGroup),
    destination_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddress),
    destination_address_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddressExcept),
    dynamic_attack_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dynamicAttackGroup),
    from_zone: cdktf.stringToTerraform(struct!.fromZone),
    predefined_attack: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.predefinedAttack),
    predefined_attack_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.predefinedAttackGroup),
    source_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddress),
    source_address_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddressExcept),
    to_zone: cdktf.stringToTerraform(struct!.toZone),
  }
}


export function securityIdpPolicyIpsRuleMatchToHclTerraform(struct?: SecurityIdpPolicyIpsRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attack: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customAttack),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_attack_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customAttackGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_address_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddressExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dynamic_attack_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dynamicAttackGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    from_zone: {
      value: cdktf.stringToHclTerraform(struct!.fromZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predefined_attack: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.predefinedAttack),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    predefined_attack_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.predefinedAttackGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_address_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddressExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    to_zone: {
      value: cdktf.stringToHclTerraform(struct!.toZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpPolicyIpsRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpPolicyIpsRuleMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._customAttack !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttack = this._customAttack;
    }
    if (this._customAttackGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttackGroup = this._customAttackGroup;
    }
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._destinationAddressExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddressExcept = this._destinationAddressExcept;
    }
    if (this._dynamicAttackGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicAttackGroup = this._dynamicAttackGroup;
    }
    if (this._fromZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromZone = this._fromZone;
    }
    if (this._predefinedAttack !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedAttack = this._predefinedAttack;
    }
    if (this._predefinedAttackGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedAttackGroup = this._predefinedAttackGroup;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sourceAddressExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressExcept = this._sourceAddressExcept;
    }
    if (this._toZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.toZone = this._toZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpPolicyIpsRuleMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application = undefined;
      this._customAttack = undefined;
      this._customAttackGroup = undefined;
      this._destinationAddress = undefined;
      this._destinationAddressExcept = undefined;
      this._dynamicAttackGroup = undefined;
      this._fromZone = undefined;
      this._predefinedAttack = undefined;
      this._predefinedAttackGroup = undefined;
      this._sourceAddress = undefined;
      this._sourceAddressExcept = undefined;
      this._toZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application = value.application;
      this._customAttack = value.customAttack;
      this._customAttackGroup = value.customAttackGroup;
      this._destinationAddress = value.destinationAddress;
      this._destinationAddressExcept = value.destinationAddressExcept;
      this._dynamicAttackGroup = value.dynamicAttackGroup;
      this._fromZone = value.fromZone;
      this._predefinedAttack = value.predefinedAttack;
      this._predefinedAttackGroup = value.predefinedAttackGroup;
      this._sourceAddress = value.sourceAddress;
      this._sourceAddressExcept = value.sourceAddressExcept;
      this._toZone = value.toZone;
    }
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // custom_attack - computed: false, optional: true, required: false
  private _customAttack?: string[]; 
  public get customAttack() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_attack'));
  }
  public set customAttack(value: string[]) {
    this._customAttack = value;
  }
  public resetCustomAttack() {
    this._customAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttackInput() {
    return this._customAttack;
  }

  // custom_attack_group - computed: false, optional: true, required: false
  private _customAttackGroup?: string[]; 
  public get customAttackGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_attack_group'));
  }
  public set customAttackGroup(value: string[]) {
    this._customAttackGroup = value;
  }
  public resetCustomAttackGroup() {
    this._customAttackGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttackGroupInput() {
    return this._customAttackGroup;
  }

  // destination_address - computed: false, optional: true, required: false
  private _destinationAddress?: string[]; 
  public get destinationAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_address'));
  }
  public set destinationAddress(value: string[]) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // destination_address_except - computed: false, optional: true, required: false
  private _destinationAddressExcept?: string[]; 
  public get destinationAddressExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_address_except'));
  }
  public set destinationAddressExcept(value: string[]) {
    this._destinationAddressExcept = value;
  }
  public resetDestinationAddressExcept() {
    this._destinationAddressExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressExceptInput() {
    return this._destinationAddressExcept;
  }

  // dynamic_attack_group - computed: false, optional: true, required: false
  private _dynamicAttackGroup?: string[]; 
  public get dynamicAttackGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('dynamic_attack_group'));
  }
  public set dynamicAttackGroup(value: string[]) {
    this._dynamicAttackGroup = value;
  }
  public resetDynamicAttackGroup() {
    this._dynamicAttackGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicAttackGroupInput() {
    return this._dynamicAttackGroup;
  }

  // from_zone - computed: false, optional: true, required: false
  private _fromZone?: string; 
  public get fromZone() {
    return this.getStringAttribute('from_zone');
  }
  public set fromZone(value: string) {
    this._fromZone = value;
  }
  public resetFromZone() {
    this._fromZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromZoneInput() {
    return this._fromZone;
  }

  // predefined_attack - computed: false, optional: true, required: false
  private _predefinedAttack?: string[]; 
  public get predefinedAttack() {
    return cdktf.Fn.tolist(this.getListAttribute('predefined_attack'));
  }
  public set predefinedAttack(value: string[]) {
    this._predefinedAttack = value;
  }
  public resetPredefinedAttack() {
    this._predefinedAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedAttackInput() {
    return this._predefinedAttack;
  }

  // predefined_attack_group - computed: false, optional: true, required: false
  private _predefinedAttackGroup?: string[]; 
  public get predefinedAttackGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('predefined_attack_group'));
  }
  public set predefinedAttackGroup(value: string[]) {
    this._predefinedAttackGroup = value;
  }
  public resetPredefinedAttackGroup() {
    this._predefinedAttackGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedAttackGroupInput() {
    return this._predefinedAttackGroup;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string[]; 
  public get sourceAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('source_address'));
  }
  public set sourceAddress(value: string[]) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_address_except - computed: false, optional: true, required: false
  private _sourceAddressExcept?: string[]; 
  public get sourceAddressExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('source_address_except'));
  }
  public set sourceAddressExcept(value: string[]) {
    this._sourceAddressExcept = value;
  }
  public resetSourceAddressExcept() {
    this._sourceAddressExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressExceptInput() {
    return this._sourceAddressExcept;
  }

  // to_zone - computed: false, optional: true, required: false
  private _toZone?: string; 
  public get toZone() {
    return this.getStringAttribute('to_zone');
  }
  public set toZone(value: string) {
    this._toZone = value;
  }
  public resetToZone() {
    this._toZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toZoneInput() {
    return this._toZone;
  }
}
export interface SecurityIdpPolicyIpsRuleThen {
  /**
  * Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#action SecurityIdpPolicy#action}
  */
  readonly action: string;
  /**
  * Forwarding class for outgoing packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#action_cos_forwarding_class SecurityIdpPolicy#action_cos_forwarding_class}
  */
  readonly actionCosForwardingClass?: string;
  /**
  * Codepoint value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#action_dscp_code_point SecurityIdpPolicy#action_dscp_code_point}
  */
  readonly actionDscpCodePoint?: number;
  /**
  * IP-action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#ip_action SecurityIdpPolicy#ip_action}
  */
  readonly ipAction?: string;
  /**
  * Log IP action taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#ip_action_log SecurityIdpPolicy#ip_action_log}
  */
  readonly ipActionLog?: boolean | cdktf.IResolvable;
  /**
  * Log IP action creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#ip_action_log_create SecurityIdpPolicy#ip_action_log_create}
  */
  readonly ipActionLogCreate?: boolean | cdktf.IResolvable;
  /**
  * Refresh timeout when future connections match installed ip-action filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#ip_action_refresh_timeout SecurityIdpPolicy#ip_action_refresh_timeout}
  */
  readonly ipActionRefreshTimeout?: boolean | cdktf.IResolvable;
  /**
  * IP-action target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#ip_action_target SecurityIdpPolicy#ip_action_target}
  */
  readonly ipActionTarget?: string;
  /**
  * Number of seconds IP action should remain effective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#ip_action_timeout SecurityIdpPolicy#ip_action_timeout}
  */
  readonly ipActionTimeout?: number;
  /**
  * Configure notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#notification SecurityIdpPolicy#notification}
  */
  readonly notification?: boolean | cdktf.IResolvable;
  /**
  * Enable attack logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#notification_log_attacks SecurityIdpPolicy#notification_log_attacks}
  */
  readonly notificationLogAttacks?: boolean | cdktf.IResolvable;
  /**
  * Set alert flag in attack log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#notification_log_attacks_alert SecurityIdpPolicy#notification_log_attacks_alert}
  */
  readonly notificationLogAttacksAlert?: boolean | cdktf.IResolvable;
  /**
  * Enable packet-log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#notification_packet_log SecurityIdpPolicy#notification_packet_log}
  */
  readonly notificationPacketLog?: boolean | cdktf.IResolvable;
  /**
  * No of packets to capture after attack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#notification_packet_log_post_attack SecurityIdpPolicy#notification_packet_log_post_attack}
  */
  readonly notificationPacketLogPostAttack?: number;
  /**
  * Timeout (seconds) after attack before stopping packet capture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#notification_packet_log_post_attack_timeout SecurityIdpPolicy#notification_packet_log_post_attack_timeout}
  */
  readonly notificationPacketLogPostAttackTimeout?: number;
  /**
  * No of packets to capture before attack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#notification_packet_log_pre_attack SecurityIdpPolicy#notification_packet_log_pre_attack}
  */
  readonly notificationPacketLogPreAttack?: number;
  /**
  * Set rule severity level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#severity SecurityIdpPolicy#severity}
  */
  readonly severity?: string;
}

export function securityIdpPolicyIpsRuleThenToTerraform(struct?: SecurityIdpPolicyIpsRuleThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_cos_forwarding_class: cdktf.stringToTerraform(struct!.actionCosForwardingClass),
    action_dscp_code_point: cdktf.numberToTerraform(struct!.actionDscpCodePoint),
    ip_action: cdktf.stringToTerraform(struct!.ipAction),
    ip_action_log: cdktf.booleanToTerraform(struct!.ipActionLog),
    ip_action_log_create: cdktf.booleanToTerraform(struct!.ipActionLogCreate),
    ip_action_refresh_timeout: cdktf.booleanToTerraform(struct!.ipActionRefreshTimeout),
    ip_action_target: cdktf.stringToTerraform(struct!.ipActionTarget),
    ip_action_timeout: cdktf.numberToTerraform(struct!.ipActionTimeout),
    notification: cdktf.booleanToTerraform(struct!.notification),
    notification_log_attacks: cdktf.booleanToTerraform(struct!.notificationLogAttacks),
    notification_log_attacks_alert: cdktf.booleanToTerraform(struct!.notificationLogAttacksAlert),
    notification_packet_log: cdktf.booleanToTerraform(struct!.notificationPacketLog),
    notification_packet_log_post_attack: cdktf.numberToTerraform(struct!.notificationPacketLogPostAttack),
    notification_packet_log_post_attack_timeout: cdktf.numberToTerraform(struct!.notificationPacketLogPostAttackTimeout),
    notification_packet_log_pre_attack: cdktf.numberToTerraform(struct!.notificationPacketLogPreAttack),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function securityIdpPolicyIpsRuleThenToHclTerraform(struct?: SecurityIdpPolicyIpsRuleThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_cos_forwarding_class: {
      value: cdktf.stringToHclTerraform(struct!.actionCosForwardingClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_dscp_code_point: {
      value: cdktf.numberToHclTerraform(struct!.actionDscpCodePoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_action: {
      value: cdktf.stringToHclTerraform(struct!.ipAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_action_log: {
      value: cdktf.booleanToHclTerraform(struct!.ipActionLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_action_log_create: {
      value: cdktf.booleanToHclTerraform(struct!.ipActionLogCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_action_refresh_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.ipActionRefreshTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_action_target: {
      value: cdktf.stringToHclTerraform(struct!.ipActionTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_action_timeout: {
      value: cdktf.numberToHclTerraform(struct!.ipActionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification: {
      value: cdktf.booleanToHclTerraform(struct!.notification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_log_attacks: {
      value: cdktf.booleanToHclTerraform(struct!.notificationLogAttacks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_log_attacks_alert: {
      value: cdktf.booleanToHclTerraform(struct!.notificationLogAttacksAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_packet_log: {
      value: cdktf.booleanToHclTerraform(struct!.notificationPacketLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_packet_log_post_attack: {
      value: cdktf.numberToHclTerraform(struct!.notificationPacketLogPostAttack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification_packet_log_post_attack_timeout: {
      value: cdktf.numberToHclTerraform(struct!.notificationPacketLogPostAttackTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification_packet_log_pre_attack: {
      value: cdktf.numberToHclTerraform(struct!.notificationPacketLogPreAttack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpPolicyIpsRuleThenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpPolicyIpsRuleThen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionCosForwardingClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCosForwardingClass = this._actionCosForwardingClass;
    }
    if (this._actionDscpCodePoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDscpCodePoint = this._actionDscpCodePoint;
    }
    if (this._ipAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAction = this._ipAction;
    }
    if (this._ipActionLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipActionLog = this._ipActionLog;
    }
    if (this._ipActionLogCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipActionLogCreate = this._ipActionLogCreate;
    }
    if (this._ipActionRefreshTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipActionRefreshTimeout = this._ipActionRefreshTimeout;
    }
    if (this._ipActionTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipActionTarget = this._ipActionTarget;
    }
    if (this._ipActionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipActionTimeout = this._ipActionTimeout;
    }
    if (this._notification !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification;
    }
    if (this._notificationLogAttacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLogAttacks = this._notificationLogAttacks;
    }
    if (this._notificationLogAttacksAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLogAttacksAlert = this._notificationLogAttacksAlert;
    }
    if (this._notificationPacketLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPacketLog = this._notificationPacketLog;
    }
    if (this._notificationPacketLogPostAttack !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPacketLogPostAttack = this._notificationPacketLogPostAttack;
    }
    if (this._notificationPacketLogPostAttackTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPacketLogPostAttackTimeout = this._notificationPacketLogPostAttackTimeout;
    }
    if (this._notificationPacketLogPreAttack !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPacketLogPreAttack = this._notificationPacketLogPreAttack;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpPolicyIpsRuleThen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionCosForwardingClass = undefined;
      this._actionDscpCodePoint = undefined;
      this._ipAction = undefined;
      this._ipActionLog = undefined;
      this._ipActionLogCreate = undefined;
      this._ipActionRefreshTimeout = undefined;
      this._ipActionTarget = undefined;
      this._ipActionTimeout = undefined;
      this._notification = undefined;
      this._notificationLogAttacks = undefined;
      this._notificationLogAttacksAlert = undefined;
      this._notificationPacketLog = undefined;
      this._notificationPacketLogPostAttack = undefined;
      this._notificationPacketLogPostAttackTimeout = undefined;
      this._notificationPacketLogPreAttack = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionCosForwardingClass = value.actionCosForwardingClass;
      this._actionDscpCodePoint = value.actionDscpCodePoint;
      this._ipAction = value.ipAction;
      this._ipActionLog = value.ipActionLog;
      this._ipActionLogCreate = value.ipActionLogCreate;
      this._ipActionRefreshTimeout = value.ipActionRefreshTimeout;
      this._ipActionTarget = value.ipActionTarget;
      this._ipActionTimeout = value.ipActionTimeout;
      this._notification = value.notification;
      this._notificationLogAttacks = value.notificationLogAttacks;
      this._notificationLogAttacksAlert = value.notificationLogAttacksAlert;
      this._notificationPacketLog = value.notificationPacketLog;
      this._notificationPacketLogPostAttack = value.notificationPacketLogPostAttack;
      this._notificationPacketLogPostAttackTimeout = value.notificationPacketLogPostAttackTimeout;
      this._notificationPacketLogPreAttack = value.notificationPacketLogPreAttack;
      this._severity = value.severity;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_cos_forwarding_class - computed: false, optional: true, required: false
  private _actionCosForwardingClass?: string; 
  public get actionCosForwardingClass() {
    return this.getStringAttribute('action_cos_forwarding_class');
  }
  public set actionCosForwardingClass(value: string) {
    this._actionCosForwardingClass = value;
  }
  public resetActionCosForwardingClass() {
    this._actionCosForwardingClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCosForwardingClassInput() {
    return this._actionCosForwardingClass;
  }

  // action_dscp_code_point - computed: false, optional: true, required: false
  private _actionDscpCodePoint?: number; 
  public get actionDscpCodePoint() {
    return this.getNumberAttribute('action_dscp_code_point');
  }
  public set actionDscpCodePoint(value: number) {
    this._actionDscpCodePoint = value;
  }
  public resetActionDscpCodePoint() {
    this._actionDscpCodePoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDscpCodePointInput() {
    return this._actionDscpCodePoint;
  }

  // ip_action - computed: false, optional: true, required: false
  private _ipAction?: string; 
  public get ipAction() {
    return this.getStringAttribute('ip_action');
  }
  public set ipAction(value: string) {
    this._ipAction = value;
  }
  public resetIpAction() {
    this._ipAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipActionInput() {
    return this._ipAction;
  }

  // ip_action_log - computed: false, optional: true, required: false
  private _ipActionLog?: boolean | cdktf.IResolvable; 
  public get ipActionLog() {
    return this.getBooleanAttribute('ip_action_log');
  }
  public set ipActionLog(value: boolean | cdktf.IResolvable) {
    this._ipActionLog = value;
  }
  public resetIpActionLog() {
    this._ipActionLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipActionLogInput() {
    return this._ipActionLog;
  }

  // ip_action_log_create - computed: false, optional: true, required: false
  private _ipActionLogCreate?: boolean | cdktf.IResolvable; 
  public get ipActionLogCreate() {
    return this.getBooleanAttribute('ip_action_log_create');
  }
  public set ipActionLogCreate(value: boolean | cdktf.IResolvable) {
    this._ipActionLogCreate = value;
  }
  public resetIpActionLogCreate() {
    this._ipActionLogCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipActionLogCreateInput() {
    return this._ipActionLogCreate;
  }

  // ip_action_refresh_timeout - computed: false, optional: true, required: false
  private _ipActionRefreshTimeout?: boolean | cdktf.IResolvable; 
  public get ipActionRefreshTimeout() {
    return this.getBooleanAttribute('ip_action_refresh_timeout');
  }
  public set ipActionRefreshTimeout(value: boolean | cdktf.IResolvable) {
    this._ipActionRefreshTimeout = value;
  }
  public resetIpActionRefreshTimeout() {
    this._ipActionRefreshTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipActionRefreshTimeoutInput() {
    return this._ipActionRefreshTimeout;
  }

  // ip_action_target - computed: false, optional: true, required: false
  private _ipActionTarget?: string; 
  public get ipActionTarget() {
    return this.getStringAttribute('ip_action_target');
  }
  public set ipActionTarget(value: string) {
    this._ipActionTarget = value;
  }
  public resetIpActionTarget() {
    this._ipActionTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipActionTargetInput() {
    return this._ipActionTarget;
  }

  // ip_action_timeout - computed: false, optional: true, required: false
  private _ipActionTimeout?: number; 
  public get ipActionTimeout() {
    return this.getNumberAttribute('ip_action_timeout');
  }
  public set ipActionTimeout(value: number) {
    this._ipActionTimeout = value;
  }
  public resetIpActionTimeout() {
    this._ipActionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipActionTimeoutInput() {
    return this._ipActionTimeout;
  }

  // notification - computed: false, optional: true, required: false
  private _notification?: boolean | cdktf.IResolvable; 
  public get notification() {
    return this.getBooleanAttribute('notification');
  }
  public set notification(value: boolean | cdktf.IResolvable) {
    this._notification = value;
  }
  public resetNotification() {
    this._notification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification;
  }

  // notification_log_attacks - computed: false, optional: true, required: false
  private _notificationLogAttacks?: boolean | cdktf.IResolvable; 
  public get notificationLogAttacks() {
    return this.getBooleanAttribute('notification_log_attacks');
  }
  public set notificationLogAttacks(value: boolean | cdktf.IResolvable) {
    this._notificationLogAttacks = value;
  }
  public resetNotificationLogAttacks() {
    this._notificationLogAttacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLogAttacksInput() {
    return this._notificationLogAttacks;
  }

  // notification_log_attacks_alert - computed: false, optional: true, required: false
  private _notificationLogAttacksAlert?: boolean | cdktf.IResolvable; 
  public get notificationLogAttacksAlert() {
    return this.getBooleanAttribute('notification_log_attacks_alert');
  }
  public set notificationLogAttacksAlert(value: boolean | cdktf.IResolvable) {
    this._notificationLogAttacksAlert = value;
  }
  public resetNotificationLogAttacksAlert() {
    this._notificationLogAttacksAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLogAttacksAlertInput() {
    return this._notificationLogAttacksAlert;
  }

  // notification_packet_log - computed: false, optional: true, required: false
  private _notificationPacketLog?: boolean | cdktf.IResolvable; 
  public get notificationPacketLog() {
    return this.getBooleanAttribute('notification_packet_log');
  }
  public set notificationPacketLog(value: boolean | cdktf.IResolvable) {
    this._notificationPacketLog = value;
  }
  public resetNotificationPacketLog() {
    this._notificationPacketLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPacketLogInput() {
    return this._notificationPacketLog;
  }

  // notification_packet_log_post_attack - computed: false, optional: true, required: false
  private _notificationPacketLogPostAttack?: number; 
  public get notificationPacketLogPostAttack() {
    return this.getNumberAttribute('notification_packet_log_post_attack');
  }
  public set notificationPacketLogPostAttack(value: number) {
    this._notificationPacketLogPostAttack = value;
  }
  public resetNotificationPacketLogPostAttack() {
    this._notificationPacketLogPostAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPacketLogPostAttackInput() {
    return this._notificationPacketLogPostAttack;
  }

  // notification_packet_log_post_attack_timeout - computed: false, optional: true, required: false
  private _notificationPacketLogPostAttackTimeout?: number; 
  public get notificationPacketLogPostAttackTimeout() {
    return this.getNumberAttribute('notification_packet_log_post_attack_timeout');
  }
  public set notificationPacketLogPostAttackTimeout(value: number) {
    this._notificationPacketLogPostAttackTimeout = value;
  }
  public resetNotificationPacketLogPostAttackTimeout() {
    this._notificationPacketLogPostAttackTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPacketLogPostAttackTimeoutInput() {
    return this._notificationPacketLogPostAttackTimeout;
  }

  // notification_packet_log_pre_attack - computed: false, optional: true, required: false
  private _notificationPacketLogPreAttack?: number; 
  public get notificationPacketLogPreAttack() {
    return this.getNumberAttribute('notification_packet_log_pre_attack');
  }
  public set notificationPacketLogPreAttack(value: number) {
    this._notificationPacketLogPreAttack = value;
  }
  public resetNotificationPacketLogPreAttack() {
    this._notificationPacketLogPreAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPacketLogPreAttackInput() {
    return this._notificationPacketLogPreAttack;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}
export interface SecurityIdpPolicyIpsRule {
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#description SecurityIdpPolicy#description}
  */
  readonly description?: string;
  /**
  * Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#name SecurityIdpPolicy#name}
  */
  readonly name: string;
  /**
  * Set/Unset terminal flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#terminal SecurityIdpPolicy#terminal}
  */
  readonly terminal?: boolean | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#match SecurityIdpPolicy#match}
  */
  readonly match?: SecurityIdpPolicyIpsRuleMatch;
  /**
  * then block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#then SecurityIdpPolicy#then}
  */
  readonly then?: SecurityIdpPolicyIpsRuleThen;
}

export function securityIdpPolicyIpsRuleToTerraform(struct?: SecurityIdpPolicyIpsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    terminal: cdktf.booleanToTerraform(struct!.terminal),
    match: securityIdpPolicyIpsRuleMatchToTerraform(struct!.match),
    then: securityIdpPolicyIpsRuleThenToTerraform(struct!.then),
  }
}


export function securityIdpPolicyIpsRuleToHclTerraform(struct?: SecurityIdpPolicyIpsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    terminal: {
      value: cdktf.booleanToHclTerraform(struct!.terminal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: securityIdpPolicyIpsRuleMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpPolicyIpsRuleMatch",
    },
    then: {
      value: securityIdpPolicyIpsRuleThenToHclTerraform(struct!.then),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpPolicyIpsRuleThen",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpPolicyIpsRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityIdpPolicyIpsRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._then?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.then = this._then?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpPolicyIpsRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._terminal = undefined;
      this._match.internalValue = undefined;
      this._then.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._terminal = value.terminal;
      this._match.internalValue = value.match;
      this._then.internalValue = value.then;
    }
  }

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

  // terminal - computed: false, optional: true, required: false
  private _terminal?: boolean | cdktf.IResolvable; 
  public get terminal() {
    return this.getBooleanAttribute('terminal');
  }
  public set terminal(value: boolean | cdktf.IResolvable) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }

  // match - computed: false, optional: true, required: false
  private _match = new SecurityIdpPolicyIpsRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SecurityIdpPolicyIpsRuleMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // then - computed: false, optional: true, required: false
  private _then = new SecurityIdpPolicyIpsRuleThenOutputReference(this, "then");
  public get then() {
    return this._then;
  }
  public putThen(value: SecurityIdpPolicyIpsRuleThen) {
    this._then.internalValue = value;
  }
  public resetThen() {
    this._then.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then.internalValue;
  }
}

export class SecurityIdpPolicyIpsRuleList extends cdktf.ComplexList {
  public internalValue? : SecurityIdpPolicyIpsRule[] | cdktf.IResolvable

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
  public get(index: number): SecurityIdpPolicyIpsRuleOutputReference {
    return new SecurityIdpPolicyIpsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy junos_security_idp_policy}
*/
export class SecurityIdpPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_idp_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityIdpPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityIdpPolicy to import
  * @param importFromId The id of the existing SecurityIdpPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityIdpPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_idp_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_policy junos_security_idp_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityIdpPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityIdpPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_idp_policy',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._exemptRule.internalValue = config.exemptRule;
    this._ipsRule.internalValue = config.ipsRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // exempt_rule - computed: false, optional: true, required: false
  private _exemptRule = new SecurityIdpPolicyExemptRuleList(this, "exempt_rule", false);
  public get exemptRule() {
    return this._exemptRule;
  }
  public putExemptRule(value: SecurityIdpPolicyExemptRule[] | cdktf.IResolvable) {
    this._exemptRule.internalValue = value;
  }
  public resetExemptRule() {
    this._exemptRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptRuleInput() {
    return this._exemptRule.internalValue;
  }

  // ips_rule - computed: false, optional: true, required: false
  private _ipsRule = new SecurityIdpPolicyIpsRuleList(this, "ips_rule", false);
  public get ipsRule() {
    return this._ipsRule;
  }
  public putIpsRule(value: SecurityIdpPolicyIpsRule[] | cdktf.IResolvable) {
    this._ipsRule.internalValue = value;
  }
  public resetIpsRule() {
    this._ipsRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsRuleInput() {
    return this._ipsRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      exempt_rule: cdktf.listMapper(securityIdpPolicyExemptRuleToTerraform, true)(this._exemptRule.internalValue),
      ips_rule: cdktf.listMapper(securityIdpPolicyIpsRuleToTerraform, true)(this._ipsRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exempt_rule: {
        value: cdktf.listMapperHcl(securityIdpPolicyExemptRuleToHclTerraform, true)(this._exemptRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityIdpPolicyExemptRuleList",
      },
      ips_rule: {
        value: cdktf.listMapperHcl(securityIdpPolicyIpsRuleToHclTerraform, true)(this._ipsRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityIdpPolicyIpsRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
