// https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteFirewallTrafficRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#published SiteFirewallTrafficRules#published}
  */
  readonly published: SiteFirewallTrafficRulesPublished;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#site_id SiteFirewallTrafficRules#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#unpublished SiteFirewallTrafficRules#unpublished}
  */
  readonly unpublished: SiteFirewallTrafficRulesUnpublished;
}
export interface SiteFirewallTrafficRulesPublishedGeoExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#countries SiteFirewallTrafficRules#countries}
  */
  readonly countries: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#description SiteFirewallTrafficRules#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#subregions SiteFirewallTrafficRules#subregions}
  */
  readonly subregions?: string[];
}

export function siteFirewallTrafficRulesPublishedGeoExceptionsToTerraform(struct?: SiteFirewallTrafficRulesPublishedGeoExceptions | cdktf.IResolvable): any {
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


export function siteFirewallTrafficRulesPublishedGeoExceptionsToHclTerraform(struct?: SiteFirewallTrafficRulesPublishedGeoExceptions | cdktf.IResolvable): any {
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

export class SiteFirewallTrafficRulesPublishedGeoExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteFirewallTrafficRulesPublishedGeoExceptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteFirewallTrafficRulesPublishedGeoExceptions | cdktf.IResolvable | undefined) {
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

export class SiteFirewallTrafficRulesPublishedGeoExceptionsList extends cdktf.ComplexList {
  public internalValue? : SiteFirewallTrafficRulesPublishedGeoExceptions[] | cdktf.IResolvable

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
  public get(index: number): SiteFirewallTrafficRulesPublishedGeoExceptionsOutputReference {
    return new SiteFirewallTrafficRulesPublishedGeoExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteFirewallTrafficRulesPublishedGeoRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#countries SiteFirewallTrafficRules#countries}
  */
  readonly countries: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#description SiteFirewallTrafficRules#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#subregions SiteFirewallTrafficRules#subregions}
  */
  readonly subregions?: string[];
}

export function siteFirewallTrafficRulesPublishedGeoRestrictionsToTerraform(struct?: SiteFirewallTrafficRulesPublishedGeoRestrictions | cdktf.IResolvable): any {
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


export function siteFirewallTrafficRulesPublishedGeoRestrictionsToHclTerraform(struct?: SiteFirewallTrafficRulesPublishedGeoRestrictions | cdktf.IResolvable): any {
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

export class SiteFirewallTrafficRulesPublishedGeoRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteFirewallTrafficRulesPublishedGeoRestrictions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteFirewallTrafficRulesPublishedGeoRestrictions | cdktf.IResolvable | undefined) {
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

export class SiteFirewallTrafficRulesPublishedGeoRestrictionsList extends cdktf.ComplexList {
  public internalValue? : SiteFirewallTrafficRulesPublishedGeoRestrictions[] | cdktf.IResolvable

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
  public get(index: number): SiteFirewallTrafficRulesPublishedGeoRestrictionsOutputReference {
    return new SiteFirewallTrafficRulesPublishedGeoRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteFirewallTrafficRulesPublishedIpExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#addresses SiteFirewallTrafficRules#addresses}
  */
  readonly addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#description SiteFirewallTrafficRules#description}
  */
  readonly description: string;
}

export function siteFirewallTrafficRulesPublishedIpExceptionsToTerraform(struct?: SiteFirewallTrafficRulesPublishedIpExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function siteFirewallTrafficRulesPublishedIpExceptionsToHclTerraform(struct?: SiteFirewallTrafficRulesPublishedIpExceptions | cdktf.IResolvable): any {
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

export class SiteFirewallTrafficRulesPublishedIpExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteFirewallTrafficRulesPublishedIpExceptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteFirewallTrafficRulesPublishedIpExceptions | cdktf.IResolvable | undefined) {
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

export class SiteFirewallTrafficRulesPublishedIpExceptionsList extends cdktf.ComplexList {
  public internalValue? : SiteFirewallTrafficRulesPublishedIpExceptions[] | cdktf.IResolvable

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
  public get(index: number): SiteFirewallTrafficRulesPublishedIpExceptionsOutputReference {
    return new SiteFirewallTrafficRulesPublishedIpExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteFirewallTrafficRulesPublishedIpRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#addresses SiteFirewallTrafficRules#addresses}
  */
  readonly addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#description SiteFirewallTrafficRules#description}
  */
  readonly description: string;
}

export function siteFirewallTrafficRulesPublishedIpRestrictionsToTerraform(struct?: SiteFirewallTrafficRulesPublishedIpRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function siteFirewallTrafficRulesPublishedIpRestrictionsToHclTerraform(struct?: SiteFirewallTrafficRulesPublishedIpRestrictions | cdktf.IResolvable): any {
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

export class SiteFirewallTrafficRulesPublishedIpRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteFirewallTrafficRulesPublishedIpRestrictions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteFirewallTrafficRulesPublishedIpRestrictions | cdktf.IResolvable | undefined) {
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

export class SiteFirewallTrafficRulesPublishedIpRestrictionsList extends cdktf.ComplexList {
  public internalValue? : SiteFirewallTrafficRulesPublishedIpRestrictions[] | cdktf.IResolvable

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
  public get(index: number): SiteFirewallTrafficRulesPublishedIpRestrictionsOutputReference {
    return new SiteFirewallTrafficRulesPublishedIpRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteFirewallTrafficRulesPublished {
  /**
  * One of allow or deny
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#default_action SiteFirewallTrafficRules#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#geo_exceptions SiteFirewallTrafficRules#geo_exceptions}
  */
  readonly geoExceptions?: SiteFirewallTrafficRulesPublishedGeoExceptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#geo_restrictions SiteFirewallTrafficRules#geo_restrictions}
  */
  readonly geoRestrictions?: SiteFirewallTrafficRulesPublishedGeoRestrictions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#ip_exceptions SiteFirewallTrafficRules#ip_exceptions}
  */
  readonly ipExceptions?: SiteFirewallTrafficRulesPublishedIpExceptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#ip_restrictions SiteFirewallTrafficRules#ip_restrictions}
  */
  readonly ipRestrictions?: SiteFirewallTrafficRulesPublishedIpRestrictions[] | cdktf.IResolvable;
}

export function siteFirewallTrafficRulesPublishedToTerraform(struct?: SiteFirewallTrafficRulesPublished | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    geo_exceptions: cdktf.listMapper(siteFirewallTrafficRulesPublishedGeoExceptionsToTerraform, false)(struct!.geoExceptions),
    geo_restrictions: cdktf.listMapper(siteFirewallTrafficRulesPublishedGeoRestrictionsToTerraform, false)(struct!.geoRestrictions),
    ip_exceptions: cdktf.listMapper(siteFirewallTrafficRulesPublishedIpExceptionsToTerraform, false)(struct!.ipExceptions),
    ip_restrictions: cdktf.listMapper(siteFirewallTrafficRulesPublishedIpRestrictionsToTerraform, false)(struct!.ipRestrictions),
  }
}


export function siteFirewallTrafficRulesPublishedToHclTerraform(struct?: SiteFirewallTrafficRulesPublished | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(siteFirewallTrafficRulesPublishedGeoExceptionsToHclTerraform, false)(struct!.geoExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "SiteFirewallTrafficRulesPublishedGeoExceptionsList",
    },
    geo_restrictions: {
      value: cdktf.listMapperHcl(siteFirewallTrafficRulesPublishedGeoRestrictionsToHclTerraform, false)(struct!.geoRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "SiteFirewallTrafficRulesPublishedGeoRestrictionsList",
    },
    ip_exceptions: {
      value: cdktf.listMapperHcl(siteFirewallTrafficRulesPublishedIpExceptionsToHclTerraform, false)(struct!.ipExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "SiteFirewallTrafficRulesPublishedIpExceptionsList",
    },
    ip_restrictions: {
      value: cdktf.listMapperHcl(siteFirewallTrafficRulesPublishedIpRestrictionsToHclTerraform, false)(struct!.ipRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "SiteFirewallTrafficRulesPublishedIpRestrictionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteFirewallTrafficRulesPublishedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteFirewallTrafficRulesPublished | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteFirewallTrafficRulesPublished | cdktf.IResolvable | undefined) {
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
  private _geoExceptions = new SiteFirewallTrafficRulesPublishedGeoExceptionsList(this, "geo_exceptions", false);
  public get geoExceptions() {
    return this._geoExceptions;
  }
  public putGeoExceptions(value: SiteFirewallTrafficRulesPublishedGeoExceptions[] | cdktf.IResolvable) {
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
  private _geoRestrictions = new SiteFirewallTrafficRulesPublishedGeoRestrictionsList(this, "geo_restrictions", false);
  public get geoRestrictions() {
    return this._geoRestrictions;
  }
  public putGeoRestrictions(value: SiteFirewallTrafficRulesPublishedGeoRestrictions[] | cdktf.IResolvable) {
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
  private _ipExceptions = new SiteFirewallTrafficRulesPublishedIpExceptionsList(this, "ip_exceptions", false);
  public get ipExceptions() {
    return this._ipExceptions;
  }
  public putIpExceptions(value: SiteFirewallTrafficRulesPublishedIpExceptions[] | cdktf.IResolvable) {
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
  private _ipRestrictions = new SiteFirewallTrafficRulesPublishedIpRestrictionsList(this, "ip_restrictions", false);
  public get ipRestrictions() {
    return this._ipRestrictions;
  }
  public putIpRestrictions(value: SiteFirewallTrafficRulesPublishedIpRestrictions[] | cdktf.IResolvable) {
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
export interface SiteFirewallTrafficRulesUnpublishedGeoExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#countries SiteFirewallTrafficRules#countries}
  */
  readonly countries: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#description SiteFirewallTrafficRules#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#subregions SiteFirewallTrafficRules#subregions}
  */
  readonly subregions?: string[];
}

export function siteFirewallTrafficRulesUnpublishedGeoExceptionsToTerraform(struct?: SiteFirewallTrafficRulesUnpublishedGeoExceptions | cdktf.IResolvable): any {
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


export function siteFirewallTrafficRulesUnpublishedGeoExceptionsToHclTerraform(struct?: SiteFirewallTrafficRulesUnpublishedGeoExceptions | cdktf.IResolvable): any {
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

export class SiteFirewallTrafficRulesUnpublishedGeoExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteFirewallTrafficRulesUnpublishedGeoExceptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteFirewallTrafficRulesUnpublishedGeoExceptions | cdktf.IResolvable | undefined) {
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

export class SiteFirewallTrafficRulesUnpublishedGeoExceptionsList extends cdktf.ComplexList {
  public internalValue? : SiteFirewallTrafficRulesUnpublishedGeoExceptions[] | cdktf.IResolvable

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
  public get(index: number): SiteFirewallTrafficRulesUnpublishedGeoExceptionsOutputReference {
    return new SiteFirewallTrafficRulesUnpublishedGeoExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteFirewallTrafficRulesUnpublishedGeoRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#countries SiteFirewallTrafficRules#countries}
  */
  readonly countries: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#description SiteFirewallTrafficRules#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#subregions SiteFirewallTrafficRules#subregions}
  */
  readonly subregions?: string[];
}

export function siteFirewallTrafficRulesUnpublishedGeoRestrictionsToTerraform(struct?: SiteFirewallTrafficRulesUnpublishedGeoRestrictions | cdktf.IResolvable): any {
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


export function siteFirewallTrafficRulesUnpublishedGeoRestrictionsToHclTerraform(struct?: SiteFirewallTrafficRulesUnpublishedGeoRestrictions | cdktf.IResolvable): any {
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

export class SiteFirewallTrafficRulesUnpublishedGeoRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteFirewallTrafficRulesUnpublishedGeoRestrictions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteFirewallTrafficRulesUnpublishedGeoRestrictions | cdktf.IResolvable | undefined) {
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

export class SiteFirewallTrafficRulesUnpublishedGeoRestrictionsList extends cdktf.ComplexList {
  public internalValue? : SiteFirewallTrafficRulesUnpublishedGeoRestrictions[] | cdktf.IResolvable

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
  public get(index: number): SiteFirewallTrafficRulesUnpublishedGeoRestrictionsOutputReference {
    return new SiteFirewallTrafficRulesUnpublishedGeoRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteFirewallTrafficRulesUnpublishedIpExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#addresses SiteFirewallTrafficRules#addresses}
  */
  readonly addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#description SiteFirewallTrafficRules#description}
  */
  readonly description: string;
}

export function siteFirewallTrafficRulesUnpublishedIpExceptionsToTerraform(struct?: SiteFirewallTrafficRulesUnpublishedIpExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function siteFirewallTrafficRulesUnpublishedIpExceptionsToHclTerraform(struct?: SiteFirewallTrafficRulesUnpublishedIpExceptions | cdktf.IResolvable): any {
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

export class SiteFirewallTrafficRulesUnpublishedIpExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteFirewallTrafficRulesUnpublishedIpExceptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteFirewallTrafficRulesUnpublishedIpExceptions | cdktf.IResolvable | undefined) {
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

export class SiteFirewallTrafficRulesUnpublishedIpExceptionsList extends cdktf.ComplexList {
  public internalValue? : SiteFirewallTrafficRulesUnpublishedIpExceptions[] | cdktf.IResolvable

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
  public get(index: number): SiteFirewallTrafficRulesUnpublishedIpExceptionsOutputReference {
    return new SiteFirewallTrafficRulesUnpublishedIpExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteFirewallTrafficRulesUnpublishedIpRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#addresses SiteFirewallTrafficRules#addresses}
  */
  readonly addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#description SiteFirewallTrafficRules#description}
  */
  readonly description: string;
}

export function siteFirewallTrafficRulesUnpublishedIpRestrictionsToTerraform(struct?: SiteFirewallTrafficRulesUnpublishedIpRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function siteFirewallTrafficRulesUnpublishedIpRestrictionsToHclTerraform(struct?: SiteFirewallTrafficRulesUnpublishedIpRestrictions | cdktf.IResolvable): any {
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

export class SiteFirewallTrafficRulesUnpublishedIpRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteFirewallTrafficRulesUnpublishedIpRestrictions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteFirewallTrafficRulesUnpublishedIpRestrictions | cdktf.IResolvable | undefined) {
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

export class SiteFirewallTrafficRulesUnpublishedIpRestrictionsList extends cdktf.ComplexList {
  public internalValue? : SiteFirewallTrafficRulesUnpublishedIpRestrictions[] | cdktf.IResolvable

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
  public get(index: number): SiteFirewallTrafficRulesUnpublishedIpRestrictionsOutputReference {
    return new SiteFirewallTrafficRulesUnpublishedIpRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteFirewallTrafficRulesUnpublished {
  /**
  * One of allow or deny
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#default_action SiteFirewallTrafficRules#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#geo_exceptions SiteFirewallTrafficRules#geo_exceptions}
  */
  readonly geoExceptions?: SiteFirewallTrafficRulesUnpublishedGeoExceptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#geo_restrictions SiteFirewallTrafficRules#geo_restrictions}
  */
  readonly geoRestrictions?: SiteFirewallTrafficRulesUnpublishedGeoRestrictions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#ip_exceptions SiteFirewallTrafficRules#ip_exceptions}
  */
  readonly ipExceptions?: SiteFirewallTrafficRulesUnpublishedIpExceptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#ip_restrictions SiteFirewallTrafficRules#ip_restrictions}
  */
  readonly ipRestrictions?: SiteFirewallTrafficRulesUnpublishedIpRestrictions[] | cdktf.IResolvable;
}

export function siteFirewallTrafficRulesUnpublishedToTerraform(struct?: SiteFirewallTrafficRulesUnpublished | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    geo_exceptions: cdktf.listMapper(siteFirewallTrafficRulesUnpublishedGeoExceptionsToTerraform, false)(struct!.geoExceptions),
    geo_restrictions: cdktf.listMapper(siteFirewallTrafficRulesUnpublishedGeoRestrictionsToTerraform, false)(struct!.geoRestrictions),
    ip_exceptions: cdktf.listMapper(siteFirewallTrafficRulesUnpublishedIpExceptionsToTerraform, false)(struct!.ipExceptions),
    ip_restrictions: cdktf.listMapper(siteFirewallTrafficRulesUnpublishedIpRestrictionsToTerraform, false)(struct!.ipRestrictions),
  }
}


export function siteFirewallTrafficRulesUnpublishedToHclTerraform(struct?: SiteFirewallTrafficRulesUnpublished | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(siteFirewallTrafficRulesUnpublishedGeoExceptionsToHclTerraform, false)(struct!.geoExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "SiteFirewallTrafficRulesUnpublishedGeoExceptionsList",
    },
    geo_restrictions: {
      value: cdktf.listMapperHcl(siteFirewallTrafficRulesUnpublishedGeoRestrictionsToHclTerraform, false)(struct!.geoRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "SiteFirewallTrafficRulesUnpublishedGeoRestrictionsList",
    },
    ip_exceptions: {
      value: cdktf.listMapperHcl(siteFirewallTrafficRulesUnpublishedIpExceptionsToHclTerraform, false)(struct!.ipExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "SiteFirewallTrafficRulesUnpublishedIpExceptionsList",
    },
    ip_restrictions: {
      value: cdktf.listMapperHcl(siteFirewallTrafficRulesUnpublishedIpRestrictionsToHclTerraform, false)(struct!.ipRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "SiteFirewallTrafficRulesUnpublishedIpRestrictionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteFirewallTrafficRulesUnpublishedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteFirewallTrafficRulesUnpublished | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteFirewallTrafficRulesUnpublished | cdktf.IResolvable | undefined) {
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
  private _geoExceptions = new SiteFirewallTrafficRulesUnpublishedGeoExceptionsList(this, "geo_exceptions", false);
  public get geoExceptions() {
    return this._geoExceptions;
  }
  public putGeoExceptions(value: SiteFirewallTrafficRulesUnpublishedGeoExceptions[] | cdktf.IResolvable) {
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
  private _geoRestrictions = new SiteFirewallTrafficRulesUnpublishedGeoRestrictionsList(this, "geo_restrictions", false);
  public get geoRestrictions() {
    return this._geoRestrictions;
  }
  public putGeoRestrictions(value: SiteFirewallTrafficRulesUnpublishedGeoRestrictions[] | cdktf.IResolvable) {
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
  private _ipExceptions = new SiteFirewallTrafficRulesUnpublishedIpExceptionsList(this, "ip_exceptions", false);
  public get ipExceptions() {
    return this._ipExceptions;
  }
  public putIpExceptions(value: SiteFirewallTrafficRulesUnpublishedIpExceptions[] | cdktf.IResolvable) {
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
  private _ipRestrictions = new SiteFirewallTrafficRulesUnpublishedIpRestrictionsList(this, "ip_restrictions", false);
  public get ipRestrictions() {
    return this._ipRestrictions;
  }
  public putIpRestrictions(value: SiteFirewallTrafficRulesUnpublishedIpRestrictions[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules netlify_site_firewall_traffic_rules}
*/
export class SiteFirewallTrafficRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netlify_site_firewall_traffic_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteFirewallTrafficRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteFirewallTrafficRules to import
  * @param importFromId The id of the existing SiteFirewallTrafficRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteFirewallTrafficRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netlify_site_firewall_traffic_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_firewall_traffic_rules netlify_site_firewall_traffic_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteFirewallTrafficRulesConfig
  */
  public constructor(scope: Construct, id: string, config: SiteFirewallTrafficRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'netlify_site_firewall_traffic_rules',
      terraformGeneratorMetadata: {
        providerName: 'netlify',
        providerVersion: '0.4.0',
        providerVersionConstraint: '0.4.0'
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
    this._siteId = config.siteId;
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
  private _published = new SiteFirewallTrafficRulesPublishedOutputReference(this, "published");
  public get published() {
    return this._published;
  }
  public putPublished(value: SiteFirewallTrafficRulesPublished) {
    this._published.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published.internalValue;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }

  // unpublished - computed: false, optional: false, required: true
  private _unpublished = new SiteFirewallTrafficRulesUnpublishedOutputReference(this, "unpublished");
  public get unpublished() {
    return this._unpublished;
  }
  public putUnpublished(value: SiteFirewallTrafficRulesUnpublished) {
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
      published: siteFirewallTrafficRulesPublishedToTerraform(this._published.internalValue),
      site_id: cdktf.stringToTerraform(this._siteId),
      unpublished: siteFirewallTrafficRulesUnpublishedToTerraform(this._unpublished.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      published: {
        value: siteFirewallTrafficRulesPublishedToHclTerraform(this._published.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteFirewallTrafficRulesPublished",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unpublished: {
        value: siteFirewallTrafficRulesUnpublishedToHclTerraform(this._unpublished.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteFirewallTrafficRulesUnpublished",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
