// https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamFirewallTrafficRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#published TeamFirewallTrafficRules#published}
  */
  readonly published: TeamFirewallTrafficRulesPublished;
  /**
  * Required if a default team was not configured in the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#team_id TeamFirewallTrafficRules#team_id}
  */
  readonly teamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#unpublished TeamFirewallTrafficRules#unpublished}
  */
  readonly unpublished: TeamFirewallTrafficRulesUnpublished;
}
export interface TeamFirewallTrafficRulesPublishedGeoExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#countries TeamFirewallTrafficRules#countries}
  */
  readonly countries: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#description TeamFirewallTrafficRules#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#subregions TeamFirewallTrafficRules#subregions}
  */
  readonly subregions?: string[];
}

export function teamFirewallTrafficRulesPublishedGeoExceptionsToTerraform(struct?: TeamFirewallTrafficRulesPublishedGeoExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    description: cdktf.stringToTerraform(struct!.description),
    subregions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subregions),
  }
}


export function teamFirewallTrafficRulesPublishedGeoExceptionsToHclTerraform(struct?: TeamFirewallTrafficRulesPublishedGeoExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subregions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subregions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamFirewallTrafficRulesPublishedGeoExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamFirewallTrafficRulesPublishedGeoExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._subregions !== undefined) {
      hasAnyValues = true;
      internalValueResult.subregions = this._subregions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamFirewallTrafficRulesPublishedGeoExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countries = undefined;
      this._description = undefined;
      this._subregions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countries = value.countries;
      this._description = value.description;
      this._subregions = value.subregions;
    }
  }

  // countries - computed: false, optional: false, required: true
  private _countries?: string[]; 
  public get countries() {
    return this.getListAttribute('countries');
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // subregions - computed: false, optional: true, required: false
  private _subregions?: string[]; 
  public get subregions() {
    return this.getListAttribute('subregions');
  }
  public set subregions(value: string[]) {
    this._subregions = value;
  }
  public resetSubregions() {
    this._subregions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subregionsInput() {
    return this._subregions;
  }
}

export class TeamFirewallTrafficRulesPublishedGeoExceptionsList extends cdktf.ComplexList {
  public internalValue? : TeamFirewallTrafficRulesPublishedGeoExceptions[] | cdktf.IResolvable

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
  public get(index: number): TeamFirewallTrafficRulesPublishedGeoExceptionsOutputReference {
    return new TeamFirewallTrafficRulesPublishedGeoExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeamFirewallTrafficRulesPublishedGeoRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#countries TeamFirewallTrafficRules#countries}
  */
  readonly countries: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#description TeamFirewallTrafficRules#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#subregions TeamFirewallTrafficRules#subregions}
  */
  readonly subregions?: string[];
}

export function teamFirewallTrafficRulesPublishedGeoRestrictionsToTerraform(struct?: TeamFirewallTrafficRulesPublishedGeoRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    description: cdktf.stringToTerraform(struct!.description),
    subregions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subregions),
  }
}


export function teamFirewallTrafficRulesPublishedGeoRestrictionsToHclTerraform(struct?: TeamFirewallTrafficRulesPublishedGeoRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subregions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subregions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamFirewallTrafficRulesPublishedGeoRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamFirewallTrafficRulesPublishedGeoRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._subregions !== undefined) {
      hasAnyValues = true;
      internalValueResult.subregions = this._subregions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamFirewallTrafficRulesPublishedGeoRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countries = undefined;
      this._description = undefined;
      this._subregions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countries = value.countries;
      this._description = value.description;
      this._subregions = value.subregions;
    }
  }

  // countries - computed: false, optional: false, required: true
  private _countries?: string[]; 
  public get countries() {
    return this.getListAttribute('countries');
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // subregions - computed: false, optional: true, required: false
  private _subregions?: string[]; 
  public get subregions() {
    return this.getListAttribute('subregions');
  }
  public set subregions(value: string[]) {
    this._subregions = value;
  }
  public resetSubregions() {
    this._subregions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subregionsInput() {
    return this._subregions;
  }
}

export class TeamFirewallTrafficRulesPublishedGeoRestrictionsList extends cdktf.ComplexList {
  public internalValue? : TeamFirewallTrafficRulesPublishedGeoRestrictions[] | cdktf.IResolvable

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
  public get(index: number): TeamFirewallTrafficRulesPublishedGeoRestrictionsOutputReference {
    return new TeamFirewallTrafficRulesPublishedGeoRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeamFirewallTrafficRulesPublishedIpExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#addresses TeamFirewallTrafficRules#addresses}
  */
  readonly addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#description TeamFirewallTrafficRules#description}
  */
  readonly description: string;
}

export function teamFirewallTrafficRulesPublishedIpExceptionsToTerraform(struct?: TeamFirewallTrafficRulesPublishedIpExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function teamFirewallTrafficRulesPublishedIpExceptionsToHclTerraform(struct?: TeamFirewallTrafficRulesPublishedIpExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamFirewallTrafficRulesPublishedIpExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamFirewallTrafficRulesPublishedIpExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamFirewallTrafficRulesPublishedIpExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._description = value.description;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}

export class TeamFirewallTrafficRulesPublishedIpExceptionsList extends cdktf.ComplexList {
  public internalValue? : TeamFirewallTrafficRulesPublishedIpExceptions[] | cdktf.IResolvable

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
  public get(index: number): TeamFirewallTrafficRulesPublishedIpExceptionsOutputReference {
    return new TeamFirewallTrafficRulesPublishedIpExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeamFirewallTrafficRulesPublishedIpRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#addresses TeamFirewallTrafficRules#addresses}
  */
  readonly addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#description TeamFirewallTrafficRules#description}
  */
  readonly description: string;
}

export function teamFirewallTrafficRulesPublishedIpRestrictionsToTerraform(struct?: TeamFirewallTrafficRulesPublishedIpRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function teamFirewallTrafficRulesPublishedIpRestrictionsToHclTerraform(struct?: TeamFirewallTrafficRulesPublishedIpRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamFirewallTrafficRulesPublishedIpRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamFirewallTrafficRulesPublishedIpRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamFirewallTrafficRulesPublishedIpRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._description = value.description;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}

export class TeamFirewallTrafficRulesPublishedIpRestrictionsList extends cdktf.ComplexList {
  public internalValue? : TeamFirewallTrafficRulesPublishedIpRestrictions[] | cdktf.IResolvable

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
  public get(index: number): TeamFirewallTrafficRulesPublishedIpRestrictionsOutputReference {
    return new TeamFirewallTrafficRulesPublishedIpRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeamFirewallTrafficRulesPublished {
  /**
  * One of allow or deny
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#default_action TeamFirewallTrafficRules#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#geo_exceptions TeamFirewallTrafficRules#geo_exceptions}
  */
  readonly geoExceptions?: TeamFirewallTrafficRulesPublishedGeoExceptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#geo_restrictions TeamFirewallTrafficRules#geo_restrictions}
  */
  readonly geoRestrictions?: TeamFirewallTrafficRulesPublishedGeoRestrictions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#ip_exceptions TeamFirewallTrafficRules#ip_exceptions}
  */
  readonly ipExceptions?: TeamFirewallTrafficRulesPublishedIpExceptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#ip_restrictions TeamFirewallTrafficRules#ip_restrictions}
  */
  readonly ipRestrictions?: TeamFirewallTrafficRulesPublishedIpRestrictions[] | cdktf.IResolvable;
}

export function teamFirewallTrafficRulesPublishedToTerraform(struct?: TeamFirewallTrafficRulesPublished | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    geo_exceptions: cdktf.listMapper(teamFirewallTrafficRulesPublishedGeoExceptionsToTerraform, false)(struct!.geoExceptions),
    geo_restrictions: cdktf.listMapper(teamFirewallTrafficRulesPublishedGeoRestrictionsToTerraform, false)(struct!.geoRestrictions),
    ip_exceptions: cdktf.listMapper(teamFirewallTrafficRulesPublishedIpExceptionsToTerraform, false)(struct!.ipExceptions),
    ip_restrictions: cdktf.listMapper(teamFirewallTrafficRulesPublishedIpRestrictionsToTerraform, false)(struct!.ipRestrictions),
  }
}


export function teamFirewallTrafficRulesPublishedToHclTerraform(struct?: TeamFirewallTrafficRulesPublished | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_exceptions: {
      value: cdktf.listMapperHcl(teamFirewallTrafficRulesPublishedGeoExceptionsToHclTerraform, false)(struct!.geoExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "TeamFirewallTrafficRulesPublishedGeoExceptionsList",
    },
    geo_restrictions: {
      value: cdktf.listMapperHcl(teamFirewallTrafficRulesPublishedGeoRestrictionsToHclTerraform, false)(struct!.geoRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "TeamFirewallTrafficRulesPublishedGeoRestrictionsList",
    },
    ip_exceptions: {
      value: cdktf.listMapperHcl(teamFirewallTrafficRulesPublishedIpExceptionsToHclTerraform, false)(struct!.ipExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "TeamFirewallTrafficRulesPublishedIpExceptionsList",
    },
    ip_restrictions: {
      value: cdktf.listMapperHcl(teamFirewallTrafficRulesPublishedIpRestrictionsToHclTerraform, false)(struct!.ipRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "TeamFirewallTrafficRulesPublishedIpRestrictionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamFirewallTrafficRulesPublishedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TeamFirewallTrafficRulesPublished | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._geoExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoExceptions = this._geoExceptions?.internalValue;
    }
    if (this._geoRestrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoRestrictions = this._geoRestrictions?.internalValue;
    }
    if (this._ipExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipExceptions = this._ipExceptions?.internalValue;
    }
    if (this._ipRestrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRestrictions = this._ipRestrictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamFirewallTrafficRulesPublished | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultAction = undefined;
      this._geoExceptions.internalValue = undefined;
      this._geoRestrictions.internalValue = undefined;
      this._ipExceptions.internalValue = undefined;
      this._ipRestrictions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultAction = value.defaultAction;
      this._geoExceptions.internalValue = value.geoExceptions;
      this._geoRestrictions.internalValue = value.geoRestrictions;
      this._ipExceptions.internalValue = value.ipExceptions;
      this._ipRestrictions.internalValue = value.ipRestrictions;
    }
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // geo_exceptions - computed: false, optional: true, required: false
  private _geoExceptions = new TeamFirewallTrafficRulesPublishedGeoExceptionsList(this, "geo_exceptions", false);
  public get geoExceptions() {
    return this._geoExceptions;
  }
  public putGeoExceptions(value: TeamFirewallTrafficRulesPublishedGeoExceptions[] | cdktf.IResolvable) {
    this._geoExceptions.internalValue = value;
  }
  public resetGeoExceptions() {
    this._geoExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoExceptionsInput() {
    return this._geoExceptions.internalValue;
  }

  // geo_restrictions - computed: false, optional: true, required: false
  private _geoRestrictions = new TeamFirewallTrafficRulesPublishedGeoRestrictionsList(this, "geo_restrictions", false);
  public get geoRestrictions() {
    return this._geoRestrictions;
  }
  public putGeoRestrictions(value: TeamFirewallTrafficRulesPublishedGeoRestrictions[] | cdktf.IResolvable) {
    this._geoRestrictions.internalValue = value;
  }
  public resetGeoRestrictions() {
    this._geoRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRestrictionsInput() {
    return this._geoRestrictions.internalValue;
  }

  // ip_exceptions - computed: false, optional: true, required: false
  private _ipExceptions = new TeamFirewallTrafficRulesPublishedIpExceptionsList(this, "ip_exceptions", false);
  public get ipExceptions() {
    return this._ipExceptions;
  }
  public putIpExceptions(value: TeamFirewallTrafficRulesPublishedIpExceptions[] | cdktf.IResolvable) {
    this._ipExceptions.internalValue = value;
  }
  public resetIpExceptions() {
    this._ipExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExceptionsInput() {
    return this._ipExceptions.internalValue;
  }

  // ip_restrictions - computed: false, optional: true, required: false
  private _ipRestrictions = new TeamFirewallTrafficRulesPublishedIpRestrictionsList(this, "ip_restrictions", false);
  public get ipRestrictions() {
    return this._ipRestrictions;
  }
  public putIpRestrictions(value: TeamFirewallTrafficRulesPublishedIpRestrictions[] | cdktf.IResolvable) {
    this._ipRestrictions.internalValue = value;
  }
  public resetIpRestrictions() {
    this._ipRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionsInput() {
    return this._ipRestrictions.internalValue;
  }
}
export interface TeamFirewallTrafficRulesUnpublishedGeoExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#countries TeamFirewallTrafficRules#countries}
  */
  readonly countries: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#description TeamFirewallTrafficRules#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#subregions TeamFirewallTrafficRules#subregions}
  */
  readonly subregions?: string[];
}

export function teamFirewallTrafficRulesUnpublishedGeoExceptionsToTerraform(struct?: TeamFirewallTrafficRulesUnpublishedGeoExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    description: cdktf.stringToTerraform(struct!.description),
    subregions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subregions),
  }
}


export function teamFirewallTrafficRulesUnpublishedGeoExceptionsToHclTerraform(struct?: TeamFirewallTrafficRulesUnpublishedGeoExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subregions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subregions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamFirewallTrafficRulesUnpublishedGeoExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamFirewallTrafficRulesUnpublishedGeoExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._subregions !== undefined) {
      hasAnyValues = true;
      internalValueResult.subregions = this._subregions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamFirewallTrafficRulesUnpublishedGeoExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countries = undefined;
      this._description = undefined;
      this._subregions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countries = value.countries;
      this._description = value.description;
      this._subregions = value.subregions;
    }
  }

  // countries - computed: false, optional: false, required: true
  private _countries?: string[]; 
  public get countries() {
    return this.getListAttribute('countries');
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // subregions - computed: false, optional: true, required: false
  private _subregions?: string[]; 
  public get subregions() {
    return this.getListAttribute('subregions');
  }
  public set subregions(value: string[]) {
    this._subregions = value;
  }
  public resetSubregions() {
    this._subregions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subregionsInput() {
    return this._subregions;
  }
}

export class TeamFirewallTrafficRulesUnpublishedGeoExceptionsList extends cdktf.ComplexList {
  public internalValue? : TeamFirewallTrafficRulesUnpublishedGeoExceptions[] | cdktf.IResolvable

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
  public get(index: number): TeamFirewallTrafficRulesUnpublishedGeoExceptionsOutputReference {
    return new TeamFirewallTrafficRulesUnpublishedGeoExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeamFirewallTrafficRulesUnpublishedGeoRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#countries TeamFirewallTrafficRules#countries}
  */
  readonly countries: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#description TeamFirewallTrafficRules#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#subregions TeamFirewallTrafficRules#subregions}
  */
  readonly subregions?: string[];
}

export function teamFirewallTrafficRulesUnpublishedGeoRestrictionsToTerraform(struct?: TeamFirewallTrafficRulesUnpublishedGeoRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    description: cdktf.stringToTerraform(struct!.description),
    subregions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subregions),
  }
}


export function teamFirewallTrafficRulesUnpublishedGeoRestrictionsToHclTerraform(struct?: TeamFirewallTrafficRulesUnpublishedGeoRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subregions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subregions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamFirewallTrafficRulesUnpublishedGeoRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamFirewallTrafficRulesUnpublishedGeoRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._subregions !== undefined) {
      hasAnyValues = true;
      internalValueResult.subregions = this._subregions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamFirewallTrafficRulesUnpublishedGeoRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countries = undefined;
      this._description = undefined;
      this._subregions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countries = value.countries;
      this._description = value.description;
      this._subregions = value.subregions;
    }
  }

  // countries - computed: false, optional: false, required: true
  private _countries?: string[]; 
  public get countries() {
    return this.getListAttribute('countries');
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // subregions - computed: false, optional: true, required: false
  private _subregions?: string[]; 
  public get subregions() {
    return this.getListAttribute('subregions');
  }
  public set subregions(value: string[]) {
    this._subregions = value;
  }
  public resetSubregions() {
    this._subregions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subregionsInput() {
    return this._subregions;
  }
}

export class TeamFirewallTrafficRulesUnpublishedGeoRestrictionsList extends cdktf.ComplexList {
  public internalValue? : TeamFirewallTrafficRulesUnpublishedGeoRestrictions[] | cdktf.IResolvable

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
  public get(index: number): TeamFirewallTrafficRulesUnpublishedGeoRestrictionsOutputReference {
    return new TeamFirewallTrafficRulesUnpublishedGeoRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeamFirewallTrafficRulesUnpublishedIpExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#addresses TeamFirewallTrafficRules#addresses}
  */
  readonly addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#description TeamFirewallTrafficRules#description}
  */
  readonly description: string;
}

export function teamFirewallTrafficRulesUnpublishedIpExceptionsToTerraform(struct?: TeamFirewallTrafficRulesUnpublishedIpExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function teamFirewallTrafficRulesUnpublishedIpExceptionsToHclTerraform(struct?: TeamFirewallTrafficRulesUnpublishedIpExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamFirewallTrafficRulesUnpublishedIpExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamFirewallTrafficRulesUnpublishedIpExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamFirewallTrafficRulesUnpublishedIpExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._description = value.description;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}

export class TeamFirewallTrafficRulesUnpublishedIpExceptionsList extends cdktf.ComplexList {
  public internalValue? : TeamFirewallTrafficRulesUnpublishedIpExceptions[] | cdktf.IResolvable

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
  public get(index: number): TeamFirewallTrafficRulesUnpublishedIpExceptionsOutputReference {
    return new TeamFirewallTrafficRulesUnpublishedIpExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeamFirewallTrafficRulesUnpublishedIpRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#addresses TeamFirewallTrafficRules#addresses}
  */
  readonly addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#description TeamFirewallTrafficRules#description}
  */
  readonly description: string;
}

export function teamFirewallTrafficRulesUnpublishedIpRestrictionsToTerraform(struct?: TeamFirewallTrafficRulesUnpublishedIpRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function teamFirewallTrafficRulesUnpublishedIpRestrictionsToHclTerraform(struct?: TeamFirewallTrafficRulesUnpublishedIpRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamFirewallTrafficRulesUnpublishedIpRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamFirewallTrafficRulesUnpublishedIpRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamFirewallTrafficRulesUnpublishedIpRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._description = value.description;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}

export class TeamFirewallTrafficRulesUnpublishedIpRestrictionsList extends cdktf.ComplexList {
  public internalValue? : TeamFirewallTrafficRulesUnpublishedIpRestrictions[] | cdktf.IResolvable

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
  public get(index: number): TeamFirewallTrafficRulesUnpublishedIpRestrictionsOutputReference {
    return new TeamFirewallTrafficRulesUnpublishedIpRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeamFirewallTrafficRulesUnpublished {
  /**
  * One of allow or deny
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#default_action TeamFirewallTrafficRules#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#geo_exceptions TeamFirewallTrafficRules#geo_exceptions}
  */
  readonly geoExceptions?: TeamFirewallTrafficRulesUnpublishedGeoExceptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#geo_restrictions TeamFirewallTrafficRules#geo_restrictions}
  */
  readonly geoRestrictions?: TeamFirewallTrafficRulesUnpublishedGeoRestrictions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#ip_exceptions TeamFirewallTrafficRules#ip_exceptions}
  */
  readonly ipExceptions?: TeamFirewallTrafficRulesUnpublishedIpExceptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#ip_restrictions TeamFirewallTrafficRules#ip_restrictions}
  */
  readonly ipRestrictions?: TeamFirewallTrafficRulesUnpublishedIpRestrictions[] | cdktf.IResolvable;
}

export function teamFirewallTrafficRulesUnpublishedToTerraform(struct?: TeamFirewallTrafficRulesUnpublished | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    geo_exceptions: cdktf.listMapper(teamFirewallTrafficRulesUnpublishedGeoExceptionsToTerraform, false)(struct!.geoExceptions),
    geo_restrictions: cdktf.listMapper(teamFirewallTrafficRulesUnpublishedGeoRestrictionsToTerraform, false)(struct!.geoRestrictions),
    ip_exceptions: cdktf.listMapper(teamFirewallTrafficRulesUnpublishedIpExceptionsToTerraform, false)(struct!.ipExceptions),
    ip_restrictions: cdktf.listMapper(teamFirewallTrafficRulesUnpublishedIpRestrictionsToTerraform, false)(struct!.ipRestrictions),
  }
}


export function teamFirewallTrafficRulesUnpublishedToHclTerraform(struct?: TeamFirewallTrafficRulesUnpublished | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_exceptions: {
      value: cdktf.listMapperHcl(teamFirewallTrafficRulesUnpublishedGeoExceptionsToHclTerraform, false)(struct!.geoExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "TeamFirewallTrafficRulesUnpublishedGeoExceptionsList",
    },
    geo_restrictions: {
      value: cdktf.listMapperHcl(teamFirewallTrafficRulesUnpublishedGeoRestrictionsToHclTerraform, false)(struct!.geoRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "TeamFirewallTrafficRulesUnpublishedGeoRestrictionsList",
    },
    ip_exceptions: {
      value: cdktf.listMapperHcl(teamFirewallTrafficRulesUnpublishedIpExceptionsToHclTerraform, false)(struct!.ipExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "TeamFirewallTrafficRulesUnpublishedIpExceptionsList",
    },
    ip_restrictions: {
      value: cdktf.listMapperHcl(teamFirewallTrafficRulesUnpublishedIpRestrictionsToHclTerraform, false)(struct!.ipRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "TeamFirewallTrafficRulesUnpublishedIpRestrictionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamFirewallTrafficRulesUnpublishedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TeamFirewallTrafficRulesUnpublished | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._geoExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoExceptions = this._geoExceptions?.internalValue;
    }
    if (this._geoRestrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoRestrictions = this._geoRestrictions?.internalValue;
    }
    if (this._ipExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipExceptions = this._ipExceptions?.internalValue;
    }
    if (this._ipRestrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRestrictions = this._ipRestrictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamFirewallTrafficRulesUnpublished | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultAction = undefined;
      this._geoExceptions.internalValue = undefined;
      this._geoRestrictions.internalValue = undefined;
      this._ipExceptions.internalValue = undefined;
      this._ipRestrictions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultAction = value.defaultAction;
      this._geoExceptions.internalValue = value.geoExceptions;
      this._geoRestrictions.internalValue = value.geoRestrictions;
      this._ipExceptions.internalValue = value.ipExceptions;
      this._ipRestrictions.internalValue = value.ipRestrictions;
    }
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // geo_exceptions - computed: false, optional: true, required: false
  private _geoExceptions = new TeamFirewallTrafficRulesUnpublishedGeoExceptionsList(this, "geo_exceptions", false);
  public get geoExceptions() {
    return this._geoExceptions;
  }
  public putGeoExceptions(value: TeamFirewallTrafficRulesUnpublishedGeoExceptions[] | cdktf.IResolvable) {
    this._geoExceptions.internalValue = value;
  }
  public resetGeoExceptions() {
    this._geoExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoExceptionsInput() {
    return this._geoExceptions.internalValue;
  }

  // geo_restrictions - computed: false, optional: true, required: false
  private _geoRestrictions = new TeamFirewallTrafficRulesUnpublishedGeoRestrictionsList(this, "geo_restrictions", false);
  public get geoRestrictions() {
    return this._geoRestrictions;
  }
  public putGeoRestrictions(value: TeamFirewallTrafficRulesUnpublishedGeoRestrictions[] | cdktf.IResolvable) {
    this._geoRestrictions.internalValue = value;
  }
  public resetGeoRestrictions() {
    this._geoRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRestrictionsInput() {
    return this._geoRestrictions.internalValue;
  }

  // ip_exceptions - computed: false, optional: true, required: false
  private _ipExceptions = new TeamFirewallTrafficRulesUnpublishedIpExceptionsList(this, "ip_exceptions", false);
  public get ipExceptions() {
    return this._ipExceptions;
  }
  public putIpExceptions(value: TeamFirewallTrafficRulesUnpublishedIpExceptions[] | cdktf.IResolvable) {
    this._ipExceptions.internalValue = value;
  }
  public resetIpExceptions() {
    this._ipExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExceptionsInput() {
    return this._ipExceptions.internalValue;
  }

  // ip_restrictions - computed: false, optional: true, required: false
  private _ipRestrictions = new TeamFirewallTrafficRulesUnpublishedIpRestrictionsList(this, "ip_restrictions", false);
  public get ipRestrictions() {
    return this._ipRestrictions;
  }
  public putIpRestrictions(value: TeamFirewallTrafficRulesUnpublishedIpRestrictions[] | cdktf.IResolvable) {
    this._ipRestrictions.internalValue = value;
  }
  public resetIpRestrictions() {
    this._ipRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionsInput() {
    return this._ipRestrictions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules netlify_team_firewall_traffic_rules}
*/
export class TeamFirewallTrafficRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netlify_team_firewall_traffic_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamFirewallTrafficRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamFirewallTrafficRules to import
  * @param importFromId The id of the existing TeamFirewallTrafficRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamFirewallTrafficRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netlify_team_firewall_traffic_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/team_firewall_traffic_rules netlify_team_firewall_traffic_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamFirewallTrafficRulesConfig
  */
  public constructor(scope: Construct, id: string, config: TeamFirewallTrafficRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'netlify_team_firewall_traffic_rules',
      terraformGeneratorMetadata: {
        providerName: 'netlify',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._published.internalValue = config.published;
    this._teamId = config.teamId;
    this._unpublished.internalValue = config.unpublished;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // published - computed: false, optional: false, required: true
  private _published = new TeamFirewallTrafficRulesPublishedOutputReference(this, "published");
  public get published() {
    return this._published;
  }
  public putPublished(value: TeamFirewallTrafficRulesPublished) {
    this._published.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published.internalValue;
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // unpublished - computed: false, optional: false, required: true
  private _unpublished = new TeamFirewallTrafficRulesUnpublishedOutputReference(this, "unpublished");
  public get unpublished() {
    return this._unpublished;
  }
  public putUnpublished(value: TeamFirewallTrafficRulesUnpublished) {
    this._unpublished.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unpublishedInput() {
    return this._unpublished.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      published: teamFirewallTrafficRulesPublishedToTerraform(this._published.internalValue),
      team_id: cdktf.stringToTerraform(this._teamId),
      unpublished: teamFirewallTrafficRulesUnpublishedToTerraform(this._unpublished.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      published: {
        value: teamFirewallTrafficRulesPublishedToHclTerraform(this._published.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TeamFirewallTrafficRulesPublished",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unpublished: {
        value: teamFirewallTrafficRulesUnpublishedToHclTerraform(this._unpublished.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TeamFirewallTrafficRulesUnpublished",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
